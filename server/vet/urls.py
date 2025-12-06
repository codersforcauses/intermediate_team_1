from django.urls import path
from . import views

app_name = "vet"
urlpatterns = [
    path("", views.vet_home, name="vet-home"),
]
