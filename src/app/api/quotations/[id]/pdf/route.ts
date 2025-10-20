import { type NextRequest, NextResponse } from "next/server";
import { generateQuotePDF } from "@/lib/pdf/quote";
import type { QuotePayload } from "@/lib/pdf/types";
import { adminDb } from "@/lib/firebase/firebase-admin";

export async function GET(
  _req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const quotationId = id;

    // Leer cotización con admin SDK
    const quotationSnap = await adminDb.collection("quotations").doc(quotationId).get();

    if (!quotationSnap.exists) {
      return NextResponse.json(
        { error: "Cotización no encontrada" },
        { status: 404 }
      );
    }

    const quotationData = quotationSnap.data()!;
    const profileSnap = await adminDb.collection("profiles").doc(quotationData.user_id).get();
    const profileData = profileSnap.exists ? profileSnap.data()! : {};

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
    return NextResponse.json({ error: error.message || "Error interno" }, { status: 500 });
  }
}