import ProductList from "@/components/product-list";

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Todos los Productos</h1>
      <ProductList />
    </div>
  );
}
