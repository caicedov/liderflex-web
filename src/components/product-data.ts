// product-data.ts - Catálogo completo de productos Liderflex

export interface ProductSpecification {
  [key: string]: string | number;
}

export interface ProductSize {
  code: string;
  size: string;
  stock: number;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews?: number;
  discount?: number;
  inStock?: boolean;
  stockQuantity?: number;
  images?: string[];
  image?: string;
  description: string;
  specifications: ProductSpecification;
  features: string[];
  applications: string[];
  availableSizes?: ProductSize[];
  countdown?: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
}

// ============================================
// MANGUERAS HIDRÁULICAS SAE 100 R1
// ============================================
export const manguera_r1: Product = {
  id: "r1",
  name: "Manguera Hidráulica SAE 100 R1",
  category: "Mangueras Hidráulicas",
  price: 500000,
  originalPrice: 180000,
  rating: 5,
  reviews: 24,
  discount: 3,
  inStock: true,
  stockQuantity: 150,
  images: [
    "/sae100r1.png?height=400&width=400",
    "/placeholder.svg?height=400&width=400",
  ],
  description: "Manguera para mediana presión. Tubo caucho sintético reforzado con una trenza de alambre y cubierta de caucho sintético.",
  specifications: {
    "Rango de Temperatura": "-40°C a +100°C",
    "Material del Tubo": "Caucho sintético",
    "Refuerzo": "Una trenza de alambre",
    "Cubierta": "Caucho sintético",
    "Norma": "SAE 100 R1",
    "Tipo de Presión": "Mediana presión"
  },
  features: [
    "Tubo de caucho sintético de alta calidad",
    "Reforzado con una trenza de alambre resistente",
    "Cubierta de caucho sintético duradera",
    "Resistente a temperaturas extremas (-40°C a +100°C)",
    "Excelente flexibilidad para instalación",
    "Resistente a aceites y fluidos hidráulicos"
  ],
  applications: [
    "Sistemas hidráulicos con petróleo",
    "Fluidos a base de agua-glicol",
    "Aceites y lubricantes",
    "Agua",
    "Servicios hidráulicos a mediana presión"
  ],
  availableSizes: [
    { code: "MANR104", size: "1/4\"", stock: 32 },
    { code: "MANR105", size: "5/16\"", stock: 28 },
    { code: "MANR106", size: "3/8\"", stock: 45 },
    { code: "MANR108", size: "1/2\"", stock: 38 },
    { code: "MANR110", size: "5/8\"", stock: 22 },
    { code: "MANR112", size: "3/4\"", stock: 18 },
    { code: "MANR116", size: "1\"", stock: 15 },
    { code: "MANR120", size: "1 1/4\"", stock: 12 },
    { code: "MANR124", size: "1 1/2\"", stock: 10 },
    { code: "MANR132", size: "2\"", stock: 8 }
  ]
};

// ============================================
// MANGUERAS HIDRÁULICAS SAE 100 R2
// ============================================
export const manguera_r2: Product = {
  id: "r2",
  name: "Manguera Hidráulica SAE 100 R2",
  category: "Mangueras Hidráulicas",
  price: 220000,
  originalPrice: 230000,
  rating: 5,
  reviews: 32,
  discount: 4,
  inStock: true,
  stockQuantity: 120,
  images: [
    "/placeholder.svg?height=400&width=400",
    "/placeholder.svg?height=400&width=400",
  ],
  description: "Manguera para alta presión. Tubo caucho sintético reforzado con dos trenzas de alambre y cubierta de caucho sintético.",
  specifications: {
    "Rango de Temperatura": "-40°C a +100°C",
    "Material del Tubo": "Caucho sintético",
    "Refuerzo": "Dos trenzas de alambre",
    "Cubierta": "Caucho sintético",
    "Norma": "SAE 100 R2",
    "Tipo de Presión": "Alta presión"
  },
  features: [
    "Tubo de caucho sintético de alta resistencia",
    "Doble trenza de alambre para mayor presión",
    "Cubierta de caucho sintético resistente",
    "Soporta temperaturas extremas (-40°C a +100°C)",
    "Ideal para aplicaciones de alta presión",
    "Excelente resistencia a la abrasión"
  ],
  applications: [
    "Sistemas hidráulicos con petróleo",
    "Fluidos a base de agua-glicol",
    "Aceites y lubricantes",
    "Agua",
    "Servicios hidráulicos a presiones altas"
  ],
  availableSizes: [
    { code: "MANR204", size: "1/4\"", stock: 30 },
    { code: "MANR205", size: "5/16\"", stock: 26 },
    { code: "MANR206", size: "3/8\"", stock: 40 },
    { code: "MANR208", size: "1/2\"", stock: 35 },
    { code: "MANR210", size: "5/8\"", stock: 20 },
    { code: "MANR212", size: "3/4\"", stock: 16 },
    { code: "MANR216", size: "1\"", stock: 14 },
    { code: "MANR220", size: "1 1/4\"", stock: 10 },
    { code: "MANR224", size: "1 1/2\"", stock: 8 },
    { code: "MANR232", size: "2\"", stock: 6 }
  ]
};

