import type { NavItem } from '../types'

// Single source of truth for the sidebar, the mobile drawer, and the router.
export const NAV: NavItem[] = [
  { to: '/', label: 'Overview', index: '00', group: 'general' },
  { to: '/frameworks', label: 'Frameworks', index: 'F', group: 'general' },
  { to: '/toolkit/glossary', label: 'Glossary', index: 'G', group: 'toolkit' },
  { to: '/toolkit/templates', label: 'Templates', index: 'T', group: 'toolkit' },
  { to: '/toolkit/prompts', label: 'Prompt Library', index: 'P', group: 'toolkit' },
  { to: '/toolkit/product-sense', label: 'Product Sense', index: 'S', group: 'toolkit' },
  { to: '/toolkit/pricing', label: 'Pricing Models', index: '$', group: 'toolkit' },
  { to: '/day/1', label: 'Day 1 · Intro to PM', index: '01', group: 'day' },
  { to: '/day/2', label: 'Day 2 · Definition & Prioritisation', index: '02', group: 'day' },
  { to: '/day/3', label: 'Day 3 · Design & Solution', index: '03', group: 'day' },
  { to: '/day/4', label: 'Day 4 · PMF & Scaling', index: '04', group: 'day' },
  { to: '/day/5', label: 'Day 5 · PM Careers', index: '05', group: 'day' },
]

export const DAY_COUNT = 5
