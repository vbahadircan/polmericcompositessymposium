import React from 'react';

const keyDates = [
    { event: "Submission of Abstracts", date: "06.06.2025" },
    { event: "Deadline for Early Registration", date: "28.07.2025" },
    { event: "Announcement of Accepted Papers", date: "01.07.2025" },
    { event: "Submission of Full Proceedings", date: "15.08.2025" },
    { event: "Deadline for Sponsorship and Advertisement Applications", date: "15.09.2025" },
    { event: "Deadline for Workshop Applications", date: "01.09.2025" },
];

export default function KeyDates() {
    return (
        <section className="w-full bg-gray-100 py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Key Dates</h2>
                <div className="relative flex flex-col items-center">
                    {/* Vertical timeline line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300 z-0" style={{ top: 0, bottom: 0 }} />
                    <div className="space-y-12 w-full">
                        {keyDates.map((item, index) => (
                            <div key={index} className={`relative flex items-center w-full ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`} style={{ minHeight: '120px' }}>
                                {/* Timeline circle */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                                    <div className="w-6 h-6 bg-white border-4 border-blue-700 rounded-full flex items-center justify-center" />
                                </div>
                                {/* Card */}
                                <div className={`bg-white shadow-lg rounded-lg p-6 max-w-md w-full ${index % 2 === 0 ? 'mr-16 ml-0 text-right' : 'ml-16 mr-0 text-left'}`}
                                    style={{ zIndex: 20 }}
                                >
                                    <div className="text-xl font-bold text-blue-900 mb-2">{item.event}</div>
                                    <div className="text-gray-700 font-semibold">{item.date}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
