interface PullQuoteProps {
  quote: string
  attribution?: string
}

/** Large editorial pull quote, left-aligned, with a small decorative mark. */
export function PullQuote({ quote, attribution }: PullQuoteProps) {
  return (
    <figure className="relative my-10 max-w-prose py-2">
      <span aria-hidden className="absolute -left-1 -top-4 font-display text-6xl text-brand/20">
        &ldquo;
      </span>
      <blockquote className="relative font-display text-2xl italic leading-snug text-ink sm:text-display-lg">
        {quote}
      </blockquote>
      {attribution && (
        <figcaption className="mt-4 font-mono text-[0.75rem] uppercase tracking-wider text-muted">
          — {attribution}
        </figcaption>
      )}
    </figure>
  )
}
