from rest_framework.parsers import FormParser, MultiPartParser
from rest_framework.viewsets import ModelViewSet
from Teacher_Framework.models import FileUpload
from Teacher_Framework.serializers import FileUploadSerializer
from rest_framework import viewsets, permissions, generics
from Accounts.permissions import IsTeacherUser


class FileUploadViewSet(ModelViewSet):

    queryset = FileUpload.objects.all()
    serializer_class = FileUploadSerializer
    parser_classes = (MultiPartParser, FormParser,)

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user,
                        datafile=self.request.data.get('datafile'))

    def get_permissions(self):
        permission_classes = []
        if self.action == 'create':
            permission_classes = [IsTeacherUser]
        elif self.action == 'retrieve' or self.action == 'update' or self.action == 'partial_update':
            permission_classes = [IsTeacherUser]
        elif self.action == 'list' or self.action == 'destroy':
            permission_classes = [IsTeacherUser]
        return [permission() for permission in permission_classes]
