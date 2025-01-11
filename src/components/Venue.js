import React from 'react'
import SEO from './SEO'

export default function Venue() {
  return (
    <>
      <SEO 
        title="Venue Information"
        description="The symposium will be held at Tepekule Convention Centre in İzmir, Turkey. Find detailed information about the venue, accommodation options, and local attractions."
        keywords="Tepekule Convention Centre, İzmir venue, conference location, symposium venue, accommodation"
      />
      <div className="bg-gray-100 min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Venue Details</h2>
                <p className="text-gray-700 mb-2"><strong>Name:</strong> Tepekule Convention and Exhibition Centre</p>
                <p className="text-gray-700 mb-2"><strong>Address:</strong> Alsancak, 1441. Sk. No:4 D:5, 35220 Konak/İzmir, Turkey</p>
                <p className="text-gray-700 mb-2"><strong>Dates:</strong> October 2–4, 2025</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About the Venue</h2>
                <p className="text-gray-700">
                  The Tepekule Convention and Exhibition Centre is located in İzmir, Turkey, offering state-of-the-art facilities for hosting international symposiums and workshops. It provides a professional setting ideal for fostering collaboration and innovation.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                <p className="text-gray-700 mb-2"><strong>Phone:</strong> +90 232 421 35 35</p>
                <p className="text-gray-700 mb-2"><strong>Fax:</strong> +90 232 464 59 08</p>
                <p className="text-gray-700 mb-2"><strong>Email:</strong></p>
                <ul className="list-disc list-inside text-gray-700 ml-4">
                  <li>symposium@polymericcomposites.org</li>
                  <li>info@polymericcomposites.org</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Map</h2>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.7761440144896!2d27.141516315302884!3d38.43499997964601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd8e7a1f0b1a7%3A0x7b0d8b2f5d0f3c0f!2sCME%20Tepekule%20Congress%2C%20Exhibition%20and%20Business%20Center!5e0!3m2!1sen!2sus!4v1621234567890!5m2!1sen!2sus" 
                    width="100%" 
                    height="450" 
                    style={{border:0}} 
                    allowFullScreen="" 
                    loading="lazy"
                    title="Venue Map"
                  ></iframe>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

