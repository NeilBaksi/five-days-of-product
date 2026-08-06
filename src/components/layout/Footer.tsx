import { NavLink } from 'react-router-dom'
import { NAV } from '../../data/nav'

const overview = NAV.filter((item) => item.group === 'general')
const days = NAV.filter((item) => item.group === 'day')

/** Site footer: brand line, course description, nav columns, credit line. */
export function Footer() {
  return (
    <footer className="border-t border-rule bg-surface">
      <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl font-bold text-ink">Five Days of Product</p>
            <p className="mt-3 max-w-prose text-sm leading-relaxed text-ink-soft">
              A companion site for the Digital Product Management course — five days of
              frameworks, from discovery to growth.
            </p>
          </div>

          <div>
            <p className="kicker">Overview</p>
            <ul className="mt-3 flex flex-col gap-2">
              {overview.map((item) => (
                <li key={item.to}>
                  <NavLink to={item.to} className="text-sm text-ink-soft transition-colors hover:text-brand">
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="kicker">Days</p>
            <ul className="mt-3 flex flex-col gap-2">
              {days.map((item) => (
                <li key={item.to}>
                  <NavLink to={item.to} className="text-sm text-ink-soft transition-colors hover:text-brand">
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-10 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted">
          © {new Date().getFullYear()} Five Days of Product · Neil Baksi
        </p>
      </div>
    </footer>
  )
}
