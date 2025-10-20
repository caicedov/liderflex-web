// src/data/featured.ts

export type FeaturedProductDetail = {
  titleTop: string;
  subtitleTop: string;
  mainTitle: string;
  description: string;
  badge: string;
  highlightWords?: string[];
};

export type FeaturedProduct = {
  id: string;
  name: string;
  imageUrl: string[];
  url: string;
  detail: FeaturedProductDetail;
};

export const featuredProducts: FeaturedProduct[] = [
  {
    id: "1",
    name: "Mangueras hidráulicas de alto rendimiento",
    imageUrl: ["/mhar-1.png","/mhar-2.png","/mhar-3.png", "/mhar-4.png"],
    url: "/featured/1",
    detail: {
      titleTop: "MANGUERAS HIDRÁULICAS TOP",
      subtitleTop: "Rendimiento y confiabilidad para aplicaciones exigentes.",
      mainTitle: "MANGUERAS\nHIDRÁULICAS",
      description:
        "Mangueras diseñadas para resistir las más altas demandas de presión de fluidos hidráulicos a base de agua y petróleo, utilizadas en entornos industriales exigentes. Reforzadas con malla de acero, fabricadas conforme a las especificaciones de las Normas ISO 1436, ISO 11237, SAE J517 y EN853 a EN857.",
      badge: "ALTA PRESIÓN Y DURABILIDAD",
      highlightWords: ["hidráulicas","presión","agua","petróleo","acero","ISO","SAE","EN853","EN857","ISO 1436","ISO 11237","J517"]
    }
  },
  {
    id: "2",
    name: "Mangueras industriales versátiles",
    imageUrl: ["/miv-3.png","/miv-1.png","/miv-2.png"],
    url: "/featured/2",
    detail: {
      titleTop: "SOLUCIONES INDUSTRIALES",
      subtitleTop: "Versatilidad y resistencia para múltiples usos.",
      mainTitle: "MANGUERAS\nINDUSTRIALES",
      description:
        "Soluciones flexibles para transporte de fluidos, gases o materiales, compatibles con una amplia gama de aplicaciones. Resistente a agentes químicos, aplicables en distintos proyectos que transporten fluidos como ácido sulfúrico, ácido clorhídrico, aguas servidas, petróleo y sus derivados.",
      badge: "VERSATILIDAD PROBADA",
      highlightWords: ["flexibles","fluidos","gases","químicos","ácido","sulfúrico","clorhídrico","aguas","servidas","petróleo","derivados"]
    }
  },
  {
    id: "3",
    name: "Línea neumática",
    imageUrl: ["/ln-1.png","/ln-2.png","/ln-3.png", "/ln-4.png", "/ln-5.png"],
    url: "/featured/3",
    detail: {
      titleTop: "LÍNEA NEUMÁTICA DE PRECISIÓN",
      subtitleTop: "Confiable, segura y de fácil integración.",
      mainTitle: "LÍNEA\nNEUMÁTICA",
      description:
        "Variedad de insumos neumáticos y flexibles, diseñados para asegurar la eficiencia y fiabilidad en cada aplicación. Tubing, tecalán, conos, insertos, acoples rápidos plásticos y de bronce, FRL, entre otros, conforman nuestra línea.",
      badge: "CONTROL Y EFICIENCIA",
      highlightWords: ["neumáticos","eficiencia","fiabilidad","tubing","tecalán","acoples","rápidos","FRL","bronce","plásticos"]
    }
  },
  {
    id: "4",
    name: "Adaptadores y fitting's",
    imageUrl: ["/af-1.png"],
    url: "/featured/4",
    detail: {
      titleTop: "ACCESORIOS DE ALTA CALIDAD",
      subtitleTop:
        "Conectores, adaptadores, acoples y válvulas de precisión, que garantizan conexiones seguras y duraderas.",
      mainTitle: "ADAPTADORES Y\nFITTING´S",
      description:
        "Adaptadores y fitting's hidráulicos fabricados de acero al carbono, en conformidad con las normativas de la Unión Europea, EE.UU y los estándares de conexiones pertinentes SAE J516 y DIN e ISO 12151.",
      badge: "CALIDAD E INNOVACIÓN...",
      highlightWords: [
        "hidráulicos","acero","carbono","Unión","Europea","EE.UU","estándares",
        "SAE","J516","DIN","ISO","12151"
      ]
    }
  },
  {
    id: "5",
    name: "Válvulas y acoples",
    imageUrl: ["/va-3.png", "/va-1.png", "/va-2.png", "/va-4.png"],
    url: "/featured/5",
    detail: {
      titleTop: "VÁLVULAS Y ACOPLES",
      subtitleTop: "Control confiable del flujo con materiales de alta resistencia.",
      mainTitle: "VÁLVULAS Y\nACOPLES",
      description:
        "Línea de productos para la retención de fluidos como válvulas de bola de bronce cromado, válvulas de acero inoxidable 1000 psi, válvulas hidráulicas para 7000 psi. Acoples rápidos normas ISO A para 3000 psi, acoples rápidos cara plana para 5000 psi, acoples rápidos para 10000 psi, entre otros.",
      badge: "CONTROL Y SEGURIDAD",
      highlightWords: ["válvulas","acoples","flujo","bronce","acero","inoxidable","psi","ISO","cara","plana","hidráulicas"]
    }
  },
  {
    id: "6",
    name: "Flanges ISO / DIN",
    imageUrl: ["/fla-1.png", "/fla-2.png", "/fla-3.png", "/fla-4.png"],
    url: "/featured/6",
    detail: {
      titleTop: "FLANGES ISO / DIN",
      subtitleTop: "Compatibilidad internacional y alta precisión.",
      mainTitle: "FLANGES\nISO / DIN",
      description:
        "Flanges complementarios para acoplar las partes a una línea de fluido, generando un eficiente puente de unión entre piezas. Flanges de acero forjado ASTM A-105, Clases 150/300/600, norma DIN PN10 y PN16, flanges Slip-On, Bridas, Lap Joint, Welding Neck, Ciegos, flanges Slip-On o Bridas a soldar y Slip-On roscados NPT.",
      badge: "ESTÁNDARES INTERNACIONALES",
      highlightWords: [
        "flanges","acoplar","fluido","acero","forjado","ASTM","A-105","Clases",
        "DIN","PN10","PN16","Slip-On","Bridas","Lap","Joint","Welding","Neck",
        "Ciegos","soldar","roscados","NPT","ISO"
      ]
    }
  },
  {
    id: "7",
    name: "Línea de ferretería industrial",
    imageUrl: ["/fi-1.png"],
    url: "/featured/7",
    detail: {
      titleTop: "FERRETERÍA INDUSTRIAL",
      subtitleTop: "Soluciones integrales para mantenimiento y montaje.",
      mainTitle: "LÍNEA DE\nFERRETERÍA",
      description:
        "Comercializamos herramientas, maquinaria, materiales y suministros especializados para empresas y proyectos de gran escala. Nuestro enfoque está en productos de calidad, incluyendo herramientas de alta resistencia, equipos de seguridad, químicos industriales y artículos de ferretería. Cada componente es seleccionado por su compatibilidad, resistencia y funcionalidad, respaldando procesos críticos y asegurando una operación segura y eficiente en sistemas industriales exigentes.",
      badge: "ROBUSTEZ Y VARIEDAD",
      highlightWords: [
        "herramientas","maquinaria","suministros","resistencia","seguridad",
        "químicos","industriales","compatibilidad","funcionalidad","operación"
      ]
    }
  }
];

export const featuredById: Record<string, FeaturedProduct> = Object.fromEntries(
  featuredProducts.map(p => [p.id, p])
);