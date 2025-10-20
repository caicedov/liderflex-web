import  { type NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { generateQuotePDF } from "@/lib/pdf/quote";
import type { QuotePayload } from "@/lib/pdf/types";

export async function GET(
  _req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params
  try {
    const quotationId = id

    // Obtener cotización de Firestore
    const quotationRef = doc(db, "quotations", quotationId);
    const quotationSnap = await getDoc(quotationRef);

    if (!quotationSnap.exists()) {
      return NextResponse.json(
        { error: "Cotización no encontrada" },
        { status: 404 }
      );
    }

    const quotationData = quotationSnap.data();

    // Obtener datos del perfil del usuario
    const profileRef = doc(db, "profiles", quotationData.user_id);
    const profileSnap = await getDoc(profileRef);
    const profileData = profileSnap.exists() ? profileSnap.data() : {};

    // Construir payload
    const payload: QuotePayload = {
      quotation_number: quotationData.quotation_number,
      items: quotationData.items || [],
      customer: {
        full_name: profileData.full_name,
        company_name: profileData.company_name,
        rut: profileData.rut,
        email: profileData.email,
        phone: profileData.phone,
        address: profileData.address,
        city: profileData.city,
      },
      notes: quotationData.notes,
      status: quotationData.status,
      created_at: quotationData.created_at?.toDate?.()?.toISOString() || new Date().toISOString(),
    };

    // Generar PDF
    const pdfDoc = generateQuotePDF(payload);
    const pdfBuffer = Buffer.from(pdfDoc.output("arraybuffer"));

    const filename = `cotizacion_${payload.quotation_number}.pdf`;

    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (error: any) {
    console.error("Error generando PDF:", error);
    return NextResponse.json(
      { error: "Error al generar PDF" },
      { status: 500 }
    );
  }
}