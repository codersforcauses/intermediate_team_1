from django.shortcuts import render
from .models import Pricing, Feature


# Create your views here.

def main(request):
    plans = Pricing.objects.prefetch_related("features").all()
    return render(request, "landing_page/landing_page_html.html", {"plans": plans})
