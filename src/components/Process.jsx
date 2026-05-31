import React from 'react'

const steps = [
  {
    num: '01',
    title: 'Hablamos',
    desc: 'Entendemos tu negocio y qué necesitás resolver. Sin formularios complicados.',
  },
  {
    num: '02',
    title: 'Diseñamos',
    desc: 'Te mostramos exactamente qué vamos a hacer, cuánto cuesta y cuándo está listo.',
  },
  {
    num: '03',
    title: 'Construimos',
    desc: 'Desarrollamos tu solución con actualizaciones constantes durante el proceso.',
  },
  {
    num: '04',
    title: 'Lo tuyo, listo',
    desc: 'Entregamos funcionando, con capacitación y soporte para que no quedes solo.',
  },
]

export default function Process() {
  return (
    <section id="proceso" style={s.section}>
      <div style={s.inner}>
        <div style={s.label}>Proceso</div>
        <h2 style={s.h2}>
          Simple, rápido,
          <br />
          <strong style={s.strong}>sin sorpresas</strong>
        </h2>
        <p style={s.desc}>
          Trabajamos en pasos claros para que siempre sepas
          qué está pasando con tu proyecto.
        </p>

        <div style={s.steps}>
          {steps.map((step, i) => (
            <Step key={step.num} {...step} last={i === steps.length - 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Step({ num, title, desc, last }) {
  return (
    <div style={{ ...s.step, borderRight: last ? 'none' : '1px solid #e0dfd7' }}>
      <div style={s.stepNum}>
        <span style={s.stepNumText}>{num}</span>
        <span style={s.stepNumLabel}> — {title.toUpperCase()}</span>
      </div>
      <h3 style={s.stepTitle}>{title}</h3>
      <p style={s.stepDesc}>{desc}</p>
    </div>
  )
}

const s = {
  section: {
    padding: '100px 2rem',
    background: '#ffffff',
  },
  inner: {
    maxWidth: '900px',
    margin: '0 auto',
  },
  label: {
    fontFamily: "'DM Mono', monospace",
    fontSize: '11px',
    fontWeight: 500,
    letterSpacing: '0.12em',
    color: '#1a5fb0',
    textTransform: 'uppercase',
    marginBottom: '1rem',
  },
  h2: {
    fontSize: 'clamp(28px, 4vw, 44px)',
    fontWeight: 300,
    letterSpacing: '-1.5px',
    lineHeight: 1.15,
    color: '#1a1a18',
    marginBottom: '1rem',
  },
  strong: {
    fontWeight: 600,
  },
  desc: {
    fontSize: '17px',
    color: '#5f5e5a',
    maxWidth: '480px',
    lineHeight: 1.7,
    fontWeight: 300,
    marginBottom: '3rem',
  },
  steps: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    background: '#f8f8f6',
    border: '1px solid #e0dfd7',
    borderRadius: '16px',
    overflow: 'hidden',
  },
  step: {
    padding: '2rem 1.5rem',
    background: '#f8f8f6',
  },
  stepNum: {
    fontFamily: "'DM Mono', monospace",
    fontSize: '11px',
    color: '#1a5fb0',
    fontWeight: 500,
    letterSpacing: '0.1em',
    marginBottom: '1rem',
  },
  stepNumText: {
    fontWeight: 600,
  },
  stepNumLabel: {
    color: '#9b9a93',
  },
  stepTitle: {
    fontSize: '17px',
    fontWeight: 600,
    color: '#1a1a18',
    marginBottom: '0.5rem',
    letterSpacing: '-0.3px',
  },
  stepDesc: {
    fontSize: '14px',
    color: '#5f5e5a',
    lineHeight: 1.6,
  },
}
