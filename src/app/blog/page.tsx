"use client";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight } from "lucide-react";
import { CartProvider } from "@/components/cart-context";
import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    title:
      "Entendiendo las Clasificaciones de Presión de Mangueras Hidráulicas: Guía Completa",
    excerpt:
      "Aprende cómo seleccionar la manguera hidráulica correcta basándose en los requisitos de presión y factores de seguridad para tus aplicaciones industriales.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Guía Técnica",
    author: "Johanna Maldonado",
    date: "15 de Enero, 2025",
    readTime: "8 min de lectura",
  },
  {
    id: 2,
    title:
      "5 Señales de que tus Mangueras Hidráulicas Necesitan Reemplazo Inmediato",
    excerpt:
      "Identifica señales críticas de advertencia que indican falla de mangueras hidráulicas para prevenir costosos tiempos de inactividad y riesgos de seguridad.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Mantenimiento",
    author: "Carlos Rodríguez",
    date: "10 de Enero, 2025",
    readTime: "6 min de lectura",
  },
  {
    id: 3,
    title: "El Futuro de la Tecnología Hidráulica en Aplicaciones Industriales",
    excerpt:
      "Explora las tendencias emergentes e innovaciones que están dando forma a la industria hidráulica, desde sensores inteligentes hasta fluidos ecológicos.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Noticias de la Industria",
    author: "Fernando Montaño",
    date: "5 de Enero, 2025",
    readTime: "10 min de lectura",
  },
  {
    id: 4,
    title: "Almacenamiento y Manejo Adecuado de Mangueras Hidráulicas",
    excerpt:
      "Mejores prácticas para almacenar y manejar mangueras hidráulicas para mantener la calidad y extender la vida útil.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Mejores Prácticas",
    author: "María Santos",
    date: "28 de Diciembre, 2024",
    readTime: "7 min de lectura",
  },
  {
    id: 5,
    title:
      "Ensamblaje de Mangueras Hidráulicas: Guía de Instalación Paso a Paso",
    excerpt:
      "Consejos profesionales y técnicas para el ensamblaje e instalación adecuada de mangueras hidráulicas en sistemas industriales.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Guía Técnica",
    author: "Johanna Maldonado",
    date: "20 de Diciembre, 2024",
    readTime: "12 min de lectura",
  },
  {
    id: 6,
    title:
      "Estrategias de Mantenimiento de Sistemas Hidráulicos Costo-Efectivas",
    excerpt:
      "Reduce los costos operacionales y mejora la confiabilidad del sistema con estas estrategias de mantenimiento probadas.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Mantenimiento",
    author: "Carlos Rodríguez",
    date: "15 de Diciembre, 2024",
    readTime: "9 min de lectura",
  },
];

const categories = [
  "Todos",
  "Guía Técnica",
  "Mantenimiento",
  "Noticias de la Industria",
  "Mejores Prácticas",
];

export default function BlogPage() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-white">

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-obsidian-900 to-obsidian-700 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Centro de Conocimiento Hidráulico
              </h1>
              <p className="text-xl max-w-3xl mx-auto">
                Mantente informado con las últimas perspectivas, consejos y
                noticias de la industria sobre sistemas hidráulicos y tecnología
                de mangueras
              </p>
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={category === "Todos" ? "default" : "outline"}
                  className={`px-4 py-2 cursor-pointer hover:bg-yellow-400 hover:text-black ${
                    category === "Todos" ? "bg-yellow-400 text-black" : ""
                  }`}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Artículo Destacado</h2>
            </div>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src={blogPosts[0].image || "/placeholder.svg"}
                    alt={blogPosts[0].title}
                    fill
                    className="object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-yellow-400 text-black">
                    {blogPosts[0].category}
                  </Badge>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {blogPosts[0].author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {blogPosts[0].date}
                    </div>
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    {blogPosts[0].title}
                  </h3>
                  <p className="text-gray-600 mb-6">{blogPosts[0].excerpt}</p>
                  <button
                    type="button"
                    className="flex items-center gap-2 text-yellow-600 font-semibold hover:text-yellow-700"
                  >
                    Leer Más <ArrowRight className="w-4 h-4" />
                  </button>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Artículos Recientes</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post) => (
                <Card
                  key={post.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow group"
                >
                  <div className="relative h-48">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-yellow-400 text-black">
                      {post.category}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">
                        {post.readTime}
                      </span>
                      <button
                        type="button"
                        className="flex items-center gap-1 text-yellow-600 font-semibold hover:text-yellow-700 text-sm"
                      >
                        Leer Más <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-yellow-400">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-black mb-4">
              Mantente Actualizado
            </h2>
            <p className="text-black mb-8 max-w-2xl mx-auto">
              Suscríbete a nuestro boletín para recibir las últimas perspectivas
              de la industria hidráulica, guías técnicas y actualizaciones de
              productos directamente en tu bandeja de entrada.
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Ingresa tu correo"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button
                type="button"
                className="bg-obsidian-800 hover:bg-obsidian-700 text-white px-6 py-3 rounded-lg font-semibold"
              >
                Suscribirse
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </CartProvider>
  );
}
