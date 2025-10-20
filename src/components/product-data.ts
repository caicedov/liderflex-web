export interface ProductSpecification {
  [key: string]: string | number;
}

export interface ProductSize {
  code: string;
  size: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  image?: string;
  images?: string[];
  description: string;
  specifications: ProductSpecification;
  features: string[];
  applications: string[];
  availableSizes?: ProductSize[];
}

// ============================================
// MANGUERAS HIDRÁULICAS SAE 100 R1
// ============================================
export const manguera_r1: Product = {
  id: "r1",
  name: "Manguera Hidráulica SAE 100 R1",
  category: "Mangueras Hidráulicas",
  images: ["/sae100r1.png?height=400&width=400"],
  description:
    "Manguera para mediana presión. Tubo caucho sintético reforzado con una trenza de alambre y cubierta de caucho sintético.",
  specifications: {
    "Rango de Temperatura": "-40°C a +100°C",
    "Material del Tubo": "Caucho sintético",
    Refuerzo: "Una trenza de alambre",
    Cubierta: "Caucho sintético",
    Norma: "SAE 100 R1",
    "Tipo de Presión": "Mediana presión",
  },
  features: [
    "Tubo de caucho sintético de alta calidad",
    "Reforzado con una trenza de alambre resistente",
    "Cubierta de caucho sintético duradera",
    "Resistente a temperaturas extremas (-40°C a +100°C)",
    "Excelente flexibilidad para instalación",
    "Resistente a aceites y fluidos hidráulicos",
  ],
  applications: [
    "Sistemas hidráulicos con petróleo",
    "Fluidos a base de agua-glicol",
    "Aceites y lubricantes",
    "Agua",
    "Servicios hidráulicos a mediana presión",
  ],
  availableSizes: [
    { code: "MANR104", size: '1/4"' },
    { code: "MANR105", size: '5/16"' },
    { code: "MANR106", size: '3/8"' },
    { code: "MANR108", size: '1/2"' },
    { code: "MANR110", size: '5/8"' },
    { code: "MANR112", size: '3/4"' },
    { code: "MANR116", size: '1"' },
    { code: "MANR120", size: '1 1/4"' },
    { code: "MANR124", size: '1 1/2"' },
    { code: "MANR132", size: '2"' },
  ],
};

// ============================================
// MANGUERAS HIDRÁULICAS SAE 100 R2
// ============================================
export const manguera_r2: Product = {
  id: "r2",
  name: "Manguera Hidráulica SAE 100 R2",
  category: "Mangueras Hidráulicas",
  images: ["/sae100r2.png?height=400&width=400"],
  description:
    "Manguera para alta presión. Tubo caucho sintético reforzado con dos trenzas de alambre y cubierta de caucho sintético.",
  specifications: {
    "Rango de Temperatura": "-40°C a +100°C",
    "Material del Tubo": "Caucho sintético",
    Refuerzo: "Dos trenzas de alambre",
    Cubierta: "Caucho sintético",
    Norma: "SAE 100 R2",
    "Tipo de Presión": "Alta presión",
  },
  features: [
    "Tubo de caucho sintético de alta resistencia",
    "Doble trenza de alambre para mayor presión",
    "Cubierta de caucho sintético resistente",
    "Soporta temperaturas extremas (-40°C a +100°C)",
    "Ideal para aplicaciones de alta presión",
    "Excelente resistencia a la abrasión",
  ],
  applications: [
    "Sistemas hidráulicos con petróleo",
    "Fluidos a base de agua-glicol",
    "Aceites y lubricantes",
    "Agua",
    "Servicios hidráulicos a presiones altas",
  ],
  availableSizes: [
    { code: "MANR204", size: '1/4"' },
    { code: "MANR205", size: '5/16"' },
    { code: "MANR206", size: '3/8"' },
    { code: "MANR208", size: '1/2"' },
    { code: "MANR210", size: '5/8"' },
    { code: "MANR212", size: '3/4"' },
    { code: "MANR216", size: '1"' },
    { code: "MANR220", size: '1 1/4"' },
    { code: "MANR224", size: '1 1/2"' },
    { code: "MANR232", size: '2"' },
  ],
};

// ============================================
// MANGUERAS HIDRÁULICAS SAE 100 R4
// ============================================
export const manguera_r4: Product = {
  id: "r4",
  name: "Manguera Hidráulica SAE 100 R4 - Succión/Descarga",
  category: "Mangueras Hidráulicas",
  images: ["/sae100r4.png?height=400&width=400"],
  description:
    "Manguera para petróleo succión/descarga. Tubo caucho NBR con refuerzo de alambre helicoidal antiestático entre dos trenzas textiles y cubierta de caucho sintético resistente al aceite y petróleo.",
  specifications: {
    "Rango de Temperatura": "-35°C a +70°C",
    "Material del Tubo": "Caucho NBR",
    Refuerzo: "Alambre helicoidal antiestático entre dos trenzas textiles",
    Cubierta: "Caucho sintético resistente al aceite y petróleo",
    Norma: "SAE 100 R4",
    Tipo: "Succión y descarga",
  },
  features: [
    "Tubo de caucho NBR de alta calidad",
    "Refuerzo helicoidal antiestático",
    "Resistente al aceite y petróleo",
    "Ideal para succión y descarga",
    "Cubierta resistente a la abrasión",
    "Excelente flexibilidad",
  ],
  applications: [
    "Succión y descarga de fluidos hidráulicos derivados del petróleo",
    "Combustibles",
    "Lubricantes",
    "Gasolina",
    "Agua",
  ],
  availableSizes: [
    { code: "MC20", size: '1 1/4"' },
    { code: "MC24", size: '1 1/2"' },
    { code: "MC32", size: '2"' },
  ],
};

