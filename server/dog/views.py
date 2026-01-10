from django.shortcuts import render
from rest_framework import generics, permissions, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from .models import DogPark, SavedDogPark
from .serializers import DogParkSerializer, SavedDogParkSerializer


# Create your views here.
def dog_home(request):
    return render(request, 'dog/dog_home.html')


class DogParkList(generics.ListAPIView):
    """ViewSet for listing all dog parks"""
    permission_classes = [permissions.AllowAny]
    queryset = DogPark.objects.all()
    serializer_class = DogParkSerializer


class DogParkDetail(generics.RetrieveAPIView):
    """ViewSet for retrieving a specific dog park"""
    permission_classes = [permissions.AllowAny]
    queryset = DogPark.objects.all()
    serializer_class = DogParkSerializer


@api_view(['GET', 'POST'])
@permission_classes([permissions.AllowAny])
def saved_dog_parks(request):
    """API endpoint to list or create saved dog parks"""
    if request.method == 'GET':
        saved_parks = SavedDogPark.objects.all()
        serializer = SavedDogParkSerializer(saved_parks, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = SavedDogParkSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
@permission_classes([permissions.AllowAny])
def saved_dog_park_detail(request, pk):
    """API endpoint to delete a saved dog park"""
    try:
        saved_park = SavedDogPark.objects.get(pk=pk)
        saved_park.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    except SavedDogPark.DoesNotExist:
        return Response({'error': 'Saved dog park not found'}, status=status.HTTP_404_NOT_FOUND)