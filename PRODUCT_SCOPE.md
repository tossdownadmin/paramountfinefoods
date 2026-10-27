# Paramount Fine Foods MetrixMate Pitch Dashboard

## Status

Scope and evidence phase. Application code has not started.

## Objective

Build a separate, production-ready pitch dashboard for Paramount Fine Foods that demonstrates a coherent, deterministic marketing-and-operations analytics experience in CAD. The dashboard will use the Northstar project only as a read-only reference for navigation depth, interaction patterns, chart treatment, and aggregation architecture.

## Hard boundaries

- New project root: `/Users/tossdown/Documents/ChatGPT/Paramount Demo Dashboard`.
- Northstar reference remains read-only and must not be edited, committed to, pushed, or deployed.
- No real Paramount systems, credentials, account IDs, customer data, review text, or live integrations.
- Every business metric is deterministic synthetic demo data.
- All public-facing factual names used in the UI must be traceable to `SOURCE_MANIFEST.md`.
- The UI must visibly state: `Demo — simulated data, not connected to Paramount systems`.
- No GitHub push, Vercel deployment, or external publication until a destination and explicit authorization are provided.

## Reference audit summary

The Northstar reference is a Next.js App Router project using TypeScript, Recharts, Lucide, and a plain CSS design system. Its key reusable patterns are:

- URL-hash screen routing with a shared application shell.
- Date-first, store-second scope controls.
- Central deterministic data generation and selector-based aggregation.
- Shared chart, table, metric-card, and ROAS-ruler primitives.
- Screens grouped into Performance, Decisions, Channels, and Settings.
- Client-only rendering because generated demo dates are anchored to the viewer date.

The Paramount build will preserve these patterns while replacing all Northstar identity, names, copy, products, markets, campaign prefixes, and synthetic data stories.

## Screen inventory

### Performance

- Dashboard
- Sales Comparison
- Source Comparison
- POS Analysis: dashboard, menu, customers, store comparison, first-party vs marketplace

### Decisions

- Store Insights
- Local Market & Reputation
- Fleet Strategy

### Channels

- Meta Ads Analytics
- Google Ads Analytics
- TikTok Ads Analytics
- Web Analytics (GA4): overview, source/medium, pages, funnel

### Settings

- Connectors

No Report Builder, Workspace pages, or admin/store-manager role switch.

## Data model commitments

- At least 400 days of daily history with deterministic seed and stable date handling.
- One canonical synthetic transaction model used by POS, dashboard, comparison, and channel screens.
- Store totals reconcile across every screen.
- Paid-attributed orders are a subset of POS orders.
- Paid-attributed revenue never exceeds eligible POS revenue.
- Store ROAS uses only eligible Paramount store campaigns with a new DEMO-only Paramount store token.
- Brand, awareness, fleet, and legacy campaigns remain visible where useful but are excluded from store ROAS.
- Meta and Google attribution is explainable through modeled source/medium and order matching.
- Canada-only V1 uses CAD and one applicable Canadian local timezone.
- Local Market & Reputation uses synthetic profile activity, sentiment, social signals, and fictional nearby competitors; it never claims paid causality.
- Connector catalog distinguishes modeled demo coverage from catalog-only entries. No catalog item is labelled connected without an authorized implementation.

## Deliberate demo stories

The generator will plant and expose evidence for:

- Several underperforming stores.
- Several underfunded winners.
- A delivery-channel decline.
- A successful campaign test.
- A menu-item mix shift.

Insights and budget projections must derive from the same generated rows and must label projections as assumptions.

## Verification gates before handoff

1. Inspect every screen at desktop and mobile widths.
2. Test date changes, store changes, drill-downs, sortable tables, CSV export, charts, and ROAS target adjustment.
3. Run TypeScript checks.
4. Run the production build.
5. Review the final diff and confirm no Northstar identity or real-client data leaked into the new project.
6. Provide a concise handoff covering sources, assumptions, screens, attribution rules, test/build results, and gaps.
