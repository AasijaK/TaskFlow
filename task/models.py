from django.db import models

# Create your models here.
class LoginCreds(models.Model):
    emailaddr = models.EmailField(max_length=155)
    password = models.CharField(max_length=30)

class RegiCreds(models.Model):
    Full_name = models.CharField(max_length=155)
    email = models.EmailField(max_length=155)
    password1 = models.CharField(max_length=30)
    password2 = models.CharField(max_length=30)