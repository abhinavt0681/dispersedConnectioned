'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';

type FormInputs = {
  age: number;
  gender: string;
  occupation: string;
  bmi_category: string;
  sleep_disorder: string;
  blood_pressure: string;
};

export default function SleepQualityPrediction() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInputs>({
    defaultValues: {
      age: 30,
      gender: 'Male',
      occupation: 'Office Worker',
      bmi_category: 'Normal',
      sleep_disorder: 'None',
      blood_pressure: '120/80',
    }
  });
  
  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    setLoading(true);
    setError(null);
    
    try {
      // Replace with your API endpoint
      const response = await axios.post('/api/sleep-prediction', data);
      setResult(response.data.prediction);
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('An error occurred while analyzing your data. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  
  const resetForm = () => {
    reset();
    setResult(null);
    setError(null);
  };
  
  const occupations = [
    'Office Worker', 'Healthcare Professional', 'Teacher', 'Engineer', 
    'Sales Representative', 'Doctor', 'Nurse', 'Accountant', 'Lawyer', 
    'Software Developer'
  ];
  
  const bmiCategories = [
    'Underweight', 'Normal', 'Overweight', 'Obese'
  ];
  
  const sleepDisorders = [
    'None', 'Insomnia', 'Sleep Apnea'
  ];
  
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Sleep Quality Prediction</h1>
        <p className="text-text-light max-w-3xl mx-auto">
          Enter your details below and our AI will predict your sleep quality based on lifestyle factors.
          This analysis can help you understand factors affecting your sleep patterns.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="card">
          <h2 className="text-xl font-bold mb-6">Your Information</h2>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="age" className="block text-sm font-medium text-text-dark mb-1">
                Age
              </label>
              <input
                type="number"
                id="age"
                {...register('age', { required: 'Age is required', min: { value: 18, message: 'Must be at least 18' }, max: { value: 100, message: 'Must be at most 100' } })}
                className="input-field"
                min="18"
                max="100"
              />
              {errors.age && (
                <p className="text-red-500 text-sm mt-1">{errors.age.message}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="gender" className="block text-sm font-medium text-text-dark mb-1">
                Gender
              </label>
              <select
                id="gender"
                {...register('gender', { required: 'Gender is required' })}
                className="input-field"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              {errors.gender && (
                <p className="text-red-500 text-sm mt-1">{errors.gender.message}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="occupation" className="block text-sm font-medium text-text-dark mb-1">
                Occupation
              </label>
              <select
                id="occupation"
                {...register('occupation', { required: 'Occupation is required' })}
                className="input-field"
              >
                {occupations.map((occupation) => (
                  <option key={occupation} value={occupation}>
                    {occupation}
                  </option>
                ))}
              </select>
              {errors.occupation && (
                <p className="text-red-500 text-sm mt-1">{errors.occupation.message}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="bmi_category" className="block text-sm font-medium text-text-dark mb-1">
                BMI Category
              </label>
              <select
                id="bmi_category"
                {...register('bmi_category', { required: 'BMI category is required' })}
                className="input-field"
              >
                {bmiCategories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              {errors.bmi_category && (
                <p className="text-red-500 text-sm mt-1">{errors.bmi_category.message}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="sleep_disorder" className="block text-sm font-medium text-text-dark mb-1">
                Sleep Disorder
              </label>
              <select
                id="sleep_disorder"
                {...register('sleep_disorder', { required: 'Sleep disorder selection is required' })}
                className="input-field"
              >
                {sleepDisorders.map((disorder) => (
                  <option key={disorder} value={disorder}>
                    {disorder}
                  </option>
                ))}
              </select>
              {errors.sleep_disorder && (
                <p className="text-red-500 text-sm mt-1">{errors.sleep_disorder.message}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="blood_pressure" className="block text-sm font-medium text-text-dark mb-1">
                Blood Pressure (systolic/diastolic)
              </label>
              <input
                type="text"
                id="blood_pressure"
                {...register('blood_pressure', { 
                  required: 'Blood pressure is required',
                  pattern: { 
                    value: /^\d{2,3}\/\d{2,3}$/, 
                    message: 'Enter in format: 120/80' 
                  } 
                })}
                placeholder="120/80"
                className="input-field"
              />
              {errors.blood_pressure && (
                <p className="text-red-500 text-sm mt-1">{errors.blood_pressure.message}</p>
              )}
            </div>
            
            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={resetForm}
                className="btn-outline flex-1"
              >
                Reset
              </button>
              <button
                type="submit"
                disabled={loading}
                className={`btn-primary flex-1 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {loading ? 'Analyzing...' : 'Predict Sleep Quality'}
              </button>
            </div>
            
            {error && (
              <div className="bg-red-50 text-red-600 p-4 rounded-lg">
                {error}
              </div>
            )}
          </form>
        </div>
        
        <div className="card">
          <h2 className="text-xl font-bold mb-6">Sleep Quality Analysis</h2>
          
          {loading ? (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
              <p className="mt-4 text-text">Analyzing your data...</p>
            </div>
          ) : result ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-4"
            >
              <div className="mb-8">
                <div className="mb-4 p-6 rounded-lg bg-primary/10 text-center">
                  <h3 className="text-lg font-bold mb-2">Your Sleep Quality Score</h3>
                  <p className="text-4xl font-bold text-primary">{result}</p>
                  <p className="text-sm text-text-light mt-2">
                    On a scale from 1 (Poor) to 10 (Excellent)
                  </p>
                </div>
                
                <div className="h-6 bg-gray-200 rounded-full overflow-hidden mt-6">
                  <div 
                    className={`h-full primary-gradient`}
                    style={{ width: `${(parseInt(result) / 10) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-bold mb-2">What This Means</h3>
                <p className="text-text-light mb-4">
                  Based on your lifestyle and health factors, our AI predicts your overall sleep quality.
                  {parseInt(result) >= 7 ? (
                    ' Your sleep quality appears to be good to excellent.'
                  ) : parseInt(result) >= 4 ? (
                    ' Your sleep quality appears to be moderate and could be improved.'
                  ) : (
                    ' Your sleep quality appears to be poor and needs attention.'
                  )}
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-2">Recommendations</h3>
                <ul className="list-disc pl-5 text-text-light space-y-2">
                  {parseInt(result) < 7 && (
                    <>
                      <li>Consider evaluating your sleep environment for comfort</li>
                      <li>Maintain a consistent sleep schedule</li>
                      <li>Limit screen time before bed</li>
                    </>
                  )}
                  {parseInt(result) < 5 && (
                    <>
                      <li>Consider consulting with a healthcare provider</li>
                      <li>Monitor and manage stress levels</li>
                    </>
                  )}
                  <li>Regular exercise can improve sleep quality</li>
                  <li>Avoid caffeine and heavy meals close to bedtime</li>
                  <li>Consider tracking your sleep with a mobile app</li>
                </ul>
              </div>
            </motion.div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-text-light">
              <svg className="w-16 h-16 text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
              <p>Fill out the form to see your sleep quality prediction</p>
            </div>
          )}
        </div>
      </div>
      
      <div className="card mb-12">
        <h2 className="text-xl font-bold mb-4">About Sleep Quality Analysis</h2>
        <div className="prose text-text-light max-w-none">
          <p className="mb-4">
            Sleep quality is essential for overall health and well-being. Poor sleep can lead to various health issues, 
            including decreased cognitive function, mood disorders, and increased risk of chronic conditions.
          </p>
          <p className="mb-4">
            Our sleep quality prediction uses machine learning algorithms trained on lifestyle and health factors 
            to estimate how well you might be sleeping. This can help identify potential areas for improvement.
          </p>
          <p className="font-semibold">
            For persistent sleep issues, always consult with a healthcare professional for proper evaluation and treatment.
          </p>
        </div>
      </div>
    </div>
  );
} 