import React from 'react';

export default function SocialProgram() {
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
                <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Social Program</h1>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="p-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Ephesus, House of Virgin Mary, and Şirince Tour</h2>
                        
                        <p className="text-gray-700 mb-4">
                            The tentative itinerary for the Ephesus, House of Virgin Mary, and Şirince tour planned for October 5, 2025, is outlined below:
                        </p>

                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Tour Itinerary</h3>
                            <div className="space-y-2 text-gray-700">
                                <p><strong>08:30</strong> Departure from İzmir city center. (The departure point may vary depending on where the guests are staying.)</p>
                                <p><strong>09:30 – 11:30</strong> Guided tour of Ephesus.</p>
                                <p><strong>12:00</strong> Departure for Şirince.</p>
                                <p><strong>12:30 – 13:30</strong> Set menu lunch at "Şirince Ocakbaşı Restaurant."</p>
                                <p><strong>13:30 – 14:30</strong> Free time in the center of Şirince.</p>
                                <p><strong>14:30</strong> Departure for the House of Virgin Mary.</p>
                                <p><strong>15:00 – 15:45</strong> Visit to the House of Virgin Mary.</p>
                                <p><strong>16:00</strong> Departure for İzmir.</p>
                                <p><strong>17:30</strong> Arrival back in İzmir.</p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">Lunch Menu</h3>
                                <p className="text-gray-700">
                                    Six varieties of appetizers (meze), spinach-cheese filled "gözleme," assorted grilled dishes (choice of shish kebab, meatballs, or chicken skewers), dessert or seasonal fruit. Water and tea will be served complimentary.
                                </p>
                            </div>

                            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">Transportation</h3>
                                <p className="text-gray-700">
                                    Depending on the number of participants, a 46-seat coach and a 35-seat midibus will be used. If necessary, 14-seat Sprinter minibuses may also be arranged.
                                </p>
                            </div>
                        </div>

                        <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Tour Pricing</h3>
                            <p className="text-gray-700 mb-3">
                                The tour price has been calculated excluding the entrance fees for Ephesus and the House of Virgin Mary. It includes lunch, professional guiding services, transportation with modern vehicles, and all parking fees.
                            </p>
                            <p className="text-xl font-bold text-red-600">
                                Price: 40 € per person
                            </p>
                        </div>

                        <div className="text-center">
                            <p className="text-gray-600 italic">
                                Join us for this exciting cultural and historical experience in the beautiful region of İzmir!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
