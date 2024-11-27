import React from 'react'

export default function Submissions() {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Submission Guidelines</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Languages:</strong> Submissions must be prepared in both Turkish and English.</li>
                <li><strong>Abstract Length:</strong>
                  <ul className="list-disc list-inside ml-4 mt-2">
                    <li>At least 200 words in each language.</li>
                    <li>Should not exceed two pages.</li>
                  </ul>
                </li>
                <li><strong>Formatting:</strong>
                  <ul className="list-disc list-inside ml-4 mt-2">
                    <li>A4 format with 5 cm top/bottom margins and 4 cm side margins.</li>
                    <li>Use "Times New Roman" font, size 12, single line spacing.</li>
                    <li>Titles should be bold, centered, and written in both Turkish and English.</li>
                    <li>Leave one blank line between the title and author information.</li>
                  </ul>
                </li>
                <li><strong>Content:</strong>
                  <ul className="list-disc list-inside ml-4 mt-2">
                    <li>Abstracts should include:
                      <ul className="list-disc list-inside ml-4 mt-2">
                        <li>Aim</li>
                        <li>Material and Method</li>
                        <li>Discussion and Recommendations</li>
                        <li>Results</li>
                      </ul>
                    </li>
                    <li>Include at least three keywords.</li>
                  </ul>
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Important Dates</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Abstract Submission Deadline:</strong> June 17, 2025</li>
                <li><strong>Announcement of Accepted Papers:</strong> July 15, 2025</li>
                <li><strong>Full Paper Submission Deadline:</strong> August 15, 2025</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Submission Process</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Submit your abstracts to:
                  <ul className="list-disc list-inside ml-4 mt-2">
                    <li><strong>Email:</strong> symposium@polymericcomposites.org</li>
                  </ul>
                </li>
                <li>Ensure all submissions adhere to the guidelines and deadlines provided.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Additional Notes</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Graphical summaries can be included optionally.</li>
                <li>Presentation slides for accepted papers should be prepared in English.</li>
                <li>Simultaneous translation will be provided during symposium presentations.</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

