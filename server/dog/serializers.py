from rest_framework import serializers
from .models import DogPark, SavedDogPark


class DogParkSerializer(serializers.ModelSerializer):
    class Meta:
        model = DogPark
        fields = "__all__"


class SavedDogParkSerializer(serializers.ModelSerializer):
    parkId = DogParkSerializer(read_only=True)
    
    class Meta:
        model = SavedDogPark
        fields = "__all__"

