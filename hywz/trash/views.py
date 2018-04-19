from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Trash
from .serializers import TrashSerializer
from vision.Vision import call_vision as lookat
from base64 import b64decode as decode

class TrashView(APIView):

    def post(self,request,format=None):
        #create trash object here
        #Trash.objects.create(image=request.FILES['image'])

        '''serializer=TrashSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)'''
        return Response(str(lookat(request.FILES['image'].read())))
    
    def get(self,request,format=None):
    	return Response('get')