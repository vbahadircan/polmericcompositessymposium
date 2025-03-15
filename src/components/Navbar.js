import React, { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [practicalInfoDropdown, setPracticalInfoDropdown] = useState(false);
  const [conferenceDropdown, setConferenceDropdown] = useState(false);
  const [registrationDropdown, setRegistrationDropdown] = useState(false);
  const timeoutRef = useRef(null);
  const location = useLocation();

  const getLinkClass = (path) => {
    return location.pathname === path
      ? 'text-red-600 px-3 py-2 rounded-md text-base font-medium'
      : 'text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-base font-medium';
  };

  // Functions to handle Practical Information dropdown
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setPracticalInfoDropdown(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setPracticalInfoDropdown(false);
    }, 150);
  };

  // Functions to handle Conference dropdown
  const handleConferenceEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setConferenceDropdown(true);
  };

  const handleConferenceLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setConferenceDropdown(false);
    }, 150);
  };

  // Functions to handle Registration dropdown
  const handleRegistrationEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setRegistrationDropdown(true);
  };

  const handleRegistrationLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setRegistrationDropdown(false);
    }, 150);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-24 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img className="h-24 w-auto" src="/sympozium_main_logo.png" alt="Symposium Logo" />
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link to="/" className={getLinkClass('/')}>Home</Link>
            <Link to="/committees" className={getLinkClass('/committees')}>Committees</Link>

            {/* Conference Dropdown (Main link + submenus) */}
            <div className="relative" onMouseEnter={handleConferenceEnter} onMouseLeave={handleConferenceLeave}>
              <Link to="/conference" className={getLinkClass('/conference')}>Conference</Link>
              {conferenceDropdown && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md border border-gray-200 z-50"
                  onMouseEnter={handleConferenceEnter}
                  onMouseLeave={handleConferenceLeave}
                >
                  <Link to="/speakers" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Speakers</Link>
                  <Link to="/program" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Program</Link>
                </div>
              )}
            </div>

            {/* Practical Information Dropdown */}
            <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <Link to="/venue" className={getLinkClass('/venue')}>Practical Information</Link>
              {practicalInfoDropdown && (
                <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md border border-gray-200 z-50"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link to="/venue" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Venue</Link>
                  <Link to="/venue/about-izmir" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">About İzmir</Link>
                  <Link to="/venue/accommodation" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Accommodation</Link>
                  <Link to="/venue/social-program" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Social Program</Link>
                  <Link to="/venue/transportation" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Transportation</Link>
                </div>
              )}
            </div>

            <Link to="/sponsors" className={getLinkClass('/sponsors')}>Sponsors</Link>

            {/* Registration Dropdown (Main link + Submissions submenu) */}
            <div className="relative" onMouseEnter={handleRegistrationEnter} onMouseLeave={handleRegistrationLeave}>
              <Link to="/registration" className={getLinkClass('/registration')}>Registration</Link>
              {registrationDropdown && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md border border-gray-200 z-50"
                  onMouseEnter={handleRegistrationEnter}
                  onMouseLeave={handleRegistrationLeave}
                >
                  <Link to="/submissions" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Submissions</Link>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
}
