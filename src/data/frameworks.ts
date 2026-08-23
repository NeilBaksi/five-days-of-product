import type { Framework, FrameworkTableData } from '../types'

// Framework reference cards for the /frameworks page: one entry per framework
// taught (or referenced) across the course, each with a short summary, key
// points, and — where a day page still covers it — a usedOn link back.

export const FRAMEWORKS: Framework[] = [
  // --- Discovery ---
  {
    id: 'jtbd',
    name: 'Jobs to be Done',
    abbev: 'JTBD',
    category: 'Discovery',
    tagline: 'People hire products to make progress.',
    summary:
      'JTBD treats a purchase as an act of hiring: something in the buyer’s situation changed, and this product was pulled in to resolve it. It protects against designing for a persona instead of a problem, and against mistaking a stated preference for the job actually being hired to do.',
    points: [
      'Situation — the context that triggers the job',
      'Motivation — the progress the user seeks',
      'Outcome — how they measure success',
    ],
    usedOn: ['/day/1', '/day/2'],
    origin: 'Clayton Christensen and collaborators, developed through the 1990s and 2000s',
    whenNotToUse:
      'Weak for a genuinely novel category with no analogous “job” yet to observe — and it says nothing about effort or cost, so it still needs pairing with a scoring method before it tells you what to build first.',
    detail: [
      { type: 'subheading', text: 'The job story format' },
      {
        type: 'paragraph',
        text: 'A persona statement (Day 1’s “needs to… so they can…”) is one way to write a job down. A job story is a tighter grammar for the same idea, useful when the job needs to go straight into a backlog rather than being synthesised into a persona first: “When [situation], I want to [motivation], so I can [expected outcome].”',
      },
      {
        type: 'callout',
        kind: 'tip',
        title: 'The real competitor is often “doing nothing”',
        body: 'A job’s competition is whatever else could resolve the same struggling moment — which is just as often a workaround, a spreadsheet, or simply not bothering, as it is a rival product.',
      },
      {
        type: 'goodbad',
        items: [
          {
            good: 'A job statement written without naming a solution: “needs to reconcile invoices weekly.”',
            bad: 'A job statement that already assumes the fix: “wants a mobile app for invoices.”',
          },
        ],
      },
      {
        type: 'paragraph',
        text: 'JTBD tells you why a job matters to one person — it says nothing about how many people share it, or how urgent it is relative to everything else on a backlog. That’s exactly the gap Outcome-Driven Innovation and a scoring method like RICE are built to close.',
      },
    ],
  },
  {
    id: 'odi',
    name: 'Outcome-Driven Innovation',
    abbev: 'ODI',
    category: 'Discovery',
    tagline: 'Ask for the outcome, not the fix.',
    summary:
      'Outcome-Driven Innovation treats customers as reliable narrators of what they want to achieve, and unreliable narrators of how to achieve it — so it interviews for outcomes, never features. Skip the survey step and guess at importance and satisfaction from the interview room instead, and the bias the method was built to remove walks straight back in.',
    points: [
      'Outcome — the underlying result wanted, decoupled from any specific mechanism',
      'Importance & satisfaction — scored separately, each 1–10, by survey rather than gut feel',
      'Opportunity — the arithmetic that turns those two scores into a rankable list',
    ],
    usedOn: ['/day/1', '/day/2'],
    origin: 'Anthony Ulwick, developed through the 1990s and formalised as Outcome-Driven Innovation',
    whenNotToUse:
      'Needs a large enough, reachable customer base to survey at meaningful scale — for an early-stage product with a handful of users, structured interviews carry more signal than a formal opportunity score built on a tiny sample.',
    detail: [
      { type: 'subheading', text: 'Running the survey' },
      {
        type: 'paragraph',
        text: 'A typical ODI study surfaces well over a hundred outcome statements from qualitative interviews, then puts all of them in front of a large quantitative sample, asking two questions per outcome: how important is this, and how satisfied are you today? Average across too broad a population, though, and every real signal dissolves into a uniformly middling score before it ever reaches the ranking.',
      },
      {
        type: 'callout',
        kind: 'warning',
        title: 'One market, several segments',
        body: 'Averaging scores across a market that’s really several distinct segments — power users versus newcomers — flattens every real signal into a uniformly mediocre opportunity score. Segment before scoring, not after.',
      },
      {
        type: 'table',
        data: {
          caption: 'ODI and JTBD, side by side',
          columns: [
            { key: 'aspect', label: 'Aspect' },
            { key: 'jtbd', label: 'JTBD' },
            { key: 'odi', label: 'ODI' },
          ],
          rows: [
            { aspect: 'What it asks', jtbd: 'Why was this hired?', odi: 'What outcome matters, and how well is it met today?' },
            { aspect: 'Method', jtbd: 'Qualitative interviews', odi: 'Interviews, then a quantitative survey' },
            { aspect: 'Output', jtbd: 'A job statement', odi: 'A ranked opportunity score' },
          ],
        },
      },
      {
        type: 'paragraph',
        text: 'The two are complementary, not competing: JTBD supplies the qualitative framing, ODI supplies the number that says which job to act on first.',
      },
    ],
  },
  {
    id: 'working-backwards',
    name: 'Working Backwards',
    category: 'Discovery',
    tagline: 'Start from the customer, not the roadmap.',
    summary:
      'Popularised by Amazon: before writing a line of code, write the future press release and FAQ as if the product had already shipped. Forces the team to argue about customer value and the hard trade-offs on paper — while changing a sentence is still free.',
    points: [
      'Press release — the customer-facing pitch, written first',
      'FAQ — the hard internal and external questions, answered up front',
      'Roadmap and backlog follow from the narrative, not the other way round',
    ],
    origin:
      'Developed and practised internally at Amazon; documented publicly by Colin Bryar and Bill Carr, Working Backwards (2021)',
    whenNotToUse:
      'Fine for a genuinely new product or a large bet. For a small, well-understood change the ceremony costs more than the clarity it buys — a press release for a bug fix is theatre.',
    detail: [
      { type: 'subheading', text: 'The press release and the two FAQs' },
      {
        type: 'steps',
        items: [
          {
            title: 'Press release',
            body: 'Written as if the product has already shipped — heading, problem, solution, a customer quote, how to get started.',
          },
          { title: 'External FAQ', body: 'The questions customers would actually ask, answered honestly.' },
          {
            title: 'Internal FAQ',
            body: 'The harder internal questions — cost, technical risk, what happens if a competitor gets there first.',
          },
        ],
      },
      {
        type: 'callout',
        kind: 'example',
        title: 'The question that surfaces early',
        body: 'A B2B invoicing tool team drafts a press release for “automatic late-payment reminders” before writing a line of code. The FAQ forces them to answer, in writing, what happens when a customer disputes a reminder sent in error — a question that would otherwise surface for the first time in a support ticket, post-launch.',
      },
      {
        type: 'callout',
        kind: 'warning',
        title: 'A stale document is worse than none',
        body: 'A weak first draft rarely sinks this exercise; an unrevised one does. A PR/FAQ that stops getting rewritten the moment the team learns something new turns into paper to point at, instead of thinking that keeps up with reality.',
      },
    ],
  },
  {
    id: 'opportunity-solution-tree',
    name: 'Opportunity Solution Tree',
    abbev: 'OST',
    category: 'Discovery',
    tagline: 'Map outcome to opportunities to solutions, visibly.',
    summary:
      'A tree that connects one desired outcome to the customer opportunities that could drive it, and the range of solutions worth testing for each. Keeps every option visible side by side so a team never locks onto a single solution before the opportunity space has actually been explored.',
    points: [
      'Outcome — the single result the team is steering toward',
      'Opportunities — the needs, pains, and desires that could move it',
      'Solutions — several candidate bets tested per opportunity, not one',
    ],
    origin: 'Teresa Torres, developed through the 2010s and set out in Continuous Discovery Habits (2021)',
    whenNotToUse:
      'Overkill for a single well-understood bug fix or a contractually fixed scope of work — the tree earns its keep when the solution space is genuinely still open.',
    detail: [
      { type: 'subheading', text: 'Building one' },
      {
        type: 'steps',
        items: [
          {
            title: 'Write the outcome at the root',
            body: 'One measurable result, not a feature — “increase weekly active editors,” not “ship comments.”',
          },
          { title: 'Branch into opportunities', body: 'Needs, pains and desires drawn from continuous interviews, not a single research sprint.' },
          { title: 'Branch each opportunity into solutions', body: 'Several competing ideas per opportunity, deliberately, before any of them gets built.' },
          {
            title: 'Add assumption tests',
            body: 'Under each solution, the riskiest assumption that would sink it, tested cheaply before committing engineering time.',
          },
        ],
      },
      {
        type: 'callout',
        kind: 'tip',
        title: 'Breadth before depth',
        body: 'The tree’s whole value is visible breadth: a team that jumps straight from outcome to one solution has built a to-do list wearing a tree’s clothing.',
      },
      {
        type: 'callout',
        kind: 'warning',
        title: 'A living map, not a one-off artefact',
        body: 'A tree drawn once for a planning cycle and never reopened is not really a discovery habit — it is a diagram. The weekly interviews were supposed to be what kept it moving.',
      },
      {
        type: 'paragraph',
        text: 'An OST doesn’t replace prioritisation — it feeds it. RICE or a value/complexity matrix still has to choose which branch to fund first.',
      },
    ],
  },
  {
    id: 'lean-canvas',
    name: 'Lean Canvas',
    category: 'Discovery',
    tagline: 'A one-page business model, biased toward risk.',
    summary:
      'Ash Maurya adapted Osterwalder’s Business Model Canvas for early-stage products, swapping the boxes that assume an existing business — Key Partners, Key Activities — for the ones that matter when nothing is validated yet: Problem, Solution, Unfair Advantage. Fill in Solution before Problem is genuinely understood, though, and the canvas still looks confident — it is just confident about a guess.',
    points: [
      'Problem — the top three problems worth solving, and how customers cope today without you',
      'Solution — the top three features, sketched only after Problem is filled in',
      'Key metrics — the handful of numbers that tell you if the business is actually working',
      'Unfair advantage — the one thing a competitor genuinely cannot easily copy or buy',
    ],
    origin: 'Ash Maurya, 2010 — adapted from Alexander Osterwalder’s Business Model Canvas and set out in Running Lean (2nd ed., 2012)',
    whenNotToUse:
      'Thin on customer relationships and channels compared with the original Business Model Canvas — fine for a pre-seed sketch, less useful once a business has a real go-to-market motion to plan.',
    detail: [
      { type: 'subheading', text: 'The nine boxes, filled in order' },
      {
        type: 'paragraph',
        text: 'Maurya’s explicit instruction is to fill the canvas in sequence — Problem, Customer Segments, Unique Value Proposition, Solution, then the rest — because filling Solution first is how founders end up validating a canvas that describes a product nobody asked for.',
      },
      {
        type: 'cards',
        items: [
          { title: 'Problem', body: 'Sits where Key Partners does — early on, competitors and existing workarounds matter more than partnerships.' },
          { title: 'Key metrics', body: 'Sits where Key Resources does — the few numbers that tell you whether the thing is working.' },
          { title: 'Unfair advantage', body: 'Sits where Customer Relationships does — the box most founders honestly leave blank at first, and that’s fine.' },
        ],
      },
      {
        type: 'callout',
        kind: 'warning',
        title: 'A confident canvas is a warning sign',
        body: 'Filling every box confidently in one sitting is usually a sign the canvas describes an idea, not a validated business — leave boxes blank until there’s real evidence to put there.',
      },
    ],
  },
  {
    id: 'impact-mapping',
    name: 'Impact Mapping',
    category: 'Discovery',
    tagline: 'Work backward from a goal, through people, to what you’ll build.',
    summary:
      'A four-level mind map — Goal, Actors, Impacts, Deliverables — that forces a team to name who needs to behave differently before agreeing on what to build for them. Its guardrail is the second level: skip straight from goal to deliverables and impact mapping collapses into an ordinary feature list with a mission statement bolted on top.',
    points: [
      'Goal — the single measurable business objective at the centre',
      'Actors — everyone whose behaviour could move that goal, including non-users',
      'Impacts — the specific behaviour change wanted from (or feared from) each actor',
      'Deliverables — the actual scope, chosen last, as one way to produce an impact',
    ],
    origin: 'Gojko Adzic, set out in Impact Mapping (2012)',
    whenNotToUse:
      'Loses its point once a goal is fully scoped and contractually fixed — the branching only pays off when the deliverables are genuinely still an open question.',
    detail: [
      { type: 'subheading', text: 'Reading the map' },
      {
        type: 'steps',
        items: [
          { title: 'Why', body: 'The goal at the centre — one number, one deadline, agreed before branching starts.' },
          {
            title: 'Who',
            body: 'Every actor who could help or hinder it, including people who never touch the product — a partner’s sales team, a regulator, a competitor’s customer.',
          },
          { title: 'How', body: 'The impact wanted from each actor — a behaviour change, not a feature.' },
          { title: 'What', body: 'The deliverables — chosen last, and treated as one hypothesis for producing the impact, not the only one.' },
        ],
      },
      {
        type: 'callout',
        kind: 'example',
        title: 'An actor who never opens the app',
        body: 'A food-delivery app’s goal is “cut refund requests by 20% this quarter.” One actor is the restaurant’s kitchen staff, not the diner — the wanted impact is “mark orders ready the moment they actually are,” and the deliverable that follows is a kitchen-facing timer, not a diner-facing feature at all.',
      },
      {
        type: 'callout',
        kind: 'tip',
        title: 'Negative impacts are often the most useful branch',
        body: 'Naming an actor whose impact is negative — a competitor, a fraud ring — often turns out to be the most useful branch on the whole map.',
      },
    ],
  },

  // --- Definition ---
  {
    id: 'rice',
    name: 'RICE Prioritisation',
    abbev: 'RICE',
    category: 'Definition',
    tagline: 'Score initiatives by expected value per effort.',
    summary:
      'Score competing initiatives by Reach × Impact × Confidence ÷ Effort, then rank the backlog by the result. The inputs are still estimates, not facts, but forcing every argument for an idea onto the same four axes stops prioritisation being won by whoever pitches loudest or shouts last.',
    points: [
      'Reach — how many people or events it touches in a given period',
      'Impact — how much it moves the needle for each one it reaches',
      'Confidence — how sure the estimate is, expressed as a percentage',
      'Effort — how many person-months it costs to ship',
    ],
    origin: 'Developed at Intercom; publicly described by Sean McBride, “RICE: Simple Prioritization for Product Managers” (Intercom blog, 2016)',
    whenNotToUse:
      'The four inputs are still estimates — RICE launders opinion into an authoritative-looking number, and a team that stops interrogating the estimates behind Reach and Impact has just moved the argument one level upstream instead of resolving it.',
    detail: [
      {
        type: 'formula',
        expression: 'RICE score = (Reach × Impact × Confidence) ÷ Effort',
        note: 'Reach in people per time period, Impact typically scored 3 / 2 / 1 / 0.5 / 0.25 (massive to minimal), Confidence as a percentage, Effort in person-months.',
      },
      {
        type: 'table',
        data: {
          caption: 'A worked comparison',
          emphasisKey: 'score',
          columns: [
            { key: 'initiative', label: 'Initiative' },
            { key: 'reach', label: 'Reach' },
            { key: 'impact', label: 'Impact' },
            { key: 'confidence', label: 'Confidence' },
            { key: 'effort', label: 'Effort' },
            { key: 'score', label: 'Score' },
          ],
          rows: [
            { initiative: 'Add CSV export', reach: '2,000/qtr', impact: '1', confidence: '90%', effort: '1', score: '1,800' },
            { initiative: 'Rebuild onboarding', reach: '500/qtr', impact: '3', confidence: '70%', effort: '4', score: '263' },
          ],
        },
      },
      {
        type: 'callout',
        kind: 'warning',
        title: 'Confidence is the most-fudged input',
        body: 'Teams quietly inflate Confidence to make a pet project’s score climb — which is exactly why some teams cap Confidence at 80% for anything without real data behind it.',
      },
      {
        type: 'paragraph',
        text: 'RICE says nothing about strategic fit or sequencing dependencies — a low-scoring initiative that unblocks three higher-scoring ones still has to be argued for outside the formula.',
      },
    ],
  },
  {
    id: 'ice',
    name: 'ICE Score',
    abbev: 'ICE',
    category: 'Definition',
    tagline: 'RICE’s faster, rougher cousin.',
    summary:
      'Impact, Confidence, and Ease multiplied together, with no Reach term and no unit conversions to argue about — built for triaging a long list quickly rather than defending a roadmap in a steering committee. The trade-off is exactly what it drops: without Reach, a niche idea that thrills ten people can outscore something that would meaningfully help ten thousand.',
    points: [
      'Impact — how much this moves the metric that matters, scored on a simple 1–10 scale',
      'Confidence — how sure the team is about that impact estimate',
      'Ease — how simple it is to ship, the inverse of RICE’s Effort',
    ],
    origin: 'Widely attributed to Sean Ellis and popularised through growth-hacking practice in the early 2010s',
    whenNotToUse:
      'Struggles to compare initiatives of very different scale — dropping Reach entirely makes ICE better suited to triaging one backlog of similarly-sized experiments than to ranking a mixed roadmap of big bets and small fixes.',
    detail: [
      {
        type: 'formula',
        expression: 'ICE score = Impact × Confidence × Ease',
        note: 'Each scored 1–10; unlike RICE, all three are simple ordinal judgements, not measured units, which is exactly why it’s faster and rougher.',
      },
      {
        type: 'table',
        data: {
          caption: 'RICE vs ICE, in one row',
          columns: [
            { key: 'aspect', label: 'Aspect' },
            { key: 'rice', label: 'RICE' },
            { key: 'ice', label: 'ICE' },
          ],
          rows: [
            { aspect: 'Inputs', rice: 'Reach, Impact, Confidence, Effort', ice: 'Impact, Confidence, Ease' },
            { aspect: 'Units', rice: 'Mixed — people, a scale, a percentage, person-months', ice: 'All three on the same 1–10 scale' },
            { aspect: 'Best for', rice: 'Defending a roadmap to stakeholders', ice: 'Triaging a long list fast, in a working session' },
          ],
        },
      },
      {
        type: 'callout',
        kind: 'tip',
        title: 'Score it live',
        body: 'ICE is designed to be filled in out loud, initiative by initiative, in minutes. Retreating to spreadsheets to compute it carefully means RICE was probably the tool actually needed.',
      },
    ],
  },
  {
    id: 'moscow',
    name: 'MoSCoW',
    category: 'Definition',
    tagline: 'Must, should, could, won’t — one vocabulary, no ambiguity.',
    summary:
      'MoSCoW gives a team one shared vocabulary for scope instead of four private definitions of “important.” That vocabulary erodes by relabelling, not by open argument — a stakeholder who can’t get a Should upgraded to a Must simply repeats “everyone agrees this is critical” until the room gives in, and the category stops meaning anything at all.',
    points: [
      'Must have — the line that, if missing, would cancel the whole project',
      'Should have — painful to cut, survivable with a workaround',
      'Could have — done only if Must and Should are already funded',
      'Won’t have — explicitly out of scope this round, not forever',
    ],
    usedOn: ['/day/2'],
    origin: 'Dai Clegg, developed as part of the DSDM (Dynamic Systems Development Method) framework in the 1990s',
    whenNotToUse:
      'Says nothing about value or effort on its own. A plan can be stuffed with individually uncontested Musts that are collectively unbuildable in the time available, so it needs a sizing pass running alongside it.',
    detail: [
      {
        type: 'callout',
        kind: 'warning',
        title: 'When every item claims to be a Must',
        body: 'The method stops discriminating the moment every stakeholder insists their own item is a Must — the fix isn’t a stricter definition of the word, it’s running the cancel-the-project test on each claim out loud, in the room, rather than letting categories get settled by whoever argues hardest.',
      },
      { type: 'subheading', text: '“Won’t have” is a decision about this release, not forever' },
      {
        type: 'paragraph',
        text: 'The category teams misread most often is Won’t have — it’s routinely treated as a permanent rejection, which is exactly why stakeholders fight so hard to avoid it. DSDM ties MoSCoW to a fixed timebox: within one release window, effort simply can’t stretch to cover everything, so Won’t have marks what’s parked for next time, not what’s been refused for good.',
      },
      {
        type: 'table',
        data: {
          caption: 'MoSCoW vs Kano, in one row',
          columns: [
            { key: 'aspect', label: 'Aspect' },
            { key: 'moscow', label: 'MoSCoW' },
            { key: 'kano', label: 'Kano' },
          ],
          rows: [
            { aspect: 'Question asked', moscow: 'Would we cancel the project without it?', kano: 'What kind of satisfaction does it produce?' },
            { aspect: 'Timing', moscow: 'Applied once ideas are scoped, at the project level', kano: 'Applied per-feature, often earlier' },
            { aspect: 'Output', moscow: 'A scope boundary for this release', kano: 'A category that predicts how satisfaction decays' },
          ],
        },
      },
      {
        type: 'paragraph',
        text: 'The two aren’t competitors — a feature can be Kano’s “must-be” and MoSCoW’s “Must have” at once. But a Kano “delighter” can validly sit in “Could have,” not “Must,” precisely because delight, unlike a must-be, is optional by definition.',
      },
    ],
  },
  {
    id: 'kano',
    name: 'Kano Model',
    abbev: 'Kano',
    category: 'Definition',
    tagline: 'Not all features satisfy equally.',
    summary:
      'Classifies features by the kind of satisfaction they produce — must-be, performance, or delighter — not simply whether they’re wanted. The category most roadmaps mishandle is the delighter: what wows users today quietly decays into a must-be over time, so yesterday’s differentiator becomes today’s bare minimum.',
    points: [
      'Basic — expected by default; skip it and users notice immediately',
      'Performance — satisfaction rises in a straight line with how well it’s done',
      'Delighter — a surprise today, a must-be tomorrow if it lands',
    ],
    usedOn: ['/day/2'],
    origin: 'Noriaki Kano, Nobuhiku Seraku, Fumio Takahashi and Shinichi Tsuji, published in Japanese in 1984; introduced to English-language product practice through the 1990s',
    whenNotToUse:
      'Categories are relative to one market at one moment, and they expire. A delighter drifts toward must-be as competitors copy it, so a survey more than a year or two old is describing a market that has already moved on.',
    detail: [
      { type: 'subheading', text: 'The survey behind the curve' },
      {
        type: 'paragraph',
        text: 'Each feature is scored with a paired question — functional (“how would you feel if this were present?”) and dysfunctional (“how would you feel if this were absent?”) — each answered on a five-point scale from “I like it” to “I dislike it.” Cross-referencing the two answers against Kano’s scoring table is what assigns a feature to must-be, performance, attractive, indifferent or reverse, not a team’s intuition about where it belongs.',
      },
      {
        type: 'table',
        data: {
          caption: 'Reading the two answers together (simplified)',
          columns: [
            { key: 'functional', label: 'Functional answer' },
            { key: 'dysfunctional', label: 'Dysfunctional answer' },
            { key: 'category', label: 'Category' },
          ],
          rows: [
            { functional: 'Like it', dysfunctional: 'Must be that way', category: 'Performance' },
            { functional: 'Expect it', dysfunctional: 'Dislike it', category: 'Must-be' },
            { functional: 'Like it', dysfunctional: 'Neutral', category: 'Attractive' },
            { functional: 'Neutral', dysfunctional: 'Neutral', category: 'Indifferent' },
          ],
        },
      },
      {
        type: 'callout',
        kind: 'tip',
        title: 'The Better-Worse coefficient',
        body: 'Beyond the category label, Kano analysis produces two numbers per feature — how much satisfaction rises if you add it, and how much dissatisfaction falls if you fix it — letting two features in the same category still be ranked against each other.',
      },
      {
        type: 'callout',
        kind: 'warning',
        title: 'Ask when it was last measured',
        body: 'A delighter surveyed once and never checked again keeps its old label while quietly turning into a must-be underneath it — the roadmap is usually the last thing to notice.',
      },
    ],
  },
  {
    id: 'value-complexity',
    name: 'Value/Complexity Matrix',
    category: 'Definition',
    tagline: 'Two axes, four quadrants, one obvious place to start.',
    summary:
      'The simplest prioritisation tool in the kit — plot product value against implementation complexity and the top-left quadrant names itself. Its honest weakness is the axis it doesn’t interrogate: “value” is usually one stakeholder’s judgement rendered as if it were measured, which is exactly the gap RICE’s four separate inputs exist to close.',
    points: [
      'Product value — the axis worth arguing about, since it’s usually one person’s opinion standing in for evidence',
      'Implementation complexity — the axis engineering can defend with a straight face, roughly in story points',
      'Quick wins — high value, low complexity, and the obvious place to start',
      'The bottom-right corner — high complexity, low value, where roadmaps quietly go to die',
    ],
    usedOn: ['/day/2'],
    whenNotToUse:
      'Two axes can’t hold a genuinely multi-factor decision — once effort, confidence and reach all matter separately, the matrix has run out of room and it’s time to move to RICE.',
    detail: [
      { type: 'subheading', text: 'A common variant: T-shirt sizes' },
      {
        type: 'paragraph',
        text: 'Many teams replace numeric scoring with T-shirt sizes — S/M/L for complexity, low/medium/high for value — trading precision for speed in exactly the way ICE trades precision for speed against RICE. Useful for a fast triage session; risky as the only record behind a quarterly commitment.',
      },
      {
        type: 'callout',
        kind: 'warning',
        title: 'Whose judgement is on the axis',
        body: 'The value axis is only as honest as whoever’s scoring it — a matrix filled in solely by the loudest voice in the room has just relabelled a HiPPO decision (the highest-paid person’s opinion) as if it were data.',
      },
      {
        type: 'table',
        data: {
          caption: 'Value/complexity vs RICE',
          columns: [
            { key: 'aspect', label: 'Aspect' },
            { key: 'matrix', label: 'Value/Complexity' },
            { key: 'rice', label: 'RICE' },
          ],
          rows: [
            { aspect: 'Speed', matrix: 'Minutes, in a workshop', rice: 'Requires real reach and effort estimates' },
            { aspect: 'Precision', matrix: 'Rough, ordinal', rice: 'More granular, still an estimate' },
            { aspect: 'Best for', matrix: 'A fast first pass across many ideas', rice: 'Defending a specific ranked order to stakeholders' },
          ],
        },
      },
      {
        type: 'paragraph',
        text: 'Teams often run both in sequence — the matrix trims a long list to a shortlist, then RICE ranks the shortlist properly.',
      },
    ],
  },
  {
    id: 'opportunity-scoring',
    name: 'Opportunity Scoring',
    category: 'Definition',
    tagline: 'Rank branches of a discovery tree before betting engineering time.',
    summary:
      'A lightweight scoring pass — market size, reachable evidence, and urgency — applied to the opportunities on an Opportunity Solution Tree, so a team funds the branch most worth exploring rather than the branch someone happened to pitch first. It guards against a tree that looks rigorous but is secretly explored in whatever order ideas occurred to the team.',
    points: [
      'Size — how many customers plausibly have this opportunity',
      'Evidence — how much of what’s known comes from real interviews versus assumption',
      'Urgency — how time-sensitive the opportunity is relative to others on the tree',
    ],
    whenNotToUse:
      'Redundant on a tree with only one live opportunity — the scoring only earns its place once several branches are competing for the same limited research and engineering time.',
    detail: [
      { type: 'subheading', text: 'Applying it to a tree' },
      {
        type: 'steps',
        items: [
          { title: 'List every opportunity at the current level', body: 'Siblings under the same outcome, not the whole tree at once.' },
          { title: 'Score size, evidence, urgency', body: 'A rough 1–3 or low/med/high pass is enough — this isn’t meant to survive scrutiny like RICE.' },
          {
            title: 'Fund the top branch’s solutions',
            body: 'Move engineering and research attention there first, explicitly leaving the rest visible but parked.',
          },
        ],
      },
      {
        type: 'callout',
        kind: 'example',
        title: 'Small but urgent beats large but thin',
        body: 'On a hospital shift-scheduling tool’s tree, “nurses can’t tell if a shift swap actually went through” might score low on size but high on urgency and evidence — three separate interview rounds surfaced it unprompted — enough to move it ahead of a larger but thinly-evidenced opportunity.',
      },
      {
        type: 'callout',
        kind: 'warning',
        title: 'Scores go stale too',
        body: 'A branch that scored low before four new interviews surfaced it repeatedly should be re-scored, not left where it was first ranked.',
      },
    ],
  },

  // --- Design ---
  {
    id: 'double-diamond',
    name: 'Double Diamond',
    category: 'Design',
    tagline: 'Diverge then converge, twice.',
    summary:
      "Two diamonds, each a diverge-then-converge cycle: Discover and Define explore then narrow the right problem, Develop and Deliver explore then narrow the right solution. The shape is the point — a visible reminder that both problem and solution deserve to be opened up wide before either gets locked down.",
    points: [
      'Discover — diverge to explore the problem space widely',
      'Define — converge on the specific problem worth solving',
      'Develop — diverge to explore a range of solutions',
      'Deliver — converge on the one solution that ships',
    ],
    origin: 'The Design Council (UK), published 2005; revised in 2019 to add outer principles and framing conditions',
    whenNotToUse:
      'A poor fit for well-understood, low-ambiguity work — reopening the problem space with a full Discover phase for a clearly-scoped bug fix is process for its own sake.',
    detail: [
      { type: 'subheading', text: 'What each phase actually contains' },
      {
        type: 'table',
        data: {
          caption: 'The four phases',
          columns: [
            { key: 'phase', label: 'Phase' },
            { key: 'mode', label: 'Mode' },
            { key: 'activity', label: 'Typical activity' },
          ],
          rows: [
            { phase: 'Discover', mode: 'Diverge', activity: 'User research, interviews, market scanning' },
            { phase: 'Define', mode: 'Converge', activity: 'Synthesis, problem statements, personas' },
            { phase: 'Develop', mode: 'Diverge', activity: 'Ideation, prototyping, testing directions' },
            { phase: 'Deliver', mode: 'Converge', activity: 'Testing, iterating, launch, final refinement' },
          ],
        },
      },
      {
        type: 'callout',
        kind: 'warning',
        title: 'One diamond wearing the name of two',
        body: 'Collapsing the first diamond and jumping straight to Develop with a solution already assumed is functionally a single diamond — the shape only does its job if convergence in Define is a genuine narrowing, not a formality before the “real” work starts.',
      },
      {
        type: 'paragraph',
        text: 'The 2019 revision added framing conditions around the outside — leadership, methods, and setting the right challenge — a reminder that the diamond describes a process, not a full methodology on its own.',
      },
    ],
  },
  {
    id: 'story-mapping',
    name: 'Story Mapping',
    category: 'Design',
    tagline: 'Lay a backlog out horizontally, before slicing it vertically.',
    summary:
      'A user story map arranges the backlog along a horizontal spine — the order a user actually moves through a journey — with supporting detail stacked vertically underneath each step by priority. It fixes a specific gap: a flat, priority-ranked backlog has no concept of “the walking skeleton a release needs to hold together.”',
    points: [
      'Backbone — the big steps of the user’s journey, left to right, in the order they happen',
      'Walking skeleton — the thinnest vertical slice through every step that still forms a usable release',
      'Stacking — more detailed or lower-priority stories piled below each step, deprioritised downward',
    ],
    origin: 'Jeff Patton, developed through the 2000s and set out in User Story Mapping (2014)',
    whenNotToUse:
      'Explains the shape of the practice. If you want a grid to actually fill in, the toolkit carries the artefact.',
    detail: [
      { type: 'subheading', text: 'Why a flat backlog fails' },
      {
        type: 'paragraph',
        text: 'A backlog ranked top-to-bottom by RICE score is a good priority order and a terrible release plan — nothing on it says whether the top rows, shipped in that order, form something a user could use end to end. The horizontal spine answers a different question: does this collection of stories, taken together, tell a complete story?',
      },
      {
        type: 'callout',
        kind: 'example',
        title: 'One thin slice through everything',
        body: 'For a freight-tracking dashboard, the backbone might read Book shipment → Assign carrier → Track in transit → Confirm delivery. The walking skeleton is the thinnest slice through all four — one carrier, one lane, no live map, just a status field — releasable on its own, even though almost every box above and below it is still empty.',
      },
      {
        type: 'callout',
        kind: 'warning',
        title: 'Built once, then just a flat backlog again',
        body: 'Fine as a one-off planning exercise. It stops being a map at all once nobody reopens it — at that point it is just a flat backlog wearing a different shape.',
      },
      {
        type: 'paragraph',
        text: 'Story mapping and vertical slicing are companions — the map decides what the walking skeleton contains; vertical slicing is the discipline of actually building each release as a full thin slice rather than one layer at a time.',
      },
    ],
  },
  {
    id: 'storyboarding',
    name: 'Storyboarding',
    category: 'Design',
    tagline: 'Tell the user’s story in frames, before building a single screen.',
    summary:
      'A short sequence of drawn frames — one scene, one character, one situation moving through time — used to pressure-test a concept’s emotional and situational logic before any interface exists to react to. It catches a different failure than a wireframe does: a storyboard exposes when a “solution” doesn’t actually fit the moment a person is in, which a screen-by-screen flow can hide behind polish.',
    points: [
      'Context frame — where the person is, and what’s happening around them, before the product appears',
      'Trigger frame — the moment the need for the product actually arises',
      'Resolution frame — what changes for the person once the product has done its job',
    ],
    origin: 'Adapted from film and animation storyboarding practice into product and UX design; no single credited inventor in this context',
    whenNotToUse:
      'Has nothing to grip on a purely technical or backend problem with no human moment to depict — storyboarding earns its keep specifically where context and emotion shape whether a solution lands.',
    detail: [
      { type: 'subheading', text: 'Three or four frames is usually enough' },
      {
        type: 'paragraph',
        text: 'Unlike a comic, a product storyboard rarely needs more than three or four frames — the point is to isolate the moment of need and the moment of resolution, not to narrate the whole day. Over-drawing it turns a fast discovery tool into a production task.',
      },
      {
        type: 'callout',
        kind: 'example',
        title: 'The moment before the product',
        body: 'For a podcast-hosting platform, one frame shows a host finishing a late-night recording, dreading the hour it usually takes to write show notes; the next shows them approving an auto-generated transcript and chapter list from their phone before bed; the last shows the episode live the next morning, already searchable, without the host ever opening a laptop. No screen has been designed yet — but the storyboard already says the feature has to work from a phone, at night, in one tap.',
      },
      {
        type: 'callout',
        kind: 'tip',
        title: 'Draw the context, not just the product',
        body: 'A storyboard that starts on the app’s home screen has skipped the context that explains why anyone opened it.',
      },
      {
        type: 'paragraph',
        text: 'Once a resolution frame feels earned, storyboarding hands off cleanly to wireframing — the structural “what goes where” question is easier to answer once the emotional shape of the journey is already settled.',
      },
    ],
  },
  {
    id: 'heart',
    name: 'HEART Framework',
    abbev: 'HEART',
    category: 'Design',
    tagline: 'Five UX dimensions, each tied to a metric before it’s tied to an opinion.',
    summary:
      'Google’s HEART framework forces a UX goal through a funnel — Goal, Signal, Metric — before it’s allowed to become a dashboard number, specifically to stop teams tracking whatever’s easy to measure and calling it “engagement.” A metric with no explicit signal and goal behind it is disqualified, no matter how good it looks trending upward.',
    points: [
      'Happiness — attitudinal: satisfaction, perceived ease, net promoter score',
      'Engagement — depth of involvement: frequency, intensity, breadth of usage',
      'Adoption — new users beginning to use a product or feature',
      'Retention — the rate at which existing users come back over time',
      'Task success — efficiency, effectiveness, and error rate on a specific task',
    ],
    origin: 'Kerry Rodden, Hilary Hutchinson and Xin Fu, Google — “Measuring the User Experience on a Large Scale” (CHI, 2010)',
    whenNotToUse:
      'Not every dimension applies to every product — forcing all five onto a single-purpose utility tool with no real retention story produces a scorecard with padding rows nobody actually watches.',
    detail: [
      { type: 'subheading', text: 'The Goal-Signal-Metric funnel' },
      {
        type: 'paragraph',
        text: 'HEART’s real discipline sits underneath the five letters: for each dimension a team cares about, first name the Goal in plain language, then the Signal — the raw, observable behaviour that would indicate progress — and only then the Metric computed from that signal. Skipping straight to a metric without naming the goal and signal first is how vanity metrics end up on a UX dashboard.',
      },
      {
        type: 'table',
        data: {
          caption: 'One dimension, worked through the funnel',
          columns: [
            { key: 'stage', label: 'Stage' },
            { key: 'example', label: 'Example' },
          ],
          rows: [
            { stage: 'Goal', example: 'Make first-time setup feel effortless' },
            { stage: 'Signal', example: 'Whether a new user completes setup without abandoning or contacting support' },
            { stage: 'Metric', example: '% of new signups completing setup within one session, with no support ticket' },
          ],
        },
      },
      {
        type: 'callout',
        kind: 'warning',
        title: 'Not every dimension needs a metric',
        body: 'The framework’s own guidance is to pick the two or three dimensions that matter most for the current goal, not to force all five onto a dashboard uniformly.',
      },
      {
        type: 'paragraph',
        text: 'HEART complements the AARRR funnel elsewhere on this page rather than replacing it — AARRR tracks a user’s journey through the business, HEART tracks the quality of the experience at any single point along it.',
      },
    ],
  },

  // --- Delivery ---
  {
    id: 'mvp',
    name: 'Minimum Viable Product',
    abbev: 'MVP',
    category: 'Delivery',
    tagline: 'Ship the smallest thing that teaches you something.',
    summary:
      'Build the smallest version of a product that still delivers real value, so assumptions get tested against actual behaviour instead of debated in a room. Runs on the Build–Measure–Learn loop: ship a small bet, observe what real usage says, and let that evidence — not opinion — decide what happens next.',
    points: [
      'Build — the smallest version that can actually be tested',
      'Measure — real usage, not stated preference',
      'Learn — an assumption validated or killed, cheaply',
    ],
    usedOn: ['/day/4'],
    origin: 'The term predates Eric Ries — coined by Frank Robinson in 2001 — but the Build–Measure–Learn framing was popularised by Ries in The Lean Startup (2011)',
    whenNotToUse:
      'The second word is doing the harder work — “viable” is not permission to cut corners just because “minimum” sounds like one; an MVP that fails on trust, safety, or basic usability hasn’t been minimised, it’s been broken.',
    detail: [
      {
        type: 'callout',
        kind: 'warning',
        title: '“Minimum” isn’t an excuse for “low-quality”',
        body: 'Building too much was never the real risk here. Using “MVP” as cover to ship something broken or untrustworthy, on the theory that quality can wait, is — and viability is the half of the term whose entire job is to rule that out.',
      },
      { type: 'subheading', text: 'MVP vs MLP' },
      {
        type: 'paragraph',
        text: 'Some teams distinguish a Minimum Lovable Product — deliberately including one delight-driving detail (in Kano’s terms, an attractive quality) alongside the bare functional core, on the theory that a purely functional MVP can validate demand while still failing to generate the word-of-mouth a real launch needs.',
      },
      {
        type: 'table',
        data: {
          caption: 'How the variants relate',
          columns: [
            { key: 'term', label: 'Term' },
            { key: 'adds', label: 'Adds to the core idea' },
          ],
          rows: [
            { term: 'MVP', adds: 'The smallest testable version of the riskiest assumption' },
            { term: 'MLP', adds: 'MVP plus one deliberately delightful detail' },
            { term: 'MMP', adds: 'MVP plus whatever’s needed to actually sell it, not just test it' },
          ],
        },
      },
    ],
  },
  {
    id: 'vertical-slicing',
    name: 'Vertical Slicing',
    category: 'Delivery',
    tagline: 'Ship a thin sliver through every layer, not a thick layer with nothing above it.',
    summary:
      'A vertical slice cuts through every layer a feature touches — UI, logic, data — end to end, however thin, rather than building one complete layer before starting the next. Horizontal slicing is the alternative it exists to prevent: weeks of “progress” on the backend, with nothing a user or a stakeholder can actually see or test.',
    points: [
      'End to end — every slice touches UI, logic, and data, however minimally',
      'Demoable — a finished slice, however narrow, is something a real person can click through',
      'Independent-ish — each slice should be releasable roughly on its own, not entangled with the next',
    ],
    whenNotToUse:
      'Best on features large enough to have a middle. A change that is already a day’s work needs shipping, not slicing. The toolkit has the worksheet for the ones that qualify.',
    detail: [
      { type: 'subheading', text: 'Horizontal vs vertical, in one example' },
      {
        type: 'paragraph',
        text: 'Building a food-delivery app horizontally might mean: sprint one, the entire database schema; sprint two, every API endpoint; sprint three, the UI on top. Nothing is demoable until sprint three, and any wrong assumption made in sprint one is baked into two sprints of downstream work before anyone notices.',
      },
      {
        type: 'callout',
        kind: 'example',
        title: 'The same feature, sliced thin',
        body: 'Sliced vertically instead: sprint one ships one restaurant, one item, one payment method, a hard-coded delivery address — a real, working, narrow path through every layer. Sprint two widens it. Every sprint after the first is demoable and, if priorities shift, shippable on its own.',
      },
      {
        type: 'callout',
        kind: 'warning',
        title: 'A slice that’s still secretly horizontal',
        body: 'A “vertical” slice where the UI layer is a static mock with no real logic or data underneath isn’t one. The test is whether a user’s click actually does something, not whether the screen exists.',
      },
      {
        type: 'paragraph',
        text: 'This is what makes vertical slicing the natural execution unit underneath a story map’s walking skeleton (elsewhere on this page) — the map decides what the thin slice contains, vertical slicing is the discipline of actually building it thin, all the way through.',
      },
    ],
  },
  {
    id: 'definition-of-done',
    name: 'Definition of Done',
    abbev: 'DoD',
    category: 'Delivery',
    tagline: 'A shared bar for “finished” — agreed once, applied every time.',
    summary:
      'A Definition of Done is a checklist a whole team commits to before any story is called complete — tested, reviewed, documented, deployed to the right environment — so that “done” doesn’t quietly mean five different things to five different people. Its most common failure is scope drift: a DoD written once and then silently ignored under deadline pressure, at which point it isn’t a definition of anything.',
    points: [
      'Team-wide — one shared bar, not a personal standard each engineer applies differently',
      'Binary — a story is either done against every line, or it isn’t done at all',
      'Distinct from acceptance criteria — DoD applies to every story; acceptance criteria are specific to one',
    ],
    origin: 'Formalised within Scrum practice; popularised through agile literature from the mid-2000s onward',
    whenNotToUse:
      'Only holds if the team wrote it and the team can change it. A list inherited from another team, or handed down from above, gets quietly ignored inside a sprint. The fill-in version lives in the toolkit.',
    detail: [
      { type: 'subheading', text: 'DoD vs acceptance criteria' },
      {
        type: 'table',
        data: {
          caption: 'Two different questions',
          columns: [
            { key: 'aspect', label: 'Aspect' },
            { key: 'dod', label: 'Definition of Done' },
            { key: 'ac', label: 'Acceptance criteria' },
          ],
          rows: [
            { aspect: 'Applies to', dod: 'Every story, uniformly', ac: 'One specific story only' },
            { aspect: 'Written by', dod: 'The whole team, once, up front', ac: 'Whoever writes that story, each time' },
            {
              aspect: 'Example',
              dod: '“Has automated tests, is code-reviewed, is deployed to staging”',
              ac: '“Given a logged-out user, clicking Pay redirects to login first”',
            },
          ],
        },
      },
      {
        type: 'callout',
        kind: 'warning',
        title: 'The quiet erosion',
        body: 'Ask which Definition of Done actually failed here: a bad one, or a good one quietly skipped under deadline pressure? It is almost always the second — “we’ll add tests after launch” is how a team’s Done stops meaning done, one exception at a time.',
      },
      {
        type: 'callout',
        kind: 'tip',
        title: 'Short enough to memorise',
        body: 'A useful DoD is short enough for everyone on the team to hold in their head — one that needs its own reference document to check against is really a process, not a definition.',
      },
    ],
  },
  {
    id: 'now-next-later',
    name: 'Now/Next/Later Roadmap',
    category: 'Delivery',
    tagline: 'A roadmap in three horizons, not a calendar of promises.',
    summary:
      'The horizon format replaces dated commitments with three bands of certainty, matching the honesty of the information a team actually has. Nothing here enforces a limit, and that is the actual weak point: Later quietly turns into a graveyard nobody revisits, while Now swells past capacity because no rule caps how much can sit in the most-committed column.',
    points: [
      'Now — actively being worked on, detailed enough to execute',
      'Next — researched enough to commit to, not yet started',
      'Later — worth tackling eventually, deliberately vague',
      'Initiatives, not features — a card names a problem, not a shipped thing',
    ],
    usedOn: ['/day/4'],
    origin: 'Janna Bastow, ProdPad co-founder, who developed the format around 2012 as an alternative to dated, Gantt-style roadmaps',
    whenNotToUse:
      'Does someone in the room have a contractual date to hit? Then this is the wrong artefact. The horizons are deliberately undated, and no amount of goodwill turns a horizon into a commitment.',
    detail: [
      {
        type: 'callout',
        kind: 'warning',
        title: 'Now, overloaded',
        body: 'Without an explicit limit, “Now” tends to accumulate everything anyone feels urgent about, defeating the format’s purpose — a Now column with fifteen initiatives communicates as little as a dated Gantt chart did.',
      },
      {
        type: 'callout',
        kind: 'warning',
        title: 'Later, forgotten',
        body: 'The opposite failure — cards drift into Later and are never revisited, quietly becoming a wishlist rather than a genuine horizon a team intends to reach.',
      },
      { type: 'subheading', text: 'What moves a card left' },
      {
        type: 'paragraph',
        text: 'A card only earns its way from Later to Next once there’s real evidence behind it — usually the output of exactly the kind of discovery work an Opportunity Solution Tree or a round of ODI interviews produces (both elsewhere on this page). The horizon format and a discovery practice are meant to run together; without one, “Next” is just as much a guess as “Later” was.',
      },
      {
        type: 'paragraph',
        text: 'It also interacts directly with OKRs (elsewhere on this page) — Now-column initiatives are the natural candidates a team points to when asked which key results a quarter’s OKRs are actually resourced to hit.',
      },
    ],
  },
  {
    id: 'okrs',
    name: 'OKRs',
    abbev: 'OKR',
    category: 'Delivery',
    tagline: 'One ambitious objective, a handful of measurable results underneath it.',
    summary:
      'Objectives and Key Results pair a qualitative, ambitious statement of intent with three to five measurable results that would prove it happened — deliberately graded, not just checked off. Write key results that are really outputs in disguise — “ship feature X” instead of an outcome like “cut time-to-first-value” — and OKRs quietly turn into a roadmap with extra paperwork attached.',
    points: [
      'Objective — qualitative, ambitious, memorable without needing to look it up',
      'Key results — three to five, quantitative, and gradeable, not simply “done” or “not done”',
      'Committed vs aspirational — some OKRs are expected at 1.0, others are stretch goals scored honestly below it',
      'Scoring — typically 0.0–1.0, with roughly 0.7 treated as a healthy, honestly-stretched result',
    ],
    usedOn: ['/day/2', '/day/3'],
    origin: 'Andy Grove at Intel in the 1970s and 1980s; brought to Google and popularised industry-wide by John Doerr, Measure What Matters (2018)',
    whenNotToUse:
      'Adds real overhead for a very small team already working from a single, unambiguous priority — the grading ceremony earns its keep once there are enough people that alignment genuinely can’t be held in one person’s head.',
    detail: [
      { type: 'subheading', text: 'Grading, not checking off' },
      {
        type: 'paragraph',
        text: 'Unlike a task list, a key result is scored 0.0–1.0 at the end of the period, and — in the aspirational model Google made famous — a 0.7 is a good result, not a disappointing one. A team consistently scoring 1.0 across every objective is usually read as evidence the objectives were sandbagged, not that the team is excelling.',
      },
      {
        type: 'table',
        data: {
          caption: 'A good key result vs a disguised task',
          columns: [
            { key: 'type', label: 'Type' },
            { key: 'example', label: 'Example' },
          ],
          rows: [
            { type: 'Output (weak)', example: '“Ship the new onboarding flow”' },
            { type: 'Outcome (strong)', example: '“Cut time-to-first-value from 6 minutes to 2”' },
          ],
        },
      },
      {
        type: 'callout',
        kind: 'warning',
        title: 'Sandbagging',
        body: 'An over-ambitious OKR rarely causes the damage people expect. A quietly conservative one does — set low enough to guarantee a comfortable 1.0 at review time, which defeats the entire point of grading honestly below it.',
      },
      {
        type: 'callout',
        kind: 'tip',
        title: 'Cap it at three to five',
        body: 'More than three to five objectives per team per quarter and OKRs stop functioning as a filter for what matters most, and start functioning as a restated backlog.',
      },
    ],
  },

  // --- Growth ---
  {
    id: 'north-star',
    name: 'North Star Framework',
    abbev: 'NSM',
    category: 'Growth',
    tagline: 'One metric that captures core value delivered.',
    summary:
      'One number sits at the top, chosen because it best represents the value a product actually creates for the people using it, fed by a small set of input metrics a team can move day to day. The real job isn’t the metric itself — it’s getting every function pointed at the same definition of progress, instead of each optimising its own.',
    points: [
      'North Star metric — the single number that best represents value delivered',
      'Input metrics — the smaller, directly-actionable levers that move it',
      'Work → inputs → outcome — every team’s effort traces a line to the top metric',
    ],
    origin:
      'Sean Ellis is credited with coining the term around 2010; Amplitude and John Cutler formalised it into the North Star Framework from 2017 onward',
    whenNotToUse:
      'A single number is a poor fit for a genuinely multi-sided or early-stage product where no one metric yet captures value for every side of the business — forcing a North Star too early can just relabel whichever metric is easiest to move as if it were the most important one.',
    detail: [
      { type: 'subheading', text: 'Choosing one that won’t mislead you' },
      {
        type: 'paragraph',
        text: 'A good North Star reflects customer value, not just company value — revenue is usually a bad choice for exactly this reason, since a company can grow revenue while making the product worse for users. It should also lead business results rather than lag them, and be something the whole company, not just one function, can move.',
      },
      {
        type: 'callout',
        kind: 'warning',
        title: 'The vanity North Star',
        body: 'Total signups or downloads is the choice almost everyone reaches for first — easy to move with spend, easy to put on a slide, and almost entirely disconnected from whether anyone is actually getting value.',
      },
      {
        type: 'table',
        data: {
          caption: 'North Star vs a vanity metric',
          columns: [
            { key: 'aspect', label: 'Aspect' },
            { key: 'northstar', label: 'North Star' },
            { key: 'vanity', label: 'Vanity metric' },
          ],
          rows: [
            { aspect: 'Example', northstar: 'Weekly active editors completing a document', vanity: 'Total signups to date' },
            { aspect: 'Can be inflated by spend?', northstar: 'Not directly', vanity: 'Easily' },
            { aspect: 'Reflects value delivered?', northstar: 'Yes, by design', vanity: 'Not necessarily' },
          ],
        },
      },
      {
        type: 'paragraph',
        text: 'The metric only does its job once input metrics feed it — a North Star with no input tree underneath it is a poster on a wall, not an operating model.',
      },
    ],
  },
  {
    id: 'aarrr',
    name: 'AARRR Metrics',
    abbev: 'AARRR',
    category: 'Growth',
    tagline: 'The pirate metrics funnel.',
    summary:
      'Five funnel stages tracked as one cadence: Acquisition brings someone in, Activation gets them to real value fast, Retention keeps them returning, Referral turns them into a channel, Revenue is where it pays for itself. Its real use is diagnostic — fixating on acquisition while retention quietly leaks is how a product stays busy without ever actually growing.',
    points: [
      'Acquisition — how someone first finds the product',
      'Activation — the first moment they experience real value',
      'Retention — whether they come back without being chased',
      'Referral — whether they bring others along with them',
      'Revenue — where the funnel starts paying for itself',
    ],
    origin: 'Dave McClure, first presented publicly around 2007',
    whenNotToUse:
      'A poor fit for products with no real funnel to speak of — internal tools, or a product with a single all-or-nothing purchase moment — where forcing five pirate-metric stages onto a two-step journey adds structure without adding insight.',
    detail: [
      { type: 'subheading', text: 'Running it as a diagnostic' },
      {
        type: 'paragraph',
        text: 'The practical use of AARRR isn’t reciting the five stages — it’s tracking the conversion rate between each pair of adjacent stages and fixing the single biggest leak before touching anything else. A team that improves Acquisition by 20% while Activation is leaking 60% of new users has just paid more to lose more, faster.',
      },
      {
        type: 'table',
        data: {
          caption: 'Where the biggest leak usually hides',
          columns: [
            { key: 'stage', label: 'Stage' },
            { key: 'leak', label: 'Common leak' },
          ],
          rows: [
            { stage: 'Acquisition → Activation', leak: 'Signups who never reach the first real value moment' },
            { stage: 'Activation → Retention', leak: 'Users who tried it once and never returned' },
            { stage: 'Retention → Referral', leak: 'Genuinely happy users who were simply never asked to refer anyone' },
          ],
        },
      },
      {
        type: 'callout',
        kind: 'warning',
        title: 'Over-investing at the top',
        body: 'Acquisition is the easiest stage to buy your way into with ad spend, and the easiest to report a clean number for — which is exactly why teams gravitate to it even when the real leak sits downstream at Retention.',
      },
      {
        type: 'paragraph',
        text: 'Pairs directly with a North Star metric (elsewhere on this page) — the funnel diagnoses where value is leaking, the North Star states what “value delivered” means in the first place.',
      },
    ],
  },
  {
    id: 'pmf',
    name: 'Product-Market Fit',
    abbev: 'PMF',
    category: 'Growth',
    tagline: 'The market pulling the product out of you, not the other way round.',
    summary:
      'Product-market fit is the state where a product is pulled into a market rather than pushed into it — felt in retention and word-of-mouth before it can be proven on a slide. The recurring failure mode is declaring fit off a growth chart alone: a paid-acquisition curve can go up and to the right for months on a product nobody would miss if it disappeared.',
    points: [
      'Pull, not push — the market is asking for it faster than the team can build it',
      'Retention over acquisition — the signal that actually distinguishes fit from a good marketing spend',
      'A state, not a milestone — fit erodes as the market and competitors move, and has to be re-earned',
    ],
    usedOn: ['/day/4'],
    origin: 'The term is usually traced to Andy Rachleff (formerly of Benchmark), and popularised industry-wide through Marc Andreessen’s writing in the mid-2000s',
    whenNotToUse:
      'Chasing a formal PMF “test” too early — before a product has enough real users for a survey or a retention curve to mean anything — just wastes a research cycle measuring noise.',
    detail: [
      { type: 'subheading', text: 'The Sean Ellis test' },
      {
        type: 'paragraph',
        text: 'One widely used proxy: survey active users with “how would you feel if you could no longer use this product?” and see what share answer “very disappointed.” Sean Ellis’s own benchmark, from surveying dozens of startups, put roughly 40% as the threshold worth paying attention to — below it, a team is very likely optimising a product that hasn’t found its market yet.',
      },
      {
        type: 'callout',
        kind: 'warning',
        title: 'A growth chart isn’t proof',
        body: 'The biggest false signal is a healthy top-of-funnel number sustained by paid acquisition — it can mask a product that would immediately stop growing the moment the spend stopped, which retention data, not signups, is what actually exposes.',
      },
      {
        type: 'table',
        data: {
          caption: 'Signal vs false signal',
          columns: [
            { key: 'check', label: 'Check' },
            { key: 'signal', label: 'What it tells you' },
          ],
          rows: [
            { check: 'Cohort retention curve flattening rather than decaying to zero', signal: 'A real signal of fit' },
            { check: 'Total signups climbing month over month', signal: 'Could be fit — or could just be ad spend' },
            { check: '“Very disappointed” survey share ≥ ~40%', signal: 'A real signal of fit, per Ellis’s benchmark' },
          ],
        },
      },
      {
        type: 'paragraph',
        text: 'Fit isn’t found once and banked — it interacts directly with AARRR and North Star (elsewhere on this page), the ongoing instruments that tell a team whether fit, once found, is holding or quietly slipping.',
      },
    ],
  },
  {
    id: 'hooked',
    name: 'The Hook Model',
    category: 'Growth',
    tagline: 'Four steps, run enough times, and a habit forms without anyone deciding to build one.',
    summary:
      'Nir Eyal’s Hook Model describes how habit-forming products get built one repeated cycle at a time — trigger, action, variable reward, investment — with each pass making the next trigger easier to notice and act on. It’s descriptive as much as prescriptive, which is why it comes bundled with an ethical warning: the same mechanics that build a genuinely useful habit can build a manipulative one, and the model doesn’t tell you which you’ve built.',
    points: [
      'Trigger — external (a notification) at first, internal (boredom, loneliness) once the habit forms',
      'Action — the simplest possible behaviour done in anticipation of a reward',
      'Variable reward — reward that isn’t fully predictable, which is what sustains attention',
      'Investment — the user puts something in — data, content, followers — that increases the value of the next pass through the loop',
    ],
    origin: 'Nir Eyal, set out in Hooked: How to Build Habit-Forming Products (2014)',
    whenNotToUse:
      'Deliberately unsuited to products that succeed by being used rarely. A tax-filing tool or a will-writing service earns its keep through trust and infrequency; engineering a habit into either would be a design failure wearing engagement metrics.',
    detail: [
      { type: 'subheading', text: 'Why variable reward is the load-bearing step' },
      {
        type: 'paragraph',
        text: 'Eyal’s argument leans on the same behavioural research behind slot machines: a reward that arrives every time stops being interesting quickly, while a reward that arrives unpredictably keeps drawing a person back to check. Social feeds, inboxes and streak counters all lean on some version of this.',
      },
      {
        type: 'table',
        data: {
          caption: 'Three reward types Eyal names',
          columns: [
            { key: 'type', label: 'Type' },
            { key: 'example', label: 'Example' },
          ],
          rows: [
            { type: 'Of the tribe', example: 'Social validation — likes, replies, followers' },
            { type: 'Of the hunt', example: 'Material or information rewards — the next post in a feed, a deal' },
            { type: 'Of the self', example: 'A sense of mastery or completion — a streak, a level, a cleared inbox' },
          ],
        },
      },
      {
        type: 'callout',
        kind: 'warning',
        title: 'The manipulation question',
        body: 'The Hook Model’s mechanics look identical whether they help a user do something they already genuinely want to do more easily, or maximise time-on-app regardless of user benefit — the ethical line has to come from outside the model, not from within it.',
      },
    ],
  },
  {
    id: 'crossing-the-chasm',
    name: 'Crossing the Chasm',
    category: 'Growth',
    tagline: 'Early adopters and the mainstream want almost opposite things.',
    summary:
      'Geoffrey Moore’s adaptation of the technology adoption lifecycle names a gap most growth curves gloss over: early adopters buy a vision and will tolerate rough edges to get it, while the early majority buy a solved problem and won’t touch anything that still feels unfinished. Early-adopter enthusiasm feels like momentum. It rarely is — the mainstream market needs a deliberately different pitch, not a louder version of the one that worked on the early adopters.',
    points: [
      'Innovators & early adopters — buy the vision, tolerate the rough edges, want to be first',
      'The chasm — the gap where early success stalls because the pitch that worked doesn’t transfer',
      'Early majority — buy a complete, de-risked solution to a specific problem, not a vision',
      'The beachhead — Moore’s prescription: dominate one narrow niche completely before trying to cross',
    ],
    origin: 'Geoffrey Moore, Crossing the Chasm (1991), adapting Everett Rogers’s technology adoption lifecycle',
    whenNotToUse:
      'Less useful for categories where adoption genuinely is continuous and fast rather than segmented by risk tolerance — the chasm framing assumes a real qualitative gap between adopter groups that not every market has.',
    detail: [
      { type: 'subheading', text: 'The bowling alley strategy' },
      {
        type: 'paragraph',
        text: 'Moore’s prescription for crossing isn’t “broaden the pitch” — it’s the opposite: pick one narrow, specific niche within the early majority and dominate it completely, using that beachhead’s reference customers to knock over the next adjacent niche, the way one pin knocks over the next in bowling.',
      },
      {
        type: 'callout',
        kind: 'example',
        title: 'Narrowing to widen later',
        body: 'A B2B invoicing tool that has thrilled a handful of freelance early adopters might cross by targeting one narrow vertical next — say, independent physiotherapy clinics specifically — solving their invoicing and insurance-claim quirks completely, rather than appealing to “small businesses” broadly at once.',
      },
      {
        type: 'callout',
        kind: 'warning',
        title: 'Reading enthusiasm as momentum',
        body: 'Early adopters forgive gaps the early majority never will, which means their glowing feedback was never a preview of how the broader market is actually going to receive the product.',
      },
      {
        type: 'paragraph',
        text: 'Interacts with positioning (elsewhere on this page) — crossing the chasm usually requires narrowing the positioning archetype being pursued, not broadening it, at exactly the moment growth pressure makes broadening feel tempting.',
      },
    ],
  },
  {
    id: 'van-westendorp',
    name: 'Van Westendorp Price Sensitivity Meter',
    category: 'Growth',
    tagline: 'Four questions that triangulate a price range, without asking “what would you pay?”',
    summary:
      'Peter van Westendorp’s method asks respondents four price questions — too cheap, cheap, expensive, too expensive — and plots the cumulative curves to find a range where price feels fair, rather than a single guessed number. It sidesteps a known problem with asking “what would you pay?” directly: people are unreliable at answering that in the abstract, and tend to lowball it to seem prudent or signal frugality.',
    points: [
      'Too cheap — the price at which quality itself becomes suspect',
      'Cheap — a bargain, but not suspicious',
      'Expensive — starting to feel like a stretch, but still justifiable',
      'Too expensive — a price that rules the product out entirely',
    ],
    origin: 'Peter van Westendorp, presented at the ESOMAR Congress, 1976',
    whenNotToUse:
      'Assumes respondents already understand roughly what the product is and does — for a genuinely novel category with no reference point, the four questions produce answers anchored on nothing real.',
    detail: [
      { type: 'subheading', text: 'Reading the four curves' },
      {
        type: 'paragraph',
        text: 'Each of the four questions is asked of the same sample and plotted as a cumulative percentage curve against price. Where “too cheap” crosses “too expensive” is often read as roughly the optimal price point; the wider crossing of “cheap” against “expensive” marks the range of acceptable prices.',
      },
      {
        type: 'formula',
        expression: 'Acceptable range = where the four cumulative curves cross',
        note: 'Read from a chart, not computed directly — the method is a survey-and-plot technique, not a single-number formula.',
      },
      {
        type: 'callout',
        kind: 'warning',
        title: 'A range, not a verdict',
        body: 'The model outputs a defensible range, not a single correct price — teams that quote “the Van Westendorp price” as one number have usually just picked whichever point in the range they wanted to charge anyway.',
      },
      {
        type: 'callout',
        kind: 'tip',
        title: 'Pair it with real behaviour',
        body: 'Works best alongside actual willingness-to-pay behaviour — a real pricing test at checkout, where possible — since the survey measures perception, not purchasing behaviour under real stakes.',
      },
    ],
  },

  // --- Strategy & Org ---
  {
    id: 'dvfr',
    name: 'DVF → DVFR',
    category: 'Strategy & Org',
    tagline: 'Three classic constraints, plus the one modern practice keeps adding.',
    summary:
      'Desirability, feasibility and viability have to hold at the same time, not tick by in sequence, and a growing body of practice now treats Responsibility as an equally load-bearing fourth lens. Treat them as a checklist to clear one at a time, though, and a product can pass every box on its own and still not actually work — the four were only ever meant to be judged together, on the same version of the product.',
    points: [
      'Desirability — do people actually want this?',
      'Feasibility — can it actually be built and supported?',
      'Viability — does the value it creates keep compounding, not just spike once?',
      'Responsibility — is it a good thing for the world it lands in, not just for the business and the user?',
    ],
    usedOn: ['/day/1', '/day/4'],
    origin:
      'The desirability/feasibility/viability triad is closely associated with design-thinking practice popularised by IDEO from the 2000s onward; Responsibility as an explicit fourth lens is a newer, less standardised addition from responsible-technology practice',
    whenNotToUse:
      'The lenses are constraints to hold together, not gates to clear one after another — a team that “passes” desirability, then tests feasibility on its own, has already missed the point. What matters is whether all four are true of the same version of the product, at once.',
    detail: [
      { type: 'subheading', text: 'Why simultaneity matters more than order' },
      {
        type: 'paragraph',
        text: 'The triad is often taught as a sequence — check desirability, then feasibility, then viability — because that’s the order a pitch deck usually presents it in. In practice the three trade off constantly and have to be renegotiated together: a feasibility constraint can force a narrower, less desirable version of a feature, which in turn changes whether it’s still viable at the smaller scope.',
      },
      {
        type: 'table',
        data: {
          caption: 'Where each lens usually gets missed',
          columns: [
            { key: 'lens', label: 'Lens' },
            { key: 'blind', label: 'Common blind spot' },
          ],
          rows: [
            { lens: 'Desirability', blind: 'Tested with an unrepresentative early-adopter sample, not the eventual mainstream market' },
            { lens: 'Feasibility', blind: 'Assessed against today’s engineering capacity, ignoring what breaks at ten times the scale' },
            { lens: 'Viability', blind: 'Measured over one strong quarter rather than whether the value compounds over years' },
            { lens: 'Responsibility', blind: 'Considered only after launch, when the cheapest point to change course has already passed' },
          ],
        },
      },
      {
        type: 'callout',
        kind: 'tip',
        title: 'Responsibility needs an assigned owner',
        body: 'Desirability, feasibility and viability each already have a natural champion in the room — design, engineering, the business — so they get weighed by default. Responsibility doesn’t; without naming someone accountable for raising it, the fourth lens quietly reverts to nobody’s job.',
      },
    ],
  },
  {
    id: 'positioning-archetypes',
    name: 'Positioning Archetypes & Strategic Dimensions',
    category: 'Strategy & Org',
    tagline: 'Three archetypes, three further axes — real trade-offs, not a free combination.',
    summary:
      'Beyond picking a general positioning archetype — specialist, one-stop shop, or default-for-a-context — a product makes further deliberate trade-offs along scalability-versus-personalisation, continuity-versus-community, and innovation-versus-trust. What’s worth adding here is how these choices actually get revisited in practice, not just named.',
    points: [
      'Archetype first — specialist, one-stop shop, or default-for-a-context, chosen before the finer axes',
      'Then the axes — centricity, connectivity, and certainty, each a trade-off, not a menu',
      'Revisited, not fixed — a position that fit a smaller company can actively work against a larger one',
    ],
    usedOn: ['/day/4'],
    whenNotToUse:
      'Assumes you already know where competitors sit. Pick an archetype before doing that research and you will simply describe where you happen to be standing, then call it a strategy.',
    detail: [
      { type: 'subheading', text: 'Positioning changes as a company scales' },
      {
        type: 'paragraph',
        text: 'A position chosen at ten employees can actively work against the same company at a thousand — a specialist archetype that thrilled a narrow audience can become a ceiling once growth requires either broadening the niche or shifting toward a one-stop-shop archetype instead. Few companies plan for this explicitly; most discover it under growth pressure, well after the original position has calcified into “how we’ve always described ourselves.”',
      },
      {
        type: 'callout',
        kind: 'example',
        title: 'A ceiling built into the original choice',
        body: 'A council permit portal that started variety-based — handling only one type of application, nothing else — faces a real choice once it wants to serve a second council: keep the specialist position and accept a low ceiling, or shift toward needs-based (adding licensing, planning objections) and accept diluting the single-purpose clarity that built the original audience.',
      },
      {
        type: 'callout',
        kind: 'warning',
        title: 'Never revisited',
        body: 'Was this archetype chosen for the company as it is now, or the company as it was at launch? Team size, funding and the competitive set all move; the archetype, left unrevisited, quietly turns into a ceiling instead of a strategy.',
      },
      {
        type: 'paragraph',
        text: 'Pairs with Crossing the Chasm (elsewhere on this page) — the narrowing Moore prescribes to cross the chasm is, in this vocabulary, usually a deliberate temporary shift toward a specialist archetype, loosened again once the beachhead is secure.',
      },
    ],
  },
  {
    id: 'product-strategy-canvas',
    name: 'Product Strategy Canvas',
    category: 'Strategy & Org',
    tagline: 'One page connecting why the company exists to what a team builds next quarter.',
    summary:
      'A one-page artefact that traces a line from company strategy down to a specific set of product initiatives, sitting at a higher altitude than a single initiative’s project canvas. Its usual failure mode is scope confusion with that project canvas — filling in initiative-level detail at the strategy level, which produces a canvas that’s really just a roadmap wearing a strategic-sounding title.',
    points: [
      'Altitude — one level above a single initiative’s project canvas, one level below day-to-day execution',
      'Traceability — every initiative on it should trace back to a stated company strategy, not just a good idea',
      'Living document — revisited on a cadence, not filled in once and archived',
    ],
    usedOn: ['/day/1', '/day/3'],
    whenNotToUse:
      'Redundant for a single-product, single-team company where the project canvas already sits directly underneath company strategy with nothing in between — the extra altitude only earns its place once there are enough initiatives in flight to need a layer above individual projects.',
    detail: [
      { type: 'subheading', text: 'Strategy canvas vs project canvas' },
      {
        type: 'table',
        data: {
          caption: 'Two altitudes, easily confused',
          columns: [
            { key: 'aspect', label: 'Aspect' },
            { key: 'strategy', label: 'Strategy canvas' },
            { key: 'project', label: 'Project canvas' },
          ],
          rows: [
            { aspect: 'Scope', strategy: 'The whole product line, across quarters', project: 'One initiative' },
            { aspect: 'Owner', strategy: 'Product leadership', project: 'A single team or PM' },
            { aspect: 'Revisit cadence', strategy: 'Quarterly, or on major strategic shift', project: 'Per initiative, at kickoff' },
          ],
        },
      },
      {
        type: 'callout',
        kind: 'warning',
        title: 'A strategy canvas isn’t a bigger roadmap',
        body: 'The giveaway that it has slipped into project-canvas territory is specificity — if a box names a particular screen or a particular sprint, that detail belongs one level down, on a project canvas for that initiative, not here.',
      },
      {
        type: 'paragraph',
        text: 'The line worth drawing is strategic, not templated: this canvas should survive a specific initiative getting cancelled without needing to be rewritten, because it describes why the company is pursuing a direction, not which project is currently proving it.',
      },
    ],
  },
  {
    id: 'spotify-model',
    name: 'The Spotify Model',
    category: 'Strategy & Org',
    tagline: 'Squads, tribes, chapters, guilds — a snapshot, not a template.',
    summary:
      'A description of how one company organised engineering as it scaled — autonomous squads grouped into tribes, with chapters and guilds cutting across them sideways for craft and community. The open question this card adds is a practical one: under what conditions is adopting something like it actually worth trying at all.',
    points: [
      'Squad — small, autonomous, owns a mission, not just a set of tasks',
      'Tribe — a handful of related squads, grouped for coordination, not control',
      'Chapter — a discipline lead cutting across squads within a tribe, owning craft, not deadlines',
      'Guild — a voluntary, opt-in community of interest, with no reporting line at all',
    ],
    usedOn: ['/day/5'],
    origin: 'Described publicly by Henrik Kniberg and Anders Ivarsson, “Scaling Agile @ Spotify” (2012)',
    whenNotToUse:
      'Below roughly fifty to a hundred engineers, or with a single product rather than several related ones, the coordination problem squads solve mostly doesn’t exist yet — adopting the structure just adds organisational overhead against a problem the company doesn’t have.',
    detail: [
      { type: 'subheading', text: 'What the labels map to outside Spotify' },
      {
        type: 'paragraph',
        text: 'Stripped of the branding, a tribe is usually just an existing division grouped by product line, a chapter is the discipline lead a matrix org already had before anyone called it that, and a guild is the informal cross-team channel that existed anyway — the vocabulary names structures a company past a certain size tends to grow regardless of what it calls them. What rarely survives the transplant is the harder half underneath each box: real autonomy over what a team works on, not just how it works.',
      },
      {
        type: 'table',
        data: {
          caption: 'A rough signal for whether it’s worth trying',
          columns: [
            { key: 'condition', label: 'Condition' },
            { key: 'favours', label: 'Favours squads when…' },
          ],
          rows: [
            { condition: 'Team size', favours: 'Roughly 50+ engineers — below that, direct coordination usually still works' },
            { condition: 'Product shape', favours: 'Several related but genuinely separable product areas' },
            { condition: 'What’s scarce', favours: 'Coordination and autonomy, more than raw execution speed on one thing' },
          ],
        },
      },
      {
        type: 'callout',
        kind: 'warning',
        title: 'Copied as a chart, not as a decision',
        body: 'Most attempted copies start and end with redrawing reporting lines into squads, tribes, chapters and guilds — the actual decision the original model forces, letting a squad say no to work that doesn’t fit its mission, rarely gets copied at all, because it means leadership giving up a kind of control the org chart alone never took away.',
      },
    ],
  },
]

