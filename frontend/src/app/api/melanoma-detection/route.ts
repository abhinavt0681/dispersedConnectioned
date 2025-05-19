import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const imageFile = formData.get('image') as File;

    if (!imageFile) {
      return NextResponse.json(
        { error: 'No image provided' },
        { status: 400 }
      );
    }

    // Create a new FormData object for forwarding the request
    const forwardFormData = new FormData();
    forwardFormData.append('file', imageFile);  // Note: The FastAPI endpoint expects 'file', not 'image'

    // Forward request to the FastAPI melanoma detection service
    // In production, this would be the Docker service name or an environment variable
    const melanomaServiceUrl = process.env.MELANOMA_API_URL || 'http://melanoma-detector-fastapi:8000/predict';
    
    const response = await fetch(melanomaServiceUrl, {
      method: 'POST',
      body: forwardFormData,
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Error from melanoma service:', errorText);
      return NextResponse.json(
        { error: 'Failed to analyze image' },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json({ result: data.prediction });
  } catch (error) {
    console.error('Error processing melanoma detection request:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 