"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Wrench, Truck, Shield, Clock, Phone, Settings } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Fabricación de mangueras y flexibles hidráulicos",
    description:
      "Proporcionamos ensamble y prensado de mangueras hidráulicas a medida, con precisión y eficiencia, garantizando conexiones seguras y rendimiento óptimo en cualquier sistema de presión",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    icon: Truck,
    title: "Mantenimiento y reparación de componentes hidráulicos",
    description:
      "Brindamos mantenimiento, reparación y overhaul de componentes hidráulicos como cilindros, bombas y equipos industriales, adaptándonos a las exigencias del sector minero, la construcción y la manufactura, mediante soluciones eficientes de altos estándares técnicos, prolongando la vida útil de sus equipos y optimizando su rendimiento",
    color: "bg-obsidian-100 text-obsidian-800",
  },
  {
    icon: Shield,
    title: "Fabricación de tuberías hidráulicas",
    description:
      "Fabricamos, adaptamos y reparamos tuberías hidráulicas para sistemas industriales de alta exigencia, con enfoque ténico y precisión dimensional, garantizando la compatibilidad, resistencia y precisión en cada proyecto",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Clock,
    title: "Asesoramiento técnico especializado",
    description:
      "Ofrecemos asesoría experta para la selección de mangueras industriales, asegurando la mejor elección para las demadas específicas de cada sector, ya sea minería, construcción o manufactura",
    color: "bg-red-100 text-red-600",
  },
  {
    icon: Phone,
    title: "Diagnóstico y levantamiento 24/7",
    description:
      "Realizamos evaluaciones directamente en el lugar de trabajo para minimizar el tiempo de inactividad y optimizar los tiempos de respuesta, brindando soluciones efectivas 24/7, evitando la detención de los procesos productivos",
    color: "bg-purple-100 text-purple-600",
  }
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
          {services.map((service) => (
            <Card
              key={service.title}
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
