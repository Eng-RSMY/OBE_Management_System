from rest_framework import routers
from .api import TeacherViewSet, StudentViewSet
from django.urls import path, include


router = routers.DefaultRouter()
# department head account router
router.register('api/teacher', TeacherViewSet, 'Teacher')
router.register('api/student', StudentViewSet, 'Student')
urlpatterns = router.urls
