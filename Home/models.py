from distutils.command.upload import upload
from email.policy import default
from unicodedata import category
from django.db import models

# Create your models here.
class Product(models.Model):
    product_id=models.AutoField
    product_name=models.CharField(max_length=25,default="")
    descp=models.CharField(max_length=100,default="")
    image=models.URLField(max_length=200,default='')
    price=models.IntegerField(default=0)
    category=models.CharField(max_length=20,default="")

class Contact(models.Model):
    msg_id=models.AutoField(primary_key=True)
    name=models.CharField(max_length=25,default='')
    email=models.CharField(max_length=50,default='')
    msg=models.CharField(max_length=200,default='')

    def __str__(self):
        return self.name

class Order(models.Model):
    order_id=models.AutoField(primary_key=True)
    items_json=models.CharField(max_length=5000,default='')
    name=models.CharField(max_length=50,default='')
    email=models.CharField(max_length=60,default='')
    address=models.CharField(max_length=100,default='')
    city=models.CharField(max_length=40,default='')
    state=models.CharField(max_length=40,default='')
    Zip_code=models.IntegerField(default=0)

    def __str__(self):
        return self.name