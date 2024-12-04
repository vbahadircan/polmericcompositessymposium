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
    { name: "Metin Tanoğlu, Prof.Dr.", title: "İzmir Institute of Technology, Symposium Co-Chair" },
    { name: "Özgür Seydibeyoğlu, Prof.Dr.", title: "İzmir Katip Çelebi University, Symposium Co-Chair" },
    { name: "Sezen Çıngır, Kim. Müh.", title: "UCTEA Chamber of Chemical Engineers" },
    { name: "Serhat Karabağ, İnş. Müh.", title: "Turkish Composites Manufacturers Association" },
    { name: "Yahya Kara, Dr.", title: "Luxembourg Institute of Technology" },
    { name: "Hüseyin Dağlar, Kim. Müh.", title: "UCTEA Chamber of Chemical Engineers" }
  ]

  const organizingCommittee = [
    { name: "Ayşen Ömer", title: "Herkim Polymer Chemical Industry Inc." },
    { name: "Mertcan Aslıtürk", title: "Polkima" },
    { name: "Erkan Günindi", title: "Olgun Çelik" },
    { name: "Prof. Dr. Mehmet Karahan", title: "Butekom" },
    { name: "Prof. Dr. Ahmet Ünal", title: "Yıldız Technical University (YTU)" },
    { name: "Assoc. Prof. Dr. Mehmet Sarıkanat", title: "Ege University" },
    { name: "Assoc. Prof. Dr. Levent Aydın", title: "İzmir Katip Çelebi University" },
    { name: "Şekip Avdagiç", title: "İstanbul Chamber of Commerce (İTO), President" },
    { name: "Devrim Özaydın", title: "Kordsa / Advanced Composite Center" },
    { name: "Beyhan Erdoğan", title: "Dyo" },
    { name: "Levent Arslan", title: "Kosgeb" },
    { name: "Volkan Eskizeybek", title: "Çanakkale Onsekiz Mart University" },
    { name: "Cem Gürkan", title: "Poliya" },
    { name: "Yalçın Yılmazkaya", title: "Aerospace and Space Clustering Association" },
    { name: "Prof. Dr. Mustafa Demircioğlu", title: "" },
    { name: "Goksenin Çömlekçi", title: "Şişecam" },
    { name: "Ummuhan Topal", title: "Dowaksa" },
    { name: "Burak Özhaseki", title: "Beşler Fiberglass" },
    { name: "Nagihan Özturk", title: "Ece Chemicals Inc. / Ece Paints" },
    { name: "Prof. Dr. Ülkü Yılmazer", title: "" },
    { name: "Bahattin Şendoğan", title: "Metyx (Telateteks Inc.)" },
    { name: "Prof. Dr. Nurseli Uyanık", title: "" },
    { name: "Mehmet Güneş", title: "Tübitak Marmara Research Center" },
    { name: "Ayhan Ezdeşir", title: "Petkim" },
    { name: "Prof. Dr. Aylin Ziylan", title: "Dokuz Eylül University" },
    { name: "Dr. Alperen Doğru", title: "Ege University" },
    { name: "Burak Darcan", title: "Tila Composite" },
    { name: "Alper Kalaycı", title: "ENSIA, Chairman" },
    { name: "Beril Darcan", title: "Boytek" },
    { name: "Ali İhsan Otabatmaz", title: "Technical Consultant" },
    { name: "Özgür Sönmez", title: "Literature Chemicals" },
    { name: "Bilge Bıçakçıoğlu", title: "Fibrosan" },
    { name: "Arzu Yalçın Melikoğlu", title: "Gema" },
    { name: "Erkan Ersöz", title: "Ege University" },
    { name: "İbrahim Akyürek", title: "Chamber of Chemical Engineers (KMO)" }
];



