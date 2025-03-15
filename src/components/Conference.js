import React from 'react';
import SEO from './SEO';

export default function Conference() {
  const previousEvents = [
    { year: 2006, date: "17-19 November", title: "1st National Polymeric Composites Symposium and Exhibition", place: "Tepekule Convention and Exhibition Center, İzmir" },
    { year: 2008, date: "28-30 November", title: "International Polymeric Composites Symposium-Exhibition and Workshop", place: "Tepekule Convention and Exhibition Center, İzmir" },
    { year: 2010, date: "26-28 November", title: "2nd Polymeric Composites Symposium, Exhibition and Brokerage Event", place: "Tepekule Convention and Exhibition Center, İzmir" },
    { year: 2012, date: "9-11 November", title: "3rd International Polymeric Composites Symposium, Exhibition and Workshop", place: "Tepekule Convention and Exhibition Center, İzmir" },
    { year: 2015, date: "3-5 November", title: "4th International Polymeric Composites Symposium, Exhibition and Brokerage Event", place: "Çeşme Altınyunus Resort Hotel, İzmir" },
    { year: 2017, date: "2-4 November", title: "5th International Polymeric Composites Symposium and Workshops", place: "Tepekule Convention and Exhibition Center, İzmir" },
  ];

  const keyDates = [
    { event: "Submission of Abstracts", date: "01.05.2025" },
    { event: "Deadline for Early Registration", date: "31.05.2025" },
    { event: "Announcement of Accepted Papers", date: "15.06.2025" },
    { event: "Submission of Full Proceedings", date: "15.08.2025" },
    { event: "Deadline for Sponsorship and Advertisement Applications", date: "15.09.2025" },
    { event: "Deadline for Workshop Applications", date: "01.09.2025" },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <SEO
        title="Conference Information"
        description="Learn about the 6th International Polymeric Composites Symposium schedule, themes, and program details. Join industry leaders and researchers in İzmir for cutting-edge discussions on composite materials."
        keywords="polymeric composites conference, materials science symposium, composite research presentations, İzmir conference 2025"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Title Section with Background Image */}
          <div
            className="relative bg-cover bg-center h-80 flex items-center justify-center"
            style={{ backgroundImage: "url('/conferencebg.jpg')" }} // Make sure the image is in the public folder
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Dark Overlay */}
            <h1 className="relative text-4xl font-bold text-white text-center px-4">
              6th INTERNATIONAL POLYMERIC COMPOSITES SYMPOSIUM AND WORKSHOPS
            </h1>
          </div>

          {/* Content Section */}
          <div className="px-6 py-8">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Aim</h2>
              <p className="text-gray-700">
                The aim of the IPC 2025 symposium is to share scientific and technical knowledge in the fields of polymeric composite materials production, usage, and development on national and international platforms, as well as to identify and solve challenges encountered in transforming science into practice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Mission</h2>
              <p className="text-gray-700">
                The Chamber of Chemical Engineers (CCE) organizes the Polymeric Composite Materials Symposium and its associated exhibitions, workshops, and brokerage activities. This initiative is coordinated by the CCE Aegean Branch Office, in collaboration with industry and scientific communities, to foster knowledge sharing and cooperation.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Vision</h2>
              <p className="text-gray-700">
                Polymeric composites, introduced in the 20th century, have gained increasing importance globally and in Turkey. These materials are technological innovations widely used in industries and daily life, shaping the future. The CCE Aegean Branch aims to elevate its scientific and technical platform, established since 2006, to an international level by hosting the 2025 symposium in collaboration with the Turkish Composite Manufacturers Association.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Previous Events</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Year</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Place</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {previousEvents.map((event, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{event.year}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{event.date}</td>
                        <td className="px-6 py-4 text-sm text-gray-500">{event.title}</td>
                        <td className="px-6 py-4 text-sm text-gray-500">{event.place}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
