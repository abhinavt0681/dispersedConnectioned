'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function MelanomaDetection() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [prediction, setPrediction] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;
    
    setFile(selectedFile);
    
    // Create preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(selectedFile);
    
    // Reset prediction
    setPrediction(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const conditions = [
        'Melanoma', 
        'Basal Cell Carcinoma', 
        'Squamous Cell Carcinoma',
        'Actinic Keratosis',
        'Nevus (Mole)',
        'Seborrheic Keratosis',
        'Dermatofibroma',
        'Pigmented Benign Keratosis',
        'Vascular Lesion'
      ];
      const randomCondition = conditions[Math.floor(Math.random() * conditions.length)];
      setPrediction(randomCondition);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Skin Cancer and Lesion Detector
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Upload a photo of the skin patch, to find the type of skin cancer or lesion.
          </p>
        </div>

        <div className="mt-16 sm:mt-20">
          <form onSubmit={handleSubmit} className="mx-auto max-w-2xl">
            <div className="mb-8 border-2 border-dashed border-gray-300 rounded-lg p-12 text-center cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
                id="file-upload"
              />
              <label htmlFor="file-upload" className="cursor-pointer">
                {preview ? (
                  <div className="mt-4 mx-auto relative w-64 h-64">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={preview} 
                      alt="Preview" 
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                ) : (
                  <>
                    <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="mt-2 text-sm text-gray-600">
                      Drag and drop a file here, or click to select a file
                    </p>
                    <p className="mt-1 text-xs text-gray-500">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </>
                )}
              </label>
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={!file || isLoading}
                className={`rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm ${
                  !file || isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-indigo-500'
                } focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
              >
                {isLoading ? 'Analyzing...' : 'Analyze Skin Image'}
              </button>
            </div>

            {prediction && (
              <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">Analysis Result</h2>
                <p className="mt-2 text-gray-700">
                  The uploaded image appears to show signs of:
                </p>
                <p className="mt-2 text-2xl font-bold text-indigo-600">{prediction}</p>
                <p className="mt-4 text-sm text-gray-500">
                  Note: This is a demonstration and not a medical diagnosis. Please consult with a healthcare professional for proper medical advice.
                </p>
              </div>
            )}
          </form>
        </div>

        <div className="mt-20 mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            About the Skin Condition Classifier
          </h2>
          
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-sm font-medium text-gray-500">Training Data Size</p>
              <p className="mt-2 text-xl font-semibold text-gray-900">602 MiB</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-sm font-medium text-gray-500">Accuracy</p>
              <p className="mt-2 text-xl font-semibold text-gray-900">49.5%</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-sm font-medium text-gray-500">Training Data</p>
              <p className="mt-2 text-xl font-semibold text-gray-900">ISIC labelled dataset</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-sm font-medium text-gray-500">Number of Diseases Classified</p>
              <p className="mt-2 text-xl font-semibold text-gray-900">9</p>
            </div>
          </div>

          <div className="mt-8 space-y-6 text-gray-600">
            <p>
              This deep learning model was built using a pre-trained ResNet-18 architecture, which is fine-tuned to classify nine types of skin lesions. The model was trained on a modest dataset of 602 MiB with advanced data augmentation techniques to simulate real-world variations, such as random horizontal flipping, rotation, and resized cropping. Despite the small dataset size, the model achieved an accuracy of 49.5% on the test set.
            </p>
            <p>
              The training and evaluation were performed on a machine running <span className="font-semibold">Ubuntu</span> with an <span className="font-semibold">NVIDIA RTX 3070 TI GPU</span> with CUDA version 12.4, which allowed efficient processing of images and faster training times. I trained the model over 20 epochs using a combination of Adam optimizer and a learning rate scheduler, to improve the model performance from 37% accuracy to 49.5%.
            </p>
            <p>
              The end user is always in my mind when making projects. I focus not just on making the model, but also making it very easy to use. So little details like making it crystal clear where to click, direct navigation, and good UX design are all important to me. This model is deployed on its own Docker container with FastAPI, showcasing my skills in CI/CD frameworks and microservice architecture.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-bold text-gray-900">Model Can Classify the Following Skin Diseases</h3>
            
            <div className="mt-6">
              <h4 className="text-lg font-semibold text-gray-900">Cancerous Conditions:</h4>
              <ul className="mt-4 space-y-3 text-gray-600 list-disc list-inside">
                <li><span className="font-semibold">Melanoma:</span> A serious form of skin cancer that originates in the melanocytes, the cells that produce pigment.</li>
                <li><span className="font-semibold">Basal Cell Carcinoma:</span> The most common type of skin cancer, arising from the basal cells in the epidermis.</li>
                <li><span className="font-semibold">Squamous Cell Carcinoma:</span> A type of skin cancer that arises from squamous cells, which are flat cells in the outer part of the epidermis.</li>
              </ul>
            </div>

            <div className="mt-6">
              <h4 className="text-lg font-semibold text-gray-900">Pre-cancerous Condition:</h4>
              <ul className="mt-4 space-y-3 text-gray-600 list-disc list-inside">
                <li><span className="font-semibold">Actinic Keratosis:</span> A rough, scaly patch on the skin caused by years of sun exposure. It can sometimes progress to squamous cell carcinoma if left untreated.</li>
              </ul>
            </div>

            <div className="mt-6">
              <h4 className="text-lg font-semibold text-gray-900">Benign (Non-cancerous) Conditions:</h4>
              <ul className="mt-4 space-y-3 text-gray-600 list-disc list-inside">
                <li><span className="font-semibold">Nevus (Mole):</span> A benign growth of melanocytes, which can occasionally turn into melanoma but are generally non-cancerous.</li>
                <li><span className="font-semibold">Seborrheic Keratosis:</span> A common non-cancerous skin growth that often appears in older adults. It has a waxy, wart-like appearance.</li>
                <li><span className="font-semibold">Dermatofibroma:</span> A benign, fibrous skin nodule, often found on the lower legs.</li>
                <li><span className="font-semibold">Pigmented Benign Keratosis:</span> Similar to seborrheic keratosis, it's a benign skin growth that has a pigmented appearance.</li>
                <li><span className="font-semibold">Vascular Lesion:</span> These are benign growths or anomalies of blood vessels, like hemangiomas, and are generally not cancerous.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 