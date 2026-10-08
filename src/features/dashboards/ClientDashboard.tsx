import { useState, type ReactNode } from 'react'
import {
  LayoutDashboard,
  FileText,
  ClipboardList,
  FilePlus2,
  FileSpreadsheet,
  Handshake,
  Landmark,
  Calculator,
  CreditCard,
  Bell,
  User,
  LogOut,
  Search,
  Sprout,
  Ship,
  Truck,
  Building2,
  FileCheck2,
  Clock,
  CheckCircle2,
  FileWarning,
  ArrowRight,
  ChevronDown,
  Upload,
  Info,
  CalendarClock,
} from 'lucide-react'

/* ───────────────────────── Constants ───────────────────────── */

const GOLD = '#FECC15'
const FONT = '"Plus Jakarta Sans", Inter, sans-serif'
const SIDEBAR_BG = '#0A0E17'
const SIDEBAR_WIDTH = 280

/* ──────────────────────── Types ─────────────────────────── */

interface NavItem {
  label: string
  icon: ReactNode
  active?: boolean
  badge?: string
}

/* ──────────────────────── Sidebar ──────────────────────── */

const NAV_ITEMS: NavItem[] = [
  { label: 'Dashboard', icon: <LayoutDashboard size={18} />, active: true },
  { label: 'Documents', icon: <FileText size={18} /> },
  { label: 'My Applications', icon: <ClipboardList size={18} /> },
  { label: 'New Application', icon: <FilePlus2 size={18} /> },
  { label: 'Term Sheet', icon: <FileSpreadsheet size={18} /> },
  { label: 'Final Offer', icon: <Handshake size={18} /> },
  { label: 'Facility', icon: <Landmark size={18} /> },
  { label: 'Loan Calculator', icon: <Calculator size={18} /> },
  { label: 'Payments', icon: <CreditCard size={18} /> },
  { label: 'Notifications', icon: <Bell size={18} />, badge: '3' },
  { label: 'Account', icon: <User size={18} /> },
]

