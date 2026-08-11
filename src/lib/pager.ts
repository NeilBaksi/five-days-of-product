import { NAV } from '../data/nav'

/**
 * Prev/next derived from NAV order, so the whole site reads as one ordered
 * chain and pager labels can never drift from the sidebar.
 */
export function pager(to: string): {
  prev?: { to: string; label: string }
  next?: { to: string; label: string }
} {
  const i = NAV.findIndex((item) => item.to === to)
  if (i < 0) return {}
  return { prev: NAV[i - 1], next: NAV[i + 1] }
}
