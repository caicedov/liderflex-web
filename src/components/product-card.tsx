"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, ShoppingBag, Zap } from "lucide-react";
import { useCart } from "@/components/cart-context";
import QuickBuyModal from "@/components/quick-buy-modal";
import Image from "next/image";

import type { Product as ProductType } from "@/components/product-data";

type Product = ProductType;

interface ProductCardProps {
  product: Product;
  showCountdown?: boolean;
}

export default function ProductCard({
  product,
  showCountdown = false,
}: ProductCardProps) {
  const [isQuickBuyOpen, setIsQuickBuyOpen] = useState(false);
  const { dispatch } = useCart();

  const addToCart = () => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image || "/placeholder.svg",
      },
    });
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={`star-${product.id}-${i}`}
        className={`w-3 h-3 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
      />
    ));
  };

  return (
    <>
      <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <CardContent className="p-4 flex flex-col h-full">
          <div className="flex-1">
            <div className="relative mb-4">
              {product.discount && product.discount > 0 && (
                <Badge className="absolute top-2 left-2 bg-yellow-400 text-black z-10">
                  -{product.discount}%
                </Badge>
              )}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10 bg-white/80 hover:bg-white"
              >
                <Heart className="w-4 h-4" />
              </Button>

              <div
                className="cursor-pointer"
                onClick={() =>
                  (window.location.href = `/product/${product.id}`)
                }
              >
                <Image
                  src={
                    product.image ||
                    (product.images?.[0]) ||
                    "/placeholder.svg"
                  }
                  alt={product.name}
                  width={200}
                  height={200}
                  className="w-full h-40 object-cover rounded-md transition-transform group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>

            {showCountdown && product.countdown && (
              <div className="flex justify-center gap-2 mb-3 text-xs">
                <div className="text-center">
                  <div className="text-red-600 font-bold">
                    {product.countdown.days}
                  </div>
                  <div className="text-gray-500">DÍAS</div>
                </div>
                <div className="text-center">
                  <div className="text-red-600 font-bold">
                    {product.countdown.hours}
                  </div>
                  <div className="text-gray-500">HRS</div>
                </div>
                <div className="text-center">
                  <div className="text-red-600 font-bold">
                    {product.countdown.minutes}
                  </div>
                  <div className="text-gray-500">MIN</div>
                </div>
                <div className="text-center">
                  <div className="text-red-600 font-bold">
                    {product.countdown.seconds}
                  </div>
                  <div className="text-gray-500">SEG</div>
                </div>
              </div>
            )}

            {product.category && (
              <Badge variant="outline" className="mb-2 text-xs">
                {product.category}
              </Badge>
            )}

            <h3
              className="font-semibold text-sm mb-2 line-clamp-2 cursor-pointer hover:text-yellow-600 transition-colors"
              onClick={() => (window.location.href = `/product/${product.id}`)}
            >
              {product.name}
            </h3>

            <div className="flex items-center mb-2">
              {renderStars(product.rating)}
            </div>

            <div className="flex items-center gap-2 mb-3">
              {product.originalPrice &&
                product.originalPrice !== product.price && (
                  <span className="text-gray-400 line-through text-sm">
                    ${product.originalPrice}
                  </span>
                )}
              <span className="font-bold text-lg text-yellow-600">
                ${product.price}
              </span>
            </div>

            {/* Stock indicator */}
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-xs text-green-600">
                {product.stockQuantity
                  ? `${product.stockQuantity} disponibles`
                  : "En Stock"}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2 mt-auto">
            <Button
              onClick={() => setIsQuickBuyOpen(true)}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold transition-all duration-200 hover:shadow-md"
            >
              <Zap className="w-4 h-4 mr-2" />
              Cotización Rápida
            </Button>

            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={addToCart}
                className="flex-1 border-yellow-400 text-yellow-600 hover:bg-yellow-50 text-xs bg-transparent"
              >
                <ShoppingBag className="w-3 h-3 mr-1" />
                Carrito
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  (window.location.href = `/product/${product.id}`)
                }
                className="flex-1 text-xs"
              >
                Ver Más
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <QuickBuyModal
        product={{
          ...product,
          image: product.image || "/placeholder.svg"
        }}
        isOpen={isQuickBuyOpen}
        onClose={() => setIsQuickBuyOpen(false)}
      />
    </>
  );
}
