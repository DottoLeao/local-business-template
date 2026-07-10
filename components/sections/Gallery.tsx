"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import "yet-another-react-lightbox/styles.css";
import { business } from "@/data/business.config";
import { SectionShell } from "@/components/layout/SectionShell";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { stagger } from "@/lib/motion";

const Lightbox = dynamic(() => import("yet-another-react-lightbox"), {
  ssr: false,
});

export function Gallery() {
  const [index, setIndex] = useState(-1);

  return (
    <SectionShell id="gallery" background="muted" containerWidth="wide">
      <ScrollReveal>
        <div className="mb-12 grid gap-6 sm:grid-cols-12 sm:items-end">
          <div className="sm:col-span-7">
            <h2 className="font-heading text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.02] tracking-tight">
              Recent colour and cut work
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-foreground/75 sm:col-span-5 sm:text-right">
            Tap any image to open full size. Work shown is from clients at the
            Mermaid Waters studio.
          </p>
        </div>
      </ScrollReveal>

      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {business.gallery.map((image, i) => (
          <ScrollReveal
            key={image.src}
            delay={stagger * i}
            className="mb-4 break-inside-avoid"
          >
            <button
              type="button"
              onClick={() => setIndex(i)}
              className="group relative block w-full cursor-pointer overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width ?? 1000}
                height={image.height ?? 750}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="h-auto w-full object-cover transition duration-500 group-hover:scale-[1.04] group-hover:brightness-95"
              />
            </button>
          </ScrollReveal>
        ))}
      </div>

      {index >= 0 && (
        <Lightbox
          open
          index={index}
          close={() => setIndex(-1)}
          slides={business.gallery.map((g) => ({
            src: g.src,
            alt: g.alt,
          }))}
        />
      )}
    </SectionShell>
  );
}
