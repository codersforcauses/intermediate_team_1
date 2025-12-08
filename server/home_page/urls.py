from django.urls import path
from . import views

app_name = "home_page"
urlpatterns = [
    path("", views.main, name="home"),
    path("api/mapbox/suggestions/", views.get_mapbox_suggestions, name="mapbox_suggestions"),
]
