"use client";

import { MessageCircle } from "lucide-react";
import { business } from "@/data/business.config";
import { whatsappUrl } from "@/lib/theme";

export function WhatsAppFab() {
  const href = whatsappUrl(
    business.whatsapp,
    `Hi ${business.name}, I'd like to book an appointment.`,
  );

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book via WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#075E54] px-4 py-3 text-sm font-medium text-white shadow-lg transition hover:scale-[1.03] hover:bg-[#064E46] hover:shadow-xl sm:bottom-8 sm:right-8"
    >
      <MessageCircle className="size-5" />
      <span className="hidden sm:inline">{business.cta.primary}</span>
    </a>
  );
}
