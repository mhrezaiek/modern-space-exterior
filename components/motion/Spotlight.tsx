'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

/**
 * Spotlight — adds a mouse-follow radial highlight inside a card.
 * Drop it as a child of a `relative` element with `overflow-hidden`.
 * It exposes --x / --y CSS variables to its own element which the
 * `.spotlight` utility (in globals.css) consumes.
 */
export function Spotlight({
  className,
  intensity = 'normal',
}: {
  className?: string
  intensity?: 'subtle' | 'normal' | 'strong'
}) {
  const ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const el = ref.current
    if (!el) return
    const parent = el.parentElement
    if (!parent) return

    const onMove = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      el.style.setProperty('--x', `${x}%`)
      el.style.setProperty('--y', `${y}%`)
    }
    parent.addEventListener('mousemove', onMove)
    return () => parent.removeEventListener('mousemove', onMove)
  }, [])

  const opacity =
    intensity === 'subtle' ? 'opacity-40' : intensity === 'strong' ? 'opacity-100' : 'opacity-70'

  return (
    <div
      ref={ref}
      aria-hidden
      className={cn(
        'pointer-events-none absolute inset-0 spotlight transition-opacity duration-500',
        opacity,
        className,
      )}
    />
  )
}
