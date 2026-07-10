"use server";

import { z } from "zod";
import { Resend } from "resend";
import { business } from "@/data/business.config";
import { headers } from "next/headers";

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(200),
  phone: z.string().max(40).optional(),
  message: z.string().min(10).max(2000),
});

const rateMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60_000;
  const max = 5;
  const entry = rateMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + windowMs });
    return true;
  }

  if (entry.count >= max) return false;
  entry.count += 1;
  return true;
}

export type ContactResult = { ok: true } | { ok: false; error: string };

export async function submitContact(
  formData: FormData,
): Promise<ContactResult> {
  const h = await headers();
  const ip =
    h.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    h.get("x-real-ip") ??
    "unknown";

  if (!checkRateLimit(ip)) {
    return { ok: false, error: "Too many requests. Please try again shortly." };
  }

  const parsed = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone") || undefined,
    message: formData.get("message"),
  });

  if (!parsed.success) {
    return {
      ok: false,
      error: parsed.error.issues[0]?.message ?? "Invalid form data.",
    };
  }

  const { name, email, phone, message } = parsed.data;
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL || business.email;

  if (!apiKey) {
    if (process.env.NODE_ENV === "development") {
      console.log("[contact:dev]", { name, email, phone, message, to });
      return { ok: true };
    }
    return {
      ok: false,
      error: "Email is not configured. Please book via WhatsApp instead.",
    };
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: process.env.CONTACT_FROM || "Contact Form <onboarding@resend.dev>",
      to: [to],
      replyTo: email,
      subject: `New enquiry from ${name} — ${business.name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        phone ? `Phone: ${phone}` : null,
        "",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    });
    return { ok: true };
  } catch (err) {
    console.error("[contact]", err);
    return {
      ok: false,
      error: "Could not send your message. Please try WhatsApp.",
    };
  }
}
