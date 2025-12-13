from django.db import models

from pet.models import Pet
from tasks.models import Task
from registration.models import Household, Business, PetCarer
from vet.models import VetClinic, VetAppointment
from health.models import SymptomInstance

# Create your models here.

# NOTE: new address class to simplify code [SUGGESTION]
# class Address(models.Model):
#     streetName = models.CharField(max_length=200)
#     suburb = models.CharField(max_length=100)
#     postcode = models.CharField(max_length=10)
#     state = models.CharField(max_length=5)
#     country = models.CharField(max_length=30)
#
# class Household(models.Model):
#     # [insert petcarer id here, from Kerry]
#     houseName = models.CharField(max_length=20)
#     houseNo = models.PositiveIntegerField()  # houseNo is the same thing as streetNo in the DB diagram
#     address = models.ForeignKey(Address, on_delete=models.CASCADE)
#     def __str__(self):
#         return self.address
#
# class Business(models.Model):
#     businessID = models.CharField(max_length=10)
#     # [insert petcarer id here, from Kerry]
#     businessName = models.CharField(max_length=20)
#     buildingNo = models.PositiveIntegerField()  # buildingNo is the same thing as streetNo in the DB diagram
#     def __str__(self):
#         return self.address


# NOTE: selectable pets [SUGGESTION]
# class Pet(models.Model):
#     CAT = 'cat'
#     DOG = 'dog'
#     BIRD = 'bir'
#     FISH = 'fis'
#     ANIMAL_TYPES = {
#         CAT: "Cat",
#         DOG: "Dog",
#         BIRD: "Bird",
#         FISH: "Fish",
#     }
#     animalType = models.CharField(
#         max_length=3,
#         choices=ANIMAL_TYPES,
#         default=CAT,
#     )
#
#     petID = models.CharField(max_length=10)
#     petName = models.CharField(max_length=20)
#     birthDate = models.DateField()
#     petBreed = models.CharField(max_length=15)
#     weight = models.PositiveIntegerField()
#     # not sure what exerciseReq means
#     # [insert Household foreign key here]
#     # [insert Business foreign key here]
#     def __str__(self):
#         return self.petID
