// Assets served from /public:
//   /logo.png    — UgExim logo (white bg)
//   /hero-bg.png — golden candlestick terrain image
import Navbar from '@/components/layout/Navbar'

// ─── Sparkline (Coffee Exports card) ─────────────────────────────────────────
function SparklineSVG() {
  return (
    <svg viewBox="0 0 140 40" fill="none" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
      <path
        d="M0 32 L20 28 L40 30 L60 18 L80 22 L100 8 L120 14 L140 4"
        stroke="#10B981"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="140" cy="4" r="2.5" fill="#10B981" />
    </svg>
  )
}

// ─── Area chart (Portfolio Financing card) ────────────────────────────────────
function PortfolioChartSVG() {
  return (
    <svg viewBox="0 0 200 70" fill="none" style={{ width: '100%', height: '100%' }}>
      <defs>
        <linearGradient id="pg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FECC15" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#FECC15" stopOpacity="0.02" />
        </linearGradient>
      </defs>
      <path
        d="M0 65 L25 58 L55 50 L85 40 L110 30 L140 18 L170 9 L200 3 L200 70 L0 70 Z"
        fill="url(#pg)"
      />
      <path
        d="M0 65 L25 58 L55 50 L85 40 L110 30 L140 18 L170 9 L200 3"
        stroke="#FECC15"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {(['Q1', 'Q2', 'Q3', 'Q4', 'NO'] as const).map((q, i) => (
        <text key={q} x={5 + i * 47} y="69" fontSize="6" fill="#6B7280" textAnchor="middle">
          {q}
        </text>
      ))}
    </svg>
  )
}

// ─── Icon box wrapper ─────────────────────────────────────────────────────────
function IconBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        width: 44,
        height: 44,
        borderRadius: 12,
        background: 'rgba(248,174,13,0.08)',
        border: '1px solid rgba(248,174,13,0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        color: '#FECC15',
      }}
    >
      {children}
    </div>
  )
}

