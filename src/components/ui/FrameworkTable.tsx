import type { FrameworkTableData } from '../../types'

interface FrameworkTableProps {
  data: FrameworkTableData
}

/** Responsive framework table: real <table> on md+, stacked <dl> cards below md. */
export function FrameworkTable({ data }: FrameworkTableProps) {
  const { caption, columns, rows, emphasisKey } = data

  return (
    <div>
      <p className="font-mono text-[0.7rem] font-semibold uppercase tracking-widest text-muted">{caption}</p>

      {/* Desktop table */}
      <div className="mt-3 hidden overflow-x-auto md:block">
        <table className="w-full border-collapse border border-rule text-left">
          <caption className="sr-only">{caption}</caption>
          <thead>
            <tr className="border-b border-rule bg-surface">
              {columns.map((col) => (
                <th
                  key={col.key}
                  scope="col"
                  className="border border-rule px-4 py-3 font-mono text-[0.7rem] font-medium uppercase tracking-widest text-muted"
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr key={ri} className="even:bg-blue-wash/40">
                {columns.map((col, ci) => {
                  const isEmphasis = emphasisKey === col.key
                  const cellContent = (
                    <>
                      {isEmphasis && (
                        <span aria-hidden className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-brand align-middle" />
                      )}
                      {row[col.key]}
                    </>
                  )
                  return ci === 0 ? (
                    <th
                      key={col.key}
                      scope="row"
                      className={`border border-rule px-4 py-3 text-[0.9rem] font-medium text-ink ${
                        isEmphasis ? 'font-medium text-brand' : ''
                      }`}
                    >
                      {cellContent}
                    </th>
                  ) : (
                    <td
                      key={col.key}
                      className={`border border-rule px-4 py-3 text-[0.9rem] text-ink-soft ${
                        isEmphasis ? 'font-medium text-brand' : ''
                      }`}
                    >
                      {cellContent}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile stacked cards */}
      <div className="mt-3 space-y-4 md:hidden">
        {rows.map((row, ri) => (
          <div key={ri} className="rounded-xl border border-rule bg-surface p-4">
            <dl className="space-y-2.5">
              {columns.map((col) => {
                const isEmphasis = emphasisKey === col.key
                return (
                  <div key={col.key}>
                    <dt className="font-mono text-[0.65rem] uppercase tracking-widest text-muted">{col.label}</dt>
                    <dd className={`mt-0.5 text-[0.9rem] ${isEmphasis ? 'font-medium text-brand' : 'text-ink'}`}>
                      {isEmphasis && (
                        <span aria-hidden className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-brand align-middle" />
                      )}
                      {row[col.key]}
                    </dd>
                  </div>
                )
              })}
            </dl>
          </div>
        ))}
      </div>
    </div>
  )
}
