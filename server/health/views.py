from django.http import HttpResponse, JsonResponse
from rest_framework.decorators import api_view

from health.models import SymptomInstance, MedRecord
from health.serializers import SymptomSerializer, MedRecordSerializer

# Create your views here.
@api_view(('GET',))
def symptomAll(request):
    data = SymptomInstance.objects.all()
    serializer = SymptomSerializer(data, many=True)
    return JsonResponse(serializer.data, safe=False)

def symptomID(request, id):
    try:
        data = SymptomInstance.objects.filter(id=id)
    except SymptomInstance.DoesNotExist:
        return HttpResponse(status=404)
    serializer = SymptomSerializer(data, many=True)
    return JsonResponse(serializer.data, safe=False)

def symptomPet(request, forPet):
    try:
        data = SymptomInstance.objects.filter(forPet=forPet)
    except SymptomInstance.DoesNotExist:
        return HttpResponse(status=404)
    serializer = SymptomSerializer(data, many=True)
    return JsonResponse(serializer.data, safe=False)

def medrecord(request):
    data = MedRecord.objects.all()
    serializer = MedRecordSerializer(data, many=True)
    return JsonResponse(serializer.data, safe=False)