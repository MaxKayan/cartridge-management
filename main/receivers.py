from django.dispatch import receiver
from django_mailbox.signals import message_received

from main.models import Order


# @receiver(post_save, sender=Supply)
# def backup_db_to_json(sender, instance, created, **kwargs):
#     # call_command("backup", "all")
#     print("backup_db_to_json called")
#     pprint(instance.__dict__, indent=2)


def request_id_is_valid(id_string):
    return len(id_string) == 4 and id_string.isnumeric()


@receiver(message_received)
def mail_received(sender, message, **kwargs):
    print(f"I just received a message titled {message.subject} from a mailbox named {message.mailbox.name}")
    # pprint(message.__dict__, indent=2)

    if message.in_reply_to_id:
        print("Trying to get the order")
        try:
            order = Order.objects.get(email__pk=message.in_reply_to_id)
            if "заявка принята" in message.text:
                # subject_id = text_id = None
                # Try to get request id from email subject:
                subject_id_string = message.subject.split()[-1]
                if len(subject_id_string) == 4 and subject_id_string.isnumeric():
                    subject_id = int(subject_id_string)

                # Try to get request id from email text:
                num_index = message.text.find('№')
                if num_index != -1:
                    id_string = message.text[num_index + 1: num_index + 5]
                    if len(subject_id_string) == 4 and subject_id_string.isnumeric():
                        request_id = int(id_string)
                # print(f'{is_accepted=}\n{request_id=}\n{id_string=}\n{num_index=}\n{sub=}')
            # order.to_work()
        except Order.DoesNotExist as exception:
            print(f'There is no order with email pk being set to {message.in_reply_to_id}',
                  exception, sep='\n')

        # -- OR --
        # target_msg = Message.objects.get(pk=message.in_reply_to_id)
        # if target_msg.order:
        #     order = target_msg.order
        #     pprint(order.__dict__)
