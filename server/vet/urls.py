from django.urls import path
from . import views

app_name = "vet"
urlpatterns = [
    path("", views.vet_home, name="vet-home"),
    path("clinics/", views.VetClinicList.as_view(), name="vet-clinic-list"),
    path("clinics/<int:pk>/", views.VetClinicDetail.as_view(), name="vet-clinic-detail"),
]
