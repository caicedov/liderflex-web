"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Suscripción al boletín:", email);
    setEmail("");
  };

  return (
    <section className="bg-yellow-400 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold text-black mb-2">
              Regístrate y Suscríbete a Nuestro Boletín
            </h2>
            <p className="text-black/80">
              Suscríbete a nuestro último boletín para recibir noticias sobre
              descuentos especiales y próximas ofertas
            </p>
          </div>

          <div className="flex gap-2 w-full max-w-md">
            <form onSubmit={handleSubmit} className="flex gap-2 w-full">
              <Input
                type="email"
                placeholder="Correo Electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white"
                required
              />
              <Button
                type="submit"
                className="bg-obsidian-800 hover:bg-obsidian-700 text-white px-8"
              >
                SUSCRIBIRSE
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