// ============================================
// MANGUERAS HIDRÁULICAS SAE 100 R4
// ============================================
export const manguera_r4: Product = {
  id: "r4",
  name: "Manguera Hidráulica SAE 100 R4 - Succión/Descarga",
  category: "Mangueras Hidráulicas",
  price: 185000,
  rating: 4,
  reviews: 18,
  inStock: true,
  stockQuantity: 45,
  images: [
    "/placeholder.svg?height=400&width=400",
  ],
  description: "Manguera para petróleo succión/descarga. Tubo caucho NBR con refuerzo de alambre helicoidal antiestático entre dos trenzas textiles y cubierta de caucho sintético resistente al aceite y petróleo.",
  specifications: {
    "Rango de Temperatura": "-35°C a +70°C",
    "Material del Tubo": "Caucho NBR",
    "Refuerzo": "Alambre helicoidal antiestático entre dos trenzas textiles",
    "Cubierta": "Caucho sintético resistente al aceite y petróleo",
    "Norma": "SAE 100 R4",
    "Tipo": "Succión y descarga"
  },
  features: [
    "Tubo de caucho NBR de alta calidad",
    "Refuerzo helicoidal antiestático",
    "Resistente al aceite y petróleo",
    "Ideal para succión y descarga",
    "Cubierta resistente a la abrasión",
    "Excelente flexibilidad"
  ],
  applications: [
    "Succión y descarga de fluidos hidráulicos derivados del petróleo",
    "Combustibles",
    "Lubricantes",
    "Gasolina",
    "Agua"
  ],
  availableSizes: [
    { code: "MC20", size: "1 1/4\"", stock: 20 },
    { code: "MC24", size: "1 1/2\"", stock: 15 },
    { code: "MC32", size: "2\"", stock: 10 }
  ]
};

// ============================================
// MANGUERAS HIDRÁULICAS SAE 100 R6
// ============================================
export const manguera_r6: Product = {
  id: "r6",
  name: "Manguera Hidráulica SAE 100 R6 - Multipropósito",
  category: "Mangueras Hidráulicas",
  price: 95000,
  rating: 4,
  reviews: 28,
  inStock: true,
  stockQuantity: 200,
  images: [
    "/placeholder.svg?height=400&width=400",
  ],
  description: "Manguera multipropósito. Tubo caucho NBR con refuerzo interior textil y cubierta de caucho sintético resistente a la abrasión y al ozono.",
  specifications: {
    "Rango de Temperatura": "-35°C a +70°C",
    "Material del Tubo": "Caucho NBR",
    "Refuerzo": "Textil interior",
    "Cubierta": "Caucho sintético resistente a la abrasión y ozono",
    "Norma": "SAE 100 R6",
    "Tipo": "Multipropósito"
  },
  features: [
    "Tubo de caucho NBR flexible",
    "Refuerzo textil resistente",
    "Cubierta resistente a la abrasión y ozono",
    "Versátil para múltiples aplicaciones",
    "Económica y duradera",
    "Fácil instalación"
  ],
  applications: [
    "Conducción de fluidos derivados del petróleo",
    "Aceites",
    "Combustibles",
    "Lubricantes",
    "Retorno de sistemas hidráulicos a baja presión"
  ],
  availableSizes: [
    { code: "MUL3/16", size: "3/16\"", stock: 50 },
    { code: "MUL1/4", size: "1/4\"", stock: 45 },
    { code: "MUL5/16", size: "5/16\"", stock: 40 },
    { code: "MUL3/8", size: "3/8\"", stock: 38 },
    { code: "MUL1/2", size: "1/2\"", stock: 35 },
    { code: "MUL5/8", size: "5/8\"", stock: 30 },
    { code: "MUL3/4", size: "3/4\"", stock: 28 },
    { code: "MUL1", size: "1\"", stock: 25 },
    { code: "MUL11/4", size: "1 1/4\"", stock: 20 },
    { code: "MUL11/2", size: "1 1/2\"", stock: 18 },
    { code: "MUL2", size: "2\"", stock: 15 },
    { code: "MUL21/2", size: "2 1/2\"", stock: 12 },
    { code: "MUL3", size: "3\"", stock: 10 },
    { code: "MUL4", size: "4\"", stock: 8 }
  ]
};

