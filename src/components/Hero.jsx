import React, { useEffect, useRef } from 'react'

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(20px)'
    requestAnimationFrame(() => {
      el.style.transition = 'opacity 0.8s ease, transform 0.8s ease'
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    })
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section style={s.section}>
      <div ref={heroRef} style={s.inner}>
        <div style={s.badge}>
          <span style={s.badgeDot} />
          Automatización · IA · Desarrollo web
        </div>

        <h1 style={s.h1}>
          Tecnología que{' '}
          <em style={s.em}>trabaja</em>
          <br />
          para tu negocio
        </h1>

        <p style={s.p}>
          Desarrollamos agentes de IA, CRMs, creamos y automatizamos tu página web
          para que tu negocio crezca sin que estés mirando
          la pantalla todo el día.
        </p>

        <div style={s.actions}>
          <button
            style={s.btnPrimary}
            onClick={() => scrollTo('contacto')}
            onMouseEnter={e => e.currentTarget.style.background = '#1a5fb0'}
            onMouseLeave={e => e.currentTarget.style.background = '#1a1a18'}
          >
            Empezar ahora
          </button>
          <button
            style={s.btnSecondary}
            onClick={() => scrollTo('productos')}
            onMouseEnter={e => e.currentTarget.style.borderColor = '#9b9a93'}
            onMouseLeave={e => e.currentTarget.style.borderColor = '#e0dfd7'}
          >
            Ver productos →
          </button>
        </div>

        <div style={s.metrics}>
          {[
            { num: '48hs', label: 'Tiempo promedio de entrega' },
            { num: '100%', label: 'Proyectos a medida' },
            { num: 'IA', label: 'En todos los productos' },
            { num: '$0', label: 'Costo de consulta inicial' },
          ].map(({ num, label }) => (
            <div key={label} style={s.metric}>
              <div style={s.metricNum}>{num}</div>
              <div style={s.metricLabel}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const s = {
  section: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '120px 2rem 80px',
    background: 'linear-gradient(180deg, #f8f8f6 0%, #ffffff 60%)',
  },
  inner: {
    maxWidth: '800px',
    width: '100%',
    textAlign: 'center',
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    background: '#e8f0fb',
    color: '#1a5fb0',
    fontSize: '12px',
    fontWeight: 500,
    fontFamily: "'DM Mono', monospace",
    padding: '6px 16px',
    borderRadius: '100px',
    marginBottom: '2.5rem',
    letterSpacing: '0.02em',
  },
  badgeDot: {
    width: '6px',
    height: '6px',
    background: '#1a5fb0',
    borderRadius: '50%',
    display: 'inline-block',
    flexShrink: 0,
  },
  h1: {
    fontSize: 'clamp(40px, 7vw, 72px)',
    fontWeight: 300,
    letterSpacing: '-2.5px',
    lineHeight: 1.05,
    color: '#1a1a18',
    marginBottom: '1.5rem',
    fontFamily: "'DM Sans', sans-serif",
  },
  em: {
    fontStyle: 'italic',
    fontWeight: 600,
    color: '#1a5fb0',
  },
  p: {
    fontSize: '18px',
    color: '#5f5e5a',
    maxWidth: '500px',
    margin: '0 auto 2.5rem',
    lineHeight: 1.7,
    fontWeight: 300,
  },
  actions: {
    display: 'flex',
    gap: '12px',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: '5rem',
  },
  btnPrimary: {
    background: '#1a1a18',
    color: 'white',
    padding: '14px 30px',
    borderRadius: '10px',
    fontSize: '15px',
    fontWeight: 500,
    border: 'none',
    cursor: 'pointer',
    transition: 'background 0.2s',
    fontFamily: "'DM Sans', sans-serif",
  },
  btnSecondary: {
    background: 'transparent',
    color: '#1a1a18',
    padding: '14px 30px',
    borderRadius: '10px',
    fontSize: '15px',
    fontWeight: 500,
    border: '1.5px solid #e0dfd7',
    cursor: 'pointer',
    transition: 'border-color 0.2s',
    fontFamily: "'DM Sans', sans-serif",
  },
  metrics: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '1px',
    background: '#e0dfd7',
    border: '1px solid #e0dfd7',
    borderRadius: '16px',
    overflow: 'hidden',
  },
  metric: {
    background: 'white',
    padding: '1.5rem 1rem',
    textAlign: 'center',
  },
  metricNum: {
    fontSize: '32px',
    fontWeight: 600,
    letterSpacing: '-1px',
    color: '#1a1a18',
    marginBottom: '4px',
  },
  metricLabel: {
    fontSize: '12px',
    color: '#9b9a93',
    lineHeight: 1.4,
  },
}
