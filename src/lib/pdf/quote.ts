import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import type { QuotePayload } from "./types";

const company = {
  name: "Liderflex Hidráulica",
  rut: "76.123.456-7",
  address: "Av. Industrial 1234, Antofagasta",
  phone: "+56 9 5949 7551",
  email: "ventas@liderflex.cl",
  website: "www.liderflex.cl",
};

export function generateQuotePDF(payload: QuotePayload): jsPDF {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 15;

  // ============================================
  // ENCABEZADO
  // ============================================
  doc.setFillColor(17, 24, 39); // obsidian-900
  doc.rect(0, 0, pageWidth, 45, "F");

  // Logo y nombre empresa (blanco)
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(22);
  doc.setFont("helvetica", "bold");
  doc.text(company.name, margin, 15);

  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.text(`RUT: ${company.rut}`, margin, 22);
  doc.text(company.address, margin, 27);
  doc.text(`Tel: ${company.phone} | ${company.email}`, margin, 32);
  doc.text(company.website, margin, 37);

  // Número de cotización (derecha)
  doc.setFontSize(18);
  doc.setFont("helvetica", "bold");
  doc.text("COTIZACIÓN", pageWidth - margin, 15, { align: "right" });

  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text(`N°: ${payload.quotation_number}`, pageWidth - margin, 22, {
    align: "right",
  });
  doc.text(
    `Fecha: ${payload.created_at ? new Date(payload.created_at).toLocaleDateString("es-CL") : new Date().toLocaleDateString("es-CL")}`,
    pageWidth - margin,
    27,
    { align: "right" }
  );
  doc.text(`Estado: ${getStatusText(payload.status || "pending")}`, pageWidth - margin, 32, {
    align: "right",
  });

  // ============================================
  // DATOS DEL CLIENTE
  // ============================================
  let yPos = 55;
  doc.setTextColor(17, 24, 39);
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.text("Datos del Cliente", margin, yPos);

  yPos += 7;
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");

  const customer = payload.customer || {};
  const clientData = [
    `Nombre: ${customer.full_name || "-"}`,
    `Empresa: ${customer.company_name || "-"}`,
    `RUT: ${customer.rut || "-"}`,
    `Email: ${customer.email || "-"}`,
    `Teléfono: ${customer.phone || "-"}`,
    `Dirección: ${customer.address || "-"}`,
    `Ciudad: ${customer.city || "-"}`,
  ];

  clientData.forEach((line) => {
    doc.text(line, margin, yPos);
    yPos += 5;
  });

  yPos += 5;

  // ============================================
  // TABLA DE PRODUCTOS
  // ============================================
  const tableData = payload.items.map((item, idx) => [
    String(idx + 1),
    item.sizeCode || item.id,
    item.name,
    item.size || "-",
    String(item.quantity),
  ]);

  autoTable(doc, {
    startY: yPos,
    head: [["#", "Código", "Producto", "Medida", "Cantidad"]],
    body: tableData,
    theme: "striped",
    headStyles: {
      fillColor: [251, 191, 36], // yellow-400
      textColor: [17, 24, 39], // obsidian-900
      fontStyle: "bold",
      fontSize: 10,
    },
    bodyStyles: {
      fontSize: 9,
      textColor: [55, 65, 81],
    },
    alternateRowStyles: {
      fillColor: [249, 250, 251],
    },
    margin: { left: margin, right: margin },
    columnStyles: {
      0: { cellWidth: 10, halign: "center" },
      1: { cellWidth: 30 },
      2: { cellWidth: 80 },
      3: { cellWidth: 25, halign: "center" },
      4: { cellWidth: 25, halign: "center" },
    },
  });

  // @ts-ignore
  yPos = doc.lastAutoTable.finalY + 10;

  // ============================================
  // NOTAS
  // ============================================
  if (payload.notes) {
    doc.setFontSize(11);
    doc.setFont("helvetica", "bold");
    doc.text("Notas Adicionales:", margin, yPos);
    yPos += 6;

    doc.setFontSize(9);
    doc.setFont("helvetica", "normal");
    const splitNotes = doc.splitTextToSize(payload.notes, pageWidth - 2 * margin);
    doc.text(splitNotes, margin, yPos);
    yPos += splitNotes.length * 5 + 5;
  }

  // ============================================
  // CONDICIONES
  // ============================================
  yPos += 5;
  doc.setFontSize(8);
  doc.setTextColor(107, 114, 128);
  doc.setFont("helvetica", "italic");
  const conditions = doc.splitTextToSize(
    "Precios referenciales, sujetos a stock y confirmación. Validez de la cotización: 7 días. Entrega sujeta a coordinación.",
    pageWidth - 2 * margin
  );
  doc.text(conditions, margin, yPos);

  // ============================================
  // PIE DE PÁGINA
  // ============================================
  const pageHeight = doc.internal.pageSize.getHeight();
  doc.setFontSize(8);
  doc.setTextColor(156, 163, 175);
  doc.text(
    `${company.name} • ${company.address} • Tel: ${company.phone} • ${company.email}`,
    pageWidth / 2,
    pageHeight - 10,
    { align: "center" }
  );

  return doc;
}

function getStatusText(status: string): string {
  const statusMap: Record<string, string> = {
    pending: "Pendiente",
    processing: "Procesando",
    quoted: "Cotizada",
    approved: "Aprobada",
    rejected: "Rechazada",
    completed: "Completada",
  };
  return statusMap[status] || status;
}