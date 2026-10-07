import PageLayout from '@/components/layout/PageLayout'

const GOLD = '#F8AE0D'
const GOLD_FAINT = 'rgba(248,174,13,0.08)'
const GOLD_BORDER = 'rgba(248,174,13,0.2)'
const CARD_BG = 'rgba(13,18,28,0.8)'
const CARD_BORDER = 'rgba(255,255,255,0.07)'

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="text-[10px] font-bold uppercase tracking-[0.08em] px-2.5 py-0.5 rounded-full"
      style={{ color: GOLD, background: GOLD_FAINT, border: `1px solid ${GOLD_BORDER}` }}
    >
      {children}
    </span>
  )
}

const ARTICLES = [
  {
    category: 'Market Trends',
    date: 'October 25, 2025',
    readTime: '6 min read',
    title: 'UgExim Champions Export Growth at Uganda Connect International Buyers Week',
    snippet: 'The recent Uganda Connect event highlighted critical opportunities for local manufacturers to scale their operations globally with strategic financing support.',
    featured: true,
  },
  {
    category: 'Agribusiness',
    date: 'February 27, 2026',
    readTime: '8 min read',
    title: 'The Future of Coffee Exports: Navigating New Global Standards',
    snippet: 'How Ugandan coffee producers can adapt to changing international standards while maintaining competitive profit margins in specialty markets.',
    featured: false,
  },
  {
    category: 'Trade Finance',
    date: 'March 10, 2026',
    readTime: '5 min read',
    title: 'Asset Financing: Accelerating Manufacturing Capacity for SMEs',
    snippet: 'Discover how vehicle and machinery financing is enabling small businesses in Kampala to double their production output in less than twelve months.',
    featured: false,
  },
  {
    category: 'Export Finance',
    date: 'April 2026',
    readTime: '7 min read',
    title: 'Export Finance Solutions for Growth & Global Competitiveness',
    snippet: 'A practical guide to the range of export finance instruments available to Ugandan businesses — from letters of credit to pre-shipment funding.',
    featured: false,
  },
  {
    category: 'Trade Finance',
    date: 'May 2026',
    readTime: '5 min read',
    title: 'Letters of Credit: A Step-by-Step Guide for First-Time Exporters',
    snippet: 'Breaking down the documentary credit process, the parties involved, and how UgExim can help you navigate your first LC transaction.',
    featured: false,
  },
  {
    category: 'Market Trends',
    date: 'July 2026',
    readTime: '6 min read',
    title: "Uganda's Non-Traditional Exports on the Rise: Opportunities for SMEs",
    snippet: 'Beyond coffee and gold — fish, flowers, sesame and handicrafts are driving a new wave of export diversification.',
    featured: false,
  },
]

const CATEGORIES = ['All', 'Market Trends', 'Agribusiness', 'Trade Finance', 'Export Finance']

export default function InsightsPage() {
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
            Responsible Innovation
          </p>
          <h1 className="font-extrabold text-white leading-tight tracking-tight mb-3"
            style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.6rem)' }}>
            Insights &amp; Market Resources
          </h1>
          <p className="text-sm leading-relaxed max-w-lg m-0" style={{ color: '#9CA3AF' }}>
            Empowering Ugandan exporters with expert analysis, trade finance guides, and the latest
            trends in global market competitiveness.
          </p>
        </div>
      </section>

      {/* ── Main content ── */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-8 lg:py-10">

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {CATEGORIES.map((cat, i) => (
            <button key={cat} type="button"
              className="rounded-full text-xs font-semibold cursor-pointer transition-all"
              style={{
                padding: '6px 14px',
                background: i === 0 ? GOLD : 'transparent',
                color: i === 0 ? '#0a0a0a' : '#9CA3AF',
                border: `1px solid ${i === 0 ? GOLD : CARD_BORDER}`,
              }}>
              {cat}
            </button>
          ))}
        </div>

        <p className="text-[13px] mb-5" style={{ color: '#6B7280' }}>
          Recent Insights — showing latest updates and expert analysis
        </p>

        {/* Article grid — auto-fill: 1 col 1024, 2 col 1280, 3 col wide */}
        <div
          className="grid gap-5"
          style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))' }}
        >
          {ARTICLES.map((a) => (
            <article
              key={a.title}
              className="flex flex-col gap-3 rounded-2xl cursor-pointer transition-all duration-200"
              style={{
                background: CARD_BG,
                border: `1px solid ${a.featured ? GOLD_BORDER : CARD_BORDER}`,
                padding: 'clamp(16px, 1.8vw, 24px)',
                backdropFilter: 'blur(12px)',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = GOLD_BORDER; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = a.featured ? GOLD_BORDER : CARD_BORDER; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              <div className="flex items-center justify-between">
                <Tag>{a.category}</Tag>
                <span className="text-[11px]" style={{ color: '#4B5563' }}>{a.readTime}</span>
              </div>
              <p className="text-[11px] m-0" style={{ color: '#6B7280' }}>{a.date}</p>
              <h2 className="font-bold text-white m-0 leading-snug" style={{ fontSize: 'clamp(13px,1.2vw,15px)' }}>
                {a.title}
              </h2>
              <p className="text-sm leading-relaxed m-0 flex-1" style={{ color: '#9CA3AF' }}>
                {a.snippet}
              </p>
              <a href="#" className="inline-flex items-center gap-1.5 text-sm font-semibold no-underline mt-1"
                style={{ color: GOLD }}>
                Read Full Article
                <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                </svg>
              </a>
            </article>
          ))}
        </div>

        {/* ── Newsletter strip ── */}
        <div
          className="flex flex-wrap items-center justify-between gap-6 rounded-2xl mt-14"
          style={{
            background: 'linear-gradient(135deg, rgba(248,174,13,0.1), rgba(13,18,28,0.9))',
            border: `1px solid ${GOLD_BORDER}`,
            padding: 'clamp(24px, 3vw, 40px) clamp(24px, 4vw, 48px)',
          }}
        >
          <div className="max-w-md">
            <h3 className="font-extrabold text-white mb-1.5" style={{ fontSize: 'clamp(15px,1.5vw,18px)' }}>
              Stay ahead of the curve
            </h3>
            <p className="text-sm leading-relaxed m-0" style={{ color: '#9CA3AF' }}>
              Join our newsletter for bi-weekly market analysis, trade policy updates, and exclusive
              invitations to export finance workshops.
            </p>
          </div>
          <div className="flex flex-wrap gap-2.5">
            <input
              type="email"
              placeholder="your@email.com"
              className="rounded-lg text-sm text-white outline-none"
              style={{
                padding: '10px 16px',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
                width: 'clamp(160px, 16vw, 220px)',
              }}
            />
            <button type="button"
              className="rounded-lg text-sm font-bold cursor-pointer whitespace-nowrap"
              style={{ padding: '10px 20px', background: GOLD, color: '#0a0a0a', border: 'none' }}>
              Subscribe Free
            </button>
          </div>
        </div>

      </div>
    </PageLayout>
  )
}
