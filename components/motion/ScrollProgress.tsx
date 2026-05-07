'use client'

import { motion, useScroll, useSpring } from 'framer-motion'

/**
 * ScrollProgress — thin accent bar pinned to the top of the viewport
 * that fills as the user scrolls down. Dropped in the root layout.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 24,
    mass: 0.4,
  })

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-accent via-accent-glow to-accent"
    />
  )
}
