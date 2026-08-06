import type { ContentBlock } from '../types'
import { Card, Callout, FrameworkTable, PullQuote, StepList, Placeholder } from '../components/ui'

/** Renders a single Day content block. Maps the ContentBlock union → UI components. */
export function renderBlock(block: ContentBlock, key: number) {
  switch (block.type) {
    case 'paragraph':
      return (
        <p key={key} className="prose-body">
          {block.text}
        </p>
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
    default:
      return null
  }
}
