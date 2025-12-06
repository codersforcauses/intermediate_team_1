from django.urls import path
from . import views

app_name = "user_profile"
urlpatterns = [
    path("", views.UserList.as_view(), name="user-list"),
    path("profile/", views.ProfileList.as_view(), name="user-list"),
    path("profile/<int:pk>", views.UserProfileDetail.as_view(), name="profile-detail"),
]
