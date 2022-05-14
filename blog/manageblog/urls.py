
from django.urls import  path
from . import views

urlpatterns = [
    path('get/', views.getData),
    path('add/', views.addBlog),
]