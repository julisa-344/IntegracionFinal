# DevTree - Árbol de Enlaces Personales

## Descripción del Proyecto

DevTree es una aplicación web que permite a los usuarios crear y compartir su propio árbol de enlaces personales, similar a Linktree. Los usuarios pueden personalizar su perfil con un handle único, descripción, imagen y enlaces a sus redes sociales. La aplicación incluye un sistema de contador de visitas en tiempo real utilizando WebSockets.

### Características Principales

- ✨ Perfil personalizado con handle único
- 🎨 Modo oscuro/claro con persistencia en localStorage
- 📊 Contador de visitas en tiempo real con Socket.IO
- 🔗 Gestión de enlaces a redes sociales
- 📱 Diseño responsive con Tailwind CSS
- ⚡ Interfaz moderna construida con React + TypeScript
- 🚀 Backend con Express + TypeScript

---

## Tecnologías Utilizadas

### Frontend
- **React 18.2** - Librería de UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool y dev server
- **React Router DOM** - Navegación
- **TanStack Query (React Query)** - Manejo de estado del servidor
- **React Hook Form** - Gestión de formularios
- **Tailwind CSS** - Estilos y diseño
- **Headless UI** - Componentes accesibles
- **Heroicons** - Iconos
- **Socket.IO Client** - Comunicación en tiempo real
- **Axios** - Cliente HTTP
- **Sonner** - Notificaciones toast

### Backend
- **Node.js** - Runtime
- **Express** - Framework web
- **TypeScript** - Tipado estático
- **MongoDB + Mongoose** - Base de datos
- **Socket.IO** - WebSockets para tiempo real
- **JWT** - Autenticación
- **Bcrypt** - Hash de contraseñas
- **Cloudinary** - Gestión de imágenes
- **Express Validator** - Validación de datos

---

## Requisitos Previos

Antes de empezar, asegúrate de tener instalado:

