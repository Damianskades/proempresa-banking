# 🏦 Financiera Proempresa — Home Banking

## 📁 Estructura
```
proempresa-banking/
  frontend/   → React + Tailwind + Supabase
  backend/    → FastAPI
```

---

## ⚙️ SUPABASE — Configuración (primero esto)

1. Ir a https://supabase.com → crear proyecto gratis
2. En **Authentication > Providers** → Email habilitado (ya viene por defecto)
3. Crear un usuario de prueba en **Authentication > Users → Add user**
4. Copiar tus claves de **Settings > API**:
   - Project URL
   - anon public key

---

## 🖥️ FRONTEND

```bash
cd proempresa-banking/frontend

# 1. Copiar variables de entorno
cp .env.example .env
# Editar .env con tus claves de Supabase

# 2. Instalar dependencias
npm install

# 3. Ejecutar
npm run dev
# Abre: http://localhost:3000
```

---

## 🐍 BACKEND (opcional para el flujo evaluado)

```bash
cd proempresa-banking/backend

pip install -r requirements.txt

uvicorn main:app --reload --port 8000
# Abre: http://localhost:8000
```

---

## 🗂️ .env del frontend

```
VITE_SUPABASE_URL=https://xxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJ...
```

---

## ✅ Flujo evaluado

| Paso | Ruta |
|------|------|
| Home + branding | `/` |
| Banca por Internet | `/banca` |
| Login | `/login` |
| Dashboard | `/dashboard` |
