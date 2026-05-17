# 🏦 Financiera Proempresa — Home Banking
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
cp .env.example .env
npm install
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
