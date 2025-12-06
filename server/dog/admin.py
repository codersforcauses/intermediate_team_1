from django.contrib import admin

from dog.models import DogPark
from dog.models import SavedDogPark
# Register your models here.
admin.site.register(DogPark)
admin.site.register(SavedDogPark)