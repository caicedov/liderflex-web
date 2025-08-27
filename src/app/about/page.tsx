"use client";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Award, Users, Wrench } from "lucide-react";
import { CartProvider } from "@/components/cart-context";
import Image from "next/image";

export default function AboutPage() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-white">

        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-obsidian-900 to-obsidian-700 text-white py-16 overflow-hidden">
          <video
            src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-20 animate-fade-in"
            style={{ pointerEvents: "none", zIndex: 0 }}
          />
          <div className="container mx-auto px-4 relative z-10 animate-fade-in-up">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
                Acerca de Liderflex Hidráulica
              </h1>
              <p className="text-xl max-w-3xl mx-auto animate-fade-in-up delay-100">
                Proveedor líder de soluciones premium de mangueras hidráulicas e
                industriales con más de X años de experiencia
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
                  Fundada en XXXX, Liderflex Hidráulica comenzó como un pequeño
                  negocio con la visión de proporcionar las soluciones de
                  mangueras hidráulicas de más alta calidad a clientes
                  industriales en Antofagasta y toda Chile.
                </p>
                <p className="text-gray-600 mb-4 transition-colors duration-300 hover:text-yellow-600">
                  A lo largo de los años, hemos crecido para convertirnos en un
                  socio de confianza para empresas en los sectores minero,
                  construcción, manufactura y agricultura. Nuestro compromiso
                  con la calidad, innovación y servicio al cliente nos ha
                  convertido en líderes de la industria hidráulica.
                </p>
                <p className="text-gray-600 transition-colors duration-300 hover:text-yellow-600">
                  Hoy, continuamos expandiendo nuestra línea de productos y
                  servicios mientras mantenemos el toque personal y la atención
                  al detalle que ha definido nuestra empresa desde el primer
                  día.
                </p>
              </div>
              <div className="relative group animate-fade-in-up">
                <video
                  src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
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
                    Proporcionar soluciones hidráulicas e industriales
                    superiores que superen las expectativas de nuestros clientes
                    a través de productos innovadores, servicio excepcional y
                    experiencia técnica. Estamos comprometidos a ayudar a
                    nuestros clientes a lograr la excelencia operacional
                    manteniendo los más altos estándares de seguridad y
                    confiabilidad.
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
                    Ser el proveedor líder de soluciones hidráulicas en Chile,
                    reconocido por nuestra innovación, calidad y enfoque
                    centrado en el cliente. Visualizamos un futuro donde
                    nuestros productos y servicios permitan a las industrias
                    operar de manera más eficiente, segura y sostenible mientras
                    contribuimos al crecimiento económico de nuestras
                    comunidades.
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
                  Excelencia en Calidad
                </h3>
                <p className="text-gray-600 group-hover:text-yellow-600 transition-colors duration-300">
                  Nunca comprometemos la calidad. Cada producto cumple con los
                  más altos estándares de la industria y se somete a pruebas
                  rigurosas para garantizar confiabilidad y rendimiento.
                </p>
              </div>

              <div className="text-center group animate-fade-in-up delay-100">
                <div className="bg-obsidian-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-10 h-10 text-obsidian-800 animate-pulse" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-obsidian-800 transition-colors duration-300">
                  Enfoque en el Cliente
                </h3>
                <p className="text-gray-600 group-hover:text-obsidian-800 transition-colors duration-300">
                  Nuestros clientes están en el corazón de todo lo que hacemos.
                  Escuchamos, entendemos sus necesidades y proporcionamos
                  soluciones personalizadas que impulsan su éxito.
                </p>
              </div>

              <div className="text-center group animate-fade-in-up delay-200">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Wrench className="w-10 h-10 text-green-600 animate-pulse" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-green-600 transition-colors duration-300">
                  Experiencia Técnica
                </h3>
                <p className="text-gray-600 group-hover:text-green-600 transition-colors duration-300">
                  Nuestro equipo de expertos aporta décadas de experiencia y
                  conocimiento técnico para resolver incluso los desafíos
                  hidráulicos más complejos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Nuestro Equipo Directivo
              </h2>
              <p className="text-gray-600">
                Conoce a los profesionales experimentados que lideran Liderflex
                Hidráulica
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="group hover:scale-105 hover:shadow-2xl transition-all duration-500 animate-fade-in-up">
                <CardContent className="p-6 text-center">
                  <div className="relative">
                    <video
                      src="/placeholder.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover group-hover:scale-110 transition-transform duration-500 border-4 border-yellow-400"
                      style={{ minHeight: 128, maxHeight: 150 }}
                    />
                    <div className="absolute inset-0 rounded-full bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-600 transition-colors duration-300">
                    Fernando Montaño
                  </h3>
                  <p className="text-yellow-600 font-semibold mb-3">
                    CEO y Fundador
                  </p>
                  <p className="text-gray-600 text-sm group-hover:text-yellow-600 transition-colors duration-300">
                    Con más de X años en la industria hidráulica, Fernando fundó
                    Liderflex con la visión de proporcionar soluciones
                    hidráulicas excepcionales.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:scale-105 hover:shadow-2xl transition-all duration-500 animate-fade-in-up delay-100">
                <CardContent className="p-6 text-center">
                  <div className="relative">
                    <video
                      src="/placeholder.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover group-hover:scale-110 transition-transform duration-500 border-4 border-obsidian-800"
                      style={{ minHeight: 128, maxHeight: 150 }}
                    />
                    <div className="absolute inset-0 rounded-full bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-obsidian-800 transition-colors duration-300">
                    Johanna Maldonado
                  </h3>
                  <p className="text-yellow-600 font-semibold mb-3">
                    Directora Técnica
                  </p>
                  <p className="text-gray-600 text-sm group-hover:text-obsidian-800 transition-colors duration-300">
                    Johanna lidera nuestro equipo técnico con X años de
                    experiencia en ingeniería de sistemas hidráulicos y
                    aplicaciones industriales.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:scale-105 hover:shadow-2xl transition-all duration-500 animate-fade-in-up delay-200">
                <CardContent className="p-6 text-center">
                  <div className="relative">
                    <video
                      src="/placeholder.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover group-hover:scale-110 transition-transform duration-500 border-4 border-green-600"
                      style={{ minHeight: 128, maxHeight: 150 }}
                    />
                    <div className="absolute inset-0 rounded-full bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-green-600 transition-colors duration-300">
                    Carlos Rodríguez
                  </h3>
                  <p className="text-yellow-600 font-semibold mb-3">
                    Director de Operaciones
                  </p>
                  <p className="text-gray-600 text-sm group-hover:text-green-600 transition-colors duration-300">
                    Carlos supervisa nuestras operaciones y cadena de
                    suministro, asegurando la entrega eficiente de productos de
                    calidad a nuestros clientes.
                  </p>
                </CardContent>
              </Card>
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

        <Footer />
      </div>
    </CartProvider>
  );
}
