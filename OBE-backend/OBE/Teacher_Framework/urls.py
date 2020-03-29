from rest_framework import routers
from .api import FileUploadViewSet
from django.urls import path, include


router = routers.DefaultRouter()
# department head account router
router.register('api/file', FileUploadViewSet, 'FileUpload')
urlpatterns = router.urls
