import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['About', 'Products', 'Contact']

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? 'rgba(250,247,242,0.97)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid #e8e0d5' : 'none',
      transition: 'all 0.4s ease',
      padding: '0 24px',
    }}>
      <div style={{
        maxWidth: 1100, margin: '0 auto',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: 70,
      }}>
        {/* Logo */}
        <a href="#" style={{ textDecoration: 'none' }}>
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: 20, color: 'var(--dark)', fontWeight: 700 }}>
            Keystone <span style={{ color: 'var(--gold)' }}>Essentials</span>
          </div>
          <div style={{ fontSize: 9, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--muted)', marginTop: 2 }}>
            Cornerstone Marketplace Solutions
          </div>
        </a>

        {/* Desktop nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 36 }} className="desktop-nav">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} style={{
              textDecoration: 'none', fontSize: 13, fontWeight: 500,
              letterSpacing: 1, textTransform: 'uppercase', color: 'var(--text)',
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.target.style.color = 'var(--gold)'}
              onMouseLeave={e => e.target.style.color = 'var(--text)'}
            >{l}</a>
          ))}
          <a
            href="https://www.amazon.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ padding: '10px 24px', fontSize: 12 }}
          >Shop Now</a>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none', background: 'none', border: 'none',
            cursor: 'pointer', flexDirection: 'column', gap: 5, padding: 4,
          }}
          className="hamburger"
          aria-label="Toggle menu"
        >
          {[0,1,2].map(i => (
            <span key={i} style={{
              display: 'block', width: 24, height: 2,
              background: 'var(--dark)', transition: 'all 0.3s',
            }} />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background: 'var(--cream)', borderTop: '1px solid var(--border)',
          padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 16,
        }}>
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{ textDecoration: 'none', fontSize: 14, fontWeight: 500, color: 'var(--text)', letterSpacing: 1, textTransform: 'uppercase' }}
            >{l}</a>
          ))}
          <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer"
            className="btn btn-primary" style={{ textAlign: 'center', marginTop: 8 }}>
            Shop Now
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}
