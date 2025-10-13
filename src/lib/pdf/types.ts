export type CartItemPayload = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  sizeCode?: string; // opcional, por si estás usando códigos de medidas
};

export type QuotePayload = {
  items: CartItemPayload[];
  customer?: {
    name?: string;
    rut?: string;        // si aplica
    email?: string;
    phone?: string;
    address?: string;
    city?: string;
  };
  notes?: string;
};