import type { SenseExercise } from '../types'

/** Product Strategy Template fields — shape matches StepList's `items` prop. */
export const STRATEGY_TEMPLATE_FIELDS: { title: string; body: string }[] = [
  {
    title: 'Goal',
    body: 'What do you want to see change in the world? Define the team’s purpose and its north-star metric in one or two sentences.',
  },
  {
    title: 'Hypothesis',
    body: 'Why do you believe this particular approach will get you there? This is the actual strategy — your best-reasoned bet, not a list of features.',
  },
  {
    title: 'Right to Win',
    body: 'Why is this team specifically positioned to pull this off, versus anyone else who could attempt it?',
  },
  {
    title: 'Metrics',
    body: 'How will you know it’s actually working? Link to real dashboards, cap it at two or three metrics maximum, and track each one’s current value alongside a simple status (red/yellow/green).',
  },
  {
    title: 'Initiatives',
    body: 'What has to happen to reach the goal? A short, prioritised list — three to four initiatives per goal, no more.',
  },
  {
    title: 'Risks',
    body: 'Why might this fail, and what’s the specific mitigation for each risk?',
  },
  {
    title: 'Long-Term Outcomes',
    body: 'How does this work compound beyond the immediate goal, into a durable advantage that’s still paying off a year or two from now?',
  },
]

/** Worked example for the Goal → Initiatives reference table (a B2B invoicing tool). */
export const GOAL_INITIATIVES_EXAMPLE: { goal: string; initiatives: string }[] = [
  {
    goal: 'Cut time-to-first-invoice for new agency customers from nine days to under two.',
    initiatives:
      'Auto-fill a starter invoice template from the client’s existing chart of accounts during onboarding; cut the payment-gateway approval step from three manual reviews to one; add a setup checklist that names the exact field blocking the first send.',
  },
  {
    goal: 'Raise the on-time payment rate from sixty-one percent to eighty percent.',
    initiatives:
      'Send automatic reminders at three, seven, and fourteen days overdue; offer card-on-file autopay for repeat clients; show a due-soon banner inside the client-facing portal.',
  },
]

/** Worked example for the Goal → Key Risks & Mitigants reference table (same worked scenario). */
export const GOAL_RISKS_EXAMPLE: { goal: string; risk: string; mitigant: string }[] = [
  {
    goal: 'Cut time-to-first-invoice for new agency customers from nine days to under two.',
    risk: 'Agencies abandon setup before finishing the chart-of-accounts import.',
    mitigant: 'Let them send a rough first invoice immediately, then refine categorisation later.',
  },
  {
    goal: 'Raise the on-time payment rate from sixty-one percent to eighty percent.',
    risk: 'Reminders read as naggy and push a client toward a competitor.',
    mitigant: 'Cap reminders at three, let the agency customise the tone, and A/B test frequency before a full rollout.',
  },
]

/** Project one-pager / canvas fields — the artefact Day 3 argues for but never builds. */
export const PROJECT_ONE_PAGER_FIELDS: { label: string; hint: string; example: string; wide?: boolean }[] = [
  {
    label: 'Idea',
    hint: 'The idea, in one plain sentence.',
    example: 'Let agency customers invoice their own clients in the client’s local currency, not just the agency’s home currency.',
    wide: true,
  },
  {
    label: 'Author',
    hint: 'Who wrote this.',
    example: 'A. Okafor, Payments PM',
  },
  {
    label: 'Sponsor',
    hint: 'Who’s backing it if it needs air cover.',
    example: 'Head of Product',
  },
  {
    label: 'Problem statement',
    hint: 'What’s broken today, for whom, and how you know.',
    example:
      'International customers ask support to manually convert forty percent of invoices each month; agencies lose clients who won’t accept home-currency invoices.',
    wide: true,
  },
  {
    label: 'Success metrics',
    hint: 'The one or two numbers that would prove this worked.',
    example: 'Manual conversion requests drop from forty percent to under five percent of invoices within one quarter.',
    wide: true,
  },
  {
    label: 'Assumptions',
    hint: 'What you’re taking on faith until proven.',
    example: 'Agencies will trust an automated exchange rate rather than insisting on manual review.',
  },
  {
    label: 'Risks & constraints',
    hint: 'What could sink it, and any hard limits.',
    example: 'The exchange-rate provider rate-limits its free tier; may need a paid plan above ten thousand conversions a month.',
  },
  {
    label: 'Scope',
    hint: 'What’s explicitly in, and explicitly out.',
    example: 'In: the twelve most-requested currencies. Out: real-time rate locking, multi-currency reporting.',
    wide: true,
  },
  {
    label: 'Strategic objective',
    hint: 'The broader objective this serves.',
    example: 'Grow revenue from agencies with international clients.',
  },
  {
    label: 'Collaboration & roles',
    hint: 'Who needs to be in the room to deliver this.',
    example: 'Payments engineering, design, and one pilot agency customer.',
  },
  {
    label: 'Stakeholders',
    hint: 'Who’s affected, even if not directly building it.',
    example: 'Support (fewer manual tickets), Finance (new provider contract).',
  },
  {
    label: 'Status',
    hint: 'Circle one: Pursue / Pivot / Pause.',
    example: 'Pursue',
  },
  {
    label: 'Duration',
    hint: 'Rough expected time to ship.',
    example: 'Six weeks',
  },
  {
    label: 'Budget implications',
    hint: 'Any new spend this creates.',
    example: 'New exchange-rate API contract, roughly $400/month at current volume.',
  },
]

