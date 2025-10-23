"use client";

import { useMemo, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  ShoppingCart,
  Phone,
  User,
  Heart,
  LogOut,
  Settings,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";
import { useCart } from "@/components/cart-context";
import { useAuth } from "@/contexts/auth-context";
import AuthModal from "@/components/auth/auth-modal";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import Image from "next/image";
import CartSheet from "@/components/cart-sheet";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { products } from "./product-data";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { user, profile, signOut } = useAuth();
  const { state } = useCart();

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [category, setCategory] = useState<string>("all");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  const isHome = pathname === "/";
  const inShop = useMemo(
    () =>
      pathname.startsWith("/shop") ||
      pathname.startsWith("/products") ||
      pathname.startsWith("/product"),
    [pathname],
  );

  const cartQty = state.items.reduce((sum, item) => sum + item.quantity, 0);
  const categories = useMemo(
    () => Array.from(new Set(products.map((p) => p.category))).sort(),
    [],
  );

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cierra menú móvil al navegar
  useEffect(() => {
    setMobileNavOpen(false);
    setMobileSearchOpen(false);
  }, [pathname]);

  return (
    <>
      {/* ----------- HEADER PARA TIENDA ----------- */}
      {inShop && (
        <header
          className={[
            "sticky top-0 z-50 text-white transition-all duration-300",
            "bg-obsidian-900",
            isScrolled ? "shadow-lg" : "shadow-md",
          ].join(" ")}
        >
          <div className="mx-auto w-full max-w-7xl px-3 sm:px-4">
            {/* Top row */}
            <div className="flex items-center justify-between gap-2 py-2 sm:py-3">
              {/* Left: Logo + Burger */}
              <div className="flex items-center gap-2">
                <button
                  className="inline-flex items-center justify-center rounded-md p-2 text-white hover:text-yellow-400 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors lg:hidden"
                  aria-label="Abrir menú"
                  onClick={() => setMobileNavOpen(true)}
                >
                  <Menu className="h-6 w-6" />
                </button>

                <Link
                  href="/"
                  className="shrink-0"
                  aria-label="Ir a Tienda"
                >
                  <Image
                    src="/logo-color.png"
                    alt="Liderflex Hidráulica"
                    className="drop-shadow-lg transition-transform hover:scale-105"
                    width={150}
                    height={28}
                    priority
                  />
                </Link>
              </div>

              {/* Middle: Search desktop */}
              <div className="hidden flex-1 lg:block lg:max-w-2xl lg:mx-4">
                <SearchBar
                  category={category}
                  setCategory={setCategory}
                  categories={categories}
                />
              </div>

              {/* Right: Icons */}
              <div className="flex items-center gap-1 sm:gap-2 md:gap-3">
                {/* Mobile search toggle */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:text-yellow-400 hover:bg-white/10 lg:hidden"
                  aria-label="Buscar"
                  onClick={() => setMobileSearchOpen((v) => !v)}
                >
                  <Search className="w-5 h-5" />
                </Button>

                <a
                  href="tel:+56959497551"
                  className="hidden min-w-[180px] items-center gap-2 xl:flex"
                >
                  <Phone className="w-4 h-4" />
                  <div className="text-xs leading-tight">
                    <div className="opacity-80">Llama Ahora:</div>
                    <div className="font-semibold tracking-wide">
                      +569-59497551
                    </div>
                  </div>
                </a>

                {user ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-white hover:text-yellow-400 hover:bg-white/10 relative"
                        aria-label="Cuenta"
                      >
                        <User className="w-5 h-5" />
                        <span className="absolute -bottom-1 -right-1 block h-3 w-3 rounded-full border-2 border-obsidian-900 bg-green-500" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="end"
                      className="w-56 bg-white text-black shadow-lg border border-gray-200"
                    >
                      <div className="px-3 py-2 border-b">
                        <p className="font-medium truncate">
                          {profile?.full_name || "Usuario"}
                        </p>
                        <p className="text-sm text-gray-500 truncate">
                          {profile?.email}
                        </p>
                      </div>
                      <DropdownMenuItem
                        onClick={() => router.push("/dashboard")}
                      >
                        <Settings className="mr-2 h-4 w-4" />
                        Dashboard
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => router.push("/dashboard/profile")}
                      >
                        <User className="mr-2 h-4 w-4" />
                        Mi Perfil
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => router.push("/dashboard/quotations")}
                      >
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Mis Cotizaciones
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={signOut}>
                        <LogOut className="mr-2 h-4 w-4" />
                        Cerrar Sesión
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:text-yellow-400 hover:bg-white/10"
                    aria-label="Iniciar sesión"
                    onClick={() => setIsAuthOpen(true)}
                  >
                    <User className="w-5 h-5" />
                  </Button>
                )}

                <Button
                  variant="ghost"
                  size="icon"
                  className="hidden sm:inline-flex text-white hover:text-yellow-400 hover:bg-white/10 relative"
                  aria-label="Favoritos"
                >
                  <Heart className="w-5 h-5" />
                  <Badge className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs px-1.5">
                    0
                  </Badge>
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:text-yellow-400 hover:bg-white/10 relative"
                  aria-label="Carrito"
                  onClick={() => setIsCartOpen(true)}
                >
                  <ShoppingCart className="w-5 h-5" />
                  {cartQty > 0 && (
                    <Badge className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs px-1.5">
                      {cartQty}
                    </Badge>
                  )}
                </Button>
              </div>
            </div>

            {/* Mobile search row */}
            {mobileSearchOpen && (
              <div className="pb-3 lg:hidden">
                <SearchBar
                  category={category}
                  setCategory={setCategory}
                  categories={categories}
                  mobile
                />
              </div>
            )}
          </div>
        </header>
      )}

      {/* ----------- NAVBAR PRINCIPAL (HOME, ABOUT, ETC) ----------- */}
      {!inShop && (
        <nav
          className={[
            "sticky top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out",
            isHome ? "backdrop-blur-md bg-black/30" : "bg-yellow-400 shadow-md",
            "border-b border-yellow-300/30",
          ].join(" ")}
          aria-label="Navegación principal"
        >
          <div className="mx-auto w-full max-w-7xl px-3 sm:px-4">
            <div className="flex items-center justify-between py-2 sm:py-2.5">
              {/* Left: Burger + Logo */}
              <div className="flex items-center gap-2">
                <button
                  className={[
                    "inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 transition-colors",
                    isHome
                      ? "text-white hover:text-yellow-200 hover:bg-white/10 focus:ring-yellow-300"
                      : "text-black hover:text-black/70 hover:bg-black/5 focus:ring-black/50",
                    "lg:hidden",
                  ].join(" ")}
                  aria-label="Abrir menú"
                  onClick={() => setMobileNavOpen(true)}
                >
                  <Menu className="h-6 w-6" />
                </button>

                <Link href="/" className="shrink-0" aria-label="Ir a Inicio">
                  <Image
                    src="/logo-color.png"
                    alt="Liderflex Hidráulica"
                    className="transition-transform duration-200 hover:scale-105"
                    width={140}
                    height={32}
                    priority
                  />
                </Link>
              </div>

              {/* Desktop nav */}
              <div className="hidden items-center gap-8 text-sm font-semibold lg:flex">
                <NavLink href="/" current={pathname === "/"} home={isHome}>
                  Inicio
                </NavLink>
                <NavLink
                  href="/shop"
                  current={pathname.startsWith("/shop")}
                  home={isHome}
                >
                  Tienda
                </NavLink>
                <NavLink
                  href="/about"
                  current={pathname === "/about"}
                  home={isHome}
                >
                  Nosotros
                </NavLink>
                <NavLink
                  href="/contact"
                  current={pathname === "/contact"}
                  home={isHome}
                >
                  Contacto
                </NavLink>
              </div>

              {/* Right-side CTA */}
              <div className="hidden items-center gap-3 lg:flex">
                <Button
                  variant={isHome ? "secondary" : "default"}
                  className={
                    isHome
                      ? "bg-white/10 text-white hover:bg-white/20 border border-white/30"
                      : "bg-black text-yellow-300 hover:bg-black/80"
                  }
                  onClick={() => router.push("/shop")}
                >
                  Ver Tienda
                </Button>
              </div>
            </div>
          </div>
        </nav>
      )}

      {/* ----------- MOBILE NAV SHEET ----------- */}
      <Sheet open={mobileNavOpen} onOpenChange={setMobileNavOpen}>
        <SheetContent
          side="left"
          className="w-[280px] sm:w-[320px] bg-white shadow-2xl p-0"
        >
          <SheetHeader className="border-b px-6 py-4 text-left">
            <SheetTitle className="text-lg font-bold text-black">
              Menú
            </SheetTitle>
            <SheetDescription className="text-sm text-gray-600">
              Navega por nuestro sitio
            </SheetDescription>
          </SheetHeader>

          <div className="flex flex-col h-[calc(100%-80px)] overflow-y-auto">
            <nav className="flex-1 px-4 py-6 space-y-1">
              <MobileNavLink
                href="/"
                current={pathname === "/"}
                onClick={() => setMobileNavOpen(false)}
              >
                Inicio
              </MobileNavLink>
              <MobileNavLink
                href="/shop"
                current={pathname.startsWith("/shop")}
                onClick={() => setMobileNavOpen(false)}
              >
                Tienda
              </MobileNavLink>
              <MobileNavLink
                href="/about"
                current={pathname === "/about"}
                onClick={() => setMobileNavOpen(false)}
              >
                Nosotros
              </MobileNavLink>
              <MobileNavLink
                href="/contact"
                current={pathname === "/contact"}
                onClick={() => setMobileNavOpen(false)}
              >
                Contacto
              </MobileNavLink>
            </nav>

            {/* Footer del drawer */}
            <div className="border-t px-4 py-4 space-y-3 bg-gray-50">
              {user ? (
                <div className="space-y-2">
                  <div className="flex items-center gap-3 px-3 py-2 bg-white rounded-lg border">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400 text-black font-bold">
                      {profile?.full_name?.[0]?.toUpperCase() || "U"}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-black truncate">
                        {profile?.full_name || "Usuario"}
                      </p>
                      <p className="text-xs text-gray-500 truncate">
                        {profile?.email}
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    onClick={() => {
                      router.push("/dashboard");
                      setMobileNavOpen(false);
                    }}
                  >
                    <Settings className="mr-2 h-4 w-4" />
                    Dashboard
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
                    onClick={() => {
                      signOut();
                      setMobileNavOpen(false);
                    }}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Cerrar Sesión
                  </Button>
                </div>
              ) : (
                <Button
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold"
                  onClick={() => {
                    setIsAuthOpen(true);
                    setMobileNavOpen(false);
                  }}
                >
                  Iniciar Sesión
                </Button>
              )}

              <a
                href="tel:+56959497551"
                className="flex items-center justify-center gap-2 px-4 py-2 text-sm text-gray-700 hover:text-black transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium">+569-59497551</span>
              </a>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      <CartSheet isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </>
  );
}

