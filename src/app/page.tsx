"use client";
import Header from "@/components/header";
import CompanyHero from "@/components/company-hero";
import AboutSection from "@/components/about-section";
import ServicesSection from "@/components/services-section";
import FeaturedProducts from "@/components/featured-products";
import WhyChooseUs from "@/components/why-choose-us";
import Newsletter from "@/components/newsletter";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30 z-0 animate-fade-in"
        src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
      />
      <div className="relative z-10">
        <CompanyHero />
        <div className="animate-fade-in-up duration-1000">
          <AboutSection />
        </div>
        <div className="animate-fade-in-up delay-200 duration-1000">
          <ServicesSection />
        </div>
        <div className="animate-fade-in-up delay-400 duration-1000">
          <FeaturedProducts />
        </div>
        <div className="animate-fade-in-up delay-600 duration-1000">
          <WhyChooseUs />
        </div>
        <div className="animate-fade-in-up delay-800 duration-1000">
          <Newsletter />
        </div>
        <Footer />
      </div>
    </div>
  );
}
