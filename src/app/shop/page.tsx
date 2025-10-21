"use client";
import Categories from "@/components/categories";
import BestSelling from "@/components/best-selling";

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
      </div>
    </div>
  );
}
