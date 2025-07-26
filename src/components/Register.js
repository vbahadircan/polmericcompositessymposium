import React, { useState } from 'react'
import SEO from './SEO'

export default function Register() {
  const [language, setLanguage] = useState('en');

  const content = {
    en: {
      title: "Registration",
      symposiumFees: "Symposium Fees",
      category: "Category",
      standard: "Standard",
      earlyBird: "Early Bird",
      regularParticipant: "Regular Participant",
      academicParticipant: "Academic Participant",
      unemployedPhD: "Unemployed PhD / Master's degree students",
      unemployedStudent: "Unemployed Graduate / Undergraduate Student",
      internationalParticipants: "International Participants",
      dailyParticipation: "Daily Participation",
      workshopParticipants: "Workshop Participants",
      turkishLira: "TL (Turkish Lira)",
      documentRequired: "Please be advised that",
      theDocument: "the document",
      requiredForDiscount: "required for the granting of a discount is mandatory.",
      note: "Note:",
      feesInclude: "The fees include abstract booklet, coffee and tea services, lunches.",
      paymentInstructions: "Payment Instructions",
      accountName: "Account Name:",
      bank: "Bank:",
      accountNumber: "Account Number:",
      participantsShould: "Participants should:",
      completeForm: "Complete the registration form.",
      sendForm: "Send the completed form and a copy of the payment receipt to the symposium secretariat.",
      submissionDetails: "Submission Details",
      email: "Email:",
      fax: "Fax:",
      address: "Address:",
      howToRegister: "How to Register",
      downloadForm: "Download the registration form.",
      fillFields: "Fill out all required fields.",
      submitForm: "Submit the completed form along with proof of payment via email or fax.",
      downloadRegistration: "Download Registration Form (.docx)"
    },
    tr: {
      title: "Kayıt",
      symposiumFees: "Sempozyum Ücretleri",
      category: "Kategori",
      standard: "Standart",
      earlyBird: "Erken Kayıt",
      regularParticipant: "Düzenli Katılımcı",
      academicParticipant: "Akademik Katılımcı",
      unemployedPhD: "İşsiz Doktora / Yüksek Lisans Öğrencisi",
      unemployedStudent: "İşsiz Lisans / Lisans Öncesi Öğrenci",
      internationalParticipants: "Uluslararası Katılımcılar",
      dailyParticipation: "Günlük Katılım",
      workshopParticipants: "Çalıştay Katılımcıları",
      turkishLira: "TL (Türk Lirası)",
      documentRequired: "Lütfen dikkat ediniz ki",
      theDocument: "belge",
      requiredForDiscount: "indirim verilmesi için gereklidir.",
      note: "Not:",
      feesInclude: "Ücretlere özet kitapçığı, çay ve kahve hizmetleri, öğle yemekleri dahildir.",
      paymentInstructions: "Ödeme Talimatları",
      accountName: "Hesap Adı:",
      bank: "Banka:",
      accountNumber: "Hesap Numarası:",
      participantsShould: "Katılımcılar şunları yapmalıdır:",
      completeForm: "Kayıt formunu doldurun.",
      sendForm: "Doldurulmuş formu ve ödeme makbuzunun bir kopyasını sempozyum sekreterliğine gönderin.",
      submissionDetails: "Gönderim Detayları",
      email: "E-posta:",
      fax: "Faks:",
      address: "Adres:",
      howToRegister: "Nasıl Kayıt Olunur",
      downloadForm: "Kayıt formunu indirin.",
      fillFields: "Tüm gerekli alanları doldurun.",
      submitForm: "Doldurulmuş formu ödeme kanıtı ile birlikte e-posta veya faks ile gönderin.",
      downloadRegistration: "Kayıt Formunu İndir (.docx)"
    }
  };

  return (
    <>
      <SEO
        title="Registration"
        description="Register for the 6th International Polymeric Composites Symposium. Early bird rates available. Join academics, industry professionals, and researchers from around the world."
        keywords="conference registration, symposium registration, early bird registration, polymeric composites event"
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

          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{content[language].symposiumFees}</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="py-3 px-4 border-b text-left">{content[language].category}</th>
                        <th className="py-3 px-4 border-b text-left">{content[language].standard}</th>
                        <th className="py-3 px-4 border-b text-left">{content[language].earlyBird}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-3 px-4 border-b"><strong>{content[language].regularParticipant}</strong></td>
                        <td className="py-3 px-4 border-b">6000 {content[language].turkishLira}</td>
                        <td className="py-3 px-4 border-b">4800 TL</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 border-b"><strong>{content[language].academicParticipant}</strong></td>
                        <td className="py-3 px-4 border-b">4000 TL</td>
                        <td className="py-3 px-4 border-b">3200 TL</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 border-b"><strong>{content[language].unemployedPhD}<sup>*</sup></strong></td>
                        <td className="py-3 px-4 border-b">1000 TL</td>
                        <td className="py-3 px-4 border-b">800 TL</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 border-b"><strong>{content[language].unemployedStudent}<sup>*</sup></strong></td>
                        <td className="py-3 px-4 border-b" colSpan="2">500 TL</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 border-b"><strong>{content[language].internationalParticipants}</strong></td>
                        <td className="py-3 px-4 border-b">€300</td>
                        <td className="py-3 px-4 border-b">€240</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 border-b"><strong>{content[language].dailyParticipation}</strong></td>
                        <td className="py-3 px-4 border-b" colSpan="2">3000 TL</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 border-b"><strong>{content[language].workshopParticipants}</strong></td>
                        <td className="py-3 px-4 border-b">€200</td>
                        <td className="py-3 px-4 border-b">€160</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-gray-700">
                  <strong><sup>*</sup></strong> {content[language].documentRequired}{" "}
                  <a href="/kvkk.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline mx-1">
                    {content[language].theDocument}
                  </a>{" "}
                  {content[language].requiredForDiscount}<br />
                  <strong>{content[language].note}</strong> {content[language].feesInclude}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{content[language].paymentInstructions}</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li><strong>{content[language].accountName}</strong> TMMOB Kimya Mühendisleri Odası</li>
                  <li><strong>{content[language].bank}</strong> Türkiye İş Bankası Alsancak Şubesi</li>
                  <li><strong>{content[language].accountNumber}</strong> 3401-632101</li>
                  <li><strong>IBAN:</strong> TR56 0006 4000 0013 4010 6321 01</li>
                </ul>
                <p className="mt-4 text-gray-700">
                  {content[language].participantsShould}
                </p>
                <ol className="list-decimal list-inside text-gray-700 mt-2 space-y-2">
                  <li>{content[language].completeForm}</li>
                  <li>{content[language].sendForm}</li>
                </ol>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{content[language].submissionDetails}</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li><strong>{content[language].email}</strong> <a href="mailto:symposium@polymericcomposites.org" className="text-blue-500 underline">symposium@polymericcomposites.org</a></li>
                  <li><strong>{content[language].fax}</strong> +90 232 464 59 08</li>
                  <li>
                    <strong>{content[language].address}</strong> TMMOB Kimya Mühendisleri Odası Ege Bölge Şubesi, 1441 Sokak No: 4 Kat: 3 D: 5, Alsancak, Izmir, Türkiye
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{content[language].howToRegister}</h2>
                <ol className="list-decimal list-inside text-gray-700 space-y-2">
                  <li>{content[language].downloadForm}</li>
                  <li>{content[language].fillFields}</li>
                  <li>{content[language].submitForm}</li>
                </ol>
              </section>

              <div className="mt-8 text-center">
                <a
                  href="/registration-form.docx"
                  className="inline-block bg-red-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition duration-300"
                  download="Registration_Form.docx"
                >
                  {content[language].downloadRegistration}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

