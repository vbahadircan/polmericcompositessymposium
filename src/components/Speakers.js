import React from "react";

const plenarySpeakers = [
  {
    name: "Prof. Michael Wisnom",
    title:
      "School of Civil, Aerospace and Design Engineering, University of Bristol\nBristol Composites Institute",
    img: "plenary2.JPG",
    pdf: "/speaker2.pdf",
    abstract: "/wisnom.pdf",
  },
  {
    name: "Prof. Marino Quaresimin",
    title:
      "Department of Management and Engineering at the University of Padova",
    img: "plenary1.jpg",
    pdf: "/speaker1.pdf",
    abstract: "/marino.pdf",
  },
];

const invitedSpeakers = [
  {
    name: "Dr. Salim Belouettar",
    title: "Luxembourg Institute of Science & Technology - LIST",
    img: "invited1.jpg",
    pdf: "/speaker3.pdf",
    abstract: "/salim.pdf",
  },
  {
    name: "Ümmühan Eker",
    title: "Dow Aksa R&D Director",
    img: "invited3.jpg",
    pdf: "/speaker5.pdf",
  },
  {
    name: "Dr. Jozsef Gabor KOVACS",
    title:
      "Budapest University of Technology and Economics\nMTA-BME Lendület Lightweight Polymer Composites Research Group",
    img: "invited2.jpg",
    pdf: "/speaker4.pdf",
    abstract: "/kovacs.pdf",
  },
  {
    name: "Dr. Mete Bakır",
    title: "Head of Materials Engineering at Turkish Aerospace",
    img: "invited4.jpeg",
    pdf: "/speaker6.pdf",
  },
];

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
              <h3 className="text-xl font-semibold text-gray-900">
                {speaker.name}
              </h3>
              <p className="text-gray-600">{speaker.title}</p>
              <div className="mt-4 flex gap-2">
                <a
                  href={speaker.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                  View Bio
                </a>
                {speaker.abstract && (
                  <a
                    href={speaker.abstract}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
                  >
                    Read Abstract
                  </a>
                )}
              </div>
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
              <h3 className="text-xl font-semibold text-gray-900">
                {speaker.name}
              </h3>
              <p className="text-gray-600">{speaker.title}</p>
              <div className="mt-4 flex gap-2">
                <a
                  href={speaker.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                  View Bio
                </a>
                {speaker.abstract && (
                  <a
                    href={speaker.abstract}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
                  >
                    Read Abstract
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
