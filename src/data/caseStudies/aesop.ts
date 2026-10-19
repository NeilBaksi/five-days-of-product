import type { CaseStudy } from '../../types'
import w1 from '../../assets/case-studies/aesop-w1-current-state.webp'
import w2 from '../../assets/case-studies/aesop-w2-strip-collapsed.webp'
import w3 from '../../assets/case-studies/aesop-w3-ritual-open.webp'
import w4 from '../../assets/case-studies/aesop-w4-edge-cases.webp'
import w5 from '../../assets/case-studies/aesop-w5-desktop.webp'
import w6 from '../../assets/case-studies/aesop-w6-user-flow.webp'

/**
 * Aesop homepage PRD case study.
 * Source: "Aesop Homepage PRD - Neil Baksi.pdf" (28 pages, Appendices 1-10), 31 August 2026.
 * All primary research in the source (200-persona panel, 20-respondent extended block,
 * five usability sessions) is simulated with AI agents; the copy below says so wherever
 * those results appear. All prices are indicative.
 */
export const AESOP: CaseStudy = {
  slug: 'aesop-rituals',
  kicker: 'Case study · Individual PRD',
  title: 'Rituals: orientation before diagnosis on aesop.com.au',
  subtitle:
    'A homepage module that lets a first-time visitor open an everyday ritual in place, and a candid case for why it closes roughly 5 of the 16.6 points of abandonment gap, not all of them.',
  meta: [
    { label: 'Format', value: 'Product requirements document (mock exam)' },
    { label: 'Role', value: 'Sole author, written in role as the homepage product manager' },
    { label: 'Course', value: 'Digital Product Management, MBS MBA' },
    { label: 'Date', value: '31 August 2026' },
    { label: 'Research', value: 'All primary research simulated with AI agents' },
  ],
  disclosure: {
    title: 'Academic coursework, with simulated research',
    body:
      'This is an individual product requirements document I wrote for a Digital Product Management mock exam during my MBA at Melbourne Business School. It is not affiliated with or endorsed by Aesop or L’Oréal. The brief, its stakeholders and its abandonment figures were set by the exercise, and it is written in role as the homepage product manager, for review by the chief product officer. All primary research in it was simulated: a 200-persona survey panel, a 20-respondent extended block and five usability sessions were run with AI agents playing synthetic personas, and no human respondent took part. Every quote is labelled accordingly. Nothing here was built, launched or run with real users; the milestones, targets and the A/B test are plans. All prices are indicative.',
  },
  sections: [
    {
      id: 'short-version',
      kicker: 'In brief',
      heading: 'The short answer',
      blocks: [
        {
          type: 'paragraph',
          text: 'Aesop’s homepage is where roughly two in three visitors stop. Abandonment, defined as no click within five minutes, runs at 74% on mobile and 56% on desktop, which weights to about 68% (68.6% unrounded) at a 70/30 mobile split. The brief’s numbers are used as given. The PRD’s argument is that this is less a problem of persuasion, pricing or assortment than of orientation: visitors arrive, look, and find nothing they are willing to touch.',
        },
        {
          type: 'paragraph',
          text: 'The proposal is a strip of five tappable ritual cards on the homepage: the room, away from home, the morning wash, hands through the day and before sleep. A card opens in place, as a bottom sheet on mobile or inline on desktop, with no page load. It shows one to three steps, each with a product name, a line of sensorial copy, a price and its own add control. It asks the visitor nothing.',
        },
        {
          type: 'callout',
          kind: 'info',
          title: 'Where I landed on the goal',
          body:
            'The target is to take abandonment from about 68% to about 52% by 30 April 2027, a gap of 16.6 points. In the impact model the base case closes 5.0 points (30% of the gap), the low case 1.9 and the high case 10.6, so no modelled case reaches 52%. With the follow-on work in the roadmap the forecast is roughly 55%, and the last few points sit in the pinned hero, which is out of scope and escalated rather than assumed away.',
        },
      ],
    },
    {
      id: 'problem',
      kicker: 'Problem',
      heading: 'Visitors look, and find nothing they are willing to touch',
      blocks: [
        {
          type: 'callout',
          kind: 'warning',
          title: 'Simulated research',
          body:
            'The evidence in this section comes from a panel of synthetic personas played by AI agents. Counts such as “17 of 20” are counts of simulated respondents, R01 to R20, and the 90-second homepage task was self-reported by them. They show mechanism, not magnitude. The next section explains why I chose simulation and what it cannot show.',
        },
        {
          type: 'paragraph',
          text: 'The core observation is about trapdoors. Every clickable element on the homepage is a departure: navigation, tiles, the hero call to action, the store card. A visitor still working out what the brand is has little reason to give up their place, so they touch nothing. There is no in-page action anywhere, and the attention the page earns goes nowhere.',
        },
        { type: 'image', src: w1, alt: 'Low-fidelity mobile wireframe of the current Aesop homepage: a full-bleed pinned video hero with a single “Discover” call to action, a category cross-sell banner, and two product tiles under “New and notable”. Callouts point out that every element leads away from the page.', caption: 'Wireframe 1, current state on mobile. Every control on the page is a departure; there is no in-page action anywhere. Research notes on the frame come from the simulated panel. Where the frame says 8 of the 11 no-click respondents had scrolled the whole page, the Appendix 2 count is the reverse: 11 scrolled the whole page and 8 of them clicked nothing.', size: 'wide', width: 806, height: 641 },
        {
          type: 'expandable',
          title: 'Show the eight themes from the extended block',
          blocks: [
            {
              type: 'table',
              data: {
                caption: 'Themes from the extended block (n = 20, simulated), coded from open text and the task report',
                columns: [
                  { key: 'theme', label: 'Theme' },
                  { key: 'count', label: 'Count' },
                  { key: 'finding', label: 'Finding' },
                ],
                rows: [
                  { theme: 'Orientation, not diagnosis', count: '17 of 20', finding: 'They wanted to know where to start, not which product suits them. The exceptions were regular buyers.' },
                  { theme: 'Products incomprehensible in isolation', count: '16 of 20', finding: 'Names carry sensorial and literary signal but no functional signal.' },
                  { theme: 'Restraint is why they are there', count: '15 of 20', finding: 'Calm reads as confidence. Nine named badges, percentages, pop-ups and urgency as the things that would break it.' },
                  { theme: 'Quiz and form aversion', count: '14 of 20', finding: 'About sequence, not principle: 11 objected to being asked first, and 9 would answer after deciding to buy.' },
                  { theme: 'The hero costs them', count: '13 of 15 on mobile or tablet', finding: 'Four waited, taking the video for a page still loading; nine flicked past it and recalled nothing.' },
                  { theme: 'Recognition is the cheapest entry point', count: '12 of 20', finding: 'They reach for a bottle met somewhere; the page offers proper nouns and prices.' },
                  { theme: 'Scrolling is not engagement', count: '11 of 20', finding: 'Eleven read the whole page and eight of them clicked nothing; seven rejected the “no click” framing.' },
                  { theme: 'Gifting is a distinct and large mode', count: '9 of 20', finding: 'The need is a price floor and legibility, not a skin match; six wanted the cheapest respectable thing.' },
                ],
              },
            },
          ],
        },
        {
          type: 'quoteBank',
          items: [
            { quote: 'I’m not asking what’s right for my skin. I don’t even know what they’ve got yet.', attribution: 'R13, simulated respondent' },
            { quote: 'Everything on that page is a trapdoor. You touch it and you’re gone off to some other page and now you’ve got to find your way back. So you don’t touch anything.', attribution: 'Extended-block respondent, simulated' },
            { quote: 'I read the whole thing. I gave them a minute and a half of my life. How is that abandoning? I was interested. There just wasn’t anything to do.', attribution: 'Extended-block respondent, simulated' },
          ],
        },
        {
          type: 'paragraph',
          text: 'One finding cuts against the proposal and the PRD says so. Nielsen’s finding that 80.3% of viewing time falls above the fold goes against putting the module below the hero (Nielsen, 2010), which is why placement is carried as the weakest assumption. What has to be built also has to read as content rather than merchandising, which the PRD frames as a structural problem (Holmqvist et al., 2020).',
        },
        {
          type: 'expandable',
          title: 'Show the secondary evidence on homepage navigation and guided paths',
          blocks: [
            {
              type: 'paragraph',
              text: 'The pattern is not unique to Aesop, and the secondary evidence is real. Baymard scored 67% of mobile ecommerce sites mediocre or poor on homepage navigation (Baymard Institute, 2025, as cited in the PRD). Across eight comparable beauty homepages, every site offering a guided path places it at or near the top, while Aesop’s only homepage-level module covers hand and body alone and its Skin Finder sits two clicks deep behind a category page, and unsignposted from the homepage. The closest brand analogues, Le Labo and Byredo, carry no guided module at all, so the buried finder looks like a placement decision rather than an inevitability of the positioning.',
            },
          ],
        },
        {
          type: 'expandable',
          title: 'Appendix: competitive landscape across nine homepages',
          blocks: [
            {
              type: 'paragraph',
              text: 'Method (Appendix 4). Aesop AU, Le Labo AU and Byredo were inspected in a live browser session with full DOM extraction; the other six were captured by fetch, so their module counts are lower precision.',
            },
            {
              type: 'steps',
              items: [
                { title: 'Primary navigation', body: 'Ten items, each a direct link with no mega-menu: Gifts, New & Notable, Skin Care, Hand & Body, Fragrance, Home, Hair, Travel, Library, Experience.' },
                { title: 'Module order down the page', body: 'Video hero, pinned over about 1.5 to 2 viewport heights; category cross-sell banner; “New and notable” carousel of seven product tiles; repeat hero; Hand & Body Care Finder (“Find your regimen”); “Discover by category” tiles; store card; three editorial tiles; closing quote; footer.' },
                { title: 'Search', body: 'A persistent header search field, on both resting and sticky states.' },
                { title: 'Absent', body: 'Shop-by-concern, regimen builder, personalisation of any kind, loyalty programme.' },
                { title: 'The Skin Finder', body: 'Live at /skin-finder/ but two clicks deep, reachable only through the Skin Care category page.' },
              ],
            },
            {
              type: 'table',
              data: {
                caption: 'Nine homepages compared (Appendix 4)',
                columns: [
                  { key: 'brand', label: 'Brand' },
                  { key: 'archetype', label: 'Archetype' },
                  { key: 'guided', label: 'Guided discovery on homepage' },
                  { key: 'regimen', label: 'Regimen builder' },
                  { key: 'sample', label: 'Sample / discovery entry' },
                  { key: 'store', label: 'Store or appointment entry' },
                  { key: 'loyalty', label: 'Personalisation / loyalty' },
                ],
                rows: [
                  { brand: 'Aesop AU', archetype: 'Restrained hybrid', guided: 'Partial: Hand & Body Finder mid-page; Skin Finder two clicks deep', regimen: 'No', sample: 'Yes: Fragrance Anthology', store: 'Locator ×2, no booking', loyalty: 'None' },
                  { brand: 'Le Labo AU', archetype: 'Editorial, four tiles', guided: 'No', regimen: 'No', sample: 'Yes: “Discovery” nav item', store: 'No', loyalty: 'None' },
                  { brand: 'Byredo', archetype: 'Editorial, video, hidden nav', guided: 'No', regimen: 'No', sample: 'Yes: Discovery Set, in menu', store: 'No', loyalty: 'Wishlist only' },
                  { brand: 'Jo Malone AU', archetype: 'Merchandised, promo-dense', guided: 'Yes: Scent and Gift Finders, top', regimen: 'Partial', sample: 'Yes: sample with order', store: 'Yes: Book Appointment', loyalty: 'Not identified' },
                  { brand: 'Mecca AU', archetype: 'Maximalist marketplace', guided: 'Yes: five quizzes and finders', regimen: 'Partial: hair quiz', sample: 'Yes: Scent Sample, Minis', store: 'Yes: booking, Skin Clinic', loyalty: 'Beauty Loop' },
                  { brand: 'Sephora AU', archetype: 'Mass, carousel-heavy', guided: 'No', regimen: 'No', sample: 'Partial: meta only', store: 'Yes: Beauty Services', loyalty: 'Beauty Pass, “Recommended For You”' },
                  { brand: 'Kiehl’s AU', archetype: 'Heritage plus merchandised', guided: 'Yes: Instant Skin Reader, routine quiz', regimen: 'Yes', sample: 'Yes: choose three samples', store: 'Yes: Beauty Reader', loyalty: 'Rewards' },
                  { brand: 'Malin+Goetz', archetype: 'Promo and collaboration led', guided: 'Yes: shop by concern, shop by scent', regimen: 'Partial: “2-step essentials”', sample: 'Yes: discovery kit', store: 'Yes: apothecary locator', loyalty: '(+)points' },
                  { brand: 'Glossier', archetype: 'Campaign-led DTC', guided: 'No', regimen: 'Partial: custom set builder', sample: 'No', store: 'Locator only', loyalty: 'None identified' },
                ],
              },
            },
          ],
        },
      ],
    },
    {
      id: 'why-simulation',
      kicker: 'Method',
      heading: 'Why I simulated the research, and what that can and cannot show',
      intro:
        'This section follows the PRD’s own account. Simulation was chosen mainly because the timeline did not allow recruiting and fielding real people. The judgement lies in how it was bounded.',
      blocks: [
        {
          type: 'callout',
          kind: 'warning',
          title: 'What was simulated',
          body:
            'All primary research was conducted as a simulation. The 200-respondent panel study, its 20-respondent extended block and the five moderated prototype sessions were executed with AI agents playing synthetic personas. No human respondent took part. The brief’s abandonment figures were given and cannot be verified; there is no Aesop analytics data behind them.',
        },
        {
          type: 'paragraph',
          text: 'The PRD treats simulation as a data-collection method with a specific and limited claim, and it applied the discipline a live study would: a designed instrument, screeners, a coding frame and a stated analysis plan. The population was defined top-down (Australian online-shopping households narrowed to premium beauty buyers) and the 200 personas were drawn to match it, with a device mix near the 70% mobile share and five segments weighted as stated judgements.',
        },
        {
          type: 'paragraph',
          text: 'The method is described as young but no longer fringe. Language-model samples conditioned on demographic and attitudinal profiles have been shown to reproduce the response patterns of the human subpopulations they are conditioned on (Argyle et al., 2023). They have been proposed as fast, cheap pilots that precede rather than replace human studies (Dillion et al., 2023), and used to pre-test instruments and simulate economic behaviour before fielding (Horton, 2023). That last use is the claim made here: a cheap pre-test that sharpens what real fieldwork should ask, before any real people are recruited.',
        },
        {
          type: 'subheading',
          text: 'What it cannot do',
        },
        {
          type: 'paragraph',
          text: 'Simulated respondents produce plausible stated preference, not observed behaviour, and the frequencies are modelled estimates, not measurements. Open text was coded by a single coder, and the ninety-second task is not the brief’s five-minute window, so its no-click figure is not comparable with the brief’s 68%. So no figure from this research is treated as ground truth anywhere in the PRD. Every panel-derived input to the impact model is labelled a judgement, and the live experiment replaces all of it with instrumentation from week one.',
        },
        {
          type: 'expandable',
          title: 'Show the limits the PRD states for the research',
          blocks: [
            {
              type: 'table',
              data: {
                caption: 'The limits the PRD states for the research (Appendix 1, §1.4 and §1.5)',
                columns: [
                  { key: 'limit', label: 'Limitation' },
                  { key: 'meaning', label: 'What it means for the findings' },
                ],
                rows: [
                  { limit: 'The homepage task is self-reported, even within the simulation', meaning: 'The no-click figure is a claim, not a measurement.' },
                  { limit: 'Ninety seconds is not the brief’s five minutes', meaning: 'The 55% no-click figure is not comparable with the brief’s 68%.' },
                  { limit: 'A 20-respondent block', meaning: 'It carries mechanism, not magnitude; segment cells are three to five.' },
                  { limit: 'A single coder', meaning: 'Theme boundaries are one reading. A theme is reported only where four or more of twenty raised it.' },
                  { limit: 'ODI importance and satisfaction scores', meaning: 'Assigned from the coded open text as structured judgements, not measurements.' },
                ],
              },
            },
          ],
        },
        {
          type: 'expandable',
          title: 'Show how the simulation was checked against itself, including the earlier digital-twin run',
          blocks: [
            {
              type: 'paragraph',
              text: 'Two checks in the PRD show where the method held and where it did not. First, the survey’s stated answers (n = 200) were compared with what the 20 extended-block respondents reported doing. The two converged on no engagement within 60 seconds (64.5% stated, 65.0% reported) and diverged sharply on quiz aversion (31.5% stated top-two-box, 70.0% reported unprompted). Where they differ, the PRD uses the reported behaviour, which is one reason the model discounts stated intent. Both sets are simulated, so this tests internal consistency, not the world.',
            },
            {
              type: 'table',
              data: {
                caption: 'An earlier run of the 200-persona panel, drawn straight from segment distributions with no questionnaire or moderation (a “digital twin”), against the later stages. All simulated (Appendix 10)',
                columns: [
                  { key: 'prior', label: 'What the earlier run predicted' },
                  { key: 'found', label: 'What the main study and sessions found' },
                  { key: 'verdict', label: 'Verdict' },
                ],
                rows: [
                  { prior: 'Orientation the largest job (33.0%)', found: '17 of 20 asked what the brand is and where to start; the only job above 15 on ODI.', verdict: 'Confirmed in rank, understated' },
                  { prior: 'Gifting a minority job (primary for 12.5%)', found: 'Gift-driven visitors are 29.5% of the survey, the largest segment.', verdict: 'Falsified on magnitude' },
                  { prior: 'Sensorial response a scent-first property (56.0% of that segment)', found: 'The sensorial line was the most credited element in every segment.', verdict: 'Falsified as a segment property' },
                  { prior: 'Tap rate 60.5%', found: 'Survey top-two-box 46.5%; three of five session participants never found the strip unaided.', verdict: 'Falsified, over-predicted' },
                  { prior: 'Placement below the hero a secondary concern (21.5%)', found: 'Only 3 of 20 raised it against the sketch, but in the sessions it was the dominant failure.', verdict: 'Confirmed, severity understated' },
                  { prior: 'Researchers least receptive (top-two-box 25.6%)', found: 'Survey top-two-box 29.6%, equal lowest.', verdict: 'Confirmed' },
                ],
              },
            },
            {
              type: 'paragraph',
              text: 'The PRD’s own reading is that the earlier run ranked hypotheses well but missed what mattered most, for a structural reason: a stated-preference draw reasons about an interface described in words. Not one persona failed to find a horizontally scrollable strip, while three of five session participants never found it unaided. It also over-predicts engagement, because asking about a concept supplies the attention a homepage has to earn. The lesson it draws: what the sessions simulate, only the live experiment observes, so every decision threshold sits on instrumented behaviour and none on this research. No claim in the PRD rests on the earlier run.',
            },
          ],
        },
        {
          type: 'expandable',
          title: 'Show what real research comes next',
          blocks: [
            {
              type: 'steps',
              items: [
                { title: 'A recruited human round on the corrected build', body: 'The PRD names this as the first research action of the live phase. The sessions were run against the pre-correction build, using personas modelled on the five people I would have recruited had time allowed, one per segment, with names changed.' },
                { title: 'The live A/B experiment', body: 'Half of homepage visitors see the strip and half do not. It supersedes every simulated figure, and every decision threshold in the PRD sits on it.' },
                { title: 'Three open questions for the live test', body: 'Does a card-face price raise the open rate, or filter the audience to people already willing to spend? Do pagination dots and a count close the mobile discovery gap, or does a vertical list beat the carousel? Is the word “ritual” load-bearing, tested by labelling cards as rituals against labelling them by contents and entry price?' },
              ],
            },
          ],
        },
        {
          type: 'expandable',
          title: 'Appendix: the simulated survey instrument (screeners, Q1 to Q12, homepage task, open text)',
          blocks: [
            {
              type: 'paragraph',
              text: 'This is the instrument as designed (Appendix 1, §1.3). All 200 simulated personas answered the screeners and Q1 to Q12; the 20-respondent extended block completed the homepage task and the nine open-text questions. Every answer came from AI agents playing synthetic personas; no human respondent answered it. Q5 to Q7, Q9 and Q10 are seven-point items, and top-two-box means a 6 or 7.',
            },
            {
              type: 'table',
              data: {
                caption: 'Screeners',
                columns: [
                  { key: 'id', label: 'ID' },
                  { key: 'item', label: 'Screener' },
                  { key: 'options', label: 'Response options' },
                ],
                rows: [
                  { id: 'S1', item: 'Australia, 18+', options: 'Yes / No (terminate)' },
                  { id: 'S2', item: 'Age', options: '18–24 / 25–34 / 35–44 / 45–54 / 55–64 / 65+' },
                  { id: 'S3', item: 'State', options: 'NSW / VIC / QLD / WA / SA / ACT / TAS-NT' },
                  { id: 'S4', item: 'Device', options: 'Mobile / Desktop / Tablet' },
                ],
              },
            },
            {
              type: 'table',
              data: {
                caption: 'Questions Q1 to Q12 (simulated instrument)',
                columns: [
                  { key: 'id', label: 'Q' },
                  { key: 'question', label: 'Question or statement' },
                  { key: 'format', label: 'Response format' },
                ],
                rows: [
                  { id: 'Q1', question: 'Main reason for your last A$40-plus purchase?', format: 'Replenishing / unknown brand / present / scent / specific concern (segment classifier)' },
                  { id: 'Q2', question: 'First action on an unfamiliar premium beauty homepage?', format: 'Scroll / navigation / search / bestsellers / leave without touching anything' },
                  { id: 'Q3', question: 'How long before you leave if nothing catches you?', format: 'Under 15s / 15–60s / 1–3 min / over 3 min' },
                  { id: 'Q4', question: 'On a first visit, what would most make you tap?', format: 'Multi-select: steps used together / a recognised product / a skin quiz / a discount / an editorial story / a store finder / a bestsellers list / gift help' },
                  { id: 'Q5', question: '“I usually don’t know which product in a premium range is right for me.”', format: 'Seven-point' },
                  { id: 'Q6', question: '“Being asked questions about my skin before I’ve browsed puts me off.”', format: 'Seven-point' },
                  { id: 'Q7', question: '“I’d rather be shown how products are used together than told which one to buy.”', format: 'Seven-point' },
                  { id: 'Q8', question: 'How do you mostly think about buying?', format: 'Concern / routine or time of day / scent / product type / gift occasion' },
                  { id: 'Q9', question: '“A luxury brand’s website should feel calm rather than busy.”', format: 'Seven-point' },
                  { id: 'Q10', question: 'Tappable cards (the morning wash, hands through the day, before sleep), each opening two or three products in place, no page load: likely to tap one?', format: 'Seven-point' },
                  { id: 'Q11', question: 'Biggest concern about that?', format: 'Being sold to / rather search / more to scroll past / collects data / nothing' },
                  { id: 'Q12', question: 'Anything else you’d want from an unknown brand’s first page?', format: 'Open text' },
                ],
              },
            },
            {
              type: 'quote',
              quote: 'Open aesop.com.au in a new tab on the device you’re using now. Spend about ninety seconds on the homepage doing whatever you would normally do — there is no right answer and nothing to find. Then tell us what happened.',
              attribution: 'Homepage task, as put to the 20-respondent extended block (simulated). Five report items followed: whether they clicked or tapped, what, seconds in, how far down, and what they were looking for',
            },
            {
              type: 'table',
              data: {
                caption: 'Open-text questions for the extended block (n = 20, simulated), one box each',
                columns: [
                  { key: 'n', label: '#' },
                  { key: 'question', label: 'Question' },
                ],
                rows: [
                  { n: '1', question: 'What does this brand sell?' },
                  { n: '2', question: 'Resurrection, Parsley Seed, Antithesis, Geranium Leaf: what is each?' },
                  { n: '3', question: 'Decided to buy: what next?' },
                  { n: '4', question: 'Sites that ask about your skin, then recommend?' },
                  { n: '5', question: 'How did this feel against other beauty sites?' },
                  { n: '6', question: 'The video at the top?' },
                  { n: '7', question: 'Buying for someone else: different?' },
                  { n: '8', question: 'One thing today, no help: what, and how?' },
                  { n: '9', question: 'Some sites count a visit with no click at all as an abandonment: does that describe what you did?' },
                ],
              },
            },
          ],
        },
      ],
    },
    {
      id: 'who-for',
      kicker: 'Customers',
      heading: 'Orientation, not matching',
      frameworks: [
        { id: 'jtbd', to: '/day/2' },
        { id: 'odi', to: '/day/2' },
      ],
      blocks: [
        {
          type: 'paragraph',
          text: 'Almost every guided-discovery pattern in the category, from Mecca’s five quizzes to Kiehl’s Instant Skin Reader to Aesop’s own Skin Finder, assumes the problem is matching: there is a right product for this person, the customer does not know it, and the site’s job is to identify it. In the simulated extended block, 17 of 20 described a different problem. They were not asking which product suited them but what the brand is, what someone like them would use, and where to begin. Matching assumes the decision to buy has been made. Orientation is the step before it, and on this homepage it does not happen.',
        },
        {
          type: 'paragraph',
          text: 'In the simulated extended block, the three who did not raise orientation were regular buyers, and all clicked the navigation within 30 seconds. So orientation looks like a first- and second-visit job, concentrated in the population the abandonment metric is made of.',
        },
        {
          type: 'quote',
          quote: 'When I land on a premium brand’s site which I don’t know, I want to work out what it is and what someone like me would actually use, so I can decide whether this brand is for me before I commit to anything.',
          attribution: 'Primary job to be done, in the framing of Christensen et al. (2016)',
        },
        {
          type: 'persona',
          name: 'Nush, the curious newcomer (34, Sydney, mobile)',
          jtbd: 'Needs to work out what this brand is and where a beginner starts, so she can decide whether it is for her before committing.',
          problems: [
            'Commitment-sensitive rather than price-sensitive.',
            'Every clickable element costs her her place.',
            'Product names decode nothing.',
            'Has walked past the Paddington store many times and never bought.',
          ],
        },
        {
          type: 'expandable',
          title: 'Show the segment and targeting table',
          blocks: [
            {
              type: 'table',
              data: {
                caption: 'Segments and targeting (panel n = 200 and extended block n = 20, both simulated)',
                columns: [
                  { key: 'segment', label: 'Segment' },
                  { key: 'panel', label: 'Panel' },
                  { key: 'block', label: 'Extended block' },
                  { key: 'job', label: 'Job' },
                  { key: 'targeting', label: 'Targeting' },
                ],
                rows: [
                  { segment: 'Curious newcomer', panel: '23.0%', block: '25% (5)', job: 'J1 orientation', targeting: 'Primary' },
                  { segment: 'Ritual-led regular', panel: '20.5%', block: '20% (4)', job: 'J6 extension', targeting: 'Secondary: served, not designed for' },
                  { segment: 'Gift-driven visitor', panel: '29.5%', block: '25% (5)', job: 'J3 gifting', targeting: 'Later: first in Next' },
                  { segment: 'Considered researcher', panel: '13.5%', block: '15% (3)', job: 'J1 as comparison', targeting: 'Not targeted: objections binding' },
                  { segment: 'Scent-first', panel: '13.5%', block: '15% (3)', job: 'J2 sensorial', targeting: 'Not targeted: wrong axis' },
                ],
              },
            },
          ],
        },
        {
          type: 'formula',
          expression: 'Opportunity = Importance + (Importance − Satisfaction)',
          note: 'J1 orientation: 9.1 + (9.1 − 3.2) = 15.0. The next highest, J3 gifting, scores 11.8.',
        },
        {
          type: 'opportunity',
          xLabel: 'Satisfaction (1–10)',
          yLabel: 'Importance (1–10)',
          zoneLabel: 'Underserved',
          caption: 'Six jobs scored with Ulwick’s opportunity algorithm (Ulwick, 2005). Scores are structured judgements from the coded simulated open text, not measurements.',
          dots: [
            { x: 3.2, y: 9.1, label: 'J1 orientation', highlight: true },
            { x: 4.6, y: 8.2, label: 'J3 gifting' },
            { x: 3.9, y: 7.8, label: 'J2 sensorial' },
            { x: 4.1, y: 7.4, label: 'J4 entry price' },
            { x: 5.4, y: 8.0, label: 'J5 shown, not sold' },
            { x: 5.1, y: 6.9, label: 'J6 extend routine' },
          ],
        },
        {
          type: 'expandable',
          title: 'Show the full opportunity scoring table and how to read it',
          blocks: [
            {
              type: 'table',
              data: {
                caption: 'Opportunity scoring (ODI) for the six jobs. Importance and satisfaction are structured judgements, not measurements (from simulated open text)',
                emphasisKey: 'opportunity',
                columns: [
                  { key: 'rank', label: 'Rank' },
                  { key: 'job', label: 'Job' },
                  { key: 'importance', label: 'Importance' },
                  { key: 'satisfaction', label: 'Satisfaction' },
                  { key: 'opportunity', label: 'Opportunity' },
                ],
                rows: [
                  { rank: '1', job: 'J1 orientation', importance: '9.1', satisfaction: '3.2', opportunity: '15.0' },
                  { rank: '2', job: 'J3 gifting', importance: '8.2', satisfaction: '4.6', opportunity: '11.8' },
                  { rank: '3', job: 'J2 sensorial', importance: '7.8', satisfaction: '3.9', opportunity: '11.7' },
                  { rank: '4', job: 'J4 entry price', importance: '7.4', satisfaction: '4.1', opportunity: '10.7' },
                  { rank: '5', job: 'J5 be shown, not sold', importance: '8.0', satisfaction: '5.4', opportunity: '10.6' },
                  { rank: '6', job: 'J6 extend routine', importance: '6.9', satisfaction: '5.1', opportunity: '8.7' },
                ],
              },
            },
            {
              type: 'paragraph',
              text: 'Five of the six jobs clear Ulwick’s conventional underserved threshold of 10, which is itself a finding: the homepage underserves almost everything it is asked to do, so a score above 10 does not discriminate here. What does discriminate is that J1 is the only job above 15 and leads the next by 3.2 points. J5’s lower score marks a strength at risk rather than an absent opportunity, because restraint already serves it and the exposure is regression.',
            },
          ],
        },
      ],
    },
    {
      id: 'options',
      kicker: 'Ideation and prioritisation',
      heading: 'Why Rituals, and what lost',
      frameworks: [
        { id: 'kano', to: '/day/2' },
        { id: 'rice' },
      ],
      blocks: [
        {
          type: 'paragraph',
          text: 'Ideas were screened against five hard fences: a software product feature (G1), homepage-scoped (G2), buildable in four to six weeks by three engineers and one designer (G3), not an extension of the existing product-finder quiz (G4), and passing the behavioural-change test (G5). The survivors were then classified with Kano and scored with RICE. Rituals is the single idea the PRD proposes; the rest are recorded as evidence of the process.',
        },
        {
          type: 'expandable',
          title: 'Show how the ideas were screened against the five fences',
          blocks: [
            {
              type: 'table',
              data: {
                caption: 'Screening against the fences (selected ideas)',
                columns: [
                  { key: 'idea', label: 'Idea' },
                  { key: 'verdict', label: 'Verdict' },
                ],
                rows: [
                  { idea: 'Rituals: everyday-moment cards, expanding in place', verdict: 'Pass. The page’s only in-page action.' },
                  { idea: 'The one you’ve smelled before: recognition cards', verdict: 'Pass. Strongest rival.' },
                  { idea: 'Start small: discovery and sample entry', verdict: 'Pass. Cheapest useful item.' },
                  { idea: 'Gifting price-band finder', verdict: 'Pass, flagged. Price bands are commercial, and buildability is only partial (G3).' },
                  { idea: 'Shop-by-concern strip', verdict: 'Fail G4. The Skin Finder’s first question, hoisted.' },
                  { idea: 'Personalised replenishment', verdict: 'Fail G3 on scope. Carried to Kano deliberately.' },
                  { idea: 'Hero skip control', verdict: 'Fail G2. Carried forward under protest.' },
                ],
              },
            },
          ],
        },
        {
          type: 'expandable',
          title: 'Show the Kano classification of the survivors',
          blocks: [
            {
              type: 'table',
              data: {
                caption: 'Kano classification of the survivors (selected). Counts in the Basis column are from the simulated extended block',
                columns: [
                  { key: 'idea', label: 'Idea' },
                  { key: 'category', label: 'Category' },
                  { key: 'basis', label: 'Basis' },
                ],
                rows: [
                  { idea: 'Rituals', category: 'Attractive', basis: 'No comparator has it; absence uncomplained, presence best received.' },
                  { idea: 'Recognition cards', category: 'Attractive', basis: '12 of 20 orient by recognition; nobody asked for it.' },
                  { idea: 'Gifting price-band finder', category: 'One-dimensional', basis: 'Satisfaction scales with the precision of the price answer.' },
                  { idea: 'Hero skip control', category: 'Must-be', basis: '13 of 15 raised the hero; expected, not valued.' },
                  { idea: 'Recently viewed', category: 'Indifferent', basis: 'Empty for first and second visits.' },
                  { idea: 'Personalised replenishment', category: 'Reverse', basis: 'Six named “recommended for you” as trust-breaking.' },
                ],
              },
            },
          ],
        },
        {
          type: 'formula',
          expression: 'RICE = (Reach × Impact × Confidence) ÷ Effort',
          note: 'Reach is viewability-adjusted sessions on an assumed 2.2 million homepage sessions a year, split 70/30. It is common to all five ideas, so it moves the scores but not the rank. Effort is person-months, and for Rituals it is the committed plan, not an independent estimate: four people for six weeks, 6.0.',
        },
        {
          type: 'expandable',
          title: 'Show the full RICE scoring table',
          blocks: [
            {
              type: 'table',
              data: {
                caption: 'RICE scores. Inputs are stated assumptions',
                emphasisKey: 'rice',
                columns: [
                  { key: 'idea', label: 'Idea' },
                  { key: 'reach', label: 'Reach (’000)' },
                  { key: 'impact', label: 'Impact' },
                  { key: 'confidence', label: 'Confidence' },
                  { key: 'effort', label: 'Effort (person-months)' },
                  { key: 'rice', label: 'RICE' },
                ],
                rows: [
                  { idea: 'Recognition module', reach: '1,450', impact: '1.5', confidence: '70%', effort: '2.8', rice: '544' },
                  { idea: 'Rituals', reach: '1,690', impact: '2.0', confidence: '80%', effort: '6.0', rice: '451' },
                  { idea: 'Start small', reach: '1,690', impact: '0.5', confidence: '50%', effort: '1.0', rice: '423' },
                  { idea: 'Hero skip control', reach: '1,540', impact: '0.5', confidence: '50%', effort: '1.2', rice: '321' },
                  { idea: 'Gifting finder', reach: '490', impact: '2.0', confidence: '70%', effort: '6.0', rice: '114' },
                ],
              },
            },
          ],
        },
        {
          type: 'callout',
          kind: 'info',
          title: 'RICE did not pick the recommendation, and the PRD says so',
          body:
            'Scored against the effort actually committed, the recognition module wins on 544 to 451, for less than half the build time (2.8 against 6.0 person-months). Three grounds outweighed the arithmetic. Every recognition card is a link, so it inherits the trapdoor failure Rituals exists to remove. Recognising which venue a visitor met needs an account or behavioural inference, which breaks the restraint constraint six simulated respondents set. And RICE’s Confidence term cannot tell delivery confidence from problem-definition confidence, which is where the two candidates differ. The PRD’s rule of thumb: when the top-scoring option breaks a hard constraint the research already set, the problem is with the score, not the decision.',
        },
        {
          type: 'callout',
          kind: 'warning',
          title: 'The hardest trade-off: gifting',
          body:
            'Gift-driven visitors are the largest segment (29.5% of the simulated panel) and gifting scored second on ODI at 11.8. It is a different job: something safe for a body the buyer knows nothing about, at a defensible price. One simulated respondent left the homepage mid-task to search Google for “aesop gift set price”. Serving it needs price-band logic and a giftable unit, which touch commercial strategy and the Gifts page rather than the homepage, and its RICE effort is 6.0 person-months. So it is deferred, named, and placed first in Next. The PRD calls this the proposal’s clearest limitation.',
        },
      ],
    },
    {
      id: 'proposal',
      kicker: 'Solution',
      heading: 'Five rituals that open in place',
      blocks: [
        {
          type: 'paragraph',
          text: 'Five cards sit in a horizontally scrollable strip. Each card face carries the ritual name, its step count and an entry price. On mobile the strip sits immediately below the hero’s first viewport, with pagination dots and a card count beneath it; on desktop all five fit within the first viewport. Tapping a card expands a panel in place, a bottom sheet on mobile and inline on desktop, with no page load. Closing returns the visitor to where they were. Two of the five drafted rituals currently exceed the PRD’s own A$150 step-sum cap and go back to content before the first milestone; prices throughout are indicative.',
        },
        { type: 'image', src: w2, alt: 'Two mobile wireframes of the proposed homepage. On the left, the full-screen hero as it first loads. On the right, after scrolling, a strip headed “Begin somewhere.” with two ritual cards (“the room”, “away from home”) and a clipped third card, plus a card-order list.', caption: 'Wireframe 2, the strip collapsed. Card faces carry the ritual name, step count and entry price; the pinned hero exceeds the viewport. Research notes on the frame refer to simulated respondents and participants.', size: 'wide', width: 806, height: 608 },
        { type: 'image', src: w3, alt: 'Mobile wireframe of “the morning wash” opened as a sheet over the dimmed homepage hero. It shows three numbered steps, each with a product name, a sensorial line, a price and its own Add button, and a note that no combined price is shown.', caption: 'Wireframe 3, a ritual opened in place: no page load, scroll position preserved, each step individually addable. Research notes on the frame refer to simulated respondents and participants.', size: 'wide', width: 806, height: 658 },
        {
          type: 'paragraph',
          text: 'The shape borrows from the store. A consultation asks questions; a demonstration at the basin just shows what goes with what and lets the visitor watch. Only the second works on a stranger in ten seconds, and only the second can be offered online without asking anything of them. It also separates Rituals from the Skin Finder: the finders ask a visitor to describe themselves and then narrow a category, and 9 of the 11 simulated respondents who objected to that sequence would answer skin questions after deciding to buy.',
        },
        {
          type: 'expandable',
          title: 'Show why the sensorial line matters',
          blocks: [
            {
              type: 'paragraph',
              text: 'The sensorial line under each step is the only place on the homepage where a visitor learns how something smells or feels before committing to a product page. Verbal cues appear to outperform photography alone in generating the imagery that stands in for touch and scent online (Krishna, 2012).',
            },
          ],
        },
        {
          type: 'quote',
          quote: 'You’ve solved the naming thing without touching the names.',
          attribution: 'R12, simulated respondent, reacting to the concept sketch',
        },
        { type: 'image', src: w5, alt: 'Desktop wireframes in a browser frame. The top shows five ritual cards in a single row under “Begin somewhere.” inside the first viewport. The bottom shows the same row with “the morning wash” expanded inline beneath it, its three steps set in deliberately unequal columns.', caption: 'Wireframe 5, desktop: all five cards inside the first viewport; expansion is inline, with deliberately unequal step columns because equal columns were read as a bundle in testing. Research notes on the frame refer to simulated respondents and participants.', size: 'wide', width: 806, height: 773 },
        {
          type: 'expandable',
          title: 'Show the five rituals with products and indicative prices',
          blocks: [
            {
              type: 'table',
              data: {
                caption: 'The five rituals, in the strip order revised after testing. Prices are indicative and should be verified against the catalogue before authoring',
                columns: [
                  { key: 'card', label: 'Card' },
                  { key: 'steps', label: 'Steps' },
                  { key: 'from', label: 'From (indicative)' },
                  { key: 'sum', label: 'Sum (indicative)' },
                  { key: 'rule', label: 'Under A$150 (rule 6)' },
                  { key: 'products', label: 'Products and prices (indicative)' },
                ],
                rows: [
                  { card: '1. the room', steps: '1', from: 'A$63', sum: 'A$63', rule: 'Pass', products: 'Aromatique Room Spray, Olous A$63' },
                  { card: '2. away from home', steps: '2', from: 'A$29', sum: 'A$74', rule: 'Pass', products: 'Resurrection Hand Wash 50 mL A$29; Rind Concentrate Body Balm A$45' },
                  { card: '3. the morning wash', steps: '3', from: 'A$45', sum: 'A$177', rule: 'Fail', products: 'Gentle Facial Cleansing Milk A$45; In Two Minds Facial Toner A$47; Oil Free Hydrating Serum A$85' },
                  { card: '4. hands through the day', steps: '2', from: 'A$55', sum: 'A$102', rule: 'Pass', products: 'Resurrection Hand Wash A$55; Resurrection Hand Balm A$47' },
                  { card: '5. before sleep', steps: '3', from: 'A$45', sum: 'A$217', rule: 'Fail', products: 'Geranium Leaf Body Cleanser A$67; Rind Concentrate Body Balm A$45; Damascan Rose Facial Treatment A$105' },
                ],
              },
            },
            {
              type: 'paragraph',
              text: 'Two of the five drafted rituals miss the A$150 cap and go back to the content team before the first milestone; the launch set stays at five. Composition and the sensorial copy sit with content under a published editorial rule, so margin cannot decide what goes together.',
            },
          ],
        },
        {
          type: 'quote',
          quote: 'For the first-time visitor who cannot tell what aesop.com.au makes or where a beginner would start, Rituals is a homepage content module that shows five everyday moments and the formulations used in each, opening in place with no page load and asking nothing. Unlike the quizzes and finders that dominate the category, which ask the visitor to describe themselves first, our product gives orientation before diagnosis.',
          attribution: 'Positioning statement',
        },
      ],
    },
    {
      id: 'sessions',
      kicker: 'Testing',
      heading: 'What five simulated sessions changed',
      blocks: [
        {
          type: 'callout',
          kind: 'warning',
          title: 'Simulated sessions',
          body:
            'The five think-aloud sessions were run by AI agents playing synthetic personas, one per segment, against the pre-correction build of the clickable prototype. Participants are labelled P1 to P5 and every quote is from a simulated participant. In live testing, five participants surface roughly 80% of usability problems but support no frequency estimate (Nielsen & Landauer, 1993). The same discipline is applied here, and one persona per segment makes every segment-level reading directional.',
        },
        {
          type: 'paragraph',
          text: 'Two elements held up in the simulated sessions: the in-place expansion and the sensorial line. Everyone who opened a panel added something. Four design decisions came under pressure and held, and were deliberately retained: the in-place expansion, the absence of a total, the absence of an add-all, and the module asking nothing.',
        },
        {
          type: 'quoteBank',
          items: [
            { quote: 'It doesn’t feel like I’ve said yes to anything. I’ve just opened a drawer.', attribution: 'P1, simulated session participant' },
            { quote: 'That’s the first time a website’s ever told me what something smells like… Not “refreshing”, not “brightening”.', attribution: 'P5, simulated session participant' },
            { quote: 'Good. Don’t bundle me.', attribution: 'P3, simulated session participant' },
          ],
        },
        {
          type: 'expandable',
          title: 'Show the selected usability findings (simulated sessions)',
          blocks: [
            {
              type: 'table',
              data: {
                caption: 'Selected findings from the 14 that 58 logged defect entries resolved to (simulated sessions, n = 5)',
                columns: [
                  { key: 'id', label: 'ID' },
                  { key: 'finding', label: 'Finding' },
                  { key: 'severity', label: 'Severity' },
                  { key: 'affected', label: 'Participants affected' },
                ],
                rows: [
                  { id: 'F01', finding: 'Reads as static: two swiped only by accidental drag, one on instruction, and two never saw the card they wanted.', severity: 'Critical', affected: '3 of 5' },
                  { id: 'F02', finding: 'No card-face price, so opening a card is an unpriced commitment of attention.', severity: 'Critical', affected: '3 of 5' },
                  { id: 'F03', finding: 'No sensorial or product cue on the card face; the step count reads as obligation.', severity: 'Critical', affected: '5 of 5' },
                  { id: 'F05', finding: 'An unavailable step is a dead end: dimmed row, full price, a “View” that resolves nowhere, no notify-me.', severity: 'Critical', affected: '5 of 5' },
                  { id: 'F06', finding: 'Participants add up the steps themselves; the note declining a total sat below the rows, after the arithmetic.', severity: 'Critical', affected: '2 of 5' },
                  { id: 'F07', finding: 'The dearest step sits last in both three-step rituals, and no ritual is attributed to anyone.', severity: 'Critical', affected: '1 of 5' },
                  { id: 'F11', finding: 'Outcome-led copy is discounted as marketing; only scent- and material-led lines stopped anyone.', severity: 'Serious', affected: '5 of 5' },
                  { id: 'F12', finding: 'The pinned hero runs two viewports; one participant scrolled 31 seconds and concluded the page had ended.', severity: 'Serious', affected: '4 of 5' },
                ],
              },
            },
          ],
        },
        {
          type: 'expandable',
          title: 'Show what changed in the specification as a result',
          blocks: [
            {
              type: 'table',
              data: {
                caption: 'What changed in the specification as a result (selected)',
                columns: [
                  { key: 'finding', label: 'Finding' },
                  { key: 'change', label: 'Change made' },
                ],
                rows: [
                  { finding: 'F02, F03', change: 'A card-face price, “from A$NN”, read live from the cheapest available step, plus a sensorial fragment of at most four words taken verbatim from the first step. Both became a new Must (M11) and a new user story (US-06).' },
                  { finding: 'F01', change: 'Pagination dots and a visible count replace a peek, with vertical reflow held as the fallback. The scroll affordance became a Must.' },
                  { finding: 'F01, F03', change: 'A one-step, low-entry-price ritual leads the strip. “The room” moved from position 4 to position 1.' },
                  { finding: 'F06', change: 'Editorial rule 6: a ritual’s steps must sum below A$150. The no-total note moves above the step rows.' },
                  { finding: 'F07', change: 'Editorial rule 7: publish the rule, attribute every ritual to a named composer and role, and order steps by order of use, not price.' },
                  { finding: 'F05', change: 'Price dims with the unavailable row, and “View” becomes “Notify me”.' },
                  { finding: 'F11', change: 'Sensorial lines rewritten as material and smell; outcome phrasing prohibited.' },
                  { finding: 'F12', change: 'Hero capped at one viewport, or the strip’s edge allowed above the fold. Logged as a homepage dependency, not fixed inside this module.' },
                ],
              },
            },
          ],
        },
        {
          type: 'callout',
          kind: 'warning',
          title: 'The finding that questions the concept',
          body:
            'The ritual framing worked for none of the five participants. Three located the value elsewhere. One placed it in adjacency (two products she owns and one she does not, in the order she already uses them) and offered “stuff you use at the sink” as a better name. One placed it in the scent line. One placed it in the single-step item, because it stood alone. What worked was adjacency, scent language and reversibility, none of which needs the ritual vocabulary. The implication in the PRD is not that the module fails but that the mechanism may be separable from the concept, in which case it is cheaper and more portable than proposed. It is testable cheaply: split the treatment arm and vary only the card label, ritual-labelled against labelled by contents and entry price, holding everything else identical.',
        },
      ],
    },
    {
      id: 'constraints',
      kicker: 'Requirements',
      heading: 'Constraints that come from objections',
      blocks: [
        {
          type: 'paragraph',
          text: 'Five constraints are requirements, not design guidance, and each is derived from an objection raised in the simulated extended block when respondents saw a rough pencil sketch of five labelled cards, one expanded into three numbered steps. Eleven reacted positively, five neutrally and four negatively. The positive reactions came from the segments the abandonment metric is made of: four of five newcomers, all four regulars and three of five gifters. The negatives were all three researchers and one gifter.',
        },
        {
          type: 'expandable',
          title: 'Show the objections to the sketch and the change each forced',
          blocks: [
            {
              type: 'table',
              data: {
                caption: 'Objections to the concept sketch (n = 20, simulated) and the change each forced',
                columns: [
                  { key: 'objection', label: 'Objection' },
                  { key: 'n', label: 'n' },
                  { key: 'change', label: 'Change to the specification' },
                ],
                rows: [
                  { objection: '“It’s a bundle with a card drawn on it”', n: '6', change: 'No combined price, saving, “set” label or badge.' },
                  { objection: '“I don’t want to buy three things”', n: '5', change: 'Every step addable; no unit above one step.' },
                  { objection: '“Will it push me to the costlier option?”', n: '4', change: 'Composition follows a published editorial rule, not margin.' },
                  { objection: '“The word ‘ritual’ is a bit much”', n: '5', change: 'Heading demoted to a quiet line; naming left open with a test.' },
                  { objection: '“What if my routine is one product?”', n: '4', change: 'At least one ritual is genuinely one or two steps.' },
                  { objection: '“Under the video I’ll never see it”', n: '3', change: 'Scroll-depth-to-module instrumented from week one.' },
                ],
              },
            },
          ],
        },
        {
          type: 'quote',
          quote: 'The second they put a little orange “BESTSELLER” flag on something I’m out.',
          attribution: 'R20, simulated respondent',
        },
        {
          type: 'expandable',
          title: 'Show the seven editorial rules',
          blocks: [
            {
              type: 'steps',
              items: [
                { title: 'A sequence, not a selection', body: 'Products are shown used together, in the order used, and the panel says so.' },
                { title: 'The least expensive workable choice at one step, always', body: 'Set and owned by merchandising.' },
                { title: 'No ritual sits entirely above the range median', body: 'The median is A$67, indicative.' },
                { title: 'At least one ritual is one or two steps', body: 'A one-step ritual sits in strip position 1 or 2.' },
                { title: 'Reviewed quarterly by content, minuted', body: 'Not product and not commercial, so margin cannot decide composition.' },
                { title: 'A ritual’s steps must sum below A$150', body: 'Added after testing. Two drafts fail and return to content before the first milestone.' },
                { title: 'The rule is published', body: 'Added after testing. Every ritual carries a named composer and role.' },
              ],
            },
          ],
        },
        { type: 'image', src: w4, alt: 'Two mobile wireframes of edge cases. On the left, “the room”, a one-step ritual with one product and no step numeral. On the right, “hands through the day”, where its second step is dimmed in full with a “Notify me” control.', caption: 'Wireframe 4, edge cases: the one-step ritual and an unavailable step, with a Notify me control rather than a dead end.', size: 'wide', width: 806, height: 567 },
        { type: 'image', src: w6, alt: 'User-flow diagram: arriving on the Aesop homepage, scrolling past the hero, the strip entering view, the panel expanding in place, reading steps, adding one step to cart, viewing the product, closing the panel and returning to the same scroll position. Eight branch cards sit beneath, including “Strip never enters viewport”, “A step is out of stock” and “Notify me”.', caption: 'Wireframe 6, the user flow and the eight branches that have to be designed rather than discovered.', size: 'wide', width: 806, height: 510 },
        {
          type: 'expandable',
          title: 'Show prohibited language and the non-technical requirements',
          blocks: [
            {
              type: 'paragraph',
              text: 'Prohibited language is a build requirement too. Badges, superlatives, urgency devices, personalisation phrases, percentages and struck prices, “set”, “bundle” or “kit” as a purchasable unit, efficacy claims and filler words such as “discover”, “explore” and “curated” block publication. Product names are verbatim and exempt.',
            },
            {
              type: 'paragraph',
              text: 'The non-technical requirements follow the same logic. WCAG 2.1 AA is a release gate, not a follow-up, and the module must work by keyboard and screen reader. No new personal data is processed: the module is identical for every visitor, so there is no profiling and no consent surface, and the Notify me control hands off to the site’s existing back-in-stock flow. Panel prices are a live read of the product page, because old pricing is a consumer-law and trust risk. The module ships within a strict weight budget, and a regression in homepage INP or LCP beyond the guardrail blocks the rollout regardless of engagement results.',
            },
          ],
        },
        {
          type: 'expandable',
          title: 'Appendix: user stories US-01 to US-06 and the analytics events',
          blocks: [
            {
              type: 'table',
              data: {
                caption: 'Key user stories with acceptance criteria (Appendix 6, §6.2)',
                columns: [
                  { key: 'id', label: 'Story' },
                  { key: 'story', label: 'As a … I want … so that …' },
                  { key: 'acceptance', label: 'Acceptance' },
                ],
                rows: [
                  { id: 'US-01 Open in place', story: 'As a visitor, I want to open a card in place, so that looking costs nothing.', acceptance: 'A tap expands the panel in place with no page load, showing product, sensorial line, price and a control per step, and fires ritual_open with ritual, position, device and bucket.' },
                  { id: 'US-02 Close and return', story: 'As a visitor, I want to close a card and keep my place, so that nothing is lost.', acceptance: 'Closing restores the exact scroll position (outside tap or swipe closes on mobile) and fires ritual_close with dwell and controls used.' },
                  { id: 'US-03 Add one step', story: 'As a visitor trying one thing, I want to add only that, so that entry costs one product, from A$29.', acceptance: 'Every step has its own add control and nothing adds the ritual; no total, saving or set label appears, with the note saying so above the step rows; a successful add updates the cart and shows a non-blocking in-row confirmation naming the product and price.' },
                  { id: 'US-04 Keyboard, screen reader', story: 'As a keyboard or screen-reader visitor, I want the module operable, so that I get the same feature.', acceptance: 'Cards are reachable by keyboard with arrow-key traversal, Enter opens and Escape returns focus, and the expansion is announced to screen readers.' },
                  { id: 'US-05 One-step ritual', story: 'As someone who uses one product, I want that to be a legitimate answer, so that nothing corrects me.', acceptance: 'One card has a single step and sits in strip position 1 or 2; a one-step panel shows no step numeral, enforced by the CMS at render; the CMS validates one to three steps.' },
                  { id: 'US-06 Decide before opening', story: 'As a visitor weighing whether a card is worth a tap, I want to know what it costs and what it smells like before I open it, so that opening is not a commitment made blind.', acceptance: 'The card face shows “from A$NN” read live from the least expensive available step, a sensorial fragment of at most four words taken verbatim from the first step’s line, and no total or badge.' },
                ],
              },
            },
            {
              type: 'table',
              data: {
                caption: 'Analytics events named in the stories (Appendix 6, §6.2). The PRD lists the event schema as backlog item M09, a Must',
                columns: [
                  { key: 'event', label: 'Event' },
                  { key: 'story', label: 'Fired by' },
                  { key: 'params', label: 'Parameters named' },
                ],
                rows: [
                  { event: 'ritual_open', story: 'US-01', params: 'ritual, position, device, bucket' },
                  { event: 'ritual_close', story: 'US-02', params: 'dwell, controls used' },
                ],
              },
            },
            {
              type: 'paragraph',
              text: 'The PRD’s backlog gives the reason for the schema in one line: unmeasured, the module cannot earn its place. Its privacy requirements add that events are anonymous. The metrics themselves are set out in the metric tree later on this page.',
            },
          ],
        },
      ],
    },
    {
      id: 'scope-delivery',
      kicker: 'Scope and delivery',
      heading: 'Six weeks, with the Musts at 66% of capacity',
      frameworks: [{ id: 'moscow', to: '/day/2' }],
      blocks: [
        {
          type: 'paragraph',
          text: 'Scope is set with MoSCoW under the 60/80/100 effort discipline, with relative effort scored 1 to 10 against a six-week envelope normalised to 76 units. The tiers carry different tests so items cannot drift. A Must’s absence cancels the project. A Should is traded first if the six weeks compress. A Could ships only if the envelope allows. A Won’t is excluded by decision, not capacity, and reopens only with the chief product officer’s sign-off.',
        },
        {
          type: 'moscow',
          rings: [
            { label: 'Must have', effort: '50 of 76 units (66%)' },
            { label: 'Should have', effort: 'to 58 (76%)' },
            { label: 'Could have', effort: 'to 61 (80%)' },
            { label: 'Contingency', effort: '20% held at six weeks' },
          ],
          caption:
            'Must: the strip, the scroll affordance, the panel, the five rituals, the card-face price, the content model, add-to-cart per step, instrumentation and WCAG 2.1 AA. Should: deep-linking, a reduced-motion variant, desktop hover states. Could: session-scoped recall of the last ritual opened, a first-load nudge. Won’t: personalisation, a gifting entry point, a purchasable bundle or ritual-level pricing, and quiz or finder integration.',
        },
        {
          type: 'paragraph',
          text: 'The Musts exceed the usual 60% guideline because two items added by testing, the scroll affordance and the card-face price, are not removable. At five weeks the Musts alone would consume 79% of the envelope, which is the arithmetic reason the plan runs to six. The team is three engineers and one designer, week one begins Monday 14 September 2026, and the chief product officer’s constraint is four to six weeks. Any week numbers in this PRD count from project start.',
        },
        {
          type: 'expandable',
          title: 'Show the planned milestones',
          blocks: [
            {
              type: 'table',
              data: {
                caption: 'Planned milestones as dated in the PRD, with what it attaches to each',
                columns: [
                  { key: 'milestone', label: 'Milestone' },
                  { key: 'date', label: 'Date' },
                  { key: 'exit', label: 'Named in the PRD' },
                ],
                rows: [
                  { milestone: 'M1: design and content model agreed', date: 'Fri 11 Sep 2026', exit: 'Written freeze on the hero by the global team; signed-off ritual compositions passing rule 6.' },
                  { milestone: 'M2: strip and panel built behind a flag', date: 'Fri 2 Oct 2026', exit: 'Brand director veto; weight-budget performance gate.' },
                  { milestone: 'M3: instrumented, QA complete', date: 'Fri 9 Oct 2026', exit: 'Scroll-depth-to-module instrumentation in place.' },
                  { milestone: 'M4: 50/50 launch', date: 'Fri 16 Oct 2026', exit: 'Feature flag with 50/50 assignment by session.' },
                  { milestone: 'M5: read and decide', date: 'Fri 13 Nov 2026', exit: 'Gifting funding request goes in.' },
                ],
              },
            },
          ],
        },
      ],
    },
    {
      id: 'the-maths',
      kicker: 'Goal',
      heading: 'Can one module hit 52%? No',
      frameworks: [{ id: 'now-next-later', to: '/day/4' }],
      blocks: [
        {
          type: 'formula',
          expression: 'Reduction = reach among abandoners × tap rate × incrementality',
          note: 'Computed by device and weighted 70/30. Today: 0.70 × 74% + 0.30 × 56% = 68.6%, so against the ~52% target the gap is 16.6 points, and every case is computed on it. Reach among abandoners is reach across all sessions scaled by ρ, because abandoning sessions are shorter and shallower and fewer of them reach a module below the hero.',
        },
        {
          type: 'expandable',
          title: 'Show the full abandonment model by case',
          blocks: [
            {
              type: 'table',
              data: {
                caption: 'The abandonment model. Every input is a stated assumption',
                columns: [
                  { key: 'case', label: 'Case' },
                  { key: 'inputs', label: 'Inputs (mobile / desktop)' },
                  { key: 'weighted', label: 'Weighted abandonment' },
                  { key: 'points', label: 'Points closed' },
                  { key: 'share', label: 'Share of gap' },
                ],
                rows: [
                  { case: 'Today', inputs: 'Abandonment 74.0% / 56.0%', weighted: '68.6%', points: 'n/a', share: 'n/a' },
                  { case: 'Low', inputs: 'Reach 62% / 82%, ρ 0.55; tap 10% / 8%; incrementality 55%', weighted: '66.7%', points: '1.9', share: '11%' },
                  { case: 'Base', inputs: 'Reach 72% / 88%, ρ 0.62; tap 18% / 15%; incrementality 62%', weighted: '63.6%', points: '5.0', share: '30%' },
                  { case: 'High', inputs: 'Reach 82% / 92%, ρ 0.75; tap 26% / 21%; incrementality 68%', weighted: '58.0%', points: '10.6', share: '64%' },
                ],
              },
            },
          ],
        },
        {
          type: 'callout',
          kind: 'warning',
          title: 'The most load-bearing number is a judgement',
          body:
            'The simulated panel showed 46.5% top-two-box likelihood to tap. The base case models 18.1%, a 0.39 multiplier: 0.65 for the gap between what people say and do, at the conservative end of meta-analytic estimates (Webb & Sheeran, 2006), times 0.60 because a respondent shown a sketch is not a visitor who first has to notice the strip. Both are judgements, and every figure in the model scales with their product. Closing the gap with this module alone would need a 59.6% mobile tap rate, more than the 46.5% who even said they would tap.',
        },
        {
          type: 'paragraph',
          text: 'The base case therefore leaves 11.6 points to come from outside this module. The three follow-on horizons are indicatively worth about 8.25 points combined at mid-range, so the honest April forecast is 68.6 − 5.0 − 8.25 ≈ 55.3%, against the 52% target. The remaining gap sits in the pinned hero, which is out of scope by instruction. It is escalated to the chief product officer rather than absorbed into a friendlier assumption, and the gifting funding request goes in at the fifth milestone.',
        },
        {
          type: 'horizons',
          columns: [
            { label: 'Now', note: 'Cheapest to correct.', cards: ['Placement and card-label optimisation', 'Placement is the weakest assumption'] },
            { label: 'Next', note: 'Largest deferred opportunity.', cards: ['Gifting', 'First in the backlog after launch'] },
            { label: 'Later', note: 'Where the remaining points most plausibly sit.', cards: ['Returning-visitor continuity'] },
          ],
          caption: 'Beyond the fifth milestone the sequence is Now, Next and Later, not dates. The three horizons are indicatively worth about 8.25 points combined at mid-range.',
        },
      ],
    },
    {
      id: 'measurement',
      kicker: 'Metrics and experiment',
      heading: 'Oriented sessions, not clicks',
      frameworks: [{ id: 'north-star' }],
      blocks: [
        {
          type: 'paragraph',
          text: 'Abandonment is the right goal but a poor North Star, because it can be moved by manufacturing meaningless clicks. Day to day the team reports oriented sessions instead: a homepage interaction, a destination reached, and ten seconds of dwell there. Destination and dwell defeat the cheap click.',
        },
        {
          type: 'expandable',
          title: 'Show the selected metrics from the metric tree',
          blocks: [
            {
              type: 'table',
              data: {
                caption: 'Selected metrics from the metric tree',
                columns: [
                  { key: 'metric', label: 'Metric' },
                  { key: 'definition', label: 'Definition' },
                  { key: 'baseline', label: 'Baseline' },
                  { key: 'target', label: 'Target' },
                  { key: 'type', label: 'Type' },
                ],
                rows: [
                  { metric: 'Oriented session rate', definition: 'Interaction, destination, 10 seconds of dwell', baseline: 'Estimated 25–35%', target: '+5 pp by 30 Apr 2027', type: 'Outcome' },
                  { metric: 'Abandonment, weighted', definition: 'No click within 5 minutes', baseline: '68.6%', target: '~60% by Jan, ~52% by Apr 2027', type: 'Outcome' },
                  { metric: 'Strip reach', definition: '≥50% visible for 1 second', baseline: 'New', target: '≥72% mobile, ≥88% desktop', type: 'Feature' },
                  { metric: 'Ritual open rate', definition: 'Opens ÷ strip impressions', baseline: 'New', target: '≥18% mobile, ≥15% desktop', type: 'Feature' },
                  { metric: 'Panel-to-product-page traverse', definition: 'Opens reaching a product page', baseline: 'New', target: '≥15%', type: 'Feature' },
                  { metric: 'Mean panel dwell', definition: 'Open to close', baseline: 'New', target: 'Under 6 seconds signals theatre', type: 'Diagnostic' },
                  { metric: 'INP, LCP, CLS (p75)', definition: 'Homepage field data', baseline: 'Pre-launch', target: 'No regression above 5%; CLS ≤ 0.10', type: 'Guardrail' },
                  { metric: 'Scroll past strip; below-strip click-through', definition: 'Both arms', baseline: 'Pre-launch', target: 'No decline above 1 pp', type: 'Guardrail' },
                ],
              },
            },
          ],
        },
        {
          type: 'expandable',
          title: 'Show the A/B experiment design and the pre-agreed decision rules',
          blocks: [
            {
              type: 'paragraph',
              text: 'The test is a plain A/B experiment. Half of homepage visitors see the strip and half do not, assigned randomly by session, and the groups are compared over four weeks with the first three days excluded as burn-in. One claim is tested: adding Rituals reduces homepage abandonment by at least 3 percentage points. At roughly 6,000 homepage sessions a day (an assumption) the test reaches the sample it needs in about a day and a half, so the four-week run is there to ride out novelty decay and cover full weekly cycles. Three points is also the smallest effect the test is set up to detect reliably, and the base case predicts 5.',
            },
            {
              type: 'table',
              data: {
                caption: 'Pre-agreed decision rules',
                columns: [
                  { key: 'outcome', label: 'Outcome' },
                  { key: 'pattern', label: 'Pattern' },
                  { key: 'decision', label: 'Decision' },
                ],
                rows: [
                  { outcome: 'Guardrail breach', pattern: 'Performance, accessibility or restraint threshold broken.', decision: 'Remove.' },
                  { outcome: 'Clean success', pattern: 'Reach ≥72%, open ≥18%, abandonment −3.0 pp and significant, traverse ≥15%.', decision: 'Ship to 100%; fund Now; gifting request now.' },
                  { outcome: 'Partial or weak', pattern: 'Traverse ≥15% and abandonment −1.0 to −3.0 pp, or open rate 8–18%.', decision: 'Hold at 50/50, iterate placement and labels, re-read in January against the same thresholds.' },
                  { outcome: 'Engagement theatre', pattern: 'Traverse under 15% and abandonment under 2.0 pp at the week-12 durability read.', decision: 'Remove.' },
                  { outcome: 'Orientation not the job', pattern: 'Open rate lower among first-time than returning visitors.', decision: 'Remove and reopen the problem.' },
                  { outcome: 'Walk away', pattern: 'Open rate under 8%, or abandonment movement under 1.0 pp.', decision: 'Remove, retire the flag, write up the lessons.' },
                ],
              },
            },
            {
              type: 'paragraph',
              text: 'The week-12 read would land on Black Friday (Friday 27 November 2026), so it moves to Thursday 26 November, 27 to 30 November is excluded, and a clean January 2027 read is added for the steady state.',
            },
          ],
        },
      ],
    },
    {
      id: 'wrong',
      kicker: 'Assumptions',
      heading: 'How we would know this was wrong',
      blocks: [
        {
          type: 'expandable',
          title: 'Show the six core assumptions and what would show each wrong',
          blocks: [
            {
              type: 'table',
              data: {
                caption: 'The six core assumptions. Grounding figures are from the simulated research',
                columns: [
                  { key: 'assumption', label: 'Assumption' },
                  { key: 'grounding', label: 'Grounding' },
                  { key: 'wrong', label: 'What would show it wrong' },
                ],
                rows: [
                  { assumption: 'A1. The job is orientation, not diagnosis', grounding: '17 of 20 extended-block responses.', wrong: 'Tap rate lower among first-time visitors than returning ones.' },
                  { assumption: 'A2. An in-page action is qualitatively different from a link', grounding: '8 of 20 liked that touching it costs nothing.', wrong: 'Open rates lower than the existing category tiles.' },
                  { assumption: 'A3. Stated interest converts to behaviour at about 0.39×', grounding: '46.5% stated top-two-box against 18% modelled.', wrong: 'Live open and tap rates replace the discount. Both factors are judgements.' },
                  { assumption: 'A4. A ritual label supplies the functional signal the product names withhold', grounding: 'Seven respondents said so unprompted.', wrong: 'The label test: ritual-labelled against plainly labelled cards, all else constant.' },
                  { assumption: 'A5. Restraint is a hard constraint rather than a preference', grounding: '15 of 20 named restraint as why they were on the site.', wrong: 'Engagement outside the module, or scroll depth past the strip, declines.' },
                  { assumption: 'A6. Placement below the hero is survivable', grounding: 'The weakest of the six: 3 of 20 raised it directly, and 4 of 5 session participants were obstructed by the hero.', wrong: 'Scroll-depth-to-module instrumentation from week one; vertical reflow is the held fallback.' },
                ],
              },
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'Three post-launch observations would show the proposal is wrong, each with a threshold so the call is data driven. If the strip meets its tap target while traverse to a product page sits below 15% and abandonment has moved less than 2 points at the week-12 read, the module has produced a click that satisfies the metric without serving the visitor. If the tap rate among first-time visitors is lower than among returning ones at week 8, orientation was not the job and the problem definition reopens. And if engagement outside the module declines, or scroll depth past the strip falls, the restraint constraint has been breached.',
        },
        {
          type: 'paragraph',
          text: 'The walk-away is pre-agreed. Below an 8% mobile tap rate, or under one point of abandonment movement at week 10, the module is removed rather than iterated.',
        },
        {
          type: 'externalLink',
          href: 'https://neilbaksi.github.io/rituals-prototype/',
          label: 'Open the clickable prototype',
          note: 'A low-fidelity, greyscale clickable prototype for mobile and desktop, showing the five rituals expanding in place. An earlier build was tested only with simulated AI-agent personas (Appendix 9), never with real users, and this corrected build has not been tested with anyone. Prices are hard-coded and indicative. There is no real cart, catalogue, search or analytics, and anything unimplemented says so when pressed.',
        },
      ],
    },
  ],
  takeaways: [
    'The problem was reframed from persuasion to orientation by reading the metric’s own definition (no click in five minutes), rather than assuming visitors need matching to a product.',
    'Restraint was treated as a requirement. Five constraints each trace to a named objection, and two more came from testing.',
    'The scoring frameworks were used and their limits stated: RICE put the recognition module ahead, 544 to 451, and the PRD explained why the recommendation stands anyway.',
    'The goal gap is stated openly. The base case closes 5.0 of 16.6 points, no modelled case reaches 52%, and the residual is named, forecast and escalated.',
    'Simulation was used as a cheap pre-test with its limits written down, then tested against itself. The earlier run over-predicted the tap rate, so the decision rules and the walk-away sit on live instrumentation only.',
  ],
  sources: [
    { label: 'Baymard Institute (2025). Homepage & navigation UX best practices', url: 'https://baymard.com/blog/ecommerce-navigation-best-practice' },
    { label: 'Nielsen, J. (2010). Scrolling and attention. Nielsen Norman Group', url: 'https://www.nngroup.com/articles/scrolling-and-attention-original-research/' },
    { label: 'Holmqvist, Wirtz & Fritze (2020). Luxury in the digital age. Journal of Business Research', url: 'https://doi.org/10.1016/j.jbusres.2020.05.038' },
    { label: 'Krishna (2012). An integrative review of sensory marketing. Journal of Consumer Psychology', url: 'https://doi.org/10.1016/j.jcps.2011.08.003' },
    { label: 'Webb & Sheeran (2006). Does changing behavioral intentions engender behavior change? Psychological Bulletin', url: 'https://doi.org/10.1037/0033-2909.132.2.249' },
    { label: 'Nielsen & Landauer (1993). A mathematical model of the finding of usability problems', url: 'https://doi.org/10.1145/169059.169166' },
    { label: 'Argyle et al. (2023). Out of one, many: using language models to simulate human samples. Political Analysis', url: 'https://doi.org/10.1017/pan.2023.2' },
    { label: 'Dillion et al. (2023). Can AI language models replace human participants? Trends in Cognitive Sciences', url: 'https://doi.org/10.1016/j.tics.2023.04.008' },
    { label: 'Horton (2023). Large language models as simulated economic agents. NBER Working Paper 31122', url: 'https://www.nber.org/papers/w31122' },
  ],
}
