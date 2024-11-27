import React, { useState, useEffect } from 'react'

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearTimeout(timer)
  })

  function calculateTimeLeft() {
    const difference = +new Date("2025-10-02") - +new Date()
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      }
    }

    return timeLeft
  }

  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center py-6">
          <div className="flex flex-wrap items-center justify-center space-x-4 space-y-4 sm:space-y-0">
            <div className="flex items-center">
              <span className="text-4xl font-bold text-gray-800">{String(timeLeft.days).padStart(2, '0')}</span>
              <span className="text-gray-600 mx-2 text-lg">Days</span>
              <span className="mx-2 text-gray-400 text-4xl">:</span>
            </div>
            <div className="flex items-center">
              <span className="text-4xl font-bold text-gray-800">{String(timeLeft.hours).padStart(2, '0')}</span>
              <span className="text-gray-600 mx-2 text-lg">Hours</span>
              <span className="mx-2 text-gray-400 text-4xl">:</span>
            </div>
            <div className="flex items-center">
              <span className="text-4xl font-bold text-gray-800">{String(timeLeft.minutes).padStart(2, '0')}</span>
              <span className="text-gray-600 mx-2 text-lg">Minutes</span>
              <span className="mx-2 text-gray-400 text-4xl">:</span>
            </div>
            <div className="flex items-center">
              <span className="text-4xl font-bold text-gray-800">{String(timeLeft.seconds).padStart(2, '0')}</span>
              <span className="text-gray-600 mx-2 text-lg">Seconds</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

