"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ProductCard from "@/components/product-card";

const featuredProducts = [
  {
    id: "1",
    name: "Manguera Hidráulica de Goma Premium 1/2 pulgada",
    price: 175,
    originalPrice: 180,
    rating: 5,
    discount: 3,
    image: "/placeholder.svg?height=200&width=200",
    category: "Mangueras Hidráulicas",
    description:
      "Manguera hidráulica de goma de alta calidad para aplicaciones industriales exigentes.",
    stockQuantity: 45,
  },
  {
    id: "2",
    name: "Manguera Industrial Trenzada de Acero 3/4 pulgada",
    price: 110,
    originalPrice: 115,
    rating: 4,
    discount: 4,
    image: "/placeholder.svg?height=200&width=200",
    category: "Mangueras Industriales",
    description:
      "Manguera industrial con trenzado de acero para aplicaciones de media presión.",
    stockQuantity: 28,
  },
  {
    id: "3",
    name: "Kit de Manguera Neumática de Alta Presión",
    price: 249,
    rating: 4,
    image: "/placeholder.svg?height=200&width=200",
    category: "Mangueras Neumáticas",
    description:
      "Kit completo de mangueras neumáticas para aplicaciones de alta presión.",
    stockQuantity: 15,
  },
  {
    id: "4",
    name: "Ensamblaje de Manguera Hidráulica Personalizada",
    price: 320,
    originalPrice: 269,
    rating: 5,
    discount: 7,
    image: "/placeholder.svg?height=200&width=200",
    category: "Soluciones Personalizadas",
    description:
      "Ensamblaje personalizado de manguera hidráulica para aplicaciones específicas.",
    stockQuantity: 18,
  },
];

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center">
          <Button
            className="bg-obsidian-800 hover:bg-obsidian-700 text-white font-semibold px-8 py-3"
            onClick={() => { window.location.href = "/shop"; }}
          >
            Ver Todos los Productos <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
