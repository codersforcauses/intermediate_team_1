from django.shortcuts import render
import requests
from django.conf import settings
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods

# Create your views here.

MAPBOX_SUGGEST_URL = "https://api.mapbox.com/search/searchbox/v1/suggest"

@require_http_methods(["GET"])
def get_mapbox_suggestions(request):
    query = request.GET.get('q')

    if not query:
        return JsonResponse({"error": "Missing query parameter 'q'"}, status=400)

    params = {
        'q': query,
        'access_token': settings.MAPBOX_ACCESS_TOKEN,
    }

    try:
        mapbox_response = requests.get(MAPBOX_SUGGEST_URL, params=params)
        mapbox_response.raise_for_status()
        return JsonResponse(mapbox_response.json())

    except requests.exceptions.RequestException as e:
        return JsonResponse({'error': f"Mapbox API error: {e}"}, status=500)
