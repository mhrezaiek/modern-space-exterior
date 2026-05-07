import * as React from 'react'
import Link from 'next/link'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2',
  {
    variants: {
      variant: {
        primary:
          'bg-ink-900 text-white shadow-apple-md hover:bg-ink-700 hover:-translate-y-0.5 active:translate-y-0',
        accent:
          'bg-accent text-white shadow-apple-md hover:bg-accent-dark hover:-translate-y-0.5 active:translate-y-0',
        outline:
          'border border-ink-200 bg-white/80 text-ink-900 backdrop-blur hover:border-ink-900 hover:-translate-y-0.5',
        ghost: 'text-ink-900 hover:bg-ink-50',
        invert:
          'bg-white text-ink-900 shadow-apple-md hover:bg-ink-50 hover:-translate-y-0.5',
        link: 'text-ink-900 underline-offset-4 hover:underline px-0',
      },
      size: {
        sm: 'h-9 px-4 text-sm',
        md: 'h-11 px-6 text-[15px]',
        lg: 'h-12 px-7 text-base',
        xl: 'h-14 px-8 text-base',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  },
)

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return <Comp ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />
  },
)
Button.displayName = 'Button'

interface LinkButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {
  href: string
  prefetch?: boolean
}

const LinkButton = React.forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ className, variant, size, href, prefetch, children, ...props }, ref) => {
    const isExternal = /^(https?:|tel:|mailto:)/.test(href)
    if (isExternal) {
      return (
        <a
          ref={ref}
          href={href}
          className={cn(buttonVariants({ variant, size }), className)}
          {...props}
        >
          {children}
        </a>
      )
    }
    return (
      <Link
        href={href}
        prefetch={prefetch}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      >
        {children}
      </Link>
    )
  },
)
LinkButton.displayName = 'LinkButton'

export { Button, LinkButton, buttonVariants }
