from django.urls import path, include
from .api import RegisterApi, ChairmanRegisterApi, LoginApi, DepHeadRegisterApi, TeacherRegisterApi, StudentRegisterApi


urlpatterns = [

    path('api/auth/login/', LoginApi.as_view()),  # login
    path('api/auth/register', RegisterApi.as_view()),  # admin register
    path('api/auth/chregister', ChairmanRegisterApi.as_view()),  # chairman register
    # department head register
    path('api/auth/depregister', DepHeadRegisterApi.as_view()),
    path('api/auth/teacherregister',
         TeacherRegisterApi.as_view()),  # teacher register
    path('api/auth/studentregister',
         StudentRegisterApi.as_view()),  # student register



]
