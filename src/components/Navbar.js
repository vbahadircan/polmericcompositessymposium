import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import sypozium_main_logo from '../assets/sympozium_main_logo.webp'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const getLinkClass = (path) => {
    return location.pathname === path
      ? 'text-red-600 px-3 py-2 rounded-md text-base font-medium'
      : 'text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-base font-medium'
  }

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-24">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img
                className="h-24 w-auto"
                src={sypozium_main_logo}
                alt="Symposium Logo"
              />
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link to="/" className={getLinkClass('/')}>Home</Link>
            <Link to="/conference" className={getLinkClass('/conference')}>Conference</Link>
            <Link to="/venue" className={getLinkClass('/venue')}>Venue</Link>
            <Link to="/submissions" className={getLinkClass('/submissions')}>Submissions</Link>
            <Link to="/committees" className={getLinkClass('/committees')}>Committees</Link>
            <Link to="/sponsors" className={getLinkClass('/sponsors')}>Sponsors</Link>
            <Link to="/registration" className={getLinkClass('/registration')}>Registration</Link>
            <Link to="/contact" className={getLinkClass('/contact')}>Contact</Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Home</Link>
          <Link to="/conference" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Conference</Link>
          <Link to="/venue" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Venue</Link>
          <Link to="/submissions" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Submissions</Link>
          <Link to="/committees" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Committees</Link>
          <Link to="/sponsors" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Sponsors</Link>
          <Link to="/registration" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Registration</Link>
          <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Contact</Link>
        </div>
      </div>
    </nav>
  )
}

