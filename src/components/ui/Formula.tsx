interface FormulaProps {
  expression: string
  note?: string
}

/** A centered, boxed equation in a tinted panel. */
export function Formula({ expression, note }: FormulaProps) {
  return (
    <div className="rounded-2xl border border-rule/60 bg-blue-wash p-6 text-center">
      <p className="font-mono text-lg text-ink sm:text-xl">{expression}</p>
      {note && <p className="mx-auto mt-3 max-w-prose text-sm text-ink-soft">{note}</p>}
    </div>
  )
}