const scientificAdvisoryCommittee = [
  { name: "İsmail Darcan", title: "Boytek" },
  { name: "Hasan Ömer", title: "Herkim" },
  { name: "Sadık Aslıtürk", title: "Polkima" },
  { name: "Prof. Dr. Metin Tanoğlu", title: "İzmir Institute of Technology (IYTE)" },
  { name: "Prof. Dr. Selim Küsefoğlu", title: "Boğaziçi University" },
  { name: "Prof. Dr. Tülay Baldemirci", title: "Istanbul University" },
  { name: "Prof. Dr. Ersan Kalafatoğlu", title: "Marmara University" },
  { name: "Prof. Dr. Mehmet Yıldız", title: "Sabancı University" },
  { name: "Prof. Dr. Özgür Seydibeyoğlu", title: "" },
  { name: "İbrahim Köse", title: "" },
  { name: "Assoc. Prof. Dr. Elif Alyamaç Seydibeyoğlu", title: "" },
  { name: "Prof. Dr. Cevdet Kaynak", title: "Middle East Technical University (METU)" },
  { name: "Prof. Dr. Ülkü Yılmazer", title: "" },
  { name: "Assoc. Prof. Dr. Mehmet Sarıkanat", title: "Ege University" },
  { name: "Assoc. Prof. Dr. Hülya Cebeci", title: "ITU Aviation" },
  { name: "Dr. Volkan Acar", title: "Atatürk University" },
  { name: "Dr. Alperen Doğru", title: "Ege University" },
  { name: "Prof. Dr. Funda Tıhmınlıoğlu", title: "İzmir Institute of Technology (IYTE)" },
  { name: "Assoc. Prof. Dr. Burcu Saner Okan", title: "Sabancı University" },
  { name: "Prof. Dr. Devrim Balköse", title: "" },
  { name: "Prof. Dr. Yusuf Menceloğlu", title: "" },
  { name: "Dr. Aref Cevahir", title: "Independent Researcher" },
  { name: "Prof. Dr. Cengiz Altan", title: "University of Oklahoma, USA" },
  { name: "Prof. Dr. Çağrı Ayrancı", title: "University of Alberta, Canada" },
  { name: "Barış Çağlar", title: "Delft University, Aerospace Engineering" },
  { name: "Çağrı Ayrancı", title: "University of Alberta, Mechanical Engineering, Canada" },
  { name: "Steve Nutt", title: "University of Southern California, USA" },
  { name: "Holger Seitlitz", title: "Cottbus University, Mechanical Engineering, Germany" },
  { name: "Maya John", title: "Council for Scientific Research (CSIR), South Africa" },
  { name: "Ferrie Van Hattum", title: "Saxion University, Netherlands" },
  { name: "Kristiina Oksman", title: "Luleå Technical University, Sweden" },
  { name: "Dipa Roy", title: "University of Edinburgh, Scotland" },
  { name: "Dr. Bedriye Üçpınar Durmaz", title: "Ege University" },
  { name: "Assoc. Prof. Dr. Nilay Gizli", title: "Ege University" },
  { name: "Dr. Ali Gizli", title: "Dyo" },
  { name: "Prof. Cemal Basaran", title: "University at Buffalo" },
  { name: "Assoc. Prof. Dr. Jozsef Gabor Kovacs", title: "Budapest University of Technology and Economics" },
  { name: "Dr. Belouettar Salim", title: "Luxembourg Institute of Science and Technology" },
  { name: "Serkan Dehneliler", title: "TUSAŞ" },
  { name: "Prof. Dr. Cem Gök", title: "Bakırçay University" },
  { name: "Erdem Yücel", title: "Fibrosan" },
  { name: "Dr. He Haijun", title: "College of Textile Science and Engineering, Jiangnan University, China" },
  { name: "Dr. Nikhil Verghese", title: "Corporate Fellow at Sabic" },
  { name: "Dr. Figen Aynalı", title: "Gema" },
  { name: "Prof. Dr. Mustafa Demir", title: "İzmir Institute of Technology (IYTE)" },
  { name: "Prof. Dr. Ümit Halis Erdoğan", title: "Dokuz Eylül University" },
  { name: "Prof. Dr. Veli Deniz", title: "Chamber of Chemical Engineers" }
];

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

