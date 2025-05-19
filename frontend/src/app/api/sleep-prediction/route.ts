import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    if (!data || !data.age || !data.gender || !data.occupation || 
        !data.bmi_category || !data.sleep_disorder || !data.blood_pressure) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Forward request to the FastAPI sleep quality prediction service
    // In production, this would be the Docker service name or an environment variable
    const sleepServiceUrl = process.env.SLEEP_API_URL || 'http://sleep-cycle-predictor-fastapi:8002/predict';

    // The sleep service expects form data, not JSON
    const formData = new URLSearchParams();
    formData.append('age', data.age.toString());
    formData.append('gender', data.gender);
    formData.append('occupation', data.occupation);
    formData.append('bmi_category', data.bmi_category);
    formData.append('sleep_disorder', data.sleep_disorder);
    formData.append('blood_pressure', data.blood_pressure);

    const response = await fetch(sleepServiceUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString(),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Error from sleep service:', errorText);
      return NextResponse.json(
        { error: 'Failed to analyze sleep data' },
        { status: response.status }
      );
    }

    const responseData = await response.json();
    return NextResponse.json({ prediction: responseData.prediction });
  } catch (error) {
    console.error('Error processing sleep prediction request:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 