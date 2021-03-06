from datetime import datetime
from email.utils import make_msgid

from django.conf import settings
from django.core.mail import EmailMultiAlternatives
from django.db import models
from django.template.loader import render_to_string
from django.utils import timezone
from django.utils.dateformat import format
from django.utils.html import strip_tags
from django_mailbox.models import Mailbox
from django_mailbox.models import Message

from main import choices


class BackupableModel(models.Model):
    """
    Abstract model.
    Introduces 'restoring' boolean object-only field that is needed to skip various actions on model's 'save()' method.
    """
    restoring = False

    def __init__(self, *args, **kwargs):
        restoring = kwargs.pop('restoring', False)
        self.restoring = restoring
        super().__init__(*args, **kwargs)

    class Meta:
        abstract = True


class EmailRequestModel(BackupableModel):
    """
    Abstract model. Used to create a certain order type. (I.e cartridges, printer etc.)
    It is tied with it's outgoing email message to manager, has 'html_message' property field with email body
    and 'send_to_manager' method that would send the email.
    """
    status = models.CharField(max_length=10, choices=choices.ORDER_STATUS, default="creating",
                              verbose_name="Статус")
    date = models.DateTimeField(default=timezone.now, blank=True, verbose_name="Дата создания")
    destination = models.CharField(max_length=100, blank=True,
                                   default="2 подъезд от КПП (АБЧ 2), Этаж 2, Серверная")
    edited_at = models.DateTimeField(auto_now=True, verbose_name="Дата редактирования")
    date_finished = models.DateTimeField(blank=True, null=True, verbose_name="Дата выполнения")
    number = models.PositiveIntegerField(default=0, blank=True, verbose_name="Номер заявки")
    finished = models.BooleanField(default=False, verbose_name="Выполнен")
    email = models.OneToOneField(Message, on_delete=models.SET_NULL, related_name="%(class)s", null=True, blank=True)

    @property
    def html_message(self):
        return render_to_string('OutlookOrder.html', {'order': self})

    def get_email_subject(self):
        return None

    class Meta:
        abstract = True
        ordering = ['-date']

    def send_to_manager(self, address_list):
        """
        Makes the email message from html template, sends it to specified addresses, records the message to
        django-mailbox.
        :param address_list: list of email addresses as strings.
        :type address_list: list
        """
        html_message = self.html_message
        plain_message = strip_tags(html_message)
        email = EmailMultiAlternatives(
            self.get_email_subject(),
            plain_message,
            settings.DEFAULT_FROM_EMAIL,
            address_list,
        )
        email.attach_alternative(html_message, "text/html")
        email.encoding = "UTF-8"
        email.extra_headers['Message-ID'] = make_msgid()
        email.send()
        if self.status == "creating":
            self.status = "pending"

        mailbox = Mailbox.objects.get(name="oks-dellin")
        self.email = mailbox.record_outgoing_message(email.message())
        self.save()

    def to_work(self, request_num: int):
        """
        If current status is "pending", sets order's status to "work", sets external request number.
        Usually called upon manager's answer about order acceptation.
        :param request_num: external request id from manager's database.
        """
        if self.status == "pending":
            self.status = "work"
            self.number = request_num
            self.save()
            print(f"Successfully moved order {self} to work.")

    def finish(self):
        """Processes order to finished state."""
        self.finished = True
        self.status = "finished"
        self.date_finished = datetime.now()

    def roll_back(self):
        """Processes order from finished state to work state."""
        self.finished = False
        self.status = "work"
        self.date_finished = None

    def delete(self, using=None, keep_parents=False):
        self.roll_back()
        return super().delete(using, keep_parents)


# -------------------------------------------------------------------------------------------------------------------- #


class Cartridge(BackupableModel):
    """
    Cartridge (toner) for the printers.
    """
    manufacturer = models.CharField(max_length=30, choices=choices.MANUFACTURER_CHOICES, default="HP",
                                    verbose_name="Производитель")
    name = models.CharField(max_length=30, unique=True, primary_key=True, verbose_name="Название картриджа",
                            help_text="Наименование картриджа должно быть уникальным",
                            db_column="cartridge_name")
    count = models.PositiveIntegerField(verbose_name="Количество")

    def __str__(self):
        return f'{self.manufacturer} {self.name}'

    class Meta:
        ordering = ['manufacturer', 'name']
        verbose_name = "Картридж"
        verbose_name_plural = "Картриджи"


