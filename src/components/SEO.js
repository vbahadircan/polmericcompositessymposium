import React from 'react';
import { Helmet } from 'react-helmet';

export default function SEO({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage
}) {
  const siteTitle = "6th International Polymeric Composites Symposium and Workshops";
  const defaultDescription = "Join us at the 6th International Polymeric Composites Symposium and Workshops in Izmir, Türkiye. October 2–4, 2025. Latest research and developments in polymeric composites.";
  const defaultKeywords = "polymeric composites, symposium, workshops, Izmir, Türkiye, composites research, materials science";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": siteTitle,
    "startDate": "2025-10-02",
    "endDate": "2025-10-04",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "eventStatus": "https://schema.org/EventScheduled",
    "location": {
      "@type": "Place",
      "name": "Tepekule Convention and Exhibition Centre",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Anadolu Cd. No:40, Bayraklı",
        "addressLocality": "Izmir",
        "postalCode": "35530",
        "addressRegion": "Izmir",
        "addressCountry": "TR"
      }
    },
    "image": [
      "https://www.polymericcomposites.org/assets/images/symposium_og_image.jpg"
    ],
    "description": description || defaultDescription,
    "organizer": {
      "@type": "Organization",
      "name": "Chamber of Chemical Engineers",
      "url": "https://www.polymericcomposites.org"
    },
    "url": "https://www.polymericcomposites.org"
  };

  return (
    <Helmet htmlAttributes={{ lang: 'en' }}>
      <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title || siteTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={ogImage || '/symposium_og_image.jpg'} />

      <meta name="viewport" content="width=device-width, initial-scale=1" />


      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || siteTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={ogImage || '/symposium_og_image.jpg'} />

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta property="og:locale" content="en_US" />

      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Additional SEO meta tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="Chamber of Chemical Engineers" />
      <meta property="og:image" content="https://www.polymericcomposites.org/assets/symposium_og_image.jpg" />
      <meta name="twitter:image" content="https://www.polymericcomposites.org/assets/symposium_og_image.jpg" />

      <link rel="icon" href="/favicon.ico" />

      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

    </Helmet>
  );
} 