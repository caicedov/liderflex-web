"use client";

import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export default function WhatsAppChatModal() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      const phone = "56912345678"; // Replace with your WhatsApp number
      const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank");
      setOpen(false);
      setMessage("");
    }
  };

  return (
    <>
      <Button
        className="fixed bottom-8 right-8 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg p-4 flex items-center justify-center animate-bounce"
        onClick={() => setOpen(true)}
        aria-label="Chatea por WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-xs mx-auto bg-white rounded-xl shadow-2xl p-6">
          <div className="flex flex-col items-center">
            <div className="bg-green-500 rounded-full p-3 mb-3">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-lg font-bold mb-2 text-green-700">
              ¿Necesitas ayuda?
            </h2>
            <p className="text-gray-600 text-center mb-4 text-sm">
              Chatea con nuestro equipo por WhatsApp. ¡Te responderemos lo antes
              posible!
            </p>
            <textarea
              className="w-full border rounded-lg p-2 mb-3 focus:ring-green-500 focus:border-green-500"
              rows={3}
              placeholder="Escribe tu mensaje..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold"
              onClick={handleSend}
              disabled={!message.trim()}
            >
              Enviar por WhatsApp
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
