from django.db import models
from datetime import datetime as dt

from rest_framework import serializers,response

# Create your models here.
class Trash(models.Model):
	TRASH_TYPES=(('R','Recycle'),('C','Compost'))
	trash_type=models.CharField(max_length=1,choices=TRASH_TYPES,blank=True,null=True)
	created_at=models.DateTimeField(default=dt.now())
	image_file=models.CharField(max_length=500,default=str(created_at))
	