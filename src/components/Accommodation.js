import React from 'react';
import SEO from './SEO';

export default function Accommodation() {
    return (
        <div className="bg-gray-100 min-h-screen py-12">
            <SEO
                title="Accommodation Information"
                description="Find hotel accommodation details near the symposium venue."
                keywords="hotel, accommodation, Izmir, symposium venue"
            />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Accommodation</h1>

                {/* Google Map Embed */}
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">Nearby Hotels</h2>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d29728.44374694756!2d27.16000308217265!3d38.4456790518541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sTepekule%20I%C5%9F%20Merkezi%20yak%C4%B1n%C4%B1ndaki%20oteller!5e0!3m2!1str!2str!4v1742028949922!5m2!1str!2str"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        title="Accommodation Map"
                    ></iframe>
                </div>

                {/* Hotel Info */}
                <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">Hilton Garden Inn</h2>
                    <img src="/hilton.png" alt="Hotel Logo" className="w-48 mb-4" />
                    <table className="w-full border-collapse border border-gray-200">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border border-gray-300 px-4 py-2">Room Type</th>

                                <th className="border border-gray-300 px-4 py-2">Fee (per night)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">Hilton Garden Inn Standard Room</td>

                                <td className="border border-gray-300 px-4 py-2">5550 TL</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">Hilton Garden Inn Standard Room</td>

                                <td className="border border-gray-300 px-4 py-2">6550 TL</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">Hilton Garden Inn Standard Room</td>

                                <td className="border border-gray-300 px-4 py-2">7550 TL</td>
                            </tr>
                        </tbody>
                    </table>

                    <p className="mt-4 text-gray-700"><strong>Distance from venue:</strong> 0.45 Km</p>

                    {/* Hotel Booking Link */}
                    <p className="mt-4 text-gray-700 font-bold">Click here for access:</p>
                    <a
                        href="https://www.hilton.com/en/hotels/izmgigi-hilton-garden-inn-Izmir-bayrakli/?SEO_id=GMB-EMEA-GI-IZMGIGI"
                        className="text-blue-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Hilton Garden Inn Booking Page
                    </a>
                </div>

                <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ege Palas Business Hotel</h2>
                    <img src="/egepalas.jpg" alt="Hotel Logo" className="w-48 mb-4" />
                    <table className="w-full border-collapse border border-gray-200">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border border-gray-300 px-4 py-2">Room Type</th>


                                <th className="border border-gray-300 px-4 py-2">Fee (per night)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">Single Room (Sea view)</td>


                                <td className="border border-gray-300 px-4 py-2">135 €</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">Double Room (Sea view)</td>


                                <td className="border border-gray-300 px-4 py-2">150 €</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">Single Room (City view)</td>


                                <td className="border border-gray-300 px-4 py-2">120 €</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">Double Room (City view)</td>


                                <td className="border border-gray-300 px-4 py-2">135 €</td>
                            </tr>
                        </tbody>
                    </table>

                    <p className="mt-4 text-gray-700"><strong>Distance from venue:</strong> 5.6 Km</p>

                    {/* Hotel Booking Link */}
                    <p className="mt-4 text-gray-700 font-bold">Click here for access:</p>
                    <a
                        href="https://www.egepalas.com.tr/index.php?dl=tr"
                        className="text-blue-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Ege Palas Business Hotel Booking Page
                    </a>
                </div>

                <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">Four Points by Sheraton Hotel</h2>
                    <img src="/fourpoints.png" alt="Hotel Logo" className="w-48 mb-4" />
                    <table className="w-full border-collapse border border-gray-200">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border border-gray-300 px-4 py-2">Room Type</th>

                                <th className="border border-gray-300 px-4 py-2">Single</th>
                                <th className="border border-gray-300 px-4 py-2">Double</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">Standard City View Room</td>

                                <td className="border border-gray-300 px-4 py-2">155 €</td>
                                <td className="border border-gray-300 px-4 py-2">130 €</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">Standard Sea View Room</td>

                                <td className="border border-gray-300 px-4 py-2">130 €</td>
                                <td className="border border-gray-300 px-4 py-2">145 €</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">Corner City View Room</td>

                                <td className="border border-gray-300 px-4 py-2">140 €</td>
                                <td className="border border-gray-300 px-4 py-2">155 €</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">Corner Sea View Room</td>

                                <td className="border border-gray-300 px-4 py-2">170 €</td>
                                <td className="border border-gray-300 px-4 py-2">185 €</td>
                            </tr>
                        </tbody>
                    </table>

                    <p className="mt-4 text-gray-700"><strong>Distance from venue:</strong> 1.8 Km</p>

                    {/* Hotel Booking Link */}
                    <p className="mt-4 text-gray-700 font-bold">Click here for access:</p>
                    <a
                        href="https://www.marriott.com/en-us/hotels/adbfp-four-points-Izmir/overview/"
                        className="text-blue-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Four Points by Sheraton Hotel Booking Page
                    </a>
                </div>
            </div>
        </div>
    );
}