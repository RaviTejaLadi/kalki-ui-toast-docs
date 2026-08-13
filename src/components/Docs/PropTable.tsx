import { ReactNode } from 'react';

export interface PropRow {
  name: string;
  type: string;
  default?: string;
  description: ReactNode;
}

export function PropTable({ rows, nameHeader = 'Name' }: { rows: PropRow[]; nameHeader?: string }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-border/70">
      <table className="w-full min-w-[40rem] text-left text-sm">
        <thead className="bg-muted/50 text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
          <tr>
            <th className="px-4 py-3 font-semibold">{nameHeader}</th>
            <th className="px-4 py-3 font-semibold">Type</th>
            <th className="px-4 py-3 font-semibold">Default</th>
            <th className="px-4 py-3 font-semibold">Description</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={row.name}
              className={`align-top border-t border-border/70 ${index % 2 === 1 ? 'bg-muted/20' : 'bg-transparent'}`}
            >
              <td className="px-4 py-3 font-mono text-[13px] font-medium text-foreground">{row.name}</td>
              <td className="px-4 py-3">
                <code className="inline-block max-w-[16rem] whitespace-pre-wrap break-words rounded-md bg-primary/10 px-1.5 py-0.5 font-mono text-[11px] leading-relaxed text-primary">
                  {row.type}
                </code>
              </td>
              <td className="px-4 py-3 font-mono text-[12px] text-muted-foreground">{row.default ?? '—'}</td>
              <td className="px-4 py-3 leading-relaxed text-muted-foreground">{row.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
