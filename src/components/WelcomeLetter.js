import React from 'react'

export default function WelcomeLetter() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">Welcome Letter</h2>
            <div className="prose prose-xl mx-auto space-y-6">
              <p className="mb-4">Dear Colleagues,</p>

              <p className="mb-4">We are delighted to invite our esteemed colleagues in polymeric composites to the 6th International Polymeric Composites (IPC) Symposium and Workshops, which will be held in the historic and industrial city of Izmir, Türkiye, from October 2-4, 2025.</p>

              <p className="mb-4">Izmir is a city steeped in thousands of years of heritage, located near world-renowned archaeological sites such as Ephesus and Pergamon. Serving as a historical trade and economic hub, it has long connected Europe, Asia, and North Africa.</p>

              <p className="mb-4">The IPC Symposium series, which began in 2006, has consistently been organized in collaboration with industrial partners and academic institutions. This 6th edition, in October 2025, will continue this tradition. Originally initiated by the Chamber of Chemical Engineers, Türkiye, the symposium is now co-hosted by the Turkish Composite Manufacturing Association.</p>

              <p className="mb-4">The theme for this year's symposium, "Future in Composite Materials: Sustainable, High-Performance, Digitally-Driven Applications," underscores the importance of sustainability and high performance in composite materials, while embracing the transformative potential of digital innovation. The program will comprehensively cover all aspects of composite materials, with a particular focus on bio-based composites, energy-efficient production, advanced composites and recycling. Attendees can look forward to focused lectures, engaging roundtables, dynamic workshops, and interactive sessions.</p>

              <p className="mb-4">As Chairs of this symposium, we warmly invite you to this significant event to connect with esteemed professionals from both academia and industry. Together, we will explore the latest trends and share insights about the future of polymeric composites.</p>

              <p className="mb-4">This three-day event will feature stimulating discussions led by global experts in the field. Additionally, participants will have the opportunity to engage in a hands-on workshop showcasing cutting-edge composite technologies from leading companies.</p>

              <p className="mb-4">Izmir, with its vibrant coastal charm, rich cultural festivals, and iconic landmarks such as the ancient city of Ephesus, offers a unique blend of historical allure and modern innovation. Its expertise in polymer and composite manufacturing, alongside strengths in trade, tourism, and renewable energy, makes it an ideal host for this prestigious event.</p>

              <p className="mb-4">We eagerly look forward to welcoming you to Izmir—a city that celebrates both its remarkable heritage and forward-looking vision in the field of composites.</p>

              <p className="mb-4">Warm regards,</p>

              <p className="mb-4">The Conference Chairs</p>

              <div className="flex justify-between mt-12">
                <div>
                  <p className="font-semibold">Prof. Dr. Metin Tanoğlu</p>
                  <p>Izmir Institute of Technology</p>
                </div>
                <div>
                  <p className="font-semibold">Prof.Dr. M.Özgür Seydibeyoğlu</p>
                  <p>Izmir Katip Celebi University</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

