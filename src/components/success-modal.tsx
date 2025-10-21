"use client";

import { AlertCircle, CheckCircle2 } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message: string;
  variant?: "success" | "error";
}

export function SuccessModal({
  isOpen,
  onClose,
  title,
  message,
  variant = "success",
}: SuccessModalProps) {
  const isSuccess = variant === "success";
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-sm bg-white border-0 shadow-2xl rounded-2xl p-6">
        <DialogHeader className="text-center">
          <div
            className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center ${
              isSuccess ? "bg-green-100" : "bg-red-100"
            }`}
          >
            {isSuccess ? (
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            ) : (
              <AlertCircle className="w-8 h-8 text-red-600" />
            )}
          </div>

          <DialogTitle className="mt-4 text-2xl font-bold text-obsidian-900">
            {title || (isSuccess ? "¡Éxito!" : "Oops...")}
          </DialogTitle>

          <DialogDescription className="text-gray-600 text-sm mt-2">
            {message}
          </DialogDescription>
        </DialogHeader>

        <div className="flex justify-center mt-6">
          <Button
            onClick={onClose}
            className={`px-6 ${
              isSuccess
                ? "bg-green-500 hover:bg-green-600"
                : "bg-red-500 hover:bg-red-600"
            } text-white font-semibold`}
          >
            Entendido
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
