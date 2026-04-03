import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle, submitting, success, error

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
    border: '1px solid var(--border)', borderRadius: 2,
    background: 'var(--cream)', fontSize: 14,
    color: 'var(--text)', fontFamily: 'var(--font-sans)',
    outline: 'none', transition: 'border-color 0.2s',
  }

  const info = [
    { icon: '📧', label: 'Email', value: 'support@keystoneessentials.com' },
    { icon: '🕐', label: 'Response Time', value: 'Within 24–48 hours' },
    { icon: '🛒', label: 'Order Support', value: 'Via Amazon Seller Messaging' },
  ]

  return (
    <section id="contact" style={{ background: 'var(--warm-white)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <p className="section-label">Get In Touch</p>
          <h2 className="section-title" style={{ margin: '0 auto 16px' }}>We'd Love to Hear From You</h2>
          <p style={{ color: 'var(--muted)', maxWidth: 480, margin: '0 auto' }}>
            Questions about our products, ingredients, or your order? Reach out and we'll get back to you promptly.
          </p>
        </div>

        <div style={{ display: 'flex', gap: 60, flexWrap: 'wrap', alignItems: 'flex-start' }}>
          {/* Info */}
          <div style={{ flex: '1 1 260px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginBottom: 40 }}>
              {info.map(i => (
                <div key={i.label} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <span style={{ fontSize: 22 }}>{i.icon}</span>
                  <div>
                    <div style={{ fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 600, marginBottom: 4 }}>{i.label}</div>
                    <div style={{ fontSize: 14, color: 'var(--text)' }}>{i.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{
              padding: 24, background: 'var(--cream)',
              border: '1px solid var(--border)', borderRadius: 2,
            }}>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: 16, color: 'var(--dark)', marginBottom: 8 }}>
                Ready to shop?
              </p>
              <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 16 }}>
                Browse our full product catalog on Amazon with fast shipping and easy returns.
              </p>
              <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ fontSize: 12 }}>
                Visit Our Amazon Store
              </a>
            </div>
          </div>

          {/* Form */}
          <div style={{ flex: '2 1 400px' }}>
            {status === 'success' ? (
              <div style={{
                padding: 48, textAlign: 'center',
                background: 'var(--cream)', border: '1px solid var(--border)', borderRadius: 2,
              }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>✓</div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 22, color: 'var(--dark)', marginBottom: 12 }}>Message Sent</h3>
                <p style={{ color: 'var(--muted)', fontSize: 14 }}>Thanks for reaching out. We'll get back to you within 24–48 hours.</p>
                <button onClick={() => setStatus('idle')} className="btn btn-outline" style={{ marginTop: 24 }}>Send Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap' }}>
                  <div style={{ flex: '1 1 200px' }}>
                    <label style={{ fontSize: 11, letterSpacing: 1.5, textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 600, display: 'block', marginBottom: 8 }}>Name</label>
                    <input name="name" value={form.name} onChange={handleChange} required placeholder="Your name"
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = 'var(--gold)'}
                      onBlur={e => e.target.style.borderColor = 'var(--border)'}
                    />
                  </div>
                  <div style={{ flex: '1 1 200px' }}>
                    <label style={{ fontSize: 11, letterSpacing: 1.5, textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 600, display: 'block', marginBottom: 8 }}>Email</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="your@email.com"
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = 'var(--gold)'}
                      onBlur={e => e.target.style.borderColor = 'var(--border)'}
                    />
                  </div>
                </div>
                <div>
                  <label style={{ fontSize: 11, letterSpacing: 1.5, textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 600, display: 'block', marginBottom: 8 }}>Subject</label>
                  <input name="subject" value={form.subject} onChange={handleChange} required placeholder="How can we help?"
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'var(--gold)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>
                <div>
                  <label style={{ fontSize: 11, letterSpacing: 1.5, textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 600, display: 'block', marginBottom: 8 }}>Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} required rows={5}
                    placeholder="Tell us more..."
                    style={{ ...inputStyle, resize: 'vertical' }}
                    onFocus={e => e.target.style.borderColor = 'var(--gold)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>
                <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start', marginTop: 8, cursor: status === 'submitting' ? 'not-allowed' : 'pointer' }} disabled={status === 'submitting'}>
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
