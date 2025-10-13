"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Award, Users, Wrench } from "lucide-react";
import { CartProvider } from "@/components/cart-context";

export default function AboutPage() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-obsidian-900 to-obsidian-700 text-white py-16 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10 animate-fade-in-up">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
                Acerca de Liderflex Hidráulica
              </h1>
              <p className="text-xl max-w-3xl mx-auto animate-fade-in-up delay-100">
                Un mundo de soluciones a tu disposición
              </p>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up">
                <h2 className="text-3xl font-bold mb-6">Nuestra Historia</h2>
                <p className="text-gray-600 mb-4 transition-colors duration-300 hover:text-yellow-600">
                  Dedicados a la fabricación, comercialización y distribución de
                  productos oleo hidráulicos.
                </p>
                <p className="text-gray-600 mb-4 transition-colors duration-300 hover:text-yellow-600">
                  Años de experiencia apoyando los procesos productivos de
                  nuestros clientes en la región minera más grade del mundo.
                </p>
                <p className="text-gray-600 transition-colors duration-300 hover:text-yellow-600">
                  Cumpliendo los altos estándares del mercado bajo el uso de
                  nuevas tecnologías en conjunto con el trabajo optimo de
                  profesionales altamente calificados.
                </p>
              </div>
              <div className="relative group animate-fade-in-up">
                <video
                  src="/videos/video-1.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="rounded-lg shadow-lg w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  style={{ minHeight: 300, maxHeight: 400 }}
                />
                <div className="absolute inset-0 rounded-lg bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-2 border-yellow-400 hover:scale-105 hover:shadow-2xl transition-all duration-500 animate-fade-in-up">
                <CardContent className="p-8 text-center">
                  <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                    <Target className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Nuestra Misión</h3>
                  <p className="text-gray-600">
                    Suministrar productos y servicios oleo hidráulicos de forma
                    oportuna, consolidándonos como un aliado estrategico
                    confiable e innovador, anticipándonos a las exigencias y
                    expectativas requeridas por nuestros clientes para entregar
                    un servicio de calidad, satisfaciendo integramente sus
                    necesidades.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-obsidian-800 hover:scale-105 hover:shadow-2xl transition-all duration-500 animate-fade-in-up delay-100">
                <CardContent className="p-8 text-center">
                  <div className="bg-obsidian-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Nuestra Visión</h3>
                  <p className="text-gray-600">
                    Para el año 2026, ser el principal proveedor y aliado
                    estratégico para el sector minero e industrial de productos
                    e insumos oleo hidráulicos, industriales y neumáticos de la
                    mas alta calidad, cubriendo toda la zona norte del país.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Nuestros Valores</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Estos valores fundamentales guían todo lo que hacemos y dan
                forma a nuestras relaciones con clientes, socios y comunidades
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group animate-fade-in-up">
                <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-10 h-10 text-yellow-600 animate-pulse" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-600 transition-colors duration-300">
                  Calidad
                </h3>
                <p className="text-gray-600 group-hover:text-yellow-600 transition-colors duration-300">
                  Productos seleccionados cuidadosamente para garantizar la
                  eficiencia y satisfacción de nuestros clientes.
                </p>
              </div>

              <div className="text-center group animate-fade-in-up delay-100">
                <div className="bg-obsidian-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-10 h-10 text-obsidian-800 animate-pulse" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-obsidian-800 transition-colors duration-300">
                  Confianza
                </h3>
                <p className="text-gray-600 group-hover:text-obsidian-800 transition-colors duration-300">
                  Servicio, asesoramiento y soluciones personalizadas que
                  satisfagan fiablemente las necesidades de la industria.
                </p>
              </div>

              <div className="text-center group animate-fade-in-up delay-200">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Wrench className="w-10 h-10 text-green-600 animate-pulse" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-green-600 transition-colors duration-300">
                  Innovación
                </h3>
                <p className="text-gray-600 group-hover:text-green-600 transition-colors duration-300">
                  Productos y servicios innovadores que nos permiten contribuir
                  a mejorar los procesos productivos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-yellow-400">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-black mb-2">X+</div>
                <div className="text-black font-semibold">
                  Años de Experiencia
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold text-black mb-2">50+</div>
                <div className="text-black font-semibold">
                  Clientes Satisfechos
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold text-black mb-2">50+</div>
                <div className="text-black font-semibold">
                  Líneas de Productos
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold text-black mb-2">1</div>
                <div className="text-black font-semibold">
                  Regiones Atendidas
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </CartProvider>
  );
}
