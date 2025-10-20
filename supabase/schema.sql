-- Habilitar extensiones necesarias
create extension if not exists "uuid-ossp";

-- Tabla de perfiles de usuario
create table public.profiles (
  id uuid references auth.users(id) on delete cascade primary key,
  email text unique not null,
  full_name text,
  company_name text,
  phone text,
  address text,
  city text,
  rut text,
  avatar_url text,
  user_type text default 'customer' check (user_type in ('customer', 'admin')),
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Habilitar RLS
alter table public.profiles enable row level security;

-- Políticas RLS para profiles
create policy "Los usuarios pueden ver su propio perfil" on public.profiles
  for select using (auth.uid() = id);

create policy "Los usuarios pueden actualizar su propio perfil" on public.profiles
  for update using (auth.uid() = id);

create policy "Los perfiles se insertan automáticamente" on public.profiles
  for insert with check (auth.uid() = id);

-- Tabla de cotizaciones
create table public.quotations (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  quotation_number text unique not null,
  status text default 'pending' check (status in ('pending', 'processing', 'quoted', 'approved', 'rejected', 'completed')),
  items jsonb not null,
  notes text,
  total_items integer default 0,
  admin_notes text,
  quote_amount decimal(10,2),
  quote_valid_until date,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Índices para mejor rendimiento
create index quotations_user_id_idx on public.quotations(user_id);
create index quotations_status_idx on public.quotations(status);
create index quotations_created_at_idx on public.quotations(created_at);

-- Habilitar RLS para cotizaciones
alter table public.quotations enable row level security;

-- Políticas RLS para quotations
create policy "Los usuarios pueden ver sus propias cotizaciones" on public.quotations
  for select using (auth.uid() = user_id);

create policy "Los usuarios pueden crear cotizaciones" on public.quotations
  for insert with check (auth.uid() = user_id);

create policy "Los usuarios pueden actualizar sus cotizaciones pendientes" on public.quotations
  for update using (auth.uid() = user_id and status = 'pending');

-- Tabla de notificaciones
create table public.notifications (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  title text not null,
  message text not null,
  type text default 'info' check (type in ('info', 'success', 'warning', 'error')),
  read boolean default false,
  action_url text,
  created_at timestamptz default now()
);

-- Índices para notificaciones
create index notifications_user_id_idx on public.notifications(user_id);
create index notifications_read_idx on public.notifications(read);
create index notifications_created_at_idx on public.notifications(created_at);

-- Habilitar RLS para notificaciones
alter table public.notifications enable row level security;

-- Políticas RLS para notifications
create policy "Los usuarios pueden ver sus propias notificaciones" on public.notifications
  for select using (auth.uid() = user_id);

create policy "Los usuarios pueden actualizar sus notificaciones" on public.notifications
  for update using (auth.uid() = user_id);

-- Función para crear perfil automáticamente
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email, full_name)
  values (new.id, new.email, new.raw_user_meta_data->>'full_name');
  return new;
end;
$$ language plpgsql security definer;

-- Trigger para crear perfil automáticamente
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Función para generar número de cotización
create or replace function public.generate_quotation_number()
returns text as $$
declare
  year_suffix text;
  sequence_number int;
begin
  year_suffix := to_char(now(), 'YY');
  
  select coalesce(max(cast(substring(quotation_number from 4) as int)), 0) + 1
  into sequence_number
  from public.quotations
  where quotation_number like 'LH' || year_suffix || '%';
  
  return 'LH' || year_suffix || lpad(sequence_number::text, 4, '0');
end;
$$ language plpgsql;

-- Función para actualizar updated_at
create or replace function public.update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

-- Triggers para actualizar updated_at
create trigger update_profiles_updated_at before update on public.profiles
  for each row execute procedure public.update_updated_at_column();

create trigger update_quotations_updated_at before update on public.quotations
  for each row execute procedure public.update_updated_at_column();