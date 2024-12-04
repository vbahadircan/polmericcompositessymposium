import React from 'react'

export default function Speakers() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Keynote Speakers</h2>
        <div className="text-center">
          <div className="bg-gray-100 p-8 rounded-lg shadow-inner">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Interested in Speaking?</h3>
            <p className="text-lg text-gray-700 mb-6">
              We invite experts in polymeric composites to join us as speakers. Share your knowledge, 
              research findings, and industry insights with a global audience of professionals and academics.
            </p>
            <a 
              href="mailto:symposium@polymericcomposites.org" 
              className="inline-block bg-red-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition duration-300"
            >
              Contact Us to Speak
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

