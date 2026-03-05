import { Logo, ArrowIcon, CtaFlip } from '../components/Layout'
import useSEO from '../hooks/useSEO'

const LOCATIONS = [
  {
    name: 'Amersham',
    nameJa: '天沙村',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=1200&auto=format&fit=crop',
    address: '35 Sycamore Road, Amersham, Buckinghamshire, HP6 5EQ',
    hours: [
      { days: 'Mon – Sat', time: '11:30am – 9:00pm' },
      { days: 'Sunday', time: '12:00pm – 8:00pm' },
    ],
    phone: '+44 1494 727888',
    email: 'amersham@koyo.co.uk',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2474.5!2d-0.607!3d51.674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDQwJzI2LjQiTiAwwrAzNicyNS4yIlc!5e0!3m2!1sen!2suk!4v1',
  },
  {
    name: 'Beaconsfield',
    nameJa: '標野',
    image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1200&auto=format&fit=crop',
    address: '18 London End, Beaconsfield, Buckinghamshire, HP9 2JH',
    hours: [
      { days: 'Mon – Sat', time: '11:30am – 9:30pm' },
      { days: 'Sunday', time: '12:00pm – 8:30pm' },
    ],
    phone: '+44 1494 957123',
    email: 'beaconsfield@koyo.co.uk',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2474.5!2d-0.643!3d51.611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDM2JzM5LjYiTiAwwrAzOCczNC44Ilc!5e0!3m2!1sen!2suk!4v1',
  },
]

export default function LocationsPage() {
  useSEO({
    title: 'Locations',
    description: 'Find KOYO Japanese Tapasu Bar in Amersham and Beaconsfield, Buckinghamshire. Opening hours, addresses and directions for both restaurants.',
  })

  return (
    <main className="bg-bg min-h-screen">
      {/* Hero banner */}
      <section
        className="relative w-full overflow-hidden flex items-end"
        style={{ height: 'clamp(280px, 40vh, 420px)' }}
      >
        <div className="absolute inset-0" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1540914124281-342587941389?q=80&w=2670&auto=format&fit=crop)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: '#1A0A00' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0.4) 100%)' }} />
        <div className="relative z-10 max-w-[1280px] mx-auto w-full px-6 md:px-12 lg:px-24 pb-10 md:pb-14">
          <span className="block font-body uppercase text-[11px] tracking-[0.2em] mb-3" style={{ color: 'rgba(255,255,255,0.6)' }}>
            KOYO
          </span>
          <h1 className="font-display text-white m-0" style={{ fontSize: 'clamp(40px, 6vw, 72px)', lineHeight: 1 }}>
            Our Locations
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-24 py-14 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-end">
          <div>
            <span className="block font-body text-text-muted uppercase text-[11px] tracking-[0.2em] mb-5">Find Us</span>
            <h2 className="font-display text-text m-0" style={{ fontSize: 'clamp(28px, 4vw, 42px)', lineHeight: 1.1 }}>
              Two locations,<br />one experience
            </h2>
          </div>
          <p className="font-body text-text-muted text-[16px] md:text-[17px] leading-[1.75] max-w-[520px] mb-0">
            Visit us at either of our restaurants in the heart of Buckinghamshire. Both offer the full <strong className="text-text font-medium">KOYO</strong> experience — dine-in or takeaway.
          </p>
        </div>
      </section>

      {/* Location cards */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-24 pb-20 md:pb-32">
        <div className="flex flex-col gap-24 md:gap-32">
          {LOCATIONS.map((loc, idx) => (
            <div key={loc.name}>
              {/* Location number + name header */}
              <div className="flex items-baseline gap-4 mb-8">
                <span className="font-display text-text-muted" style={{ fontSize: '14px' }}>
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <div style={{ height: '1px', width: '32px', backgroundColor: '#DDDDDD' }} />
                <span className="font-body text-text-muted uppercase text-[11px] tracking-[0.2em]">{loc.nameJa}</span>
              </div>

              {/* Image + details grid */}
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 ${idx % 2 === 1 ? 'lg:direction-rtl' : ''}`}>
                {/* Image side */}
                <div className={`${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="rounded-2xl overflow-hidden" style={{ aspectRatio: '4 / 3' }}>
                    <img
                      src={loc.image}
                      alt={`KOYO ${loc.name}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Details side */}
                <div className={`flex flex-col justify-center ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h2 className="font-display text-text m-0 mb-8" style={{ fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: 1.05 }}>
                    {loc.name}
                  </h2>

                  <div className="flex flex-col gap-6">
                    {/* Address */}
                    <div>
                      <span className="block font-body text-text-muted uppercase text-[10px] tracking-[0.2em] mb-2">Address</span>
                      <span className="font-body text-text text-[15px] leading-[1.6]">{loc.address}</span>
                    </div>

                    {/* Hours */}
                    <div>
                      <span className="block font-body text-text-muted uppercase text-[10px] tracking-[0.2em] mb-2">Opening Hours</span>
                      <div className="flex flex-col gap-1">
                        {loc.hours.map((h) => (
                          <div key={h.days} className="flex items-baseline justify-between max-w-[280px]">
                            <span className="font-body text-text text-[15px]">{h.days}</span>
                            <span className="font-body text-text-muted text-[14px]">{h.time}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Contact */}
                    <div>
                      <span className="block font-body text-text-muted uppercase text-[10px] tracking-[0.2em] mb-2">Contact</span>
                      <div className="flex flex-col gap-1">
                        <a href={`tel:${loc.phone.replace(/\s/g, '')}`} className="font-body text-text text-[15px] no-underline hover:text-accent-rust transition-colors duration-200">
                          {loc.phone}
                        </a>
                        <a href={`mailto:${loc.email}`} className="font-body text-text text-[15px] no-underline hover:text-accent-rust transition-colors duration-200">
                          {loc.email}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-8">
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/cta inline-flex items-center px-6 py-3 rounded-full text-[13px] font-body font-medium no-underline transition-all duration-300"
                      style={{ backgroundColor: '#111111', color: '#FFFFFF' }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#333'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#111111'}
                    >
                      <CtaFlip label="Get Directions" labelJa="道順を見る" />
                      <ArrowIcon />
                    </a>
                  </div>
                </div>
              </div>

              {/* Map embed */}
              <div className="mt-8 rounded-2xl overflow-hidden" style={{ height: '320px', border: '1px solid #EEEEEE' }}>
                <iframe
                  src={loc.mapSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map of ${loc.name}`}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sign-off */}
      <section
        className="relative w-full overflow-hidden flex items-center justify-center text-center"
        style={{ height: 'clamp(320px, 45vw, 480px)' }}
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?q=80&w=2670&auto=format&fit=crop"
            alt="Restaurant interior"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.6)' }} />
        <div className="relative z-10 px-6">
          <p className="font-body text-white/60 text-[15px] md:text-[17px] mb-5">We look forward to welcoming you.</p>
          <Logo light className="justify-center" style={{ fontSize: 'clamp(48px, 8vw, 96px)' }} />
        </div>
      </section>
    </main>
  )
}
