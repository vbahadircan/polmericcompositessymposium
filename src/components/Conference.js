import React, { useState } from 'react';
import SEO from './SEO';

export default function Conference() {
  const [language, setLanguage] = useState('en');

  const content = {
    en: {
      title: "6th INTERNATIONAL POLYMERIC COMPOSITES SYMPOSIUM AND WORKSHOPS",
      aim: "Aim",
      aimDesc: "The aim of the IPC 2025 symposium is to share scientific and technical knowledge in the fields of polymeric composite materials production, usage, and development on national and international platforms, as well as to identify and solve challenges encountered in transforming science into practice.",
      mission: "Mission",
      missionDesc: "The Chamber of Chemical Engineers (CCE) organizes the Polymeric Composite Materials Symposium and its associated exhibitions, workshops, and brokerage activities. This initiative is coordinated by the CCE Aegean Branch Office, in collaboration with industry and scientific communities, to foster knowledge sharing and cooperation.",
      vision: "Vision",
      visionDesc: "Polymeric composites, introduced in the 20th century, have gained increasing importance globally and in Türkiye. These materials are technological innovations widely used in industries and daily life, shaping the future. The CCE Aegean Branch aims to elevate its scientific and technical platform, established since 2006, to an international level by hosting the 2025 symposium in collaboration with the Turkish Composite Manufacturers Association.",
      previousEvents: "Previous Events",
      tableHeaders: {
        year: "Year",
        date: "Date",
        title: "Title",
        place: "Place"
      },
      previousEventsData: [
        { year: 2006, date: "17-19 November", title: "1st National Polymeric Composites Symposium and Exhibition", place: "Tepekule Convention and Exhibition Center, Izmir" },
        { year: 2008, date: "28-30 November", title: "International Polymeric Composites Symposium-Exhibition and Workshop", place: "Tepekule Convention and Exhibition Center, Izmir" },
        { year: 2010, date: "26-28 November", title: "2nd Polymeric Composites Symposium, Exhibition and Brokerage Event", place: "Tepekule Convention and Exhibition Center, Izmir" },
        { year: 2012, date: "9-11 November", title: "3rd International Polymeric Composites Symposium, Exhibition and Workshop", place: "Tepekule Convention and Exhibition Center, Izmir" },
        { year: 2015, date: "3-5 November", title: "4th International Polymeric Composites Symposium, Exhibition and Brokerage Event", place: "Çeşme Altınyunus Resort Hotel, Izmir" },
        { year: 2017, date: "2-4 November", title: "5th International Polymeric Composites Symposium and Workshops", place: "Tepekule Convention and Exhibition Center, Izmir" },
      ]
    },
    tr: {
      title: "6. ULUSLARARASI POLİMERİK KOMPOZİTLER SEMPOZYUMU VE ÇALIŞTAYLARI",
      aim: "Amaç",
      aimDesc: "IPC 2025 sempozyumunun amacı, polimerik kompozit malzemeler üretimi, kullanımı ve geliştirilmesi alanlarında bilimsel ve teknik bilgileri ulusal ve uluslararası platformlarda paylaşmak, ayrıca bilimi uygulamaya dönüştürürken karşılaşılan zorlukları tespit etmek ve çözmektir.",
      mission: "Misyon",
      missionDesc: "Kimya Mühendisleri Odası (KMO), Polimerik Kompozit Malzemeler Sempozyumu ve ilgili fuarlar, çalıştaylar ve aracılık faaliyetlerini organize eder. Bu girişim, KMO Ege Bölge Şubesi tarafından, endüstri ve bilim topluluklarıyla işbirliği içinde, bilgi paylaşımı ve işbirliğini teşvik etmek amacıyla koordine edilmektedir.",
      vision: "Vizyon",
      visionDesc: "20. yüzyılda tanıtılan polimerik kompozitler, dünya çapında ve Türkiye'de giderek artan önem kazanmıştır. Bu malzemeler, endüstrilerde ve günlük yaşamda yaygın olarak kullanılan, geleceği şekillendiren teknolojik yeniliklerdir. KMO Ege Bölge Şubesi, 2006'dan beri kurulmuş olan bilimsel ve teknik platformunu, Türk Kompozit Üreticileri Derneği ile işbirliği içinde 2025 sempozyumuna ev sahipliği yaparak uluslararası seviyeye yükseltmeyi hedeflemektedir.",
      previousEvents: "Önceki Etkinlikler",
      tableHeaders: {
        year: "Yıl",
        date: "Tarih",
        title: "Başlık",
        place: "Yer"
      },
      previousEventsData: [
        { year: 2006, date: "17-19 Kasım", title: "1. Ulusal Polimerik Kompozitler Sempozyumu ve Sergisi", place: "Tepekule Kongre ve Sergi Merkezi, İzmir" },
        { year: 2008, date: "28-30 Kasım", title: "Uluslararası Polimerik Kompozitler Sempozyumu-Fuar ve Çalıştay", place: "Tepekule Kongre ve Sergi Merkezi, İzmir" },
        { year: 2010, date: "26-28 Kasım", title: "2. Polimerik Kompozitler Sempozyumu, Sergi ve Aracılık Etkinliği", place: "Tepekule Kongre ve Sergi Merkezi, İzmir" },
        { year: 2012, date: "9-11 Kasım", title: "3. Uluslararası Polimerik Kompozitler Sempozyumu, Sergi ve Çalıştay", place: "Tepekule Kongre ve Sergi Merkezi, İzmir" },
        { year: 2015, date: "3-5 Kasım", title: "4. Uluslararası Polimerik Kompozitler Sempozyumu, Sergi ve Aracılık Etkinliği", place: "Çeşme Altınyunus Resort Hotel, İzmir" },
        { year: 2017, date: "2-4 Kasım", title: "5. Uluslararası Polimerik Kompozitler Sempozyumu ve Çalıştayları", place: "Tepekule Kongre ve Sergi Merkezi, İzmir" },
      ]
    }
  };

  const currentContent = content[language];

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
      <SEO
        title={language === 'en' ? "Conference Information" : "Konferans Bilgileri"}
        description={language === 'en' ? "Learn about the 6th International Polymeric Composites Symposium schedule, themes, and program details. Join industry leaders and researchers in Izmir for cutting-edge discussions on composite materials." : "6. Uluslararası Polimerik Kompozitler Sempozyumu programı, temaları ve program detayları hakkında bilgi edinin. Kompozit malzemeler hakkında güncel tartışmalar için İzmir'de endüstri liderleri ve araştırmacılarla bir araya gelin."}
        keywords={language === 'en' ? "polymeric composites conference, materials science symposium, composite research presentations, Izmir conference 2025" : "polimerik kompozitler konferansı, malzeme bilimi sempozyumu, kompozit araştırma sunumları, İzmir konferans 2025"}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Language Toggle Button */}
        <div className="flex justify-end mb-6">
          <button
            onClick={() => setLanguage(language === 'en' ? 'tr' : 'en')}
            className="bg-white bg-opacity-90 text-gray-800 px-4 py-2 rounded-lg font-medium hover:bg-opacity-100 transition-all duration-200 shadow-md"
          >
            {language === 'en' ? 'TR' : 'EN'}
          </button>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Title Section with Background Image */}
          <div
            className="relative bg-cover bg-center h-80 flex items-center justify-center"
            style={{ backgroundImage: "url('/conferencebg.jpg')" }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <h1 className="relative text-4xl font-bold text-white text-center px-4">
              {currentContent.title}
            </h1>
          </div>

          {/* Content Section */}
          <div className="px-6 py-8">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{currentContent.aim}</h2>
              <p className="text-gray-700">
                {currentContent.aimDesc}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{currentContent.mission}</h2>
              <p className="text-gray-700">
                {currentContent.missionDesc}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{currentContent.vision}</h2>
              <p className="text-gray-700">
                {currentContent.visionDesc}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{currentContent.previousEvents}</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{currentContent.tableHeaders.year}</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{currentContent.tableHeaders.date}</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{currentContent.tableHeaders.title}</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{currentContent.tableHeaders.place}</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {currentContent.previousEventsData.map((event, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{event.year}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{event.date}</td>
                        <td className="px-6 py-4 text-sm text-gray-500">{event.title}</td>
                        <td className="px-6 py-4 text-sm text-gray-500">{event.place}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
