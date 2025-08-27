"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Wrench, Truck, Shield, Clock, Phone, Settings } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Ensamblaje de Mangueras Personalizadas",
    description:
      "Servicios profesionales de ensamblaje de mangueras hidráulicas con conexiones de precisión y pruebas",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    icon: Truck,
    title: "Entrega Rápida",
    description:
      "Entrega el mismo día disponible para reemplazos urgentes de mangueras hidráulicas",
    color: "bg-obsidian-100 text-obsidian-800",
  },
  {
    icon: Shield,
    title: "Garantía de Calidad",
    description:
      "Todos los productos pasan por pruebas rigurosas para asegurar máxima seguridad y rendimiento",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Clock,
    title: "Servicio de Emergencia 24/7",
    description:
      "Soporte las 24 horas para fallas críticas de sistemas hidráulicos",
    color: "bg-red-100 text-red-600",
  },
  {
    icon: Phone,
    title: "Consultoría Técnica",
    description:
      "Asesoramiento experto de nuestros ingenieros hidráulicos para aplicaciones complejas",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Settings,
    title: "Programas de Mantenimiento",
    description:
      "Planes de mantenimiento preventivo para extender la vida de tus sistemas hidráulicos",
    color: "bg-orange-100 text-orange-600",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Nuestros Servicios
          </div>
          <h2 className="text-4xl font-bold mb-6">
            Soluciones Hidráulicas Integrales
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Desde ensamblaje de mangueras personalizadas hasta reparaciones de
            emergencia, proporcionamos servicios hidráulicos completos para
            mantener tus operaciones funcionando sin problemas y eficientemente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow group"
            >
              <CardContent className="p-8 text-center">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${service.color} group-hover:scale-110 transition-transform`}
                >
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
