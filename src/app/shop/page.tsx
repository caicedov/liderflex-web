"use client";
import Header from "@/components/header";
import Categories from "@/components/categories";
import BestSelling from "@/components/best-selling";
import LatestProducts from "@/components/latest-products";
import Newsletter from "@/components/newsletter";
import Footer from "@/components/footer";

export default function ShopPage() {
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
        <div className="py-8 animate-fade-in-up duration-1000">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-8">
              Nuestros Productos
            </h1>
            <p className="text-gray-600 text-center mb-12">
              Descubre nuestra amplia gama de mangueras hidráulicas e
              industriales
            </p>
          </div>
        </div>
        <div className="animate-fade-in-up delay-200 duration-1000">
          <Categories />
        </div>
        <div className="animate-fade-in-up delay-400 duration-1000">
          <BestSelling />
        </div>
        <div className="animate-fade-in-up delay-600 duration-1000">
          <LatestProducts />
        </div>
        <div className="animate-fade-in-up delay-800 duration-1000">
          <Newsletter />
        </div>
        <Footer />
      </div>
    </div>
  );
}
