import PageLayout from '@/components/layout/PageLayout'

const GOLD = '#F8AE0D'
const GOLD_FAINT = 'rgba(248,174,13,0.08)'
const GOLD_BORDER = 'rgba(248,174,13,0.2)'
const CARD_BG = 'rgba(13,18,28,0.8)'
const CARD_BORDER = 'rgba(255,255,255,0.07)'

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span style={{
      fontSize: 10, fontWeight: 700, color: GOLD, textTransform: 'uppercase',
      letterSpacing: '0.08em', background: GOLD_FAINT,
      border: `1px solid ${GOLD_BORDER}`, padding: '3px 10px', borderRadius: 999,
    }}>
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

      {/* ── Hero banner ── */}
      <section style={{
        background: 'linear-gradient(180deg, rgba(248,174,13,0.06) 0%, transparent 100%)',
        borderBottom: `1px solid ${CARD_BORDER}`,
        padding: '56px 40px 48px',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: GOLD, letterSpacing: '0.12em', textTransform: 'uppercase', margin: '0 0 12px' }}>
            Responsible Innovation
          </p>
          <h1 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 800, color: '#fff', margin: '0 0 14px', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
            Insights &amp; Market Resources
          </h1>
          <p style={{ fontSize: 14, color: '#9CA3AF', maxWidth: 520, lineHeight: 1.7, margin: 0 }}>
            Empowering Ugandan exporters with expert analysis, trade finance guides, and the latest
            trends in global market competitiveness.
          </p>
        </div>
      </section>

      {/* ── Content ── */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '40px 40px 80px' }}>

        {/* Filter tabs */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 36 }}>
          {CATEGORIES.map((cat, i) => (
            <button key={cat} type="button" style={{
              padding: '7px 16px', borderRadius: 999, fontSize: 12, fontWeight: 600, cursor: 'pointer',
              background: i === 0 ? GOLD : 'transparent',
              color: i === 0 ? '#0a0a0a' : '#9CA3AF',
              border: `1px solid ${i === 0 ? GOLD : CARD_BORDER}`,
              transition: 'all 0.15s',
            }}>{cat}</button>
          ))}
        </div>

        {/* ── Article grid ── */}
        <p style={{ fontSize: 13, color: '#6B7280', margin: '0 0 24px' }}>
          Recent Insights — showing latest updates and expert analysis
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 20 }}>
          {ARTICLES.map((a) => (
            <article
              key={a.title}
              style={{
                background: CARD_BG,
                border: `1px solid ${a.featured ? GOLD_BORDER : CARD_BORDER}`,
                borderRadius: 16,
                padding: '24px 22px',
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
                backdropFilter: 'blur(12px)',
                transition: 'border-color 0.2s, transform 0.2s',
                cursor: 'pointer',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = GOLD_BORDER
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = a.featured ? GOLD_BORDER : CARD_BORDER
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              {/* Tag row */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Tag>{a.category}</Tag>
                <span style={{ fontSize: 11, color: '#4B5563' }}>{a.readTime}</span>
              </div>

              {/* Meta */}
              <p style={{ fontSize: 11, color: '#6B7280', margin: 0 }}>{a.date}</p>

              {/* Title */}
              <h2 style={{ fontSize: 15, fontWeight: 700, color: '#fff', margin: 0, lineHeight: 1.4 }}>
                {a.title}
              </h2>

              {/* Snippet */}
              <p style={{ fontSize: 13, color: '#9CA3AF', lineHeight: 1.65, margin: 0, flex: 1 }}>
                {a.snippet}
              </p>

              {/* CTA */}
              <a href="#" style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                fontSize: 13, fontWeight: 600, color: GOLD, textDecoration: 'none',
                marginTop: 4,
              }}>
                Read Full Article
                <svg width="13" height="13" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                </svg>
              </a>
            </article>
          ))}
        </div>

        {/* ── Newsletter strip ── */}
        <div style={{
          marginTop: 64,
          background: `linear-gradient(135deg, rgba(248,174,13,0.1), rgba(13,18,28,0.9))`,
          border: `1px solid ${GOLD_BORDER}`,
          borderRadius: 20,
          padding: '40px 48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 32,
          flexWrap: 'wrap',
        }}>
          <div>
            <h3 style={{ fontSize: 18, fontWeight: 800, color: '#fff', margin: '0 0 6px' }}>
              Stay ahead of the curve
            </h3>
            <p style={{ fontSize: 13, color: '#9CA3AF', margin: 0, maxWidth: 460, lineHeight: 1.6 }}>
              Join our newsletter for bi-weekly market analysis, trade policy updates, and exclusive
              invitations to export finance workshops.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <input
              type="email"
              placeholder="your@email.com"
              style={{
                padding: '10px 16px', borderRadius: 8, fontSize: 13,
                background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)',
                color: '#fff', outline: 'none', width: 220,
              }}
            />
            <button type="button" style={{
              padding: '10px 22px', borderRadius: 8, fontSize: 13, fontWeight: 700,
              background: GOLD, color: '#0a0a0a', border: 'none', cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}>Subscribe Free</button>
          </div>
        </div>

      </div>
    </PageLayout>
  )
}
