import { ReactNode } from 'react';

export interface PropRow {
  name: string;
  type: string;
  default?: string;
  description: ReactNode;
}

export function PropTable({ rows, nameHeader = 'Name' }: { rows: PropRow[]; nameHeader?: string }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full min-w-[36rem] text-left text-sm">
        <thead className="bg-muted/50 text-xs uppercase tracking-wide text-muted-foreground">
          <tr>
            <th className="px-3 py-2.5 font-semibold">{nameHeader}</th>
            <th className="px-3 py-2.5 font-semibold">Type</th>
            <th className="px-3 py-2.5 font-semibold">Default</th>
            <th className="px-3 py-2.5 font-semibold">Description</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.name} className="border-t border-border/80 align-top">
              <td className="px-3 py-2.5 font-mono text-[13px] font-medium text-foreground">{row.name}</td>
              <td className="px-3 py-2.5 font-mono text-[12px] text-primary">{row.type}</td>
              <td className="px-3 py-2.5 font-mono text-[12px] text-muted-foreground">{row.default ?? '—'}</td>
              <td className="px-3 py-2.5 text-muted-foreground">{row.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
