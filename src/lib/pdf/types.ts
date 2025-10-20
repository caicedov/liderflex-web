export interface CartItemPayload {
  id: string;
  name: string;
  image?: string;
  quantity: number;
  sizeCode?: string;
  size?: string;
}

export interface QuotePayload {
  quotation_number: string;
  items: CartItemPayload[];
  customer?: {
    full_name?: string;
    company_name?: string;
    rut?: string;
    email?: string;
    phone?: string;
    address?: string;
    city?: string;
  };
  notes?: string;
  status?: string;
  created_at?: string;
}