/* ========== COMPONENTES AUXILIARES ========== */

function SearchBar({
  category,
  setCategory,
  categories,
  mobile = false,
}: {
  category: string;
  setCategory: (v: string) => void;
  categories: string[];
  mobile?: boolean;
}) {
  return (
    <form
      className={[
        "flex items-stretch gap-0 rounded-md overflow-hidden",
        "bg-white/95 backdrop-blur-sm shadow-sm",
      ].join(" ")}
      onSubmit={(e) => e.preventDefault()}
    >
      <select
        className={[
          "bg-white text-black border-r outline-none cursor-pointer",
          "text-xs sm:text-sm",
          "px-2 sm:px-3 py-2",
          "max-w-[40%] sm:max-w-none",
        ].join(" ")}
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        aria-label="Categoría"
      >
        <option value="all">Todas</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <Input
        placeholder="Buscar productos..."
        className="flex-1 rounded-none border-0 text-black text-sm focus-visible:ring-yellow-400 focus-visible:ring-offset-0"
        aria-label="Buscar productos"
      />
      <Button
        type="submit"
        className="bg-yellow-400 hover:bg-yellow-500 text-black px-3 sm:px-4 md:px-6 shrink-0"
        aria-label="Buscar"
      >
        <Search className="w-4 h-4 sm:mr-2" />
        <span className="hidden sm:inline font-semibold">BUSCAR</span>
      </Button>
    </form>
  );
}

