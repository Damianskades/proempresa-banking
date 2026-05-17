from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os
from dotenv import load_dotenv

load_dotenv()
app = FastAPI(title="Proempresa Banking API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"banco": "Financiera Proempresa", "status": "activo"}

@app.get("/health")
def health():
    return {"status": "ok"}

# Nota: La autenticación la maneja Supabase directamente desde el frontend.
# Este backend puede extenderse para lógica adicional (créditos, pagos, etc.)