// ============================================
// MANGUERAS HIDRÁULICAS SAE 100 R12
// ============================================
export const manguera_r12: Product = {
  id: "r12",
  name: "Manguera Hidráulica SAE 100 R12",
  category: "Mangueras Hidráulicas",
  price: 280000,
  rating: 5,
  reviews: 15,
  inStock: true,
  stockQuantity: 60,
  images: [
    "/placeholder.svg?height=400&width=400",
  ],
  description: "Manguera para alta presión. Tubo caucho sintético reforzado con cuatro espirales de alambre altamente resistentes y cubierta de caucho sintético.",
  specifications: {
    "Rango de Temperatura": "-40°C a +100°C",
    "Material del Tubo": "Caucho sintético",
    "Refuerzo": "Cuatro espirales de alambre altamente resistentes",
    "Cubierta": "Caucho sintético",
    "Norma": "SAE 100 R12",
    "Tipo de Presión": "Alta presión con pulsos"
  },
  features: [
    "Cuatro espirales de alambre de alta resistencia",
    "Ideal para sistemas con pulsos de presión",
    "Excelente resistencia a la fatiga",
    "Soporta presiones extremadamente altas",
    "Construcción robusta y duradera",
    "Resistente a temperaturas extremas"
  ],
  applications: [
    "Sistemas hidráulicos que presentan pulsos de presión",
    "Fluidos a base de agua-glicol",
    "Petróleo",
    "Aceites y lubricantes",
    "Servicios hidráulicos a presiones altas"
  ],
  availableSizes: [
    { code: "MANR1206", size: "3/8\"", stock: 25 },
    { code: "MANR1208", size: "1/2\"", stock: 20 },
    { code: "MANR1210", size: "5/8\"", stock: 15 }
  ]
};

// ============================================
// MANGUERAS HIDRÁULICAS 4SH
// ============================================
export const manguera_4sh: Product = {
  id: "4sh",
  name: "Manguera Hidráulica 4SH",
  category: "Mangueras Hidráulicas",
  price: 320000,
  rating: 5,
  reviews: 12,
  inStock: true,
  stockQuantity: 40,
  images: [
    "/placeholder.svg?height=400&width=400",
  ],
  description: "Manguera para alta presión. Tubo caucho sintético reforzado con cuatro espirales de alambre altamente resistentes y cubierta de caucho sintético.",
  specifications: {
    "Rango de Temperatura": "-40°C a +100°C",
    "Material del Tubo": "Caucho sintético",
    "Refuerzo": "Cuatro espirales de alambre altamente resistentes",
    "Cubierta": "Caucho sintético",
    "Norma": "4SH",
    "Tipo de Presión": "Alta presión con pulsos"
  },
  features: [
    "Cuatro espirales de alambre de máxima resistencia",
    "Diseñada para aplicaciones extremas",
    "Excelente resistencia a pulsos de presión",
    "Construcción de alta calidad",
    "Larga vida útil",
    "Resistente a condiciones severas"
  ],
  applications: [
    "Sistemas hidráulicos que presentan pulsos de presión",
    "Fluidos a base de agua-glicol",
    "Petróleo",
    "Aceites y lubricantes",
    "Servicios hidráulicos a presiones altas"
  ],
  availableSizes: [
    { code: "MAN4SH12", size: "3/4\"", stock: 15 },
    { code: "MAN4SH16", size: "1\"", stock: 12 },
    { code: "MAN4SH20", size: "1 1/4\"", stock: 8 },
    { code: "MAN4SH24", size: "1 1/2\"", stock: 5 }
  ]
};

