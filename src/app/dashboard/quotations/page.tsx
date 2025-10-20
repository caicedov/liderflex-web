"use client";

import { Download, ClipboardList, Loader2 } from "lucide-react";
import { useQuotations } from "@/hooks/useQuotations";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { timestampToString } from "@/lib/firebase/firebase-utils";
import { useRouter } from "next/navigation";

function getStatusText(status: string): string {
  const statuses: Record<string, string> = {
    pending: "Pendiente",
    processing: "Procesando",
    quoted: "Cotizada",
    approved: "Aprobada",
    rejected: "Rechazada",
    completed: "Completada",
  };
  return statuses[status] || "Desconocido";
}

function getStatusColor(status: string): string {
  const map: Record<string, string> = {
    pending: "bg-yellow-100 text-yellow-800 border-yellow-300",
    processing: "bg-blue-100 text-blue-800 border-blue-300",
    quoted: "bg-emerald-100 text-emerald-800 border-emerald-300",
    approved: "bg-green-100 text-green-800 border-green-300",
    rejected: "bg-red-100 text-red-800 border-red-300",
    completed: "bg-gray-100 text-gray-800 border-gray-300",
  };
  return map[status] || "bg-gray-100 text-gray-800 border-gray-300";
}

export default function QuotationsPage() {
  const { quotations, loading } = useQuotations();
  const router = useRouter();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96 text-gray-500">
        <Loader2 className="h-6 w-6 mr-2 animate-spin" />
        Cargando cotizaciones...
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-obsidian-900 flex items-center gap-2">
          <ClipboardList className="h-6 w-6 text-yellow-500" />
          Mis Cotizaciones
        </h1>
        <Button
          variant="outline"
          onClick={() => router.push("/dashboard")}
          className="text-sm"
        >
          Volver al Dashboard
        </Button>
      </div>

      {quotations.length === 0 ? (
        <Card className="bg-white border border-gray-200 shadow-sm text-center py-24">
          <CardHeader>
            <CardTitle className="text-lg text-gray-800">
              No tienes cotizaciones registradas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500">
              Cuando envíes una solicitud desde la tienda, aparecerá aquí.
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {quotations.map((q) => (
            <Card
              key={q.id}
              className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div>
                  <CardTitle className="text-lg font-medium text-gray-800">
                    Cotización #{q.quotation_number}
                  </CardTitle>
                  <p className="text-sm text-gray-500">
                    {timestampToString(q.created_at)} — {q.total_items}{" "}
                    {q.total_items === 1 ? "artículo" : "artículos"}
                  </p>
                </div>
                <Badge className={getStatusColor(q.status)}>
                  {getStatusText(q.status)}
                </Badge>
              </CardHeader>
              <CardContent className="flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  {q.notes ? (
                    <p className="line-clamp-1 italic">“{q.notes}”</p>
                  ) : (
                    <p className="text-gray-400 italic">
                      Sin notas adicionales
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 text-obsidian-900 border-gray-300 hover:bg-gray-100"
                    onClick={() =>
                      window.open(`/api/quotations/${q.id}/pdf`, "_blank")
                    }
                  >
                    <Download className="w-4 h-4" />
                    PDF
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
