from django.test import TestCase
from trash.models import Trash
import requests
# Create your tests here.
class TrashTest(TestCase):
	def test_jpeg(self):
		files={'file':open(r'C:\Users\Alec\Pictures\ASU\hywz\plastic','rb')}
		r=requests.post('http:127.0.0.1:8000/trash/',files=files)
		print(r)
