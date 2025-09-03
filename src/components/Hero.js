import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import WelcomeLetter from './WelcomeLetter';

export default function Hero() {
  const [factIndex, setFactIndex] = useState(0);
  const [showWelcomeLetter, setShowWelcomeLetter] = useState(false);
  const [language, setLanguage] = useState('en');

  const content = {
    en: {
      title: "6th INTERNATIONAL",
      subtitle: "POLYMERIC COMPOSITES",
      subtitle2: "SYMPOSIUM AND WORKSHOPS",
      dateLocation: "October 2–4, 2025 • Tepekule Convention and Exhibition Centre, Izmir, Türkiye",
      welcomeMessage: "Welcome Message from the Chairs",
      registerNow: "Register Now",
      downloadProgram: "Download Program",
      learnMore: "Learn More",
      didYouKnow: "DID YOU KNOW ?",
      facts: [
        "Did you know that the first polyester resin was made in Türkiye in Izmir?",
        "Did you know that the first composite part in Türkiye was manufactured in Izmir?",
      ]
    },
    tr: {
      title: "6. ULUSLARARASI",
      subtitle: "POLİMERİK KOMPOZİTLER",
      subtitle2: "SEMPOZYUMU VE ÇALIŞTAYLARI",
      dateLocation: "2-4 Ekim 2025 • Tepekule Kongre ve Sergi Merkezi, İzmir, Türkiye",
      welcomeMessage: "Başkanlardan Hoş Geldiniz Mesajı",
      registerNow: "Şimdi Kayıt Ol",
      downloadProgram: "Programı İndir",
      learnMore: "Daha Fazla Bilgi",
      didYouKnow: "BİLİYOR MUYDUNUZ ?",
      facts: [
        "Türkiye'de ilk polyester reçinesinin İzmir'de yapıldığını biliyor muydunuz?",
        "Türkiye'de ilk kompozit parçanın İzmir'de üretildiğini biliyor muydunuz?",
      ]
    }
  };

  const currentContent = content[language];

  useEffect(() => {
    const timer = setInterval(() => {
      setFactIndex((prevIndex) => (prevIndex + 1) % currentContent.facts.length);
    }, 5000); // Change fact every 5 seconds

    return () => clearInterval(timer);
  }, [currentContent.facts.length]);

  return (
    <div className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/izmirhero.jpg)' }}>
      {/* Language Toggle Button */}
      <div className="absolute top-4 right-4 z-10">
        <button
          onClick={() => setLanguage(language === 'en' ? 'tr' : 'en')}
          className="bg-white bg-opacity-90 text-gray-800 px-4 py-2 rounded-lg font-medium hover:bg-opacity-100 transition-all duration-200 shadow-md"
        >
          {language === 'en' ? 'TR' : 'EN'}
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
          <span className="block">{currentContent.title}</span>
          <span className="block">{currentContent.subtitle}</span>
          <span className="block">{currentContent.subtitle2}</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-white sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          {currentContent.dateLocation}
        </p>
        <div className="mt-10 flex flex-col items-center space-y-4">
          {/* Open Welcome Letter Button */}
          <button
            onClick={() => setShowWelcomeLetter(true)}
            className="w-full max-w-xs sm:max-w-md md:max-w-2xl px-6 py-3 md:py-4 border border-transparent text-base font-medium rounded-md text-red-600 bg-white hover:bg-gray-50 text-center mx-auto"
          >
            {currentContent.welcomeMessage}
          </button>

          {/* Horizontal Row of Buttons */}
          <div className="flex justify-center gap-4 mt-4">
            <Link
              to="/registration"
              className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-red-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
            >
              {currentContent.registerNow}
            </Link>
            <button
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/programyeni.pdf';
                link.download = 'programyeni.pdf';
                link.click();
              }}
              className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10"
            >
              {currentContent.downloadProgram}
            </button>
            <Link
              to="/conference"
              className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-red-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
            >
              {currentContent.learnMore}
            </Link>
          </div>
        </div>

        <div className="mt-10 w-full max-w-4xl mx-auto">
          <div className="bg-white bg-opacity-90 rounded-lg shadow-md p-3">
            <h3 className="text-lg font-bold text-gray-900 mb-2">{currentContent.didYouKnow}</h3>
            <p className="text-gray-700 text-lg">{currentContent.facts[factIndex]}</p>
          </div>
        </div>
      </div>
      {showWelcomeLetter && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto">
          <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full mx-4 my-8">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-bold">
                {language === 'en' ? 'Welcome Letter' : 'Hoş Geldiniz Mektubu'}
              </h2>
              <button
                onClick={() => setShowWelcomeLetter(false)}
                className="text-gray-600 hover:text-gray-800"
              >
                ✖
              </button>
            </div>
            {/* Modal Content */}
            <div className="p-4 max-h-[80vh] overflow-y-auto">
              <WelcomeLetter language={language} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
