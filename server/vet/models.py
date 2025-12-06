from django.db import models

# Create your models here.
class VetClinic(models.Model):
    clinicName = models.CharField(max_length=100)
    phoneNumber = models.CharField(max_length=15)
    email = models.EmailField()
    address = models.CharField(max_length=255)

    def __str__(self):
        return self.clinicName
    
class VetAppointment(models.Model):
    forPet = models.CharField(max_length=100)
    dateAndTime = models.DateTimeField()
    atClinic = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.petName} - {self.appointmentDate.strftime('%Y-%m-%d %H:%M')}"