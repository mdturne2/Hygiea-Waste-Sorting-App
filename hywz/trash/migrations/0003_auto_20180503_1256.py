# Generated by Django 2.0.3 on 2018-05-03 19:56

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('trash', '0002_auto_20180503_1143'),
    ]

    operations = [
        migrations.AlterField(
            model_name='trash',
            name='created_at',
            field=models.DateTimeField(default=datetime.datetime(2018, 5, 3, 12, 56, 37, 537608)),
        ),
    ]