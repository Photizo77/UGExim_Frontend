// Assets served from /public:
//   /logo.png    — UgExim logo (white bg)
//   /hero-bg.png — golden candlestick terrain image
import Navbar from '@/components/layout/Navbar'

const GOLD = '#F8AE0D'

function SparklineSVG() {
  return (
    <svg viewBox="0 0 140 40" fill="none" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
      <path d="M0 32 L20 28 L40 30 L60 18 L80 22 L100 8 L120 14 L140 4"
        stroke="#10B981" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="140" cy="4" r="2.5" fill="#10B981" />
    </svg>
  )
}

function PortfolioChartSVG() {
  return (
    <svg viewBox="0 0 200 70" fill="none" style={{ width: '100%', height: '100%' }}>
      <defs>
        <linearGradient id="pg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={GOLD} stopOpacity="0.4" />
          <stop offset="100%" stopColor={GOLD} stopOpacity="0.02" />
        </linearGradient>
      </defs>
      <path d="M0 65 L25 58 L55 50 L85 40 L110 30 L140 18 L170 9 L200 3 L200 70 L0 70 Z" fill="url(#pg)" />
      <path d="M0 65 L25 58 L55 50 L85 40 L110 30 L140 18 L170 9 L200 3"
        stroke={GOLD} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {(['Q1', 'Q2', 'Q3', 'Q4', 'NO'] as const).map((q, i) => (
        <text key={q} x={5 + i * 47} y="69" fontSize="6" fill="#6B7280" textAnchor="middle">{q}</text>
      ))}
    </svg>
  )
}

const FOOTER_ITEMS = [
  {
    label: 'Agribusiness Loans',
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
        <path d="M12 22V10" strokeLinecap="round" />
        <path d="M12 10C12 10 9 8 7 5c2 0 4 1 5 5z" strokeLinejoin="round" />
        <path d="M12 10C12 10 15 8 17 5c-2 0-4 1-5 5z" strokeLinejoin="round" />
        <path d="M12 15C12 15 9 13 7 10c2 0 4 1 5 5z" strokeLinejoin="round" />
        <path d="M12 15C12 15 15 13 17 10c-2 0-4 1-5 5z" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'Business Loans',
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
        <rect x="2" y="7" width="20" height="15" rx="2" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" strokeLinecap="round" />
        <line x1="2" y1="12" x2="22" y2="12" />
      </svg>
    ),
  },
  {
    label: 'Asset Finance',
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
        <path d="M5 17H3a1 1 0 01-1-1v-4l2-5h14l2 5v4a1 1 0 01-1 1h-2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="7.5" cy="17.5" r="2.5" />
        <circle cx="16.5" cy="17.5" r="2.5" />
        <path d="M5 9h14" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'Trade Finance',
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
        <path d="M3 15l4-8 4 5 3-3 4 6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 21H3" strokeLinecap="round" />
      </svg>
    ),
  },
]

