from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse
import torch
from torchvision import models, transforms
from PIL import Image
import io
import json

app = FastAPI()

# Load the model
model = models.resnet18()
model.fc = torch.nn.Linear(model.fc.in_features, 9)
model.load_state_dict(torch.load('skin_cancer_resnet.pth', map_location=torch.device('cpu')))
model.eval()

# Load the class-to-index mapping
with open('class_mapping.json', 'r') as f:
    idx_to_class = json.load(f)

# Define the image transformation
transform = transforms.Compose([
    transforms.Resize((128, 128)),
    transforms.ToTensor(),
    transforms.Normalize([0.5, 0.5, 0.5], [0.5, 0.5, 0.5])
])

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    try:
        img = Image.open(io.BytesIO(await file.read())).convert('RGB')
        img = transform(img).unsqueeze(0)
        
        with torch.no_grad():
            outputs = model(img)
            _, predicted = torch.max(outputs, 1)
            prediction = predicted.item()
        
        # Map the numeric prediction to the condition name
        condition = idx_to_class[str(prediction)]
        
        return JSONResponse(content={"prediction": condition})
    
    except Exception as e:
        return JSONResponse(content={"error": str(e)}, status_code=500)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
