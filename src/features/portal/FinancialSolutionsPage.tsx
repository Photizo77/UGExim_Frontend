import PageLayout from '@/components/layout/PageLayout'

const GOLD = '#F8AE0D'
const GOLD_FAINT = 'rgba(248,174,13,0.08)'
const GOLD_BORDER = 'rgba(248,174,13,0.2)'
const CARD_BG = 'rgba(13,18,28,0.8)'
const CARD_BORDER = 'rgba(255,255,255,0.07)'

// ─── Matches the homepage "carousel" card style exactly ─────────────────────
const SOLUTIONS = [
  {
    tag: 'Trusted Export Finance',
    heading: 'Finance That Grows\nWith Your Harvest',
    desc: 'Specialized loans for out-growers, processors, and cooperatives — designed around Uganda\'s agricultural seasons.',
    stats: [{ v: '$25M+', l: 'Financed' }, { v: '25+', l: 'Exporters' }],
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M12 22V10" strokeLinecap="round" />
        <path d="M12 10C12 10 9 8 7 5c2 0 4 1 5 5z" strokeLinejoin="round" />
        <path d="M12 10C12 10 15 8 17 5c-2 0-4 1-5 5z" strokeLinejoin="round" />
        <path d="M12 15C12 15 9 13 7 10c2 0 4 1 5 5z" strokeLinejoin="round" />
        <path d="M12 15C12 15 15 13 17 10c-2 0-4 1-5 5z" strokeLinejoin="round" />
      </svg>
    ),
    label: 'Agribusiness Loans',
  },
  {
    tag: 'Business Loans',
    heading: 'Working Capital\nFor Global Markets',
    desc: 'Trade finance and pre-shipment funding for Ugandan manufacturers ready to compete on the world stage.',
    stats: [{ v: '$500K', l: 'Max Facility' }, { v: 'Multi', l: 'Sector' }],
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <rect x="2" y="7" width="20" height="15" rx="2" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" strokeLinecap="round" />
        <line x1="2" y1="12" x2="22" y2="12" />
      </svg>
    ),
    label: 'Business Loans',
  },
  {
    tag: 'Vehicle & Asset Finance',
    heading: 'Move More.\nExport Further.',
    desc: 'Flexible leasing for heavy vehicles, refrigerated trucks, and industrial machinery — powering Uganda\'s logistics backbone.',
    stats: [{ v: '72 mo.', l: 'Max Tenure' }, { v: 'Fast', l: 'Approval' }],
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M5 17H3a1 1 0 01-1-1v-4l2-5h14l2 5v4a1 1 0 01-1 1h-2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="7.5" cy="17.5" r="2.5" />
        <circle cx="16.5" cy="17.5" r="2.5" />
        <path d="M5 9h14" strokeLinecap="round" />
      </svg>
    ),
    label: 'Vehicle & Asset Finance',
  },
  {
    tag: 'Trade Finance',
    heading: 'Structured Solutions\nBuilt for Export',
    desc: 'Letters of credit, invoice discounting, and export guarantees — the instruments global trade demands.',
    stats: [{ v: 'BOU', l: 'Regulated' }, { v: 'URA', l: 'Compliant' }],
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M3 15l4-8 4 5 3-3 4 6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 21H3" strokeLinecap="round" />
      </svg>
    ),
    label: 'Trade Finance',
  },
]

const STATS = [
  { v: '$22M+', l: 'Total Financed', sub: 'Fueling Uganda\'s export economy' },
  { v: '63+', l: 'Empowered Exporters', sub: 'Supporting diverse local enterprises' },
  { v: '17+', l: 'Sectors Covered', sub: 'Agro processing, Manufacturing, Logistics' },
]

const MANDATE = [
  'Provide Export Financing that meets working capital and asset acquisition needs.',
  'Offer Export Credit Guarantees to mitigate payment and performance risks.',
  'Deliver Trade Finance instruments that facilitate cross-border trade.',
  'Support Agri-value chain enterprises through affordable financing structures.',
  'Provide Advisory & Capacity Building — financial literacy, trade compliance, market access.',
]

