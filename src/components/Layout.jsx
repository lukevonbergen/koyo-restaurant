import { useState, useEffect, useRef, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'About', labelJa: 'について', href: '/about' },
  { label: 'Locations', labelJa: '所在地', href: '/locations' },
  { label: 'Menu', labelJa: 'メニュー', href: '/menu' },
  { label: 'Jobs', labelJa: '採用', href: '/jobs' },
]

/* ── Logo ── */
export function Logo({ light = false, className = '', style = {} }) {
  const textColor = light ? '#FFFFFF' : '#2A1A10'
  const kanjiColor = light ? 'rgba(255,255,255,0.85)' : '#E10613'
  const sloganColor = light ? 'rgba(255,255,255,0.6)' : '#621214'
  const t = 'transition-colors duration-300'
  return (
    <span className={`inline-flex items-center gap-[2px] select-none ${className}`} style={style} aria-label="KOYO Japanese Tapasu Bar">
      <span className={`font-display leading-none ${t}`} style={{ fontSize: '1em', color: textColor, letterSpacing: '-0.02em' }}>KOYO</span>
      <span className={`leading-none ${t}`} style={{ fontSize: '0.85em', color: kanjiColor, fontWeight: 400 }}>紅葉</span>
      <span className={`flex flex-col items-start leading-[1.15] ml-[0.3em] ${t}`} style={{ fontSize: '0.22em', color: sloganColor, letterSpacing: '0.12em', fontFamily: 'var(--font-body)', fontWeight: 500 }}>
        <span>JAPANESE</span>
        <span>TAPASU</span>
        <span>BAR</span>
      </span>
    </span>
  )
}

/* ── Arrow icon ── */
export const ArrowIcon = ({ size = 12 }) => (
  <svg width={size} height={size} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="ml-2 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5">
    <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" />
  </svg>
)

/* ── CTA text flip (EN → JP on hover) ── */
export function CtaFlip({ label, labelJa }) {
  return (
    <span className="relative inline-flex flex-col items-center overflow-hidden" style={{ height: '14px' }}>
      <span className="block leading-[14px] transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/cta:-translate-y-full">{label}</span>
      <span className="block leading-[14px] transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/cta:-translate-y-full" aria-hidden="true">{labelJa}</span>
    </span>
  )
}

/* Icons */
const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
    <circle cx="8" cy="8" r="5.5" /><path d="M12.5 12.5L16 16" />
  </svg>
)
function MenuToggleIcon({ isOpen }) {
  const bar = 'block absolute left-1/2 -translate-x-1/2 h-[1.5px] w-[18px] bg-current transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]'
  return (
    <span className="relative w-6 h-6 flex items-center justify-center" aria-hidden="true">
      <span className={bar} style={{ top: isOpen ? '11.25px' : '6px', transform: isOpen ? 'translateX(-50%) rotate(45deg)' : 'translateX(-50%) rotate(0)' }} />
      <span className={bar} style={{ top: '11.25px', opacity: isOpen ? 0 : 1, transform: isOpen ? 'translateX(-50%) scaleX(0)' : 'translateX(-50%) scaleX(1)' }} />
      <span className={bar} style={{ top: isOpen ? '11.25px' : '16.5px', transform: isOpen ? 'translateX(-50%) rotate(-45deg)' : 'translateX(-50%) rotate(0)' }} />
    </span>
  )
}
const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
)
const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="3" /><path d="M8 11V16M8 8V8.01M12 16V11M16 16V13C16 11.9 15.1 11 14 11C12.9 11 12 11.9 12 13" />
  </svg>
)
const TwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M13.808 10.469L20.88 2.25h-1.676l-6.142 7.138L8.125 2.25H2.25l7.418 10.796L2.25 21.75h1.676l6.486-7.54 5.181 7.54h5.876l-7.661-11.281zm-2.296 2.671l-.752-1.076L4.626 3.516h2.575l4.826 6.905.752 1.076 6.276 8.978h-2.575l-5.142-7.335z" />
  </svg>
)
const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 011-1h3v-4h-3a5 5 0 00-5 5v2.01h-2l-.396 3.98h2.396v8.01z" />
  </svg>
)

