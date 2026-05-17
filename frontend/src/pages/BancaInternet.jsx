import { useNavigate } from 'react-router-dom'

export default function BancaInternet() {
  const nav = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-proempresa-darkgreen to-proempresa-green flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 opacity-5" style={{backgroundImage:'repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)', backgroundSize:'20px 20px'}}></div>

      <div className="relative z-10 w-full max-w-md text-center">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl">
            <span className="text-proempresa-green font-display font-bold text-4xl">P</span>
          </div>
        </div>
        <p className="text-green-300 text-xs tracking-widest mb-1 uppercase">Financiera</p>
        <h1 className="font-display text-4xl text-white font-bold mb-2">PROEMPRESA</h1>
        <p className="text-green-200 text-sm mb-10">Banca por Internet</p>

        {/* Zona segura */}
        <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8 mb-6">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-proempresa-gold text-xl">🔒</span>
            <p className="text-white font-semibold">Zona Segura</p>
          </div>
          <p className="text-green-200 text-sm leading-relaxed">
            Bienvenido a la plataforma oficial de Financiera Proempresa. Tu sesión está protegida con encriptación SSL de 256 bits.
          </p>
        </div>

        <button
          onClick={() => nav('/login')}
          className="w-full bg-proempresa-gold text-white font-bold py-4 rounded-full text-lg hover:brightness-110 transition-all shadow-xl"
        >
          Ingresar a mi cuenta →
        </button>

        <button onClick={() => nav('/')} className="mt-4 text-green-300 text-sm hover:text-white transition-colors">
          ← Volver al inicio
        </button>
      </div>

      <p className="absolute bottom-6 text-green-400 text-xs">© 2025 Financiera Proempresa · Supervisada por la SBS</p>
    </div>
  )
}
