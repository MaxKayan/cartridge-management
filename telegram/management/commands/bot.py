import asyncio
import logging
from typing import Tuple

import PIL
from PIL import Image
from aiogram import Bot, Dispatcher, executor, types
from aiogram.types import ContentType, ParseMode
from aiogram.types import ReplyKeyboardMarkup, KeyboardButton, \
    InlineKeyboardMarkup, InlineKeyboardButton
from asgiref.sync import sync_to_async
from django.conf import settings
from django.core.management import BaseCommand
from django.utils.dateformat import format
from pyzbar.pyzbar import decode

from account.models import Account

from main.models import Equipment
from telegram.models import EquipMovement, AdditionalPhoto


def get_inv_number(image: PIL.Image) -> Tuple[bool, str]:
    inv_number = decode(image)
    if not inv_number:
        return False, "Штрих код не распознан"
    else:
        inv_number = inv_number[0].data.decode("utf-8")
        if inv_number[0:3] == "296":
            inv_number = "ОС" + inv_number.split("296")[1]
            return True, inv_number
        if inv_number[0:3] == "600":
            inv_number = "ДТ" + inv_number.split("600")[1]
            return True, inv_number
        return False, f"{inv_number} не является инвентарным номером"


bot_help_description = "Привет, че забыл команды?\n\nНапоминаю вызвать их \nможно через . или /" + \
                       "\n\n.d .del .delete - удаляет фото с комментарием из базы и чата"

button_delete = KeyboardButton('.delete')

greet_kb = ReplyKeyboardMarkup()
greet_kb.add(button_delete)

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

loop = asyncio.get_event_loop()

bot = Bot(
    token=settings.TELEGRAM_BOT_TOKEN,
    loop=loop
)

dp = Dispatcher(bot=bot)
bot_answer_delete = {}
bot_answer = {}
old_bot_message = []
user_photos = {}
bot_answer_phone_number = {}


async def add_more_photo():
    while True:
        if len(old_bot_message) > 1:
            message = old_bot_message.pop(0)
            await bot.delete_message(message.chat.id, message.message_id)

        for chat_id in user_photos.keys():
            print(chat_id)
            for message_id, messages in user_photos[chat_id].items():
                print(message_id)
                movement = await sync_to_async(EquipMovement.objects.get)(message_id=message_id)
                for message in messages:
                    image_id, image_path = await get_image(message)
                    await download_image(image_id, image_path)
                    await sync_to_async(AdditionalPhoto.objects.create)(movement=movement, image=image_path,
                                                                        message_id=message.message_id,
                                                                        chat_id=message.chat.id)
                answer = await bot.send_message(chat_id, "Фотки добавлены")
                bot_answer[chat_id] = {message_id: answer.message_id}
        user_photos.clear()

        await asyncio.sleep(5)


@dp.message_handler(lambda message: False if message.chat.id else True, commands='start')
async def get_phone_number(message):
    markup_request = ReplyKeyboardMarkup(resize_keyboard=True).add(
        KeyboardButton('Отправить свой контакт ☎️', request_contact=True))
    answer = await message.reply("Для пользования ботом необходим номер телефона",
                                 reply_markup=markup_request)
    bot_answer_phone_number[message.from_user.id] = answer.message_id


@dp.message_handler(content_types=ContentType.CONTACT)
async def is_user_valid(message):
    if message.contact.user_id in bot_answer_phone_number:
        try:
            user = await sync_to_async(Account.objects.get)(phone_number="+" + str(message.contact.phone_number))
            user.telegram_user_id = message.contact.user_id
            await sync_to_async(user.save)()
        except Account.DoesNotExist:
            print("какашка")
        bot_answer_phone_number.clear()


@dp.message_handler(commands=["delete", "del", "d"], commands_prefix=[".", "/"])
async def confirm_delete(message):
    if message.reply_to_message:
        inline_kb_full = InlineKeyboardMarkup(row_width=2)
        inline_btn_del = InlineKeyboardButton('Удалить',
                                              callback_data=f'delete*{message.message_id}*{message.reply_to_message.message_id}')
        inline_btn_cancel = InlineKeyboardButton('Отмена', callback_data=f'cancel*{message.message_id}')
        inline_kb_full.add(inline_btn_del, inline_btn_cancel)
        answer = await message.reply(text="Удаляем к хуям?", reply_markup=inline_kb_full)
        bot_answer_delete[str(message.message_id)] = answer.message_id
    else:
        answer = await message.reply(
            text="Вызывать .del можно только в ответ на сообщение с фотографией, тупой что ли?")
        await bot.delete_message(message.chat.id, message.message_id)
        old_bot_message.append(answer)