// ─── Landing Page ─────────────────────────────────────────────────────────────
export default function LandingPage() {
  return (
    <div
      style={{
        backgroundColor: '#040609',
        color: '#E2E8F0',
        fontFamily: '"Plus Jakarta Sans", Inter, sans-serif',
        height: '100vh',
        maxHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      <Navbar />

      {/* ══════════════════════════════════════════
          HERO BLOCK — flex:1 fills remaining height
      ══════════════════════════════════════════ */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          flex: 1,
          minHeight: 0,
        }}
      >
        {/* Hero background image */}
        <img
          src="/hero-bg.png"
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center center',
            zIndex: 0,
            maskImage:
              'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.65) 15%, rgba(0,0,0,1) 38%, rgba(0,0,0,1) 68%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage:
              'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.65) 15%, rgba(0,0,0,1) 38%, rgba(0,0,0,1) 68%, rgba(0,0,0,0) 100%)',
          }}
        />

        {/* Ambient glow */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: 0, right: 0, top: '35%',
            height: 280,
            background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(248,174,13,0.2) 0%, rgba(248,174,13,0.07) 50%, transparent 80%)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        {/* Left text — no container, free on the page */}
        <div
          style={{
            position: 'absolute',
            top: 45,
            left: 40,
            zIndex: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          {/* Headline — smaller, NOT italic, gradient only on "Confidence" */}
          <h1
            style={{
              fontSize: 'clamp(4rem, 3.6vw, 3.2rem)',
              fontWeight: 800,
              fontStyle: 'normal',
              lineHeight: 1.08,
              color: '#fff',
              margin: '0 0 16px',
              letterSpacing: '-0.02em',
              whiteSpace: 'nowrap',
            }}
          >
            Build Your Financial
            <br />
            Future with{' '}
            <span
              style={{
                fontStyle: 'normal',
                background: '#FECC15',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Confidence
            </span>
          </h1>

          <p
            style={{
              fontSize: 14,
              lineHeight: 1.65,
              color: '#D1D5DB',
              maxWidth: 460,
              margin: '0 0 26px',
            }}
          >
            Uganda Exim Limited (UgExim) is a specialized financial institution
            bridging the financing gap for Ugandan exporters — providing innovative,
            flexible and affordable solutions to compete globally and drive
            foreign exchange earnings.
          </p>

          <a
            href="#"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              padding: '12px 26px',
              borderRadius: 999,
              fontSize: 14,
              fontWeight: 700,
              color: '#0a0a0a',
              background: '#FECC15',
              boxShadow: '0 4px 24px rgba(248,174,13,0.35)',
              textDecoration: 'none',
            }}
          >
            Who We Are
            <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
            </svg>
          </a>
        </div>

        {/* Right: glass cards — absolutely top-right */}
        <div
          style={{
            position: 'absolute',
            top: 45,
            right: 40,
            zIndex: 20,
            display: 'flex',
            flexDirection: 'column',
            gap: 35,
            width: 290,
          }}
        >
          {/* Card 1 — Agribusiness Financing */}
          <div
            style={{
              background: 'rgba(10,14,22,0.82)',
              backdropFilter: 'blur(18px)',
              WebkitBackdropFilter: 'blur(18px)',
              border: '1px solid rgba(255,255,255,0.09)',
              borderRadius: 16,
              padding: '12px 14px',
              boxShadow: '0 16px 40px rgba(0,0,0,0.6)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                <span
                  style={{
                    width: 22, height: 22, borderRadius: '50%',
                    background: 'rgba(248,174,13,0.15)',
                    border: '1px solid rgba(248,174,13,0.3)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 10, fontWeight: 700, color: '#FECC15',
                  }}
                >A</span>
                <span style={{ fontSize: 12, fontWeight: 600, color: '#E5E7EB' }}>Agribusiness Finance</span>
              </div>
              <span
                style={{
                  fontSize: 10, fontWeight: 600, color: '#34D399',
                  background: 'rgba(16,185,129,0.1)',
                  border: '1px solid rgba(16,185,129,0.2)',
                  padding: '2px 8px', borderRadius: 999,
                }}
              >● Active</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: 20, fontWeight: 700, color: '#fff', lineHeight: 1.2 }}>$22M+</div>
                <div style={{ fontSize: 11, fontWeight: 600, color: '#34D399', marginTop: 2 }}>Total Financed</div>
              </div>
              <div style={{ width: 100, height: 34 }}><SparklineSVG /></div>
            </div>
          </div>

          {/* Card 2 — Export Portfolio */}
          <div
            style={{
              background: 'rgba(10,14,22,0.82)',
              backdropFilter: 'blur(18px)',
              WebkitBackdropFilter: 'blur(18px)',
              border: '1px solid rgba(255,255,255,0.09)',
              borderRadius: 16,
              padding: '12px 14px',
              boxShadow: '0 16px 40px rgba(0,0,0,0.6)',
            }}
          >
            <p style={{ fontSize: 9, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#6B7280', margin: '0 0 3px' }}>
              Export Portfolio
            </p>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 7 }}>
              <span style={{ fontSize: 18, fontWeight: 700, color: '#fff' }}>63+ Exporters</span>
              <span
                style={{
                  fontSize: 10, fontWeight: 700, color: '#34D399',
                  background: 'rgba(16,185,129,0.12)',
                  border: '1px solid rgba(16,185,129,0.2)',
                  padding: '2px 7px', borderRadius: 999,
                }}
              >17+ Sectors</span>
            </div>
            <span
              style={{
                display: 'inline-block', fontSize: 10, fontWeight: 600, color: '#FECC15',
                background: 'rgba(248,174,13,0.12)',
                border: '1px solid rgba(248,174,13,0.22)',
                padding: '2px 9px', borderRadius: 6, marginBottom: 7,
              }}
            >BOU Regulated</span>
            <div style={{ height: 60, width: '100%' }}><PortfolioChartSVG /></div>
            <p style={{ fontSize: 8, color: '#6B7280', margin: '3px 0 0' }}>● Agro processing, Manufacturing, Logistics &amp; more</p>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          FEATURES BAR — compact height
      ══════════════════════════════════════════ */}
      <footer
        style={{
          width: '100%',
          maxWidth: 1280,
          margin: '0 auto',
          /* Reduced padding */
          padding: '14px 40px 18px',
          borderTop: '1px solid rgba(255,255,255,0.07)',
          flexShrink: 0,
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 16,
            justifyItems: 'center',
          }}
        >
          {/* Agribusiness Loans */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <IconBox>
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
                <path d="M12 22V10" strokeLinecap="round" />
                <path d="M12 10C12 10 9 8 7 5c2 0 4 1 5 5z" strokeLinejoin="round" />
                <path d="M12 10C12 10 15 8 17 5c-2 0-4 1-5 5z" strokeLinejoin="round" />
                <path d="M12 15C12 15 9 13 7 10c2 0 4 1 5 5z" strokeLinejoin="round" />
                <path d="M12 15C12 15 15 13 17 10c-2 0-4 1-5 5z" strokeLinejoin="round" />
              </svg>
            </IconBox>
            <span style={{ fontSize: 13, fontWeight: 600, color: '#fff' }}>Agribusiness Loans</span>
          </div>

          {/* Business Loans */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <IconBox>
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
                <rect x="2" y="7" width="20" height="15" rx="2" />
                <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" strokeLinecap="round" />
                <line x1="2" y1="12" x2="22" y2="12" />
              </svg>
            </IconBox>
            <span style={{ fontSize: 13, fontWeight: 600, color: '#fff' }}>Business Loans</span>
          </div>

          {/* Vehicle & Asset Finance */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <IconBox>
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
                <path d="M5 17H3a1 1 0 01-1-1v-4l2-5h14l2 5v4a1 1 0 01-1 1h-2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="7.5" cy="17.5" r="2.5" />
                <circle cx="16.5" cy="17.5" r="2.5" />
                <path d="M5 9h14" strokeLinecap="round" />
              </svg>
            </IconBox>
            <span style={{ fontSize: 13, fontWeight: 600, color: '#fff' }}>Asset Finance</span>
          </div>

          {/* Trade Finance */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <IconBox>
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
                <path d="M3 15l4-8 4 5 3-3 4 6" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21 21H3" strokeLinecap="round" />
              </svg>
            </IconBox>
            <span style={{ fontSize: 13, fontWeight: 600, color: '#fff' }}>Trade Finance</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
