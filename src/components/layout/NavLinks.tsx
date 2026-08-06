import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import clsx from 'clsx'
import { NAV } from '../../data/nav'

interface NavLinksProps {
  layoutId: string
  onNavigate?: () => void
}

/**
 * Renders the NAV array grouped (general, then a "COURSE" divider, then
 * days) as NavLinks with an animated active-state background shared between
 * Sidebar and MobileDrawer via `layoutId`.
 */
export function NavLinks({ layoutId, onNavigate }: NavLinksProps) {
  const general = NAV.filter((item) => item.group === 'general')
  const days = NAV.filter((item) => item.group === 'day')

  const renderLink = (item: (typeof NAV)[number]) => (
    <li key={item.to}>
      <NavLink
        to={item.to}
        end={item.to === '/'}
        onClick={onNavigate}
        className={({ isActive }) =>
          clsx(
            'relative flex min-h-[44px] items-center gap-3 rounded-lg px-3 text-sm transition-colors',
            isActive ? 'font-semibold text-brand' : 'text-ink-soft hover:bg-blue-wash/60 hover:text-brand',
          )
        }
      >
        {({ isActive }) => (
          <>
            {isActive && (
              <motion.span
                layoutId={layoutId}
                className="absolute inset-0 rounded-lg bg-blue-wash"
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              />
            )}
            <span className="relative font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted">
              {item.index}
            </span>
            <span className="relative">{item.label}</span>
          </>
        )}
      </NavLink>
    </li>
  )

  return (
    <>
      <ul className="flex flex-col gap-1">{general.map(renderLink)}</ul>
      <p className="kicker mt-6 mb-2 px-3">Course</p>
      <ul className="flex flex-col gap-1">{days.map(renderLink)}</ul>
    </>
  )
}