function ClientSidebar() {
  return (
    <aside
      style={{
        width: SIDEBAR_WIDTH,
        flexShrink: 0,
        background: SIDEBAR_BG,
        fontFamily: FONT,
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        position: 'sticky',
        top: 0,
      }}
    >
      {/* Logo — white pill, matches Navbar */}
      <div style={{ padding: '14px 17px 12px', flexShrink: 0, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', background: '#fff', borderRadius: 10, padding: '4px 10px' }}>
          <img
            src="/logo.png"
            alt="UgExim"
            style={{ height: 32, width: 'auto', objectFit: 'contain', display: 'block' }}
            onError={(e) => {
              const img = e.target as HTMLImageElement
              img.style.display = 'none'
              const fb = img.nextElementSibling as HTMLElement | null
              if (fb) fb.style.display = 'flex'
            }}
          />
          <span style={{ display: 'none', fontWeight: 800, fontSize: 20, color: '#111', letterSpacing: '-0.02em' }}>
            UgE<span style={{ color: GOLD }}>x</span>im
          </span>
        </div>
      </div>

      {/* Search */}
      <div style={{ padding: '12px 17px', flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, border: '1px solid #343434', borderRadius: 30, padding: '10px 16px' }}>
          <Search size={14} color="#C4C4C4" />
          <span style={{ fontSize: 13, color: '#C4C4C4', fontWeight: 500 }}>Search here...</span>
        </div>
      </div>

      {/* Nav items — takes remaining space, scrolls if overflow */}
      <nav style={{ display: 'flex', flexDirection: 'column', gap: 4, padding: '0 17px', flex: 1, overflowY: 'auto', minHeight: 0 }}>
        {NAV_ITEMS.map((item) => (
          <button
            key={item.label}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              padding: '12px 16px',
              borderRadius: 30,
              border: 'none',
              background: item.active ? GOLD : 'transparent',
              color: item.active ? '#000' : '#fff',
              fontFamily: FONT,
              fontSize: 14,
              fontWeight: 600,
              cursor: 'pointer',
              textAlign: 'left',
            }}
          >
            <span style={{ display: 'flex', flexShrink: 0 }}>{item.icon}</span>
            <span style={{ flex: 1 }}>{item.label}</span>
            {item.badge && (
              <span style={{ background: item.active ? '#000' : GOLD, color: item.active ? '#fff' : '#000', fontSize: 10, fontWeight: 800, borderRadius: 9999, padding: '1px 7px', minWidth: 18, textAlign: 'center' }}>
                {item.badge}
              </span>
            )}
          </button>
        ))}
      </nav>

      {/* Upcoming Event Card — always visible at bottom */}
      <div style={{ padding: '0 17px 8px', flexShrink: 0 }}>
        <div style={{ background: '#202226', border: '1px solid #262626', borderRadius: 16, padding: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.5px', textTransform: 'uppercase', color: '#A3A3A3' }}>Upcoming</span>
              <span style={{ fontSize: 12, fontWeight: 600, color: '#fff' }}>Support Session</span>
              <span style={{ fontSize: 11, color: '#A3A3A3' }}>10:00 AM - 11:00 AM</span>
            </div>
            <div style={{ width: 28, height: 28, borderRadius: 9999, background: '#F5C344', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <ArrowRight size={14} color="#000" />
            </div>
          </div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <span style={{ fontSize: 10, fontWeight: 500, color: '#34D399' }}>● Support</span>
            <span style={{ fontSize: 10, fontWeight: 500, color: '#34D399' }}>● Video Call</span>
          </div>
        </div>
      </div>

      {/* Sign Out */}
      <div style={{ padding: '0 17px 20px', flexShrink: 0 }}>
        <button style={{ display: 'flex', alignItems: 'center', gap: 12, width: '100%', padding: '12px 16px', borderRadius: 30, border: 'none', background: 'transparent', color: '#fff', fontFamily: FONT, fontSize: 14, fontWeight: 600, cursor: 'pointer' }}>
          <LogOut size={18} />
          Sign Out
        </button>
      </div>
    </aside>
  )
}
/* ──────────────────── Top Bar ──────────────────────────── */

function TopBar() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '14px 32px',
        borderBottom: '1px solid #DBDBDB',
        background: '#fff',
        gap: 24,
        fontFamily: FONT,
      }}
    >
      {/* Global Search */}
      <div style={{ position: 'relative', flex: 1, maxWidth: 512 }}>
        <Search
          size={16}
          color="#9CA3AF"
          style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)' }}
        />
        <input
          type="text"
          placeholder="Search facilities, resources..."
          style={{
            width: '100%',
            border: '1px solid #DBDBDB',
            borderRadius: 9999,
            padding: '8px 16px 9px 40px',
            fontSize: 12,
            color: '#000',
            outline: 'none',
            fontFamily: FONT,
            boxSizing: 'border-box',
            background: '#fff',
          }}
        />
      </div>

      {/* Right Actions */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        {/* Notification Bell */}
        <div style={{ position: 'relative' }}>
          <button
            style={{
              width: 28,
              height: 28,
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Bell size={20} color="#374151" />
          </button>
          <span
            style={{
              position: 'absolute',
              top: -3,
              right: -2,
              width: 16,
              height: 17,
              background: GOLD,
              border: '1px solid #fff',
              borderRadius: 9999,
              fontSize: 10,
              fontWeight: 800,
              color: '#222',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            3
          </span>
        </div>

        {/* User Profile */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            paddingLeft: 8,
            borderLeft: '1px solid #DBDBDB',
          }}
        >
          {/* Avatar */}
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 9999,
              background: '#222',
              border: '1px solid #fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: GOLD,
              fontSize: 12,
              fontWeight: 700,
              flexShrink: 0,
            }}
          >
            SN
          </div>
          {/* Name & Role */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: '#111827', letterSpacing: '-0.3px' }}>
              Sarah Nabuuma
            </span>
            <span style={{ fontSize: 11, fontWeight: 500, color: '#000' }}>Client</span>
          </div>
          <ChevronDown size={14} color="#000" style={{ flexShrink: 0 }} />
        </div>
      </div>
    </div>
  )
}

/* ──────────────── Welcome Banner ───────────────────────── */

