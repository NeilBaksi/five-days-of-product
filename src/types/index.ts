// Shared type contracts for Five Days of Product.
// Content is data: pages render these shapes from src/data/*.

export interface NavItem {
  /** Router path, e.g. "/" or "/day/1" */
  to: string
  /** Sidebar label */
  label: string
  /** Short mono index shown in the rail, e.g. "00", "F", "01" */
  index: string
  /** Grouping for the sidebar (course days vs. general) */
  group: 'general' | 'day'
}

export type CalloutKind = 'info' | 'tip' | 'warning' | 'example'

export interface FrameworkColumn {
  key: string
  label: string
}

export interface FrameworkRow {
  /** cell values keyed by FrameworkColumn.key */
  [key: string]: string
}

export interface FrameworkTableData {
  caption: string
  columns: FrameworkColumn[]
  rows: FrameworkRow[]
  /** optional column key whose cell is emphasised as "best/primary" per row */
  emphasisKey?: string
}

export interface Framework {
  id: string
  name: string
  abbev?: string
  tagline: string
  summary: string
  /** short bullet points describing the steps/dimensions */
  points: string[]
  /** which day(s) reference it, for cross-linking */
  usedOn?: string[]
}

/** Discriminated union of renderable content blocks inside a Day section. */
export type ContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'cards'; items: { title: string; body: string; icon?: string }[] }
  | { type: 'callout'; kind: CalloutKind; title: string; body: string }
  | { type: 'table'; data: FrameworkTableData }
  | { type: 'quote'; quote: string; attribution?: string }
  | { type: 'steps'; items: { title: string; body: string }[] }
  | { type: 'placeholder'; note?: string }

export interface DaySection {
  id: string
  kicker: string
  heading: string
  intro?: string
  blocks: ContentBlock[]
}

export interface DayMeta {
  label: string // e.g. "Duration"
  value: string // e.g. "~90 min"
}

/** In-palette per-day accent for wayfinding (badge + section numerals). */
export type DayAccent = 'brand' | 'berry' | 'green' | 'gold-deep' | 'brand-dark'

export interface DayContent {
  n: number // 1..5
  slug: string // "day-1"
  title: string
  subtitle: string
  accent: DayAccent
  meta: DayMeta[]
  objectives: string[]
  sections: DaySection[]
  takeaways: string[]
}
