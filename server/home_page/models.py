from django.db import models
import pet, tasks

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


# NOTE: crosscheck with Annabelle's pet class
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
    def __str__(self):
        return self.petID


# NOTE: crosscheck with Annabelle's tasks class
class PetTasks(models.Model):  # the same thing as Tasks in the DB diagram
    petID = models.ForeignKey(Pet, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=1000)
    due = models.DateTimeField()
    isComplete = models.BooleanField(default=False)
    def __str__(self):
        return self.title

class SymptomInstance(models.Model):
    petID = models.ForeignKey(Pet, on_delete=models.CASCADE)
    symptomType = models.CharField(max_length=100)
    extraInfo = models.CharField(max_length=1000)
    dateAndTime = models.DateTimeField()
    def __str__(self):
        return self.symptomType

class VetAppointment(models.Model):
    petID = models.ForeignKey(Pet, on_delete=models.CASCADE)
    dateAndTime = models.DateTimeField()
    # [insert clinic foreign ID here, from Martin]
    def __str__(self):
        return self.petID, self.dateAndTime
