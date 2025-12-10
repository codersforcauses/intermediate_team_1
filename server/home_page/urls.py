from django.urls import path
from . import views

app_name = "home_page"
urlpatterns = [
    path("", views.main.as_view(), name="home"),
    path("api/mapbox/suggestions/", views.get_mapbox_suggestions, name="mapbox_suggestions"),
    path("<int:pk>", views.PetDetail.as_view(), name="pet-details"),
]
