import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // MBS-inspired academic-corporate palette.
        // Authored in OKLCH (perceptually uniform); neutrals tinted toward the
        // brand-blue hue (H≈262), chroma pulled down near white/black.
        // `<alpha-value>` placeholder lets Tailwind opacity modifiers (e.g.
        // `bg-brand/15`, `border-rule/60`) inject the alpha channel.
        brand: 'oklch(0.37 0.128 262 / <alpha-value>)', // primary — deep royal blue  ≈ #0a3d7a
        'brand-dark': 'oklch(0.29 0.11 262 / <alpha-value>)', // blue hover/pressed        ≈ #072c59
        berry: 'oklch(0.43 0.19 5 / <alpha-value>)', // secondary — berry crimson ≈ #9e0b45
        pink: 'oklch(0.52 0.20 6 / <alpha-value>)', // accent / link-hover (large) ≈ #c51e5c
        green: 'oklch(0.52 0.13 158 / <alpha-value>)', // success                    ≈ #0f7a46
        gold: 'oklch(0.74 0.15 70 / <alpha-value>)', // highlight — large/fills    ≈ #e8930b
        'gold-deep': 'oklch(0.50 0.10 70 / <alpha-value>)', // AA-safe gold small text    ≈ #8a5a00

        ink: 'oklch(0.30 0.02 262 / <alpha-value>)', // body text (blue-tinted)    ≈ #2b2f36
        'ink-soft': 'oklch(0.45 0.015 262 / <alpha-value>)', // secondary text             ≈ #545963
        muted: 'oklch(0.58 0.012 262 / <alpha-value>)', // captions / meta            ≈ #7a7f88
        paper: 'oklch(0.985 0.004 262 / <alpha-value>)', // page background            ≈ #f8f9fb
        surface: 'oklch(0.995 0.002 262 / <alpha-value>)', // card surface               ≈ #fdfdff
        rule: 'oklch(0.91 0.006 262 / <alpha-value>)', // hairline borders           ≈ #e4e7ec

        // callout background tints (full tinted panels — no side-stripes)
        'blue-wash': 'oklch(0.96 0.02 262 / <alpha-value>)', // ≈ #eaf0f8
        'berry-wash': 'oklch(0.95 0.03 5 / <alpha-value>)', // ≈ #f9e9ef
        'amber-wash': 'oklch(0.96 0.03 75 / <alpha-value>)', // ≈ #fcf3e2
        'green-wash': 'oklch(0.96 0.02 158 / <alpha-value>)', // ≈ #e7f3ec
      },
      fontFamily: {
        display: ['"Source Serif 4"', 'Georgia', 'serif'],
        body: ['Epilogue', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        // fluid display sizes
        'display-xl': ['clamp(2.6rem, 8vw, 6rem)', { lineHeight: '0.98', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(1.9rem, 5vw, 3.25rem)', { lineHeight: '1.02', letterSpacing: '-0.015em' }],
      },
      maxWidth: {
        prose: '68ch',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(.16,1,.3,1)',
      },
    },
  },
  plugins: [],
} satisfies Config
