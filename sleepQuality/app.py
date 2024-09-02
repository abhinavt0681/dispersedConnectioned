from fastapi import FastAPI, Form
from fastapi.responses import JSONResponse
import joblib
import pandas as pd

app = FastAPI()

# Load the pre-trained model
model = joblib.load('sleep_cycle_model.pkl')

@app.post("/predict")
async def predict(
    age: int = Form(...),
    gender: str = Form(...),
    occupation: str = Form(...),
    bmi_category: str = Form(...),
    sleep_disorder: str = Form(...),
    blood_pressure: str = Form(...)
):
    # Process input
    systolic_bp, diastolic_bp = map(int, blood_pressure.split('/'))
    
    input_data = {
        'Age': age,
        'Gender_' + gender: 1,
        'Occupation_' + occupation: 1,
        'BMI Category_' + bmi_category: 1,
        'Sleep Disorder_' + sleep_disorder: 1,
        'Systolic_BP': systolic_bp,
        'Diastolic_BP': diastolic_bp
    }
    
    df = pd.DataFrame([input_data])
    
    # Fill in missing columns with 0
    model_columns = model.feature_names_in_
    df = df.reindex(columns=model_columns, fill_value=0)
    
    # Make prediction
    prediction = model.predict(df)
    
    return JSONResponse(content={"prediction": prediction[0]})

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8002)

