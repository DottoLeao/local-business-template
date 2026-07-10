import { z } from "zod";
import type { BusinessConfig } from "@/data/types";
import { HUMAN_PLACEHOLDER } from "@/data/types";

const differentiatorSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  icon: z.enum([
    "map-pin",
    "clock",
    "sparkles",
    "users",
    "leaf",
    "scissors",
    "heart",
    "award",
  ]),
});

const serviceSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  price: z.string().optional(),
  image: z.string().url(),
  imageAlt: z.string().min(1),
});

const gallerySchema = z.object({
  src: z.string().url(),
  alt: z.string().min(1),
  width: z.number().optional(),
  height: z.number().optional(),
});

const testimonialSchema = z.object({
  name: z.string().min(1),
  avatar: z.string().url().optional(),
  rating: z.number().min(1).max(5),
  text: z.string().min(20),
  date: z.string().min(1),
});

export const businessConfigSchema = z.object({
  name: z.string().min(1),
  tagline: z.string().min(1),
  description: z.string().min(1),
  phone: z.string().min(1),
  whatsapp: z.string().min(1),
  email: z.string().email(),
  address: z.string().min(1),
  suburb: z.string().min(1),
  city: z.string().min(1),
  placeId: z.string(),
  mapsEmbedUrl: z.string().min(1),
  coordinates: z.object({
    lat: z.number(),
    lng: z.number(),
  }),
  rating: z.number().min(0).max(5),
  reviewCount: z.number().min(0),
  hours: z.record(z.string(), z.string()),
  differentiators: z.array(differentiatorSchema).min(3).max(4),
  services: z.array(serviceSchema).min(1),
  gallery: z.array(gallerySchema).min(1),
  testimonials: z.array(testimonialSchema).min(1),
  theme: z.object({
    primary: z.string().regex(/^#/),
    secondary: z.string().regex(/^#/),
    accent: z.string().regex(/^#/),
    background: z.string().regex(/^#/),
    foreground: z.string().regex(/^#/),
    muted: z.string().regex(/^#/),
    fontHeading: z.string().min(1),
    fontBody: z.string().min(1),
  }),
  socials: z.object({
    instagram: z.string().url().optional(),
    facebook: z.string().url().optional(),
  }),
  seo: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    ogImage: z.string().optional(),
  }),
  cta: z.object({
    primary: z.string().min(1),
    secondary: z.string().min(1),
  }),
});

function collectPlaceholders(value: unknown, path = ""): string[] {
  if (typeof value === "string") {
    return value.includes(HUMAN_PLACEHOLDER) ? [path || "(root)"] : [];
  }
  if (Array.isArray(value)) {
    return value.flatMap((item, i) =>
      collectPlaceholders(item, `${path}[${i}]`),
    );
  }
  if (value && typeof value === "object") {
    return Object.entries(value).flatMap(([key, v]) =>
      collectPlaceholders(v, path ? `${path}.${key}` : key),
    );
  }
  return [];
}

export type ValidationResult = {
  ok: boolean;
  placeholders: string[];
  zodErrors: string[];
};

export function validateBusinessConfig(
  config: BusinessConfig,
): ValidationResult {
  const placeholders = collectPlaceholders(config);
  const parsed = businessConfigSchema.safeParse(config);

  return {
    ok: placeholders.length === 0 && parsed.success,
    placeholders,
    zodErrors: parsed.success
      ? []
      : parsed.error.issues.map((i) => `${i.path.join(".")}: ${i.message}`),
  };
}
