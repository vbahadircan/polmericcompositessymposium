import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-red-500 to-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
          <span className="block">6th INTERNATIONAL</span>
          <span className="block">POLYMERIC COMPOSITES</span>
          <span className="block">SYMPOSIUM AND WORKSHOPS</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-white sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          October 2–4, 2025 • Tepekule Convention and Exhibition Centre, İzmir, Turkey
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Link
            to="/registration"
            className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-red-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
          >
            Register Now
          </Link>
          <Link
            to="/about"
            className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  )
}

