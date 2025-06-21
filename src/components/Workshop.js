import React from 'react'

export default function Workshop() {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">Workshops</h1>
        
        {/* Subtitle */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            FUTURE IN COMPOSITE MATERIALS: SUSTAINABLE, HIGH-PERFORMANCE, DIGITALLY-DRİVEN APPLICATIONS
          </h2>
          
          
          {/* Description */}
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 leading-relaxed">
              The objective of the workshop is to provide participants with fundamental knowledge and hands-on experience in polymer composites and related manufacturing technologies. Through current topics such as 3D scanning, additive manufacturing, structural strengthening, mold repair, infusion, and RTM processes, the workshop aims to enhance the technical competence of participants. In this context, the workshops also aim to strengthen academia-industry collaboration, support knowledge transfer, and facilitate participants' adaptation to sectoral innovations.
            </p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            {/* Download Link */}
            <div className="mb-8 text-center">
              <a
                href="/workshopdoc.docx"
                className="inline-block bg-red-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition duration-300"
                download="workshopdoc.docx"
              >
                Download Application Form of Practical Workshop (.docx)
              </a>
            </div>

            {/* Day 1 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">PRACTICAL WORKSHOP SCHEDULE</h2>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">2 OCTOBER 2025 THURSDAY</h3>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">COORDINATORS</h4>
                <p className="text-gray-700">Serhat KARABAĞ (Enercon Aero Wind Industry Inc.)</p>
                <p className="text-gray-700">İbrahim KÖSE (Kosse Composite Marketing and Engineering Ltd.)</p>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">SUBJECT: Next-Generation Digital Technologies in Composite Manufacturing</h4>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-semibold">13:30-13:50</p>
                      <p>Opening - Hasan ÖMER (Herkim Polymer Chemistry Industry and Trade Ltd.)</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-semibold">13:50-14:50</p>
                      <p>3D Scanning of Manufactured Parts and Comparison with CAD Models</p>
                      <p className="mt-2">Coordinator - Dr. Alperen DOĞRU (Ege University)</p>
                      <p>Abdullah ATA (Hexagon)</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-semibold">14:50-15:05</p>
                      <p>Coffee Break</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-semibold">15:05-16:05</p>
                      <p>Additive Manufacturing of Composite Structures</p>
                      <p className="mt-2">Coordinator - Dr. Alperen DOĞRU (Ege University)</p>
                      <p>Alper TOKKUŞ (Başaran Technology Industry and Trade Ltd.)</p>
                      <p>Davut BAŞARAN (Başaran Technology Industry and Trade Ltd.)</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">SUBJECT: Strengthening of Structures with Polymer Composites</h4>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-semibold">16:05-17:40</p>
                    <p>Strengthening of Structures with Polymer Composites</p>
                    <p className="mt-2">Coordinator – Dr. Volkan ACAR (Atatürk University)</p>
                    <p>Prof. Dr. Ferit ÇAKIR (Gebze Technical University)</p>
                    <p>Assoc. Prof. Dr. M. Selim ÖKTEN (Mimar Sinan Fine Arts University)</p>
                    <p>Yalın AYDIN (Spinteks Textile Construction Industry and Trade Inc.)</p>
                    <p>Koray AYDIN (Tetraglobe Building Materials Marketing Inc.)</p>
                    <p>Tolga KUTLUĞ (Omnis Composite Ltd.)</p>
                    <p>Yavuzhan Hezer (Omnis Composite Ltd.)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Day 2 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">PRACTICAL WORKSHOP PROGRAMME</h2>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">3 OCTOBER 2025 - FRIDAY</h3>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">COORDINATORS</h4>
                <p className="text-gray-700">Serhat KARABAĞ (Enercon Aero Wind Industry Inc.)</p>
                <p className="text-gray-700">İbrahim KÖSE (Kosse Composite Marketing and Engineering Ltd.)</p>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">SUBJECT: Mold Repair and Maintenance</h4>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-semibold">09:00-09:20</p>
                      <p>Opening - Hasan ÖMER (Herkim Polymer Chemistry Industry and Trade Ltd.)</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-semibold">09:20-10:50</p>
                      <p>Mold Repair and Maintenance</p>
                      <p className="mt-2">Coordinator - Hasan ÖMER (Herkim Polymer Chemistry Industry and Trade Ltd.)</p>
                      <p>İbrahim KÖSE (Kosse Composite Marketing and Engineering Ltd.)</p>
                      <p>Ali KARAMAN (Herkim Polymer Chemistry Industry and Trade Ltd.)</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-semibold">10:50-11:05</p>
                      <p>Coffee Break</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">SUBJECT: Technology of Polymeric Composite Materials Production</h4>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-semibold">11:05-12:35</p>
                      <p>Composite Production Using RTM and Resin Infusion Technologies</p>
                      <p className="mt-2">Coordinator - Sadık ASLITÜRK (Polkima Polyester Chemistry and Machinery Industry and Trade Inc.)</p>
                      <p>Mertcan ASLITÜRK (Polkima Polyester Chemistry and Machinery Industry and Trade Inc.)</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-semibold">12:35–13:35</p>
                      <p>Lunch Break</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-semibold">13:35-15:05</p>
                      <p>SMC/BMC/CF-SMC Composite Manufacturing</p>
                      <p className="mt-2">Coordinator – Özgür SÖNMEZ (Literatur Chemistry Electrical Construction Contracting Tourism and Auto Import Export Industry and Trade Ltd.)</p>
                      <p>Özlem URAL (Literatur Chemistry Electrical Construction Contracting Tourism and Auto Import Export Industry and Trade Ltd.)</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-semibold">15:05-16:35</p>
                      <p>Silicone Bagging Process</p>
                      <p className="mt-2">Coordinator – Burak DARCAN (Tila Composite Representation Domestic and Foreign Trade Ltd.)</p>
                      <p>İbrahim KÖSE (Kosse Composite Marketing and Engineering Ltd.)</p>
                      <p>Prof.Dr. Abdullah Tuğrul SEYHAN (Eskişehir Technical University)</p>
                      <p>Murat KAYA (Northstar Inc.)</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-semibold">16:35-16:50</p>
                      <p>Coffee Break</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-semibold">16:50–18:00</p>
                      <p>Workshop Panel</p>
                      <div className="mt-2 space-y-1">
                        <p>İbrahim KÖSE (Kosse Composite Marketing and Engineering Ltd.)</p>
                        <p>Serhat KARABAĞ (Enercon Aero Wind Industry Inc.)</p>
                        <p>Hasan ÖMER (Herkim Polymer Chemistry Industry and Trade Ltd.)</p>
                        <p>Burak DARCAN (Tila Composite Representation Domestic and Foreign Trade Ltd.)</p>
                        <p>Özgür SÖNMEZ (Literatur Chemistry Electrical Construction Contracting Tourism and Auto Import Export Industry and Trade Ltd.)</p>
                        <p>Sadık ASLITÜRK (Polkima Polyester Chemistry and Machinery Industry and Trade Inc.)</p>
                        <p>Dr. Volkan ACAR (Atatürk University)</p>
                        <p>Dr. Alperen DOĞRU (Ege University)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
