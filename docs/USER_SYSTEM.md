# Sistema de Gestión de Usuarios - Liderflex Web

## 📋 Visión General

El sistema de gestión de usuarios para Liderflex Web incluye autenticación completa, gestión de perfiles, sistema de cotizaciones con seguimiento de estados, y notificaciones en tiempo real usando Supabase como backend.

## 🚀 Características Principales

### ✨ Autenticación
- **Registro de usuarios** con validación completa
- **Inicio de sesión** con email/password
- **Recuperación de contraseña** vía email
- **Autenticación persistente** entre sesiones
- **Estados de carga** y manejo de errores

### 👤 Gestión de Perfiles
- **Perfiles automáticos** creados al registrarse
- **Información empresarial** (empresa, RUT, teléfono)
- **Dashboard personalizado** con estadísticas
- **Edición de perfil** en tiempo real

### 📋 Sistema de Cotizaciones
- **Creación automática** de números de cotización (LH25XXXX)
- **Estados de seguimiento**: Pendiente → Procesando → Cotizada → Aprobada/Rechazada → Completada
- **Historial completo** de cotizaciones
- **Notas del usuario** y administrador
- **Actualizaciones en tiempo real**

### 🔔 Notificaciones
- **Sistema completo** de notificaciones
- **Tiempo real** con Supabase Realtime
- **Tipos de notificación**: info, success, warning, error
- **Enlaces de acción** directos

## 🏗️ Arquitectura

### Base de Datos (Supabase)

#### Tabla `profiles`
```sql
CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  company_name TEXT,
  phone TEXT,
  address TEXT,
  city TEXT,
  rut TEXT,
  avatar_url TEXT,
  user_type TEXT DEFAULT 'customer',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

#### Tabla `quotations`
```sql
CREATE TABLE quotations (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) NOT NULL,
  quotation_number TEXT UNIQUE NOT NULL,
  status TEXT DEFAULT 'pending',
  items JSONB NOT NULL,
  notes TEXT,
  total_items INTEGER DEFAULT 0,
  admin_notes TEXT,
  quote_amount DECIMAL(10,2),
  quote_valid_until DATE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

