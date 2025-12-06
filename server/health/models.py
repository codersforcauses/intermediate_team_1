from django.db import models
from pet.models import Pet

# Create your models here.
class SymptomInstance(models.Model):
    forPet = models.ForeignKey(Pet, on_delete=models.CASCADE, related_name="symptom_for_pet")
    symptomType = models.CharField(max_length=200)
    extraInfo = models.TextField(null=True)
    dateAndTime = models.DateTimeField()

class MedRecord(models.Model):
    forPet = models.ForeignKey(Pet, on_delete=models.CASCADE, related_name="medrec_for_pet")
    title = models.CharField(max_length=200)
    recordDate = models.DateField()
    descr = models.TextField(null=True)
    # add file link later