const lines = [
  {
    name: 'Dermatrix',
    tagline: 'Advanced Repair',
    color: '#1a1a1a',
    accent: '#c9a96e',
    desc: 'Targeted repair for damaged, stressed skin. Dermatrix combines peptides and retinol alternatives to visibly reduce fine lines, restore elasticity, and rebuild the skin barrier.',
    features: ['Peptide Complex', 'Barrier Repair', 'Anti-Aging Formula', 'Fragrance-Free'],
    badge: 'Best Seller',
  },
  {
    name: 'BioClear',
    tagline: 'Clarifying Care',
    color: '#2d4a3e',
    accent: '#5a9e7a',
    desc: 'Designed for acne-prone and congested skin. BioClear uses salicylic acid, niacinamide, and botanical extracts to clear pores, reduce breakouts, and even skin tone.',
    features: ['Salicylic Acid 2%', 'Niacinamide 10%', 'Pore Minimizing', 'Oil Control'],
    badge: 'Fan Favorite',
  },
  {
    name: 'Skin Labs',
    tagline: 'Lab Precision',
    color: '#1e2d4a',
    accent: '#6a8fc4',
    desc: 'Our most advanced line. Skin Labs brings lab-grade actives — vitamin C, hyaluronic acid, and growth factors — into a daily routine for radiant, hydrated, youthful skin.',
    features: ['Vitamin C 15%', 'Hyaluronic Acid', 'Growth Factors', 'Brightening'],
    badge: 'Premium',
  },
]

export default function Products() {
  return (
    <section id="products" style={{ background: 'var(--cream)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 80 }}>
          <p className="section-label">Our Product Lines</p>
          <h2 className="section-title" style={{ margin: '0 auto 20px' }}>Three Lines. One Mission.</h2>
          <p style={{ color: 'var(--muted)', maxWidth: 550, margin: '0 auto', fontSize: 16, lineHeight: 1.7 }}>
            Each line is purpose-built for a specific skin need — find yours and shop directly on Amazon.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 32 }}>
          {lines.map((line, i) => (
            <div key={line.name} style={{
              background: 'white',
              border: '1.5px solid var(--border)',
              borderRadius: 12,
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              animation: `fadeInUp 0.6s ease-out ${i * 0.1}s both`,
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-12px)'; e.currentTarget.style.boxShadow = '0 24px 60px rgba(0,0,0,0.12)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
            >
              {/* Card header */}
              <div style={{
                background: line.color, padding: '48px 32px',
                position: 'relative', overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute', top: -30, right: -30,
                  width: 150, height: 150, borderRadius: '50%',
                  background: `${line.accent}25`,
                }} />
                <span style={{
                  display: 'inline-block', padding: '6px 14px',
                  background: line.accent, color: 'white',
                  fontSize: 10, letterSpacing: 2, textTransform: 'uppercase',
                  borderRadius: 20, marginBottom: 20, fontWeight: 700,
                }}>{line.badge}</span>
                <h3 style={{
                  fontFamily: 'var(--font-serif)', fontSize: 36,
                  color: 'white', marginBottom: 6, fontWeight: 700,
                }}>{line.name}</h3>
                <p style={{ fontSize: 12, color: line.accent, letterSpacing: 2.5, textTransform: 'uppercase', fontWeight: 600 }}>
                  {line.tagline}
                </p>
              </div>

              {/* Card body */}
              <div style={{ padding: '32px' }}>
                <p style={{ color: 'var(--muted)', fontSize: 15, lineHeight: 1.8, marginBottom: 28 }}>{line.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 32 }}>
                  {line.features.map(f => (
                    <span key={f} style={{
                      padding: '7px 14px', fontSize: 12, fontWeight: 600,
                      background: 'var(--cream)', border: '1.5px solid var(--border)',
                      borderRadius: 6, color: 'var(--text)', letterSpacing: 0.5,
                    }}>{f}</span>
                  ))}
                </div>
                <a
                  href="#shop"
                  className="btn btn-primary"
                  style={{ width: '100%', textAlign: 'center', display: 'block' }}
                >
                  Shop {line.name} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
