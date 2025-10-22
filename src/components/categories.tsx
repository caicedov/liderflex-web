"use client";

import { Card, CardContent } from "@/components/ui/card";
import { RotateCcw, CreditCard, Headphones } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { products } from "@/components/product-data";

const features = [
  {
    icon: RotateCcw,
    title: "30 Días de Devolución",
    subtitle: "Cambio de Producto",
  },
  {
    icon: CreditCard,
    title: "Pago Seguro",
    subtitle: "Tarjetas Aceptadas",
  },
  {
    icon: Headphones,
    title: "Soporte 24/7",
    subtitle: "Contáctanos en Cualquier Momento",
  },
];

export default function Categories() {
  // Construye categorías únicas y cuenta productos
  const categories = useMemo(() => {
    const map = new Map<
      string,
      { name: string; count: number; icon?: string; href: string }
    >();

    products.forEach((p) => {
      const cat = p.category || "Otros";
      if (!map.has(cat)) {
        map.set(cat, {
          name: cat,
          count: 0,
          icon: getCategoryIcon(cat),
          href: `/products?category=${encodeURIComponent(cat)}`,
        });
      }
      map.get(cat)!.count += 1;
    });

    // Ordenar por nombre o por cantidad (elige tu preferencia)
    return Array.from(map.values()).sort((a, b) =>
      a.name.localeCompare(b.name, "es"),
    );
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Busca por Categorías Destacadas
          </h2>
          <p className="text-gray-600">
            Explora nuestra amplia gama de mangueras hidráulicas e industriales
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {categories.map((category) => (
            <Link key={category.name} href={category.href}>
              <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer group h-full w-32 md:w-36">
                <CardContent className="p-6 h-full flex flex-col items-center justify-center">
                  <div className="w-20 h-20 mx-auto mb-4  rounded-full flex items-center justify-center group-hover:bg-yellow-100 transition-colors">
                    <Image
                      src={category.icon || "/placeholder.svg"}
                      alt={category.name}
                      width={100}
                      height={80}
                      className="opacity-70"
                    />
                  </div>
                  <h3 className="font-semibold text-sm mb-1 text-center">
                    {category.name}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {category.count}{" "}
                    {category.count === 1 ? "Producto" : "Productos"}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="flex flex-wrap justify-between items-center gap-8 bg-white p-8 rounded-lg shadow-sm">
          {features.map((feature) => (
            <div key={feature.title} className="flex items-center gap-4">
              <div className="bg-yellow-100 p-3 rounded-full">
                <feature.icon className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">{feature.title}</h4>
                <p className="text-xs text-gray-500">{feature.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Íconos/imagenes por categoría (opcional). Ajusta rutas según tus assets reales.
function getCategoryIcon(category: string): string {
  const map: Record<string, string> = {
    "Mangueras Hidráulicas": "/mangueras/mh-4sh.png",
    "Mangueras Industriales": "/mangueras/m-espiralada.png",
    "Mangueras Químicas": "/mangueras/m-acido-solv.png",
    "Mangueras PVC": "/mangueras/m-pvc-anill.png",
    "Mangueras Especiales": "/mangueras/m-acido-solv.png",
    "Accesorios": "/mangueras/proteccion-espiral.png",
    "Conexiones Hidráulicas": "/conexiones/m-orfs-for.png"
  };
  return map[category] || "/placeholder.svg";
}
