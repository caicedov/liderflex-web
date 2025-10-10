"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Wrench } from "lucide-react";
import Link from "next/link";

export default function CompanyHero() {
  return (
    <section className="relative min-h-[600px] bg-gradient-to-r from-obsidian-900 via-obsidian-800 to-obsidian-700 overflow-hidden">
      <div className="absolute inset-0">
        <video
          src="/videos/video-1.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover opacity-20"
          style={{ pointerEvents: "none" }}
        />
      </div>

      <div className="relative container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🏆 X+ Años de Excelencia
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Liderflex
              <span className="text-yellow-400"> Hidráulica</span>
            </h1>

            <p className="text-xl mb-8 text-gray-200 leading-relaxed">
              Tu socio de confianza para soluciones premium de mangueras
              hidráulicas e industriales. Entregamos calidad, confiabilidad e
              innovación para potenciar tus operaciones.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/shop">
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-4 text-lg">
                  Explorar Productos <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-obsidian-900 px-8 py-4 text-lg bg-transparent"
                >
                  Solicitar Cotización
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-1">
                  5000+
                </div>
                <div className="text-sm text-gray-300">
                  Clientes Satisfechos
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-1">
                  X+
                </div>
                <div className="text-sm text-gray-300">Años de Experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-1">
                  50+
                </div>
                <div className="text-sm text-gray-300">Líneas de Productos</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">
                ¿Por qué elegir Liderflex?
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-400 p-2 rounded-lg">
                    <Award className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">
                      Calidad Premium
                    </h4>
                    <p className="text-gray-200 text-sm">
                      Productos certificados ISO que superan los estándares de
                      la industria
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-yellow-400 p-2 rounded-lg">
                    <Wrench className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">
                      Soporte Experto
                    </h4>
                    <p className="text-gray-200 text-sm">
                      Experiencia técnica y servicio al cliente 24/7
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-yellow-400 p-2 rounded-lg">
                    <Users className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">
                      Soluciones Personalizadas
                    </h4>
                    <p className="text-gray-200 text-sm">
                      Soluciones hidráulicas adaptadas a tus necesidades
                      específicas
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
