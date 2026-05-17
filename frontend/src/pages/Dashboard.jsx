import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'

export default function Dashboard() {
  const nav = useNavigate()
  const [user, setUser] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setUser(data.session?.user))
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    nav('/')
  }

  const nombre = user?.user_metadata?.nombre || user?.email?.split('@')[0] || 'Cliente'

  return (
    <div className="min-h-screen bg-gray-50 font-body">
      {/* Navbar */}
      <nav className="bg-proempresa-green px-6 py-4 flex items-center justify-between shadow">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <span className="text-proempresa-green font-bold text-sm">P</span>
          </div>
          <span className="text-white font-display font-bold">PROEMPRESA</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-green-200 text-sm hidden md:block">{user?.email}</span>
          <button onClick={handleLogout} className="bg-white/20 text-white text-sm px-4 py-1.5 rounded-full hover:bg-white/30 transition">
            Cerrar sesión
          </button>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Saludo C5 */}
        <div className="bg-gradient-to-r from-proempresa-green to-proempresa-darkgreen rounded-2xl p-6 text-white mb-6">
          <p className="text-green-300 text-sm mb-1">Bienvenido de vuelta 👋</p>
          <h1 className="font-display text-3xl font-bold">{nombre.toUpperCase()}</h1>
          <p className="text-green-200 text-sm mt-1">{user?.email} · DNI: 74{Math.floor(Math.random()*1000000).toString().padStart(6,'0')}</p>
        </div>

        {/* Saldo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {[
            { label: 'Saldo Disponible', value: 'S/ 4,250.00', icon: '💰', color: 'bg-proempresa-green' },
            { label: 'Crédito Activo', value: 'S/ 12,000.00', icon: '📋', color: 'bg-proempresa-gold' },
            { label: 'Ahorros', value: 'S/ 1,800.50', icon: '🏦', color: 'bg-blue-500' },
          ].map(c => (
            <div key={c.label} className="bg-white rounded-2xl p-6 shadow-sm flex items-center gap-4">
              <div className={`${c.color} w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0`}>{c.icon}</div>
              <div>
                <p className="text-gray-500 text-xs">{c.label}</p>
                <p className="font-bold text-gray-800 text-lg">{c.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Últimos movimientos */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="font-semibold text-gray-700 mb-4">Últimos Movimientos</h2>
          <div className="space-y-3">
            {[
              { desc: 'Depósito en efectivo', fecha: '14/05/2025', monto: '+S/ 500.00', tipo: 'entrada' },
              { desc: 'Pago cuota crédito', fecha: '12/05/2025', monto: '-S/ 850.00', tipo: 'salida' },
              { desc: 'Transferencia recibida', fecha: '10/05/2025', monto: '+S/ 1,200.00', tipo: 'entrada' },
              { desc: 'Pago de servicios', fecha: '08/05/2025', monto: '-S/ 120.00', tipo: 'salida' },
            ].map((m, i) => (
              <div key={i} className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs ${m.tipo === 'entrada' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {m.tipo === 'entrada' ? '↓' : '↑'}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">{m.desc}</p>
                    <p className="text-xs text-gray-400">{m.fecha}</p>
                  </div>
                </div>
                <span className={`font-semibold text-sm ${m.tipo === 'entrada' ? 'text-green-600' : 'text-red-500'}`}>{m.monto}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
