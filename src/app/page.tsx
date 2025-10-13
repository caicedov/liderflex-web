"use client";
import CompanyHero from "@/components/company-hero";
import ServicesSection from "@/components/services-section";
import FeaturedProducts from "@/components/featured-products";

export default function HomePage() {
  return (
    <div className="relative bg-white overflow-hidden">
      <section className="relative h-screen w-full flex items-center justify-center">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/videos/video-1.mp4"
        />
        {/* Overlay de color para contraste y legibilidad */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Contenido principal del hero */}
        <div className="relative z-20 text-center text-white px-4">
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
