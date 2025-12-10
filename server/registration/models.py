from django.db import models


# Create your models here.
class Household(models.Model):
    houseID = models.CharField(primary_key=True, max_length=100)
    accountManager = models.ForeignKey("PetCarer", on_delete=models.SET_NULL, null=True, blank=True, related_name="managed_households")
    houseName = models.CharField(max_length=255)
    houseNo = models.IntegerField()
    streetName = models.CharField(max_length=255)
    suburb = models.CharField(max_length=255)
    postcode = models.IntegerField()
    state = models.CharField(max_length=100)
    country = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.houseName} ({self.houseID})"


class Business(models.Model):
    businessID = models.CharField(primary_key=True, max_length=100)
    accountManager = models.ForeignKey("PetCarer", on_delete=models.SET_NULL, null=True, blank=True, related_name="managed_businesses")
    businessName = models.CharField(max_length=255)
    streetNo = models.IntegerField()
    streetName = models.CharField(max_length=255)
    suburb = models.CharField(max_length=255)
    state = models.CharField(max_length=100)
    postcode = models.IntegerField()
    country = models.CharField(max_length=100)
    payDetail = models.CharField(max_length=255)  # required

    def __str__(self):
        return f"{self.businessName} ({self.businessID})"


class PetCarer(models.Model):
    username = models.CharField(primary_key=True, max_length=100)
    fullName = models.CharField(max_length=255)
    email = models.EmailField()
    phoneNumber = models.CharField(max_length=20)
    payDetail = models.CharField(max_length=255, blank=True, null=True)
    belongsToHouse = models.ForeignKey(Household, on_delete=models.SET_NULL, null=True, blank=True, related_name="household_members")
    belongsToBusiness = models.ForeignKey(Business, on_delete=models.SET_NULL, null=True, blank=True, related_name="business_members")

    def __str__(self):
        return self.username
