import type { NextRequest } from "next/server";
import { generateQuotePdfBuffer } from "@/lib/pdf/quote";
import type { QuotePayload } from "@/lib/pdf/types";

export async function POST(req: NextRequest) {
  try {
    const data = (await req.json()) as QuotePayload;

    if (!data?.items?.length) {
      return new Response(JSON.stringify({ error: "No hay items en la cotización" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const buffer = await generateQuotePdfBuffer(data);

    const filename = `cotizacion_${Date.now()}.pdf`;
    return new Response(buffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (err: any) {
    console.error("Quote PDF error:", err);
    return new Response(JSON.stringify({ error: "Error al generar PDF" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}