"use client";
import Header from "@/components/header";
import Categories from "@/components/categories";
import BestSelling from "@/components/best-selling";
import LatestProducts from "@/components/latest-products";
import Newsletter from "@/components/newsletter";
import Footer from "@/components/footer";
import { CartProvider } from "@/components/cart-context";

export default function ShopPage() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <div className="py-8">
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
        <Categories />
        <BestSelling />
        <LatestProducts />
        <Newsletter />
        <Footer />
      </div>
    </CartProvider>
  );
}
