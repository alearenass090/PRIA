import React, { useState, useEffect } from 'react'

const styles = {
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    padding: '0 2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '60px',
    transition: 'background 0.3s, border-bottom 0.3s',
  },
  navScrolled: {
    background: 'rgba(255,255,255,0.92)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    borderBottom: '1px solid #e0dfd7',
  },
  navTop: {
    background: 'transparent',
    borderBottom: '1px solid transparent',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '20px',
    fontWeight: 600,
    letterSpacing: '-0.5px',
    color: '#1a1a18',
    cursor: 'pointer',
  },
  logoMark: {
    width: '30px',
    height: '30px',
    background: '#1a5fb0',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '14px',
    fontWeight: 700,
    letterSpacing: '-0.5px',
    flexShrink: 0,
  },
  links: {
    display: 'flex',
    gap: '2rem',
    alignItems: 'center',
  },
  link: {
    color: '#5f5e5a',
    fontSize: '14px',
    fontWeight: 400,
    transition: 'color 0.2s',
    cursor: 'pointer',
  },
  cta: {
    background: '#1a1a18',
    color: 'white',
    padding: '8px 20px',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: 500,
    transition: 'background 0.2s',
    cursor: 'pointer',
    border: 'none',
  },
  menuBtn: {
    display: 'none',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '4px',
    color: '#1a1a18',
  },
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      <nav style={{ ...styles.nav, ...(scrolled ? styles.navScrolled : styles.navTop) }}>
        <div style={styles.logo} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div style={styles.logoMark}>P</div>
          PRIA
        </div>

        <div style={styles.links} className="nav-links">
          {['servicios', 'productos', 'proceso', 'contacto'].map((id) => (
            <span
              key={id}
              style={styles.link}
              onClick={() => scrollTo(id)}
              onMouseEnter={e => e.target.style.color = '#1a1a18'}
              onMouseLeave={e => e.target.style.color = '#5f5e5a'}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </span>
          ))}
          <button
            style={styles.cta}
            onClick={() => scrollTo('contacto')}
            onMouseEnter={e => e.target.style.background = '#1a5fb0'}
            onMouseLeave={e => e.target.style.background = '#1a1a18'}
          >
            Hablemos
          </button>
        </div>
      </nav>

      <style>{`
        @media (max-width: 640px) {
          .nav-links { display: none !important; }
        }
      `}</style>
    </>
  )
}
