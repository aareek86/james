export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{
      background: 'var(--dark)', color: 'rgba(255,255,255,0.7)',
      padding: '60px 24px 32px',
    }}>
      <div className="container">
        <div style={{ display: 'flex', gap: 60, flexWrap: 'wrap', marginBottom: 48 }}>
          {/* Brand */}
          <div style={{ flex: '2 1 260px' }}>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: 22, color: 'white', fontWeight: 700, marginBottom: 6 }}>
              Keystone <span style={{ color: 'var(--gold)' }}>Essentials</span>
            </div>
            <div style={{ fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 20 }}>
              Cornerstone Marketplace Solutions
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.8, maxWidth: 300 }}>
              Premium skincare lines built on science, delivered through Amazon. Dermatrix · BioClear · Skin Labs.
            </p>
          </div>

          {/* Lines */}
          <div style={{ flex: '1 1 160px' }}>
            <h5 style={{ color: 'white', fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 20, fontWeight: 600 }}>Product Lines</h5>
            {['Dermatrix', 'BioClear', 'Skin Labs'].map(l => (
              <a key={l} href="https://www.amazon.com" target="_blank" rel="noopener noreferrer"
                style={{ display: 'block', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: 14, marginBottom: 12, transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = 'var(--gold)'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.6)'}
              >{l}</a>
            ))}
          </div>

          {/* Quick links */}
          <div style={{ flex: '1 1 160px' }}>
            <h5 style={{ color: 'white', fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 20, fontWeight: 600 }}>Quick Links</h5>
            {[['About', '#about'], ['Products', '#products'], ['Contact', '#contact'], ['Amazon Store', 'https://www.amazon.com']].map(([label, href]) => (
              <a key={label} href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                style={{ display: 'block', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: 14, marginBottom: 12, transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = 'var(--gold)'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.6)'}
              >{label}</a>
            ))}
          </div>

          {/* CTA */}
          <div style={{ flex: '1 1 200px' }}>
            <h5 style={{ color: 'white', fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 20, fontWeight: 600 }}>Shop Now</h5>
            <p style={{ fontSize: 13, lineHeight: 1.7, marginBottom: 20 }}>
              All products available on Amazon with Prime shipping and easy returns.
            </p>
            <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ fontSize: 12 }}>
              Amazon Store →
            </a>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: 28,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12,
        }}>
          <p style={{ fontSize: 12 }}>© {year} Keystone Essentials · Cornerstone Marketplace Solutions. All rights reserved.</p>
          <p style={{ fontSize: 12 }}>Dermatrix · BioClear · Skin Labs</p>
        </div>
      </div>
    </footer>
  )
}
