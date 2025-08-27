"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, ShoppingCart, Menu, Phone, User, Heart } from "lucide-react";
import { useCart } from "@/components/cart-context";
import CartSheet from "@/components/cart-sheet";

export default function Header() {
  const { state } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-obsidian-900 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <span>
              Obtén hasta 25% de Cashback en tu Primera Orden: GET25OFF -{" "}
            </span>
            <Button
              variant="link"
              className="text-yellow-400 p-0 h-auto font-semibold"
            >
              COMPRAR AHORA
            </Button>
          </div>
          <div className="flex items-center gap-6">
            <a href="/about" className="hover:text-yellow-400">
              Nosotros
            </a>
            <a href="/blog" className="hover:text-yellow-400">
              Blog
            </a>
            <a href="/contact" className="hover:text-yellow-400">
              Contacto
            </a>
            <a href="#" className="hover:text-yellow-400">
              FAQ
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-obsidian-900 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <div className="bg-yellow-400 text-black p-2 rounded-lg mr-3">
                <div className="w-8 h-8 flex items-center justify-center font-bold text-xl">
                  L
                </div>
              </div>
              <h1 className="text-2xl font-bold text-yellow-400">
                Liderflex Hidráulica
              </h1>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-8">
              <div className="flex">
                <select className="bg-white text-black px-4 py-2 rounded-l-md border-r">
                  <option>Todas las Categorías</option>
                  <option>Mangueras Hidráulicas</option>
                  <option>Mangueras Industriales</option>
                  <option>Conexiones</option>
                  <option>Adaptadores</option>
                </select>
                <Input
                  placeholder="Buscar mangueras hidráulicas..."
                  className="flex-1 rounded-none border-0 focus:ring-yellow-400 focus:border-yellow-400"
                />
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-black rounded-r-md px-6">
                  <Search className="w-4 h-4" />
                  BUSCAR
                </Button>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <div className="text-sm">
                  <div>Llama Ahora:</div>
                  <div className="font-semibold">+56-55-123-4567</div>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-yellow-400"
              >
                <User className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-yellow-400 relative"
              >
                <Heart className="w-5 h-5" />
                <Badge className="absolute -top-2 -right-2 bg-yellow-400 text-black">
                  0
                </Badge>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-yellow-400 relative"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingCart className="w-5 h-5" />
                <Badge className="absolute -top-2 -right-2 bg-yellow-400 text-black">
                  {state.items.reduce((sum, item) => sum + item.quantity, 0)}
                </Badge>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-yellow-400 text-black py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Button className="bg-white text-black hover:bg-gray-100">
              <Menu className="w-4 h-4 mr-2" />
              COMPRAR POR CATEGORÍAS
            </Button>

            <div className="flex items-center gap-8">
              <a href="/" className="font-medium hover:text-obsidian-900">
                Inicio
              </a>
              <div className="relative group">
                <a href="/shop" className="font-medium hover:text-obsidian-900">
                  Tienda
                </a>
              </div>
              <div className="relative group">
                <a href="#" className="font-medium hover:text-obsidian-900">
                  Categorías{" "}
                  <Badge className="bg-obsidian-600 text-white ml-1">
                    OFERTA
                  </Badge>
                </a>
              </div>
              <div className="relative group">
                <a href="#" className="font-medium hover:text-obsidian-900">
                  Productos{" "}
                  <Badge className="bg-red-600 text-white ml-1">NUEVO</Badge>
                </a>
              </div>
              <a href="#" className="font-medium hover:text-obsidian-900">
                Ofertas del Día
              </a>
              <a href="/about" className="font-medium hover:text-obsidian-900">
                Nosotros
              </a>
              <a href="/blog" className="font-medium hover:text-obsidian-900">
                Blog
              </a>
              <a
                href="/contact"
                className="font-medium hover:text-obsidian-900"
              >
                Contacto
              </a>
            </div>

            <Button
              variant="outline"
              className="border-black text-black hover:bg-black hover:text-white bg-transparent"
            >
              Ofertas de Hoy
            </Button>
          </div>
        </div>
      </nav>

      <CartSheet isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
