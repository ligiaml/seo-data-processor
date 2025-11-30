import { type DomainMetrics } from "../lib/mergeData";

export default function DomainSummary({ items }: { items: DomainMetrics[] }) {
  if (items.length === 0) return null;

  return (
    <div style={{ marginTop: 20 }}>
      <h2>Results</h2>
      {items.map((m) => (
        <div key={m.domain} style={{ marginBottom: 20 }}>
          <h3>{m.domain}</h3>
          <p>Indexable pages: {m.indexablePages}</p>
          <p>Images without ALT: {m.imagesMissingAlt}</p>
          <p>Average authority: {m.avgPageAuthority.toFixed(2)}</p>
          <p>Total backlinks: {m.totalBacklinks}</p>
        </div>
      ))}
    </div>
  );
}
