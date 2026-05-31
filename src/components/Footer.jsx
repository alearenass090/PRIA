import React from 'react'

export default function Footer() {
  return (
    <footer style={s.footer}>
      <div style={s.inner}>
        <div style={s.logo}>
          <div style={s.logoMark}>P</div>
          <span style={s.logoText}>PRIA</span>
        </div>
        <p style={s.copy}>
          Tecnología que trabaja por vos · Carlos Paz, Córdoba · Argentina
        </p>
        <p style={s.year}>© {new Date().getFullYear()} PRIA. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

const s = {
  footer: {
    borderTop: '1px solid #e0dfd7',
    padding: '2.5rem 2rem',
    textAlign: 'center',
    background: '#ffffff',
  },
  inner: {
    maxWidth: '900px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.75rem',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '0.25rem',
  },
  logoMark: {
    width: '24px',
    height: '24px',
    background: '#1a5fb0',
    borderRadius: '6px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '12px',
    fontWeight: 700,
  },
  logoText: {
    fontSize: '16px',
    fontWeight: 600,
    color: '#1a1a18',
    letterSpacing: '-0.5px',
  },
  copy: {
    fontSize: '13px',
    color: '#9b9a93',
  },
  year: {
    fontSize: '12px',
    color: '#c0bfb8',
  },
}
