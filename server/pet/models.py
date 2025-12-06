from django.db import models

# Create your models here.
class Pet(models.Model):
    petName = models.CharField(max_length=50)
    animalType = models.CharField(max_length=50)
    birthDate = models.DateField(null=True)
    breed = models.CharField(max_length=50, null=True)
    weight = models.FloatField(null=True)
    exerciseReq = models.FloatField(null=True)
    belongsToHouse = models.CharField(max_length=50, null=True)
    belongsToBusiness = models.CharField(max_length=50, null=True)
    def __str__(self):
        return self.petName

class Food(models.Model):
    forPet = models.ForeignKey(Pet, on_delete=models.CASCADE, related_name="food_for_pet")
    foodName = models.CharField(max_length=50)
    descr = models.TextField(null=True)
    amount = models.FloatField()
    amountUnit = models.CharField(max_length=5)
    feedTime = models.TimeField(null=True)
    def __str__(self):
        return self.foodName

class Medication(models.Model):
    forPet = models.ForeignKey(Pet, on_delete=models.CASCADE, related_name="med_for_pet")
    medName = models.CharField(max_length=50)
    descr = models.TextField(null=True)
    dosage = models.FloatField()
    dosageUnit = models.CharField(max_length=5)
    nextDose = models.DateTimeField(null=True)
    def __str__(self):
        return self.medName