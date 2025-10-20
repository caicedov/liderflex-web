"use client";
import { use, useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Heart,
  Share2,
  Minus,
  Plus,
  Shield,
  RotateCcw,
} from "lucide-react";
import { useCart } from "@/components/cart-context";
import Image from "next/image";
import { products, getProductById } from "@/components/product-data";

function ProductDetailContent({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)

  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const { dispatch } = useCart();

  const product = getProductById(id) || products[0];

  const addToCart = () => {
    if (product.availableSizes && !selectedSize) {
      alert("Por favor selecciona una medida");
      return;
    }
    const sizeObj = product.availableSizes?.find(
      (s) => s.code === selectedSize,
    );
    const suffix = sizeObj ? ` - ${sizeObj.size} (${sizeObj.code})` : "";
    for (let i = 0; i < quantity; i++) {
      dispatch({
        type: "ADD_ITEM",
        payload: {
          id: product.id + (selectedSize ? `-${selectedSize}` : ""),
          name: product.name + suffix,
          image: product.images?.[0] || "/placeholder.svg",
        },
      });
    }
    alert(`Se añadieron ${quantity} producto(s) al carrito de cotización.`);
  };

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
          {/* Imágenes */}
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
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  type="button"
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

          {/* Información del producto */}
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-6">{product.description}</p>

            {/* Medidas disponibles */}
            {product.availableSizes && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">
                  Medidas disponibles:
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {product.availableSizes.map((sz) => {
                    const isSelected = selectedSize === sz.code;
                    return (
                      <button
                        key={sz.code}
                        onClick={() => setSelectedSize(sz.code)}
                        type="button"
                        className={`p-3 border rounded-lg text-center ${
                          isSelected
                            ? "border-yellow-400 bg-yellow-50"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <div className="font-semibold">{sz.size}</div>
                        <div className="text-[10px] text-gray-500">
                          {sz.code}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Controles de cantidad */}
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
              >
                AGREGAR A COTIZACIÓN
              </Button>
            </div>

            {/* Acciones secundarias */}
            <div className="flex gap-4 mb-6">
              <Button variant="outline" size="icon">
                <Heart className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>

            {/* Beneficios fijos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-2 text-sm">
                <Shield className="w-4 h-4 text-obsidian-800" />
                <span>Garantía 2 años</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <RotateCcw className="w-4 h-4 text-purple-600" />
                <span>30 días de devolución</span>
              </div>
            </div>

            {/* Datos adicionales */}
            <div className="border-t pt-6">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-semibold">SKU:</span>{" "}
                  {selectedSize || "N/A"}
                </div>
                <div>
                  <span className="font-semibold">Categoría:</span>{" "}
                  {product.category}
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

        {/* Tabs del contenido técnico */}
        <Tabs defaultValue="description" className="mb-16">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="description">Descripción</TabsTrigger>
            <TabsTrigger value="specifications">Especificaciones</TabsTrigger>
            <TabsTrigger value="applications">Aplicaciones</TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="mt-6">
            <div className="prose max-w-none text-gray-700">
              <p className="mb-6 text-lg leading-relaxed">
                {product.description}
              </p>
              <h3 className="text-xl font-semibold mb-4">
                Características Principales:
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                {product.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="specifications" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(product.specifications).map(([key, val]) => (
                <div
                  key={key}
                  className="flex justify-between py-3 border-b border-gray-200"
                >
                  <span className="font-semibold text-gray-700">{key}:</span>
                  <span className="text-gray-600 text-right">{val}</span>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="applications" className="mt-6">
            <h3 className="text-xl font-semibold mb-4">
              Aplicaciones Recomendadas:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.applications?.map((app, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 bg-obsidian-100 rounded-lg"
                >
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-gray-700">{app}</span>
                </div>
              ))}
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
  params: Promise<{ id: string }>;
}) {
  return <ProductDetailContent params={params} />;
}