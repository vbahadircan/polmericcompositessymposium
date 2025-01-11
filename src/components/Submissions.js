import React from 'react'
import SEO from './SEO'

export default function Submissions() {
  return (
    <>
      <SEO 
        title="Submit Your Research"
        description="Submit your research papers and abstracts for the 6th International Polymeric Composites Symposium. Guidelines, deadlines, and submission process for presenting at the conference."
        keywords="abstract submission, research papers, polymeric composites research, conference papers, submission guidelines"
      />
      <div className="bg-gray-100 min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Submission Guidelines</h2>
                
                  <li><strong>Submit the Abstract document to symposium@polymericcomposites.org by 1st May 2025</strong></li>
                  <div className="mt-8 text-center">
                <a
                  href="/abstract-template.docx"
                  className="inline-block bg-red-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition duration-300"
                  download="abstract-template.docx" // Provides a default filename when downloading
                >
                  Download Abstract Template (.docx)
                </a>
              </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

