interface AttributionFooterProps {
  sources: { label: string; url: string }[]
}

/** Small-print sources block, shown at the foot of sourced content. */
export function AttributionFooter({ sources }: AttributionFooterProps) {
  return (
    <div className="mt-10 border-t border-rule pt-6">
      <p className="font-mono text-[0.7rem] font-semibold uppercase tracking-widest text-muted">Sources</p>
      <ul className="mt-2 flex flex-wrap gap-x-1 text-xs text-muted">
        {sources.map((source, i) => (
          <li key={i}>
            <a href={source.url} target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">
              {source.label}
            </a>
            {i < sources.length - 1 ? ',' : '.'}
          </li>
        ))}
      </ul>
    </div>
  )
}
