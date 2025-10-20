export type Service = {
  id: string;
  title: string;
  description: string;
  imageUrl: string; // Imagen de fondo para el card
  url: string; // URL de detalle (opcional, si quieres páginas de servicio)
};

export const services: Service[] = [
  {
    id: "1",
    title: "Fabricación de mangueras y flexibles hidráulicos",
    description:
      "Proporcionamos ensamble y prensado de mangueras hidráulicas a medida, con precisión y eficiencia, garantizando conexiones seguras y rendimiento óptimo en cualquier sistema de presión.",
    imageUrl: "/fab-manguera.png",
    url: "/services/fabricacion",
  },
  {
    id: "2",
    title: "Mantenimiento y reparación de componentes hidráulicos",
    description:
      "Brindamos mantenimiento, reparación y overhaul de componentes hidráulicos como cilindros, bombas y equipos industriales, adaptándonos a las exigencias del sector minero, la construcción y la manufactura, mediante soluciones eficientes de altos estándares técnicos, prolongando la vida útil de sus equipos y optimizando su rendimiento.",
    imageUrl: "/mantenimiento.png",
    url: "/services/mantenimiento",
  },
  {
    id: "3",
    title: "Fabricación de tuberías hidráulicas",
    description:
      "Fabricamos, adaptamos y reparamos tuberías hidráulicas para sistemas industriales de alta exigencia, con enfoque técnico y precisión dimensional, garantizando la compatibilidad, resistencia y precisión en cada proyecto.",
    imageUrl: "/tub-hidraulicas.png",
    url: "/services/tuberias",
  },
  {
    id: "4",
    title: "Asesoramiento técnico especializado",
    description:
      "Ofrecemos asesoría experta para la selección de mangueras industriales, asegurando la mejor elección para las demandas específicas de cada sector, ya sea minería, construcción o manufactura.",
    imageUrl: "/asesoria.png",
    url: "/services/asesoria",
  },
  {
    id: "5",
    title: "Diagnóstico y levantamiento 24/7",
    description:
      "Realizamos evaluaciones directamente en el lugar de trabajo para minimizar el tiempo de inactividad y optimizar los tiempos de respuesta, brindando soluciones efectivas 24/7, evitando la detención de los procesos productivos.",
    imageUrl: "/diagnostico.png",
    url: "/services/diagnostico",
  },
];

export const servicesById: Record<string, Service> = Object.fromEntries(
  services.map((s) => [s.id, s]),
);
