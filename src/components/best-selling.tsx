"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/product-card";
import { products } from "@/components/product-data";

const categories = [
  "Mangueras Hidráulicas",
  "Mangueras Industriales",
  "Mangueras Neumáticas",
  "Kits Completos",
  "Ensamblajes",
];

export default function BestSelling() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const filtered = products.filter(
    (p) =>
      p.category && p.category.toLowerCase() === activeCategory.toLowerCase(),
  );

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Productos Más Vendidos</h2>
          <p className="text-gray-600">
            Descubre nuestras soluciones de mangueras hidráulicas e industriales
            más populares
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="flex bg-gray-100 rounded-lg p-1">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "ghost"}
                className={`px-6 py-2 rounded-md ${
                  activeCategory === category
                    ? "bg-yellow-400 text-black hover:bg-yellow-500"
                    : "text-gray-600 hover:text-black"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-12">
          {filtered.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
