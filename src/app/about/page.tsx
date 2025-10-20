"use client";
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

        <section className="relative py-20 bg-gray-50">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/bg-mision.png')" }}
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="group relative overflow-hidden rounded-2xl border border-white/15 shadow-2xl">
                <div className="relative p-8 md:p-12">
                  <div className="inline-flex items-center gap-3 mb-6 rounded-full bg-yellow-400 px-5 py-2 shadow-lg">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90">
                      <Target className="w-5 h-5 text-black" />
                    </span>
                    <h3 className="text-xl md:text-2xl font-extrabold tracking-tight text-black">
                      Nuestra Misión
                    </h3>
                  </div>

                  <p className="text-base md:text-lg leading-relaxed text-white/90">
                    Suministrar{" "}
                    <span className="relative text-yellow-300 font-semibold">
                      productos
                    </span>{" "}
                    y
                    <span className="relative text-yellow-300 font-semibold">
                      {" "}
                      servicios oleo hidráulicos
                    </span>{" "}
                    de
                    <span className="text-white font-semibold drop-shadow-[0_0_8px_rgba(255,255,255,0.25)]">
                      {" "}
                      forma oportuna
                    </span>
                    , consolidándonos como un{" "}
                    <span className="relative text-yellow-300 font-semibold">
                      aliado estratégico
                    </span>{" "}
                    confiable e innovador, anticipándonos a las{" "}
                    <span className="relative text-yellow-300 font-semibold">
                      exigencias
                    </span>{" "}
                    y
                    <span className="relative text-yellow-300 font-semibold">
                      {" "}
                      expectativas
                    </span>{" "}
                    requeridas por nuestros clientes para entregar un servicio
                    de{" "}
                    <span className="text-white font-semibold drop-shadow-[0_0_8px_rgba(255,255,255,0.25)]">
                      calidad
                    </span>
                    , satisfaciendo íntegramente sus
                    <span className="relative text-yellow-300 font-semibold">
                      {" "}
                      necesidades
                    </span>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Separador */}
        <div className="relative">
          <svg
            className="w-full h-16 md:h-24 text-gray-100"
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
          >
            <path
              fill="currentColor"
              d="M0,32L60,37.3C120,43,240,53,360,64C480,75,600,85,720,80C840,75,960,53,1080,48C1200,43,1320,53,1380,58.7L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
            ></path>
          </svg>
        </div>

        {/* Sección Visión */}
        <section className="relative py-20">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/bg-vision.png')" }}
          />
          <div className="absolute inset-0 bg-black/45 backdrop-blur-[2px]" />

          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="group relative overflow-hidden rounded-2xl border border-white/15 shadow-2xl">
                <div className="relative p-8 md:p-12">
                  <div className="inline-flex items-center gap-3 mb-6 rounded-full bg-slate-900 px-5 py-2 shadow-lg">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                      <Eye className="w-5 h-5 text-white" />
                    </span>
                    <h3 className="text-xl md:text-2xl font-extrabold tracking-tight text-white">
                      Nuestra Visión
                    </h3>
                  </div>

                  <p className="text-base md:text-lg leading-relaxed text-white/90">
                    Para el año{" "}
                    <span className="relative text-yellow-300 font-semibold">
                      2026
                    </span>
                    , ser el
                    <span className="text-white font-semibold drop-shadow-[0_0_8px_rgba(255,255,255,0.25)]">
                      {" "}
                      principal proveedor
                    </span>{" "}
                    y
                    <span className="relative text-yellow-300 font-semibold">
                      {" "}
                      aliado estratégico
                    </span>{" "}
                    para el sector
                    <span className="relative text-yellow-300 font-semibold">
                      {" "}
                      minero
                    </span>{" "}
                    e
                    <span className="relative text-yellow-300 font-semibold">
                      {" "}
                      industrial
                    </span>{" "}
                    de productos e insumos
                    <span className="relative text-yellow-300 font-semibold">
                      {" "}
                      oleo hidráulicos
                    </span>
                    , industriales y neumáticos de la más
                    <span className="text-white font-semibold drop-shadow-[0_0_8px_rgba(255,255,255,0.25)]">
                      {" "}
                      alta calidad
                    </span>
                    , cubriendo toda la
                    <span className="relative text-yellow-300 font-semibold">
                      {" "}
                      zona norte
                    </span>{" "}
                    del país.
                  </p>
                </div>
              </div>
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
