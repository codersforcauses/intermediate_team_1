from django.urls import path
from . import views

app_name = "dog"
urlpatterns = [
    path("", views.dog_home, name="dog-home"),
]
