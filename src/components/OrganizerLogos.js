import React from 'react'


export default function OrganizerLogos() {
  const logos = [
    { name: 'Organizer 2', src: "/logo2.png" },
    { name: 'Organizer 3', src: "/logo3.png" },
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
                className="h-auto w-auto max-h-40 max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}