import { useState } from 'react'
import PageLayout from '@/components/layout/PageLayout'

const GOLD = '#F8AE0D'
const GOLD_BORDER = 'rgba(248,174,13,0.2)'
const CARD_BORDER = 'rgba(255,255,255,0.07)'

/* ─── Category pill ─── */
function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="text-[10px] font-bold uppercase tracking-[0.08em] px-2.5 py-1 rounded-full"
      style={{ color: GOLD, background: 'rgba(0,0,0,0.72)', border: `1px solid ${GOLD_BORDER}`, backdropFilter: 'blur(6px)' }}
    >
      {children}
    </span>
  )
}

/* ─── Article data ─── */
const ARTICLES = [
  {
    id: 1,
    category: 'Market Trends',
    date: 'October 25, 2025',
    readTime: '6 min read',
    title: 'UgExim Champions Export Growth at International Buyers Week',
    snippet:
      'The recent Uganda Connect event highlighted critical opportunities for local manufacturers to scale their operations globally with strategic financing support.',
    image: '/insight-buyers-week.jpg',
    featured: true,
  },
  {
    id: 2,
    category: 'Agribusiness',
    date: 'February 27, 2026',
    readTime: '8 min read',
    title: 'The Future of Coffee Exports: Navigating New Global Standards',
    snippet:
      'How Ugandan coffee producers can adapt to changing international standards while maintaining competitive profit margins in specialty markets.',
    image: '/insight-coffee.jpg',
    featured: false,
  },
  {
    id: 3,
    category: 'Trade Finance',
    date: 'March 10, 2026',
    readTime: '5 min read',
    title: 'Asset Financing: Accelerating Manufacturing Capacity for SMEs',
    snippet:
      'Discover how vehicle and machinery financing is enabling small businesses in Kampala to double their production output in less than twelve months.',
    image: '/insight-asset-finance.jpg',
    featured: false,
  },
]

const CATEGORIES = ['All', 'Market Trends', 'Agribusiness', 'Trade Finance']
const SORT_OPTIONS = ['Newest First', 'Oldest First', 'Most Popular']

