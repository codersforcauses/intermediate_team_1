from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def user_registration(request):
    return HttpResponse("This is the registration page")
