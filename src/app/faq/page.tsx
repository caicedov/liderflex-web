export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Preguntas Frecuentes (FAQ)</h1>
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">
            ¿Qué productos ofrece Liderflex?
          </h2>
          <p>
            Ofrecemos una amplia gama de mangueras hidráulicas, industriales,
            conexiones, adaptadores y servicios de reparación.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">
            ¿Realizan envíos a todo Chile?
          </h2>
          <p>
            Sí, realizamos envíos a todo el país con opciones de entrega rápida
            y segura.
          </p>
        </div>
        <div>
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
  );
}
