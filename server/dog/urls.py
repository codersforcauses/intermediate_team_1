from django.urls import path

from . import views

urlpatterns = [
    path("", views.dog_home, name="dog-home"),
]