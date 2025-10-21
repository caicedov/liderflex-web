'use client'
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/header";
import WhatsAppChatModal from "@/components/whatsapp-chat-modal";
import { CartProvider } from "@/components/cart-context";
import { AuthProvider } from "@/contexts/auth-context";
import Footer from "@/components/footer";
import { usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isHome = pathname === '/'
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <CartProvider>
            {/* Sticky Header (Topbar + Nav) for all pages */}
            <div className="sticky top-0 left-0 w-full z-50">
              <Header />
            </div>
            <div className={isHome ? "" : "pt-20 md:pt-20"}>
              {children}
            </div>
            {/* WhatsApp Chat Modal floating button */}
            <WhatsAppChatModal />
            <Footer />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
