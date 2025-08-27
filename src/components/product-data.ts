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
  reviews: number;
  discount: number;
  inStock: boolean;
  stockQuantity: number;
  images: string[];
  description: string;
  specifications: ProductSpecification;
  features: string[];
  applications: string[];
  availableSizes: ProductSize[];
  category: string;
}

export const products: Product[] = [
  {
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
    category: "Mangueras Hidráulicas",
  },
  {
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
    category: "Mangueras Hidráulicas",
  },
  {
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
    category: "Mangueras Industriales",
  },
  // Add more products as needed for a realistic mockup
];
