import React from 'react'
import main_logo from '../assets/sympozium_main_logo.webp'
import logo2 from '../assets/logo2.webp'
import logo3 from '../assets/logo3.webp'

export default function OrganizerLogos() {
  const logos = [
    { name: 'Organizer 1', src: main_logo },
    { name: 'Organizer 2', src: logo2 },
    { name: 'Organizer 3', src: logo3 },
  ]

  return (
    <section className="w-full bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-8">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center m-4">
              <img
                src={logo.src}
                alt={`${logo.name} logo`}
                className="max-h-28 max-w-[280px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}