export const FRAMEWORK_COMPARISON: FrameworkTableData = {
  caption: 'When to reach for each framework across the product lifecycle',
  emphasisKey: 'stage',
  columns: [
    { key: 'framework', label: 'Framework' },
    { key: 'stage', label: 'Best stage' },
    { key: 'question', label: 'Question it answers' },
    { key: 'output', label: 'Typical output' },
  ],
  rows: [
    { framework: 'Jobs to be Done', stage: 'Discovery', question: 'Why would anyone use this?', output: 'Job statements' },
    {
      framework: 'Outcome-Driven Innovation',
      stage: 'Discovery',
      question: 'Which outcome is most under-served?',
      output: 'Ranked opportunity scores',
    },
    {
      framework: 'Working Backwards',
      stage: 'Discovery',
      question: 'What should we build, from the customer in?',
      output: 'Press release + FAQ',
    },
    {
      framework: 'Opportunity Solution Tree',
      stage: 'Discovery',
      question: 'Which opportunities are worth solving?',
      output: 'Opportunity map',
    },
    { framework: 'Lean Canvas', stage: 'Discovery', question: 'Is there a viable business here at all?', output: 'One-page business model' },
    {
      framework: 'Impact Mapping',
      stage: 'Discovery',
      question: 'Who has to behave differently to hit this goal?',
      output: 'Actor/impact map',
    },
    { framework: 'RICE', stage: 'Definition', question: 'What do we build first?', output: 'Ranked backlog' },
    { framework: 'ICE', stage: 'Definition', question: 'What do we triage first, fast?', output: 'Quick-scored shortlist' },
    { framework: 'MoSCoW', stage: 'Definition', question: 'What’s actually in scope this round?', output: 'Scope boundary' },
    { framework: 'Kano', stage: 'Definition', question: 'Which features matter most, and how?', output: 'Feature tiers' },
    {
      framework: 'Value/Complexity Matrix',
      stage: 'Definition',
      question: 'What’s the obvious quick win?',
      output: 'Quadrant plot',
    },
    {
      framework: 'Opportunity Scoring',
      stage: 'Definition',
      question: 'Which branch of the tree first?',
      output: 'Ranked opportunities',
    },
    { framework: 'Double Diamond', stage: 'Design', question: 'How do we move from problem to ship?', output: 'Process map' },
    {
      framework: 'Story Mapping',
      stage: 'Design',
      question: 'Does this backlog form a coherent release?',
      output: 'User story map',
    },
    { framework: 'Storyboarding', stage: 'Design', question: 'Does this concept fit the moment?', output: 'Frame sequence' },
    { framework: 'HEART', stage: 'Design', question: 'Is the experience actually improving?', output: 'Goal-signal-metric tree' },
    { framework: 'MVP', stage: 'Delivery', question: 'Is this worth building further?', output: 'Validated (or killed) assumption' },
    { framework: 'Vertical Slicing', stage: 'Delivery', question: 'Can we demo this sprint?', output: 'A thin, working release' },
    {
      framework: 'Definition of Done',
      stage: 'Delivery',
      question: 'Is this story actually finished?',
      output: 'A team-wide bar for done',
    },
    {
      framework: 'Now/Next/Later',
      stage: 'Delivery',
      question: 'What are we telling people we’re doing?',
      output: 'Three-horizon roadmap',
    },
    { framework: 'OKRs', stage: 'Delivery', question: 'Are we aiming at, and hitting, the right outcomes?', output: 'Graded objectives' },
    { framework: 'North Star + AARRR', stage: 'Growth', question: 'Is value compounding?', output: 'Metric tree' },
    {
      framework: 'Product-Market Fit',
      stage: 'Growth',
      question: 'Would users be devastated to lose this?',
      output: 'Retention curve / survey score',
    },
    { framework: 'Hooked', stage: 'Growth', question: 'Why do people come back without being asked?', output: 'Habit loop map' },
    { framework: 'Crossing the Chasm', stage: 'Growth', question: 'Why did early traction stall?', output: 'Beachhead segment' },
    { framework: 'Van Westendorp', stage: 'Growth', question: 'What should we actually charge?', output: 'Acceptable price range' },
    {
      framework: 'DVF → DVFR',
      stage: 'Strategy & Org',
      question: 'Does this work for the user, the business, and the world at once?',
      output: 'Four-lens pressure test',
    },
    {
      framework: 'Positioning Archetypes',
      stage: 'Strategy & Org',
      question: 'Where do we compete, and where deliberately not?',
      output: 'A named position + trade-offs',
    },
    {
      framework: 'Product Strategy Canvas',
      stage: 'Strategy & Org',
      question: 'How does this quarter’s work ladder up to company strategy?',
      output: 'One-page strategic map',
    },
    {
      framework: 'The Spotify Model',
      stage: 'Strategy & Org',
      question: 'How do we structure as we scale past one team?',
      output: 'Squad/tribe org design',
    },
  ],
}

