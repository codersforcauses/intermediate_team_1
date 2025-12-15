from rest_framework import serializers
from .models import VetClinic, VetAppointment


class VetClinicSerializer(serializers.ModelSerializer):
    class Meta:
        model = VetClinic
        fields = "__all__"


class VetAppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = VetAppointment
        fields = "__all__"