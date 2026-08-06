import { Link } from 'react-router-dom'
import { NavLinks } from './NavLinks'

/** Desktop-only fixed left rail: brand lockup, grouped course nav, footer note. */
export function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 hidden w-[260px] flex-col border-r border-rule bg-surface md:flex">
      <div className="px-6 pt-8 pb-6">
        <Link to="/" className="font-display text-xl font-black leading-tight text-ink">
          Five Days
          <br />
          of Product
        </Link>
        <p className="mt-2 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted">
          Digital Product Management
        </p>
      </div>

      <nav aria-label="Course sections" className="flex-1 overflow-y-auto px-4 pb-6">
        <NavLinks layoutId="sidebar-active" />
      </nav>

      <div className="border-t border-rule px-6 py-4">
        <p className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-muted">
          Melbourne Business School
        </p>
      </div>
    </aside>
  )
}
