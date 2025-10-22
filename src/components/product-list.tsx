"use client";
import { useState, useMemo, useEffect } from "react";
import { products } from "@/components/product-data";
import ProductCard from "@/components/product-card";
import { useSearchParams } from "next/navigation";

export default function ProductList() {
  const searchParams = useSearchParams();
  const urlCategory = searchParams.get("category") || ""
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(urlCategory);

  useEffect(() => {
    setCategory(urlCategory)
  }, [urlCategory])

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = category ? product.category === category : true;
      const q = search.trim().toLowerCase();
      const matchesSearch =
        q.length === 0 ||
        product.name.toLowerCase().includes(q) ||
        product.description.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  const categories = useMemo(
    () => [...new Set(products.map((p) => p.category))].sort((a, b) => a.localeCompare(b, "es")),
    []
  );

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
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Badge de filtro activo (opcional) */}
      {category && (
        <div className="mb-6 text-sm text-gray-600">
          Filtrando por: <span className="font-semibold">{category}</span>
          <button
            type="button"
            onClick={() => setCategory("")}
            className="ml-3 underline text-blue-600 hover:text-blue-800"
          >
            Quitar filtro
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
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