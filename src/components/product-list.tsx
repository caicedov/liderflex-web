"use client";
import { useState, useMemo } from "react";
import { products, Product } from "@/components/product-data";
import ProductCard from "@/components/product-card";

export default function ProductList() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  // Filter and search logic
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = category ? product.category === category : true;
      const matchesSearch =
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <input
          type="text"
          placeholder="Buscar productos..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded px-4 py-2 w-full md:w-1/2"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border rounded px-4 py-2 w-full md:w-1/4"
        >
          <option value="">Todas las categorías</option>
          {[...new Set(products.map((p) => p.category))].map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} lazy />
        ))}
        {filteredProducts.length === 0 && (
          <div className="col-span-full text-center text-gray-500 py-12">
            No se encontraron productos.
          </div>
        )}
      </div>
    </div>
  );
}
