from django.db import models

# Create your models here.

# NOTE: only use the below if Kerry has not made any classes for household and business
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
#
# class Business(models.Model):
#     businessID = models.CharField(max_length=10)
#     # [insert petcarer id here, from Kerry]
#     businessName = models.CharField(max_length=20)
#     buildingNo = models.PositiveIntegerField()  # buildingNo is the same thing as streetNo in the DB diagram



class Pet(models.Model):
    CAT = 'cat'
    DOG = 'dog'
    BIRD = 'bir'
    FISH = 'fis'
    ANIMAL_TYPES = {
        CAT: "Cat",
        DOG: "Dog",
        BIRD: "Bird",
        FISH: "Fish",
    }
    animalType = models.CharField(
        max_length=3,
        choices=ANIMAL_TYPES,
        default=CAT,
    )

    petID = models.CharField(max_length=10)
    petName = models.CharField(max_length=20)
    birthDate = models.DateField()
    petBreed = models.CharField(max_length=15)
    weight = models.PositiveIntegerField()
    # not sure what exerciseReq means
    # [insert Household foreign key here]
    # [insert Business foreign key here]

class PetTasks(models.Model):  # the same thing as Tasks in the DB diagram
    petID = models.ForeignKey(Pet, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=1000)
    due = models.DateTimeField()
    isComplete = models.BooleanField(default=False)

class SymptomInstance(models.Model):
    petID = models.ForeignKey(Pet, on_delete=models.CASCADE)
    symptomType = models.CharField(max_length=100)
    extraInfo = models.CharField(max_length=1000)
    dateAndTime = models.DateTimeField()

class VetAppointment(models.Model):
    petID = models.ForeignKey(Pet, on_delete=models.CASCADE)
    dateAndTime = models.DateTimeField()
    # [insert clinic foreign ID here, from Martin]
