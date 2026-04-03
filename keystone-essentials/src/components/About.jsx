export default function About() {
  const values = [
    { icon: '🧬', title: 'Science First', desc: 'Every formula is developed with dermatologist input and clinically tested ingredients.' },
    { icon: '🌿', title: 'Clean Ingredients', desc: 'No parabens, no sulfates. We believe effective skincare should also be responsible.' },
    { icon: '✦', title: 'Proven Results', desc: 'Visible improvement in as little as 4 weeks, backed by real customer outcomes.' },
  ]

  return (
    <section id="about" style={{ background: 'var(--warm-white)' }}>
      <div className="container">
        <div style={{ display: 'flex', gap: 80, alignItems: 'center', flexWrap: 'wrap' }}>
          {/* Left */}
          <div style={{ flex: '1 1 340px' }}>
            <p className="section-label">Who We Are</p>
            <h2 className="section-title">Built on a Foundation of Skin Science</h2>
            <div className="divider" />
            <p style={{ color: 'var(--muted)', lineHeight: 1.9, marginBottom: 20 }}>
              Keystone Essentials is the skincare arm of Cornerstone Marketplace Solutions — a brand built to bring premium, results-driven skincare to everyday people.
            </p>
            <p style={{ color: 'var(--muted)', lineHeight: 1.9, marginBottom: 36 }}>
              Our three product lines — Dermatrix, BioClear, and Skin Labs — each target a specific skin concern with precision-formulated solutions that actually work.
            </p>
            <a href="#products" className="btn btn-outline">See Our Lines</a>
          </div>

          {/* Right - values */}
          <div style={{ flex: '1 1 340px', display: 'flex', flexDirection: 'column', gap: 28 }}>
            {values.map(v => (
              <div key={v.title} style={{
                display: 'flex', gap: 20, alignItems: 'flex-start',
                padding: 24, background: 'var(--cream)',
                border: '1px solid var(--border)', borderRadius: 2,
              }}>
                <span style={{ fontSize: 28, lineHeight: 1 }}>{v.icon}</span>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: 17, color: 'var(--dark)', marginBottom: 6 }}>{v.title}</h4>
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
