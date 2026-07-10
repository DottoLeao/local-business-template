"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { business } from "@/data/business.config";
import { SectionShell } from "@/components/layout/SectionShell";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Button } from "@/components/ui/button";

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const featured = business.testimonials[0];

  return (
    <SectionShell
      id="reviews"
      background="default"
      containerWidth="wide"
      className="overflow-hidden"
    >
      <ScrollReveal variant="fadeIn">
        <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm text-foreground/70">
              {business.rating.toFixed(1)} · {business.reviewCount} Google
              reviews
            </p>
            <h2 className="font-heading mt-3 text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.02] tracking-tight">
              What clients say after the chair
            </h2>
          </div>
          <div className="hidden gap-2 sm:flex">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              aria-label="Previous review"
              className="rounded-sm border-foreground/20"
            >
              <ChevronLeft className="size-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              aria-label="Next review"
              className="rounded-sm border-foreground/20"
            >
              <ChevronRight className="size-4" />
            </Button>
          </div>
        </div>
      </ScrollReveal>

      {featured && (
        <ScrollReveal variant="clipUp" className="mb-14">
          <blockquote className="max-w-4xl border-l-2 border-[var(--business-accent)] pl-6 sm:pl-10">
            <p className="font-heading text-[clamp(1.5rem,3.5vw,2.5rem)] leading-snug tracking-tight text-foreground">
              “{featured.text}”
            </p>
            <footer className="mt-6 flex items-center gap-3 text-sm">
              <span className="font-medium">{featured.name}</span>
              <span className="text-foreground/40">·</span>
              <span className="text-foreground/70">
                {new Date(featured.date).toLocaleDateString("en-AU", {
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </footer>
          </blockquote>
        </ScrollReveal>
      )}

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {business.testimonials.map((t) => (
            <article
              key={`${t.name}-${t.date}`}
              className="min-w-0 shrink-0 grow-0 basis-[85%] bg-muted/50 py-8 pr-6 pl-8 transition duration-300 hover:bg-muted sm:basis-[45%] lg:basis-[30%]"
            >
              <p className="text-base leading-relaxed text-foreground/85">
                {t.text}
              </p>
              <div className="mt-8 flex items-center justify-between gap-3">
                <div>
                  <p className="font-medium">{t.name}</p>
                  <p className="text-xs text-foreground/70">
                    {new Date(t.date).toLocaleDateString("en-AU", {
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                </div>
                <div
                  className="flex gap-0.5"
                  role="img"
                  aria-label={`${t.rating} stars`}
                >
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="size-3.5 fill-[var(--business-accent)] text-[var(--business-accent)]"
                    />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
