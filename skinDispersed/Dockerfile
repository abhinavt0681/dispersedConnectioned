FROM python:3.10-slim

WORKDIR /app

COPY . /app

# Install CPU-only PyTorch (much smaller - ~200MB vs ~2GB+ with CUDA)
# Since the model uses map_location=torch.device('cpu'), we don't need CUDA
RUN pip install --no-cache-dir fastapi uvicorn pillow python-multipart && \
    pip install --no-cache-dir torch torchvision --index-url https://download.pytorch.org/whl/cpu

EXPOSE 8000

CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "8000"]
