import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  const [factIndex, setFactIndex] = useState(0)
  const facts = [
    "Did you know that the first polyester resin was made in Turkey in Izmir?",
    "Did you know that the first composite part in Turkey was manufactured in Izmir ?"
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setFactIndex((prevIndex) => (prevIndex + 1) % facts.length)
    }, 5000) // Change fact every 5 seconds

    return () => clearInterval(timer)
  }, [facts.length])

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
            to="/submissions"
            className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10"
          >
            Submit Your Paper
          </Link>
          <Link
            to="/conference"
            className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-red-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
          >
            Learn More
          </Link>
        </div>
        <div className="mt-10 w-full max-w-4xl mx-auto">
          <div className="bg-white bg-opacity-90 rounded-lg shadow-md p-3">
            <h3 className="text-lg font-bold text-gray-900 mb-2">DID YOU KNOW ?</h3>
            <p className="text-gray-700 text-lg">{facts[factIndex]}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

