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
      {/* Animated background elements */}
      <div style={{
        position: 'absolute', top: '5%', right: '8%',
        width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201,169,110,0.15) 0%, transparent 70%)',
        pointerEvents: 'none',
        animation: 'float 6s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute', bottom: '-10%', left: '-5%',
        width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201,169,110,0.1) 0%, transparent 70%)',
        pointerEvents: 'none',
        animation: 'float 8s ease-in-out infinite reverse',
      }} />

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(30px); }
        }
      `}</style>

      <div className="container" style={{ display: 'flex', alignItems: 'center', gap: 80, flexWrap: 'wrap' }}>
        {/* Text */}
        <div style={{ flex: '1 1 450px', maxWidth: 600 }}>
          <p className="section-label">Cornerstone Marketplace Solutions</p>
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.8rem, 6vw, 5rem)',
            color: 'var(--dark)', lineHeight: 1.1, marginBottom: 28,
            fontWeight: 700,
          }}>
            Science-Backed<br />
            <span style={{ color: 'var(--gold)', textShadow: '0 2px 4px rgba(201,169,110,0.2)' }}>Skincare</span> You<br />
            Can Trust
          </h1>
          <p style={{ fontSize: 18, color: 'var(--muted)', maxWidth: 480, marginBottom: 44, lineHeight: 1.8, fontWeight: 400 }}>
            Dermatrix, BioClear, and Skin Labs — three powerful lines crafted to transform your skin with clinically inspired formulas.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 56 }}>
            <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Shop on Amazon
            </a>
            <a href="#shop" className="btn btn-outline">Browse Products</a>
          </div>

          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 32 }}>
            {[['3', 'Product Lines'], ['100%', 'Dermatologist Tested'], ['50K+', 'Happy Customers']].map(([num, label], i) => (
              <div key={label} style={{ animation: `fadeInUp 0.8s ease-out ${i * 0.1}s both` }}>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: 32, color: 'var(--gold)', fontWeight: 700, marginBottom: 6 }}>{num}</div>
                <div style={{ fontSize: 11, color: 'var(--muted)', letterSpacing: 1.5, textTransform: 'uppercase', fontWeight: 600 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual showcase */}
        <div style={{ flex: '1 1 350px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{
            position: 'relative',
            width: 360, height: 480,
          }}>
            {/* Card background */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(160deg, #fff9f4, #f0e4d0)',
              borderRadius: 12,
              border: '1px solid var(--border)',
              boxShadow: '0 30px 80px rgba(201,169,110,0.2)',
              backdropFilter: 'blur(10px)',
            }} />

            {/* Product cards */}
            <div style={{
              position: 'relative', zIndex: 1,
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              gap: 20, padding: 48, height: '100%',
            }}>
              {['Dermatrix', 'BioClear', 'Skin Labs'].map((brand, i) => (
                <div key={brand} style={{
                  width: '100%', padding: '20px 28px',
                  background: i === 1 ? 'linear-gradient(135deg, var(--gold), var(--gold-dark))' : 'white',
                  color: i === 1 ? 'white' : 'var(--dark)',
                  borderRadius: 8,
                  border: i === 1 ? 'none' : '1.5px solid var(--border)',
                  textAlign: 'center',
                  fontFamily: 'var(--font-serif)',
                  fontSize: 19, fontWeight: 700,
                  letterSpacing: 1,
                  boxShadow: i === 1 ? '0 12px 32px rgba(201,169,110,0.35)' : '0 4px 12px rgba(0,0,0,0.05)',
                  transform: i === 1 ? 'scale(1.08)' : 'scale(1)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
                  onMouseEnter={e => { if (i !== 1) { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)' } }}
                  onMouseLeave={e => { if (i !== 1) { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)' } }}
                >
                  {brand}
                  <div style={{ fontSize: 11, fontFamily: 'var(--font-sans)', fontWeight: 500, opacity: 0.8, marginTop: 6, letterSpacing: 2, textTransform: 'uppercase' }}>
                    {['Advanced Repair', 'Clarifying Care', 'Lab Precision'][i]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
