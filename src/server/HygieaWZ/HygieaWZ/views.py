from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Trash
from .serializers import TrashSerializer


class TrashView(APIView):

    def post(self,request):
        f=open(r'C:\test.jpeg','w+')
        f.write(str(request.data))
        serializer=TrashSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
