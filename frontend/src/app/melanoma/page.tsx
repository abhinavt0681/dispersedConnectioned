'use client';

import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import Image from 'next/image';
import { motion } from 'framer-motion';
import axios from 'axios';

export default function MelanomaDetection() {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setError(null);
    setResult(null);
    const file = acceptedFiles[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': [],
      'image/png': [],
      'image/jpg': []
    },
    maxFiles: 1,
    multiple: false
  });

  const handleSubmit = async () => {
    if (!image) {
      setError('Please upload an image first');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append('image', image);

      // Replace with your API endpoint
      const response = await axios.post('/api/melanoma-detection', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setResult(response.data.result);
    } catch (err) {
      console.error('Error uploading image:', err);
      setError('An error occurred while analyzing the image. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setImage(null);
    setPreview(null);
    setResult(null);
    setError(null);
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Melanoma Detection</h1>
        <p className="text-text-light max-w-3xl mx-auto">
          Upload an image of a skin lesion and our AI will analyze it for potential melanoma or other skin conditions.
          This tool is for informational purposes only and should not replace professional medical advice.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="card">
          <h2 className="text-xl font-bold mb-4">Upload Your Image</h2>
          
          <div 
            {...getRootProps()} 
            className={`border-2 border-dashed rounded-lg p-8 mb-4 flex flex-col items-center justify-center cursor-pointer transition-colors ${
              isDragActive ? 'border-primary bg-primary/5' : 'border-gray-300 hover:border-primary/60'
            }`}
          >
            <input {...getInputProps()} />
            
            {preview ? (
              <div className="relative w-full h-64 mb-4">
                <Image 
                  src={preview} 
                  alt="Preview" 
                  fill
                  style={{ objectFit: 'contain' }}
                  className="rounded-lg"
                />
              </div>
            ) : (
              <div className="text-center">
                <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-text mb-2">
                  {isDragActive ? 'Drop the image here' : 'Drag and drop an image here, or click to select'}
                </p>
                <p className="text-sm text-text-light">
                  Supported formats: JPG, JPEG, PNG
                </p>
              </div>
            )}
          </div>
          
          {preview && (
            <div className="flex gap-4 mb-4">
              <button
                onClick={resetForm}
                className="btn-outline flex-1"
              >
                Reset
              </button>
              <button
                onClick={handleSubmit}
                disabled={loading}
                className={`btn-primary flex-1 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {loading ? 'Analyzing...' : 'Analyze Image'}
              </button>
            </div>
          )}
          
          {error && (
            <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-4">
              {error}
            </div>
          )}
        </div>
        
        <div className="card">
          <h2 className="text-xl font-bold mb-4">Analysis Results</h2>
          
          {loading ? (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
              <p className="mt-4 text-text">Analyzing your image...</p>
            </div>
          ) : result ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-4"
            >
              <div className="mb-6 p-4 rounded-lg bg-primary/10">
                <h3 className="text-lg font-bold mb-2">Detected Condition</h3>
                <p className="text-2xl font-bold text-primary">{result}</p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-bold mb-2">What does this mean?</h3>
                <p className="text-text-light mb-4">
                  Our AI model has analyzed your image and identified it as most likely
                  matching the condition shown above. Please note that this is not a medical
                  diagnosis and you should consult with a healthcare professional.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-2">Next Steps</h3>
                <ul className="list-disc pl-5 text-text-light space-y-2">
                  <li>Consult with a dermatologist or healthcare provider</li>
                  <li>Keep track of any changes in the skin lesion</li>
                  <li>Bring this analysis result to your healthcare provider</li>
                </ul>
              </div>
            </motion.div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-text-light">
              <svg className="w-16 h-16 text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p>Upload and analyze an image to see results</p>
            </div>
          )}
        </div>
      </div>
      
      <div className="card mb-12">
        <h2 className="text-xl font-bold mb-4">About Skin Cancer Detection</h2>
        <div className="prose text-text-light max-w-none">
          <p className="mb-4">
            Melanoma is a type of skin cancer that can be serious if not detected early. 
            Regular skin checks and early detection are key to successful treatment.
          </p>
          <p className="mb-4">
            Our AI model has been trained on thousands of images to help identify potential
            skin conditions, but it should not replace a professional medical evaluation.
          </p>
          <p className="font-semibold">
            Always consult with a healthcare professional for proper diagnosis and treatment.
          </p>
        </div>
      </div>
      
      <div className="bg-primary-dark text-white rounded-xl p-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
            <h2 className="text-2xl font-bold mb-4">Medical Disclaimer</h2>
            <p className="text-sm">
              This tool is designed for informational purposes only and is not intended to replace
              professional medical advice, diagnosis, or treatment. Always seek the advice of your
              physician or other qualified health provider with any questions you may have regarding
              a medical condition.
            </p>
          </div>
          <div className="md:w-1/3 text-center">
            <svg className="w-24 h-24 mx-auto text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
} 