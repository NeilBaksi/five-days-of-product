// Shared type contracts for Five Days of Product.
// Content is data: pages render these shapes from src/data/*.

export interface NavItem {
  /** Router path, e.g. "/" or "/day/1" */
  to: string
  /** Sidebar label */
  label: string
  /** Short mono index shown in the rail, e.g. "00", "F", "01" */
  index: string
  /** Grouping for the sidebar (general, reference toolkit, or course days) */
  group: 'general' | 'toolkit' | 'day'
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

/** One named product person behind a well-known product (Cagan, SVPG 2016). */
export interface StoryItem {
  name: string
  product: string
  year?: string
  /** one-line teaser shown collapsed */
  hook: string
  /** fuller story shown expanded */
  detail: string
}

/** Discriminated union of renderable content blocks inside a Day section. */
export type ContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'subheading'; text: string }
  | { type: 'image'; src: string; alt: string; caption?: string }
  | { type: 'cards'; items: { title: string; body: string; icon?: string }[] }
  | { type: 'callout'; kind: CalloutKind; title: string; body: string }
  | { type: 'table'; data: FrameworkTableData }
  | { type: 'quote'; quote: string; attribution?: string }
  | { type: 'steps'; items: { title: string; body: string }[] }
  | { type: 'placeholder'; note?: string }
  | { type: 'goodbad'; items: { good: string; bad: string }[] }
  | { type: 'stories'; items: StoryItem[] }
  | {
      type: 'spectrum'
      stages: { label: string; note?: string; icon?: 'block' | 'cart' | 'bicycle' | 'car' }[]
      caption?: string
    }
  | { type: 'pressure'; center: string; forces: string[] }
  | {
      type: 'triad'
      center: string
      variant: 'venn' | 'balance'
      nodes: { label: string; desc?: string }[]
      caption?: string
    }
  | { type: 'formula'; expression: string; note?: string }
  | {
      type: 'debate'
      left: { quote: string; attribution: string }
      right: { quote: string; attribution: string }
      resolution: string
    }
  | {
      type: 'strategyStack'
      topTier: { label: string }[]
      support: string[]
      center: string
      nodes: { label: string; desc?: string }[]
      caption?: string
      vennImage?: string
      vennImageAlt?: string
    }
  | { type: 'wheel'; center: string; spokes: { label: string; desc?: string }[]; emphasisIndex?: number }
  | {
      type: 'opportunity'
      xLabel: string
      yLabel: string
      dots: { x: number; y: number; label?: string; highlight?: boolean }[]
      zoneLabel: string
      caption?: string
    }
  | { type: 'persona'; name: string; jtbd: string; problems: string[] }
  | {
      type: 'matrix'
      xLabel: string
      yLabel: string
      items: { label: string; value: 0 | 1 | 2; complexity: 0 | 1 | 2; highlight?: boolean }[]
      zoneLabel?: string
      caption?: string
    }
  | { type: 'kano'; caption?: string }
  | { type: 'quoteBank'; items: { quote: string; attribution: string }[] }
  | { type: 'moscow'; rings: { label: string; effort: string }[]; caption?: string }
  | { type: 'ladder'; tiers: { label: string; meta: string; desc?: string }[]; caption?: string }
  | { type: 'roadmapCycle'; steps: { label: string; note?: string }[]; caption?: string }
  | {
      type: 'hexagon'
      axes: { name: string; poles: { label: string; example: string; desc: string }[] }[]
      caption?: string
    }
  | { type: 'diamond'; center: string; nodes: { label: string; desc?: string }[]; emphasisIndex?: number; caption?: string }
  | { type: 'funnel'; stages: { label: string; note: string }[]; caption?: string }
  | { type: 'horizons'; columns: { label: string; note: string; cards: string[] }[]; caption?: string }
  | {
      type: 'translation'
      leftLabel: string
      rightLabel: string
      pairs: { left: string; right: string; note?: string }[]
      caption?: string
    }
  | {
      type: 'squadModel'
      tribe: { name: string; squads: { name: string; mission: string }[] }
      chapter: { name: string; desc: string }
      guild: { name: string; desc: string }
      caption?: string
    }
  | {
      type: 'shift'
      left: { title: string; items: string[] }
      right: { title: string; items: string[] }
      center: string
      caption?: string
    }

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
  /** short syllabus theme chips, e.g. ["User research", "Product strategy"] */
  themes: string[]
  /** the syllabus "what it means for you" line — used by the landing roadmap */
  promise: string
  meta: DayMeta[]
  objectives: string[]
  sections: DaySection[]
  takeaways: string[]
  /** optional source citations rendered as an attribution footer */
  sources?: { label: string; url: string }[]
}

// --- Toolkit (reference section) ---

export type GlossaryCategory =
  | 'Engineering & Technical'
  | 'Design & UX'
  | 'Process & Agile'
  | 'Data & Metrics'
  | 'Product & Growth'

export interface GlossaryTerm {
  term: string
  category: GlossaryCategory
  definition: string
  /** cross-reference to another page, e.g. { to: '/day/3', label: 'Day 3' } */
  seeAlso?: { to: string; label: string }
}

export interface PromptEntry {
  id: string
  title: string
  /** the one-line "use this when" framing */
  useWhen: string
  /** raw text copied verbatim; [bracketed] spans render highlighted */
  prompt: string
  tip?: string
}

export interface SenseExercise {
  title: string
  instruction: string
  questions: string[]
}

export interface PricingModel {
  number: number
  title: string
  /** positioning tag after the em dash, e.g. "The Safe Default" */
  tag: string
  /** main philosophy/strategy line */
  strategy: string
  /** secondary explanatory line — mechanism, deciding factor, how it's actually done */
  detail?: string
  detailLabel?: string
  formula?: { expression: string; note?: string }
  pros: string
  cons: string
  /** "Where it shows up" / "Common in" / classic example pattern */
  inPractice?: string
  inPracticeLabel?: string
  watchOut: string
}

export interface SaasPricingModel {
  title: string
  body: string
}
