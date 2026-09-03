import { MapPin, MessageCircle, Phone } from "lucide-react";

const PHONE_INTL = "919101376268";
const PHONE_DISPLAY = "091013 76268";
const CLUB_NAME = "Sky Lifting Club";
const ADDRESS = {
  street: "Barnarddi",
  locality: "Nalbari",
  region: "Assam",
  postalCode: "781303",
  country: "IN",
};

/**
 * Approximate coordinates for the Nalbari area (OpenStreetMap district centroid).
 * Replace with exact gym coordinates once they are available.
 */
const MAP_CENTER = { lat: "26.3533632", lng: "91.3983662" };

function whatsappUrl(text: string) {
  return `https://wa.me/${PHONE_INTL}?text=${encodeURIComponent(text)}`;
}

/**
 * Location & Contact section for Sky Lifting Club.
 *
 * - Black background matching the rest of the site.
 * - Semantic address markup and LocalBusiness JSON-LD for local SEO.
 * - Accessible Call, WhatsApp, and Get Directions buttons.
 * - Responsive two-column layout with an OpenStreetMap embed (no API key,
 *   lightweight and Cloudflare-compatible).
 */
export function Location() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: CLUB_NAME,
    telephone: `+${PHONE_INTL}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: ADDRESS.locality,
      addressRegion: ADDRESS.region,
      addressCountry: ADDRESS.country,
      postalCode: ADDRESS.postalCode,
      streetAddress: ADDRESS.street,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: MAP_CENTER.lat,
      longitude: MAP_CENTER.lng,
    },
    url: "https://sky-lifting-club.lovable.app",
  };

  const genericWhatsAppMsg = `Hi ${CLUB_NAME}, I'm interested in joining. Please share details.`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    `${CLUB_NAME}, ${ADDRESS.street}, ${ADDRESS.locality}, ${ADDRESS.region} ${ADDRESS.postalCode}, ${ADDRESS.country}`,
  )}`;

  return (
    <section
      id="location"
      aria-labelledby="location-heading"
      className="bg-surface-pure text-on-pure"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <header className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-gold sm:text-base">
            Visit Us
          </p>
          <h2
            id="location-heading"
            className="mt-3 font-display text-4xl uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Find Sky Lifting Club
          </h2>
          <div aria-hidden="true" className="mx-auto mt-6 h-1 w-20 bg-gold" />
        </header>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-stretch">
          {/* Contact details */}
          <address className="not-italic">
            <div className="rounded-2xl border border-on-pure/10 bg-on-pure/[0.03] p-6 sm:p-8">
              <h3 className="font-display text-2xl uppercase tracking-wide text-gold sm:text-3xl">
                {CLUB_NAME}
              </h3>

              <div className="mt-6 space-y-4 text-base font-semibold text-on-pure/90 sm:text-lg">
                <p className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                  <span>
                    {ADDRESS.street}
                    <br />
                    {ADDRESS.locality}, {ADDRESS.region} {ADDRESS.postalCode}
                  </span>
                </p>

                <p className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                  <a
                    href={`tel:+${PHONE_INTL}`}
                    className="underline decoration-gold underline-offset-4 transition-colors hover:text-gold"
                  >
                    Phone: {PHONE_DISPLAY}
                  </a>
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`tel:+${PHONE_INTL}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-bold uppercase tracking-widest text-surface-pure transition-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-surface-pure"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call Now
                </a>
                <a
                  href={whatsappUrl(genericWhatsAppMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-gold px-5 py-3 text-sm font-bold uppercase tracking-widest text-gold transition-colors hover:bg-gold hover:text-surface-pure focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-surface-pure"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  WhatsApp
                </a>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-on-pure px-5 py-3 text-sm font-bold uppercase tracking-widest text-surface-pure transition-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-on-pure focus-visible:ring-offset-2 focus-visible:ring-offset-surface-pure"
                >
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  Get Directions
                </a>
              </div>
            </div>
          </address>

          {/* Map */}
          <figure className="relative min-h-[16rem] overflow-hidden rounded-2xl border border-on-pure/10 bg-on-pure/[0.03] sm:min-h-[20rem] lg:min-h-full">
            <figcaption className="sr-only">
              Map showing the location of {CLUB_NAME} in {ADDRESS.locality}, {ADDRESS.region}
            </figcaption>
            <iframe
              title={`${CLUB_NAME} location map`}
              src={`https://www.openstreetmap.org/export/embed.html?bbox=${encodeURIComponent(
                `${Number(MAP_CENTER.lng) - 0.04},${Number(MAP_CENTER.lat) - 0.04},${Number(MAP_CENTER.lng) + 0.04},${Number(MAP_CENTER.lat) + 0.04}`,
              )}&layer=mapnik&marker=${MAP_CENTER.lat}%2C${MAP_CENTER.lng}`}
              width="100%"
              height="100%"
              loading="lazy"
              className="absolute inset-0 h-full w-full border-0"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
