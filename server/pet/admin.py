from django.contrib import admin
from .models import Pet, Food, Medication

# Register your models here.
admin.site.register(Pet)
admin.site.register(Food)
admin.site.register(Medication)