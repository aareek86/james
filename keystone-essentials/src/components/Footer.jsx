export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{
      background: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
      color: 'rgba(255,255,255,0.75)',
      padding: '80px 24px 40px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative element */}
      <div style={{
        position: 'absolute', top: 0, right: 0,
        width: 300, height: 300, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201,169,110,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 60, marginBottom: 60 }}>
          {/* Brand */}
          <div style={{ flex: '2 1 280px' }}>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: 24, color: 'white', fontWeight: 700, marginBottom: 8 }}>
              Keystone <span style={{ color: 'var(--gold)' }}>Essentials</span>
            </div>
            <div style={{ fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 24, fontWeight: 700 }}>
              Cornerstone Marketplace Solutions
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.8, maxWidth: 300, color: 'rgba(255,255,255,0.65)' }}>
              Premium skincare lines built on science, delivered through Amazon. Dermatrix · BioClear · Skin Labs.
            </p>
          </div>

          {/* Lines */}
          <div>
            <h5 style={{ color: 'white', fontSize: 12, letterSpacing: 2.5, textTransform: 'uppercase', marginBottom: 24, fontWeight: 700 }}>Product Lines</h5>
            {['Dermatrix', 'BioClear', 'Skin Labs'].map(l => (
              <a key={l} href="#shop"
                style={{ display: 'block', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: 14, marginBottom: 14, transition: 'all 0.2s', fontWeight: 500 }}
                onMouseEnter={e => { e.target.style.color = 'var(--gold)'; e.target.style.transform = 'translateX(4px)' }}
                onMouseLeave={e => { e.target.style.color = 'rgba(255,255,255,0.6)'; e.target.style.transform = 'translateX(0)' }}
              >{l}</a>
            ))}
          </div>

          {/* Quick links */}
          <div>
            <h5 style={{ color: 'white', fontSize: 12, letterSpacing: 2.5, textTransform: 'uppercase', marginBottom: 24, fontWeight: 700 }}>Quick Links</h5>
            {[['About', '#about'], ['Products', '#products'], ['Shop', '#shop'], ['Contact', '#contact']].map(([label, href]) => (
              <a key={label} href={href}
                style={{ display: 'block', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: 14, marginBottom: 14, transition: 'all 0.2s', fontWeight: 500 }}
                onMouseEnter={e => { e.target.style.color = 'var(--gold)'; e.target.style.transform = 'translateX(4px)' }}
                onMouseLeave={e => { e.target.style.color = 'rgba(255,255,255,0.6)'; e.target.style.transform = 'translateX(0)' }}
              >{label}</a>
            ))}
          </div>

          {/* CTA */}
          <div>
            <h5 style={{ color: 'white', fontSize: 12, letterSpacing: 2.5, textTransform: 'uppercase', marginBottom: 24, fontWeight: 700 }}>Shop Now</h5>
            <p style={{ fontSize: 14, lineHeight: 1.8, marginBottom: 24, color: 'rgba(255,255,255,0.65)' }}>
              All products available on Amazon with Prime shipping and easy returns.
            </p>
            <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ fontSize: 12 }}>
              Amazon Store →
            </a>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: 32,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16,
        }}>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>© {year} Keystone Essentials · Cornerstone Marketplace Solutions. All rights reserved.</p>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>Dermatrix · BioClear · Skin Labs</p>
        </div>
      </div>
    </footer>
  )
}
