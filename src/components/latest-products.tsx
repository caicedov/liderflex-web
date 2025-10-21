"use client";

import ProductCard from "@/components/product-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { products } from "@/components/product-data";

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
          {products
            .filter((p) => Number(p.id) >= 7 && Number(p.id) <= 12)
            .map((product) => (
              <ProductCard
                key={product.id}
                product={product}
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
