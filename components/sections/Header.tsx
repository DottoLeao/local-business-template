"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { business } from "@/data/business.config";
import { whatsappUrl } from "@/lib/theme";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const bookHref = whatsappUrl(
    business.whatsapp,
    `Hi ${business.name}, I'd like to book an appointment.`,
  );

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-[background-color,border-color,backdrop-filter,color] duration-300",
        scrolled
          ? "border-b border-foreground/10 bg-background/85 text-foreground backdrop-blur-md"
          : "border-b border-transparent bg-transparent text-primary-foreground",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:h-20 sm:px-8">
        <Link
          href="#top"
          className={cn(
            "font-heading text-xl tracking-tight transition-colors sm:text-2xl",
            scrolled ? "text-foreground" : "text-primary-foreground",
          )}
        >
          {business.name}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm transition-colors duration-200",
                scrolled
                  ? "text-foreground/70 hover:text-foreground"
                  : "text-primary-foreground/75 hover:text-primary-foreground",
              )}
            >
              {item.label}
            </a>
          ))}
          <a
            href={bookHref}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ size: "sm" }),
              "rounded-sm",
              scrolled
                ? ""
                : "bg-accent text-accent-foreground hover:bg-accent/90",
            )}
          >
            {business.cta.primary}
          </a>
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "md:hidden",
              !scrolled &&
                "text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground",
            )}
            aria-label="Open menu"
          >
            <Menu className="size-5" />
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px]">
            <SheetHeader>
              <SheetTitle className="font-heading text-left text-xl">
                {business.name}
              </SheetTitle>
            </SheetHeader>
            <nav className="mt-8 flex flex-col gap-4 px-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-lg text-foreground/80"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={bookHref}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants(), "mt-4 rounded-sm")}
              >
                {business.cta.primary}
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
