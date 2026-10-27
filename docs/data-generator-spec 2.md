# Northstar Slice Co Demo Data Generator

## Goal

Generate a believable but entirely fictional 180-day operating history for a 42-store North American pizza chain. The generator exists to support a reliable pitch narrative: every screen has enough connected data to explain the product, and planted patterns make the Insights screen useful every time.

## Determinism

Use a stable seed derived from a fixed demo seed plus the calendar date. The generator may roll the date window forward, but the same seed and date must produce the same records. Avoid `Math.random()` in selectors or components.

The default window is today minus 179 days through today. All dates should be generated in the configured business timezone and serialized as ISO dates.

## Brand and entities

- Brand: Northstar Slice Co.
- Regions: Great Lakes, Northeast, Prairie, Pacific Northwest, and Ontario
- Stores: 42 fictional stores with unique names, addresses, coordinates, timezone, opening date, and region
- Store naming style: fictional neighborhood or district names; do not use Pizza Boli names or recognizable client locations
- Menu categories: pizzas, wings, sides, desserts, and beverages
- Products: fictional names such as Northern Lights, Ember Pepperoni, Maple Heat Wings, and Lakeside Lemonade; final names should be reviewed for consistency before implementation
- Channels: in-store, web, mobile app, and third-party delivery
- Paid media channels: Google, Meta, and TikTok

## Core records

The generator should produce typed records for:

- `Store`: identity, region, coordinates, capacity tier, opening date
- `DailyStoreMetrics`: date, store, net sales, orders, average order value, gross margin estimate, channel mix
- `ChannelMetric`: date, store, channel, sessions or visits, orders, revenue, refunds
- `AdMetric`: date, store, platform, campaign, spend, impressions, clicks, sessions, attributed orders, attributed revenue
- `MenuMetric`: date, store, product, units, revenue, food cost estimate, attach count
- `CustomerMetric`: date, store, new customers, returning customers, order frequency, retention cohort summary
- `Insight`: stable finding id, severity, store or fleet scope, supporting metrics, recommended action, availability label

## Distributions and relationships

- Store size determines baseline sales, order volume, staffing capacity, and reasonable spend ceiling.
- Weekday patterns should differ from weekends; Friday and Saturday should be strongest for most stores.
- Lunch and dinner should dominate daypart performance, with store-specific variation.
- Web and app channels should have higher repeat behavior; third-party delivery should have higher fees and lower margin.
- Paid media metrics must reconcile: spend, impressions, clicks, sessions, orders, revenue, and ROAS should be mathematically related within realistic noise.
- Store-level totals must roll up to fleet totals without hidden discrepancies.
- All screen selectors must use the same generated source records so the Command Center, Store Profile, Attribution, Sales, and Insights screens tell one consistent story.

## Planted demo patterns

Plant patterns deliberately so the pitch has clear examples:

1. One strong store with ROAS above the 6x target tier.
2. One underperforming store with delivery orders down week over week.
3. One store with strong app growth but weak in-store traffic.
4. One campaign with high spend and low ROAS.
5. One campaign with low spend and unusually strong ROAS.
6. One product with high volume and low margin.
7. One product with low volume and strong margin or attach rate.
8. A regional weekday/weekend pattern visible in the heatmap.
9. A seasonal lift around a fictional local event or holiday period.

Patterns must be deterministic, documented, and visible in the supporting data. Insights should be derived from thresholds and comparisons, not hardcoded prose alone.

## Screen data contracts

### Command Center

Needs fleet KPIs, period comparison, ROAS versus the 6x target tier, store coordinates and ROAS for the map, and a prioritized alerts feed.

### Store Profile

Needs daily sales trend, channel mix, paid media metrics, daypart by weekday matrix, top products, and store-level insights.

### Attribution and ROAS

Needs a channel funnel of spend to sessions to orders to revenue for Google, Meta, and TikTok; blended and channel ROAS; store leaderboard; and a visual TD-token campaign mapping explanation using fictional token values.

### Sales and Channels

Needs period comparison, channel mix for in-store, web, app, and third-party delivery, and a Net Sales / Order Count toggle.

### Insights

Needs prioritized findings with evidence, recommended “Do this” actions, and a budget reallocation simulator. The simulator may be marked “Demo simulation” and must explain that projected lift is modelled, not guaranteed.

## Roadmap states

Menu Intelligence, Customers, Creative Performance, and Fleet Strategy may be introduced after Phase 1. Customer cohorts and budget reallocation must be labelled as simulated, available on request, or roadmap wherever the UI could otherwise imply production availability.

## Validation requirements

- Same seed produces the same output.
- Every store has 180 days of records.
- Rollups reconcile across store, channel, and fleet views.
- No metric is negative unless explicitly allowed, such as a signed change percentage.
- ROAS, CPA, CTR, CPC, AOV, and attach rate use shared calculation helpers.
- Generated names are fictional and contain no client-identifying values.
