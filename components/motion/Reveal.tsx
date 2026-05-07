'use client'

import { motion, type MotionProps, useReducedMotion } from 'framer-motion'
import * as React from 'react'

type RevealProps = MotionProps &
  React.HTMLAttributes<HTMLDivElement> & {
    delay?: number
    y?: number
    once?: boolean
  }

export function Reveal({
  children,
  delay = 0,
  y = 24,
  once = true,
  ...rest
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion()
  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

export function Stagger({
  children,
  delay = 0,
  step = 0.08,
  className,
}: {
  children: React.ReactNode
  delay?: number
  step?: number
  className?: string
}) {
  const items = React.Children.toArray(children)
  return (
    <div className={className}>
      {items.map((child, i) => (
        <Reveal key={i} delay={delay + i * step}>
          {child}
        </Reveal>
      ))}
    </div>
  )
}
