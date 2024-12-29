import React from 'react'

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
    { name: "Onur Aşkaroğlu", title: "Tmmob Kimya Mühendisleri Odası / Uctea Chamber of Chemical Engineers" },
    { name: "Sümeyra Göçemen", title: "Kosse Kompozit Ltd. Şti. / Kosse Composite Marketing" },
    { name: "Hüsnü Onur Ertürk", title: "İzmir Katip Çelebi Üniversitesi / Izmir Katip Çelebi University" }
  ]
  

  const executiveCommittee = [
    { name: "İbrahim Köse, Kim.", title: "Kosse Kompozit Ltd. Şti. / Kosse Composite Marketing – Genel Koordinator - General Coordinator" },
    { name: "Metin Tanoğlu, Prof. Dr.", title: "İzmir Yüksek Teknoloji Enstitüsü / İzmir Institute of Technology – Sempozyum Eşbaşkanı – Symposium Co-Chair" },
    { name: "Özgür Seydibeyoğlu, Prof. Dr.", title: "İzmir Kâtip Çelebi Üniversitesi / İzmir Katip Çelebi University – Sempozyum Eşbaşkanı - Symposium Co-Chair" },
    { name: "Sezen Çıngır, Kim. Müh.", title: "Tmmob Kimya Mühendisleri Odası / Uctea Chamber of Chemical Engineers – Yürütme Kurulu Üyesi" },
    { name: "Serhat Karabağ, İnş. Müh.", title: "Komposit Sanayicileri Derneği / Turkish Composites Manufacturers Association – Yürütme Kurulu Üyesi - Member" },
    { name: "Yahya Kara, Dr.", title: "Luxemburg Teknoloji Enstitüsü / Luxembourg Institute of Technology – Yürütme Kurulu Üyesi - Member" },
    { name: "Hüseyin Dağlar, Kim. Müh.", title: "Tmmob Kimya Mühendisleri Odası / Uctea Chamber of Chemical Engineers – Yürütme Kurulu Üyesi - Member" }
  ]
  

  const organizingCommittee = [
    { name: "Ahmet Ünal, Prof. Dr.", title: "Yıldız Teknik Üniversitesi" },
    { name: "Ali İhsan Otabatmaz", title: "C.E.S İleri Kompozit Ve Savunma Teknoloji San. Ve Tic. A.Ş." },
    { name: "Alper Kalaycı", title: "ENSİA Yönetim Kurulu Başkanı" },
    { name: "Alperen Doğru, Dr.", title: "Ege Üniversitesi" },
    { name: "Ayhan Ezdeşir", title: "Petkim Petrokimya Holding A.Ş." },
    { name: "Aylin Ziylan, Prof. Dr.", title: "Dokuz Eylül Üniversitesi" },
    { name: "Ayşen Ömer", title: "Herkim Polimer Kimya San. ve Tic. A.Ş," },
    { name: "Bahattin Şendoğan", title: "Metyx Composites-Telateks A.Ş." },
    { name: "Beril Darcan", title: "Boytek Reçine Boya ve Kimya Sanayi Ticaret A.Ş" },
    { name: "Beyhan Erdoğan", title: "Dyo Boya Fabrikaları Sanati ve Ticaret A.Ş." },
    { name: "Bilge Bıçakçıoğlu", title: "Fibrosan CTP San. ve Tic. A.Ş." },
    { name: "Burak Darcan", title: "Tila Kompozit Temsilcilik İç ve Dış Ticaret. Ltd. Şti." },
    { name: "Burak Özhaseki", title: "Beşler Tekstil Sanayi ve Ticaret A.Ş" },
    { name: "Cem Aynalı", title: "Kimya Mühendisleri Odası" },
    { name: "Cem Gürkan", title: "Poliya Polyester Sanayi ve Ticaret Ltd. Şti" },
    { name: "Cihangir Cebeci", title: "Fiberr Fiber Reinforced Resins A.Ş" },
    { name: "Devrim Özaydın", title: "KordSA" },
    { name: "Erkan Ersöz", title: "Ege Üniversitesi" },
    { name: "Erkan Günindi", title: "Olgun Çelik Sanayi ve Ticaret A.Ş." },
    { name: "Goksenin Comlekci", title: "Türkiye Şişe ve Cam Fabrikaları A.Ş." },
    { name: "İbrahim Akyürek", title: "Kimya Mühendisleri Odası" },
    { name: "Kadir Uçar", title: "Esas" },
    { name: "Levent Arslan", title: "KOSGEB İzmir İl Müdürlüğü" },
    { name: "Levent Aydın, Doç. Dr.", title: "İzmir Katip Çelebi Üniversitesi" },
    { name: "M. Cengiz Altan, Prof. Dr.", title: "University of Oklahoma - Amerika Birleşik Devletleri" },
    { name: "Mehmet Güneş", title: "Tübitak Marmara Araştırma Merkezi" },
    { name: "Mehmet Karahan, Prof. Dr.", title: "Bursa Uludağ Üniversitesi" },
    { name: "Mehmet Sarıkanat, Doç. Dr.", title: "Ege Üniversitesi" },
    { name: "Mertcan Aslıtürk", title: "Polkima Polyester Kimya ve Makina San. ve Tic. A.Ş" },
    { name: "Mustafa Demircioğlu, Prof. Dr.", title: "" },
    { name: "Nurseli Uyanık, Prof. Dr.", title: "" },
    { name: "Özgür Sönmez", title: "Literatür Kimya Elektrik İnş.Taah.Turz. ve Oto İth.İhr.San.Tic.Ltd.Şti." },
    { name: "Semih Yiğit", title: "Ostim Savunma ve Havacılık Kümelenmesi" },
    { name: "Sevim Özgül, Dr.", title: "Bahçeşehir Üniversitesi" },
    { name: "Şekib Avdagiç", title: "İstanbul Ticaret Odası / Istanbul Chamber of Commerce" },
    { name: "Ummuhan Topal", title: "DowAksa İleri Kompozit Malz. San.Ltd.Şti" },
    { name: "Ülkü Yılmazer, Prof. Dr.", title: "Orta Doğu Teknik Üniversitesi" },
    { name: "Volkan Eskizeybek", title: "18 Mart Üniversitesi" },
    { name: "Yalçın Yılmazkaya", title: "Havacılık ve Uzay Kümelenmesi Derneği" },
    { name: "Zeynep Yılmaz Serçinoğlu", title: "Marmara Üniversitesi" }
  ];

  const HonorBoard = [
    { name: "Gürel Nişli, Prof. Dr.", title: "" },
    { name: "İsmail Darcan", title: "Boytek Reçine Boya ve Kimya Sanayi Ticaret A.Ş" },
    { name: "Hasan Ömer", title: "Herkim Polimer Kimya San. ve Tic. A.Ş," },
    { name: "Fikret Tacer", title: "" },
    { name: "Fersan Kınayiğit", title: "" }
  ]

