# 🚀 Instalación del Sistema de Usuarios - Liderflex Web

## 📋 Guía de Instalación Paso a Paso

### 1. **Instalar Dependencias**

```bash
# Dependencias de Supabase
npm install @supabase/supabase-js

# Dependencias de UI adicionales (si no están instaladas)
npm install @radix-ui/react-dropdown-menu
```

### 2. **Configurar Proyecto Supabase**

1. Ve a [Supabase](https://app.supabase.com/) y crea un nuevo proyecto
2. Guarda las credenciales del proyecto:
   - `Project URL`
   - `anon/public key`
   - `service_role key` (desde Settings → API)

### 3. **Configurar Variables de Entorno**

Crea/actualiza tu archivo `.env.local`:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://tuproyecto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_anon_key_aqui
SUPABASE_SERVICE_ROLE_KEY=tu_service_role_key_aqui

# Email Configuration (opcional)
RESEND_API_KEY=tu_resend_api_key
FROM_EMAIL=noreply@liderflexhidraulica.cl

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 4. **Ejecutar Esquema de Base de Datos**

1. Ve a tu proyecto Supabase → SQL Editor
2. Copia y ejecuta el contenido completo de `supabase/schema.sql`
3. Verifica que se crearon las tablas: `profiles`, `quotations`, `notifications`

### 5. **Configurar Autenticación**

En Supabase Dashboard → Authentication → Settings:

1. **Site URL**: `http://localhost:3000` (desarrollo) / `https://tudominio.com` (producción)
2. **Redirect URLs**: Agregar:
   - `http://localhost:3000/auth/callback`
   - `http://localhost:3000/auth/reset-password`
3. **Email confirmations**: ✅ Habilitado
4. **Email template**: Personalizar si es necesario

### 6. **Verificar Tipos de TypeScript**

Crea el archivo `src/lib/database.types.ts`:

```typescript
export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          email: string;
          full_name: string | null;
          company_name: string | null;
          phone: string | null;
          address: string | null;
          city: string | null;
          rut: string | null;
          avatar_url: string | null;
          user_type: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email: string;
          full_name?: string | null;
          company_name?: string | null;
          phone?: string | null;
          address?: string | null;
          city?: string | null;
          rut?: string | null;
          avatar_url?: string | null;
          user_type?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          full_name?: string | null;
          company_name?: string | null;
          phone?: string | null;
          address?: string | null;
          city?: string | null;
          rut?: string | null;
          avatar_url?: string | null;
          user_type?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      quotations: {
        Row: {
          id: string;
          user_id: string;
          quotation_number: string;
          status: string;
          items: any;
          notes: string | null;
          total_items: number;
          admin_notes: string | null;
          quote_amount: number | null;
          quote_valid_until: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          quotation_number: string;
          status?: string;
          items: any;
          notes?: string | null;
          total_items?: number;
          admin_notes?: string | null;
          quote_amount?: number | null;
          quote_valid_until?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          quotation_number?: string;
          status?: string;
          items?: any;
          notes?: string | null;
          total_items?: number;
          admin_notes?: string | null;
          quote_amount?: number | null;
          quote_valid_until?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      notifications: {
        Row: {
          id: string;
          user_id: string;
          title: string;
          message: string;
          type: string;
          read: boolean;
          action_url: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          title: string;
          message: string;
          type?: string;
          read?: boolean;
          action_url?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          title?: string;
          message?: string;
          type?: string;
          read?: boolean;
          action_url?: string | null;
          created_at?: string;
        };
      };
    };
    Functions: {
      generate_quotation_number: {
        Args: Record<PropertyKey, never>;
        Returns: string;
      };
    };
  };
}

export type Profile = Database['public']['Tables']['profiles']['Row'];
export type Quotation = Database['public']['Tables']['quotations']['Row'];
export type Notification = Database['public']['Tables']['notifications']['Row'];
```

### 7. **Verificar Componentes UI Faltantes**

Instala los componentes de shadcn/ui que falten:

```bash
# Si no tienes estos componentes
npx shadcn-ui@latest add dropdown-menu
npx shadcn-ui@latest add textarea
npx shadcn-ui@latest add label
```

### 8. **Actualizar package.json**

Agrega estos scripts si no existen:

```json
{
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build --turbopack",
    "start": "next start",
    "lint": "biome check",
    "format": "biome format --write",
    "type-check": "tsc --noEmit"
  }
}
```

### 9. **Probar la Instalación**

1. **Ejecutar el servidor de desarrollo**:
   ```bash
   npm run dev
   ```

2. **Verificar funcionalidades**:
   - ✅ Header muestra botón de usuario
   - ✅ Modal de autenticación se abre correctamente
   - ✅ Registro de usuario funciona
   - ✅ Login funciona
   - ✅ Dashboard se carga después del login
   - ✅ Carrito permite crear cotización (usuario logueado)

### 10. **Configuración de Producción**

Para desplegar en producción (Vercel recomendado):

1. **Variables de entorno en Vercel**:
   - Agrega todas las variables del `.env.local`
   - Cambia `NEXT_PUBLIC_APP_URL` por tu dominio real

2. **Configurar URLs en Supabase**:
   - Site URL: `https://tudominio.com`
   - Redirect URLs: `https://tudominio.com/auth/callback`

3. **Habilitar Row Level Security (RLS)**:
   ```sql
   -- Ya incluido en schema.sql, pero verificar que esté habilitado
   SELECT * FROM pg_policies WHERE tablename IN ('profiles', 'quotations', 'notifications');
   ```

## 🐛 Solución de Problemas Comunes

### Error: "supabase is not defined"
```typescript
// Verificar imports en los componentes
import { supabase } from '@/lib/supabase';
```

### Error: "Cannot read properties of undefined"
```typescript
// Verificar que AuthProvider envuelve la aplicación
// En layout.tsx debe estar antes de CartProvider
```

### Error: "Row Level Security policy violation"
```sql
-- Verificar que las políticas RLS están activas
SELECT * FROM pg_policies WHERE tablename = 'profiles';
```

### Error de tipos TypeScript
```bash
# Regenerar tipos de Supabase
npx supabase gen types typescript --project-id tu-project-id > src/lib/database.types.ts
```

## 📞 Soporte

Si encuentras problemas durante la instalación:

1. **Revisa los logs** de Supabase Dashboard → Logs
2. **Verifica variables** de entorno están correctas
3. **Comprueba políticas RLS** están habilitadas
4. **Revisa la consola** del navegador para errores JS

---

## ✅ Checklist Final

- [ ] ✅ Supabase proyecto creado
- [ ] ✅ Variables de entorno configuradas
- [ ] ✅ Esquema SQL ejecutado exitosamente
- [ ] ✅ Autenticación configurada
- [ ] ✅ Dependencias instaladas
- [ ] ✅ Componentes UI disponibles
- [ ] ✅ AuthProvider integrado en layout
- [ ] ✅ Header actualizado con dropdown
- [ ] ✅ CartSheet integrado con auth
- [ ] ✅ Dashboard accesible
- [ ] ✅ Registro/login funcionando
- [ ] ✅ Creación de cotizaciones funcionando

**¡Sistema de usuarios completamente funcional!** 🎉

Para más detalles técnicos, consulta `docs/USER_SYSTEM.md`