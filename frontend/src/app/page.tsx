'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="flex flex-col bg-background">
      {/* Hero Section */}
      <section className="primary-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              className="md:w-1/2 mb-10 md:mb-0"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                AI-Powered Health Insights
              </h1>
              <p className="text-xl mb-8">
                Advanced tools for melanoma detection and sleep quality prediction 
                in one convenient platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/melanoma" className="btn bg-white text-primary hover:bg-gray-100">
                  Detect Skin Cancer
                </Link>
                <Link href="/sleep" className="btn bg-secondary hover:bg-secondary-dark">
                  Analyze Sleep Quality
                </Link>
              </div>
            </motion.div>
            <motion.div 
              className="md:w-1/2 flex justify-center md:justify-end"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative w-full max-w-md h-80">
                {/* Placeholder for hero image */}
                <div className="absolute inset-0 bg-white/10 rounded-lg backdrop-blur-sm flex items-center justify-center">
                  <svg className="w-24 h-24 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our AI Services</h2>
            <p className="text-text max-w-2xl mx-auto">
              Leveraging cutting-edge AI technology to provide accurate health insights and predictions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <motion.div 
              className="card hover:shadow-lg transition-shadow"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Melanoma Detection</h3>
              <p className="text-text-light mb-4">
                Upload an image of a skin lesion and receive an instant assessment of potential skin cancer risks.
              </p>
              <Link href="/melanoma" className="text-primary font-medium hover:text-primary-dark">
                Detect Now →
              </Link>
            </motion.div>

            <motion.div 
              className="card hover:shadow-lg transition-shadow"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Sleep Quality Prediction</h3>
              <p className="text-text-light mb-4">
                Analyze your sleep patterns and lifestyle factors to receive personalized sleep quality insights.
              </p>
              <Link href="/sleep" className="text-secondary font-medium hover:text-secondary-dark">
                Analyze Now →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-text max-w-2xl mx-auto">
              Our platform uses advanced machine learning algorithms to provide accurate health insights in just a few steps.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Input Your Data</h3>
              <p className="text-text-light">
                Upload an image or enter your health information depending on the service you need.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">AI Analysis</h3>
              <p className="text-text-light">
                Our advanced AI models process your data using state-of-the-art algorithms.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Get Results</h3>
              <p className="text-text-light">
                Receive detailed insights and recommendations based on your specific data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Your Trust & Privacy Matter</h2>
              <p className="text-text-light max-w-2xl mx-auto">
                We take your privacy seriously and ensure your data is handled securely.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="h-12 w-12 mx-auto mb-4">
                  <svg className="h-full w-full text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Data Security</h3>
                <p className="text-text-light text-sm">
                  All uploaded images and personal information are encrypted and securely stored.
                </p>
              </div>
              <div className="text-center">
                <div className="h-12 w-12 mx-auto mb-4">
                  <svg className="h-full w-full text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Accuracy Promise</h3>
                <p className="text-text-light text-sm">
                  Our AI models are regularly updated and trained on diverse datasets for reliable results.
                </p>
              </div>
              <div className="text-center">
                <div className="h-12 w-12 mx-auto mb-4">
                  <svg className="h-full w-full text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Transparent Results</h3>
                <p className="text-text-light text-sm">
                  We provide clear explanations of our predictions and actionable insights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="primary-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Choose one of our AI-powered tools and start gaining valuable health insights today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/melanoma" className="btn bg-white text-primary hover:bg-gray-100">
              Detect Skin Cancer
            </Link>
            <Link href="/sleep" className="btn bg-secondary hover:bg-secondary-dark">
              Analyze Sleep Quality
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 