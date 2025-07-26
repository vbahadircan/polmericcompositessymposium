import React from 'react'

export default function Workshop() {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">Workshops</h1>
        
        {/* Subtitle */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            FUTURE IN COMPOSITE MATERIALS: SUSTAINABLE, HIGH-<br/>
            PERFORMANCE, DIGITALLY-DRİVEN APPLICATIONS
          </h2>
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            KOMPOZİT MALZEMELERDE GELECEK: SÜRDÜRÜLEBİLİR,<br/>
            YÜKSEK PERFORMANSLI<br/>
            VE DİJİTAL ODAKLI UYGULAMALAR
          </h3>
          
          {/* Description */}
          <div className="max-w-4xl mx-auto space-y-4">
            <p className="text-gray-700 leading-relaxed">
              The objective of the workshop is to provide participants with fundamental knowledge and
              hands-on experience in polymer composites and related manufacturing technologies. Through
              current topics such as 3D scanning, additive manufacturing, structural strengthening, mold repair,
              infusion, and RTM processes, the workshop aims to enhance the technical competence of
              participants. In this context, the workshops also aim to strengthen academia-industry collaboration,
              support knowledge transfer, and facilitate participants' adaptation to sectoral innovations.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Çalıştayın amacı; katılımcılara polimer kompozitler ve ilgili üretim teknolojileri konusunda
              temel bilgi ve uygulama deneyimi kazandırmayı amaçlamaktadır. 3D tarama, eklemeli imalat,
              yapısal güçlendirme, kalıp onarımı, infüzyon ve RTM yöntemleri gibi güncel konular üzerinden
              katılımcıların teknik donanımı artırılması hedeflenmektedir. Bu kapsamda çalıştaylar, akademi-
              sanayi iş birliğini güçlendirmeyi, bilgi transferini desteklemeyi ve katılımcıların sektörel yeniliklere
              adapte olmasını amaçlamaktadır.
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">PRACTICAL WORKSHOP SCHEDULE / UYGULAMALI ÇALIŞTAY PROGRAMI</h2>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">2 OCTOBER 2025 THURSDAY - 2 EKİM 2025 PERŞEMBE</h3>

              <div className="mb-8 text-left">
                <p className="text-lg text-gray-800 font-semibold">
                  Single-day participation fee for the workshop: <span className="text-red-600 font-bold">100€</span>
                </p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">COORDINATORS / KOORDİNATÖRLER</h4>
                <p className="text-gray-700">Serhat KARABAĞ (Enercon Aero Rüzgar Endüstrisi A.Ş.)</p>
                <p className="text-gray-700">İbrahim KÖSE (Kosse Kompozit Pazarlama ve Mühendislik Ltd. Şti.)</p>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">SUBJECT/KONU: Next-Generation Digital Technologies in Composite Manufacturing / Kompozit Üretiminde Yeni Nesil Dijital Teknolojiler</h4>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-semibold">13:30-13:50</p>
                      <p>Opening / Açılış - Hasan ÖMER (Herkim Polimer Kimya San. Tic. Ltd. Şti.)</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-semibold">13:50-14:50</p>
                      <p>3D Scanning of Manufactured Parts and Comparison with CAD Models / 3D Tarayıcılar ile Üretilmiş Parçaların Taranması ve Bunların CAD Verileri ile Karşılaştırmasının Yapılması</p>
                      <p className="mt-2">Koordinatör - Dr. Alperen DOĞRU (Ege Üniversitesi)</p>
                      <p>Abdullah ATA (Hexagon)</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-semibold">14:50-15:05</p>
                      <p>Coffee Break / Kahve Arası</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-semibold">15:05-16:05</p>
                      <p>Additive Manufacturing of Composite Structures / Kompozit Yapıların Eklemeli İmalatı</p>
                      <p className="mt-2">Koordinatör - Dr. Alperen DOĞRU (Ege Üniversitesi)</p>
                      <p>Alper TOKKUŞ (Başaran Teknoloji San. Tic. Ltd. Şti.)</p>
                      <p>Oktay TURAN (Omniform A.Ş.)</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">SUBJECT/KONU: Strengthening of Structures with Polymer Composites / Yapıların Polimer Kompozitler ile Güçlendirilmesi</h4>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-semibold">16:05-17:40</p>
                    <p>Strengthening of Structures with Polymer Composites / Yapıların Polimer Kompozitler ile Güçlendirilmesi</p>
                    <p className="mt-2">Koordinatör – Dr. Volkan ACAR (Atatürk Üniversitesi)</p>
                    <p>Prof. Dr. Ferit ÇAKIR (Gebze Teknik Üniversitesi)</p>
                    <p>Doç. Dr. M. Selim ÖKTEN (Mimar Sinan Güzel Sanatlar Üniversitesi)</p>
                    <p>Yalın AYDIN (Spinteks Tekstil İnşaat San ve Tic A.Ş.)</p>
                    <p>Koray AYDIN (Tetraglobe Yapı Malzemeleri Pazarlama A.Ş.)</p>
                    <p>Tolga KUTLUĞ (Omnis Kompozit Ltd.)</p>
                    <p>Yavuzhan Hezer (Omnis Kompozit Ltd.)</p>
                  </div>
                </div>
              </div>
            </div>

            

            {/* Day 2 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">PRACTICAL WORKSHOP PROGRAMME / UYGULAMALI ÇALIŞTAY PROGRAMI</h2>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">3 OCTOBER 2025 - FRIDAY / 3 EKİM 2025 - CUMA</h3>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">COORDINATORS / KOORDİNATÖRLER</h4>
                <p className="text-gray-700">Serhat KARABAĞ (Enercon Aero Rüzgar Endüstrisi A.Ş.)</p>
                <p className="text-gray-700">İbrahim KÖSE (Kosse Kompozit Pazarlama ve Mühendislik Ltd. Şti.)</p>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">SUBJECT/KONU: Mold Repair and Maintenance / Kalıpların Tamiri ve Korunması</h4>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-semibold">09:00-09:20</p>
                      <p>Opening / Açılış - Hasan ÖMER (Herkim Polimer Kimya San. Tic. Ltd. Şti.)</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-semibold">09:20-10:50</p>
                      <p>Mold Repair and Maintenance / Kalıpların Tamiri ve Korunması</p>
                      <p className="mt-2">Koordinatör - Hasan ÖMER (Herkim Polimer Kimya San. Tic. Ltd. Şti.)</p>
                      <p>İbrahim KÖSE (Kosse Kompozit Pazarlama ve Mühendislik Ltd. Şti.)</p>
                      <p>Ali KARAMAN (Herkim Polimer Kimya San. Tic. Ltd. Şti.)</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-semibold">10:50-11:05</p>
                      <p>Coffee Break / Kahve Arası</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">SUBJECT/KONU: Technology of Polymeric Composite Materials Production / Polimerik Kompozit Malzemelerden Üretim Teknolojisi</h4>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-semibold">11:05-12:35</p>
                      <p>Composite Production Using RTM and Resin Infusion Technologies / RTM ve İnfüzyon Teknolojileri ile Kompozit Üretimi</p>
                      <p className="mt-2">Koordinatör - Sadık ASLITÜRK (Polkima Polyester Kimya Ve Makina San. Tic.A.Ş)</p>
                      <p>Mertcan ASLITÜRK (Polkima Polyester Kimya Ve Makina San. Tic.A.Ş)</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-semibold">12:35–13:35</p>
                      <p>Lunch Break / Öğle Yemeği</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-semibold">13:35-15:05</p>
                      <p>SMC/BMC/CF-SMC Composite Manufacturing / SMC/BMC/CF-SMC Kompozit üretimi</p>
                      <p className="mt-2">Koordinatör – Özgür SÖNMEZ (Literatur Kimya Elek. Ins. Taah. Turz. Ve Oto Ith. Ihr. San. Tic. Ltd. Şti.)</p>
                      <p>Özlem URAL (Literatur Kimya Elek. Ins. Taah. Turz. Ve Oto Ith. Ihr. San. Tic. Ltd. Şti.)</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-semibold">15:05-16:35</p>
                      <p>Silicone Bagging Process / Silikon Kalıp ile Reçine Transferi</p>
                      <p className="mt-2">Koordinatör – Burak DARCAN (Tila Composite Representation Domestic and Foreign Trade. Ltd. Şti.)</p>
                      <p>İbrahim KÖSE (Kosse Kompozit Pazarlama ve Mühendislik Ltd. Şti.)</p>
                      <p>Prof.Dr. Abdullah Tuğrul SEYHAN (Eskişehir Teknik Üniversitesi)</p>
                      <p>Murat KAYA (Northstar A.Ş.)</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-semibold">16:35-16:50</p>
                      <p>Coffee Break / Kahve Arası</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-semibold">16:50–18:00</p>
                      <p>Workshop panel / Çalıştay Paneli</p>
                      <div className="mt-2 space-y-1">
                        <p>Hasan ÖMER (Herkim Polimer Kimya San. Tic. Ltd. Şti.)</p>
                        <p>İbrahim KÖSE (Kosse Kompozit Pazarlama ve Mühendislik Ltd. Şti.)</p>
                        <p>Serhat KARABAĞ (Enercon Aero Rüzgar Endüstrisi A.Ş.)</p>
                        <p>Burak DARCAN (Tila Composite Representation Domestic and Foreign Trade. Ltd. Şti.)</p>
                        <p>Özgür SÖNMEZ (Literatur Kimya Elek. Ins. Taah. Turz. Ve Oto Ith. Ihr. San. Tic. Ltd. Şti.)</p>
                        <p>Sadık ASLITÜRK (Polkima Polyester Kimya Ve Makina San. Tic.A.Ş)</p>
                        <p>Dr. Volkan ACAR (Atatürk Üniversitesi)</p>
                        <p>Dr. Alperen DOĞRU (Ege Üniversitesi)</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Participation Information */}
                <div className="mt-8 text-left space-y-4">
                  <p className="text-gray-800 leading-relaxed text-base">
                    Participation in the workshop is limited to <strong>75 participants</strong>. The final application deadline is <strong>August 30, 2025</strong>, while the early registration deadline is <strong>July 30, 2025</strong>. The participation fee is <strong>€200</strong>, with a <strong>20% discount</strong> available for early registrants. Applications will be accepted on a <strong>first-come, first-served</strong> basis.
                  </p>
                  <p className="text-gray-800 leading-relaxed text-base">
                    Çalıştaya katılım kontenjanı <strong>75 kişi</strong> ile sınırlıdır. Son başvuru tarihi <strong>30 Ağustos 2025</strong>, erken kayıt için ise <strong>30 Temmuz 2025</strong>'tir. Katılım ücreti <strong>200 €</strong> olup, erken kayıt yapan katılımcılara <strong>%20 indirim</strong> uygulanacaktır. Katılımcı seçiminde <strong>başvuru sırası</strong> esas alınacaktır.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
