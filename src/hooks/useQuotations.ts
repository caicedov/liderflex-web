"use client";

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { useAuth } from '@/contexts/auth-context';
import { useCart } from '@/components/cart-context';

export interface Quotation {
  id: string;
  user_id: string;
  quotation_number: string;
  status: 'pending' | 'processing' | 'quoted' | 'approved' | 'rejected' | 'completed';
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

      const { data, error: fetchError } = await supabase
        .from('quotations')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (fetchError) throw fetchError;
      setQuotations(data || []);
    } catch (err: any) {
      setError(err.message || 'Error al cargar cotizaciones');
    } finally {
      setLoading(false);
    }
  };

  // Create quotation
  const createQuotation = async (data: CreateQuotationData) => {
    if (!user) throw new Error('No hay usuario autenticado');

    try {
      // Generar número de cotización
      const { data: quotationNumber, error: numberError } = await supabase
        .rpc('generate_quotation_number');

      if (numberError) throw numberError;

      // Crear cotización
      const quotationData = {
        user_id: user.id,
        quotation_number: quotationNumber,
        items: data.items,
        notes: data.notes,
        total_items: data.items.reduce((sum: number, item: any) => sum + item.quantity, 0)
      };

      const { data: newQuotation, error: createError } = await supabase
        .from('quotations')
        .insert([quotationData])
        .select()
        .single();

      if (createError) throw createError;

      // Crear notificación para el usuario
      await supabase
        .from('notifications')
        .insert([{
          user_id: user.id,
          title: 'Cotización Creada',
          message: `Tu cotización ${quotationNumber} ha sido creada exitosamente y está siendo procesada.`,
          type: 'success',
          action_url: `/dashboard/quotations/${newQuotation.id}`
        }]);

      // Limpiar carrito después de crear cotización
      dispatch({ type: 'CLEAR_CART' });

      // Actualizar lista local
      setQuotations(prev => [newQuotation, ...prev]);

      return { data: newQuotation, error: null };
    } catch (err: any) {
      return { data: null, error: err.message || 'Error al crear cotización' };
    }
  };

  // Get quotation by id
  const getQuotationById = async (id: string) => {
    if (!user) return { data: null, error: 'No hay usuario autenticado' };

    try {
      const { data, error } = await supabase
        .from('quotations')
        .select('*')
        .eq('id', id)
        .eq('user_id', user.id)
        .single();

      if (error) throw error;
      return { data, error: null };
    } catch (err: any) {
      return { data: null, error: err.message || 'Cotización no encontrada' };
    }
  };

  // Update quotation (solo para estados que el usuario puede cambiar)
  const updateQuotation = async (id: string, updates: Partial<Quotation>) => {
    if (!user) throw new Error('No hay usuario autenticado');

    try {
      // Solo permitir actualizar ciertos campos por parte del usuario
      const allowedUpdates = {
        notes: updates.notes,
        // Los usuarios no pueden cambiar el estado directamente
      };

      const { data, error } = await supabase
        .from('quotations')
        .update(allowedUpdates)
        .eq('id', id)
        .eq('user_id', user.id)
        .select()
        .single();

      if (error) throw error;

      // Actualizar lista local
      setQuotations(prev =>
        prev.map(q => (q.id === id ? { ...q, ...data } : q))
      );

      return { data, error: null };
    } catch (err: any) {
      return { data: null, error: err.message || 'Error al actualizar cotización' };
    }
  };

  // Delete quotation (solo si está pending)
  const deleteQuotation = async (id: string) => {
    if (!user) throw new Error('No hay usuario autenticado');

    try {
      const { error } = await supabase
        .from('quotations')
        .delete()
        .eq('id', id)
        .eq('user_id', user.id)
        .eq('status', 'pending'); // Solo se pueden eliminar las pendientes

      if (error) throw error;

      // Actualizar lista local
      setQuotations(prev => prev.filter(q => q.id !== id));

      return { error: null };
    } catch (err: any) {
      return { error: err.message || 'Error al eliminar cotización' };
    }
  };

  // Get quotation statistics
  const getQuotationStats = () => {
    const total = quotations.length;
    const pending = quotations.filter(q => q.status === 'pending').length;
    const processing = quotations.filter(q => q.status === 'processing').length;
    const quoted = quotations.filter(q => q.status === 'quoted').length;
    const approved = quotations.filter(q => q.status === 'approved').length;
    const rejected = quotations.filter(q => q.status === 'rejected').length;
    const completed = quotations.filter(q => q.status === 'completed').length;

    return {
      total,
      pending,
      processing,
      quoted,
      approved,
      rejected,
      completed,
      pendingReview: pending + processing,
      awaitingAction: quoted, // Cotizaciones que esperan respuesta del usuario
    };
  };

  // Subscribe to quotation updates (real-time)
  useEffect(() => {
    if (!user) return;

    const subscription = supabase
      .channel('quotations_changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'quotations',
          filter: `user_id=eq.${user.id}`,
        },
        (payload) => {
          if (payload.eventType === 'INSERT') {
            setQuotations(prev => [payload.new as Quotation, ...prev]);
          } else if (payload.eventType === 'UPDATE') {
            setQuotations(prev =>
              prev.map(q =>
                q.id === payload.new.id ? { ...q, ...payload.new } : q
              )
            );
          } else if (payload.eventType === 'DELETE') {
            setQuotations(prev => prev.filter(q => q.id !== payload.old.id));
          }
        }
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
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