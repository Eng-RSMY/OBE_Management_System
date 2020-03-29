
from django.contrib import admin
from django.urls import path, include

urlpatterns = [

    path('', include('Accounts.urls')),
    path('', include('MainAdmin_Framework.urls')),
    path('', include('Chairman_Framework.urls')),
    path('', include('DepartmentHead_Framework.urls')),
    path('', include('Teacher_Framework.urls'))


]
