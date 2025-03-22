import React from 'react';
import SEO from './SEO';

export default function Transportation() {
    return (
        <div className="bg-gray-100 min-h-screen py-12">
            <SEO
                title="Transportation Information"
                description="Find transportation details for reaching the Tepekule Exhibition and Business Center in Izmir."
                keywords="Tepekule Izmir, transportation, public transport, metro, bus routes"
            />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Transportation</h1>

                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="p-6 space-y-6">
                        {/* Venue Address */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Venue Address</h2>
                            <p className="text-lg text-gray-700 font-medium">Tepekule Exhibition and Business Center</p>
                            <p className="text-gray-700">Adalet, Anadolu Cd. No:40, 35010 Bayraklı/Izmir</p>
                        </section>

                        {/* Public Transportation */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Public Transportation</h2>
                            <p className="text-gray-700">
                                The following **city bus lines** pass by the venue, providing easy access from different parts of Izmir:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4">
                                <li><strong>077</strong> - NAFİZ GÜRMAN - HALKAPINAR METRO 2</li>
                                <li><strong>078</strong> - YAMANLAR - HALKAPINAR METRO 2</li>
                                <li><strong>125</strong> - MUSTAFA KEMAL MAH - HALKAPINAR METRO 2</li>
                                <li><strong>140</strong> - ÖRNEKKÖY - HALKAPINAR METRO 2</li>
                                <li><strong>147</strong> - POSTACI - HALKAPINAR METRO 2</li>
                                <li><strong>148</strong> - ONUR MAH. - HALKAPINAR METRO 2</li>
                                <li><strong>240</strong> - ZÜBEYDE HANIM MAH. - HALKAPINAR METRO 2</li>
                                <li><strong>335</strong> - DOĞANÇAY - HALKAPINAR METRO 2</li>
                                <li><strong>426</strong> - MUSTAFA KEMAL MAH - HALKAPINAR METRO 2</li>
                                <li><strong>434</strong> - KÖRFEZ MAHALLESI - HALKAPINAR METRO 2</li>
                                <li><strong>477</strong> - NAFİZ GÜRMAN - HALKAPINAR METRO 2</li>
                                <li><strong>577</strong> - NAFİZ GÜRMAN - HALKAPINAR METRO 2</li>
                            </ul>
                        </section>

                        {/* Metro Access */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Metro Access</h2>
                            <p className="text-gray-700">
                                The closest **İZBAN** metro station is **Salhane Station**, which provides a convenient connection to the venue.
                            </p>
                        </section>

                        {/* General Info */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Getting to the Venue</h2>
                            <p className="text-gray-700">
                                Izmir's public transportation system includes **buses, metro, ferries, and trams**, offering various options for reaching Tepekule Exhibition and Business Center.
                            </p>
                            <p className="text-gray-700">
                                If arriving by **car**, parking is available near the venue.
                            </p>
                            <p className="text-gray-700">
                                For visitors traveling from outside Izmir, the **Adnan Menderes Airport** connects the city with domestic and international flights. From the airport, the **İZBAN train** provides direct access to **Salhane Station**, near the venue.
                            </p>
                        </section>
                    </div>
                </div>

                {/* Embedded Google Map Showing Transportation Stations */}
                <div className="mt-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Public Transportation Map</h2>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d29728.44374694756!2d27.16000308217265!3d38.4456790518541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sTepekule%20%C4%B0%C5%9F%20Merkezi%20yak%C4%B1n%20duraklar!5e0!3m2!1str!2str!4v1742028949922!5m2!1str!2str"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        title="Transportation Map"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
