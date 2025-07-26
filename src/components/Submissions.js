import React, { useState } from "react";
import SEO from "./SEO";

export default function Submissions() {
  const [language, setLanguage] = useState('en');

  const content = {
    en: {
      title: "Submissions Information",
      submissionGuidelines: "Submission Guidelines",
      languages: "Languages:",
      languagesDesc: "Turkish participants must submit abstracts in both Turkish and English. Foreign participants may submit abstracts in English only.",
      abstractLength: "Abstract Length:",
      abstractLengthDesc: "Max 500 words in each language.",
      formattingRequirements: "Formatting Requirements:",
      a4Format: "A4 format with 5 cm top/bottom margins and 4 cm side margins.",
      font: "Use \"Times New Roman\" font, size 12, double line spacing.",
      titleFormat: "Title should be bold, centered, and written in both languages.",
      blankLine: "Leave one blank line between the title and author information.",
      springerTitle: "Call for Full Paper Submissions – Springer Proceedings",
      springerDesc: "We are pleased to announce that abstract submissions are now open for the proceedings of the",
      symposiumName: "6th International Polymeric Composites Symposium and Workshops",
      springerDesc2: ". Upon abstract submission and acceptance, authors will have the opportunity to submit full papers for the proceedings book.",
      selectedPapers: "Selected papers, following a peer-review process, will be published",
      freeOfCharge: "free of charge",
      springerLink: "Springer Proceedings in Materials",
      importantDates: "Important Dates",
      submissionClosed: "Submission of Abstracts: Closed on 06.06.2025",
      announcementDate: "Announcement of Accepted Papers:",
      fullProceedings: "Submission of Full Proceedings:",
      detailedInstructions: "For detailed instructions for authors of conference proceedings, kindly visit:",
      inquiries: "For inquiries, please contact us at:",
      disclaimer: "Disclaimer:",
      disclaimerText: "It is planned to publish the peer-reviewed and selected papers of the conference as proceedings with Springer in their prestigious \"Springer Proceedings in Materials\" series. Springer will conduct quality checks on the accepted papers, and only papers that pass these checks will be published.",
      noCharge: "Springer Nature does not charge any money for the publication of Non-Open Access content.",
      note: "Note:",
      noteText: "Abstracts/extended abstracts and short papers (less than 4 pages) are not considered for publication.",
      downloadTemplate: "Download Full Text Submission Template",
      submissionProcess: "Submission Process",
      submitEmail: "Submit your abstract document via email to:",
      deadline: "by",
      ensureGuidelines: "Ensure that all guidelines and formatting requirements are met before submission.",
      additionalNotes: "Additional Notes",
      graphicalAbstracts: "Graphical abstracts are optional but recommended.",
      presentations: "Accepted presentations must prepare slides in English or Turkish.",
      translation: "Simultaneous translation will be provided during symposium sessions.",
      downloadAbstract: "Download Abstract Template (.docx)",
      downloadPoster: "Download Poster Template (.pdf)",
      posterAwards: "Poster Awards",
      dearParticipant: "Dear Participant,",
      posterAwardsDesc: "Within the scope of the 6th International Symposium and Workshops on Polymeric Composites (IPC 2025) to be held on October 2–4, 2025, the top three poster presentations will be awarded at IPC 2025. The following prizes will be presented to the three best poster presentations based on the Symposium Scientific Committee evaluation;",
      firstPrize: "First Prize – 12,000 TL",
      secondPrize: "Second Prize – 8,000 TL",
      thirdPrize: "Third Prize – 4,000 TL",
      posterRequirements: "The poster presentation must be prepared in accordance with the official poster template and submitted to the Symposium Secretariat no later than September 15, 2025.",
      announcementInfo: "The poster awards will be announced during a ceremony to be held on the third day of the symposium (October 4, 2025), prior to the sectoral evaluation panel.",
      thankYou: "We sincerely thank you for your participation and contributions and wish all participants the best of success."
    },
    tr: {
      title: "Başvuru Bilgileri",
      submissionGuidelines: "Başvuru Kuralları",
      languages: "Diller:",
      languagesDesc: "Türk katılımcılar özetlerini hem Türkçe hem İngilizce olarak sunmalıdır. Yabancı katılımcılar özetlerini sadece İngilizce olarak sunabilir.",
      abstractLength: "Özet Uzunluğu:",
      abstractLengthDesc: "Her dilde maksimum 500 kelime.",
      formattingRequirements: "Formatlama Gereksinimleri:",
      a4Format: "A4 formatında, üst/alt kenar boşlukları 5 cm, yan kenar boşlukları 4 cm.",
      font: "\"Times New Roman\" yazı tipi, 12 punto, çift satır aralığı kullanın.",
      titleFormat: "Başlık kalın, ortalanmış ve her iki dilde yazılmalıdır.",
      blankLine: "Başlık ile yazar bilgileri arasında bir boş satır bırakın.",
      springerTitle: "Tam Metin Bildiri Başvuruları – Springer Bildiriler Kitabı",
      springerDesc: "6. Uluslararası Polimerik Kompozitler Sempozyumu ve Çalıştayları bildiriler kitabı için özet başvurularının açıldığını duyurmaktan memnuniyet duyarız.",
      symposiumName: "6. Uluslararası Polimerik Kompozitler Sempozyumu ve Çalıştayları",
      springerDesc2: ". Özet başvurusu ve kabulü sonrasında, yazarlar bildiriler kitabı için tam metin bildiri sunma fırsatına sahip olacaklardır.",
      selectedPapers: "Hakem değerlendirmesi sonrasında seçilen bildiriler,",
      freeOfCharge: "ücretsiz olarak",
      springerLink: "Springer Materials Bildiriler",
      importantDates: "Önemli Tarihler",
      submissionClosed: "Özet Başvuruları: 06.06.2025 tarihinde kapanmıştır",
      announcementDate: "Kabul Edilen Bildirilerin Duyurulması:",
      fullProceedings: "Tam Metin Bildirilerin Sunulması:",
      detailedInstructions: "Konferans bildirileri için yazarların detaylı talimatları için lütfen ziyaret edin:",
      inquiries: "Sorularınız için lütfen bizimle iletişime geçin:",
      disclaimer: "Sorumluluk Reddi:",
      disclaimerText: "Konferansın hakem değerlendirmesi yapılmış ve seçilmiş bildirilerinin Springer'ın prestijli \"Springer Materials Bildiriler\" serisinde bildiriler kitabı olarak yayınlanması planlanmaktadır. Springer kabul edilen bildiriler üzerinde kalite kontrolleri yapacak ve sadece bu kontrolleri geçen bildiriler yayınlanacaktır.",
      noCharge: "Springer Nature, Açık Erişim olmayan içeriklerin yayınlanması için herhangi bir ücret talep etmemektedir.",
      note: "Not:",
      noteText: "Özetler/genişletilmiş özetler ve kısa bildiriler (4 sayfadan az) yayın için değerlendirilmemektedir.",
      downloadTemplate: "Tam Metin Başvuru Şablonunu İndir",
      submissionProcess: "Başvuru Süreci",
      submitEmail: "Özet belgenizi e-posta ile gönderin:",
      deadline: "tarihine kadar",
      ensureGuidelines: "Başvuru öncesinde tüm kuralların ve formatlama gereksinimlerinin karşılandığından emin olun.",
      additionalNotes: "Ek Notlar",
      graphicalAbstracts: "Grafik özetler isteğe bağlıdır ancak önerilir.",
      presentations: "Kabul edilen sunumlar İngilizce veya Türkçe slaytlar hazırlamalıdır.",
      translation: "Sempozyum oturumları sırasında eş zamanlı çeviri sağlanacaktır.",
      downloadAbstract: "Özet Şablonunu İndir (.docx)",
      downloadPoster: "Poster Şablonunu İndir (.pdf)",
      posterAwards: "Poster Ödülleri",
      dearParticipant: "Değerli Katılımcı,",
      posterAwardsDesc: "2-4 Ekim 2025 tarihlerinde düzenlenecek olan 6. Uluslararası Polimerik Kompozitler Sempozyumu ve Çalıştayları (IPC 2025) kapsamında, en iyi üç poster sunumu IPC 2025'te ödüllendirilecektir. Sempozyum Bilimsel Kurulu değerlendirmesi sonucunda en iyi üç poster sunumuna aşağıdaki ödüller verilecektir;",
      firstPrize: "Birinci Ödül – 12.000 TL",
      secondPrize: "İkinci Ödül – 8.000 TL",
      thirdPrize: "Üçüncü Ödül – 4.000 TL",
      posterRequirements: "Poster sunumu resmi poster şablonuna uygun olarak hazırlanmalı ve 15 Eylül 2025 tarihine kadar Sempozyum Sekreterliği'ne sunulmalıdır.",
      announcementInfo: "Poster ödülleri, sempozyumun üçüncü gününde (4 Ekim 2025) sektörel değerlendirme panelinden önce düzenlenecek törende açıklanacaktır.",
      thankYou: "Katılımınız ve katkılarınız için içtenlikle teşekkür eder, tüm katılımcılara başarılar dileriz."
    }
  };

  return (
    <>
      {/* SEO Metadata */}
      <SEO
        title="Submit Your Research"
        description="Submit your research papers and abstracts for the 6th International Polymeric Composites Symposium. Guidelines, deadlines, and submission process for presenting at the conference."
        keywords="abstract submission, research papers, polymeric composites research, conference papers, submission guidelines"
      />

      <div className="bg-gray-100 min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Language Toggle */}
          <div className="flex justify-end mb-6">
            <div className="bg-white rounded-lg shadow-md p-2 flex space-x-2">
              <button
                onClick={() => setLanguage('en')}
                className={`px-4 py-2 rounded-md font-medium transition-colors ${
                  language === 'en' 
                    ? 'bg-red-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage('tr')}
                className={`px-4 py-2 rounded-md font-medium transition-colors ${
                  language === 'tr' 
                    ? 'bg-red-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Türkçe
              </button>
            </div>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            {content[language].title}
          </h1>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              {/* Submission Guidelines Section */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {content[language].submissionGuidelines}
                </h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>
                    <strong>{content[language].languages}</strong> {content[language].languagesDesc}
                  </li>
                  <li>
                    <strong>{content[language].abstractLength}</strong> {content[language].abstractLengthDesc}
                  </li>
                  <li>
                    <strong>{content[language].formattingRequirements}</strong>
                    <ul className="list-disc list-inside ml-4 mt-2">
                      <li>
                        {content[language].a4Format}
                      </li>
                      <li>
                        {content[language].font}
                      </li>
                      <li>
                        {content[language].titleFormat}
                      </li>
                      <li>
                        {content[language].blankLine}
                      </li>
                    </ul>
                  </li>
                </ul>
              </section>

              {/* Springer Nature Proceedings Section */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {content[language].springerTitle}
                </h2>

                <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6 space-y-4">
                  <div className="flex items-center space-x-4">
                    <img
                      src="/springernature.png"
                      alt="Springer Nature Logo"
                      className="w-48 h-auto"
                    />
                    <p className="text-gray-700">
                      {content[language].springerDesc}{" "}
                      <strong>
                        {content[language].symposiumName}
                      </strong>
                      {content[language].springerDesc2}
                      <br />
                      {content[language].selectedPapers}{" "}
                      <strong>{content[language].freeOfCharge}</strong>{" "}
                      {content[language].springerLink === "Springer Proceedings in Materials" ? "in the " : ""}
                      <a
                        href="https://www.springer.com/series/16157"
                        className="text-blue-600 underline"
                        target="_blank"
                      >
                        {content[language].springerLink}
                      </a>{" "}
                      {content[language].springerLink === "Springer Proceedings in Materials" ? "series." : "serisinde yayınlanacaktır."}
                    </p>
                  </div>

                  <div className="text-gray-700">
                    <h3 className="text-lg font-semibold mt-4 mb-2">
                      {content[language].importantDates}
                    </h3>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>
                        <strong>{content[language].submissionClosed}</strong>
                      </li>
                      <li>
                        <strong>{content[language].announcementDate}</strong>{" "}
                        01.07.2025
                      </li>
                      <li>
                        <strong>{content[language].fullProceedings}</strong>{" "}
                        15.08.2025
                      </li>
                    </ul>
                  </div>

                  <p className="text-gray-700">
                    {content[language].detailedInstructions}{" "}
                    <a
                      href="https://www.springer.com/us/authors-editors/conference-proceedings"
                      target="_blank"
                      className="text-blue-600 underline"
                    >
                      https://www.springer.com/us/authors-editors/conference-proceedings
                    </a>
                  </p>

                  <p className="text-gray-700">
                    {content[language].inquiries}{" "}
                    <a
                      href="mailto:info@polymericcomposites.org"
                      className="text-blue-600 underline"
                    >
                      info@polymericcomposites.org
                    </a>
                  </p>

                  <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-md border border-gray-200">
                    <strong>{content[language].disclaimer}</strong> {content[language].disclaimerText}
                    <br />
                    {content[language].noCharge}
                    <br />
                    <strong>{content[language].note}</strong> {content[language].noteText}
                  </div>

                  {/* Download Full Text Submission Template Button */}
                  <div className="mt-4 text-center">
                    <a
                      href="/abs.docx"
                      className="inline-block bg-red-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition duration-300"
                      download="abs.docx"
                    >
                      {content[language].downloadTemplate}
                    </a>
                  </div>
                </div>
              </section>

              {/* Submission Process Section */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {content[language].submissionProcess}
                </h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>
                    {content[language].submitEmail}
                    <a
                      href="mailto:symposium@polymericcomposites.org"
                      className="text-blue-500 underline"
                    >
                      {" "}
                      symposium@polymericcomposites.org
                    </a>{" "}
                    {content[language].deadline} <strong>6th June 2025</strong>.
                  </li>
                  <li>
                    {content[language].ensureGuidelines}
                  </li>
                </ul>
              </section>

              {/* Additional Notes Section */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {content[language].additionalNotes}
                </h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>{content[language].graphicalAbstracts}</li>
                  <li>
                    {content[language].presentations}
                  </li>
                  <li>
                    {content[language].translation}
                  </li>
                </ul>
              </section>

              {/* Download Templates */}
              <div className="mt-8 text-center space-y-4">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/abstract-template.docx"
                    className="inline-block bg-red-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition duration-300"
                    download="abstract-template.docx"
                  >
                    {content[language].downloadAbstract}
                  </a>
                  <a
                    href="/poster_template.pdf"
                    className="inline-block bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
                    download="poster_template.pdf"
                  >
                    {content[language].downloadPoster}
                  </a>
                </div>
              </div>

              {/* Poster Awards Section */}
              <section className="mt-12 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  {content[language].posterAwards}
                </h2>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 space-y-4">
                  <p className="text-gray-700 font-semibold">
                    {content[language].dearParticipant}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    {content[language].posterAwardsDesc}
                  </p>
                  <div className="bg-white rounded-lg p-4 space-y-2">
                    <p className="text-gray-800 font-semibold">{content[language].firstPrize}</p>
                    <p className="text-gray-800 font-semibold">{content[language].secondPrize}</p>
                    <p className="text-gray-800 font-semibold">{content[language].thirdPrize}</p>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {content[language].posterRequirements}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    {content[language].announcementInfo}
                  </p>
                  <p className="text-gray-700 leading-relaxed font-semibold">
                    {content[language].thankYou}
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
