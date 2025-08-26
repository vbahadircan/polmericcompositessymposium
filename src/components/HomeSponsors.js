import React, { useState } from 'react';

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
  'Yapı Kataloğu': 'yapi_katalogu.png',
  'Poliya': 'poliya.png',
  'Ege Üniversitesi': 'ege.png',
  'Tezkom Kompozit': 'tezkom.png'
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
  'Yapı Kataloğu': 'https://www.yapikatalogu.com/',
  'Poliya': 'https://poliya.com.tr/'
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
  const [language, setLanguage] = useState('en');

  const content = {
    en: {
      title: "Our Sponsors & Partners",
      partners: "Partners",
      sponsorFirms: "Sponsor Firms",
      platinum: "Platinum Sponsorship",
      gold: "Gold Sponsorship",
      silver: "Silver Sponsorship",
      bronze: "Bronze Sponsorship",
      abstractBooklet: "Abstract Booklet Advertisement Sponsorship",
      symposiumBag: "Symposium Bag Sponsorship",
      openingCocktail: "Opening Cocktail Sponsorship",
      notebookPen: "Notebook and Pen Sponsorship",
      nameBadge: "Name Badge Sponsorship",
      invitedSpeaker: "Invited Speaker Sponsorship",
      socialMedia: "Social Media Sponsorship"
    },
    tr: {
      title: "Sponsorlarımız ve Ortaklarımız",
      partners: "Ortaklar",
      sponsorFirms: "Sponsor Firmalar",
      platinum: "Platin Sponsorluk",
      gold: "Altın Sponsorluk",
      silver: "Gümüş Sponsorluk",
      bronze: "Bronz Sponsorluk",
      abstractBooklet: "Özet Kitapçık Reklam Sponsorluğu",
      symposiumBag: "Sempozyum Çantası Sponsorluğu",
      openingCocktail: "Açılış Kokteyli Sponsorluğu",
      notebookPen: "Defter ve Kalem Sponsorluğu",
      nameBadge: "İsim Kartı Sponsorluğu",
      invitedSpeaker: "Davetli Konuşmacı Sponsorluğu",
      socialMedia: "Sosyal Medya Sponsorluğu"
    }
  };

  const currentContent = content[language];

  const officialOrganizations = [
    'Aegean Region Chamber of Industry',
    'Izmir Chamber of Commerce',
    'IKCU',
    'IYTE',
    'TMMOB',
    'Ege Üniversitesi',
    'ESİAD',
    'ENSİA',
    'BUTEKOM',
    'HUKD',
    'TMMOB Makina',
  ];

  // Sponsor categories with their respective firms
  const sponsorCategories = {
    [currentContent.platinum]: [],
    [currentContent.gold]: ['Polkima', 'Polmar', 'Poliya'],
    [currentContent.silver]: ['Fiberr', 'Boytek', 'Polütek', 'Akpa', 'Turkuaz Polyester'],
    [currentContent.bronze]: ['Omnis Kompozit', 'Duratek', 'Yücel Group', 'Senko', 'Tezkom Kompozit'],
    [currentContent.abstractBooklet]: ['Pultech Frp'],
    [currentContent.symposiumBag]: ['Kosse Composite'],
    [currentContent.openingCocktail]: ['Tila'],
    [currentContent.notebookPen]: ['Nanopol'],
    [currentContent.nameBadge]: ['Literatür Kimya'],
    [currentContent.invitedSpeaker]: ['Polmod'],
    [currentContent.socialMedia]: ['LabMedya', 'ChemLife', 'Yapı Kataloğu'],
  };

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Language Toggle Button */}
        <div className="flex justify-end mb-6">
          <button
            onClick={() => setLanguage(language === 'en' ? 'tr' : 'en')}
            className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-all duration-200"
          >
            {language === 'en' ? 'TR' : 'EN'}
          </button>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">{currentContent.title}</h2>

        {/* Partners Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">{currentContent.partners}</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {officialOrganizations.map((org, index) => (
              <SponsorLogo key={index} name={org} />
            ))}
          </div>
        </div>

        {/* Sponsor Firms Section */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">{currentContent.sponsorFirms}</h3>
          {Object.entries(sponsorCategories).map(([category, firms]) => (
            <div key={category} className="mb-8">
              <h4 className="text-xl font-medium text-gray-800 mb-4 text-center">{category}</h4>
              {firms.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                  {firms.map((firm, index) => (
                    <SponsorLogo key={index} name={firm} />
                  ))}
                </div>
              ) : (
                <p className="text-gray-600 italic text-center">No sponsors in this category yet.</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 