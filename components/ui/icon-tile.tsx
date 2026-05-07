import * as React from 'react'
import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

export function IconTile({
  Icon,
  className,
  invert = false,
}: {
  Icon: LucideIcon
  className?: string
  invert?: boolean
}) {
  return (
    <div
      className={cn(
        'flex h-12 w-12 items-center justify-center rounded-2xl border',
        invert
          ? 'border-white/10 bg-white/5 text-white'
          : 'border-ink-100 bg-ink-50 text-ink-900',
        className,
      )}
    >
      <Icon className="h-5 w-5" strokeWidth={1.6} />
    </div>
  )
}
