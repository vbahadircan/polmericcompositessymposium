import React from 'react';
import { Link } from 'react-router-dom';

// Component to display a single sponsor logo
const SponsorLogo = ({ name }) => {
  const logoKey = name.toLowerCase().replace(/ /g, '_').replace(/[^a-z_]/g, ''); // Convert name to match filename
  let logoSrc;

  try {
    logoSrc = require(`../assets/logos/${logoKey}.webp`); // Dynamically require the logo
  } catch (error) {
    console.error(`Logo for ${name} not found at ../assets/logos/${logoKey}.webp.`);
    return null; // If logo is missing, gracefully return null or a placeholder
  }

  return (
    <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-center h-24">
      <img src={logoSrc} alt={`${name} logo`} className="max-h-full max-w-full object-contain" />
    </div>
  );
};

// Main Sponsors component
export default function Sponsors() {
  const officialOrganizations = [
    'Aegean Region Chamber of Industry',
    'İzmir Chamber of Commerce',
    'IKCU',
    'IYTE',
    'TMMOB',
    'Teknopark',
    'ESİAD',
    'ENSİA',
    'BUTEKOM',
    'ESAS',
    'OSSA',
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Sponsors</h1>
        
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            {/* Official Organizations Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Official Organizations</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {officialOrganizations.map((org, index) => (
                  <SponsorLogo key={index} name={org} />
                ))}
              </div>
            </section>

            {/* Placeholder for Private Firms */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Private Firms</h2>
              <p className="text-gray-700">Details of private sponsors will be updated as they are confirmed.</p>
            </section>

            {/* Become a Sponsor Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Become a Sponsor</h2>
              <p className="text-gray-700 mb-4">
                Join us in supporting the 6th INTERNATIONAL POLYMERIC COMPOSITES SYMPOSIUM AND WORKSHOPS. 
                Sponsors gain visibility among academic, industrial, and governmental participants from around the globe.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sponsorship Benefits:</h3>
              <ul className="list-disc list-inside text-gray-700 mb-6">
                <li>Recognition in symposium materials and website.</li>
                <li>Networking opportunities with international participants.</li>
                <li>Brand visibility throughout the event.</li>
              </ul>
              <Link 
                to="/contact" 
                className="inline-block bg-red-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition duration-300"
              >
                Become a Sponsor
              </Link>
            </section>

            {/* Contact Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact for Sponsorship</h2>
              <p className="text-gray-700 mb-4">To become a sponsor, please contact us:</p>
              <ul className="text-gray-700 space-y-2">
                <li><strong>Email:</strong> symposium@polymericcomposites.org</li>
                <li><strong>Phone:</strong> +90 232 421 35 35</li>
                <li><strong>Fax:</strong> +90 232 464 59 08</li>
                <li>
                  <strong>Address:</strong><br />
                  TMMOB Kimya Mühendisleri Odası Ege Bölge Şubesi<br />
                  1441 Sokak No: 4 Kat: 3 D: 5<br />
                  Alsancak, İzmir, Turkey
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
