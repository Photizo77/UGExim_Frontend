import { useState } from 'react'
import { Eye, EyeOff, LockKeyhole, Mail } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import loginBackground from '../assets/Landing Page background.jpeg'
import ugeximLogo from '../assets/UGExim logo.png'
const loginSchema = z.object({
  email: z
    .string()
    .min(1, 'Email address is required')
    .email('Please enter a valid email address'),
  password: z.string().min(1, 'Password is required'),
})
type LoginFormData = z.infer<typeof loginSchema>
function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  })
  const onSubmit = (_data: LoginFormData) => {
    // Authentication will be connected to the backend here.
  }
  return (
    <div className="flex min-h-screen flex-col bg-white lg:h-screen lg:overflow-hidden">
      {/* Header */}
      <header className="shrink-0 border-b border-[#F3F4F6] bg-white">
        <div className="mx-auto flex h-[64px] max-w-[1480px] items-center justify-between px-5 sm:px-8 lg:px-10">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={ugeximLogo}
              alt="UGExim"
              className="h-7 w-auto object-contain"
            />
          </div>
          {/* Navigation */}
          <nav className="flex items-center gap-3 sm:gap-6">
            <button
              type="button"
              className="hidden text-sm font-medium text-[#030712] transition hover:text-[#FECC15] sm:block"
            >
              Log in
            </button>
            <button
              type="button"
              className="rounded-lg bg-[#FECC15] px-4 py-2 text-xs font-semibold text-[#030712] transition-colors duration-200 hover:bg-[#E6B800] active:bg-[#D4A900] sm:px-5 sm:py-2.5 sm:text-sm"
            >
              Create Account
            </button>
          </nav>
        </div>
      </header>
      {/* Main Content */}
      <main className="flex min-h-0 flex-1 items-center px-5 py-3 sm:px-8 lg:px-10">
        <div className="mx-auto h-full w-full max-w-[1480px]">
          <div className="h-full overflow-hidden rounded-[22px] border border-gray-200 bg-white p-3 shadow-[0_10px_40px_rgba(0,0,0,0.06)] lg:p-4">
            <div className="grid h-full gap-5 lg:grid-cols-[1.05fr_0.95fr]">
              {/* Left Side - Hero */}
              <section className="min-h-[540px] lg:min-h-0">
                <div className="relative h-full min-h-[540px] overflow-hidden rounded-[18px] bg-gray-900 lg:min-h-0">
                  {/* Background */}
                  <img
                    src={loginBackground}
                    alt="UgExim trade finance"
                    className="absolute inset-0 h-full w-full object-cover object-center"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
                  {/* Hero Content */}
                  <div className="relative z-10 h-full px-8 pb-7 pt-30 text-white lg:px-10 lg:pb-8 lg:pt-[100px]">
                    {/* UgExim Brand */}
                    <p className="text-base font-bold tracking-[-0.02em] sm:text-lg">
                      <span className="text-white">UgExim</span>
                      <span className="text-[#FECC15]">&gt;&gt;</span>
                    </p>
                    {/* Heading */}
                    <h1 className="mt-8 max-w-[620px] text-[30px] font-bold leading-[1.12] tracking-[-0.035em] sm:text-[33px] lg:text-[36px]">
                      <span className="text-white">
                        Integrated Client Management &{' '}
                      </span>
                      <span className="text-[#FECC15]">
                        Loan Operations Platform.
                      </span>
                    </h1>
                    {/* Supporting Text */}
                    <p className="mt-5 max-w-[590px] text-[12px] font-semibold leading-[1.65] tracking-[0.01em] text-white/95 sm:text-[13px]">
                      Financing Uganda's Exports. Connecting Uganda to the
                      World through accessible and transparent trade finance.
                    </p>
                    {/* Vision and Mission */}
                    <div className="mt-10 grid gap-4 sm:grid-cols-2">
                      {/* Vision */}
                      <div className="rounded-xl border border-white/15 bg-black/55 p-4 backdrop-blur-sm">
                        <div className="flex items-center gap-2">
                          <span className="h-2 w-2 rotate-45 border-2 border-[#FECC15]" />
                          <h3 className="text-xs font-semibold text-white">
                            Our Vision
                          </h3>
                        </div>
                        <p className="mt-2.5 pl-4 text-[11px] leading-[1.55] text-gray-200">
                          To be the leading provider of innovative and
                          affordable export trade financing solutions for
                          Ugandan exporters, thereby empowering and driving
                          international trade growth.
                        </p>
                      </div>
                      {/* Mission */}
                      <div className="rounded-xl border border-white/15 bg-black/55 p-4 backdrop-blur-sm">
                        <div className="flex items-center gap-2">
                          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FECC15]/15">
                            <span className="h-2 w-2 rounded-full bg-[#FECC15]" />
                          </span>
                          <h3 className="text-xs font-semibold text-white">
                            Our Mission
                          </h3>
                        </div>
                        <p className="mt-2.5 pl-7 text-[11px] leading-[1.55] text-gray-200">
                          To build capacity within the export sector and
                          promote Uganda's export potential on the global
                          stage in a responsible and responsive manner.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* Right Side - Login */}
              <section className="flex items-center px-4 py-5 sm:px-7 lg:px-9 lg:py-4">
                <div className="mx-auto w-full max-w-[540px]">
                  {/* Member Access */}
                  <div className="mb-3 flex items-center gap-3">
                    <span className="h-[2px] w-8 bg-[#FECC15]" />
                    <p className="text-[11px] font-semibold tracking-[0.16em] text-[#FECC15]">
                      MEMBER ACCESS
                    </p>
                  </div>
                  <h2 className="text-[30px] font-semibold tracking-[-0.02em] text-[#030712]">
                    Welcome Back
                  </h2>
                  <p className="mt-3 max-w-[520px] text-[13px] leading-5 text-[#6B7280]">
                    Please enter your credentials to access your secure
                    portfolio and active loan tracking.
                  </p>
                  {/* Form Divider */}
                  <div className="my-5 flex items-center gap-4">
                    <div className="h-px flex-1 bg-gray-200" />
                    <span className="whitespace-nowrap text-[10px] font-semibold tracking-wider text-gray-400">
                      EMAIL AND PASSWORD
                    </span>
                    <div className="h-px flex-1 bg-gray-200" />
                  </div>
                  {/* Login Form */}
                  <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-1.5 block text-[13px] font-medium text-gray-700"
                      >
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail
                          size={17}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                          aria-hidden="true"
                        />
                        <input
                          id="email"
                          type="email"
                          autoComplete="email"
                          placeholder="Enter your email address"
                          {...register('email')}
                          className={`w-full rounded-lg border bg-white py-2.5 pl-11 pr-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 ${
                            errors.email
                              ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                              : 'border-gray-200 focus:border-[#FECC15] focus:ring-2 focus:ring-[#FECC15]/20'
                          }`}
                        />
                      </div>
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-red-600">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                    {/* Password */}
                    <div className="mt-4">
                      <label
                        htmlFor="password"
                        className="mb-1.5 block text-[13px] font-medium text-gray-700"
                      >
                        Password
                      </label>
                      <div className="relative">
                        <LockKeyhole
                          size={17}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                          aria-hidden="true"
                        />
                        <input
                          id="password"
                          type={showPassword ? 'text' : 'password'}
                          autoComplete="current-password"
                          placeholder="Enter your password"
                          {...register('password')}
                          className={`w-full rounded-lg border bg-white py-2.5 pl-11 pr-12 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 ${
                            errors.password
                              ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                              : 'border-gray-200 focus:border-[#FECC15] focus:ring-2 focus:ring-[#FECC15]/20'
                          }`}
                        />
                        <button
                          type="button"
                          onClick={() =>
                            setShowPassword((current) => !current)
                          }
                          className="absolute right-3 top-1/2 -translate-y-1/2 rounded p-1 text-gray-400 transition hover:text-gray-700"
                          aria-label={
                            showPassword ? 'Hide password' : 'Show password'
                          }
                        >
                          {showPassword ? (
                            <EyeOff size={17} />
                          ) : (
                            <Eye size={17} />
                          )}
                        </button>
                      </div>
                      {errors.password && (
                        <p className="mt-1.5 text-xs text-red-600">
                          {errors.password.message}
                        </p>
                      )}
                    </div>
                    {/* Recover Password */}
                    <div className="mt-2.5 flex justify-end">
                      <button
                        type="button"
                        className="text-[13px] font-medium text-gray-600 transition hover:text-[#FECC15]"
                      >
                        Recover Password?
                      </button>
                    </div>
                    {/* Sign In */}
                    <button
                      type="submit"
                      className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-[#FECC15] px-6 py-2.5 text-sm font-semibold text-gray-900 transition-colors duration-200 hover:bg-[#E6B800] active:bg-[#D4A900]"
                    >
                      Sign In
                      <span aria-hidden="true">→</span>
                    </button>
                    {/* Create Account */}
                    <p className="mt-4 text-center text-[13px] text-gray-500">
                      Have no Account?{' '}
                      <button
                        type="button"
                        className="font-semibold text-gray-900 transition hover:text-[#FECC15]"
                      >
                        Create an Account.
                      </button>
                    </p>
                  </form>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="shrink-0 border-t border-[#F3F4F6] bg-white px-5 py-2 sm:px-8 lg:px-10">
        <div className="mx-auto flex h-[28px] max-w-[1480px] items-center justify-between text-[11px] text-[#6B7280]">
          <p>© 2026 UgExim. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="font-medium transition hover:text-[#030712]"
            >
              PRIVACY POLICY
            </a>
            <a
              href="#"
              className="font-medium transition hover:text-[#030712]"
            >
              TERMS OF SERVICE
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
export default Login