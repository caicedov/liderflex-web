"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, ShoppingCart, Phone, User, Heart } from "lucide-react";
import { useCart } from "@/components/cart-context";
import Image from "next/image";
import CartSheet from "@/components/cart-sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { products } from "./product-data";

export default function Header() {
  const pathname = usePathname();
  const { state } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Determina si estamos en páginas de tienda
  const inShop = useMemo(() => {
    return (
      pathname.startsWith("/shop") ||
      pathname.startsWith("/products") ||
      pathname.startsWith("/product")
    );
  }, [pathname]);

  const cartQty = state.items.reduce((sum, item) => sum + item.quantity, 0);
  const categories = useMemo(
    () => Array.from(new Set(products.map((p) =>
    p.category))).sort(), []
  )

  const [category, setCategory] = useState<string>("all");

  return (
    <>
      {/* Header oscuro SOLO en páginas de tienda */}
      {inShop && (
        <header className="bg-obsidian-900 text-white">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between gap-4">
              {/* Logo */}
              <Link href="/shop" className="shrink-0" aria-label="Ir a Tienda">
                <Image
                  src="/logo-white.png"
                  alt="Liderflex Hidráulica"
                  className="mr-3 drop-shadow-lg"
                  width={180}
                  height={24}
                  priority
                />
              </Link>

              {/* Buscador */}
              <div className="flex-1 max-w-2xl mx-2 md:mx-8">
                <form className="flex rounded-md overflow-hidden bg-white" onSubmit={(e) => e.preventDefault()}>
                  <select
                    className="bg-white text-black px-3 md:px-4 py-2 text-sm md:text-base border-r outline-none"
                    aria-label="Categoría de búsqueda"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="all">Todas las Categorías</option>
                    {
                      categories.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))
                    }
                  </select>
                  <Input
                    placeholder="Buscar mangueras hidráulicas..."
                    className="flex-1 rounded-none border-0 text-black focus:ring-yellow-400 focus:border-yellow-400"
                    aria-label="Buscar productos"
                  />
                  <Button
                    type="submit"
                    className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 md:px-6"
                    aria-label="Buscar"
                  >
                    <Search className="w-4 h-4 mr-2" />
                    <span className="hidden sm:inline">BUSCAR</span>
                  </Button>
                </form>
              </div>

              {/* Lado derecho */}
              <div className="flex items-center gap-2 md:gap-4">
                <a
                  href="tel:+56551234567"
                  className="hidden md:flex items-center gap-2"
                  aria-label="Llamar por teléfono"
                >
                  <Phone className="w-4 h-4" />
                  <div className="text-sm leading-tight">
                    <div className="opacity-80">Llama Ahora:</div>
                    <div className="font-semibold">+569-59497551</div>
                  </div>
                </a>

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
                  aria-label={`Carrito de compras, ${cartQty} producto(s)`}
                >
                  <ShoppingCart className="w-5 h-5" />
                  <Badge className="absolute -top-2 -right-2 bg-yellow-400 text-black">
                    {cartQty}
                  </Badge>
                </Button>
              </div>
            </div>
          </div>
        </header>
      )}

      {/* Barra amarilla SOLO cuando NO estás en páginas de tienda */}
      {!inShop && (
        <nav className="bg-yellow-400 text-black" aria-label="Navegación principal">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-3 md:py-4">
              {/* Logo */}
              <Link href="/" className="shrink-0" aria-label="Ir a Inicio">
                <Image
                  src="/logo-color.png"
                  alt="Liderflex Hidráulica"
                  className="mr-3 drop-shadow-lg"
                  width={100}
                  height={20}
                  priority
                />
              </Link>

              {/* Links */}
              <div className="flex items-center gap-6 md:gap-8">
                <NavLink href="/" current={pathname === "/"}>Inicio</NavLink>
                <NavLink href="/shop" current={pathname === "/shop"}>Tienda</NavLink>
                <NavLink href="/about" current={pathname === "/about"}>Nosotros</NavLink>
                <NavLink href="/contact" current={pathname === "/contact"}>Contacto</NavLink>
              </div>
            </div>
          </div>
        </nav>
      )}

      {/* Cart Drawer */}
      <CartSheet isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}

function NavLink({
  href,
  current,
  children,
}: {
  href: string;
  current?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-current={current ? "page" : undefined}
      className={`font-medium transition ${
        current ? "text-obsidian-900" : "hover:text-obsidian-900"
      }`}
    >
      {children}
    </Link>
  );
}