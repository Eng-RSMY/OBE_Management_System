from .models import PEO
from rest_framework import viewsets, permissions, generics
from Chairman_Framework.serializers import VisionSerializer, PEOSerializer, MissionSerializer, PLOSerializer, CoursesSerializer, CLOSerializer, CognitiveSerializer, PsychomotorSerializer, AffectiveSerializer
from Accounts.serializers import DepHeadRegisterSerializer
from Accounts.models import User
from django.db.models.functions import Concat
from django.db.models import Value
from Accounts.permissions import IsChairmanUser, IsLoggedInUserOrAdmin

# Department Head Account View Set


class DepartmentHeadViewSet(viewsets.ModelViewSet):
    queryset = User.objects.filter(is_depHead=True)
    serializer_class = DepHeadRegisterSerializer

    def get_permissions(self):
        permission_classes = []
        if self.action == 'create':
            permission_classes = [IsChairmanUser]
        elif self.action == 'retrieve' or self.action == 'update' or self.action == 'partial_update':
            permission_classes = [IsChairmanUser]
        elif self.action == 'list' or self.action == 'destroy':
            permission_classes = [IsChairmanUser]
        return [permission() for permission in permission_classes]


# PEO VIEWSET only operations performed by chairman


class PEOViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = PEOSerializer
    # queryset = PEO.objects.all()

    def get_queryset(self):
        return self.request.user.peo.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

    def get_permissions(self):
        permission_classes = []
        if self.action == 'create':
            permission_classes = [IsChairmanUser]
        elif self.action == 'retrieve' or self.action == 'update' or self.action == 'partial_update':
            permission_classes = [IsChairmanUser]
        elif self.action == 'list' or self.action == 'destroy':
            permission_classes = [IsChairmanUser]
        return [permission() for permission in permission_classes]

# VISION VIEW SET


class VisionViewSet(viewsets.ModelViewSet):

    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = VisionSerializer

    def get_queryset(self):
        return self.request.user.vision.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

    def get_permissions(self):
        permission_classes = []
        if self.action == 'create':
            permission_classes = [IsChairmanUser]
        elif self.action == 'retrieve' or self.action == 'update' or self.action == 'partial_update':
            permission_classes = [IsChairmanUser]
        elif self.action == 'list' or self.action == 'destroy':
            permission_classes = [IsChairmanUser]
        return [permission() for permission in permission_classes]


# MISSION VIEW SET
class MissionViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = MissionSerializer

    def get_queryset(self):
        return self.request.user.mission.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

    def get_permissions(self):
        permission_classes = []
        if self.action == 'create':
            permission_classes = [IsChairmanUser]
        elif self.action == 'retrieve' or self.action == 'update' or self.action == 'partial_update':
            permission_classes = [IsChairmanUser]
        elif self.action == 'list' or self.action == 'destroy':
            permission_classes = [IsChairmanUser]
        return [permission() for permission in permission_classes]

# plo viewset


class PLOViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = PLOSerializer

    def get_queryset(self):
        return self.request.user.plo.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

    def get_permissions(self):
        permission_classes = []
        if self.action == 'create':
            permission_classes = [IsChairmanUser]
        elif self.action == 'retrieve' or self.action == 'update' or self.action == 'partial_update':
            permission_classes = [IsChairmanUser]
        elif self.action == 'list' or self.action == 'destroy':
            permission_classes = [IsChairmanUser]
        return [permission() for permission in permission_classes]

# clo viewset


class CLOViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = CLOSerializer

    def get_queryset(self):
        return self.request.user.clo.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

    def get_permissions(self):
        permission_classes = []
        if self.action == 'create':
            permission_classes = [IsChairmanUser]
        elif self.action == 'retrieve' or self.action == 'update' or self.action == 'partial_update':
            permission_classes = [IsChairmanUser]
        elif self.action == 'list' or self.action == 'destroy':
            permission_classes = [IsChairmanUser]
        return [permission() for permission in permission_classes]


# courses viewset


class CoursesViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = CoursesSerializer

    def get_queryset(self):
        return self.request.user.courses.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

    def get_permissions(self):
        permission_classes = []
        if self.action == 'create':
            permission_classes = [IsChairmanUser]
        elif self.action == 'retrieve' or self.action == 'update' or self.action == 'partial_update':
            permission_classes = [IsChairmanUser]
        elif self.action == 'list' or self.action == 'destroy':
            permission_classes = [IsChairmanUser]
        return [permission() for permission in permission_classes]


# CognitiveViewSet
class CognitiveViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = CognitiveSerializer

    def get_queryset(self):
        return self.request.user.cognitive.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

    def get_permissions(self):
        permission_classes = []
        if self.action == 'create':
            permission_classes = [IsChairmanUser]
        elif self.action == 'retrieve' or self.action == 'update' or self.action == 'partial_update':
            permission_classes = [IsChairmanUser]
        elif self.action == 'list' or self.action == 'destroy':
            permission_classes = [IsChairmanUser]
        return [permission() for permission in permission_classes]


# Psychomotor view


class PsychomotorViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = PsychomotorSerializer

    def get_queryset(self):
        return self.request.user.psychomotor.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

    def get_permissions(self):
        permission_classes = []
        if self.action == 'create':
            permission_classes = [IsChairmanUser]
        elif self.action == 'retrieve' or self.action == 'update' or self.action == 'partial_update':
            permission_classes = [IsChairmanUser]
        elif self.action == 'list' or self.action == 'destroy':
            permission_classes = [IsChairmanUser]
        return [permission() for permission in permission_classes]

# Affective view


class AffectiveViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = AffectiveSerializer

    def get_queryset(self):
        return self.request.user.affective.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

    def get_permissions(self):
        permission_classes = []
        if self.action == 'create':
            permission_classes = [IsChairmanUser]
        elif self.action == 'retrieve' or self.action == 'update' or self.action == 'partial_update':
            permission_classes = [IsChairmanUser]
        elif self.action == 'list' or self.action == 'destroy':
            permission_classes = [IsChairmanUser]
        return [permission() for permission in permission_classes]
