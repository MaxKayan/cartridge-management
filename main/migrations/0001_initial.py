# Generated by Django 3.1.6 on 2021-02-11 20:01

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('django_mailbox', '0008_auto_20190219_1553'),
    ]

    operations = [
        migrations.CreateModel(
            name='Cartridge',
            fields=[
                ('manufacturer', models.CharField(choices=[('HP', 'HP'), ('Kyocera', 'Kyocera'), ('Samsung', 'Samsung')], default='HP', max_length=30, verbose_name='Производитель')),
                ('name', models.CharField(db_column='cartridge_name', help_text='Наименование картриджа должно быть уникальным', max_length=30, primary_key=True, serialize=False, unique=True, verbose_name='Название картриджа')),
                ('count', models.PositiveIntegerField(verbose_name='Количество')),
            ],
            options={
                'verbose_name': 'Картридж',
                'verbose_name_plural': 'Картриджи',
                'ordering': ['manufacturer', 'name'],
            },
        ),
        migrations.CreateModel(
            name='Equipment',
            fields=[
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('edited_at', models.DateTimeField(auto_now=True)),
                ('inv_number', models.CharField(max_length=30, primary_key=True, serialize=False, verbose_name='Инвентарный №')),
                ('name', models.CharField(max_length=100, verbose_name='Наименование')),
                ('type', models.CharField(max_length=70, verbose_name='Тип ОС')),
                ('group', models.CharField(max_length=70, verbose_name='Группа ОС')),
                ('model', models.CharField(blank=True, max_length=70, verbose_name='Марка & Модель')),
                ('serial_number', models.CharField(blank=True, max_length=100, verbose_name='Серийный номер')),
                ('registration_date', models.CharField(max_length=20, verbose_name='Дата постановки на учет')),
                ('location_department', models.CharField(max_length=100, verbose_name='Отдел местоположения')),
                ('responsible_employee', models.CharField(max_length=100, verbose_name='Ответственный')),
                ('initial_price', models.FloatField(blank=True, default=0, verbose_name='Первоначальная стоимость с НДС')),
                ('residual_price', models.FloatField(blank=True, default=0, verbose_name='Остаточная стоимость с НДС')),
                ('useful_life', models.PositiveIntegerField(blank=True, default=0, verbose_name='Срок пол. использования')),
            ],
            options={
                'verbose_name': 'Оборудование',
                'verbose_name_plural': 'Оборудование',
                'ordering': ['inv_number'],
            },
        ),
        migrations.CreateModel(
            name='Supply',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('out', models.BooleanField(choices=[(True, 'Выдача'), (False, 'Поступление')], default=True, verbose_name='Тип передвижения')),
                ('date', models.DateTimeField(blank=True, default=django.utils.timezone.now)),
                ('edited_at', models.DateTimeField(auto_now=True)),
                ('count', models.PositiveIntegerField(verbose_name='Количество')),
                ('comment', models.TextField(blank=True, max_length=200, verbose_name='Комментарий')),
                ('cartridge', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='supplies', to='main.cartridge', verbose_name='Тип картриджа')),
            ],
            options={
                'verbose_name': 'Перемещение картриджей',
                'verbose_name_plural': 'Перемещения картриджей',
                'ordering': ['-date'],
            },
        ),
        migrations.CreateModel(
            name='Service',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('status', models.CharField(choices=[('creating', 'Ожидает Отправки'), ('pending', 'Обработка менеджером'), ('work', 'В работе'), ('finished', 'Завершён')], default='creating', max_length=10, verbose_name='Статус')),
                ('date', models.DateTimeField(blank=True, default=django.utils.timezone.now, verbose_name='Дата создания')),
                ('destination', models.CharField(blank=True, default='2 подъезд от КПП (АБЧ 2), Этаж 2, Серверная', max_length=100)),
                ('edited_at', models.DateTimeField(auto_now=True, verbose_name='Дата редактирования')),
                ('date_finished', models.DateTimeField(blank=True, null=True, verbose_name='Дата выполнения')),
                ('number', models.PositiveIntegerField(blank=True, default=0, verbose_name='Номер заявки')),
                ('finished', models.BooleanField(default=False, verbose_name='Выполнен')),
                ('printer', models.CharField(choices=[('HP LaserJet Pro MFP M227fdn', 'HP LaserJet Pro MFP M227fdn'), ('HP LaserJet Pro M402dne', 'HP LaserJet Pro M402dne'), ('HP LaserJet Pro MFP M426fdn', 'HP LaserJet Pro MFP M426fdn'), ('Kyocera FS-1030MFP', 'Kyocera FS-1030MFP'), ('Kyocera FS-1035MFP', 'Kyocera FS-1035MFP')], max_length=100, verbose_name='Принтер')),
                ('inv_number', models.CharField(blank=True, max_length=100, verbose_name='Инвентарный номер')),
                ('defect_description', models.TextField(default='', verbose_name='Причина неисправности')),
                ('image_barcode', models.ImageField(blank=True, upload_to='', verbose_name='Фото штрих кода')),
                ('email', models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='service', to='django_mailbox.message')),
            ],
            options={
                'verbose_name': 'Заявка на ремонт',
                'verbose_name_plural': 'Заявки на ремонт',
                'ordering': ['-date'],
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('status', models.CharField(choices=[('creating', 'Ожидает Отправки'), ('pending', 'Обработка менеджером'), ('work', 'В работе'), ('finished', 'Завершён')], default='creating', max_length=10, verbose_name='Статус')),
                ('date', models.DateTimeField(blank=True, default=django.utils.timezone.now, verbose_name='Дата создания')),
                ('destination', models.CharField(blank=True, default='2 подъезд от КПП (АБЧ 2), Этаж 2, Серверная', max_length=100)),
                ('edited_at', models.DateTimeField(auto_now=True, verbose_name='Дата редактирования')),
                ('date_finished', models.DateTimeField(blank=True, null=True, verbose_name='Дата выполнения')),
                ('number', models.PositiveIntegerField(blank=True, default=0, verbose_name='Номер заявки')),
                ('finished', models.BooleanField(default=False, verbose_name='Выполнен')),
                ('take_old_away', models.BooleanField(default=False, verbose_name='Забрать израсходованные картриджи')),
                ('count', models.PositiveIntegerField(verbose_name='Количество')),
                ('cartridge', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='orders', to='main.cartridge', verbose_name='Картридж')),
                ('email', models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='order', to='django_mailbox.message')),
                ('supply', models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='order', to='main.supply', verbose_name='Перемещение')),
            ],
            options={
                'verbose_name': 'Заказ картриджей',
                'verbose_name_plural': 'Заказы картриджей',
                'ordering': ['-date'],
                'abstract': False,
            },
        ),
    ]
