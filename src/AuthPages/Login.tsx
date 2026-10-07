import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
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

  password: z
    .string()
    .min(1, 'Password is required'),
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

  const onSubmit = (data: LoginFormData) => {
    console.log('Login details:', data)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-[#F3F4F6] bg-white">
        <div className="mx-auto flex h-[85px] max-w-[1480px] items-center justify-between px-5 sm:px-8 lg:px-12">

          {/* UGExim Logo */}
          <div className="flex items-center">
            <img
              src={ugeximLogo}
              alt="UGExim"
              className="h-8 w-auto object-contain"
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
              className="rounded-lg bg-[#FECC15] px-4 py-2.5 text-xs font-semibold text-[#030712] transition hover:bg-[#e6b800] sm:px-6 sm:py-3 sm:text-sm"
            >
              Create Account
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-5 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1480px]">
          <div className="overflow-hidden rounded-[24px] border border-gray-200 bg-white p-5 shadow-[0_10px_40px_rgba(0,0,0,0.06)] lg:p-6">
            <div className="grid min-h-[720px] gap-6 lg:grid-cols-[1.08fr_0.92fr]">

              {/* Left Side - Hero */}
              <section className="min-h-[620px] lg:min-h-[720px]">
                <div className="relative flex h-full min-h-[620px] items-end overflow-hidden rounded-[20px] bg-gray-900 lg:min-h-[720px]">

                  {/* Background Image */}
                  <img
                    src={loginBackground}
                    alt="UgExim trade finance"
                    className="absolute inset-0 h-full w-full object-cover object-center"
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/10" />

                  {/* Hero Content */}
                  <div className="relative z-10 w-full p-7 text-white sm:p-9 lg:p-10">
                    <p className="mb-4 text-lg font-semibold">
                      UgExim&gt;&gt;
                    </p>

                    <h1 className="max-w-[620px] text-3xl font-semibold leading-[1.2] tracking-[-0.02em] lg:text-[38px]">
                      Integrated Client Management &amp; Loan Operations
                      Platform.
                    </h1>

                    <p className="mt-5 max-w-2xl text-sm leading-6 text-gray-200">
                      Financing Uganda&apos;s Exports. Connecting Uganda to the
                      World through accessible and transparent trade finance.
                    </p>

                    {/* Vision and Mission */}
                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                      <div className="rounded-xl border border-white/15 bg-black/35 p-5 backdrop-blur-md">
                        <h3 className="text-sm font-semibold uppercase tracking-wide text-[#FECC15]">
                          Our Vision
                        </h3>

                        <p className="mt-3 text-xs leading-5 text-gray-200">
                          To be the leading provider of innovative and
                          affordable export trade financing solutions for
                          Ugandan exporters, thereby empowering and driving
                          international trade growth.
                        </p>
                      </div>

                      <div className="rounded-xl border border-white/15 bg-black/35 p-5 backdrop-blur-md">
                        <h3 className="text-sm font-semibold uppercase tracking-wide text-[#FECC15]">
                          Our Mission
                        </h3>

                        <p className="mt-3 text-xs leading-5 text-gray-200">
                          To build capacity within the export sector and promote
                          Uganda&apos;s export potential on the global stage in
                          a responsible and responsive manner.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Right Side - Login Form */}
              <section className="flex items-center px-4 py-10 sm:px-8 lg:px-12 lg:py-14">
                <div className="mx-auto w-full max-w-[560px]">

                  {/* Member Access */}
                  <div className="mb-4 flex items-center gap-3">
                    <span className="h-[2px] w-8 bg-[#FECC15]" />

                    <p className="text-xs font-semibold tracking-[0.16em] text-[#FECC15]">
                      MEMBER ACCESS
                    </p>
                  </div>

                  <h2 className="text-3xl font-semibold tracking-[-0.02em] text-[#030712] sm:text-[36px]">
                    Welcome Back
                  </h2>

                  <p className="mt-4 max-w-[520px] text-sm leading-6 text-[#6B7280]">
                    Please enter your credentials to access your secure
                    portfolio and active loan tracking.
                  </p>

                  {/* Form Divider */}
                  <div className="my-8 flex items-center gap-4">
                    <div className="h-px flex-1 bg-gray-200" />

                    <span className="text-[11px] font-semibold tracking-wider text-gray-400">
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
                        className="mb-2 block text-sm font-medium text-gray-700"
                      >
                        Email Address
                      </label>

                      <div className="relative">
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                          aria-hidden="true"
                        />

                        <input
                          id="email"
                          type="email"
                          placeholder="Enter your email address"
                          {...register('email')}
                          className={`w-full rounded-lg border bg-white py-3 pl-11 pr-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 ${
                            errors.email
                              ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                              : 'border-gray-200 focus:border-[#FECC15] focus:ring-2 focus:ring-[#FECC15]/20'
                          }`}
                        />
                      </div>

                      {errors.email && (
                        <p className="mt-2 text-xs text-red-600">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    {/* Password */}
                    <div className="mt-5">
                      <label
                        htmlFor="password"
                        className="mb-2 block text-sm font-medium text-gray-700"
                      >
                        Password
                      </label>

                      <div className="relative">
                        <FontAwesomeIcon
                          icon={faLock}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                          aria-hidden="true"
                        />

                        <input
                          id="password"
                          type={showPassword ? 'text' : 'password'}
                          placeholder="Enter your password"
                          {...register('password')}
                          className={`w-full rounded-lg border bg-white py-3 pl-11 pr-12 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 ${
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
                            <FontAwesomeIcon icon={faEyeSlash} />
                          ) : (
                            <FontAwesomeIcon icon={faEye} />
                          )}
                        </button>
                      </div>

                      {errors.password && (
                        <p className="mt-2 text-xs text-red-600">
                          {errors.password.message}
                        </p>
                      )}
                    </div>

                    {/* Recover Password */}
                    <div className="mt-3 flex justify-end">
                      <button
                        type="button"
                        className="text-sm font-medium text-gray-600 transition hover:text-[#FECC15]"
                      >
                        Recover Password?
                      </button>
                    </div>

                    {/* Sign In */}
                    <button
                      type="submit"
                      className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-[#FECC15] px-6 py-3.5 text-sm font-semibold text-gray-900 transition hover:bg-[#e6b800]"
                    >
                      Sign In
                      <span aria-hidden="true">→</span>
                    </button>

                    {/* Create Account */}
                    <p className="mt-6 text-center text-sm text-gray-500">
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
      <footer className="border-t border-[#F3F4F6] bg-white px-5 py-6 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1480px] flex-col gap-4 text-xs text-[#6B7280] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 UgExim. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
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