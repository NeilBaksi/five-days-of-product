import type { ContentBlock } from '../types'
import {
  Card,
  Callout,
  FrameworkTable,
  PullQuote,
  StepList,
  Placeholder,
  GoodBadList,
  StoryCards,
  Spectrum,
  PressureDiagram,
  Triad,
  Formula,
  DebateCallout,
  StrategyStack,
  CompetencyWheel,
  OpportunityChart,
  PersonaCard,
  PriorityMatrix,
  KanoCurve,
  QuoteBank,
  MoscowRings,
  ConcretenessLadder,
  RoadmapCycle,
} from '../components/ui'

/** Renders a single Day content block. Maps the ContentBlock union → UI components. */
export function renderBlock(block: ContentBlock, key: number) {
  switch (block.type) {
    case 'paragraph':
      return (
        <p key={key} className="prose-body">
          {block.text}
        </p>
      )
    case 'subheading':
      return (
        <h3 key={key} className="font-display text-xl font-bold text-ink">
          {block.text}
        </h3>
      )
    case 'image':
      return (
        <figure key={key} className="mx-auto w-full max-w-xl">
          <img src={block.src} alt={block.alt} className="w-full h-auto rounded-2xl" />
          {block.caption && <figcaption className="mt-3 text-sm text-muted">{block.caption}</figcaption>}
        </figure>
      )
    case 'cards':
      return (
        <div key={key} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {block.items.map((item, i) => (
            <Card
              key={i}
              index={String(i + 1).padStart(2, '0')}
              title={item.title}
              body={item.body}
            />
          ))}
        </div>
      )
    case 'callout':
      return (
        <Callout key={key} kind={block.kind} title={block.title}>
          {block.body}
        </Callout>
      )
    case 'table':
      return <FrameworkTable key={key} data={block.data} />
    case 'quote':
      return <PullQuote key={key} quote={block.quote} attribution={block.attribution} />
    case 'steps':
      return <StepList key={key} items={block.items} />
    case 'placeholder':
      return <Placeholder key={key} note={block.note} />
    case 'goodbad':
      return <GoodBadList key={key} items={block.items} />
    case 'stories':
      return <StoryCards key={key} items={block.items} />
    case 'spectrum':
      return <Spectrum key={key} stages={block.stages} caption={block.caption} />
    case 'pressure':
      return <PressureDiagram key={key} center={block.center} forces={block.forces} />
    case 'triad':
      return <Triad key={key} center={block.center} nodes={block.nodes} variant={block.variant} caption={block.caption} />
    case 'formula':
      return <Formula key={key} expression={block.expression} note={block.note} />
    case 'debate':
      return <DebateCallout key={key} left={block.left} right={block.right} resolution={block.resolution} />
    case 'strategyStack':
      return (
        <StrategyStack
          key={key}
          topTier={block.topTier}
          support={block.support}
          center={block.center}
          nodes={block.nodes}
          caption={block.caption}
          vennImage={block.vennImage}
          vennImageAlt={block.vennImageAlt}
        />
      )
    case 'wheel':
      return (
        <CompetencyWheel key={key} center={block.center} spokes={block.spokes} emphasisIndex={block.emphasisIndex} />
      )
    case 'opportunity':
      return (
        <OpportunityChart
          key={key}
          xLabel={block.xLabel}
          yLabel={block.yLabel}
          dots={block.dots}
          zoneLabel={block.zoneLabel}
          caption={block.caption}
        />
      )
    case 'persona':
      return <PersonaCard key={key} name={block.name} jtbd={block.jtbd} problems={block.problems} />
    case 'matrix':
      return (
        <PriorityMatrix
          key={key}
          xLabel={block.xLabel}
          yLabel={block.yLabel}
          items={block.items}
          zoneLabel={block.zoneLabel}
          caption={block.caption}
        />
      )
    case 'kano':
      return <KanoCurve key={key} caption={block.caption} />
    case 'quoteBank':
      return <QuoteBank key={key} items={block.items} />
    case 'moscow':
      return <MoscowRings key={key} rings={block.rings} caption={block.caption} />
    case 'ladder':
      return <ConcretenessLadder key={key} tiers={block.tiers} caption={block.caption} />
    case 'roadmapCycle':
      return <RoadmapCycle key={key} steps={block.steps} caption={block.caption} />
    default:
      return null
  }
}
