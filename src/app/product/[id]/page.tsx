"use client";
import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
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
  Truck,
  Shield,
  RotateCcw,
} from "lucide-react";
import { CartProvider, useCart } from "@/components/cart-context";
import Image from "next/image";

const productData = {
  "1": {
    id: "1",
    name: "Manguera Hidráulica de Goma Premium 1/2 pulgada",
    price: 175,
    originalPrice: 180,
    rating: 5,
    reviews: 24,
    discount: 3,
    inStock: true,
    stockQuantity: 45,
    images: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
    description:
      "Manguera hidráulica de goma de alta calidad diseñada para aplicaciones industriales exigentes. Presenta excelente flexibilidad, durabilidad y resistencia a la presión. Ideal para sistemas hidráulicos en minería, construcción y manufactura.",
    specifications: {
      "Diámetro Interno": "1/2 pulgada (12.7mm)",
      "Diámetro Externo": "20.6mm",
      "Presión de Trabajo": "3000 PSI (207 bar)",
      "Presión de Ruptura": "12000 PSI (827 bar)",
      "Presión de Prueba": "4500 PSI (310 bar)",
      "Rango de Temperatura": "-40°C a +100°C (-40°F a +212°F)",
      "Radio de Curvatura Mínimo": "102mm",
      "Longitud Disponible": "15 metros, 30 metros, 50 metros",
      "Material Interior": "Goma sintética NBR",
      Refuerzo: "Alambre de acero de alta resistencia trenzado",
      "Cubierta Exterior": "Goma sintética resistente al aceite y ozono",
      Normas: "SAE 100R1AT, EN 853 1SN, ISO 1436",
      "Factor de Seguridad": "4:1",
      Peso: "0.45 kg/metro",
    },
    features: [
      "Flexibilidad superior para fácil instalación y manejo",
      "Excelente resistencia a fluidos hidráulicos y aceites minerales",
      "Alta clasificación de presión de ruptura con factor de seguridad 4:1",
      "Construcción resistente a temperaturas extremas",
      "Cubierta exterior resistente a la abrasión, ozono y intemperie",
      "Cumple con estándares internacionales SAE, EN e ISO",
      "Ideal para aplicaciones móviles e industriales",
      "Conexiones disponibles en múltiples configuraciones",
    ],
    applications: [
      "Sistemas hidráulicos de maquinaria pesada",
      "Equipos de construcción y minería",
      "Sistemas de elevación y grúas",
      "Maquinaria agrícola",
      "Prensas hidráulicas industriales",
      "Sistemas de dirección asistida",
    ],
    availableSizes: [
      { size: '1/4"', stock: 32 },
      { size: '3/8"', stock: 28 },
      { size: '1/2"', stock: 45 },
      { size: '5/8"', stock: 22 },
      { size: '3/4"', stock: 18 },
      { size: '1"', stock: 15 },
    ],
  },
  "2": {
    id: "2",
    name: "Manguera Hidráulica Trenzada de Acero 3/4 pulgada",
    price: 110,
    originalPrice: 115,
    rating: 4,
    reviews: 18,
    discount: 4,
    inStock: true,
    stockQuantity: 28,
    images: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
    description:
      "Manguera hidráulica con trenzado de acero de alta resistencia, diseñada para aplicaciones de media presión. Ofrece excelente durabilidad y resistencia a la abrasión.",
    specifications: {
      "Diámetro Interno": "3/4 pulgada (19.1mm)",
      "Diámetro Externo": "27.8mm",
      "Presión de Trabajo": "2500 PSI (172 bar)",
      "Presión de Ruptura": "10000 PSI (689 bar)",
      "Presión de Prueba": "3750 PSI (258 bar)",
      "Rango de Temperatura": "-40°C a +100°C",
      "Radio de Curvatura Mínimo": "152mm",
      "Longitud Disponible": "15 metros, 30 metros",
      "Material Interior": "Goma sintética NBR",
      Refuerzo: "Trenzado de alambre de acero",
      "Cubierta Exterior": "Goma sintética negra",
      Normas: "SAE 100R2AT, EN 853 2SN",
      "Factor de Seguridad": "4:1",
      Peso: "0.68 kg/metro",
    },
    features: [
      "Construcción robusta con trenzado de acero",
      "Resistente a altas presiones de trabajo",
      "Excelente resistencia a la abrasión",
      "Flexible para instalaciones complejas",
      "Cubierta resistente al aceite y ozono",
    ],
    applications: [
      "Sistemas hidráulicos industriales",
      "Maquinaria de construcción",
      "Equipos de minería",
      "Sistemas de transmisión de potencia",
    ],
    availableSizes: [
      { size: '1/2"', stock: 35 },
      { size: '5/8"', stock: 28 },
      { size: '3/4"', stock: 28 },
      { size: '1"', stock: 20 },
    ],
  },
  "3": {
    id: "3",
    name: "Manguera de Aire Industrial 50ft",
    price: 249,
    originalPrice: 249,
    rating: 4,
    reviews: 12,
    discount: 0,
    inStock: true,
    stockQuantity: 15,
    images: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
    description:
      "Manguera de aire industrial de alta calidad para aplicaciones neumáticas. Diseñada para resistir altas presiones y uso continuo en entornos industriales.",
    specifications: {
      "Diámetro Interno": "1/2 pulgada (12.7mm)",
      "Diámetro Externo": "17.5mm",
      "Presión de Trabajo": "300 PSI (20.7 bar)",
      "Presión de Ruptura": "1200 PSI (82.7 bar)",
      "Rango de Temperatura": "-20°C a +70°C",
      Longitud: "15.24 metros (50 pies)",
      "Material Interior": "Goma sintética",
      Refuerzo: "Fibra textil de alta resistencia",
      "Cubierta Exterior": "Goma resistente al ozono",
      Peso: "0.32 kg/metro",
    },
    features: [
      "Diseño ligero y flexible",
      "Resistente a la abrasión y ozono",
      "Conexiones estándar incluidas",
      "Ideal para herramientas neumáticas",
    ],
    applications: [
      "Herramientas neumáticas",
      "Sistemas de aire comprimido",
      "Talleres automotrices",
      "Aplicaciones industriales generales",
    ],
    availableSizes: [
      { size: '1/4"', stock: 25 },
      { size: '3/8"', stock: 20 },
      { size: '1/2"', stock: 15 },
    ],
  },
};

