"use client";

import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/data/services";
import ServiceImageCard from "./service-image-card";


export default function ServicesSection() {
  return (
    <section className="py-20 bg-white">
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
            <ServiceImageCard key={service.id} service={service}/>
          ))}
        </div>
      </div>
    </section>
  );
}
