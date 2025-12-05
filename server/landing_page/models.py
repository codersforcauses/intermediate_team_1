from django.db import models

# Create your models here.

class Pricing(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=8, decimal_places=2)
    description = models.TextField(blank=True)

    def __str__(self):
        return self.name

class Feature(models.Model):
    plan = models.ForeignKey(Pricing, on_delete=models.CASCADE, related_name='features')
    text = models.CharField(max_length=200)

    def __str__(self):
        return self.text
