from django.shortcuts import render

# Create your views here.
def dog_home(request):
    return render(request, 'dog/dog_home.html')