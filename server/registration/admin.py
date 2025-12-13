from django.contrib import admin
from .models import Household
from .models import Business
from .models import PetCarer

# Register your models here.
admin.site.register(Household)
admin.site.register(Business)
admin.site.register(PetCarer)