import type { ThemeConfig } from "@/data/types";

/** CSS custom properties injected from business.config.theme */
export function themeToCssVars(theme: ThemeConfig): Record<string, string> {
  return {
    "--business-primary": theme.primary,
    "--business-secondary": theme.secondary,
    "--business-accent": theme.accent,
    "--business-background": theme.background,
    "--business-foreground": theme.foreground,
    "--business-muted": theme.muted,
    "--background": theme.background,
    "--foreground": theme.foreground,
    "--primary": theme.primary,
    "--primary-foreground": theme.background,
    "--secondary": theme.secondary,
    "--secondary-foreground": theme.foreground,
    "--muted": theme.muted,
    "--muted-foreground": theme.foreground,
    "--accent": theme.accent,
    "--accent-foreground": theme.background,
    "--ring": theme.primary,
  };
}

export function whatsappUrl(whatsapp: string, message?: string): string {
  const digits = whatsapp.replace(/\D/g, "");
  const base = `https://wa.me/${digits}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function formatHoursLabel(day: string): string {
  return day.charAt(0).toUpperCase() + day.slice(1);
}

export const DAY_ORDER = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
] as const;
