import { servicesById } from "@/data/services";
import Image from "next/image";
import { notFound } from "next/navigation";

function WaveSeparator({
  className = "",
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
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

function highlightDescription(text: string, highlightWords: string[] = []) {
  const set = new Set(highlightWords.map((w) => w.replace(/[.,]/g, "")));
  return text.split(" ").map((word, i) => {
    const cleaned = word.replace(/[.,]/g, "");
    const isHL = set.has(cleaned);
    return isHL ? (
      <span
        key={i}
        className="font-semibold text-neutral-900 underline decoration-yellow-400 underline-offset-4 decoration-2"
      >
        {`${word} `}
      </span>
    ) : (
      <span key={i}>{`${word} `}</span>
    );
  });
}

export async function generateStaticParams() {
  return Object.keys(servicesById).map((id) => ({ id }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const service = servicesById[id];
  if (!service) return notFound();

  const { detail } = service;
  const imageUrl = service.imageUrl ?? "/placeholder.png";

  return (
    <main className="relative">
      {/* Franja superior */}
      <section className="relative bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            <div className="hidden lg:flex lg:col-span-5">
              <div className="py-8">
                <span className="inline-block bg-yellow-500 text-black tracking-widest font-semibold px-4 py-2 rounded">
                  {detail.badge}
                </span>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="py-10 lg:py-12 text-right">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wide text-yellow-400">
                  {detail.titleTop}
                </h1>
                <p className="mt-4 text-yellow-400/95 max-w-2xl ml-auto leading-relaxed">
                  {detail.subtitleTop}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-3 w-full bg-white" />
      </section>

      {/* Cuerpo principal */}
      <section className="relative bg-white">
        {/* Olas decorativas amarillas */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <WaveSeparator className="absolute bottom-[18%] left-1/2 -translate-x-1/2 w-[120%] max-w-none" />
          <WaveSeparator
            className="absolute bottom-0 right-0 w-[60%] opacity-60"
            flip
          />
        </div>

        {/* Logo de fondo centrado detrás del texto */}
        <div className="pointer-events-none absolute inset-0 -z-0 flex justify-center items-center lg:justify-end lg:items-center pr-[10%]">
          <Image
            src="/logo-color.png"
            alt="Logo de la empresa"
            width={1000}
            height={1000}
            className="opacity-20 object-contain select-none"
            priority={false}
          />
        </div>

        {/* Contenido */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-stretch py-10 lg:py-14">
            {/* Imagen izquierda */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[16/11] rounded-md overflow-hidden border border-neutral-200 shadow-md">
                <Image
                  src={imageUrl}
                  alt={service.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Texto derecho con logo detrás */}
            <div className="lg:col-span-6 flex flex-col justify-center relative z-10">
              <h2 className="whitespace-pre-wrap text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wider text-neutral-900">
                {detail.mainTitle}
              </h2>
              <p className="mt-8 text-neutral-700 leading-relaxed text-base sm:text-lg">
                {highlightDescription(
                  detail.description,
                  detail.highlightWords,
                )}
              </p>
            </div>
          </div>
        </div>

        <div className="h-8 bg-yellow-300/70" />
      </section>
    </main>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const service = servicesById[id];
  if (!service) return {};

  const { detail } = service;
  return {
    title: `${detail.titleTop} | Servicios`,
    description: detail.description,
    openGraph: {
      title: detail.titleTop,
      description: detail.description,
      images: [{ url: service.imageUrl }],
    },
  };
}