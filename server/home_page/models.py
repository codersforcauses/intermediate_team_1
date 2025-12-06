from django.db import models

# Create your models here.

class Household(models.Model):
    # [insert petcarer id here, from Kerry]
    houseName = models.CharField(max_length=20)
    houseNo = models.DecimalField(max_digits=4, decimal_places=0)  # houseNo is the same thing as streetNo in the DB diagram
    streetName = models.CharField(max_length=200)
    suburb =
