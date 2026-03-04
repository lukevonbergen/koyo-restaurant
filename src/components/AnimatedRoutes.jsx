import { useState, useEffect } from 'react'
import { useLocation, useOutlet } from 'react-router-dom'
import { Navbar, MobileMenu, Footer, BrandWordmark } from './Layout'

export default function AnimatedRoutes() {
  const location = useLocation()
  const outlet = useOutlet()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    setMobileMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileMenuOpen])

  return (
    <>
      <Navbar
        onMenuToggle={() => setMobileMenuOpen((o) => !o)}
        mobileMenuOpen={mobileMenuOpen}
      />
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
      <div key={location.pathname} className="page-fade-in">
        {outlet}
      </div>
      <Footer />
      <BrandWordmark />
    </>
  )
}
