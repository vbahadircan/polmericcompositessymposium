import React from 'react'

export default function Contact() {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <div className="space-y-6">
              <div className="flex items-start">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">Email</h2>
                  <p className="mt-1 text-gray-700">symposium@polymericcomposites.org</p>
                  <p className="mt-1 text-gray-700">info@polymericcomposites.org</p>
                </div>
              </div>

              <div className="flex items-start">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">Phone & Fax</h2>
                  <p className="mt-1 text-gray-700">Tel: +90 232 421 35 35</p>
                  <p className="mt-1 text-gray-700">Fax: +90 232 464 59 08</p>
                </div>
              </div>

              <div className="flex items-start">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">Address</h2>
                  <p className="mt-1 text-gray-700">
                    TMMOB Kimya Mühendisleri Odası Ege Bölge Şubesi<br />
                    1441 Sokak No: 4 D: 5<br />
                    Alsancak, İzmir, Turkey
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Location Map</h2>
              <div className="aspect-w-16 aspect-h-9">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.7761440144896!2d27.141516315302884!3d38.43499997964601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd8e7a1f0b1a7%3A0x7b0d8b2f5d0f3c0f!2sCME%20Tepekule%20Congress%2C%20Exhibition%20and%20Business%20Center!5e0!3m2!1sen!2sus!4v1621234567890!5m2!1sen!2sus" 
                  width="100%" 
                  height="300" 
                  style={{border:0}} 
                  allowFullScreen="" 
                  loading="lazy"
                  title="Venue Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

