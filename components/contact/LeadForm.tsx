'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircle2, Loader2 } from 'lucide-react'
import { leadSchema, SERVICE_OPTIONS, type LeadInput } from '@/lib/lead'
import { cn } from '@/lib/utils'

export function LeadForm() {
  const [success, setSuccess] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LeadInput>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      address: '',
      service: 'ACM Installation',
      message: '',
      consent: false,
      _company: '',
    },
  })

  async function onSubmit(values: LeadInput) {
    setServerError(null)
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      const data = await res.json()
      if (!res.ok || !data.ok) {
        setServerError(data.error || 'Something went wrong. Please try again.')
        return
      }
      setSuccess(true)
      reset()
    } catch {
      setServerError('Network error. Please call us at (289) 552-5404.')
    }
  }

  if (success) {
    return (
      <div className="flex flex-col items-start gap-4 rounded-apple-lg border border-success/20 bg-success/10 p-8">
        <CheckCircle2 className="h-10 w-10 text-success" />
        <h3 className="text-2xl font-semibold text-ink-900">Thank you — we’ll be in touch.</h3>
        <p className="max-w-prose text-[15px] leading-relaxed text-ink-500">
          We typically reply within 2 business hours. For urgent scopes call{' '}
          <a className="font-medium text-ink-900 underline" href="tel:+12895525404">
            (289) 552-5404
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setSuccess(false)}
          className="text-sm font-medium text-ink-700 underline-offset-4 hover:underline"
        >
          Submit another inquiry
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate>
      {/* Honeypot — hidden from users, visible to bots */}
      <div aria-hidden className="hidden" tabIndex={-1}>
        <label>
          Company
          <input type="text" autoComplete="off" tabIndex={-1} {...register('_company')} />
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Full name" error={errors.fullName?.message} htmlFor="fullName">
          <input
            id="fullName"
            type="text"
            autoComplete="name"
            {...register('fullName')}
            className={inputClass(errors.fullName)}
          />
        </Field>

        <Field label="Phone" error={errors.phone?.message} htmlFor="phone">
          <input
            id="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="(416) 000-0000"
            {...register('phone')}
            className={inputClass(errors.phone)}
          />
        </Field>
      </div>

      <Field label="Email" error={errors.email?.message} htmlFor="email">
        <input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          {...register('email')}
          className={inputClass(errors.email)}
        />
      </Field>

      <Field label="Project address or city" error={errors.address?.message} htmlFor="address">
        <input
          id="address"
          type="text"
          autoComplete="street-address"
          placeholder="e.g. 200 Bay St, Toronto"
          {...register('address')}
          className={inputClass(errors.address)}
        />
      </Field>

      <Field label="Service type" error={errors.service?.message} htmlFor="service">
        <select id="service" {...register('service')} className={inputClass(errors.service)}>
          {SERVICE_OPTIONS.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </Field>

      <Field label="Tell us about your project (optional)" error={errors.message?.message} htmlFor="message">
        <textarea
          id="message"
          rows={5}
          placeholder="Scope, timing, square footage, anything else useful…"
          {...register('message')}
          className={cn(inputClass(errors.message), 'resize-y py-3')}
        />
      </Field>

      <label className="mt-1 flex items-start gap-3 text-sm text-ink-500">
        <input
          type="checkbox"
          {...register('consent')}
          className="mt-1 h-4 w-4 rounded border-ink-300 text-ink-900 focus:ring-accent"
        />
        <span>
          I agree to be contacted about my project. We never sell your information.{' '}
          {errors.consent ? (
            <span className="text-danger">— {errors.consent.message}</span>
          ) : null}
        </span>
      </label>

      {serverError ? (
        <div className="rounded-2xl border border-danger/20 bg-danger/5 px-4 py-3 text-sm text-danger">
          {serverError}
        </div>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className={cn(
          'mt-2 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-ink-900 px-7 text-base font-medium text-white transition-all',
          'hover:-translate-y-0.5 hover:bg-ink-700 active:translate-y-0',
          'disabled:cursor-not-allowed disabled:opacity-70',
        )}
      >
        {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
        {isSubmitting ? 'Sending…' : 'Request my free estimate'}
      </button>
      <p className="text-xs text-ink-400">
        We typically reply within 2 business hours. By submitting, you agree to our privacy policy.
      </p>
    </form>
  )
}

function inputClass(error?: unknown) {
  return cn(
    'h-12 w-full rounded-2xl border bg-white px-4 text-[15px] text-ink-900 outline-none transition-colors',
    'placeholder:text-ink-400',
    'focus:border-ink-900 focus:ring-2 focus:ring-accent/20',
    error ? 'border-danger' : 'border-ink-200',
  )
}

function Field({
  label,
  error,
  htmlFor,
  children,
}: {
  label: string
  error?: string
  htmlFor: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="text-sm font-medium text-ink-700">
        {label}
      </label>
      {children}
      {error ? <p className="text-xs text-danger">{error}</p> : null}
    </div>
  )
}