// ============================================
// MANGUERAS HIDRÁULICAS SAE 100 R6
// ============================================
export const manguera_r6: Product = {
  id: "r6",
  name: "Manguera Hidráulica SAE 100 R6 - Multipropósito",
  category: "Mangueras Hidráulicas",
  images: ["/sae100r6.png?height=400&width=400"],
  description:
    "Manguera multipropósito. Tubo caucho NBR con refuerzo interior textil y cubierta de caucho sintético resistente a la abrasión y al ozono.",
  specifications: {
    "Rango de Temperatura": "-35°C a +70°C",
    "Material del Tubo": "Caucho NBR",
    Refuerzo: "Textil interior",
    Cubierta: "Caucho sintético resistente a la abrasión y ozono",
    Norma: "SAE 100 R6",
    Tipo: "Multipropósito",
  },
  features: [
    "Tubo de caucho NBR flexible",
    "Refuerzo textil resistente",
    "Cubierta resistente a la abrasión y ozono",
    "Versátil para múltiples aplicaciones",
    "Económica y duradera",
    "Fácil instalación",
  ],
  applications: [
    "Conducción de fluidos derivados del petróleo",
    "Aceites",
    "Combustibles",
    "Lubricantes",
    "Retorno de sistemas hidráulicos a baja presión",
  ],
  availableSizes: [
    { code: "MUL3/16", size: '3/16"' },
    { code: "MUL1/4", size: '1/4"' },
    { code: "MUL5/16", size: '5/16"' },
    { code: "MUL3/8", size: '3/8"' },
    { code: "MUL1/2", size: '1/2"' },
    { code: "MUL5/8", size: '5/8"' },
    { code: "MUL3/4", size: '3/4"' },
    { code: "MUL1", size: '1"' },
    { code: "MUL11/4", size: '1 1/4"' },
    { code: "MUL11/2", size: '1 1/2"' },
    { code: "MUL2", size: '2"' },
    { code: "MUL21/2", size: '2 1/2"' },
    { code: "MUL3", size: '3"' },
    { code: "MUL4", size: '4"' },
  ],
};

// ============================================
// MANGUERAS HIDRÁULICAS SAE 100 R12
// ============================================
export const manguera_r12: Product = {
  id: "r12",
  name: "Manguera Hidráulica SAE 100 R12",
  category: "Mangueras Hidráulicas",
  images: ["/sae100r12.png?height=400&width=400"],
  description:
    "Manguera para alta presión. Tubo caucho sintético reforzado con cuatro espirales de alambre altamente resistentes y cubierta de caucho sintético.",
  specifications: {
    "Rango de Temperatura": "-40°C a +100°C",
    "Material del Tubo": "Caucho sintético",
    Refuerzo: "Cuatro espirales de alambre altamente resistentes",
    Cubierta: "Caucho sintético",
    Norma: "SAE 100 R12",
    "Tipo de Presión": "Alta presión con pulsos",
  },
  features: [
    "Cuatro espirales de alambre de alta resistencia",
    "Ideal para sistemas con pulsos de presión",
    "Excelente resistencia a la fatiga",
    "Soporta presiones extremadamente altas",
    "Construcción robusta y duradera",
    "Resistente a temperaturas extremas",
  ],
  applications: [
    "Sistemas hidráulicos que presentan pulsos de presión",
    "Fluidos a base de agua-glicol",
    "Petróleo",
    "Aceites y lubricantes",
    "Servicios hidráulicos a presiones altas",
  ],
  availableSizes: [
    { code: "MANR1206", size: '3/8"' },
    { code: "MANR1208", size: '1/2"' },
    { code: "MANR1210", size: '5/8"' },
  ],
};

// ============================================
// MANGUERAS HIDRÁULICAS 4SH
// ============================================
export const manguera_4sh: Product = {
  id: "4sh",
  name: "Manguera Hidráulica 4SH",
  category: "Mangueras Hidráulicas",
  images: ["/mangueras/mh-4sh.png?height=400&width=400"],
  description:
    "Manguera para alta presión. Tubo caucho sintético reforzado con cuatro espirales de alambre altamente resistentes y cubierta de caucho sintético.",
  specifications: {
    "Rango de Temperatura": "-40°C a +100°C",
    "Material del Tubo": "Caucho sintético",
    Refuerzo: "Cuatro espirales de alambre altamente resistentes",
    Cubierta: "Caucho sintético",
    Norma: "4SH",
    "Tipo de Presión": "Alta presión con pulsos",
  },
  features: [
    "Cuatro espirales de alambre de máxima resistencia",
    "Diseñada para aplicaciones extremas",
    "Excelente resistencia a pulsos de presión",
    "Construcción de alta calidad",
    "Larga vida útil",
    "Resistente a condiciones severas",
  ],
  applications: [
    "Sistemas hidráulicos que presentan pulsos de presión",
    "Fluidos a base de agua-glicol",
    "Petróleo",
    "Aceites y lubricantes",
    "Servicios hidráulicos a presiones altas",
  ],
  availableSizes: [
    { code: "MAN4SH12", size: '3/4"' },
    { code: "MAN4SH16", size: '1"' },
    { code: "MAN4SH20", size: '1 1/4"' },
    { code: "MAN4SH24", size: '1 1/2"' },
  ],
};

// ============================================
// MANGUERAS HIDRÁULICAS SAE 100 R7
// ============================================
export const manguera_r7: Product = {
  id: "r7",
  name: "Manguera Hidráulica SAE 100 R7 - Termoplástica",
  category: "Mangueras Hidráulicas",
  images: ["/mangueras/mh-sae100r7.png?height=400&width=400"],
  description:
    "Manguera termoplástica simple y paralela. Tubo polyester-nylon termoplástico reforzado con trenza textil de polyester y cubierta de nylon resistente a los aceites.",
  specifications: {
    "Rango de Temperatura": "-35°C a +70°C",
    "Material del Tubo": "Polyester-nylon termoplástico",
    Refuerzo: "Trenza textil de polyester",
    Cubierta: "Nylon resistente a los aceites",
    Norma: "SAE 100 R7",
    Tipo: "Termoplástica",
  },
  features: [
    "Material termoplástico ligero",
    "Excelente flexibilidad",
    "Resistente a los aceites",
    "Ideal para alto caudal",
    "Disponible en versión simple y doble",
    "Perfecta para trabajo en poleas",
  ],
  applications: [
    "Sistemas hidráulicos con alto caudal",
    "Agua-glicol",
    "Petróleo",
    "Servicios hidráulicos en altas presiones",
    "Trabajo en poleas",
  ],
  availableSizes: [
    { code: "MANR704S", size: '1/4" Simple' },
    { code: "MANR706S", size: '3/8" Simple' },
    { code: "MANR704D", size: '1/4" Doble' },
    { code: "MANR706D", size: '3/8" Doble' },
  ],
};

