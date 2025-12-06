from django.db import models
from pet.models import Pet

# Create your models here.
class Task(models.Model):
    forPet = models.ForeignKey(Pet, on_delete=models.CASCADE, related_name="task_for_pet")
    title = models.CharField(max_length=200)
    descr = models.TextField(null=True)
    due = models.DateTimeField()
    isComplete = models.BooleanField(default=False)