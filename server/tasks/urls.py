from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("pet/<int:forPet>", views.pet_filter, name="pet_filter"),
]