import React from 'react';

// Custom logo mapping for special cases
const customLogoMapping = {
  'Fiberr': 'fiberr.png',
  'Literatür Kimya': 'literatur-kimya.png',
  'Nanopol': 'nanopol.jpeg',
  'Boytek': 'boytek.jpeg',
  'Kosse Composite': 'kosse.jpeg',
  'Tila': 'tila.png'
};

// Component to display a single sponsor logo
const SponsorLogo = ({ name }) => {
  let logoSrc;
  if (customLogoMapping[name]) {
    logoSrc = `/${customLogoMapping[name]}`;
  } else {
    let logoKey = name.toLowerCase().replace(/ /g, '_').replace(/[^a-z_]/g, '');
    logoSrc = `/${logoKey}.png`;
  }

  return (
    <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-center h-32 w-full">
      <img 
        src={logoSrc} 
        alt={`${name} logo`} 
        className="max-h-24 max-w-full object-contain"
      />
    </div>
  );
};

// Main Sponsors component
export default function Sponsors() {
  const officialOrganizations = [
    'Aegean Region Chamber of Industry',
    'Izmir Chamber of Commerce',
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

  // Sponsor categories with their respective firms
  const sponsorCategories = {
    'Platinum Sponsorship': [],
    'Gold Sponsorship': [],
    'Silver Sponsorship': ['Fiberr', 'Boytek'],
    'Abstract Booklet Advertisement Sponsorship': [],
    'Symposium Bag Sponsorship': ['Kosse Composite'],
    'Opening Cocktail Sponsorship': ['Tila'],
    'Notebook and Pen Sponsorship': ['Nanopol'],
    'Name Badge Sponsorship': ['Literatür Kimya'],
    'Invited Speaker Sponsorship': [],
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Sponsors</h1>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            {/* Official Organizations Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Partners</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {officialOrganizations.map((org, index) => (
                  <SponsorLogo key={index} name={org} />
                ))}
              </div>
            </section>

            {/* Sponsor Firms Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Sponsor Firms</h2>
              {Object.entries(sponsorCategories).map(([category, firms]) => (
                <div key={category} className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{category}</h3>
                  {firms.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {firms.map((firm, index) => (
                        <SponsorLogo key={index} name={firm} />
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-600 italic">No sponsors in this category yet.</p>
                  )}
                </div>
              ))}
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
              <a
                href="/sponsorship-conditions.docx"
                className="inline-block bg-red-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition duration-300"
                download="sponsorship-conditions.docx"
              >
                Download Sponsorship Conditions (.docx)
              </a>
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
                  <strong>Address:</strong> TMMOB Kimya Mühendisleri Odası Ege Bölge Şubesi, 1441 Sokak No: 4 Kat: 3 D: 5, Alsancak, Izmir, Türkiye
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
