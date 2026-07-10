import { business } from "@/data/business.config";
import { DAY_ORDER, formatHoursLabel } from "@/lib/theme";

export function JsonLd() {
  const openingHours = DAY_ORDER.filter(
    (d) => business.hours[d] && business.hours[d] !== "Closed",
  ).map((d) => {
    const label = formatHoursLabel(d).slice(0, 2);
    const range = business.hours[d].replace("–", "-");
    return `${label} ${range}`;
  });

  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: business.name,
    description: business.description,
    telephone: business.phone,
    email: business.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address,
      addressLocality: business.suburb,
      addressRegion: "QLD",
      addressCountry: "AU",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.coordinates.lat,
      longitude: business.coordinates.lng,
    },
    aggregateRating:
      business.rating > 0
        ? {
            "@type": "AggregateRating",
            ratingValue: business.rating,
            reviewCount: business.reviewCount,
          }
        : undefined,
    openingHours,
    image: business.gallery[0]?.src,
    url: process.env.NEXT_PUBLIC_SITE_URL,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
