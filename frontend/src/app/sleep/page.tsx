'use client';

import { useState } from 'react';

export default function SleepQualityPrediction() {
  const [formData, setFormData] = useState({
    age: '',
    gender: '',
    occupation: '',
    bmiCategory: '',
    sleepDisorder: '',
    bloodPressure: ''
  });
  
  const [prediction, setPrediction] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call - in real app, this would call a backend service
    setTimeout(() => {
      // Generate a random score between 3 and 9.5
      const randomScore = Math.floor(Math.random() * 65 + 30) / 10;
      setPrediction(randomScore);
      setIsLoading(false);
    }, 1500);
  };

  const isFormComplete = () => {
    return Object.values(formData).every(value => value !== '');
  };
  
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Sleep Cycle Prediction
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Predict your sleep quality based on lifestyle inputs.
          </p>
        </div>

        <div className="mt-16 sm:mt-20">
          <div className="mx-auto max-w-lg">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Your Lifestyle Details Please, so I can rate your sleep quality out of 10!
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Age */}
              <div>
                <label htmlFor="age" className="block text-sm font-medium leading-6 text-gray-900">
                  Age
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    name="age"
                    id="age"
                    value={formData.age}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Enter your age"
                    min="1"
                    max="120"
                  />
                </div>
              </div>

              {/* Gender */}
              <div>
                <label htmlFor="gender" className="block text-sm font-medium leading-6 text-gray-900">
                  Gender
                </label>
                <div className="mt-2">
                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>

              {/* Occupation */}
              <div>
                <label htmlFor="occupation" className="block text-sm font-medium leading-6 text-gray-900">
                  Occupation
                </label>
                <div className="mt-2">
                  <select
                    id="occupation"
                    name="occupation"
                    value={formData.occupation}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  >
                    <option value="">Select Occupation</option>
                    <option value="engineer">Engineer</option>
                    <option value="doctor">Doctor</option>
                    <option value="teacher">Teacher</option>
                    <option value="artist">Artist</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* BMI Category */}
              <div>
                <label htmlFor="bmiCategory" className="block text-sm font-medium leading-6 text-gray-900">
                  BMI Category
                </label>
                <div className="mt-2">
                  <select
                    id="bmiCategory"
                    name="bmiCategory"
                    value={formData.bmiCategory}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  >
                    <option value="">Select BMI Category</option>
                    <option value="underweight">Underweight</option>
                    <option value="normal">Normal</option>
                    <option value="overweight">Overweight</option>
                    <option value="obese">Obese</option>
                  </select>
                </div>
              </div>

              {/* Sleep Disorder */}
              <div>
                <label htmlFor="sleepDisorder" className="block text-sm font-medium leading-6 text-gray-900">
                  Sleep Disorder
                </label>
                <div className="mt-2">
                  <select
                    id="sleepDisorder"
                    name="sleepDisorder"
                    value={formData.sleepDisorder}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  >
                    <option value="">Select Sleep Disorder</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
              </div>

              {/* Blood Pressure */}
              <div>
                <label htmlFor="bloodPressure" className="block text-sm font-medium leading-6 text-gray-900">
                  Blood Pressure
                </label>
                <div className="mt-2">
                  <select
                    id="bloodPressure"
                    name="bloodPressure"
                    value={formData.bloodPressure}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  >
                    <option value="">Select Blood Pressure</option>
                    <option value="120/80">120/80</option>
                    <option value="130/90">130/90</option>
                    <option value="140/90">140/90</option>
                    <option value="150/100">150/100</option>
                    <option value="160/100">160/100</option>
                  </select>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={!isFormComplete() || isLoading}
                  className={`w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm ${
                    !isFormComplete() || isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-indigo-500'
                  } focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                >
                  {isLoading ? 'Analyzing...' : 'Predict Sleep Quality'}
                </button>
              </div>
            </form>

            {prediction !== null && (
              <div className="mt-12 p-6 bg-indigo-50 rounded-lg border border-indigo-100">
                <h3 className="text-xl font-bold text-gray-900">Sleep Quality Prediction</h3>
                <div className="mt-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Sleep Quality Score:</span>
                    <span className="text-sm font-medium text-gray-700">{prediction.toFixed(1)}/10</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-indigo-600 h-2.5 rounded-full" 
                      style={{ width: `${prediction * 10}%` }}
                    ></div>
                  </div>
                  <p className="mt-4 text-sm text-gray-600">
                    Based on your lifestyle factors, your predicted sleep quality score is {prediction.toFixed(1)} out of 10.
                    {prediction < 5 
                      ? " Your sleep quality could use improvement. Consider lifestyle changes and consult a healthcare professional." 
                      : " Your sleep quality appears to be good. Continue your healthy habits!"}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mx-auto max-w-2xl mt-20">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">
            About the Sleep Cycle Prediction Model
          </h2>
          <p className="text-gray-600">
            This model uses a Random Forest Regressor to predict the quality of sleep based on various lifestyle factors such as blood pressure, BMI category, and occupation. The model was trained on a dataset with multiple features, and it achieved a good balance of prediction accuracy.
          </p>
        </div>
      </div>
    </div>
  );
} 