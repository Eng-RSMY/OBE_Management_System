from Accounts.serializers import TeacherRegisterSerializer, StudentRegisterSerializer
from rest_framework import viewsets, permissions, generics
from Accounts.permissions import IsDepartmentHeadUser
from Accounts.models import User
# Teacher Account View Set


class TeacherViewSet(viewsets.ModelViewSet):
    queryset = User.objects.filter(is_teacher=True)
    serializer_class = TeacherRegisterSerializer

    def get_permissions(self):
        permission_classes = []
        if self.action == 'create':
            permission_classes = [IsDepartmentHeadUser]
        elif self.action == 'retrieve' or self.action == 'update' or self.action == 'partial_update':
            permission_classes = [IsDepartmentHeadUser]
        elif self.action == 'list' or self.action == 'destroy':
            permission_classes = [IsDepartmentHeadUser]
        return [permission() for permission in permission_classes]

# Student Account View Set


class StudentViewSet(viewsets.ModelViewSet):
    queryset = User.objects.filter(is_student=True)
    serializer_class = StudentRegisterSerializer

    def get_permissions(self):
        permission_classes = []
        if self.action == 'create':
            permission_classes = [IsDepartmentHeadUser]
        elif self.action == 'retrieve' or self.action == 'update' or self.action == 'partial_update':
            permission_classes = [IsDepartmentHeadUser]
        elif self.action == 'list' or self.action == 'destroy':
            permission_classes = [IsDepartmentHeadUser]
        return [permission() for permission in permission_classes]
