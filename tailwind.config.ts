import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
    './content/**/*.{ts,tsx,md,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '1.5rem',
        lg: '2rem',
        xl: '2.5rem',
        '2xl': '3rem',
      },
      screens: {
        '2xl': '1440px',
      },
    },
    extend: {
      colors: {
        // Apple-grade neutrals
        ink: {
          DEFAULT: '#0A0A0A',
          50: '#F5F5F7',
          100: '#E8E8ED',
          200: '#D2D2D7',
          300: '#A1A1A6',
          400: '#86868B',
          500: '#6E6E73',
          600: '#3A3A3C',
          700: '#1D1D1F',
          800: '#161617',
          900: '#0A0A0A',
        },
        accent: {
          DEFAULT: '#0071E3', // Apple-style call-to-action blue
          dark: '#0058B0',
          glow: '#0A84FF',
        },
        success: '#34C759',
        danger: '#FF3B30',
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'SF Pro Display',
          'SF Pro Text',
          'Inter',
          'Helvetica Neue',
          'Helvetica',
          'Arial',
          'system-ui',
          'sans-serif',
        ],
        display: [
          'SF Pro Display',
          '-apple-system',
          'BlinkMacSystemFont',
          'Inter',
          'sans-serif',
        ],
      },
      fontSize: {
        // Apple display scale
        'display-2xl': ['clamp(3.5rem, 8vw, 7rem)', { lineHeight: '0.95', letterSpacing: '-0.04em', fontWeight: '700' }],
        'display-xl': ['clamp(3rem, 6vw, 5.25rem)', { lineHeight: '1', letterSpacing: '-0.035em', fontWeight: '700' }],
        'display-lg': ['clamp(2.25rem, 4.5vw, 3.75rem)', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '600' }],
        'display-md': ['clamp(1.75rem, 3vw, 2.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '600' }],
        'eyebrow': ['0.75rem', { lineHeight: '1', letterSpacing: '0.18em', fontWeight: '600' }],
      },
      borderRadius: {
        'apple': '1.25rem',
        'apple-lg': '1.75rem',
        'apple-xl': '2.25rem',
      },
      boxShadow: {
        'apple-sm': '0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.06)',
        'apple-md': '0 6px 24px -6px rgba(0,0,0,0.12), 0 2px 6px rgba(0,0,0,0.06)',
        'apple-lg': '0 24px 48px -12px rgba(0,0,0,0.18), 0 4px 12px rgba(0,0,0,0.08)',
        'apple-glow': '0 0 0 1px rgba(255,255,255,0.06), 0 24px 48px -12px rgba(0,0,0,0.5)',
      },
      backgroundImage: {
        'grid-fade': 'radial-gradient(circle at center, rgba(0,0,0,0.06) 1px, transparent 1px)',
        'noise':
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .25 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22,1,0.36,1) forwards',
        marquee: 'marquee 40s linear infinite',
        shimmer: 'shimmer 2s linear infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config
