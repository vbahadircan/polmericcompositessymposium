import React, { useState } from 'react';

export default function SocialProgram() {
    const [language, setLanguage] = useState('en');

    const content = {
        en: {
            title: "Social Program",
            tourTitle: "Ephesus, House of Virgin Mary, and Şirince Tour",
            tourDescription: "The tentative itinerary for the Ephesus, House of Virgin Mary, and Şirince tour planned for October 5, 2025, is outlined below:",
            tourItinerary: "Tour Itinerary",
            itineraryDetails: [
                { time: "08:30", description: "Departure from İzmir city center. (The departure point may vary depending on where the guests are staying.)" },
                { time: "09:30 – 11:30", description: "Guided tour of Ephesus." },
                { time: "12:00", description: "Departure for Şirince." },
                { time: "12:30 – 13:30", description: "Set menu lunch at \"Şirince Ocakbaşı Restaurant.\"" },
                { time: "13:30 – 14:30", description: "Free time in the center of Şirince." },
                { time: "14:30", description: "Departure for the House of Virgin Mary." },
                { time: "15:00 – 15:45", description: "Visit to the House of Virgin Mary." },
                { time: "16:00", description: "Departure for İzmir." },
                { time: "17:30", description: "Arrival back in İzmir." }
            ],
            lunchMenu: "Lunch Menu",
            lunchDescription: "Six varieties of appetizers (meze), spinach-cheese filled \"gözleme,\" assorted grilled dishes (choice of shish kebab, meatballs, or chicken skewers), dessert or seasonal fruit. Water and tea will be served complimentary.",
            transportation: "Transportation",
            transportationDescription: "Depending on the number of participants, a 46-seat coach and a 35-seat midibus will be used. If necessary, 14-seat Sprinter minibuses may also be arranged.",
            tourPricing: "Tour Pricing",
            pricingDescription: "The tour price has been calculated excluding the entrance fees for Ephesus and the House of Virgin Mary. It includes lunch, professional guiding services, transportation with modern vehicles, and all parking fees.",
            price: "Price: 40 € per person",
            closingMessage: "Join us for this exciting cultural and historical experience in the beautiful region of İzmir!"
        },
        tr: {
            title: "Sosyal Program",
            tourTitle: "Efes, Meryem Ana Evi ve Şirince Turu",
            tourDescription: "5 Ekim 2025 tarihinde planlanan Efes, Meryem Ana Evi ve Şirince turu için ön program aşağıda belirtilmiştir:",
            tourItinerary: "Tur Programı",
            itineraryDetails: [
                { time: "08:30", description: "İzmir şehir merkezinden hareket. (Hareket noktası misafirlerin konakladığı yere göre değişebilir.)" },
                { time: "09:30 – 11:30", description: "Efes rehberli tur." },
                { time: "12:00", description: "Şirince'ye hareket." },
                { time: "12:30 – 13:30", description: "\"Şirince Ocakbaşı Restaurant\"ta set menü öğle yemeği." },
                { time: "13:30 – 14:30", description: "Şirince merkezinde serbest zaman." },
                { time: "14:30", description: "Meryem Ana Evi'ne hareket." },
                { time: "15:00 – 15:45", description: "Meryem Ana Evi ziyareti." },
                { time: "16:00", description: "İzmir'e hareket." },
                { time: "17:30", description: "İzmir'e varış." }
            ],
            lunchMenu: "Öğle Yemeği Menüsü",
            lunchDescription: "Altı çeşit meze, ıspanak-peynir dolgulu \"gözleme,\" çeşitli ızgara yemekler (şiş kebap, köfte veya tavuk şiş seçeneği), tatlı veya mevsim meyvesi. Su ve çay ikram edilecektir.",
            transportation: "Ulaşım",
            transportationDescription: "Katılımcı sayısına bağlı olarak 46 koltuklu otobüs ve 35 koltuklu midibüs kullanılacaktır. Gerekirse 14 koltuklu Sprinter minibüsler de düzenlenebilir.",
            tourPricing: "Tur Fiyatlandırması",
            pricingDescription: "Tur fiyatı Efes ve Meryem Ana Evi giriş ücretleri hariç hesaplanmıştır. Öğle yemeği, profesyonel rehberlik hizmetleri, modern araçlarla ulaşım ve tüm otopark ücretlerini içerir.",
            price: "Fiyat: Kişi başı 40 €",
            closingMessage: "İzmir'in güzel bölgesinde bu heyecan verici kültürel ve tarihi deneyime katılın!"
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

                <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">{currentContent.title}</h1>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="p-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">{currentContent.tourTitle}</h2>
                        
                        <p className="text-gray-700 mb-4">
                            {currentContent.tourDescription}
                        </p>

                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">{currentContent.tourItinerary}</h3>
                            <div className="space-y-2 text-gray-700">
                                {currentContent.itineraryDetails.map((item, index) => (
                                    <p key={index}>
                                        <strong>{item.time}</strong> {item.description}
                                    </p>
                                ))}
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">{currentContent.lunchMenu}</h3>
                                <p className="text-gray-700">
                                    {currentContent.lunchDescription}
                                </p>
                            </div>

                            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">{currentContent.transportation}</h3>
                                <p className="text-gray-700">
                                    {currentContent.transportationDescription}
                                </p>
                            </div>
                        </div>

                        <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">{currentContent.tourPricing}</h3>
                            <p className="text-gray-700 mb-3">
                                {currentContent.pricingDescription}
                            </p>
                            <p className="text-xl font-bold text-red-600">
                                {currentContent.price}
                            </p>
                        </div>

                        <div className="text-center">
                            <p className="text-gray-600 italic">
                                {currentContent.closingMessage}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
