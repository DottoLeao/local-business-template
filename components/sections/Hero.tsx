import { MapPin } from "lucide-react";
import { business } from "@/data/business.config";
import { whatsappUrl } from "@/lib/theme";
import { buttonVariants } from "@/components/ui/button";
import { GoogleRating } from "@/components/shared/GoogleRating";
import {
  HeroMotion,
  HeroMotionItem,
} from "@/components/shared/HeroMotion";
import { ParallaxImage } from "@/components/shared/ParallaxImage";
import { cn } from "@/lib/utils";

export function Hero() {
  const bookHref = whatsappUrl(
    business.whatsapp,
    `Hi ${business.name}, I'd like to book an appointment.`,
  );
  const heroImage = business.gallery[0];

  return (
    <section
      id="top"
      className="relative flex min-h-[100dvh] items-end overflow-hidden bg-primary text-primary-foreground"
    >
      {heroImage && (
        <ParallaxImage
          src={heroImage.src}
          alt={heroImage.alt}
          priority
          sizes="100vw"
        />
      )}

      <div
        className="absolute inset-0 bg-[linear-gradient(to_top,color-mix(in_srgb,var(--business-primary)_88%,transparent)_0%,color-mix(in_srgb,var(--business-primary)_45%,transparent)_45%,color-mix(in_srgb,var(--business-primary)_20%,transparent)_100%)]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-32 sm:px-8 sm:pb-24 sm:pt-40">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <HeroMotion>
              <HeroMotionItem>
                <div className="mb-2 flex flex-wrap items-center gap-4 text-primary-foreground/85">
                  <GoogleRating
                    rating={business.rating}
                    reviewCount={business.reviewCount}
                    className="text-primary-foreground"
                  />
                  <span className="inline-flex items-center gap-1.5 text-sm">
                    <MapPin className="size-3.5" />
                    {business.suburb}, {business.city}
                  </span>
                </div>
              </HeroMotionItem>

              <HeroMotionItem>
                <h1 className="font-heading text-[clamp(2.75rem,8vw,6.5rem)] leading-[0.92] tracking-tight text-primary-foreground">
                  {business.name}
                </h1>
              </HeroMotionItem>

              <HeroMotionItem>
                <p className="max-w-xl text-lg leading-relaxed text-primary-foreground/80 sm:text-xl">
                  {business.tagline}
                </p>
              </HeroMotionItem>

              <HeroMotionItem>
                <div className="mt-2 flex flex-wrap items-center gap-4">
                  <a
                    href={bookHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ size: "lg" }),
                      "rounded-sm bg-accent px-7 text-accent-foreground hover:bg-accent/90",
                    )}
                  >
                    {business.cta.primary}
                  </a>
                  <a
                    href="#gallery"
                    className={cn(
                      buttonVariants({ variant: "outline", size: "lg" }),
                      "rounded-sm border-primary-foreground/35 bg-transparent px-7 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground",
                    )}
                  >
                    {business.cta.secondary}
                  </a>
                </div>
              </HeroMotionItem>
            </HeroMotion>
          </div>

          <div className="hidden lg:col-span-4 lg:block">
            <p className="border-l border-primary-foreground/25 pl-6 text-sm leading-relaxed text-primary-foreground/70">
              Colour-first studio on Markeri Street — lived-in blondes and cuts
              that hold through Gold Coast humidity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
