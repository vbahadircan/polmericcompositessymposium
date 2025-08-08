import React from 'react';

// Custom logo mapping for special cases
const customLogoMapping = {
  'Fiberr': 'fiberr.png',
  'Literatür Kimya': 'literatur-kimya.png',
  'Nanopol': 'nanopol.jpeg',
  'Boytek': 'boytek.jpeg',
  'Kosse Composite': 'kosse.jpeg',
  'Tila': 'tila.png',
  'Polütek': 'polutek.png',
  'Polkima': 'polkima.png',
  'Polmod': 'polmod.png',
  'Omnis Kompozit': 'omnis.png',
  'HUKD': 'hukd.png',
  'TMMOB Makina': 'tmmobmakina.png',
  'LabMedya': 'labmedya.png',
  'ChemLife': 'chemlife.png',
  'Akpa': 'akpa.png',
  'Turkuaz Polyester': 'turkuaz.png',
  'Polmar': 'polmar.png',
  'Pultech Frp': 'pultech.png',
  'Yapı Kataloğu': 'yapi_katalogu.png'
};

// Website mapping for sponsors
const sponsorWebsites = {
  'Polkima': 'https://polkima.com.tr/',
  'Polmar': 'https://polmar.com.tr/',
  'Fiberr': 'https://fiberr.com.tr/',
  'Boytek': 'https://boytek.com.tr/',
  'Polütek': 'https://polutek.com.tr/',
  'Akpa': 'https://www.akpakimya.com/',
  'Turkuaz Polyester': 'https://www.turkuazpolyester.com.tr/',
  'Omnis Kompozit': 'https://omniskompozit.com/',
  'Duratek': 'https://www.duratek.com.tr/',
  'Pultech Frp': 'https://www.pultechfrp.com/TR/AnaSayfa/',
  'Kosse Composite': 'http://www.kossecomposite.com/',
  'Tila': 'https://www.tila.co/',
  'Nanopol': 'https://www.nanopolkimya.com/',
  'Literatür Kimya': 'https://www.literaturkimya.com/',
  'Polmod': 'http://www.polmod.com.tr/tr/Default.aspx',
  'LabMedya': 'https://www.labmedya.com/',
  'ChemLife': 'https://chemlife.com.tr/',
  'Yapı Kataloğu': 'https://www.yapikatalogu.com/'
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

  const website = sponsorWebsites[name];

  return (
    <div className="bg-white p-4 rounded-lg flex items-center justify-center h-24 w-full shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
      {website ? (
        <a 
          href={website} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full h-full flex items-center justify-center"
        >
          <img 
            src={logoSrc} 
            alt={`${name} logo`} 
            className="max-h-16 max-w-full object-contain cursor-pointer"
          />
        </a>
      ) : (
        <img 
          src={logoSrc} 
          alt={`${name} logo`} 
          className="max-h-16 max-w-full object-contain"
        />
      )}
    </div>
  );
};

export default function HomeSponsors() {
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
    'HUKD',
    'TMMOB Makina',
    'OSSA',
  ];

  // All sponsor firms from all categories
  const allSponsors = [
    'Polkima',
    'Polmar',
    'Fiberr',
    'Boytek',
    'Polütek',
    'Akpa',
    'Turkuaz Polyester',
    'Omnis Kompozit',
    'Duratek',
    'Pultech Frp',
    'Kosse Composite',
    'Tila',
    'Nanopol',
    'Literatür Kimya',
    'Polmod',
    'LabMedya',
    'ChemLife',
    'Yapı Kataloğu'
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Partners Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {officialOrganizations.map((org, index) => (
              <SponsorLogo key={index} name={org} />
            ))}
          </div>
        </div>

        {/* Sponsors Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Sponsors</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {allSponsors.map((sponsor, index) => (
              <SponsorLogo key={index} name={sponsor} />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Interested in becoming a sponsor? Join us in supporting this prestigious event.
          </p>
          <a
            href="/sponsors"
            className="inline-block bg-red-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition duration-300"
          >
            Learn More About Sponsorship
          </a>
        </div>
      </div>
    </section>
  );
} 