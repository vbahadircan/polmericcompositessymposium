import React, { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const [hoverDropdown, setHoverDropdown] = useState(null);
  const location = useLocation();

  const getLinkClass = (path) => {
    return location.pathname === path
      ? 'text-red-600 block px-4 py-2 text-base font-medium'
      : 'text-gray-700 hover:text-red-600 block px-4 py-2 text-base font-medium';
  };

  const handleMobileDropdownToggle = (menu) => {
    setOpenMobileDropdown(openMobileDropdown === menu ? null : menu);
  };

  return (
    <nav className="bg-white shadow-lg z-50 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link to="/">
            <img className="h-24 w-auto" src="/sympozium_main_logo.png" alt="Symposium Logo" />
          </Link>

          {/* Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-red-600 text-3xl focus:outline-none"
            >
              {isMobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/" className={getLinkClass('/')}>Home</Link>
            <Link to="/committees" className={getLinkClass('/committees')}>Committees</Link>

            {/* Desktop Dropdown - Conference */}
            <div
              className="relative"
              onMouseEnter={() => setHoverDropdown('conference')}
              onMouseLeave={() => setHoverDropdown(null)}
            >
              <Link to="/conference" className={getLinkClass('/conference')}>Conference</Link>
              {hoverDropdown === 'conference' && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md border border-gray-200 z-50">
                  <Link to="/speakers" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Speakers</Link>
                  <Link to="/program" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Program</Link>
                </div>
              )}
            </div>

            {/* Desktop Dropdown - Practical Info */}
            <div
              className="relative"
              onMouseEnter={() => setHoverDropdown('practical')}
              onMouseLeave={() => setHoverDropdown(null)}
            >
              <Link to="/venue" className={getLinkClass('/venue')}>Practical Info</Link>
              {hoverDropdown === 'practical' && (
                <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md border border-gray-200 z-50">
                  <Link to="/venue" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Venue</Link>
                  <Link to="/venue/about-Izmir" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">About Izmir</Link>
                  <Link to="/venue/accommodation" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Accommodation</Link>
                  <Link to="/venue/social-program" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Social Program</Link>
                  <Link to="/venue/transportation" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Transportation</Link>
                </div>
              )}
            </div>

            <Link to="/sponsors" className={getLinkClass('/sponsors')}>Sponsors</Link>

            {/* Desktop Dropdown - Registration */}
            <div
              className="relative"
              onMouseEnter={() => setHoverDropdown('registration')}
              onMouseLeave={() => setHoverDropdown(null)}
            >
              <Link to="/registration" className={getLinkClass('/registration')}>Registration</Link>
              {hoverDropdown === 'registration' && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md border border-gray-200 z-50">
                  <Link to="/submissions" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Submissions</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 pb-4 px-4 space-y-2">
          <Link to="/" className={getLinkClass('/')}>Home</Link>
          <Link to="/committees" className={getLinkClass('/committees')}>Committees</Link>

          {/* Conference */}
          <button
            onClick={() => handleMobileDropdownToggle('conference')}
            className="w-full text-left px-4 py-2 text-base text-gray-700 hover:text-red-600 font-medium"
          >
            Conference {openMobileDropdown === 'conference' ? '▲' : '▼'}
          </button>


          {openMobileDropdown === 'conference' && (
            <div className="ml-4 space-y-1 text-sm">
              <Link to="/speakers" className="block hover:text-red-600">↳ Speakers</Link>
              <Link to="/program" className="block hover:text-red-600">↳ Program</Link>
            </div>
          )}

          {/* Practical Info */}
          <button
            onClick={() => handleMobileDropdownToggle('practical')}
            className="w-full text-left px-4 py-2 text-base text-gray-700 hover:text-red-600 font-medium"
          >
            Practical Info {openMobileDropdown === 'practical' ? '▲' : '▼'}
          </button>
          {openMobileDropdown === 'practical' && (
            <div className="ml-4 space-y-1 text-sm">
              <Link to="/venue" className="block hover:text-red-600">↳ Venue</Link>
              <Link to="/venue/about-Izmir" className="block hover:text-red-600">↳ About Izmir</Link>
              <Link to="/venue/accommodation" className="block hover:text-red-600">↳ Accommodation</Link>
              <Link to="/venue/social-program" className="block hover:text-red-600">↳ Social Program</Link>
              <Link to="/venue/transportation" className="block hover:text-red-600">↳ Transportation</Link>
            </div>
          )}

          <Link to="/sponsors" className={getLinkClass('/sponsors')}>Sponsors</Link>

          {/* Registration */}
          <button
            onClick={() => handleMobileDropdownToggle('registration')}
            className="w-full text-left px-4 py-2 text-base text-gray-700 hover:text-red-600 font-medium"
          >
            Registration {openMobileDropdown === 'registration' ? '▲' : '▼'}
          </button>
          {openMobileDropdown === 'registration' && (
            <div className="ml-4 space-y-1 text-sm">
              <Link to="/submissions" className="block hover:text-red-600">↳ Submissions</Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
