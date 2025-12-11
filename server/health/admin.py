from django.contrib import admin
from .models import SymptomInstance, MedRecord

# Register your models here.
admin.site.register(SymptomInstance)
admin.site.register(MedRecord)