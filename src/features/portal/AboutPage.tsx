import PageLayout from '@/components/layout/PageLayout'

const GOLD = '#F8AE0D'
const GOLD_FAINT = 'rgba(248,174,13,0.08)'
const GOLD_BORDER = 'rgba(248,174,13,0.2)'
const CARD_BG = 'rgba(13,18,28,0.8)'
const CARD_BORDER = 'rgba(255,255,255,0.07)'

const VALUES = [
  { title: 'Integrity First', desc: 'Transparency, fairness, and accountability in every interaction.' },
  { title: 'Partnership', desc: 'Working collaboratively with clients, agencies, and stakeholders.' },
  { title: 'Global Excellence', desc: 'Highest standards of service, benchmarked globally.' },
  { title: 'Innovation', desc: 'Financial solutions tailored to exporter needs.' },
  { title: 'Impact', desc: 'Enabling Ugandan exporters to compete globally with confidence.' },
]

const MANDATE = [
  'Provide Export Financing for working capital and asset acquisition.',
  'Offer Export Credit Guarantees to mitigate payment and performance risks.',
  'Deliver Trade Finance instruments that facilitate cross-border trade.',
  'Support Agri-value chain enterprises through flexible financing structures.',
  'Provide Advisory & Capacity Building — financial literacy, trade compliance, market access.',
]

const TEAM = [
  { name: 'Mr. Andrew Muhwezi', role: 'Chief Executive Officer', initial: 'AM' },
  { name: 'Ms. Martha Namara', role: 'Finance Manager', initial: 'MN' },
  { name: 'Mr. Allan Agaba', role: 'Chief Operating Officer', initial: 'AA' },
]

