from rest_framework import routers
from .api import PEOViewSet, DepartmentHeadViewSet, PEOViewSet, VisionViewSet, MissionViewSet, PLOViewSet, CoursesViewSet, CLOViewSet, CognitiveViewSet, PsychomotorViewSet, AffectiveViewSet
from django.urls import path, include


router = routers.DefaultRouter()
# department head account router
router.register('api/department', DepartmentHeadViewSet, 'DepartmentHead')
# router for peo view
router.register('api/peo', PEOViewSet, 'peo')
router.register('api/vision', VisionViewSet, 'vision')
router.register('api/mission', MissionViewSet, 'mission')
router.register('api/plo', PLOViewSet, 'plo')
router.register('api/clo', CLOViewSet, 'clo')
router.register('api/courses', CoursesViewSet, 'courses')
router.register('api/Cognitive', CognitiveViewSet, 'Cognitive')
router.register('api/Psychomotor', PsychomotorViewSet, 'Psychomotor')
router.register('api/Affective', AffectiveViewSet, 'Affective')
urlpatterns = router.urls
