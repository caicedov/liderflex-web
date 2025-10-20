export type ServiceDetail = {
  badge: string;
  titleTop: string;
  subtitleTop: string;
  mainTitle: string;
  description: string;
  highlightWords?: string[];
};

export type Service = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  url: string;
  detail: ServiceDetail;
};

export const services: Service[] = [
  {
    id: "fabricacion",
    title: "Fabricación de mangueras y flexibles hidráulicos",
    description:
      "Proporcionamos ensamble y prensado de mangueras hidráulicas a medida, con precisión y eficiencia, garantizando conexiones seguras y rendimiento óptimo en cualquier sistema de presión.",
    imageUrl: "/fab-manguera.png",
    url: "/services/fabricacion",
    detail: {
      badge: "FABRICACIÓN A MEDIDA",
      titleTop: "Fabricación de Mangueras y Flexibles Hidráulicos",
      subtitleTop:
        "Ensamble y prensado de alta precisión para sistemas de presión industrial",
      mainTitle: "Soluciones\nHidráulicas\nPersonalizadas",
      description:
        "Proporcionamos ensamble y prensado de mangueras hidráulicas a medida, con precisión y eficiencia, garantizando conexiones seguras y rendimiento óptimo en cualquier sistema de presión.",
      highlightWords: ["precisión", "eficiencia", "seguras", "óptimo"],
    },
  },
  {
    id: "mantenimiento",
    title: "Mantenimiento y reparación de componentes hidráulicos",
    description:
      "Brindamos mantenimiento, reparación y overhaul de componentes hidráulicos como cilindros, bombas y equipos industriales, adaptándonos a las exigencias del sector minero, la construcción y la manufactura, mediante soluciones eficientes de altos estándares técnicos, prolongando la vida útil de sus equipos y optimizando su rendimiento.",
    imageUrl: "/mantenimiento.png",
    url: "/services/mantenimiento",
    detail: {
      badge: "MANTENIMIENTO INDUSTRIAL",
      titleTop: "Mantenimiento y Reparación de Componentes Hidráulicos",
      subtitleTop:
        "Overhaul especializado para cilindros, bombas y equipos de alta exigencia",
      mainTitle: "Prolongamos\nla Vida Útil\nde sus Equipos",
      description:
        "Brindamos mantenimiento, reparación y overhaul de componentes hidráulicos como cilindros, bombas y equipos industriales, adaptándonos a las exigencias del sector minero, la construcción y la manufactura, mediante soluciones eficientes de altos estándares técnicos, prolongando la vida útil de sus equipos y optimizando su rendimiento.",
      highlightWords: [
        "overhaul",
        "cilindros",
        "bombas",
        "eficientes",
        "optimizando",
      ],
    },
  },
  {
    id: "tuberias",
    title: "Fabricación de tuberías hidráulicas",
    description:
      "Fabricamos, adaptamos y reparamos tuberías hidráulicas para sistemas industriales de alta exigencia, con enfoque técnico y precisión dimensional, garantizando la compatibilidad, resistencia y precisión en cada proyecto.",
    imageUrl: "/tub-hidraulicas.png",
    url: "/services/tuberias",
    detail: {
      badge: "TUBERÍAS INDUSTRIALES",
      titleTop: "Fabricación de Tuberías Hidráulicas",
      subtitleTop:
        "Diseño, adaptación y reparación con precisión dimensional para sistemas de alta exigencia",
      mainTitle: "Precisión\nDimensional\ny Resistencia",
      description:
        "Fabricamos, adaptamos y reparamos cañerías hidráulicas para sistemas de alta exigencia, con enfoque técnico y precisión dimensional, garantizando la compatibilidad, resistencia y precisión en cada proyecto. Nuestro trabajo garantiza continuidad operativa, seguridad en el montaje y compatibilidad con los estándares exigidos para cada necesidad.",
      highlightWords: [
        "precisión",
        "dimensional",
        "compatibilidad",
        "resistencia",
        "seguridad",
      ],
    },
  },
  {
    id: "asesoria",
    title: "Asesoramiento técnico especializado",
    description:
      "Ofrecemos asesoría experta para la selección de mangueras industriales, asegurando la mejor elección para las demandas específicas de cada sector, ya sea minería, construcción o manufactura.",
    imageUrl: "/asesoria.png",
    url: "/services/asesoria",
    detail: {
      badge: "ASESORÍA TÉCNICA",
      titleTop: "Asesoramiento Técnico Especializado",
      subtitleTop:
        "Selección experta de mangueras industriales para cada sector y aplicación",
      mainTitle: "Soluciones\nAdaptadas\na su Industria",
      description:
        "Ofrecemos asesoría experta para la selección de mangueras industriales, asegurando la mejor elección para las demandas específicas de cada sector, ya sea minería, construcción o manufactura.",
      highlightWords: [
        "experta",
        "selección",
        "demandas",
        "específicas",
        "minería",
        "construcción",
        "manufactura",
      ],
    },
  },
  {
    id: "diagnostico",
    title: "Diagnóstico y levantamiento 24/7",
    description:
      "Realizamos evaluaciones directamente en el lugar de trabajo para minimizar el tiempo de inactividad y optimizar los tiempos de respuesta, brindando soluciones efectivas 24/7, evitando la detención de los procesos productivos.",
    imageUrl: "/diagnostico.png",
    url: "/services/diagnostico",
    detail: {
      badge: "SERVICIO 24/7",
      titleTop: "Diagnóstico y Levantamiento 24/7",
      subtitleTop:
        "Evaluaciones en terreno para minimizar tiempos de inactividad y maximizar continuidad operativa",
      mainTitle: "Respuesta\nInmediata\n24/7",
      description:
        "Realizamos evaluaciones directamente en su lugar de trabajo para minimizar el tiempo de inactividad y optimizar los tiempos de respuesta, brindando soluciones efectivas 24/7, evitando la detención de los procesos productivos.",
      highlightWords: [
        "evaluaciones",
        "minimizar",
        "inactividad",
        "optimizar",
        "24/7",
        "efectivas",
      ],
    },
  },
];

export const servicesById: Record<string, Service> = Object.fromEntries(
  services.map((s) => [s.id, s])
);