import PDFDocument from "pdfkit";
import { formatCurrencyCLP, formatDate, makeQuoteNumber } from "../format";
import type { QuotePayload } from "./types";

// Puedes ajustar estos datos de tu empresa
const company = {
  name: "Liderflex Hidráulica",
  rut: "76.123.456-7", // si aplica
  address: "Av. Industrial 1234, Antofagasta",
  phone: "+56 55 123 4567",
  email: "ventas@liderflex.cl",
  website: "www.liderflex.cl",
  logoColor: "/public/logo-color.png", // si tienes estos assets en public
  logoWhite: "/public/logo-white.png",
};

export async function generateQuotePdfBuffer(
  payload: QuotePayload,
): Promise<Buffer> {
  const doc = new PDFDocument({ size: "A4", margin: 40 });
  const chunks: Uint8Array[] = [];

  // Recolecta el stream en Buffer
  return await new Promise<Buffer>((resolve, reject) => {
    doc.on("data", (c) => chunks.push(c));
    doc.on("end", () => resolve(Buffer.concat(chunks)));
    doc.on("error", reject);

    // Encabezado
    const quoteNumber = makeQuoteNumber();
    const today = formatDate();

    // Logo (opcional, si existe en public)
    try {
      // pdfkit no resuelve rutas Next por defecto. Usa path absoluta si estás en server.
      // O comenta estas líneas si no tienes logo físico.
      // doc.image(company.logoColor, 40, 40, { width: 120 });
    } catch {}

    doc
      .fontSize(18)
      .fillColor("#111827")
      .text(company.name, 40, 40, { continued: false });

    doc
      .fontSize(9)
      .fillColor("#374151")
      .text(`RUT: ${company.rut}`)
      .text(company.address)
      .text(`Tel: ${company.phone}`)
      .text(company.email)
      .text(company.website);

    // Bloque de cotización
    doc
      .fontSize(20)
      .fillColor("#111827")
      .text("COTIZACIÓN", { align: "right" });

    doc
      .fontSize(10)
      .fillColor("#374151")
      .text(`N°: ${quoteNumber}`, { align: "right" })
      .text(`Fecha: ${today}`, { align: "right" });

    doc.moveDown(1.2);

    // Datos cliente
    const c = payload.customer || {};
    doc
      .fontSize(12)
      .fillColor("#111827")
      .text("Datos del Cliente", { underline: true });

    doc
      .fontSize(10)
      .fillColor("#374151")
      .text(`Nombre: ${c.name || "-"}`)
      .text(`RUT: ${c.rut || "-"}`)
      .text(`Email: ${c.email || "-"}`)
      .text(`Teléfono: ${c.phone || "-"}`)
      .text(`Dirección: ${c.address || "-"}`)
      .text(`Ciudad: ${c.city || "-"}`);

    doc.moveDown(1.2);

    // Tabla productos
    const startY = doc.y;
    const tableX = 40;
    const tableWidth = doc.page.width - 80;

    const headers = ["Código", "Producto", "Cantidad", "Precio", "Subtotal"];
    const colWidths = [90, tableWidth - (90 + 80 + 80 + 90), 80, 80, 90];

    // Header row
    drawTableRow(doc, tableX, startY, colWidths, headers, true);

    let y = startY + 24;

    // Items
    const items = payload.items || [];
    let total = 0;

    items.forEach((item, idx) => {
      const code = item.id.split("-").slice(1).join("-") || item.id; // ejemplo: usa sufijo como "sizeCode"
      const subtotal = item.price * item.quantity;
      total += subtotal;

      const row = [
        code,
        item.name,
        String(item.quantity),
        formatCurrencyCLP(item.price),
        formatCurrencyCLP(subtotal),
      ];
      y = drawTableRow(doc, tableX, y, colWidths, row, false, idx % 2 === 0);
    });

    // Totales
    doc
      .moveTo(tableX, y)
      .lineTo(tableX + tableWidth, y)
      .strokeColor("#e5e7eb")
      .stroke();

    y += 10;
    doc
      .fontSize(11)
      .fillColor("#111827")
      .text("Total", tableX + tableWidth - 90, y, {
        width: 90,
        align: "right",
      });
    doc
      .fontSize(12)
      .fillColor("#b45309")
      .text(formatCurrencyCLP(total), tableX + tableWidth - 90, y + 16, {
        width: 90,
        align: "right",
      });

    y += 46;

    // Notas
    if (payload.notes) {
      doc.moveDown(1);
      doc.fontSize(12).fillColor("#111827").text("Notas", { underline: true });
      doc
        .fontSize(10)
        .fillColor("#374151")
        .text(payload.notes, { align: "left" });
    } else {
      doc.moveDown(1);
      doc
        .fontSize(9)
        .fillColor("#6b7280")
        .text(
          "Precios referenciales, sujetos a stock y confirmación. Validez de la cotización: 7 días. Entrega sujeta a coordinación.",
          { align: "left" },
        );
    }

    // Pie
    doc.moveDown(1.5);
    doc
      .fontSize(9)
      .fillColor("#9ca3af")
      .text(
        `${company.name} • ${company.address} • Tel: ${company.phone} • ${company.email}`,
        { align: "center" },
      );

    doc.end();
  });
}

function drawTableRow(
  doc: PDFKit.PDFDocument,
  x: number,
  y: number,
  widths: number[],
  cells: (string | number)[],
  header = false,
  zebra = false,
) {
  const height = 24;

  // Zebra background
  if (!header && zebra) {
    doc
      .rect(
        x,
        y,
        widths.reduce((a, b) => a + b, 0),
        height,
      )
      .fill("#f9fafb")
      .fillColor("#111827");
  }

  // Borders bottom
  doc
    .moveTo(x, y + height)
    .lineTo(x + widths.reduce((a, b) => a + b, 0), y + height)
    .strokeColor("#e5e7eb")
    .stroke();

  let cursorX = x;
  cells.forEach((cell, i) => {
    const isNumeric = i >= cells.length - 2 || i === 2;
    doc
      .font(header ? "Helvetica-Bold" : "Helvetica")
      .fontSize(header ? 10 : 9)
      .fillColor(header ? "#111827" : "#374151")
      .text(String(cell), cursorX + 6, y + 6, {
        width: widths[i] - 12,
        align: isNumeric ? "right" : "left",
      });
    cursorX += widths[i];
  });

  return y + height;
}
