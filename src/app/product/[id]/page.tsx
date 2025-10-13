"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Star,
  Heart,
  Share2,
  Minus,
  Plus,
  Shield,
  RotateCcw,
} from "lucide-react";
import { useCart } from "@/components/cart-context";
import Image from "next/image";
import {
  products,
  getProductById,
} from "@/components/product-data";

function ProductDetailContent({ params }: { params: { id: string } }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const { dispatch } = useCart();

  const product = getProductById(params.id) || products[0];

  const addToCart = () => {
  if (product.availableSizes && !selectedSize) {
    alert("Por favor selecciona una medida");
    return;
  }
  const sizeObj = product.availableSizes?.find(s => s.code === selectedSize);
  const suffix = sizeObj ? ` - ${sizeObj.size} (${sizeObj.code})` : "";
  for (let i = 0; i < quantity; i++) {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: product.id + (selectedSize ? `-${selectedSize}` : ""),
        name: product.name + suffix,
        price: product.price,
        image: product.images?.[0] || "/placeholder.svg",
      },
    });
  }
  alert(`${quantity} producto(s) agregado(s) al carrito`);
};

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        // biome-ignore lint/suspicious/noArrayIndexKey: <TODO: Change it later>
        key={i}
        className={`w-4 h-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
      />
    ));
  };

  const getStockStatus = () => {
    const stockQuantity = product.stockQuantity ?? 0;
    if (stockQuantity > 20)
      return { text: "En Stock", color: "text-green-600 border-green-600" };
    if (stockQuantity > 5)
      return {
        text: "Stock Limitado",
        color: "text-yellow-600 border-yellow-600",
      };
    if (stockQuantity > 0)
      return { text: "Últimas Unidades", color: "text-red-600 border-red-600" };
    return { text: "Agotado", color: "text-gray-600 border-gray-600" };
  };

  const stockStatus = getStockStatus();

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-8">
          <a href="/" className="hover:text-yellow-600">
            Inicio
          </a>{" "}
          /
          <a href="/shop" className="hover:text-yellow-600">
            {" "}
            Tienda
          </a>{" "}
          /<span className="text-gray-900"> {product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div>
            <div className="mb-4">
              <Image
                src={product.images?.[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                width={500}
                height={500}
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            <div className="flex gap-2">
              {product.images?.map((image, index) => (
                <button
                  type="button"
                  // biome-ignore lint/suspicious/noArrayIndexKey: <TODO: Change it later>
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`border-2 rounded-lg overflow-hidden ${
                    selectedImage === index
                      ? "border-yellow-400"
                      : "border-gray-200"
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} ${index + 1}`}
                    width={80}
                    height={80}
                    className="w-20 h-20 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              {(product.discount ?? 0) > 0 && (
                <Badge className="bg-yellow-400 text-black">
                  -{product.discount ?? 0}% DESCUENTO
                </Badge>
              )}
              <Badge variant="outline" className={stockStatus.color}>
                {stockStatus.text}
              </Badge>
            </div>

            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-1">
                {renderStars(product.rating)}
              </div>
              <span className="text-sm text-gray-500">
                ({product.reviews} reseñas)
              </span>
              <span className="text-sm text-gray-500">
                • Stock: {product.stockQuantity} unidades
              </span>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-bold text-yellow-600">
                ${product.price}
              </span>
              {product.originalPrice &&
                product.originalPrice !== product.price && (
                  <span className="text-xl text-gray-400 line-through">
                    ${product.originalPrice}
                  </span>
                )}
            </div>

            <p className="text-gray-600 mb-6">{product.description}</p>

            {/* Size Selection */}
            {product.availableSizes && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">
                  Medidas disponibles:
                </h3>
                <div className="grid grid-cols-3 gap-2">
                  {product.availableSizes.map((sz) => {
                    const label = `${sz.size} (${sz.code})`;
                    const isSelected = selectedSize === sz.code;
                    return (
                      <button
                        type="button"
                        key={sz.code}
                        onClick={() => setSelectedSize(sz.code)}
                        className={`p-3 border rounded-lg text-center ${
                          isSelected
                            ? "border-yellow-400 bg-yellow-50"
                            : "border-gray-200 hover:border-gray-300"
                        } ${sz.stock === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
                        disabled={sz.stock === 0}
                      >
                        <div className="font-semibold">{sz.size}</div>
                        <div className="text-[10px] text-gray-500">
                          {sz.code}
                        </div>
                        <div className="text-xs text-gray-500">
                          {sz.stock > 0 ? `${sz.stock} disponibles` : "Agotado"}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center border rounded-lg">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="h-10 w-10"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="px-4 py-2 min-w-[60px] text-center">
                  {quantity}
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                  className="h-10 w-10"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <Button
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 flex-1"
                onClick={addToCart}
                disabled={product.stockQuantity === 0}
              >
                {product.stockQuantity === 0 ? "AGOTADO" : "AGREGAR AL CARRITO"}
              </Button>
            </div>

            <div className="flex gap-4 mb-6">
              <Button variant="outline" size="icon">
                <Heart className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>

            {/* Product Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center gap-2 text-sm">
                <Shield className="w-4 h-4 text-obsidian-800" />
                <span>Garantía 2 años</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <RotateCcw className="w-4 h-4 text-purple-600" />
                <span>30 días devolución</span>
              </div>
            </div>

            <div className="border-t pt-6">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-semibold">SKU:</span>{" "}{selectedSize ? `${selectedSize}` : ""}
                </div>
                <div>
                  <span className="font-semibold">Categoría:</span> Mangueras
                  Hidráulicas
                </div>
                <div>
                  <span className="font-semibold">Marca:</span> Liderflex
                </div>
                <div>
                  <span className="font-semibold">Origen:</span> Antofagasta,
                  Chile
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Tabs defaultValue="description" className="mb-16">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="description">Descripción</TabsTrigger>
            <TabsTrigger value="specifications">Especificaciones</TabsTrigger>
            <TabsTrigger value="applications">Aplicaciones</TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="mt-6">
            <div className="prose max-w-none">
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                {product.description}
              </p>
              <h3 className="text-xl font-semibold mb-4">
                Características Principales:
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                {product.features.map((feature, index) => (
                  // biome-ignore lint/suspicious/noArrayIndexKey: <TODO: Change it later>
                  <li key={index} className="text-gray-600">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="specifications" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div
                  key={key}
                  className="flex justify-between py-3 border-b border-gray-200"
                >
                  <span className="font-semibold text-gray-700">{key}:</span>
                  <span className="text-gray-600 text-right">{value}</span>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="applications" className="mt-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Aplicaciones Recomendadas:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.applications?.map((application, index) => (
                  <div
                    // biome-ignore lint/suspicious/noArrayIndexKey: <TODO; Change it later>
                    key={index}
                    className="flex items-center gap-3 p-3 bg-obsidian-100 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-gray-700">{application}</span>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="reviews" className="mt-6">
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl font-bold">{product.rating}.0</div>
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    {renderStars(product.rating)}
                  </div>
                  <div className="text-sm text-gray-500">
                    Basado en {product.reviews} reseñas
                  </div>
                </div>
              </div>

              {/* Sample Reviews */}
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">{renderStars(5)}</div>
                    <span className="font-semibold">Carlos M.</span>
                    <span className="text-sm text-gray-500">
                      hace 2 semanas
                    </span>
                  </div>
                  <p className="text-gray-600">
                    Excelente calidad de manguera. Muy duradera y flexible.
                    Perfecta para nuestro sistema hidráulico en la mina. La
                    presión de trabajo es exactamente lo que necesitábamos.
                  </p>
                </div>

                <div className="border-b pb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">{renderStars(5)}</div>
                    <span className="font-semibold">María S.</span>
                    <span className="text-sm text-gray-500">hace 1 mes</span>
                  </div>
                  <p className="text-gray-600">
                    Gran producto, entrega rápida desde Antofagasta. Exactamente
                    lo que necesitábamos para nuestro equipo industrial. El
                    servicio técnico de Liderflex es excepcional.
                  </p>
                </div>

                <div className="border-b pb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">{renderStars(4)}</div>
                    <span className="font-semibold">Roberto P.</span>
                    <span className="text-sm text-gray-500">hace 2 meses</span>
                  </div>
                  <p className="text-gray-600">
                    Muy buena relación calidad-precio. Las especificaciones
                    técnicas son precisas y el rendimiento ha sido excelente en
                    nuestras aplicaciones de construcción.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

    </div>
  );
}

export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  return <ProductDetailContent params={params} />;
}
