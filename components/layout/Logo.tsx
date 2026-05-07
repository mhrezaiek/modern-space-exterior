import Link from 'next/link'
import { cn } from '@/lib/utils'

export function Logo({
  className,
  invert = false,
}: {
  className?: string
  invert?: boolean
}) {
  return (
    <Link
      href="/"
      aria-label="Modern Space Exterior — Home"
      className={cn(
        'group inline-flex items-center gap-2 font-display text-[15px] font-semibold tracking-tight',
        invert ? 'text-white' : 'text-ink-900',
        className,
      )}
    >
      <span
        aria-hidden
        className={cn(
          'relative grid h-8 w-8 place-items-center overflow-hidden rounded-xl border',
          invert ? 'border-white/10 bg-white/10' : 'border-ink-100 bg-ink-900 text-white',
        )}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
          <path d="M1 1h5v12H1zM8 1h5v6H8zM8 8h5v5H8z" fill="currentColor" />
        </svg>
      </span>
      <span className="leading-none">
        Modern Space
        <span className={cn('block text-[10px] font-medium tracking-[0.18em]', invert ? 'text-white/50' : 'text-ink-400')}>
          EXTERIOR · GTA
        </span>
      </span>
    </Link>
  )
}
