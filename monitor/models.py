from django.db import models

# Create your models here.


class Ipdetail(models.Model):
    env_name = models.CharField(max_length=30)
    service_name = models.CharField(max_length=40)
    ip = models.CharField(max_length=60)
    user_name = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    error_status = models.IntegerField()
    success_status = models.IntegerField()
