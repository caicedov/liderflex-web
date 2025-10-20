"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingBag } from "lucide-react";
import { useCart } from "@/components/cart-context";
import Image from "next/image";

import type { Product as ProductType } from "@/components/product-data";

type Product = ProductType;

export default function ProductCard({ product }: { product: Product }) {
  const { dispatch } = useCart();

  const addToCart = () => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: product.id,
        name: product.name,
        image: product.image || "/placeholder.svg",
      },
    });
  };

  return (
    <Card className="group hover:shadow-md transition-all duration-300">
      <CardContent className="p-4 flex flex-col h-full">
        <div className="flex-1">
          {/* Imagen */}
          <div className="relative mb-4">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/80 hover:bg-white"
            >
              <Heart className="w-4 h-4" />
            </Button>
            <Image
              src={product.image || product.images?.[0] || "/placeholder.svg"}
              alt={product.name}
              width={200}
              height={200}
              className="w-full h-40 object-cover rounded-md transition-transform group-hover:scale-105"
            />
          </div>

          {/* Categoría y nombre */}
          {product.category && (
            <Badge variant="outline" className="mb-2 text-xs">
              {product.category}
            </Badge>
          )}
          <h3
            className="font-semibold text-sm mb-2 line-clamp-2 cursor-pointer hover:text-yellow-600"
            onClick={() => (window.location.href = `/product/${product.id}`)}
          >
            {product.name}
          </h3>
        </div>

        {/* Botones */}
        <div className="space-y-2 mt-auto">
          <Button
            onClick={addToCart}
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold"
          >
            <ShoppingBag className="w-4 h-4 mr-2" />
            Agregar a Cotización
          </Button>
          <Button
            variant="outline"
            className="w-full text-xs"
            onClick={() => (window.location.href = `/product/${product.id}`)}
          >
            Ver Más
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
