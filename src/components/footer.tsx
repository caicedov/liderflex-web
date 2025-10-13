"use client";

import { MapPin, Phone, Mail, FacebookIcon, InstagramIcon } from "lucide-react";
import Image from "next/image";

const footerLinks = {
  products: [
    "Mangueras Hidráulicas",
    "Mangueras Industriales",
    "Mangueras Neumáticas",
    "Ensamblajes Personalizados",
    "Conexiones y Adaptadores",
    "Servicios de Reparación",
  ],
  company: [
    "Nosotros",
    "Garantía de Calidad",
    "Certificaciones",
    "Soporte Técnico",
    "Guía de Instalación",
    "Garantía",
  ],
  account: [
    "Mi Cuenta",
    "Historial de Pedidos",
    "Rastrear Pedido",
    "Devoluciones",
    "Tickets de Soporte",
    "Pedidos al Por Mayor",
  ],
};

const paymentMethods = [
  "/cash.png?height=30&width=50",
  "/visa.png?height=30&width=50",
  "/mastercard.png?height=30&width=50",
];

export default function Footer() {
  return (
    <footer className="bg-obsidian-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Our Store */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Acerca de Nuestra Empresa
            </h3>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Bienvenido a Liderflex Hidráulica, donde nos especializamos en
              proporcionar soluciones excepcionales de mangueras hidráulicas e
              industriales. Nuestra empresa es un refugio para aquellos que
              aprecian la calidad, confiabilidad e innovación en sistemas
              hidráulicos.
            </p>
            <div className="flex gap-3">
              <a
                href="https://web.facebook.com/profile.php?id=61554757093817"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-6 h-6 text-gray-300 hover:text-yellow-400 transition-colors" />
              </a>

              <a
                href="https://www.instagram.com/liderflexhidraulica"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-6 h-6 text-gray-300 hover:text-yellow-400 transition-colors" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xl font-bold mb-4">Productos</h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link}>
                  <a
                    href={`/productos/${encodeURIComponent(link.toLowerCase().replace(/\s+/g, "-"))}`}
                    className="text-gray-300 hover:text-yellow-400 text-sm transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Company */}
          <div>
            <h3 className="text-xl font-bold mb-4">Nuestra Empresa</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <a
                    href={`/empresa/${encodeURIComponent(link.toLowerCase().replace(/\s+/g, "-"))}`}
                    className="text-gray-300 hover:text-yellow-400 text-sm transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contáctanos</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>Maullín 5634, Antofagasta</p>
                  <p>Av. Antonio Rendic 5584, Antofagasta</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-yellow-400" />
                <div className="text-sm text-gray-300">
                  <p>+569-59497551</p>
                  <p>+569-50084069</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-yellow-400" />
                <span className="text-sm text-gray-300">
                  administracion@liderflexhidraulica.cl
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2025 Liderflex Hidráulica - Soluciones Hidráulicas Premium
            </p>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-400 mr-4">Aceptamos:</span>
              {paymentMethods.map((method) => (
                <Image
                  key={method}
                  src={method || "/placeholder.svg"}
                  alt="Método de pago"
                  width={40}
                  height={20}
                  className="rounded"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/**
       * 
       * Recent Purchase Notification 
       * 
       * <div className="fixed bottom-4 left-4 bg-white rounded-lg shadow-lg p-4 max-w-sm z-50">
        <div className="flex items-center gap-3">
          <Image
            src="/placeholder.svg?height=40&width=40"
            alt="Producto"
            width={40}
            height={40}
            className="rounded"
          />
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-900">
              Alguien compró recientemente
            </p>
            <p className="text-xs text-gray-600">
              Kit de Manguera Hidráulica Premium
            </p>
            <p className="text-xs text-gray-500">Hace 2 minutos ✓ Verificado</p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="text-gray-400 hover:text-gray-600"
          >
            ×
          </Button>
        </div>
      </div>
       * 
       * */}
    </footer>
  );
}