export default function AboutPage() {
  return (
    <PageLayout scrollable>

      {/* ── Hero — two-col on lg+, single col on smaller ── */}
      <section
        className="w-full"
        style={{
          background: 'linear-gradient(180deg, rgba(248,174,13,0.06) 0%, transparent 100%)',
          borderBottom: `1px solid ${CARD_BORDER}`,
        }}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-10 lg:py-14 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <p className="text-[11px] font-bold tracking-[0.12em] uppercase mb-3" style={{ color: GOLD }}>
              About UgExim
            </p>
            <h1 className="font-extrabold text-white leading-tight tracking-tight mb-4"
              style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.8rem)' }}>
              Building the Future of<br />
              <span style={{ color: GOLD }}>Ugandan Trade</span>
            </h1>
            <p className="text-sm leading-relaxed mb-5" style={{ color: '#9CA3AF' }}>
              We are a strategic partner to Uganda's export community. Recognizing that traditional
              finance often cannot meet the unique needs of exporters, UgExim was created to offer
              tailored financial products and capacity-building support.
            </p>
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5"
              style={{ background: GOLD_FAINT, border: `1px solid ${GOLD_BORDER}` }}>
              <span className="w-2 h-2 rounded-full" style={{ background: GOLD, boxShadow: `0 0 6px ${GOLD}`, flexShrink: 0 }} />
              <span className="text-xs font-semibold text-white">In service for the past two years</span>
            </div>
          </div>

          {/* About Us card */}
          <div className="rounded-2xl" style={{ background: CARD_BG, border: `1px solid ${GOLD_BORDER}`, padding: 'clamp(20px,2.5vw,32px)', backdropFilter: 'blur(12px)' }}>
            <p className="text-[11px] font-bold tracking-[0.1em] uppercase mb-2" style={{ color: GOLD }}>About Us</p>
            <h2 className="font-extrabold text-white mb-3" style={{ fontSize: 'clamp(14px,1.4vw,16px)' }}>
              Trusted Export Finance
            </h2>
            <p className="text-sm leading-relaxed m-0" style={{ color: '#9CA3AF' }}>
              Uganda Exim Limited (UgExim) is a specialized financial institution established in 2024
              to bridge the financing gap faced by Ugandan exporters. We provide innovative, flexible,
              and affordable financial solutions that empower exporters to compete globally, drive
              economic growth, and enhance Uganda's foreign exchange earnings.
            </p>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision — 1-col on 1024, 2-col on 1280+ ── */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-10 pt-8 lg:pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {[
            { label: 'Our Vision', title: 'Leading Innovative Export Trade Financing', body: 'To be the leading provider of innovative and affordable export trade financing solutions for Ugandan exporters, driving international trade growth.' },
            { label: 'Our Mission', title: 'Driving Economic Growth Through Strategic Finance', body: 'Providing accessible, affordable, and transparent trade finance solutions that enable Ugandan exporters to thrive and compete globally.', dimBorder: true },
          ].map(c => (
            <div key={c.label} className="rounded-2xl"
              style={{ background: CARD_BG, border: `1px solid ${c.dimBorder ? CARD_BORDER : GOLD_BORDER}`, padding: 'clamp(18px,2vw,28px)', backdropFilter: 'blur(12px)' }}>
              <p className="text-[10px] font-bold tracking-[0.1em] uppercase mb-1.5" style={{ color: GOLD }}>{c.label}</p>
              <h3 className="font-bold text-white mb-2.5 leading-snug" style={{ fontSize: 'clamp(13px,1.2vw,14px)' }}>{c.title}</h3>
              <p className="text-sm leading-relaxed m-0" style={{ color: '#9CA3AF' }}>{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Core Values — auto-fill: 2 col on 1024, up to 5 on wide ── */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-10 pt-8 lg:pt-10">
        <h2 className="text-sm font-bold text-white mb-4">
          Our Core Values
          <span className="text-xs font-normal ml-2" style={{ color: '#6B7280' }}>
            — The fundamental principles that guide our interactions
          </span>
        </h2>
        <div
          className="grid gap-3"
          style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 200px), 1fr))' }}
        >
          {VALUES.map(v => (
            <div key={v.title} className="rounded-[14px]"
              style={{ background: CARD_BG, border: `1px solid ${CARD_BORDER}`, padding: 'clamp(14px,1.6vw,18px)', backdropFilter: 'blur(10px)' }}>
              <div className="w-2 h-2 rounded-full mb-2.5" style={{ background: GOLD }} />
              <h4 className="text-[13px] font-bold text-white mb-1.5">{v.title}</h4>
              <p className="text-xs leading-snug m-0" style={{ color: '#9CA3AF' }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Mandate ── */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-10 pt-8 lg:pt-10">
        <h2 className="text-sm font-bold text-white mb-4">
          Our Mandate
          <span className="text-xs font-normal ml-2" style={{ color: '#6B7280' }}>— Driving Uganda's export growth</span>
        </h2>
        <div className="flex flex-col gap-2.5">
          {MANDATE.map((item, i) => (
            <div key={i} className="flex items-center gap-3.5 rounded-xl"
              style={{ background: CARD_BG, border: `1px solid ${CARD_BORDER}`, padding: '12px 18px', backdropFilter: 'blur(10px)' }}>
              <span className="flex items-center justify-center rounded-full flex-shrink-0 text-[10px] font-bold"
                style={{ width: 22, height: 22, background: GOLD_FAINT, border: `1px solid ${GOLD_BORDER}`, color: GOLD }}>
                {i + 1}
              </span>
              <p className="text-[13px] m-0" style={{ color: '#D1D5DB' }}>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Leadership — auto-fill: 1-col 1024, 3-col 1280 ── */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-10 pt-8 lg:pt-10">
        <h2 className="text-sm font-bold text-white mb-4">The Management Team</h2>
        <div
          className="grid gap-4"
          style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))' }}
        >
          {TEAM.map(t => (
            <div key={t.name} className="flex items-center gap-4 rounded-2xl"
              style={{ background: CARD_BG, border: `1px solid ${CARD_BORDER}`, padding: 'clamp(16px,2vw,24px)', backdropFilter: 'blur(10px)' }}>
              <div className="rounded-full flex-shrink-0 flex items-center justify-center font-extrabold"
                style={{ width: 52, height: 52, background: GOLD_FAINT, border: `2px solid ${GOLD_BORDER}`, fontSize: 14, color: GOLD }}>
                {t.initial}
              </div>
              <div>
                <h4 className="text-[14px] font-bold text-white mb-0.5">{t.name}</h4>
                <span className="text-xs font-semibold" style={{ color: GOLD }}>{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-10 pt-8 lg:pt-10 pb-14 lg:pb-20">
        <div
          className="flex flex-wrap items-center justify-between gap-5 rounded-2xl"
          style={{
            background: 'linear-gradient(135deg, rgba(248,174,13,0.1), rgba(13,18,28,0.9))',
            border: `1px solid ${GOLD_BORDER}`,
            padding: 'clamp(24px, 3vw, 36px) clamp(24px, 4vw, 48px)',
          }}
        >
          <div>
            <h3 className="font-extrabold text-white mb-1.5" style={{ fontSize: 'clamp(14px,1.5vw,18px)' }}>
              Ready to benefit from Uganda's premier export finance institution?
            </h3>
            <p className="text-sm m-0" style={{ color: '#9CA3AF' }}>
              Luthuli House, Plot 15 Luthuli Avenue, 5th Floor, Kampala, Uganda
            </p>
          </div>
          <a href="/contact"
            className="rounded-full text-sm font-bold no-underline whitespace-nowrap"
            style={{ padding: '11px 26px', color: '#0a0a0a', background: GOLD, boxShadow: '0 0 18px rgba(248,174,13,0.3)' }}>
            Contact Us
          </a>
        </div>
      </section>

    </PageLayout>
  )
}
