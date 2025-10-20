"use client";

import { useState, useEffect } from "react";
import { db } from "@/lib/firebase/firebase";
import {
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import { useAuth } from "@/contexts/auth-context";
import { useCart } from "@/components/cart-context";
import {
  generateQuotationNumber,
  timestampToString,
} from "@/lib/firebase/firebase-utils";

export interface Quotation {
  id: string;
  user_id: string;
  quotation_number: string;
  status:
    | "pending"
    | "processing"
    | "quoted"
    | "approved"
    | "rejected"
    | "completed";
  items: any[];
  notes?: string;
  total_items: number;
  admin_notes?: string;
  quote_amount?: number;
  quote_valid_until?: string;
  created_at: string;
  updated_at: string;
}

export interface CreateQuotationData {
  items: any[];
  notes?: string;
}

export function useQuotations() {
  const { user } = useAuth();
  const { dispatch } = useCart();
  const [quotations, setQuotations] = useState<Quotation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch quotations
  const fetchQuotations = async () => {
    if (!user) return;

    try {
      setLoading(true);
      setError(null);

      const quotationsRef = collection(db, "quotations");
      const q = query(
        quotationsRef,
        where("user_id", "==", user.uid),
        orderBy("created_at", "desc"),
      );

      const snapshot = await getDocs(q);
      const quotationsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        created_at: timestampToString(doc.data().created_at),
        updated_at: timestampToString(doc.data().updated_at),
      })) as Quotation[];

      setQuotations(quotationsData);
    } catch (err: any) {
      setError(err.message || "Error al cargar cotizaciones");
    } finally {
      setLoading(false);
    }
  };

  // Create quotation
  const createQuotation = async (data: CreateQuotationData) => {
    if (!user) throw new Error("No hay usuario autenticado");

    try {
      // Generar número de cotización
      const quotationNumber = await generateQuotationNumber();

      // Crear cotización
      const quotationData = {
        user_id: user.uid,
        quotation_number: quotationNumber,
        items: data.items,
        notes: data.notes || "",
        total_items: data.items.reduce(
          (sum: number, item: any) => sum + item.quantity,
          0,
        ),
        status: "pending" as const,
        created_at: serverTimestamp(),
        updated_at: serverTimestamp(),
      };

      const quotationsRef = collection(db, "quotations");
      const docRef = await addDoc(quotationsRef, quotationData);
      // Crear notificación para el usuario
      const notificationsRef = collection(db, "notifications");
      await addDoc(notificationsRef, {
        user_id: user.uid,
        title: "Cotización Creada",
        message: `Tu cotización ${quotationNumber} ha sido creada exitosamente y está siendo procesada.`,
        type: "success",
        read: false,
        action_url: `/dashboard/quotations/${docRef.id}`,
        created_at: serverTimestamp(),
      });

      // Limpiar carrito después de crear cotización
      dispatch({ type: "CLEAR_CART" });

      const newQuotation = {
        id: docRef.id,
        ...quotationData,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      } as Quotation;

      // Actualizar lista local
      setQuotations((prev) => [newQuotation, ...prev]);

      return { data: newQuotation, error: null };
    } catch (err: any) {
      return { data: null, error: err.message || "Error al crear cotización" };
    }
  };

  // Get quotation by id
  const getQuotationById = async (id: string) => {
    if (!user) return { data: null, error: "No hay usuario autenticado" };

    try {
      const quotationRef = doc(db, "quotations", id);
      const quotationSnap = await getDoc(quotationRef);

      if (!quotationSnap.exists()) {
        throw new Error("Cotización no encontrada");
      }

      const data = quotationSnap.data();

      // Verificar que pertenece al usuario
      if (data.user_id !== user.uid) {
        throw new Error("No tienes permiso para ver esta cotización");
      }

      const quotation = {
        id: quotationSnap.id,
        ...data,
        created_at: timestampToString(data.created_at),
        updated_at: timestampToString(data.updated_at),
      } as Quotation;

      return { data: quotation, error: null };
    } catch (err: any) {
      return { data: null, error: err.message || "Cotización no encontrada" };
    }
  };

  // Update quotation
  const updateQuotation = async (id: string, updates: Partial<Quotation>) => {
    if (!user) throw new Error("No hay usuario autenticado");

    try {
      const quotationRef = doc(db, "quotations", id);

      // Solo permitir actualizar ciertos campos
      const allowedUpdates = {
        notes: updates.notes,
        updated_at: serverTimestamp(),
      };

      await updateDoc(quotationRef, allowedUpdates);

      // Actualizar lista local
      setQuotations((prev) =>
        prev.map((q) =>
          q.id === id
            ? {
                ...q,
                ...updates,
                updated_at: new Date().toISOString(),
              }
            : q,
        ),
      );

      return { data: updates, error: null };
    } catch (err: any) {
      return {
        data: null,
        error: err.message || "Error al actualizar cotización",
      };
    }
  };

  // Delete quotation (solo si está pending)
  const deleteQuotation = async (id: string) => {
    if (!user) throw new Error("No hay usuario autenticado");

    try {
      const quotationRef = doc(db, "quotations", id);
      const quotationSnap = await getDoc(quotationRef);

      if (!quotationSnap.exists()) {
        throw new Error("Cotización no encontrada");
      }

      const data = quotationSnap.data();

      if (data.user_id !== user.uid) {
        throw new Error("No tienes permiso para eliminar esta cotización");
      }

      if (data.status !== "pending") {
        throw new Error("Solo puedes eliminar cotizaciones pendientes");
      }

      await deleteDoc(quotationRef);

      // Actualizar lista local
      setQuotations((prev) => prev.filter((q) => q.id !== id));

      return { error: null };
    } catch (err: any) {
      return { error: err.message || "Error al eliminar cotización" };
    }
  };

  // Get quotation statistics
  const getQuotationStats = () => {
    const total = quotations.length;
    const pending = quotations.filter((q) => q.status === "pending").length;
    const processing = quotations.filter(
      (q) => q.status === "processing",
    ).length;
    const quoted = quotations.filter((q) => q.status === "quoted").length;
    const approved = quotations.filter((q) => q.status === "approved").length;
    const rejected = quotations.filter((q) => q.status === "rejected").length;
    const completed = quotations.filter((q) => q.status === "completed").length;

    return {
      total,
      pending,
      processing,
      quoted,
      approved,
      rejected,
      completed,
      pendingReview: pending + processing,
      awaitingAction: quoted,
    };
  };

  // Subscribe to quotation updates (real-time)
  useEffect(() => {
    if (!user) return;

    const quotationsRef = collection(db, "quotations");
    const q = query(
      quotationsRef,
      where("user_id", "==", user.uid),
      orderBy("created_at", "desc"),
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const quotationsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        created_at: timestampToString(doc.data().created_at),
        updated_at: timestampToString(doc.data().updated_at),
      })) as Quotation[];

      setQuotations(quotationsData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [user]);

  // Initial fetch
  useEffect(() => {
    if (user) {
      fetchQuotations();
    } else {
      setQuotations([]);
      setLoading(false);
    }
  }, [user]);

  return {
    quotations,
    loading,
    error,
    createQuotation,
    getQuotationById,
    updateQuotation,
    deleteQuotation,
    getQuotationStats,
    refetch: fetchQuotations,
  };
}
