import CompanyHero from "@/components/company-hero";
import ServicesSection from "@/components/services-section";
import FeaturedProducts from "@/components/featured-products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liderflex Hidráulica - Soluciones Hidráulicas Premium",
  description:
    "Tu socio de confianza para soluciones premium de mangueras hidráulicas e industriales. Entregamos calidad, confiabilidad e innovación para potenciar tus operaciones.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function HomePage() {
  return (
    <div className="relative bg-white overflow-hidden">
      <section className="relative w-full min-h-[70vh] md:min-h-screen flex items-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/videos/video-1.mp4"
        />
        <div className="absolute inset-0 bg-black/50 md:bg-black/40 z-10" />

        <div className="relative z-20 w-full">
          <CompanyHero />
        </div>
      </section>

      {/** === Secciones siguientes === */}
      <section className="relative z-30 bg-white">
        <div className="animate-fade-in-up duration-1000">
          <ServicesSection />
        </div>
        <div className="animate-fade-in-up delay-200 duration-1000">
          <FeaturedProducts />
        </div>
      </section>
    </div>
  );
}
