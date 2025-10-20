export interface Profile {
  id: string;
  email: string;
  full_name?: string;
  company_name?: string;
  phone?: string;
  address?: string;
  city?: string;
  rut?: string;
  avatar_url?: string;
  user_type: 'customer' | 'admin';
  created_at: string;
  updated_at: string;
}

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

export interface Notification {
  id: string;
  user_id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  read: boolean;
  action_url?: string;
  created_at: string;
}