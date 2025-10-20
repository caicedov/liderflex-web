"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/components/cart-context";
import Image from "next/image";
import { useState } from "react";

interface CartSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartSheet({ isOpen, onClose }: CartSheetProps) {
  const { state, dispatch } = useCart();
  const [sending, setSending] = useState(false);

  const updateQuantity = (id: string, quantity: number) =>
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });

  const removeItem = (id: string) =>
    dispatch({ type: "REMOVE_ITEM", payload: id });

  const sendQuotation = async () => {
    try {
      setSending(true);
      const payload = { items: state.items };

      const res = await fetch("/api/send-quotation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Error al enviar cotización.");

      alert("✅ Tu solicitud de cotización se ha enviado correctamente.");
      dispatch({ type: "CLEAR_CART" });
      onClose();
    } catch (err: any) {
      alert(err.message || "No se pudo enviar la cotización.");
    } finally {
      setSending(false);
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-[400px] sm:w-[540px] bg-white shadow-2xl rounded-l-xl">
        <SheetHeader>
          <SheetTitle>Carrito de Cotización ({state.items.length})</SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-full">
          {/* Lista de productos */}
          <div className="flex-1 overflow-y-auto py-4">
            {state.items.length === 0 ? (
              <div className="text-center py-8 text-gray-500">Tu carrito está vacío.</div>
            ) : (
              <div className="space-y-4">
                {state.items.map(item => (
                  <div key={item.id} className="flex items-center gap-3 p-4 border rounded-lg">
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
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 bg-transparent"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
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
            <div className="border-t pt-4 space-y-2">
              <Button
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-black"
                onClick={sendQuotation}
                disabled={sending}
              >
                {sending ? "Enviando..." : "Enviar Cotización"}
              </Button>
              <Button variant="outline" className="w-full" onClick={onClose}>
                Continuar Cotizando
              </Button>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}