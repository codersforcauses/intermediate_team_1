from django.contrib import admin

from vet.models import VetAppointment
from vet.models import VetClinic

# Register your models here.
admin.site.register(VetClinic)
admin.site.register(VetAppointment)