// ============================================
// MANGUERA TEFLÓN
// ============================================
export const manguera_teflon: Product = {
  id: "teflon",
  name: "Manguera Teflón",
  category: "Mangueras Especiales",
  images: ["/mangueras/m-teflon.png?height=400&width=400"],
  description:
    "Manguera teflón. Material de tubo color blanco, blindado con malla de acero inoxidable.",
  specifications: {
    "Rango de Temperatura": "-50°C a +200°C",
    "Material del Tubo": "Teflón (PTFE) color blanco",
    Refuerzo: "Malla de acero inoxidable",
    Tipo: "Alta temperatura y presión",
  },
  features: [
    "Rango de temperatura extremo (-50°C a +200°C)",
    "Blindado con malla de acero inoxidable",
    "Resistente a fluidos corrosivos",
    "Apto para uso alimentario",
    "Excelente resistencia química",
    "Material de alta pureza",
  ],
  applications: [
    "Líneas de alta temperatura y presión",
    "Fluidos corrosivos",
    "Vapor",
    "Oxígeno",
    "Aceite",
    "Alimentos",
    "Productos químicos",
  ],
  availableSizes: [
    { code: "MT04", size: '1/4"' },
    { code: "MT06", size: '3/8"' },
    { code: "MT08", size: '1/2"' },
    { code: "MT10", size: '5/8"' },
    { code: "MT12", size: '3/4"' },
    { code: "MT16", size: '1"' },
  ],
};

// ============================================
// MANGUERA VAPOR ROJA
// ============================================
export const manguera_vapor: Product = {
  id: "vapor",
  name: "Manguera Vapor Roja",
  category: "Mangueras Especiales",
  images: ["/mangueras/m-vapor.png?height=400&width=400"],
  description:
    "Manguera para vapor. Tubo de goma EPDM con refuerzo de alambre CORDS y cubierta de caucho sintético microperforada. Presión máxima 250psi.",
  specifications: {
    "Rango de Temperatura": "-40°C a +208°C",
    "Material del Tubo": "Goma EPDM",
    Refuerzo: "Alambre CORDS",
    Cubierta: "Caucho sintético microperforada",
    "Presión Máxima": "250 PSI",
    Color: "Rojo",
  },
  features: [
    "Diseñada específicamente para vapor",
    "Cubierta microperforada para liberación de vapor",
    "Resistente a altas temperaturas (hasta 208°C)",
    "Tubo de goma EPDM de alta calidad",
    "Presión de trabajo 250 PSI",
    "Color rojo distintivo",
  ],
  applications: [
    "Líneas de alta temperatura",
    "Agua caliente",
    "Vapor industrial",
    "Procesos de limpieza con vapor",
  ],
  availableSizes: [
    { code: "MVA08", size: '1/2"' },
    { code: "MVA12", size: '3/4"' },
    { code: "MVA16", size: '1"' },
    { code: "MVA24", size: '1 1/2"' },
    { code: "MVA32", size: '2"' },
  ],
};

// ============================================
// MANGUERA ÁCIDOS Y SOLVENTES
// ============================================
export const manguera_acidos: Product = {
  id: "acidos",
  name: "Manguera Ácidos y Solventes XLPE",
  category: "Mangueras Químicas",
  images: ["/mangueras/m-acido-solv.png?height=400&width=400"],
  description:
    "Manguera para ácidos y solventes. Tubo de polietileno reticulado XLPE transparente resistente a los productos químicos, solventes y aceites. Presión máxima 150psi.",
  specifications: {
    "Rango de Temperatura": "-40°C a +80°C",
    "Material del Tubo": "Polietileno reticulado XLPE transparente",
    "Presión Máxima": "150 PSI",
    Color: "Verde exterior, tubo transparente",
    Tipo: "Succión y descarga",
  },
  features: [
    "Tubo de polietileno reticulado XLPE",
    "Transparente para visualización del fluido",
    "Resistente a productos químicos",
    "Resistente a solventes y aceites",
    "Presión de trabajo 150 PSI",
    "Excelente resistencia química",
  ],
  applications: [
    "Succión y descarga de productos químicos",
    "Productos derivados del petróleo",
    "Solventes",
    "Alcoholes",
    "Ácidos industriales",
  ],
  availableSizes: [
    { code: "MXLPE12", size: '3/4"' },
    { code: "MXLPE16", size: '1"' },
    { code: "MXLPE24", size: '1 1/2"' },
    { code: "MXLPE32", size: '2"' },
    { code: "MXLPE48", size: '3"' },
    { code: "MXLPE64", size: '4"' },
  ],
};

// ============================================
// MANGUERA PVC ANILLADA
// ============================================
export const manguera_pvc: Product = {
  id: "pvc",
  name: "Manguera PVC Anillada Amarilla",
  category: "Mangueras PVC",
  images: ["/mangueras/m-pvc-anill.png?height=400&width=400"],
  description:
    "Manguera PVC anillada amarilla. PVC con espiral de PVC para succión y descarga de agua.",
  specifications: {
    "Rango de Temperatura": "-5°C a +60°C",
    Material: "PVC con espiral de PVC",
    Color: "Amarillo",
    Tipo: "Succión y descarga",
  },
  features: [
    "Material PVC resistente",
    "Espiral de PVC reforzado",
    "Color amarillo de alta visibilidad",
    "Económica y duradera",
    "Fácil manejo e instalación",
    "Ideal para agua",
  ],
  applications: [
    "Succión de agua",
    "Descarga de agua",
    "Riego",
    "Aplicaciones agrícolas",
    "Construcción",
  ],
  availableSizes: [
    { code: "MANL12", size: '3/4"' },
    { code: "MANL16", size: '1"' },
    { code: "MANL20", size: '1 1/4"' },
    { code: "MANL24", size: '1 1/2"' },
    { code: "MANL32", size: '2"' },
    { code: "MANL40", size: '2 1/2"' },
    { code: "MANL48", size: '3"' },
    { code: "MANL64", size: '4"' },
  ],
};

