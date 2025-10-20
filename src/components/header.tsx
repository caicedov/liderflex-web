"use client";

import { useMemo, useState, useEffect } from "react";
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
  const [isScrolled, setIsScrolled] = useState(false);
  const [category, setCategory] = useState<string>("all");

  const inShop = useMemo(
    () =>
      pathname.startsWith("/shop") ||
      pathname.startsWith("/products") ||
      pathname.startsWith("/product"),
    [pathname]
  );

  const cartQty = state.items.reduce((sum, item) => sum + item.quantity, 0);
  const categories = useMemo(
    () => Array.from(new Set(products.map((p) => p.category))).sort(),
    []
  );

  /** 🪄 Scroll effect: hace que la barra se vuelva sólida al bajar */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ----------- HEADER PARA TIENDA ----------- */}
      {inShop && (
        <header className="bg-obsidian-900 text-white backdrop-blur-lg bg-opacity-90">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-between gap-4">
              <Link href="/shop" className="shrink-0" aria-label="Ir a Tienda">
                <Image
                  src="/logo-white.png"
                  alt="Liderflex Hidráulica"
                  className="mr-3 drop-shadow-lg"
                  width={220}
                  height={36}
                  priority
                />
              </Link>

              <div className="flex-1 max-w-2xl mx-2 md:mx-8">
                <form
                  className="flex rounded-md overflow-hidden bg-white/90 backdrop-blur-sm"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <select
                    className="bg-white text-black px-3 md:px-4 py-2 text-sm md:text-base border-r outline-none"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="all">Todas las Categorías</option>
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                  <Input
                    placeholder="Buscar productos..."
                    className="flex-1 rounded-none border-0 text-black focus:ring-yellow-400 focus:border-yellow-400"
                  />
                  <Button
                    type="submit"
                    className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 md:px-6"
                  >
                    <Search className="w-4 h-4 mr-2" />
                    <span className="hidden sm:inline">BUSCAR</span>
                  </Button>
                </form>
              </div>

              <div className="flex items-center gap-3 md:gap-5">
                <a href="tel:+56959497551" className="hidden md:flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <div className="text-sm leading-tight">
                    <div className="opacity-80">Llama Ahora:</div>
                    <div className="font-semibold tracking-wide">
                      +569-59497551
                    </div>
                  </div>
                </a>

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
                    {cartQty}
                  </Badge>
                </Button>
              </div>
            </div>
          </div>
        </header>
      )}

      {/* ----------- NAVBAR PRINCIPAL (HOME, ABOUT, ETC) ----------- */}
      {!inShop && (
        <nav
          className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md transition-all duration-500 ease-in-out border-b border-yellow-300/30
            ${
              isScrolled
                ? "bg-yellow-400/95 shadow-lg"
                : ""
            }
          `}
          aria-label="Navegación principal"
        >
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-0 md:py-2">
              {/* Logo */}
              <Link href="/" className="shrink-0" aria-label="Ir a Inicio">
                <Image
                  src="/logo-color.png"
                  alt="Liderflex Hidráulica"
                  className="mr-3 drop-shadow-lg transition-transform duration-200 hover:scale-105"
                  width={180}
                  height={40}
                  priority
                />
              </Link>

              {/* Navegación */}
              <div className="flex items-center gap-6 md:gap-10 text-sm md:text-base font-semibold">
                <NavLink href="/" current={pathname === "/"}>
                  Inicio
                </NavLink>
                <NavLink href="/shop" current={pathname.startsWith("/shop")}>
                  Tienda
                </NavLink>
                <NavLink href="/about" current={pathname === "/about"}>
                  Nosotros
                </NavLink>
                <NavLink href="/contact" current={pathname === "/contact"}>
                  Contacto
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      )}

      <CartSheet isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}

/** 🔗 Enlaces de navegación */
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
      className={`relative transition-all duration-300 ease-out 
        text-white tracking-wide 
        after:content-[''] after:absolute after:left-0 after:bottom-[-4px]
        after:w-0 after:h-[2px] after:bg-yellow-300 after:transition-all after:duration-300 
        hover:after:w-full hover:text-yellow-200
        ${current ? "text-yellow-100 after:w-full" : "opacity-90 hover:opacity-100"}
      `}
    >
      {children}
    </Link>
  );
}