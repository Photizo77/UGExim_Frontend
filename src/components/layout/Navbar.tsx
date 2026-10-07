import { NavLink } from 'react-router-dom'

// ─── Logo badge ───────────────────────────────────────────────────────────────
function Logo() {
  return (
    <NavLink to="/" aria-label="UgExim Home" style={{ textDecoration: 'none' }}>
      <div
        style={{
          background: '#fff',
          borderRadius: 10,
          padding: '4px 10px',
          display: 'inline-flex',
          alignItems: 'center',
        }}
      >
        <img
          src="/logo.png"
          alt="UgExim"
          style={{ height: 32, width: 'auto', objectFit: 'contain', display: 'block' }}
          onError={(e) => {
            const img = e.target as HTMLImageElement
            img.style.display = 'none'
            const fb = img.nextElementSibling as HTMLElement | null
            if (fb) fb.style.display = 'flex'
          }}
        />
        <span
          style={{
            display: 'none',
            alignItems: 'center',
            fontWeight: 800,
            fontSize: 20,
            color: '#111',
            letterSpacing: '-0.02em',
          }}
        >
          UgE<span style={{ color: '#F8AE0D' }}>x</span>im
        </span>
      </div>
    </NavLink>
  )
}

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Financial Solutions', to: '/financial-solutions' },
  { label: 'Insights', to: '/insights' },
  { label: 'About', to: '/about' },
  { label: 'FAQ', to: '/faq' },
]

export default function Navbar() {
  return (
    <header
      style={{
        position: 'relative',
        zIndex: 40,
        width: '100%',
        maxWidth: 1280,
        margin: '0 auto',
        padding: '14px 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexShrink: 0,
        fontFamily: '"Plus Jakarta Sans", Inter, sans-serif',
      }}
    >
      <Logo />

      <nav style={{ display: 'flex', alignItems: 'center', gap: 32, fontSize: 14, fontWeight: 500 }}>
        {NAV_LINKS.map(({ label, to }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            style={({ isActive }) => ({
              color: isActive ? '#F8AE0D' : '#ffffff',
              textDecoration: 'none',
              position: 'relative',
              paddingBottom: 4,
              opacity: isActive ? 1 : 0.85,
              transition: 'opacity 0.15s',
            })}
          >
            {({ isActive }) => (
              <>
                {label}
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: 24,
                      height: 2.5,
                      background: '#F8AE0D',
                      borderRadius: 99,
                      boxShadow: '0 0 8px #F8AE0D',
                      display: 'block',
                    }}
                  />
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <button
          type="button"
          style={{
            padding: '8px 20px',
            fontSize: 13,
            fontWeight: 600,
            color: '#ffffff',
            background: 'transparent',
            border: '1px solid rgba(255,255,255,0.3)',
            borderRadius: 999,
            cursor: 'pointer',
          }}
        >
          Log In
        </button>
        <button
          type="button"
          style={{
            padding: '8px 20px',
            fontSize: 13,
            fontWeight: 700,
            color: '#0a0a0a',
            background: '#F8AE0D',
            border: 'none',
            borderRadius: 999,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            boxShadow: '0 0 18px rgba(248,174,13,0.4)',
          }}
        >
          Get Started
          <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          </svg>
        </button>
      </div>
    </header>
  )
}
