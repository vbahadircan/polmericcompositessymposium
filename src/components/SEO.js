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

  return (
    <Helmet>
      <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title || siteTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={ogImage || '/symposium_og_image.jpg'} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || siteTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={ogImage || '/symposium_og_image.jpg'} />

      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Additional SEO meta tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="Chamber of Chemical Engineers" />
    </Helmet>
  );
} 