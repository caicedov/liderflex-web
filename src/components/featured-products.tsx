"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ProductImageCard from "./product-image-card";
import { featuredProducts } from "@/data/featuredProducts";

export default function FeaturedProducts() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Productos Destacados
          </div>
          <h2 className="text-4xl font-bold mb-6">
            Nuestras Soluciones Más Populares
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Descubre nuestras mangueras hidráulicas e industriales más vendidas,
            confiadas por miles de clientes en diversas industrias por su
            confiabilidad y rendimiento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProducts
            .map((product) => (
              <ProductImageCard key={product.id} product={product} />
            ))}
        </div>

        <div className="text-center">
          <Button
            className="bg-obsidian-800 hover:bg-obsidian-700 text-white font-semibold px-8 py-3"
            onClick={() => {
              window.location.href = "/shop";
            }}
          >
            Ver Todos los Productos <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
