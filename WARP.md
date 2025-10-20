# WARP Project Guide: liderflex-web

- Tech stack: Next.js 15 (App Router, Turbopack), React 19, TypeScript 5, TailwindCSS 3, shadcn/ui primitives (Radix), Biome (lint/format).
- Purpose: Sitio corporativo y vitrina de productos/servicios de Liderflex Hidráulica con carrito para solicitud de cotizaciones vía modal.

## Quickstart
- Prerrequisitos: Node 20+, pnpm/npm/yarn.
- Instalar dependencias: pnpm i (o npm i / yarn).
- Dev: pnpm dev (Next + Turbopack) en http://localhost:3000.
- Build: pnpm build; Run: pnpm start.
- Lint: pnpm lint (Biome). Format: pnpm format.

## Scripts (package.json)
- dev: next dev --turbopack
- build: next build --turbopack
- start: next start
- lint: biome check
- format: biome format --write

## Estructura
- src/app
  - layout.tsx: Shell global con Header, Footer, WhatsAppChatModal y CartProvider; metadatos y fuentes Geist.
  - page.tsx: Home con hero en video, ServicesSection y FeaturedProducts.
  - globals.css: Tailwind layers.
- src/components
  - header.tsx: Navbar dual (home vs shop), búsqueda por categoría, iconos, acceso al carrito.
  - footer.tsx: Información corporativa, enlaces, métodos de pago e iconos sociales.
  - company-hero.tsx: Sección hero con CTA.
  - services-section.tsx: Grid de servicios desde src/data/services.
  - featured-products.tsx: Grid de productos destacados desde src/data/featuredProducts.
  - cart-context.tsx: Estado del carrito (cotización) con reducer (ADD/REMOVE/UPDATE/CLEAR).
  - cart-sheet.tsx: UI del carrito como Sheet, envía cotización a /api/send-quotation (endpoint aún no implementado).
  - product-data.ts: Catálogo estático de productos con especificaciones, features, aplicaciones y medidas.
  - Otros componentes referenciados (product-image-card, product-list, ui/*, etc.) deben existir si se amplía la tienda.
- src/data
  - featuredProducts.ts: Datos de productos destacados (imágenes en /public).
  - services.ts: Datos de servicios (imágenes en /public).
- src/lib
  - format.ts, utils.ts (auxiliares; revisar si se usan antes de limpiar).
- public
  - Imágenes y videos (video-1.mp4, video-2.mp4) referenciados por componentes y data.

## Estilo y UI
- Tailwind config personalizado con paleta Obsidian (#0B1215) y amarillo primario (#EBB201).
- Animaciones: tailwindcss-animate; clases utilitarias usadas para fades/accordion.
- Fuentes: next/font con Geist y Geist Mono.
- Accesibilidad básica: aria-labels, aria-current en NavLink.

## Estado y flujo
- CartProvider envuelve la app; items: {id, name, image, quantity}.
- Header muestra cantidad total (suma de quantity) y abre CartSheet.
- CartSheet permite +/- cantidad, eliminar y limpiar tras enviar cotización.
- Enviar cotización: POST /api/send-quotation con { items }. Falta implementar ruta API.

## Rutas y navegación
- App Router habilitado; actualmente solo `/` (Home) está implementada explícitamente.
- Header contempla rutas: `/shop`, `/products`, `/product`, `/about`, `/contact` pero las páginas no están en el repo.
- Enlaces de Footer generan paths como `/productos/<slug>` y `/empresa/<slug>` (placeholder).

## Configuración
- next.config.ts: default.
- tailwind.config.ts: content incluye app, components, src y glob; define colores y radius; plugin tailwindcss-animate.
- tsconfig.json: path alias `@/*` -> `./src/*`, moduleResolution bundler, strict, JSX preserve.
- biome.json: linter y formatter activos; ignora `.next`, `dist`, `build` y `node_modules`.
- postcss.config.js: tailwindcss + autoprefixer.

## Dependencias clave
- next 15.5, react 19.1, radix-ui (dialog, tabs, slot), lucide-react, tailwind-merge, tailwindcss-animate.
- pdfkit y @types/pdfkit están instalados pero no se usan en el código actual.

## Puntos pendientes / TODOs funcionales
- Implementar API POST /api/send-quotation:
  - Validar payload, integrar con correo (e.g., Resend, SendGrid) o backend propio.
  - Registrar cotizaciones (DB o servicio).
- Páginas faltantes: `/shop`, `/product/[id]`, `/about`, `/contact`, grids/listas y componentes UI (product-list, product-card, quick-buy-modal, etc.).
- Búsqueda en Header: conectar input a lógica (hoy previene submit sin acción) y filtrar por categoría usando product-data.ts.
- Mejorar SEO: metadata por página, Open Graph, sitemap/robots.
- Analytics y monitoreo: añadir herramienta (Vercel Analytics, GA4) si aplica.
- Validación/Type-safety de datos estáticos (zod) y extracción a JSON si se desea CMS.
- Eliminar dependencias no usadas (pdfkit) o agregar feature de generación de catálogos PDF.
- Revisión de imágenes: reemplazar `placeholder.svg` por activos reales.

## Calidad
- Ejecutar biome: `pnpm lint` y `pnpm format`.
- Añadir pruebas E2E/UI si se requiere (Playwright/Vitest) — actualmente no hay configuración de tests.

## Despliegue
- Ideal para Vercel (Next 15, App Router). Variables opcionales: claves de email/analytics.

## Guía de desarrollo
- Aliases: usar `@/...` para imports internos.
- Mantener datos en `src/data` y assets en `public`.
- Componentes client vs server: marcar "use client" donde se use estado/efectos.
- Evitar rutas rotas en enlaces hasta crear páginas correspondientes.

## Seguridad
- No hay manejo de secretos en repo; si se integra envío de correos, usar variables `.env` (ig. .gitignore ya excluye `.env*`).

## Notas
- El header tiene lógica condicional para secciones "shop" que dependerá de que existan esas rutas.
- CartSheet depende de `@/components/ui/*` (Sheet, Button) — asegúrate de tener los componentes shadcn/ui si se extraen.
