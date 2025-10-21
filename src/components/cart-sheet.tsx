"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/contexts/auth-context";
import { useCart } from "@/components/cart-context";
import { useQuotations } from "@/hooks/useQuotations";
import AuthModal from "@/components/auth/auth-modal";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { SuccessModal } from "./success-modal";

interface CartSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartSheet({ isOpen, onClose }: CartSheetProps) {
  const { user } = useAuth();
  const { state, dispatch } = useCart();
  const { createQuotation } = useQuotations();
  const [sending, setSending] = useState(false);
  const [notes, setNotes] = useState("");
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [modalData, setModalData] = useState<{
    open: boolean;
    message: string;
    variant?: "success" | "error";
  }>({
    open: false,
    message: "",
    variant: "success",
  });

  const updateQuantity = (id: string, quantity: number) =>
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });

  const removeItem = (id: string) =>
    dispatch({ type: "REMOVE_ITEM", payload: id });

  const sendQuotation = async () => {
    if (!user) {
      setShowAuthModal(true);
      return;
    }

    try {
      setSending(true);
      const { data, error } = await createQuotation({
        items: state.items,
        notes: notes.trim() || undefined,
      });

      if (error) throw new Error(error);

      setModalData({
        open: true,
        message: "Tu solicitud de cotización se ha enviado correctamente.",
        variant: "success",
      });

      // Limpiar formulario y cerrar
      setNotes("");
      onClose();
    } catch (err: any) {
      setModalData({
        open: true,
        message: err.message || "No se pudo enviar la cotización.",
        variant: "error",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent className="w-[400px] sm:w-[540px] bg-white shadow-2xl rounded-l-xl">
          <SheetHeader>
            <SheetTitle>
              Carrito de Cotización ({state.items.length})
            </SheetTitle>
          </SheetHeader>

          <div className="flex flex-col h-full">
            {/* Lista de productos */}
            <div className="flex-1 overflow-y-auto py-4">
              {state.items.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  Tu carrito está vacío.
                </div>
              ) : (
                <div className="space-y-4">
                  {state.items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-3 p-4 border rounded-lg"
                    >
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={60}
                        height={60}
                        className="rounded-md"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{item.name}</h4>
                      </div>

                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 bg-transparent"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 bg-transparent"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>

                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-red-500 hover:text-red-700"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {state.items.length > 0 && (
              <div className="border-t pt-4 space-y-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="quotation-notes"
                    className="text-sm font-medium"
                  >
                    Notas adicionales (opcional)
                  </Label>
                  <Textarea
                    id="quotation-notes"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Describe cualquier requerimiento especial, cantidades específicas, o información adicional..."
                    className="min-h-[80px] resize-none"
                    maxLength={500}
                  />
                  <div className="text-xs text-gray-500 text-right">
                    {notes.length}/500 caracteres
                  </div>
                </div>

                <div className="space-y-2">
                  <Button
                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold"
                    onClick={sendQuotation}
                    disabled={sending}
                  >
                    {sending
                      ? "Enviando..."
                      : user
                        ? "Enviar Cotización"
                        : "Iniciar Sesión para Cotizar"}
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={onClose}
                  >
                    Continuar Cotizando
                  </Button>

                  {!user && (
                    <p className="text-xs text-gray-500 text-center">
                      Necesitas una cuenta para enviar solicitudes de cotización
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        </SheetContent>

        <AuthModal
          isOpen={showAuthModal}
          onClose={() => setShowAuthModal(false)}
          defaultTab="register"
        />
      </Sheet>
      <SuccessModal
        isOpen={modalData.open}
        onClose={() =>
          setModalData({ open: false, message: "", variant: "success" })
        }
        message={modalData.message}
        variant={modalData.variant}
      />
    </>
  );
}
