import PageLayout from '@/components/layout/PageLayout'

const GOLD        = '#F8AE0D'
const GOLD_SOFT   = 'rgba(248,174,13,0.10)'
const GOLD_LINE   = 'rgba(248,174,13,0.22)'
const LINE        = 'rgba(255,255,255,0.07)'
const SURFACE     = '#000000'
const MUTED       = '#9CA3AF'
const FONT        = '"Plus Jakarta Sans", Inter, sans-serif'

/* ── reusable label above section headings ── */
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="m-0 mb-3 uppercase font-bold tracking-[0.12em]"
      style={{ fontSize: 11, color: GOLD, fontFamily: FONT }}
    >
      {children}
    </p>
  )
}

/* ── gold-ringed icon circle ── */
function IconCircle({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex items-center justify-center rounded-full flex-shrink-0"
      style={{ width: 48, height: 48, background: GOLD_SOFT, border: `1px solid ${GOLD_LINE}` }}
    >
      <svg
        width="22" height="22" fill="none" stroke={GOLD}
        strokeWidth="1.6" viewBox="0 0 24 24"
        strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
      >
        {children}
      </svg>
    </div>
  )
}

/* ── data ── */
const STATS = [
  { value: '$22M+', label: 'Total Financed' },
  { value: '63+',   label: 'Exporters Served' },
  { value: '17+',   label: 'Export Sectors' },
  { value: '2024',  label: 'Year Founded' },
]

const VALUES = [
  {
    icon: (
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </>
    ),
    title: 'Integrity',
    desc: 'Transparent dealings, honest advice, and zero hidden costs — always.',
  },
  {
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </>
    ),
    title: 'Innovation',
    desc: 'Designing products that meet the real-world timing of harvest cycles and trade windows.',
  },
  {
    icon: (
      <>
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </>
    ),
    title: 'Partnership',
    desc: 'We grow only when our clients grow — your success is the measure of ours.',
  },
  {
    icon: (
      <>
        <path d="M3 15l4-8 4 5 3-3 4 6" strokeLinejoin="round" />
        <path d="M21 21H3" />
      </>
    ),
    title: 'Impact',
    desc: 'Every shilling financed is a step toward a stronger Ugandan export economy.',
  },
]

const TEAM = [
  {
    name: 'Andrew Muhwezi',
    title: 'Mr.',
    role: 'Chief Executive Officer',
    img: '/team-andrew.png',
  },
  {
    name: 'Martha Namara',
    title: 'Ms.',
    role: 'Finance Manager',
    img: '/team-martha.png',
  },
  {
    name: 'Allan Agaba',
    title: 'Mr.',
    role: 'Chief Operating Officer',
    img: '/team-allan.png',
  },
]

