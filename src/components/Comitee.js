import React from 'react'
import SEO from './SEO'
const CommitteeSection = ({ title, members }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
    <h2 className="text-2xl font-bold text-white bg-red-600 p-4">{title}</h2>
    <ul className="p-6 space-y-2">
      {members.map((member, index) => (
        <li key={index} className="text-gray-700">
          <strong>{member.name}</strong>
          {member.title && `: ${member.title}`}
        </li>
      ))}
    </ul>
  </div>
)

export default function Committee() {
  const symposiumSecretariat = [
    { name: "Onur Aşkaroğlu", title: "Uctea Chamber of Chemical Engineers" },
    { name: "Sümeyra Göçemen", title: "Kosse Kompozit Ltd. Şti. / Kosse Composite Marketing" },
    { name: "Hüsnü Onur Ertürk", title: "Izmir Katip Çelebi University" }
  ]


  const executiveCommittee = [
    { name: "İbrahim Köse, Kim.", title: "Kosse Kompozit Ltd. Şti. / Kosse Composite Marketing" },
    { name: "Metin Tanoğlu, Prof. Dr.", title: "Izmir Institute of Technology - Symposium Co-Chair" },
    { name: "Özgür Seydibeyoğlu, Prof. Dr.", title: " Izmir Katip Çelebi University – Symposium Co-Chair" },
    { name: "Sezen Çıngır, Kim. Müh.", title: "Uctea Chamber of Chemical Engineers – Member" },
    { name: "Serhat Karabağ, İnş. Müh.", title: "Turkish Composites Manufacturers Association – Member" },
    { name: "Yahya Kara, Dr.", title: "Luxembourg Institute of Science and Technology – Member" },
    { name: "Hüseyin Dağlar, Kim. Müh.", title: " Uctea Chamber of Chemical Engineers – Member" }
  ]


  const organizingCommittee = [
    { name: "Ahmet Ünal, Prof. Dr.", title: "Yildiz Technical University" },
    { name: "Ali İhsan Otabatmaz", title: "Serbest Danışman" },
    { name: "Alper Kalaycı", title: "ENSİA Yönetim Kurulu Başkanı" },
    { name: "Alperen Doğru, Dr.", title: "Ege University" },
    { name: "Aslı Ilgaz", title: "Metyx Composites-Telateks A.Ş." },
    { name: "Ayhan Ezdeşir", title: "Petkim Petrokimya Holding A.Ş." },
    { name: "Aylin Ziylan, Prof. Dr.", title: "Dokuz Eylül University" },
    { name: "Ayşen Ömer", title: "Herkim Polimer Kimya San. ve Tic. A.Ş," },
    { name: "Bahattin Şendoğan", title: "Metyx Composites-Telateks A.Ş." },
    { name: "Beril Darcan", title: "Boytek Reçine Boya ve Kimya Sanayi Ticaret A.Ş" },
    { name: "Beyhan Erdoğan", title: "Dyo Boya Fabrikaları Sanati ve Ticaret A.Ş." },
    { name: "Bilge Bıçakçıoğlu", title: "Fibrosan CTP San. ve Tic. A.Ş." },
    { name: "Burak Darcan", title: "Tila Kompozit Temsilcilik İç ve Dış Ticaret. Ltd. Şti." },
    { name: "Burak Özhaseki", title: "Beşler Tekstil Sanayi ve Ticaret A.Ş" },
    { name: "Cem Aynalı", title: "Uctea Chamber of Chemical Engineers" },
    { name: "Cem Gürkan", title: "Poliya Polyester Sanayi ve Ticaret Ltd. Şti" },
    { name: "Cihangir Cebeci", title: "Fiberr Fiber Reinforced Resins A.Ş" },
    { name: "Devrim Özaydın", title: "Kordsa Teknik Tekstil A.Ş" },
    { name: "Erkan Ersöz", title: "Ege University" },
    { name: "Erkan Günindi", title: "Olgun Çelik Sanayi ve Ticaret A.Ş." },
    { name: "Goksenin Comlekci", title: "Türkiye Şişe ve Cam Fabrikaları A.Ş." },
    { name: "İbrahim Akyürek", title: "Uctea Chamber of Chemical Engineers" },
    { name: "Kadir Uçar", title: " Ege Savunma Sanayi Havacılık Ve Uzay Kümelenmesi Derneği" },
    { name: "Levent Arslan", title: "KOSGEB İzmir İl Müdürlüğü" },
    { name: "Levent Aydın, Doç. Dr.", title: "İzmir Katip Çelebi University" },
    { name: "M. Cengiz Altan, Prof. Dr.", title: "University of Oklahoma" },
    { name: "Mehmet Güneş", title: "Tübitak Marmara Araştırma Merkezi" },
    { name: "Mehmet Karahan, Prof. Dr.", title: "Bursa Uludağ University" },
    { name: "Mehmet Sarıkanat, Doç. Dr.", title: "Ege University" },
    { name: "Mertcan Aslıtürk", title: "Polkima Polyester Kimya ve Makina San. ve Tic. A.Ş" },
    { name: "Mustafa Demircioğlu, Prof. Dr.", title: "Ege University" },
    { name: "Nurseli Uyanık, Prof. Dr.", title: "Istanbul Technical University" },
    { name: "Özgür Sönmez", title: "Literatür Kimya Elektrik İnş.Taah.Turz. ve Oto İth.İhr.San.Tic.Ltd.Şti." },
    { name: "Semih Yiğit", title: "Ostim Savunma ve Havacılık Kümelenmesi" },
    { name: "Sevim Özgül, Dr.", title: "Bahçeşehir University" },
    { name: "Şekib Avdagiç", title: "İstanbul Ticaret Odası / Istanbul Chamber of Commerce" },
    { name: "Ummuhan Topal", title: "DowAksa İleri Kompozit Malz. San.Ltd.Şti" },
    { name: "Ülkü Yılmazer, Prof. Dr.", title: "Middle East Technical University" },
    { name: "Volkan Eskizeybek", title: "18 Mart University" },
    { name: "Yalçın Yılmazkaya", title: "Havacılık ve Uzay Kümelenmesi Derneği" },
    { name: "Zeynep Yılmaz Serçinoğlu", title: "Marmara University" }
  ];

  const HonorBoard = [
    { "name": "Gürel Nişli, Prof. Dr.", "title": "Ege University,  Uctea Chamber of Chemical Engineers" },
    { "name": "İsmail Darcan", "title": "Boytek Reçine Boya ve Kimya Sanayi Ticaret A.Ş" },
    { "name": "Hasan Ömer", "title": "Herkim Polimer Kimya San. ve Tic. A.Ş" },
    { "name": "Fikret Tacar", "title": "Tacar Boat" },
    { "name": "Fersan Kınayiğit", "title": "Cam. Elyaf San. A.Ş" }
  ]

  const scientificAdvisoryCommittee = [
    { "name": "Ali Gizli, Dr.", "title": "Dyo Boya Fabrikaları Sanati ve Ticaret A.Ş." },
    { "name": "Alperen Doğru, Dr.", "title": "Ege University" },
    { "name": "Aref Cevahir, Dr.", "title": "Beşler Tekstil Sanayi ve Ticaret A.Ş" },
    { "name": "Barış Çağlar", "title": "Delft Technical University" },
    { "name": "Bedriye Üçpınar Durmaz, Dr.", "title": "Ege University" },
    { "name": "Burcu Saner Okan, Doç. Dr.", "title": "Sabancı University" },
    { "name": "Cagri Ayrancı, Prof. Dr.", "title": "University of Alberta" },
    { "name": "Cem Gök, Prof. Dr.", "title": "Bakırçay University" },
    { "name": "Cemal Basaran, Prof.", "title": "University at Buffalo" },
    { "name": "Cevdet Kaynak, Prof. Dr.", "title": "Middle East Technical University" },
    { "name": "Çağrı Ayrancı", "title": "University of Alberta" },
    { "name": "Devrim Balköse, Prof. Dr.", "title": "İzmir Institute of Technology" },
    { "name": "Dipa Roy , Dr.", "title": "The University of Edinburgh" },
    { "name": "Elif Alyamaç Seydibeyoğlu, Doç. Dr.", "title": "Ege University" },
    { "name": "Engin Aktaş, Prof. Dr.", "title": "Izmir Institute of Technology" }, //Prof. Dr. Engin Aktas, Izmir Institute of Technology
    { "name": "Erdem Yücel", "title": "Fibrosan CTP San. ve Tic. A.Ş." },
    { "name": "Ersan Kalafatoğlu, Prof. Dr.", "title": "Marmara University" },
    { "name": "Ferrie Van Hattum , Prof.Dr.", "title": "Saxion University of Applied Sciences" },
    { "name": "Figen Aynalı, Dr.", "title": "Uctea Chamber of Chemical Engineers" },
    { "name": "Funda Tıhmınlıoğlu,Prof. Dr.", "title": "İzmir Institute of Technology" },
    { "name": "Hasan Ömer", "title": "Herkim Polimer Kimya San. ve Tic. A.Ş" },
    { "name": "He Haijun, Dr.", "title": "College of Textile Science and Engineering, Jiangnan University" },
    { "name": "Holger Seidlitz, Prof. Dr.", "title": "Brandenburg University of Technology Cottbus" },
    { "name": "Hülya Cebeci, Doç. Dr.", "title": "Istanbul Technical University" },
    { "name": "İbrahim Köse", "title": "Kosse Composite Marketing" },
    { "name": "İsmail Darcan", "title": "Boytek Reçine Boya ve Kimya Sanayi Ticaret A.Ş" },
    { "name": "Jozsef Gabor Kovacs, Assoc. Prof.", "title": "The Budapest University of Technology and Economics" },
    { "name": "Kristiina Oksman", "title": "Lulea Technical University" },
    { "name": "M. Cengiz Altan, Prof.", "title": "The University of Oklahoma" },
    { "name": "Maya John , Dr.", "title": "Council for Scientific Research (CSIR)" },
    { "name": "Mehmet Sarıkanat, Doç. Dr.", "title": "Ege University" },
    { "name": "Mehmet Yıldız, Prof. Dr.", "title": "Sabancı University" },
    { "name": "Metin Tanoğlu, Prof. Dr.", "title": "İzmir Institute of Technology" },
    { "name": "Mustafa M. Demir, Prof.Dr.", "title": "İzmir Institute of Technology" },
    { "name": "Nikhil Verghese, Dr.", "title": "Corporate Fellow at Sabic" },
    { "name": "Nilay Gizli, Doç. Dr.", "title": "Ege University" },
    { "name": "Özgür Seydibeyoğlu, Prof. Dr.", "title": "İzmir Katip Çelebi University" },
    { "name": "Rasim İpek, Prof. Dr.", "title": "Ege University" },
    { "name": "Sadık Aslıtürk", "title": "Polkima Polyester Kimya ve Makina San. ve Tic. A.Ş" },
    { "name": "Salim Belouettar, Dr.", "title": "Luxembourg Institute of Science and Technology" },
    { "name": "Selim Küsefoğlu, Prof. Dr.", "title": "Boğaziçi University" },
    { "name": "Serkan Dehneliler", "title": "TUSAŞ" },
    { "name": "Sevim Özgül, Dr.", "title": "Bahçeşehir University" },
    { "name": "Steve Nutt", "title": "University of Southern California" },
    { "name": "Tülay Baldemirci, Prof. Dr.", "title": "İstanbul University" },
    { "name": "Ülkü Yılmazer, Prof. Dr.", "title": "Middle East Technical University" },
    { "name": "Ümit Halis ERDOĞAN, Prof.Dr.", "title": "Dokuz Eylül University" },
    { "name": "Veli DENİZ, Prof.Dr.", "title": "Uctea Chamber of Chemical Engineers" },
    { "name": "Volkan Acar, Dr. Öğt. Üyesi", "title": "Atatürk University" },
    { "name": "Yusuf Menceloğlu, Prof. Dr.", "title": "Sabancı University" }
  ];

  return (
    <>
      <SEO
        title="Committees"
        description="Meet the organizing committee members of the 6th International Polymeric Composites Symposium. Learn about the dedicated team behind the symposium."
        keywords="symposium committees, conference organizing team, composite materials symposium committee, İzmir event committee"
      />
      <div className="bg-gray-100 min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Committees</h1>
          <CommitteeSection title="Executive Committee" members={executiveCommittee} />
          <CommitteeSection title="Symposium Secretariat" members={symposiumSecretariat} />
          <CommitteeSection title="Organizing Committee" members={organizingCommittee} />
          <CommitteeSection title="Scientific Advisory Committee" members={scientificAdvisoryCommittee} />
          <CommitteeSection title="Honorary Committee" members={HonorBoard} />
        </div>
      </div>
    </>
  )
}