/** Definition of Done checklist — common criteria a team edits down to its own agreed list. */
export const DEFINITION_OF_DONE_ITEMS: string[] = [
  'Code reviewed and approved by at least one other engineer',
  'Automated tests written and passing (unit, plus integration where it applies)',
  'Accessibility checked — keyboard navigation, screen-reader labels, colour contrast',
  'Deployed to staging and verified against the original acceptance criteria',
  'Rollout plan agreed — feature flag, percentage rollout, or straight release',
  'Analytics and observability events instrumented',
  'Documentation updated — README, changelog, or user-facing help article',
  'Product owner has signed off against the original problem statement',
  'No known P0 or P1 defects open against the change',
  'Live in production and confirmed stable, with no alert spike',
]

/** Release-slice band labels for the story map skeleton. */
export const STORY_MAP_RELEASE_LABELS: string[] = ['Release 1 — MVP', 'Release 2', 'Release 3', 'Backlog']

/** Worked example rows for the vertical-slice worksheet (same invoicing scenario, sliced thin). */
export const VERTICAL_SLICE_EXAMPLE: { slice: string; endToEnd: string; value: string }[] = [
  {
    slice: 'Ship invoices in USD only — no conversion.',
    endToEnd: 'UI currency field hard-coded to USD; backend stores the amount in USD; PDF renders the $ symbol.',
    value: 'Nothing changes for existing customers, but it proves the full send-and-pay path still works untouched.',
  },
  {
    slice: 'Add a read-only currency display (GBP, EUR) using a fixed daily rate.',
    endToEnd: 'Currency picker added to the UI; backend applies yesterday’s stored rate; PDF shows the chosen currency.',
    value: 'International customers can send an invoice in their own currency today, even with a rate that is a day old.',
  },
  {
    slice: 'Swap the fixed daily rate for a live rate lookup at send time.',
    endToEnd: 'Backend calls the exchange-rate API at send; UI shows the live rate before the customer confirms.',
    value: 'Removes the last accuracy complaint, without touching the currency picker built in the slice before it.',
  },
]

export const TEMPLATES_SOURCES: { label: string; url: string }[] = [
  {
    label: 'Jeff Patton, The New User Story Mapping (O’Reilly, 2014)',
    url: 'https://www.jpattonassociates.com/user-story-mapping/',
  },
  {
    label: 'Scrum.org, What Is a Definition of Done?',
    url: 'https://www.scrum.org/resources/what-definition-done',
  },
  {
    label: 'Henrik Kniberg, Making Sense of MVP (2016)',
    url: 'https://blog.crisp.se/2016/01/25/henrikkniberg/making-sense-of-mvp',
  },
]

/** AbstractConcrete diagram content — was inline JSX in ProductSense.tsx; content belongs in data. */
export const PRODUCT_SENSE_DIAGRAM = {
  left: { title: 'Abstract', items: ['User empathy', 'Creativity'] },
  right: { title: 'Concrete', items: ['Design knowledge', 'Business acumen'] },
  center: 'Product Sense',
  caption:
    'Two halves of one skill — the instinct for what people need, joined to the grounded knowledge of how to build and sell it.',
}

