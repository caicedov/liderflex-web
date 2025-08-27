"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Truck, RotateCcw, CreditCard, Gift, Headphones } from "lucide-react";
import Image from "next/image";

const categories = [
  {
    name: "Mangueras Hidráulicas",
    products: "11 Productos",
    icon: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Mangueras Industriales",
    products: "13 Productos",
    icon: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Mangueras de Goma",
    products: "9 Productos",
    icon: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Mangueras de Acero",
    products: "13 Productos",
    icon: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Mangueras Flexibles",
    products: "11 Productos",
    icon: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Alta Presión",
    products: "17 Productos",
    icon: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Mangueras Neumáticas",
    products: "4 Productos",
    icon: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Mangueras Personalizadas",
    products: "5 Productos",
    icon: "/placeholder.svg?height=80&width=80",
  },
];

const features = [
  {
    icon: Truck,
    title: "Envío Gratis",
    subtitle: "Pedidos Sobre $100",
  },
  {
    icon: RotateCcw,
    title: "30 Días de Devolución",
    subtitle: "Cambio de Producto",
  },
  {
    icon: CreditCard,
    title: "Pago Seguro",
    subtitle: "Tarjetas Aceptadas",
  },
  {
    icon: Gift,
    title: "Regalos Especiales",
    subtitle: "Contáctanos",
  },
  {
    icon: Headphones,
    title: "Soporte 24/7",
    subtitle: "Contáctanos en Cualquier Momento",
  },
];

export default function Categories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Compra por Categorías Destacadas
          </h2>
          <p className="text-gray-600">
            Explora nuestra amplia gama de mangueras hidráulicas e industriales
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 mb-16">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow cursor-pointer group"
            >
              <CardContent className="p-6">
                <div className="w-20 h-20 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-yellow-100 transition-colors">
                  <Image
                    src={category.icon || "/placeholder.svg"}
                    alt={category.name}
                    width={40}
                    height={40}
                    className="opacity-70"
                  />
                </div>
                <h3 className="font-semibold text-sm mb-1">{category.name}</h3>
                <p className="text-xs text-gray-500">{category.products}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 bg-white p-8 rounded-lg shadow-sm">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="bg-yellow-100 p-3 rounded-full">
                <feature.icon className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">{feature.title}</h4>
                <p className="text-xs text-gray-500">{feature.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
