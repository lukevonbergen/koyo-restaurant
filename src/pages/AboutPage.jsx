import { Logo } from '../components/Layout'

export default function AboutPage() {
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
            About Us
          </span>
          <h1 className="font-display text-white m-0" style={{ fontSize: 'clamp(40px, 6vw, 72px)', lineHeight: 1 }}>
            Our Story
          </h1>
        </div>
      </section>

      {/* ── Intro + image grid ── */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <span className="block font-body text-text-muted uppercase text-[11px] tracking-[0.2em] mb-5">Who We Are</span>
            <h2 className="font-display text-text m-0 mb-6" style={{ fontSize: 'clamp(28px, 4vw, 42px)', lineHeight: 1.1 }}>
              Authentic sushi<br />with attitude
            </h2>
            <p className="font-body text-text text-[16px] md:text-[17px] leading-[1.8] mb-6">
              <strong className="text-accent-green font-medium">KOYO</strong> is a Japanese tapasu bar that serves high-quality, fresh food based on a unique combination of traditional sushi, katsu, teriyaki and slurping noodles.
            </p>
            <p className="font-body text-text text-[16px] md:text-[17px] leading-[1.8] mb-6">
              We complement the main food items with cold Japanese beers, sake, gins, whiskies and vodka, and a nice selection of wines. Not forgetting little moons Mochi ice cream to finish the meal.
            </p>
            <p className="font-body text-text text-[16px] md:text-[17px] leading-[1.8]">
              Attracting both Hipsters and families, <strong className="text-accent-green font-medium">KOYO</strong> is supercool, friendly and affordable.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden" style={{ aspectRatio: '3 / 4' }}>
              <img
                src="https://images.unsplash.com/photo-1583623025817-d180a2221d0a?q=80&w=1200&auto=format&fit=crop"
                alt="Sushi nigiri platter"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden mt-8" style={{ aspectRatio: '3 / 4' }}>
              <img
                src="https://images.unsplash.com/photo-1534256958597-7fe685cbd745?q=80&w=1200&auto=format&fit=crop"
                alt="Japanese sake pouring"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Full-width image break ── */}
      <section className="relative w-full overflow-hidden" style={{ height: 'clamp(300px, 40vw, 500px)' }}>
        <img
          src="https://images.unsplash.com/photo-1540914124281-342587941389?q=80&w=2670&auto=format&fit=crop"
          alt="Japanese restaurant interior"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </section>

      {/* ── Sustainability ── */}
      <section className="py-16 md:py-24" style={{ backgroundColor: '#F7F6F3' }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="rounded-xl overflow-hidden order-2 lg:order-1" style={{ aspectRatio: '4 / 3' }}>
              <img
                src="https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=1200&auto=format&fit=crop"
                alt="Fresh sashimi preparation"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="block font-body text-text-muted uppercase text-[11px] tracking-[0.2em] mb-5">Sustainability</span>
              <h2 className="font-display text-text m-0 mb-6" style={{ fontSize: 'clamp(28px, 4vw, 42px)', lineHeight: 1.1 }}>
                Determined to be<br />truly different
              </h2>
              <p className="font-body text-text text-[16px] md:text-[17px] leading-[1.8]">
                <strong className="text-accent-green font-medium">KOYO</strong> is known for its responsible sourcing and commitment to minimising food and packaging waste.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Founder ── */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <span className="block font-body text-text-muted uppercase text-[11px] tracking-[0.2em] mb-5">The Founder</span>
            <h2 className="font-display text-text m-0 mb-6" style={{ fontSize: 'clamp(28px, 4vw, 42px)', lineHeight: 1.1 }}>
              About the owner
            </h2>
            <p className="font-body text-text text-[16px] md:text-[17px] leading-[1.8] mb-6">
              Founded by Alex Young. Taking inspiration from a career spanning three decades in the London hospitality industry.
            </p>
            <p className="font-body text-text text-[16px] md:text-[17px] leading-[1.8]">
              For more information pop in and see us, follow us on the socials, or check back in here.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden" style={{ aspectRatio: '4 / 3' }}>
            <img
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1200&auto=format&fit=crop"
              alt="Sushi chef at work"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── Sign-off ── */}
      <section
        className="relative w-full overflow-hidden flex items-center justify-center text-center"
        style={{ height: 'clamp(320px, 45vw, 480px)' }}
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?q=80&w=2670&auto=format&fit=crop"
            alt="Japanese ingredients"
            className="w-full h-full object-cover"
          />
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
