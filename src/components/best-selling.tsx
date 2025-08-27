"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import ProductCard from "@/components/product-card"

const products = [
  {
    id: "1",
    name: "Manguera Hidráulica de Goma 1/2 pulgada",
    price: 175,
    originalPrice: 180,
    rating: 5,
    discount: 3,
    image: "/placeholder.svg?height=200&width=200",
    category: "Mangueras Hidráulicas",
    description: "Manguera hidráulica de goma de alta calidad para aplicaciones industriales exigentes.",
    stockQuantity: 45,
    countdown: { days: 329, hours: 20, minutes: 36, seconds: 52 },
  },
  {
    id: "2",
    name: "Manguera Hidráulica Trenzada de Acero 3/4 pulgada",
    price: 110,
    originalPrice: 115,
    rating: 4,
    discount: 4,
    image: "/placeholder.svg?height=200&width=200",
    category: "Mangueras Hidráulicas",
    description: "Manguera con trenzado de acero de alta resistencia para aplicaciones de media presión.",
    stockQuantity: 28,
    countdown: { days: 425, hours: 20, minutes: 36, seconds: 52 },
  },
  {
    id: "3",
    name: "Manguera de Aire Industrial 50ft",
    price: 249,
    originalPrice: 249,
    rating: 4,
    discount: 0,
    image: "/placeholder.svg?height=200&width=200",
    category: "Mangueras Neumáticas",
    description: "Manguera de aire industrial de alta calidad para aplicaciones neumáticas.",
    stockQuantity: 15,
  },
  {
    id: "4",
    name: "Kit de Manguera Hidráulica de Alta Presión",
    price: 110,
    originalPrice: 110,
    rating: 4,
    discount: 0,
    image: "/placeholder.svg?height=200&width=200",
    category: "Kits Completos",
    description: "Kit completo de mangueras hidráulicas para aplicaciones de alta presión.",
    stockQuantity: 22,
  },
  {
    id: "5",
    name: "Manguera Neumática Flexible 25ft",
    price: 228,
    originalPrice: 219,
    rating: 4,
    discount: 4,
    image: "/placeholder.svg?height=200&width=200",
    category: "Mangueras Neumáticas",
    description: "Manguera neumática flexible ideal para herramientas de aire comprimido.",
    stockQuantity: 33,
  },
  {
    id: "6",
    name: "Ensamblaje de Manguera Hidráulica Resistente",
    price: 320,
    originalPrice: 269,
    rating: 4,
    discount: 7,
    image: "/placeholder.svg?height=200&width=200",
    category: "Ensamblajes",
    description: "Ensamblaje personalizado de manguera hidráulica para aplicaciones específicas.",
    stockQuantity: 18,
  },
]

const categories = ["MANGUERAS HIDRÁULICAS", "MANGUERAS INDUSTRIALES", "MANGUERAS NEUMÁTICAS"]

export default function BestSelling() {
  const [activeCategory, setActiveCategory] = useState("MANGUERAS HIDRÁULICAS")

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Productos Más Vendidos</h2>
          <p className="text-gray-600">
            Descubre nuestras soluciones de mangueras hidráulicas e industriales más populares
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
          {products.map((product) => (
            <ProductCard key={product.id} product={product} showCountdown={true} />
          ))}
        </div>

        {/* Promotional Banners */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gradient-to-r from-gray-800 to-gray-600 rounded-lg p-8 text-white relative overflow-hidden">
            <div className="relative z-10">
              <div className="bg-yellow-400 text-black px-3 py-1 rounded text-sm font-semibold mb-4 inline-block">
                ¡APÚRATE! OFERTA ESPECIAL
              </div>
              <h3 className="text-3xl font-bold mb-4">Servicio Premium de Corte de Mangueras Hidráulicas</h3>
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black">COMPRAR AHORA</Button>
            </div>
          </div>

          <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-lg p-8 text-white relative overflow-hidden">
            <div className="relative z-10">
              <div className="bg-yellow-400 text-black px-3 py-1 rounded text-sm font-semibold mb-4 inline-block">
                ¡APÚRATE! OFERTA ESPECIAL
              </div>
              <h3 className="text-3xl font-bold mb-4">Herramienta Pesada Manual Liderflex</h3>
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black">COMPRAR AHORA</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
