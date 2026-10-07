import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Eye, EyeOff } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import loginBackground from '../assets/Landing Page background.jpeg'
import ugeximLogo from '../assets/UGExim logo.png'

const createAccountSchema = z.object({
  businessName: z.string().min(1, 'Business name is required'),

  businessType: z.string().min(1, 'Please select a business type'),

  registrationNumber: z
    .string()
    .min(1, 'Business registration number is required'),

  contactName: z.string().min(1, 'Contact name is required'),

  phone: z.string().min(1, 'Phone number is required'),

  email: z
    .string()
    .min(1, 'Email address is required')
    .email('Please enter a valid email address'),

  password: z
    .string()
    .min(8, 'Password must be at least 8 characters'),
})

type CreateAccountFormData = z.infer<typeof createAccountSchema>

function CreateAccount() {
  const [showPassword, setShowPassword] = useState(false)
  const [verificationCode, setVerificationCode] = useState('')
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateAccountFormData>({
    resolver: zodResolver(createAccountSchema),

    defaultValues: {
      businessName: '',
      businessType: '',
      registrationNumber: '',
      contactName: '',
      phone: '',
      email: '',
      password: '',
    },
  })

  const onSubmit = (_data: CreateAccountFormData) => {
    // Account creation will be connected to the backend here.
  }

  const handleVerifyEmail = () => {
    if (!verificationCode.trim()) {
      return
    }

    // Email verification will be connected to the backend here.
  }

  const handleResendCode = () => {
    // Resend verification code will be connected to the backend here.
  }

  const inputClass =
    'w-full rounded-md border bg-white px-3 py-2.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400'

  const normalInputClass =
    'border-gray-300 focus:border-[#FECC15] focus:ring-2 focus:ring-[#FECC15]/20'

  const errorInputClass =
    'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'

  return (
    <div className="flex min-h-screen flex-col bg-white md:h-screen md:overflow-hidden">
      {/* Header */}
      <header className="shrink-0 border-b border-[#F3F4F6] bg-white">
        <div className="mx-auto flex h-[64px] max-w-[1480px] items-center justify-between px-5 sm:px-8 md:px-7 lg:px-10 xl:px-10">
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
  onClick={() => navigate('/login')}
  className="rounded-lg bg-[#FECC15] px-4 py-2 text-xs font-semibold text-[#030712] transition-colors duration-200 hover:bg-[#E6B800] active:bg-[#D4A900] sm:px-5 sm:py-2.5 sm:text-sm"
>
  Log in
</button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="min-h-0 flex-1 px-5 py-3 sm:px-8 md:px-7 lg:px-10">
        <div className="mx-auto h-full w-full max-w-[1480px]">
          <div className="h-full overflow-hidden rounded-[22px] border border-gray-200 bg-white p-3 shadow-[0_10px_40px_rgba(0,0,0,0.06)] lg:p-4">
            <div className="grid h-full min-h-0 gap-5 md:grid-cols-[1.05fr_0.95fr] md:gap-3 lg:gap-5">
              {/* LEFT SIDE - FIXED HERO */}
              <section className="min-h-[540px] md:h-full md:min-h-0 md:overflow-hidden">
                <div className="relative h-full min-h-[540px] overflow-hidden rounded-[18px] bg-gray-900 md:min-h-0">
                  {/* Background */}
                  <img
                    src={loginBackground}
                    alt="UgExim trade finance"
                    className="absolute inset-0 h-full w-full object-cover object-center"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />

                  {/* Hero Content */}
                  <div className="relative z-10 h-full px-8 pb-7 pt-30 text-white md:px-5 md:pb-5 md:pt-10 lg:px-8 lg:pb-7 lg:pt-[70px] xl:px-10 xl:pb-8 xl:pt-[100px]">
                    {/* UgExim Brand */}
                    <p className="text-base font-bold tracking-[-0.02em] sm:text-lg">
                      <span className="text-white">UgExim</span>
                      <span className="text-[#FECC15]">&gt;&gt;</span>
                    </p>

                    {/* Heading */}
                    <h1 className="mt-8 max-w-[620px] text-[30px] font-bold leading-[1.12] tracking-[-0.035em] sm:text-[33px] md:mt-5 md:text-[24px] lg:mt-6 lg:text-[30px] xl:mt-8 xl:text-[36px]">
                      <span className="text-white">
                        Integrated Client Management &amp;{' '}
                      </span>

                      <span className="text-[#FECC15]">
                        Loan Operations Platform.
                      </span>
                    </h1>

                    {/* Supporting Text */}
                    <p className="mt-5 max-w-[590px] text-[12px] font-semibold leading-[1.65] tracking-[0.01em] text-white/95 sm:text-[13px] md:mt-4 lg:mt-5">
                      Financing Uganda&apos;s Exports. Connecting Uganda to the
                      World through accessible and transparent trade finance.
                    </p>

                    {/* Vision and Mission */}
                    <div className="mt-10 grid gap-4 sm:grid-cols-2 md:mt-6 md:gap-2 lg:mt-8 lg:gap-3 xl:mt-10 xl:gap-4">
                      {/* Vision */}
                      <div className="rounded-xl border border-white/15 bg-black/55 p-4 backdrop-blur-sm md:p-3 lg:p-4">
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
                      <div className="rounded-xl border border-white/15 bg-black/55 p-4 backdrop-blur-sm md:p-3 lg:p-4">
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
                          promote Uganda&apos;s export potential on the global
                          stage in a responsible and responsive manner.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* RIGHT SIDE - ONLY THIS SECTION SCROLLS */}
              <section className="min-h-0 overflow-hidden">
                <div className="h-full overflow-y-auto px-4 py-5 sm:px-7 md:px-4 md:py-3 lg:px-6 lg:py-4 xl:px-9">
                  <div className="mx-auto w-full max-w-[540px] pb-10">
                    {/* Page Heading */}
                    <div>
                      <div className="mb-3 flex items-center gap-3">
                        <span className="h-[2px] w-8 bg-[#FECC15]" />

                        <p className="text-[11px] font-semibold tracking-[0.16em] text-[#FECC15]">
                          BUSINESS REGISTRATION
                        </p>
                      </div>

                      <h2 className="text-[30px] font-semibold tracking-[-0.02em] text-[#030712]">
                        Create your business account
                      </h2>

                      <p className="mt-3 max-w-[520px] text-[13px] leading-5 text-[#6B7280]">
                        For registered companies and cooperatives exporting
                        goods. Individuals and sole proprietors can&apos;t
                        apply.
                      </p>
                    </div>

                    {/* Business Details */}
                    <div className="mt-6 rounded-xl border border-[#E1E4E8] bg-white p-5 shadow-sm">
                      <h3 className="text-lg font-semibold text-[#1A1E23]">
                        Business details
                      </h3>

                      <form
                        onSubmit={handleSubmit(onSubmit)}
                        noValidate
                        className="mt-5 space-y-4"
                      >
                        {/* Business Name */}
                        <div>
                          <label
                            htmlFor="businessName"
                            className="mb-1.5 block text-[13px] font-medium text-gray-700"
                          >
                            Registered business name
                          </label>

                          <input
                            id="businessName"
                            type="text"
                            autoComplete="organization"
                            placeholder="Enter registered business name"
                            {...register('businessName')}
                            className={`${inputClass} ${
                              errors.businessName
                                ? errorInputClass
                                : normalInputClass
                            }`}
                          />

                          {errors.businessName && (
                            <p className="mt-1.5 text-xs text-red-600">
                              {errors.businessName.message}
                            </p>
                          )}
                        </div>

                        {/* Business Type */}
                        <div>
                          <label
                            htmlFor="businessType"
                            className="mb-1.5 block text-[13px] font-medium text-gray-700"
                          >
                            Business type
                          </label>

                          <select
                            id="businessType"
                            {...register('businessType')}
                            className={`${inputClass} ${
                              errors.businessType
                                ? errorInputClass
                                : normalInputClass
                            }`}
                          >
                            <option value="">Select business type</option>

                            <option value="limited-company">
                              Limited company
                            </option>

                            <option value="cooperative">Cooperative</option>
                          </select>

                          {errors.businessType && (
                            <p className="mt-1.5 text-xs text-red-600">
                              {errors.businessType.message}
                            </p>
                          )}
                        </div>

                        {/* Registration Number */}
                        <div>
                          <label
                            htmlFor="registrationNumber"
                            className="mb-1.5 block text-[13px] font-medium text-gray-700"
                          >
                            Business registration number
                          </label>

                          <input
                            id="registrationNumber"
                            type="text"
                            placeholder="Enter registration number"
                            {...register('registrationNumber')}
                            className={`${inputClass} ${
                              errors.registrationNumber
                                ? errorInputClass
                                : normalInputClass
                            }`}
                          />

                          {errors.registrationNumber && (
                            <p className="mt-1.5 text-xs text-red-600">
                              {errors.registrationNumber.message}
                            </p>
                          )}
                        </div>

                        {/* Contact Name and Phone */}
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div>
                            <label
                              htmlFor="contactName"
                              className="mb-1.5 block text-[13px] font-medium text-gray-700"
                            >
                              Contact name
                            </label>

                            <input
                              id="contactName"
                              type="text"
                              autoComplete="name"
                              placeholder="Enter contact name"
                              {...register('contactName')}
                              className={`${inputClass} ${
                                errors.contactName
                                  ? errorInputClass
                                  : normalInputClass
                              }`}
                            />

                            {errors.contactName && (
                              <p className="mt-1.5 text-xs text-red-600">
                                {errors.contactName.message}
                              </p>
                            )}
                          </div>

                          <div>
                            <label
                              htmlFor="phone"
                              className="mb-1.5 block text-[13px] font-medium text-gray-700"
                            >
                              Phone
                            </label>

                            <input
                              id="phone"
                              type="tel"
                              autoComplete="tel"
                              placeholder="Enter phone number"
                              {...register('phone')}
                              className={`${inputClass} ${
                                errors.phone
                                  ? errorInputClass
                                  : normalInputClass
                              }`}
                            />

                            {errors.phone && (
                              <p className="mt-1.5 text-xs text-red-600">
                                {errors.phone.message}
                              </p>
                            )}
                          </div>
                        </div>

                        {/* Email */}
                        <div>
                          <label
                            htmlFor="email"
                            className="mb-1.5 block text-[13px] font-medium text-gray-700"
                          >
                            Email
                          </label>

                          <input
                            id="email"
                            type="email"
                            autoComplete="email"
                            placeholder="Enter email address"
                            {...register('email')}
                            className={`${inputClass} ${
                              errors.email
                                ? errorInputClass
                                : normalInputClass
                            }`}
                          />

                          {errors.email && (
                            <p className="mt-1.5 text-xs text-red-600">
                              {errors.email.message}
                            </p>
                          )}
                        </div>

                        {/* Password */}
                        <div>
                          <label
                            htmlFor="password"
                            className="mb-1.5 block text-[13px] font-medium text-gray-700"
                          >
                            Password
                          </label>

                          <div className="relative">
                            <input
                              id="password"
                              type={showPassword ? 'text' : 'password'}
                              autoComplete="new-password"
                              placeholder="Create a password"
                              {...register('password')}
                              className={`${inputClass} pr-12 ${
                                errors.password
                                  ? errorInputClass
                                  : normalInputClass
                              }`}
                            />

                            <button
                              type="button"
                              onClick={() =>
                                setShowPassword((current) => !current)
                              }
                              className="absolute right-3 top-1/2 -translate-y-1/2 rounded p-1 text-gray-400 transition hover:text-gray-700"
                              aria-label={
                                showPassword
                                  ? 'Hide password'
                                  : 'Show password'
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

                        {/* Create Account */}
                        <button
                          type="submit"
                          className="mt-2 w-full rounded-lg bg-[#FECC15] px-6 py-2.5 text-sm font-semibold text-gray-900 transition-colors duration-200 hover:bg-[#E6B800] active:bg-[#D4A900]"
                        >
                          Create account
                        </button>
                      </form>
                    </div>

                    {/* Verify Email */}
                    <div className="mt-5 rounded-xl border border-[#E1E4E8] bg-white p-5 shadow-sm">
                      <h3 className="text-lg font-semibold text-[#1A1E23]">
                        Verify your email
                      </h3>

                      <p className="mt-1.5 text-[13px] leading-5 text-[#595F67]">
                        We sent a 6-digit code to your email.
                      </p>

                      <div className="mt-4 flex gap-3">
                        <input
                          type="text"
                          inputMode="numeric"
                          maxLength={6}
                          value={verificationCode}
                          onChange={(event) =>
                            setVerificationCode(
                              event.target.value.replace(/\D/g, ''),
                            )
                          }
                          placeholder="Enter code"
                          aria-label="Verification code"
                          className="min-w-0 flex-1 rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#FECC15] focus:ring-2 focus:ring-[#FECC15]/20"
                        />

                        <button
                          type="button"
                          onClick={handleVerifyEmail}
                          disabled={verificationCode.length !== 6}
                          className="rounded-md border border-[#030712] bg-white px-5 py-2.5 text-sm font-bold text-[#030712] transition-colors duration-200 hover:bg-[#FECC15] active:bg-[#E6B800] disabled:cursor-not-allowed disabled:border-gray-400 disabled:text-[#030712]"
                        >
                          Verify
                        </button>
                      </div>

                      <p className="mt-3 text-[13px] text-[#343B43]">
                        Didn&apos;t get it?{' '}

                        <button
                          type="button"
                          onClick={handleResendCode}
                          className="font-semibold text-[#1B3F61] transition hover:text-[#FECC15]"
                        >
                          Send a new code
                        </button>
                      </p>
                    </div>

                    {/* Login Link */}
                    <p className="mt-5 text-center text-[13px] text-gray-500">
                      Already have an account?{' '}

                      <button
  type="button"
  onClick={() => navigate('/login')}
  className="font-semibold text-gray-900 transition hover:text-[#FECC15]"
>
  Log in
</button>
                    </p>
                  </div>
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

export default CreateAccount