from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import UserSerializer
from rest_framework.response import Response
import json
from rest_framework import status



from django.contrib.auth.models import User



# Create your views here.
class CreateUser(APIView):
	
	def post(self,request,format='json'):
		serializer=UserSerializer(data=request.data)
		if serializer.is_valid():
			user=serializer.save()
			if user:
				return Response(serializer.data,status=status.HTTP_201_CREATED,headers={'authToken':Token.objects.get_or_create(user=user)})
			else:
				return Response("serializer is valid but user is None error",status=500)
		else:
			return Response(serializer.errors,status=500)

class MaintainUsers(APIView):

	def get(self,request,format=None):
		return Response('get')

	def delete(self,request,format=None):
		return Response("delete")

	def put(self,request,format=None):
		return Response("put")

class Login(APIView):
	def post(self,request,format=None):
		for user in User.objects.all():
			if str(user.username) == str(request.data['username']):
				if str(user.password) == str(request.data['password']):
					return Response("logged in",status=200,headers={"loggedIn":True})
		
		users=[user.password for user in User.objects.all()]
		return Response(users,status=401)


	