// src/components/product-image-card.tsx
import Link from "next/link";
import Image from "next/image";
import type { FeaturedProduct } from "@/data/featuredProducts";

type Props = {
  product: FeaturedProduct;
};

export default function ProductImageCard({ product }: Props) {
  const cover = product.imageUrl?.[0] ?? "/placeholder.svg";

  return (
    <Link
      href={product.url}
      className="group relative h-64 rounded-xl overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105 block"
    >
      {/* Imagen de fondo con next/image para mejor performance */}
      <div className="absolute inset-0">
        <Image
          src={cover}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          priority={false}
        />
      </div>

      {/* Overlay con blur */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-0 transition-all duration-300 group-hover:bg-black/60 group-hover:backdrop-blur-md" />

      {/* Nombre del producto */}
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <h3 className="text-white text-2xl font-bold text-center transform transition-all duration-300 group-hover:scale-110">
          {product.name}
        </h3>
      </div>

      {/* Indicador de hover */}
      <div className="absolute bottom-4 right-4 text-white opacity-0 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <title>Arrow icon</title>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}