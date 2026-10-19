import type { CaseStudy } from '../../types'
import userFlow from '../../assets/case-studies/connflix-user-flow.webp'
import storyboard from '../../assets/case-studies/connflix-mvp-storyboard.webp'
import wireframes from '../../assets/case-studies/connflix-wireframes.webp'
import matrix from '../../assets/case-studies/connflix-prioritisation-matrix.webp'
import prototypeScreens from '../../assets/case-studies/connflix-prototype-screens.webp'

export const CONNFLIX: CaseStudy = {
  slug: 'connflix',
  kicker: 'Case study · Team project',
  title: 'Connflix: a social club inside Netflix',
  subtitle:
    'Moving the conversation members already have about Netflix into Netflix: private, invitation-only clubs first, synchronised watch parties second.',
  meta: [
    { label: 'Format', value: 'Proposal, business case and prototype' },
    { label: 'Team', value: 'Six-person MBA syndicate' },
    { label: 'Course', value: 'Digital Product Management, MBS MBA' },
    { label: 'Date', value: 'August 2026' },
  ],
  disclosure: {
    title: 'Academic coursework, team project',
    body: 'A six-person syndicate project for Digital Product Management during my MBA at Melbourne Business School. It is not affiliated with or endorsed by Netflix. I was involved in every stage; “we” means the team. The press-release quotes, the build costs and the 200-persona panel are simulated.',
  },
  sections: [
    {
      id: 'short-version',
      kicker: 'In brief',
      heading: 'The short answer',
      blocks: [
        {
          type: 'paragraph',
          text: 'Netflix has won the argument about access and now competes for attention it cannot buy with content alone. About 90% of United States households hold a streaming subscription, viewing growth has slowed to roughly 2% year on year, and YouTube, a platform built on participation rather than curation, takes a larger share of US television viewing than Netflix does.',
        },
        {
          type: 'paragraph',
          text: 'Connflix moves the conversation members already have about Netflix into Netflix. Private, invitation-only clubs let people share titles with friends and family and comment on them, and later watch together in sync. Our survey of 65 people, alongside seven interviews, found that four in five had either tried to co-view remotely or wanted to, and that 85% had wanted to share something they were watching with someone who was not there. The survey was self-selecting and self-reported, and the interviews were few.',
        },
        {
          type: 'paragraph',
          text: 'The same research set the limits. Privacy was the most common concern, raised by 54% of survey respondents, so the feature is private by default, optional and deliberately quiet. We treat automated moderation of comments as core, because user-generated content is what brings the service into scope under online safety and privacy law. The commercial case rests on retention rather than new revenue: Connflix is bundled at no additional cost, and the value comes from members who have a reason to stay.',
        },
      ],
    },
    {
      id: 'market',
      kicker: 'Market',
      heading: 'From access to attention',
      blocks: [
        {
          type: 'paragraph',
          text: 'About 90% of US households pay for a subscription video-on-demand service, with an average of four services each. In May 2026 YouTube accounted for 13.8% of US television viewing against Netflix’s 8%. Netflix members watched more than 97 billion hours in the first half of 2026, about 2% more than a year earlier, while Netflix plans to invest about US$20 billion in films and series during 2026. Expanding the library looks like an increasingly costly way to differentiate, which strengthens the case for new forms of audience engagement.',
        },
        {
          type: 'expandable',
          title: 'Show the TAM, SAM and SOM detail',
          blocks: [
        {
          type: 'table',
          data: {
            caption: 'United States, Year 1. SAM and SOM are assumptions.',
            columns: [
              { key: 'layer', label: 'Layer' },
              { key: 'definition', label: 'Definition' },
              { key: 'users', label: 'Estimated users' },
              { key: 'basis', label: 'Basis' },
            ],
            rows: [
              {
                layer: 'TAM',
                definition: 'Paid Netflix subscriptions in the United States',
                users: '~80m',
                basis: 'S&P Global Market Intelligence/Kagan estimate for Q1 2025',
              },
              {
                layer: 'SAM',
                definition: 'US subscriptions associated with viewers likely to engage socially around content',
                users: '~33m',
                basis: '41% × ~80m; 41% of viewers message friends or family about content while watching',
              },
              {
                layer: 'SOM',
                definition: 'Monthly active Connflix accounts by the end of Year 1',
                users: '~4.0m',
                basis: '12% × ~33m; assumption for Year-1 feature adoption',
              },
            ],
          },
        },
          ],
        },
        {
          type: 'callout',
          kind: 'info',
          title: 'The pattern in the market',
          body: 'Disney+ retired GroupWatch in 2023 and Amazon removed Prime Video’s Watch Party in 2024, neither giving a public reason. The conversation itself has not been withdrawn: Letterboxd, Reddit and TikTok thrive on recommending, reviewing and arguing about content. Synchronised playback alone has failed twice while the persistent social layer around it has not, so we build the club first and the watch party second.',
        },
        {
          type: 'paragraph',
          text: 'We also applied Porter’s Five Forces. The greatest pressure on Netflix comes not from new streaming entrants but from intense rivalry, high consumer choice and substitutes that compete for attention and social engagement.',
        },
      ],
    },
    {
      id: 'problem-research',
      kicker: 'Problem and research',
      heading: 'Watching alone when company would be preferred',
      frameworks: [{ id: 'jtbd', to: '/day/2' }],
      blocks: [
        {
          type: 'paragraph',
          text: 'Our problem statement: how might we let Netflix members share what they watch with the people they care about, without giving up the privacy or the simplicity that make the product work? We split it into three gaps. The emotional gap is watching alone when company would be preferred. The coordination gap is the effort of starting the same title at the same moment from different places. The decision gap is the time lost to browsing. The MVP addresses the emotional and decision gaps; synchronised watch parties follow later.',
        },
        {
          type: 'expandable',
          title: 'Show the full survey results (n = 65)',
          blocks: [
        {
          type: 'table',
          data: {
            caption: 'Survey n = 65 and seven interviews; self-selected, self-reported. Percentages are of the 65 survey respondents.',
            columns: [
              { key: 'measure', label: 'Measure' },
              { key: 'result', label: 'Result' },
            ],
            rows: [
              { measure: 'Had wanted to share something they were watching with someone who was not present', result: '85% (55 respondents)' },
              { measure: 'Felt that need at least monthly', result: '40% (26 respondents)' },
              { measure: 'Had already attempted remote co-viewing', result: '54% (35 respondents)' },
              { measure: 'Wanted to co-view remotely but had not tried', result: '26% (17 respondents)' },
              { measure: 'Barrier: keeping playback in step', result: '35%' },
              { measure: 'Barrier: finding a time that suited both people', result: '31%' },
              { measure: 'Barrier: running a second application to talk', result: '23%' },
              { measure: 'Privacy raised as a concern', result: '54%' },
              { measure: 'Prefer to watch alone', result: '15%' },
            ],
          },
        },
          ],
        },
        {
          type: 'paragraph',
          text: 'The objections matter as much as the demand. Read together, the resistance was not to sharing but to interruption and exposure. That is why activity sharing is off by default and why comments sit outside playback rather than over it. Interview themes of privacy of reactions, spoiler management, the effort of coordinating playback and a desire for credit for good recommendations recurred in five of the seven interviews.',
        },
        {
          type: 'expandable',
          title: 'Show the jobs-to-be-done table',
          blocks: [
        {
          type: 'table',
          data: {
            caption: 'Jobs to be done, the workarounds members use today, and the Connflix response.',
            columns: [
              { key: 'type', label: 'Type' },
              { key: 'job', label: 'Job' },
              { key: 'workaround', label: 'Current workaround' },
              { key: 'response', label: 'Connflix response' },
            ],
            rows: [
              {
                type: 'Functional',
                job: 'When my household cannot agree on what to watch, I want to see what people I trust have already enjoyed, so that we can decide quickly and start watching.',
                workaround: 'Asking friends; scrolling the menu',
                response: 'Club feed and title sharing (MVP)',
              },
              {
                type: 'Functional',
                job: 'When I want to watch something with someone who is not in the room, I want to start the same title at the same moment, so that we can react together.',
                workaround: 'Counting down over a messaging app',
                response: 'Synchronised watch party (Phase 2)',
              },
              {
                type: 'Emotional',
                job: 'When something surprising happens on screen, I want to share that reaction with someone who will understand it, so that the moment is not wasted.',
                workaround: 'Texting; posting; online forums',
                response: 'Private comments and reactions (MVP)',
              },
              {
                type: 'Social',
                job: 'When friends are discussing a show, I want to keep up, so that I am not left out of the conversation.',
                workaround: 'Bingeing to catch up; avoiding spoilers',
                response: 'Club feed and spoiler-flagged comments (MVP)',
              },
            ],
          },
        },
          ],
        },
        {
          type: 'callout',
          kind: 'warning',
          title: 'A simulated panel, used as a prior',
          body: 'Before fielding the survey we generated 200 synthetic personas, matched to the US subscriber base, and gave them the same questionnaire. The panel is simulated. As the report puts it, “synthetic responses generate hypotheses rather than evidence” and are not relied upon as findings. Its job was to stress-test the questionnaire and give us a prior to compare the human results against.',
        },
        {
          type: 'expandable',
          title: 'Show the synthetic panel (simulated) vs human survey comparison',
          blocks: [
        {
          type: 'table',
          data: {
            caption: 'Synthetic panel (simulated) vs human survey: three of six measures sit within seven points. The two largest gaps concern synchronous viewing, and the panel also overstated privacy concern by 11.2 points.',
            columns: [
              { key: 'measure', label: 'Measure' },
              { key: 'panel', label: 'Synthetic panel (n = 200, simulated)' },
              { key: 'human', label: 'Human survey (n = 65)' },
              { key: 'gap', label: 'Gap' },
            ],
            rows: [
              { measure: 'Wants to share at least monthly', panel: '46.0%', human: '40.0%', gap: '6.0 pts (panel high)' },
              { measure: 'Has tried remote co-viewing', panel: '29.5%', human: '53.8%', gap: '24.3 pts (panel low)' },
              { measure: 'Ranks “recommend directly” in top three', panel: '62.5%', human: '69.2%', gap: '6.7 pts (panel low)' },
              { measure: 'Ranks “watch in sync” in top three', panel: '15.5%', human: '33.8%', gap: '18.3 pts (panel low)' },
              { measure: 'Cites privacy as a concern', panel: '65.0%', human: '53.8%', gap: '11.2 pts (panel high)' },
              { measure: 'Would share with a partner or family member', panel: '51.0%', human: '44.6%', gap: '6.4 pts (panel high)' },
            ],
          },
        },
          ],
        },
        {
          type: 'paragraph',
          text: 'The gap taught us something specific. The panel materially under-estimated appetite for watching together remotely and overstated privacy concern by eleven points, because we had built the personas to treat synchronous viewing as effortful and privacy as near-universal. That is the intended use of a synthetic panel: a prior to be corrected by primary research, not a result to be reported alongside it. Where the two diverged, we treated the human sample as authoritative.',
        },
      ],
    },
    {
      id: 'pivot',
      kicker: 'How research changed the concept',
      heading: 'From “more social” to “easier sharing with people you know”',
      frameworks: [{ id: 'working-backwards' }],
      blocks: [
        {
          type: 'shift',
          left: {
            title: 'Initial idea',
            items: ['Groups', 'Public communities', 'Chat and comments', 'Ratings and reactions', 'Watch parties at launch'],
          },
          right: {
            title: 'Where we landed',
            items: [
              'Private, invitation-only clubs',
              'Easy recommendations',
              'Opt-in interactions',
              'Privacy by default',
              'Watch parties in Phase 2',
            ],
          },
          center: '72 participants',
          caption: 'Concept before and after primary research',
        },
        {
          type: 'paragraph',
          text: 'We started by drafting a launch press release, working backwards from the announcement. That first concept combined clubs, comments, activity sharing and synchronised watch parties from day one, and its quotes are simulated. Primary research challenged the assumption that more social functionality would create more value. Viewers wanted to connect around content, but privacy, notifications and distraction pointed to something simpler and more controlled. We cut public clubs, direct messaging and launch-day watch parties, and narrowed the concept to a private, opt-in layer built around trusted relationships.',
        },
      ],
    },
    {
      id: 'scope',
      kicker: 'Scope and specification',
      heading: 'The group is the platform',
      frameworks: [
        { id: 'moscow', to: '/day/2' },
        { id: 'value-complexity', to: '/day/2' },
        { id: 'mvp', to: '/day/4' },
      ],
      blocks: [
        {
          type: 'expandable',
          title: 'Show the segment ranking table',
          blocks: [
        {
          type: 'table',
          data: {
            caption: 'Segmentation and targeting: four candidate segments ranked on need, frequency of use and moderation load.',
            columns: [
              { key: 'segment', label: 'Segment' },
              { key: 'description', label: 'Description' },
              { key: 'attractiveness', label: 'Attractiveness' },
              { key: 'decision', label: 'Decision' },
            ],
            rows: [
              {
                segment: 'Loved ones in different households',
                description: 'Already coordinate viewing across separate households through messaging apps',
                attractiveness: 'High need, frequent use case, emotionally driven',
                decision: 'Primary target',
              },
              {
                segment: 'Households choosing what to watch together',
                description: 'Browse and decide together in one household; long decision times',
                attractiveness: 'Large segment; clear functional pain point',
                decision: 'Secondary target',
              },
              {
                segment: 'Fandom communities',
                description: 'Continue discussing titles in online communities after watching',
                attractiveness: 'Large and highly engaged, but already served by Reddit and TikTok and would need more moderation',
                decision: 'Later-phase opportunity',
              },
              {
                segment: 'Solo-by-preference viewers',
                description: 'Value privacy; do not want viewing activity shared',
                attractiveness: 'Low need for the feature; potential privacy concerns',
                decision: 'Not targeted; protected through default-off sharing',
              },
            ],
          },
        },
          ],
        },
        {
          type: 'quote',
          quote: 'A Netflix where every title has a table of friends around it.',
          attribution: 'Connflix product vision (team)',
        },
        {
          type: 'paragraph',
          text: 'The vision treats the private group, not the watch party, as the unit the product is built on. Once a small trusted group exists inside Netflix, sharing, discussion and synchronised viewing are all applications of it, and each can be released and measured independently.',
        },
        {
          type: 'moscow',
          rings: [
            { label: 'Must have', effort: '60% of effort' },
            { label: 'Should have', effort: '20% of effort' },
            { label: 'Could have', effort: '20% of effort' },
            { label: 'Won’t (this release)', effort: 'deferred' },
          ],
          caption:
            'Must scope: create a private club, add members, share content with a club, private comments on a title, admin rights, user ID and automated moderation of comments.',
        },
        {
          type: 'callout',
          kind: 'info',
          title: 'Why moderation is a Must',
          body: 'Comments bring the service into scope as a regulated user-to-user service under the UK Online Safety Act and add notice-and-action duties under the EU Digital Services Act. Sharing viewing records also engages the US Video Privacy Protection Act, which is why activity sharing sits behind its own consent screen and defaults to off. The absence of a moderation model is a documented reason earlier social features were withdrawn.',
        },
        {
          type: 'image',
          src: matrix,
          alt: 'Feature prioritisation matrix on a black background: about 40 feature codes plotted by customer value on the vertical axis against development effort on the horizontal axis, split into Quick Wins, Strategic Bets, Fill-ins and Low Priority. Points are coloured for Must, Should, Could and Won’t Have, with a legend beside the plot.',
          caption:
            'Feature prioritisation, customer value against development effort. Spoiler flags show in the Won’t-have colour here, an error carried over from an earlier draft. They are a Must-have in the backlog and ship in the MVP under requirement R4.',
          size: 'wide',
          width: 1600,
          height: 900,
        },
        {
          type: 'expandable',
          title: 'Show the full requirements table (R1 to R7)',
          blocks: [
        {
          type: 'table',
          data: {
            caption: 'MVP requirements and the acceptance criteria each must meet.',
            columns: [
              { key: 'id', label: 'ID' },
              { key: 'requirement', label: 'Requirement' },
              { key: 'criteria', label: 'Acceptance criteria' },
            ],
            rows: [
              {
                id: 'R1',
                requirement: 'Create a private club',
                criteria: 'A member can name a club, choose an identifier and become its admin in under 60 seconds. Clubs are invitation-only by default.',
              },
              {
                id: 'R2',
                requirement: 'Invite and manage members',
                criteria: 'Admins can invite by Connflix ID, approve link requests, promote another admin and remove a member. Removal revokes feed access immediately.',
              },
              {
                id: 'R3',
                requirement: 'Share a title to a club',
                criteria: 'Any member can share a title with an optional note. The share appears in the club feed and notifies members according to their own settings.',
              },
              {
                id: 'R4',
                requirement: 'Comment privately on a title',
                criteria: 'Comments are visible only to club members, support a spoiler flag, and can be reported and removed.',
              },
              {
                id: 'R5',
                requirement: 'Automated comment moderation',
                criteria: 'Comments are screened before publication for abuse, harassment and material unlawful in the launch territory. Removals generate a reasoned notice to the author and an appeal route, and every action is written to an audit trail.',
              },
              {
                id: 'R6',
                requirement: 'Control activity visibility',
                criteria: 'Activity sharing is off by default, reversible in one action, and consent expires after 24 months in line with the Video Privacy Protection Act.',
              },
              {
                id: 'R7',
                requirement: 'Non-functional',
                criteria: 'Playback synchronisation within ±2 seconds; kids profiles excluded at the profile gate; data erasure on club deletion; WCAG 2.1 AA compliance.',
              },
            ],
          },
        },
          ],
        },
        {
          type: 'expandable',
          title: 'Show the phase detail (Phase 1 to Phase 4)',
          blocks: [
        {
          type: 'steps',
          items: [
            {
              title: 'Phase 1: Foundation',
              body: 'Establish the group primitive and prove members will form clubs. Scope: private clubs, user ID, invitations, admin rights, content sharing, private comments, automated comment moderation. Exit target: 10% of invited members create or join a club within 30 days, measured against a matched holdout.',
            },
            {
              title: 'Phase 2: Together',
              body: 'Prove synchronised viewing is habitual, not merely novel. Scope: remote co-watch, pause-for-all, club notifications, polls, share links, age gating. Exit target: club members record higher total watch time than a matched holdout over one quarter, tested via A/B.',
            },
            {
              title: 'Phase 3: Conversation',
              body: 'Deepen the asynchronous layer between sessions. Scope: chat rooms, reactions, ratings, reviews, group recommendations, editable IDs. Exit target: month-on-month growth in comments and reactions per active club.',
            },
            {
              title: 'Phase 4: Expansion',
              body: 'Extend the primitive beyond film and series. Scope: public clubs, games lobbies, live events, rollout beyond the United States. Exit target: 5% relative reduction in monthly churn among club members against the holdout.',
            },
          ],
        },
          ],
        },
      ],
    },
    {
      id: 'design',
      kicker: 'Design',
      heading: 'Flows, storyboard, wireframes, prototype',
      frameworks: [{ id: 'storyboarding' }],
      blocks: [
        {
          type: 'image',
          src: userFlow,
          alt: 'Flowchart of the Connflix user flow in red and grey boxes, from a Start node through logging into Netflix, selecting a user and Connflix, creating a club or group, adding users by user ID, setting club options, and branching into member tabs, comments, watchlist and content sharing, ending at an End node.',
          caption: 'MVP user flow. Two entry points: the Connflix section, or sharing from a title page.',
          size: 'wide',
          width: 1600,
          height: 567,
        },
        {
          type: 'expandable',
          title: 'Show the user flow walkthrough',
          blocks: [
        {
          type: 'paragraph',
          text: 'The flow has two entry points. One begins at login, where Connflix is selected as its own section in the same way a member would select films, shows or games. The other begins on a title page, where content can be shared directly into an existing club. The decision most likely to be challenged is whether Connflix lives as a main navigation destination or stays a contextual action inside each title page, because that choice determines discoverability and signals how central the social layer is meant to be. The flow also carries the branches that decide whether the feature survives real use: a member with no club yet reaches an empty state that offers club creation rather than a blank feed, a declined or expired invitation returns the sender to the club roster with the request marked, and a share attempted on a kids profile is blocked at the profile gate.',
        },
          ],
        },
        {
          type: 'image',
          src: storyboard,
          alt: 'Six-panel illustrated storyboard. A man watching Netflix alone says he wishes Luke could watch with him. Luke, on a call, agrees, and they decide what to watch. Then a private Connflix group is created with recommendations, and in the final panels they comment and react inside Connflix while watching together.',
          caption: 'MVP storyboard. It deliberately stops short of synchronised playback, which is Phase 2.',
          size: 'wide',
          width: 1282,
          height: 782,
        },
        {
          type: 'image',
          src: wireframes,
          alt: 'Low-fidelity phone wireframe of the Clubs list. It shows a pending invitation with Join and Ignore buttons, a list of four clubs with member counts and unread badges, a Create a club button, a Recently shared row of image placeholders, and a bottom tab bar with Connflix active.',
          caption:
            'Clubs list wireframe from the MVP set. Deliberately low fidelity, to test placement and hierarchy rather than visual design.',
          size: 'portrait',
          width: 634,
          height: 1266,
        },
        {
          type: 'externalLink',
          href: 'https://yadavsaloni7.github.io/DPM/',
          label: 'Open the Connflix prototype',
          note: 'Hosted by a teammate on GitHub Pages. Covers the Must-have scope only: club creation, invitation and sharing. No synchronised playback, moderation or notifications.',
        },
        {
          type: 'image',
          src: prototypeScreens,
          alt: 'Three dark-theme phone screens from the Connflix prototype. Left: the Connflix hub with pending club invitations, each with Join and Ignore, and a Create a club button. Centre: the Mine club feed, showing shared titles with comments and a Watch button. Right: the Film Club members tab, with an admin and an Add Members button.',
          caption:
            'Screens from the clickable prototype, which covers the Must-have scope only: club creation, invitation and sharing.',
          size: 'wide',
          width: 1600,
          height: 1096,
        },
      ],
    },
    {
      id: 'metrics-case',
      kicker: 'Metrics and commercial case',
      heading: 'A low adoption bar, not a popularity contest',
      frameworks: [{ id: 'north-star' }, { id: 'aarrr' }],
      blocks: [
        {
          type: 'paragraph',
          text: 'Our North Star is weekly socially-connected viewing hours: hours watched by members who belong to at least one active club. It couples the social behaviour to the outcome Netflix already manages, and it resists gaming because clubs with no viewing do not count. Supporting metrics follow the AARRR framework, with guardrails (privacy opt-outs, abuse reports and playback quality during synchronised sessions) that must not regress.',
        },
        {
          type: 'expandable',
          title: 'Show the North Star and AARRR metrics table',
          blocks: [
        {
          type: 'table',
          data: {
            caption: 'North Star and AARRR metrics.',
            columns: [
              { key: 'layer', label: 'Layer' },
              { key: 'metric', label: 'Metric' },
              { key: 'why', label: 'Why this one' },
            ],
            rows: [
              {
                layer: 'North Star',
                metric: 'Weekly socially-connected viewing hours: hours watched by members belonging to at least one active club',
                why: 'Couples the social behaviour to the outcome Netflix already manages, and resists gaming: clubs with no viewing do not count.',
              },
              {
                layer: 'Acquisition',
                metric: 'Invitation acceptance rate',
                why: 'Tests whether the invitation itself is compelling, independent of the feature.',
              },
              {
                layer: 'Activation',
                metric: 'Members reaching a first shared moment (share, comment or party) within 7 days',
                why: 'The behaviour that predicts retention.',
              },
              {
                layer: 'Retention',
                metric: 'Club-active members returning in week 4; churn delta against a matched non-club control',
                why: 'The commercial case stands or falls on this number.',
              },
              {
                layer: 'Referral',
                metric: 'Invitations sent per activated member',
                why: 'The loop that makes adoption compound rather than plateau.',
              },
              {
                layer: 'Revenue',
                metric: 'Incremental viewing hours; ad impressions on supported tiers; retained subscription revenue',
                why: 'Connects engagement to the P&L.',
              },
            ],
          },
        },
          ],
        },
        {
          type: 'paragraph',
          text: 'Connflix is bundled at no additional cost, so its value is retained revenue rather than new revenue. Netflix holds the lowest churn in the category, at about 2% monthly, and the case rests on defending that position.',
        },
        {
          type: 'formula',
          expression:
            'Retained revenue = annual UCAN revenue × annual churn × adopters ÷ member base × relative churn reduction',
          note: 'UCAN is the US and Canada. The model starts from about US$21.7bn of annual UCAN revenue, of which about US$4.6bn is at risk each year at 2% monthly churn.',
        },
        {
          type: 'expandable',
          title: 'Show the sensitivity analysis (conservative, base, optimistic)',
          blocks: [
        {
          type: 'table',
          data: {
            caption: 'Sensitivity analysis. Adoption is a share of the ~33m serviceable market, so the base case of 12% is ~4.0m adopters. Ranges are estimates, not observed values.',
            columns: [
              { key: 'scenario', label: 'Scenario' },
              { key: 'adoption', label: 'Year-1 adoption (% of SAM)' },
              { key: 'churn', label: 'Relative churn reduction among adopters' },
              { key: 'retained', label: 'Annual retained revenue' },
              { key: 'ads', label: 'Incremental ad revenue' },
            ],
            rows: [
              { scenario: 'Conservative', adoption: '6%', churn: '8%', retained: '~US$8m', ads: '~US$4m' },
              { scenario: 'Base case', adoption: '12%', churn: '15%', retained: '~US$31m', ads: '~US$19m' },
              { scenario: 'Optimistic', adoption: '20%', churn: '25%', retained: '~US$84m', ads: '~US$61m' },
            ],
          },
        },
          ],
        },
        {
          type: 'formula',
          expression: 'US$25m ÷ ~US$12.50 per adopter ≈ 2.0m adopters',
          note: 'At base-case value per adopter (US$50m ÷ 4.0m ≈ US$12.50 a year), the US$25m build breaks even at about 2.0m adopters: half the Year-1 target, about 6% of the serviceable market, or about 2.2% of the UCAN member base. On the conservative assumptions the bar roughly doubles.',
        },
        {
          type: 'callout',
          kind: 'warning',
          title: 'Every input is an assumption',
          body: 'The US$25m Year-1 build cost is indicative and simulated, for the purposes of this exercise. The base case is about US$50m a year (US$31m retained plus US$19m in advertising). The session-recovery rate behind the advertising line is the weakest input. Before the model informs a funding decision, the adoption and churn-reduction ranges are to be replaced with the measured churn delta from the Phase 1 holdout. Note that the Phase 4 exit target is a 5% relative reduction in monthly churn, while the base case above assumes a 15% reduction; both are shown here as written in the report.',
        },
        {
          type: 'expandable',
          title: 'Show the selected risks and mitigations',
          blocks: [
        {
          type: 'table',
          data: {
            caption: 'Selected risks from the full register (likelihood and impact scored 1 to 5).',
            columns: [
              { key: 'risk', label: 'Risk' },
              { key: 'score', label: 'Likelihood / impact' },
              { key: 'mitigation', label: 'Mitigation' },
            ],
            rows: [
              {
                risk: 'Novelty use then abandonment, as happened to Netflix in 2015 and to Amazon and Disney+ more recently',
                score: '4 / 5',
                mitigation: 'Ship the asynchronous club layer before synchronous playback, so there is a reason to return between sessions. Set an explicit kill criterion at the Phase 1 gate.',
              },
              {
                risk: 'Cold start: a club of one has no value, so adoption stalls before the second member joins',
                score: '4 / 4',
                mitigation: 'Optimise the invitation, not the feature. Track invitation acceptance as the first activation metric.',
              },
              {
                risk: 'Consent design fails the VPPA standard, creating class-action exposure',
                score: '2 / 5',
                mitigation: 'Standalone consent screen with 24-month expiry and immediate withdrawal. Counsel sign-off before build.',
              },
              {
                risk: 'Engagement is redistributed rather than created, and the effect is too small to measure at MVP scale',
                score: '3 / 5',
                mitigation: 'Design the matched holdout before launch and power it to detect the base-case churn delta. Agree a proxy metric in advance if the sample is unattainable.',
              },
            ],
          },
        },
          ],
        },
      ],
    },
    {
      id: 'wrong',
      kicker: 'Conclusion',
      heading: 'Two findings would prove it wrong',
      blocks: [
        {
          type: 'paragraph',
          text: 'Connflix does not try to turn Netflix into a social network. It takes something members already do, recommending, reacting and arguing about an ending, and stops making them leave the app to do it.',
        },
        {
          type: 'paragraph',
          text: 'Two findings would prove the concept wrong. If invitations are accepted but clubs go quiet, the social layer is thinner than the research suggests. If club members watch no more than a matched control group, the engagement case fails. Both are measurable within one quarter, and both are worth knowing early.',
        },
      ],
    },
  ],
  takeaways: [
    'Research narrowed the concept: from a broad social network to private, opt-in clubs among people who already know each other.',
    'Moderation was treated as scope, not polish, because user-generated content brings legal duties with it.',
    'Sequencing was learned from competitors’ withdrawals: the club first, the watch party second.',
    'The retention case carries an explicit break-even, and every input is flagged as an assumption.',
    'Pre-stated kill signals mean the concept can be proved wrong within a quarter.',
  ],
}
