import { useState, useMemo } from 'react'
import PageLayout from '@/components/layout/PageLayout'

const GOLD = '#F8AE0D'
const GOLD_FAINT = 'rgba(248,174,13,0.08)'
const GOLD_BORDER = 'rgba(248,174,13,0.2)'
const CARD_BG = '#000000'
const CARD_BORDER = 'rgba(255,255,255,0.07)'

const FAQS = [
  {
    section: 'About UgExim',
    items: [
      { q: 'What is Uganda Exim Limited (UgExim)?', a: 'Uganda Exim Limited (UgExim) is a specialized financial institution established in 2024 to bridge the financing gap faced by Ugandan exporters, providing innovative and affordable solutions to compete globally.' },
      { q: 'Is UgExim regulated?', a: 'Yes. UgExim operates under the oversight of the Bank of Uganda (BOU) and is fully URA-compliant.' },
      { q: 'Where is UgExim located?', a: 'Luthuli House, Plot 15 Luthuli Avenue, 5th Floor, Kampala, Uganda. Available Mon – Fri, 8:00 AM – 5:00 PM EAT.' },
      { q: 'What sectors does UgExim serve?', a: 'UgExim serves 17+ sectors including agro-processing, manufacturing, logistics, coffee, fisheries, dairy, and other export-oriented industries.' },
    ],
  },
  {
    section: 'Our Products',
    items: [
      { q: 'What financing products does UgExim offer?', a: 'Four main products: Agribusiness Loans (seasonal, cooperative financing), Business Loans (working capital, trade finance), Vehicle & Asset Finance (up to 72 months), and Trade Finance (LCs, guarantees, invoice discounting).' },
      { q: 'What is the maximum facility size?', a: 'Business loans go up to $500,000. Asset finance tenures extend to 72 months. Contact us for a bespoke assessment.' },
      { q: 'Do you offer export credit guarantees?', a: 'Yes. We offer guarantees to mitigate payment and performance risks in export transactions.' },
      { q: 'Can UgExim help with Letters of Credit?', a: 'Yes. Our Trade Finance team handles the full LC lifecycle — issuance, advising, confirmation, and negotiation — with correspondent banks across the EAC.' },
    ],
  },
  {
    section: 'Eligibility & Application',
    items: [
      { q: 'Who can apply?', a: 'Any legally registered Ugandan business engaged in or preparing for export activity — sole proprietors, partnerships, limited companies, and cooperatives.' },
      { q: 'What documents are required?', a: 'Business registration certificate, 6 months of bank statements, valid national ID, and a brief description of your financing need.' },
      { q: 'How long does approval take?', a: 'Credit decisions within 48 hours of a complete application. Disbursement within 72 hours of approval.' },
      { q: 'Can I apply online?', a: 'Yes. Submit an inquiry via our website and a relationship manager will guide you through the full process.' },
    ],
  },
  {
    section: 'Repayment & Support',
    items: [
      { q: 'How are agribusiness repayments structured?', a: 'Repayments are aligned to your harvest cycle — you pay when your crop comes in, reducing cash flow pressure during growing periods.' },
      { q: 'What if I have difficulty repaying?', a: 'Contact your UgExim relationship manager early. We can restructure schedules or provide a short-term grace period.' },
      { q: 'Does UgExim offer advisory services?', a: 'Yes. Beyond financing, we provide capacity building — financial literacy, trade compliance guidance, market access support, and export readiness assessments.' },
    ],
  },
]

