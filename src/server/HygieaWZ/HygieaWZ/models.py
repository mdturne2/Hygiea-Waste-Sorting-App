from django.db import models

class Trash(models.Model):
	TRASH_TYPES=(('R','Recycle'),('C','Compost'))
	image_file=models.CharField(max_length=500)
	trash_type=models.CharField(max_length=1,choices=TRASH_TYPES)
	
	