from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Trash
from .serializers import TrashSerializer
from vision.Vision import call_vision as lookat
from base64 import b64decode as decode
from datetime import datetime as dt

def save_file_and_get_path(img_bin):
        file_path=str('test.jpeg')
        new_img_file = open(file_path,'wb')
        new_img_file.write(img_bin)
        return file_path

class TrashView(APIView):

    def post(self,request,format=None):
        try:
            #read in image binary, save the file, send to gcv, create trash object
            img_bin=request.FILES['image'].read()
            response=str(lookat(img_bin))
            
            file_path=save_file_and_get_path(img_bin)
            ttype= 'R' if response == 'recycle' else 'C'
            creation_time = dt.now()

            new_trash=Trash.objects.create(image_file=file_path,trash_type=ttype,created_at=creation_time)
            new_trash.save()

            return Response(response,status=201,headers={'resURI':'trash/'+str(new_trash.id)})
        except AttributeError:
            return Response(response,status=400)
        '''serializer=TrashSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)'''
        
    
    def get(self,request,format=None):
        return Response('get')

    