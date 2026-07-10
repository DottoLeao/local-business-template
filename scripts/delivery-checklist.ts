import { business } from "../data/business.config";
import { validateBusinessConfig } from "../lib/validate-config";
import { HUMAN_PLACEHOLDER } from "../data/types";

type Check = { name: string; pass: boolean; detail?: string };

const checks: Check[] = [];

const validation = validateBusinessConfig(business);
checks.push({
  name: "No [TODO_HUMAN] placeholders",
  pass: validation.placeholders.length === 0,
  detail:
    validation.placeholders.length > 0
      ? validation.placeholders.join(", ")
      : undefined,
});

checks.push({
  name: "Zod schema valid",
  pass: validation.zodErrors.length === 0,
  detail: validation.zodErrors[0],
});

checks.push({
  name: "Rating > 0",
  pass: business.rating > 0,
  detail: `rating=${business.rating}`,
});

checks.push({
  name: "At least 1 service",
  pass: business.services.length >= 1,
});

checks.push({
  name: "At least 1 gallery image",
  pass: business.gallery.length >= 1,
});

checks.push({
  name: "At least 1 testimonial",
  pass: business.testimonials.length >= 1,
});

checks.push({
  name: "WhatsApp number set",
  pass: business.whatsapp.replace(/\D/g, "").length >= 10,
});

checks.push({
  name: "Maps embed URL set",
  pass: business.mapsEmbedUrl.length > 10,
});

checks.push({
  name: "SEO title & description filled",
  pass:
    !business.seo.title.includes(HUMAN_PLACEHOLDER) &&
    !business.seo.description.includes(HUMAN_PLACEHOLDER),
});

checks.push({
  name: "RESEND_API_KEY present (env)",
  pass: Boolean(process.env.RESEND_API_KEY),
  detail: process.env.RESEND_API_KEY ? "set" : "missing — set before deploy",
});

const failed = checks.filter((c) => !c.pass);

console.log("\nDelivery checklist\n" + "─".repeat(40));
for (const c of checks) {
  const mark = c.pass ? "✓" : "✗";
  console.log(`${mark} ${c.name}${c.detail && !c.pass ? ` (${c.detail})` : ""}`);
}
console.log("─".repeat(40));

if (failed.length === 0) {
  console.log("All checks passed.\n");
  process.exit(0);
}

console.log(`${failed.length} check(s) failed.\n`);
process.exit(1);