function WelcomeIllustration() {
  return (
    <svg viewBox="0 0 279 157" style={{ width: '100%', height: '100%' }} fill="none">
      {/* Background panel */}
      <rect width="279" height="157" rx="10" fill="#F9FAFE" />
      {/* Abstract building / chart shapes */}
      <rect x="30" y="30" width="100" height="60" rx="4" fill="#B0CDF7" />
      <rect x="30" y="100" width="100" height="20" rx="4" fill="#EBF1FD" />
      {/* Center tower */}
      <rect x="108" y="32" width="60" height="90" rx="4" fill="#0648A6" />
      <rect x="108" y="32" width="60" height="90" rx="4" fill="#0E5BCD" opacity={0.8} />
      <rect x="118" y="38" width="8" height="8" rx="1" fill="#fff" opacity={0.9} />
      <rect x="132" y="38" width="8" height="8" rx="1" fill="#fff" opacity={0.7} />
      <rect x="146" y="38" width="8" height="8" rx="1" fill="#fff" opacity={0.9} />
      <rect x="118" y="52" width="8" height="8" rx="1" fill="#fff" opacity={0.7} />
      <rect x="132" y="52" width="8" height="8" rx="1" fill="#fff" opacity={0.9} />
      <rect x="146" y="52" width="8" height="8" rx="1" fill="#fff" opacity={0.7} />
      <rect x="118" y="66" width="8" height="8" rx="1" fill="#fff" opacity={0.9} />
      <rect x="132" y="66" width="8" height="8" rx="1" fill="#fff" opacity={0.7} />
      <rect x="146" y="66" width="8" height="8" rx="1" fill="#fff" opacity={0.9} />
      {/* Right structure */}
      <rect x="180" y="50" width="50" height="70" rx="4" fill="#444756" />
      <rect x="188" y="58" width="34" height="4" rx="2" fill="#FECC15" />
      <rect x="188" y="68" width="34" height="4" rx="2" fill="#0E5BCD" />
      <rect x="188" y="78" width="24" height="4" rx="2" fill="#B0CDF7" />
      <rect x="188" y="88" width="34" height="4" rx="2" fill="#0E5BCD" />
      <rect x="188" y="98" width="28" height="4" rx="2" fill="#B0CDF7" />
      {/* Coin / globe accent */}
      <circle cx="130" cy="128" r="16" fill="#FECC15" opacity={0.2} />
      <circle cx="130" cy="128" r="10" fill="#FECC15" opacity={0.4} />
      <circle cx="130" cy="128" r="5" fill="#FECC15" />
      {/* Growth arrow */}
      <path d="M40 105 L70 85 L100 95 L130 60 L160 45" stroke="#0E5BCD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="160" cy="45" r="3" fill="#F72700" />
      {/* Bottom dots */}
      <circle cx="40" cy="140" r="3" fill="#B0CDF7" />
      <circle cx="55" cy="140" r="3" fill="#0E5BCD" opacity={0.5} />
      <circle cx="70" cy="140" r="3" fill="#B0CDF7" />
    </svg>
  )
}

