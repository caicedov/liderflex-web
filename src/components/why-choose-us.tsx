"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Wrench, Globe, Shield, Clock } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Certificado ISO 9001",
    description:
      "Sistema de gestión de calidad certificado según estándares internacionales",
    stat: "100%",
    statLabel: "Calidad Asegurada",
  },
  {
    icon: Users,
    title: "Equipo Experto",
    description: "Ingenieros hidráulicos con décadas de experiencia combinada",
    stat: "X+",
    statLabel: "Años de Experiencia",
  },
  {
    icon: Wrench,
    title: "Soluciones Personalizadas",
    description:
      "Soluciones hidráulicas adaptadas para requerimientos industriales únicos",
    stat: "500+",
    statLabel: "Proyectos Personalizados",
  },
  {
    icon: Globe,
    title: "Amplio Stock",
    description: "Atendiendo clientes en la Región de Antofagasta",
    stat: "1",
    statLabel: "Regiones Atendidas",
  },
  {
    icon: Shield,
    title: "Protección de Garantía",
    description: "Cobertura de garantía integral en todos nuestros productos",
    stat: "X-X",
    statLabel: "Meses de Garantía",
  },
  {
    icon: Clock,
    title: "Respuesta Rápida",
    description:
      "Tiempos de respuesta rápidos para necesidades hidráulicas urgentes",
    stat: "24/7",
    statLabel: "Soporte Disponible",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Por qué Elegir Liderflex
          </div>
          <h2 className="text-4xl font-bold mb-6">
            Confiado por Líderes de la Industria
            <span className="text-yellow-600"> Mundial</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Nuestro compromiso con la excelencia, innovación y satisfacción del
            cliente nos ha convertido en la opción preferida para soluciones
            hidráulicas en diversas industrias.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow group border-0 bg-white shadow-md"
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-100 p-3 rounded-lg group-hover:bg-yellow-200 transition-colors">
                    <reason.icon className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2">{reason.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {reason.description}
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-yellow-600">
                        {reason.stat}
                      </span>
                      <span className="text-sm text-gray-500">
                        {reason.statLabel}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