const relatedProducts = [
  {
    id: "2",
    name: "Manguera Hidráulica Trenzada de Acero 3/4 pulgada",
    price: 110,
    originalPrice: 115,
    rating: 4,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "3",
    name: "Manguera de Aire Industrial 50ft",
    price: 249,
    rating: 4,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "4",
    name: "Kit de Manguera Hidráulica de Alta Presión",
    price: 110,
    rating: 4,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "5",
    name: "Manguera Neumática Flexible 25ft",
    price: 228,
    rating: 4,
    image: "/placeholder.svg?height=200&width=200",
  },
];

function ProductDetailContent({ params }: { params: { id: string } }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const { dispatch } = useCart();

  const product =
    productData[params.id as keyof typeof productData] || productData["1"];

  const addToCart = () => {
    if (product.availableSizes && !selectedSize) {
      alert("Por favor selecciona un tamaño");
      return;
    }

    for (let i = 0; i < quantity; i++) {
      dispatch({
        type: "ADD_ITEM",
        payload: {
          id: product.id + (selectedSize ? `-${selectedSize}` : ""),
          name: product.name + (selectedSize ? ` - ${selectedSize}` : ""),
          price: product.price,
          image: product.images[0],
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
    if (product.stockQuantity > 20)
      return { text: "En Stock", color: "text-green-600 border-green-600" };
    if (product.stockQuantity > 5)
      return {
        text: "Stock Limitado",
        color: "text-yellow-600 border-yellow-600",
      };
    if (product.stockQuantity > 0)
      return { text: "Últimas Unidades", color: "text-red-600 border-red-600" };
    return { text: "Agotado", color: "text-gray-600 border-gray-600" };
  };

  const stockStatus = getStockStatus();

  return (
    <div className="min-h-screen bg-white">
      <Header />

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
                src={product.images[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                width={500}
                height={500}
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            <div className="flex gap-2">
              {product.images.map((image, index) => (
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
              {product.discount > 0 && (
                <Badge className="bg-yellow-400 text-black">
                  -{product.discount}% DESCUENTO
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
                  Tamaños Disponibles:
                </h3>
                <div className="grid grid-cols-3 gap-2">
                  {product.availableSizes.map((sizeOption) => (
                    <button
                    type="button"
                      key={sizeOption.size}
                      onClick={() => setSelectedSize(sizeOption.size)}
                      className={`p-3 border rounded-lg text-center ${
                        selectedSize === sizeOption.size
                          ? "border-yellow-400 bg-yellow-50"
                          : "border-gray-200 hover:border-gray-300"
                      } ${sizeOption.stock === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
                      disabled={sizeOption.stock === 0}
                    >
                      <div className="font-semibold">{sizeOption.size}</div>
                      <div className="text-xs text-gray-500">
                        {sizeOption.stock > 0
                          ? `${sizeOption.stock} disponibles`
                          : "Agotado"}
                      </div>
                    </button>
                  ))}
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
                <Truck className="w-4 h-4 text-green-600" />
                <span>Envío gratis sobre $100</span>
              </div>
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
                  <span className="font-semibold">SKU:</span> HH-{product.id}
                  -2024
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
            <TabsTrigger value="reviews">
              Reseñas ({product.reviews})
            </TabsTrigger>
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

        {/* Related Products */}
        <div>
          <h2 className="text-2xl font-bold mb-8">Productos Relacionados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Card
                key={relatedProduct.id}
                className="group hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-4">
                  <div className="relative mb-4">
                    <Image
                      src={relatedProduct.image || "/placeholder.svg"}
                      alt={relatedProduct.name}
                      width={200}
                      height={200}
                      className="w-full h-40 object-cover rounded-md"
                    />
                  </div>
                  <h3 className="font-semibold text-sm mb-2 line-clamp-2">
                    {relatedProduct.name}
                  </h3>
                  <div className="flex items-center mb-2">
                    {renderStars(relatedProduct.rating)}
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    {relatedProduct.originalPrice &&
                      relatedProduct.originalPrice !== relatedProduct.price && (
                        <span className="text-gray-400 line-through text-sm">
                          ${relatedProduct.originalPrice}
                        </span>
                      )}
                    <span className="font-bold text-lg">
                      ${relatedProduct.price}
                    </span>
                  </div>
                  <Button
                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold"
                    onClick={() => {
                      window.location.href = `/product/${relatedProduct.id}`;
                    }}
                  >
                    VER PRODUCTO
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <CartProvider>
      <ProductDetailContent params={params} />
    </CartProvider>
  );
}
