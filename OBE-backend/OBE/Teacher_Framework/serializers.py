from rest_framework import serializers
from Teacher_Framework.models import FileUpload


class FileUploadSerializer(serializers.ModelSerializer):

    class Meta:
        model = FileUpload
        fields = ('created', 'datafile', 'owner')
