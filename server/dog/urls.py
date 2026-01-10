from django.urls import path
from . import views

app_name = "dog"
urlpatterns = [
    path("", views.dog_home, name="dog-home"),
    path("parks/", views.DogParkList.as_view(), name="dog-park-list"),
    path("parks/<int:pk>/", views.DogParkDetail.as_view(), name="dog-park-detail"),
    path("saved/", views.saved_dog_parks, name="saved-dog-parks"),
    path("saved/<int:pk>/", views.saved_dog_park_detail, name="saved-dog-park-detail"),
]
