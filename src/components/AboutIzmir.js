import React from 'react';

export default function AboutIzmir() {
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
                <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">About Izmir</h1>

                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="p-6 space-y-6">
                        {/* Long Text Section */}
                        <p className="text-lg text-gray-700">
                            Izmir is a really special place to visit! Located in western Türkiye on the shores of the Aegean Sea, it's the country's third-largest city. It's got an 8,500-year history, fertile lands, and 300 days of sunshine a year. It's been home to lots of different civilisations over the years, from the Persians to the Romans, and from the Byzantines to the Ottomans, which has made it a really vibrant place to visit. Nearly half of its four-million population is under the age of 30, which has created a lively, youthful atmosphere. The climate is perfect for growing grapes, figs, olives, and cotton, and the cuisine, with its olive oil, fresh seafood, wine, and local herbs, is a real treat for gourmets.

                        </p>
                        <p className="text-lg text-gray-700">
                            Izmir is a city with a rich historical heritage, beautiful deep-blue sea, healing thermal springs, and a free spirit. In the early morning, visitors can enjoy the sea breeze while walking in the İnciraltı Urban Forest or along the Kordon, Güzelyalı, and Karşıyaka coasts, watching both sunrise and sunset. The city also offers many local delights, such as "gevrek" (a type of simit) and tulum cheese. During the day, visitors can explore museums and art venues, experience the historical ambiance of Kemeraltı Bazaar, or discover fun attractions suitable for families with children. Another option is to spend time in the city's surrounding natural areas accompanied by birdsong.
                        </p>
                        <p className="text-lg text-gray-700">
                            According to legend, the city of Izmir derives its name from the Amazon Queen Smyrna, and the city features significant ancient structures such as the Temple of Artemis. Parchment paper was discovered in Bergama, the Asclepius Healing Temple, and famous physicians of ancient times made pioneering contributions to medicine here. As the hometown of thinkers such as Homer and Heraclitus, Izmir is a modern Aegean capital city that is immersed in history.
                        </p>


                        {/* Image Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                            <img src="/Izmir1.jpg" alt="Izmir Cityscape" className="rounded-lg shadow-md w-full h-64 object-cover" />
                            <img src="/Izmir2.jpg" alt="Clock Tower in Izmir" className="rounded-lg shadow-md w-full h-64 object-cover" />
                            <img src="/Izmir3.jpg" alt="Izmir Kordon Seafront" className="rounded-lg shadow-md w-full h-64 object-cover" />
                            <img src="/Izmir4.jpg" alt="Ephesus Ancient City" className="rounded-lg shadow-md w-full h-64 object-cover" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