export default function LandingPage() {
  return (
    <div
      className="flex flex-col overflow-hidden"
      style={{
        backgroundColor: '#040609',
        color: '#E2E8F0',
        fontFamily: '"Plus Jakarta Sans", Inter, sans-serif',
        height: '100vh',
        maxHeight: '100vh',
      }}
    >
      <Navbar />

      {/* ── Hero block ── */}
      <div className="relative w-full flex-1 min-h-0">

        {/* Background image */}
        <img
          src="/hero-bg.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{
            zIndex: 0,
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.65) 15%, rgba(0,0,0,1) 38%, rgba(0,0,0,1) 68%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.65) 15%, rgba(0,0,0,1) 38%, rgba(0,0,0,1) 68%, rgba(0,0,0,0) 100%)',
          }}
        />

        {/* Glow */}
        <div aria-hidden className="absolute inset-x-0 pointer-events-none" style={{
          top: '35%', height: 280, zIndex: 1,
          background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(248,174,13,0.2) 0%, rgba(248,174,13,0.07) 50%, transparent 80%)',
        }} />

        {/* Content grid — left text + right cards */}
        <div
          className="absolute inset-0 max-w-[1280px] mx-auto w-full px-6 lg:px-10 pt-6 lg:pt-8 grid gap-4"
          style={{ zIndex: 10, gridTemplateColumns: '1fr auto', alignItems: 'start' }}
        >
          {/* Left: copy */}
          <div className="flex flex-col items-start">
            <h1
              className="font-extrabold text-white leading-[1.08] tracking-tight mb-4"
              style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 3.2rem)',
                margin: '0 0 16px',
                letterSpacing: '-0.02em',
              }}
            >
              Build Your Financial
              <br />
              Future with{' '}
              <span style={{ background: GOLD, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Confidence
              </span>
            </h1>

            <p className="text-sm leading-relaxed mb-6 max-w-md" style={{ color: '#D1D5DB', fontSize: 'clamp(12px, 1.1vw, 14px)' }}>
              Uganda Exim Limited (UgExim) is a specialized financial institution
              bridging the financing gap for Ugandan exporters — providing innovative,
              flexible and affordable solutions to compete globally and drive
              foreign exchange earnings.
            </p>

            <a
              href="/about"
              className="inline-flex items-center gap-2.5 rounded-full font-bold no-underline transition-all"
              style={{
                padding: 'clamp(10px, 1vw, 13px) clamp(20px, 2vw, 26px)',
                fontSize: 'clamp(12px, 1.1vw, 14px)',
                color: '#0a0a0a',
                background: GOLD,
                boxShadow: '0 4px 24px rgba(248,174,13,0.35)',
              }}
            >
              Who We Are
              <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
              </svg>
            </a>
          </div>

          {/* Right: glass cards */}
          <div
            className="flex flex-col"
            style={{ gap: 'clamp(8px, 1.2vw, 20px)', width: 'clamp(220px, 23vw, 300px)' }}
          >
            {/* Card 1 */}
            <div style={{
              background: 'rgba(10,14,22,0.82)', backdropFilter: 'blur(18px)',
              border: '1px solid rgba(255,255,255,0.09)', borderRadius: 16,
              padding: 'clamp(10px, 1vw, 14px)', boxShadow: '0 16px 40px rgba(0,0,0,0.6)',
            }}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5">
                  <span className="flex items-center justify-center text-[10px] font-bold rounded-full w-5 h-5"
                    style={{ background: 'rgba(248,174,13,0.15)', border: '1px solid rgba(248,174,13,0.3)', color: GOLD }}>A</span>
                  <span className="text-xs font-semibold text-gray-200">Agribusiness Finance</span>
                </div>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                  style={{ color: '#34D399', background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)' }}>● Active</span>
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <div className="font-bold text-white" style={{ fontSize: 'clamp(16px, 1.6vw, 20px)', lineHeight: 1.2 }}>$22M+</div>
                  <div className="text-[11px] font-semibold mt-0.5" style={{ color: '#34D399' }}>Total Financed</div>
                </div>
                <div style={{ width: 'clamp(70px, 8vw, 100px)', height: 34 }}><SparklineSVG /></div>
              </div>
            </div>

            {/* Card 2 */}
            <div style={{
              background: 'rgba(10,14,22,0.82)', backdropFilter: 'blur(18px)',
              border: '1px solid rgba(255,255,255,0.09)', borderRadius: 16,
              padding: 'clamp(10px, 1vw, 14px)', boxShadow: '0 16px 40px rgba(0,0,0,0.6)',
            }}>
              <p className="text-[9px] font-semibold tracking-widest uppercase mb-1" style={{ color: '#6B7280', margin: '0 0 3px' }}>
                Export Portfolio
              </p>
              <div className="flex items-baseline justify-between mb-1.5">
                <span className="font-bold text-white" style={{ fontSize: 'clamp(14px, 1.4vw, 18px)' }}>63+ Exporters</span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full"
                  style={{ color: '#34D399', background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.2)' }}>17+ Sectors</span>
              </div>
              <span className="inline-block text-[10px] font-semibold px-2 py-0.5 rounded mb-1.5"
                style={{ color: GOLD, background: 'rgba(248,174,13,0.12)', border: '1px solid rgba(248,174,13,0.22)' }}>BOU Regulated</span>
              <div style={{ height: 'clamp(44px, 5vw, 60px)', width: '100%' }}><PortfolioChartSVG /></div>
              <p className="text-[8px] mt-0.5" style={{ color: '#6B7280' }}>● Agro processing, Manufacturing, Logistics &amp; more</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Features bar ── */}
      <footer
        className="w-full flex-shrink-0"
        style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
      >
        <div
          className="max-w-[1280px] mx-auto px-6 lg:px-10 py-3"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'clamp(8px, 1.5vw, 16px)' }}
        >
          {FOOTER_ITEMS.map(item => (
            <div key={item.label} className="flex items-center gap-2.5">
              <div
                className="rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  width: 'clamp(32px, 3vw, 44px)',
                  height: 'clamp(32px, 3vw, 44px)',
                  background: 'rgba(248,174,13,0.08)',
                  border: '1px solid rgba(248,174,13,0.2)',
                  color: GOLD,
                }}
              >
                {item.icon}
              </div>
              <span className="font-semibold text-white" style={{ fontSize: 'clamp(11px, 1vw, 13px)' }}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </footer>
    </div>
  )
}
