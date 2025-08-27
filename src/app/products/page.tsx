import ProductList from "@/components/product-list";

export default function ProductsPage() {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30 z-0 animate-fade-in"
        src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
      />
      <div className="relative z-10 container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 animate-fade-in-up duration-1000">
          Todos los Productos
        </h1>
        <div className="animate-fade-in-up delay-200 duration-1000">
          <ProductList />
        </div>
      </div>
    </div>
  );
}
