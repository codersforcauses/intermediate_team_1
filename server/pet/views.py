import json
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse

# Create your views here.
def index(request):
    data = {
        'name': 'Spaghetti',
      	'dob': '2020-06-01',
        'type': 'Cat',
        'img': 'https://www.publicdomainpictures.net/pictures/50000/velka/kitty-cat-1374676578uQX.jpg',
    }
    return JsonResponse(data)