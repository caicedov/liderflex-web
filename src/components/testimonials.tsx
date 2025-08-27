"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const testimonials = [
  {
    name: "Carlos Rodríguez",
    role: "Gerente de Planta",
    content:
      "Excelentes mangueras hidráulicas. Gran calidad y entrega rápida. Liderflex ha sido nuestro socio de confianza durante años.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "María Santos",
    role: "Ingeniera de Mantenimiento",
    content:
      "Productos confiables y duraderos. Las mangueras industriales han superado nuestras expectativas en rendimiento.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Roberto Silva",
    role: "Director de Operaciones",
    content:
      "Servicio al cliente y soporte técnico excepcionales. Sus soluciones hidráulicas son de primera categoría.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Ana Gutiérrez",
    role: "Gerente de Compras",
    content:
      "Calidad impresionante y precios competitivos. Liderflex entrega exactamente lo que necesitamos para nuestras operaciones.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
];

const brands = [
  { name: "PARKER", logo: "/placeholder.svg?height=40&width=120" },
  { name: "GATES", logo: "/placeholder.svg?height=40&width=120" },
  { name: "EATON", logo: "/placeholder.svg?height=40&width=120" },
  { name: "MANULI", logo: "/placeholder.svg?height=40&width=120" },
  { name: "PIRTEK", logo: "/placeholder.svg?height=40&width=120" },
  { name: "ALFAGOMMA", logo: "/placeholder.svg?height=40&width=120" },
];

export default function Testimonials() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Lo que Dicen Nuestros Clientes
          </h2>
          <p className="text-gray-600">
            Escucha de nuestros clientes satisfechos sobre su experiencia con
            Liderflex
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 border-yellow-400">
              <CardContent className="p-6">
                <div className="mb-4">
                  <h4 className="font-semibold text-lg mb-2">
                    "{testimonial.content.split(".")[0]}."
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {testimonial.content.substring(
                      testimonial.content.indexOf(".") + 1,
                    )}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-semibold text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-500 text-xs">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Brand Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="grayscale hover:grayscale-0 transition-all"
            >
              <Image
                src={brand.logo || "/placeholder.svg"}
                alt={brand.name}
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
