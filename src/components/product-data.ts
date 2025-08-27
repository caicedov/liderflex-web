// Product data and interfaces for Liderflex

export interface ProductSpecification {
  [key: string]: string | number;
}

export interface ProductSize {
  size: string;
  stock: number;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews?: number;
  discount?: number;
  inStock?: boolean;
  stockQuantity?: number;
  images?: string[];
  image?: string;
  description?: string;
  specifications?: ProductSpecification;
  features?: string[];
  applications?: string[];
  availableSizes?: ProductSize[];
  category?: string;
  countdown?: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
}


export const products: Product[] = [
  // ...existing detailed products from above (IDs 1, 2, 3)...
  // Featured, Best Selling, Latest, and Unique Products (deduplicated):
  {
    id: "4",
    name: "Kit de Manguera Hidráulica de Alta Presión",
    price: 110000,
    originalPrice: 110000,
    rating: 4,
    discount: 0,
    image: "/placeholder.svg?height=200&width=200",
    category: "Kits Completos",
    description: "Kit completo de mangueras hidráulicas para aplicaciones de alta presión.",
    stockQuantity: 22,
  },
  {
    id: "5",
    name: "Manguera Neumática Flexible 25ft",
    price: 228000,
    originalPrice: 219000,
    rating: 4,
    discount: 4,
    image: "/placeholder.svg?height=200&width=200",
    category: "Mangueras Neumáticas",
    description: "Manguera neumática flexible ideal para herramientas de aire comprimido.",
    stockQuantity: 33,
  },
  {
    id: "6",
    name: "Ensamblaje de Manguera Hidráulica Resistente",
    price: 320000,
    originalPrice: 269000,
    rating: 4,
    discount: 7,
    image: "/placeholder.svg?height=200&width=200",
    category: "Ensamblajes",
    description: "Ensamblaje personalizado de manguera hidráulica para aplicaciones específicas.",
    stockQuantity: 18,
  },
  {
    id: "7",
    name: "Herramienta de Engaste Hidráulico Profesional",
    price: 159000,
    rating: 5,
    image: "/placeholder.svg?height=200&width=200",
    category: "Herramientas",
    description: "Herramienta profesional para engaste de mangueras hidráulicas.",
    stockQuantity: 12,
  },
  {
    id: "8",
    name: "Rollo de Manguera Hidráulica Flexible 100ft",
    price: 539000,
    rating: 4,
    image: "/placeholder.svg?height=200&width=200",
    category: "Mangueras Hidráulicas",
    description: "Rollo completo de manguera hidráulica flexible de 100 pies.",
    stockQuantity: 8,
  },
  {
    id: "9",
    name: "Manguera Trenzada de Acero de Alta Presión",
    price: 110000,
    originalPrice: 115000,
    rating: 4,
    discount: 4,
    image: "/placeholder.svg?height=200&width=200",
    category: "Mangueras Hidráulicas",
    description: "Manguera trenzada de acero para aplicaciones de alta presión.",
    stockQuantity: 25,
    countdown: { days: 425, hours: 20, minutes: 36, seconds: 25 },
  },
  {
    id: "10",
    name: "Kit de Manguera Neumática Industrial",
    price: 320000,
    originalPrice: 269000,
    rating: 4,
    discount: 7,
    image: "/placeholder.svg?height=200&width=200",
    category: "Kits Completos",
    description: "Kit completo de mangueras neumáticas para uso industrial.",
    stockQuantity: 14,
  },
  {
    id: "11",
    name: "Juego de Adaptadores Hidráulicos Resistentes",
    price: 228000,
    originalPrice: 219000,
    rating: 4,
    image: "/placeholder.svg?height=200&width=200",
    category: "Adaptadores",
    description: "Juego completo de adaptadores hidráulicos resistentes.",
    stockQuantity: 30,
  },
  {
    id: "12",
    name: "Manguera Hidráulica de Goma Premium",
    price: 175000,
    originalPrice: 180000,
    rating: 5,
    discount: 3,
    image: "/placeholder.svg?height=200&width=200",
    category: "Mangueras Hidráulicas",
    description: "Manguera hidráulica de goma premium para aplicaciones exigentes.",
    stockQuantity: 40,
    countdown: { days: 329, hours: 20, minutes: 36, seconds: 25 },
  },
];
