export default function CategoriesPage() {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30 z-0 animate-fade-in"
        src="/globe.mp4"
      />
      <div className="relative z-10 container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 animate-fade-in-up duration-1000">
          Categorías de Productos
        </h1>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up delay-200 duration-1000">
          <li className="bg-white rounded-lg shadow p-6 hover:scale-105 hover:bg-blue-50 transition-transform duration-300 cursor-pointer">
            Mangueras Hidráulicas
          </li>
          <li className="bg-white rounded-lg shadow p-6 hover:scale-105 hover:bg-blue-50 transition-transform duration-300 cursor-pointer">
            Mangueras Industriales
          </li>
          <li className="bg-white rounded-lg shadow p-6 hover:scale-105 hover:bg-blue-50 transition-transform duration-300 cursor-pointer">
            Conexiones
          </li>
          <li className="bg-white rounded-lg shadow p-6 hover:scale-105 hover:bg-blue-50 transition-transform duration-300 cursor-pointer">
            Adaptadores
          </li>
          <li className="bg-white rounded-lg shadow p-6 hover:scale-105 hover:bg-blue-50 transition-transform duration-300 cursor-pointer">
            Servicios de Reparación
          </li>
        </ul>
      </div>
    </div>
  );
}
