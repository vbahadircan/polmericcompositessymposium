import React from 'react';

export default function Program() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <div className="bg-gray-100 p-8 rounded-lg shadow-inner mb-8">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-red-800 mb-2 uppercase tracking-tight">
                            6th INTERNATIONAL POLYMERIC COMPOSITES SYMPOSIUM AND WORKSHOPS
                        </h1>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 mt-4">
                            VI. ULUSLARARASI POLİMERİK KOMPOZİTLER SEMPOZYUMU VE ÇALIŞTAYLARI
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-800 mb-6 mt-2">
                            2 October 2025 Thursday / 2 Ekim 2025 Perşembe
                        </p>
                        <button
                            onClick={() => {
                                const link = document.createElement('a');
                                link.href = '/programyeni.pdf';
                                link.download = 'programyeni.pdf';
                                link.click();
                            }}
                            className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10 transition duration-300"
                        >
                            Download Program / Programı İndir
                        </button>
                    </div>
                </div>
                {/* --- 2 October 2025 Thursday / 2 Ekim 2025 Perşembe --- */}
                <div className="mb-8 mt-12">
                    <h2 className="text-xl md:text-2xl font-bold text-center text-red-700 bg-yellow-50 py-2 rounded">2 October 2025 Thursday / 2 Ekim 2025 Perşembe</h2>
                </div>
                {/* Anadolu Hall / 1A Session Table */}
                <div className="mb-12">
                    <div className="flex items-center justify-between bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-t-lg px-6 py-4">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900">ANADOLU HALL / ANADOLU SALONU</h3>
                            <p className="text-sm font-semibold text-gray-700 mt-1">Session Chair / Oturum Başkanı: Mustafa DEMİRCİOĞLU</p>
                        </div>
                        <div className="text-right">
                            <div className="flex items-center space-x-2">
                                <span className="text-2xl">🕒</span>
                                <span className="font-semibold text-lg">1A SESSION<br/>1A OTURUM</span>
                            </div>
                        </div>
                    </div>
                    <table className="min-w-full border border-gray-200">
                        <thead>
                            <tr className="bg-white">
                                <th className="px-4 py-2 text-left text-red-800 font-bold text-lg">SAAT / TIME</th>
                                <th className="px-4 py-2 text-left text-gray-900 font-bold text-lg">EVENT / SPEAKER</th>
                                <th className="px-4 py-2 text-left text-gray-900 font-bold text-lg">DETAILS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-4 py-2 text-red-800 font-bold">08:30-09:30</td>
                                <td className="px-4 py-2 font-semibold">REGISTRATION / KAYIT</td>
                                <td className="px-4 py-2"></td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 text-red-800 font-bold">09:30-10:15</td>
                                <td className="px-4 py-2 font-semibold">INAUGURAL / AÇILIŞ KONUŞMALARI</td>
                                <td className="px-4 py-2"></td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 text-red-800 font-bold">10:15-10:50</td>
                                <td className="px-4 py-2 font-semibold">PLAQUE PRESENTATION TO SPONSORS / KATKI VEREN KURULUŞLARA PLAKET SUNUMU</td>
                                <td className="px-4 py-2"></td>
                            </tr>
                            <tr className="bg-yellow-200">
                                <td className="px-4 py-2 text-red-800 font-bold">10:50-11:35</td>
                                <td className="px-4 py-2 font-semibold">Plenary Lecture - Michael Wisnom<br/><span className="font-normal">University of Bristol</span></td>
                                <td className="px-4 py-2 font-semibold">Simulating Composites Manufacturing Processes</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 text-red-800 font-bold">11:35-11:50</td>
                                <td className="px-4 py-2 font-semibold">OPENING OF THE EXHIBITION AREA / SERGI ALANI AÇILIŞI</td>
                                <td className="px-4 py-2"></td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 text-red-800 font-bold">11:50-12:00</td>
                                <td className="px-4 py-2 font-semibold">COFFEE BREAK / ÇAY-KAHVE ARASI</td>
                                <td className="px-4 py-2"></td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">12:00-12:20</td>
                                <td className="px-4 py-2 font-semibold align-top">Emirhan Çetin<br/><span className="font-normal">Oyak Renault Otomobil Fabrikaları A.Ş</span></td>
                                <td className="px-4 py-2 align-top">Investigation of Foaming Processes in Rigid Polymer Composites for Lightweighting and Carbon Footprint Reduction in Automotive Applications</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">12:20-12:40</td>
                                <td className="px-4 py-2 font-semibold align-top">Burcu Saner Okan<br/><span className="font-normal">Sabancı University</span></td>
                                <td className="px-4 py-2 align-top">Driving Sustainability Through Advanced Waste Upcycling: Lightweight Thermoplastic Manufacturing Reinforced with Green Graphene</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 text-red-800 font-bold">12:40-13:30</td>
                                <td className="px-4 py-2 font-semibold">LUNCH / YEMEK ARASI</td>
                                <td className="px-4 py-2"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* Anadolu Hall / 2A Session Table */}
                <div className="mb-12">
                    <div className="flex items-center justify-between bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-t-lg px-6 py-4">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900">ANADOLU HALL / ANADOLU SALONU</h3>
                            <p className="text-sm font-semibold text-gray-700 mt-1">Session Chair / Oturum Başkanı: M. Cengiz ALTAN</p>
                        </div>
                        <div className="text-right">
                            <div className="flex items-center space-x-2">
                                <span className="text-2xl">🕒</span>
                                <span className="font-semibold text-lg">2A SESSION<br/>2A OTURUM</span>
                            </div>
                        </div>
                    </div>
                    <table className="min-w-full border border-gray-200">
                        <thead>
                            <tr className="bg-white">
                                <th className="px-4 py-2 text-left text-gray-900 font-bold text-lg">SPEAKER / AFFILIATION</th>
                                <th className="px-4 py-2 text-left text-red-800 font-bold text-lg">TIME</th>
                                <th className="px-4 py-2 text-left text-gray-900 font-bold text-lg">DETAILS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-4 py-2 font-bold text-center text-brown-700" colSpan={3}>
                                    <span className="text-lg font-bold text-brown-700">INVITED TALK</span>
                                </td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 font-semibold align-top">Mete Bakır<br/><span className="font-normal">Turkish Aerospace Industries</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">13:30-14:00</td>
                                <td className="px-4 py-2 align-top bg-yellow-200 font-semibold">High-Performance Polymer Composites for the Next-Generation of Sustainable Aerospace Applications</td>
                            </tr>
                            <tr className="border-t">
                                <td className="px-4 py-2 font-semibold align-top">Seçkin Martin<br/><span className="font-normal">Izmir Institute of Technology</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">14:00-14:20</td>
                                <td className="px-4 py-2 align-top">Designing Composite-Based Cylindrical Structures and Manufacturing Composite Prototypes by Filament Winding Method</td>
                            </tr>
                            <tr className="border-t">
                                <td className="px-4 py-2 font-semibold align-top">Merve Erdeğer<br/><span className="font-normal">Kordsa</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">14:20-14:40</td>
                                <td className="px-4 py-2 align-top">Vitimber Based Composites: Prepreg Application for Aerospace</td>
                            </tr>
                            <tr className="border-t">
                                <td className="px-4 py-2 font-semibold align-top">Mustafa Can Topbaşoğlu<br/><span className="font-normal">Sazcılar Otomotiv</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">14:40-15:00</td>
                                <td className="px-4 py-2 align-top">Investigation of the Flammability Properties of Boron Additived Fiber Reinforced Composites</td>
                            </tr>
                            <tr className="border-t">
                                <td className="px-4 py-2 font-semibold align-top">Momen N M Elbhanasaw<br/><span className="font-normal">Bursa Uludağ University</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">15:00-15:20</td>
                                <td className="px-4 py-2 align-top">Experimental Investigation of Thermoplastic Composite Based Sandwich Panels Under Static and Impact Loading</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* Akdeniz Hall / 2B Session Table */}
                <div className="mb-12">
                    <div className="flex items-center justify-between bg-gradient-to-r from-blue-100 to-blue-200 rounded-t-lg px-6 py-4">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-extrabold text-blue-600">AKDENİZ HALL / AKDENİZ SALONU</h3>
                            <p className="text-sm font-semibold text-gray-700 mt-1">Session Chair / Oturum Başkanı: Burcu Saner OKAN</p>
                        </div>
                        <div className="text-right">
                            <div className="flex items-center space-x-2">
                                <span className="text-2xl">🕒</span>
                                <span className="font-semibold text-lg">2B SESSION<br/>2B OTURUM</span>
                            </div>
                        </div>
                    </div>
                    <table className="min-w-full border border-gray-200">
                        <thead>
                            <tr className="bg-white">
                                <th className="px-4 py-2 text-left text-gray-900 font-bold text-lg">SPEAKER / AFFILIATION</th>
                                <th className="px-4 py-2 text-left text-red-800 font-bold text-lg">TIME</th>
                                <th className="px-4 py-2 text-left text-gray-900 font-bold text-lg">DETAILS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-4 py-2 font-semibold align-top">Alperen Solmaz<br/><span className="font-normal">Manisa Celal Bayar University</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">14:00-14:20</td>
                                <td className="px-4 py-2 align-top">Tensile Characteristics Determination of GNP/PLA Composites Fabricated via Fused Deposition Modelling (FDM) Method</td>
                            </tr>
                            <tr className="border-t">
                                <td className="px-4 py-2 font-semibold align-top">Gamze Sultan Baş Berkem<br/><span className="font-normal">Yalova University</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">14:20-14:40</td>
                                <td className="px-4 py-2 align-top">Synthesis and Characterization of Recyclable Bio-Based Polymers Using Chemically Modified Sodium Lignosulfonate</td>
                            </tr>
                            <tr className="border-t">
                                <td className="px-4 py-2 font-semibold align-top">Berna Şirvanlıoğlu<br/><span className="font-normal">Izmir Institute of Technology</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">14:40-15:00</td>
                                <td className="px-4 py-2 align-top">Preparation and Characterization of Poly-L-Lactide-Natural Silica Composites</td>
                            </tr>
                            <tr className="border-t">
                                <td className="px-4 py-2 font-semibold align-top">Buğra Sökmen<br/><span className="font-normal">Pamukkale University</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">15:00-15:20</td>
                                <td className="px-4 py-2 align-top">Sustainable and Functional Encapsulation: Fabrication and Characterization of Thyme Oil Microcapsules Using Waste Textile-Derived Nanocrystalline Cellulose Reinforced Alginate-Gelatin Matrix</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* Coffee Break after 2B Session */}
                <div className="mb-8">
                    <div className="bg-gray-100 rounded-lg px-6 py-4 text-center">
                        <span className="text-xl font-extrabold text-gray-800">15:20-15:35 &nbsp; COFFEE BREAK / ÇAY-KAHVE ARASI</span>
                    </div>
                </div>
                {/* Anadolu Hall / 3A Session Table */}
                <div className="mb-12">
                    <div className="flex items-center justify-between bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-t-lg px-6 py-4">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900">ANADOLU HALL / ANADOLU SALONU</h3>
                            <p className="text-sm font-semibold text-gray-700 mt-1">Session Chair / Oturum Başkanı: Hülya CEBECİ</p>
                        </div>
                        <div className="text-right">
                            <div className="flex items-center space-x-2">
                                <span className="text-2xl">🕒</span>
                                <span className="font-semibold text-lg">3A SESSION<br/>3A OTURUM</span>
                            </div>
                        </div>
                    </div>
                    <table className="min-w-full border border-gray-200">
                        <thead>
                            <tr className="bg-white">
                                <th className="px-4 py-2 text-left text-gray-900 font-bold text-lg">SPEAKER / AFFILIATION</th>
                                <th className="px-4 py-2 text-left text-red-800 font-bold text-lg">TIME</th>
                                <th className="px-4 py-2 text-left text-gray-900 font-bold text-lg">DETAILS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-4 py-2 font-bold text-center text-brown-700" colSpan={3}>
                                    <span className="text-lg font-bold text-brown-700">INVITED TALK</span>
                                </td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 font-semibold align-top">Salim Belouettar<br/><span className="font-normal">Luxembourg Institute of Science and Technology</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">15:35-16:05</td>
                                <td className="px-4 py-2 align-top bg-yellow-200 font-semibold">Digital Product Passports for Circular Economy in Composites: Challenges and Future Perspectives</td>
                            </tr>
                            <tr className="border-t">
                                <td className="px-4 py-2 font-semibold align-top">Muhammed Erdal Ulaşlı<br/><span className="font-normal">Izmir Institute of Technology</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">16:05-16:25</td>
                                <td className="px-4 py-2 align-top">Manufacturing and Mechanical Characterization of Graphene-Reinforced Type IV COPVs for High-Pressure Hydrogen Storage</td>
                            </tr>
                            <tr className="border-t">
                                <td className="px-4 py-2 font-semibold align-top">Fatih Ertugrul Oz<br/><span className="font-normal">King Abdullah University of Science And Technology</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">16:25-16:45</td>
                                <td className="px-4 py-2 align-top">Layer Thickness Effect on Hydrogen Permeation Pathways of Thin-Ply Thermoplastic Composites</td>
                            </tr>
                            <tr className="border-t">
                                <td className="px-4 py-2 font-semibold align-top">Cuma Ali Uçar<br/><span className="font-normal">Cef Advanced Composites & Materials</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">16:45-17:05</td>
                                <td className="px-4 py-2 align-top">Epoxy Prepregs With Adjustable Processability And Curing Characteristics With Ambient-Temperature-Stability: Linking Prepreg Architecture To Composite Performance</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* Akdeniz Hall / 3B Session Table */}
                <div className="mb-12">
                    <div className="flex items-center justify-between bg-gradient-to-r from-blue-100 to-blue-200 rounded-t-lg px-6 py-4">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-extrabold text-blue-600">AKDENİZ HALL / AKDENİZ SALONU</h3>
                            <p className="text-sm font-semibold text-gray-700 mt-1">Session Chair / Oturum Başkanı: Funda TIHMINLIOĞLU</p>
                        </div>
                        <div className="text-right">
                            <div className="flex items-center space-x-2">
                                <span className="text-2xl">🕒</span>
                                <span className="font-semibold text-lg">3B SESSION<br/>3B OTURUM</span>
                            </div>
                        </div>
                    </div>
                    <table className="min-w-full border border-gray-200">
                        <thead>
                            <tr className="bg-white">
                                <th className="px-4 py-2 text-left text-gray-900 font-bold text-lg">SPEAKER / AFFILIATION</th>
                                <th className="px-4 py-2 text-left text-red-800 font-bold text-lg">TIME</th>
                                <th className="px-4 py-2 text-left text-gray-900 font-bold text-lg">DETAILS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-4 py-2 font-semibold align-top">Kardelen Yıldız<br/><span className="font-normal">Izmir Institute of Technology</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">16:05-16:25</td>
                                <td className="px-4 py-2 align-top">Advancing Thermal Management with Hexagonal Boron Nitride Doped High-Performance Polymer Composites for Efficient Heat Dissipation in Electronics</td>
                            </tr>
                            <tr className="border-t">
                                <td className="px-4 py-2 font-semibold align-top">M. Reza Nofar<br/><span className="font-normal">Istanbul Technical University</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">16:25-16:45</td>
                                <td className="px-4 py-2 align-top">Cellulose Nanocrystals and Their Nanocomposites: Progresses and Future Perspectives</td>
                            </tr>
                            <tr className="border-t">
                                <td className="px-4 py-2 font-semibold align-top">Hüsnü Onur Ertürk<br/><span className="font-normal">Izmir Katip Çelebi University</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">16:45-17:05</td>
                                <td className="px-4 py-2 align-top">Use of Waste-Derived ZnFe2O4 as A Functional Additive in Recycled Polyethylene Composites</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* Coffee Break after 3B Session */}
                <div className="mb-8">
                    <div className="bg-gray-100 rounded-lg px-6 py-4 text-center">
                        <span className="text-xl font-extrabold text-gray-800">17:05-17:20 &nbsp; COFFEE BREAK / ÇAY-KAHVE ARASI</span>
                    </div>
                </div>
                {/* Anadolu Hall / 4A Session Table */}
                <div className="mb-12">
                    <div className="flex items-center justify-between bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-t-lg px-6 py-4">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900">ANADOLU HALL / ANADOLU SALONU</h3>
                            <p className="text-sm font-semibold text-gray-700 mt-1">Session Chair / Oturum Başkanı: Aref CEVAHİR</p>
                        </div>
                        <div className="text-right">
                            <div className="flex items-center space-x-2">
                                <span className="text-2xl">🕒</span>
                                <span className="font-semibold text-lg">4A SESSION<br/>4A OTURUM</span>
                            </div>
                        </div>
                    </div>
                    <table className="min-w-full border border-gray-200">
                        <thead>
                            <tr className="bg-white">
                                <th className="px-4 py-2 text-left text-gray-900 font-bold text-lg">SPEAKER / AFFILIATION</th>
                                <th className="px-4 py-2 text-left text-red-800 font-bold text-lg">TIME</th>
                                <th className="px-4 py-2 text-left text-gray-900 font-bold text-lg">DETAILS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-4 py-2 font-semibold align-top">Mete Kayıhan<br/><span className="font-normal">Istanbul Technical University</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">17:20-17:40</td>
                                <td className="px-4 py-2 align-top">Effect of Microwave Curing on Glass Fiber Reinforced Elium Thermoplastic Composite Production</td>
                            </tr>
                            <tr className="border-t">
                                <td className="px-4 py-2 font-semibold align-top">Hürrem Canıtez<br/><span className="font-normal">Sazcılar Otomotiv</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">17:40-18:00</td>
                                <td className="px-4 py-2 align-top">Lap-Shear Strengths of Glass, Basalt and Hybrid Composites</td>
                            </tr>
                            <tr className="border-t">
                                <td className="px-4 py-2 font-semibold align-top">Melisa Atay<br/><span className="font-normal">Dokuz Eylul University</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">18:00-18:20</td>
                                <td className="px-4 py-2 align-top">Energy Harvesting Applications for Nanomaterial Based Triboelectric Nanogenerators</td>
                            </tr>
                            <tr className="border-t">
                                <td className="px-4 py-2 font-semibold align-top">Simge Karatepe<br/><span className="font-normal">Polütek Polyester Poliüretan Ltd. Şti</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">18:20-18:40</td>
                                <td className="px-4 py-2 align-top">The Effect of Magnesium Hydroxide and Sodium Hydroxide Applications on the Mechanical Properties of Natural Fiber-Reinforced Composites</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* Akdeniz Hall / 4B Session Table */}
                <div className="mb-12">
                    <div className="flex items-center justify-between bg-gradient-to-r from-blue-100 to-blue-200 rounded-t-lg px-6 py-4">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-extrabold text-blue-600">AKDENİZ HALL / AKDENİZ SALONU</h3>
                            <p className="text-sm font-semibold text-gray-700 mt-1">Session Chair / Oturum Başkanı: Mustafa ASLAN</p>
                        </div>
                        <div className="text-right">
                            <div className="flex items-center space-x-2">
                                <span className="text-2xl">🕒</span>
                                <span className="font-semibold text-lg">4B SESSION<br/>4B OTURUM</span>
                            </div>
                        </div>
                    </div>
                    <table className="min-w-full border border-gray-200">
                        <thead>
                            <tr className="bg-white">
                                <th className="px-4 py-2 text-left text-gray-900 font-bold text-lg">SPEAKER / AFFILIATION</th>
                                <th className="px-4 py-2 text-left text-red-800 font-bold text-lg">TIME</th>
                                <th className="px-4 py-2 text-left text-gray-900 font-bold text-lg">DETAILS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-4 py-2 font-semibold align-top">Simay Yanik<br/><span className="font-normal">Istanbul Technical University</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">17:20-17:40</td>
                                <td className="px-4 py-2 align-top">Development of Conductive Polymer Blend Nanocomposites with Optimized CNT Content</td>
                            </tr>
                            <tr className="border-t">
                                <td className="px-4 py-2 font-semibold align-top">Melisa Atay<br/><span className="font-normal">Dokuz Eylul University</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">17:40-18:00</td>
                                <td className="px-4 py-2 align-top">Energy Harvesting Applications for Nanomaterial Based Triboelectric Nanogenerators</td>
                            </tr>
                            <tr className="border-t">
                                <td className="px-4 py-2 font-semibold align-top">Simge Karatepe<br/><span className="font-normal">Polütek Polyester Poliüretan Ltd. Şti</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">18:00-18:20</td>
                                <td className="px-4 py-2 align-top">The Effect of Magnesium Hydroxide and Sodium Hydroxide Applications on the Mechanical Properties of Natural Fiber-Reinforced Composites</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="mb-8 mt-12">
                    <h2 className="text-xl md:text-2xl font-bold text-center text-red-700 bg-yellow-50 py-2 rounded">3 October 2025 Friday / 3 Ekim 2025 Cuma</h2>
                </div>
                {/* Anadolu Hall / 5A Session Table */}
                <div className="mb-12">
                    <div className="flex items-center justify-between bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-t-lg px-6 py-4">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900">ANADOLU HALL / ANADOLU SALONU</h3>
                            <p className="text-sm font-semibold text-gray-700 mt-1">Session Chair / Oturum Başkanı: Elif ALYAMAÇ SEYDİBEYOĞLU</p>
                        </div>
                        <div className="text-right">
                            <div className="flex items-center space-x-2">
                                <span className="text-2xl">🕒</span>
                                <span className="font-semibold text-lg">5A SESSION<br/>5A OTURUM</span>
                            </div>
                        </div>
                    </div>
                    <table className="min-w-full border border-gray-200">
                        <thead>
                            <tr className="bg-white">
                                <th className="px-4 py-2 text-left text-gray-900 font-bold text-lg">SPEAKER / AFFILIATION</th>
                                <th className="px-4 py-2 text-left text-red-800 font-bold text-lg">TIME</th>
                                <th className="px-4 py-2 text-left text-gray-900 font-bold text-lg">DETAILS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-4 py-2 font-bold text-center text-brown-700" colSpan={3}>
                                    <span className="text-lg font-bold text-brown-700">INVITED TALK</span>
                                </td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 font-semibold align-top">Jozsef Gabor Kovacs<br/><span className="font-normal">Budapest University of Technology and Economics</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">09:30-10:00</td>
                                <td className="px-4 py-2 align-top bg-yellow-200 font-semibold">Advanced Lightweight Injection-Molded Polymer Composites: Recycling, Hybrid Manufacturing, and Integration of Industry 4.0</td>
                            </tr>
                            <tr className="border-t">
                                <td className="px-4 py-2 font-semibold align-top">Clement Mugemana<br/><span className="font-normal">Luxemburg Institute of Science and Technology</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">10:00-10:20</td>
                                <td className="px-4 py-2 align-top">Polymer Composites Materials: Towards Functional Interfaces</td>
                            </tr>
                            <tr className="border-t">
                                <td className="px-4 py-2 font-semibold align-top">Alinda Öykü Akar<br/><span className="font-normal">Basf Türk Kimya</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">10:20-10:40</td>
                                <td className="px-4 py-2 align-top">Contribution of Amine and Isocyanate-Rich Interlayer to Fiber-Matrix Adhesion for Carbon Fiber-Reinforced Elastomeric Polyurethane-Based Composites</td>
                            </tr>
                            <tr className="border-t">
                                <td className="px-4 py-2 font-semibold align-top">Mehmet Çağatay Akbolat<br/><span className="font-normal">Gaziantep University</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">10:40-11:00</td>
                                <td className="px-4 py-2 align-top">The Effect of Glass Fiber Powder Reinforcement on the Interfacial Bond Strength Properties of Polypropylenes Produced by Fused Filament Deposition</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* Akdeniz Hall / 5B Session Table */}
                <div className="mb-12">
                    <div className="flex items-center justify-between bg-gradient-to-r from-blue-100 to-blue-200 rounded-t-lg px-6 py-4">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-extrabold text-blue-600">AKDENİZ HALL / AKDENİZ SALONU</h3>
                            <p className="text-sm font-semibold text-gray-700 mt-1">Session Chair / Oturum Başkanı: Nuri ERSOY</p>
                        </div>
                        <div className="text-right">
                            <div className="flex items-center space-x-2">
                                <span className="text-2xl">🕒</span>
                                <span className="font-semibold text-lg">5B SESSION<br/>5B OTURUM</span>
                            </div>
                        </div>
                    </div>
                    <table className="min-w-full border border-gray-200">
                        <thead>
                            <tr className="bg-white">
                                <th className="px-4 py-2 text-left text-gray-900 font-bold text-lg">SPEAKER / AFFILIATION</th>
                                <th className="px-4 py-2 text-left text-red-800 font-bold text-lg">TIME</th>
                                <th className="px-4 py-2 text-left text-gray-900 font-bold text-lg">DETAILS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-4 py-2 font-semibold align-top">Zehra Ekdi<br/><span className="font-normal">Istanbul University Cerrahpaşa</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">10:00-10:20</td>
                                <td className="px-4 py-2 align-top">Preliminary Performance Evaluation of Hydrogels Modified with Natural and Nano-Scale Additives for Biomedical Applications</td>
                            </tr>
                            <tr className="border-t">
                                <td className="px-4 py-2 font-semibold align-top">Onur Aras<br/><span className="font-normal">Istanbul Medeniyet University</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">10:20-10:40</td>
                                <td className="px-4 py-2 align-top">Development of Environmentally Friendly Hybrid Aerogels Using Carboxymethyl Cellulose and Clay Minerals</td>
                            </tr>
                            <tr className="border-t">
                                <td className="px-4 py-2 font-semibold align-top">Eren Karakuş, Şükrü Al<br/><span className="font-normal">Ege University</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">10:40-11:00</td>
                                <td className="px-4 py-2 align-top">PVC-Based Composite Materials Reinforced with Natural Hemp Fibers</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* Coffee Break after 5B Session */}
                <div className="mb-8">
                    <div className="bg-gray-100 rounded-lg px-6 py-4 text-center">
                        <span className="text-xl font-extrabold text-gray-800">11:00-11:10 &nbsp; COFFEE BREAK / ÇAY-KAHVE ARASI</span>
                        <br />
                        <span className="text-lg font-bold text-gray-700">ANADOLU HALL / ANADOLU SALONU</span>
                    </div>
                </div>
                {/* Anadolu Hall / 6A Session Table */}
                <div className="mb-12">
                    <div className="flex items-center justify-between bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-t-lg px-6 py-4">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900">ANADOLU HALL / ANADOLU SALONU</h3>
                            <p className="text-sm font-semibold text-gray-700 mt-1">Session Chair / Oturum Başkanı: Mehmet SARIKANAT</p>
                        </div>
                        <div className="text-right">
                            <div className="flex items-center space-x-2">
                                <span className="text-2xl">🕒</span>
                                <span className="font-semibold text-lg">6A SESSION<br/>6A OTURUM</span>
                            </div>
                        </div>
                    </div>
                    <table className="min-w-full border border-gray-200">
                        <thead>
                            <tr className="bg-white">
                                <th className="px-4 py-2 text-left text-gray-900 font-bold text-lg">SPEAKER / AFFILIATION</th>
                                <th className="px-4 py-2 text-left text-red-800 font-bold text-lg">TIME</th>
                                <th className="px-4 py-2 text-left text-gray-900 font-bold text-lg">DETAILS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-4 py-2 font-semibold align-top">Sven Fleischmann<br/><span className="font-normal">BASF SE</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">11:10-11:30</td>
                                <td className="px-4 py-2 align-top">Controlling Metal Powder / Thermoplastic Composite Feedstock Production to Optimize Metal Part Manufacturing</td>
                            </tr>
                            <tr className="border-t">
                                <td className="px-4 py-2 font-semibold align-top">Gülnur Başer<br/><span className="font-normal">Metyx Composites-Telateks A.Ş</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">11:30-11:50</td>
                                <td className="px-4 py-2 align-top">Use of Fiber-Reinforced Polymeric Composites in Solar Energy Systems and Integration of Photovoltaic Cells into Mobile Platforms</td>
                            </tr>
                            <tr className="border-t">
                                <td className="px-4 py-2 font-semibold align-top">Ferhat Yıldırım<br/><span className="font-normal">Çanakkale Onsekiz Mart University</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">11:50-12:10</td>
                                <td className="px-4 py-2 align-top">Investigation of Post-Impact Electromagnetic Shielding Effectiveness (EMSE) Performance of Hybrid 3D Composites</td>
                            </tr>
                            <tr className="border-t">
                                <td className="px-4 py-2 font-semibold align-top">Serdar Demir<br/><span className="font-normal">Bogazici University</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">12:10-12:30</td>
                                <td className="px-4 py-2 align-top">Crashworthiness Optimization of Crush Plugs Applied on CFRP Composite Tubes Subjected to Axial Crushing</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* Akdeniz Hall / 6B Session Table */}
                <div className="mb-12">
                    <div className="flex items-center justify-between bg-gradient-to-r from-blue-100 to-blue-200 rounded-t-lg px-6 py-4">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-extrabold text-blue-600">AKDENİZ HALL / AKDENİZ SALONU</h3>
                            <p className="text-sm font-semibold text-gray-700 mt-1">Session Chair / Oturum Başkanı: Veli DENİZ</p>
                        </div>
                        <div className="text-right">
                            <div className="flex items-center space-x-2">
                                <span className="text-2xl">🕒</span>
                                <span className="font-semibold text-lg">6B SESSION<br/>6B OTURUM</span>
                            </div>
                        </div>
                    </div>
                    <table className="min-w-full border border-gray-200">
                        <thead>
                            <tr className="bg-white">
                                <th className="px-4 py-2 text-left text-gray-900 font-bold text-lg">SPEAKER / AFFILIATION</th>
                                <th className="px-4 py-2 text-left text-red-800 font-bold text-lg">TIME</th>
                                <th className="px-4 py-2 text-left text-gray-900 font-bold text-lg">DETAILS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-4 py-2 font-semibold align-top">Ahmet Süha Kılıçoğlu<br/><span className="font-normal">OlgunÇelik OlgunTech - Izmir Institute of Technology</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">11:10-11:30</td>
                                <td className="px-4 py-2 align-top">An Experimental-Analytical Approach for the Effect of Intra-Ply Discontinuities on the Mechanical Performance of Glass Fiber Reinforced Polymer (GFRP) Leaf Springs</td>
                            </tr>
                            <tr className="border-t">
                                <td className="px-4 py-2 font-semibold align-top">Dildare Metin<br/><span className="font-normal">Izmir Institute of Technology</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">11:30-11:50</td>
                                <td className="px-4 py-2 align-top">The Preparation and Characterization of Wood-Plastic Composites from Recycled Plastics, Wood and Luffa Fiber</td>
                            </tr>
                            <tr className="border-t">
                                <td className="px-4 py-2 font-semibold align-top">Onur Nuri Arslan<br/><span className="font-normal">University of Warwick</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">11:50-12:10</td>
                                <td className="px-4 py-2 align-top">Epoxy-Cured Sustainable Rubber Composites Reinforced with Lignin</td>
                            </tr>
                            <tr className="border-t">
                                <td className="px-4 py-2 font-semibold align-top">Ferhat Yetiş<br/><span className="font-normal">Marmara Forestry Research Institute</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">12:10-12:30</td>
                                <td className="px-4 py-2 align-top">Reinforcing Effect of Esterified Cellulose Nanofibrils for Polylactic Acid</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* Lunch Break after 6B Session */}
                <div className="mb-8">
                    <div className="bg-yellow-100 rounded-lg px-6 py-4 text-center">
                        <span className="text-xl font-extrabold text-yellow-800">12:30-13:30 &nbsp; LUNCH / YEMEK ARASI</span>
                    </div>
                </div>
                {/* Anadolu Hall / 7A Session Table */}
                <div className="mb-12">
                    <div className="flex items-center justify-between bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-t-lg px-6 py-4">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900">ANADOLU HALL / ANADOLU SALONU</h3>
                            <p className="text-sm font-semibold text-gray-700 mt-1">Session Chair / Oturum Başkanı: Jozsef Gabor KOVACS</p>
                        </div>
                        <div className="text-right">
                            <div className="flex items-center space-x-2">
                                <span className="text-2xl">🕒</span>
                                <span className="font-semibold text-lg">7A SESSION<br/>7A OTURUM</span>
                            </div>
                        </div>
                    </div>
                    <table className="min-w-full border border-gray-200">
                        <thead>
                            <tr className="bg-white">
                                <th className="px-4 py-2 text-left text-gray-900 font-bold text-lg">SPEAKER / AFFILIATION</th>
                                <th className="px-4 py-2 text-left text-red-800 font-bold text-lg">TIME</th>
                                <th className="px-4 py-2 text-left text-gray-900 font-bold text-lg">DETAILS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-4 py-2 font-bold text-center text-brown-700" colSpan={3}>
                                    <span className="text-lg font-bold text-brown-700">PLENARY LECTURE</span>
                                </td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 font-semibold align-top">Marino Quaresimin<br/><span className="font-normal">University of Padova</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">13:30-14:15</td>
                                <td className="px-4 py-2 align-top bg-yellow-200 font-semibold">An Innovative Strategy to Design and Monitor Safe, Reliable and Lightweight Composite Structures Under in-Service Loading</td>
                            </tr>
                            <tr className="border-t">
                                <td className="px-4 py-2 font-semibold align-top">Peter Klein<br/><span className="font-normal">Fraunhofer Institute for Industrial Mathematics</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">14:15-14:35</td>
                                <td className="px-4 py-2 align-top">Mastering the DPP Regulation Jungle on a Digital Platform: An Opportunity for Accelerated Composite Innovations</td>
                            </tr>
                            <tr className="border-t">
                                <td className="px-4 py-2 font-semibold align-top">Natalia Konchakova<br/><span className="font-normal">Helmholtz-Zentrum Hereon</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">14:35-14:55</td>
                                <td className="px-4 py-2 align-top">Know Your Products to Forge a Secure and Prosperous Future: DigiPass CSA Approach</td>
                            </tr>
                            <tr className="border-t">
                                <td className="px-4 py-2 font-semibold align-top">Heinz A. Preisig<br/><span className="font-normal">Norwegian University of Science and Technology</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">14:55-15:15</td>
                                <td className="px-4 py-2 align-top">Interoperability for Digital Product Passports and Circularity</td>
                            </tr>
                            <tr className="border-t">
                                <td className="px-4 py-2 font-semibold align-top">Franz Pirker<br/><span className="font-normal">AC2T Research GmbH</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">15:15-15:35</td>
                                <td className="px-4 py-2 align-top">Competitive Advantage through Comprehensive DPPs: From an Administrative Burden to Strategic Edge</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* Akdeniz Hall / 7B Session Table */}
                <div className="mb-12">
                    <div className="flex items-center justify-between bg-gradient-to-r from-blue-100 to-blue-200 rounded-t-lg px-6 py-4">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-extrabold text-blue-600">AKDENİZ HALL / AKDENİZ SALONU</h3>
                            <p className="text-sm font-semibold text-gray-700 mt-1">Session Chair / Oturum Başkanı: Ümit Halis ERDOĞAN</p>
                        </div>
                        <div className="text-right">
                            <div className="flex items-center space-x-2">
                                <span className="text-2xl">🕒</span>
                                <span className="font-semibold text-lg">7B SESSION<br/>7B OTURUM</span>
                            </div>
                        </div>
                    </div>
                    <table className="min-w-full border border-gray-200">
                        <thead>
                            <tr className="bg-white">
                                <th className="px-4 py-2 text-left text-gray-900 font-bold text-lg">SPEAKER / AFFILIATION</th>
                                <th className="px-4 py-2 text-left text-red-800 font-bold text-lg">TIME</th>
                                <th className="px-4 py-2 text-left text-gray-900 font-bold text-lg">DETAILS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-4 py-2 font-semibold align-top">Hüsnü Onur Ertürk<br/><span className="font-normal">Izmir Katip Çelebi University</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">14:15-14:35</td>
                                <td className="px-4 py-2 align-top">Use of Waste-Derived ZnFe2O4 as A Functional Additive in Recycled Polyethylene Composites</td>
                            </tr>
                            <tr className="border-t">
                                <td className="px-4 py-2 font-semibold align-top">Göksenin Kurt Çömlekçi<br/><span className="font-normal">Şişecam Bilim, Teknoloji ve Tasarım Merkezi</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">14:35-14:55</td>
                                <td className="px-4 py-2 align-top">Effect of Different Sizing Types on the Interfacial Strength of Glass Fiber in PPS Composites</td>
                            </tr>
                            <tr className="border-t">
                                <td className="px-4 py-2 font-semibold align-top">Salih Dağdeviren<br/><span className="font-normal">Ankara Yıldırım Beyazıt University</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">14:55-15:15</td>
                                <td className="px-4 py-2 align-top">Statistical Investigation of the Effects of Dust Contamination and Surface Preparation on the Bond Strength of Composites</td>
                            </tr>
                            <tr className="border-t">
                                <td className="px-4 py-2 font-semibold align-top">Çağlar Subaşı<br/><span className="font-normal">Eskim Kimya</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">15:15-15:35</td>
                                <td className="px-4 py-2 align-top">Development of Natural Fiber-Reinforced BMC Composite Materials</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* Coffee Break after 7B Session */}
                <div className="mb-8">
                    <div className="bg-gray-100 rounded-lg px-6 py-4 text-center">
                        <span className="text-xl font-extrabold text-gray-800">15:35-15:50 &nbsp; COFFEE BREAK / ÇAY-KAHVE ARASI</span>
                    </div>
                </div>
                {/* Anadolu Hall / 8A Session Table */}
                <div className="mb-4">
                    <div className="flex items-center justify-between bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-t-lg px-6 py-4">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900">ANADOLU HALL / ANADOLU SALONU</h3>
                            <p className="text-sm font-semibold text-gray-700 mt-1">Session Chair / Oturum Başkanı: Özlem URAL</p>
                        </div>
                        <div className="text-right">
                            <div className="flex items-center space-x-2">
                                <span className="text-2xl">🕒</span>
                                <span className="font-semibold text-lg">8A SESSION<br/>8A OTURUM</span>
                            </div>
                        </div>
                    </div>
                    <table className="min-w-full border border-gray-200">
                        <thead>
                            <tr className="bg-white">
                                <th className="px-4 py-2 text-left text-gray-900 font-bold text-lg">SPEAKER / AFFILIATION</th>
                                <th className="px-4 py-2 text-left text-red-800 font-bold text-lg">TIME</th>
                                <th className="px-4 py-2 text-left text-gray-900 font-bold text-lg">DETAILS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-4 py-2 font-semibold align-top">Samet Özyiğit<br/><span className="font-normal">Luxembourg Institute of Science And Technology</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">15:50-16:10</td>
                                <td className="px-4 py-2 align-top">Recycling of Carbon Fibers in Structural Composites Having Debonding on Demand Characteristics</td>
                            </tr>
                            <tr className="border-t">
                                <td className="px-4 py-2 font-semibold align-top">Ebeda Nur Beşdok<br/><span className="font-normal">Gebze Technical University</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">16:10-16:30</td>
                                <td className="px-4 py-2 align-top">Investigation the Effects of Manual and Waterjet Cutting Methods on the Mechanical Properties of Carbon Fiber Composite Materials</td>
                            </tr>
                            <tr className="border-t">
                                <td className="px-4 py-2 font-semibold align-top">Zeliha Bengisu Yakışık<br/><span className="font-normal">Turkish Energy, Nuclear and Mineral Research Agency</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">16:30-16:50</td>
                                <td className="px-4 py-2 align-top">Advanced HDPE-Based Composites for Neutron Shielding: A Theoretical and Experimental Study</td>
                            </tr>
                            <tr className="border-t">
                                <td className="px-4 py-2 font-semibold align-top">Sevim Özgül<br/><span className="font-normal">Bahçeşehir University</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">16:50-17:10</td>
                                <td className="px-4 py-2 align-top">Fungal Biocomposite Production and Characterization</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="mb-12">
                    <div className="bg-yellow-100 rounded-b-lg px-6 py-4 text-center">
                        <span className="text-xl font-extrabold">17:30-18:30 &nbsp; POSTER OTURUMU / POSTER SESSION</span>
                    </div>
                </div>
                {/* Akdeniz Hall / 8B Session Table */}
                <div className="mb-4">
                    <div className="flex items-center justify-between bg-gradient-to-r from-blue-100 to-blue-200 rounded-t-lg px-6 py-4">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-extrabold text-blue-600">AKDENİZ HALL / AKDENİZ SALONU</h3>
                            <p className="text-sm font-semibold text-gray-700 mt-1">Session Chair / Oturum Başkanı: Göksenin ÇÖMLEKÇİ</p>
                        </div>
                        <div className="text-right">
                            <div className="flex items-center space-x-2">
                                <span className="text-2xl">🕒</span>
                                <span className="font-semibold text-lg">8B SESSION<br/>8B OTURUM</span>
                            </div>
                        </div>
                    </div>
                    <table className="min-w-full border border-gray-200">
                        <thead>
                            <tr className="bg-white">
                                <th className="px-4 py-2 text-left text-gray-900 font-bold text-lg">SPEAKER / AFFILIATION</th>
                                <th className="px-4 py-2 text-left text-red-800 font-bold text-lg">TIME</th>
                                <th className="px-4 py-2 text-left text-gray-900 font-bold text-lg">DETAILS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-4 py-2 font-semibold align-top">Nilsu Ataman<br/><span className="font-normal">Izmir Katip Çelebi University</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">15:50-16:10</td>
                                <td className="px-4 py-2 align-top">Life Cycle-Based Carbon Footprint Analysis of Fiber and Matrix Selection in Polymer Matrix Composite Materials</td>
                            </tr>
                            <tr className="border-t">
                                <td className="px-4 py-2 font-semibold align-top">Özge Akay Sefer<br/><span className="font-normal">Marmara University</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">16:10-16:30</td>
                                <td className="px-4 py-2 align-top">Sustainable Packaging Materials: Fabrication and Analysis of Luffa Cylindrica–Polyvinylpyrrolidone (PVP) Bio-Composites</td>
                            </tr>
                            
                            <tr className="border-t">
                                <td className="px-4 py-2 font-semibold align-top">Mete Kayıhan<br/><span className="font-normal">Istanbul Technical University</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">16:30-16:50</td>
                                <td className="px-4 py-2 align-top">Fatigue Damage Analysis of Glass Fiber Reinforced Elium Thermoplastic Composite Materials</td>
                            </tr>
                            <tr className="border-t">
                                <td className="px-4 py-2 font-semibold align-top">Burçak Ay<br/><span className="font-normal">Yıldız Technical University</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">16:50-17:10</td>
                                <td className="px-4 py-2 align-top">Optimization of Process Parameters in Chitosan Nanoparticles Produced for Hydrophobic Coatings Reducing Bacterial Adhesion</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="mb-12">
                    <div className="bg-blue-100 rounded-b-lg px-6 py-4 text-center">
                        <span className="text-xl font-extrabold">17:30-18:30 &nbsp; POSTER OTURUMU / POSTER SESSION</span>
                    </div>
                </div>
                
                {/* Gala Dinner */}
                <div className="mb-8">
                    <div className="bg-red-100 rounded-lg px-6 py-4 text-center">
                        <span className="text-xl font-extrabold text-red-800">20:00-23:00 &nbsp; GALA YEMEĞİ / GALA DINNER</span>
                    </div>
                </div>
                {/* --- 3 October 2025 Friday / 3 Ekim 2025 Cuma --- */}
                <div className="mb-8 mt-12">
                    <h2 className="text-xl md:text-2xl font-bold text-center text-red-700 bg-yellow-50 py-2 rounded">4 October 2025 Saturday / 4 Ekim 2025 Cumartesi</h2>
                </div>
                {/* Anadolu Hall / 9A Session Table */}
                <div className="mb-4">
                    <div className="flex items-center justify-between bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-t-lg px-6 py-4">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900">ANADOLU HALL / ANADOLU SALONU</h3>
                            <p className="text-sm font-semibold text-gray-700 mt-1">Session Chair / Oturum Başkanı: Engin AKTAŞ</p>
                        </div>
                        <div className="text-right">
                            <div className="flex items-center space-x-2">
                                <span className="text-2xl">🕒</span>
                                <span className="font-semibold text-lg">9A SESSION<br/>9A OTURUM</span>
                            </div>
                        </div>
                    </div>
                    <table className="min-w-full border border-gray-200">
                        <thead>
                            <tr className="bg-white">
                                <th className="px-4 py-2 text-left text-gray-900 font-bold text-lg">SPEAKER / AFFILIATION</th>
                                <th className="px-4 py-2 text-left text-red-800 font-bold text-lg">TIME</th>
                                <th className="px-4 py-2 text-left text-gray-900 font-bold text-lg">DETAILS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-4 py-2 font-semibold align-top">Alperen Doğru<br/><span className="font-normal">Ege University</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">09:30-09:50</td>
                                <td className="px-4 py-2 align-top">Effect of Environmental Aging on Mechanical and Thermal Properties of Carbon Fiber and Glass Fiber Reinforced HDPE Matrix Composite</td>
                            </tr>
                            <tr className="border-t">
                                <td className="px-4 py-2 font-semibold align-top">Ayberk Sözen<br/><span className="font-normal">Dokuz Eylul University</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">09:50-10:10</td>
                                <td className="px-4 py-2 align-top">Thermoplastic Materials for Marine Applications : PA Composites</td>
                            </tr>
                            <tr className="border-t">
                                <td className="px-4 py-2 font-semibold align-top">Kaveh Shahidi<br/><span className="font-normal">Boğaziçi University</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">10:10-10:30</td>
                                <td className="px-4 py-2 align-top">Seismic Design and Damage Assessment of Composite Pipe Joints</td>
                            </tr>
                            <tr className="border-t">
                                <td className="px-4 py-2 font-semibold align-top">Ferit Çakır<br/><span className="font-normal">Gebze Technical University</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">10:30-10:50</td>
                                <td className="px-4 py-2 align-top">The Use of Composite Materials as Reinforcement Elements in Reinforced Concrete and Masonry Structures: An Experimental and Practical Evaluation</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* Akdeniz Hall / 9B Session Table */}
                <div className="mb-12">
                    <div className="flex items-center justify-between bg-gradient-to-r from-blue-100 to-blue-200 rounded-t-lg px-6 py-4">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-extrabold text-blue-600">AKDENİZ HALL / AKDENİZ SALONU</h3>
                            <p className="text-sm font-semibold text-gray-700 mt-1">Session Chair / Oturum Başkanı: Cem GÖK</p>
                        </div>
                        <div className="text-right">
                            <div className="flex items-center space-x-2">
                                <span className="text-2xl">🕒</span>
                                <span className="font-semibold text-lg">9B SESSION<br/>9B OTURUM</span>
                            </div>
                        </div>
                    </div>
                    <table className="min-w-full border border-gray-200">
                        <thead>
                            <tr className="bg-white">
                                <th className="px-4 py-2 text-left text-gray-900 font-bold text-lg">SPEAKER / AFFILIATION</th>
                                <th className="px-4 py-2 text-left text-red-800 font-bold text-lg">TIME</th>
                                <th className="px-4 py-2 text-left text-gray-900 font-bold text-lg">DETAILS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-4 py-2 font-semibold align-top">Nur Sultan Yoldaş<br/><span className="font-normal">Gazi University</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">09:30-09:50</td>
                                <td className="px-4 py-2 align-top">Preparation and Characterization of Boron Carbide Filled Electrorheological Thermoplastic Polyurethane</td>
                            </tr>
                            <tr className="border-t">
                                <td className="px-4 py-2 font-semibold align-top">Mahmut Uğur<br/><span className="font-normal">Fiberr Fiber Reinforced Resins As</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">09:50-10:10</td>
                                <td className="px-4 py-2 align-top">Development of Fragment-Resistant Wall Against Explosion Effects Using Composite Technology by Recycling Plastic Waste</td>
                            </tr>
                            <tr className="border-t">
                                <td className="px-4 py-2 font-semibold align-top">Ayça Aydın – Ayşe Kurt<br/><span className="font-normal">Polyteks Textile Company – BUTEKOM Bursa Technology Coordination and R&D Center</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">10:10-10:30</td>
                                <td className="px-4 py-2 align-top">Development of Glass Fibre Reinforced Bio–PET Matrix Composites and Evaluation of Their Mechanical Performance</td>
                            </tr>
                            <tr className="border-t">
                                <td className="px-4 py-2 font-semibold align-top">Selçuk Poyraz<br/><span className="font-normal">Adıyaman University</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">10:30-10:50</td>
                                <td className="px-4 py-2 align-top">Preparation and Characterization of Functional Textiles for Fiber Reinforced Polymeric Composites via Microwave Energy-Based Approach</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* Coffee Break after 9B Session */}
                <div className="mb-8">
                    <div className="bg-gray-100 rounded-lg px-6 py-4 text-center">
                        <span className="text-xl font-extrabold text-gray-800">10:50-11:05 &nbsp; COFFEE BREAK / ÇAY-KAHVE ARASI</span>
                    </div>
                </div>
                {/* Anadolu Hall / 10A Session Table */}
                <div className="mb-4">
                    <div className="flex items-center justify-between bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-t-lg px-6 py-4">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900">ANADOLU HALL / ANADOLU SALONU</h3>
                            <p className="text-sm font-semibold text-gray-700 mt-1">Session Chair / Oturum Başkanı: Yahya KARA</p>
                        </div>
                        <div className="text-right">
                            <div className="flex items-center space-x-2">
                                <span className="text-2xl">🕒</span>
                                <span className="font-semibold text-lg">10A SESSION<br/>10A OTURUM</span>
                            </div>
                        </div>
                    </div>
                    <table className="min-w-full border border-gray-200">
                        <thead>
                            <tr className="bg-white">
                                <th className="px-4 py-2 text-left text-gray-900 font-bold text-lg">SPEAKER / AFFILIATION</th>
                                <th className="px-4 py-2 text-left text-red-800 font-bold text-lg">TIME</th>
                                <th className="px-4 py-2 text-left text-gray-900 font-bold text-lg">DETAILS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-4 py-2 font-semibold align-top">Onur Özcan<br/><span className="font-normal">Izmir Institute of Technology</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">11:05-11:25</td>
                                <td className="px-4 py-2 align-top">Design, Simulation, and Optimization of High-Pressure Type-IV COPVs Reinforced with Graphene Nanoplatelets Using Finite Element Analysis</td>
                            </tr>
                            <tr className="border-t">
                                <td className="px-4 py-2 font-semibold align-top">Hamza Arda Deveci<br/><span className="font-normal">Erzincan Binali Yıldırım University</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">11:25-11:45</td>
                                <td className="px-4 py-2 align-top">The Effect of Stacking Sequence Optimization on the Open-Hole Tensile Strength of Carbon/Epoxy Composite Laminates</td>
                            </tr>
                            <tr className="border-t">
                                <td className="px-4 py-2 font-semibold align-top">Mehmet Korkmaz<br/><span className="font-normal">Dokuz Eylül University</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">11:45-12:05</td>
                                <td className="px-4 py-2 align-top">Modeling the Extension Behaviour of Intra-Ply Hybrid Flax/ E-Glass Woven Composites with the Finite Element Method</td>
                            </tr>
                            <tr className="border-t">
                                <td className="px-4 py-2 font-semibold align-top">Mehmet Kır<br/><span className="font-normal">Süleyman Demirel University</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">12:05-12:25</td>
                                <td className="px-4 py-2 align-top">Numerical Evaluation of Structural, Coating, and Corrosion Performance of Porous 316L Implants Fabricated via Polymer-Assisted Composite Approach</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* Akdeniz Hall / 10B Session Table */}
                <div className="mb-12">
                    <div className="flex items-center justify-between bg-gradient-to-r from-blue-100 to-blue-200 rounded-t-lg px-6 py-4">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-extrabold text-blue-600">AKDENİZ HALL / AKDENİZ SALONU</h3>
                            <p className="text-sm font-semibold text-gray-700 mt-1">Session Chair / Oturum Başkanı: Volkan ACAR</p>
                        </div>
                        <div className="text-right">
                            <div className="flex items-center space-x-2">
                                <span className="text-2xl">🕒</span>
                                <span className="font-semibold text-lg">10B SESSION<br/>10B OTURUM</span>
                            </div>
                        </div>
                    </div>
                    <table className="min-w-full border border-gray-200">
                        <thead>
                            <tr className="bg-white">
                                <th className="px-4 py-2 text-left text-gray-900 font-bold text-lg">SPEAKER / AFFILIATION</th>
                                <th className="px-4 py-2 text-left text-red-800 font-bold text-lg">TIME</th>
                                <th className="px-4 py-2 text-left text-gray-900 font-bold text-lg">DETAILS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-4 py-2 font-semibold align-top">Necip Elbir<br/><span className="font-normal">Kocaeli University</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">11:05-11:25</td>
                                <td className="px-4 py-2 align-top">Evaluation of Lichen-Based Renewable Filler in Polylactic Acid (PLA)</td>
                            </tr>
                            <tr className="border-t">
                                <td className="px-4 py-2 font-semibold align-top">Narmin Samadova<br/><span className="font-normal">Izmir Institute of Technology</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">11:25-11:45</td>
                                <td className="px-4 py-2 align-top">Fabrication of Colorimetric Mechanosensors for Glass Fiber Thermoplastic Composites</td>
                            </tr>
                            <tr className="border-t">
                                <td className="px-4 py-2 font-semibold align-top">Hasan Türkmen<br/><span className="font-normal">Pamukkale University</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">11:45-12:05</td>
                                <td className="px-4 py-2 align-top">Effect of Microcrystalline Cellulose and Diatomite Reinforcement on the Mechanical and Morphological Properties of Epoxy Based Composites</td>
                            </tr>
                            <tr className="border-t">
                                <td className="px-4 py-2 font-semibold align-top">Dursun Aydın<br/><span className="font-normal">Kansai Altan</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">12:05-12:25</td>
                                <td className="px-4 py-2 align-top">Comparative Study on The Effect of Various Calcium Carbonates on the Properties of Solvent-Based Coatings</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* Lunch Break after 10B Session */}
                <div className="mb-8">
                    <div className="bg-yellow-100 rounded-lg px-6 py-4 text-center">
                        <span className="text-xl font-extrabold text-yellow-800">12:25-13:30 &nbsp; LUNCH / YEMEK ARASI</span>
                    </div>
                </div>
                {/* Anadolu Hall / 11A Session Table */}
                <div className="mb-4">
                    <div className="flex items-center justify-between bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-t-lg px-6 py-4">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900">ANADOLU HALL / ANADOLU SALONU</h3>
                            <p className="text-sm font-semibold text-gray-700 mt-1">Session Chair / Oturum Başkanı: Sadık ASLITÜRK</p>
                        </div>
                        <div className="text-right">
                            <div className="flex items-center space-x-2">
                                <span className="text-2xl">🕒</span>
                                <span className="font-semibold text-lg">11A SESSION<br/>11A OTURUM</span>
                            </div>
                        </div>
                    </div>
                    <table className="min-w-full border border-gray-200">
                        <thead>
                            <tr className="bg-white">
                                <th className="px-4 py-2 text-left text-gray-900 font-bold text-lg">SPEAKER / AFFILIATION</th>
                                <th className="px-4 py-2 text-left text-red-800 font-bold text-lg">TIME</th>
                                <th className="px-4 py-2 text-left text-gray-900 font-bold text-lg">DETAILS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-4 py-2 font-semibold align-top">Seçil Babaoğlu<br/><span className="font-normal">DowAksa Advanced Composite Materials Industry Ltd. Co.</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">13:30-13:50</td>
                                <td className="px-4 py-2 align-top">Advanced Carbon Fiber Composites Solutions to Aviation and Energy Sectors</td>
                            </tr>
                            <tr className="border-t">
                                <td className="px-4 py-2 font-semibold align-top">Neslişah İmamoğlu Karabaş<br/><span className="font-normal">Izmir University of Economics</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">13:50-14:10</td>
                                <td className="px-4 py-2 align-top">Estimation of Cure Kinetics Parameters in Carbon/Epoxy Prepregs Incorporating Functionalized Single-Wall Carbon Nanotubes Using DSC Data</td>
                            </tr>
                            <tr className="border-t">
                                <td className="px-4 py-2 font-semibold align-top">Emre Alamur<br/><span className="font-normal">Izmir Institute of Technology</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">14:10-14:30</td>
                                <td className="px-4 py-2 align-top">Development of Thermal Insulation Materials</td>
                            </tr>
                            <tr className="border-t">
                                <td className="px-4 py-2 font-semibold align-top">Merve Kalaycı<br/><span className="font-normal">Beşer Balata</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">14:30-14:50</td>
                                <td className="px-4 py-2 align-top">Investigation of the Impact of Ceramic Fiber Addition on the Friction Performance of Brake Pad Compositions</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* Akdeniz Hall / 11B Session Table */}
                <div className="mb-12">
                    <div className="flex items-center justify-between bg-gradient-to-r from-blue-100 to-blue-200 rounded-t-lg px-6 py-4">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-extrabold text-blue-600">AKDENİZ HALL / AKDENİZ SALONU</h3>
                            <p className="text-sm font-semibold text-gray-700 mt-1">Session Chair / Oturum Başkanı: Gülnur BAŞER</p>
                        </div>
                        <div className="text-right">
                            <div className="flex items-center space-x-2">
                                <span className="text-2xl">🕒</span>
                                <span className="font-semibold text-lg">11B SESSION<br/>11B OTURUM</span>
                            </div>
                        </div>
                    </div>
                    <table className="min-w-full border border-gray-200">
                        <thead>
                            <tr className="bg-white">
                                <th className="px-4 py-2 text-left text-gray-900 font-bold text-lg">SPEAKER / AFFILIATION</th>
                                <th className="px-4 py-2 text-left text-red-800 font-bold text-lg">TIME</th>
                                <th className="px-4 py-2 text-left text-gray-900 font-bold text-lg">DETAILS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-4 py-2 font-semibold align-top">Mısra Cavdar<br/><span className="font-normal">Ege University</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">13:30-13:50</td>
                                <td className="px-4 py-2 align-top">Nanoparticle-Infused Electrospun Fibrous Scaffold Production for Spinal Cord Injury</td>
                            </tr>
                            <tr className="border-t">
                                <td className="px-4 py-2 font-semibold align-top">Sümeyra Göçemen<br/><span className="font-normal">Kosse Composite Marketing</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">13:50-14:10</td>
                                <td className="px-4 py-2 align-top">The Effect of Different Fillers on the Performance of Decorative Composite Panels</td>
                            </tr>
                            <tr className="border-t">
                                <td className="px-4 py-2 font-semibold align-top">Zeynep Özge Öztaban-Sevil Şenocak<br/><span className="font-normal">Istanbul Arel University</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">14:10-14:30</td>
                                <td className="px-4 py-2 align-top">Loading and Characterization of Colchicum Micranthum Extract on 3D Printed Scaffolds and Investigation of Anticancer Effects on Breast Cancer Cells</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* Coffee Break and Posters Session after 11B Session */}
                <div className="mb-8">
                    <div className="bg-gray-100 rounded-lg px-6 py-4 text-center">
                        <span className="text-xl font-extrabold text-gray-800">15:10-15:25 &nbsp; COFFEE BREAK, POSTERS SESSION</span>
                        <br />
                        <span className="text-lg font-bold text-gray-700">ÇAY-KAHVE ARASI, POSTER GEZİMİ</span>
                    </div>
                </div>
                {/* Anadolu Hall / 12A Session Table */}
                <div className="mb-4">
                    <div className="flex items-center justify-between bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-t-lg px-6 py-4">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900">ANADOLU HALL / ANADOLU SALONU</h3>
                            <p className="text-sm font-semibold text-gray-700 mt-1">Session Chair / Oturum Başkanı: Alperen DOĞRU</p>
                        </div>
                        <div className="text-right">
                            <div className="flex items-center space-x-2">
                                <span className="text-2xl">🕒</span>
                                <span className="font-semibold text-lg">12A SESSION<br/>12A OTURUM</span>
                            </div>
                        </div>
                    </div>
                    <table className="min-w-full border border-gray-200">
                        <thead>
                            <tr className="bg-white">
                                <th className="px-4 py-2 text-left text-gray-900 font-bold text-lg">SPEAKER / AFFILIATION</th>
                                <th className="px-4 py-2 text-left text-red-800 font-bold text-lg">TIME</th>
                                <th className="px-4 py-2 text-left text-gray-900 font-bold text-lg">DETAILS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-4 py-2 font-semibold align-top">Melisa Yeke<br/><span className="font-normal">Metyx Composites Telateks A.Ş.</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">15:25-15:45</td>
                                <td className="px-4 py-2 align-top">Recycling of PET Foam and Glass Fiber Waste for High-Performance Core Applications</td>
                            </tr>
                            <tr className="border-t">
                                <td className="px-4 py-2 font-semibold align-top">Rüçhan Yıldız<br/><span className="font-normal">Pamukkale University</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">15:45-16:05</td>
                                <td className="px-4 py-2 align-top">Production and Characterization of Epoxy Matrix Composites Reinforced with Waste Glass Particles of Different Particle Sizes</td>
                            </tr>
                            <tr className="border-t">
                                <td className="px-4 py-2 font-semibold align-top">Selin Dursun<br/><span className="font-normal">BUTEKOM Bursa Technology Coordination and R&D Center</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">16:05-16:25</td>
                                <td className="px-4 py-2 align-top">Production and Characterization of Thermoplastic Composites by Hot Press Method Using Recycled Glass Fiber / Polypropylene Tapes</td>
                            </tr>
                            <tr className="border-t">
                                <td className="px-4 py-2 font-semibold align-top">Ferhat Gül<br/><span className="font-normal">Gazi University</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">16:25-16:45</td>
                                <td className="px-4 py-2 align-top">Effect of Heating Rate During Curing on the Properties of Composite Materials</td>
                            </tr>
                            <tr className="border-t">
                                <td className="px-4 py-2 font-semibold align-top">Dilara Yüksel<br/><span className="font-normal">Borsan R&D Center</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">16:45-17:05</td>
                                <td className="px-4 py-2 align-top">Sustainable Innovation in Solar Energy Infrastructure: Development of Boron-Infused Aluminum Solar Cables</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* Sectoral Evaluation Panel and Closing */}
                <div className="mb-8">
                    <div className="bg-yellow-100 rounded-lg px-6 py-4 text-center">
                        <span className="text-xl font-extrabold text-yellow-800">17:05-18:05 &nbsp; SECTORAL EVALUATION PANEL<br/>SEKTÖREL DEĞERLENDİRME PANELİ</span>
                    </div>
                </div>
                <div className="mb-8">
                    <div className="bg-yellow-100 rounded-lg px-6 py-4 text-center">
                        <span className="text-xl font-extrabold text-yellow-800">18:05-18:30 &nbsp; POSTER EVALUATION AND CLOSING<br/>POSTER DEĞERLENDİRME VE KAPANIŞ</span>
                    </div>
                </div>
                {/* Akdeniz Hall / 12B Session Table */}
                <div className="mb-12">
                    <div className="flex items-center justify-between bg-gradient-to-r from-blue-100 to-blue-200 rounded-t-lg px-6 py-4">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-extrabold text-blue-600">AKDENİZ HALL / AKDENİZ SALONU</h3>
                            <p className="text-sm font-semibold text-gray-700 mt-1">Session Chair / Oturum Başkanı: Figen AYNALI</p>
                        </div>
                        <div className="text-right">
                            <div className="flex items-center space-x-2">
                                <span className="text-2xl">🕒</span>
                                <span className="font-semibold text-lg">12B SESSION<br/>12B OTURUM</span>
                            </div>
                        </div>
                    </div>
                    <table className="min-w-full border border-gray-200">
                        <thead>
                            <tr className="bg-white">
                                <th className="px-4 py-2 text-left text-gray-900 font-bold text-lg">SPEAKER / AFFILIATION</th>
                                <th className="px-4 py-2 text-left text-red-800 font-bold text-lg">TIME</th>
                                <th className="px-4 py-2 text-left text-gray-900 font-bold text-lg">DETAILS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-4 py-2 font-semibold align-top">Mustafa Eren Taşkınğul<br/><span className="font-normal">Bursa Technical University</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">15:25-15:45</td>
                                <td className="px-4 py-2 align-top">Development of Silver-Doped PLA Composites via Stereolithography (SLA) Method</td>
                            </tr>
                            <tr className="border-t">
                                <td className="px-4 py-2 font-semibold align-top">Mervenur Gülmarul<br/><span className="font-normal">Bursa Technical University</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">15:45-16:05</td>
                                <td className="px-4 py-2 align-top">Sustainable Functionalized PYA Hydrogel Composites via UV Curing</td>
                            </tr>
                            <tr className="border-t">
                                <td className="px-4 py-2 font-semibold align-top">Göksel Kepenek<br/><span className="font-normal">Pamukkale University</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">16:05-16:25</td>
                                <td className="px-4 py-2 align-top">Application and Characterisation of Chitosan-Gelatin Based Thyme Oil Microspheres with Antibacterial Effect on Titanium Plate</td>
                            </tr>
                            <tr className="border-t">
                                <td className="px-4 py-2 font-semibold align-top">Erol Türker<br/><span className="font-normal">Turkish Chemistry Technology Center</span></td>
                                <td className="px-4 py-2 text-red-800 font-bold align-top">16:25-16:45</td>
                                <td className="px-4 py-2 align-top">A Strategic Step for International Competitiveness in the Plastics, Rubber and Composites Industries</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* Poster Session Abstracts Table */}
                <div className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-center text-gray-900 mb-4">Poster Presentations</h2>
                    <table className="min-w-full border border-gray-200">
                        <thead>
                            <tr className="bg-white">
                                <th className="px-4 py-2 text-left text-gray-900 font-bold text-lg">SPEAKER / AFFILIATION</th>
                                <th className="px-4 py-2 text-left text-gray-900 font-bold text-lg">DETAILS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-4 py-2 font-semibold align-top">Mehmet Erdi Onan<br/><span className="font-normal">Ece Boya Kimya San. Ve Tic. A.Ş</span></td>
                                <td className="px-4 py-2 align-top">Bio-Based Resins</td>
                            </tr>
                            <tr className="border-t-2 border-brown-400">
                                <td className="px-4 py-2 font-semibold align-top">Utku Uslu<br/><span className="font-normal">Karadeniz Technical University</span></td>
                                <td className="px-4 py-2 align-top">Comparative Investigation of The Mechanical Properties of 0/90 Orientation Glass Fiber Reinforced Composite Surface Plates with Different Numbers of Layers Produced by Digital Light Processing (DLP) Method</td>
                            </tr>
                            <tr className="border-t-2 border-brown-400">
                                <td className="px-4 py-2 font-semibold align-top">Merve Temel<br/><span className="font-normal">Efachem Kimya Ürünleri San. Tic. A.Ş</span></td>
                                <td className="px-4 py-2 align-top">Sustainable High-Performance Composites Using Recycled Thermoplastics Reinforced with Fibers and Minerals</td>
                            </tr>
                            <tr className="border-t-2 border-brown-400">
                                <td className="px-4 py-2 font-semibold align-top">Gözde Koçak Mutlu<br/><span className="font-normal">BUTEKOM Bursa Technology Coordination and R&D Center</span></td>
                                <td className="px-4 py-2 align-top">Comparative Evaluation of The Antibacterial Properties of ZnO–Reinforced Virgin and Recycled LDPE Films</td>
                            </tr>
                            <tr className="border-t-2 border-brown-400">
                                <td className="px-4 py-2 font-semibold align-top">Abdullah Hilmi Coşar<br/><span className="font-normal">Gebze Technical University</span></td>
                                <td className="px-4 py-2 align-top">Introduction and Characterization of Fully Biodegradable Biocomposite Plant Grow Plug Alternatives for Soilless Agriculture</td>
                            </tr>
                            <tr className="border-t-2 border-brown-400">
                                <td className="px-4 py-2 font-semibold align-top">Tila Çeçen<br/><span className="font-normal">DYO Paint Factory</span></td>
                                <td className="px-4 py-2 align-top">Synthesis of Vinyl Ester Resin for the Composite Sector</td>
                            </tr>
                            <tr className="border-t-2 border-brown-400">
                                <td className="px-4 py-2 font-semibold align-top">Yağmur Damla Demir<br/><span className="font-normal">Izmir Institute of Technology</span></td>
                                <td className="px-4 py-2 align-top">Development of Fluorinated Gelma Hydrogel for Cancer Treatment</td>
                            </tr>
                            <tr className="border-t-2 border-brown-400">
                                <td className="px-4 py-2 font-semibold align-top">Yasemin Büşra Atmaca<br/><span className="font-normal">Izmir Institute of Technology</span></td>
                                <td className="px-4 py-2 align-top">Development of Multifunctional Gelma-Based Biocomposite Hydrogels Functionalized With EDTA Containing CitPMOF-E Nanoparticles</td>
                            </tr>
                            <tr className="border-t-2 border-brown-400">
                                <td className="px-4 py-2 font-semibold align-top">Umut Doğu Seckin<br/><span className="font-normal">Ege University</span></td>
                                <td className="px-4 py-2 align-top">Production of Biocomposite Hydroxyapatite/Alginate Tissue Scaffold and Investigation of Its Osteogenic Potential</td>
                            </tr>
                            <tr className="border-t-2 border-brown-400">
                                <td className="px-4 py-2 font-semibold align-top">Madi Syrymov<br/><span className="font-normal">Istanbul Arel University</span></td>
                                <td className="px-4 py-2 align-top">pH-Responsive Bioactive Nanomembrane Wound Dressing: A Chitosan–Aloe Vera–HA Based Colorimetric Indicator for Infection Detection</td>
                            </tr>

                            <tr className="border-t-2 border-brown-400">
                                <td className="px-4 py-2 font-semibold align-top">Ceren Cikay<br/><span className="font-normal">Ege University</span></td>
                                <td className="px-4 py-2 align-top">Development and in vitro Characterization of a Plant-Based Nanomaterial–Containing Composite Polymer for Periodontal Tissue</td>
                            </tr>
                            <tr className="border-t-2 border-brown-400">
                                <td className="px-4 py-2 font-semibold align-top">Tuğba Demir Çalışkan<br/><span className="font-normal">Ankara University</span></td>
                                <td className="px-4 py-2 align-top">Superhydrophobic and Oleohobic PGMA/COlemanite Composite Films Functionalized with Perfluoro Polyether Acid</td>
                            </tr>
                            <tr className="border-t-2 border-brown-400">
                                <td className="px-4 py-2 font-semibold align-top">Gürhan Denizli<br/><span className="font-normal">Efachem Kimya Ürünleri San. Tic. A.Ş.</span></td>
                                <td className="px-4 py-2 align-top">A Comparative Study Between Calcium Carbonate and TALC Fillers on the Properties of EPDM Composites</td>
                            </tr>
                            <tr className="border-t-2 border-brown-400">
                                <td className="px-4 py-2 font-semibold align-top">Erdem Tunca<br/><span className="font-normal">Muğla Sıtkı Koçman University</span></td>
                                <td className="px-4 py-2 align-top">Investigation of The Low-Velocity Impact Performance of Electrospun Polyvinyl Alcohol (PVA) Nanofiber Interleaved Carbon Fiber/Epoxy Composites for Aerospace Applications</td>
                            </tr>
                            <tr className="border-t-2 border-brown-400">
                                <td className="px-4 py-2 font-semibold align-top">Ramazan Ercan<br/><span className="font-normal"><i>İpekiş Mensucat Türk A.Ş.</i></span></td>
                                <td className="px-4 py-2 align-top">Production and Optimization of Sustainable Composite Materials from Textile Wastes</td>
                            </tr>
                            <tr className="border-t-2 border-brown-400">
                                <td className="px-4 py-2 font-semibold align-top">Merve Karabıyık<br/><span className="font-normal">Izmir Institute of Technology</span></td>
                                <td className="px-4 py-2 align-top">Enhancing Thermal Resistance of QD Based Sensors Via CVD Polymer Encapsulation</td>
                            </tr>
                            <tr className="border-t-2 border-brown-400">
                                <td className="px-4 py-2 font-semibold align-top">Emre Döşeyici<br/><span className="font-normal">Izmir Katip Çelebi University</span></td>
                                <td className="px-4 py-2 align-top">Characterization of Mechanical Properties of Glass Fiber/Talc Reinforced Hybrid Polypropylene Composites</td>
                            </tr>
                            <tr className="border-t-2 border-brown-400">
                                <td className="px-4 py-2 font-semibold align-top">Duru Ettergen<br/><span className="font-normal">Ege University</span></td>
                                <td className="px-4 py-2 align-top">Development of Modified Natural Zeolite Added PVC Surface Coating</td>
                            </tr>
                            <tr className="border-t-2 border-brown-400">
                                <td className="px-4 py-2 font-semibold align-top">İklime Kayhan<br/><span className="font-normal">Izmir Institute of Technology</span></td>
                                <td className="px-4 py-2 align-top">High-Performance Anti-Corrosive Polymer Coatings on Zinc Surfaces via Chemical Vapor Deposition</td>
                            </tr>
                            <tr className="border-t-2 border-brown-400">
                                <td className="px-4 py-2 font-semibold align-top">Bilgesu Eryılmaz<br/><span className="font-normal">Manisa Celal Bayar University</span></td>
                                <td className="px-4 py-2 align-top">Development and Characterization of an Abelmoschus Esculentus Based Hydrogel for Cartilage Tissue Engineering Applications</td>
                            </tr>
                            <tr className="border-t-2 border-brown-400">
                                <td className="px-4 py-2 font-semibold align-top">Mete Kayhan<br/><span className="font-normal"><i>İstanbul Technical University</i></span></td>
                                <td className="px-4 py-2 align-top">Effect of Recycling Glass Fiber Reinforced Elium Thermoplastic Composite Materials on Mechanical Properties</td>
                            </tr>
                            <tr className="border-t-2 border-brown-400">
                                <td className="px-4 py-2 font-semibold align-top">Senem Tetik<br/><span className="font-normal">Izmir Institute of Technology</span></td>
                                <td className="px-4 py-2 align-top">The Fabrication of Pressure Sensitive Adhesives via Emulsion Polymerization</td>
                            </tr>
                            <tr className="border-t-2 border-brown-400">
                                <td className="px-4 py-2 font-semibold align-top">Ala Mohammed Ahmed Ali Saad<br/><span className="font-normal">Istanbul Arel University</span></td>
                                <td className="px-4 py-2 align-top">Nanocapsulation of Omega-3 Extract Obtained from Flaxseed and its Transdermal Delivery via Microneedles</td>
                            </tr>
                            <tr className="border-t-2 border-brown-400">
                                <td className="px-4 py-2 font-semibold align-top">İlknaz Yeşilyaprak<br/><span className="font-normal">Ege University</span></td>
                                <td className="px-4 py-2 align-top">Microalgae Production for Sustainable, Natural Biobased Composites with Pharmaceutical Potential</td>
                            </tr>
                            <tr className="border-t-2 border-brown-400">
                                <td className="px-4 py-2 font-semibold align-top">Ferhat Yıldırım<br/><span className="font-normal">Çanakkale Onsekiz Mart University</span></td>
                                <td className="px-4 py-2 align-top">Investigation of the Usability of Phase Change Material (PCM) Filled 3D Composites for Passive Thermal Management</td>
                            </tr>
                            <tr className="border-t-2 border-brown-400">
                                <td className="px-4 py-2 font-semibold align-top">Amir Navidfar<br/><span className="font-normal">Bahcesehir University</span></td>
                                <td className="px-4 py-2 align-top">Mechanical Properties of Carbon Nanofiller Reinforced Glass Fiber Composites</td>
                            </tr>
                            <tr className="border-t-2 border-brown-400">
                                <td className="px-4 py-2 font-semibold align-top">Aybüke Polat<br/><span className="font-normal">Ege University</span></td>
                                <td className="px-4 py-2 align-top">Effects of Cobalt-Free Accelerators on the Curing Process and Mechanical Properties of Glass Fiber Reinforced Polyester Composites</td>
                            </tr>
                            <tr className="border-t-2 border-brown-400">
                                <td className="px-4 py-2 font-semibold align-top">Şevval AYHAN<br/><span className="font-normal">Izmir Katip Celebi University</span></td>
                                <td className="px-4 py-2 align-top">Additive Manufacturing with Sustainable Materials: Effect of Tea Waste Additive on Epoxy Composites</td>
                            </tr>
                            <tr className="border-t-2 border-brown-400">
                                <td className="px-4 py-2 font-semibold align-top">Mustafa Alperen Şakar<br/><span className="font-normal">Yıldız Technical University</span></td>
                                <td className="px-4 py-2 align-top">Investigation of Tribological Properties of Epoxy Based Composites Reinforced With SiO₂, GO and h-BN Nanoparticles</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                {/* Download Templates Section */}
                <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                        Download Templates
                    </h3>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/abstract-template.docx"
                            className="inline-block bg-red-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition duration-300"
                            download="abstract-template.docx"
                        >
                            Download Abstract Template (.docx)
                        </a>
                        <a
                            href="/poster_template.pdf"
                            className="inline-block bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
                            download="poster_template.pdf"
                        >
                            Download Poster Template (.pdf)
                        </a>
                    </div>
                </div>
                
            </div>
        </section>
    );
}
