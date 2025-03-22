import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <div className="text-gray-300 space-y-2">
              <p>Email: <a href="mailto:symposium@polymericcomposites.org" className="text-gray-300 hover:text-white underline">symposium@polymericcomposites.org</a></p>              <p>Tel: +90 232 421 35 35</p>
              <p>Fax: +90 232 464 59 08</p>
            </div>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/registration" className="text-gray-300 hover:text-white">Registration</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Address</h3>
            <p className="text-gray-300">
              TMMOB Kimya Mühendisleri Odası Ege Bölge Şubesi,<br />
              1441 Sokak No: 4 Kat: 3 D: 5<br />
              Alsancak, Izmir, Türkiye
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 6th International Polymeric Composites Symposium and Workshops. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

