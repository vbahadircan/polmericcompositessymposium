import React from 'react'


export default function OrganizerLogos() {
  const logos = [
    { name: 'Organizer 2', src: "/assets/logo2.webp" },
    { name: 'Organizer 3', src: "/assets/logo3.webp" },
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
                className="max-h-36 max-w-[280px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}