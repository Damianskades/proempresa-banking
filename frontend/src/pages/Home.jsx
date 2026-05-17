import { useNavigate } from 'react-router-dom'

export default function Home() {
  const nav = useNavigate()

  return (
    <div className="min-h-screen bg-white font-body">
      {/* NAVBAR */}
      <nav className="bg-proempresa-green px-8 py-4 flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <span className="text-proempresa-green font-display font-bold text-lg">P</span>
          </div>
          <div>
            <p className="text-white font-display text-xl font-bold leading-none">PROEMPRESA</p>
            <p className="text-green-200 text-xs tracking-widest">FINANCIERA</p>
          </div>
        </div>
        <button
          onClick={() => nav('/banca')}
          className="bg-proempresa-gold text-white font-semibold px-6 py-2 rounded-full hover:brightness-110 transition-all shadow-md text-sm"
        >
          🔒 Banca por Internet
        </button>
      </nav>

      {/* HERO */}
      <section className="bg-gradient-to-br from-proempresa-green via-proempresa-darkgreen to-proempresa-green text-white py-24 px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage:'radial-gradient(circle at 20% 80%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)', backgroundSize:'40px 40px'}}></div>
        <div className="relative max-w-3xl mx-auto">
          <p className="text-green-300 text-sm tracking-widest mb-2 uppercase">Tu socio financiero de confianza</p>
          <h1 className="font-display text-5xl font-bold mb-6 leading-tight">
            Impulsa tu negocio<br/>con Proempresa
          </h1>
          <p className="text-green-100 text-lg mb-10 max-w-xl mx-auto">
            Más de 25 años brindando soluciones crediticias a micro y pequeñas empresas del Perú.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => nav('/banca')}
              className="bg-proempresa-gold text-white font-bold px-8 py-4 rounded-full hover:brightness-110 transition-all shadow-xl text-base"
            >
              🔒 Banca por Internet
            </button>
            <button className="border-2 border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white hover:text-proempresa-green transition-all text-base">
              Conoce nuestros productos
            </button>
          </div>
        </div>
      </section>

      {/* PRODUCTOS */}
      <section className="py-20 px-8 bg-proempresa-lightgreen">
        <h2 className="text-center font-display text-3xl text-proempresa-darkgreen mb-12">Nuestros Productos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { icon: '💼', title: 'Crédito Empresarial', desc: 'Financiamiento para capital de trabajo y activos fijos.' },
            { icon: '🏦', title: 'Cuenta de Ahorros', desc: 'Ahorra y haz crecer tu dinero con tasas competitivas.' },
            { icon: '📲', title: 'Banca Digital', desc: 'Gestiona tus finanzas desde cualquier lugar, 24/7.' },
          ].map(p => (
            <div key={p.title} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="text-4xl mb-4">{p.icon}</div>
              <h3 className="font-semibold text-proempresa-darkgreen text-lg mb-2">{p.title}</h3>
              <p className="text-gray-500 text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-proempresa-darkgreen text-green-300 text-center py-6 text-sm">
        © 2025 Financiera Proempresa S.A. — Supervisada por la SBS
      </footer>
    </div>
  )
}
