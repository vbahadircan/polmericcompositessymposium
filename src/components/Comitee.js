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
    { name: "Onur Aşkaroğlu", title: "UCTEA Chamber of Chemical Engineers (TMMOB Kimya Mühendisleri Odası)" },
    { name: "Ceren Gümüş", title: "Kosse Composite Marketing (Kosse Kompozit Ltd. Şti.)" }
  ]

  const executiveCommittee = [
    { name: "İbrahim Köse, Kim.", title: "Kosse Composite Marketing, General Coordinator" },
    { name: "Metin Tanoğlu, Prof.Dr.", title: "İzmir Institute of Technology, Symposium Co-chair" },
    { name: "Özgür Seydibeyoğlu, Prof.Dr.", title: "İzmir Katip Çelebi University, Symposium Co-chair" },
    { name: "Sezen Çıngır, Kim. Müh.", title: "UCTEA Chamber of Chemical Engineers" },
    { name: "Serhat Karabağ, İnş. Müh.", title: "Turkish Composites Manufacturers Association" },
    { name: "Yahya Kara, Dr.", title: "Luxembourg Institute of Technology" },
    { name: "Hüseyin Dağlar, Kim. Müh.", title: "UCTEA Chamber of Chemical Engineers" }
  ]

  const organizingCommittee = [
    { name: "Ayşen Ömer", title: "Herkim" },
    { name: "Mertcan Aslıtürk", title: "Polkima" },
    { name: "Erkan Günindi", title: "Olgun Çelik" },
    { name: "Mehmet Karahan, Prof. Dr.", title: "Butekom" },
    { name: "Ahmet Ünal, Prof. Dr.", title: "Yıldız Teknik Üniversitesi" },
    { name: "Mehmet Sarıkanat, Doç. Dr.", title: "Ege Üniversitesi" },
    { name: "Levent Aydın, Doç. Dr.", title: "İzmir Katip Çelebi Üniversitesi" },
    { name: "Şekip Avdagiç", title: "İzmir Chamber of Commerce (İTO), President" },
    { name: "Devrim Özaydın", title: "Kordsa / Advanced Composite Center" },
    { name: "Beyhan Erdoğan", title: "DYO" },
    { name: "Levent Arslan", title: "Kosgeb" },
    { name: "Volkan Eskizeybek", title: "Çanakkale On Sekiz Mart Üniversitesi" },
    { name: "Cem Gürkan", title: "Poliya" },
    { name: "Yalçın Yılmazkaya", title: "Aviation and Space Clustering Association" },
    { name: "Mustafa Demircioğlu, Prof. Dr.", title: "" },
    { name: "Ali Britan Erdoğan", title: "Ece Boya" },
    { name: "Ülkü Yılmazer, Prof. Dr.", title: "ODTÜ" },
    { name: "Uğur Üstünel", title: "Metyx" },
    { name: "Nurseli Uyanık, Prof. Dr.", title: "İstanbul Teknik Üniversitesi" },
    { name: "Mehmet Güneş", title: "Tübitak Mam" },
    { name: "Cesim Ataş, Prof. Dr.", title: "Dokuz Eylül Üniversitesi" },
    { name: "Alperen Doğru, Dr.", title: "Ege Üniversitesi" },
    { name: "Burak Darcan", title: "Tila Kompozit" },
    { name: "Alper Kalaycı", title: "ENSİA, Chairman" },
    { name: "Beril Darcan", title: "Boytek" },
    { name: "Ali İhsan Otabatmaz", title: "" },
    { name: "Özgür Sönmez", title: "Literatür Kimya" },
    { name: "Bilge Bıçakçıoğlu", title: "Fibrosan" },
    { name: "Cem Aynalı", title: "TMMOB Kimya Mühendisleri Odası" }
  ]

  const scientificAdvisoryCommittee = [
    { name: "İsmail Darcan", title: "Boytek" },
    { name: "Hasan Ömer", title: "Herkim" },
    { name: "Sadık Aslıtürk", title: "Polkima" },
    { name: "Metin Tanoğlu, Prof. Dr.", title: "İzmir Institute of Technology" },
    { name: "Selim Küsefoğlu, Prof. Dr.", title: "Boğaziçi Üniversitesi" },
    { name: "Tülay Baldemirci, Prof. Dr.", title: "İstanbul Üniversitesi" },
    { name: "Ersan Kalafatoğlu, Prof. Dr.", title: "Marmara Üniversitesi" },
    { name: "Mehmet Yıldız, Prof. Dr.", title: "Sabancı Üniversitesi" },
    { name: "Özgür Seydibeyoğlu, Prof. Dr.", title: "İzmir Katip Çelebi Üniversitesi" },
    { name: "İbrahim Köse", title: "Kosse Composite Marketing" },
    { name: "Elif Alyamaç Seydibeyoğlu, Doç. Dr.", title: "Ege Üniversitesi" },
    { name: "Cevdet Kaynak, Prof. Dr.", title: "ODTÜ" },
    { name: "Ülkü Yılmazer, Prof. Dr.", title: "ODTÜ" },
    { name: "Mehmet Sarıkanat, Doç. Dr.", title: "Ege Üniversitesi" },
    { name: "Hülya Cebeci, Doç. Dr.", title: "İTÜ Havacılık" },
    { name: "Volkan Acar, Dr.", title: "Atatürk Üniversitesi" },
    { name: "Alperen Doğru, Dr.", title: "Ege Üniversitesi" },
    { name: "Funda Tıhmınlıoğlu, Prof. Dr.", title: "İzmir Institute of Technology" },
    { name: "Burcu Saner Okan, Doç. Dr.", title: "Sabancı Üniversitesi" },
    { name: "Devrim Balköse, Prof. Dr.", title: "" },
    { name: "Yusuf Menceloğlu, Prof. Dr.", title: "" },
    { name: "Aref Cevahir, Dr.", title: "" },
    { name: "Cengiz Altan, Prof. Dr.", title: "University of Oklahoma, USA" },
    { name: "Çağrı Ayrancı, Prof. Dr.", title: "Alberta Üniversitesi, Canada" },
    { name: "Barış Çağlar", title: "Delft Technical University, Netherlands" },
    { name: "Steve Nut", title: "University of Southern California, USA" },
    { name: "Holger Seitlitz", title: "Cottbus University, Germany" },
    { name: "Maya John", title: "Council for Scientific Research, South Africa" },
    { name: "Ferrie Van Hattum", title: "Saxon University" },
    { name: "Kristiina Oksman", title: "Lulea Technical University, Sweden" },
    { name: "Dipa Roy", title: "Edinburgh University, Scotland" },
    { name: "Bedriye Üçpınar Durmaz, Dr.", title: "Ege Üniversitesi" },
    { name: "Nilay Gizli, Doç. Dr.", title: "Ege Üniversitesi" },
    { name: "Ali Gizli, Dr.", title: "DYO" },
    { name: "Cemal Başaran, Prof. Dr.", title: "OSTİM Teknik Üniversitesi" },
    { name: "Jozsef Gabor Kovacs", title: "Budapest University of Technology and Economics" },
    { name: "Lyazid Bouhala", title: "Luxembourg Institute of Science and Technology" },
    { name: "Seran Dehneliler", title: "TUSAŞ" },
    { name: "Cem Gök, Prof. Dr.", title: "Bakırçay Üniversitesi" },
    { name: "Erdem Yücel", title: "Fibrosan" }
  ]

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Committees</h1>
        <CommitteeSection title="Symposium Secretariat" members={symposiumSecretariat} />
        <CommitteeSection title="Executive Committee" members={executiveCommittee} />
        <CommitteeSection title="Organizing Committee" members={organizingCommittee} />
        <CommitteeSection title="Scientific Advisory Committee" members={scientificAdvisoryCommittee} />
      </div>
    </div>
  )
}

