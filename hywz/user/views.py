from django.shortcuts import render
from rest_framework.views import APIView


# Create your views here.
class UserView(APIView):
	
	def post(self,request,format=None):
		pass
		#JOSH PUT YOUR CODE HERE
		#THE INFORMATION IS IN request.data
		#should either be a json str or just a dict im not sure yet.
		#we need an email first and last name username and password
		