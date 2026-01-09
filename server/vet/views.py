from django.shortcuts import render
from rest_framework import generics, permissions
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from .models import VetClinic
from .serializers import VetClinicSerializer


# Create your views here.
def vet_home(request):
    return render(request, 'vet/vet_home.html')


@api_view(['GET'])
@permission_classes([permissions.AllowAny])
def vet_clinic_list(request):
    """API endpoint to list all vet clinics"""
    clinics = VetClinic.objects.all()
    serializer = VetClinicSerializer(clinics, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([permissions.AllowAny])
def vet_clinic_detail(request, pk):
    """API endpoint to get a specific vet clinic"""
    try:
        clinic = VetClinic.objects.get(pk=pk)
        serializer = VetClinicSerializer(clinic)
        return Response(serializer.data)
    except VetClinic.DoesNotExist:
        return Response({'error': 'Vet clinic not found'}, status=404)


class VetClinicList(generics.ListAPIView):
    """ViewSet for listing all vet clinics"""
    permission_classes = [permissions.AllowAny]
    queryset = VetClinic.objects.all()
    serializer_class = VetClinicSerializer


class VetClinicDetail(generics.RetrieveAPIView):
    """ViewSet for retrieving a specific vet clinic"""
    permission_classes = [permissions.AllowAny]
    queryset = VetClinic.objects.all()
    serializer_class = VetClinicSerializer