"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <div className="inline-block bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Acerca de Liderflex Hidráulica
            </div>

            <h2 className="text-4xl font-bold mb-6">
              Liderando la Industria Hidráulica por más de
              <span className="text-yellow-400"> X Años</span>
            </h2>

            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Desde XXXX, Liderflex Hidráulica ha estado a la vanguardia de las
              soluciones de mangueras hidráulicas e industriales. Hemos
              construido nuestra reputación entregando productos de calidad
              excepcional y un servicio al cliente inigualable a industrias en
              todo Chile y Sudamérica.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Desde operaciones mineras hasta instalaciones manufactureras,
              nuestras soluciones hidráulicas impulsan las aplicaciones más
              exigentes. Combinamos artesanía tradicional con tecnología de
              vanguardia para entregar productos que superan las expectativas.
            </p>

            <Button
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3"
              onClick={() => (window.location.href = "/about")}
            >
              Conoce Más Sobre Nosotros <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          <div className="relative animate-fade-in-up transition-all duration-1000">
            <Image
              src="/placeholder.svg?height=500&width=600"
              alt="Instalaciones y equipo de Liderflex"
              width={600}
              height={500}
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-yellow-400 text-black p-6 rounded-xl shadow-lg animate-fade-in-up delay-200">
              <div className="text-2xl font-bold">ISO 9001</div>
              <div className="text-sm">Calidad Certificada</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-2 border-yellow-400 hover:shadow-lg transition-shadow animate-fade-in-left">
            <CardContent className="p-8 text-center">
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Nuestra Misión</h3>
              <p className="text-gray-600 leading-relaxed">
                Proporcionar soluciones hidráulicas superiores que superen las
                expectativas a través de productos innovadores, servicio
                excepcional y experiencia técnica, ayudando a nuestros clientes
                a lograr la excelencia operacional con los más altos estándares
                de seguridad y confiabilidad.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-blue-600 hover:shadow-lg transition-shadow animate-fade-in-right">
            <CardContent className="p-8 text-center">
              <div className="bg-obsidian-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Nuestra Visión</h3>
              <p className="text-gray-600 leading-relaxed">
                Ser el proveedor líder de soluciones hidráulicas en Sudamérica,
                reconocido por nuestra innovación, calidad y enfoque centrado en
                el cliente. Visualizamos un futuro donde nuestros productos
                permitan a las industrias operar de manera más eficiente y
                sostenible.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
