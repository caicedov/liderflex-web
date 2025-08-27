"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, ShoppingCart, Menu, Phone, User, Heart } from "lucide-react";
import { useCart } from "@/components/cart-context";

import Image from "next/image";
import CartSheet from "@/components/cart-sheet";
import Link from "next/link";

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
            <Link href="/about" className="hover:text-yellow-400">
              Nosotros
            </Link>
            <Link href="/blog" className="hover:text-yellow-400">
              Blog
            </Link>
            <Link href="/contact" className="hover:text-yellow-400">
              Contacto
            </Link>
            <Link href="/faq" className="hover:text-yellow-400">
              FAQ
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-obsidian-900 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="">
              <Image
                src="/logo-white.png"
                alt="Liderflex Hidráulica Logo"
                className=" mr-3 drop-shadow-lg"
                width={140}
                height={24}
                priority
              />
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-8">
              <search className="flex">
                <select
                  className="bg-white text-black px-4 py-2 rounded-l-md border-r"
                  aria-label="Categoría de búsqueda"
                >
                  <option>Todas las Categorías</option>
                  <option>Mangueras Hidráulicas</option>
                  <option>Mangueras Industriales</option>
                  <option>Conexiones</option>
                  <option>Adaptadores</option>
                </select>
                <Input
                  placeholder="Buscar mangueras hidráulicas..."
                  className="flex-1 rounded-none border-0 focus:ring-yellow-400 focus:border-yellow-400"
                  aria-label="Buscar productos"
                />
                <Button
                  type="submit"
                  className="bg-yellow-400 hover:bg-yellow-500 text-black rounded-r-md px-6"
                  aria-label="Buscar"
                >
                  <Search className="w-4 h-4" />
                  BUSCAR
                </Button>
              </search>
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
                aria-label="Cuenta de usuario"
              >
                <User className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-yellow-400 relative"
                aria-label="Lista de deseos"
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
                aria-label={`Carrito de compras, ${state.items.reduce((sum, item) => sum + item.quantity, 0)} productos`}
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
      <nav
        className="bg-yellow-400 text-black py-3"
        aria-label="Navegación principal"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Button className="bg-white text-black hover:bg-gray-100">
              <Menu className="w-4 h-4 mr-2" />
              COMPRAR POR CATEGORÍAS
            </Button>

            <div className="flex items-center gap-8">
              <Link href="/" className="font-medium hover:text-obsidian-900">
                Inicio
              </Link>
              <div className="relative group">
                <Link
                  href="/shop"
                  className="font-medium hover:text-obsidian-900"
                >
                  Tienda
                </Link>
              </div>
              {/** 
                 * <div className="relative group">
                <Link
                  href="/categories"
                  className="font-medium hover:text-obsidian-900"
                >
                  Categorías{" "}
                  <Badge className="bg-obsidian-600 text-white ml-1">
                    OFERTA
                  </Badge>
                </Link>
              </div>
              <div className="relative group">
                <Link
                  href="/products"
                  className="font-medium hover:text-obsidian-900"
                >
                  Productos{" "}
                  <Badge className="bg-red-600 text-white ml-1">NUEVO</Badge>
                </Link>
              </div>
              <Link
                href="/deals"
                className="font-medium hover:text-obsidian-900"
              >
                Ofertas del Día
              </Link>
                */}

              <Link
                href="/about"
                className="font-medium hover:text-obsidian-900"
              >
                Nosotros
              </Link>
              <Link
                href="/blog"
                className="font-medium hover:text-obsidian-900"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="font-medium hover:text-obsidian-900"
              >
                Contacto
              </Link>
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
