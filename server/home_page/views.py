from django.shortcuts import render
from rest_framework import generics, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from django.conf import settings
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from django.apps import apps
from django.views import View

pet = apps.get_model('pet','Pet')
tasks = apps.get_model('tasks', 'Task')
from pet.serializers import PetSerializer
from user_profile.permissions import IsUserOrReadOnly
# remember to also import household and business

# Create your views here.

class main(View):
    def get(self, request):
        petTasks = tasks.objects.all().values()
        return JsonResponse(list(petTasks), safe=False)

class PetDetail(generics.RetrieveUpdateAPIView):
    permission_classes = (permissions.IsAuthenticated, IsUserOrReadOnly)
    queryset = pet.objects.all()
    serializer_class = PetSerializer


# NOTE: messing around with MAPBOX API but we may actually need it in the future, so I've left the code here
# MAPBOX_SUGGEST_URL = "https://api.mapbox.com/search/searchbox/v1/suggest"
#
# @require_http_methods(["GET"])
# def get_mapbox_suggestions(request):
#     query = request.GET.get('q')
#
#     if not query:
#         return JsonResponse({"error": "Missing query parameter 'q'"}, status=400)
#
#     params = {
#         'q': query,
#         'access_token': settings.MAPBOX_ACCESS_TOKEN,
#     }
#
#     try:
#         mapbox_response = requests.get(MAPBOX_SUGGEST_URL, params=params)
#         mapbox_response.raise_for_status()
#         return JsonResponse(mapbox_response.json())
#
#     except requests.exceptions.RequestException as e:
#         return JsonResponse({'error': f"Mapbox API error: {e}"}, status=500)
