# Generated by Django 4.1 on 2022-08-26 17:49

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_remove_user_nome_user_name'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='name',
        ),
    ]
