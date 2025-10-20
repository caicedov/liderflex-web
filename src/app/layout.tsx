import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/header";
import WhatsAppChatModal from "@/components/whatsapp-chat-modal";
import { CartProvider } from "@/components/cart-context";
import { AuthProvider } from "@/contexts/auth-context";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Liderflex Hidráulica - Soluciones Hidráulicas Premium",
  description:
    "Tu socio de confianza para soluciones premium de mangueras hidráulicas e industriales. Entregamos calidad, confiabilidad e innovación para potenciar tus operaciones.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <CartProvider>
            {/* Sticky Header (Topbar + Nav) for all pages */}
            <div className="sticky top-0 z-50 shadow-lg">
              <Header />
            </div>
            {children}
            {/* WhatsApp Chat Modal floating button */}
            <WhatsAppChatModal />
            <Footer />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
