import type { NavItem } from '../types'

// Single source of truth for the sidebar, the mobile drawer, and the router.
export const NAV: NavItem[] = [
  { to: '/', label: 'Overview', index: '00', group: 'general' },
  { to: '/frameworks', label: 'Frameworks', index: 'F', group: 'general' },
  { to: '/day/1', label: 'Day 1 · Intro to PM', index: '01', group: 'day' },
  { to: '/day/2', label: 'Day 2 · Discovery & Strategy', index: '02', group: 'day' },
  { to: '/day/3', label: 'Day 3 · Idea to Launch', index: '03', group: 'day' },
  { to: '/day/4', label: 'Day 4 · PMF & Scaling', index: '04', group: 'day' },
  { to: '/day/5', label: 'Day 5 · PM Careers', index: '05', group: 'day' },
]

export const DAY_COUNT = 5
