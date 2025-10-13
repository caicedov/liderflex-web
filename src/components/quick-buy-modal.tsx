"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Star, Minus, Plus, X, ShoppingCart } from "lucide-react";
import { useCart } from "@/components/cart-context";
import Image from "next/image";

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  discount?: number;
  image: string;
  category?: string;
  description?: string;
  inStock?: boolean;
  stockQuantity?: number;
}

interface QuickBuyModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function QuickBuyModal({
  product,
  isOpen,
  onClose,
}: QuickBuyModalProps) {
  const [quantity, setQuantity] = useState(1);
  const { dispatch } = useCart();

  if (!product) return null;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      dispatch({
        type: "ADD_ITEM",
        payload: {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
        },
      });
    }

    // Show success message
    alert(`${quantity} producto(s) agregado(s) al carrito`);
    setQuantity(1);
    onClose();
  };

  const handleBuyNow = () => {
    handleAddToCart();
    // Redirect to checkout or cart
    window.location.href = "/checkout";
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={`star-${product?.id ?? "unknown"}-${i}`}
        className={`w-4 h-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
      />
    ));
  };

  const totalPrice = product.price * quantity;
  const savings = product.originalPrice
    ? (product.originalPrice - product.price) * quantity
    : 0;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md mx-auto bg-white shadow-2xl rounded-xl">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>Cotización Rápida</span>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Product Image */}
          <div className="relative">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-lg"
            />
            {product.discount && (
              <Badge className="absolute top-2 left-2 bg-yellow-400 text-black">
                -{product.discount}% OFF
              </Badge>
            )}
          </div>

          {/* Product Info */}
          <div>
            {product.category && (
              <Badge variant="outline" className="mb-2 text-xs">
                {product.category}
              </Badge>
            )}
            <h3 className="font-bold text-lg mb-2">{product.name}</h3>
            <div className="flex items-center gap-2 mb-3">
              {renderStars(product.rating)}
              <span className="text-sm text-gray-500">
                ({product.rating}.0)
              </span>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-yellow-600">
              ${product.price}
            </span>
            {product.originalPrice &&
              product.originalPrice !== product.price && (
                <span className="text-lg text-gray-400 line-through">
                  ${product.originalPrice}
                </span>
              )}
          </div>

          {/* Stock Status */}
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm text-green-600 font-medium">
              {product.stockQuantity
                ? `${product.stockQuantity} disponibles`
                : "En Stock"}
            </span>
          </div>

          {/* Quantity Selector */}
          <div className="space-y-3">
            <label htmlFor="quick-buy-quantity" className="text-sm font-medium">
              Cantidad:
            </label>
            <div className="flex items-center gap-3">
              <div className="flex items-center border rounded-lg">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="h-10 w-10"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <Input
                  id="quick-buy-quantity"
                  type="number"
                  value={quantity}
                  onChange={(e) =>
                    setQuantity(
                      Math.max(1, Number.parseInt(e.target.value) || 1),
                    )
                  }
                  className="w-16 text-center border-0 focus:ring-0"
                  min="1"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                  className="h-10 w-10"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <div className="text-sm text-gray-600">
                {product.stockQuantity && quantity > product.stockQuantity && (
                  <span className="text-red-500">
                    Stock limitado a {product.stockQuantity}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Total Price */}
          <div className="bg-gray-50 p-4 rounded-lg space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-medium">
                Subtotal ({quantity} {quantity === 1 ? "producto" : "productos"}
                ):
              </span>
              <span className="text-xl font-bold text-yellow-600">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            {savings > 0 && (
              <div className="flex justify-between items-center text-green-600">
                <span className="text-sm">Ahorras:</span>
                <span className="font-medium">${savings.toFixed(2)}</span>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button
              onClick={handleAddToCart}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3"
              disabled={
                product.stockQuantity ? quantity > product.stockQuantity : false
              }
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Agregar al Carrito
            </Button>

            <Button
              onClick={handleBuyNow}
              variant="outline"
              className="w-full border-yellow-400 text-yellow-600 hover:bg-yellow-50 font-semibold py-3 bg-transparent"
              disabled={
                product.stockQuantity ? quantity > product.stockQuantity : false
              }
            >
              Cotizar Ahora
            </Button>
          </div>

          {/* Quick Actions */}
          <div className="flex gap-2 text-sm">
            <Button
              variant="link"
              className="text-yellow-600 p-0 h-auto"
              onClick={() => {
                onClose();
                window.location.href = `/product/${product.id}`;
              }}
            >
              Ver detalles completos
            </Button>
            <span className="text-gray-400">•</span>
            <Button variant="link" className="text-gray-600 p-0 h-auto">
              Agregar a favoritos
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
