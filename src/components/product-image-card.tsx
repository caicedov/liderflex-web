export default function ProductImageCard({ product }) {
  return (
    <a
      href={product.url}
      className="group relative h-64 rounded-xl overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105"
    >
      {/** Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${product.imageUrl[0]})` }}
      />

      {/** Overlay con blur */}
      <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-0 transition-all duration-300 group-hover:bg-opacity-60 group-hover:backdrop-blur-md" />

      {/** Nombre del producto */}
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <h3 className="text-white text-2xl font-bold text-center transform transition-all duration-300 group-hover:scale-110">
          {product.name}
        </h3>
      </div>

      {/* Indicador de hover */}
      <div className="absolute bottom-4 right-4 text-white opacity-0 transform translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <title>Arrow icon</title>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </a>
  );
}
