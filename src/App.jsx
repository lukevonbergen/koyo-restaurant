import { useState, useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { ArrowIcon, CtaFlip, Logo } from './components/Layout'

/* ═══════════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════════ */

const SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=2670&auto=format&fit=crop',
    headline: ['Crafting the', 'Finest Sushi', 'Experience in', 'Japan!'],
    card: { title: 'Authentic Japanese Cuisine', desc: 'From hand-selected fish at Tsukiji Market to our master chefs\u2019 precise knife work, every plate tells a story of dedication and heritage.' },
  },
  {
    image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=2670&auto=format&fit=crop',
    headline: ['The Art of', 'Omakase', 'Straight from', 'Japan!'],
    card: { title: 'Chef\u2019s Selection Omakase', desc: 'Surrender to the chef\u2019s expertise with our signature omakase \u2014 a curated journey through seasonal Japanese flavours and textures.' },
  },
  {
    image: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?q=80&w=2670&auto=format&fit=crop',
    headline: ['A Legacy of', 'Flavour Rooted', 'Deep Within', 'Japan!'],
    card: { title: 'Heritage & Tradition', desc: 'Four decades of mastering the balance between innovation and tradition. Our roots in Japanese culinary arts run deep.' },
  },
  {
    image: 'https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?q=80&w=2670&auto=format&fit=crop',
    headline: ['Premium', 'Ingredients,', 'Soul of', 'Japan!'],
    card: { title: 'Sourced with Integrity', desc: 'Wagyu from Miyazaki, uni from Hokkaido, wasabi from Shizuoka \u2014 we travel the length of Japan for the finest produce.' },
  },
  {
    image: 'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?q=80&w=2670&auto=format&fit=crop',
    headline: ['Bringing', 'Tokyo\u2019s Best', 'Tables to', 'Japan!'],
    card: { title: 'Expanding Across Asia', desc: 'With over 50 locations across Southeast Asia, KOYO brings the spirit of Tokyo\u2019s finest dining to your neighbourhood.' },
  },
]

const ChevronLeft = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M10 3L5 8L10 13" /></svg>
)
const ChevronRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 3L11 8L6 13" /></svg>
)

/* ═══════════════════════════════════════════════════════════
   HERO CAROUSEL
   ═══════════════════════════════════════════════════════════ */