export default function FinancialSolutionsPage() {
  return (
    <PageLayout scrollable>

      {/* ── Hero ── */}
      <section style={{
        background: 'linear-gradient(180deg, rgba(248,174,13,0.06) 0%, transparent 100%)',
        borderBottom: `1px solid ${CARD_BORDER}`,
        padding: '56px 40px 48px',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: GOLD, letterSpacing: '0.12em', textTransform: 'uppercase', margin: '0 0 12px' }}>
            Our Focus Areas
          </p>
          <h1 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 800, color: '#fff', margin: '0 0 14px', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
            Financial Solutions
          </h1>
          <p style={{ fontSize: 14, color: '#9CA3AF', maxWidth: 540, lineHeight: 1.7, margin: '0 0 32px' }}>
            We provide structured finance products designed to meet the unique challenges and
            opportunities of Ugandan export-oriented businesses.
          </p>
          {/* Stats row */}
          <div style={{ display: 'flex', gap: 40, flexWrap: 'wrap' }}>
            {STATS.map(s => (
              <div key={s.l}>
                <div style={{ fontSize: 28, fontWeight: 800, color: GOLD, lineHeight: 1 }}>{s.v}</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: '#fff', marginTop: 3 }}>{s.l}</div>
                <div style={{ fontSize: 11, color: '#6B7280', marginTop: 2 }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Product cards — same style as homepage carousel ── */}
      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '48px 40px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 20 }}>
          {SOLUTIONS.map(sol => (
            <div
              key={sol.label}
              style={{
                background: CARD_BG,
                border: `1px solid ${CARD_BORDER}`,
                borderRadius: 18,
                padding: '28px 24px',
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
                backdropFilter: 'blur(12px)',
                transition: 'border-color 0.2s, transform 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = GOLD_BORDER
                e.currentTarget.style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = CARD_BORDER
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              {/* Icon + tag */}
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 14,
                  background: GOLD_FAINT, border: `1px solid ${GOLD_BORDER}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', color: GOLD,
                }}>
                  {sol.icon}
                </div>
                <span style={{ fontSize: 10, fontWeight: 700, color: GOLD, textTransform: 'uppercase', letterSpacing: '0.07em', textAlign: 'right', maxWidth: 100, lineHeight: 1.3 }}>
                  {sol.tag}
                </span>
              </div>

              {/* Heading — two-line like the homepage */}
              <h2 style={{ fontSize: 18, fontWeight: 800, color: '#fff', margin: 0, lineHeight: 1.25, whiteSpace: 'pre-line' }}>
                {sol.heading}
              </h2>

              {/* Description */}
              <p style={{ fontSize: 13, color: '#9CA3AF', lineHeight: 1.65, margin: 0, flex: 1 }}>
                {sol.desc}
              </p>

              {/* Stat pills */}
              <div style={{ display: 'flex', gap: 10 }}>
                {sol.stats.map(st => (
                  <div key={st.l} style={{
                    flex: 1, background: GOLD_FAINT, border: `1px solid ${GOLD_BORDER}`,
                    borderRadius: 10, padding: '8px 10px', textAlign: 'center',
                  }}>
                    <div style={{ fontSize: 16, fontWeight: 800, color: GOLD }}>{st.v}</div>
                    <div style={{ fontSize: 10, color: '#9CA3AF', marginTop: 2 }}>{st.l}</div>
                  </div>
                ))}
              </div>

              {/* Link */}
              <a href="#" style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                fontSize: 13, fontWeight: 600, color: GOLD, textDecoration: 'none',
              }}>
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ── Mandate — numbered list, no wall of text ── */}
      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px 48px' }}>
        <h2 style={{ fontSize: 16, fontWeight: 700, color: '#fff', margin: '0 0 20px' }}>Our Mandate</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 12 }}>
          {MANDATE.map((item, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'flex-start', gap: 14,
              background: CARD_BG, border: `1px solid ${CARD_BORDER}`,
              borderRadius: 12, padding: '14px 18px', backdropFilter: 'blur(10px)',
            }}>
              <span style={{
                width: 24, height: 24, borderRadius: '50%', flexShrink: 0,
                background: GOLD_FAINT, border: `1px solid ${GOLD_BORDER}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 11, fontWeight: 700, color: GOLD,
              }}>{i + 1}</span>
              <p style={{ fontSize: 13, color: '#D1D5DB', lineHeight: 1.55, margin: 0 }}>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{
        maxWidth: 1280, margin: '0 auto', padding: '0 40px 72px',
      }}>
        <div style={{
          background: `linear-gradient(135deg, rgba(248,174,13,0.1), rgba(13,18,28,0.9))`,
          border: `1px solid ${GOLD_BORDER}`,
          borderRadius: 20, padding: '40px 48px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap',
        }}>
          <div>
            <h3 style={{ fontSize: 20, fontWeight: 800, color: '#fff', margin: '0 0 6px' }}>
              Ready to take your exports to the next level?
            </h3>
            <p style={{ fontSize: 13, color: '#9CA3AF', margin: 0 }}>
              Our financial experts are ready to discuss structured trade solutions tailored to your business.
            </p>
          </div>
          <a href="/contact" style={{
            padding: '12px 28px', borderRadius: 999, fontSize: 14, fontWeight: 700,
            color: '#0a0a0a', background: GOLD, textDecoration: 'none',
            boxShadow: '0 0 20px rgba(248,174,13,0.3)', whiteSpace: 'nowrap',
          }}>Get in Touch</a>
        </div>
      </section>

    </PageLayout>
  )
}