// ============================================
// MANGUERA ESPIRALADA POLIURETANO
// ============================================
export const manguera_poliuretano: Product = {
  id: "poliuretano",
  name: "Manguera Espiralada de Cobre Poliuretano",
  category: "Mangueras Industriales",
  images: ["/mangueras/m-espiralada.png?height=400&width=400"],
  description:
    "Manguera espiralada de poliuretano transparente antiestático. Ideal para aspiración de aire cargado de sustancias abrasivas.",
  specifications: {
    "Rango de Temperatura": "-35°C a +85°C",
    Material: "Poliuretano transparente antiestático",
    Espiral: "Cobre",
    Tipo: "Aspiración",
  },
  features: [
    "Poliuretano transparente de alta calidad",
    "Espiral de cobre antiestático",
    "Excelente resistencia a la abrasión",
    "Flexible y ligera",
    "Resistente a sustancias reactivas",
    "Transparente para visualización",
  ],
  applications: [
    "Aspiración de aire cargado de sustancias abrasivas",
    "Humos industriales",
    "Virutas metálicas",
    "Grasa",
    "Polvo y partículas",
    "Sistemas de extracción",
  ],
  availableSizes: [
    { code: "MPU40", size: '1 1/2"' },
    { code: "MPU51", size: '2"' },
    { code: "MPU60", size: '2 1/2"' },
    { code: "MPU76", size: '3"' },
    { code: "MPU102", size: '4"' },
    { code: "MPU127", size: '5"' },
    { code: "MPU152", size: '6"' },
    { code: "MPU203", size: '8"' },
    { code: "MPU254", size: '10"' },
    { code: "MPU305", size: '12"' },
  ],
};

// ============================================
// PROTECCIÓN ESPIRAL NEGRO
// ============================================
export const proteccion_espiral: Product = {
  id: "proteccion",
  name: "Protección Espiral Negro",
  category: "Accesorios",
  images: ["/mangueras/proteccion-espiral.png?height=400&width=400"],
  description:
    "Protección espiral negra para mangueras hidráulicas. Material rígido y resistente, de fácil instalación sin necesidad de quitar conectores.",
  specifications: {
    Material: "Polipropileno rígido",
    Color: "Negro",
    Instalación: "Sin necesidad de desmontar conectores",
  },
  features: [
    "Material rígido y resistente",
    "Fácil instalación sin desmontar conectores",
    "Protege contra abrasión",
    "Protege contra condiciones climáticas",
    "Protege contra aplastamiento",
    "Prolonga la vida útil de las mangueras",
    "Disponible en múltiples medidas",
  ],
  applications: [
    "Protección de mangueras hidráulicas",
    "Protección contra abrasión",
    "Protección contra condiciones climáticas extremas",
    "Protección contra aplastamiento",
    "Maquinaria pesada",
    "Equipos industriales",
  ],
  availableSizes: [
    { code: "EN12MM", size: "12mm" },
    { code: "EN28MM", size: "28mm" },
    { code: "EN45MM", size: "45mm" },
    { code: "EN67MM", size: "67mm" },
    { code: "EN99MM", size: "99mm" },
  ],
};

// ============================================
// CONEXIONES HIDRÁULICAS - CATÁLOGO COMPLETO
// ============================================

