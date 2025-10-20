"use client";

import { useAuth } from "@/contexts/auth-context";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  User,
  FileText,
  Bell,
  Clock,
  CheckCircle2,
  Package,
  Download,
} from "lucide-react";
import { db } from "@/lib/firebase";
import { collection, query, where, orderBy, getDocs } from "firebase/firestore";
import { timestampToString } from "@/lib/firebase-utils";

interface DashboardStats {
  totalQuotations: number;
  pendingQuotations: number;
  approvedQuotations: number;
  unreadNotifications: number;
}

interface RecentQuotation {
  id: string;
  quotation_number: string;
  status: string;
  total_items: number;
  created_at: string;
}

export default function Dashboard() {
  const { user, profile, loading } = useAuth();
  const router = useRouter();
  const [stats, setStats] = useState<DashboardStats>({
    totalQuotations: 0,
    pendingQuotations: 0,
    approvedQuotations: 0,
    unreadNotifications: 0,
  });
  const [recentQuotations, setRecentQuotations] = useState<RecentQuotation[]>(
    [],
  );
  const [dashboardLoading, setDashboardLoading] = useState(true);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/");
    } else if (user) {
      fetchDashboardData();
    }
  }, [user, loading, router]);

  const fetchDashboardData = async () => {
    if (!user) return;

    try {
      setDashboardLoading(true);

      // 1️⃣ Obtener cotizaciones del usuario
      const quotationsRef = collection(db, "quotations");
      const q = query(
        quotationsRef,
        where("user_id", "==", user.uid),
        orderBy("created_at", "desc"),
      );
      const quotationsSnap = await getDocs(q);

      const quotations = quotationsSnap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        created_at: timestampToString(doc.data().created_at),
      })) as RecentQuotation[];

      // 2️⃣ Calcular estadísticas
      const total = quotations.length;
      const pending = quotations.filter((q) => q.status === "pending").length;
      const approved = quotations.filter((q) => q.status === "approved").length;

      // 3️⃣ Obtener notificaciones no leídas
      const notificationsRef = collection(db, "notifications");
      const nQ = query(
        notificationsRef,
        where("user_id", "==", user.uid),
        where("read", "==", false),
      );
      const notificationsSnap = await getDocs(nQ);

      // 4️⃣ Guardar datos en estado
      setStats({
        totalQuotations: total,
        pendingQuotations: pending,
        approvedQuotations: approved,
        unreadNotifications: notificationsSnap.size,
      });

      setRecentQuotations(quotations.slice(0, 5));
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    } finally {
      setDashboardLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "processing":
        return "bg-blue-100 text-blue-800";
      case "quoted":
        return "bg-purple-100 text-purple-800";
      case "approved":
        return "bg-green-100 text-green-800";
      case "rejected":
        return "bg-red-100 text-red-800";
      case "completed":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "pending":
        return "Pendiente";
      case "processing":
        return "Procesando";
      case "quoted":
        return "Cotizada";
      case "approved":
        return "Aprobada";
      case "rejected":
        return "Rechazada";
      case "completed":
        return "Completada";
      default:
        return status;
    }
  };

  // 🌀 Loading state
  if (loading || dashboardLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-yellow-400"></div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-obsidian-900 mb-2">
            ¡Hola, {profile?.full_name || "Usuario"}! 👋
          </h1>
          <p className="text-gray-600">
            Gestiona tus cotizaciones y mantén tu perfil actualizado desde aquí.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Cotizaciones
              </CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-obsidian-900">
                {stats.totalQuotations}
              </div>
              <p className="text-xs text-muted-foreground">
                Todas tus solicitudes
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pendientes</CardTitle>
              <Clock className="h-4 w-4 text-yellow-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">
                {stats.pendingQuotations}
              </div>
              <p className="text-xs text-muted-foreground">
                Esperando respuesta
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Aprobadas</CardTitle>
              <CheckCircle2 className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">
                {stats.approvedQuotations}
              </div>
              <p className="text-xs text-muted-foreground">
                Listas para procesar
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Notificaciones
              </CardTitle>
              <Bell className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">
                {stats.unreadNotifications}
              </div>
              <p className="text-xs text-muted-foreground">Mensajes sin leer</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Quotations */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl font-bold text-obsidian-900">
                      Cotizaciones Recientes
                    </CardTitle>
                    <CardDescription>
                      Tus últimas solicitudes de cotización
                    </CardDescription>
                  </div>
                  <Button
                    variant="outline"
                    onClick={() => router.push("/dashboard/quotations")}
                  >
                    Ver Todas
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {recentQuotations.length === 0 ? (
                  <div className="text-center py-12">
                    <Package className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      No tienes cotizaciones aún
                    </h3>
                    <p className="text-gray-500 mb-4">
                      Comienza agregando productos a tu carrito de cotización
                    </p>
                    <Button
                      className="bg-yellow-400 hover:bg-yellow-500 text-obsidian-900"
                      onClick={() => router.push("/shop")}
                    >
                      Explorar Productos
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {recentQuotations.map((quotation) => (
                      <div
                        key={quotation.id}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                        onClick={() =>
                          router.push(`/dashboard/quotations/${quotation.id}`)
                        }
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                          <div>
                            <p className="font-medium text-obsidian-900">
                              {quotation.quotation_number}
                            </p>
                            <p className="text-sm text-gray-500">
                              {quotation.total_items} productos •{" "}
                              {new Date(
                                quotation.created_at,
                              ).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className={getStatusColor(quotation.status)}>
                            {getStatusText(quotation.status)}
                          </Badge>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(
                                `/api/quotations/${quotation.id}/pdf`,
                                "_blank",
                              );
                            }}
                          >
                            <Download className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-bold text-obsidian-900">
                  Acciones Rápidas
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  className="w-full justify-start bg-yellow-400 hover:bg-yellow-500 text-obsidian-900"
                  onClick={() => router.push("/shop")}
                >
                  <Package className="mr-2 h-4 w-4" />
                  Nueva Cotización
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  onClick={() => router.push("/dashboard/profile")}
                >
                  <User className="mr-2 h-4 w-4" />
                  Editar Perfil
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  onClick={() => router.push("/dashboard/notifications")}
                >
                  <Bell className="mr-2 h-4 w-4" />
                  Notificaciones
                  {stats.unreadNotifications > 0 && (
                    <Badge className="ml-auto bg-red-500 text-white">
                      {stats.unreadNotifications}
                    </Badge>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Profile Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-bold text-obsidian-900">
                  Mi Perfil
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-obsidian-900" />
                    </div>
                    <div>
                      <p className="font-medium text-obsidian-900">
                        {profile?.full_name || "Sin nombre"}
                      </p>
                      <p className="text-sm text-gray-500">
                        {profile?.company_name || "Sin empresa"}
                      </p>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">
                    <p>{profile?.email}</p>
                    {profile?.phone && <p>{profile.phone}</p>}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={() => router.push("/dashboard/profile")}
                  >
                    Actualizar Información
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
