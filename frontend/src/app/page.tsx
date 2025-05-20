'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      {/* Hero section - DO NOT TOUCH */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-800 to-blue-900">
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <h4 className="mt-10 text-6xl font-bold tracking-tight text-white sm:text-3xl">
                  Hi, I am Abhinav (or Alex)! Thanks for checking in!<br />
                </h4>
                <h4 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-xl">
                  Feel free to explore my Business Intelligence Analytics or Machine Learning models. <br /> I made them very easy to use!              
                </h4>
                
                <div className="mt-10 flex items-center gap-x-6">
                  <Link
                    href="/melanoma"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Skin Desease Classifier
                  </Link>
                  <Link
                    href="/realestatebi"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Real Estate Intelligence
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
            <div className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-blue-900 shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 md:-mr-20 lg:-mr-36" aria-hidden="true" />
            <div className="shadow-lg md:rounded-3xl">
              <div className="bg-indigo-500 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
                <div className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36" aria-hidden="true" />
                <div className="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
                  <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                    <div className="w-screen overflow-hidden rounded-tl-xl bg-gray-900">
                      <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                        <div className="-mb-px flex text-sm font-medium leading-6 text-gray-400">
                          <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                            AIModel.py
                          </div>
                          <div className="border-r border-gray-600/10 px-4 py-2">
                            Output.json
                          </div>
                        </div>
                      </div>
                      <div className="px-6 pt-6 pb-14 text-sm font-mono text-green-400">
                        <div>
                          <span className="text-gray-300">{'# Melanoma detection model'}</span>
                        </div>
                        <div className="mt-4">
                          <span className="text-pink-400">{'from'}</span>
                          <span className="text-white">{' tensorflow '}</span>
                          <span className="text-pink-400">{'import'}</span>
                          <span className="text-white">{' keras'}</span>
                        </div>
                        <div className="mt-2">
                          <span className="text-pink-400">{'import'}</span>
                          <span className="text-white">{' numpy '}</span>
                          <span className="text-pink-400">{'as'}</span>
                          <span className="text-white">{' np'}</span>
                        </div>
                        <div className="mt-6">
                          <span className="text-pink-400">{'def'}</span>
                          <span className="text-white">{' predict_melanoma(image):'}</span>
                        </div>
                        <div className="ml-8 mt-2">
                          <span className="text-white">{'model = keras.models.load_model("melanoma.h5")'}</span>
                        </div>
                        <div className="ml-8 mt-2">
                          <span className="text-white">{'preprocessed = preprocess_image(image)'}</span>
                        </div>
                        <div className="ml-8 mt-2">
                          <span className="text-white">{'prediction = model.predict(preprocessed)'}</span>
                        </div>
                        <div className="ml-8 mt-2">
                          <span className="text-white">{'return prediction'}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 md:rounded-3xl" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dark section for recruiters - similar to dispersedconnection.com */}
      <div className="bg-gray-900 py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            {/* Left side - Terminal display */}
            <div className="mb-10 lg:mb-0">
              <div className="rounded-lg bg-gray-800 p-4 text-white font-mono text-sm overflow-hidden">
                <div className="mb-2 text-gray-400">alex@dispersed:~$</div>
                <div className="font-mono text-xs sm:text-sm mb-2">
                  <span className="text-green-400">{'(base) $ ./aboutme.py --v 1 | less'}</span>
                </div>
                
                <div className="bg-black p-3 rounded">
                  <div className="text-gray-300 mb-1">
                    Hi! I am Abhinav
                  </div>
                  <div className="text-gray-400 mb-2">
                    <span className="text-blue-400">#!/usr/bin/env python</span>
                  </div>
                  <div className="text-gray-400 mb-2">
                    Boston, MA · +1-617-586-9406 · abhinavt@bu.edu
                  </div>
                  
                  <div className="border-t border-gray-700 my-3"></div>
                  
                  <div className="grid grid-cols-4 gap-1 text-xs">
                    <div className="text-gray-500">HOST</div>
                    <div className="text-gray-300">CPU THREADS</div>
                    <div className="text-gray-300">DEVICE DETAILS</div>
                    <div className="text-gray-300">RAM CAPACITY</div>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-1 text-xs">
                    <div className="text-blue-400">localhost</div>
                    <div className="text-green-400">12</div>
                    <div className="text-yellow-400">NVIDIA RTX 3070</div>
                    <div className="text-purple-400">32GB</div>
                  </div>
                  
                  <div className="border-t border-gray-700 my-3"></div>
                  
                  <div className="text-gray-400 mb-1">$ Frameworks</div>
                  <div className="grid grid-cols-4 gap-1 text-xs mb-2">
                    <div className="text-gray-500">CUDA</div>
                    <div className="text-gray-500">PyTorch</div>
                    <div className="text-gray-500">Docker</div>
                    <div className="text-gray-500">Kubernetes</div>
                  </div>
                  <div className="grid grid-cols-4 gap-1 text-xs">
                    <div className="text-green-400">12.5</div>
                    <div className="text-yellow-400">2.0.1</div>
                    <div className="text-blue-400">24.0.2</div>
                    <div className="text-purple-400">1.28</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right side - Text content */}
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl font-bold text-white mb-4">
                I am an Analytics & Machine Learning Engineer
              </h2>
              <h3 className="text-2xl font-semibold text-white mb-6">
                I Develop & Deploy Business Intelligence & Machine Learning solutions for Humans
              </h3>
              
              <p className="text-gray-300 mb-4">
                This Website is the union of the technologies I know to serve something useful.
              </p>
              
              <p className="text-gray-300 mb-6">
                All the complexities are buried, and only relevant parts are exposed in
                simple language so it can be fully used by a very distracted 21st-
                century individual.
              </p>
              
              <p className="text-gray-400 mb-2">
                The code for this website can be cloned using:
              </p>
              
              <div className="bg-gray-800 p-3 rounded mb-6">
                <code className="text-green-400">
                  git clone https://github.com/abhinavt5881/dispersedConnection
                </code>
              </div>
              
              <p className="text-gray-300 mb-4">
                The website is built using Next.js (that i hate). Each application is its own
                Dockerized microservice, communicating with the website using
                FastAPI (that i love).
              </p>
              
              <p className="text-gray-300">
                Each Machine Learning/Deep Learning application & Business Intelligence solution was trained and created by me,
                on my little laptop. And this website is being served from an AWS EC2 instance.
              </p>
            </div>
          </div>
          
          {/* Tech icons section - Updated with proper paths and new icons */}
          <div className="mt-10 grid grid-cols-3 gap-8 md:grid-cols-6">
            <div className="flex justify-center">
              <Image src="/github.png" alt="GitHub" width={64} height={64} className="object-contain" />
            </div>
            <div className="flex justify-center">
              <Image src="/aws_.png" alt="AWS" width={64} height={64} className="object-contain" />
            </div>
            <div className="flex justify-center">
              <Image src="/kubernetes.png" alt="Kubernetes" width={64} height={64} className="object-contain" />
            </div>
            <div className="flex justify-center">
              <Image src="/ubuntu.png" alt="Ubuntu" width={64} height={64} className="object-contain" />
            </div>
            <div className="flex justify-center">
              <Image src="/docker.png" alt="Docker" width={64} height={64} className="object-contain" />
            </div>
            <div className="flex justify-center">
              <Image src="/torch.png" alt="PyTorch" width={64} height={64} className="object-contain" />
            </div>
          </div>
          
          {/* BI Tools icons section */}
          <div className="mt-6 grid grid-cols-3 gap-8 md:grid-cols-6">
            <div className="flex justify-center">
              <Image src="/pandas.png" alt="Pandas" width={64} height={64} className="object-contain" />
            </div>
            <div className="flex justify-center">
              <Image src="/spark.png" alt="Apache Spark" width={64} height={64} className="object-contain" />
            </div>
            <div className="flex justify-center">
              <Image src="/tableau.png" alt="Tableau" width={64} height={64} className="object-contain" />
            </div>
            <div className="flex justify-center">
              <Image src="/Microsoft-Power-BI-Symbol.png" alt="Power BI" width={64} height={64} className="object-contain" />
            </div>
            <div className="flex justify-center">
              <Image src="/python.png" alt="Python" width={64} height={64} className="object-contain" />
            </div>
            <div className="flex justify-center">
              <Image src="/sql.png" alt="SQL" width={64} height={64} className="object-contain" />
            </div>
          </div>
          
          {/* Technology stack section - with duplicated lists */}
          <div className="mt-10 lg:grid lg:grid-cols-2 lg:gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">My Machine/Deep Learning stack includes:</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Nvidia CUDA 12.5 on Debian</li>
                <li>• PyTorch, Tensorflow</li>
                <li>• Spark, Numpy, Pandas, sklearn</li>
                <li>• Python/C++</li>
                <li>• Anaconda</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">Data stack includes:</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Jupyter</li>
                <li>• Datalakes (S3), Lakehouse (databricks), Snowflake</li>
                <li>• Relational DBs (Postgres or AWS RDS), vector DBs</li>
                <li>• Matplotlib, seaborn (visualization)</li>
                <li>• SQL, Spark and Pandas (ETL)</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">MLOps/DevOps/CI/CD Stack includes:</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• AWS (EC2, S3, Lambda)</li>
                <li>• Docker, Kubernetes (Containerization/Scaling)</li>
                <li>• Terraform, shell scripting, Grafana (monitoring, time-series)</li>
                <li>• FastAPI and Flask</li>
                <li>• Git</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">Analysis and Intelligence Delivery Stack includes:</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• BI Applications (PowerBI, tableau, Looker etc)</li>
                <li>• Recharts, Plotly</li>
                <li>• NextJS, React</li>
                <li>• FastAPI, Flask</li>
                <li>• Django</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Architecture Diagram Section */}
      <div className="bg-white py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Technical Architecture
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              End-to-end implementation of ML microservices with containerized deployment
            </p>
          </div>
          
          {/* Featured Architecture Image */}
          <div className="mx-auto max-w-4xl mb-10 flex justify-center">
            <div className="rounded-xl overflow-hidden shadow-lg border border-indigo-100">
              <Image 
                src="/pic01.png" 
                alt="Architecture Overview" 
                width={800} 
                height={600} 
                className="object-contain"
                priority
              />
            </div>
          </div>

          <div className="mx-auto max-w-4xl">
            {/* Clean Architecture Diagram */}
            <div className="rounded-xl overflow-hidden shadow-xl border border-indigo-100">
              {/* User Layer */}
              <div className="flex justify-end bg-gradient-to-r from-indigo-50 to-indigo-100 p-4">
                <div className="bg-white rounded-lg shadow-md p-4 flex items-center w-48">
                  <div className="mr-3 bg-indigo-600 text-white p-2 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-lg">USER</div>
                    <div className="text-xs text-gray-500">Web Browser</div>
                  </div>
                </div>
              </div>

              {/* Architecture Layers */}
              <div className="bg-white p-6">
                {/* Infrastructure Layer */}
                <div className="mb-8">
                  <div className="text-center font-semibold text-gray-600 mb-2">INFRASTRUCTURE LAYER</div>
                  <div className="grid grid-cols-1 gap-2">
                    <div className="bg-indigo-700 text-white p-3 rounded-lg text-center font-bold">
                      DispersedConnection.com
                    </div>
                    <div className="bg-indigo-600 text-white p-3 rounded-lg text-center">
                      Ubuntu 22.04 / AWS EC2 Instance
                    </div>
                    <div className="bg-indigo-500 text-white p-3 rounded-lg text-center">
                      Nginx
                    </div>
                    <div className="bg-indigo-400 text-white p-3 rounded-lg text-center">
                      Gunicorn
                    </div>
                  </div>
                </div>

                {/* Application Layer */}
                <div className="mb-8">
                  <div className="text-center font-semibold text-gray-600 mb-4">APPLICATION LAYER</div>
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Left ML Service */}
                    <div className="flex-1 border border-indigo-200 rounded-lg p-4 bg-gradient-to-b from-white to-indigo-50">
                      <div className="text-center mb-3">
                        <div className="bg-indigo-100 inline-block p-2 rounded-full mb-1">
                          <Image src="/torch.png" alt="PyTorch" width={40} height={40} className="object-contain" />
                        </div>
                        <h3 className="font-bold text-indigo-800">Skin Lesion Classifier</h3>
                      </div>
                      <ul className="text-sm space-y-2">
                        <li className="flex items-center">
                          <span className="bg-indigo-100 p-1 rounded-full mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </span>
                          PyTorch Vision
                        </li>
                        <li className="flex items-center">
                          <span className="bg-indigo-100 p-1 rounded-full mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </span>
                          ISIC Skin liason dataset
                        </li>
                        <li className="flex items-center">
                          <span className="bg-indigo-100 p-1 rounded-full mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </span>
                          CUDA 12.5
                        </li>
                      </ul>
                      <div className="mt-4 bg-indigo-800 text-white rounded-md p-2 text-center text-sm">
                        FastAPI Docker Container
                      </div>
                    </div>

                    {/* Center Web Framework */}
                    <div className="flex-1 border border-indigo-200 rounded-lg p-4 bg-gradient-to-b from-white to-indigo-50">
                      <div className="text-center mb-4">
                        <div className="bg-indigo-100 inline-block p-2 rounded-full mb-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-1.65" />
                          </svg>
                        </div>
                        <h3 className="font-bold text-indigo-800 text-lg">Django Web Framework</h3>
                      </div>
                      <div className="bg-white border border-indigo-200 rounded-md p-3 mb-4">
                        <div className="text-center font-medium text-indigo-700">Front End</div>
                        <div className="flex justify-center gap-2 mt-2">
                          <span className="px-2 py-1 bg-indigo-100 rounded text-xs">Bootstrap</span>
                          <span className="px-2 py-1 bg-indigo-100 rounded text-xs">HTML/CSS</span>
                          <span className="px-2 py-1 bg-indigo-100 rounded text-xs">JavaScript</span>
                        </div>
                      </div>
                      <div className="flex justify-center gap-3 text-xs">
                        <div className="flex flex-col items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>API Call</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>Response</span>
                        </div>
                      </div>
                    </div>

                    {/* Right ML Service */}
                    <div className="flex-1 border border-indigo-200 rounded-lg p-4 bg-gradient-to-b from-white to-indigo-50">
                      <div className="text-center mb-3">
                        <div className="bg-indigo-100 inline-block p-2 rounded-full mb-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        </div>
                        <h3 className="font-bold text-indigo-800">Sleep Quality Predictor</h3>
                      </div>
                      <ul className="text-sm space-y-2">
                        <li className="flex items-center">
                          <span className="bg-indigo-100 p-1 rounded-full mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </span>
                          Scikit Learn
                        </li>
                        <li className="flex items-center">
                          <span className="bg-indigo-100 p-1 rounded-full mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </span>
                          Random Forests
                        </li>
                        <li className="flex items-center">
                          <span className="bg-indigo-100 p-1 rounded-full mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </span>
                          Sleep Quality dataset
                        </li>
                      </ul>
                      <div className="mt-4 bg-indigo-800 text-white rounded-md p-2 text-center text-sm">
                        FastAPI Docker Container
                      </div>
                    </div>
                  </div>
                </div>

                {/* Flow descriptions */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <div className="font-medium text-indigo-700 mb-2">Left Flow: Skin Lesion Detection</div>
                    <ul className="text-sm space-y-2">
                      <li className="flex items-start">
                        <span className="bg-red-100 text-red-700 p-1 rounded-full mr-2 mt-0.5">1</span>
                        <span>API Call: Upload skin lesion image</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-red-100 text-red-700 p-1 rounded-full mr-2 mt-0.5">2</span>
                        <span>Return Type of Skin Lesion prediction</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <div className="font-medium text-indigo-700 mb-2">Right Flow: Sleep Quality Analysis</div>
                    <ul className="text-sm space-y-2">
                      <li className="flex items-start">
                        <span className="bg-red-100 text-red-700 p-1 rounded-full mr-2 mt-0.5">1</span>
                        <span>API Call: Send user lifestyle information</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-red-100 text-red-700 p-1 rounded-full mr-2 mt-0.5">2</span>
                        <span>Return Sleep Quality prediction</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="bg-indigo-50 p-6 border-t border-indigo-200">
                <div className="flex flex-col md:flex-row justify-between">
                  <div className="mb-4 md:mb-0">
                    <div className="font-bold text-indigo-800">Built end-to-end by</div>
                    <div className="text-lg font-semibold">Abhinav Tyagi</div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <span className="text-sm">Automatic SSL installation</span>
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                      </svg>
                      <span className="text-sm">CI/CD Framework for modularity</span>
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                      <span className="text-sm">Models on Docker Containers</span>
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span className="text-sm">Single Command deployment</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature section - with white background */}
      <div className="bg-white mx-auto mt-6 max-w-7xl px-6 sm:mt-8 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">My AI Projects</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Play with My Systems!
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Everything is trained on real datasets and models return real time inferencing. You can use them! Very easily too!
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <div className="h-5 w-5 flex-none text-indigo-600">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                </div>
                Melanoma & Lesions Classifier
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  This Deep Learning Model will return the type of cancer/skin lesion in the photo of a diseased skin patch you upload. Built using PyTorch and a pre-trained ResNet-18 architecture.
                </p>
                <p className="mt-6">
                  <Link 
                    href="/melanoma" 
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Check It out!
                  </Link>
                </p>
              </dd>
            </div>

            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <div className="h-5 w-5 flex-none text-indigo-600">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M5 5a5 5 0 0110 0v2A5 5 0 015 7V5zM0 16.68A19.9 19.9 0 0110 14c3.64 0 7.06.97 10 2.68V20H0v-3.32z" />
                  </svg>
                </div>
                Sleep Quality Analysis
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  Sleep Quality Rating System based on Random Forests. This model uses a Random Forest Regressor to predict the quality of sleep based on various lifestyle factors.
                </p>
                <p className="mt-6">
                  <Link 
                    href="/sleep" 
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Check It out!
                  </Link>
                </p>
              </dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Experience and Education section - with dark background */}
      <div className="bg-gray-900 py-10 mt-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-8">
              Experience & Education
            </h2>
            
            {/* Experience */}
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="rounded-lg bg-gray-800 p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Grace Harbor, Business ML Engineer</h3>
                <p className="text-gray-400 mb-3">Present role | Lexington, MA</p>
                <p className="text-gray-300">
                  $3 Million dollar value addition to the company with leading Real Estate analytics solution in Massachusetts.
                </p>
              </div>
              
              <div className="rounded-lg bg-gray-800 p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Machine Learning Engineer, Vayu Biotechnology</h3>
                <p className="text-gray-300">
                  Scoped and deployed ML algorithms for pharmaceutical industry supply chain management, quality monitoring and distribution adding 15$ million dollar plus value for our clients.
                </p>
              </div>
            </div>
            
            {/* Education */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="rounded-lg bg-gray-800 p-6">
                <h3 className="text-xl font-semibold text-white mb-2">MS In Applied Business Analytics</h3>
                <p className="text-gray-400 mb-1">Boston University</p>
                <p className="text-gray-400 mb-1">3.6/4.0</p>
                <p className="text-gray-400">Sep 2023 – Aug 2024 | Boston, USA</p>
              </div>
              
              <div className="rounded-lg bg-gray-800 p-6">
                <h3 className="text-xl font-semibold text-white mb-2">PG Diploma in AI & Machine Learning</h3>
                <p className="text-gray-400 mb-1">IIIT-Bangalore</p>
                <p className="text-gray-400">Aug 2022 – Oct 2023 | Bangalore, India</p>
              </div>
              
              <div className="rounded-lg bg-gray-800 p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Bachelor of Mechanical Engineering</h3>
                <p className="text-gray-400 mb-1">RGPV Bhopal</p>
                <p className="text-gray-400">Aug 2012 – Aug 2016 | India</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="mt-10 sm:mt-16">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-16 text-center shadow-2xl sm:rounded-3xl sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Connect with me!
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Abhinav Tyagi<br/>
            4 Vinal St, Brighton, Boston 02135, MA<br/>
            abhinavt@bu.edu | +1-6175869406
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="https://github.com/abhinavt0681"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/abhinav-tyagi-201173235/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold leading-6 text-white"
            >
              LinkedIn <span aria-hidden="true">→</span>
            </a>
          </div>
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
            aria-hidden="true"
          >
            <circle cx="512" cy="512" r="512" fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                <stop stopColor="#7775D6" />
                <stop offset="1" stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
} 