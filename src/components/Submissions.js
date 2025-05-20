import React from "react";
import SEO from "./SEO";

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
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Submissions Information
          </h1>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              {/* Submission Guidelines Section */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Submission Guidelines
                </h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>
                    <strong>Languages:</strong> Turkish participants must submit
                    abstracts in both Turkish and English. Foreign participants
                    may submit abstracts in English only.
                  </li>
                  <li>
                    <strong>Abstract Length:</strong> Max 500 words in each
                    language.
                  </li>
                  <li>
                    <strong>Formatting Requirements:</strong>
                    <ul className="list-disc list-inside ml-4 mt-2">
                      <li>
                        A4 format with 5 cm top/bottom margins and 4 cm side
                        margins.
                      </li>
                      <li>
                        Use "Times New Roman" font, size 12, double line
                        spacing.
                      </li>
                      <li>
                        Title should be bold, centered, and written in both
                        languages.
                      </li>
                      <li>
                        Leave one blank line between the title and author
                        information.
                      </li>
                    </ul>
                  </li>
                </ul>
              </section>

              {/* Springer Nature Proceedings Section */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Call for Full Paper Submissions – Springer Proceedings
                </h2>

                <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6 space-y-4">
                  <div className="flex items-center space-x-4">
                    <img
                      src="/springernature.png"
                      alt="Springer Nature Logo"
                      className="w-48 h-auto"
                    />
                    <p className="text-gray-700">
                      We are pleased to announce that abstract submissions are
                      now open for the proceedings of the{" "}
                      <strong>
                        6th International Polymeric Composites Symposium and
                        Workshops
                      </strong>
                      . Upon abstract submission and acceptance, authors will
                      have the opportunity to submit full papers for the
                      proceedings book.
                      <br />
                      Selected papers, following a peer-review process, will be
                      published <strong>free of charge</strong> in the{" "}
                      <a
                        href="https://www.springer.com/series/16157"
                        className="text-blue-600 underline"
                        target="_blank"
                      >
                        Springer Proceedings in Materials
                      </a>{" "}
                      series.
                    </p>
                  </div>

                  <div className="text-gray-700">
                    <h3 className="text-lg font-semibold mt-4 mb-2">
                      Important Dates
                    </h3>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>
                        <strong>Submission of Abstracts:</strong> 16.05.2025
                      </li>
                      <li>
                        <strong>Announcement of Accepted Papers:</strong>{" "}
                        15.06.2025
                      </li>
                      <li>
                        <strong>Submission of Full Proceedings:</strong>{" "}
                        15.08.2025
                      </li>
                    </ul>
                  </div>

                  <p className="text-gray-700">
                    For detailed instructions for authors of conference
                    proceedings, kindly visit:{" "}
                    <a
                      href="https://www.springer.com/us/authors-editors/conference-proceedings"
                      target="_blank"
                      className="text-blue-600 underline"
                    >
                      https://www.springer.com/us/authors-editors/conference-proceedings
                    </a>
                  </p>

                  <p className="text-gray-700">
                    For inquiries, please contact us at:{" "}
                    <a
                      href="mailto:info@polymericcomposites.org"
                      className="text-blue-600 underline"
                    >
                      info@polymericcomposites.org
                    </a>
                  </p>

                  <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-md border border-gray-200">
                    <strong>Disclaimer:</strong> It is planned to publish the
                    peer-reviewed and selected papers of the conference as
                    proceedings with Springer in their prestigious “Springer
                    Proceedings in Materials” series. Springer will conduct
                    quality checks on the accepted papers, and only papers that
                    pass these checks will be published.
                    <br />
                    Springer Nature does not charge any money for the
                    publication of Non-Open Access content.
                    <br />
                    <strong>Note:</strong> Abstracts/extended abstracts and
                    short papers (less than 4 pages) are not considered for
                    publication.
                  </div>
                </div>
              </section>

              {/* Submission Process Section */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Submission Process
                </h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>
                    Submit your abstract document via email to:
                    <a
                      href="mailto:symposium@polymericcomposites.org"
                      className="text-blue-500 underline"
                    >
                      {" "}
                      symposium@polymericcomposites.org
                    </a>{" "}
                    by <strong>1st May 2025</strong>.
                  </li>
                  <li>
                    Ensure that all guidelines and formatting requirements are
                    met before submission.
                  </li>
                </ul>
              </section>

              {/* Additional Notes Section */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Additional Notes
                </h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Graphical abstracts are optional but recommended.</li>
                  <li>
                    Accepted presentations must prepare slides in English or
                    Turkish.
                  </li>
                  <li>
                    Simultaneous translation will be provided during symposium
                    sessions.
                  </li>
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
