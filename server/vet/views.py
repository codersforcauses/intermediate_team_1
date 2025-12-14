from django.shortcuts import render
# Create your views here.
def vet_home(request):
    return render(request, 'vet/vet_home.html')