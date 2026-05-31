import React from 'react'

const services = [
  {
    icon: '🤖',
    title: 'Bots con IA',
    desc: 'Asistentes inteligentes para WhatsApp, Instagram o tu web que atienden clientes, responden preguntas y toman reservas automáticamente.',
    tag: 'WhatsApp · Web · Instagram',
  },
  {
    icon: '📋',
    title: 'CRM a medida',
    desc: 'Sistemas de gestión de clientes pensados para tu negocio. Sin complicaciones, sin funciones que no usás.',
    tag: 'Gestión · Seguimiento · IA',
  },
  {
    icon: '🌐',
    title: 'Páginas web',
    desc: 'Diseño y desarrollo de sitios profesionales, tiendas online y landing pages que convierten visitas en clientes.',
    tag: 'React · E-commerce · SEO',
  },
  {
    icon: '⚡',
    title: 'Automatizaciones',
    desc: 'Conectamos tus herramientas para que los procesos repetitivos sucedan solos. Más tiempo para lo que importa.',
    tag: 'n8n · Make · Zapier',
  },
]

export default function Services() {
  return (
    <section id="servicios" style={s.section}>
      <div style={s.inner}>
        <div style={s.label}>Servicios</div>
        <h2 style={s.h2}>
          Todo lo que tu negocio
          <br />
          <strong style={s.strong}>necesita, digital</strong>
        </h2>
        <p style={s.desc}>
          Desde una página web hasta un sistema completo con IA integrada.
          Desarrollamos lo que necesitás, sin vueltas.
        </p>

        <div style={s.grid}>
          {services.map((svc) => (
            <ServiceCard key={svc.title} {...svc} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ icon, title, desc, tag }) {
  const [hovered, setHovered] = React.useState(false)
  return (
    <div
      style={{ ...s.card, background: hovered ? '#f8f8f6' : '#ffffff' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={s.icon}>{icon}</div>
      <h3 style={s.cardTitle}>{title}</h3>
      <p style={s.cardDesc}>{desc}</p>
      <span style={s.tag}>{tag}</span>
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
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1.5px',
    background: '#e0dfd7',
    border: '1px solid #e0dfd7',
    borderRadius: '16px',
    overflow: 'hidden',
  },
  card: {
    padding: '2rem',
    transition: 'background 0.2s',
    cursor: 'default',
  },
  icon: {
    width: '44px',
    height: '44px',
    background: '#e8f0fb',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    marginBottom: '1.25rem',
  },
  cardTitle: {
    fontSize: '16px',
    fontWeight: 600,
    color: '#1a1a18',
    marginBottom: '0.5rem',
  },
  cardDesc: {
    fontSize: '14px',
    color: '#5f5e5a',
    lineHeight: 1.65,
    marginBottom: '1rem',
  },
  tag: {
    display: 'inline-block',
    fontSize: '11px',
    fontFamily: "'DM Mono', monospace",
    color: '#1a5fb0',
    background: '#e8f0fb',
    padding: '4px 12px',
    borderRadius: '100px',
  },
}
