import type { DayAccent } from '../types'

/**
 * Maps a per-day accent to concrete Tailwind classes.
 * `badge` — day pill (tinted panel + accent text, AA on white).
 * `numeral` — large decorative section numeral (low-opacity, aria-hidden).
 * `dot` — small accent marker.
 */
export const ACCENTS: Record<DayAccent, { badge: string; numeral: string; dot: string }> = {
  brand: { badge: 'bg-blue-wash text-brand', numeral: 'text-brand/15', dot: 'bg-brand' },
  berry: { badge: 'bg-berry-wash text-berry', numeral: 'text-berry/15', dot: 'bg-berry' },
  green: { badge: 'bg-green-wash text-green', numeral: 'text-green/20', dot: 'bg-green' },
  'gold-deep': { badge: 'bg-amber-wash text-gold-deep', numeral: 'text-gold/25', dot: 'bg-gold' },
  'brand-dark': { badge: 'bg-blue-wash text-brand-dark', numeral: 'text-brand-dark/15', dot: 'bg-brand-dark' },
}
