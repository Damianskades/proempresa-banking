import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'

export default function Login() {
  const nav = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')
    setLoading(true)

    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      setError('Credenciales incorrectas. Verifica tu correo y contraseña.')
      setLoading(false)
      return
    }

    setSuccess('¡Acceso exitoso! Redirigiendo al dashboard...')
    setTimeout(() => nav('/dashboard'), 1500)
  }

  return (
    <div className="min-h-screen bg-proempresa-lightgreen flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-proempresa-green px-8 py-8 text-center">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-proempresa-green font-display font-bold text-2xl">P</span>
            </div>
            <h1 className="text-white font-display text-2xl font-bold">PROEMPRESA</h1>
            <p className="text-green-200 text-xs tracking-widest mt-1">BANCA POR INTERNET</p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="px-8 py-8">
            <h2 className="text-proempresa-darkgreen font-semibold text-lg mb-6 text-center">Ingresa a tu cuenta</h2>

            {/* Error */}
            {error && (
              <div className="bg-red-50 border border-red-300 text-red-700 rounded-xl px-4 py-3 mb-4 text-sm flex items-start gap-2">
                <span>❌</span><span>{error}</span>
              </div>
            )}

            {/* Success */}
            {success && (
              <div className="bg-green-50 border border-green-300 text-green-700 rounded-xl px-4 py-3 mb-4 text-sm flex items-start gap-2">
                <span>✅</span><span>{success}</span>
              </div>
            )}

            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-600 mb-1">Correo electrónico</label>
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="usuario@correo.com"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-proempresa-green"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-600 mb-1">Contraseña</label>
              <input
                type="password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-proempresa-green"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-proempresa-green text-white font-bold py-3 rounded-full hover:bg-proempresa-darkgreen transition-colors disabled:opacity-60"
            >
              {loading ? 'Verificando...' : 'Ingresar'}
            </button>

            <div className="mt-4 text-center">
              <button type="button" onClick={() => nav('/banca')} className="text-proempresa-green text-sm hover:underline">
                ← Volver
              </button>
            </div>
          </form>
        </div>

        <p className="text-center text-gray-400 text-xs mt-6">🔒 Conexión segura · Financiera Proempresa S.A.</p>
      </div>
    </div>
  )
}