export default function AboutPage() {
  return (
    <PageLayout scrollable>

      {/* ══════════════════════════════════════════
          1. HERO — static, image right, text left
         ══════════════════════════════════════════ */}
      <section
        className="relative w-full overflow-hidden"
        style={{
          minHeight: 'clamp(400px, 44vw, 520px)',
          background: '#040609',
        }}
      >
        {/* Full-bleed hero image (right half fades out) */}
        <div
          className="absolute inset-0"
          style={{ zIndex: 0 }}
        >
          <img
            src="/hero-about.jpg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{
              maskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.05) 35%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,1) 100%)',
              WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.05) 35%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,1) 100%)',
            }}
          />
          {/* Dark base layer — light so the image shows through on the right */}
          <div className="absolute inset-0" style={{ background: 'rgba(4,6,9,0.18)' }} />
        </div>

        {/* Ambient gold glow behind headline */}
        <div
          aria-hidden
          className="absolute pointer-events-none"
          style={{
            top: '20%', left: '5%',
            width: '55vw', height: '55vw',
            background: 'radial-gradient(circle, rgba(248,174,13,0.08) 0%, transparent 65%)',
            zIndex: 1,
          }}
        />

        {/* Content */}
        <div
          className="relative max-w-[1280px] mx-auto px-6 lg:px-10 flex flex-col justify-center h-full"
          style={{ zIndex: 2, paddingTop: 'clamp(48px,5vw,72px)', paddingBottom: 'clamp(48px,5vw,72px)', minHeight: 'inherit' }}
        >
          <Eyebrow>About Uganda Exim Limited</Eyebrow>

          <h1
            className="font-extrabold text-white m-0 leading-[1.07] max-w-[18ch]"
            style={{
              fontSize: 'clamp(2.2rem, 4.8vw, 4rem)',
              letterSpacing: '-0.025em',
              fontFamily: FONT,
            }}
          >
            Financing Uganda's{' '}
            <span style={{ color: GOLD }}>Global Ambition</span>
          </h1>

          <p
            className="mt-5 mb-0 max-w-[52ch] leading-[1.8]"
            style={{ fontSize: 'clamp(14px,1.2vw,16px)', color: '#D1D5DB', fontFamily: FONT }}
          >
            UgExim bridges the financing gap for Ugandan exporters — providing innovative,
            flexible and affordable solutions to compete globally and raise Uganda's
            foreign exchange earnings.
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-wrap gap-3 mt-8">
            <a
              href="/contact"
              className="no-underline rounded-full font-bold flex items-center gap-2"
              style={{
                padding: '12px 28px',
                fontSize: 14,
                color: '#0a0a0a',
                background: GOLD,
                boxShadow: '0 0 24px rgba(248,174,13,0.35)',
                fontFamily: FONT,
              }}
            >
              Apply for Finance
              <svg width="13" height="13" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
              </svg>
            </a>
            <a
              href="/financial-solutions"
              className="no-underline rounded-full font-semibold"
              style={{
                padding: '12px 28px',
                fontSize: 14,
                color: '#ffffff',
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.2)',
                fontFamily: FONT,
              }}
            >
              Our Products
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          2. STATS BAND
         ══════════════════════════════════════════ */}
      <section
        style={{
          borderTop: `1px solid ${LINE}`,
          borderBottom: `1px solid ${LINE}`,
          background: 'rgba(255,255,255,0.02)',
        }}
      >
        <div
          className="max-w-[1280px] mx-auto px-6 lg:px-10 py-12 grid grid-cols-2 lg:grid-cols-4"
          style={{ gap: 0 }}
        >
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className="flex flex-col items-center justify-center text-center py-4"
              style={{
                borderRight: i < STATS.length - 1 ? `1px solid ${LINE}` : 'none',
                padding: 'clamp(16px,2vw,28px)',
              }}
            >
              <span
                className="font-extrabold"
                style={{
                  fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
                  color: GOLD,
                  lineHeight: 1,
                  fontFamily: FONT,
                  textShadow: '0 0 40px rgba(248,174,13,0.25)',
                }}
              >
                {s.value}
              </span>
              <span
                className="font-semibold mt-2"
                style={{ fontSize: 13, color: MUTED, fontFamily: FONT }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          3. WHO WE ARE
         ══════════════════════════════════════════ */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          {/* Left — narrative */}
          <div className="lg:col-span-7">
            <Eyebrow>Who We Are</Eyebrow>
            <h2
              className="font-extrabold text-white m-0 mb-6 leading-tight"
              style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2.4rem)', letterSpacing: '-0.015em', fontFamily: FONT }}
            >
              A specialist financier built for Uganda's exporters
            </h2>
            <p
              className="leading-[1.85] m-0 mb-5 max-w-[62ch]"
              style={{ fontSize: 15, color: MUTED, fontFamily: FONT }}
            >
              Uganda Exim Limited (UgExim) was established in 2024 to close the financing gap
              that Ugandan exporters face. We offer innovative, flexible and affordable financial
              solutions that help exporters compete globally, grow the economy and raise Uganda's
              foreign exchange earnings.
            </p>
            <p
              className="leading-[1.85] m-0 max-w-[62ch]"
              style={{ fontSize: 15, color: MUTED, fontFamily: FONT }}
            >
              Traditional finance often cannot meet exporters' unique needs — so we pair
              tailored products with capacity-building support, helping Ugandan businesses
              unlock new markets and grow sustainably.
            </p>
          </div>

          {/* Right — blob image */}
          <aside className="lg:col-span-5 flex items-center justify-center">
            <div className="relative" style={{ width: 'clamp(280px, 28vw, 380px)', height: 'clamp(300px, 30vw, 400px)' }}>

              {/* Gold background blob (slightly offset behind) */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  transform: 'translate(14px, 14px)',
                  background: GOLD,
                  borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                  opacity: 0.9,
                }}
              />

              {/* Image blob on top */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                  overflow: 'hidden',
                }}
              >
                <img
                  src="/who-we-are.jpg"
                  alt="UgExim team member"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
                />
              </div>

            </div>
          </aside>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          4. VISION & MISSION
         ══════════════════════════════════════════ */}
      <section style={{ background: '#000000', borderTop: `1px solid ${LINE}`, borderBottom: `1px solid ${LINE}` }}>
        <div
          className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-0"
        >
          {/* MISSION — left */}
          <div
            className="flex flex-col"
            style={{ padding: 'clamp(28px,3.5vw,52px)', borderRight: `1px solid ${LINE}` }}
          >
            <h2
              className="font-extrabold text-white m-0 leading-none"
              style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', letterSpacing: '-0.01em', fontFamily: FONT }}
            >
              Mission
            </h2>

            {/* Gold dot + line */}
            <div className="flex items-center gap-0 my-5">
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: GOLD, flexShrink: 0, boxShadow: `0 0 10px ${GOLD}` }} />
              <div style={{ flex: 1, height: 2, background: `linear-gradient(to right, ${GOLD}, rgba(248,174,13,0))` }} />
            </div>

            <p
              className="m-0 leading-[1.85]"
              style={{ fontSize: 'clamp(13px,1.1vw,15px)', color: 'rgba(255,255,255,0.75)', fontFamily: FONT }}
            >
              Providing accessible, affordable and transparent trade finance that lets
              Ugandan exporters thrive and compete globally — contributing to sustainable
              economic development and higher foreign exchange earnings for Uganda.
            </p>
          </div>

          {/* VISION — right */}
          <div
            className="flex flex-col"
            style={{ padding: 'clamp(28px,3.5vw,52px)' }}
          >
            <h2
              className="font-extrabold text-white m-0 leading-none"
              style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', letterSpacing: '-0.01em', fontFamily: FONT }}
            >
              Vision
            </h2>

            {/* Gold dot + line */}
            <div className="flex items-center gap-0 my-5">
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: GOLD, flexShrink: 0, boxShadow: `0 0 10px ${GOLD}` }} />
              <div style={{ flex: 1, height: 2, background: `linear-gradient(to right, ${GOLD}, rgba(248,174,13,0))` }} />
            </div>

            <p
              className="m-0 leading-[1.85]"
              style={{ fontSize: 'clamp(13px,1.1vw,15px)', color: 'rgba(255,255,255,0.75)', fontFamily: FONT }}
            >
              To be the leading provider of innovative and affordable export trade financing
              for Ugandan exporters — driving international trade growth and positioning
              Uganda as a competitive force in global markets.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          5. CORE VALUES
         ══════════════════════════════════════════ */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <div className="mb-12">
          <Eyebrow>Core Values</Eyebrow>
          <h2
            className="font-extrabold text-white m-0 leading-tight"
            style={{ fontSize: 'clamp(1.5rem,2.6vw,2.2rem)', letterSpacing: '-0.015em', fontFamily: FONT }}
          >
            What we stand for
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {VALUES.map((v) => (
            <div
              key={v.title}
              className="rounded-2xl transition-all duration-300"
              style={{
                background: SURFACE,
                border: `1px solid ${LINE}`,
                padding: 'clamp(20px,2vw,28px)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 12px 36px rgba(0,0,0,0.5)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <IconCircle>{v.icon}</IconCircle>
              <h3
                className="font-bold text-white mt-4 mb-2"
                style={{ fontSize: 15, fontFamily: FONT }}
              >
                {v.title}
              </h3>
              <p
                className="m-0 leading-[1.75]"
                style={{ fontSize: 13, color: MUTED, fontFamily: FONT }}
              >
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          6. LEADERSHIP TEAM
         ══════════════════════════════════════════ */}
      <section
        style={{
          borderTop: `1px solid ${LINE}`,
          background: 'rgba(255,255,255,0.01)',
        }}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
          <div className="text-center mb-14">
            <Eyebrow>meet our</Eyebrow>
            <h2
              className="font-extrabold text-white m-0 mb-3"
              style={{ fontSize: 'clamp(1.5rem,2.6vw,2.2rem)', letterSpacing: '-0.015em', fontFamily: FONT }}
            >
              Management team
            </h2>
            <p className="m-0" style={{ fontSize: 15, color: MUTED, fontFamily: FONT }}>
              Experienced professionals driving Uganda's export finance agenda.
            </p>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-10 mx-auto"
            style={{ maxWidth: 960 }}
          >
            {TEAM.map(m => (
              <div
                key={m.name}
                className="flex flex-col items-center text-center transition-all duration-300"
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)' }}
              >
                {/* Circular photo with gold ring */}
                <div
                  style={{
                    width: 180,
                    height: 180,
                    borderRadius: '50%',
                    padding: 5,
                    background: 'rgba(255,255,255,0.06)',
                    border: `2.5px solid ${GOLD}`,
                    boxShadow: '0 0 28px rgba(248,174,13,0.15)',
                    flexShrink: 0,
                  }}
                >
                  <img
                    src={m.img}
                    alt={`${m.title} ${m.name}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      objectPosition: 'top',
                      display: 'block',
                    }}
                  />
                </div>

                {/* Name */}
                <h3
                  className="font-bold text-white m-0 mt-5"
                  style={{ fontSize: 16, fontFamily: FONT }}
                >
                  {m.title} {m.name}
                </h3>

                {/* Role — gold uppercase */}
                <p
                  className="m-0 mt-1.5 uppercase font-bold tracking-[0.07em]"
                  style={{ fontSize: 11, color: GOLD, fontFamily: FONT }}
                >
                  {m.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


    </PageLayout>
  )
}