export const PRODUCT_SENSE_EXERCISES: SenseExercise[] = [
  {
    title: 'Use dozens of products, deliberately',
    instruction:
      'Nothing trains product sense faster than actually using a wide range of products with intention. Every time you open something new, ask:',
    questions: [
      'What problem does this tackle?',
      'Who actually faces this problem?',
      'Who else is already trying to solve it?',
      'What’s distinctive about this particular approach?',
      'How does it make money?',
      'And, honestly — what was my own experience like using it?',
    ],
  },
  {
    title: 'Compare products head-to-head within a category',
    instruction:
      'Pick a category — food delivery, note-taking, whatever you actually use — and try three to five real competitors in it. Then ask:',
    questions: [
      'What do they all share?',
      'Where does each one clearly win or lose?',
      'Which would you personally choose, and why?',
      'If someone else picked differently, what would explain that?',
    ],
  },
  {
    title: 'Read real user feedback closely',
    instruction:
      'Pick a product you already know well and dig into its actual feedback — reviews, feature requests, complaints.',
    questions: [
      'What comes up most often?',
      'What are people actually trying to accomplish underneath the literal request?',
      'Is there a smarter way to get them there than what they asked for?',
    ],
  },
  {
    title: 'Redesign something that frustrated you',
    instruction: 'Think of a specific experience that genuinely annoyed you recently.',
    questions: [
      'Why was it subpar?',
      'How would you fix it?',
      'Why is your version actually better, not just different?',
      'Could your fix create a new problem for some other group of users, even a small one?',
      'What would a sharp critic say about your redesign?',
    ],
  },
  {
    title: 'Design something from scratch',
    instruction: 'Imagine a product or feature you wish existed, then define it precisely.',
    questions: [
      'What’s the use case — does it solve a specific, real problem, or open up something genuinely new?',
      'Who’s the target audience? Be specific — “everyone” isn’t an audience.',
      'What’s the competition? Remember the real competitor is very often not a rival product, but the status quo: whatever people do today instead.',
    ],
  },
  {
    title: 'A few standing habits',
    instruction: 'The reps that compound quietly in the background.',
    questions: [
      'Study user psychology, design fundamentals, and basic business concepts deliberately, not just incidentally on the job.',
      'Read “how did they actually do that” case studies.',
      'Track industry trends.',
      'Find people ahead of you who are willing to practice alongside you.',
      'Don’t limit the habit to digital products — plenty of product sense lives in well-designed physical products and services too.',
    ],
  },
]

/** What a strong answer to each practice exercise looks like versus a weak one. */
export const PRODUCT_SENSE_CALIBRATION: { exercise: string; weak: string; strong: string }[] = [
  {
    exercise: 'Use dozens of products, deliberately',
    weak: 'This app is really well designed — I liked using it.',
    strong:
      'This app pre-fills ninety percent of the onboarding form from data it already holds, at the cost of feeling invasive on first use — the same trade every fintech onboarding flow makes, so it’s competitive parity, not a genuine edge.',
  },
  {
    exercise: 'Compare products head-to-head within a category',
    weak: 'App A feels nicer than App B.',
    strong:
      'All three optimise for the solo diner; none of them handle splitting a bill mid-meal — that’s the real gap between them, not which one has nicer icons.',
  },
  {
    exercise: 'Read real user feedback closely',
    weak: 'Users keep asking for more export options.',
    strong:
      'Users keep asking for a CSV export, but the job underneath is “get this into my accountant’s software” — a direct sync with the two accounting tools they actually use solves the real job with less UI than a generic export button.',
  },
  {
    exercise: 'Redesign something that frustrated you',
    weak: 'I’d add a dark mode and tidy up the icons.',
    strong:
      'I’d remove the confirmation step entirely for reversible actions and keep it only for destructive ones — matching the friction to the actual risk instead of applying the same speed bump everywhere.',
  },
  {
    exercise: 'Design something from scratch',
    weak: 'An app that helps people manage their time better.',
    strong:
      'A shared calendar built specifically for co-parents coordinating custody handoffs — competing against a paper calendar stuck to the fridge, not against Google Calendar.',
  },
  {
    exercise: 'A few standing habits',
    weak: 'I read a few product blogs when I get the chance.',
    strong:
      'I keep one running note per week of a pattern I’d never noticed before, then review it monthly to see which ones actually stuck versus which were just interesting on the day.',
  },
]

export const PRODUCT_SENSE_SOURCES: { label: string; url: string }[] = [
  {
    label: 'Lenny Rachitsky, How to Build Product Sense (Lenny’s Newsletter, 2022)',
    url: 'https://www.lennysnewsletter.com/p/how-to-build-product-sense',
  },
]
