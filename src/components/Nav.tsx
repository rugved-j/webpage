import { Link, useRouterState } from '@tanstack/react-router'
import { useState, useEffect } from 'react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/resume', label: 'Resume' },
  { to: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { location } = useRouterState()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [location.pathname])

  return (
    <header className={`nav-header${scrolled ? ' nav-scrolled' : ''}`}>
      <div className="nav-inner">
        <Link to="/" className="nav-brand">
          <span className="nav-brand-rb">RB</span>
          <span className="nav-brand-name">Rugved Bader</span>
        </Link>

        <nav className="nav-links-desktop">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="nav-link"
              activeProps={{ className: 'nav-link nav-link-active' }}
              activeOptions={{ exact: link.to === '/' }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="nav-hamburger"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className={`hamburger-bar${menuOpen ? ' open-1' : ''}`} />
          <span className={`hamburger-bar${menuOpen ? ' open-2' : ''}`} />
          <span className={`hamburger-bar${menuOpen ? ' open-3' : ''}`} />
        </button>
      </div>

      {menuOpen && (
        <nav className="nav-mobile">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="nav-mobile-link"
              activeProps={{ className: 'nav-mobile-link nav-link-active' }}
              activeOptions={{ exact: link.to === '/' }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
