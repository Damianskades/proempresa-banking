import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import BancaInternet from './pages/BancaInternet'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import { useEffect, useState } from 'react'
import { supabase } from './lib/supabase'

function PrivateRoute({ children }) {
  const [session, setSession] = useState(undefined)

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSession(data.session))
    supabase.auth.onAuthStateChange((_e, s) => setSession(s))
  }, [])

  if (session === undefined) return <div className="min-h-screen bg-proempresa-green flex items-center justify-center text-white">Cargando...</div>
  return session ? children : <Navigate to="/login" />
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/banca" element={<BancaInternet />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
      </Routes>
    </BrowserRouter>
  )
}
