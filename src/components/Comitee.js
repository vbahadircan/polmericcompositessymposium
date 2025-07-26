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
    { name: "Onur Aşkaroğlu", title: "Tmmob chamber of Chemical Engineers / Uctea chamber of Chemical Engineers" },
    { name: "Sümeyra Göçemen", title: "Kosse Composite Ltd. Inc. / Kosse Composite Marketing" },
    { name: "Hüsnü Onur Ertürk", title: "Izmir Katip Çelebi University" }
  ];



  const executiveCommittee = [
    { name: "İbrahim KÖSE, Chem.", title: "Kosse Composite Ltd. Inc. / Kosse Composite Marketing – General Coordinator" },
    { name: "Metin TANOĞLU, Prof. Dr.", title: "Izmir Institute of Technology - Symposium Co-Chair" },
    { name: "Özgür SEYDİBEYOĞLU, Prof. Dr.", title: "Izmir Katip Çelebi University - Symposium Co-Chair" },
    { name: "Sezen ÇINGIR, Chem. Eng.", title: "Uctea chamber of Chemical Engineers - Member" },
    { name: "Serhat KARABAĞ, Civil Eng.", title: "Turkish Composites Manufacturers Association - Member" },
    { name: "Yahya KARA, Dr.", title: "Luxembourg Institute of Science and Technology - Member" },
    { name: "Cem AYNALI, Chem. Eng.", title: "Uctea chamber of Chemical Engineers - Member" }
  ];



  const organizingCommittee = [
    { name: "Ahmet Ünal, Prof. Dr.", title: "Yıldız Technical University" },
    { name: "ALİ Birtan Erdoğan", title: "ERCO- ECE Paint Chemistry Industry and Trade Inc." },
    { name: "Ali İhsan Otabatmaz", title: "Independent Consultant" },
    { name: "Alper Kalaycı", title: "ENSİA (Energy Industrialists & Businessmen Association) - Chairman of the Board" },
    { name: "Alperen Doğru, Dr.", title: "Ege University" },
    { name: "Aref Cevahir, Dr.", title: "Beşler Textile Industry and Trade Inc." },
    { name: "Aslı Ilgaz", title: "Metyx Composites - Telateks Inc." },
    { name: "Ayhan Ezdeşir", title: "Petkim Petrochemical Holding Inc." },
    { name: "Aylin Ziylan, Prof. Dr.", title: "Dokuz Eylül University" },
    { name: "Ayşen Ömer", title: "Herkim Polymer Chemistry Industry and Trade Inc." },
    { name: "Bahattin Şendoğan", title: "Metyx Composites - Telateks Inc." },
    { name: "Beril Darcan", title: "Boytek Resin Paint and Chemistry Industry Trade Inc." },
    { name: "Beyhan Erdoğan", title: "Dyo Paint Factories Industry and Trade Inc." },
    { name: "Banu Bilge", title: "Fibrosan CTP Industry and Trade Inc." },
    { name: "Burak Darcan", title: "Tila Composite Representation Domestic and Foreign Trade Ltd. Co." },
    { name: "Cem Aynalı", title: "Chamber of Chemical Engineers" },
    { name: "Cem Gürkan", title: "Poliya Polyester Industry and Trade Ltd. Co." },
    { name: "Cihangir Cebeci", title: "Fiberr Fiber Reinforced Resins Inc." },
    { name: "Devrim Özaydın", title: "Sabancı University" },
    { name: "Erkan Ersöz, Dr.", title: "Ege University" },
    { name: "Erkan Günindi", title: "Olgun Çelik Industry and Trade Inc." },
    { name: "Göksenin Çömlekçi", title: "Türkiye Şişe ve Cam Factories Inc." },
    { name: "İbrahim Akyürek", title: "Chamber of Chemical Engineers" },
    { name: "Kadir Uçar", title: "Esas Aegean Defense Industry Aviation and Space Clustering Association" },
    { name: "Levent Arslan", title: "KOSGEB Izmir Provincial Directorate" },
    { name: "Levent Aydın, Assoc. Prof.", title: "Izmir Katip Çelebi University" },
    { name: "M. Cengiz Altan, Prof. Dr.", title: "University of Oklahoma - United States of America" },
    { name: "Mehmet Güneş", title: "TUBITAK Marmara Research Center" },
    { name: "Mehmet Karahan, Prof. Dr.", title: "Bursa Uludag University" },
    { name: "Mehmet Sarıkanat, Assoc. Prof.", title: "Ege University" },
    { name: "Mertcan Aslıtürk", title: "Polkima Polyester Chemistry and Machinery Industry and Trade Inc." },
    { name: "Mustafa Demircioğlu, Prof. Dr.", title: "Ege University" },
    { name: "Nurseli Uyanık, Prof. Dr.", title: "Istanbul Technical University" },
    { name: "Özgür Sönmez", title: "Literatür Chemistry Electrical Construction Contracting Tourism and Automotive Import Export Industry Trade Ltd. Co." },
    { name: "Semih Yiğit", title: "Ostim Defense and Aviation Cluster" },
    { name: "Sevim Özgül, Dr.", title: "Bahçeşehir University" },
    { name: "Şekib Avdagiç", title: "Istanbul chamber of Commerce" },
    { name: "Ummuhan Topal", title: "DowAksa Advanced Composite Materials Industry Ltd. Co." },
    { name: "Ülkü Yılmazer, Prof. Dr.", title: "Middle East Technical University" },
    { name: "Volkan Eskizeybek, Assoc. Dr.", title: "18 March University" },
    { name: "Yalçın Yılmazkaya", title: "ACA Aerospace  Cluster Association" },
    { name: "Zeynep Yılmaz Serçinoğlu", title: "Marmara University" }
  ];


  const HonorBoard = [
    { name: "Gürel Nişli, Prof. Dr.", title: "Ege University, Uctea chamber of Chemical Engineers" },
    { name: "İsmail Darcan", title: "Boytek Resin Paint and Chemical Industry Trade Inc." },
    { name: "Hasan Ömer", title: "Herkim Polymer Chemistry Industry and Trade Inc." },
    { name: "Fikret Tacar", title: "Tacar Boat" },
    { name: "Fersan Kınayiğit", title: "Glass Fiber San. A.S." }
  ];


  const scientificAdvisoryCommittee = [
    { name: "Ali Gizli, Dr.", title: "Dyo Paint Factories Industry and Trade Inc." },
    { name: "Alperen Doğru, Dr.", title: "Ege University" },
    { name: "Barış Çağlar, Dr.", title: "Delft University of Technology - Netherlands" },
    { name: "Bedriye Üçpınar Durmaz, Dr.", title: "Ege University" },
    { name: "Burcu Saner Okan, Prof.", title: "Sabancı University" },
    { name: "Cem Gök, Prof. Dr.", title: "Bakırcay University" },
    { name: "Cemal Basaran, Prof. Dr.", title: "University at Buffalo - United States of America" },
    { name: "Cevdet Kaynak, Prof. Dr.", title: "Middle East Technical University" },
    { name: "Çağrı Ayrancı, Prof. Dr.", title: "University of Alberta - Canada" },
    { name: "Devrim Balköse, Prof. Dr.", title: "Izmir Institute of Technology" },
    { name: "Dipa Roy, Prof. Dr.", title: "The University of Edinburgh - Scotland" },
    { name: "Elif Alyamaç Seydibeyoğlu, Assoc. Prof.", title: "Ege University" },
    { name: "Erdem Yücel", title: "Fibrosan CTP Industry and Trade Inc." },
    { name: "Ersan Kalafatoğlu, Prof. Dr.", title: "Marmara University" },
    { name: "Ferrie Van Hattum, Prof. Dr.", title: "Saxion University of Applied Sciences - Netherlands" },
    { name: "Figen Aynalı, Dr.", title: "Chamber of Chemical Engineers" },
    { name: "Funda Tıhmınlıoğlu, Prof. Dr.", title: "Izmir Institute of Technology" },
    { name: "Hasan Ömer", title: "Herkim Polymer Chemistry Industry and Trade Inc." },
    { name: "He Haijun, Dr.", title: "College of Textile Science and Engineering, Jiangnan University - China" },
    { name: "Hülya Cebeci, Assoc. Prof.", title: "Istanbul Technical University" },
    { name: "İbrahim Köse", title: "Kosse Composite Marketing" },
    { name: "İsmail Darcan", title: "Boytek Resin Paint and Chemistry Industry Trade Inc." },
    { name: "Jozsef Gabor Kovacs, Assoc. Prof.", title: "The Budapest University of Technology and Economics - Hungary" },
    { name: "M. Cengiz Altan, Prof. Dr.", title: "The University of Oklahoma - United States of America" },
    { name: "Maya John, Dr.", title: "Council for Scientific and Industrial Research (CSIR) - South Africa" },
    { name: "Mehmet Sarıkanat, Assoc. Prof.", title: "Ege University" },
    { name: "Mehmet Yıldız, Prof. Dr.", title: "Sabancı University" },
    { name: "Metin Tanoğlu, Prof. Dr.", title: "Izmir Institute of Technology" },
    { name: "Mustafa M. Demir, Prof. Dr.", title: "Izmir Institute of Technology" },
    { name: "Nikhil Verghese, Dr.", title: "Sabic - United States of America" },
    { name: "Nilay Gizli, Assoc. Prof.", title: "Ege University" },
    { name: "Özgür Seydibeyoğlu, Prof. Dr.", title: "Izmir Katip Çelebi University" },
    { name: "Sadık Aslıtürk", title: "Polkima Polyester Chemistry and Machinery Industry and Trade Inc." },
    { name: "Salim Belouettar, Dr.", title: "Luxembourg Institute of Science and Technology - Luxembourg" },
    { name: "Selim Küsefoğlu, Prof. Dr.", title: "Bogazici University" },
    { name: "Serkan Dehneliler", title: "Turkish Aerospace Industries (TUSAŞ)" },
    { name: "Sevim Özgül, Dr.", title: "Bahcesehir University" },
    { name: "Steve Nutt, Prof. Dr.", title: "University of Southern California - United States of America" },
    { name: "Tülay Bal Demirci, Prof. Dr.", title: "Istanbul University - Cerrahpaşa University" },
    { name: "Ülkü Yılmazer, Prof. Dr.", title: "Middle East Technical University" },
    { name: "Ümit Halis ERDOĞAN, Prof. Dr.", title: "Dokuz Eylul University" },
    { name: "Veli DENİZ, Prof. Dr.", title: "Chamber of Chemical Engineers" },
    { name: "Volkan Acar, Dr.", title: "Ataturk University" },
    { name: "Yusuf Menceloğlu, Prof. Dr.", title: "Sabancı University" },
    { name: "Engin Aktaş, Prof. Dr.", title: "Izmir Institute of Technology" },
    { name: "Rasim İpek, Prof. Dr.", title: "Ege University" }
  ];


  return (
    <>
      <SEO
        title="Committees"
        description="Meet the organizing committee members of the 6th International Polymeric Composites Symposium. Learn about the dedicated team behind the symposium."
        keywords="symposium committees, conference organizing team, composite materials symposium committee, Izmir event committee"
      />
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

