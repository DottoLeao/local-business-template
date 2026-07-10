"use client";

import { useState, useTransition } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { business } from "@/data/business.config";
import { DAY_ORDER, formatHoursLabel, whatsappUrl } from "@/lib/theme";
import { SectionShell } from "@/components/layout/SectionShell";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { submitContact } from "@/app/actions/contact";

export function ContactLocation() {
  const [pending, startTransition] = useTransition();
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const bookHref = whatsappUrl(
    business.whatsapp,
    `Hi ${business.name}, I'd like to book an appointment.`,
  );

  function onSubmit(formData: FormData) {
    setStatus("idle");
    startTransition(async () => {
      const result = await submitContact(formData);
      if (result.ok) {
        setStatus("ok");
      } else {
        setStatus("error");
        setErrorMsg(result.error ?? "Something went wrong.");
      }
    });
  }

  return (
    <SectionShell id="contact" background="muted" className="pb-24">
      <div className="mb-14 grid gap-8 lg:grid-cols-12 lg:items-end">
        <ScrollReveal className="lg:col-span-7">
          <h2 className="font-heading text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.02] tracking-tight">
            Markeri Street, Mermaid Waters
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.06} className="lg:col-span-5">
          <p className="text-foreground/80 lg:text-right">
            Prefer WhatsApp for bookings — or send a note and we&apos;ll reply
            within one business day.
          </p>
        </ScrollReveal>
      </div>

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <ScrollReveal>
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-background lg:aspect-auto lg:min-h-[420px]">
            <iframe
              title={`Map showing ${business.name}`}
              src={business.mapsEmbedUrl}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <ul className="mt-8 space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-[var(--business-accent)]" />
              <span>{business.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-[var(--business-accent)]" />
              <a href={`tel:${business.phone}`} className="hover:underline">
                {business.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-[var(--business-accent)]" />
              <a href={`mailto:${business.email}`} className="hover:underline">
                {business.email}
              </a>
            </li>
          </ul>

          <div className="mt-8 border-t border-foreground/10 pt-6">
            <p className="mb-3 flex items-center gap-2 text-sm font-medium">
              <Clock className="size-4 text-[var(--business-accent)]" />
              Opening hours
            </p>
            <dl className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm">
              {DAY_ORDER.map((day) => (
                <div key={day} className="contents">
                  <dt className="text-foreground/70">{formatHoursLabel(day)}</dt>
                  <dd className="text-right tabular-nums">
                    {business.hours[day]}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <div className="sm:pt-2">
            <h3 className="font-heading text-3xl tracking-tight">
              Send a message
            </h3>
            <p className="mt-2 text-sm text-foreground/75">
              Or{" "}
              <a
                href={bookHref}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2"
              >
                book directly on WhatsApp
              </a>
              .
            </p>

            <form action={onSubmit} className="mt-8 space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  className="rounded-sm transition-[box-shadow] duration-200 focus-visible:ring-[var(--business-accent)]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="rounded-sm transition-[box-shadow] duration-200 focus-visible:ring-[var(--business-accent)]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className="rounded-sm transition-[box-shadow] duration-200 focus-visible:ring-[var(--business-accent)]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="rounded-sm transition-[box-shadow] duration-200 focus-visible:ring-[var(--business-accent)]"
                  placeholder="e.g. Looking for a balayage refresh on Saturday morning"
                />
              </div>

              <Button
                type="submit"
                disabled={pending}
                className="w-full rounded-sm sm:w-auto"
              >
                {pending ? "Sending…" : "Send message"}
              </Button>

              {status === "ok" && (
                <p className="text-sm text-foreground/70" role="status">
                  Message sent — we&apos;ll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-destructive" role="alert">
                  {errorMsg}
                </p>
              )}
            </form>
          </div>
        </ScrollReveal>
      </div>
    </SectionShell>
  );
}
