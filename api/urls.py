from django.urls import path
from . import views


urlpatterns = [
    path('v1/', views.photos_api_overview, name='photos_api_overview'),
]