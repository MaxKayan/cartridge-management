# Generated by Django 3.0.6 on 2020-05-15 06:30

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0004_auto_20200515_0928'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='date_finished',
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='order',
            name='supply',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='order', to='main.Supply'),
        ),
    ]