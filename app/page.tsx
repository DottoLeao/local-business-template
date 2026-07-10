import dynamic from "next/dynamic";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactLocation } from "@/components/sections/ContactLocation";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppFab } from "@/components/shared/WhatsAppFab";

const Gallery = dynamic(
  () =>
    import("@/components/sections/Gallery").then((m) => ({
      default: m.Gallery,
    })),
  { ssr: true },
);

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Testimonials />
        <ContactLocation />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
