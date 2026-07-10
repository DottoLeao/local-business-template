import Image from "next/image";
import { business } from "@/data/business.config";
import { SectionShell } from "@/components/layout/SectionShell";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { DifferentiatorIcon } from "@/components/shared/DifferentiatorIcon";
import { stagger } from "@/lib/motion";

export function About() {
  const sideImage = business.gallery[1] ?? business.gallery[0];

  return (
    <SectionShell id="about" background="muted" className="overflow-hidden">
      <div className="grid items-start gap-14 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <ScrollReveal variant="clipUp">
            <p className="text-sm font-medium text-primary/70">
              The studio
            </p>
            <h2 className="font-heading mt-4 text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] tracking-tight">
              Built for how hair actually behaves on the Gold Coast
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/75 sm:text-lg">
              {business.description}
            </p>
          </ScrollReveal>

          <ol className="mt-14 space-y-0">
            {business.differentiators.map((item, i) => (
              <li
                key={item.title}
                className="border-t border-foreground/12 py-6 first:border-t-0 first:pt-0"
              >
                <ScrollReveal delay={stagger * i} variant="clipUp">
                  <div className="group flex gap-5 sm:gap-8">
                    <span className="font-heading w-10 shrink-0 text-2xl text-foreground/55 tabular-nums transition-colors duration-200 group-hover:text-[var(--business-accent)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start gap-3">
                        <DifferentiatorIcon
                          name={item.icon}
                          className="mt-0.5 size-4 shrink-0 text-[var(--business-accent)]"
                        />
                        <h3 className="font-medium text-foreground">
                          {item.title}
                        </h3>
                      </div>
                      <p className="mt-2 pl-7 text-sm leading-relaxed text-foreground/75">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              </li>
            ))}
          </ol>
        </div>

        <div className="relative lg:col-span-5">
          <ScrollReveal delay={0.12}>
            <div className="relative aspect-[3/4] w-full overflow-hidden lg:mt-8 lg:translate-y-8">
              {sideImage && (
                <Image
                  src={sideImage.src}
                  alt={sideImage.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 35vw"
                  className="object-cover transition duration-700 hover:scale-[1.03]"
                />
              )}
            </div>
            <p className="mt-4 text-sm text-foreground/70">{business.address}</p>
          </ScrollReveal>
        </div>
      </div>
    </SectionShell>
  );
}
