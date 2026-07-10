import Image from "next/image";
import { business } from "@/data/business.config";
import { SectionShell } from "@/components/layout/SectionShell";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { cn } from "@/lib/utils";
import { stagger } from "@/lib/motion";

export function Services() {
  return (
    <SectionShell id="services" background="default" align="left">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <ScrollReveal>
          <h2 className="font-heading max-w-lg text-[clamp(2.25rem,5vw,4rem)] leading-[1.02] tracking-tight">
            Colour and cuts with clear pricing
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <p className="max-w-sm text-sm leading-relaxed text-foreground/75 lg:text-right">
            Every service starts with a consultation. Prices below are starting
            points — final quotes depend on hair length and colour history.
          </p>
        </ScrollReveal>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-12 md:gap-6">
        {business.services.map((service, i) => {
          const featured = i === 0;
          return (
            <ScrollReveal
              key={service.name}
              delay={stagger * i}
              className={cn(
                featured
                  ? "md:col-span-12 lg:col-span-7"
                  : i === 1
                    ? "md:col-span-6 lg:col-span-5"
                    : "md:col-span-6 lg:col-span-5 lg:col-start-8",
              )}
            >
              <article
                className={cn(
                  "group flex h-full flex-col overflow-hidden bg-muted/40 transition duration-300 hover:bg-muted/70",
                  featured ? "lg:min-h-[420px] lg:flex-row" : "",
                )}
              >
                <div
                  className={cn(
                    "relative overflow-hidden",
                    featured
                      ? "aspect-[16/10] lg:aspect-auto lg:w-[55%] lg:min-h-full"
                      : "aspect-[4/3]",
                  )}
                >
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03] group-hover:brightness-95"
                  />
                </div>
                <div
                  className={cn(
                    "flex flex-1 flex-col justify-between p-6 sm:p-8",
                    featured && "lg:justify-center",
                  )}
                >
                  <div>
                    {featured && (
                      <p className="mb-3 text-xs font-medium tracking-wide text-[var(--business-accent)] uppercase">
                        Signature
                      </p>
                    )}
                    <h3
                      className={cn(
                        "font-heading tracking-tight",
                        featured
                          ? "text-3xl sm:text-4xl"
                          : "text-2xl sm:text-3xl",
                      )}
                    >
                      {service.name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/75">
                      {service.description}
                    </p>
                  </div>
                  {service.price && (
                    <p className="mt-6 text-sm font-medium tracking-wide text-[var(--business-accent)]">
                      {service.price}
                    </p>
                  )}
                </div>
              </article>
            </ScrollReveal>
          );
        })}
      </div>
    </SectionShell>
  );
}