export const FRAMEWORK_SOURCES = [
  {
    label: 'Design Council, “The Double Diamond: A Universally Accepted Depiction of the Design Process” (2005; framework updated 2019)',
    url: 'https://www.designcouncil.org.uk/our-resources/the-double-diamond/',
  },
  {
    label: 'Sean McBride, “RICE: Simple Prioritization for Product Managers” (Intercom blog, 2016)',
    url: 'https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/',
  },
  {
    label: 'Kerry Rodden, Hilary Hutchinson, Xin Fu, “Measuring the User Experience on a Large Scale” (Google Research / CHI, 2010)',
    url: 'https://research.google/pubs/measuring-the-user-experience-on-a-large-scale-user-centered-metrics-for-web-applications/',
  },
  {
    label: 'Jeff Patton, “The New Backlog” (story mapping)',
    url: 'https://www.jpattonassociates.com/the-new-backlog/',
  },
  {
    label: 'Gojko Adzic, Impact Mapping',
    url: 'https://www.impactmapping.org/',
  },
  {
    label: 'Ash Maurya, Lean Canvas',
    url: 'https://leanspark.ai/leancanvas',
  },
  {
    label: 'Teresa Torres, “What Is Opportunity Solution Tree?” (Product Talk)',
    url: 'https://www.producttalk.org/opportunity-solution-tree/',
  },
  {
    label: 'Colin Bryar and Bill Carr, Working Backwards (2021)',
    url: 'https://www.workingbackwards.com/',
  },
  {
    label: 'Nir Eyal, Hooked: How to Build Habit-Forming Products (2014)',
    url: 'https://www.nirandfar.com/hooked/',
  },
  {
    label: 'Geoffrey Moore, Crossing the Chasm (1991)',
    url: 'https://www.harpercollins.com/products/crossing-the-chasm-3rd-edition-geoffrey-a-moore',
  },
  {
    label: 'John Doerr, “What Is an OKR?” (What Matters)',
    url: 'https://www.whatmatters.com/faqs/okr-meaning-definition-example',
  },
  {
    label: 'Henrik Kniberg and Anders Ivarsson, “Scaling Agile @ Spotify” (2012)',
    url: 'https://blog.crisp.se/wp-content/uploads/2012/11/SpotifyScaling.pdf',
  },
  {
    label: 'Dave McClure, “Startup Metrics for Pirates: AARRR!!!” (2007)',
    url: 'https://www.slideshare.net/dmc500hats/startup-metrics-for-pirates-long-version',
  },
  {
    label: 'Agile Business Consortium, “MoSCoW Prioritisation” (DSDM)',
    url: 'https://www.agilebusiness.org/dsdm-project-framework/moscow-prioritisation.html',
  },
]