// ============================================
// MANGUERAS HIDRÁULICAS SAE 100 R7
// ============================================
export const manguera_r7: Product = {
  id: "r7",
  name: "Manguera Hidráulica SAE 100 R7 - Termoplástica",
  category: "Mangueras Hidráulicas",
  price: 145000,
  rating: 4,
  reviews: 22,
  inStock: true,
  stockQuantity: 80,
  images: [
    "/placeholder.svg?height=400&width=400",
  ],
  description: "Manguera termoplástica simple y paralela. Tubo polyester-nylon termoplástico reforzado con trenza textil de polyester y cubierta de nylon resistente a los aceites.",
  specifications: {
    "Rango de Temperatura": "-35°C a +70°C",
    "Material del Tubo": "Polyester-nylon termoplástico",
    "Refuerzo": "Trenza textil de polyester",
    "Cubierta": "Nylon resistente a los aceites",
    "Norma": "SAE 100 R7",
    "Tipo": "Termoplástica"
  },
  features: [
    "Material termoplástico ligero",
    "Excelente flexibilidad",
    "Resistente a los aceites",
    "Ideal para alto caudal",
    "Disponible en versión simple y doble",
    "Perfecta para trabajo en poleas"
  ],
  applications: [
    "Sistemas hidráulicos con alto caudal",
    "Agua-glicol",
    "Petróleo",
    "Servicios hidráulicos en altas presiones",
    "Trabajo en poleas"
  ],
  availableSizes: [
    { code: "MANR704S", size: "1/4\" Simple", stock: 30 },
    { code: "MANR706S", size: "3/8\" Simple", stock: 25 },
    { code: "MANR704D", size: "1/4\" Doble", stock: 15 },
    { code: "MANR706D", size: "3/8\" Doble", stock: 10 }
  ]
};

// ============================================
// MANGUERA TEFLÓN
// ============================================
export const manguera_teflon: Product = {
  id: "teflon",
  name: "Manguera Teflón",
  category: "Mangueras Especiales",
  price: 450000,
  rating: 5,
  reviews: 8,
  inStock: true,
  stockQuantity: 30,
  images: [
    "/placeholder.svg?height=400&width=400",
  ],
  description: "Manguera teflón. Material de tubo color blanco, blindado con malla de acero inoxidable.",
  specifications: {
    "Rango de Temperatura": "-50°C a +200°C",
    "Material del Tubo": "Teflón (PTFE) color blanco",
    "Refuerzo": "Malla de acero inoxidable",
    "Tipo": "Alta temperatura y presión"
  },
  features: [
    "Rango de temperatura extremo (-50°C a +200°C)",
    "Blindado con malla de acero inoxidable",
    "Resistente a fluidos corrosivos",
    "Apto para uso alimentario",
    "Excelente resistencia química",
    "Material de alta pureza"
  ],
  applications: [
    "Líneas de alta temperatura y presión",
    "Fluidos corrosivos",
    "Vapor",
    "Oxígeno",
    "Aceite",
    "Alimentos",
    "Productos químicos"
  ],
  availableSizes: [
    { code: "MT04", size: "1/4\"", stock: 8 },
    { code: "MT06", size: "3/8\"", stock: 7 },
    { code: "MT08", size: "1/2\"", stock: 6 },
    { code: "MT10", size: "5/8\"", stock: 4 },
    { code: "MT12", size: "3/4\"", stock: 3 },
    { code: "MT16", size: "1\"", stock: 2 }
  ]
};

// ============================================
// MANGUERA VAPOR ROJA
// ============================================
export const manguera_vapor: Product = {
  id: "vapor",
  name: "Manguera Vapor Roja",
  category: "Mangueras Especiales",
  price: 165000,
  rating: 4,
  reviews: 14,
  inStock: true,
  stockQuantity: 50,
  images: [
    "/placeholder.svg?height=400&width=400",
  ],
  description: "Manguera para vapor. Tubo de goma EPDM con refuerzo de alambre CORDS y cubierta de caucho sintético microperforada. Presión máxima 250psi.",
  specifications: {
    "Rango de Temperatura": "-40°C a +208°C",
    "Material del Tubo": "Goma EPDM",
    "Refuerzo": "Alambre CORDS",
    "Cubierta": "Caucho sintético microperforada",
    "Presión Máxima": "250 PSI",
    "Color": "Rojo"
  },
  features: [
    "Diseñada específicamente para vapor",
    "Cubierta microperforada para liberación de vapor",
    "Resistente a altas temperaturas (hasta 208°C)",
    "Tubo de goma EPDM de alta calidad",
    "Presión de trabajo 250 PSI",
    "Color rojo distintivo"
  ],
  applications: [
    "Líneas de alta temperatura",
    "Agua caliente",
    "Vapor industrial",
    "Procesos de limpieza con vapor"
  ],
  availableSizes: [
    { code: "MVA08", size: "1/2\"", stock: 15 },
    { code: "MVA12", size: "3/4\"", stock: 12 },
    { code: "MVA16", size: "1\"", stock: 10 },
    { code: "MVA24", size: "1 1/2\"", stock: 8 },
    { code: "MVA32", size: "2\"", stock: 5 }
  ]
};

