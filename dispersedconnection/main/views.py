import requests
from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
import pandas as pd
import joblib



# Create your views here.
def index(request):
    return render(request, 'main/index.html')

def contact(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        message = request.POST.get('message')

        print("Message from ", name, " Email: ", email, " Message: ", message)

        return HttpResponse("Thank you for your message!, I'll be contacting you soon!")
    return render(request, 'main/contact.html')


def melanoma_detection(request):
    if request.method == 'POST':
        uploaded_file = request.FILES.get('image')

        if uploaded_file:
            # Send the image to the FastAPI microservice for classification
            try:
                response = requests.post(
                    'http://melanoma-detector-fastapi:8000/predict',  # Ensure this matches the FastAPI container's host and port
                    files={'file': uploaded_file.read()}
                )

                if response.status_code == 200:
                    result = response.json().get('prediction', 'No prediction available')
                    return JsonResponse({"result": result})
                else:
                    return JsonResponse({"error": f"FastAPI service error: {response.status_code}"}, status=500)
            
            except requests.exceptions.RequestException as e:
                return JsonResponse({"error": str(e)}, status=500)
        else:
            return JsonResponse({"error": "No file uploaded"}, status=400)

    return render(request, 'main/melanoma_detection.html')


def sleep_cycle_prediction(request):
    if request.method == 'POST':
        age = request.POST.get('age')
        gender = request.POST.get('gender')
        occupation = request.POST.get('occupation')
        bmi_category = request.POST.get('bmi_category')
        sleep_disorder = request.POST.get('sleep_disorder')
        blood_pressure = request.POST.get('blood_pressure')

        data = {
            'age': age,
            'gender': gender,
            'occupation': occupation,
            'bmi_category': bmi_category,
            'sleep_disorder': sleep_disorder,
            'blood_pressure': blood_pressure
        }

        try:
            response = requests.post('http://sleep-cycle-predictor-fastapi:8002/predict', data=data)
            if response.status_code == 200:
                prediction = response.json().get('prediction')
                return render(request, 'main/sleep_cycle_prediction.html', {
                    'prediction': prediction,
                    'age': age,
                    'gender': gender,
                    'occupation': occupation,
                    'bmi_category': bmi_category,
                    'sleep_disorder': sleep_disorder,
                    'blood_pressure': blood_pressure
                })
            else:
                return render(request, 'main/sleep_cycle_prediction.html', {
                    'error': 'There was an error processing your request.'
                })
        except requests.exceptions.RequestException as e:
            return render(request, 'main/sleep_cycle_prediction.html', {
                'error': 'Unable to connect to the prediction service.'
            })

    return render(request, 'main/sleep_cycle_prediction.html')


