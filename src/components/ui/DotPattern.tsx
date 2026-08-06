import { useId } from 'react'
import clsx from 'clsx'

interface DotPatternProps {
  width?: number
  height?: number
  x?: number
  y?: number
  cx?: number
  cy?: number
  cr?: number
  className?: string
}

/**
 * Tiled SVG dot field (adapted from the Linktree project's DotPattern).
 * Default fill is a faint brand-blue so dots read on the light `paper`
 * background without competing with text. Decorative — aria-hidden.
 */
export function DotPattern({
  width = 16,
  height = 16,
  x = 0,
  y = 0,
  cx = 1,
  cy = 1,
  cr = 1,
  className,
}: DotPatternProps) {
  const id = useId()
  return (
    <svg
      aria-hidden="true"
      className={clsx('pointer-events-none h-full w-full fill-brand/[0.10]', className)}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          patternContentUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <circle id="pattern-circle" cx={cx} cy={cy} r={cr} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
    </svg>
  )
}
