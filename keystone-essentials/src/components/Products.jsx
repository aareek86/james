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
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <p className="section-label">Our Product Lines</p>
          <h2 className="section-title" style={{ margin: '0 auto 16px' }}>Three Lines. One Mission.</h2>
          <p style={{ color: 'var(--muted)', maxWidth: 500, margin: '0 auto', fontSize: 16 }}>
            Each line is purpose-built for a specific skin need — find yours and shop directly on Amazon.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 28 }}>
          {lines.map(line => (
            <div key={line.name} style={{
              background: 'white',
              border: '1px solid var(--border)',
              borderRadius: 2,
              overflow: 'hidden',
              transition: 'transform 0.3s, box-shadow 0.3s',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.1)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
            >
              {/* Card header */}
              <div style={{
                background: line.color, padding: '40px 32px',
                position: 'relative', overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute', top: -20, right: -20,
                  width: 120, height: 120, borderRadius: '50%',
                  background: `${line.accent}22`,
                }} />
                <span style={{
                  display: 'inline-block', padding: '4px 12px',
                  background: line.accent, color: 'white',
                  fontSize: 10, letterSpacing: 2, textTransform: 'uppercase',
                  borderRadius: 1, marginBottom: 16, fontWeight: 600,
                }}>{line.badge}</span>
                <h3 style={{
                  fontFamily: 'var(--font-serif)', fontSize: 32,
                  color: 'white', marginBottom: 4,
                }}>{line.name}</h3>
                <p style={{ fontSize: 12, color: line.accent, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 500 }}>
                  {line.tagline}
                </p>
              </div>

              {/* Card body */}
              <div style={{ padding: '28px 32px' }}>
                <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.8, marginBottom: 24 }}>{line.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}>
                  {line.features.map(f => (
                    <span key={f} style={{
                      padding: '5px 12px', fontSize: 11, fontWeight: 500,
                      background: 'var(--cream)', border: '1px solid var(--border)',
                      borderRadius: 1, color: 'var(--text)', letterSpacing: 0.5,
                    }}>{f}</span>
                  ))}
                </div>
                <a
                  href="https://www.amazon.com"
                  target="_blank"
                  rel="noopener noreferrer"
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
