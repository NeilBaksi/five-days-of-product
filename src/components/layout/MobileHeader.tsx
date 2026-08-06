import { Link } from 'react-router-dom'
import { Menu } from 'lucide-react'

interface MobileHeaderProps {
  onOpen: () => void
}

/** Sticky mobile top bar: brand lockup + hamburger button that opens the drawer. */
export function MobileHeader({ onOpen }: MobileHeaderProps) {
  return (
    <header
      className="sticky top-0 z-40 border-b border-rule bg-paper/85 backdrop-blur-md md:hidden"
      style={{ paddingTop: 'env(safe-area-inset-top)' }}
    >
      <div className="flex items-center justify-between gap-4 px-5 py-3">
        <Link to="/" className="font-display text-base font-black leading-tight text-ink">
          Five Days of Product
        </Link>
        <button
          type="button"
          onClick={onOpen}
          aria-label="Open navigation"
          aria-expanded={false}
          aria-controls="mobile-nav"
          className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg text-ink transition-colors hover:bg-blue-wash/60"
        >
          <Menu size={22} aria-hidden />
        </button>
      </div>
    </header>
  )
}
