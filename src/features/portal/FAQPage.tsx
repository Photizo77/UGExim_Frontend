import { useState } from 'react'
import PageLayout from '@/components/layout/PageLayout'

const GOLD = '#F8AE0D'
const GOLD_FAINT = 'rgba(248,174,13,0.08)'
const GOLD_BORDER = 'rgba(248,174,13,0.2)'
const CARD_BG = 'rgba(13,18,28,0.8)'
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

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      className="rounded-xl overflow-hidden transition-all duration-200"
      style={{ background: CARD_BG, border: `1px solid ${open ? GOLD_BORDER : CARD_BORDER}` }}
    >
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between gap-3 text-left cursor-pointer"
        style={{ padding: 'clamp(12px,1.4vw,16px) clamp(14px,1.6vw,20px)', background: 'transparent', border: 'none' }}
      >
        <span className="font-semibold leading-snug flex-1" style={{ fontSize: 'clamp(12px,1.1vw,13.5px)', color: open ? GOLD : '#fff' }}>
          {q}
        </span>
        <span
          className="flex items-center justify-center rounded-full flex-shrink-0 font-bold text-[15px] transition-all duration-200"
          style={{
            width: 22, height: 22,
            background: open ? GOLD : GOLD_FAINT,
            border: `1px solid ${GOLD_BORDER}`,
            color: open ? '#0a0a0a' : GOLD,
          }}
        >
          {open ? '−' : '+'}
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
          <p className="text-[11px] font-bold tracking-[0.12em] uppercase mb-3" style={{ color: GOLD }}>Help Center</p>
          <h1 className="font-extrabold text-white leading-tight tracking-tight mb-3"
            style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.6rem)' }}>
            Frequently Asked <span style={{ color: GOLD }}>Questions</span>
          </h1>
          <p className="text-sm leading-relaxed mb-6 max-w-md m-0" style={{ color: '#9CA3AF' }}>
            Everything you need to know about UgExim's products and processes.
          </p>
          {/* Search */}
          <div className="relative" style={{ maxWidth: 420 }}>
            <svg className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: '#6B7280' }}
              width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
            <input type="search" placeholder="Search questions..."
              className="w-full rounded-full text-[13px] text-white outline-none pl-9"
              style={{
                padding: '10px 14px 10px 36px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
              }} />
          </div>
        </div>
      </section>

      {/* ── FAQ body — sidebar collapses to top on 1024, side on 1280+ ── */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-8 lg:py-10 pb-16 lg:pb-20">
        <div className="flex flex-col xl:flex-row gap-8 xl:gap-12 items-start">

          {/* Sidebar nav */}
          <nav className="flex xl:flex-col flex-wrap xl:flex-nowrap gap-1.5 xl:sticky xl:top-6 xl:w-48 flex-shrink-0">
            {FAQS.map(f => (
              <a
                key={f.section}
                href={`#${f.section.replace(/\s+/g, '-')}`}
                className="flex items-center justify-between rounded-lg text-xs font-medium no-underline transition-colors"
                style={{ padding: '8px 12px', color: '#9CA3AF', background: 'transparent' }}
                onMouseEnter={e => ((e.target as HTMLElement).style.color = GOLD)}
                onMouseLeave={e => ((e.target as HTMLElement).style.color = '#9CA3AF')}
              >
                <span>{f.section}</span>
                <span className="text-[10px] ml-2" style={{ color: '#4B5563' }}>{f.items.length}</span>
              </a>
            ))}

            {/* Contact card — hidden on mobile nav, visible xl */}
            <div
              className="hidden xl:block rounded-xl mt-4"
              style={{ background: CARD_BG, border: `1px solid ${GOLD_BORDER}`, padding: '16px 14px' }}
            >
              <p className="text-xs font-semibold text-white mb-1">Still have questions?</p>
              <p className="text-[11px] mb-2.5 leading-snug" style={{ color: '#6B7280' }}>Mon–Fri, 8 AM–5 PM EAT</p>
              <a href="/contact" className="text-xs font-semibold no-underline" style={{ color: GOLD }}>Contact Us →</a>
            </div>
          </nav>

          {/* Accordion sections */}
          <div className="flex-1 flex flex-col gap-10">
            {FAQS.map(f => (
              <div key={f.section} id={f.section.replace(/\s+/g, '-')}>
                <h2 className="flex items-center gap-2.5 uppercase tracking-[0.08em] font-bold mb-4"
                  style={{ fontSize: 'clamp(11px,1vw,14px)', color: GOLD }}>
                  <span className="w-5 h-[2px] rounded-full inline-block flex-shrink-0" style={{ background: GOLD }} />
                  {f.section}
                </h2>
                <div className="flex flex-col gap-2">
                  {f.items.map(item => (
                    <AccordionItem key={item.q} q={item.q} a={item.a} />
                  ))}
                </div>
              </div>
            ))}

            {/* Contact card — visible on smaller screens, hidden on xl (sidebar shows it) */}
            <div
              className="xl:hidden rounded-xl"
              style={{ background: CARD_BG, border: `1px solid ${GOLD_BORDER}`, padding: '18px 20px' }}
            >
              <p className="text-sm font-semibold text-white mb-1">Still have questions?</p>
              <p className="text-xs mb-3 leading-snug" style={{ color: '#6B7280' }}>
                Mon–Fri, 8 AM–5 PM EAT · Luthuli House, 5th Floor, Kampala
              </p>
              <a href="/contact" className="text-sm font-semibold no-underline" style={{ color: GOLD }}>Contact Us →</a>
            </div>
          </div>

        </div>
      </div>

    </PageLayout>
  )
}
