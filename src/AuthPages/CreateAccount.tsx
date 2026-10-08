import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Eye, EyeOff } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import loginBackground from '../assets/Landing Page background.jpeg'
import ugeximLogo from '../assets/UGExim logo.png'

const GOLD = '#F8AE0D'
const FONT = '"Plus Jakarta Sans", Inter, sans-serif'

const createAccountSchema = z.object({
  businessName: z.string().min(1, 'Business name is required'),
  businessType: z.string().min(1, 'Please select a business type'),
  registrationNumber: z.string().min(1, 'Business registration number is required'),
  contactName: z.string().min(1, 'Contact name is required'),
  phone: z.string().min(1, 'Phone number is required'),
  email: z.string().min(1, 'Email address is required').email('Please enter a valid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
})
type CreateAccountFormData = z.infer<typeof createAccountSchema>

function Label({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 5, fontFamily: FONT }}>
      {children}
    </label>
  )
}
function ErrorMsg({ msg }: { msg?: string }) {
  if (!msg) return null
  return <p style={{ margin: '4px 0 0', fontSize: 12, color: '#EF4444' }}>{msg}</p>
}
const inputStyle = (hasError: boolean): React.CSSProperties => ({
  width: '100%',
  border: `1px solid ${hasError ? '#EF4444' : '#E5E7EB'}`,
  borderRadius: 8,
  padding: '10px 14px',
  fontSize: 14,
  color: '#111827',
  outline: 'none',
  fontFamily: FONT,
  boxSizing: 'border-box',
  background: '#fff',
})

