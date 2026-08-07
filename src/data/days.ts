import type { DayContent } from '../types'

// PLACEHOLDER content for all five days. Structure is final; prose is dummy.
// Real lecture content replaces the block arrays in later prompts — the section
// skeleton stays identical so content drops in cleanly.

const LOREM =
  'Placeholder text. This paragraph stands in for the lecturer’s explanation and will be replaced with real course content. It keeps the visual rhythm — measure, leading, and spacing — honest while the layout is reviewed.'

export const DAYS: DayContent[] = [
  {
    n: 1,
    slug: 'day-1',
    title: 'An Introduction to Product Management',
    subtitle:
      'Before a product manager can decide what to build, they have to get honest about what a “digital” product even is, what the job actually involves, and whose problem they’re really solving.',
    accent: 'brand',
    themes: ['Subject overview', 'Product management fundamentals', 'Case study'],
    promise:
      'Where the discipline came from, what a PM actually owns, and where it fits alongside design and engineering — the grounding the rest of the week builds on.',
    meta: [
      { label: 'Theme', value: 'Discovery' },
      { label: 'Duration', value: '~90 min' },
      { label: 'Frameworks', value: 'Jobs to be Done · ODI' },
    ],
    objectives: [
      'Distinguish analogue, electronic, and digital ways of working.',
      'Say what a product manager owns — the “what”, not the “how” or the “when”.',
      'Use Jobs to be Done and Outcome-Driven Innovation to understand what customers actually need.',
    ],
    sources: [
      {
        label: 'Digital Product Management, Day 1 lecture materials — Ujwal Kayande & Luke Chandler (2026)',
        url: '#',
      },
      {
        label: 'Christensen, Hall, Dillon & Duncan, “Know Your Customers’ Jobs to Be Done” (Harvard Business Review, 2016)',
        url: 'https://hbr.org/2016/09/know-your-customers-jobs-to-be-done',
      },
      {
        label: 'Anthony W. Ulwick, “Turn Customer Input into Innovation” (Harvard Business Review, 2002)',
        url: 'https://hbr.org/2002/01/turn-customer-input-into-innovation',
      },
    ],
    sections: [
      {
        id: 'what-is-digital',
        kicker: 'Definitions',
        heading: 'What “digital” actually means',
        intro:
          'It’s worth pausing on the word before using it all week — digital is a way of working, not just the tools an organisation owns.',
        blocks: [
          {
            type: 'spectrum',
            stages: [
              {
                label: 'Analogue',
                note: 'The organisation doesn’t use technology effectively to work toward its objectives.',
              },
              {
                label: 'Electronic',
                note: 'It uses IT and the web to work more efficiently — but as a faster version of the same old process.',
              },
              {
                label: 'Digital',
                note: 'It uses social, mobile, analytics, and cloud together to generate ideas and build collaborative solutions that actively advance its objectives.',
              },
            ],
          },
          {
            type: 'callout',
            kind: 'example',
            title: 'The late bus test',
            body: 'Imagine a bus running twenty minutes late. An analogue organisation has a printed timetable that’s just wrong. An electronic one puts the same wrong timetable on a website. A digital one’s app knows the bus is late, tells you it’s sorry, tells you exactly how late, and gives you enough notice to grab a coffee. Nothing about the lateness changed — the organisation used data and connectivity to turn a bad moment into a manageable one.',
          },
          {
            type: 'paragraph',
            text: 'That’s the bar. Digital product management is the discipline of deciding what to build to clear it, consistently, for real customers.',
          },
          {
            type: 'quote',
            quote:
              'Digital technology is the most malleable resource at the world’s disposal to overcome constraints and re-imagine everyday work and life.',
            attribution: 'Satya Nadella, CEO of Microsoft',
          },
        ],
      },
      {
        id: 'what-a-pm-does',
        kicker: 'The role',
        heading: 'What a product manager actually does',
        intro:
          'Strip away the job-title confusion first, because it’s real: what one company calls “Product Manager”, another calls something else entirely.',
        blocks: [
          {
            type: 'steps',
            items: [
              { title: 'Decide what to make', body: 'Choose which products and features are worth building.' },
              {
                title: 'Ensure they get made',
                body: 'Make sure the right things actually ship — without owning how or when.',
              },
              {
                title: 'Understand real usage',
                body: 'Learn how people actually use the product once it’s out, and feed that back in.',
              },
            ],
          },
          {
            type: 'paragraph',
            text: 'That leads to the single most important distinction in the discipline: PMs define the “what”, not the “when” or the “how”. When something ships and how it’s built technically is the engineering team’s job. A PM doing that job instead of their own is doing someone else’s work badly while leaving their own undone. In practice a PM is an absolute generalist, responsible for turning a good technology team into a great one — neither an order-giver nor an order-taker, but a facilitator who makes the right things happen, often without direct authority over the people making them happen.',
          },
          {
            type: 'table',
            data: {
              caption: '“Product Manager” means different things at different companies',
              columns: [
                { key: 'company', label: 'Company' },
                { key: 'meaning', label: 'What “PM” tends to mean' },
              ],
              rows: [
                { company: 'Microsoft', meaning: 'Program Management (historically)' },
                { company: 'Google, eBay, Facebook', meaning: 'Product Management (the sense this course means)' },
                { company: 'Amazon', meaning: 'Often “Technical Product Manager”' },
                { company: 'Google (also)', meaning: '“Program Managers” — really project managers, not this PM' },
              ],
            },
          },
          {
            type: 'paragraph',
            text: 'Everyone — sales, the founder, the board, your users, your engineers — has an opinion about what to build next; everyone is a backseat product manager. Which is exactly why the job is hard, and exactly why it exists.',
          },
          {
            type: 'quote',
            quote:
              'Product management … is still a young and rather ill-defined discipline… Some argue it’s not even a distinct discipline these days. In the startup world, people become PMs by default rather than design.',
            attribution: 'Intercom on Product Management',
          },
        ],
      },
      {
        id: 'saying-no',
        kicker: 'The hardest skill',
        heading: 'Saying no',
        intro:
          'If one skill separates a working PM from a struggling one, it’s this: you have to be great at saying no. Not “maybe.” Not “later.” No.',
        blocks: [
          {
            type: 'pressure',
            center: 'What we should build',
            forces: [
              'What sponsors and founders want',
              'What competitors already have',
              'What customers are asking for',
              'What the board wants you to focus on',
              'What your biggest customers will pay for',
              'What your own product team wants to build',
            ],
          },
          {
            type: 'paragraph',
            text: 'The overlap of all of these — not any single one — is roughly where the things worth building actually sit. A PM who just does whatever the loudest voice wants isn’t doing product management; they’re doing whichever job that voice holds. The discipline is in weighing all six and being willing to disappoint some of them, on purpose, in service of the product.',
          },
        ],
      },
      {
        id: 'gall',
        kicker: 'Mental model',
        heading: 'Start simple: Gall’s Law',
        blocks: [
          {
            type: 'quote',
            quote:
              'A complete system that works is invariably found to have evolved from a simple system that worked. A complex system designed from scratch never works and cannot be made to work. You have to start over, beginning with a working simple system.',
            attribution: 'John Gall',
          },
          {
            type: 'paragraph',
            text: 'Imagine building a car from scratch — no parts, no plans, just a block of metal, a few tools, and your imagination. Almost nobody produces a working car that way. What they can do is build something simple that works — a cart with wheels — and evolve it toward something as complex as a car. The question worth asking constantly: are you designing a complex system from scratch, or could you start with a simpler version that already works and build on top of it?',
          },
          {
            type: 'spectrum',
            stages: [{ label: 'Block of metal' }, { label: 'Cart' }, { label: 'Bicycle' }, { label: 'Car' }],
          },
        ],
      },
      {
        id: 'where-decisions-sit',
        kicker: 'Strategy',
        heading: 'Where product decisions sit',
        intro:
          'Product decisions don’t happen in a vacuum — they sit beneath organisation-level decisions, and the best product thinking connects the two.',
        blocks: [
          {
            type: 'paragraph',
            text: 'Organisation-level decisions answer: what is the purpose of your organisation? That spans purpose and values, strategy, understanding of the customer, resourcing, governance, and the roadmap that ties it together. Product-level decisions answer a narrower question — what experience do we need to deliver? — and the answer has to satisfy three constraints at once.',
          },
          {
            type: 'triad',
            variant: 'venn',
            center: 'The experience',
            caption:
              'Distinct from the landing page’s valuable/usable/feasible/viable lens — this is the three-way desirability/viability/feasibility test for a single product decision.',
            nodes: [
              { label: 'Desirability', desc: 'Do people actually want this? (customer)' },
              { label: 'Viability', desc: 'Does it work commercially for us? (business)' },
              { label: 'Feasibility', desc: 'Can we build and support it? (technology + people)' },
            ],
          },
          {
            type: 'callout',
            kind: 'info',
            title: 'Miss one and it fails differently',
            body: 'Desirable but not feasible is a wish. Feasible but not desirable is wasted engineering. Desirable and feasible but not viable is a great feature that quietly bankrupts the business. Great product management finds the intersection of all three — and connects it back to why the organisation exists.',
          },
        ],
      },
      {
        id: 'competency-model',
        kicker: 'The craft',
        heading: 'The PM core competency model',
        intro:
          'No single skill makes a great PM — it’s a small set of competencies working together, none fully substituting for another.',
        blocks: [
          {
            type: 'cards',
            items: [
              { title: 'Vision & strategy', body: 'What does the world look like in three years, and how do we get there?' },
              { title: 'Understanding', body: 'Users, competitors, market — genuinely data-driven, not data-decorated.' },
              { title: 'Technology', body: 'Knowing what’s possible (and not) today, without necessarily writing the code.' },
              { title: 'Decisions & process', body: 'Forcing teams to decide and move deliberately instead of stalling in ambiguity.' },
              {
                title: 'Collaborating & communicating',
                body: 'To and with stakeholders, management, and the team — constantly, both directions.',
              },
              { title: 'The software lifecycle', body: 'How to create, deliver, test, and iterate on software, end to end.' },
            ],
          },
          {
            type: 'callout',
            kind: 'tip',
            title: 'And also…',
            body: 'The long tail that never makes the job description but shows up constantly: legal, privacy and security; finance and budgeting; vendor management and contracts; patents and IP; talks and slide decks; mockups, sketches and user flows; motivation and leadership; reading and writing constantly; and running meetings that produce decisions instead of just discussion.',
          },
        ],
      },
      {
        id: 'flywheel',
        kicker: 'Mental model',
        heading: 'The product flywheel',
        intro:
          'Products aren’t built once and left alone — they improve continuously from real usage data. A PM’s job is to optimise the spin of that flywheel.',
        blocks: [
          {
            type: 'triad',
            variant: 'balance',
            center: 'Flywheel',
            caption:
              'Push too hard on any one and the other two suffer — the craft is keeping all three turning together, release after release.',
            nodes: [
              { label: 'Delivery date', desc: 'How fast it ships' },
              { label: 'Quality', desc: 'How good it is' },
              { label: 'Features', desc: 'How much it does' },
            ],
          },
          {
            type: 'quote',
            quote: 'The main thing is to keep the main thing the main thing.',
            attribution: 'Jim Barksdale, CEO, Netscape Communications',
          },
        ],
      },
      {
        id: 'understanding-customers',
        kicker: 'Two frameworks',
        heading: 'Understanding what customers actually need',
        intro:
          'This week circles back to one uncomfortable truth: customers are bad at telling you what to build, and good at telling you what’s wrong with their lives. Two complementary frameworks take that seriously.',
        blocks: [
          {
            type: 'paragraph',
            text: 'Jobs to be Done. Clayton Christensen and colleagues argue that most innovation fails because companies obsess over correlational data — demographics, psychographics, “customers like this also bought that” — when what drives a purchase is causal: the progress a customer is trying to make in a circumstance. When we buy a product, we’re “hiring” it to do a job. Do it well and we hire it again; do it badly and we fire it and look for an alternative.',
          },
          {
            type: 'callout',
            kind: 'example',
            title: 'The dining room table',
            body: 'A builder of downsizer condos couldn’t work out why units with all the “right” features weren’t selling — until interviews revealed buyers kept getting stuck on what to do with their old dining room table. It wasn’t a furniture problem. The table represented family and memory — everything that made moving feel like a loss. The real job wasn’t “buy a smaller home with nice finishes”; it was “make peace with this transition without losing what the old home meant.” No granite countertop was ever going to solve that.',
          },
          {
            type: 'paragraph',
            text: 'The lesson: don’t just ask what feature someone wants. Ask what progress they’re trying to make, in their actual circumstance — functionally, socially, and emotionally — and design for that.',
          },
          {
            type: 'paragraph',
            text: 'Outcome-Driven Innovation. Anthony Ulwick’s approach starts from a sharper insight: customers are good at describing outcomes and bad at designing solutions. Ask what they want built and you get incremental, “me-too” ideas. Ask what they want the product to do for them — the outcome, not the mechanism — and you get raw material an R&D team can work with.',
          },
          {
            type: 'steps',
            items: [
              {
                title: 'Plan outcome-based interviews',
                body: 'Deconstruct the process the product is part of, and talk to the people who actually use it.',
              },
              {
                title: 'Capture desired outcomes',
                body: 'Translate every solution a customer describes into the underlying outcome by repeatedly asking why they want it.',
              },
              { title: 'Organise the outcomes', body: 'Group them under each step of the process.' },
              {
                title: 'Rate importance and satisfaction',
                body: 'Score each outcome 1–10 by survey, then compute the opportunity.',
              },
              {
                title: 'Jump-start innovation',
                body: 'Generate ideas, segment the market, and define competitive position from the highest-opportunity outcomes.',
              },
            ],
          },
          {
            type: 'formula',
            expression: 'Opportunity = Importance + (Importance − Satisfaction)',
            note: 'High-opportunity outcomes are the ones customers care about most and are least happy with today — exactly where innovation should focus. Cordis used this to find under-served outcomes like “minimise restenosis” and grew its U.S. market share tenfold.',
          },
          {
            type: 'paragraph',
            text: 'Held together, JTBD and ODI make the same argument from two angles: stop asking customers what to build, and start rigorously understanding what they’re trying to accomplish. Everything downstream — strategy, prioritisation, design, launch — depends on getting this right first.',
          },
        ],
      },
      {
        id: 'great-isnt-enough',
        kicker: 'A cautionary tale',
        heading: 'When “great” isn’t enough',
        intro:
          'Not every well-built, well-loved product survives — a lesson about the difference between desirability, viability, and feasibility.',
        blocks: [
          {
            type: 'paragraph',
            text: 'Google Glass, launched in 2014 at $1,500, let people search the web conversationally and see results overlaid on the world — a genuine leap in what a “computer” could be. Technologists loved it. But it ran headlong into a social reality no engineering could fix.',
          },
          {
            type: 'debate',
            left: {
              quote:
                'A great product will survive all abuse. Google Glass is a great product. How do I know? Every person I put it on … smiles. No other product has done that since the iPod.',
              attribution: 'Robert Scoble',
            },
            right: {
              quote: 'People here will date goats. But no one wants to date a goat wearing Google Glass.',
              attribution: 'Kara Swisher',
            },
            resolution:
              'Google Glass was discontinued in January 2015 and fully abandoned by 2023. The technology wasn’t the problem — the desirability equation was. A product can be feasible and even delightful to some users and still fail if it doesn’t fit how people want to be seen using it. “Desirability” isn’t just “do people like this” — it’s “do people want to be the kind of person who uses this, in front of other people.”',
          },
        ],
      },
      {
        id: 'good-bad-pm',
        kicker: 'The classic essay',
        heading: 'Good Product Manager, Bad Product Manager',
        intro:
          'Ben Horowitz wrote this in 2012 as an internal Netscape training document. It is one of the most-cited pieces in product management, still forwarded to new PMs everywhere.',
        blocks: [
          {
            type: 'goodbad',
            items: [
              {
                good: 'Good product managers know the market, the product, the product line and the competition extremely well and operate from a strong basis of knowledge and confidence.',
                bad: 'Bad product managers have lots of excuses.',
              },
              {
                good: 'Good product managers crisply define the target, the "what" (as opposed to the how) and manage the delivery of the "what."',
                bad: 'Bad product managers feel best about themselves when they figure out "how."',
              },
              {
                good: 'Good product managers focus the team on revenue and customers.',
                bad: 'Bad product managers focus team on how many features the competitor is building.',
              },
              {
                good: 'Good product managers define their job and their success.',
                bad: 'Bad product managers constantly want to be told what to do.',
              },
              {
                good: 'Good product managers send their status reports in on time every week, because they are disciplined.',
                bad: "Bad product managers forget to send in their status reports on time, because they don't value discipline.",
              },
            ],
          },
          {
            type: 'quote',
            quote:
              'A good product manager is the CEO of the product. A good product manager takes full responsibility and measures themselves in terms of the success of the product.',
            attribution: 'Ben Horowitz, Good Product Manager/Bad Product Manager (a16z, 2012)',
          },
        ],
      },
      {
        id: 'behind-every-great-product',
        kicker: 'The human stories',
        heading: 'Behind every great product',
        intro:
          'From Marty Cagan’s Behind Every Great Product (SVPG, 2016): six product managers whose names most people don’t know, behind products everyone does.',
        blocks: [
          {
            type: 'stories',
            items: [
              {
                name: 'Martina Lauchengco',
                product: 'Word for Mac, Microsoft',
                year: '1993',
                hook: 'Inherited a version of Word so slow on real Mac hardware that Bill Gates was personally forwarding hate mail to the team.',
                detail:
                  'Rebuilt the release around what actually mattered to Mac users — performance and platform-specific care, not feature parity with Windows — and shipped an apology release with a discount coupon and her own signature.',
              },
              {
                name: 'Kate Arnold',
                product: "Netflix's subscription pivot",
                year: '1999',
                hook: 'Netflix was stuck at 300,000 pay-per-rental customers and running out of runway.',
                detail:
                  'Her team tested a flat monthly subscription — which worked, but created a new problem: customers wanted expensive new releases the company couldn’t afford to stock. The queue, the ratings system, and the recommendation engine were all built to solve that one constraint.',
              },
              {
                name: 'Jane Manning',
                product: 'Google AdWords',
                year: '2000',
                hook: 'An engineering manager pulled in to get a stalled, internally unpopular idea off the ground.',
                detail:
                  'Sales worried it would cannibalize revenue, engineers worried it would clutter search results. She listened to both sides, found the design that resolved both objections (ads placed to the side, ranked by relevance × bid, not price alone), and wrote the first spec herself.',
              },
              {
                name: 'Alex Pressland',
                product: 'BBC Mobile',
                year: '2003',
                hook: 'Spotted a syndication technology nobody else at the BBC thought was interesting — four years before the iPhone.',
                detail:
                  'Used it to reach audiences the BBC’s TVs and radios couldn’t, starting with city-center video billboards. Became the foundation for BBC’s mobile strategy, now reaching 50 million people a week.',
              },
              {
                name: 'Camille Hearst',
                product: 'Apple iTunes',
                hook: 'Helped move iTunes from DRM-locked to mass-market.',
                detail:
                  'Included the delicate integration with American Idol — where selling a contestant’s music too visibly would have leaked the voting results before the show aired.',
              },
              {
                name: 'Lea Hickman',
                product: 'Adobe Creative Cloud',
                year: '2011',
                hook: 'Led the transition of a $2B desktop licensing business to a subscription model across 15 major applications at once.',
                detail:
                  'Finance worried about revenue recognition, engineering worried about continuous deployment, sales worried about losing the reseller channel. Adobe now has more than 6 million Creative Cloud subscribers and has more than tripled its market cap since.',
              },
            ],
          },
          {
            type: 'quote',
            quote: 'Being a great product manager means having extraordinary grit.',
            attribution: 'Marty Cagan, Behind Every Great Product (SVPG, 2016)',
          },
        ],
      },
    ],
    takeaways: [
      'Digital is a way of working — social, mobile, analytics, cloud — not just owning technology.',
      'A PM defines the “what” and facilitates; being great at saying no is the core skill.',
      'Start simple and evolve (Gall’s Law); build for desirability, viability, and feasibility at once.',
      'Customers are bad at designing solutions and good at describing outcomes — JTBD and ODI take that seriously.',
    ],
  },

  {
    n: 2,
    slug: 'day-2',
    title: 'Discovery, Strategy & Prioritisation',
    subtitle:
      'How to find out what customers actually need, turn that into a strategy, and decide what to build first when everything feels urgent.',
    accent: 'berry',
    themes: ['User research', 'Product strategy', 'Innovation', 'Feature prioritisation'],
    promise:
      'How to find out what customers actually need, turn that into a strategy, and decide what to build first when everything feels urgent.',
    meta: [
      { label: 'Theme', value: 'Definition' },
      { label: 'Duration', value: '~90 min' },
      { label: 'Frameworks', value: 'RICE · Opportunity trees' },
    ],
    objectives: [
      'Placeholder — write a crisp problem statement.',
      'Placeholder — score a backlog with RICE.',
      'Placeholder — defend a prioritisation call.',
    ],
    sections: [
      {
        id: 'problem',
        kicker: 'Framing',
        heading: 'Writing the problem statement',
        blocks: [
          { type: 'paragraph', text: LOREM },
          {
            type: 'callout',
            kind: 'tip',
            title: 'Keep it testable',
            body: 'Placeholder — a good problem statement names the user, the friction, and the evidence.',
          },
          { type: 'placeholder' },
        ],
      },
      {
        id: 'rice',
        kicker: 'Framework',
        heading: 'RICE prioritisation',
        intro: 'Reach × Impact × Confidence ÷ Effort.',
        blocks: [
          {
            type: 'cards',
            items: [
              { title: 'Reach', body: 'Placeholder — how many users, per period.' },
              { title: 'Impact', body: 'Placeholder — how much it moves the goal.' },
              { title: 'Confidence', body: 'Placeholder — how sure are we.' },
              { title: 'Effort', body: 'Placeholder — person-months to ship.' },
            ],
          },
          { type: 'placeholder', note: 'Live RICE scoring table drops in here.' },
        ],
      },
    ],
    takeaways: [
      'Placeholder — prioritisation is a communication tool.',
      'Placeholder — make trade-offs explicit.',
    ],
  },

  {
    n: 3,
    slug: 'day-3',
    title: 'From Idea to Launch Plan',
    subtitle: 'Turning a validated idea into something concrete enough to build.',
    accent: 'green',
    themes: ['Planning software launches', 'Storyboarding', 'Wireframing'],
    promise:
      'Turning a validated idea into something concrete enough to build — the craft of taking a concept from sketch to launch-ready plan.',
    meta: [
      { label: 'Theme', value: 'Design' },
      { label: 'Duration', value: '~90 min' },
      { label: 'Frameworks', value: 'Kano · Story mapping' },
    ],
    objectives: [
      'Placeholder — shape a solution with the team.',
      'Placeholder — classify features with Kano.',
      'Placeholder — build a story map.',
    ],
    sections: [
      {
        id: 'shaping',
        kicker: 'Method',
        heading: 'Solution shaping',
        blocks: [
          { type: 'paragraph', text: LOREM },
          {
            type: 'callout',
            kind: 'warning',
            title: 'Avoid gold-plating',
            body: 'Placeholder — resist adding delighters before the basics are solid.',
          },
          { type: 'placeholder' },
        ],
      },
      {
        id: 'kano',
        kicker: 'Framework',
        heading: 'The Kano model',
        blocks: [
          {
            type: 'cards',
            items: [
              { title: 'Basic', body: 'Placeholder — expected; absence causes anger.' },
              { title: 'Performance', body: 'Placeholder — more is linearly better.' },
              { title: 'Delight', body: 'Placeholder — unexpected exciters.' },
            ],
          },
          { type: 'placeholder', note: 'Kano survey walkthrough drops in here.' },
        ],
      },
    ],
    takeaways: [
      'Placeholder — nail basics before delighters.',
      'Placeholder — shape solutions collaboratively.',
    ],
  },

  {
    n: 4,
    slug: 'day-4',
    title: 'Product-Market Fit & Scaling',
    subtitle:
      'Knowing whether a product has found its market, and the PM’s role as its ambassador once it starts to scale.',
    accent: 'gold-deep',
    themes: ['Product-market fit', 'Scaling up', 'Being an ambassador for the product', 'Case study'],
    promise:
      'Knowing whether a product has actually found its market, what changes once it starts to scale, and the PM’s role as internal and external evangelist for the product.',
    meta: [
      { label: 'Theme', value: 'Delivery' },
      { label: 'Duration', value: '~90 min' },
      { label: 'Frameworks', value: 'Agile · Definition of Done' },
    ],
    objectives: [
      'Placeholder — slice work into shippable increments.',
      'Placeholder — write a clear Definition of Done.',
      'Placeholder — run a useful stand-up.',
    ],
    sections: [
      {
        id: 'slicing',
        kicker: 'Practice',
        heading: 'Vertical slicing',
        blocks: [
          { type: 'paragraph', text: LOREM },
          {
            type: 'steps',
            items: [
              { title: 'Thin slice', body: 'Placeholder — smallest end-to-end value.' },
              { title: 'Ship', body: 'Placeholder — release behind a flag.' },
              { title: 'Measure', body: 'Placeholder — read the signal, iterate.' },
            ],
          },
          { type: 'placeholder' },
        ],
      },
      {
        id: 'done',
        kicker: 'Standard',
        heading: 'Definition of Done',
        blocks: [
          {
            type: 'callout',
            kind: 'example',
            title: 'A sample DoD',
            body: 'Placeholder — tested, documented, accessible, and observable in production.',
          },
          { type: 'placeholder', note: 'Team’s real Definition of Done drops in here.' },
        ],
      },
    ],
    takeaways: [
      'Placeholder — ship thin, learn fast.',
      'Placeholder — “done” means shippable.',
    ],
  },

  {
    n: 5,
    slug: 'day-5',
    title: 'The PM Career & Leading Product Teams',
    subtitle: 'Zooming out from any one product to the discipline and the career.',
    accent: 'brand-dark',
    themes: [
      'PM careers and backgrounds',
      'PM competencies',
      'Seniority and scope',
      'Building and leading PM teams',
    ],
    promise:
      'Zooming out from any one product to the discipline and the career — what changes as a PM becomes a lead, a head of product, or a VP.',
    meta: [
      { label: 'Theme', value: 'Growth' },
      { label: 'Duration', value: '~90 min' },
      { label: 'Frameworks', value: 'North Star · AARRR' },
    ],
    objectives: [
      'Placeholder — choose a North Star metric.',
      'Placeholder — map inputs to the outcome.',
      'Placeholder — read the AARRR funnel.',
    ],
    sections: [
      {
        id: 'northstar',
        kicker: 'Framework',
        heading: 'The North Star',
        blocks: [
          { type: 'paragraph', text: LOREM },
          {
            type: 'callout',
            kind: 'info',
            title: 'One metric, not ten',
            body: 'Placeholder — the North Star captures the core value a user gets.',
          },
          { type: 'placeholder' },
        ],
      },
      {
        id: 'funnel',
        kicker: 'Framework',
        heading: 'AARRR metrics',
        blocks: [
          {
            type: 'table',
            data: {
              caption: 'The AARRR lifecycle funnel',
              columns: [
                { key: 'stage', label: 'Stage' },
                { key: 'question', label: 'Question' },
              ],
              rows: [
                { stage: 'Acquisition', question: 'How do users find us?' },
                { stage: 'Activation', question: 'Do they reach first value?' },
                { stage: 'Retention', question: 'Do they come back?' },
                { stage: 'Referral', question: 'Do they tell others?' },
                { stage: 'Revenue', question: 'Do they pay?' },
              ],
            },
          },
          { type: 'placeholder', note: 'Real metric tree for the case study drops in here.' },
        ],
      },
    ],
    takeaways: [
      'Placeholder — measure value, not vanity.',
      'Placeholder — one North Star, a few inputs.',
    ],
  },
]

export function getDay(n: number): DayContent | undefined {
  return DAYS.find((d) => d.n === n)
}
