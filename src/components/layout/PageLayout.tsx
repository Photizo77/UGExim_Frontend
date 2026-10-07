import { type ReactNode } from 'react'
import Navbar from './Navbar'

interface PageLayoutProps {
  children: ReactNode
  /** If true, page scrolls freely. Default is fixed 100vh no-scroll (landing). */
  scrollable?: boolean
}

export default function PageLayout({ children, scrollable = false }: PageLayoutProps) {
  return (
    <div
      style={{
        backgroundColor: '#040609',
        color: '#E2E8F0',
        fontFamily: '"Plus Jakarta Sans", Inter, sans-serif',
        height: '100vh',
        maxHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        overflowX: 'hidden',
        overflowY: 'hidden',
      }}
    >
      {/* Ambient streak */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: '-20%',
          right: '-10%',
          width: '70vw',
          height: '70vw',
          background: 'radial-gradient(circle, rgba(248,174,13,0.07) 0%, rgba(4,6,9,0) 65%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <Navbar />
      <main
        style={{
          position: 'relative',
          zIndex: 1,
          flex: 1,
          minHeight: 0,
          overflowY: scrollable ? 'auto' : 'hidden',
          overflowX: 'hidden',
        }}
      >
        {children}
      </main>
    </div>
  )
}
