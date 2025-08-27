"use client";
import Header from "@/components/header";
import CompanyHero from "@/components/company-hero";
import AboutSection from "@/components/about-section";
import ServicesSection from "@/components/services-section";
import FeaturedProducts from "@/components/featured-products";
import WhyChooseUs from "@/components/why-choose-us";
import Newsletter from "@/components/newsletter";
import Footer from "@/components/footer";
import { CartProvider } from "@/components/cart-context";

export default function HomePage() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <CompanyHero />
        <AboutSection />
        <ServicesSection />
        <FeaturedProducts />
        <WhyChooseUs />
        <Newsletter />
        <Footer />
      </div>
    </CartProvider>
  );
}