export default function CreateAccount() {
  const [showPassword, setShowPassword] = useState(false)
  const [verificationCode, setVerificationCode] = useState('')
  const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors } } = useForm<CreateAccountFormData>({
    resolver: zodResolver(createAccountSchema),
    defaultValues: { businessName: '', businessType: '', registrationNumber: '', contactName: '', phone: '', email: '', password: '' },
  })

  const onSubmit = (_data: CreateAccountFormData) => {}
  const handleVerifyEmail = () => { if (!verificationCode.trim()) return }
  const handleResendCode = () => {}

  return (
    /* Outer: full viewport, no scroll */
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden', background: '#fff', fontFamily: FONT, color: '#030712' }}>

      {/* ── Header ── */}
      <header style={{ borderBottom: '1px solid #F3F4F6', background: '#fff', flexShrink: 0 }}>
        <div style={{ maxWidth: 1480, margin: '0 auto', padding: '0 48px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <img src={ugeximLogo} alt="UgExim" style={{ height: 28, width: 'auto', objectFit: 'contain' }} />
          <button type="button" onClick={() => navigate('/login')}
            style={{ padding: '9px 22px', borderRadius: 8, background: GOLD, border: 'none', fontSize: 14, fontWeight: 700, color: '#030712', cursor: 'pointer', fontFamily: FONT }}>
            Log In
          </button>
        </div>
      </header>

      {/* ── Two-column body ── */}
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 0, gap: 64, padding: '32px 48px', maxWidth: 1480, margin: '0 auto', width: '100%' }}>

        {/* ── Left — fixed hero image, never scrolls ── */}
        <div style={{ position: 'relative', borderRadius: 20, overflow: 'hidden' }}>
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

        {/* ── Right — only this column scrolls ── */}
        <div style={{ overflowY: 'auto', paddingRight: 8 }}>
          <div style={{ paddingBottom: 32 }}>

            {/* eyebrow */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
              <span style={{ width: 28, height: 2, background: GOLD, borderRadius: 2, flexShrink: 0 }} />
              <p style={{ margin: 0, fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', color: GOLD, textTransform: 'uppercase' as const }}>Business Registration</p>
            </div>

            <h2 style={{ margin: '0 0 8px', fontSize: 'clamp(22px,2.2vw,28px)', fontWeight: 700, color: '#030712', letterSpacing: '-0.02em' }}>
              Create your business account
            </h2>
            <p style={{ margin: '0 0 24px', fontSize: 13, color: '#6B7280', lineHeight: 1.6 }}>
              For registered companies and cooperatives exporting goods. Individuals and sole proprietors can't apply.
            </p>

            {/* ── Business details ── */}
            <h3 style={{ margin: '0 0 16px', fontSize: 15, fontWeight: 700, color: '#1A1E23' }}>Business details</h3>

            <form onSubmit={handleSubmit(onSubmit)} noValidate style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>

              <div>
                <Label htmlFor="businessName">Registered business name</Label>
                <input id="businessName" type="text" autoComplete="organization" placeholder="Enter registered business name"
                  {...register('businessName')} style={inputStyle(!!errors.businessName)} />
                <ErrorMsg msg={errors.businessName?.message} />
              </div>

              <div>
                <Label htmlFor="businessType">Business type</Label>
                <select id="businessType" {...register('businessType')} style={{ ...inputStyle(!!errors.businessType), appearance: 'none' as const }}>
                  <option value="">Select business type</option>
                  <option value="limited-company">Limited company</option>
                  <option value="cooperative">Cooperative</option>
                </select>
                <ErrorMsg msg={errors.businessType?.message} />
              </div>

              <div>
                <Label htmlFor="registrationNumber">Business registration number</Label>
                <input id="registrationNumber" type="text" placeholder="Enter registration number"
                  {...register('registrationNumber')} style={inputStyle(!!errors.registrationNumber)} />
                <ErrorMsg msg={errors.registrationNumber?.message} />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div>
                  <Label htmlFor="contactName">Contact name</Label>
                  <input id="contactName" type="text" autoComplete="name" placeholder="Full name"
                    {...register('contactName')} style={inputStyle(!!errors.contactName)} />
                  <ErrorMsg msg={errors.contactName?.message} />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <input id="phone" type="tel" autoComplete="tel" placeholder="+256 ..."
                    {...register('phone')} style={inputStyle(!!errors.phone)} />
                  <ErrorMsg msg={errors.phone?.message} />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <input id="email" type="email" autoComplete="email" placeholder="Enter email address"
                  {...register('email')} style={inputStyle(!!errors.email)} />
                <ErrorMsg msg={errors.email?.message} />
              </div>

              <div>
                <Label htmlFor="password">Password</Label>
                <div style={{ position: 'relative' }}>
                  <input id="password" type={showPassword ? 'text' : 'password'} autoComplete="new-password"
                    placeholder="Create a password (min. 8 chars)"
                    {...register('password')} style={{ ...inputStyle(!!errors.password), paddingRight: 44 }} />
                  <button type="button" onClick={() => setShowPassword(p => !p)}
                    style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', background: 'transparent', border: 'none', color: '#9CA3AF', cursor: 'pointer', padding: 4 }}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}>
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
                <ErrorMsg msg={errors.password?.message} />
              </div>

              <button type="submit"
                style={{ width: '100%', padding: '12px', borderRadius: 8, background: GOLD, color: '#030712', fontWeight: 700, fontSize: 14, border: 'none', cursor: 'pointer', fontFamily: FONT, marginTop: 4 }}>
                Create Account
              </button>
            </form>

            {/* ── Verify email ── */}
            <div style={{ marginTop: 24, paddingTop: 24, borderTop: '1px solid #F3F4F6' }}>
              <h3 style={{ margin: '0 0 4px', fontSize: 15, fontWeight: 700, color: '#1A1E23' }}>Verify your email</h3>
              <p style={{ margin: '0 0 14px', fontSize: 13, color: '#6B7280' }}>We sent a 6-digit code to your email.</p>

              <div style={{ display: 'flex', gap: 10 }}>
                <input type="text" inputMode="numeric" maxLength={6} value={verificationCode}
                  onChange={e => setVerificationCode(e.target.value.replace(/\D/g, ''))}
                  placeholder="Enter code" aria-label="Verification code"
                  style={{ ...inputStyle(false), flex: 1 }} />
                <button type="button" onClick={handleVerifyEmail} disabled={verificationCode.length !== 6}
                  style={{ padding: '10px 20px', borderRadius: 8, border: '1px solid #030712', background: '#fff', color: '#030712', fontWeight: 700, fontSize: 13, cursor: 'pointer', fontFamily: FONT, whiteSpace: 'nowrap' as const, opacity: verificationCode.length !== 6 ? 0.45 : 1 }}>
                  Verify
                </button>
              </div>

              <p style={{ margin: '10px 0 0', fontSize: 13, color: '#374151' }}>
                Didn't get it?{' '}
                <button type="button" onClick={handleResendCode}
                  style={{ background: 'transparent', border: 'none', fontSize: 13, fontWeight: 700, color: '#1B3F61', cursor: 'pointer', fontFamily: FONT }}>
                  Send a new code
                </button>
              </p>
            </div>

            {/* login link */}
            <p style={{ textAlign: 'center', fontSize: 13, color: '#6B7280', marginTop: 20 }}>
              Already have an account?{' '}
              <button type="button" onClick={() => navigate('/login')}
                style={{ background: 'transparent', border: 'none', fontSize: 13, fontWeight: 700, color: GOLD, cursor: 'pointer', fontFamily: FONT }}>
                Log in
              </button>
            </p>

          </div>
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
