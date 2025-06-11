from django.shortcuts import render
from .models import Startup
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
# Create your views here.
@csrf_exempt
def register_startup(request):
    if request.method == "POST":
        try:
            startup = Startup(
                email=request.POST.get('email'),
                name=request.POST.get('name'),
                founder_name=request.POST.get('founder_name'),
                startup_description=request.POST.get('startup_description'),
                intro_video=request.POST.get('intro_video'),
                website=request.POST.get('website'),
                pitch_deck=request.FILES.get('pitch_deck')  # from uploaded file
            )
            startup.save()
            return JsonResponse({'message': "Startup registered successfully"}, status=200)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)
    return JsonResponse({'message': 'Only POST method allowed'}, status=405)

def list_startups(request):
    if request.method == "GET":
        startups = Startup.objects.filter(email = "test1@gmail.com")
        data = []

        for startup in startups:
            data.append({
                "email": startup.email,
                "name": startup.name,
                "founder_name": startup.founder_name,
                "startup_description": startup.startup_description,
                "pitch_deck": startup.pitch_deck.url if startup.pitch_deck else None,
                "intro_video": startup.intro_video,
                "website": startup.website,
                # "registered_on": startup.registered_on,
            })

        return JsonResponse({"startups": data}, status=200)
    
    return JsonResponse({"message": "Only GET method allowed"}, status=405)