/* ─── Calendar icon ─── */
function CalIcon() {
  return (
    <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" strokeLinecap="round" />
    </svg>
  )
}

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [sortBy, setSortBy] = useState('Newest First')

  const filtered = ARTICLES.filter(
    (a) => activeCategory === 'All' || a.category === activeCategory,
  )

  /* Simple sort: Newest First keeps default order (already sorted descending by date index),
     Oldest First reverses, Most Popular puts featured first */
  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'Oldest First') return a.id - b.id
    if (sortBy === 'Most Popular') return (b.featured ? 1 : 0) - (a.featured ? 1 : 0)
    return b.id - a.id // Newest First
  })

  return (
    <PageLayout scrollable>

      {/* ── Hero banner ── */}
      <section
        style={{
          background: 'linear-gradient(180deg, rgba(248,174,13,0.07) 0%, transparent 100%)',
          borderBottom: `1px solid ${CARD_BORDER}`,
        }}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-10 lg:py-14">
          <p className="text-[11px] font-bold tracking-[0.12em] uppercase mb-3 m-0" style={{ color: GOLD }}>
            Knowledge Hub
          </p>
          <h1
            className="font-extrabold text-white leading-tight tracking-tight mb-3"
            style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.6rem)' }}
          >
            Insights &amp; Market Resources
          </h1>
          <p className="text-sm leading-relaxed m-0 max-w-xl" style={{ color: '#9CA3AF' }}>
            Expert analysis, trade finance guides, and the latest trends to help Ugandan exporters
            compete on the global stage with confidence.
          </p>
        </div>
      </section>

      {/* ── Main content ── */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-8 lg:py-10"
        style={{ fontFamily: '"Plus Jakarta Sans", Inter, sans-serif' }}>

        {/* Filter + Sort row */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          {/* Category tabs */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => {
              const active = cat === activeCategory
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className="rounded-full cursor-pointer transition-all"
                  style={{
                    padding: '7px 18px',
                    fontFamily: '"Plus Jakarta Sans", Inter, sans-serif',
                    fontSize: 13,
                    fontWeight: 600,
                    letterSpacing: '0.01em',
                    background: active ? GOLD : 'transparent',
                    color: active ? '#0a0a0a' : '#9CA3AF',
                    border: `1px solid ${active ? GOLD : CARD_BORDER}`,
                  }}
                >
                  {cat}
                </button>
              )
            })}
          </div>

          {/* Sort dropdown */}
          <div style={{ position: 'relative' }}>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-lg cursor-pointer outline-none appearance-none pr-8 pl-3 py-2"
              style={{
                fontFamily: '"Plus Jakarta Sans", Inter, sans-serif',
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: '0.01em',
                background: '#0a0a0a',
                color: '#E2E8F0',
                border: `1px solid ${CARD_BORDER}`,
              }}
            >
              {SORT_OPTIONS.map((o) => (
                <option key={o} value={o} style={{ background: '#0a0a0a' }}>
                  Sort by: {o}
                </option>
              ))}
            </select>
            {/* chevron */}
            <svg
              width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24"
              style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', color: '#6B7280', pointerEvents: 'none' }}
            >
              <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* ── Article grid ── */}
        <div
          className="grid gap-6"
          style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}
        >
          {sorted.map((a) => (
            <article
              key={a.id}
              className="relative rounded-2xl overflow-hidden transition-all duration-300"
              style={{
                height: 400,
                border: `1px solid ${CARD_BORDER}`,
                boxShadow: '0 2px 16px rgba(0,0,0,0.4)',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = GOLD_BORDER
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(248,174,13,0.18)'
                const img = e.currentTarget.querySelector('img') as HTMLImageElement
                if (img) img.style.transform = 'scale(1.07)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = CARD_BORDER
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 2px 16px rgba(0,0,0,0.4)'
                const img = e.currentTarget.querySelector('img') as HTMLImageElement
                if (img) img.style.transform = 'scale(1)'
              }}
            >
              {/* Full-bleed photo */}
              <img
                src={a.image}
                alt={a.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500"
                style={{ display: 'block' }}
              />

              {/* Dark gradient overlay — stronger at bottom */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.15) 100%)',
                }}
              />

              {/* Top row — category pill on the right */}
              <div className="absolute inset-x-0 top-0 flex items-center justify-end p-4">
                <Tag>{a.category}</Tag>
              </div>

              {/* Bottom content */}
              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2.5 p-5">
                {/* Date */}
                <span className="flex items-center gap-1 text-[11px]" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  <CalIcon />
                  {a.date}
                </span>

                {/* Title */}
                <h2
                  className="font-extrabold text-white leading-snug m-0"
                  style={{ fontSize: 'clamp(14px,1.3vw,17px)' }}
                >
                  {a.title}
                </h2>

                {/* Snippet */}
                <p className="text-sm leading-relaxed m-0" style={{ color: 'rgba(255,255,255,0.72)', fontSize: 13 }}>
                  {a.snippet}
                </p>

                {/* CTA — gold button matching FinancialSolutions */}
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold no-underline self-start rounded-lg transition-all duration-150 mt-1"
                  style={{
                    color: '#0a0a0a',
                    background: GOLD,
                    padding: '7px 16px',
                    boxShadow: '0 0 12px rgba(248,174,13,0.25)',
                  }}
                  onClick={(e) => e.preventDefault()}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 24px rgba(248,174,13,0.55)' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 12px rgba(248,174,13,0.25)' }}
                >
                  Read Full Article →
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Empty state */}
        {sorted.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 gap-3">
            <svg width="40" height="40" fill="none" stroke={GOLD} strokeWidth="1.5" viewBox="0 0 24 24" style={{ opacity: 0.4 }}>
              <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" strokeLinecap="round" />
              <rect x="9" y="3" width="6" height="4" rx="1" />
              <path d="M9 12h6M9 16h4" strokeLinecap="round" />
            </svg>
            <p style={{ color: '#6B7280' }}>No articles in this category yet.</p>
          </div>
        )}

        {/* ── Newsletter strip ── */}
        <div
          className="flex flex-wrap items-center justify-between gap-6 rounded-2xl mt-6"
          style={{
            background: '#000000',
            border: '1px solid rgba(255,255,255,0.08)',
            padding: 'clamp(24px,3vw,40px) clamp(24px,4vw,48px)',
          }}
        >
          <div className="max-w-md">
            <h3 className="font-extrabold text-white mb-1.5 m-0"
              style={{ fontSize: 'clamp(15px,1.5vw,18px)', fontFamily: '"Plus Jakarta Sans", Inter, sans-serif', letterSpacing: '-0.01em' }}>
              Stay ahead of the curve
            </h3>
            <p className="leading-relaxed m-0"
              style={{ fontSize: 14, color: '#9CA3AF', fontFamily: '"Plus Jakarta Sans", Inter, sans-serif' }}>
              Join our newsletter for bi-weekly market analysis and trade policy updates.
            </p>
          </div>
          <div className="flex flex-wrap gap-2.5">
            <input
              type="email"
              placeholder="your@email.com"
              className="rounded-lg text-white outline-none"
              style={{
                padding: '10px 16px',
                fontFamily: '"Plus Jakarta Sans", Inter, sans-serif',
                fontSize: 13,
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
                width: 'clamp(160px,16vw,220px)',
              }}
            />
            <button
              type="button"
              className="rounded-lg cursor-pointer whitespace-nowrap"
              style={{
                padding: '10px 20px',
                fontFamily: '"Plus Jakarta Sans", Inter, sans-serif',
                fontSize: 13,
                fontWeight: 700,
                background: GOLD,
                color: '#0a0a0a',
                border: 'none',
              }}
            >
              Subscribe Free
            </button>
          </div>
        </div>

      </div>
    </PageLayout>
  )
}
