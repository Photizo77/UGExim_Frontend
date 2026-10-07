import PageLayout from '@/components/layout/PageLayout'

const GOLD = '#F8AE0D'
const GOLD_FAINT = 'rgba(248,174,13,0.08)'
const GOLD_BORDER = 'rgba(248,174,13,0.2)'
const CARD_BG = 'rgba(13,18,28,0.8)'
const CARD_BORDER = 'rgba(255,255,255,0.07)'

const SOLUTIONS = [
  {
    tag: 'Trusted Export Finance',
    heading: 'Finance That Grows\nWith Your Harvest',
    desc: "Specialized loans for out-growers, processors, and cooperatives — designed around Uganda's agricultural seasons.",
    stats: [{ v: '$25M+', l: 'Financed' }, { v: '25+', l: 'Exporters' }],
    icon: (
      <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
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
      <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
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
    desc: "Flexible leasing for heavy vehicles, refrigerated trucks, and industrial machinery — powering Uganda's logistics backbone.",
    stats: [{ v: '72 mo.', l: 'Max Tenure' }, { v: 'Fast', l: 'Approval' }],
    icon: (
      <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
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
      <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M3 15l4-8 4 5 3-3 4 6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 21H3" strokeLinecap="round" />
      </svg>
    ),
    label: 'Trade Finance',
  },
]

const STATS = [
  { v: '$22M+', l: 'Total Financed', sub: "Fueling Uganda's export economy" },
  { v: '63+',   l: 'Empowered Exporters', sub: 'Supporting diverse local enterprises' },
  { v: '17+',   l: 'Sectors Covered', sub: 'Agro processing, Manufacturing, Logistics' },
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
      <section
        className="w-full"
        style={{
          background: 'linear-gradient(180deg, rgba(248,174,13,0.06) 0%, transparent 100%)',
          borderBottom: `1px solid ${CARD_BORDER}`,
        }}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-10 lg:py-14">
          <p className="text-[11px] font-bold tracking-[0.12em] uppercase mb-3" style={{ color: GOLD }}>
            Our Focus Areas
          </p>
          <h1 className="font-extrabold text-white mb-3 leading-tight tracking-tight"
            style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.6rem)' }}>
            Financial Solutions
          </h1>
          <p className="text-sm leading-relaxed mb-8 max-w-lg" style={{ color: '#9CA3AF' }}>
            We provide structured finance products designed to meet the unique challenges and
            opportunities of Ugandan export-oriented businesses.
          </p>
          {/* Stats — flex row, wraps on very small screens */}
          <div className="flex flex-wrap gap-8 lg:gap-12">
            {STATS.map(s => (
              <div key={s.l}>
                <div className="font-extrabold leading-none" style={{ fontSize: 'clamp(1.6rem, 2.2vw, 1.9rem)', color: GOLD }}>{s.v}</div>
                <div className="text-sm font-semibold text-white mt-1">{s.l}</div>
                <div className="text-[11px] mt-0.5" style={{ color: '#6B7280' }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Product cards ── */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-10 py-10 lg:py-12">
        {/* auto-fill: fits 1 col on 1024, 2 on 1280, 4 on very wide */}
        <div
          className="grid gap-5"
          style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))' }}
        >
          {SOLUTIONS.map(sol => (
            <div
              key={sol.label}
              className="flex flex-col gap-4 rounded-[18px] transition-all duration-200 cursor-default"
              style={{ background: CARD_BG, border: `1px solid ${CARD_BORDER}`, padding: 'clamp(18px,2vw,28px)', backdropFilter: 'blur(12px)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = GOLD_BORDER; e.currentTarget.style.transform = 'translateY(-3px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = CARD_BORDER; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              {/* Icon + tag */}
              <div className="flex items-start justify-between">
                <div className="flex items-center justify-center rounded-[14px] flex-shrink-0"
                  style={{ width: 46, height: 46, background: GOLD_FAINT, border: `1px solid ${GOLD_BORDER}`, color: GOLD }}>
                  {sol.icon}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.07em] text-right leading-tight max-w-[100px]"
                  style={{ color: GOLD }}>
                  {sol.tag}
                </span>
              </div>

              {/* Heading */}
              <h2 className="font-extrabold text-white leading-snug m-0 whitespace-pre-line"
                style={{ fontSize: 'clamp(15px, 1.4vw, 18px)' }}>
                {sol.heading}
              </h2>

              {/* Desc */}
              <p className="text-sm leading-relaxed m-0 flex-1" style={{ color: '#9CA3AF' }}>
                {sol.desc}
              </p>

              {/* Stat pills */}
              <div className="flex gap-2.5">
                {sol.stats.map(st => (
                  <div key={st.l} className="flex-1 rounded-[10px] py-2 px-3 text-center"
                    style={{ background: GOLD_FAINT, border: `1px solid ${GOLD_BORDER}` }}>
                    <div className="font-extrabold" style={{ fontSize: 'clamp(13px,1.3vw,16px)', color: GOLD }}>{st.v}</div>
                    <div className="text-[10px] mt-0.5" style={{ color: '#9CA3AF' }}>{st.l}</div>
                  </div>
                ))}
              </div>

              <a href="#" className="inline-flex items-center gap-1.5 text-sm font-semibold no-underline"
                style={{ color: GOLD }}>
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ── Mandate ── */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-10 pb-10 lg:pb-12">
        <h2 className="text-base font-bold text-white mb-5">Our Mandate</h2>
        <div className="grid gap-3"
          style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))' }}>
          {MANDATE.map((item, i) => (
            <div key={i} className="flex items-start gap-3.5 rounded-xl"
              style={{ background: CARD_BG, border: `1px solid ${CARD_BORDER}`, padding: '13px 18px', backdropFilter: 'blur(10px)' }}>
              <span className="flex items-center justify-center rounded-full flex-shrink-0 text-[11px] font-bold"
                style={{ width: 24, height: 24, background: GOLD_FAINT, border: `1px solid ${GOLD_BORDER}`, color: GOLD }}>
                {i + 1}
              </span>
              <p className="text-sm leading-snug m-0" style={{ color: '#D1D5DB' }}>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-10 pb-14 lg:pb-20">
        <div
          className="flex flex-wrap items-center justify-between gap-6 rounded-2xl"
          style={{
            background: 'linear-gradient(135deg, rgba(248,174,13,0.1), rgba(13,18,28,0.9))',
            border: `1px solid ${GOLD_BORDER}`,
            padding: 'clamp(24px, 3vw, 40px) clamp(24px, 4vw, 48px)',
          }}
        >
          <div>
            <h3 className="font-extrabold text-white mb-1.5" style={{ fontSize: 'clamp(15px,1.6vw,20px)' }}>
              Ready to take your exports to the next level?
            </h3>
            <p className="text-sm m-0" style={{ color: '#9CA3AF' }}>
              Our financial experts are ready to discuss structured trade solutions tailored to your business.
            </p>
          </div>
          <a href="/contact"
            className="rounded-full text-sm font-bold no-underline whitespace-nowrap"
            style={{ padding: '11px 26px', color: '#0a0a0a', background: GOLD, boxShadow: '0 0 20px rgba(248,174,13,0.3)' }}>
            Get in Touch
          </a>
        </div>
      </section>

    </PageLayout>
  )
}
