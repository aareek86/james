import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('submitting')

    try {
      const response = await fetch('https://formspree.io/f/mvzvazyp', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(e.target),
      })

      if (response.ok) {
        setStatus('success')
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (err) {
      setStatus('error')
    }
  }

  const inputStyle = {
    width: '100%', padding: '14px 16px',
    border: '1.5px solid var(--border)', borderRadius: 6,
    background: 'white', fontSize: 14,
    color: 'var(--text)', fontFamily: 'var(--font-sans)',
    outline: 'none', transition: 'all 0.2s',
  }

  const info = [
    { icon: '📧', label: 'Email', value: 'support@keystoneessentials.com' },
    { icon: '🕐', label: 'Response Time', value: 'Within 24–48 hours' },
    { icon: '🛒', label: 'Order Support', value: 'Via Amazon Seller Messaging' },
  ]

  return (
    <section id="contact" style={{ background: 'var(--cream)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 80 }}>
          <p className="section-label">Get In Touch</p>
          <h2 className="section-title" style={{ margin: '0 auto 20px' }}>We'd Love to Hear From You</h2>
          <p style={{ color: 'var(--muted)', maxWidth: 550, margin: '0 auto', fontSize: 16, lineHeight: 1.7 }}>
            Questions about our products, ingredients, or your order? Reach out and we'll get back to you promptly.
          </p>
        </div>

        <div style={{ display: 'flex', gap: 80, flexWrap: 'wrap', alignItems: 'flex-start' }}>
          {/* Info */}
          <div style={{ flex: '1 1 300px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 28, marginBottom: 48 }}>
              {info.map((i, idx) => (
                <div key={i.label} style={{ display: 'flex', gap: 18, alignItems: 'flex-start', animation: `slideInLeft 0.6s ease-out ${idx * 0.1}s both` }}>
                  <span style={{ fontSize: 28, lineHeight: 1 }}>{i.icon}</span>
                  <div>
                    <div style={{ fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 700, marginBottom: 6 }}>{i.label}</div>
                    <div style={{ fontSize: 15, color: 'var(--text)', fontWeight: 500 }}>{i.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{
              padding: 32, background: 'linear-gradient(135deg, white, var(--warm-white))',
              border: '1.5px solid var(--border)', borderRadius: 10,
              boxShadow: '0 8px 24px rgba(0,0,0,0.05)',
            }}>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: 18, color: 'var(--dark)', marginBottom: 12, fontWeight: 700 }}>
                Ready to shop?
              </p>
              <p style={{ fontSize: 14, color: 'var(--muted)', marginBottom: 20, lineHeight: 1.7 }}>
                Browse our full product catalog on Amazon with fast shipping and easy returns.
              </p>
              <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ fontSize: 12 }}>
                Visit Our Amazon Store →
              </a>
            </div>
          </div>

          {/* Form */}
          <div style={{ flex: '2 1 450px' }}>
            {status === 'success' ? (
              <div style={{
                padding: 56, textAlign: 'center',
                background: 'linear-gradient(135deg, white, var(--warm-white))',
                border: '1.5px solid var(--border)', borderRadius: 10,
                boxShadow: '0 8px 24px rgba(0,0,0,0.05)',
              }}>
                <div style={{ fontSize: 56, marginBottom: 20, animation: 'fadeInUp 0.6s ease-out' }}>✓</div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 24, color: 'var(--dark)', marginBottom: 12, fontWeight: 700 }}>Message Sent Successfully</h3>
                <p style={{ color: 'var(--muted)', fontSize: 15, marginBottom: 28, lineHeight: 1.7 }}>Thanks for reaching out. We'll get back to you within 24–48 hours.</p>
                <button onClick={() => setStatus('idle')} className="btn btn-outline">Send Another Message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
                  <div style={{ flex: '1 1 200px' }}>
                    <label style={{ fontSize: 11, letterSpacing: 1.5, textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 700, display: 'block', marginBottom: 10 }}>Name</label>
                    <input name="name" value={form.name} onChange={handleChange} required placeholder="Your name"
                      style={inputStyle}
                      onFocus={e => { e.target.style.borderColor = 'var(--gold)'; e.target.style.boxShadow = '0 0 0 3px rgba(201,169,110,0.1)' }}
                      onBlur={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = 'none' }}
                    />
                  </div>
                  <div style={{ flex: '1 1 200px' }}>
                    <label style={{ fontSize: 11, letterSpacing: 1.5, textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 700, display: 'block', marginBottom: 10 }}>Email</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="your@email.com"
                      style={inputStyle}
                      onFocus={e => { e.target.style.borderColor = 'var(--gold)'; e.target.style.boxShadow = '0 0 0 3px rgba(201,169,110,0.1)' }}
                      onBlur={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = 'none' }}
                    />
                  </div>
                </div>
                <div>
                  <label style={{ fontSize: 11, letterSpacing: 1.5, textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 700, display: 'block', marginBottom: 10 }}>Subject</label>
                  <input name="subject" value={form.subject} onChange={handleChange} required placeholder="How can we help?"
                    style={inputStyle}
                    onFocus={e => { e.target.style.borderColor = 'var(--gold)'; e.target.style.boxShadow = '0 0 0 3px rgba(201,169,110,0.1)' }}
                    onBlur={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = 'none' }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: 11, letterSpacing: 1.5, textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 700, display: 'block', marginBottom: 10 }}>Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} required rows={5}
                    placeholder="Tell us more..."
                    style={{ ...inputStyle, resize: 'vertical', fontFamily: 'var(--font-sans)' }}
                    onFocus={e => { e.target.style.borderColor = 'var(--gold)'; e.target.style.boxShadow = '0 0 0 3px rgba(201,169,110,0.1)' }}
                    onBlur={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = 'none' }}
                  />
                </div>
                <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start', marginTop: 12, cursor: status === 'submitting' ? 'not-allowed' : 'pointer', opacity: status === 'submitting' ? 0.7 : 1 }} disabled={status === 'submitting'}>
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
