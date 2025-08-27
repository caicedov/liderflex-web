export default function FAQPage() {
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
          Preguntas Frecuentes (FAQ)
        </h1>
        <div className="space-y-6 animate-fade-in-up delay-200 duration-1000">
          <div className="bg-white rounded-lg shadow p-6 hover:scale-105 hover:bg-blue-50 transition-transform duration-300 cursor-pointer">
            <h2 className="text-xl font-semibold mb-2">
              ¿Qué productos ofrece Liderflex?
            </h2>
            <p>
              Ofrecemos una amplia gama de mangueras hidráulicas, industriales,
              conexiones, adaptadores y servicios de reparación.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 hover:scale-105 hover:bg-blue-50 transition-transform duration-300 cursor-pointer">
            <h2 className="text-xl font-semibold mb-2">
              ¿Realizan envíos a todo Chile?
            </h2>
            <p>
              Sí, realizamos envíos a todo el país con opciones de entrega
              rápida y segura.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 hover:scale-105 hover:bg-blue-50 transition-transform duration-300 cursor-pointer">
            <h2 className="text-xl font-semibold mb-2">
              ¿Cómo puedo solicitar una cotización?
            </h2>
            <p>
              Puedes solicitar una cotización a través de nuestro formulario de
              contacto o llamando directamente a nuestro equipo de ventas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