function MobileNavLink({
  href,
  current,
  onClick,
  children,
}: {
  href: string;
  current?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-current={current ? "page" : undefined}
      onClick={onClick}
      className={[
        "flex items-center justify-between w-full rounded-lg px-4 py-3 text-sm font-medium transition-all",
        current
          ? "bg-yellow-400 text-black shadow-sm"
          : "text-gray-700 hover:bg-gray-100 hover:text-black",
      ].join(" ")}
    >
      <span>{children}</span>
      <ChevronRight
        className={[
          "h-4 w-4 transition-transform",
          current ? "text-black" : "text-gray-400",
        ].join(" ")}
      />
    </Link>
  );
}

/** 🔗 Enlaces de navegación desktop */
function NavLink({
  href,
  current,
  home,
  children,
}: {
  href: string;
  current?: boolean;
  home?: boolean;
  children: React.ReactNode;
}) {
  const baseColor = home ? "text-white" : "text-black";
  const hoverColor = home ? "hover:text-yellow-200" : "hover:text-black/70";
  const activeColor = home ? "text-yellow-100" : "text-black";
  const underlineColor = home ? "after:bg-yellow-300" : "after:bg-black";

  return (
    <Link
      href={href}
      aria-current={current ? "page" : undefined}
      className={`relative transition-all duration-300 ease-out 
        ${baseColor} tracking-wide 
        after:content-[''] after:absolute after:left-0 after:bottom-[-4px]
        after:w-0 after:h-[2px] ${underlineColor} after:transition-all after:duration-300 
        hover:after:w-full ${hoverColor}
        ${current ? `${activeColor} after:w-full font-semibold` : "opacity-90 hover:opacity-100"}
      `}
    >
      {children}
    </Link>
  );
}
