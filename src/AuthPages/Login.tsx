import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Eye, EyeOff, LockKeyhole, Mail } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import loginBackground from '../assets/Landing Page background.jpeg'
import ugeximLogo from '../assets/UGExim logo.png'

const GOLD = '#F8AE0D'
const FONT = '"Plus Jakarta Sans", Inter, sans-serif'

const loginSchema = z.object({
  email: z.string().min(1, 'Email address is required').email('Please enter a valid email address'),
  password: z.string().min(1, 'Password is required'),
})
type LoginFormData = z.infer<typeof loginSchema>

const SOCIALS = [
  { label: 'LinkedIn', path: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z' },
  { label: 'Instagram', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' },
  { label: 'X', path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.261 5.638 5.903-5.638zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
]

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (_data: LoginFormData) => {}

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden', background: '#fff', fontFamily: FONT, color: '#030712' }}>

      {/* ── Header ── */}
      <header style={{ borderBottom: '1px solid #F3F4F6', background: '#fff', flexShrink: 0 }}>
        <div style={{ maxWidth: 1480, margin: '0 auto', padding: '0 48px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <img src={ugeximLogo} alt="UgExim" style={{ height: 28, width: 'auto', objectFit: 'contain' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <button type="button" onClick={() => navigate('/create-account')}
              style={{ padding: '9px 22px', borderRadius: 8, background: GOLD, border: 'none', fontSize: 14, fontWeight: 700, color: '#030712', cursor: 'pointer', fontFamily: FONT }}>
              Create Account
            </button>
          </div>
        </div>
      </header>

      {/* ── Body — fixed height, no scroll ── */}
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 0, padding: '32px 48px', gap: 64, alignItems: 'center', maxWidth: 1480, margin: '0 auto', width: '100%' }}>

        {/* ── Left — hero image panel ── */}
        <div style={{ height: '100%', position: 'relative', borderRadius: 20, overflow: 'hidden' }}>
          <img src={loginBackground} alt="" aria-hidden
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.93) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.12) 100%)' }} />

          <div style={{ position: 'relative', zIndex: 2, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '40px 36px' }}>
            <h1 style={{ fontSize: 'clamp(22px,2.2vw,30px)', fontWeight: 800, lineHeight: 1.12, letterSpacing: '-0.03em', margin: '0 0 14px', maxWidth: '18ch' }}>
              <span style={{ color: '#fff' }}>Integrated Client Management & </span>
              <span style={{ color: GOLD }}>Loan Operations Platform.</span>
            </h1>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.82)', lineHeight: 1.7, margin: '0 0 28px', maxWidth: '44ch' }}>
              Financing Uganda's Exports. Connecting Uganda to the World through accessible and transparent trade finance.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {[
                { icon: <span style={{ display: 'inline-block', width: 8, height: 8, border: `2px solid ${GOLD}`, transform: 'rotate(45deg)', flexShrink: 0 }} />, label: 'Our Vision', text: 'To be the leading provider of innovative and affordable export trade financing for Ugandan exporters, driving international trade growth.' },
                { icon: <span style={{ display: 'inline-flex', width: 18, height: 18, borderRadius: '50%', background: 'rgba(248,174,13,0.18)', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><span style={{ width: 7, height: 7, borderRadius: '50%', background: GOLD, display: 'block' }} /></span>, label: 'Our Mission', text: "To build capacity within the export sector and promote Uganda's export potential on the global stage." },
              ].map(v => (
                <div key={v.label} style={{ background: 'rgba(0,0,0,0.55)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 12, padding: '14px 16px', backdropFilter: 'blur(8px)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                    {v.icon}
                    <span style={{ fontSize: 12, fontWeight: 700, color: '#fff' }}>{v.label}</span>
                  </div>
                  <p style={{ margin: 0, fontSize: 11, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Right — form (no scroll) ── */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
            <span style={{ width: 28, height: 2, background: GOLD, borderRadius: 2, flexShrink: 0 }} />
            <p style={{ margin: 0, fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', color: GOLD, textTransform: 'uppercase' as const }}>Member Access</p>
          </div>

          <h2 style={{ margin: '0 0 8px', fontSize: 'clamp(24px,2.4vw,30px)', fontWeight: 700, color: '#030712', letterSpacing: '-0.02em' }}>Welcome Back</h2>
          <p style={{ margin: '0 0 20px', fontSize: 13, color: '#6B7280', lineHeight: 1.6 }}>
            Please enter your credentials to access your secure portfolio and active loan tracking.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
            <div style={{ flex: 1, height: 1, background: '#E5E7EB' }} />
            <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.12em', color: '#9CA3AF', whiteSpace: 'nowrap' as const }}>EMAIL AND PASSWORD</span>
            <div style={{ flex: 1, height: 1, background: '#E5E7EB' }} />
          </div>

          <form onSubmit={handleSubmit(onSubmit)} noValidate style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>

            <div>
              <label htmlFor="email" style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#374151', marginBottom: 5, textTransform: 'uppercase' as const, letterSpacing: '0.06em' }}>Email Address</label>
              <div style={{ position: 'relative' }}>
                <Mail size={15} style={{ position: 'absolute', left: 13, top: '50%', transform: 'translateY(-50%)', color: '#9CA3AF' }} aria-hidden />
                <input id="email" type="email" autoComplete="email" placeholder="Enter your email address"
                  {...register('email')}
                  style={{ width: '100%', border: `1px solid ${errors.email ? '#EF4444' : '#E5E7EB'}`, borderRadius: 8, padding: '10px 14px 10px 40px', fontSize: 14, color: '#111827', outline: 'none', fontFamily: FONT, boxSizing: 'border-box' as const, background: '#fff' }}
                />
              </div>
              {errors.email && <p style={{ margin: '4px 0 0', fontSize: 12, color: '#EF4444' }}>{errors.email.message}</p>}
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 5 }}>
                <label htmlFor="password" style={{ fontSize: 12, fontWeight: 600, color: '#374151', textTransform: 'uppercase' as const, letterSpacing: '0.06em' }}>Password</label>
                <button type="button" style={{ background: 'transparent', border: 'none', fontSize: 12, fontWeight: 600, color: GOLD, cursor: 'pointer', fontFamily: FONT }}>Recover Password?</button>
              </div>
              <div style={{ position: 'relative' }}>
                <LockKeyhole size={15} style={{ position: 'absolute', left: 13, top: '50%', transform: 'translateY(-50%)', color: '#9CA3AF' }} aria-hidden />
                <input id="password" type={showPassword ? 'text' : 'password'} autoComplete="current-password" placeholder="Enter your password"
                  {...register('password')}
                  style={{ width: '100%', border: `1px solid ${errors.password ? '#EF4444' : '#E5E7EB'}`, borderRadius: 8, padding: '10px 44px 10px 40px', fontSize: 14, color: '#111827', outline: 'none', fontFamily: FONT, boxSizing: 'border-box' as const, background: '#fff' }}
                />
                <button type="button" onClick={() => setShowPassword(p => !p)}
                  style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', background: 'transparent', border: 'none', color: '#9CA3AF', cursor: 'pointer', padding: 4 }}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}>
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              {errors.password && <p style={{ margin: '4px 0 0', fontSize: 12, color: '#EF4444' }}>{errors.password.message}</p>}
            </div>

            <button type="submit"
              style={{ width: '100%', padding: '13px', borderRadius: 8, background: GOLD, color: '#030712', fontWeight: 700, fontSize: 15, border: 'none', cursor: 'pointer', fontFamily: FONT, marginTop: 4 }}>
              Sign In →
            </button>

            <p style={{ textAlign: 'center', fontSize: 13, color: '#6B7280', margin: 0 }}>
              Have no Account?{' '}
              <button type="button" onClick={() => navigate('/create-account')}
                style={{ background: 'transparent', border: 'none', fontSize: 13, fontWeight: 700, color: GOLD, cursor: 'pointer', fontFamily: FONT }}>
                Create an Account.
              </button>
            </p>

          </form>
        </div>
      </div>

      {/* ── Footer ── */}
      <footer style={{ flexShrink: 0, borderTop: '1px solid #F3F4F6', background: '#fff', padding: '10px 48px' }}>
        <div style={{ maxWidth: 1480, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <p style={{ margin: 0, fontSize: 11, color: '#9CA3AF', textTransform: 'uppercase' as const, letterSpacing: '0.08em' }}>© 2026 UgExim. All rights reserved.</p>
          <div style={{ display: 'flex', gap: 24 }}>
            {['PRIVACY POLICY', 'TERMS OF SERVICE'].map(t => (
              <a key={t} href="#" style={{ fontSize: 11, color: '#9CA3AF', textDecoration: 'none', fontWeight: 600, letterSpacing: '0.06em' }}>{t}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
