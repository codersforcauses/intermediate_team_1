from rest_framework import serializers
from .models import Pet, Food, Medication

class PetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pet
        fields = "__all__"

class FoodSerializer(serializers.ModelSerializer):
    profile = PetSerializer(read_only=True)

    class Meta:
        model = Food
        fields = (
            "id",
        )

class MedicationSerializer(serializers.ModelSerializer):
    profile = PetSerializer(read_only=True)

    class Meta:
        model = Medication
        fields = (
            "id",
        )
