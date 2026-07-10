export const HUMAN_PLACEHOLDER = "[TODO_HUMAN]" as const;

export interface Differentiator {
  title: string;
  description: string;
  icon: "map-pin" | "clock" | "sparkles" | "users" | "leaf" | "scissors" | "heart" | "award";
}

export interface Service {
  name: string;
  description: string;
  price?: string;
  image: string;
  imageAlt: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface Testimonial {
  name: string;
  avatar?: string;
  rating: number;
  text: string;
  date: string;
}

export interface ThemeConfig {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  foreground: string;
  muted: string;
  fontHeading: string;
  fontBody: string;
}

export interface SocialLinks {
  instagram?: string;
  facebook?: string;
}

export interface BusinessConfig {
  name: string;
  tagline: string;
  description: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  suburb: string;
  city: string;
  placeId: string;
  mapsEmbedUrl: string;
  coordinates: { lat: number; lng: number };
  rating: number;
  reviewCount: number;
  hours: Record<string, string>;
  differentiators: Differentiator[];
  services: Service[];
  gallery: GalleryImage[];
  testimonials: Testimonial[];
  theme: ThemeConfig;
  socials: SocialLinks;
  seo: {
    title: string;
    description: string;
    ogImage?: string;
  };
  cta: {
    primary: string;
    secondary: string;
  };
}

export function isHumanPlaceholder(value: string): boolean {
  return value.includes(HUMAN_PLACEHOLDER);
}
