"use client";

import ProductCard from "@/components/product-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const latestProducts = [
  {
    id: "7",
    name: "Herramienta de Engaste Hidráulico Profesional",
    price: 159,
    rating: 5,
    image: "/placeholder.svg?height=200&width=200",
    category: "Herramientas",
    description:
      "Herramienta profesional para engaste de mangueras hidráulicas.",
    stockQuantity: 12,
  },
  {
    id: "8",
    name: "Rollo de Manguera Hidráulica Flexible 100ft",
    price: 539,
    rating: 4,
    image: "/placeholder.svg?height=200&width=200",
    category: "Mangueras Hidráulicas",
    description: "Rollo completo de manguera hidráulica flexible de 100 pies.",
    stockQuantity: 8,
  },
  {
    id: "9",
    name: "Manguera Trenzada de Acero de Alta Presión",
    price: 110,
    originalPrice: 115,
    rating: 4,
    discount: 4,
    image: "/placeholder.svg?height=200&width=200",
    category: "Mangueras Hidráulicas",
    description:
      "Manguera trenzada de acero para aplicaciones de alta presión.",
    stockQuantity: 25,
    countdown: { days: 425, hours: 20, minutes: 36, seconds: 25 },
  },
  {
    id: "10",
    name: "Kit de Manguera Neumática Industrial",
    price: 320,
    originalPrice: 269,
    rating: 4,
    discount: 7,
    image: "/placeholder.svg?height=200&width=200",
    category: "Kits Completos",
    description: "Kit completo de mangueras neumáticas para uso industrial.",
    stockQuantity: 14,
  },
  {
    id: "11",
    name: "Juego de Adaptadores Hidráulicos Resistentes",
    price: 228,
    originalPrice: 219,
    rating: 4,
    image: "/placeholder.svg?height=200&width=200",
    category: "Adaptadores",
    description: "Juego completo de adaptadores hidráulicos resistentes.",
    stockQuantity: 30,
  },
  {
    id: "12",
    name: "Manguera Hidráulica de Goma Premium",
    price: 175,
    originalPrice: 180,
    rating: 5,
    discount: 3,
    image: "/placeholder.svg?height=200&width=200",
    category: "Mangueras Hidráulicas",
    description:
      "Manguera hidráulica de goma premium para aplicaciones exigentes.",
    stockQuantity: 40,
    countdown: { days: 329, hours: 20, minutes: 36, seconds: 25 },
  },
];

export default function LatestProducts() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Productos Nuevos</h2>
          <p className="text-gray-600">
            Conoce nuestras más recientes soluciones de mangueras hidráulicas e
            industriales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-12">
          {latestProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              showCountdown={true}
            />
          ))}
        </div>

        {/* Exclusive Offer Banner */}
        <div className="bg-gradient-to-r from-obsidian-900 to-gray-800 rounded-lg p-12 text-white relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <Badge className="bg-yellow-400 text-black mb-4 text-sm">
              OFERTA EXCLUSIVA DE FIN DE MES
            </Badge>
            <h3 className="text-4xl font-bold mb-4">
              Kit de Ensamblaje de Mangueras Hidráulicas Premium
            </h3>
            <p className="text-xl mb-6">
              Solución completa para todas tus necesidades hidráulicas
            </p>
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3">
              COMPRAR AHORA
            </Button>
          </div>
          <div className="absolute right-0 top-0 h-full w-1/2 opacity-20">
            <Image
              src="/placeholder.svg?height=300&width=400"
              alt="Herramientas hidráulicas"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
