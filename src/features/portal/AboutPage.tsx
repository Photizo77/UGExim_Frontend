import PageLayout from '@/components/layout/PageLayout'

const GOLD = '#FECC15'
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

      {/* ── Hero ── */}
      <section style={{
        background: 'linear-gradient(180deg, rgba(248,174,13,0.06) 0%, transparent 100%)',
        borderBottom: `1px solid ${CARD_BORDER}`,
        padding: '56px 40px 48px',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, color: GOLD, letterSpacing: '0.12em', textTransform: 'uppercase', margin: '0 0 12px' }}>
              About UgExim
            </p>
            <h1 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 800, color: '#fff', margin: '0 0 16px', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
              Building the Future of<br /><span style={{ color: GOLD }}>Ugandan Trade</span>
            </h1>
            <p style={{ fontSize: 14, color: '#9CA3AF', lineHeight: 1.7, margin: '0 0 24px' }}>
              We are a strategic partner to Uganda's export community. Recognizing that traditional
              finance often cannot meet the unique needs of exporters, UgExim was created to offer
              tailored financial products and capacity-building support.
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: GOLD_FAINT, border: `1px solid ${GOLD_BORDER}`, borderRadius: 999, padding: '7px 16px' }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: GOLD, boxShadow: `0 0 6px ${GOLD}` }} />
              <span style={{ fontSize: 12, fontWeight: 600, color: '#fff' }}>In service for the past two years</span>
            </div>
          </div>

          {/* About Us card — mirrors site's "About Us / Trusted Export Finance" block */}
          <div style={{ background: CARD_BG, border: `1px solid ${GOLD_BORDER}`, borderRadius: 20, padding: '32px 28px', backdropFilter: 'blur(12px)' }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: GOLD, letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 8px' }}>About Us</p>
            <h2 style={{ fontSize: 16, fontWeight: 800, color: '#fff', margin: '0 0 12px' }}>Trusted Export Finance</h2>
            <p style={{ fontSize: 13.5, color: '#9CA3AF', lineHeight: 1.75, margin: 0 }}>
              Uganda Exim Limited (UgExim) is a specialized financial institution established in 2024
              to bridge the financing gap faced by Ugandan exporters. We provide innovative, flexible,
              and affordable financial solutions that empower exporters to compete globally, drive
              economic growth, and enhance Uganda's foreign exchange earnings.
            </p>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision — side by side, concise ── */}
      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '48px 40px 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
        <div style={{ background: CARD_BG, border: `1px solid ${GOLD_BORDER}`, borderRadius: 16, padding: '28px 24px', backdropFilter: 'blur(12px)' }}>
          <p style={{ fontSize: 10, fontWeight: 700, color: GOLD, letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 6px' }}>Our Vision</p>
          <h3 style={{ fontSize: 14, fontWeight: 700, color: '#fff', margin: '0 0 10px', lineHeight: 1.3 }}>
            Leading Innovative Export Trade Financing
          </h3>
          <p style={{ fontSize: 13, color: '#9CA3AF', lineHeight: 1.7, margin: 0 }}>
            To be the leading provider of innovative and affordable export trade financing solutions
            for Ugandan exporters, driving international trade growth.
          </p>
        </div>
        <div style={{ background: CARD_BG, border: `1px solid ${CARD_BORDER}`, borderRadius: 16, padding: '28px 24px', backdropFilter: 'blur(12px)' }}>
          <p style={{ fontSize: 10, fontWeight: 700, color: GOLD, letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 6px' }}>Our Mission</p>
          <h3 style={{ fontSize: 14, fontWeight: 700, color: '#fff', margin: '0 0 10px', lineHeight: 1.3 }}>
            Driving Economic Growth Through Strategic Finance
          </h3>
          <p style={{ fontSize: 13, color: '#9CA3AF', lineHeight: 1.7, margin: 0 }}>
            Providing accessible, affordable, and transparent trade finance solutions that enable
            Ugandan exporters to thrive and compete globally.
          </p>
        </div>
      </section>

      {/* ── Core Values — compact grid ── */}
      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '40px 40px 0' }}>
        <h2 style={{ fontSize: 15, fontWeight: 700, color: '#fff', margin: '0 0 16px' }}>
          Our Core Values
          <span style={{ fontSize: 12, fontWeight: 400, color: '#6B7280', marginLeft: 10 }}>
            — The fundamental principles that guide our interactions
          </span>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12 }}>
          {VALUES.map(v => (
            <div key={v.title} style={{
              background: CARD_BG, border: `1px solid ${CARD_BORDER}`,
              borderRadius: 14, padding: '18px 16px', backdropFilter: 'blur(10px)',
            }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: GOLD, marginBottom: 10 }} />
              <h4 style={{ fontSize: 13, fontWeight: 700, color: '#fff', margin: '0 0 6px' }}>{v.title}</h4>
              <p style={{ fontSize: 12, color: '#9CA3AF', lineHeight: 1.55, margin: 0 }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Mandate — compact list ── */}
      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '40px 40px 0' }}>
        <h2 style={{ fontSize: 15, fontWeight: 700, color: '#fff', margin: '0 0 16px' }}>
          Our Mandate
          <span style={{ fontSize: 12, fontWeight: 400, color: '#6B7280', marginLeft: 10 }}>
            — Driving Uganda's export growth
          </span>
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {MANDATE.map((item, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 14,
              background: CARD_BG, border: `1px solid ${CARD_BORDER}`,
              borderRadius: 12, padding: '13px 18px', backdropFilter: 'blur(10px)',
            }}>
              <span style={{
                width: 22, height: 22, borderRadius: '50%', flexShrink: 0,
                background: GOLD_FAINT, border: `1px solid ${GOLD_BORDER}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 10, fontWeight: 700, color: GOLD,
              }}>{i + 1}</span>
              <p style={{ fontSize: 13, color: '#D1D5DB', margin: 0 }}>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Leadership ── */}
      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '40px 40px 0' }}>
        <h2 style={{ fontSize: 15, fontWeight: 700, color: '#fff', margin: '0 0 16px' }}>
          The Management Team
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {TEAM.map(t => (
            <div key={t.name} style={{
              background: CARD_BG, border: `1px solid ${CARD_BORDER}`,
              borderRadius: 16, padding: '24px 22px',
              display: 'flex', alignItems: 'center', gap: 16,
              backdropFilter: 'blur(10px)',
            }}>
              <div style={{
                width: 52, height: 52, borderRadius: '50%', flexShrink: 0,
                background: GOLD_FAINT, border: `2px solid ${GOLD_BORDER}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 14, fontWeight: 800, color: GOLD,
              }}>{t.initial}</div>
              <div>
                <h4 style={{ fontSize: 14, fontWeight: 700, color: '#fff', margin: '0 0 3px' }}>{t.name}</h4>
                <span style={{ fontSize: 12, color: GOLD, fontWeight: 600 }}>{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '40px 40px 72px' }}>
        <div style={{
          background: `linear-gradient(135deg, rgba(248,174,13,0.1), rgba(13,18,28,0.9))`,
          border: `1px solid ${GOLD_BORDER}`,
          borderRadius: 20, padding: '36px 48px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap',
        }}>
          <div>
            <h3 style={{ fontSize: 18, fontWeight: 800, color: '#fff', margin: '0 0 6px' }}>
              Ready to benefit from Uganda's premier export finance institution?
            </h3>
            <p style={{ fontSize: 13, color: '#9CA3AF', margin: 0 }}>
              Luthuli House, Plot 15 Luthuli Avenue, 5th Floor, Kampala, Uganda
            </p>
          </div>
          <a href="/contact" style={{
            padding: '11px 26px', borderRadius: 999, fontSize: 13, fontWeight: 700,
            color: '#0a0a0a', background: GOLD, textDecoration: 'none',
            boxShadow: '0 0 18px rgba(248,174,13,0.3)', whiteSpace: 'nowrap',
          }}>Contact Us</a>
        </div>
      </section>

    </PageLayout>
  )
}
