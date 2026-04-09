export default function About() {
  const values = [
    { icon: '🧬', title: 'Science First', desc: 'Every formula is developed with dermatologist input and clinically tested ingredients.' },
    { icon: '🌿', title: 'Clean Ingredients', desc: 'No parabens, no sulfates. We believe effective skincare should also be responsible.' },
    { icon: '✦', title: 'Proven Results', desc: 'Visible improvement in as little as 4 weeks, backed by real customer outcomes.' },
  ]

  return (
    <section id="about" style={{ background: 'var(--warm-white)' }}>
      <div className="container">
        <div style={{ display: 'flex', gap: 100, alignItems: 'center', flexWrap: 'wrap' }}>
          {/* Left */}
          <div style={{ flex: '1 1 380px' }}>
            <p className="section-label">Who We Are</p>
            <h2 className="section-title">Built on a Foundation of Skin Science</h2>
            <div className="divider" />
            <p style={{ color: 'var(--muted)', lineHeight: 1.9, marginBottom: 24, fontSize: 16 }}>
              Keystone Essentials is the skincare arm of Cornerstone Marketplace Solutions — a brand built to bring premium, results-driven skincare to everyday people.
            </p>
            <p style={{ color: 'var(--muted)', lineHeight: 1.9, marginBottom: 40, fontSize: 16 }}>
              Our three product lines — Dermatrix, BioClear, and Skin Labs — each target a specific skin concern with precision-formulated solutions that actually work.
            </p>
            <a href="#shop" className="btn btn-outline">Explore Our Products</a>
          </div>

          {/* Right - values */}
          <div style={{ flex: '1 1 380px', display: 'flex', flexDirection: 'column', gap: 24 }}>
            {values.map((v, i) => (
              <div key={v.title} style={{
                display: 'flex', gap: 20, alignItems: 'flex-start',
                padding: 28, background: 'white',
                border: '1.5px solid var(--border)', borderRadius: 8,
                transition: 'all 0.3s ease',
                animation: `slideInRight 0.6s ease-out ${i * 0.1}s both`,
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateX(8px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.08)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateX(0)'; e.currentTarget.style.boxShadow = 'none' }}
              >
                <span style={{ fontSize: 32, lineHeight: 1, flexShrink: 0 }}>{v.icon}</span>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: 18, color: 'var(--dark)', marginBottom: 8, fontWeight: 700 }}>{v.title}</h4>
                  <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.7 }}>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
