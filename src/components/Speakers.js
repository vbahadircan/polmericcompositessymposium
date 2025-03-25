import React from 'react'

const plenarySpeakers = [
  {
    name: 'Prof. Michael Wisnom',
    title: 'School of Civil, Aerospace and Design Engineering, University of Bristol\nBristol Composites Institute',
    img: 'plenary2.JPG',
    pdf: '/speaker2.pdf'
  },
  {
    name: 'Prof. Marino Quaresimin',
    title: 'Department of Management and Engineering at the University of Padova',
    img: 'plenary1.jpg',
    pdf: '/speaker1.pdf'
  }
]

const invitedSpeakers = [
  {
    name: 'Dr. Salim Belouettar',
    title: 'Luxembourg Institute of Science & Technology - LIST',
    img: 'invited1.jpg',
    pdf: '/speaker3.pdf'
  },
  {
    name: 'Dr. Jozsef Gabor KOVACS',
    title: 'Budapest University of Technology and Economics\nMTA-BME Lendület Lightweight Polymer Composites Research Group',
    img: 'invited2.jpg',
    pdf: '/speaker4.pdf'
  }
]

export default function Speakers() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Plenary Speakers */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Plenary Speakers</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {plenarySpeakers.map((speaker, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center bg-gray-50 p-6 rounded-lg shadow-md"
            >
              <img
                src={speaker.img}
                alt={speaker.name}
                className="w-32 h-32 rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900">{speaker.name}</h3>
              <p className="text-gray-600">{speaker.title}</p>
              <a
                href={speaker.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                View Bio
              </a>
            </div>
          ))}
        </div>

        {/* Invited Speakers */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Invited Speakers</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {invitedSpeakers.map((speaker, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center bg-gray-50 p-6 rounded-lg shadow-md"
            >
              <img
                src={speaker.img}
                alt={speaker.name}
                className="w-32 h-32 rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900">{speaker.name}</h3>
              <p className="text-gray-600">{speaker.title}</p>
              <a
                href={speaker.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                View Bio
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