class Supply(BackupableModel):
    """
    Cartridge transfer, either outgoing (to customer), or incoming (to stock from order), specified by the 'out' boolean
    field. \n
    Automatically corrects the 'count' field of Cartridge based on transfer direction, count and previous values if it
    was updated. \n
    If cartridge count would end up negative during the save procedure, an exception would be raised and instance would
    not be saved.
    """
    out = models.BooleanField(choices=choices.SUPPLY_TYPE_BOOLEAN, default=True, verbose_name="Тип передвижения")
    cartridge = models.ForeignKey(Cartridge, related_name="supplies", on_delete=models.CASCADE,
                                  verbose_name="Тип картриджа")
    date = models.DateTimeField(default=timezone.now, blank=True)
    edited_at = models.DateTimeField(auto_now=True)
    count = models.PositiveIntegerField(verbose_name="Количество")
    comment = models.TextField(max_length=200, verbose_name="Комментарий", blank=True)

    def __str__(self):
        return f"{format(self.date, settings.DATETIME_FORMAT)} {self.get_out_display()} {self.cartridge}"

    class Meta:
        ordering = ['-date']
        verbose_name = "Перемещение картриджей"
        verbose_name_plural = "Перемещения картриджей"

    def update_cartridge_count(self, value):
        """
        Pre-save method. Makes necessary changes to the count of cartridges.
        :param value: Difference on count in supply compared to previous count.
        :type value: int
        """
        print(f"Updating cartridge count: {self.cartridge} {value=} ; {self.out=} ; {self.cartridge.count=}")
        if value != 0 and value is not None:
            if self.out:
                self.cartridge.count -= value
            else:
                self.cartridge.count += value

            print(f"{self.cartridge} new count is {self.cartridge.count}")
            self.cartridge.save()

    def delete(self, using=None, keep_parents=False):
        self.update_cartridge_count(self.count * -1)
        return super().delete(using, keep_parents)


class Order(EmailRequestModel):
    """
    Order to cartridges provider, used to fulfill the cartridges stock when needed.

    """
    cartridge = models.ForeignKey(Cartridge, related_name="orders", on_delete=models.CASCADE, verbose_name="Картридж")
    take_old_away = models.BooleanField(default=False, verbose_name="Забрать израсходованные картриджи")
    supply = models.OneToOneField(Supply, related_name="order", on_delete=models.CASCADE, blank=True, null=True,
                                  verbose_name="Перемещение")
    count = models.PositiveIntegerField(verbose_name="Количество")

    def __str__(self):
        return (
            f"{format(self.date, settings.DATETIME_FORMAT)} {self.get_status_display()} {self.cartridge} {self.count}"
        )

    def get_email_subject(self):
        return f'Картриджи {self.cartridge}, ООО "Деловые Линии"'

    def finish(self):
        super().finish()
        self.supply = Supply.objects.create(out=False, cartridge=self.cartridge, count=self.count,
                                            comment=f"По заказу №{self.pk} от {format(self.date, 'd E Y')}")

    def roll_back(self):
        super().roll_back()
        if self.supply:
            self.supply.delete()
            self.supply = None

    class Meta(EmailRequestModel.Meta):
        verbose_name = "Заказ картриджей"
        verbose_name_plural = "Заказы картриджей"


class Service(EmailRequestModel):
    printer = models.CharField(max_length=100, choices=choices.PRINTERS, verbose_name="Принтер")
    inv_number = models.CharField(max_length=100, blank=True, verbose_name="Инвентарный номер")
    defect_description = models.TextField(default="", blank=False, verbose_name="Причина неисправности")
    image_barcode = models.ImageField(verbose_name="Фото штрих кода", blank=True)

    def get_email_subject(self):
        return f'Неисправность принтера {self.printer}, ООО "Деловые Линии"'

    class Meta(EmailRequestModel.Meta):
        verbose_name = "Заявка на ремонт"
        verbose_name_plural = "Заявки на ремонт"


class Equipment(BackupableModel):
    created_at = models.DateTimeField(auto_now_add=True)
    edited_at = models.DateTimeField(auto_now=True)

    inv_number = models.CharField(verbose_name="Инвентарный №", primary_key=True, max_length=30)
    name = models.CharField(verbose_name="Наименование", max_length=100)
    type = models.CharField(verbose_name="Тип ОС", max_length=70)
    group = models.CharField(verbose_name="Группа ОС", max_length=70)
    model = models.CharField(verbose_name="Марка & Модель", max_length=70, blank=True)
    serial_number = models.CharField(verbose_name="Серийный номер", max_length=100, blank=True)
    registration_date = models.CharField(verbose_name="Дата постановки на учет", max_length=20)
    location_department = models.CharField(verbose_name="Отдел местоположения", max_length=100)
    responsible_employee = models.CharField(verbose_name="Ответственный", max_length=100)
    initial_price = models.FloatField(verbose_name="Первоначальная стоимость с НДС", default=0, blank=True)
    residual_price = models.FloatField(verbose_name="Остаточная стоимость с НДС", default=0, blank=True)
    useful_life = models.PositiveIntegerField(verbose_name="Срок пол. использования", default=0, blank=True)

    def __str__(self):
        return self.inv_number

    class Meta:
        ordering = ['inv_number']
        verbose_name = "Оборудование"
        verbose_name_plural = "Оборудование"
