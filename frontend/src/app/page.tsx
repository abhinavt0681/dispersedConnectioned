'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  AI & Machine Learning Portfolio
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Showcasing innovative projects in artificial intelligence and machine learning, 
                  focused on healthcare applications and predictive modeling.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Link
                    href="/melanoma"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Melanoma Detection
                  </Link>
                  <Link href="/sleep" className="text-sm font-semibold leading-6 text-gray-900">
                    Sleep Analysis <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
            <div className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 md:-mr-20 lg:-mr-36" aria-hidden="true" />
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

      {/* Feature section */}
      <div className="mx-auto mt-12 max-w-7xl px-6 sm:mt-16 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Advanced AI Projects</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Healthcare AI Solutions
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Leveraging machine learning to solve complex healthcare challenges and improve patient outcomes.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <div className="h-5 w-5 flex-none text-indigo-600">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
                  </svg>
                </div>
                Melanoma Detection
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  Early detection of melanoma using computer vision and deep learning. Our model analyzes skin lesion
                  images to identify potential malignancies with high accuracy.
                </p>
                <p className="mt-6">
                  <Link href="/melanoma" className="text-sm font-semibold leading-6 text-indigo-600">
                    Learn more <span aria-hidden="true">→</span>
                  </Link>
                </p>
              </dd>
            </div>

            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <div className="h-5 w-5 flex-none text-indigo-600">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
                  </svg>
                </div>
                Sleep Quality Analysis
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  Predictive modeling for sleep quality assessment based on lifestyle factors, sleep patterns, and 
                  physiological data. Our algorithms provide personalized insights for better sleep.
                </p>
                <p className="mt-6">
                  <Link href="/sleep" className="text-sm font-semibold leading-6 text-indigo-600">
                    Learn more <span aria-hidden="true">→</span>
                  </Link>
                </p>
              </dd>
            </div>
          </dl>
        </div>
      </div>

      {/* CTA section */}
      <div className="mt-32 sm:mt-56">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to explore AI in healthcare?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Try our machine learning models and see the power of AI in action.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/melanoma"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Try Melanoma Detection
            </Link>
            <Link href="/sleep" className="text-sm font-semibold leading-6 text-white">
              Analyze Sleep Quality <span aria-hidden="true">→</span>
            </Link>
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