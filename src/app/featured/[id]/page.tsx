// app/featured/[id]/page.tsx (o donde corresponda)
import Image from "next/image";

function WaveSeparator({ className = "", flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      className={`${className} text-yellow-300/60 ${flip ? "scale-x-[-1]" : ""}`}
      viewBox="0 0 1440 140"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M0,64L80,64C160,64,320,64,480,64C640,64,800,64,960,80C1120,96,1280,128,1360,144L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
      />
    </svg>
  );
}

export function FeaturedDetailContent({ params }: { params: { id: string } }) {
  // Datos estáticos (cámbialos luego por tu data real)
  const titleTop = "ACCESORIOS DE ALTA CALIDAD";
  const subtitleTop =
    "Conectores, adaptadores, acoples y válvulas de precisión, que garantizan conexiones seguras y duraderas.";
  const mainTitle = "ADAPTADORES Y\nFITTING´S";
  const description =
    "Adaptadores y Fitting´s Hidráulicos fabricados de Acero al Carbono, en conformidad con las normativas de la Unión Europea, EE.UU y los Estándares De Conexiones Pertinentes SAE J516 Y DIN EN ISO 12151.";
  const badge = "CALIDAD E INNOVACIÓN...";
  const imageUrl = "/af-1.png"; // reemplaza por tu imagen estática (puedes usar la del adjunto si la copias a /public)

  return (
    <main className="relative">
      {/* Franja superior amarilla con título a la derecha */}
      <section className="relative bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            {/* Badge izquierda (solo en desktop se ve mejor) */}
            <div className="hidden lg:flex lg:col-span-5">
              <div className="py-8">
                <span className="inline-block bg-yellow-500 text-black tracking-widest font-semibold px-4 py-2 rounded">
                  {badge}
                </span>
              </div>
            </div>

            {/* Título derecha */}
            <div className="lg:col-span-7">
              <div className="py-10 lg:py-12 text-right">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wide text-yellow-400">
                  {titleTop}
                </h1>
                <p className="mt-4 text-yellow-400/95 max-w-2xl ml-auto leading-relaxed">
                  {subtitleTop}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Separador blanco recto como en el diseño */}
        <div className="h-3 w-full bg-white" />
      </section>

      {/* Cuerpo principal: imagen izquierda y contenido derecho */}
      <section className="relative bg-white">
        {/* Olas decorativas amarillas suaves (fondo) */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <WaveSeparator className="absolute bottom-[18%] left-1/2 -translate-x-1/2 w-[120%] max-w-none" />
          <WaveSeparator className="absolute bottom-0 right-0 w-[60%] opacity-60" flip />
        </div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-stretch py-10 lg:py-14">
            {/* Imagen grande izquierda */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[16/11] rounded-md overflow-hidden border border-neutral-200 shadow-md">
                <Image
                  src={imageUrl}
                  alt="Piezas y adaptadores hidráulicos"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Columna derecha: título grande y descripción */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <h2 className="whitespace-pre-wrap text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wider text-neutral-900">
                {mainTitle}
              </h2>

              <p className="mt-8 text-neutral-700 leading-relaxed text-base sm:text-lg">
                {description.split(" ").map((word, i) => {
                  const highlight = [
                    "Hidráulicos",
                    "Acero",
                    "Unión",
                    "Europea,",
                    "EE.UU",
                    "Estándares",
                    "SAE",
                    "J516",
                    "DIN",
                    "ISO",
                    "12151.",
                  ];
                  const isHL = highlight.includes(word.replace(/[.,]/g, ""));
                  return isHL ? (
                    <span
                      key={i}
                      className="font-semibold text-neutral-900 underline decoration-yellow-400 underline-offset-4 decoration-2"
                    >
                      {word + " "}
                    </span>
                  ) : (
                    <span key={i}>{word + " "}</span>
                  );
                })}
              </p>
            </div>
          </div>
        </div>

        {/* Franja amarilla inferior del diseño */}
        <div className="h-8 bg-yellow-300/70" />
      </section>
    </main>
  );
}

export default function FeaturedDetailPage({ params }: { params: { id: string } }) {
  return <FeaturedDetailContent params={params} />;
}