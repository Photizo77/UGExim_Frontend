import { useState } from 'react'
import PageLayout from '@/components/layout/PageLayout'

const GOLD = '#FECC15'
const GOLD_FAINT = 'rgba(248,174,13,0.08)'
const GOLD_BORDER = 'rgba(248,174,13,0.2)'
const CARD_BG = 'rgba(13,18,28,0.8)'
const CARD_BORDER = 'rgba(255,255,255,0.07)'

const FAQS = [
  {
    section: 'About UgExim',
    items: [
      {
        q: 'What is Uganda Exim Limited (UgExim)?',
        a: 'Uganda Exim Limited (UgExim) is a specialized financial institution established in 2024 to bridge the financing gap faced by Ugandan exporters, providing innovative and affordable solutions to compete globally.',
      },
      {
        q: 'Is UgExim regulated?',
        a: 'Yes. UgExim operates under the oversight of the Bank of Uganda (BOU) and is fully URA-compliant.',
      },
      {
        q: 'Where is UgExim located?',
        a: 'Luthuli House, Plot 15 Luthuli Avenue, 5th Floor, Kampala, Uganda. Available Mon – Fri, 8:00 AM – 5:00 PM EAT.',
      },
      {
        q: 'What sectors does UgExim serve?',
        a: 'UgExim serves 17+ sectors including agro-processing, manufacturing, logistics, coffee, fisheries, dairy, and other export-oriented industries.',
      },
    ],
  },
  {
    section: 'Our Products',
    items: [
      {
        q: 'What financing products does UgExim offer?',
        a: 'Four main products: Agribusiness Loans (seasonal, cooperative financing), Business Loans (working capital, trade finance), Vehicle & Asset Finance (up to 72 months), and Trade Finance (LCs, guarantees, invoice discounting).',
      },
      {
        q: 'What is the maximum facility size?',
        a: 'Business loans go up to $500,000. Asset finance tenures extend to 72 months. Contact us for a bespoke assessment.',
      },
      {
        q: 'Do you offer export credit guarantees?',
        a: 'Yes. We offer guarantees to mitigate payment and performance risks in export transactions.',
      },
      {
        q: 'Can UgExim help with Letters of Credit?',
        a: 'Yes. Our Trade Finance team handles the full LC lifecycle — issuance, advising, confirmation, and negotiation — with correspondent banks across the EAC.',
      },
    ],
  },
  {
    section: 'Eligibility & Application',
    items: [
      {
        q: 'Who can apply?',
        a: 'Any legally registered Ugandan business engaged in or preparing for export activity — sole proprietors, partnerships, limited companies, and cooperatives.',
      },
      {
        q: 'What documents are required?',
        a: 'Business registration certificate, 6 months of bank statements, valid national ID, and a brief description of your financing need.',
      },
      {
        q: 'How long does approval take?',
        a: 'Credit decisions within 48 hours of a complete application. Disbursement within 72 hours of approval.',
      },
      {
        q: 'Can I apply online?',
        a: 'Yes. Submit an inquiry via our website and a relationship manager will guide you through the full process.',
      },
    ],
  },
  {
    section: 'Repayment & Support',
    items: [
      {
        q: 'How are agribusiness repayments structured?',
        a: 'Repayments are aligned to your harvest cycle — you pay when your crop comes in, reducing cash flow pressure during growing periods.',
      },
      {
        q: 'What if I have difficulty repaying?',
        a: 'Contact your UgExim relationship manager early. We can restructure schedules or provide a short-term grace period.',
      },
      {
        q: 'Does UgExim offer advisory services?',
        a: 'Yes. Beyond financing, we provide capacity building — financial literacy, trade compliance guidance, market access support, and export readiness assessments.',
      },
    ],
  },
]

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{
      background: CARD_BG,
      border: `1px solid ${open ? GOLD_BORDER : CARD_BORDER}`,
      borderRadius: 12,
      overflow: 'hidden',
      transition: 'border-color 0.2s',
    }}>
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%', padding: '16px 20px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12,
          background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left',
        }}
      >
        <span style={{ fontSize: 13.5, fontWeight: 600, color: open ? GOLD : '#fff', lineHeight: 1.4, flex: 1 }}>{q}</span>
        <span style={{
          width: 22, height: 22, borderRadius: '50%', flexShrink: 0,
          background: open ? GOLD : GOLD_FAINT, border: `1px solid ${GOLD_BORDER}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: open ? '#0a0a0a' : GOLD, fontSize: 15, fontWeight: 700, lineHeight: 1,
          transition: 'all 0.2s',
        }}>
          {open ? '−' : '+'}
        </span>
      </button>
      {open && (
        <div style={{ padding: '0 20px 16px' }}>
          <p style={{ fontSize: 13, color: '#9CA3AF', lineHeight: 1.75, margin: 0 }}>{a}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQPage() {
  return (
    <PageLayout scrollable>

      {/* ── Hero ── */}
      <section style={{
        background: 'linear-gradient(180deg, rgba(248,174,13,0.06) 0%, transparent 100%)',
        borderBottom: `1px solid ${CARD_BORDER}`,
        padding: '56px 40px 48px',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: GOLD, letterSpacing: '0.12em', textTransform: 'uppercase', margin: '0 0 12px' }}>Help Center</p>
          <h1 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 800, color: '#fff', margin: '0 0 14px', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
            Frequently Asked <span style={{ color: GOLD }}>Questions</span>
          </h1>
          <p style={{ fontSize: 14, color: '#9CA3AF', maxWidth: 480, lineHeight: 1.7, margin: '0 0 28px' }}>
            Everything you need to know about UgExim's products and processes.
          </p>
          {/* Search */}
          <div style={{ position: 'relative', maxWidth: 440 }}>
            <svg style={{ position: 'absolute', left: 13, top: '50%', transform: 'translateY(-50%)', color: '#6B7280' }} width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
            <input type="search" placeholder="Search questions..." style={{
              width: '100%', boxSizing: 'border-box',
              padding: '11px 14px 11px 38px', borderRadius: 999, fontSize: 13,
              background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
              color: '#fff', outline: 'none',
            }} />
          </div>
        </div>
      </section>

      {/* ── FAQ sections ── */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '48px 40px 80px', display: 'grid', gridTemplateColumns: '200px 1fr', gap: 48, alignItems: 'start' }}>

        {/* Sticky section nav */}
        <nav style={{ position: 'sticky', top: 24, display: 'flex', flexDirection: 'column', gap: 4 }}>
          {FAQS.map(f => (
            <a key={f.section} href={`#${f.section.replace(/\s+/g, '-')}`} style={{
              padding: '9px 14px', borderRadius: 8, fontSize: 12, fontWeight: 500,
              color: '#9CA3AF', textDecoration: 'none',
              background: 'transparent', transition: 'color 0.15s',
            }}
              onMouseEnter={e => ((e.target as HTMLElement).style.color = GOLD)}
              onMouseLeave={e => ((e.target as HTMLElement).style.color = '#9CA3AF')}
            >
              {f.section}
              <span style={{ float: 'right', fontSize: 10, color: '#4B5563' }}>{f.items.length}</span>
            </a>
          ))}

          <div style={{
            marginTop: 20, background: CARD_BG, border: `1px solid ${GOLD_BORDER}`,
            borderRadius: 12, padding: '16px 14px',
          }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: '#fff', margin: '0 0 4px' }}>Still have questions?</p>
            <p style={{ fontSize: 11, color: '#6B7280', margin: '0 0 10px', lineHeight: 1.5 }}>
              Mon–Fri, 8 AM–5 PM EAT
            </p>
            <a href="/contact" style={{ fontSize: 12, fontWeight: 600, color: GOLD, textDecoration: 'none' }}>
              Contact Us →
            </a>
          </div>
        </nav>

        {/* Accordion sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
          {FAQS.map(f => (
            <div key={f.section} id={f.section.replace(/\s+/g, '-')}>
              <h2 style={{
                fontSize: 14, fontWeight: 700, color: GOLD,
                textTransform: 'uppercase', letterSpacing: '0.08em',
                margin: '0 0 16px', display: 'flex', alignItems: 'center', gap: 10,
              }}>
                <span style={{ width: 20, height: 2, background: GOLD, borderRadius: 99, display: 'inline-block' }} />
                {f.section}
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {f.items.map(item => (
                  <AccordionItem key={item.q} q={item.q} a={item.a} />
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </PageLayout>
  )
}
