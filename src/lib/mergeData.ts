export type DomainMetrics = {
  domain: string;
  indexablePages: number;
  imagesMissingAlt: number;
  avgPageAuthority: number;
  totalBacklinks: number;
};

export function mergeData(jsonDomains: any[], csvRows: any[]): DomainMetrics[] {
  return jsonDomains.map((dom) => {
    const pages = dom.pages;

    const matchedCsv = pages.map((p: any) =>
      csvRows.find((r) => r.Address === p.url)
    );

    const indexablePages = matchedCsv.filter((r: { Indexability: string; }) => r?.Indexability === "Indexable").length;

    const imagesMissingAlt = matchedCsv.filter((r: { [x: string]: any; }) => !r?.["Alt Text"]).length;

    const avgPageAuthority =
      pages.reduce((acc: number, p: any) => acc + p.page_authority, 0) /
      pages.length;

    const totalBacklinks = pages.reduce(
      (acc: number, p: any) => acc + p.backlinks,
      0
    );

    return {
      domain: dom.domain,
      indexablePages,
      imagesMissingAlt,
      avgPageAuthority,
      totalBacklinks,
    };
  });
}
