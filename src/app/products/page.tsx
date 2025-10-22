"use client";

import { Suspense } from "react";
import ProductList from "@/components/product-list";

export default function ProductsPage() {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 animate-fade-in-up duration-1000">
          Todos los Productos
        </h1>
        <Suspense fallback={<div>Cargando productos...</div>}>
          <div className="animate-fade-in-up delay-200 duration-1000">
            <ProductList />
          </div>
        </Suspense>
      </div>
    </div>
  );
}