import React from 'react';
// import FlipBook from './FlipBook';

// Custom logo mapping for special cases (same as Sponsors.js)
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
  'Yapı Kataloğu': 'yapi_katalogu.png',
  'Yücel Group': 'yucel_group.png',
  'Senko': 'senko.png',
  'Poliya': 'poliya.png',
  'Ege Üniversitesi': 'ege.png',
  'Tezkom Kompozit': 'tezkom.png',
  'Kompozit Sanayicileri Derneği': 'cw.jpeg',
  'Innovaplast': 'innovaplast.png',
  'Olguncelik': 'olguncelik.png',
  'Spinteks': 'spinteks.png',
  'Inoveta': 'inoveta.png',
  'Frplinecomposite': 'frplinecomposite.png',
  'JEC': 'jec.svg'
};

// Website mapping for sponsors (same as Sponsors.js)
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
  'Yapı Kataloğu': 'https://www.yapikatalogu.com/',
  'Poliya': 'https://poliya.com.tr/',
  'Yücel Group': 'https://www.yucelgroup.com/',
  'Kompozit Sanayicileri Derneği': 'https://www.compositesworld.com/',
  'Tezkom Kompozit': 'https://www.tezkom.com.tr/',
  'Senko': 'https://www.senkoltd.com/',
  'Inoveta': 'https://www.inovetakompozit.com/',
  'Innovaplast': 'https://www.innovaplast.com.tr/',
  'Olguncelik': 'https://tekafos.com.tr/',
  'Spinteks': 'https://spinteks.com/',
  'JEC': 'https://www.jec-world.events/'
};

// Component to display a single participant logo
const ParticipantLogo = ({ name }) => {
  let logoSrc;
  if (customLogoMapping[name]) {
    logoSrc = `/${customLogoMapping[name]}`;
  } else {
    let logoKey = name.toLowerCase().replace(/ /g, '_').replace(/[^a-z_]/g, '');
    logoSrc = `/${logoKey}.png`;
  }

  const website = sponsorWebsites[name];

  return (
    <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-center h-32 w-full hover:bg-gray-200 transition-colors duration-200">
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
            className="max-h-24 max-w-full object-contain cursor-pointer"
          />
        </a>
      ) : (
        <img 
          src={logoSrc} 
          alt={`${name} logo`} 
          className="max-h-24 max-w-full object-contain"
        />
      )}
    </div>
  );
};

// Main Exhibition component
export default function Exhibition() {
  // Official organizations (available for future use)
  // const officialOrganizations = [
  //   'Aegean Region Chamber of Industry',
  //   'Izmir Chamber of Commerce',
  //   'IKCU',
  //   'IYTE',
  //   'TMMOB',
  //   'Ege Üniversitesi',
  //   'ESİAD',
  //   'ENSİA',
  //   'BUTEKOM',
  //   'HUKD',
  //   'TMMOB Makina',
  // ];

  // Sponsor categories with their respective firms (same as Sponsors.js)
  const sponsorCategories = {
    'Platinum Sponsorship': [],
    'Gold Sponsorship': ['Polkima', 'Polmar'],
    'Silver Sponsorship': ['Fiberr', 'Boytek', 'Polütek', 'Akpa', 'Turkuaz Polyester'],
    'Bronze Sponsorship': ['Omnis Kompozit', 'Duratek', 'Senko'],
    'Abstract Booklet Advertisement Sponsorship': ['Pultech Frp'],
    'Symposium Bag Sponsorship': ['Kosse Composite'],
    'Notebook and Pen Sponsorship': ['Nanopol'],
    'Name Badge Sponsorship': ['Literatür Kimya'],
    'Invited Speaker Sponsorship': ['Polmod', 'Tila'],
    'Social Media Sponsorship': [],
  };

  // Additional exhibitors (not part of sponsorship categories)
  const additionalExhibitors = [
    'Innovaplast',
    'Olguncelik',
    'Spinteks',
    'Inoveta',
    'Frplinecomposite',
    'Yücel Group',
    'JEC'
  ];

  return (
    <div 
      className="min-h-screen py-12"
      style={{
        backgroundImage: 'url(/polymeric_bg_image.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Exhibition</h1>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            {/* Exhibition Information Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Exhibition Information</h2>
              <div className="prose max-w-none">
                <p className="text-gray-700 mb-4">
                  The 6th INTERNATIONAL POLYMERIC COMPOSITES SYMPOSIUM AND WORKSHOPS will feature a comprehensive exhibition 
                  showcasing the latest innovations, technologies, and products in the polymeric composites industry.
                </p>
                <p className="text-gray-700 mb-4">
                  Exhibitors will have the opportunity to:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Showcase their latest products and technologies to an international audience</li>
                  <li>Network with academic researchers, industry professionals, and government representatives</li>
                  <li>Demonstrate innovative solutions and applications in polymeric composites</li>
                  <li>Establish valuable business connections and partnerships</li>
                  <li>Gain visibility among symposium participants from around the globe</li>
                </ul>
                <p className="text-gray-700 mb-4">
                  The exhibition will be held alongside the symposium, providing maximum exposure and interaction opportunities 
                  for all participants.
                </p>
              </div>
            </section>

            {/* Exhibitors Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Exhibitors</h2>
              
              {/* All Exhibitors Grid */}
              <div className="mb-8">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {/* Sponsor Firms */}
                  {Object.values(sponsorCategories).flat().filter(firm => firm).map((firm, index) => (
                    <ParticipantLogo key={`sponsor-${index}`} name={firm} />
                  ))}
                  {/* Additional Exhibitors */}
                  {additionalExhibitors.map((exhibitor, index) => (
                    <ParticipantLogo key={`exhibitor-${index}`} name={exhibitor} />
                  ))}
                </div>
              </div>
            </section>

            {/* 
              FlipBook Integration - Available for future use
              To enable: 
              1. Uncomment the import: import FlipBook from './FlipBook';
              2. Uncomment the FlipBook section below
              
              Features:
              - Interactive Demo Book with 6 pages
              - PDF download link to demoebook.pdf
              - Drag-to-flip functionality
              - Navigation buttons and page counter
              - Responsive design
            */}

          </div>
        </div>
      </div>
    </div>
  );
}
