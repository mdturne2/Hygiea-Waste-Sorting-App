from .models import Trash
from rest_framework import serializers


class TrashSerializer(serializers.Serializer):
    class Meta:
        model = Trash
        fields = 'trash_type'