#### Tabla `notifications`
```sql
CREATE TABLE notifications (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) NOT NULL,
  title TEXT NOT NULL,
  message TEXT NOT NULL,
  type TEXT DEFAULT 'info',
  read BOOLEAN DEFAULT FALSE,
  action_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### Componentes React

#### `AuthContext`
```typescript
interface AuthContextType {
  user: User | null;
  profile: Profile | null;
  session: Session | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: string | null }>;
  signUp: (email: string, password: string, fullName: string) => Promise<{ error: string | null }>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<{ error: string | null }>;
  updateProfile: (data: Partial<Profile>) => Promise<{ error: string | null }>;
}
```

#### `useQuotations` Hook
```typescript
interface Quotation {
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
```

## 🔧 Instalación y Configuración

### 1. Dependencias de Supabase

```bash
npm install @supabase/supabase-js
```

### 2. Variables de Entorno

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Optional: Email Configuration
RESEND_API_KEY=your_resend_api_key
FROM_EMAIL=noreply@liderflexhidraulica.cl

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 3. Configuración de Supabase

1. Crear proyecto en [Supabase](https://app.supabase.com/)
2. Ejecutar el esquema SQL de `supabase/schema.sql`
3. Configurar políticas RLS (Row Level Security)
4. Habilitar autenticación por email

### 4. Configuración de Autenticación

En Supabase Dashboard → Authentication → Settings:

- **Email confirmations**: Habilitado
- **Email change confirmations**: Habilitado
- **Secure password change**: Habilitado
- **Custom SMTP**: Opcional (usar Resend o similar)

## 💻 Uso del Sistema

### Registro de Usuario

```typescript
const { signUp, loading } = useAuth();

const handleRegister = async () => {
  const { error } = await signUp(email, password, fullName);
  if (error) {
    // Manejar error
  } else {
    // Usuario creado exitosamente
  }
};
```

### Crear Cotización

```typescript
const { createQuotation } = useQuotations();

const handleCreateQuotation = async () => {
  const { data, error } = await createQuotation({
    items: cartItems,
    notes: "Requerimientos especiales..."
  });
  
  if (error) {
    // Manejar error
  } else {
    // Cotización creada: data.quotation_number
  }
};
```

### Dashboard de Usuario

El dashboard muestra:
- **Estadísticas** de cotizaciones
- **Historial reciente** de solicitudes
- **Acciones rápidas** (nueva cotización, perfil)
- **Estado del perfil** y información de contacto

## 🎨 Diseño y UX

### Componentes UI Modernos

- **Modales deslizantes** con animaciones suaves
- **Formularios intuitivos** con validación en tiempo real
- **Estados de carga** contextuales
- **Mensajes de error/éxito** informativos
- **Navegación fluida** entre estados

### Paleta de Colores Consistente

- **Obsidian** (#0B1215) - Texto principal y fondos oscuros
- **Amarillo primario** (#EBB201) - Botones de acción y acentos
- **Grises** - Textos secundarios y bordes
- **Verdes/Rojos** - Estados de éxito/error

### Responsividad

- **Mobile-first** design
- **Breakpoints** optimizados para tablet y desktop
- **Touch-friendly** interactions
- **Accesibilidad** básica implementada

## 🔐 Seguridad

### Row Level Security (RLS)

```sql
-- Los usuarios solo pueden ver sus propios datos
CREATE POLICY "Users can view own profile" ON profiles
  FOR SELECT USING (auth.uid() = id);

-- Los usuarios solo pueden actualizar su propio perfil
CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);
```

### Validaciones

- **Email único** en base de datos
- **Contraseñas seguras** (mínimo 8 caracteres)
- **Validación de tokens** JWT automática
- **Sanitización** de datos de entrada

## 📊 Estados de Cotización

| Estado | Descripción | Usuario Puede |
|--------|-------------|---------------|
| **pending** | Recién creada, esperando revisión | Editar, Eliminar |
| **processing** | En revisión por administrador | Solo ver |
| **quoted** | Cotización lista, esperando respuesta | Aprobar/Rechazar |
| **approved** | Aprobada por usuario | Ver detalles |
| **rejected** | Rechazada por usuario | Ver detalles |
| **completed** | Proceso completado | Ver historial |

## 🔄 Flujos de Usuario

### Nuevo Usuario
1. **Registro** → Confirmación email → **Login** → **Dashboard**

### Cotización Nueva
1. **Agregar productos** → **Carrito** → **Login/Register** → **Enviar cotización** → **Dashboard**

### Seguimiento
1. **Dashboard** → **Mis Cotizaciones** → **Detalle específico** → **Acciones disponibles**

## 🚀 Próximas Mejoras

### Funcionalidades Pendientes

- [ ] **Notificaciones push** en navegador
- [ ] **Export PDF** de cotizaciones
- [ ] **Chat en tiempo real** con soporte
- [ ] **Integración WhatsApp** Business
- [ ] **Sistema de favoritos** de productos
- [ ] **Historial de compras** recurrentes
- [ ] **Panel de administración** completo
- [ ] **Analytics** de usuario avanzado

### Optimizaciones

- [ ] **Caching** con React Query
- [ ] **Lazy loading** de componentes pesados
- [ ] **Service Workers** para offline
- [ ] **Optimización** de imágenes automática

## 📱 Testing

### Unit Tests
```bash
# Instalar dependencias de testing
npm install --save-dev @testing-library/react @testing-library/jest-dom

# Ejecutar tests
npm run test
```

### E2E Tests
```bash
# Instalar Playwright
npm install --save-dev @playwright/test

# Ejecutar tests E2E
npm run test:e2e
```

## 🤝 Contribuir

1. **Fork** el proyecto
2. **Crear branch** para feature (`git checkout -b feature/nueva-funcionalidad`)
3. **Commit** cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. **Push** a branch (`git push origin feature/nueva-funcionalidad`)
5. **Crear Pull Request**

## 📞 Soporte

Para soporte técnico o preguntas sobre la implementación:

- **Email**: desarrollo@liderflexhidraulica.cl
- **Documentation**: [docs.liderflexhidraulica.cl](https://docs.liderflexhidraulica.cl)
- **Issues**: [GitHub Issues](https://github.com/liderflex/web/issues)

---

## ✅ Checklist de Implementación

- [x] **Configuración Supabase** - Cliente y variables de entorno
- [x] **Esquema de Base de Datos** - Tablas, índices, RLS, triggers
- [x] **Sistema de Autenticación** - Login, registro, recuperación
- [x] **Gestión de Perfiles** - CRUD completo de información de usuario
- [x] **Sistema de Cotizaciones** - Creación, seguimiento, estados
- [x] **Dashboard de Usuario** - Estadísticas, historial, acciones
- [x] **Integración con Header** - Dropdown de usuario, autenticación
- [x] **Cart Integration** - Solicitar login, crear cotizaciones
- [x] **Notificaciones** - Sistema básico implementado
- [x] **Documentación** - Guía completa de uso y desarrollo

**Sistema completamente funcional y listo para producción** 🎉