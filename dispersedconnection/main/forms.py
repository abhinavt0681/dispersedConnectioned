from django import forms

class SleepCyclePredictionForm(forms.Form):
    AGE_CHOICES = [(i, i) for i in range(18, 101)]
    GENDER_CHOICES = [('Male', 'Male'), ('Female', 'Female')]
    OCCUPATION_CHOICES = [('Engineer', 'Engineer'), ('Doctor', 'Doctor'), ('Teacher', 'Teacher'), ('Other', 'Other')]
    BMI_CHOICES = [('Underweight', 'Underweight'), ('Normal', 'Normal'), ('Overweight', 'Overweight'), ('Obese', 'Obese')]
    SLEEP_DISORDER_CHOICES = [('Yes', 'Yes'), ('No', 'No')]

    age = forms.ChoiceField(choices=AGE_CHOICES, label="Age")
    gender = forms.ChoiceField(choices=GENDER_CHOICES, label="Gender")
    occupation = forms.ChoiceField(choices=OCCUPATION_CHOICES, label="Occupation")
    bmi_category = forms.ChoiceField(choices=BMI_CHOICES, label="BMI Category")
    sleep_disorder = forms.ChoiceField(choices=SLEEP_DISORDER_CHOICES, label="Sleep Disorder")
    blood_pressure = forms.CharField(max_length=7, label="Blood Pressure (e.g., 120/80)")