function WelcomeBanner() {
  return (
    <div
      style={{
        border: '1px solid #D5D5D5',
        borderRadius: 20,
        margin: '16px 12px 0',
        padding: '23px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 24,
        fontFamily: FONT,
        background: '#fff',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4.5px', flex: 1, maxWidth: 672 }}>
        <span style={{ fontSize: 25, fontWeight: 600, letterSpacing: '0.3px', textTransform: 'uppercase', color: GOLD }}>
          Good Morning,
        </span>
        <h1 style={{ margin: 0, fontSize: 25, fontWeight: 800, lineHeight: '36px', color: '#030712' }}>
          Sarah Nabuuma, here is your day at a glance
        </h1>
        <p style={{ margin: 0, fontSize: 15, fontWeight: 400, lineHeight: '21px', color: '#1F2937', maxWidth: 811 }}>
          Your trade finance application is under Business team review. No action required — we'll notify you of any
          updates or document requests.
        </p>
      </div>
      <div style={{ width: 279, height: 157, flexShrink: 0 }}>
        <WelcomeIllustration />
      </div>
    </div>
  )
}

/* ──────────────────── Metric Cards ─────────────────────── */

interface MetricCard {
  label: string
  value: string
  icon: ReactNode
  indicators: { color: string; label: string }[]
}

const METRIC_CARDS: MetricCard[] = [
  {
    label: 'Active Applications',
    value: '2',
    icon: <FileCheck2 size={14} color="#000" />,
    indicators: [
      { color: '#F59E0B', label: 'In Review' },
      { color: '#10B981', label: 'Approved' },
    ],
  },
  {
    label: 'Pending Review',
    value: '1',
    icon: <Clock size={14} color="#000" />,
    indicators: [{ color: '#F43F5E', label: 'Awaiting Business Team' }],
  },
  {
    label: 'Approved Loans',
    value: '3',
    icon: <CheckCircle2 size={14} color="#000" />,
    indicators: [{ color: '#10B981', label: 'All in good standing' }],
  },
  {
    label: 'Documents Pending',
    value: '1',
    icon: <FileWarning size={14} color="#000" />,
    indicators: [{ color: '#F43F5E', label: 'Director ID Required' }],
  },
]

function MetricCardsSection() {
  return (
    <div
      style={{
        display: 'flex',
        gap: 16,
        padding: '24px 12px 0',
        fontFamily: FONT,
      }}
    >
      {METRIC_CARDS.map((card) => (
        <div
          key={card.label}
          style={{
            flex: 1,
            background: '#fff',
            border: '1px solid #F1E8C6',
            borderRadius: 16,
            padding: 16,
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            alignItems: 'flex-end',
          }}
        >
          {/* Header row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, width: '100%' }}>
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: 9999,
                background: GOLD,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              {card.icon}
            </div>
            <span style={{ fontSize: 12, fontWeight: 700, color: '#1F2937' }}>{card.label}</span>
          </div>
          {/* Value */}
          <div style={{ width: '100%', paddingTop: 4 }}>
            <span style={{ fontSize: 24, fontWeight: 800, color: '#030712' }}>{card.value}</span>
          </div>
          {/* Indicators */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, width: '100%', flexWrap: 'wrap' }}>
            {card.indicators.map((ind, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <span style={{ width: 6, height: 6, borderRadius: 9999, background: ind.color, flexShrink: 0 }} />
                <span style={{ fontSize: 11, fontWeight: 400, color: i === card.indicators.length - 1 ? '#4B5563' : '#9CA3AF' }}>
                  {ind.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

/* ──────────────────── Finance Products ─────────────────── */

interface Product {
  title: string
  description: string
  icon: ReactNode
  rate: string
  term: string
}

const PRODUCTS: Product[] = [
  {
    title: 'Agribusiness Loan',
    description: 'Supports farming, agro-processing value chains with flexible terms and cycles.',
    icon: <Sprout size={16} color="#000" />,
    rate: '14% p.a.',
    term: '24 months',
  },
  {
    title: 'Trade Finance',
    description: 'Letters of credit, pre-shipment finance, and export guarantees for smooth international trade.',
    icon: <Ship size={16} color="#000" />,
    rate: '12% p.a.',
    term: '12 months',
  },
  {
    title: 'Vehicle & Asset Finance',
    description: 'Flexible leasing/financing for vehicles, equipment and assets to grow your business.',
    icon: <Truck size={16} color="#000" />,
    rate: '16% p.a.',
    term: '60 months',
  },
  {
    title: 'Business Loan',
    description: 'Working capital and growth loans for businesses, with flexible repayment terms and global standards.',
    icon: <Building2 size={16} color="#000" />,
    rate: '18% p.a.',
    term: '36 months',
  },
]

function FinanceProductsSection() {
  return (
    <div style={{ padding: '32px 12px 0', fontFamily: FONT, display: 'flex', flexDirection: 'column', gap: 14 }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <h2 style={{ margin: 0, fontSize: 16, fontWeight: 800, letterSpacing: '-0.4px', color: '#111827' }}>
            Finance Products
          </h2>
          <p style={{ margin: 0, fontSize: 12, fontWeight: 400, color: '#6B7280' }}>
            Explore our tailored financial solutions for your business needs.
          </p>
        </div>
        <button
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 4,
            padding: '6px 14px',
            background: '#F9D00F',
            border: 'none',
            borderRadius: 9999,
            cursor: 'pointer',
            fontFamily: FONT,
          }}
        >
          <span style={{ fontSize: 12, fontWeight: 600, color: '#000' }}>View All</span>
          <ArrowRight size={12} color="#000" />
        </button>
      </div>

      {/* Product cards */}
      <div style={{ display: 'flex', gap: 16 }}>
        {PRODUCTS.map((p) => (
          <div
            key={p.title}
            style={{
              flex: 1,
              background: '#fff',
              border: '1px solid #ECE2BC',
              borderRadius: 16,
              padding: 16,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: 16,
            }}
          >
            {/* Top */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3.3px' }}>
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 9999,
                  background: GOLD,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {p.icon}
              </div>
              <h3 style={{ margin: '8.7px 0 0', fontSize: 14, fontWeight: 700, color: '#111827' }}>{p.title}</h3>
              <p style={{ margin: 0, fontSize: '11.5px', fontWeight: 400, lineHeight: '16px', color: '#4B5563' }}>
                {p.description}
              </p>
            </div>
            {/* Bottom */}
            <div style={{ borderTop: '1px dashed #E5E7EB', paddingTop: 12, display: 'flex', flexDirection: 'column', gap: 4 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', color: '#9CA3AF' }}>Rate</span>
                <span style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', color: '#9CA3AF' }}>Term</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 8 }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: '#111827' }}>{p.rate}</span>
                <span style={{ fontSize: 12, fontWeight: 700, color: '#111827' }}>{p.term}</span>
              </div>
              <button
                style={{
                  width: '100%',
                  padding: '6px 0',
                  background: '#000',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 8,
                  fontSize: 12,
                  fontWeight: 500,
                  cursor: 'pointer',
                  fontFamily: FONT,
                }}
              >
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ──────────────────── Trade Insights ──────────────────── */

interface InsightItem {
  category: string
  title: string
  meta: string
  image: string
}

const INSIGHT_ITEMS: InsightItem[] = [
  {
    category: 'Horticultural Produce',
    title: 'EU Demand for Ugandan Horticulture Surges 40% in Q3',
    meta: '22 Sep 2024 · 6 min read',
    image: '/solutions-agribusiness.jpg',
  },
  {
    category: 'Letter of Credit',
    title: 'Streamlining LC Documentation: A Step-by-Step Guide',
    meta: '5 Sep 2024 · 5 min read',
    image: '/solutions-trade.jpg',
  },
  {
    category: 'SME',
    title: 'How SME Blocks Are Unlocking Export Financing in Uganda',
    meta: '1 Sep 2024 · 5 min read',
    image: '/solutions-asset.jpg',
  },
]

function TradeInsightsSection() {
  return (
    <div style={{ padding: '32px 12px 0', fontFamily: FONT, display: 'flex', flexDirection: 'column', gap: 14 }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <h2 style={{ margin: 0, fontSize: 16, fontWeight: 800, letterSpacing: '-0.4px', color: '#111827' }}>
            Trade Insights
          </h2>
          <p style={{ margin: 0, fontSize: 12, fontWeight: 400, color: '#6B7280' }}>
            Latest market trends and export finance news from Uganda.
          </p>
        </div>
        <button
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 4,
            padding: '6px 14px',
            background: GOLD,
            border: 'none',
            borderRadius: 9999,
            cursor: 'pointer',
            fontFamily: FONT,
          }}
        >
          <span style={{ fontSize: 12, fontWeight: 600, color: '#000' }}>View All</span>
          <ArrowRight size={12} color="#000" />
        </button>
      </div>

      {/* Featured + stacked grid */}
      <div style={{ display: 'flex', gap: 16, height: 'auto' }}>
        {/* Featured large card */}
        <div
          style={{
            flex: '1 1 65%',
            background: '#fff',
            border: '1px solid #E5E7EB',
            borderRadius: 16,
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Image area */}
          <div style={{ position: 'relative', height: 256, background: '#1C1917' }}>
            <img
              src="/insight-coffee.jpg"
              alt="Ugandan coffee beans"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
            />
            <span
              style={{
                position: 'absolute',
                top: 16,
                left: 16,
                background: GOLD,
                borderRadius: 2,
                padding: '4px 10px',
                fontSize: 10,
                fontWeight: 800,
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                color: '#000',
              }}
            >
              Featured
            </span>
          </div>
          {/* Content */}
          <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: 6 }}>
            <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700, lineHeight: '25px', color: '#111827' }}>
              Uganda's Coffee Export Sector Posts Record UGX 3.27 Trillion in FY 2025/26
            </h3>
            <p style={{ margin: 0, fontSize: 12, fontWeight: 400, lineHeight: '20px', color: '#4B5563' }}>
              Uganda's coffee exports reached a record high in the 2025/26 financial year, driven by rising global
              demand and improved post-harvest handling by cooperatives. UGExim provided critical trade lines to…
            </p>
            {/* Footer row */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: 16,
                borderTop: '1px solid #F3F4F6',
                marginTop: 8,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: 9999,
                    background: '#000',
                    color: '#fff',
                    fontSize: 10,
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  UN
                </div>
                <span style={{ fontSize: 12, fontWeight: 500, color: '#6B7280' }}>UGExim Research · 3 Oct 2026</span>
              </div>
              <button
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 4,
                  padding: '6px 12px',
                  background: GOLD,
                  border: 'none',
                  borderRadius: 9999,
                  cursor: 'pointer',
                  fontFamily: FONT,
                }}
              >
                <span style={{ fontSize: 12, fontWeight: 600, color: '#000' }}>Read More</span>
                <ArrowRight size={12} color="#000" />
              </button>
            </div>
          </div>
        </div>

        {/* Stacked right cards */}
        <div style={{ flex: '1 1 35%', display: 'flex', flexDirection: 'column', gap: 12 }}>
          {INSIGHT_ITEMS.map((item) => (
            <div
              key={item.title}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                background: '#fff',
                border: '1px solid #E5E7EB',
                borderRadius: 16,
                padding: 12,
                flex: 1,
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4, flex: 1, minWidth: 0 }}>
                <span
                  style={{
                    display: 'inline-block',
                    background: GOLD,
                    borderRadius: 4,
                    padding: '2px 8px',
                    fontSize: 9,
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    color: '#000',
                    width: 'fit-content',
                  }}
                >
                  {item.category}
                </span>
                <h4 style={{ margin: 0, fontSize: 12, fontWeight: 700, lineHeight: '16px', color: '#111827' }}>
                  {item.title}
                </h4>
                <span style={{ fontSize: 10, fontWeight: 400, color: '#9CA3AF' }}>{item.meta}</span>
                <span style={{ fontSize: 11, fontWeight: 700, color: GOLD, cursor: 'pointer' }}>Read More →</span>
              </div>
              <img
                src={item.image}
                alt={item.category}
                style={{ width: 80, height: 80, borderRadius: 12, objectFit: 'cover', flexShrink: 0 }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ──────────── Status & Facility Section ───────────────── */

interface Step {
  label: string
  status: 'done' | 'active' | 'pending'
}

const STEPS: Step[] = [
  { label: 'Submitted', status: 'done' },
  { label: 'Docs Verified', status: 'done' },
  { label: 'Operations Review', status: 'done' },
  { label: 'Business Team', status: 'active' },
  { label: 'Credit Committee', status: 'pending' },
  { label: 'Board Review', status: 'pending' },
  { label: 'Legal & Contract', status: 'pending' },
  { label: 'Disbursement', status: 'pending' },
]

function StepDot({ step, index }: { step: Step; index: number }) {
  if (step.status === 'done') {
    return (
      <div
        style={{
          width: 28,
          height: 28,
          borderRadius: 9999,
          background: '#059669',
          boxShadow: '0 0 0 4px #fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
          <path d="M2 5L4.5 7L8 3" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    )
  }
  if (step.status === 'active') {
    return (
      <div
        style={{
          width: 28,
          height: 28,
          borderRadius: 9999,
          background: '#F9D00F',
          boxShadow: '0 0 0 4px #FEF3C7',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <div style={{ width: 10, height: 10, background: '#000', borderRadius: 2 }} />
      </div>
    )
  }
  return (
    <div
      style={{
        width: 28,
        height: 28,
        borderRadius: 9999,
        background: '#F3F4F6',
        border: '1px solid #D1D5DB',
        boxShadow: '0 0 0 4px #fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        fontSize: 12,
        fontWeight: 700,
        color: '#9CA3AF',
      }}
    >
      {index + 1}
    </div>
  )
}

function ProgressStepper() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, fontFamily: FONT }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ margin: 0, fontSize: 14, fontWeight: 800, color: '#111827' }}>Application Progress</h3>
          <span style={{ fontSize: 12, fontWeight: 400, color: '#6B7280' }}>
            Trade Finance · TF-2026-0048
          </span>
        </div>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '4px 12px',
            background: '#FFF5C2',
            border: '1px solid #FCD34D',
            borderRadius: 9999,
          }}
        >
          <span style={{ fontSize: 12, fontWeight: 600, color: '#78350F' }}>In Review</span>
        </div>
      </div>

      {/* Stepper track */}
      <div style={{ position: 'relative', padding: '12px 8px 20px' }}>
        {/* Track line */}
        <div
          style={{
            position: 'absolute',
            top: 26,
            left: 20,
            right: 20,
            height: 2,
            background: '#E5E7EB',
            zIndex: 0,
          }}
        />
        {/* Steps */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {STEPS.map((step, i) => (
            <div key={step.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
              <StepDot step={step} index={i} />
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 600,
                  color: step.status === 'pending' ? '#9CA3AF' : '#374151',
                  textAlign: 'center',
                  maxWidth: 70,
                }}
              >
                {step.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Alert cards */}
      {/* Informative alert */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: 12,
          padding: 14,
          background: '#FFFDF4',
          border: '1px solid #F1E8C6',
          borderRadius: 12,
        }}
      >
        <div
          style={{
            width: 24,
            height: 24,
            borderRadius: 9999,
            background: '#FEF3C7',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            marginTop: 2,
          }}
        >
          <Info size={14} color={GOLD} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.44px' }}>
          <span style={{ fontSize: 12, fontWeight: 700, color: '#111827' }}>Review in Progress</span>
          <p style={{ margin: 0, fontSize: 11, fontWeight: 400, lineHeight: '18px', color: '#4B5563' }}>
            Your application is in review. Expect an update within 3–5 business days. You will be notified of any
            decision or information request.
          </p>
        </div>
      </div>

      {/* Action required alert */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 12,
          padding: 14,
          background: '#FFFDF4',
          border: '1px solid #F1E8C6',
          borderRadius: 12,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div
            style={{
              width: 24,
              height: 24,
              borderRadius: 9999,
              background: '#FEF3C7',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <Upload size={14} color={GOLD} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: '#111827' }}>
              Action Required: Upload Director ID Documents
            </span>
            <p style={{ margin: 0, fontSize: 11, fontWeight: 400, lineHeight: '16px', color: '#6B7280' }}>
              Please upload your valid Director ID Documents to avoid delay. Use the Documents page to upload.
            </p>
          </div>
        </div>
        <button
          style={{
            padding: '6px 16px',
            background: '#F9D00F',
            border: 'none',
            borderRadius: 8,
            fontSize: 12,
            fontWeight: 700,
            color: '#000',
            cursor: 'pointer',
            fontFamily: FONT,
            flexShrink: 0,
          }}
        >
          Upload
        </button>
      </div>
    </div>
  )
}

/* ──────────────────── Calc Results Card ───────────────── */

function CalcResultsCard() {
  return (
    <div
      style={{
        background: '#000',
        borderRadius: 16,
        padding: 20,
        fontFamily: '"Poppins", sans-serif',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <h3
        style={{
          margin: 0,
          fontSize: 16,
          fontWeight: 800,
          letterSpacing: '0.8px',
          textTransform: 'uppercase',
          color: '#CEBAB9',
        }}
      >
        Calculation Results
      </h3>

      {/* Top row: Monthly Instalment + Effective Rate */}
      <div style={{ display: 'flex', gap: 24, marginTop: 20, paddingBottom: 16 }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span
            style={{
              fontSize: 14,
              fontWeight: 400,
              letterSpacing: '0.5px',
              textTransform: 'uppercase',
              color: 'rgba(206,186,185,0.96)',
            }}
          >
            Monthly Instalment
          </span>
          <span style={{ fontSize: 22, fontWeight: 800, letterSpacing: '-0.5px', color: '#E6C200', marginTop: 4 }}>
            UGX 7,458,022
          </span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span
            style={{
              fontSize: 14,
              fontWeight: 400,
              letterSpacing: '0.5px',
              textTransform: 'uppercase',
              color: '#CEBAB9',
            }}
          >
            Effective Rate
          </span>
          <span style={{ fontSize: 22, fontWeight: 800, color: '#fff', marginTop: 4 }}>18.0% p.a.</span>
        </div>
      </div>

      {/* Bottom row: Total Interest + Total Repayment */}
      <div style={{ display: 'flex', gap: 24, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <span
            style={{
              fontSize: 16,
              fontWeight: 400,
              letterSpacing: '0.5px',
              textTransform: 'uppercase',
              color: 'rgba(206,186,185,0.97)',
            }}
          >
            Total Interest
          </span>
          <span style={{ fontSize: 20, fontWeight: 800, color: 'rgba(255,255,255,0.85)' }}>UGX 28,992,528</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <span
            style={{
              fontSize: 16,
              fontWeight: 400,
              letterSpacing: '0.5px',
              textTransform: 'uppercase',
              color: 'rgba(206,186,185,0.95)',
            }}
          >
            Total Repayment
          </span>
          <span style={{ fontSize: 20, fontWeight: 800, color: 'rgba(255,255,255,0.85)' }}>UGX 178,992,528</span>
        </div>
      </div>

      {/* Button */}
      <button
        style={{
          width: '100%',
          padding: '8px 0',
          marginTop: 20,
          background: '#F9D00F',
          border: 'none',
          borderRadius: 12,
          fontSize: 12,
          fontWeight: 800,
          color: '#000',
          cursor: 'pointer',
          fontFamily: FONT,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 6,
        }}
      >
        View Full Calculation Details
        <ArrowRight size={12} color="#000" />
      </button>
    </div>
  )
}

/* ──────────────────── Notifications ────────────────────── */

interface NotifItem {
  title: string
  description: string
  time: string
  iconBg: string
  iconBorder: string
  icon: ReactNode
  timeColor: string
}

const NOTIFICATIONS: NotifItem[] = [
  {
    title: 'Document Request',
    description: 'Director ID documents are overdue for application TF-2026-0048.',
    time: '2h ago',
    iconBg: '#FEF3C7',
    iconBorder: '#FECC15',
    icon: <FileWarning size={14} color={GOLD} />,
    timeColor: '#E11D48',
  },
  {
    title: 'Application Update',
    description: 'Your trade finance application passed Operations Review successfully.',
    time: '1d ago',
    iconBg: '#DBEAFE',
    iconBorder: '#1D4ED8',
    icon: <Info size={14} color="#1D4ED8" />,
    timeColor: '#9CA3AF',
  },
  {
    title: 'Payment Received',
    description: 'Monthly instalment of UGX 7,458,022 received for facility FL-2025-0312.',
    time: '3d ago',
    iconBg: '#D1FAE5',
    iconBorder: '#047857',
    icon: <CheckCircle2 size={14} color="#047857" />,
    timeColor: '#9CA3AF',
  },
]

function NotificationsBox() {
  return (
    <div
      style={{
        background: '#fff',
        border: '1px solid #E5E7EB',
        borderRadius: 16,
        padding: 16,
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        fontFamily: FONT,
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: '-0.3px', color: '#111827' }}>
          Recent Notifications
        </span>
        <span style={{ fontSize: 11, fontWeight: 700, color: '#CA9A05', cursor: 'pointer' }}>View all</span>
      </div>

      {/* Items */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {NOTIFICATIONS.map((n, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
            <div
              style={{
                width: 24,
                height: 24,
                borderRadius: 9999,
                background: n.iconBg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                marginTop: 2,
              }}
            >
              {n.icon}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: '#111827' }}>{n.title}</span>
              <span style={{ fontSize: 11, fontWeight: 400, color: '#6B7280', lineHeight: '16px' }}>
                {n.description}
              </span>
              <span style={{ fontSize: 10, fontWeight: 600, color: n.timeColor }}>{n.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ──────────────────── Status & Facility ────────────────── */

function StatusAndFacilitySection() {
  return (
    <div style={{ padding: '32px 12px 0', display: 'flex', gap: 16, fontFamily: FONT }}>
      {/* Left: Stepper + Alerts */}
      <div
        style={{
          flex: '1 1 65%',
          background: '#fff',
          border: '1px solid #E5E7EB',
          borderRadius: 16,
          padding: 24,
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
        }}
      >
        <ProgressStepper />
      </div>

      {/* Right: Calc results + Notifications */}
      <div style={{ flex: '1 1 35%', display: 'flex', flexDirection: 'column', gap: 16 }}>
        <CalcResultsCard />
        <NotificationsBox />
      </div>
    </div>
  )
}

/* ──────────────────── Footer CTA ───────────────────────── */

function FooterCTA() {
  return (
    <div style={{ padding: '32px 12px 32px', fontFamily: FONT }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 28,
          gap: 24,
          background: '#0A0E17',
          borderRadius: 16,
          boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
        }}
      >
        {/* Left: icon + heading */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 9999,
              background: '#182030',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <CalendarClock size={20} color={GOLD} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <h3 style={{ margin: 0, fontSize: 16, fontWeight: 800, color: '#fff' }}>
              Ready to grow your business?
            </h3>
            <p style={{ margin: 0, fontSize: 13, fontWeight: 400, color: '#9CA3AF' }}>
              Start a new application or review your active loan facility.
            </p>
          </div>
        </div>

        {/* Right: buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <button
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              padding: '10px 16px',
              background: GOLD,
              border: 'none',
              borderRadius: 9999,
              fontSize: 12,
              fontWeight: 800,
              color: '#000',
              cursor: 'pointer',
              fontFamily: FONT,
            }}
          >
            Start New Application
            <ArrowRight size={12} color="#000" />
          </button>
          <button
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              padding: '10px 16px',
              background: 'rgba(0,0,0,0.6)',
              border: '1px solid #374151',
              borderRadius: 9999,
              fontSize: 12,
              fontWeight: 500,
              color: '#fff',
              cursor: 'pointer',
              fontFamily: FONT,
            }}
          >
            View Active Loan Facility
          </button>
        </div>
      </div>
    </div>
  )
}

/* ──────────────────── Main Component ──────────────────── */

export default function ClientDashboard() {
  const [_activeNav, _setActiveNav] = useState(0)

  return (
    /* Outermost shell — full dark background, sidebar lives here */
    <div
      style={{
        display: 'flex',
        fontFamily: FONT,
        background: SIDEBAR_BG,
        height: '100vh',
        overflow: 'hidden',
        color: '#030712',
      }}
    >
      {/* Sidebar — sticks in place, never scrolls */}
      <ClientSidebar />

      {/* Right zone — dark padding wraps the white card so it "floats" */}
      <div
        style={{
          flex: 1,
          padding: '6px 6px 6px 0',
          display: 'flex',
          flexDirection: 'column',
          minWidth: 0,
          height: '100vh',
          boxSizing: 'border-box',
        }}
      >
        {/* White floating card */}
        <div
          style={{
            flex: 1,
            background: '#fff',
            borderRadius: 20,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            border: '1px solid #CECECE',
          }}
        >
          {/* Top Bar — never scrolls */}
          <div style={{ flexShrink: 0 }}>
            <TopBar />
          </div>

          {/* Scrollable content — only this area scrolls */}
          <div style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden', minHeight: 0, paddingBottom: 24 }}>
            <WelcomeBanner />
            <MetricCardsSection />
            <FinanceProductsSection />
            <TradeInsightsSection />
            <StatusAndFacilitySection />
            <FooterCTA />
          </div>
        </div>
      </div>
    </div>
  )
}
