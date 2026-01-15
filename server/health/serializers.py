from rest_framework import serializers
from .models import SymptomInstance, MedRecord

class SymptomSerializer(serializers.ModelSerializer):
    class Meta:
        model = SymptomInstance
        fields = "__all__"

class MedRecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = MedRecord
        fields = "__all__"