function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const timerRef = useRef(null)

  const goTo = useCallback((index) => setCurrent(index), [])
  const next = useCallback(() => setCurrent((c) => (c + 1) % SLIDES.length), [])
  const prev = useCallback(() => setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length), [])

  useEffect(() => {
    if (isHovered) return
    timerRef.current = setInterval(() => setCurrent((c) => (c + 1) % SLIDES.length), 5000)
    return () => clearInterval(timerRef.current)
  }, [isHovered])

  return (
    <section className="relative w-full h-screen overflow-hidden" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} aria-label="Hero carousel" aria-roledescription="carousel">
      {SLIDES.map((slide, i) => (
        <div key={i} className="absolute inset-0" style={{ opacity: i === current ? 1 : 0, transition: 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1)', zIndex: i === current ? 1 : 0 }}>
          <div className="absolute inset-0" style={{ backgroundImage: `url(${slide.image})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: '#111' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.15) 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 40%)' }} />
        </div>
      ))}

      <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-12 lg:px-16 pb-12 md:pb-16 pt-24">
        <div className="relative max-w-[700px] flex-1 flex items-center">
          <div>
            <div className="hero-stagger-1 flex items-center gap-4 mb-6">
              <span className="text-white font-body uppercase text-[11px] tracking-[0.2em] font-light">KOYO Japanese Tapasu Bar</span>
              <div className="w-16 md:w-24" style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.3)' }} />
            </div>
            <div className="hero-stagger-2 relative">
              {SLIDES.map((slide, i) => (
                <h1 key={i} className={`${i === 0 ? 'relative' : 'absolute top-0 left-0'} font-display leading-[0.95] m-0`} style={{ fontSize: 'clamp(52px, 8vw, 96px)', opacity: i === current ? 1 : 0, transform: i === current ? 'translateY(0)' : 'translateY(12px)', transition: 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)', pointerEvents: i === current ? 'auto' : 'none' }} aria-hidden={i !== current}>
                  {slide.headline.map((line, j) => (
                    <span key={j} className="block"><span style={{ color: j === slide.headline.length - 1 ? '#E10613' : '#FFFFFF' }}>{line}</span></span>
                  ))}
                </h1>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-end justify-between gap-6">
          <div className="hero-stagger-3 flex items-center gap-2" role="tablist" aria-label="Carousel slides">
            {SLIDES.map((_, i) => (
              <button key={i} onClick={() => goTo(i)} className="h-2 rounded-full border-none cursor-pointer transition-all duration-300" style={i === current ? { width: '24px', backgroundColor: '#FFFFFF' } : { width: '8px', backgroundColor: 'transparent', border: '1.5px solid rgba(255,255,255,0.5)' }} role="tab" aria-selected={i === current} aria-label={`Go to slide ${i + 1}`} />
            ))}
          </div>

          <div className="hero-stagger-4 hidden md:block relative max-w-[340px] w-full" style={{ minHeight: '200px' }}>
            {SLIDES.map((slide, i) => (
              <div key={i} className="flex flex-col gap-3 p-6 rounded-2xl" style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', position: i === 0 ? 'relative' : 'absolute', top: 0, left: 0, right: 0, opacity: i === current ? 1 : 0, transform: i === current ? 'translateY(0)' : 'translateY(8px)', transition: 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)', pointerEvents: i === current ? 'auto' : 'none' }} aria-hidden={i !== current}>
                <h3 className="text-white font-body font-medium text-[15px] m-0">{slide.card.title}</h3>
                <p className="font-body font-light text-[13px] leading-[1.6] m-0" style={{ color: 'rgba(255,255,255,0.6)' }}>{slide.card.desc}</p>
                <a href="#about" className="group/cta inline-flex items-center self-start px-5 py-2 mt-1 rounded-full text-white text-[12px] font-body font-normal no-underline transition-colors duration-200" style={{ border: '1px solid rgba(255,255,255,0.3)' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}><CtaFlip label="Learn More" labelJa="もっと見る" /><ArrowIcon size={10} /></a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute top-24 md:top-28 right-6 md:right-12 lg:right-16 z-20 flex items-center gap-2">
        <button onClick={prev} className="flex items-center justify-center w-11 h-11 rounded-full border-none cursor-pointer text-white transition-all duration-200" style={{ background: 'rgba(30,30,30,0.5)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }} onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'} onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(30,30,30,0.5)'} aria-label="Previous slide"><ChevronLeft /></button>
        <button onClick={next} className="flex items-center justify-center w-11 h-11 rounded-full border-none cursor-pointer text-white transition-all duration-200" style={{ background: 'rgba(30,30,30,0.5)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }} onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'} onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(30,30,30,0.5)'} aria-label="Next slide"><ChevronRight /></button>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════
   POPULAR MENU ITEMS (subset for homepage)
   ═══════════════════════════════════════════════════════════ */

const POPULAR_ITEMS = [
  {
    name: 'Tuna Dynamite Roll',
    desc: '6 pieces of spicy line caught tuna under a crunchy blanket.',
    price: '£10.74',
    image: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?q=80&w=600&auto=format&fit=crop',
    tag: 'Popular',
  },
  {
    name: 'Sushi Tapasu Selection',
    desc: 'Tapasu style sharing selection — tuna sashimi, salmon sushi, crab maki and more.',
    price: '£49.20',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=600&auto=format&fit=crop',
    tag: 'Popular',
  },
  {
    name: 'Renegade Chicken Katsu',
    desc: 'Breaded chicken, sticky rice and KOYO\u2019s katsu sauce + sesame seeds.',
    price: '£15.49',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'Colours of Koyo',
    desc: 'Ebi prawns, yellowfin tuna and sashimi grade salmon — 12 pieces of sushi perfection.',
    price: '£13.14',
    image: 'https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'Spicy Teriyaki Salmon Ramen',
    desc: 'Teriyaki salmon in a spicy ramen broth with all the trimmings.',
    price: '£15.49',
    image: 'https://images.unsplash.com/photo-1534256958597-7fe685cbd745?q=80&w=600&auto=format&fit=crop',
  },
]

const LOCATIONS_PREVIEW = [
  {
    name: 'Amersham',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=800&auto=format&fit=crop',
    hours: 'Mon–Sat 11:30am–9pm · Sun 12–8pm',
    address: '35 Sycamore Road, Amersham, HP6 5EQ',
  },
  {
    name: 'Beaconsfield',
    image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=800&auto=format&fit=crop',
    hours: 'Mon–Sat 11:30am–9:30pm · Sun 12–8:30pm',
    address: '18 London End, Beaconsfield, HP9 2JH',
  },
]

/* ═══════════════════════════════════════════════════════════
   HOME PAGE (default export)
   ═══════════════════════════════════════════════════════════ */

export default function HomePage() {
  return (
    <main>
      <HeroCarousel />

      {/* ── 1. About Teaser ── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="block font-body text-text-muted uppercase text-[11px] tracking-[0.2em] mb-5">Who We Are</span>
              <h2 className="font-display text-text m-0 mb-6" style={{ fontSize: 'clamp(28px, 4vw, 42px)', lineHeight: 1.1 }}>
                Authentic sushi<br />with attitude
              </h2>
              <p className="font-body text-text text-[16px] md:text-[17px] leading-[1.8] mb-6">
                <strong className="text-accent-green font-medium">KOYO</strong> is a Japanese tapasu bar that serves high-quality, fresh food based on a unique combination of traditional sushi, katsu, teriyaki and slurping noodles. Supercool, friendly and affordable.
              </p>
              <Link to="/about" className="group/cta inline-flex items-center px-6 py-3 rounded-full text-[13px] font-body font-medium no-underline transition-all duration-300" style={{ backgroundColor: '#111111', color: '#FFFFFF' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#333'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#111111'}>
                <CtaFlip label="Learn More" labelJa="もっと見る" />
                <ArrowIcon />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden" style={{ aspectRatio: '3 / 4' }}>
                <img src="https://images.unsplash.com/photo-1583623025817-d180a2221d0a?q=80&w=1200&auto=format&fit=crop" alt="Sushi nigiri platter" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden mt-8" style={{ aspectRatio: '3 / 4' }}>
                <img src="https://images.unsplash.com/photo-1534256958597-7fe685cbd745?q=80&w=1200&auto=format&fit=crop" alt="Japanese sake pouring" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Menu Highlights ── */}
      <section className="py-16 md:py-24" style={{ backgroundColor: '#F7F6F3' }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <span className="block font-body text-text-muted uppercase text-[11px] tracking-[0.2em] mb-5">Our Menu</span>
              <h2 className="font-display text-text m-0" style={{ fontSize: 'clamp(28px, 4vw, 42px)', lineHeight: 1.1 }}>
                Crafted with precision
              </h2>
            </div>
            <Link to="/menu" className="group/cta inline-flex items-center self-start sm:self-auto px-6 py-3 rounded-full text-[13px] font-body font-medium no-underline transition-all duration-300" style={{ backgroundColor: '#111111', color: '#FFFFFF' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#333'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#111111'}>
              <CtaFlip label="View Full Menu" labelJa="メニューを見る" />
              <ArrowIcon />
            </Link>
          </div>
          <div className="flex gap-5 overflow-x-auto pb-4 -mx-6 px-6 md:-mx-0 md:px-0 md:grid md:grid-cols-3 lg:grid-cols-5 md:overflow-visible" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {POPULAR_ITEMS.map((item) => (
              <Link to="/menu" key={item.name} className="shrink-0 w-[260px] md:w-auto rounded-xl overflow-hidden no-underline transition-all duration-300 group" style={{ backgroundColor: '#FFFFFF', border: '1px solid #EEEEEE' }} onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)'; e.currentTarget.style.borderColor = '#DDDDDD' }} onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = '#EEEEEE' }}>
                <div className="overflow-hidden" style={{ aspectRatio: '4 / 3' }}>
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <h3 className="font-body font-medium text-text text-[14px] m-0 leading-snug">{item.name}</h3>
                    <span className="font-body font-medium text-text text-[14px] shrink-0">{item.price}</span>
                  </div>
                  <p className="font-body text-text-muted text-[12px] leading-[1.6] m-0 line-clamp-2">{item.desc}</p>
                  {item.tag && (
                    <span className="inline-block mt-2 font-body text-[10px] font-medium px-2 py-0.5 rounded-full" style={{ backgroundColor: 'rgba(185,76,42,0.08)', color: '#E10613', border: '1px solid rgba(185,76,42,0.2)' }}>{item.tag}</span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Full-Width Image Break ── */}
      <section className="relative w-full overflow-hidden" style={{ height: 'clamp(300px, 40vw, 500px)' }}>
        <img src="https://images.unsplash.com/photo-1540914124281-342587941389?q=80&w=2670&auto=format&fit=crop" alt="Japanese restaurant interior" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.55)' }} />
        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <div className="max-w-[680px]">
            <p className="font-body text-white/50 uppercase text-[11px] tracking-[0.2em] mb-4">Our Philosophy</p>
            <p className="font-display text-white m-0" style={{ fontSize: 'clamp(24px, 3.5vw, 40px)', lineHeight: 1.25 }}>
              &ldquo;Ichigo ichie&rdquo; — one time, one meeting. Every dish, every moment, made to be savoured.
            </p>
          </div>
        </div>
      </section>

      {/* ── 4. Sustainability / Philosophy ── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="rounded-xl overflow-hidden order-2 lg:order-1" style={{ aspectRatio: '4 / 3' }}>
              <img src="https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=1200&auto=format&fit=crop" alt="Fresh sashimi preparation" className="w-full h-full object-cover" />
            </div>
            <div className="order-1 lg:order-2">
              <span className="block font-body text-text-muted uppercase text-[11px] tracking-[0.2em] mb-5">Sustainability</span>
              <h2 className="font-display text-text m-0 mb-6" style={{ fontSize: 'clamp(28px, 4vw, 42px)', lineHeight: 1.1 }}>
                Determined to be<br />truly different
              </h2>
              <p className="font-body text-text text-[16px] md:text-[17px] leading-[1.8] mb-6">
                <strong className="text-accent-green font-medium">KOYO</strong> is known for its responsible sourcing and commitment to minimising food and packaging waste. We source the finest ingredients directly from Japan — from sashimi-grade fish to authentic seasonings.
              </p>
              <Link to="/about" className="group/cta inline-flex items-center px-6 py-3 rounded-full text-[13px] font-body font-medium no-underline transition-all duration-300" style={{ border: '1px solid #DDDDDD', color: '#111111' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#111111'; e.currentTarget.style.color = '#FFFFFF' }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#111111' }}>
                <CtaFlip label="Our Story" labelJa="私たちの物語" />
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Locations Preview ── */}
      <section className="bg-white py-16 md:py-24" style={{ borderTop: '1px solid #EEEEEE' }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center mb-12">
            <span className="block font-body text-text-muted uppercase text-[11px] tracking-[0.2em] mb-5">Find Us</span>
            <h2 className="font-display text-text m-0" style={{ fontSize: 'clamp(28px, 4vw, 42px)', lineHeight: 1.1 }}>
              Two locations, one experience
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
            {LOCATIONS_PREVIEW.map((loc) => (
              <div key={loc.name} className="rounded-2xl overflow-hidden transition-all duration-300 group" style={{ backgroundColor: '#FFFFFF', border: '1px solid #EEEEEE' }} onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.08)'; e.currentTarget.style.borderColor = '#DDDDDD' }} onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = '#EEEEEE' }}>
                <div className="overflow-hidden" style={{ aspectRatio: '16 / 9' }}>
                  <img src={loc.image} alt={`KOYO ${loc.name}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="font-display text-text m-0 mb-3" style={{ fontSize: 'clamp(22px, 3vw, 28px)' }}>{loc.name}</h3>
                  <p className="font-body text-text-muted text-[14px] leading-[1.6] m-0 mb-1">{loc.hours}</p>
                  <p className="font-body text-text-muted text-[14px] leading-[1.6] m-0 mb-5">{loc.address}</p>
                  <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.address)}`} target="_blank" rel="noopener noreferrer" className="group/cta inline-flex items-center px-5 py-2.5 rounded-full text-[12px] font-body font-medium no-underline transition-all duration-300" style={{ border: '1px solid #DDDDDD', color: '#111111' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#111111'; e.currentTarget.style.color = '#FFFFFF' }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#111111' }}>
                    <CtaFlip label="Get Directions" labelJa="道順を見る" />
                    <ArrowIcon size={10} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Join the Team CTA Band ── */}
      <section className="bg-footer-bg py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-24 text-center">
          <h2 className="font-display text-white m-0 mb-4" style={{ fontSize: 'clamp(32px, 5vw, 52px)', lineHeight: 1.05 }}>
            Join The KOYO Team
          </h2>
          <p className="font-body text-[16px] md:text-[17px] leading-[1.75] mb-8 max-w-[540px] mx-auto m-0" style={{ color: 'rgba(255,255,255,0.6)' }}>
            The KOYO recipe is serving high quality, fresh, responsibly sourced ingredients in a super cool relaxed environment. The missing ingredient? You.
          </p>
          <Link to="/jobs" className="group/cta inline-flex items-center px-8 py-3.5 rounded-full text-[13px] font-body font-medium no-underline transition-all duration-300 text-white" style={{ border: '1px solid rgba(255,255,255,0.3)' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)' }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent' }}>
            <CtaFlip label="View Careers" labelJa="採用情報" />
            <ArrowIcon />
          </Link>
        </div>
      </section>

      {/* ── 7. Sign-off ── */}
      <section className="relative w-full overflow-hidden flex items-center justify-center text-center" style={{ height: 'clamp(320px, 45vw, 480px)' }}>
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?q=80&w=2670&auto=format&fit=crop" alt="Japanese ingredients" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.6)' }} />
        <div className="relative z-10 px-6">
          <p className="font-body text-white/60 text-[15px] md:text-[17px] mb-5">See you soon,</p>
          <Logo light className="justify-center" style={{ fontSize: 'clamp(48px, 8vw, 96px)' }} />
        </div>
      </section>
    </main>
  )
}
