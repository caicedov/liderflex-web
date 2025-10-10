"use client";
import Categories from "@/components/categories";
import BestSelling from "@/components/best-selling";
import LatestProducts from "@/components/latest-products";
import Newsletter from "@/components/newsletter";
import Footer from "@/components/footer";

export default function ShopPage() {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      <div className="relative z-10">
        <div className="animate-fade-in-up delay-200 duration-1000">
          <Categories />
        </div>
        <div className="animate-fade-in-up delay-400 duration-1000">
          <BestSelling />
        </div>
        <div className="animate-fade-in-up delay-600 duration-1000">
          <LatestProducts />
        </div>
        <Footer />
      </div>
    </div>
  );
}