// ============================================
// MANGUERA ÁCIDOS Y SOLVENTES
// ============================================
export const manguera_acidos: Product = {
  id: "acidos",
  name: "Manguera Ácidos y Solventes XLPE",
  category: "Mangueras Químicas",
  price: 195000,
  rating: 5,
  reviews: 10,
  inStock: true,
  stockQuantity: 40,
  images: [
    "/placeholder.svg?height=400&width=400",
  ],
  description: "Manguera para ácidos y solventes. Tubo de polietileno reticulado XLPE transparente resistente a los productos químicos, solventes y aceites. Presión máxima 150psi.",
  specifications: {
    "Rango de Temperatura": "-40°C a +80°C",
    "Material del Tubo": "Polietileno reticulado XLPE transparente",
    "Presión Máxima": "150 PSI",
    "Color": "Verde exterior, tubo transparente",
    "Tipo": "Succión y descarga"
  },
  features: [
    "Tubo de polietileno reticulado XLPE",
    "Transparente para visualización del fluido",
    "Resistente a productos químicos",
    "Resistente a solventes y aceites",
    "Presión de trabajo 150 PSI",
    "Excelente resistencia química"
  ],
  applications: [
    "Succión y descarga de productos químicos",
    "Productos derivados del petróleo",
    "Solventes",
    "Alcoholes",
    "Ácidos industriales"
  ],
  availableSizes: [
    { code: "MXLPE12", size: "3/4\"", stock: 12 },
    { code: "MXLPE16", size: "1\"", stock: 10 },
    { code: "MXLPE24", size: "1 1/2\"", stock: 8 },
    { code: "MXLPE32", size: "2\"", stock: 5 },
    { code: "MXLPE48", size: "3\"", stock: 3 },
    { code: "MXLPE64", size: "4\"", stock: 2 }
  ]
};

// ============================================
// MANGUERA PVC ANILLADA
// ============================================
export const manguera_pvc: Product = {
  id: "pvc",
  name: "Manguera PVC Anillada Amarilla",
  category: "Mangueras PVC",
  price: 45000,
  rating: 4,
  reviews: 35,
  inStock: true,
  stockQuantity: 250,
  images: [
    "/placeholder.svg?height=400&width=400",
  ],
  description: "Manguera PVC anillada amarilla. PVC con espiral de PVC para succión y descarga de agua.",
  specifications: {
    "Rango de Temperatura": "-5°C a +60°C",
    "Material": "PVC con espiral de PVC",
    "Color": "Amarillo",
    "Tipo": "Succión y descarga"
  },
  features: [
    "Material PVC resistente",
    "Espiral de PVC reforzado",
    "Color amarillo de alta visibilidad",
    "Económica y duradera",
    "Fácil manejo e instalación",
    "Ideal para agua"
  ],
  applications: [
    "Succión de agua",
    "Descarga de agua",
    "Riego",
    "Aplicaciones agrícolas",
    "Construcción"
  ],
  availableSizes: [
    { code: "MANL12", size: "3/4\"", stock: 50 },
    { code: "MANL16", size: "1\"", stock: 45 },
    { code: "MANL20", size: "1 1/4\"", stock: 40 },
    { code: "MANL24", size: "1 1/2\"", stock: 35 },
    { code: "MANL32", size: "2\"", stock: 30 },
    { code: "MANL40", size: "2 1/2\"", stock: 20 },
    { code: "MANL48", size: "3\"", stock: 15 },
    { code: "MANL64", size: "4\"", stock: 15 }
  ]
};

