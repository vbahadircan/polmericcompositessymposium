import React from 'react'

export default function SpeakerModal({ isOpen, onClose, speaker }) {
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
            <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-lg shadow-lg">
                {/* Background image for antetli kağıt */}
                <div
                    className="absolute inset-0 bg-no-repeat bg-top bg-contain opacity-10 pointer-events-none"
                    style={{
                        backgroundImage: "url('/17.jpg')", // 👈 buraya antetli görsel yolu
                        backgroundSize: 'contain',
                        backgroundPosition: 'top center',
                    }}
                ></div>

                {/* Content with padding above background */}
                <div className="relative bg-white p-8">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl font-bold z-10"
                    >
                        &times;
                    </button>

                    {/* Antet başlık kısmı */}
                    <div className="text-center mb-6 border-b pb-4">
                        <h2 className="text-xl font-bold uppercase text-gray-700">
                            6th International Polymeric Composites Symposium and Workshops
                        </h2>
                        <p className="text-sm text-gray-500 italic">2–4 October 2025 – Tepekule, Izmir, Turkey</p>
                    </div>

                    {/* Bio content */}
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{speaker.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">{speaker.title}</p>

                    <div className="text-gray-800 space-y-4 text-justify z-10 relative">
                        {speaker.bio.split('\n').map((para, i) => (
                            <p key={i}>{para.trim()}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
