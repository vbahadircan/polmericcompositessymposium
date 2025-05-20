import React from 'react';

const keyDates = [
    { event: "Submission of Abstracts", date: "06.06.2025" },
    { event: "Deadline for Early Registration", date: "01.07.2025" },
    { event: "Announcement of Accepted Papers", date: "20.06.2025" },
    { event: "Submission of Full Proceedings", date: "15.08.2025" },
    { event: "Deadline for Sponsorship and Advertisement Applications", date: "15.09.2025" },
    { event: "Deadline for Workshop Applications", date: "01.09.2025" },
];

export default function KeyDates() {
    return (
        <section className="w-full bg-gray-100 py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-semibold text-gray-900 mb-4 text-center">Key Dates</h2>
                <ul className="bg-white shadow-lg rounded-lg p-6">
                    {keyDates.map((item, index) => (
                        <li key={index} className="flex justify-between items-center border-b border-gray-200 py-2 last:border-b-0">
                            <span className="text-gray-700">{item.event}</span>
                            <span className="text-gray-500 font-medium">{item.date}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
