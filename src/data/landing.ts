// Content for the landing page. Local, simple interfaces — no changes to src/types/index.ts.

interface HeroContent {
  title: string
  subtitle: string
  supporting: string
}

interface ValueQuadrantItem {
  label: string
  desc: string
}

interface DebateSide {
  quote: string
  attribution: string
}

interface DebateContent {
  left: DebateSide
  right: DebateSide
  resolution: string
}

interface PMPhilosophy {
  title: string
  body: string
}

interface EQTrait {
  title: string
  body: string
}

interface PullQuote {
  quote: string
  attribution: string
}

interface AttributionSource {
  label: string
  url: string
}

export const HERO: HeroContent = {
  title: 'Five Days of Product',
  subtitle:
    'Digital Product Management, one day at a time. A field guide built from a 5-day MBA course — for anyone who wants to understand what product managers actually do, and why it matters.',
  supporting:
    'No fluff, no buzzwords for their own sake. Just the frameworks, mental models, and hard-won lessons that separate great product management from the rest.',
}

export const VALUE_QUADRANT: ValueQuadrantItem[] = [
  { label: 'Valuable', desc: 'Customers choose to use or buy it.' },
  { label: 'Usable', desc: 'Customers can figure out how to use it.' },
  { label: 'Feasible', desc: 'Engineering can build it with the time, skills, and technology available.' },
  { label: 'Viable', desc: 'The solution works for the business.' },
]
// (icon is added later by the component layer — just export label/desc here)

export const DEBATE: DebateContent = {
  left: { quote: 'A good product manager is the CEO of the product.', attribution: 'Ben Horowitz, a16z' },
  right: {
    quote:
      'PMs are not the CEO of product… [they] simply don’t have any direct authority over most of the things needed to make their products successful.',
    attribution: 'Martin Eriksson, quoted in Julia Austin, Harvard Business Review',
  },
  resolution:
    'Both are right, depending on what you emphasize. PMs carry CEO-level accountability for the outcome, but none of the CEO’s authority over the people delivering it. Marty Cagan resolves this by comparing the PM to a CEO with the explicit caveat: unlike the CEO, nobody reports to the product manager. Influence without authority is the job.',
}

export const PM_PHILOSOPHIES: PMPhilosophy[] = [
  {
    title: 'PM drives engineering',
    body: 'A "throw it over the wall" model: PMs write requirements, engineering builds them. Good for focus, bad for empathy — engineers lose sight of the big picture and do not develop empathy for customers.',
  },
  {
    title: 'Engineering drives product',
    body: 'Common in deeply technical domains (cloud, big data, infrastructure); engineers push the technology forward and PMs find ways to monetize or productize it. Good for breakthrough innovation, bad because PM input on priorities is ignored.',
  },
  {
    title: 'The PM–engineering partnership',
    body: 'A "strong yin-yang," joint discovery, shared accountability, engineers in customer interviews, PMs in sprint planning. Produces the best long-term outcomes, even if it feels slower in the short term.',
  },
]

export const COMPETENCIES: string[] = [
  'Customer interviews & user testing',
  'Design sprints',
  'Feature prioritisation & roadmap planning',
  'Resource allocation',
  'Market assessment',
  'Translating business ↔ technical requirements',
  'Pricing & revenue modeling',
  'Defining & tracking success metrics',
]

export const EQ_TRAITS: EQTrait[] = [
  {
    title: 'Relationship management',
    body: 'The best PMs inspire people and help them reach their full potential, across engineering, design, sales, and customers — often with zero formal authority over any of them.',
  },
  {
    title: 'Self-awareness',
    body: 'Avoiding "false-positive feature validation," where a PM falls in love with a feature that solves their own pain point and unconsciously steers users toward agreeing with them.',
  },
  {
    title: 'Self-management',
    body: 'Staying calm and decisive when the CEO wants one thing, the engineering team another, and customers have their own opinions.',
  },
  {
    title: 'Social awareness',
    body: 'Deep empathy for customers and a working understanding of how sales, support, and engineering each need the product to behave differently.',
  },
]

export const COMPANY_FIT: string =
  'The same PM can thrive at one company and struggle at another, depending on how technical the role needs to be, the company’s philosophy on where PM sits relative to engineering, the stage of the company (startup vs. mature), and how involved the founder or CEO is in product decisions day to day.'

export const PULL_QUOTES: PullQuote[] = [
  {
    quote:
      'The role I would argue that the product manager is most similar to is the role of the CEO. But with the obvious difference that unlike the CEO, nobody reports to the product manager.',
    attribution: 'Marty Cagan, SVPG',
  },
  {
    quote:
      'Good product managers err on the side of clarity vs. explaining the obvious. Bad product managers never explain the obvious.',
    attribution: 'Ben Horowitz, a16z',
  },
  {
    quote:
      'True leadership is a big part of what separates the great product people from the merely good ones. So no matter your title or level, if you aspire to be great, don’t be afraid to lead.',
    attribution: 'Marty Cagan, SVPG',
  },
]

export const ATTRIBUTION_SOURCES: AttributionSource[] = [
  {
    label: 'Ben Horowitz, Good Product Manager/Bad Product Manager (a16z, 2012)',
    url: 'https://a16z.com/good-product-manager-bad-product-manager/',
  },
  {
    label: 'Marty Cagan, Behind Every Great Product (SVPG, 2016)',
    url: 'https://www.svpg.com/behind-every-great-product/',
  },
  {
    label: 'Julia Austin, What It Takes to Become a Great Product Manager (Harvard Business Review, 2017)',
    url: 'https://hbr.org/2017/12/what-it-takes-to-become-a-great-product-manager',
  },
]
