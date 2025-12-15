from django.http import HttpResponse
from django.shortcuts import render
from .models import Pricing, Feature


# Create your views here.

def main(request):
    plans = Pricing.objects.prefetch_related("features").all()
    return HttpResponse("This is the landing page")
