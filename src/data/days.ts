import type { DayContent } from '../types'
import productFlywheel from '../assets/product-flywheel.png'
import productLevelDecisions from '../assets/product-level-decisions.png'

// Content for all five days of the course, consumed by src/pages/Day.tsx.
// Each day is data: a header (title, themes, objectives, sources, takeaways)
// plus a sequence of sections, each rendering an array of typed ContentBlocks
// (see the ContentBlock union in src/types) — paragraphs, callouts, tables,
// quotes, and the bespoke diagram blocks (wheel, funnel, hexagon, and so on).

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
            center: 'Things we should build',
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
            stages: [
              { label: 'Block of metal', icon: 'block' },
              { label: 'Cart', icon: 'cart' },
              { label: 'Bicycle', icon: 'bicycle' },
              { label: 'Car', icon: 'car' },
            ],
            caption: 'Start simple. Evolve toward complex.',
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
            type: 'strategyStack',
            topTier: [
              { label: 'Purpose & Values' },
              { label: 'Strategy' },
              { label: 'Customer' },
              { label: 'Roadmap' },
            ],
            support: ['Resourcing', 'Governance'],
            center: 'Product-level decisions',
            caption:
              'Distinct from the landing page’s valuable/usable/feasible/viable lens — this is the three-way desirability/viability/feasibility test for a single product decision.',
            nodes: [
              { label: 'Desirability', desc: 'Do people actually want this? (customer)' },
              { label: 'Viability', desc: 'Does it work commercially for us? (business)' },
              { label: 'Feasibility', desc: 'Can we build and support it? (technology + people)' },
            ],
            vennImage: productLevelDecisions,
            vennImageAlt: 'Venn diagram of desirability, viability, and feasibility overlapping on product-level decisions',
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
            type: 'wheel',
            center: 'Product Manager',
            emphasisIndex: 0,
            spokes: [
              {
                label: 'Vision & Strategy',
                desc: 'What does the world look like in three years, and how do we get there?',
              },
              { label: 'Understanding', desc: 'Users, competitors, market — genuinely data-driven, not data-decorated.' },
              {
                label: 'Technology',
                desc: 'Knowing what’s possible (and not) today, without necessarily writing the code.',
              },
              {
                label: 'Decisions & Process',
                desc: 'Forcing teams to decide and move deliberately instead of stalling in ambiguity.',
              },
              {
                label: 'Collaborating & Communicating',
                desc: 'To and with stakeholders, management, and the team — constantly, both directions.',
              },
              {
                label: 'Software Lifecycle',
                desc: 'How to create, deliver, test, and iterate on software, end to end.',
              },
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
            type: 'image',
            src: productFlywheel,
            alt: 'Product flywheel diagram: delivery date, quality, and features balanced around the flywheel',
            caption:
              'Push too hard on any one and the other two suffer — the craft is keeping all three turning together, release after release.',
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
            type: 'subheading',
            text: 'Jobs to be Done',
          },
          {
            type: 'paragraph',
            text: 'Clayton Christensen and colleagues argue that most innovation fails because companies obsess over correlational data — demographics, psychographics, “customers like this also bought that” — when what drives a purchase is causal: the progress a customer is trying to make in a circumstance. When we buy a product, we’re “hiring” it to do a job. Do it well and we hire it again; do it badly and we fire it and look for an alternative.',
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
            type: 'subheading',
            text: 'Outcome-Driven Innovation',
          },
          {
            type: 'paragraph',
            text: 'Anthony Ulwick’s approach starts from a sharper insight: customers are good at describing outcomes and bad at designing solutions. Ask what they want built and you get incremental, “me-too” ideas. Ask what they want the product to do for them — the outcome, not the mechanism — and you get raw material an R&D team can work with.',
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
            type: 'opportunity',
            xLabel: 'Satisfaction (1–10)',
            yLabel: 'Importance (1–10)',
            zoneLabel: 'High opportunity',
            caption:
              'Outcomes in the top-left — high importance, low satisfaction — are where Cordis found “minimise restenosis” and grew U.S. market share tenfold.',
            dots: [
              { x: 3.2, y: 9.5, label: 'Minimise restenosis', highlight: true },
              { x: 7.8, y: 6.5 },
              { x: 5.5, y: 5.8 },
              { x: 8.6, y: 4.2 },
              { x: 4.5, y: 7.6 },
              { x: 6.8, y: 8.3 },
              { x: 2.6, y: 5.1 },
            ],
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
              'Good product managers anticipate the serious product flaws and build real solutions. Bad product managers put out fires all day.',
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
    title: 'Definition & Prioritisation',
    subtitle:
      'Once you understand the problem space, the job becomes narrowing it: from raw user problems, to a vision worth committing to, to a strategy that says what you won’t do, to a shortlist of features you’ll actually build first.',
    accent: 'berry',
    themes: ['User research', 'Product vision', 'Product strategy', 'Feature prioritisation'],
    promise:
      'How to narrow a wide-open problem space into a vision, a strategy that says what you won’t do, and a prioritised shortlist of features worth building first.',
    meta: [
      { label: 'Theme', value: 'Definition' },
      { label: 'Duration', value: '~90 min' },
      { label: 'Frameworks', value: 'Personas · Vision · Kano · MoSCoW' },
    ],
    objectives: [
      'Run primary research that surfaces problems rather than solutions — and synthesise what you hear into a persona.',
      'Rank problems by opportunity, then commit to a product vision and a strategy that says what you won’t do.',
      'Generate and prioritise a shortlist of features honestly, using MoSCoW and a value/complexity heatmap.',
    ],
    sources: [
      {
        label: 'Digital Product Management, Day 2 lecture materials — Ujwal Kayande & Luke Chandler (2026)',
        url: '#',
      },
      {
        label: 'Elon Musk, “The Secret Tesla Motors Master Plan (just between you and me)” (2006)',
        url: 'https://www.tesla.com/blog/secret-tesla-motors-master-plan-just-between-you-and-me',
      },
      {
        label: 'Melissa Perri, “What is Good Product Strategy?” (melissaperri.com, 2016)',
        url: 'https://melissaperri.com/blog/2016/07/14/what-is-good-product-strategy',
      },
      {
        label: 'Marty Cagan, “Vision vs. Strategy” (Silicon Valley Product Group, 2016)',
        url: 'https://www.svpg.com/vision-vs-strategy/',
      },
      {
        label: 'Shreyas Doshi, “Good Product Strategy, Bad Product Strategy” (2020)',
        url: '#',
      },
      {
        label: 'Anthony W. Ulwick, “Turn Customer Input into Innovation” (Harvard Business Review, 2002)',
        url: 'https://hbr.org/2002/01/turn-customer-input-into-innovation',
      },
    ],
    sections: [
      {
        id: 'primary-research',
        kicker: 'Discovery',
        heading: 'Understanding users: primary research',
        intro:
          'Discovery doesn’t stop after Day 1 — it’s the fuel for everything in this section. The discipline of primary research comes down to a small number of rules that are easy to state and surprisingly hard to follow.',
        blocks: [
          {
            type: 'steps',
            items: [
              {
                title: 'Talk to real users — and seek diversity',
                body: 'Deliberately vary who you talk to, so the picture isn’t built from one kind of person.',
              },
              {
                title: 'Avoid discussing solutions',
                body: 'Synthesising a solution is the PM’s job afterward, not the user’s job to hand you during the interview.',
              },
              {
                title: 'Discuss problems, not features',
                body: 'Capture the problems users want solved, not the features they think would solve them.',
              },
              {
                title: 'Write it down exactly as heard',
                body: 'Short, plain sentences — and be careful not to write down a solution disguised as a problem.',
              },
              {
                title: 'Collate and organise',
                body: 'Group what you hear, for example by the steps in a process.',
              },
              {
                title: 'Sort by opportunity',
                body: 'Rank the resulting list before acting on any of it (more on that next).',
              },
            ],
          },
          {
            type: 'callout',
            kind: 'example',
            title: 'What a raw problem statement sounds like',
            body: '“Someone has trouble finding gifts they’d feel proud to give.” “Someone wants to make sure any gift feels appropriate.” “Someone wishes giving a gift was fast.” Notice none of these mention a feature, a screen, or a button — they’re pure problem statements, exactly the raw material a PM needs.',
          },
          {
            type: 'paragraph',
            text: 'Once you’ve collected enough of these, the next move is synthesising them into a persona — a fictional person, built from real user problems, who represents one actual target user (not an amalgam of several people who don’t want the same things solved). The Jobs to be Done framework from Day 1 is the natural tool for constructing one: “[Persona] needs to [job], so they can [desired outcome].” Personas are useful for rallying a team, prioritising choices, and — crucially — for saying no to ideas that don’t serve them.',
          },
          {
            type: 'persona',
            name: 'The thoughtful gift-giver',
            jtbd: 'Needs to find a gift quickly, so they can give something that feels personal and appropriate without hours of second-guessing.',
            problems: [
              'Has trouble finding gifts they’d feel proud to give to someone else.',
              'Wants to be sure any gift feels appropriate for the relationship.',
              'Wishes the whole process of choosing and giving was faster.',
            ],
          },
          {
            type: 'paragraph',
            text: 'Interviews tell you why; data tells you how big. The two should run together, not in sequence. Alongside talking to users, look in the quantitative record for the same problems showing up at scale.',
          },
          {
            type: 'cards',
            items: [
              { title: 'Drop-off', body: 'Users abandoning a cart or flow partway through.' },
              { title: 'Dead-end search', body: 'Users searching but never completing a purchase or action.' },
              { title: 'Unfinished setup', body: 'Users starting a customisation step but not finishing it.' },
            ],
          },
          {
            type: 'paragraph',
            text: 'The method: find a sample of users who have the problem, find a sample who don’t, and look for what actually differs between the two — price sensitivity, device, age, behaviour. Divergence between the two samples is a strong signal you’ve found something real, not just a story a handful of interviewees told you.',
          },
          {
            type: 'callout',
            kind: 'tip',
            title: 'Secondary research: don’t design in a vacuum',
            body: 'Understanding what competitors do well — and badly — is valuable guidance; a method like SWOT can structure it. But watch the tension: looking at a rival’s product, the instinct is “we need to copy all of this,” while that same competitor is often looking at their own product thinking “we need to cut half of this.” Feature bloat looks impressive from the outside and feels like drowning from the inside.',
          },
        ],
      },
      {
        id: 'opportunity',
        kicker: 'Prioritising problems',
        heading: 'From problems to opportunity',
        intro:
          'Once problems are collected, they need to be ranked — not by gut feel, but by where the real opportunity sits. This is where Day 1’s Outcome-Driven Innovation formula actually gets used, on the raw problems just collected.',
        blocks: [
          {
            type: 'formula',
            expression: 'Opportunity = Importance + (Importance − Satisfaction)',
            note: 'Score each problem 1–10 on how important it is and how satisfied users are with the status quo, then rank.',
          },
          {
            type: 'table',
            data: {
              caption: 'Scoring the thoughtful gift-giver’s problems',
              columns: [
                { key: 'problem', label: 'Problem' },
                { key: 'importance', label: 'Importance' },
                { key: 'satisfaction', label: 'Satisfaction' },
                { key: 'opportunity', label: 'Opportunity' },
              ],
              emphasisKey: 'opportunity',
              rows: [
                { problem: 'Struggling to find a gift worth giving', importance: '9', satisfaction: '3', opportunity: '15' },
                { problem: 'Making sure the gift feels appropriate', importance: '8', satisfaction: '4', opportunity: '12' },
                { problem: 'Wanting the process to be faster', importance: '6', satisfaction: '5', opportunity: '7' },
              ],
            },
          },
          {
            type: 'paragraph',
            text: 'The highest-scoring problem — struggling to find a gift worth giving at all — is important and badly underserved. That’s exactly the shortlist that should feed into a product vision, not the lower-scoring friction around speed.',
          },
        ],
      },
      {
        id: 'vision',
        kicker: 'Direction',
        heading: 'Product vision',
        intro:
          'Before deciding what to build, a PM needs a vision worth building toward — and it’s worth being precise about what a vision actually is, because it gets confused with a roadmap constantly.',
        blocks: [
          {
            type: 'paragraph',
            text: 'Marty Cagan draws the distinction cleanly: the product vision describes the future you’re trying to create, typically two to five years out (five to ten for hardware). It is deliberately not a spec — it might take the form of a storyboard, a narrative white paper, or a working prototype. Its job is to communicate and inspire, not to prescribe, which is exactly why a strong vision is one of the most effective recruiting and retention tools a team has.',
          },
          {
            type: 'quote',
            quote: 'Stubborn on the vision, and flexible on the details.',
            attribution: 'Jeff Bezos, quoted in Marty Cagan, Vision vs. Strategy (SVPG, 2016)',
          },
          {
            type: 'callout',
            kind: 'info',
            title: 'A template for writing one down',
            body: 'For [target customer], who [customer’s need], the [product] is a [product category] that [unique benefit]. Unlike [competitors or current methods], our product [main differentiator].',
          },
          {
            type: 'paragraph',
            text: 'Elon Musk’s 2006 essay laying out Tesla’s strategy is a useful teaching example precisely because it’s public, plainly written, and has now largely played out. The vision: accelerate the move from a hydrocarbon economy to a solar-electric one. The problem with new technology is that it’s expensive before it can be optimised — so the strategy was sequential, not simultaneous.',
          },
          {
            type: 'quote',
            quote:
              'Build sports car. Use that money to build an affordable car. Use that money to build an even more affordable car… Don’t tell anyone.',
            attribution: 'Elon Musk, The Secret Tesla Motors Master Plan (2006)',
          },
          {
            type: 'spectrum',
            stages: [
              { label: 'Sports car', note: 'Enter at the high end, where customers pay a premium for something without compromises.' },
              { label: 'Affordable car', note: 'Use the cash flow from the first model to fund a cheaper one.' },
              { label: 'Mass-market car', note: 'Repeat, driving cost down each cycle — while also offering solar power generation.' },
            ],
            caption:
              'The vision (a solar-electric economy) was worth stating boldly and publicly; the sequencing — start expensive, subsidise cheap — is strategy, and strategy is often far more mundane than the vision it serves.',
          },
          {
            type: 'paragraph',
            text: 'Tesla’s own execution has taken a different, and much slower, path than the essay implied — a useful reminder that even a well-reasoned strategy is a bet on an uncertain future, not a guarantee.',
          },
        ],
      },
      {
        id: 'strategy',
        kicker: 'The plan of attack',
        heading: 'Product strategy',
        intro:
          'If vision is where, strategy is how — and, just as importantly, what you’re deliberately choosing not to do to get there.',
        blocks: [
          {
            type: 'ladder',
            tiers: [
              { label: 'Vision', meta: '2–5 years · inspirational', desc: 'The future you’re trying to create. Deliberately not a spec.' },
              { label: 'Strategy', meta: 'choices · insights · action · management', desc: 'The hard trade-offs — including what you won’t do — that move toward the vision.' },
              { label: 'Tactics & roadmap', meta: 'specific features · this quarter', desc: 'The concrete work: the features and sequencing you commit to now.' },
            ],
            caption:
              'Each tier narrows the one above it, trading inspiration for concreteness. Confusing a lower tier for a higher one — shipping a roadmap and calling it a strategy — is the most common failure.',
          },
          {
            type: 'paragraph',
            text: 'Melissa Perri makes the point that most teams confuse a strategy with a plan. A statement like “build a platform that lets producers upload and share music” isn’t a strategy — it’s a plan, dressed up. Plans assume certainty; they give a false sense of security, and they quietly shift the team’s focus from outcomes to outputs — from did we achieve the goal to did we ship the list.',
          },
          {
            type: 'callout',
            kind: 'warning',
            title: 'A plan is not a strategy',
            body: 'Plans assume you already know how to succeed. Strategy assumes you don’t yet — and is uncovered through experimentation toward a challenge, one obstacle at a time, rather than handed down top-to-bottom as a finished document.',
          },
          {
            type: 'steps',
            items: [
              { title: 'Vision', body: 'The long-term, qualitative destination (covered above).' },
              {
                title: 'Challenge',
                body: 'The first business goal on the way to that vision — a strategic objective, still broad, that focuses the team on one part of the journey.',
              },
              {
                title: 'Target condition',
                body: 'A specific, measurable milestone that breaks the challenge down. The team shouldn’t know exactly how to reach it yet, only where to start looking.',
              },
              {
                title: 'Current state',
                body: 'An honest, quantified read of where things stand today, measured before work starts.',
              },
            ],
          },
          {
            type: 'paragraph',
            text: 'Marty Cagan frames the same discipline as four repeated moves. None of them are easy, and skipping any one is usually where a strategy quietly turns into a wish list.',
          },
          {
            type: 'cards',
            items: [
              { title: 'Choices', body: 'Making tough calls about what’s actually important — and what isn’t.' },
              { title: 'Insights', body: 'Generating and leveraging genuine insights from research and data.' },
              { title: 'Action', body: 'Converting those insights into concrete action, not just decks.' },
              { title: 'Management', body: 'Providing active management without sliding into micromanagement.' },
            ],
          },
          {
            type: 'paragraph',
            text: 'Shreyas Doshi’s contrast format — deliberately modelled on the Good/Bad Product Manager essay from Day 1 — is one of the sharpest tools for pressure-testing a draft strategy before committing to it.',
          },
          {
            type: 'goodbad',
            items: [
              {
                good: 'Good product strategy clearly identifies target customer segments and non-target segments.',
                bad: 'Bad product strategy ignores segmentation or tries to cater to all customer segments.',
              },
              {
                good: 'Good product strategy highlights trade-offs and lays out the rationale for them.',
                bad: 'Bad product strategy eschews trade-offs and tries to be “all things to all people.”',
              },
              {
                good: 'Good product strategy is inspiring because it’s vivid, rigorous, and actionable.',
                bad: 'Bad product strategy sounds visionary via rah-rah language and “apple pie” positions — it reads like a prayer.',
              },
              {
                good: 'Good product strategy optimises for long-term business results.',
                bad: 'Bad product strategy optimises for near-term consensus.',
              },
            ],
          },
          {
            type: 'paragraph',
            text: 'The throughline across all of Doshi’s contrasts: good strategy makes specific, falsifiable, sometimes uncomfortable choices, out loud, and explains why. Bad strategy tries to avoid ever having to disappoint anyone in the room.',
          },
        ],
      },
      {
        id: 'ideation',
        kicker: 'Generating options',
        heading: 'Ideation',
        intro:
          'With a vision and a strategy in place, the next job is generating enough good raw ideas to actually choose between.',
        blocks: [
          {
            type: 'quote',
            quote:
              'A tool for developing a hypothesis, prototyping an idea, and testing it rapidly with as little investment as possible in as real an environment as possible.',
            attribution: 'Google, on the design sprint',
          },
          {
            type: 'spectrum',
            stages: [
              { label: 'Understand', note: 'Business background, product focus, target audience, journey context.' },
              { label: 'Define', note: 'Frame the specific problem, set the experience vision, prioritise user stories.' },
              { label: 'Sketch & Decide', note: 'Rapid ideation, storyboards, a collaborative vote, then a detailed concept.' },
              { label: 'Make & Test', note: 'Build a prototype, run it past real users, then showcase, reflect, and iterate.' },
            ],
            caption:
              'The output of a design sprint isn’t a finished product — it’s a fast, cheap validation of a direction before committing to full development.',
          },
          {
            type: 'callout',
            kind: 'tip',
            title: 'Crazy 8s',
            body: 'Given a specific “how might we” challenge, each person sketches eight distinct ideas in eight minutes — one per sticky note, fast enough that perfectionism doesn’t get a vote. Everyone presents, questions are held to the end, and the group votes (multiple votes allowed, including for your own). The point is to surface a wide spread of raw directions before groupthink narrows the field.',
          },
          {
            type: 'paragraph',
            text: 'Not all features earn the same kind of satisfaction, and the Kano model is a useful lens for telling them apart. The practical use is simple: know which category a proposed feature falls into before building it. A “must-be” that’s missing is a crisis; an “attractive” quality that’s missing is just an unrealised opportunity — confusing the two is a common way roadmaps get miscalibrated.',
          },
          {
            type: 'kano',
            caption:
              'Satisfaction against how fully a feature is implemented. The same effort lands very differently depending on which curve a feature sits on.',
          },
          {
            type: 'cards',
            items: [
              { title: 'Must-be', body: 'Taken for granted when present; causes real dissatisfaction when missing.' },
              { title: 'Performance', body: 'Satisfaction scales linearly — more is simply better, less is simply worse.' },
              { title: 'Attractive', body: 'Delights when present; its absence isn’t noticed or resented. Where differentiation usually lives.' },
              { title: 'Indifferent', body: 'Moves the needle in neither direction. Be honest about how much of a roadmap quietly falls here.' },
              { title: 'Reverse', body: 'A feature that delights one segment can actively annoy another — customers aren’t a monolith.' },
            ],
          },
          {
            type: 'callout',
            kind: 'tip',
            title: 'A closing thought on ideation',
            body: 'Good ideas solve user problems, and the best are grounded in data — both qualitative and quantitative. Commercial outcomes follow from solving real problems, not the other way around. And simplicity is chronically undervalued while complexity is overrated: the instinct to add “just one more thing” is almost always worth resisting.',
          },
        ],
      },
      {
        id: 'prioritisation',
        kicker: 'Choosing what goes first',
        heading: 'Feature prioritisation',
        intro:
          'Ideation produces more good ideas than any team can build. Prioritisation is the discipline of choosing, honestly, what actually goes first — and there are several complementary tools, each answering a slightly different question.',
        blocks: [
          {
            type: 'paragraph',
            text: 'The prioritisation heatmap plots product value (does this remove a real pain point, or is the benefit hard to quantify?) against implementation complexity (a single sprint, or significant system and policy change?). Plotting every candidate makes the highest-value, lowest-complexity opportunities visually obvious — and, just as usefully, exposes the expensive distractions.',
          },
          {
            type: 'matrix',
            xLabel: 'Implementation complexity',
            yLabel: 'Product value',
            zoneLabel: 'Build first',
            caption:
              'The top-left corner — high value, low complexity — is where a shortlist should start. The bottom-right is where roadmaps quietly go to die.',
            items: [
              { label: 'Quick win', value: 2, complexity: 0, highlight: true },
              { label: 'Core fix', value: 2, complexity: 1 },
              { label: 'Big bet', value: 2, complexity: 2 },
              { label: 'Nice touch', value: 1, complexity: 0 },
              { label: 'Steady polish', value: 1, complexity: 1 },
              { label: 'Slow burn', value: 1, complexity: 2 },
              { label: 'Filler', value: 0, complexity: 0 },
              { label: 'Time sink', value: 0, complexity: 1 },
              { label: 'Money pit', value: 0, complexity: 2 },
            ],
          },
          {
            type: 'paragraph',
            text: 'MoSCoW is a widely used agile vocabulary, applied once ideas are roughly scoped. The test for a Must have is blunt: if this requirement isn’t met, would you cancel the project? If yes, it’s a Must; if the project would still ship without it, it isn’t.',
          },
          {
            type: 'cards',
            items: [
              { title: 'Must have', body: 'Non-negotiable — the minimum viable product. Without it the project isn’t viable, legal, or safe.' },
              { title: 'Should have', body: 'Important, and painful to leave out, but the solution still works without it (possibly with a workaround).' },
              { title: 'Could have', body: 'Desirable, but only worth doing if there’s spare time and budget beyond the Should haves.' },
              { title: 'Won’t have (this time)', body: 'Explicitly out of scope for this round — not a bad idea, just not this round’s idea.' },
            ],
          },
          {
            type: 'moscow',
            rings: [
              { label: 'Must have', effort: '60% of effort' },
              { label: 'Should have', effort: '80% cumulative' },
              { label: 'Could have', effort: '100% cumulative' },
              { label: 'Contingency', effort: 'buffer in reserve' },
            ],
            caption:
              'A common allocation: roughly 60% of total effort on Must haves, growing to about 80% once Should haves are added (often where the business case is pitched), and 100% once Could haves are folded in — with a contingency buffer held beyond that for the inevitable surprises.',
          },
          {
            type: 'steps',
            items: [
              { title: 'Iteration 1 — Must haves', body: 'The viable core; ship this or don’t ship at all.' },
              { title: 'Iteration 2 — Should haves', body: 'Often the point at which the business case is actually pitched.' },
              { title: 'Iteration 3 — Could haves', body: 'Folded in only if time and budget remain.' },
              { title: 'Parked — Won’t haves', body: 'Explicitly out of scope this round, revisited later.' },
            ],
          },
          {
            type: 'paragraph',
            text: 'Rather than pitching one enormous business case for everything at once, mature teams plan in iterations. Each iteration gets its own investment estimate and its own numeric thresholds — “if this happens, we walk away” and “if this is achieved, we proceed.” Defining the walk-away condition before starting work is what turns a hopeful plan into a risk-managed one.',
          },
        ],
      },
      {
        id: 'roadmap',
        kicker: 'The whole arc',
        heading: 'The five-milestone product roadmap',
        intro:
          'Pulling discovery, vision, strategy, ideation, and prioritisation together, the whole arc of taking an idea to market can be framed as five milestones.',
        blocks: [
          {
            type: 'roadmapCycle',
            steps: [
              { label: 'Define the product', note: 'Write the vision statement; identify opportunities.' },
              { label: 'Tell the data story', note: 'Objectives, metrics, targets — an OKR-style link from each feature to a measurable goal.' },
              { label: 'Ideate features', note: 'Generate and prioritise a real shortlist, and know why these features specifically.' },
              { label: 'Business case', note: 'Risks, impacts, investment required, sales and go-to-market plan.' },
              { label: 'MVP and beyond', note: 'Ship it, then push toward product-market fit — or rethink the vision entirely.' },
            ],
          },
          {
            type: 'paragraph',
            text: 'This is a genuinely circular process in practice, not a one-way pipeline — insight from milestone five routinely sends a team back to revisit milestone one’s vision statement with sharper eyes.',
          },
        ],
      },
      {
        id: 'marginalia',
        kicker: 'Worth keeping',
        heading: 'Marginalia',
        blocks: [
          {
            type: 'quoteBank',
            items: [
              {
                quote: 'Stubborn on the vision, and flexible on the details.',
                attribution: 'Jeff Bezos, via Marty Cagan, SVPG',
              },
              {
                quote:
                  'Product strategy is a system of achievable goals and visions that work together to align the team around desirable outcomes for both the business and your customers.',
                attribution: 'Melissa Perri',
              },
              {
                quote:
                  'Good product strategy is inspiring because it’s vivid, rigorous, and actionable. Bad product strategy tries to sound visionary and ambitious… Bad product strategy often reads like a prayer.',
                attribution: 'Shreyas Doshi',
              },
              {
                quote:
                  'Build sports car. Use that money to build an affordable car. Use that money to build an even more affordable car… Don’t tell anyone.',
                attribution: 'Elon Musk, The Secret Tesla Motors Master Plan',
              },
              {
                quote: 'Giving people what they want will guarantee success — or so you would think.',
                attribution: 'Anthony Ulwick, Turn Customer Input into Innovation (HBR, 2002)',
              },
              {
                quote: 'Simplicity is undervalued, and complexity is overrated.',
                attribution: 'Day 2 lecture notes, MBS Digital Product Management',
              },
            ],
          },
        ],
      },
      {
        id: 'looking-ahead',
        kicker: 'Next',
        heading: 'Looking ahead to Day 3',
        blocks: [
          {
            type: 'callout',
            kind: 'info',
            title: 'From decision into shape',
            body: 'Day 2 narrows a wide-open problem space into a vision, a strategy, and a prioritised shortlist of features worth building. Day 3 moves from decision into shape: sizing the bet a feature represents, right-sizing the documentation that justifies it, building a roadmap honest about what it doesn’t know, and turning the chosen idea into a first wireframe.',
          },
        ],
      },
    ],
    takeaways: [
      'Talk to users about problems, not solutions — then synthesise what you hear into a persona and rank problems by opportunity.',
      'A vision is a two-to-five-year destination; a strategy is the sequence of hard choices — including what you won’t do — that gets you there.',
      'Good strategy makes specific, falsifiable trade-offs out loud; bad strategy tries to please everyone and reads like a prayer.',
      'Prioritise honestly with a value/complexity heatmap and MoSCoW, and know each feature’s Kano category before building it.',
    ],
  },

  {
    n: 3,
    slug: 'day-3',
    title: 'Design & Solution',
    subtitle:
      'With a vision, a strategy, and a prioritised idea in hand, the job becomes de-risking the bet before placing it — sizing the documentation correctly, building a roadmap that survives contact with reality, and turning a problem into a first wireframe.',
    accent: 'green',
    themes: ['Sizing the bet', 'Documentation', 'Roadmaps', 'Wireframing'],
    promise:
      'How to de-risk a bet before placing it: right-size the paperwork, build a roadmap that admits what it doesn’t know, and turn a problem into a first wireframe.',
    meta: [
      { label: 'Theme', value: 'Design' },
      { label: 'Duration', value: '~90 min' },
      { label: 'Frameworks', value: 'Project canvas · Agile roadmap · Wireframing' },
    ],
    objectives: [
      'Size a feature as a bet — its cost, its risk, its return — and right-size the documentation that justifies it.',
      'Build an honest roadmap: outcome-oriented rather than date-promising, and resistant to the biases that keep it unquestioned.',
      'Turn a persona and a chosen idea into a first wireframe, and know what wireframing is actually for.',
    ],
    sources: [
      {
        label: 'Digital Product Management, Day 3 lecture materials — Ujwal Kayande & Luke Chandler (2026)',
        url: '#',
      },
      { label: 'Leon Barnard, “Wireframing for Beginners” (UX Mastery, 2016)', url: '#' },
      {
        label: 'Rosie Allabarton, “How To Create Wireframes For A Website” (CareerFoundry, 2021)',
        url: '#',
      },
      { label: '“UX Crash Course: 31 Fundamentals” (The Hipper Element, 2014)', url: '#' },
    ],
    sections: [
      {
        id: 'betting',
        kicker: 'Mental model',
        heading: 'Product management as a betting game',
        intro:
          'A genuinely useful, slightly uncomfortable framing: a product manager is functionally a professional gambler. Every few weeks, a PM commits real money in development labour to a feature that might not pay off.',
        blocks: [
          {
            type: 'formula',
            expression: 'Bet size = Average daily rate × Developers × Days required',
            note: 'Five developers for two weeks at $800/day is already a $40,000 wager — and that’s not a one-off, it’s roughly the size of bet being placed every fortnight, feature after feature.',
          },
          {
            type: 'paragraph',
            text: 'Three questions are worth asking before placing that bet, every time — and asking them honestly, out loud, rather than after the fact.',
          },
          {
            type: 'cards',
            items: [
              { title: 'Risk', body: 'What is the risk of this feature failing outright?' },
              { title: 'Return', body: 'What is the return if it succeeds — and is it worth the stake?' },
              { title: 'Confidence', body: 'How confident am I, genuinely, that this is a winner?' },
            ],
          },
          {
            type: 'callout',
            kind: 'warning',
            title: 'Three traps that catch PMs who skip the questions',
            body: '“There’s always another sprint” — treating a missed bet as low-stakes, which quietly erodes the discipline of sizing bets carefully in the first place. “It’s senior management’s money, not mine” — a framing that disconnects the person placing the bet from the consequences of losing it. And cognitive bias while researching the bet — it’s easy to unconsciously research a feature in a way that confirms you should build it, rather than genuinely stress-testing whether you should.',
          },
          {
            type: 'paragraph',
            text: 'The point of the metaphor isn’t to make product management sound reckless — it’s the opposite. Professional gamblers survive by rigorously sizing bets, calculating odds, and staying honest about their own confidence. A PM who skips that discipline isn’t being bold; they’re just gambling badly with someone else’s money.',
          },
        ],
      },
      {
        id: 'documentation',
        kicker: 'Right-sizing',
        heading: 'How much to write down',
        intro:
          'Once a bet looks worth placing, how much do you write down before building it? Too little detail and nobody understands what they’re committing to. Too much and you’ve buried a fast decision in paperwork nobody will read.',
        blocks: [
          {
            type: 'spectrum',
            stages: [
              {
                label: 'User story',
                note: 'A single line, or a service-desk ticket — not enough detail for anyone to make a real go/no-go call.',
              },
              {
                label: 'Project canvas',
                note: 'One page. Enough structure to force real thinking, short enough that it actually gets read.',
              },
              {
                label: 'Business case',
                note: 'Thorough, but heavy enough that writing it can take longer than building a small feature would.',
              },
            ],
            caption:
              'The sweet spot sits in the middle, and the failure modes sit at both ends — under-specified is as expensive as over-specified, just later.',
          },
          {
            type: 'paragraph',
            text: 'A useful project canvas captures, on a single page: the idea itself, its author and sponsor, a clear problem or opportunity statement, success metrics, assumptions, risks and constraints, scope, the strategic objective it serves, the collaboration and roles needed to deliver it, and which stakeholders are impacted — plus a simple status field (pursue, pivot, or pause), an expected duration, and whether it has budget implications.',
          },
          {
            type: 'paragraph',
            text: 'Before committing any of that to paper, though, there’s a sharper filter worth applying first: does this actually change user behaviour? Every legitimate reason to build new software falls into one of five buckets. If a proposed feature doesn’t change behaviour in one of these ways, it isn’t really solving anything — and the bet, however small, probably isn’t worth placing.',
          },
          {
            type: 'cards',
            items: [
              { title: 'Do something new', body: 'The user can now do something that simply wasn’t possible before.' },
              { title: 'Do it faster', body: 'The same outcome, materially fewer steps or less time.' },
              { title: 'Do it more accurately', body: 'Fewer errors, less rework, more trust in the result.' },
              { title: 'Stop doing something bad', body: 'A harmful or wasteful behaviour is removed, not just discouraged.' },
              { title: 'Stop doing it manually', body: 'Work that used to be hand-done now happens on its own.' },
            ],
          },
          {
            type: 'callout',
            kind: 'tip',
            title: 'Name the behaviour, not the shipment',
            body: 'The ultimate outcome of any one-pager should be a specific, nameable behavioural change — “billers stop chasing overdue payments by phone,” not “we shipped the reminders feature.” If the one-pager can’t name the behaviour, it hasn’t finished thinking.',
          },
        ],
      },
      {
        id: 'roadmaps',
        kicker: 'Planning honestly',
        heading: 'Roadmaps: public, internal, and honest',
        intro:
          'A public roadmap — features tied to months, sent straight to customers — looks like good communication at first. It quells grumpy customers, reassures new signups, and everyone feels informed. Then priorities shift, a feature slips, a committed date passes, and the same document that built goodwill starts eroding trust every time it’s wrong.',
        blocks: [
          {
            type: 'goodbad',
            items: [
              {
                good: 'Communicate the outcome-oriented theme: “this quarter we’re focused on helping you run your sales engine better.”',
                bad: 'Commit publicly to “shipping Feature X in March” — a dated, specific promise that product reality will eventually contradict.',
              },
              {
                good: 'Zoom in on features already shipped and measure actual adoption before building anything new.',
                bad: 'Treat an underused feature as evidence that more features are needed.',
              },
              {
                good: 'Find which user segments aren’t engaging and target education and communication at exactly those segments.',
                bad: 'Assume low usage is a product gap when it’s usually a miscommunication of value or a lack of customer education.',
              },
            ],
          },
          {
            type: 'paragraph',
            text: 'Internally, the roadmap doesn’t go away — PMs still need to own and produce one. But it’s worth being honest about what it is. Roadmaps borrow their structure from project management: fixed scope, fixed resources, fixed time. That structure genuinely works when building a known solution with low variance, like an apartment building, where the “what” is already settled and only the “how” and “when” remain open. Product management is different: the “what” is very often still uncharted, and the search for something simultaneously desirable, feasible, and viable doesn’t respect a fixed timeline just because a roadmap says it should.',
          },
          {
            type: 'callout',
            kind: 'warning',
            title: 'Roadmaps are a false sense of control',
            body: 'A roadmap that looks equally confident about next month and next year is lying about one of them. The structure is worth keeping; the certainty it implies is not.',
          },
          {
            type: 'ladder',
            tiers: [
              {
                label: 'Strategic theme',
                meta: 'quarterly · multiple in parallel',
                desc: 'What the team commits to for the quarter. Different teams can run different themes at once.',
              },
              {
                label: 'Quarterly OKRs',
                meta: 'the actual commitment',
                desc: 'Measurable objectives sitting underneath each theme — this is the layer that’s genuinely promised.',
              },
              {
                label: 'Features we may consider',
                meta: 'hypotheses · not promises',
                desc: 'Candidate ways to achieve the OKR, explicitly framed as guesses rather than plans.',
              },
            ],
            caption:
              'The further out in time a feature sits, the less confidently anyone should be predicting it — which is why the model deliberately gets vaguer and sparser the further ahead it looks, rather than pretending to know what will be built eighteen months out.',
          },
          {
            type: 'paragraph',
            text: 'Once a roadmap exists, three biases conspire to keep it unchanged long after it should have been revisited.',
          },
          {
            type: 'cards',
            items: [
              {
                title: 'Selective perception',
                body: 'Only noticing information that confirms the roadmap is still a good idea, and filtering out signals that it isn’t.',
              },
              {
                title: 'Availability heuristic',
                body: 'Over-weighting whatever data is easiest to recall — “that feature had a lot of user votes” — rather than what’s most accurate.',
              },
              {
                title: 'Escalation of commitment',
                body: 'The sunk-cost trap: the more already invested, the harder a project is to kill, purely because of what’s been spent rather than what’s still likely to be gained.',
              },
            ],
          },
          {
            type: 'steps',
            items: [
              { title: 'Are we on track, or behind?', body: 'Asked routinely, not only when something has visibly gone wrong.' },
              {
                title: 'Are features still prioritised by business value?',
                body: 'Or has the ordering quietly become inertia — this was next, so it’s still next.',
              },
              { title: 'Does the roadmap need updating?', body: 'Treating the document as a living artefact rather than a commitment to defend.' },
              { title: 'What is actually next?', body: 'Re-derived from current evidence, not read off the original plan.' },
              {
                title: 'Does the team’s current work still relate to the roadmap?',
                body: 'Drift is normal; unnoticed drift is the problem.',
              },
            ],
          },
        ],
      },
      {
        id: 'worked-example',
        kicker: 'Worked example',
        heading: 'From problem to interface',
        intro:
          'A short walkthrough of how everything from Days 1 and 2 actually lands on a page. A bill-payment service wanted to grow, and needed to retain both the billers using the platform and the people paying bills through it. Rather than guessing, the team ran user research first.',
        blocks: [
          {
            type: 'paragraph',
            text: 'What they heard was blunt and consistent: people don’t like paying bills, they lose track of due dates scattered across different billers, they sometimes miss deadlines, and missing a deadline causes real, disproportionate stress. That raw material became a persona.',
          },
          {
            type: 'persona',
            name: 'The bill-juggling parent',
            jtbd: 'Needs every bill and due date in one place, so they can pay on time without the low-grade dread of wondering what’s been missed.',
            problems: [
              'Tracks deadlines across different billers on a sticky note, and still sometimes misses one.',
              'Feels real, disproportionate stress when a deadline slips.',
              'Isn’t confident there’s enough money in the account when a direct debit goes through.',
            ],
          },
          {
            type: 'paragraph',
            text: 'From that persona came a specific, narrow idea: an app that aggregates every bill in one place, registers the user once, notifies them when a bill arrives and again a day before it’s due, and lets them pay from whichever account or card they prefer — turning five separate sources of low-grade discomfort into one unified, less stressful experience.',
          },
          {
            type: 'spectrum',
            stages: [
              { label: 'User problems', note: 'Raw, in the users’ own words — no features, no screens.' },
              { label: 'Persona', note: 'One real target user, synthesised from those problems.' },
              { label: 'Selected idea', note: 'One specific, scoped idea that serves that persona.' },
            ],
            caption:
              'Notice the shape of the walkthrough — that final handoff is exactly where wireframing picks up.',
          },
        ],
      },
      {
        id: 'wireframe-definition',
        kicker: 'Definition',
        heading: 'What a wireframe actually is',
        blocks: [
          {
            type: 'quote',
            quote:
              'A wireframe is a schematic or other low-fidelity rendering of a computer interface, intended to primarily demonstrate functionality, features, content, and user flow without explicitly specifying the visual design of a product… Wireframes are meant to be used as rough representations of interface ideas that can be quickly discarded and iterated upon until design solutions are selected.',
            attribution: 'Michael Angeles, via Leon Barnard, Wireframing for Beginners',
          },
          {
            type: 'cards',
            items: [
              {
                title: 'A wireframe',
                body: 'Has more in common with sketching than with prototyping. It deliberately doesn’t try to look finished, because looking finished suppresses the feedback it exists to attract.',
              },
              {
                title: 'A prototype',
                body: 'Is intended to look and feel like the real product — often for usability testing or a client presentation — even when it isn’t fully functional underneath.',
              },
            ],
          },
          {
            type: 'paragraph',
            text: 'The better analogy is writing an outline rather than drafting the final document. Wireframing lets structural decisions get made — what goes where, and why — before committing serious time to anything resembling a finished product. If a user can’t figure out where to click on a plain black-and-white wireframe, no amount of colour or polish will fix that later; the structure has to work first.',
          },
        ],
      },
      {
        id: 'two-phases',
        kicker: 'Practice',
        heading: 'The two phases of wireframing',
        intro:
          'Successful wireframing isn’t really about the tool — it’s the practice of using wireframes to solve two distinct problems, in two distinct phases.',
        blocks: [
          {
            type: 'cards',
            items: [
              {
                title: 'Ideation',
                body: 'Answers the open-ended question: what are some ways this product could help customers accomplish their goals? Deliberately not the narrower “I need to design the export-to-PDF feature.” Unusually, quantity matters as much as quality — the more variations on the page, the more there is to actually choose from.',
              },
              {
                title: 'Validation',
                body: 'Answers a different question: how do I know this solution will work? Showing wireframes to people who know things you don’t — about customers, technical limits, or the market — is what sharpens the idea.',
              },
            ],
          },
          {
            type: 'callout',
            kind: 'tip',
            title: 'Try to produce as many bad ideas as possible',
            body: 'Instead of straining to produce only good ideas, aim for volume including the bad ones. It removes the self-censoring instinct that blocks output — and you don’t get to the good idea without passing through several bad ones first.',
          },
          {
            type: 'steps',
            items: [
              { title: 'Don’t refine too early', body: 'Get messy, add freely, subtract later.' },
              { title: 'Don’t judge before it’s on the page', body: 'Create first, reflect after — the two modes interfere with each other.' },
              {
                title: 'Separate structure, layout, content, and functionality',
                body: 'Think about them one at a time rather than trying to solve all four at once.',
              },
              {
                title: 'Practise working at different levels of detail',
                body: 'Until you can find just enough detail, and no more.',
              },
            ],
          },
          {
            type: 'paragraph',
            text: 'The mindset shift for the validation phase is just as specific: a wireframe should invite conversation, not signal that a decision has already been made. If it looks too polished too early, people are less likely to give the blunt, structural feedback that makes it better. Wireframes communicate “here’s what I’m thinking” — not “this is what we’re building.”',
          },
          {
            type: 'steps',
            items: [
              {
                title: 'Show a variety of ideas, not just your favourite',
                body: 'It moves the conversation forward and demonstrates that the space was actually explored.',
              },
              {
                title: 'Clean them up a little first',
                body: 'Link screens together to tell a story, and consider a more finished visual skin depending on the audience.',
              },
              { title: 'Use a presentation mode', body: 'Hiding the editor chrome keeps attention on the idea rather than the tool.' },
              {
                title: 'Don’t let the wireframe do all the talking',
                body: 'Narrate the gaps yourself instead of expecting the page to explain everything.',
              },
              {
                title: 'Annotate where it genuinely helps later viewers',
                body: 'Without over-cluttering the view for a live presentation.',
              },
            ],
          },
          {
            type: 'paragraph',
            text: 'The loop that ties both phases together: consciously feed validation-phase feedback back into the next ideation pass. Wireframing done well is iterating and improving — not a single pass that ends the moment something looks plausible.',
          },
        ],
      },
      {
        id: 'six-steps',
        kicker: 'How to',
        heading: 'Six steps to a first wireframe',
        intro:
          'A practical sequence for actually producing one — note that it starts well before pen touches paper.',
        blocks: [
          {
            type: 'steps',
            items: [
              {
                title: 'Do the research first',
                body: 'Wireframing isn’t step one of UX. It comes after understanding the audience through user research, defined requirements, personas, use cases, and a look at what competitors and industry patterns already do.',
              },
              {
                title: 'Prepare that research for quick reference',
                body: 'Distil it into a cheat sheet — business and user goals, personas, use cases, a few sharp quotes from real users — so it’s in view while designing, not held in your head.',
              },
              {
                title: 'Map the user flow before drawing a screen',
                body: 'Know how many screens are actually needed and the order a user moves through them. Good information architecture here means fewer confused users, fewer support tickets, and more trust later.',
              },
              {
                title: 'Draft, don’t draw — sketch, don’t illustrate',
                body: 'Outline functional blocks rather than producing anything polished. A thick marker is a genuinely useful constraint: it physically prevents drowning in detail. Keep asking how the layout supports the user’s goal, what should be most prominent, what the user expects to find in each area, and which actions they need to complete.',
              },
              {
                title: 'Add detail, then test',
                body: 'Once a flow has survived a first round of internal scrutiny, layer in real content: navigation conventions, clear instructional wording for calls-to-action, trust-building elements, and any tooltips needed as interaction cues. Then test it, even informally with colleagues — a wireframe’s real power is as a shared language between designers, stakeholders, and developers.',
              },
              {
                title: 'Only then move toward a prototype',
                body: 'Once wireframe feedback has been acted on, move into higher-fidelity, interactive tools — a distinctly later step, not something to rush into.',
              },
            ],
          },
          {
            type: 'cards',
            items: [
              {
                title: 'Clarity',
                body: 'A wireframe should answer unambiguously: what is this page, what can the user do here, and does it meet their need — all without the distraction of colour or polish.',
              },
              {
                title: 'Confidence',
                body: 'Predictable navigation and clear calls-to-action build user trust before a single visual design decision has been made.',
              },
              {
                title: 'Simplicity',
                body: 'Excess information, copy, or links work against a user reaching their goal. Show the framework and the path through it, with no extra fluff.',
              },
            ],
          },
        ],
      },
      {
        id: 'ux-map',
        kicker: 'Context',
        heading: 'Where wireframing sits in UX',
        intro:
          'Wireframing is one skill inside a much larger discipline. Laid out as a whole, the map makes clear both what comes before it and what deliberately comes after.',
        blocks: [
          {
            type: 'wheel',
            center: 'UX',
            emphasisIndex: 2,
            spokes: [
              { label: 'Introduction & key ideas', desc: 'What UX actually is; balancing user goals against business goals.' },
              { label: 'Understanding users', desc: 'Research methods, how to ask good questions, building user profiles.' },
              { label: 'Information architecture', desc: 'User stories and content structure — where wireframing itself sits.' },
              { label: 'Visual design principles', desc: 'Visual weight, contrast, colour, repetition, alignment — the next layer, not this one.' },
              { label: 'Functional layout design', desc: 'Reading patterns (Z and F), forms, calls-to-action, button hierarchy.' },
              { label: 'User psychology', desc: 'Conditioning, persuasion, and how prior experience shapes expectations.' },
              { label: 'Designing with data', desc: 'Reading data correctly, summary statistics, A/B testing.' },
            ],
          },
          {
            type: 'paragraph',
            text: 'Wireframing isn’t the whole of UX, and it isn’t even the first step — it’s the moment where user research and information architecture turn into something visual, right before visual design, layout, and psychology start to matter. Getting the structural layer right first is what makes every layer built on top of it work.',
          },
        ],
      },
      {
        id: 'marginalia',
        kicker: 'Worth keeping',
        heading: 'Marginalia',
        blocks: [
          {
            type: 'quoteBank',
            items: [
              {
                quote:
                  'A wireframe is a schematic or other low-fidelity rendering of a computer interface… meant to be used as rough representations of interface ideas that can be quickly discarded and iterated upon.',
                attribution: 'Michael Angeles, via Leon Barnard, UX Mastery',
              },
              {
                quote: 'You won’t get to “aha!” without going through “oh, no!”',
                attribution: 'Leon Barnard, Wireframing for Beginners',
              },
              {
                quote: 'Wireframes should communicate “here’s what I’m thinking…” — not “this is what we’re going to build.”',
                attribution: 'Leon Barnard, Wireframing for Beginners',
              },
              {
                quote: 'Roadmaps are a false sense of control.',
                attribution: 'Day 3 lecture notes, MBS Digital Product Management',
              },
            ],
          },
        ],
      },
      {
        id: 'looking-ahead',
        kicker: 'Next',
        heading: 'Looking ahead to Day 4',
        blocks: [
          {
            type: 'callout',
            kind: 'info',
            title: 'From shape into reality',
            body: 'Day 3 turns a validated idea into a shape: a right-sized one-pager, an honest roadmap, and a first wireframe. Day 4 picks up from there — positioning the product deliberately and naming the trade-offs it forces, pressure-testing it across the four lenses that decide whether it genuinely fits its market, and using the MVP as the fastest way to find out.',
          },
        ],
      },
    ],
    takeaways: [
      'Every feature is a bet with a calculable size — ask what the risk is, what the return is, and how confident you honestly are before placing it.',
      'Right-size the paperwork: a one-page canvas beats both a one-line ticket and a full business case, and nothing is worth building unless it changes user behaviour.',
      'Public roadmaps promise dates and lose trust; communicate outcome-oriented themes instead, and keep questioning the internal roadmap against sunk cost and selective perception.',
      'A wireframe is an outline, not a draft — it exists to invite blunt structural feedback, so it should never look finished.',
    ],
  },

  {
    n: 4,
    slug: 'day-4',
    title: 'Product-Market Fit & Scaling',
    subtitle:
      'Fit isn’t a milestone you tick off — it’s a state you keep earning, best pressure-tested across four lenses at once, with the minimum viable product as the fastest tool for finding out where it actually stands.',
    accent: 'gold-deep',
    themes: ['Product-market fit', 'Positioning', 'Responsible product', 'MVP', 'Roadmaps everyone can read'],
    promise:
      'How to position a product deliberately, pressure-test whether it genuinely fits its market across four lenses, and use an MVP to find out fastest.',
    meta: [
      { label: 'Theme', value: 'Delivery' },
      { label: 'Duration', value: '~90 min' },
      { label: 'Frameworks', value: 'Positioning · DVFR · MVP · Now-Next-Later' },
    ],
    objectives: [
      'Position a product deliberately, and name the trade-offs that come with the position chosen.',
      'Pressure-test fit across desirability, feasibility, viability, and responsibility — including the blind spot each one hides.',
      'Use an MVP to buy the most validated learning per unit of effort, and choose the right format for the assumption being tested.',
    ],
    sources: [
      {
        label: 'Digital Product Management, Day 4 lecture materials — Ujwal Kayande & Luke Chandler (2026)',
        url: '#',
      },
      {
        label: 'Andrea Saez, “Theme-Based Product Roadmaps: Something Everyone Can Understand” (ProdPad)',
        url: '#',
      },
      { label: 'Eric Ries, “Minimum Viable Product: A Guide” (Startup Lessons Learned, 2009)', url: '#' },
    ],
    sections: [
      {
        id: 'positioning',
        kicker: 'Where you compete',
        heading: 'Finding a valuable position',
        intro:
          'Product-market fit isn’t a milestone you hit once and move past — it’s a state you keep earning as the market, the competition and the product all keep moving. A product that fit well a year ago can drift out of fit without a line of code changing.',
        blocks: [
          {
            type: 'cards',
            items: [
              { title: 'Positioning', body: 'What a product serves, and who it serves it to.' },
              {
                title: 'Trade-offs',
                body: 'Choosing which activities to do — and, just as deliberately, which not to. Day 2 covered the discipline of saying no at the strategy level; positioning is where that discipline shows up in the product itself.',
              },
              { title: 'Fit', body: 'How the chosen activities reinforce each other, rather than pulling in different directions.' },
            ],
          },
          {
            type: 'cards',
            items: [
              {
                title: 'Variety-based',
                body: 'The specialist — one niche thing done exceptionally well, for a lot of people. DocuSign, Slack, Canva.',
              },
              {
                title: 'Needs-based',
                body: 'The one-stop shop — everything for one well-defined group. Xero, Employment Hero.',
              },
              {
                title: 'Access-based',
                body: 'The big fish in a small pond — the default for a context, rather than the only option on paper. Atlassian.',
              },
            ],
          },
          {
            type: 'paragraph',
            text: 'None of the three is inherently better than the others — trying to be all three at once, for the same product, is usually how a team ends up with a position that resonates with no one.',
          },
        ],
      },
      {
        id: 'optionality',
        kicker: 'Strategic choice',
        heading: 'Positioning against the competition',
        blocks: [
          {
            type: 'paragraph',
            text: 'Beyond a general archetype, products make deliberate choices along three further dimensions — and these carry real tensions rather than synergies. Being strong at one end usually means consciously giving up strength at the other.',
          },
          {
            type: 'hexagon',
            axes: [
              {
                name: 'Centricity',
                poles: [
                  { label: 'Scalability', example: 'Netflix', desc: 'Growth in users, content, and locations.' },
                  { label: 'Personalisation', example: 'Spotify', desc: 'Growth in value per individual.' },
                ],
              },
              {
                name: 'Connectivity',
                poles: [
                  { label: 'Continuity', example: 'Tesla', desc: 'Growth in value for one user over a long relationship.' },
                  { label: 'Community', example: 'YouTube', desc: 'Growth through people connecting with each other.' },
                ],
              },
              {
                name: 'Certainty',
                poles: [
                  { label: 'Innovation', example: 'Google', desc: 'Growth through novelty and new possibility.' },
                  { label: 'Trust', example: 'Amazon', desc: 'Growth through consistency and reliability.' },
                ],
              },
            ],
            caption: 'The poles are ends of an axis, not a menu — a product sits somewhere along each.',
          },
          {
            type: 'paragraph',
            text: 'A product needn’t pick an extreme on every dimension, but pretending it can maximise both ends of all three at once is usually a sign the strategy hasn’t made a real choice yet.',
          },
        ],
      },
      {
        id: 'fit-lenses',
        kicker: 'Revisited',
        heading: 'Where teams develop blind spots',
        intro:
          'Day 1 put desirability, feasibility and viability at the centre of every product-level decision — “does it fit the market” means all three are true at the same time, and each has a blind spot that’s rarely visible from inside the team.',
        blocks: [
          {
            type: 'cards',
            items: [
              {
                title: 'Desirability blind spots',
                body: 'Who might be excluded from the user base; what — or who — this replaces; who might be harmed by widespread use; and whether customers are actually distributed the way the product assumes.',
              },
              {
                title: 'Feasibility blind spots',
                body: 'Whether the product is built on a biased system — a legacy platform, an algorithm trained on past conversion success, or core technology inaccessible to some customers.',
              },
              {
                title: 'Viability blind spots',
                body: 'Which metrics increase or reduce bias, whether growth actually benefits the users it claims to serve, and whether the product is reliant on limited or fragile resources.',
              },
            ],
          },
        ],
      },
      {
        id: 'desirability',
        kicker: 'Deep dive',
        heading: 'Why some products are hard to put down',
        blocks: [
          {
            type: 'paragraph',
            text: 'Behavioural game designer John Hopson, credited with originating the core game loop — also called the compulsion loop — asked a pointed question about slot machines: if there were a 0% chance of winning, would anyone still play? A slot machine with no possible reward is a boring, repetitive task. What holds attention isn’t the game; it’s the variability of the reward.',
          },
          {
            type: 'cards',
            items: [
              {
                title: 'Ratio schedules',
                body: 'A reward after a certain number of actions — an extra life after defeating twenty opponents.',
              },
              {
                title: 'Interval schedules',
                body: 'A reward after a certain amount of time — a power-up appearing thirty minutes after the last one was collected.',
              },
            ],
          },
          {
            type: 'quote',
            quote:
              'By understanding the fundamental patterns that motivate how players respond to what we ask of them, we can design games to bring out the kind of player that we want.',
            attribution: 'John Hopson, behavioural game designer',
          },
          {
            type: 'callout',
            kind: 'warning',
            title: 'Not just a game mechanic',
            body: 'The same mechanics appear, deliberately or not, in social feeds, streak counters, notification design and loyalty programmes — which is exactly why desirability and responsible design have to be considered together, not separately. More on that fourth lens shortly.',
          },
        ],
      },
      {
        id: 'demand-funnel',
        kicker: 'Deep dive',
        heading: 'How people find, trust, and stay',
        blocks: [
          {
            type: 'paragraph',
            text: 'Desirability doesn’t stop at whether the product solves the problem — it extends to whether anyone ever discovers, trusts and sticks with the solution.',
          },
          {
            type: 'funnel',
            stages: [
              {
                label: 'Exposure and awareness',
                note: 'Content, social, paid, organic search — get the value proposition in front of people at all.',
              },
              { label: 'Consideration', note: 'Trusted signals guide the decision: ratings, reviews, referrals.' },
              {
                label: 'Conversion',
                note: 'A tight onboarding process. Every unnecessary click or form field is a chance to lose an interested lead.',
              },
              {
                label: 'Relationship',
                note: 'Personalisation and genuine hospitality — the quality of customer service compounds here.',
              },
              {
                label: 'Retention',
                note: 'Loyalty and advocacy: the highest-leverage stage, not an afterthought bolted on the end.',
              },
            ],
            caption:
              'A demand funnel, concerned with how a product reaches and keeps a market. Distinct from Day 5’s hiring funnel, which runs a candidate through a phone screen, a one-on-one loop, and a panel presentation.',
          },
          {
            type: 'callout',
            kind: 'info',
            title: 'Overinvest at the ends',
            body: '85% of people won’t download an app rated two stars or below in the app store, and it’s roughly five times more expensive to replace a customer than to retain one — which is what makes the top and bottom of the funnel the two places worth overinvesting in.',
          },
        ],
      },
      {
        id: 'after-launch',
        kicker: 'Deep dive',
        heading: 'What changes once you go live',
        blocks: [
          {
            type: 'paragraph',
            text: 'Feasibility asks a simple question — do we have the resources, technology and capability to deliver the vision — but the honest answer changes the moment a product ships. Before launch a team builds toward a hypothesis; after launch the same team inherits four very different kinds of work, and confusing them is a common source of roadmap chaos.',
          },
          {
            type: 'table',
            data: {
              caption: 'Four kinds of work a live product generates',
              columns: [
                { key: 'work', label: 'Work type' },
                { key: 'pulled', label: 'Pulled by' },
                { key: 'delivers', label: 'Delivers' },
                { key: 'examples', label: 'Examples' },
              ],
              rows: [
                {
                  work: 'Features',
                  pulled: 'Customers',
                  delivers: 'New business value',
                  examples: 'Epics, user stories, business requirements',
                },
                {
                  work: 'Defects',
                  pulled: 'Customers',
                  delivers: 'Quality',
                  examples: 'Bugs, incidents, change requests',
                },
                {
                  work: 'Risks',
                  pulled: 'Security and risk officers',
                  delivers: 'Security, governance, compliance',
                  examples: 'Vulnerabilities, regulatory requirements',
                },
                {
                  work: 'Debts',
                  pulled: 'Architects',
                  delivers: 'Removal of impediments to future delivery',
                  examples: 'API additions, refactoring, automation',
                },
              ],
            },
          },
          {
            type: 'paragraph',
            text: 'This four-way split is also a translation layer between engineering and leadership.',
          },
          {
            type: 'translation',
            leftLabel: 'In tech language',
            rightLabel: 'In exec language',
            pairs: [
              { left: 'Features', right: 'Value', note: 'The benefit produced.' },
              { left: 'Defects', right: 'Quality', note: 'As perceived by the customer, not as measured internally.' },
              { left: 'Risks', right: 'Cost', note: 'The cost of producing the benefit safely.' },
              { left: 'Debts', right: 'Happiness', note: 'The engagement and satisfaction of the people doing the work.' },
            ],
            caption:
              'A team that only ever discusses features in a roadmap review is, almost by definition, hiding three-quarters of what’s consuming its capacity.',
          },
          {
            type: 'callout',
            kind: 'tip',
            title: 'From establishing structure to scaling it',
            body: 'Many organisations describe the shift from early-stage to scaled delivery through how teams are organised, how they’re expected to behave, and how they operate. Early on the priority is establishing clear structures, trusting teams to own outcomes, and making fast decisions on limited information. Once a product has real traction the priority shifts — agility across functional silos, moving from approving individual projects to managing a portfolio, and treating risk as “what must go right” rather than only “what could go wrong”. The framing varies by organisation; the underlying shift doesn’t.',
          },
          { type: 'subheading', text: 'DevOps, briefly' },
          {
            type: 'paragraph',
            text: 'DevOps is roughly Agile plus IT service management discipline, and it becomes a product manager’s ally precisely because it removes manual friction between “we decided to build this” and “customers can use it”.',
          },
          {
            type: 'cards',
            items: [
              { title: 'Automation', body: 'Testing, builds, releases, environment provisioning.' },
              { title: 'Collaboration', body: 'Genuine communication between functions, not just tooling.' },
              {
                title: 'Continuous improvement',
                body: 'Waste reduction, watching release-time and recovery-time metrics.',
              },
              { title: 'A tight feedback loop', body: 'Keeps the team pointed at what users actually want.' },
            ],
          },
          {
            type: 'paragraph',
            text: 'DevSecOps extends this by building security and compliance requirements in from the start of application creation, rather than bolting them on at the end.',
          },
        ],
      },
      {
        id: 'viability',
        kicker: 'Deep dive',
        heading: 'Measurable, and sustainable',
        blocks: [
          {
            type: 'paragraph',
            text: 'Viability asks whether a product delivers business value that can be measured and sustained — not just a single good quarter. Three examples make the point better than a definition.',
          },
          {
            type: 'cards',
            items: [
              {
                title: 'A generational shift doesn’t create value on its own',
                body: 'The jump from 3G to 4G created a roughly $400 billion app industry, from ride-hailing to photo sharing. 5G was supposed to do the same for self-driving cars, remote surgery and smart factories, but its fast mode only works close to a tower, so much of that promised value never materialised. 6G research now promises up to ten times 5G’s real-world speed — worth asking what problems that actually solves, versus what it merely sounds like it solves.',
              },
              {
                title: 'Old technology can outlive its original purpose',
                body: 'The QR code was invented in 1994 by Denso Wave to track individual car parts more precisely than a barcode could. It stayed a niche industrial tool for more than two decades, until forced contactless ordering during the COVID-19 pandemic made it a mainstream consumer pattern almost overnight. Timing and context can matter as much as the technology.',
              },
              {
                title: 'A well-defined niche can be viable at small scale',
                body: 'Gather My Crew, launched in 2021, helps people coordinate practical help during illness or grief, solving the specific problem that people are often too embarrassed to ask for help even when it’s being offered. It’s structured as a registered charity rather than a company, which is itself a viability decision: the business model doesn’t have to be a traditional one to be sustainable.',
              },
            ],
          },
        ],
      },
      {
        id: 'responsibility',
        kicker: 'A fourth lens',
        heading: 'Responsibility',
        blocks: [
          {
            type: 'paragraph',
            text: 'The first three lenses cover whether a product works for the user and the business. A growing body of practice argues for a fourth question as equally core: is this product making a wider positive impact on the society and community it operates in?',
          },
          {
            type: 'diamond',
            center: 'Product fit',
            nodes: [
              { label: 'Desirability', desc: 'Does it solve a real problem for people?' },
              { label: 'Feasibility', desc: 'Can delivery keep pace once it is live?' },
              { label: 'Viability', desc: 'Does the value still compound a year from now?' },
              { label: 'Responsibility', desc: 'Is it a good thing for the world it lands in?' },
            ],
            emphasisIndex: 3,
            caption: 'A fourth question added to Day 1’s three-way test, not a replacement for it.',
          },
          {
            type: 'cards',
            items: [
              { title: 'Inclusion', body: 'Access for all, avoiding bias, removing unnecessary barriers.' },
              { title: 'Privacy', body: 'Protecting individuals and their data.' },
              {
                title: 'Sustainability',
                body: 'Avoiding negative long-term impact, genuinely considering the effects of change over time.',
              },
            ],
          },
          {
            type: 'ladder',
            tiers: [
              {
                label: 'Equality',
                meta: 'same treatment',
                desc: 'Equal treatment and support regardless of identity, social position or status.',
              },
              {
                label: 'Equity',
                meta: 'different treatment',
                desc: 'Different treatment and support, based on identity or position, in order to create equal access or equitable outcomes.',
              },
              {
                label: 'Justice',
                meta: 'no compensation needed',
                desc: 'Removal of the systemic barriers themselves, so equal access no longer requires ongoing compensation to achieve.',
              },
            ],
            caption: 'These three are used interchangeably far more often than they should be.',
          },
          {
            type: 'paragraph',
            text: 'Air Robe lets customers resell or rent out clothing they’ve bought, in one click at the point of original purchase — good for the customer’s wallet and for the footprint of fast fashion, without asking the customer to do anything more effortful than they already were. That’s often what responsible design looks like in practice: not a separate initiative bolted onto the roadmap, but a deliberate choice made at a point where it was still cheap to make.',
          },
        ],
      },
      {
        id: 'mvp',
        kicker: 'The tool',
        heading: 'The minimum viable product',
        intro:
          'If product-market fit is the destination, the MVP is the primary tool for finding the fastest, cheapest path there.',
        blocks: [
          {
            type: 'quote',
            quote:
              'The minimum viable product is that version of a new product which allows a team to collect the maximum amount of validated learning about customers with the least effort.',
            attribution: 'Eric Ries, Minimum Viable Product: A Guide',
          },
          {
            type: 'formula',
            expression: 'MVP = Maximum validated learning ÷ Minimum effort',
            note: 'Both words are doing real work — the maximum and the minimum are the whole definition.',
          },
          {
            type: 'paragraph',
            text: 'An MVP is not about building something minimal. It is genuinely more work in one specific sense — it adds the overhead of deliberately learning something from the first iteration, which usually means real energy spent talking to customers or instrumenting analytics, rather than shipping and moving on.',
          },
          {
            type: 'paragraph',
            text: 'It isn’t formulaic either. Ries’s own example: one company took six months to build an MVP, a significant improvement on a previous venture that spent nearly five years before reaching the market at all. At another point his team spent two weeks building a feature nobody wanted, when a simple smoke-test ad campaign would have revealed that in days. Underneath all of it sits the Build–Measure–Learn loop, turning faster the smaller the bet.',
          },
          {
            type: 'cards',
            items: [
              { title: 'Landing-page test', body: 'Measure signup intent before anything is built.' },
              { title: 'Concierge', body: 'Deliver the service manually before automating any of it.' },
              { title: 'Wizard of Oz', body: 'A front end that looks automated, operated by hand behind the curtain.' },
              { title: 'Single-feature', body: 'One narrow slice of the eventual product, shipped to a small audience.' },
            ],
          },
          {
            type: 'paragraph',
            text: 'The point is never to build less for its own sake — it’s to learn the most about the riskiest assumption for the least invested effort, and then be honest about what that learning says to do next.',
          },
        ],
      },
      {
        id: 'roadmap-format',
        kicker: 'Shared language',
        heading: 'A roadmap everyone can read',
        intro:
          'Day 3 covered why dated public roadmaps erode trust and how to keep an internal one honest — once a team has validated learning to act on, the new question is how that learning becomes a plan anyone outside the team can actually read.',
        blocks: [
          {
            type: 'paragraph',
            text: 'The test is simple — visual, accessible, clear. Anyone looking at it should be able to answer three questions: what are we doing, why are we doing it, and how does this tie back to our goals?',
          },
          {
            type: 'quote',
            quote:
              'We need to let go of the idea that we can enumerate a list of features that represents what we’ll do in the future. Rather than sharing feature lists with the rest of the company, we should be communicating how we will make decisions.',
            attribution: 'Teresa Torres, product discovery coach',
          },
          {
            type: 'horizons',
            columns: [
              {
                label: 'Now',
                note: 'Actively being worked on.',
                cards: [
                  'Reduce the steps to first payment',
                  'Single sign-on for enterprise accounts',
                  'Cut onboarding drop-off at step three',
                ],
              },
              {
                label: 'Next',
                note: 'Coming up soon, and researched enough to commit to.',
                cards: ['Make pricing legible for teams above 50 seats', 'Bring reporting to mobile'],
              },
              {
                label: 'Later',
                note: 'Worth tackling eventually — not yet researched enough to promise.',
                cards: ['A better story for multi-region teams', 'Rethink how permissions are granted'],
              },
            ],
            caption: 'The horizons carry no dates, and the vagueness on the right is the point, not a gap.',
          },
          {
            type: 'paragraph',
            text: 'The cards should be initiatives — problems to be solved — not features to be built. Working at the initiative level means asking what would actually resolve a problem area, instead of accumulating an ever-growing list of individual feature requests, one per piece of feedback received. As UX researcher Jared Spool puts it, a theme is a promise to solve problems, not build features. A card should stay strategic rather than tactical — “add single sign-on” is a legitimate initiative; “rewrite the transactional emails” is a task, and belongs in a backlog.',
          },
          {
            type: 'ladder',
            tiers: [
              {
                label: 'Idea',
                meta: 'furthest out',
                desc: 'Tactical suggestions answering “what problem are you trying to solve?”',
              },
              {
                label: 'Customer feedback',
                meta: 'as it firms up',
                desc: 'The specific feedback linked to the initiative, so the problem stays evidenced.',
              },
              {
                label: 'User story',
                meta: 'ready for Now',
                desc: 'Written in the standard “as a user, I want to X in order to Y” form.',
              },
            ],
            caption:
              'Cards still sitting in Later don’t need any of this yet — that’s the point of the horizons, letting a team be honest about how much is actually known rather than forcing premature detail onto genuine uncertainty.',
          },
        ],
      },
      {
        id: 'marginalia',
        kicker: 'Worth keeping',
        heading: 'Marginalia',
        blocks: [
          {
            type: 'quoteBank',
            items: [
              {
                quote:
                  'By understanding the fundamental patterns that motivate how players respond to what we ask of them, we can design games to bring out the kind of player that we want.',
                attribution: 'John Hopson, behavioural game designer',
              },
              {
                quote:
                  'The minimum viable product is that version of a new product which allows a team to collect the maximum amount of validated learning about customers with the least effort.',
                attribution: 'Eric Ries, Minimum Viable Product: A Guide',
              },
              {
                quote:
                  'We need to let go of the idea that we can enumerate a list of features that represents what we’ll do in the future. Rather than sharing feature lists with the rest of the company, we should be communicating how we will make decisions.',
                attribution: 'Teresa Torres, product discovery coach',
              },
              {
                quote: 'A theme is a promise to solve problems, not build features.',
                attribution: 'Jared Spool, founder, User Interface Engineering',
              },
              {
                quote: 'Fit isn’t a milestone you pass once — it’s a state you keep earning, quarter after quarter.',
                attribution: 'Day 4 lecture notes, MBS Digital Product Management',
              },
            ],
          },
        ],
      },
      {
        id: 'looking-ahead',
        kicker: 'Next',
        heading: 'Looking ahead to Day 5',
        blocks: [
          {
            type: 'callout',
            kind: 'info',
            title: 'From one product to the discipline itself',
            body: 'Day 4 closes the loop between building the right thing and proving it’s right — all four lenses pointing at the same product at the same time. Day 5 zooms out one more level: from any single product to the organisation and the people around it — how a company structures itself to keep making good product decisions as it scales, and how you find, vet and close the product managers who will keep making them.',
          },
        ],
      },
    ],
    takeaways: [
      'Positioning is a deliberate trade-off, not a slogan — variety, needs, or access-based, and further choices along centricity, connectivity and certainty that pull against each other.',
      'Fit means desirability, feasibility, viability and responsibility are all true at once — and each has a blind spot that’s invisible from inside the team.',
      'An MVP isn’t about building less — it’s about buying the maximum validated learning for the minimum effort, and being honest about what the learning says to do next.',
      'A roadmap everyone can read holds initiatives, not features, in Now-Next-Later — visual, accessible, clear, with detail accruing only as a card nears Now.',
    ],
  },

  {
    n: 5,
    slug: 'day-5',
    title: 'The PM Career & Leading Product Teams',
    subtitle:
      'Zooming out from any one product to the organisation and the people: how a company keeps making good product decisions as it scales, and how you build the team that keeps doing it.',
    accent: 'brand-dark',
    themes: ['Scaling an organisation', 'The Spotify Model', 'Hiring product managers', 'Closing and keeping them'],
    promise:
      'How a product organisation keeps making good decisions as it scales — through the trade-offs behind the Spotify Model — and how to set a hiring bar, run an interview process, and close and keep the product managers who’ll keep doing it.',
    meta: [
      { label: 'Theme', value: 'People' },
      { label: 'Duration', value: '~90 min' },
      { label: 'Frameworks', value: 'Spotify Model · The hiring bar · Reward centres' },
    ],
    objectives: [
      'Read an org model as a set of deliberate trade-offs rather than a template to copy.',
      'Define an explicit hiring bar before interviewing, rather than judging on vibes.',
      'Find out what actually motivates a candidate, and describe concretely how the role will deliver it.',
    ],
    sources: [
      {
        label: 'Digital Product Management, Day 5 lecture materials — Ujwal Kayande & Luke Chandler (2026)',
        url: '#',
      },
      { label: 'Todd Jackson, “Find, Vet and Close the Best Product Managers” (First Round Review, 2016)', url: '#' },
    ],
    sections: [
      {
        id: 'scaling-people',
        kicker: 'The shift',
        heading: 'From building a product to leading the people who build it',
        blocks: [
          {
            type: 'paragraph',
            text: 'Everything covered so far quietly assumed a working team, structured so good decisions happen quickly. That assumption stops holding the moment a company scales past a handful of people — the processes that let ten people move fast are often the exact ones that grind five hundred to a halt, and the reverse is just as true, echoing the shift Day 4 flagged in miniature, from establishing structure to scaling it.',
          },
          {
            type: 'paragraph',
            text: 'This closing day looks at that problem through two lenses: a case study in a company that scaled its product organisation deliberately and imperfectly, and a practical guide to building the team in the first place — finding, evaluating, and keeping the people who’ll make the next round of good decisions.',
          },
        ],
      },
      {
        id: 'origins',
        kicker: 'Case study',
        heading: 'What Spotify emerged from',
        blocks: [
          {
            type: 'paragraph',
            text: 'Spotify didn’t emerge into an empty market — it emerged out of the collapse of two very different approaches to digital music. Napster, formed in 1999, was hit with a landmark injunction from Metallica in 2001, forced to strip the band’s copyrighted songs from its index, and pushed into Chapter 7 liquidation by 2002 after further lawsuits. The Pirate Bay, founded in 2003 by Swedish anti-copyright activists, took a more defiant route — indexing torrents for music, television, film and games — and survived until 2019.',
          },
          {
            type: 'paragraph',
            text: 'Spotify launched in Sweden in 2006, expanded into the UK and US between 2010 and 2012, then scaled globally from there. Its core insight wasn’t “make streaming legal” — it was that something frictionless and legal could out-compete piracy on convenience, which is a different claim entirely.',
          },
          {
            type: 'callout',
            kind: 'info',
            title: 'Not covered here: the free tier',
            body: 'How a free tier actually converts listeners into paying subscribers is its own mechanic, and it belongs to the pricing toolkit (/toolkit/pricing) rather than to this walkthrough — that ground isn’t retread here.',
          },
        ],
      },
      {
        id: 'four-pillars',
        kicker: 'The turn',
        heading: '2011: the competitive picture changes',
        blocks: [
          {
            type: 'paragraph',
            text: 'By 2011 Spotify correctly anticipated that Apple, Google and Amazon were all building music subscription services of their own — right on all three counts: Google Play Music launched that same year, Amazon’s unlimited tier followed in 2014, and Apple Music arrived in 2015. It was equally honest about where it couldn’t compete with companies that size: the depth of their pockets, their pull on top talent, Sweden’s comparatively high domestic tax rates, and the looming reality that streaming music itself was on a path to becoming a commodity rather than a differentiator. Its answer wasn’t to out-spend them.',
          },
          {
            type: 'cards',
            items: [
              {
                title: 'Indefensible differentiation',
                body: 'Be first, continuously — keep innovating faster than competitors can copy, rather than banking on any single moat holding forever.',
              },
              {
                title: 'Ubiquity',
                body: 'Be everywhere. Where competitors built walled gardens around their own ecosystems, the counter-strategy was platform-agnostic reach.',
              },
              {
                title: 'The right music for every moment',
                body: 'Contextual playlists for dinner, running, focus — behavioural data on real usage feeding straight back into the product.',
              },
              {
                title: 'Personalisation and data',
                body: 'More usage means a better experience means more usage — a flywheel deliberately reinforced with machine learning.',
              },
            ],
          },
          {
            type: 'paragraph',
            text: 'Taken together, the whole strategy optimised for three things explicitly: speed, experimentation, and scale.',
          },
        ],
      },
      {
        id: 'squad-model',
        kicker: 'At scale',
        heading: 'The Spotify Model',
        blocks: [
          {
            type: 'paragraph',
            text: 'To sustain that pace as headcount grew, Spotify built an organisational model that became famous far beyond music — the caveat belongs up front: plenty of companies tried to copy it wholesale, and most of those attempts failed, because it was a response to Spotify’s specific context, not a universal template.',
          },
          {
            type: 'squadModel',
            tribe: {
              name: 'Listening experience',
              squads: [
                { name: 'Search', mission: 'Help listeners find the right thing, fast.' },
                { name: 'Playlists', mission: 'Own the experience of curating and following playlists.' },
                { name: 'Playback', mission: 'Keep audio starting instantly and playing without interruption.' },
              ],
            },
            chapter: { name: 'Backend engineering', desc: 'One discipline, cutting across every squad — led by someone accountable for craft, not for delivery dates.' },
            guild: { name: 'Accessibility', desc: 'A voluntary community of interest. Anyone can join, and nobody reports into it.' },
            caption: 'A tribe groups a handful of squads working on a related part of the product; chapters and guilds cut across them sideways.',
          },
          {
            type: 'cards',
            items: [
              {
                title: 'Mission-driven squads',
                body: 'Small, autonomous, and never purely business-as-usual — real autonomy over what a squad works on within its mission, not just how; bureaucracy treated as hostile to speed; failure reframed as learning; slack time deliberate; outcomes valued over task completion.',
              },
              {
                title: 'Chapter leads',
                body: 'Own competency growth within a discipline — explicitly not delivery deadlines.',
              },
              {
                title: 'Tribe leads',
                body: 'Effectively people operations for a tribe — onboarding new projects and new people into it.',
              },
              {
                title: 'Product owners',
                body: 'A mini-CEO for one product area — the key decision-maker and communicator for that slice.',
              },
              {
                title: 'Agile coaches',
                body: 'Focused on making teams genuinely high-performing, giving them tools to learn fast rather than enforcing a process.',
              },
            ],
          },
        ],
      },
      {
        id: 'not-all-roses',
        kicker: 'The cost',
        heading: 'It wasn’t all roses',
        blocks: [
          {
            type: 'paragraph',
            text: 'Large initiatives became genuinely messy to coordinate, budgeting was effectively absent in any formal sense, and ten teams might independently invent ten different ways to write a unit test. Communication grew noisy enough that duplicated effort became common. Guilds drifted out of control, reportedly spending more energy on conferences than on their original purpose. Several roles — agile coaches, chapter leads, even product owners — went through real existential crises about their purpose, and chapter lead was eventually scrapped as a formal role altogether.',
          },
          {
            type: 'callout',
            kind: 'warning',
            title: 'Not a case against autonomy',
            body: 'The honest lesson isn’t “autonomy is bad” — every one of those trade-offs was made deliberately in exchange for speed and scale, and continuous, deliberate improvement is what kept the model net-positive despite the mess. An organisational model isn’t designed once and left alone; it’s renegotiated as the company’s real constraints change.',
          },
          {
            type: 'paragraph',
            text: 'What actually held it together through the messier periods wasn’t the label on the org chart — it was servant leadership, psychological safety, a genuine “no sacred cows” willingness to challenge the status quo, and a customer-focused culture underneath. The discipline of continuous improvement mattered far more than what any of the boxes were called. Getting autonomy and alignment both right at once, rather than half-committing to either, is the harder and more transferable lesson than the org chart itself.',
          },
        ],
      },
      {
        id: 'redefining-speed',
        kicker: 'The pivot',
        heading: 'When the same word starts meaning something else',
        blocks: [
          {
            type: 'paragraph',
            text: 'By 2015 Spotify’s own definition of success changed. The original goals had done their job of getting the company big and fast — but the same forces that produced ten ways to write a unit test had also produced a genuinely fragmented codebase across web, desktop and mobile clients.',
          },
          {
            type: 'shift',
            left: { title: '2011 goals', items: ['Speed', 'Experimentation', 'Scale'] },
            right: { title: '2015 goals', items: ['Reusability', 'Unification', 'Speed', 'Satisfaction'] },
            center: '2015',
            caption: 'The same word survives the transition — “speed” — but what it has to mean underneath changes completely.',
          },
          {
            type: 'cards',
            items: [
              {
                title: 'Reusability',
                body: 'Write shared code once across clients instead of re-solving the same problem in each, with an ambition to expose more platform APIs to more clients over time.',
              },
              {
                title: 'Unification',
                body: 'One set of components serving multiple clients, so design lands consistently and users get a coherent experience moving between mobile and desktop.',
              },
              {
                title: 'Speed, redefined',
                body: 'No longer raw output but the outcome of a healthy single-architecture codebase — measured through test coverage, maintainability, readability, and how easily code can eventually be removed.',
              },
              {
                title: 'Satisfaction',
                body: 'Continuously folding in user feedback and research, with accessibility treated as part of moving faster rather than a separate initiative.',
              },
            ],
          },
          {
            type: 'paragraph',
            text: '“Speed” appears in both lists, and means something different in each. In 2011 it meant velocity of experimentation; by 2015 it meant the natural output of a healthy system. Scaling an organisation well sometimes means keeping the same word on the strategy slide while completely redefining what has to be true underneath it.',
          },
        ],
      },
      {
        id: 'the-bar',
        kicker: 'The bar',
        heading: 'What actually makes a PM excellent',
        intro:
          'Day 1’s competency model mapped the craft itself; this section is about something different — the bar you set before you start interviewing.',
        blocks: [
          {
            type: 'paragraph',
            text: 'Todd Jackson, who has hired product managers across Google, Twitter and Dropbox, breaks team-building into finding candidates, vetting them properly, and closing the ones you want. Underneath the variation in title and background, the best PMs reliably do three things: articulate what a winning product looks like, rally a team to actually build it, and iterate until they get it right.',
          },
          {
            type: 'horizons',
            columns: [
              {
                label: 'Must-have',
                note: 'Jackson has never seen a great PM missing any of these.',
                cards: [
                  'Outstanding intellectual ability',
                  'The ability to synthesise information',
                  'Excellent communication',
                  'Effectiveness inside this company’s culture',
                ],
              },
              {
                label: 'Good-to-have',
                note: 'Earns credibility with engineers and designers faster.',
                cards: ['A technical background', 'Entrepreneurial spirit', 'Strong analytical and strategic thinking'],
              },
              {
                label: 'Bonus',
                note: 'Valuable on a small team; less critical once there are specialists.',
                cards: ['Writing code', 'Producing mockups', 'Running their own data analysis'],
              },
            ],
            caption: 'A rubric to write down before interviewing, not a universal formula.',
          },
          {
            type: 'quote',
            quote: 'I’ve never seen a truly great product manager that did not have all four qualities in the Must-Have column.',
            attribution: 'Todd Jackson, VP of Product and Design, Dropbox',
          },
          {
            type: 'paragraph',
            text: 'None of this is universal — a SaaS company with a large sales team weights these differently from a forty-person consumer social app. The exercise is to write your own version before you start interviewing, so you’re evaluating against something explicit rather than vibes.',
          },
        ],
      },
      {
        id: 'paths-in',
        kicker: 'Getting in',
        heading: 'There is no single route in',
        blocks: [
          {
            type: 'paragraph',
            text: 'People often arrive at product management by default rather than design, as Day 1 already noted — and the absence of a single route in is a feature of the discipline, not noise to filter out.',
          },
          {
            type: 'cards',
            items: [
              {
                title: 'The technologist with a side cause',
                body: 'A computer-science background paired with an unrelated non-profit initiative — evidence of technical depth and of building something for its own sake.',
              },
              {
                title: 'The rookie with real evidence',
                body: 'An early-career hire with no full-time experience, but real evidence of both technical and creative capability.',
              },
              {
                title: 'The consultant who leads without authority',
                body: 'A former management consultant with strong analytical instincts, provided they can show they lead through influence rather than command-and-control.',
              },
              {
                title: 'The engineer or designer already pulled toward product',
                body: 'Showing a clear pull toward product thinking from inside a technical or design role.',
              },
              {
                title: 'The builder from marketing or business development',
                body: 'Someone who can point to something they actually built or launched, not just pitched.',
              },
            ],
          },
          {
            type: 'paragraph',
            text: 'The common thread worth optimising for isn’t a degree or a company name — it’s evidence. Evidence of steep learning curves, evidence of things actually shipped, and evidence of how someone behaves when they disagree with the people around them.',
          },
        ],
      },
      {
        id: 'the-process',
        kicker: 'The process',
        heading: 'Three stages, and what each one is for',
        blocks: [
          {
            type: 'funnel',
            stages: [
              {
                label: 'Phone screen or coffee',
                note: 'Mostly mutual fit. If you’re a lesser-known company, expect to spend half of it convincing them to keep engaging.',
              },
              {
                label: 'The one-on-one loop',
                note: 'Founders, PMs, an engineering lead, a design lead, a business lead — swap founders for a VP of Product at a larger company.',
              },
              {
                label: 'The panel presentation',
                note: 'Only once there’s real mutual enthusiasm. A small group, live, with questions.',
              },
            ],
            caption: 'A hiring funnel for candidates, distinct from Day 4’s demand funnel for customers.',
          },
          {
            type: 'paragraph',
            text: 'Across all of those conversations you’re really screening for eight things: intellectual ability, communication, leadership, cultural effectiveness, whether they genuinely understand what users want, strategic and analytical thinking, technical background, and entrepreneurial spirit.',
          },
          {
            type: 'paragraph',
            text: 'The panel itself asks candidates to present to eight to ten people on two questions — a genuinely revolutionary product from the last two years, why it’s well designed and how it will reshape its market; then three specific improvements they’d make and how they’d test whether those changes worked. The point isn’t the product they pick. It’s watching how they think out loud, handle live Q&A, and organise an argument under real-time pressure — all things a working PM does constantly.',
          },
        ],
      },
      {
        id: 'questions',
        kicker: 'Worth stealing',
        heading: 'Six questions, and what a strong answer looks like',
        blocks: [
          {
            type: 'table',
            data: {
              caption: 'Six interview questions, and what separates a weak answer from a strong one',
              columns: [
                { key: 'tests', label: 'What it tests' },
                { key: 'question', label: 'The question' },
                { key: 'strong', label: 'What a strong answer does' },
              ],
              rows: [
                {
                  tests: 'Product sense',
                  question: '“Name a product you think is exceptionally well designed — ideally something non-electronic. What makes it well designed?”',
                  strong: 'Goes into real detail unprompted, notices where a product’s user and its customer differ (a child’s scooter bought by a parent), and gets visibly energised by small details. Constraining it to a physical object makes a rehearsed answer much harder.',
                },
                {
                  tests: 'Technical fluency',
                  question: '“Walk me through, in as much detail as you can, what happens when I type a URL into my browser and hit enter.”',
                  strong: 'Walks through DNS lookup, the request/response cycle and rendering at reasonable depth. Not because a PM writes that code — because it separates genuine fluency from claimed fluency fast.',
                },
                {
                  tests: 'Leadership',
                  question: '“Tell me about a time you disagreed with engineers or designers on your team. What did you do?”',
                  strong: 'Diagnoses the root disagreement, names a concrete resolution mechanism (time-boxing a disputed feature and revisiting it by a set date), and closes with what they changed afterward — rather than drifting into blame.',
                },
                {
                  tests: 'Strategic thinking',
                  question: '“What are all the implications of this technology shift?”',
                  strong: 'Organises second- and third-order effects into a framework instead of free-associating a list, and shows real imaginative range beyond the first ring of obvious effects.',
                },
                {
                  tests: 'Self-awareness',
                  question: '“What part of product management do you find least interesting?”',
                  strong: 'Names the unglamorous work honestly while showing they understand why it matters to the team — rather than implying notes, scheduling and coordination are beneath them.',
                },
                {
                  tests: 'Motivation',
                  question: '“Why do you want to work on this product, in this space?”',
                  strong: 'Shows real preparation: specific opinions on what’s working, what isn’t, and where they’d take it. Signals commitment to the space, not just to this one opening.',
                },
              ],
            },
          },
        ],
      },
      {
        id: 'the-close',
        kicker: 'The close',
        heading: 'Closing the candidate',
        blocks: [
          {
            type: 'paragraph',
            text: 'The close starts far earlier than the offer conversation — at the very first interaction, through consistent communication that never leaves a candidate wondering where they stand.',
          },
          {
            type: 'paragraph',
            text: 'But there’s a PM-specific insight worth naming. Product managers, more than most disciplines, tend to be driven by a small set of reward centres, and for any individual candidate one of them usually matters distinctly more than the rest.',
          },
          {
            type: 'wheel',
            center: 'What drives them',
            emphasisIndex: 0,
            spokes: [
              { label: 'Impact', desc: 'Seeing their work roll up visibly into something the company actually cares about.' },
              { label: 'User delight', desc: 'The reaction of a real person using something they shipped.' },
              { label: 'Mission', desc: 'Believing in the underlying purpose of the product itself.' },
              { label: 'Autonomy', desc: 'Owning a real decision end to end, without needing sign-off at every step.' },
              { label: 'Recognition', desc: 'Being visibly credited for the work, inside the team and beyond it.' },
              { label: 'Financial outcome', desc: 'Compensation, equity, and the upside of the company doing well.' },
              { label: 'Learning and growth', desc: 'Being stretched into problems they haven’t solved before.' },
            ],
          },
          {
            type: 'paragraph',
            text: 'Impact is highlighted above only as an example — which spoke actually leads differs from candidate to candidate, and finding out which one is the real job. The practical move is to ask directly, since ranking these is a perfectly reasonable question to put to a candidate, and then describe concretely how that specific reward shows up in this role — the projects they’d own if it’s autonomy, the reception they’d be working toward if it’s user delight, how their work rolls up to a company objective if it’s impact. And then actually deliver on it, since keeping great PMs is at least as hard as hiring them.',
          },
          {
            type: 'quote',
            quote:
              'If you can honestly describe to a candidate how they’ll get the reward they want most, you’ll close some great candidates. Just make sure you deliver on whatever you promised. The only thing more important than hiring the best PMs is keeping them.',
            attribution: 'Todd Jackson, First Round Review',
          },
        ],
      },
      {
        id: 'marginalia',
        kicker: 'Worth keeping',
        heading: 'Marginalia',
        blocks: [
          {
            type: 'quoteBank',
            items: [
              {
                quote:
                  'A great product manager sits at the center of UX, technology and business… they have to do a lot of diverse things well, and good ones are extremely hard to find.',
                attribution: 'Todd Jackson, VP of Product and Design, Dropbox',
              },
              {
                quote: 'I’ve never seen a truly great product manager that did not have all four qualities in the Must-Have column.',
                attribution: 'Todd Jackson, VP of Product and Design, Dropbox',
              },
              {
                quote:
                  'If you can honestly describe to a candidate how they’ll get the reward they want most, you’ll close some great candidates. Just make sure you deliver on whatever you promised. The only thing more important than hiring the best PMs is keeping them.',
                attribution: 'Todd Jackson, First Round Review',
              },
              {
                quote: 'An organisational model isn’t designed once and left alone — it’s renegotiated as the company’s real constraints change.',
                attribution: 'Day 5 lecture notes, MBS Digital Product Management',
              },
            ],
          },
        ],
      },
      {
        id: 'course-wrap',
        kicker: 'Closing',
        heading: 'Five days, end to end',
        blocks: [
          {
            type: 'paragraph',
            text: 'Five days, end to end: understanding a problem deeply enough to earn the right to solve it, turning that understanding into a vision and a strategy, prioritising ruthlessly under real constraints, translating a concept into something concrete enough to build, and proving what got built actually works for the customer, the business and the technology at once.',
          },
          {
            type: 'paragraph',
            text: 'None of that survives contact with scale unless the organisation and the team around the product are deliberately designed too — and redesigned as the company’s real constraints change. Spotify is a reminder that even an excellent operating model generates real dysfunction over time, and that isn’t a sign the model failed; it’s a sign it’s time to renegotiate it. The gap this course opened with doesn’t close as scope grows — it changes shape, from one product, to a team, to an entire organisation.',
          },
          {
            type: 'callout',
            kind: 'info',
            title: 'Full circle',
            body: 'Back to where this started: the landing page’s roadmap, one more time, now with the whole week behind it. Understand the problem, build the right thing, prove it works — and keep rebuilding the team and the organisation capable of doing it again.',
          },
        ],
      },
    ],
    takeaways: [
      'An org model is a set of deliberate trade-offs for a specific context, not a template — Spotify’s squads, chapters, tribes and guilds bought speed and autonomy at the cost of coordination, budgeting and consistency, and needed constant renegotiation to stay net-positive.',
      '“Speed” meant something different in 2011 than it did by 2015 — velocity of experimentation, then the natural output of a healthy, reusable, unified codebase — a reminder that scaling well sometimes means redefining a word rather than repeating it.',
      'Write the hiring bar down before interviewing — Todd Jackson’s must-have, good-to-have and bonus tiers turn evaluation into a rubric instead of vibes, and the tiers should shift by company and stage.',
      'Product managers are driven by different reward centres — impact, user delight, mission, autonomy, recognition, financial outcome, learning and growth — and closing and keeping one means finding out which one leads and concretely delivering on it.',
    ],
  },
]

export function getDay(n: number): DayContent | undefined {
  return DAYS.find((d) => d.n === n)
}
