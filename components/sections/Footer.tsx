import { business } from "@/data/business.config";
import { DAY_ORDER, formatHoursLabel } from "@/lib/theme";
import { Container } from "@/components/layout/Container";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M14 8.2h2.4V4.8H14c-2.4 0-4.4 1.9-4.4 4.4v1.6H7.2v3.4h2.4V19.2h3.4v-5h2.4l.6-3.4h-3V9.2c0-.6.4-1 1-1z" />
    </svg>
  );
}

export function Footer() {
  const openDays = DAY_ORDER.filter((d) => business.hours[d] !== "Closed");

  return (
    <footer className="border-t border-foreground/10 bg-foreground text-background">
      <Container width="wide" className="py-14 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="font-heading text-3xl tracking-tight">
              {business.name}
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-background/65">
              {business.tagline}
            </p>
            <div className="mt-6 flex gap-4">
              {business.socials.instagram && (
                <a
                  href={business.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-background/70 transition hover:text-background"
                >
                  <InstagramIcon className="size-5" />
                </a>
              )}
              {business.socials.facebook && (
                <a
                  href={business.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-background/70 transition hover:text-background"
                >
                  <FacebookIcon className="size-5" />
                </a>
              )}
            </div>
          </div>

          <div>
            <p className="text-xs font-medium tracking-[0.15em] text-background/70 uppercase">
              Hours
            </p>
            <ul className="mt-4 space-y-1.5 text-sm text-background/75">
              {openDays.map((day) => (
                <li key={day}>
                  {formatHoursLabel(day)} · {business.hours[day]}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium tracking-[0.15em] text-background/70 uppercase">
              Contact
            </p>
            <ul className="mt-4 space-y-2 text-sm text-background/75">
              <li>{business.address}</li>
              <li>
                <a href={`tel:${business.phone}`} className="hover:underline">
                  {business.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${business.email}`}
                  className="hover:underline"
                >
                  {business.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-background/15 pt-6 text-xs text-background/70 sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} {business.name}. All rights reserved.
          </p>
          <p>Serving {business.suburb} & surrounding Gold Coast suburbs.</p>
        </div>
      </Container>
    </footer>
  );
}
