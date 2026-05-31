import React from 'react'

const products = [
  {
    id: 'PRIA REST',
    name: 'Para restaurantes',
    desc: 'Bot de reservas, menú digital y panel de gestión de clientes con fidelización automática.',
    featured: true,
    badge: 'NUEVO',
    features: [
      'Bot que responde y toma reservas 24/7',
      'Menú digital actualizable',
      'Recordatorios automáticos por WhatsApp',
      'Panel de clientes y estadísticas',
    ],
  },
  {
    id: 'PRIA STORE',
    name: 'Para tiendas',
    desc: 'Tienda online profesional con catálogo, carrito y gestión de pedidos integrada.',
    featured: false,
    badge: null,
    features: [
      'Catálogo de productos con fotos',
      'Integración con MercadoPago',
      'Gestión de stock e inventario',
      'Notificaciones automáticas',
    ],
  },
  {
    id: 'PRIA PRO',
    name: 'A medida',
    desc: 'Desarrollo personalizado para negocios con necesidades específicas.',
    featured: false,
    badge: null,
    features: [
      'Análisis de procesos incluido',
      'Desarrollo 100% personalizado',
      'Integración con sistemas existentes',
      'Soporte continuo post-entrega',
    ],
  },
]

export default function Products() {
  return (
    <section id="productos" style={s.section}>
      <div style={s.inner}>
        <div style={s.label}>Productos</div>
        <h2 style={s.h2}>
          Soluciones listas
          <br />
          <strong style={s.strong}>para cada industria</strong>
        </h2>
        <p style={s.desc}>
          Productos específicos para los negocios que más necesitan
          tecnología y menos tiempo tienen para aprenderla.
        </p>

        <div style={s.grid}>
          {products.map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductCard({ id, name, desc, featured, badge, features }) {
  const [hovered, setHovered] = React.useState(false)
  return (
    <div
      style={{
        ...s.card,
        border: featured
          ? '2px solid #1a5fb0'
          : hovered
          ? '1.5px solid #1a5fb0'
          : '1.5px solid #e0dfd7',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {badge && <div style={s.badge}>{badge}</div>}
      <div style={s.productId}>{id}</div>
      <h3 style={s.cardName}>{name}</h3>
      <p style={s.cardDesc}>{desc}</p>
      <ul style={s.features}>
        {features.map((f) => (
          <li key={f} style={s.feature}>
            <span style={s.arrow}>→</span>
            {f}
          </li>
        ))}
      </ul>
    </div>
  )
}

const s = {
  section: {
    padding: '100px 2rem',
    background: '#f8f8f6',
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
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '1rem',
  },
  card: {
    background: 'white',
    borderRadius: '14px',
    padding: '1.75rem',
    transition: 'border-color 0.2s, transform 0.25s',
    position: 'relative',
    cursor: 'default',
  },
  badge: {
    position: 'absolute',
    top: '16px',
    right: '16px',
    background: '#1a5fb0',
    color: 'white',
    fontSize: '10px',
    fontWeight: 600,
    fontFamily: "'DM Mono', monospace",
    padding: '3px 10px',
    borderRadius: '100px',
    letterSpacing: '0.05em',
  },
  productId: {
    fontSize: '12px',
    fontFamily: "'DM Mono', monospace",
    color: '#1a5fb0',
    marginBottom: '0.5rem',
    letterSpacing: '0.05em',
  },
  cardName: {
    fontSize: '20px',
    fontWeight: 600,
    color: '#1a1a18',
    marginBottom: '0.75rem',
    letterSpacing: '-0.5px',
  },
  cardDesc: {
    fontSize: '14px',
    color: '#5f5e5a',
    lineHeight: 1.6,
    marginBottom: '1.25rem',
  },
  features: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  feature: {
    fontSize: '13px',
    color: '#5f5e5a',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '8px',
  },
  arrow: {
    color: '#1a5fb0',
    fontSize: '12px',
    flexShrink: 0,
    marginTop: '2px',
  },
}
