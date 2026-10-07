import PageLayout from '@/components/layout/PageLayout'

const GOLD = '#F8AE0D'
const GOLD_BORDER = 'rgba(248,174,13,0.2)'
const CARD_BORDER = 'rgba(255,255,255,0.07)'

const SOLUTIONS = [
  {
    label: 'Agribusiness Loans',
    desc: (
      <>
        Empowering Ugandan farmers and agro-processors{' '}
        <span style={{ color: GOLD, fontWeight: 600 }}>with flexible financing</span> tailored{' '}
        <span style={{ color: GOLD, fontWeight: 600 }}>to the demands </span>of the global market
      </>
    ),
    img: '/solutions-agribusiness.jpg',
    href: '#agribusiness',
  },
  {
    label: 'Business & Trade Loans',
    desc: (
      <>
        Flexible working capital to{' '}
        <span style={{ color: GOLD, fontWeight: 600 }}>manage cash flows</span> during the export-import cycle and{' '}
        <span style={{ color: GOLD, fontWeight: 600 }}>fulfill large orders</span>.
      </>
    ),
    img: '/solutions-trade.jpg',
    href: '#trade-loans',
  },
  {
    label: 'Vehicle & Asset Finance',
    desc: (
      <>
        Lease or finance{' '}
        <span style={{ color: GOLD, fontWeight: 600 }}>commercial vehicles</span> and machinery essential for{' '}
        <span style={{ color: GOLD, fontWeight: 600 }}>efficient cargo transportation</span>.
      </>
    ),
    img: '/solutions-asset.jpg',
    href: '#asset-finance',
  },
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
          <p className="text-sm leading-relaxed m-0 max-w-lg" style={{ color: '#9CA3AF' }}>
            We provide structured finance products designed to meet the unique challenges and
            opportunities of Ugandan export-oriented businesses.
          </p>
        </div>
      </section>

      {/* ── Product cards ── */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-10 py-10 lg:py-12">
        <div
          className="grid gap-6"
          style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}
        >
          {SOLUTIONS.map(sol => (
            <div
              key={sol.label}
              className="relative rounded-2xl overflow-hidden transition-all duration-300"
              style={{
                height: 380,
                border: `1px solid ${CARD_BORDER}`,
                boxShadow: '0 2px 16px rgba(0,0,0,0.4)',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = GOLD_BORDER
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = `0 12px 40px rgba(248,174,13,0.18)`
                const img = e.currentTarget.querySelector('img') as HTMLImageElement
                if (img) img.style.transform = 'scale(1.07)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = CARD_BORDER
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 2px 16px rgba(0,0,0,0.4)'
                const img = e.currentTarget.querySelector('img') as HTMLImageElement
                if (img) img.style.transform = 'scale(1)'
              }}
            >
              {/* Full-bleed photo */}
              <img
                src={sol.img}
                alt={sol.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500"
                style={{ display: 'block' }}
              />

              {/* Dark gradient overlay — stronger at bottom */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.1) 100%)',
                }}
              />

              {/* Content sits at the bottom */}
              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-6">
                <h3 className="font-extrabold text-white m-0 leading-snug"
                  style={{ fontSize: 'clamp(16px, 1.4vw, 19px)' }}>
                  {sol.label}
                </h3>

                <p className="text-sm leading-relaxed m-0" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  {sol.desc}
                </p>

                <a
                  href={sol.href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold no-underline self-start rounded-lg transition-all duration-150"
                  style={{
                    color: '#0a0a0a',
                    background: GOLD,
                    padding: '7px 16px',
                    boxShadow: '0 0 12px rgba(248,174,13,0.25)',
                    marginTop: 2,
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 24px rgba(248,174,13,0.55)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 12px rgba(248,174,13,0.25)' }}
                >
                  Explore Product →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-10 pb-14 lg:pb-20">
        <div
          className="flex flex-wrap items-center justify-between gap-6 rounded-2xl"
          style={{
            background: '#000000',
            border: '1px solid rgba(255,255,255,0.08)',
            padding: 'clamp(24px, 3vw, 40px) clamp(24px, 4vw, 48px)',
            position: 'relative',
            zIndex: 2,
          }}
        >
          <div>
            <h3 className="font-extrabold text-white mb-1.5" style={{ fontSize: 'clamp(15px,1.6vw,20px)' }}>
              Ready to take your exports to the next level?
            </h3>
            <p className="text-sm m-0" style={{ color: '#6B7280' }}>
              Our financial experts are ready to discuss structured trade solutions tailored to your business.
            </p>
          </div>
          <a href="/contact"
            className="rounded-full text-sm font-bold no-underline whitespace-nowrap"
            style={{ padding: '11px 26px', color: '#ffffff', background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.15)' }}>
            Get in Touch
          </a>
        </div>
      </section>

    </PageLayout>
  )
}
