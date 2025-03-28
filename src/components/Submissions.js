import React from 'react';
import SEO from './SEO';

export default function Submissions() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Submissions Information</h1>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              {/* Submission Guidelines Section */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Submission Guidelines</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>
                    <strong>Languages:</strong> Turkish participants must submit abstracts in both Turkish and English.
                    Foreign participants may submit abstracts in English only.
                  </li>
                  <li><strong>Abstract Length:</strong> Min 500 words in each language.</li>
                  <li><strong>Formatting Requirements:</strong>
                    <ul className="list-disc list-inside ml-4 mt-2">
                      <li>A4 format with 5 cm top/bottom margins and 4 cm side margins.</li>
                      <li>Use "Times New Roman" font, size 12, double line spacing.</li>
                      <li>Title should be bold, centered, and written in both languages.</li>
                      <li>Leave one blank line between the title and author information.</li>
                    </ul>
                  </li>
                  <li><strong>Content Requirements:</strong>
                    <ul className="list-disc list-inside ml-4 mt-2">
                      <li>The abstract must include:
                        <ul className="list-disc list-inside ml-4 mt-2">
                          <li>Aim</li>
                          <li>Material and Method</li>
                          <li>Discussion and Recommendations</li>
                          <li>Results</li>
                        </ul>
                      </li>
                      <li>Include at least three and up to five keywords.</li>
                    </ul>
                  </li>
                </ul>
              </section>

              {/* Conference Proceedings Book Announcement Section */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Conference Proceedings Book Announcement</h2>
                <div className="bg-white shadow-md rounded-xl p-4 border border-gray-200">
                  <p className="text-gray-700 mb-4">
                    You can view the official announcement for the Conference Proceedings Book by clicking the button below:
                  </p>
                  <a
                    href="/announcement.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-red-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
                  >
                    View Proceedings Book Announcement
                  </a>
                </div>
              </section>



              {/* Submission Process Section */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Submission Process</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Submit your abstract document via email to:
                    <a href="mailto:symposium@polymericcomposites.org" className="text-blue-500 underline"> symposium@polymericcomposites.org</a> by <strong>1st May 2025</strong>.
                  </li>
                  <li>Ensure that all guidelines and formatting requirements are met before submission.</li>
                </ul>
              </section>

              {/* Additional Notes Section */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Additional Notes</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Graphical abstracts are optional but recommended.</li>
                  <li>Accepted presentations must prepare slides in English or Turkish.</li>
                  <li>Simultaneous translation will be provided during symposium sessions.</li>
                </ul>
              </section>

              {/* Download Abstract Template */}
              <div className="mt-8 text-center">
                <a
                  href="/abstract-template.docx"
                  className="inline-block bg-red-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition duration-300"
                  download="abstract-template.docx"
                >
                  Download Abstract Template (.docx)
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
