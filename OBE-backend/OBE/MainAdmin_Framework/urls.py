from rest_framework import routers
from .api import ChairmanViewSet
from django.urls import path, include


router = routers.DefaultRouter()
# Chairman account router
router.register('api/chairman', ChairmanViewSet, 'Chairman')

urlpatterns = router.urls
