# Northstar Slice Co Demo

## Purpose

This repository is a standalone pitch and business-development demo for a fictional North American multi-location pizza chain. It recreates the useful dashboard screens and decision logic of the reference MetrixMate product with deterministic dummy data only.

The demo must not contain Pizza Boli branding, client names, client locations, client products, client credentials, production API calls, or copied client records. The reference connector-hub project is for screen and logic reference only.

## Product identity

- Brand: Northstar Slice Co.
- Demo footprint: 42 fictional stores across the United States and Canada
- Data horizon: rolling 180 days, seeded and anchored to the current date
- Runtime model: local deterministic data; no backend required for the first phase
- Roles: Admin and Store Manager role switcher; no real authentication in the demo
- Deployment target: Vercel through GitHub

## Technical conventions

- Next.js App Router with TypeScript and React
- Tailwind CSS and the existing shadcn-style component approach where useful
- Recharts for charts and lightweight SVG/CSS for maps and heatmaps
- Keep brand values in one `lib/brand.ts` module
- Keep generated data in `lib/demo-data/`; screen-specific selectors belong in `lib/demo-data/selectors.ts`
- Keep business calculations pure and testable; do not calculate important KPIs directly inside visual components
- Use stable seeded randomness so screenshots and pitch narratives remain repeatable
- Use URL state for active screen, date range, selected store, role, and relevant filters
- Every store name shown in a list, chart, map, or alert should link to its Store Profile
- Clearly label simulated or roadmap-only features in the UI

## Proposed structure

```text
app/
  page.tsx
  dashboard/
  stores/[storeId]/
components/
  dashboard/
  stores/
  ui/
lib/
  brand.ts
  demo-data/
    generator.ts
    schema.ts
    selectors.ts
    patterns.ts
  metrics/
docs/
  data-generator-spec.md
```

## Build order

1. Confirm the screen inventory and demo narrative.
2. Implement the brand contract and data schema.
3. Implement the deterministic generator and calculation tests.
4. Build the shared shell, navigation, filters, role switcher, and formatting utilities.
5. Build Phase 1 screens in pitch order: Command Center, Store Profile, Attribution & ROAS, Sales & Channels, Insights.
6. Add empty/roadmap states for Phase 2 screens without implying that real client data exists.
7. Run typecheck, lint, build, and a local visual review before GitHub or Vercel work.

## Safety and scope

- Never add real integrations, API keys, customer records, or client exports to this repository.
- Never claim that simulated metrics are real performance.
- Do not deploy or push to GitHub without explicit approval.
- Preserve a clean distinction between observed demo data, calculated metrics, and product concepts.
