from django.urls import path

from . import views

urlpatterns = [
    path("symptom/", views.symptomAll, name="symptom"),
    path("symptom/id/<int:id>", views.symptomID, name="symptom-id"),
    path("symptom/pet/<int:forPet>", views.symptomPet, name="symptom-pet"),
    path("medrecord", views.medrecord, name="medrecord"),
]