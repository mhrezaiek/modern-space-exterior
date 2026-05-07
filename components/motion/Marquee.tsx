'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

export function Marquee({
  items,
  className,
  speed = 'normal',
}: {
  items: React.ReactNode[]
  className?: string
  speed?: 'slow' | 'normal' | 'fast'
}) {
  const speedClass =
    speed === 'slow' ? '[animation-duration:60s]' : speed === 'fast' ? '[animation-duration:25s]' : ''
  return (
    <div className={cn('group relative w-full overflow-hidden mask-fade-r', className)}>
      <div className={cn('flex w-max animate-marquee items-center gap-12 group-hover:[animation-play-state:paused]', speedClass)}>
        {[...items, ...items].map((node, i) => (
          <div key={i} className="shrink-0 text-ink-400">
            {node}
          </div>
        ))}
      </div>
    </div>
  )
}
