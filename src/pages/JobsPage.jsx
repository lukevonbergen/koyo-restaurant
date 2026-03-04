import { Logo } from '../components/Layout'

export default function JobsPage() {
  return (
    <main className="bg-bg min-h-screen">
      {/* Hero banner */}
      <section
        className="relative w-full overflow-hidden flex items-end"
        style={{ height: 'clamp(280px, 40vh, 420px)' }}
      >
        <div className="absolute inset-0" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=2670&auto=format&fit=crop)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: '#1A0A00' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0.4) 100%)' }} />
        <div className="relative z-10 max-w-[1280px] mx-auto w-full px-6 md:px-12 lg:px-24 pb-10 md:pb-14">
          <span className="block font-body uppercase text-[11px] tracking-[0.2em] mb-3" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Careers
          </span>
          <h1 className="font-display text-white m-0" style={{ fontSize: 'clamp(40px, 6vw, 72px)', lineHeight: 1 }}>
            Join Our Team
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <span className="block font-body text-text-muted uppercase text-[11px] tracking-[0.2em] mb-5">The Missing Ingredient</span>
            <h2 className="font-display text-text m-0 mb-6" style={{ fontSize: 'clamp(28px, 4vw, 42px)', lineHeight: 1.1 }}>
              Join our team.
            </h2>
            <p className="font-body text-text text-[16px] md:text-[17px] leading-[1.8] mb-6">
              The <strong className="text-accent-green font-medium">KOYO</strong> recipe is serving high quality, fresh, responsibly sourced ingredients in a super cool relaxed environment. None of this is possible without the missing ingredient, you?
            </p>
          </div>
          <div className="rounded-xl overflow-hidden" style={{ aspectRatio: '4 / 3' }}>
            <img
              src="https://images.unsplash.com/photo-1514190051997-0f6f39ca5cde?q=80&w=1200&auto=format&fit=crop"
              alt="Sushi chef preparing rolls"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Are you */}
      <section className="py-16 md:py-24" style={{ backgroundColor: '#F7F6F3' }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="rounded-xl overflow-hidden order-2 lg:order-1" style={{ aspectRatio: '4 / 3' }}>
              <img
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1200&auto=format&fit=crop"
                alt="Japanese kitchen teamwork"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="block font-body text-text-muted uppercase text-[11px] tracking-[0.2em] mb-5">Are You?</span>
              <h2 className="font-display text-text m-0 mb-6" style={{ fontSize: 'clamp(28px, 4vw, 42px)', lineHeight: 1.1 }}>
                We&apos;re looking for<br />great people
              </h2>
              <p className="font-body text-text text-[16px] md:text-[17px] leading-[1.8]">
                A smart, engaging individual, with a big smile and a small ego? Do you effortlessly put your fellow team and guests needs above yours? Are you someone who could be a significant part of our exciting future?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations + CTA */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-24">
        <div className="max-w-[680px]">
          <span className="block font-body text-text-muted uppercase text-[11px] tracking-[0.2em] mb-5">Our Locations</span>
          <p className="font-body text-text text-[16px] md:text-[17px] leading-[1.8] mb-8">
            We currently have two locations up and running, Amersham-on-the-Hill and Beaconsfield, and we are always on the look out for great people to join our brilliant team.
          </p>
          <p className="font-body text-text text-[16px] md:text-[17px] leading-[1.8]">
            Please send a copy of your CV to{' '}
            <a href="mailto:alex@yokoso.uk" className="text-accent-rust font-medium no-underline hover:underline transition-all duration-200">
              alex@yokoso.uk
            </a>{' '}
            and we will get back to you.
          </p>
        </div>
      </section>

      {/* Sign-off */}
      <section
        className="relative w-full overflow-hidden flex items-center justify-center text-center"
        style={{ height: 'clamp(280px, 40vw, 420px)' }}
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1540914124281-342587941389?q=80&w=2670&auto=format&fit=crop"
            alt="Japanese restaurant atmosphere"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.6)' }} />
        <div className="relative z-10 px-6">
          <p className="font-body text-white/60 text-[15px] md:text-[17px] mb-5">We can&apos;t wait to meet you.</p>
          <Logo light className="justify-center" style={{ fontSize: 'clamp(48px, 8vw, 96px)' }} />
        </div>
      </section>
    </main>
  )
}