@dp.callback_query_handler()
async def remove_photo(callback_query: types.CallbackQuery, **kwargs):
    code = callback_query.data.split('*')
    if code[0] == 'delete':
        try:
            movement = await sync_to_async(EquipMovement.objects.get)(message_id=int(code[2]))
            await bot.delete_message(callback_query.message.chat.id, movement.bot_answer_message_id)
            await bot.delete_message(callback_query.message.chat.id, movement.message_id)
            photos = await sync_to_async(list)(movement.photos.values())
            for photo in photos:
                await bot.delete_message(photo['chat_id'], photo['message_id'])
            answer = bot_answer[movement.chat_id][movement.message_id]
            await bot.delete_message(movement.chat_id, answer)
            bot_answer[movement.chat_id].pop(movement.message_id)
            await sync_to_async(movement.delete)()
            await bot.answer_callback_query(callback_query.id, text="Сделано, не благодари =)")
        except EquipMovement.DoesNotExist:
            await bot.answer_callback_query(callback_query.id, text="Не нашел в базе! Поэтому не удалю!")
    else:
        await bot.answer_callback_query(callback_query.id, text="Ну как хочешь =(")

    await bot.delete_message(callback_query.message.chat.id, code[1])
    await bot.delete_message(callback_query.message.chat.id, bot_answer_delete[code[1]])
    bot_answer_delete.pop(code[1])


@dp.message_handler(lambda message: message.text.lower() == "help")
@dp.message_handler(commands=["Help", "?", "h"], commands_prefix=[".", "/"])
async def send_help_message(message: types.Message):
    await message.reply(text=bot_help_description)


@dp.message_handler(content_types=ContentType.PHOTO)
async def handle_photo(message):
    if message.caption and not message.reply_to_message:
        image_id, image_path = await get_image(message)
        await download_image(image_id, image_path)
        img = Image.open(image_path)
        bool_bar, barcode = get_inv_number(img)
        if bool_bar:
            answer = await bot.send_message(message.chat.id,
                                            f"Ваш ID {message.from_user.id}\nХуйня со штрихкодом {barcode} сохранена как {message.message_id}.")
            await sync_to_async(EquipMovement.objects.create)(telegram_user_id=message.from_user.id,
                                                              inv_number=barcode, comment=message.caption,
                                                              inv_image=image_path,
                                                              message_id=message.message_id,
                                                              bot_answer_message_id=answer.message_id,
                                                              chat_id=message.chat.id)

        else:
            await bot.send_message(message.chat.id, barcode)

    elif message.reply_to_message and message.reply_to_message.caption:
        if message.chat.id in user_photos:
            if message.reply_to_message.message_id in user_photos[message.chat.id]:
                user_photos[message.chat.id][message.reply_to_message.message_id].append(message)
            else:
                user_photos[message.chat.id][message.reply_to_message.message_id] = [message]
        else:
            user_photos[message.chat.id] = {message.reply_to_message.message_id: [message]}
        print(user_photos)

    else:
        image_id, image_path = await get_image(message)
        await download_image(image_id, image_path)
        img = Image.open(image_path)
        bool_bar, barcode = get_inv_number(img)
        if bool_bar:
            try:
                data = await sync_to_async(Equipment.objects.get)(inv_number=barcode)
                print(get_detail_message(data))
                await bot.send_message(message.chat.id, get_detail_message(data), parse_mode=ParseMode.MARKDOWN)
            except Equipment.DoesNotExist:
                await message.reply(f"Оборудование с ОС {barcode} не найдено!")
        else:
            await message.reply(barcode)


def get_detail_message(obj: Equipment) -> str:
    """
    Converts Equipment instance to a multi-line representation (detail) string.
    :param obj: Equipment instance to get values from
    :return: Multi-line string with Markdown formatting
    """
    return f"""_Информация от {format(obj.created_at, "d E Y")}:_
*{Equipment._meta.get_field("inv_number").verbose_name} :* `{obj.inv_number}`
*{Equipment._meta.get_field("type").verbose_name} :* `{obj.type}`
*{Equipment._meta.get_field("group").verbose_name} :* `{obj.group}`
*{Equipment._meta.get_field("model").verbose_name} :* `{obj.model}`
*{Equipment._meta.get_field("serial_number").verbose_name} :* `{obj.serial_number}`
*{Equipment._meta.get_field("registration_date").verbose_name} :* `{obj.registration_date}`
*{Equipment._meta.get_field("location_department").verbose_name} :* `{obj.location_department}`
*{Equipment._meta.get_field("responsible_employee").verbose_name} :* `{obj.responsible_employee}`
*{Equipment._meta.get_field("initial_price").verbose_name} :* `{obj.initial_price}`
*{Equipment._meta.get_field("residual_price").verbose_name} :* `{obj.residual_price}`
*{Equipment._meta.get_field("useful_life").verbose_name} :* `{obj.useful_life}`
"""


async def get_image(message):
    image_id = await bot.get_file(message.photo[-1].file_id)
    image_path = f"telegram/media/{image_id.file_unique_id}.jpg"
    return image_id, image_path


async def download_image(image_id, path):
    await bot.download_file(image_id['file_path'], path)


@dp.message_handler()
async def collect_message(message):
    text = 'Не спамить! Какашка 😜' + '\nВсе сообщения только по делу!'
    answer = await message.reply(text=text, parse_mode=ParseMode.MARKDOWN)
    old_bot_message.append(answer)

    await bot.delete_message(message.chat.id, message.message_id)


class Command(BaseCommand):

    def handle(self, *args, **options):
        asyncio.ensure_future(add_more_photo(), loop=loop)
        executor.start_polling(dispatcher=dp)
