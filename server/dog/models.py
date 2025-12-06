from django.db import models

# Create your models here.
class DogPark(models.Model):
    parkName = models.CharField(max_length=100)
    streetNo = models.CharField(max_length=10)
    streetName = models.CharField(max_length=100)
    suburb = models.CharField(max_length=100)
    state = models.CharField(max_length=50)
    postcode = models.CharField(max_length=10)
    country = models.CharField(max_length=100)

class SavedDogPark(models.Model):
    userName = models.CharField(max_length=100)
    parkId = models.ForeignKey(DogPark, on_delete=models.CASCADE)
