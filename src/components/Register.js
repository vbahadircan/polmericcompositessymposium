import React from 'react'
import SEO from './SEO'

export default function Register() {
  return (
    <>
      <SEO
        title="Registration"
        description="Register for the 6th International Polymeric Composites Symposium. Early bird rates available. Join academics, industry professionals, and researchers from around the world."
        keywords="conference registration, symposium registration, early bird registration, polymeric composites event"
      />
      <div className="bg-gray-100 min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Symposium Fees</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li><strong>Regular Participant:</strong> 6000 TL (Turkish Lira)</li>
                  <li><strong>Academic Participant:</strong> 4000TL </li>
                  <li><strong>Graduate / Undergraduate Student:</strong> 1000TL </li>
                  <li><strong>International Participants:</strong> €300 </li>
                  <li><strong>Daily Participation:</strong> 3000TL</li>
                  <li><strong>Workshop Participants:</strong> TBD</li>
                </ul>
                <p className="mt-4 text-gray-700">
                  <strong>Note:</strong> The fees include abstract booklet, coffee and tea services, lunches.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Instructions</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li><strong>Account Name:</strong> TMMOB Kimya Mühendisleri Odası</li>
                  <li><strong>Bank:</strong> Türkiye İş Bankası Alsancak Şubesi</li>
                  <li><strong>Account Number:</strong> 3401-632101</li>
                  <li><strong>IBAN:</strong> TR56 0006 4000 0013 4010 6321 01</li>
                </ul>
                <p className="mt-4 text-gray-700">
                  Participants should:
                </p>
                <ol className="list-decimal list-inside text-gray-700 mt-2 space-y-2">
                  <li>Complete the registration form.</li>
                  <li>Send the completed form and a copy of the payment receipt to the symposium secretariat.</li>
                </ol>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Submission Details</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li><strong>Email:</strong> <a href="mailto:symposium@polymericcomposites.org" className="text-blue-500 underline">symposium@polymericcomposites.org</a></li>
                  <li><strong>Fax:</strong> +90 232 464 59 08</li>
                  <li>
                    <strong>Address:</strong> TMMOB Kimya Mühendisleri Odası Ege Bölge Şubesi, 1441 Sokak No: 4 Kat: 3 D: 5, Alsancak, Izmir, Türkiye
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Register</h2>
                <ol className="list-decimal list-inside text-gray-700 space-y-2">
                  <li>Download the registration form.</li>
                  <li>Fill out all required fields.</li>
                  <li>Submit the completed form along with proof of payment via email or fax.</li>
                </ol>
              </section>

              <div className="mt-8 text-center">
                <a
                  href="/registration-form.docx"
                  className="inline-block bg-red-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition duration-300"
                  download="Registration_Form.docx" // Provides a default filename when downloading
                >
                  Download Registration Form (.docx)
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

