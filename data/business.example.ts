import type { BusinessConfig } from "./types";
import { HUMAN_PLACEHOLDER } from "./types";

/**
 * Seed de desenvolvimento — salão fictício em Mermaid Waters, Gold Coast.
 * Substitua via skill onboard-client ao entregar para um cliente real.
 */
export const exampleBusiness: BusinessConfig = {
  name: "Salt & Strand Studio",
  tagline: "Colour and cuts shaped for Gold Coast humidity",
  description:
    "A colour-first salon on the Mermaid Waters strip. We specialise in lived-in blondes, soft balayage, and cuts that hold up in coastal heat — not runway styles that collapse by lunch.",
  phone: "+61 7 5550 2148",
  whatsapp: "61755502148",
  email: "hello@saltandstrand.example",
  address: "14/42 Markeri Street, Mermaid Waters QLD 4218",
  suburb: "Mermaid Waters",
  city: "Gold Coast",
  placeId: "ChIJ_example_salt_strand",
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3525.5!2d153.429!3d-28.048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zTWVybWFpZCBXYXRlcnM!5e0!3m2!1sen!2sau!4v1700000000000",
  coordinates: { lat: -28.0482, lng: 153.4291 },
  rating: 4.9,
  reviewCount: 127,
  hours: {
    monday: "Closed",
    tuesday: "9:00–17:00",
    wednesday: "9:00–19:00",
    thursday: "9:00–19:00",
    friday: "9:00–17:00",
    saturday: "8:00–15:00",
    sunday: "Closed",
  },
  differentiators: [
    {
      title: "Formulated for coastal humidity",
      description:
        "Colour recipes and finishing products chosen for Gold Coast salt air and summer humidity — so your tone lasts past the first beach day.",
      icon: "leaf",
    },
    {
      title: "90-minute colour consultations",
      description:
        "Every new colour client gets a full consultation before we mix. We map your history, lifestyle, and maintenance budget before a single foil goes in.",
      icon: "clock",
    },
    {
      title: "Two senior colourists only",
      description:
        "No junior chairs on colour days. Your appointment is with the same senior colourist who owns the formula notes in your file.",
      icon: "scissors",
    },
    {
      title: "Markeri Street, easy parking",
      description:
        "Street-level studio with free 2-hour parking on Markeri Street — no mall maze, no basement lifts with wet hair.",
      icon: "map-pin",
    },
  ],
  services: [
    {
      name: "Lived-in balayage",
      description:
        "Hand-painted lightening with a soft root melt. Built for 10–14 week grow-outs between visits.",
      price: "from $280",
      image:
        "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80",
      imageAlt: "Soft balayage hair colour in natural light",
    },
    {
      name: "Precision cut & finish",
      description:
        "Shape tailored to your face and how you actually style at home — not a look that only works with salon tools.",
      price: "from $95",
      image:
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80",
      imageAlt: "Stylist finishing a precision haircut",
    },
    {
      name: "Gloss & tone refresh",
      description:
        "45-minute gloss to revive faded blonde or brunette between full colour appointments.",
      price: "from $85",
      image:
        "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80",
      imageAlt: "Hair gloss treatment being applied",
    },
  ],
  gallery: [
    {
      src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80",
      alt: "Salon interior with natural light",
      width: 1200,
      height: 800,
    },
    {
      src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80",
      alt: "Colour consultation at the chair",
      width: 800,
      height: 1000,
    },
    {
      src: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=1000&q=80",
      alt: "Finished blonde balayage detail",
      width: 1000,
      height: 750,
    },
    {
      src: "https://images.unsplash.com/photo-1633681926022-84c1034a7e72?w=900&q=80",
      alt: "Product shelf and styling tools",
      width: 900,
      height: 900,
    },
    {
      src: "https://images.unsplash.com/photo-1493256338651-d82f8194f4b5?w=1100&q=80",
      alt: "Client after cut and blow-dry",
      width: 1100,
      height: 700,
    },
  ],
  testimonials: [
    {
      name: "Sarah M.",
      rating: 5,
      text: "Finally a colourist who gets Gold Coast humidity. My balayage still looks intentional after three beach weekends.",
      date: "2026-05-12",
    },
    {
      name: "Jess T.",
      rating: 5,
      text: "The consultation alone was worth it. They talked me out of a trend cut that wouldn't suit my hair type — and I left happier for it.",
      date: "2026-04-28",
    },
    {
      name: "Amelia R.",
      rating: 5,
      text: "Parking on Markeri is easy, the studio is calm, and my gloss appointment ran exactly on time. Booking via WhatsApp was seamless.",
      date: "2026-03-19",
    },
    {
      name: "Priya K.",
      rating: 5,
      text: "Same colourist every visit, formula written down, no surprises. I've been coming from Broadbeach for over a year.",
      date: "2026-02-08",
    },
  ],
  theme: {
    primary: "#0E2A2F",
    secondary: "#5C6B66",
    accent: "#A33D32",
    background: "#F3F5F4",
    foreground: "#121A1B",
    muted: "#E6EDEA",
    fontHeading: "Fraunces",
    fontBody: "Figtree",
  },
  socials: {
    instagram: "https://instagram.com/saltandstrand.example",
    facebook: "https://facebook.com/saltandstrand.example",
  },
  seo: {
    title: "Salt & Strand Studio | Colour Salon Mermaid Waters, Gold Coast",
    description:
      "Colour-first salon in Mermaid Waters specialising in lived-in balayage and cuts built for Gold Coast humidity. Book via WhatsApp.",
  },
  cta: {
    primary: "Book via WhatsApp",
    secondary: "See colour work",
  },
};

/** Template vazio com placeholders — use após extrair dados do Maps. */
export const emptyBusinessTemplate: BusinessConfig = {
  name: HUMAN_PLACEHOLDER,
  tagline: HUMAN_PLACEHOLDER,
  description: HUMAN_PLACEHOLDER,
  phone: "",
  whatsapp: "",
  email: "",
  address: "",
  suburb: "",
  city: "Gold Coast",
  placeId: "",
  mapsEmbedUrl: "",
  coordinates: { lat: 0, lng: 0 },
  rating: 0,
  reviewCount: 0,
  hours: {
    monday: HUMAN_PLACEHOLDER,
    tuesday: HUMAN_PLACEHOLDER,
    wednesday: HUMAN_PLACEHOLDER,
    thursday: HUMAN_PLACEHOLDER,
    friday: HUMAN_PLACEHOLDER,
    saturday: HUMAN_PLACEHOLDER,
    sunday: HUMAN_PLACEHOLDER,
  },
  differentiators: [],
  services: [],
  gallery: [],
  testimonials: [],
  theme: {
    primary: "#0E2A2F",
    secondary: "#5C6B66",
    accent: "#A33D32",
    background: "#F3F5F4",
    foreground: "#121A1B",
    muted: "#E6EDEA",
    fontHeading: "Fraunces",
    fontBody: "Figtree",
  },
  socials: {},
  seo: {
    title: HUMAN_PLACEHOLDER,
    description: HUMAN_PLACEHOLDER,
  },
  cta: {
    primary: "Book via WhatsApp",
    secondary: "View gallery",
  },
};
