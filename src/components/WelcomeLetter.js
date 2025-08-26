import React from 'react'

export default function WelcomeLetter({ language = 'en' }) {
  const content = {
    en: {
      title: "Welcome Letter",
      dearColleagues: "Dear Colleagues,",
      intro: "We are delighted to invite our esteemed colleagues in polymeric composites to the 6th International Polymeric Composites (IPC) Symposium and Workshops, which will be held in the historic and industrial city of Izmir, Türkiye, from October 2-4, 2025.",
      izmirHistory: "Izmir is a city steeped in thousands of years of heritage, located near world-renowned archaeological sites such as Ephesus and Pergamon. Serving as a historical trade and economic hub, it has long connected Europe, Asia, and North Africa.",
      symposiumHistory: "The IPC Symposium series, which began in 2006, has consistently been organized in collaboration with industrial partners and academic institutions. This 6th edition, in October 2025, will continue this tradition. Originally initiated by the Chamber of Chemical Engineers, Türkiye, the symposium is now co-hosted by the Turkish Composite Manufacturing Association.",
      theme: "The theme for this year's symposium, \"Future in Composite Materials: Sustainable, High-Performance, Digitally-Driven Applications,\" underscores the importance of sustainability and high performance in composite materials, while embracing the transformative potential of digital innovation. The program will comprehensively cover all aspects of composite materials, with a particular focus on bio-based composites, energy-efficient production, advanced composites and recycling. Attendees can look forward to focused lectures, engaging roundtables, dynamic workshops, and interactive sessions.",
      chairsInvitation: "As Chairs of this symposium, we warmly invite you to this significant event to connect with esteemed professionals from both academia and industry. Together, we will explore the latest trends and share insights about the future of polymeric composites.",
      eventFeatures: "This three-day event will feature stimulating discussions led by global experts in the field. Additionally, participants will have the opportunity to engage in a hands-on workshop showcasing cutting-edge composite technologies from leading companies.",
      izmirFeatures: "Izmir, with its vibrant coastal charm, rich cultural festivals, and iconic landmarks such as the ancient city of Ephesus, offers a unique blend of historical allure and modern innovation. Its expertise in polymer and composite manufacturing, alongside strengths in trade, tourism, and renewable energy, makes it an ideal host for this prestigious event.",
      closing: "We eagerly look forward to welcoming you to Izmir—a city that celebrates both its remarkable heritage and forward-looking vision in the field of composites.",
      warmRegards: "Warm regards,",
      conferenceChairs: "The Conference Chairs",
      profMetin: "Prof. Dr. Metin Tanoğlu",
      izmirTech: "Izmir Institute of Technology",
      profOzgur: "Prof.Dr. M.Özgür Seydibeyoğlu",
      izmirKatip: "Izmir Katip Celebi University"
    },
    tr: {
      title: "Hoş Geldiniz Mektubu",
      dearColleagues: "Değerli Meslektaşlarımız,",
      intro: "Polimerik kompozitler alanındaki değerli meslektaşlarımızı, 2-4 Ekim 2025 tarihlerinde Türkiye'nin tarihi ve endüstriyel şehri İzmir'de düzenlenecek olan 6. Uluslararası Polimerik Kompozitler (IPC) Sempozyumu ve Çalıştaylarına davet etmekten memnuniyet duyarız.",
      izmirHistory: "İzmir, binlerce yıllık mirasa sahip, Efes ve Bergama gibi dünya çapında ünlü arkeolojik alanların yakınında bulunan bir şehirdir. Tarihi ticaret ve ekonomik merkez olarak hizmet veren İzmir, uzun zamandır Avrupa, Asya ve Kuzey Afrika'yı birbirine bağlamaktadır.",
      symposiumHistory: "2006 yılında başlayan IPC Sempozyumu serisi, endüstri ortakları ve akademik kurumlarla işbirliği içinde tutarlı bir şekilde organize edilmiştir. Ekim 2025'teki bu 6. baskı, bu geleneği sürdürecektir. Başlangıçta Türkiye Kimya Mühendisleri Odası tarafından başlatılan sempozyum, artık Türk Kompozit Üretim Derneği tarafından ortak olarak düzenlenmektedir.",
      theme: "Bu yılki sempozyumun teması olan \"Kompozit Malzemelerde Gelecek: Sürdürülebilir, Yüksek Performanslı, Dijital Odaklı Uygulamalar\", kompozit malzemelerde sürdürülebilirlik ve yüksek performansın önemini vurgularken, dijital inovasyonun dönüştürücü potansiyelini benimsemektedir. Program, kompozit malzemelerin tüm yönlerini kapsamlı bir şekilde ele alacak ve özellikle biyolojik temelli kompozitler, enerji verimli üretim, gelişmiş kompozitler ve geri dönüşüm üzerine odaklanacaktır. Katılımcılar odaklanmış konferanslar, etkileşimli yuvarlak masa toplantıları, dinamik çalıştaylar ve interaktif oturumlar için sabırsızlanabilirler.",
      chairsInvitation: "Bu sempozyumun başkanları olarak, hem akademi hem de endüstriden saygın profesyonellerle bağlantı kurmak için bu önemli etkinliğe sizi sıcak bir şekilde davet ediyoruz. Birlikte en son trendleri keşfedecek ve polimerik kompozitlerin geleceği hakkında içgörüler paylaşacağız.",
      eventFeatures: "Bu üç günlük etkinlik, alanında küresel uzmanlar tarafından yönetilen uyarıcı tartışmaları içerecektir. Ayrıca, katılımcılar önde gelen şirketlerden en son kompozit teknolojilerini sergileyen uygulamalı bir çalıştaya katılma fırsatına sahip olacaklardır.",
      izmirFeatures: "İzmir, canlı sahil cazibesi, zengin kültürel festivalleri ve Efes antik kenti gibi ikonik simgeleriyle, tarihi cazibe ve modern inovasyonun benzersiz bir karışımını sunmaktadır. Polimer ve kompozit üretimindeki uzmanlığı, ticaret, turizm ve yenilenebilir enerji alanlarındaki güçlü yanlarıyla birlikte, bu prestijli etkinlik için ideal bir ev sahibi haline getirmektedir.",
      closing: "İzmir'e sizi karşılamayı sabırsızlıkla bekliyoruz—kompozitler alanında hem olağanüstü mirasını hem de ileri görüşlü vizyonunu kutlayan bir şehir.",
      warmRegards: "Saygılarımızla,",
      conferenceChairs: "Konferans Başkanları",
      profMetin: "Prof. Dr. Metin Tanoğlu",
      izmirTech: "İzmir Yüksek Teknoloji Enstitüsü",
      profOzgur: "Prof.Dr. M.Özgür Seydibeyoğlu",
      izmirKatip: "İzmir Katip Çelebi Üniversitesi"
    }
  };

  const currentContent = content[language];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">{currentContent.title}</h2>
            <div className="prose prose-xl mx-auto space-y-6">
              <p className="mb-4">{currentContent.dearColleagues}</p>

              <p className="mb-4">{currentContent.intro}</p>

              <p className="mb-4">{currentContent.izmirHistory}</p>

              <p className="mb-4">{currentContent.symposiumHistory}</p>

              <p className="mb-4">{currentContent.theme}</p>

              <p className="mb-4">{currentContent.chairsInvitation}</p>

              <p className="mb-4">{currentContent.eventFeatures}</p>

              <p className="mb-4">{currentContent.izmirFeatures}</p>

              <p className="mb-4">{currentContent.closing}</p>

              <p className="mb-4">{currentContent.warmRegards}</p>

              <p className="mb-4">{currentContent.conferenceChairs}</p>

              <div className="flex justify-between mt-12">
                <div>
                  <p className="font-semibold">{currentContent.profMetin}</p>
                  <p>{currentContent.izmirTech}</p>
                </div>
                <div>
                  <p className="font-semibold">{currentContent.profOzgur}</p>
                  <p>{currentContent.izmirKatip}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

