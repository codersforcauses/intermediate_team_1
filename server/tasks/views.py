from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.renderers import JSONRenderer

from tasks.models import Task
from tasks.serializers import TaskSerializer

# Create your views here.
# https://www.django-rest-framework.org/tutorial/1-serialization/
@api_view(('GET',))
def index(request):
    data = Task.objects.all()
    serializer = TaskSerializer(data, many=True)
    return JsonResponse(serializer.data, safe=False)

def pet_filter(request, forPet):
    data = Task.objects.filter(forPet=forPet)
    serializer = TaskSerializer(data, many=True)
    return JsonResponse(serializer.data, safe=False)