/* ── NavLink helper: uses <Link> for internal routes, <a> for hash links ── */
function NavAnchor({ href, children, className, onMouseEnter, innerRef }) {
  const isInternal = href.startsWith('/') && !href.includes('#')
  if (isInternal) {
    return <Link to={href} ref={innerRef} className={className} onMouseEnter={onMouseEnter}>{children}</Link>
  }
  return <a href={href} ref={innerRef} className={className} onMouseEnter={onMouseEnter}>{children}</a>
}

/* ═══════════════════════════════════════════════════════════
   NAVBAR
   ═══════════════════════════════════════════════════════════ */

export function Navbar({ onMenuToggle, forceScrolled = false, mobileMenuOpen = false }) {
  const [scrolled, setScrolled] = useState(forceScrolled)
  const [pillStyle, setPillStyle] = useState({ opacity: 0, left: 0, width: 0, top: 0, height: 0 })
  const navRef = useRef(null)
  const navContainerRef = useRef(null)
  const linkRefs = useRef([])

  /* Publish navbar height as CSS variable so sticky elements can align */
  useEffect(() => {
    const el = navRef.current
    if (!el) return
    const update = () => {
      document.documentElement.style.setProperty('--nav-height', `${el.offsetHeight}px`)
    }
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  useEffect(() => {
    if (forceScrolled) { setScrolled(true); return }
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [forceScrolled])

  const handleLinkEnter = useCallback((index) => {
    const link = linkRefs.current[index]
    const container = navContainerRef.current
    if (!link || !container) return
    const cr = container.getBoundingClientRect()
    const lr = link.getBoundingClientRect()
    setPillStyle({ opacity: 1, left: lr.left - cr.left, top: lr.top - cr.top, width: lr.width, height: lr.height })
  }, [])

  const handleNavLeave = useCallback(() => {
    setPillStyle((p) => ({ ...p, opacity: 0 }))
  }, [])

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 md:px-8 lg:px-12 transition-all duration-300"
      style={
        scrolled || mobileMenuOpen
          ? { paddingTop: '12px', paddingBottom: '12px', backgroundColor: '#FFFFFF', boxShadow: '0 1px 0 #E5E5E5' }
          : { paddingTop: '20px', paddingBottom: '20px', backgroundColor: 'transparent' }
      }
      aria-label="Main navigation"
    >
      <Link to="/" className="shrink-0 no-underline transition-all duration-300" style={{ fontSize: '20px' }}>
        <Logo light={!scrolled && !mobileMenuOpen} />
      </Link>

      <div
        ref={navContainerRef}
        className="hidden lg:flex items-center gap-1 rounded-full px-2 py-1.5 transition-all duration-300 relative"
        style={
          scrolled
            ? { backgroundColor: '#F2F2F2' }
            : { backgroundColor: 'rgba(30,30,30,0.6)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }
        }
        onMouseLeave={handleNavLeave}
      >
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            left: pillStyle.left, top: pillStyle.top, width: pillStyle.width, height: pillStyle.height,
            opacity: pillStyle.opacity,
            backgroundColor: scrolled ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.15)',
            transition: 'left 0.1s cubic-bezier(0.4,0,0.2,1), width 0.1s cubic-bezier(0.4,0,0.2,1), opacity 0.08s ease',
          }}
          aria-hidden="true"
        />
        {NAV_LINKS.map((link, i) => (
          <NavAnchor
            key={link.label}
            innerRef={(el) => (linkRefs.current[i] = el)}
            href={link.href}
            className={`group/nav relative z-10 px-4 py-2 rounded-full text-[13px] font-body font-normal no-underline transition-colors duration-200 whitespace-nowrap overflow-hidden ${
              scrolled ? 'text-text' : 'text-white'
            }`}
            onMouseEnter={() => handleLinkEnter(i)}
          >
            <span className="relative inline-flex flex-col h-[1.2em] overflow-hidden">
              <span className="transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/nav:-translate-y-full">{link.label}</span>
              <span className="transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/nav:-translate-y-full" aria-hidden="true">{link.labelJa}</span>
            </span>
          </NavAnchor>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <a
          href="/contact"
          className="group/cta hidden sm:inline-flex items-center justify-center rounded-full font-body font-medium no-underline tracking-wide transition-all duration-300 overflow-hidden"
          style={{
            fontSize: '12px',
            height: '36px',
            paddingLeft: '20px',
            paddingRight: '20px',
            ...(scrolled || mobileMenuOpen
              ? { backgroundColor: '#111111', color: '#FFFFFF' }
              : { backgroundColor: '#FFFFFF', color: '#111111' }),
          }}
        >
          <CtaFlip label="Contact Us" labelJa="お問い合わせ" />
          <ArrowIcon />
        </a>
        <button
          onClick={onMenuToggle}
          className={`lg:hidden flex items-center justify-center w-10 h-10 rounded-full border-none cursor-pointer bg-transparent transition-colors duration-300 ${
            scrolled || mobileMenuOpen ? 'text-text' : 'text-white'
          }`}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <MenuToggleIcon isOpen={mobileMenuOpen} />
        </button>
      </div>
    </nav>
  )
}

/* ═══════════════════════════════════════════════════════════
   MOBILE MENU
   ═══════════════════════════════════════════════════════════ */

export function MobileMenu({ isOpen, onClose }) {
  const totalItems = NAV_LINKS.length + 1 // links + CTA
  const itemDuration = 50 // ms between each item stagger
  const closeContentDuration = totalItems * itemDuration + 250 // total time for content to animate out

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-30 lg:hidden"
        style={{
          backgroundColor: 'rgba(0,0,0,0.3)',
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
          transition: isOpen
            ? 'opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1)'
            : `opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1) ${closeContentDuration * 0.5}ms`,
        }}
        onClick={onClose}
        aria-hidden="true"
      />
      {/* Panel */}
      <div
        className="fixed left-0 right-0 bottom-0 z-40 bg-white lg:hidden overflow-hidden"
        style={{
          top: 0,
          paddingTop: 'var(--nav-height, 52px)',
          transform: isOpen ? 'translateY(0)' : 'translateY(-100%)',
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
          transition: isOpen
            ? 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)'
            : `transform 0.45s cubic-bezier(0.4, 0, 0.2, 1) ${closeContentDuration * 0.6}ms, opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1) ${closeContentDuration * 0.6}ms`,
        }}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
      >
        <nav className="flex flex-col px-8 pt-8 pb-10 gap-1 h-full">
          {NAV_LINKS.map((link, i) => {
            const isInternal = link.href.startsWith('/') && !link.href.includes('#')
            // On close: reverse stagger — last item animates out first
            const reverseI = NAV_LINKS.length - 1 - i
            const inner = (
              <span
                className="flex items-baseline justify-between"
                style={{
                  transitionProperty: 'opacity, transform',
                  transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
                  transitionDuration: '0.4s',
                  transitionDelay: isOpen ? `${80 + i * itemDuration}ms` : `${reverseI * itemDuration}ms`,
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? 'translateY(0)' : 'translateY(-8px)',
                }}
              >
                <span>{link.label}</span>
                <span className="font-body font-normal text-[13px] text-text-muted tracking-wide">{link.labelJa}</span>
              </span>
            )
            const cls = "font-display text-[28px] text-text no-underline py-2 hover:text-accent-rust transition-colors duration-200 block"
            return isInternal ? (
              <Link key={link.label} to={link.href} onClick={onClose} className={cls} tabIndex={isOpen ? 0 : -1}>
                {inner}
              </Link>
            ) : (
              <a key={link.label} href={link.href} onClick={onClose} className={cls} tabIndex={isOpen ? 0 : -1}>
                {inner}
              </a>
            )
          })}
          <div
            className="mt-auto pt-6"
            style={{
              transitionProperty: 'opacity, transform',
              transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
              transitionDuration: '0.4s',
              transitionDelay: isOpen ? `${80 + NAV_LINKS.length * itemDuration}ms` : '0ms',
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? 'translateY(0)' : 'translateY(-8px)',
            }}
          >
            <a href="/contact" onClick={onClose} className="group/cta inline-flex items-center px-6 py-3 rounded-full bg-text text-white text-[13px] font-body font-medium no-underline" tabIndex={isOpen ? 0 : -1}>
              <CtaFlip label="Contact Us" labelJa="お問い合わせ" />
              <ArrowIcon />
            </a>
          </div>
        </nav>
      </div>
    </>
  )
}

/* ═══════════════════════════════════════════════════════════
   FOOTER
   ═══════════════════════════════════════════════════════════ */

export function Footer() {
  return (
    <footer className="bg-footer-bg text-footer-text" aria-label="Footer">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[35%_20%_20%_25%] gap-12 lg:gap-8">
          <div>
            <h3 className="font-display text-white text-[24px] md:text-[28px] leading-[1.2] mb-8 max-w-[300px]">
              Join The KOYO Team
            </h3>
            <Link to="/jobs" className="group/cta inline-flex items-center px-7 py-3 rounded-full text-white text-[13px] font-body font-medium no-underline transition-all duration-300 hover:bg-white hover:text-black" style={{ height: '40px', border: '1px solid rgba(255,255,255,0.3)' }}>
              <CtaFlip label="Join Now" labelJa="参加する" />
              <ArrowIcon />
            </Link>
          </div>
          <div>
            <span className="block font-body text-footer-muted uppercase text-[11px] tracking-[0.15em] mb-5">Navigation Links</span>
            <div className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => {
                const isInternal = link.href.startsWith('/') && !link.href.includes('#')
                const cls = "group/footlink font-body text-white text-[14px] no-underline transition-opacity duration-150 hover:opacity-70"
                const inner = (
                  <span className="relative inline-flex flex-col overflow-hidden" style={{ height: '1.4em' }}>
                    <span className="block leading-[1.4em] transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/footlink:-translate-y-full">{link.label}</span>
                    <span className="block leading-[1.4em] transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/footlink:-translate-y-full" aria-hidden="true">{link.labelJa}</span>
                  </span>
                )
                return isInternal ? (
                  <Link key={link.label} to={link.href} className={cls}>{inner}</Link>
                ) : (
                  <a key={link.label} href={link.href} className={cls}>{inner}</a>
                )
              })}
            </div>
          </div>
          <div>
            <span className="block font-body text-footer-muted uppercase text-[11px] tracking-[0.15em] mb-5">Connect On</span>
            <div className="grid grid-cols-2 gap-3 max-w-[100px]">
              {[{ Icon: InstagramIcon, label: 'Instagram' }, { Icon: LinkedInIcon, label: 'LinkedIn' }, { Icon: TwitterIcon, label: 'X (Twitter)' }, { Icon: FacebookIcon, label: 'Facebook' }].map(({ Icon, label }) => (
                <a key={label} href="#" className="w-10 h-10 rounded-full flex items-center justify-center text-white no-underline transition-colors duration-200" style={{ border: '1px solid rgba(255,255,255,0.2)' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'} aria-label={label}>
                  <Icon />
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-start lg:items-end justify-start">
            <a href="/contact" className="group/cta inline-flex items-center px-7 py-3 rounded-full text-white text-[13px] font-body font-medium no-underline transition-all duration-300 hover:bg-white hover:text-black" style={{ height: '40px', border: '1px solid rgba(255,255,255,0.3)' }}>
              <CtaFlip label="Contact Us" labelJa="お問い合わせ" />
              <ArrowIcon />
            </a>
          </div>
        </div>
      </div>
      <div style={{ borderTop: '1px solid #222222' }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-24 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="font-body text-footer-muted text-[12px]">&copy; KOYO 2025</span>
        </div>
      </div>
    </footer>
  )
}

/* ═══════════════════════════════════════════════════════════
   BRAND WORDMARK
   ═══════════════════════════════════════════════════════════ */

export function BrandWordmark() {
  const ref = useRef(null)
  const rafRef = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onScroll = () => {
      if (rafRef.current) return
      rafRef.current = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect()
        const wH = window.innerHeight
        if (rect.top < wH && rect.bottom > 0) {
          const progress = (wH - rect.top) / (wH + rect.height)
          el.style.backgroundPositionY = `${50 + (progress * 60 - 30)}%`
        }
        rafRef.current = null
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => { window.removeEventListener('scroll', onScroll); if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [])

  return (
    <section className="w-full bg-footer-bg overflow-hidden" aria-label="KOYO brand wordmark">
      <div ref={ref} className="w-full text-center select-none leading-none py-4 md:py-6 flex items-center justify-center font-display" style={{ fontSize: 'clamp(120px, 18vw, 300px)', letterSpacing: '-0.02em' }} aria-hidden="true">
        <span style={{ color: '#FFFFFF' }}>KOYO</span><span style={{ fontSize: '0.85em', color: '#E10613' }}>紅葉</span>
      </div>
    </section>
  )
}
