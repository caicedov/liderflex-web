"use client";

import type React from "react";
import { createContext, useContext, useReducer, useEffect, type ReactNode } from "react";

export interface CartItem {
  id: string;
  name: string;
  image: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

type CartAction =
  | { type: "ADD_ITEM"; payload: Omit<CartItem, "quantity"> }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "UPDATE_QUANTITY"; payload: { id: string; quantity: number } }
  | { type: "CLEAR_CART" }
  | { type: "SET_CART"; payload: CartItem[] };

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
} | null>(null);

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const existing = state.items.find(i => i.id === action.payload.id);
      if (existing) {
        return {
          ...state,
          items: state.items.map(i =>
            i.id === action.payload.id
              ? { ...i, quantity: i.quantity + 1 }
              : i
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
      };
    }

    case "REMOVE_ITEM":
      return { ...state, items: state.items.filter(i => i.id !== action.payload) };

    case "UPDATE_QUANTITY":
      return {
        ...state,
        items: state.items
          .map(i =>
            i.id === action.payload.id
              ? { ...i, quantity: action.payload.quantity }
              : i
          )
          .filter(i => i.quantity > 0),
      };

    case "CLEAR_CART":
      return { items: [] };

    case "SET_CART":
      return { items: action.payload };

    default:
      return state;
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  // 💾 Cargar carrito desde localStorage cuando inicia
  useEffect(() => {
    try {
      const stored = localStorage.getItem("cart");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          dispatch({ type: "SET_CART", payload: parsed });
        }
      }
    } catch (err) {
      console.error("Error al leer carrito guardado:", err);
    }
  }, []);

  // 💿 Guardar carrito cada vez que cambia
  useEffect(() => {
    if (state.items.length >= 0) {
      localStorage.setItem("cart", JSON.stringify(state.items));
    }
  }, [state.items]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}