- **Node.js** (versión 18 o superior) - [Descargar aquí](https://nodejs.org/)
- **npm** (viene con Node.js)
- **Git** - [Descargar aquí](https://git-scm.com/)
- **MongoDB** (local o cuenta en MongoDB Atlas) - [Más info](https://www.mongodb.com/)

Para verificar que tienes todo instalado correctamente, ejecuta:

```bash
node --version
npm --version
git --version
```

---

## Instalación y Configuración

### 1. Clonar el Repositorio

```bash
git clone https://github.com/julisa-344/IntegracionFinal.git
cd IntegracionFinal
```

### 2. Configurar el Backend

```bash
# Ir a la carpeta del backend
cd backend

# Instalar dependencias
npm install

# Crear archivo .env en la raíz de backend/
# Copia el siguiente contenido y ajusta los valores:
```

Crea un archivo `.env` en `backend/` con el siguiente contenido:

```env
# Puerto del servidor
PORT=4000

# URL de MongoDB
MONGO_URI=mongodb://localhost:27017/devtree
# O si usas MongoDB Atlas:
# MONGO_URI=mongodb+srv://usuario:password@cluster.mongodb.net/devtree

# JWT Secret (cambia esto por algo seguro)
JWT_SECRET=tu-clave-secreta-muy-segura-aqui

# Cloudinary (opcional - para subir imágenes)
CLOUDINARY_CLOUD_NAME=tu-cloud-name
CLOUDINARY_API_KEY=tu-api-key
CLOUDINARY_API_SECRET=tu-api-secret

# CORS Origins (URL del frontend)
CORS_ORIGIN=http://localhost:5173
```

### 3. Configurar el Frontend

```bash
# Desde la raíz del proyecto
cd frontend

# Instalar dependencias
npm install

# Crear archivo .env en la raíz de frontend/
```

Crea un archivo `.env` en `frontend/` con el siguiente contenido:

```env
# URL del backend
VITE_API_URL=http://localhost:4000
```

---

## Ejecutar el Proyecto

### Opción 1: Ejecutar Backend y Frontend por Separado

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

El servidor backend debería iniciar en `http://localhost:4000`

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

El frontend debería iniciar en `http://localhost:5173`

### Opción 2: Usar Script Concurrente (Recomendado)

Si quieres ejecutar ambos al mismo tiempo desde la raíz del proyecto, puedes instalar `concurrently`:

```bash
# En la raíz del proyecto
npm install -g concurrently

# Luego ejecutar ambos:
concurrently "cd backend && npm run dev" "cd frontend && npm run dev"
```

---

## Estructura del Proyecto

```
IntegracionFinal/
├── backend/
│   ├── src/
│   │   ├── config/          # Configuraciones (Cloudinary, DB)
│   │   ├── handlers/        # Controladores
│   │   ├── models/          # Modelos de MongoDB
│   │   ├── utils/           # Utilidades (auth, jwt)
│   │   ├── index.ts         # Punto de entrada
│   │   ├── server.ts        # Configuración de Express
│   │   └── socket.ts        # Configuración de Socket.IO
│   ├── package.json
│   └── tsconfig.json
│
├── frontend/
│   ├── src/
│   │   ├── api/             # Funciones de API
│   │   ├── components/      # Componentes React
│   │   ├── hooks/           # Custom hooks
│   │   ├── types/           # Tipos TypeScript
│   │   ├── views/           # Páginas/Vistas
│   │   ├── main.tsx         # Punto de entrada
│   │   ├── router.tsx       # Configuración de rutas
│   │   └── index.css        # Estilos globales
│   ├── index.html
│   ├── package.json
│   ├── vite.config.ts
│   └── tailwind.config.js
│
└── README.md
```

---

## Scripts Disponibles

### Backend

```bash
npm run dev        # Inicia servidor en modo desarrollo con nodemon
npm run build      # Compila TypeScript a JavaScript
npm start          # Ejecuta versión compilada
```

### Frontend

```bash
npm run dev        # Inicia dev server de Vite
npm run build      # Compila para producción
npm run preview    # Preview de build de producción
npm run lint       # Ejecuta linter
```

---

## Características Implementadas

### ✅ Sistema de Perfiles
- Creación y edición de perfil de usuario
- Handle único para cada usuario
- Subida de imagen de perfil
- Descripción personalizable

### ✅ Gestión de Enlaces
- Agregar/editar/eliminar enlaces a redes sociales
- Habilitar/deshabilitar enlaces
- Ordenamiento drag & drop (funcionalidad preparada)

### ✅ Contador de Visitas en Tiempo Real
- Socket.IO para actualizaciones en tiempo real
- Contador sincronizado entre todas las sesiones
- Visualización en perfil público y privado

### ✅ Modo Oscuro
- Toggle de tema claro/oscuro
- Persistencia en localStorage
- Transiciones suaves
- Estilos adaptados en todos los componentes

### ✅ Vista Pública
- Perfil público accesible por handle: `/:handle`
- Visualización de enlaces activos
- Contador de visitas

---

## Solución de Problemas

### Error: "Cannot find module..."
```bash
# Elimina node_modules y reinstala
cd backend
rm -rf node_modules package-lock.json
npm install

cd ../frontend
rm -rf node_modules package-lock.json
npm install
```

### Error: "Port already in use"
```bash
# Backend (puerto 4000)
# Linux/Mac:
lsof -ti:4000 | xargs kill -9

# Windows:
netstat -ano | findstr :4000
taskkill /PID [número_PID] /F

# Frontend (puerto 5173) - similar al anterior
```

### Error de conexión MongoDB
- Verifica que MongoDB esté corriendo: `mongod --version`
- Si usas MongoDB Atlas, verifica tu IP en la whitelist
- Revisa el string de conexión en `.env`

### Estilos no se cargan
```bash
# Reconstruir Tailwind
cd frontend
npm run build
```

---

## Notas para el Equipo

### Convenciones de Código
- Usamos **TypeScript** estricto
- Nombres de componentes en **PascalCase**
- Nombres de archivos en **camelCase** o **PascalCase** según el contenido
- Usamos **React Hook Form** para formularios
- **TanStack Query** para estado del servidor
- Clases de Tailwind ordenadas: layout → spacing → typography → colors

### Git Workflow
```bash
# Crear nueva rama para feature
git checkout -b feature/nombre-feature

# Hacer commits descriptivos
git commit -m "Add: descripción de lo que agregaste"

# Push y crear PR
git push origin feature/nombre-feature
```

### Variables de Entorno
**IMPORTANTE:** Nunca subas archivos `.env` al repositorio. Ya están en `.gitignore`

---

## Despliegue (Producción)

### Frontend (Vercel/Netlify)
1. Conecta tu repositorio
2. Configura variables de entorno (`VITE_API_URL`)
3. Build command: `npm run build`
4. Output directory: `dist`

### Backend (Railway/Render)
1. Conecta tu repositorio
2. Configura todas las variables de entorno del `.env`
3. Start command: `npm start`
4. No olvides configurar MongoDB Atlas para producción

---

## Contacto y Soporte

**Equipo de Desarrollo:**
- Julisa - [GitHub](https://github.com/julisa-344)

**Profesor/Instructor:**
Si tienes alguna duda sobre la implementación o configuración, puedes revisar:
- El código fuente está completamente documentado
- Los commits tienen mensajes descriptivos
- Este README cubre la mayoría de casos de uso

---

## Licencia

Este proyecto fue desarrollado con fines educativos.

---

## Agradecimientos

Gracias al profesor y al equipo por el apoyo durante el desarrollo de este proyecto. 🚀

---

**¡Éxitos con el proyecto! 💪**
