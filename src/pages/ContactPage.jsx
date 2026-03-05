import { useState } from 'react'
import useSEO from '../hooks/useSEO'

export default function ContactPage() {
  useSEO({
    title: 'Contact',
    description: 'Get in touch with KOYO Japanese Tapasu Bar. Book a table, ask about our menu or send us a message. Restaurants in Amersham and Beaconsfield.',
  })

  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="bg-bg min-h-screen">
      {/* Hero banner */}
      <section
        className="relative w-full overflow-hidden flex items-end"
        style={{ height: 'clamp(280px, 40vh, 420px)' }}
      >
        <div className="absolute inset-0" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1579027989536-b7b1f875659b?q=80&w=2670&auto=format&fit=crop)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: '#1A0A00' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0.4) 100%)' }} />
        <div className="relative z-10 max-w-[1280px] mx-auto w-full px-6 md:px-12 lg:px-24 pb-10 md:pb-14">
          <span className="block font-body uppercase text-[11px] tracking-[0.2em] mb-3" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Get In Touch
          </span>
          <h1 className="font-display text-white m-0" style={{ fontSize: 'clamp(40px, 6vw, 72px)', lineHeight: 1 }}>
            Contact Us
          </h1>
        </div>
      </section>

      {/* Form + info */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Info */}
          <div>
            <span className="block font-body text-text-muted uppercase text-[11px] tracking-[0.2em] mb-5">Say Hello</span>
            <h2 className="font-display text-text m-0 mb-6" style={{ fontSize: 'clamp(28px, 4vw, 42px)', lineHeight: 1.1 }}>
              We&apos;d love to<br />hear from you
            </h2>
            <p className="font-body text-text text-[16px] md:text-[17px] leading-[1.8] mb-10 max-w-[480px]">
              Whether you have a question about our menu, want to book a table, or just want to say hello — drop us a message and we&apos;ll get back to you.
            </p>
            <div className="flex flex-col gap-5">
              <div>
                <span className="block font-body text-text-muted uppercase text-[11px] tracking-[0.15em] mb-1">Email</span>
                <a href="mailto:hello@koyo.co.uk" className="font-body text-text text-[15px] no-underline hover:text-accent-rust transition-colors duration-200">hello@koyo.co.uk</a>
              </div>
              <div>
                <span className="block font-body text-text-muted uppercase text-[11px] tracking-[0.15em] mb-1">Phone</span>
                <a href="tel:+441494727888" className="font-body text-text text-[15px] no-underline hover:text-accent-rust transition-colors duration-200">+44 1494 727 888</a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-16">
                <h3 className="font-display text-text mb-3" style={{ fontSize: 'clamp(24px, 3vw, 32px)' }}>Thank you!</h3>
                <p className="font-body text-text-muted text-[15px]">We&apos;ll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label htmlFor="name" className="block font-body text-text-muted uppercase text-[11px] tracking-[0.15em] mb-2">Name</label>
                  <input
                    id="name" name="name" type="text" required value={form.name} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg font-body text-[14px] text-text bg-white outline-none transition-colors duration-200"
                    style={{ border: '1px solid #DDDDDD' }}
                    onFocus={(e) => e.currentTarget.style.borderColor = '#999'}
                    onBlur={(e) => e.currentTarget.style.borderColor = '#DDDDDD'}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-body text-text-muted uppercase text-[11px] tracking-[0.15em] mb-2">Email</label>
                  <input
                    id="email" name="email" type="email" required value={form.email} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg font-body text-[14px] text-text bg-white outline-none transition-colors duration-200"
                    style={{ border: '1px solid #DDDDDD' }}
                    onFocus={(e) => e.currentTarget.style.borderColor = '#999'}
                    onBlur={(e) => e.currentTarget.style.borderColor = '#DDDDDD'}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block font-body text-text-muted uppercase text-[11px] tracking-[0.15em] mb-2">Phone (optional)</label>
                  <input
                    id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg font-body text-[14px] text-text bg-white outline-none transition-colors duration-200"
                    style={{ border: '1px solid #DDDDDD' }}
                    onFocus={(e) => e.currentTarget.style.borderColor = '#999'}
                    onBlur={(e) => e.currentTarget.style.borderColor = '#DDDDDD'}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block font-body text-text-muted uppercase text-[11px] tracking-[0.15em] mb-2">Message</label>
                  <textarea
                    id="message" name="message" rows={5} required value={form.message} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg font-body text-[14px] text-text bg-white outline-none transition-colors duration-200 resize-none"
                    style={{ border: '1px solid #DDDDDD' }}
                    onFocus={(e) => e.currentTarget.style.borderColor = '#999'}
                    onBlur={(e) => e.currentTarget.style.borderColor = '#DDDDDD'}
                  />
                </div>
                <button
                  type="submit"
                  className="self-start inline-flex items-center justify-center px-8 py-3.5 rounded-full text-[13px] font-body font-medium no-underline transition-all duration-300 cursor-pointer border-none"
                  style={{ backgroundColor: '#111111', color: '#FFFFFF' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#333'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#111111'}
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
