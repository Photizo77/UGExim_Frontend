import { NavLink, useNavigate } from 'react-router-dom'

function Logo() {
  return (
    <NavLink to="/" aria-label="UgExim Home" className="no-underline flex-shrink-0">
      <div className="bg-white rounded-[10px] px-2.5 py-1 inline-flex items-center">
        <img
          src="/logo.png"
          alt="UgExim"
          className="h-8 w-auto object-contain block"
          onError={(e) => {
            const img = e.target as HTMLImageElement
            img.style.display = 'none'
            const fb = img.nextElementSibling as HTMLElement | null
            if (fb) fb.style.display = 'flex'
          }}
        />
        <span
          style={{ display: 'none', fontWeight: 800, fontSize: 20, color: '#111', letterSpacing: '-0.02em' }}
          className="items-center"
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
  const navigate = useNavigate()
  return (
    <header
      className="relative z-40 w-full flex-shrink-0"
      style={{
        fontFamily: '"Plus Jakarta Sans", Inter, sans-serif',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'rgba(4,6,9,0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-3.5 flex items-center justify-between gap-4">
        <Logo />

        {/* Nav links — hidden below lg, visible lg+ */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium flex-1 justify-center">
          {NAV_LINKS.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className="relative pb-1 transition-opacity duration-150 no-underline"
              style={({ isActive }) => ({
                color: isActive ? '#F8AE0D' : '#ffffff',
                opacity: isActive ? 1 : 0.85,
                fontSize: 'clamp(12px, 1.1vw, 14px)',
              })}
            >
              {({ isActive }) => (
                <>
                  {label}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-[2.5px] rounded-full block"
                      style={{ background: '#F8AE0D', boxShadow: '0 0 8px #F8AE0D' }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Buttons */}
        <div className="flex items-center gap-2.5 flex-shrink-0">
          <button
            type="button"
            onClick={() => navigate('/login')}
            className="px-4 py-2 text-xs font-semibold text-white rounded-full cursor-pointer transition-colors"
            style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.3)' }}
          >
            Log In
          </button>
          <button
            type="button"
            onClick={() => navigate('/create-account')}
            className="px-4 py-2 text-xs font-bold rounded-full cursor-pointer flex items-center gap-1.5 flex-shrink-0"
            style={{ color: '#0a0a0a', background: '#F8AE0D', border: 'none', boxShadow: '0 0 18px rgba(248,174,13,0.4)' }}
          >
            <span className="hidden sm:inline">Get Started</span>
            <span className="sm:hidden">Start</span>
            <svg width="13" height="13" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
