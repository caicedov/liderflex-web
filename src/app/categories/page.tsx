export default function CategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Categorías de Productos</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <li className="bg-white rounded-lg shadow p-6">
          Mangueras Hidráulicas
        </li>
        <li className="bg-white rounded-lg shadow p-6">
          Mangueras Industriales
        </li>
        <li className="bg-white rounded-lg shadow p-6">Conexiones</li>
        <li className="bg-white rounded-lg shadow p-6">Adaptadores</li>
        <li className="bg-white rounded-lg shadow p-6">
          Servicios de Reparación
        </li>
      </ul>
    </div>
  );
}
