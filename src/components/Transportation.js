import React, { useState } from 'react';
import SEO from './SEO';

export default function Transportation() {
    const [language, setLanguage] = useState('en');

    const content = {
        en: {
            title: "Transportation",
            venueAddress: "Venue Address",
            venueName: "Tepekule Exhibition and Business Center",
            venueAddressText: "Adalet, Anadolu Cd. No:40, 35010 Bayraklı/Izmir",
            publicTransportation: "Public Transportation",
            publicTransportationDesc: "The following **city bus lines** pass by the venue, providing easy access from different parts of Izmir:",
            metroAccess: "Metro Access",
            metroAccessDesc: "The closest **İZBAN** metro station is **Salhane Station**, which provides a convenient connection to the venue.",
            gettingToVenue: "Getting to the Venue",
            gettingToVenueDesc1: "Izmir's public transportation system includes **buses, metro, ferries, and trams**, offering various options for reaching Tepekule Exhibition and Business Center.",
            gettingToVenueDesc2: "If arriving by **car**, parking is available near the venue.",
            gettingToVenueDesc3: "For visitors traveling from outside Izmir, the **Adnan Menderes Airport** connects the city with domestic and international flights. From the airport, the **İZBAN train** provides direct access to **Salhane Station**, near the venue.",
            publicTransportationMap: "Public Transportation Map",
            busLines: [
                "077 - NAFİZ GÜRMAN - HALKAPINAR METRO 2",
                "078 - YAMANLAR - HALKAPINAR METRO 2",
                "125 - MUSTAFA KEMAL MAH - HALKAPINAR METRO 2",
                "140 - ÖRNEKKÖY - HALKAPINAR METRO 2",
                "147 - POSTACI - HALKAPINAR METRO 2",
                "148 - ONUR MAH. - HALKAPINAR METRO 2",
                "240 - ZÜBEYDE HANIM MAH. - HALKAPINAR METRO 2",
                "335 - DOĞANÇAY - HALKAPINAR METRO 2",
                "426 - MUSTAFA KEMAL MAH - HALKAPINAR METRO 2",
                "434 - KÖRFEZ MAHALLESI - HALKAPINAR METRO 2",
                "477 - NAFİZ GÜRMAN - HALKAPINAR METRO 2",
                "577 - NAFİZ GÜRMAN - HALKAPINAR METRO 2"
            ]
        },
        tr: {
            title: "Ulaşım",
            venueAddress: "Mekan Adresi",
            venueName: "Tepekule Fuar ve İş Merkezi",
            venueAddressText: "Adalet, Anadolu Cd. No:40, 35010 Bayraklı/İzmir",
            publicTransportation: "Toplu Taşıma",
            publicTransportationDesc: "Aşağıdaki **şehir otobüs hatları** mekanın yanından geçmekte olup, İzmir'in farklı bölgelerinden kolay erişim sağlamaktadır:",
            metroAccess: "Metro Erişimi",
            metroAccessDesc: "En yakın **İZBAN** metro istasyonu **Salhane İstasyonu**'dur ve mekana uygun bağlantı sağlar.",
            gettingToVenue: "Mekana Ulaşım",
            gettingToVenueDesc1: "İzmir'in toplu taşıma sistemi **otobüs, metro, feribot ve tramvay** içerir ve Tepekule Fuar ve İş Merkezi'ne ulaşmak için çeşitli seçenekler sunar.",
            gettingToVenueDesc2: "**Araba** ile geliyorsanız, mekanın yakınında otopark bulunmaktadır.",
            gettingToVenueDesc3: "İzmir dışından seyahat eden ziyaretçiler için **Adnan Menderes Havalimanı** şehri yurt içi ve yurt dışı uçuşlarla bağlar. Havalimanından **İZBAN treni** mekanın yakınındaki **Salhane İstasyonu**'na doğrudan erişim sağlar.",
            publicTransportationMap: "Toplu Taşıma Haritası",
            busLines: [
                "077 - NAFİZ GÜRMAN - HALKAPINAR METRO 2",
                "078 - YAMANLAR - HALKAPINAR METRO 2",
                "125 - MUSTAFA KEMAL MAH - HALKAPINAR METRO 2",
                "140 - ÖRNEKKÖY - HALKAPINAR METRO 2",
                "147 - POSTACI - HALKAPINAR METRO 2",
                "148 - ONUR MAH. - HALKAPINAR METRO 2",
                "240 - ZÜBEYDE HANIM MAH. - HALKAPINAR METRO 2",
                "335 - DOĞANÇAY - HALKAPINAR METRO 2",
                "426 - MUSTAFA KEMAL MAH - HALKAPINAR METRO 2",
                "434 - KÖRFEZ MAHALLESI - HALKAPINAR METRO 2",
                "477 - NAFİZ GÜRMAN - HALKAPINAR METRO 2",
                "577 - NAFİZ GÜRMAN - HALKAPINAR METRO 2"
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
                title={language === 'en' ? "Transportation Information" : "Ulaşım Bilgileri"}
                description={language === 'en' ? "Find transportation details for reaching the Tepekule Exhibition and Business Center in Izmir." : "İzmir'deki Tepekule Fuar ve İş Merkezi'ne ulaşım detaylarını bulun."}
                keywords={language === 'en' ? "Tepekule Izmir, transportation, public transport, metro, bus routes" : "Tepekule İzmir, ulaşım, toplu taşıma, metro, otobüs hatları"}
            />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Language Toggle Button */}
                <div className="flex justify-end mb-6">
                    <button
                        onClick={() => setLanguage(language === 'en' ? 'tr' : 'en')}
                        className="bg-white bg-opacity-90 text-gray-800 px-4 py-2 rounded-lg font-medium hover:bg-opacity-100 transition-all duration-200 shadow-md"
                    >
                        {language === 'en' ? 'TR' : 'EN'}
                    </button>
                </div>

                <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">{currentContent.title}</h1>

                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="p-6 space-y-6">
                        {/* Venue Address */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{currentContent.venueAddress}</h2>
                            <p className="text-lg text-gray-700 font-medium">{currentContent.venueName}</p>
                            <p className="text-gray-700">{currentContent.venueAddressText}</p>
                        </section>

                        {/* Public Transportation */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{currentContent.publicTransportation}</h2>
                            <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: currentContent.publicTransportationDesc }}></p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4">
                                {currentContent.busLines.map((line, index) => (
                                    <li key={index}><strong>{line.split(' - ')[0]}</strong> - {line.split(' - ').slice(1).join(' - ')}</li>
                                ))}
                            </ul>
                        </section>

                        {/* Metro Access */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{currentContent.metroAccess}</h2>
                            <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: currentContent.metroAccessDesc }}></p>
                        </section>

                        {/* General Info */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{currentContent.gettingToVenue}</h2>
                            <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: currentContent.gettingToVenueDesc1 }}></p>
                            <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: currentContent.gettingToVenueDesc2 }}></p>
                            <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: currentContent.gettingToVenueDesc3 }}></p>
                        </section>
                    </div>
                </div>

                {/* Embedded Google Map Showing Transportation Stations */}
                <div className="mt-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">{currentContent.publicTransportationMap}</h2>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d29728.44374694756!2d27.16000308217265!3d38.4456790518541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sTepekule%20%C4%B0%C5%9F%20Merkezi%20yak%C4%B1n%20duraklar!5e0!3m2!1str!2str!4v1742028949922!5m2!1str!2str"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        title={currentContent.publicTransportationMap}
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