// ============================================
// MANGUERA ESPIRALADA POLIURETANO
// ============================================
export const manguera_poliuretano: Product = {
  id: "poliuretano",
  name: "Manguera Espiralada de Cobre Poliuretano",
  category: "Mangueras Industriales",
  price: 125000,
  rating: 5,
  reviews: 18,
  inStock: true,
  stockQuantity: 70,
  images: [
    "/placeholder.svg?height=400&width=400",
  ],
  description: "Manguera espiralada de poliuretano transparente antiestático. Ideal para aspiración de aire cargado de sustancias abrasivas.",
  specifications: {
    "Rango de Temperatura": "-35°C a +85°C",
    "Material": "Poliuretano transparente antiestático",
    "Espiral": "Cobre",
    "Tipo": "Aspiración"
  },
  features: [
    "Poliuretano transparente de alta calidad",
    "Espiral de cobre antiestático",
    "Excelente resistencia a la abrasión",
    "Flexible y ligera",
    "Resistente a sustancias reactivas",
    "Transparente para visualización"
  ],
  applications: [
    "Aspiración de aire cargado de sustancias abrasivas",
    "Humos industriales",
    "Virutas metálicas",
    "Grasa",
    "Polvo y partículas",
    "Sistemas de extracción"
  ],
  availableSizes: [
    { code: "MPU40", size: "1 1/2\"", stock: 15 },
    { code: "MPU51", size: "2\"", stock: 12 },
    { code: "MPU60", size: "2 1/2\"", stock: 10 },
    { code: "MPU76", size: "3\"", stock: 8 },
    { code: "MPU102", size: "4\"", stock: 6 },
    { code: "MPU127", size: "5\"", stock: 5 },
    { code: "MPU152", size: "6\"", stock: 5 },
    { code: "MPU203", size: "8\"", stock: 4 },
    { code: "MPU254", size: "10\"", stock: 3 },
    { code: "MPU305", size: "12\"", stock: 2 }
  ]
};

// ============================================
// PROTECCIÓN ESPIRAL NEGRO
// ============================================
export const proteccion_espiral: Product = {
  id: "proteccion",
  name: "Protección Espiral Negro",
  category: "Accesorios",
  price: 15000,
  rating: 4,
  reviews: 42,
  inStock: true,
  stockQuantity: 300,
  images: [
    "/placeholder.svg?height=400&width=400",
  ],
  description: "Protección espiral negra para mangueras hidráulicas. Material rígido y resistente, de fácil instalación sin necesidad de quitar conectores.",
  specifications: {
    "Material": "Polipropileno rígido",
    "Color": "Negro",
    "Instalación": "Sin necesidad de desmontar conectores"
  },
  features: [
    "Material rígido y resistente",
    "Fácil instalación sin desmontar conectores",
    "Protege contra abrasión",
    "Protege contra condiciones climáticas",
    "Protege contra aplastamiento",
    "Prolonga la vida útil de las mangueras",
    "Disponible en múltiples medidas"
  ],
  applications: [
    "Protección de mangueras hidráulicas",
    "Protección contra abrasión",
    "Protección contra condiciones climáticas extremas",
    "Protección contra aplastamiento",
    "Maquinaria pesada",
    "Equipos industriales"
  ],
  availableSizes: [
    { code: "EN12MM", size: "12mm", stock: 80 },
    { code: "EN28MM", size: "28mm", stock: 70 },
    { code: "EN45MM", size: "45mm", stock: 60 },
    { code: "EN67MM", size: "67mm", stock: 50 },
    { code: "EN99MM", size: "99mm", stock: 40 }
  ]
};

// ============================================
// ARRAY PRINCIPAL DE PRODUCTOS
// ============================================
export const products: Product[] = [
  manguera_r1,
  manguera_r2,
  manguera_r4,
  manguera_r6,
  manguera_r12,
  manguera_4sh,
  manguera_r7,
  manguera_teflon,
  manguera_vapor,
  manguera_acidos,
  manguera_pvc,
  manguera_poliuretano,
  proteccion_espiral
];

// ============================================
// FUNCIONES AUXILIARES
// ============================================

// Obtener producto por ID
export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

// Obtener productos por categoría
export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

// Obtener todas las categorías únicas
export const getCategories = (): string[] => {
  return Array.from(new Set(products.map(product => product.category)));
};

// Obtener productos en oferta
export const getProductsOnSale = (): Product[] => {
  return products.filter(product => product.discount && product.discount > 0);
};

// Buscar productos por nombre o descripción
export const searchProducts = (query: string): Product[] => {
  const lowerQuery = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(lowerQuery) ||
    product.description.toLowerCase().includes(lowerQuery)
  );
};

// Obtener tamaño específico de un producto
export const getProductSize = (productId: string, sizeCode: string): ProductSize | undefined => {
  const product = getProductById(productId);
  return product?.availableSizes?.find(size => size.code === sizeCode);
};