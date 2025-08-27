"use client";
import { useState } from "react";
import type React from "react";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { CartProvider } from "@/components/cart-context";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });
  const [showWhatsAppMessage, setShowWhatsAppMessage] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
    // Handle form submission
    alert("¡Gracias por tu mensaje! Te contactaremos pronto.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: "",
    });
  };

  const handleWhatsAppClick = () => {
    setShowWhatsAppMessage(true);
    setTimeout(() => {
      setShowWhatsAppMessage(false);
      // Redirect to WhatsApp
      window.open(
        "https://wa.me/56551234567?text=Hola%20Liderflex%20Hidráulica,%20estoy%20interesado%20en%20sus%20productos%20de%20mangueras%20hidráulicas",
        "_blank",
      );
    }, 2000);
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <Header />

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-obsidian-900 to-obsidian-700 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Contáctanos
              </h1>
              <p className="text-xl max-w-3xl mx-auto">
                Ponte en contacto con nuestros expertos hidráulicos. Estamos
                aquí para ayudarte con todas tus necesidades de mangueras
                industriales.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-yellow-600" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Nuestra Ubicación</h3>
                  <p className="text-gray-600 text-sm">
                    Zona Industrial, Sector Hidráulico
                    <br />
                    Antofagasta, Chile 1240000
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-obsidian-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-obsidian-800" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Número de Teléfono</h3>
                  <p className="text-gray-600 text-sm">
                    (+56) 55-123-4567
                    <br />
                    (+56) 55-987-6543
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Correo Electrónico</h3>
                  <p className="text-gray-600 text-sm">
                    info@liderflexhidraulica.cl
                    <br />
                    ventas@liderflexhidraulica.cl
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">
                    Horario de Atención
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Lun - Vie: 8:00 AM - 6:00 PM
                    <br />
                    Sáb: 9:00 AM - 2:00 PM
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Envíanos un Mensaje</h2>
                <p className="text-gray-600 mb-8">
                  ¿Tienes preguntas sobre nuestras mangueras hidráulicas o
                  necesitas una solución personalizada? Completa el formulario a
                  continuación y nuestros expertos te responderán dentro de 24
                  horas.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Nombre Completo *
                      </label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Correo Electrónico *
                      </label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Número de Teléfono
                      </label>
                      <Input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Nombre de la Empresa
                      </label>
                      <Input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Asunto *
                    </label>
                    <Input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Mensaje *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full"
                      placeholder="Cuéntanos sobre tus requerimientos de mangueras hidráulicas..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3"
                  >
                    Enviar Mensaje
                  </Button>
                </form>
              </div>

              {/* Map and Additional Info */}
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Visita Nuestras Instalaciones
                </h2>

                {/* Map Placeholder */}
                <div className="bg-gray-200 h-64 rounded-lg mb-6 flex items-center justify-center">
                  <p className="text-gray-500">Mapa Interactivo Próximamente</p>
                </div>

                {/* Quick Contact Options */}
                <div className="space-y-4">
                  <Card className="border-2 border-yellow-400">
                    <CardContent className="p-4">
                      <h3 className="font-bold text-lg mb-2">
                        Soporte de Emergencia
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        ¿Necesitas reemplazo urgente de mangueras hidráulicas?
                        Nuestro equipo de emergencia está disponible 24/7.
                      </p>
                      <Button
                        variant="outline"
                        className="w-full bg-transparent"
                      >
                        Llamar Línea de Emergencia: (+56) 55-URGENTE
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-green-500">
                    <CardContent className="p-4">
                      <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                        <MessageCircle className="w-5 h-5 text-green-600" />
                        Soporte por WhatsApp
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        Obtén soporte instantáneo y cotizaciones a través de
                        WhatsApp. ¡Rápido y conveniente!
                      </p>
                      <Button
                        onClick={handleWhatsAppClick}
                        className="w-full bg-green-500 hover:bg-green-600 text-white"
                      >
                        Contactar vía WhatsApp
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4">
                      <h3 className="font-bold text-lg mb-2">
                        Consultoría Técnica
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        Programa una consulta gratuita con nuestros ingenieros
                        hidráulicos para proyectos complejos.
                      </p>
                      <Button
                        variant="outline"
                        className="w-full bg-transparent"
                      >
                        Programar Consulta
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WhatsApp Redirect Message */}
        {showWhatsAppMessage && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <MessageCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">
                Redirigiendo a WhatsApp...
              </h3>
              <p className="text-gray-600">
                Por favor espera mientras te conectamos con nuestro equipo de
                soporte.
              </p>
            </div>
          </div>
        )}

        <Footer />
      </div>
    </CartProvider>
  );
}
