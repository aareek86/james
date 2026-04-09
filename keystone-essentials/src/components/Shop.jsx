const products = {
  dermatrix: [
    { id: 1, name: 'Dermatrix Repair Serum', price: '$45.99', image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop', desc: 'Advanced peptide complex for fine lines and elasticity' },
    { id: 2, name: 'Dermatrix Night Cream', price: '$52.99', image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop', desc: 'Intensive repair formula for overnight restoration' },
    { id: 3, name: 'Dermatrix Eye Contour', price: '$38.99', image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop', desc: 'Targeted treatment for delicate eye area' },
    { id: 4, name: 'Dermatrix Barrier Balm', price: '$42.99', image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop', desc: 'Protective moisturizer for sensitive skin' },
  ],
  bioclear: [
    { id: 5, name: 'BioClear Clarifying Toner', price: '$28.99', image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop', desc: 'Salicylic acid toner for pore clarity' },
    { id: 6, name: 'BioClear Acne Spot Treatment', price: '$24.99', image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop', desc: 'Fast-acting breakout control serum' },
    { id: 7, name: 'BioClear Purifying Mask', price: '$35.99', image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop', desc: 'Weekly deep-cleanse treatment' },
    { id: 8, name: 'BioClear Oil Control Moisturizer', price: '$32.99', image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop', desc: 'Lightweight hydration for oily skin' },
  ],
  skinlabs: [
    { id: 9, name: 'Skin Labs Vitamin C Serum', price: '$58.99', image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop', desc: 'Lab-grade 15% vitamin C brightening serum' },
    { id: 10, name: 'Skin Labs Hyaluronic Hydrator', price: '$48.99', image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop', desc: 'Multi-layer hydration with growth factors' },
    { id: 11, name: 'Skin Labs Radiance Mask', price: '$62.99', image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop', desc: 'Premium treatment mask for luminous skin' },
    { id: 12, name: 'Skin Labs Advanced Renewal', price: '$72.99', image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop', desc: 'Comprehensive anti-aging night treatment' },
  ],
}

const ProductCard = ({ product, lineColor }) => (
  <div style={{
    background: 'white',
    border: '1.5px solid var(--border)',
    borderRadius: 10,
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    display: 'flex', flexDirection: 'column',
  }}
    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 16px 48px rgba(0,0,0,0.12)' }}
    onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
  >
    <div style={{
      width: '100%', height: 260,
      background: 'linear-gradient(135deg, var(--cream), #f0e4d0)',
      overflow: 'hidden',
      position: 'relative',
    }}>
      <img src={product.image} alt={product.name} style={{
        width: '100%', height: '100%', objectFit: 'cover',
        transition: 'transform 0.4s ease',
      }}
        onMouseEnter={e => e.target.style.transform = 'scale(1.08)'}
        onMouseLeave={e => e.target.style.transform = 'scale(1)'}
      />
      <div style={{
        position: 'absolute', top: 12, right: 12,
        background: lineColor, color: 'white',
        padding: '6px 12px', borderRadius: 20,
        fontSize: 10, fontWeight: 700, letterSpacing: 1,
        textTransform: 'uppercase',
      }}>New</div>
    </div>
    <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
      <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: 16, color: 'var(--dark)', marginBottom: 8, lineHeight: 1.3, fontWeight: 700 }}>
        {product.name}
      </h4>
      <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 20, lineHeight: 1.6, flex: 1 }}>
        {product.desc}
      </p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 16, borderTop: '1px solid var(--border)' }}>
        <span style={{ fontFamily: 'var(--font-serif)', fontSize: 20, color: lineColor, fontWeight: 700 }}>
          {product.price}
        </span>
        <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer"
          className="btn btn-primary" style={{ padding: '10px 18px', fontSize: 11 }}>
          Buy Now
        </a>
      </div>
    </div>
  </div>
)

export default function Shop() {
  const lineColors = {
    dermatrix: '#c9a96e',
    bioclear: '#5a9e7a',
    skinlabs: '#6a8fc4',
  }

  return (
    <section id="shop" style={{ background: 'var(--warm-white)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 80 }}>
          <p className="section-label">Shop Our Collections</p>
          <h2 className="section-title" style={{ margin: '0 auto 20px' }}>Browse by Product Line</h2>
          <p style={{ color: 'var(--muted)', maxWidth: 550, margin: '0 auto', fontSize: 16, lineHeight: 1.7 }}>
            Curated products from each line, ready to ship from Amazon with fast delivery.
          </p>
        </div>

        {/* Dermatrix */}
        <div style={{ marginBottom: 100 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 40 }}>
            <div style={{ width: 6, height: 32, background: lineColors.dermatrix, borderRadius: 3 }} />
            <div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 32, color: 'var(--dark)', margin: 0, fontWeight: 700 }}>
                Dermatrix
              </h3>
              <p style={{ fontSize: 12, color: lineColors.dermatrix, letterSpacing: 2.5, textTransform: 'uppercase', fontWeight: 700, margin: '4px 0 0' }}>
                Advanced Repair
              </p>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 28 }}>
            {products.dermatrix.map((p, i) => <ProductCard key={p.id} product={p} lineColor={lineColors.dermatrix} />)}
          </div>
        </div>

        {/* BioClear */}
        <div style={{ marginBottom: 100 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 40 }}>
            <div style={{ width: 6, height: 32, background: lineColors.bioclear, borderRadius: 3 }} />
            <div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 32, color: 'var(--dark)', margin: 0, fontWeight: 700 }}>
                BioClear
              </h3>
              <p style={{ fontSize: 12, color: lineColors.bioclear, letterSpacing: 2.5, textTransform: 'uppercase', fontWeight: 700, margin: '4px 0 0' }}>
                Clarifying Care
              </p>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 28 }}>
            {products.bioclear.map((p, i) => <ProductCard key={p.id} product={p} lineColor={lineColors.bioclear} />)}
          </div>
        </div>

        {/* Skin Labs */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 40 }}>
            <div style={{ width: 6, height: 32, background: lineColors.skinlabs, borderRadius: 3 }} />
            <div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 32, color: 'var(--dark)', margin: 0, fontWeight: 700 }}>
                Skin Labs
              </h3>
              <p style={{ fontSize: 12, color: lineColors.skinlabs, letterSpacing: 2.5, textTransform: 'uppercase', fontWeight: 700, margin: '4px 0 0' }}>
                Lab Precision
              </p>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 28 }}>
            {products.skinlabs.map((p, i) => <ProductCard key={p.id} product={p} lineColor={lineColors.skinlabs} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
