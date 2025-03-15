import React from 'react'
import SEO from './SEO'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default function Venue() {
  return (
    <>
      <SEO
        title="Venue Information"
        description="The symposium will be held at Tepekule Convention Centre in İzmir, Turkey. Find detailed information about the venue, accommodation options, and local attractions."
        keywords="Tepekule Convention Centre, İzmir venue, conference location, symposium venue, accommodation"
      />
      <div className="bg-gray-100 min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <VenueDetails />
              <AboutVenue />
              <VenueMap />
              <VenueGallery />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function VenueDetails() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Venue</h2>
      <p className="text-gray-700 mb-2"><strong>Tepekule Convention and Exhibition Centre</strong> </p>
      <p className="text-gray-700 mb-2"><strong>Address:</strong> Alsancak, 1441. Sk. No:4 D:5, 35220 Konak/İzmir, Türkiye</p>
      <p className="text-gray-700 mb-2"><strong>Dates:</strong> October 2–4, 2025</p>
    </section>
  )
}

function AboutVenue() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">About the Venue</h2>
      <p className="text-gray-700">
        The Tepekule Convention and Exhibition Centre is located in İzmir, Türkiye, offering state-of-the-art facilities for hosting international symposiums and workshops. It provides a professional setting ideal for fostering collaboration and innovation.
      </p>
    </section>
  )
}

/*
"https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d29728.44374694756!2d27.16000308217265!3d38.4456790518541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sTepekule%20I%C5%9F%20Merkezi%20yak%C4%B1n%C4%B1ndaki%20oteller!5e0!3m2!1str!2str!4v1742028949922!5m2!1str!2str"
*/


function VenueMap() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Map</h2>
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14863.253608555311!2d27.159070570876295!3d38.450380074574745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd807b3e45807%3A0xd98c196a9050774e!2sTepekule%20I%C5%9F%20Merkezi!5e0!3m2!1str!2str!4v1742017310311!5m2!1str!2str"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Venue Map"
        ></iframe>
      </div>
    </section>
  );
}


function VenueGallery() {
  // Automatically generate image paths from 1.jpg to 21.jpg
  const images = Array.from({ length: 21 }, (_, i) => `/${i + 1}.jpg`);

  return (
    <section className="mb-8 mt-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Venue Gallery</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        className="rounded-lg overflow-hidden"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-[500px]">
              <img
                src={src}
                alt={`Venue Image ${index + 1}`}
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}


