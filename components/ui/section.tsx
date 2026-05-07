import * as React from 'react'
import { cn } from '@/lib/utils'

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: 'section' | 'div' | 'article'
  bleed?: boolean
  tone?: 'light' | 'dark' | 'cream'
}

export function Section({
  as: Comp = 'section',
  bleed = false,
  tone = 'light',
  className,
  children,
  ...rest
}: SectionProps) {
  const toneClass =
    tone === 'dark'
      ? 'bg-ink-900 text-white'
      : tone === 'cream'
      ? 'bg-ink-50 text-ink-900'
      : 'bg-white text-ink-900'
  return (
    <Comp
      className={cn(
        'relative overflow-hidden',
        toneClass,
        bleed ? 'py-0' : 'py-20 md:py-28 lg:py-32',
        className,
      )}
      {...rest}
    >
      {children}
    </Comp>
  )
}

export function Container({
  className,
  children,
  size = 'default',
}: {
  className?: string
  children: React.ReactNode
  size?: 'narrow' | 'default' | 'wide' | 'full'
}) {
  const max =
    size === 'narrow'
      ? 'max-w-3xl'
      : size === 'wide'
      ? 'max-w-[1400px]'
      : size === 'full'
      ? 'max-w-none'
      : 'max-w-7xl'
  return <div className={cn('mx-auto w-full px-5 md:px-8', max, className)}>{children}</div>
}

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn('eyebrow', className)}>{children}</div>
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  invert = false,
  className,
}: {
  eyebrow?: string
  title: React.ReactNode
  description?: React.ReactNode
  align?: 'center' | 'left'
  invert?: boolean
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex flex-col gap-5',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className,
      )}
    >
      {eyebrow ? (
        <span className={cn('eyebrow', invert && 'text-white/60')}>{eyebrow}</span>
      ) : null}
      <h2
        className={cn(
          'max-w-4xl text-display-lg',
          invert ? 'text-white' : 'text-gradient',
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            'max-w-2xl text-lg leading-relaxed md:text-xl',
            invert ? 'text-white/70' : 'text-ink-500',
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
