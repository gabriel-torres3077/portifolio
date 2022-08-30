from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.
class User(AbstractUser):
    email = models.EmailField(null=True, default="")
    password = models.CharField(max_length=128, null=True)
    created_at = models.DateTimeField(auto_now_add=True, null=True)
    last_login = models.DateTimeField(null=True)
    whatsapp=models.CharField(max_length=20, null=True)
