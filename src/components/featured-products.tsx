"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ProductImageCard from "./product-image-card";

const featured = [
  {
    id: "1",
    name: "Manguera hidráulicas de alto rendimiento",
    imageUrl: ["/mhar-1.png","/mhar-2.png","/mhar-3.png", "/mhar-4.png"],
    url: "/featured/1"
  },
  {
    id: "2",
    name: "Mangueras industriales versátiles",
    imageUrl: ["/miv-3.png","/miv-1.png","/miv-2.png"],
    url: "/featured/2"
  },
  {
    id: "3",
    name: "Línea neumática",
    imageUrl: ["/ln-1.png","/ln-2.png","/ln-3.png", "/ln-4.png", "/ln-5.png"],
    url: "/featured/3"
  },
  {
    id: "4",
    name: "Adaptadores y fitting's",
    imageUrl: ["/af-1.png",],
    url: "/featured/4"
  },
  {
    id: "5",
    name: "Válvulas y acoples",
    imageUrl: ["/va-3.png", "/va-1.png", "/va-2.png", "/va-4.png"],
    url: "/featured/5"
  },
  {
    id: "6",
    name: "Flanges ISO / DIN",
    imageUrl: ["/fla-1.png", "/fla-2.png", "/fla-3.png", "/fla-4.png"],
    url: "/featured/6"
  },
  {
    id: "7",
    name: "Línea de ferreteria industrial",
    imageUrl: ["fi-1.png"],
    url: "/featured/7"
  }

]

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
          {featured
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
