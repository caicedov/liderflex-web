"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/auth-context";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Phone } from "lucide-react";

export default function ProfilePage() {
  const { user, profile, updateProfile, loading } = useAuth();
  const [phone, setPhone] = useState("");
  const [saving, setSaving] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (profile?.phone) {
      setPhone(profile.phone);
    }
  }, [profile]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setSuccessMessage("");
    setErrorMessage("");

    if (!user) {
      setErrorMessage("No hay sesión activa");
      setSaving(false);
      return;
    }

    try {
      const { error } = await updateProfile({ phone });

      if (error) {
        setErrorMessage(error);
      } else {
        setSuccessMessage("📱 Teléfono actualizado correctamente");
      }
    } catch (err: any) {
      setErrorMessage("Error al actualizar el perfil");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96 text-gray-500">
        <Loader2 className="h-6 w-6 mr-2 animate-spin" />
        Cargando...
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-600">No se encontró el perfil del usuario.</p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6 text-obsidian-900">
        Mi Perfil
      </h1>

      <Card className="border border-gray-200 shadow-sm bg-white">
        <CardHeader>
          <CardTitle className="text-lg font-medium text-gray-800">
            Información Personal
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <Label className="text-sm text-gray-600">Nombre Completo</Label>
              <Input
                value={profile.full_name || ""}
                disabled
                className="bg-gray-50 text-gray-700 cursor-not-allowed"
              />
            </div>

            <div>
              <Label className="text-sm text-gray-600">RUT</Label>
              <Input
                value={profile.rut || ""}
                disabled
                className="bg-gray-50 text-gray-700 cursor-not-allowed"
              />
            </div>

            <div>
              <Label className="text-sm text-gray-600">Email</Label>
              <Input
                value={profile.email || ""}
                disabled
                className="bg-gray-50 text-gray-700 cursor-not-allowed"
              />
            </div>

            <div>
              <Label className="text-sm text-gray-600">Empresa</Label>
              <Input
                value={profile.company_name || ""}
                disabled
                className="bg-gray-50 text-gray-700 cursor-not-allowed"
              />
            </div>

            <div>
              <Label htmlFor="phone" className="text-sm text-gray-700">
                Teléfono
              </Label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+56 9 1234 5678"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="pl-9"
                />
              </div>
            </div>

            {errorMessage && (
              <p className="text-sm text-red-600">{errorMessage}</p>
            )}
            {successMessage && (
              <p className="text-sm text-green-600">{successMessage}</p>
            )}

            <Button
              type="submit"
              disabled={saving}
              className="bg-yellow-400 hover:bg-yellow-500 text-obsidian-900 font-semibold w-full"
            >
              {saving ? "Guardando..." : "Guardar Cambios"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
