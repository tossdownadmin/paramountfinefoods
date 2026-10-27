# Read-only Northstar reference audit

Reference project: `/Users/tossdown/Documents/ChatGPT/MetrixMate - Pizza Chain Demo`

Reference archive: `/Users/tossdown/Downloads/metrixmatedemo-main (2).zip`

## Audited patterns

- `components/app.tsx`: top-level navigation, URL-hash routing, global scope state, and demo controls.
- `components/shell/sidebar.tsx`: grouped navigation and responsive shell behavior.
- `components/shell/store-picker.tsx`: date/store control ordering.
- `lib/data.ts`: deterministic date-major generator and planted demo narratives.
- `lib/select.ts`: shared selectors that keep totals coherent between screens.
- `lib/insights.ts`: rule-based findings derived from generated data.
- `lib/local-signals.ts`: deliberately separate synthetic reputation and competitor signals.
- `components/ui/charts.tsx`: responsive chart primitives and ROAS target visualization.
- `components/ui/table.tsx`: sortable/exportable table patterns.
- `components/screens/*`: comparable screen depth and drill-down conventions.

## Reference-only constraints

The Northstar code, names, campaign prefixes, markets, email addresses, and product vocabulary are not source material for Paramount content. They are interaction and architecture references only.