export const conexiones_hidraulicas: Product[] = [
  // -------------------------------
  // JIC
  // -------------------------------
  {
    id: "fjx_recta",
    name: "Hembra Giratoria JIC (FJX) Recta",
    category: "Conexiones Hidráulicas",
    description:
      "Conexión hembra giratoria recta tipo JIC con asiento a 37° conforme a norma SAE J514.",
    images: ["/conexiones/h-jic-fjx-recta.png?height=400&width=400"],
    specifications: {
      Medidas: 'Manguera 1/4" a 2"',
      Hilo: '7/16" a 2 1/2" JIC',
      Norma: "JIC / SAE J514 Asiento 37°",
      Tipo: "Recta",
    },
    features: [
      "Conexión estándar JIC de alta resistencia",
      "Diseño giratorio que facilita el montaje",
      "Cumple norma SAE J514",
      "Apta para sistemas hidráulicos de alta presión",
    ],
    applications: [
      "Sistemas hidráulicos industriales",
      "Líneas de aceite y fluidos a presión",
      "Conexiones en maquinaria pesada",
    ],
  },
  {
    id: "fjx_45",
    name: "Hembra Giratoria JIC (FJX) 45°",
    category: "Conexiones Hidráulicas",
    description:
      "Conexión hembra giratoria en ángulo de 45° tipo JIC, ideal para espacios reducidos.",
    images: ["/conexiones/h-jic-fjx-45.png?height=400&width=400"],
    specifications: {
      Medidas: 'Manguera 1/4" a 2"',
      Hilo: '7/16" a 2 1/2" JIC',
      Norma: "JIC / SAE J514 Asiento 37°",
      Tipo: "45°",
    },
    features: [
      "Ángulo de 45° para adaptaciones de espacio",
      "Rosca JIC compatible con sistemas SAE",
      "Alta durabilidad y resistencia mecánica",
    ],
    applications: [
      "Equipos hidráulicos con geometría compacta",
      "Maquinaria móvil",
      "Sistemas de control hidráulico",
    ],
  },
  {
    id: "fjx_90",
    name: "Hembra Giratoria JIC (FJX) 90°",
    category: "Conexiones Hidráulicas",
    description:
      "Conexión hembra giratoria en ángulo de 90° JIC para sistemas hidráulicos de mediana y alta presión.",
    images: ["/conexiones/h-jic-fjx-90.png?height=400&width=400"],
    specifications: {
      Medidas: 'Manguera 1/4" a 2"',
      Hilo: '7/16" a 2 1/2" JIC',
      Norma: "JIC / SAE J514 Asiento 37°",
      Tipo: "90°",
    },
    features: [
      "Permite giros cerrados sin comprometer flujo",
      "Rosca JIC estándar 37°",
      "Diseño robusto y confiable",
    ],
    applications: [
      "Sistemas hidráulicos con restricciones de espacio",
      "Maquinaria industrial y minera",
    ],
  },
  {
    id: "mj_jic",
    name: "Macho JIC (MJ)",
    category: "Conexiones Hidráulicas",
    description:
      "Conexión macho tipo JIC con asiento 37°, compatible con conexiones hembra JIC y SAE.",
    images: ["/conexiones/m-jic-mj.png?height=400&width=400"],
    specifications: {
      Medidas: 'Manguera 1/4" a 2"',
      Hilo: '7/16" a 2 1/2" JIC',
      Norma: "JIC / SAE J514 Asiento 37°",
    },
    features: [
      "Rosca JIC precisa para sellado óptimo",
      "Compatible con estándares SAE",
      "Fabricación en acero de alta calidad",
    ],
    applications: [
      "Conexión directa a mangueras hidráulicas",
      "Sistemas de transporte de fluidos a presión",
    ],
  },

  // -------------------------------
  // BSP
  // -------------------------------
  {
    id: "fgx_recta",
    name: "Hembra Giratoria BSP (FGX) Recta",
    category: "Conexiones Hidráulicas",
    description:
      "Conexión hembra giratoria recta tipo BSP con asiento 30° conforme a norma BSPP.",
    images: ["/conexiones/h-bsp-fgx-recta.png?height=400&width=400"],
    specifications: {
      Medidas: 'Manguera 1/4" a 2"',
      Hilo: '1/4" BSP a 2" BSP',
      Norma: "BSPP Asiento 30°",
      Tipo: "Recta",
    },
    features: [
      "Rosca BSPP para sellado preciso",
      "Alta resistencia a la presión",
      "Ideal para sistemas europeos e industriales",
    ],
    applications: [
      "Equipos hidráulicos con norma BSP",
      "Sistemas industriales de fluidos",
    ],
  },
  {
    id: "fgx_45",
    name: "Hembra Giratoria BSP (FGX) 45°",
    category: "Conexiones Hidráulicas",
    description:
      "Conexión hembra giratoria BSP en ángulo 45°, ideal para trayectorias de fluido en espacios reducidos.",
    images: ["/conexiones/h-bsp-fgx-45.png?height=400&width=400"],
    specifications: {
      Medidas: 'Manguera 1/4" a 2"',
      Hilo: '1/4" BSP a 2" BSP',
      Norma: "BSPP Asiento 30°",
      Tipo: "45°",
    },
    features: [
      "Diseño angular versátil",
      "Fabricada bajo norma BSPP 30°",
      "Resistente a la vibración y fugas",
    ],
    applications: [
      "Líneas hidráulicas y neumáticas",
      "Sistemas de maquinaria pesada",
    ],
  },
  {
    id: "fgx_90",
    name: "Hembra Giratoria BSP (FGX) 90°",
    category: "Conexiones Hidráulicas",
    description:
      "Conexión hembra giratoria BSP 90° diseñada para instalaciones donde se requiere redirección de flujo.",
    images: ["/conexiones/h-bsp-fgx-90.png?height=400&width=400"],
    specifications: {
      Medidas: 'Manguera 1/4" a 2"',
      Hilo: '1/4" BSP a 2" BSP',
      Norma: "BSPP Asiento 30°",
      Tipo: "90°",
    },
    features: [
      "Ángulo 90° para trayectorias cerradas",
      "Compatibilidad universal BSPP",
      "Construcción metálica de alta durabilidad",
    ],
    applications: [
      "Líneas hidráulicas de maquinaria pesada",
      "Sistemas hidráulicos europeos",
    ],
  },
  {
    id: "mg_bsp",
    name: "Macho BSP (MG)",
    category: "Conexiones Hidráulicas",
    description:
      "Conexión macho BSP con asiento 30°, compatible con conexiones hembra BSPP.",
    images: ["/conexiones/m-bsp-mg.png?height=400&width=400"],
    specifications: {
      Medidas: 'Manguera 1/4" a 2"',
      Hilo: '1/4" BSP a 2" BSP',
      Norma: "BSPP Asiento 30°",
    },
    features: [
      "Sellado de precisión con asiento 30°",
      "Acabado resistente a la corrosión",
      "Alta confiabilidad en sistemas hidráulicos",
    ],
    applications: [
      "Equipos industriales",
      "Maquinaria agrícola",
      "Sistemas hidráulicos BSP",
    ],
  },

  // -------------------------------
  // ORFS
  // -------------------------------
  {
    id: "fforx_recta",
    name: "Hembra Giratoria ORFS (FFORX) Recta",
    category: "Conexiones Hidráulicas",
    description:
      "Conexión ORFS hembra giratoria recta con sello O-Ring, conforme a norma SAE J1453.",
    images: ["/conexiones/h-orfs-fforx-recta.png?height=400&width=400"],
    specifications: {
      Medidas: 'Manguera 1/4" a 1 1/4"',
      Hilo: '9/16" a 1 11/16" ORFS',
      Norma: "ORFS / SAE J1453 Asiento Plano",
      Tipo: "Recta",
    },
    features: [
      "Sello O-Ring para estanqueidad superior",
      "Diseño giratorio que facilita el montaje",
      "Ideal para alta presión y vibración",
    ],
    applications: [
      "Sistemas hidráulicos de precisión",
      "Maquinaria pesada y agrícola",
    ],
  },
  {
    id: "fforx_45",
    name: "Hembra Giratoria ORFS (FFORX) 45°",
    category: "Conexiones Hidráulicas",
    description:
      "Conexión ORFS en ángulo de 45°, con sello plano tipo O-Ring para alta estanqueidad.",
    images: ["/conexiones/h-orfs-fforx-45.png?height=400&width=400"],
    specifications: {
      Medidas: 'Manguera 1/4" a 1 1/4"',
      Hilo: '9/16" a 1 11/16" ORFS',
      Norma: "ORFS / SAE J1453 Asiento Plano",
      Tipo: "45°",
    },
    features: [
      "Ángulo 45° para instalaciones con desvío de flujo",
      "Rosca ORFS con O-Ring integrado",
      "Alta resistencia a fugas",
    ],
    applications: [
      "Sistemas hidráulicos con pulsaciones",
      "Ambientes industriales exigentes",
    ],
  },
  {
    id: "fforx_90",
    name: "Hembra Giratoria ORFS (FFORX) 90°",
    category: "Conexiones Hidráulicas",
    description:
      "Conexión ORFS en ángulo 90° con sello O-Ring, diseñada para uso en alta presión.",
    images: ["/conexiones/h-orfs-fforx-90.png?height=400&width=400"],
    specifications: {
      Medidas: 'Manguera 1/4" a 1 1/4"',
      Hilo: '9/16" a 1 11/16" ORFS',
      Norma: "ORFS / SAE J1453 Asiento Plano",
      Tipo: "90°",
    },
    features: [
      "Sello O-Ring para máxima estanqueidad",
      "Alta durabilidad y resistencia mecánica",
      "Cumple SAE J1453",
    ],
    applications: [
      "Sistemas hidráulicos de maquinaria pesada",
      "Aplicaciones de alta presión",
    ],
  },
  {
    id: "for_macho",
    name: "Macho ORFS (FOR)",
    category: "Conexiones Hidráulicas",
    description:
      "Conector macho ORFS con asiento plano y sello O-Ring, conforme a norma SAE J1453.",
    images: ["/conexiones/m-orfs-for.png?height=400&width=400"],
    specifications: {
      Medidas: 'Manguera 1/4" a 1 1/4"',
      Hilo: '9/16" a 1 11/16" ORFS',
      Norma: "ORFS / SAE J1453 Asiento Plano",
    },
    features: [
      "Diseño robusto para alta presión",
      "Sello O-Ring que evita fugas",
      "Compatibilidad total con ORFS hembra",
    ],
    applications: [
      "Líneas hidráulicas industriales",
      "Sistemas hidráulicos de precisión",
    ],
  },

  // -------------------------------
  // Métricas y DIN (Livianas / Pesadas)
  // -------------------------------
  {
    id: "hml_recta",
    name: "Hembra Métrica Giratoria S. Liviano (HML) Recta",
    category: "Conexiones Hidráulicas",
    description:
      "Conexión hembra giratoria métrica serie liviana con asiento a 24° conforme a norma DIN.",
    images: ["/conexiones/h-liviano-hml.png?height=400&width=400"],
    specifications: {
      Medidas: 'Manguera 1/4" a 1 1/2"',
      "Hilo Métrico": "12 a 52 mm",
      Norma: "DIN Asiento 24°",
      Tipo: "Recta",
    },
    features: [
      "Diseño DIN serie liviana",
      "Excelente sellado con cono 24°",
      "Alta resistencia mecánica",
    ],
    applications: [
      "Sistemas hidráulicos industriales",
      "Maquinaria de precisión",
    ],
  },
  {
    id: "hml_45",
    name: "Hembra Métrica Giratoria S. Liviano (HML) 45°",
    category: "Conexiones Hidráulicas",
    description:
      "Conexión métrica giratoria liviana con ángulo de 45°, conforme a norma DIN 24°.",
    images: ["/conexiones/h-liviano-hml-45.png?height=400&width=400"],
    specifications: {
      Medidas: 'Manguera 1/4" a 1 1/2"',
      "Hilo Métrico": "12 a 52 mm",
      Norma: "DIN Asiento 24°",
      Tipo: "45°",
    },
    features: [
      "Ángulo 45° ideal para espacios reducidos",
      "Diseño liviano, robusto y confiable",
    ],
    applications: [
      "Maquinaria industrial y agrícola",
      "Sistemas hidráulicos DIN",
    ],
  },
  {
    id: "hml_90",
    name: "Hembra Métrica Giratoria S. Liviano (HML) 90°",
    category: "Conexiones Hidráulicas",
    description:
      "Conexión métrica serie liviana 90° con asiento 24° para sistemas hidráulicos DIN.",
    images: ["/conexiones/h-liviano-hml-90.png?height=400&width=400"],
    specifications: {
      Medidas: 'Manguera 1/4" a 1 1/2"',
      "Hilo Métrico": "12 a 52 mm",
      Norma: "DIN Asiento 24°",
      Tipo: "90°",
    },
    features: [
      "Ángulo cerrado 90° para trayectorias compactas",
      "Cumple especificaciones DIN 24°",
    ],
    applications: ["Equipos hidráulicos europeos", "Maquinaria industrial"],
  },
  {
    id: "mml_macho",
    name: "Macho Métrico S. Liviano (MML)",
    category: "Conexiones Hidráulicas",
    description:
      "Conexión macho métrica serie liviana con asiento 24°, norma DIN.",
    images: ["/conexiones/m-liviano-mml.png?height=400&width=400"],
    specifications: {
      Medidas: 'Manguera 1/4" a 1 1/2"',
      "Hilo Métrico": "12 a 52 mm",
      Norma: "DIN Asiento 24°",
    },
    features: [
      "Alta precisión de rosca métrica",
      "Sellado confiable con cono 24°",
    ],
    applications: [
      "Sistemas hidráulicos estándar DIN",
      "Líneas de aceite y lubricantes",
    ],
  },
  {
    id: "hmh_recta",
    name: "Hembra Métrica Giratoria S. Pesado (HMH) Recta",
    category: "Conexiones Hidráulicas",
    description:
      "Conexión métrica hembra giratoria serie pesada con asiento 24°, norma DIN.",
    images: ["/conexiones/h-pesado-hml.png?height=400&width=400"],
    specifications: {
      Medidas: 'Manguera 1/4" a 1 1/2"',
      "Hilo Métrico": "14 a 52 mm",
      Norma: "DIN Asiento 24°",
      Tipo: "Recta",
    },
    features: [
      "Serie pesada para alta presión",
      "Construcción reforzada DIN 24°",
    ],
    applications: [
      "Sistemas hidráulicos de alta carga",
      "Maquinaria industrial pesada",
    ],
  },
  {
    id: "hmh_45",
    name: "Hembra Métrica Giratoria S. Pesado (HMH) 45°",
    category: "Conexiones Hidráulicas",
    description:
      "Conexión métrica serie pesada 45° con asiento 24°, diseñada para altas presiones.",
    images: ["/conexiones/h-pesado-hml-45.png?height=400&width=400"],
    specifications: {
      Medidas: 'Manguera 1/4" a 1 1/2"',
      "Hilo Métrico": "14 a 52 mm",
      Norma: "DIN Asiento 24°",
      Tipo: "45°",
    },
    features: [
      "Ángulo 45° ideal para adaptaciones industriales",
      "Alta resistencia estructural",
    ],
    applications: ["Maquinaria pesada", "Sistemas hidráulicos de alto flujo"],
  },
  {
    id: "hmh_90",
    name: "Hembra Métrica Giratoria S. Pesado (HMH) 90°",
    category: "Conexiones Hidráulicas",
    description:
      "Conexión métrica giratoria pesada 90° con norma DIN asiento 24°.",
    images: ["/conexiones/h-pesado-hml-90.png?height=400&width=400"],
    specifications: {
      Medidas: 'Manguera 1/4" a 1 1/2"',
      "Hilo Métrico": "14 a 52 mm",
      Norma: "DIN Asiento 24°",
      Tipo: "90°",
    },
    features: ["Diseño angular 90° reforzado", "Cumple norma DIN serie pesada"],
    applications: [
      "Sistemas hidráulicos exigentes",
      "Equipos de construcción e industria minera",
    ],
  },
  {
    id: "mmh_macho",
    name: "Macho Métrico S. Pesado (MMH)",
    category: "Conexiones Hidráulicas",
    description:
      "Conector macho métrico serie pesada, estándar DIN con asiento 24°.",
    images: ["/conexiones/m-pesado-mmh.png?height=400&width=400"],
    specifications: {
      Medidas: 'Manguera 1/4" a 1 1/2"',
      "Hilo Métrico": "14 a 52 mm",
      Norma: "DIN Asiento 24°",
    },
    features: ["Alta resistencia mecánica", "Diseño estándar DIN 24°"],
    applications: [
      "Maquinaria industrial y de minería",
      "Sistemas de presión alta",
    ],
  },

  // -------------------------------
  // FLANGES 61 y 62
  // -------------------------------
  {
    id: "fl61_recto",
    name: "Flange 61 Recto (FL)",
    category: "Conexiones Hidráulicas",
    description:
      "Conector flange recto tipo 61 conforme a norma SAE J518 para 3000 PSI.",
    images: ["/conexiones/fl-61-recto-fl.png?height=400&width=400"],
    specifications: {
      Medidas: 'Manguera 1/2" a 2"',
      Flange: "30.2 a 71.4",
      Norma: "SAE J518 Cod. 61 3000 PSI",
      Tipo: "Recto",
    },
    features: ["Diseño SAE J518 3000 PSI", "Alta durabilidad y sellado seguro"],
    applications: [
      "Sistemas hidráulicos de media presión",
      "Equipos de construcción e industria",
    ],
  },
  {
    id: "fl61_45",
    name: "Flange 61 45° (FL)",
    category: "Conexiones Hidráulicas",
    description: "Flange tipo 61 con ángulo 45° conforme a SAE J518 3000 PSI.",
    images: ["/conexiones/fl-61-45-fl.png?height=400&width=400"],
    specifications: {
      Medidas: 'Manguera 1/2" a 2"',
      Flange: "30.2 a 71.4",
      Norma: "SAE J518 Cod. 61 3000 PSI",
      Tipo: "45°",
    },
    features: [
      "Ángulo 45° para trayectorias hidráulicas adaptadas",
      "Cumple SAE J518",
    ],
    applications: ["Sistemas hidráulicos industriales"],
  },
  {
    id: "fl61_90",
    name: "Flange 61 90° (FL)",
    category: "Conexiones Hidráulicas",
    description: "Conector flange 61 con ángulo 90° SAE J518 3000 PSI.",
    images: ["/conexiones/fl-61-90-fl.png?height=400&width=400"],
    specifications: {
      Medidas: 'Manguera 1/2" a 2"',
      Flange: "30.2 a 71.4",
      Norma: "SAE J518 Cod. 61 3000 PSI",
      Tipo: "90°",
    },
    features: ["Diseño SAE 61 para sistemas hidráulicos", "Alta durabilidad"],
    applications: ["Equipos hidráulicos de media presión"],
  },
  {
    id: "fl62_recto",
    name: "Flange 62 Recto (FLH)",
    category: "Conexiones Hidráulicas",
    description: "Flange 62 recto diseñado para 6000 PSI conforme a SAE J518.",
    images: ["/conexiones/fl-62-recto-flh.png?height=400&width=400"],
    specifications: {
      Medidas: 'Manguera 3/4" a 2"',
      Flange: "41.3 a 79.4",
      Norma: "SAE J518 Cod. 62 6000 PSI",
      Tipo: "Recto",
    },
    features: ["Alta resistencia 6000 PSI", "Cumple estándar SAE J518"],
    applications: ["Sistemas hidráulicos de alta presión"],
  },
  {
    id: "fl62_45",
    name: "Flange 62 45° (FLH)",
    category: "Conexiones Hidráulicas",
    description: "Flange 62 con ángulo 45°, presión nominal 6000 PSI.",
    images: ["/conexiones/fl-62-45-flh.png?height=400&width=400"],
    specifications: {
      Medidas: 'Manguera 3/4" a 2"',
      Flange: "41.3 a 79.4",
      Norma: "SAE J518 Cod. 62 6000 PSI",
      Tipo: "45°",
    },
    features: ["Cumple con SAE J518 62", "Ideal para alta presión"],
    applications: ["Maquinaria pesada", "Equipos hidráulicos de potencia"],
  },
  {
    id: "fl62_90",
    name: "Flange 62 90° (FLH)",
    category: "Conexiones Hidráulicas",
    description:
      "Conexión flange 62 en ángulo 90° conforme a SAE J518 6000 PSI.",
    images: ["/conexiones/fl-62-90-flh.png?height=400&width=400"],
    specifications: {
      Medidas: 'Manguera 3/4" a 2"',
      Flange: "41.3 a 79.4",
      Norma: "SAE J518 Cod. 62 6000 PSI",
      Tipo: "90°",
    },
    features: ["Ángulo 90° reforzado", "Alta presión 6000 PSI"],
    applications: ["Sistemas hidráulicos de potencia"],
  },

  // -------------------------------
  // NPT, SAE, KOMATSU, JIS
  // -------------------------------
  {
    id: "mp_npt",
    name: "Macho NPT (MP)",
    category: "Conexiones Hidráulicas",
    description: "Conexión macho NPT con asiento 30°, conforme a norma NPTF.",
    images: ["/conexiones/m-ntp-mp.png?height=400&width=400"],
    specifications: {
      Medidas: 'Manguera 1/4" a 2"',
      Hilo: '1/8" a 2" NPT',
      Norma: "NPTF Asiento 30°",
    },
    features: [
      "Rosca cónica para sellado hermético",
      "Cumple estándar NPTF",
      "Alta durabilidad y precisión",
    ],
    applications: [
      "Sistemas hidráulicos y neumáticos",
      "Conexión de mangueras industriales",
    ],
  },
  {
    id: "fsx_sae",
    name: "Hembra Giratoria SAE (FSX)",
    category: "Conexiones Hidráulicas",
    description:
      "Conector hembra giratorio SAE con asiento 45° conforme a norma SAE J512.",
    images: ["/conexiones/h-sae-fsx.png?height=400&width=400"],
    specifications: {
      Medidas: 'Manguera 3/8"',
      Hilo: '5/8" x 18 SAE',
      Norma: "SAE J512 Asiento 45°",
    },
    features: [
      "Rosca SAE 45° estándar",
      "Alta compatibilidad con sistemas SAE",
    ],
    applications: ["Líneas de aceite y refrigerante"],
  },
  {
    id: "fkx_komatsu",
    name: "Hembra Giratoria Komatsu (FKX)",
    category: "Conexiones Hidráulicas",
    description:
      "Conector hembra giratorio Komatsu con asiento 30° según estándar Komatsu.",
    images: ["/conexiones/h-kom-fkx.png?height=400&width=400"],
    specifications: {
      Medidas: 'Manguera 1/4" a 1"',
      "Hilo Métrico": "14 a 33 mm",
      Norma: "Komatsu Asiento 30°",
    },
    features: ["Diseño estándar Komatsu", "Alta precisión y durabilidad"],
    applications: ["Sistemas hidráulicos en maquinaria Komatsu"],
  },
  {
    id: "fix_jis",
    name: "Hembra Giratoria JIS (FIX)",
    category: "Conexiones Hidráulicas",
    description:
      "Conector hembra giratorio tipo JIS conforme a norma JIS B0202 con asiento 30°.",
    images: ["/conexiones/h-jis-fix.png?height=400&width=400"],
    specifications: {
      Medidas: 'Manguera 1/4" a 1"',
      Hilo: '1/4" a 1" JIS',
      Norma: "JIS/B0202 Asiento 30°",
    },
    features: ["Rosca JIS precisa y resistente", "Cumple norma japonesa B0202"],
    applications: [
      "Maquinaria japonesa y asiática",
      "Sistemas hidráulicos de precisión",
    ],
  },

  // -------------------------------
  // HIDROLAVADORA y UNIÓN HIDRÁULICA
  // -------------------------------
  {
    id: "hidrolavadora",
    name: "Hembra Giratoria Hidrolavadora",
    category: "Conexiones Hidráulicas",
    description:
      "Conexión hembra giratoria con tuerca de ajuste manual y sello O-ring, ideal para hidrolavadoras.",
    images: ["/conexiones/h-hidro.png?height=400&width=400"],
    specifications: {
      Medidas: 'Manguera 1/4" a 3/8"',
      "Hilo Métrico": "Tubo standard 14 mm",
      Norma: "DIN / Tubo con O-ring",
    },
    features: [
      "Tuerca de ajuste manual",
      "Sellado mediante O-ring",
      "Apta para altas presiones",
    ],
    applications: [
      "Hidrolavadoras industriales",
      "Equipos de limpieza a presión",
    ],
  },
  {
    id: "union_hidraulica",
    name: "Unión Hidráulica",
    category: "Conexiones Hidráulicas",
    description:
      "Unión hidráulica estándar para interconectar mangueras o tubos hidráulicos.",
    images: ["/conexiones/union-hidra.png?height=400&width=400"],
    specifications: {
      Medidas: 'Manguera 1/4" a 1"',
      Tipo: "Recta",
    },
    features: [
      "Diseño robusto y resistente",
      "Fácil montaje y desmontaje",
      "Alta compatibilidad con distintos estándares",
    ],
    applications: [
      "Conexión de líneas hidráulicas",
      "Acoples de mantenimiento rápido",
    ],
  },
];

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
  proteccion_espiral,
  ...conexiones_hidraulicas,
];

// ============================================
// FUNCIONES AUXILIARES
// ============================================

// Obtener producto por ID
export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id);
};

// Obtener productos por categoría
export const getProductsByCategory = (category: string): Product[] => {
  return products.filter((product) => product.category === category);
};

// Obtener todas las categorías únicas
export const getCategories = (): string[] => {
  return Array.from(new Set(products.map((product) => product.category)));
};

// Buscar productos por nombre o descripción
export const searchProducts = (query: string): Product[] => {
  const lowerQuery = query.toLowerCase();
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(lowerQuery) ||
      product.description.toLowerCase().includes(lowerQuery),
  );
};

// Obtener tamaño específico de un producto
export const getProductSize = (
  productId: string,
  sizeCode: string,
): ProductSize | undefined => {
  const product = getProductById(productId);
  return product?.availableSizes?.find((size) => size.code === sizeCode);
};