/* ── Accordion item ── */
function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      className="rounded-xl overflow-hidden transition-all duration-200"
      style={{ background: CARD_BG, border: `1px solid ${CARD_BORDER}` }}
    >
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between gap-3 text-left cursor-pointer"
        style={{ padding: 'clamp(12px,1.4vw,16px) clamp(14px,1.6vw,20px)', background: 'transparent', border: 'none' }}
      >
        <span
          className="font-semibold leading-snug flex-1"
          style={{ fontSize: 'clamp(12px,1.1vw,13.5px)', color: '#fff' }}
        >
          {q}
        </span>
        <span
          className="flex items-center justify-center rounded-full flex-shrink-0 transition-all duration-200"
          style={{
            width: 22, height: 22,
            background: open ? GOLD : GOLD_FAINT,
            border: `1px solid ${GOLD_BORDER}`,
            color: open ? '#0a0a0a' : GOLD,
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        >
          <svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>
      {open && (
        <div style={{ padding: '0 clamp(14px,1.6vw,20px) clamp(12px,1.4vw,16px)' }}>
          <p className="text-sm leading-relaxed m-0" style={{ color: '#9CA3AF' }}>{a}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQPage() {
  const [activeSection, setActiveSection] = useState(FAQS[0].section)
  const [query, setQuery] = useState('')

  /* Items to show: either search results across all sections, or just the active section */
  const displayItems = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (q) {
      return FAQS.flatMap(f => f.items).filter(
        item => item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q),
      )
    }
    return FAQS.find(f => f.section === activeSection)?.items ?? []
  }, [activeSection, query])

  const isSearching = query.trim().length > 0

  return (
    <PageLayout scrollable>

      {/* ── Hero ── */}
      <section
        style={{
          background: 'linear-gradient(180deg, rgba(248,174,13,0.06) 0%, transparent 100%)',
          borderBottom: `1px solid ${CARD_BORDER}`,
        }}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-10 lg:py-14">
          <p className="text-[11px] font-bold tracking-[0.12em] uppercase mb-3 m-0" style={{ color: GOLD }}>
            Help Center
          </p>

          {/* Title + search bar side-by-side */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h1
              className="font-extrabold text-white leading-tight tracking-tight m-0"
              style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.6rem)' }}
            >
              Frequently Asked <span style={{ color: GOLD }}>Questions</span>
            </h1>

            {/* Search bar */}
            <div className="relative flex-shrink-0" style={{ width: 'clamp(220px, 28vw, 380px)' }}>
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                style={{ color: '#6B7280' }}
                width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
              <input
                type="search"
                placeholder="Search questions..."
                value={query}
                onChange={e => setQuery(e.target.value)}
                className="w-full rounded-full text-white outline-none"
                style={{
                  padding: '10px 14px 10px 36px',
                  fontFamily: '"Plus Jakarta Sans", Inter, sans-serif',
                  fontSize: 13,
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                  style={{ background: 'transparent', border: 'none', color: '#6B7280', lineHeight: 1 }}
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          <p className="text-sm leading-relaxed mt-3 m-0" style={{ color: '#9CA3AF' }}>
            Everything you need to know about UgExim's products and processes.
          </p>
        </div>
      </section>

      {/* ── FAQ body ── */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-8 lg:py-10 pb-20">
        <div className="flex flex-col xl:flex-row gap-8 xl:gap-12 items-start">

          {/* ── Sticky sidebar ── */}
          <nav
            className="xl:flex-shrink-0"
            style={{
              width: 'clamp(180px, 14vw, 210px)',
              position: 'sticky',
              top: 80, /* below the fixed navbar */
              alignSelf: 'flex-start',
            }}
          >
            <p className="text-[10px] font-bold tracking-[0.1em] uppercase mb-3 m-0" style={{ color: '#4B5563' }}>
              Categories
            </p>

            <div className="flex flex-col gap-1">
              {FAQS.map(f => {
                const active = !isSearching && f.section === activeSection
                return (
                  <button
                    key={f.section}
                    type="button"
                    onClick={() => { setActiveSection(f.section); setQuery('') }}
                    className="flex items-center justify-between rounded-lg text-left cursor-pointer transition-all duration-150 w-full"
                    style={{
                      padding: '9px 12px',
                      fontFamily: '"Plus Jakarta Sans", Inter, sans-serif',
                      fontSize: 13,
                      fontWeight: active ? 700 : 500,
                      background: active ? '#000000' : 'transparent',
                      color: active ? '#ffffff' : '#9CA3AF',
                      border: `1px solid ${active ? 'rgba(255,255,255,0.07)' : 'transparent'}`,
                    }}
                  >
                    <span>{f.section}</span>
                    <span
                      className="text-[10px] font-semibold px-1.5 py-0.5 rounded-full ml-2 flex-shrink-0"
                      style={{
                        background: 'rgba(255,255,255,0.05)',
                        color: active ? '#ffffff' : '#4B5563',
                      }}
                    >
                      {f.items.length}
                    </span>
                  </button>
                )
              })}
            </div>

            {/* Contact card */}
            <div
              className="rounded-xl mt-5"
              style={{ background: CARD_BG, border: `1px solid ${GOLD_BORDER}`, padding: '16px 14px' }}
            >
              <p className="text-xs font-semibold text-white mb-1 m-0">Still have questions?</p>
              <p className="text-[11px] mt-1 mb-2.5 leading-snug m-0" style={{ color: '#6B7280' }}>
                Mon–Fri, 8 AM–5 PM EAT
              </p>
              <a href="/contact" className="text-xs font-semibold no-underline" style={{ color: GOLD }}>
                Contact Us →
              </a>
            </div>
          </nav>

          {/* ── Accordion panel ── */}
          <div className="flex-1 min-w-0">

            {/* Section heading (hidden during search) */}
            {!isSearching && (
              <h2
                className="uppercase tracking-[0.08em] font-bold mb-5 m-0"
                style={{ fontSize: 'clamp(11px,1vw,13px)', color: GOLD }}
              >
                {activeSection}
              </h2>
            )}

            {isSearching && (
              <p className="text-sm mb-4 m-0" style={{ color: '#6B7280' }}>
                {displayItems.length} result{displayItems.length !== 1 ? 's' : ''} for "
                <span style={{ color: '#E2E8F0' }}>{query}</span>"
              </p>
            )}

            {/* Questions */}
            <div className="flex flex-col gap-2">
              {displayItems.map(item => (
                <AccordionItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>

            {/* No results */}
            {displayItems.length === 0 && (
              <div className="flex flex-col items-center justify-center py-20 gap-3">
                <svg width="36" height="36" fill="none" stroke={GOLD} strokeWidth="1.5" viewBox="0 0 24 24" style={{ opacity: 0.35 }}>
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="text-sm m-0" style={{ color: '#6B7280' }}>No questions match your search.</p>
              </div>
            )}
          </div>

        </div>
      </div>

    </PageLayout>
  )
}