const scientificAdvisoryCommittee = [
  { name: "Ali Gizli, Dr.", title: "Dyo Boya Fabrikaları Sanati ve Ticaret A.Ş." },
  { name: "Alperen Doğru, Dr.", title: "Ege Üniversitesi" },
  { name: "Aref Cevahir, Dr.", title: "" },
  { name: "Barış Çağlar", title: "Delft Teknik Üniversitesi - Hollanda" },
  { name: "Bedriye Üçpınar Durmaz, Dr.", title: "Ege Üniversitesi /" },
  { name: "Burcu Saner Okan, Doç. Dr.", title: "Sabancı Üniversitesi" },
  { name: "Cagri Ayrancı, Prof. Dr.", title: "University of Alberta - Kanada" },
  { name: "Cem Gök, Prof. Dr.", title: "Bakırçay Üniversitesi" },
  { name: "Cemal Basaran, Prof.", title: "University at Buffalo - Amerika Birleşik Devletleri" },
  { name: "Cevdet Kaynak, Prof. Dr.", title: "Orta Doğu Teknik Üniversitesi" },
  { name: "Çağrı Ayrancı", title: "University of Alberta - Kanada" },
  { name: "Devrim Balköse, Prof. Dr.", title: "" },
  { name: "Dipa Roy, Dr.", title: "The University of Edinburgh - İskoçya" },
  { name: "Elif Alyamaç Seydibeyoğlu, Doç. Dr.", title: "Ege Üniversitesi" },
  { name: "Erdem Yücel", title: "Fibrosan CTP San. ve Tic. A.Ş." },
  { name: "Ersan Kalafatoğlu, Prof. Dr.", title: "Marmara Üniversitesi" },
  { name: "Ferrie Van Hattum, Prof. Dr.", title: "Saxion University of Applied Sciences - Hollanda" },
  { name: "Figen Aynalı, Dr.", title: "Kimya Mühendisleri Odası" },
  { name: "Funda Tıhmınlıoğlu, Prof. Dr.", title: "İzmir Yüksek Teknoloji Enstitüsü" },
  { name: "Hasan Ömer", title: "Herkim Polimer Kimya San. ve Tic. A.Ş," },
  { name: "He Haijun, Dr.", title: "College of Textile Science and Engineering, Jiangnan University - Çin" },
  { name: "Holger Seidlitz, Prof. Dr.", title: "Brandenburg University of Technology Cottbus - Almanya" },
  { name: "Hülya Cebeci, Doç. Dr.", title: "İstanbul Teknik Üniversitesi" },
  { name: "İbrahim Köse", title: "Kosse Composite Marketing" },
  { name: "İsmail Darcan", title: "Boytek Reçine Boya ve Kimya Sanayi Ticaret A.Ş" },
  { name: "Jozsef Gabor Kovacs, Assoc. Prof.", title: "The Budapest University of Technology and Economics - Macaristan" },
  { name: "Kristiina Oksman", title: "Lulea Technical University - İsveç" },
  { name: "M. Cengiz Altan, Prof.", title: "The University of Oklahoma - Amerika Birleşik Devletleri" },
  { name: "Maya John, Dr.", title: "Council for Scientific Research (CSIR) - Güney Afrika" },
  { name: "Mehmet Sarıkanat, Doç. Dr.", title: "Ege Üniversitesi" },
  { name: "Mehmet Yıldız, Prof. Dr.", title: "Sabancı Üniversitesi" },
  { name: "Metin Tanoğlu, Prof. Dr.", title: "İzmir Yüksek Teknoloji Enstitüsü" },
  { name: "Mustafa M. Demir, Prof. Dr.", title: "İzmir Yüksek Teknoloji Enstitüsü" },
  { name: "Nikhil Verghese, Dr.", title: "Corporate Fellow at Sabic - Amerika Birleşik Devletleri" },
  { name: "Nilay Gizli, Doç. Dr.", title: "Ege Üniversitesi" },
  { name: "Özgür Seydibeyoğlu, Prof. Dr.", title: "İzmir Katip Çelebi Üniversitesi" },
  { name: "Sadık Aslıtürk", title: "Polkima Polyester Kimya ve Makina San. ve Tic. A.Ş" },
  { name: "Salim Belouettar, Dr.", title: "Luxembourg Institute of Science and Technology - Lüksemburg" },
  { name: "Selim Küsefoğlu, Prof. Dr.", title: "Boğaziçi Üniversitesi" },
  { name: "Serkan Dehneliler", title: "TUSAŞ" },
  { name: "Sevim Özgül, Dr.", title: "Bahçeşehir Üniversitesi" },
  { name: "Steve Nutt", title: "University of Southern California - Amerika Birleşik Devletleri" },
  { name: "Tülay Baldemirci, Prof. Dr.", title: "İstanbul Üniversitesi" },
  { name: "Ülkü Yılmazer, Prof. Dr.", title: "Orta Doğu Teknik Üniversitesi" },
  { name: "Ümit Halis Erdoğan, Prof. Dr.", title: "Dokuz Eylül Üniversitesi" },
  { name: "Veli Deniz, Prof. Dr.", title: "Kimya Mühendisleri Odası" },
  { name: "Volkan Acar, Dr. Öğt. Üyesi", title: "Atatürk Üniversitesi" },
  { name: "Yusuf Menceloğlu, Prof. Dr.", title: "Sabancı Üniversitesi" }
];

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Committees</h1>
        <CommitteeSection title="Symposium Secretariat" members={symposiumSecretariat} />
        <CommitteeSection title="Honor Board" members={HonorBoard} />
        <CommitteeSection title="Executive Committee" members={executiveCommittee} />
        <CommitteeSection title="Organizing Committee" members={organizingCommittee} />
        <CommitteeSection title="Scientific Advisory Committee" members={scientificAdvisoryCommittee} />
      </div>
    </div>
  )
}

