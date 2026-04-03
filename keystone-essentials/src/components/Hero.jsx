export default function Hero() {
  return (
    <section id="home" style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #faf7f2 0%, #f5ede0 50%, #ede0cc 100%)',
      display: 'flex', alignItems: 'center',
      padding: '0 24px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative circles */}
      <div style={{
        position: 'absolute', top: '10%', right: '5%',
        width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201,169,110,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '5%', left: '-5%',
        width: 300, height: 300, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201,169,110,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ display: 'flex', alignItems: 'center', gap: 60, flexWrap: 'wrap' }}>
        {/* Text */}
        <div style={{ flex: '1 1 400px', maxWidth: 580 }}>
          <p className="section-label">Cornerstone Marketplace Solutions</p>
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.8rem, 6vw, 5rem)',
            color: 'var(--dark)', lineHeight: 1.1, marginBottom: 24,
          }}>
            Science-Backed<br />
            <span style={{ color: 'var(--gold)' }}>Skincare</span> You<br />
            Can Trust
          </h1>
          <p style={{ fontSize: 17, color: 'var(--muted)', maxWidth: 460, marginBottom: 40, lineHeight: 1.8 }}>
            Dermatrix, BioClear, and Skin Labs — three powerful lines crafted to transform your skin with clinically inspired formulas.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Shop on Amazon
            </a>
            <a href="#products" className="btn btn-outline">Explore Lines</a>
          </div>

          {/* Stats */}
          <div style={{ display: 'flex', gap: 40, marginTop: 56, flexWrap: 'wrap' }}>
            {[['3', 'Product Lines'], ['100%', 'Dermatologist Tested'], ['50K+', 'Happy Customers']].map(([num, label]) => (
              <div key={label}>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: 28, color: 'var(--gold)', fontWeight: 700 }}>{num}</div>
                <div style={{ fontSize: 12, color: 'var(--muted)', letterSpacing: 1, textTransform: 'uppercase', marginTop: 4 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual card */}
        <div style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center' }}>
          <div style={{
            width: 320, height: 420,
            background: 'linear-gradient(160deg, #fff9f4, #f0e4d0)',
            borderRadius: 4,
            border: '1px solid var(--border)',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            gap: 24, padding: 40,
            boxShadow: '0 20px 60px rgba(201,169,110,0.15)',
          }}>
            {['Dermatrix', 'BioClear', 'Skin Labs'].map((brand, i) => (
              <div key={brand} style={{
                width: '100%', padding: '18px 24px',
                background: i === 1 ? 'var(--gold)' : 'white',
                color: i === 1 ? 'white' : 'var(--dark)',
                borderRadius: 2,
                border: '1px solid var(--border)',
                textAlign: 'center',
                fontFamily: 'var(--font-serif)',
                fontSize: 18, fontWeight: 600,
                letterSpacing: 1,
                boxShadow: i === 1 ? '0 8px 24px rgba(201,169,110,0.4)' : 'none',
                transform: i === 1 ? 'scale(1.05)' : 'scale(1)',
              }}>
                {brand}
                <div style={{ fontSize: 11, fontFamily: 'var(--font-sans)', fontWeight: 400, opacity: 0.7, marginTop: 4, letterSpacing: 2, textTransform: 'uppercase' }}>
                  {['Advanced Repair', 'Clarifying Care', 'Lab Precision'][i]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
