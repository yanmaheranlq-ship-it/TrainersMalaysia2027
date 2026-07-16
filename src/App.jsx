import { useState } from 'react'
import './App.css'

const features = [
  { icon: '⚡', title: 'Pantas', desc: 'Dibina dengan Vite untuk kelajuan optimum.', color: 'var(--warning-500)' },
  { icon: '🎨', title: 'Moden', desc: 'Reka bentuk kemas dengan animasi halus.', color: 'var(--primary-500)' },
  { icon: '🔒', title: 'Selamat', desc: 'Disokong Supabase dengan RLS aktif.', color: 'var(--success-500)' },
  { icon: '📱', title: 'Responsif', desc: 'Paparan optimum di semua saiz skrin.', color: 'var(--accent-500)' },
]

export default function App() {
  const [count, setCount] = useState(0)
  const [active, setActive] = useState(0)

  return (
    <div className="app">
      <nav className="nav">
        <div className="nav-logo">
          <span className="logo-dot" />
          <span>Paparan</span>
        </div>
        <div className="nav-links">
          <a href="#utama">Utama</a>
          <a href="#fitur">Fitur</a>
          <a href="#demo">Demo</a>
        </div>
        <button className="btn-ghost">Hubungi</button>
      </nav>

      <header id="utama" className="hero">
        <div className="hero-badge">
          <span className="badge-dot" /> Versi 1.0 — Kini tersedia
        </div>
        <h1 className="hero-title">
          Paparan Interaktif<br />
          <span className="gradient-text">yang menarik perhatian</span>
        </h1>
        <p className="hero-sub">
          Aplikasi web moden dibina dengan React + Vite, direka dengan teliti
          untuk pengalaman pengguna yang memuaskan.
        </p>
        <div className="hero-actions">
          <button className="btn-primary" onClick={() => setCount(c => c + 1)}>
            Mula Sekarang
          </button>
          <button className="btn-secondary">Ketahui Lagi</button>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <strong>{count}</strong>
            <span>Klik dikira</span>
          </div>
          <div className="stat">
            <strong>4</strong>
            <span>Fitur utama</span>
          </div>
          <div className="stat">
            <strong>100%</strong>
            <span>Responsif</span>
          </div>
        </div>
      </header>

      <section id="fitur" className="features">
        <h2 className="section-title">Kenapa pilih kami?</h2>
        <p className="section-sub">Semua yang anda perlukan dalam satu paparan</p>
        <div className="feature-grid">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`feature-card ${active === i ? 'active' : ''}`}
              style={{ animationDelay: `${i * 100}ms` }}
              onClick={() => setActive(i)}
            >
              <div className="feature-icon" style={{ background: f.color }}>
                <span>{f.icon}</span>
              </div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="demo" className="demo">
        <h2 className="section-title">Cuba interaksi</h2>
        <p className="section-sub">Klik kad di atas untuk aktifkan</p>
        <div className="demo-panel">
          <div className="demo-display">
            <span className="demo-label">Fitur dipilih</span>
            <span className="demo-value">{features[active].title}</span>
            <span className="demo-desc">{features[active].desc}</span>
          </div>
          <div className="demo-counter">
            <span className="demo-label">Jumlah klik</span>
            <span className="demo-number">{count}</span>
            <button className="btn-reset" onClick={() => setCount(0)}>
              Set semula
            </button>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>Dibina dengan React + Vite • {new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}
