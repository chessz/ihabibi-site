# Prompt: Upgrade H.A.B.I.B.I marketing landing (ihabibi-site)

Use this prompt when rewriting or implementing `src/app/page.tsx` (and related metadata in `layout.tsx`, `Header.tsx`, `Footer.tsx`) for **ihabibi-site** — the marketing site for **H.A.B.I.B.I** (Household OS). The live product is at **https://app.ihabibi.uk** and is built from the **MyJarvis** monorepo. Marketing must be truthful: only claim what ships today; label roadmap items clearly.

---

## Your role

You are a UK-focused conversion copywriter and product marketer who understands household finance psychology, energy/utility switching behaviour, and SaaS landing-page structure. You write in clear British English (spelling: organise, metre where appropriate, £). Tone: calm, competent, parent-friendly — not hypey fintech bro, not corporate bank.

**Primary job:** Rewrite the landing page so a busy UK household immediately feels (1) the pain of invisible spend, (2) the relief of one dashboard, (3) that **savings dwarf subscription cost**, and (4) that trying H.A.B.I.B.I is a **no-brainer** — especially because of **public utility benchmarks** today and **community comparisons** on the roadmap.

---

## Product truth (MyJarvis / app.ihabibi.uk — do not invent features)

### What exists today (safe to market)

| Area | What it does |
|------|----------------|
| **Household finance** | Expected monthly spend from user-entered bills, utilities, housing — not open banking. Trends, fixed vs variable, category split, “due soon”, 30-day change on recurring bills. |
| **Bills & subscriptions** | Broadband, streaming, mobile, insurance, etc. Monthly equivalents, renewal dates. |
| **Utilities & energy** | Per-property electricity, gas, water, council tax, ground rent, service charge. Tariff end dates, unit/standing charges, estimates. **Savings signals** when rates exceed configured benchmarks. |
| **Electricity insight (live)** | **Public Octopus tariff benchmark** on utilities page — “public tariff benchmark, not whole-of-market.” Honest framing required. |
| **Vehicles** | UK reg → DVLA lookup (make, model, tax, MOT). MOT, insurance, tax reminders. |
| **Reminders** | Overdue / today / upcoming; snooze; Google Calendar sync. |
| **Property intelligence** | Postcode → council, local amenities, sold prices, flood context, schools (~3 mi), police.uk safety, bin schedule prediction + reminders, bus/rail departures (+ optional Tavily transport insight cards). |
| **Secure notes** | PIN-protected notes (paid tier in product). |
| **Billing (live in app)** | **Free** £0 — 1 property. **Starter** £4.99/mo or £49/yr — 3 properties. **Pro** £9.99/mo or £99/yr — 10 properties (most popular). **Premium** £19.99/mo or £199/yr — unlimited. Stripe checkout. Property limit is the main enforced gate today. |

### Roadmap / honest “coming soon” (may tease on landing, never as shipped)

- Gas/water/council/broadband utility insight placeholders in product.
- “AI optimisation insights” on Pro plan (marketing label; light enforcement in app).
- **Community / anonymised household cost comparison** — currently “Planned” on marketing site; **not live**. Frame as vision: “see what similar homes pay” with privacy-first, opt-in, aggregated benchmarks — not neighbour stalking.
- Mobile push, AI reminder calls — design/development.

### What NOT to claim

- No open banking / automatic bank import.
- No whole-of-market energy switching or guaranteed savings amounts per user.
- No live peer-to-peer “your neighbour pays X” unless that feature ships.
- Do not say MyJarvis on the public site unless explaining internal codename in FAQ footnote.

---

## Current landing gaps (ihabibi-site)

Fix or improve these while rewriting:

1. **Hero** — strong on “monthly cost” but weak on **energy benchmark + avoidance of penalties**; mock UI says “screenshot coming soon” — replace with copy-led “insight card” mock showing **“Your electricity unit rate vs public benchmark”** and **“£X due in 14 days”**.
2. **Positioning drift** — hero = finance; footer/metadata = “command centre / deadlines”. **Pick one lead wedge:** *“Stop overpaying and missing household deadlines — one UK dashboard.”* Finance and compliance are two blades of one sword.
3. **Utilities section undersold** — `WhatYouCanTrack` mentions “track suppliers” but not **benchmark comparison** or **savings signals** — this is the subscription ROI story.
4. **Stats unsourced** — £100s insurance, ~£40/mo subscriptions, £1,000+ penalties need softening (“typical UK households…” / “industry research suggests…”) or footnotes.
5. **Pricing mismatch** — site shows Core / Plus £5–7 / Estate £10–13; product has Free / Starter £4.99 / Pro £9.99 / Premium £19.99. **Align names and prices** or label marketing tiers as “from £X” mapped to Starter/Pro.
6. **CTA** — waitlist only; app has **login + free tier**. Add **“Start free” → app.ihabibi.uk/register** alongside waitlist for launch-ready users.
7. **Broken anchor** — `#features` vs `#what-it-tracks`.
8. **No ROI block** — missing explicit “subscription pays for itself” maths section.

---

## Psychology framework (apply throughout)

Use these principles explicitly in section design and microcopy:

| Principle | Application on this page |
|-----------|---------------------------|
| **Loss aversion** | Lead with money *already leaving* (silent renewals, above-benchmark unit rates, MOT fines) before gains. |
| **Endowment / IKEA** | “Add your home once” — user builds *their* dashboard; switching away feels like losing their household map. |
| **Zeigarnik / open loops** | Show incomplete picture: “You track 8 bills — what about council tax and standing charges?” |
| **Social proof (future-safe)** | Today: “Built for UK households”, trust badges (UK, GDPR). Tomorrow: waitlist count, anonymised community benchmarks — **do not fake user counts**. |
| **Anchoring** | Anchor on **£150+/month** invisible leak (subscriptions + energy creep + one missed renewal), then reveal **£4.99–9.99/mo** plan. |
| **Mental accounting** | One “household operating cost” number — bills + utilities + housing + vehicle run-cost — not six mental buckets. |
| **Status quo bias** | “Spreadsheets and calendar alerts already fail you” — switching cost is low (free tier, no card). |
| **Regret salience** | MOT fine, council tax penalty, auto-renewed insurance — concrete, UK-specific. |
| **Authority / public data** | OFGEM-adjacent framing: **public tariff benchmarks** (Octopus reference today) = objective yardstick, not sales pitch. |
| **Commitment ladder** | Free → see savings signal → upgrade for more properties / deeper comparison / community benchmarks. |

---

## Required new / upgraded sections

Implement or rewrite in this order (single long page is fine):

### 1. Hero (rewrite)

**Headline direction (pick one, test variants):**
- “See what your home costs — and what you’re overpaying.”
- “Your household’s running costs, deadlines, and energy benchmarks — one place.”

**Subhead must include:** monthly spend clarity + renewal deadlines + **utility rate checks against public benchmarks**.

**Primary CTA:** `Start free` → `https://app.ihabibi.uk/register`  
**Secondary CTA:** `See how it saves` → `#roi` or `#energy-benchmarks`  
**Tertiary:** `Join waitlist` for updates only if you keep it.

**Hero visual:** Side-by-side mock:
- Left: Total household £/month, due soon count.
- Right: **Electricity insight card** — “Your rate: 28.5p/kWh · Public benchmark: 24.1p/kWh · Review before contract ends 12 Aug” with disclaimer footnote.

### 2. “The leak you don’t see” (enhance WhyItMatters)

Keep three pain cards but add a fourth or subline:

- **Energy on the wrong tariff** — “Many households stay on default rates months after a better deal existed. A simple unit-rate check against a **public benchmark** can flag hundreds a year.” (No guaranteed £; use ranges.)

Bridge sentence: *“H.A.B.I.B.I doesn’t guess your bank balance — it organises what you already pay and compares what matters.”*

### 3. NEW: “Subscription pays for itself” (`#roi`)

A dedicated section with **simple, honest arithmetic** (illustrative, labelled “example”):

```
Typical avoidable household leak (illustrative):
  Forgotten subscriptions        ~£25–40/mo
  One insurance auto-renewal     ~£15–25/mo equivalent
  Electricity above benchmark    ~£10–30/mo
  One avoided MOT/council fine   £100+ (annualised)
─────────────────────────────────────────────
  Realistic annual upside        £500–1,500+

H.A.B.I.B.I Starter              £4.99/mo  (£60/yr)
H.A.B.I.B.I Pro (most households) £9.99/mo (£120/yr)
```

Copy line: **“One found subscription or one energy review can cover a year of Pro. Everything else is upside.”**

Use loss-aversion framing: *“You’re already paying for disorganisation. This is the cheaper option.”*

### 4. NEW: “Public benchmarks today. Community insight tomorrow.” (`#energy-benchmarks`)

**Two columns:**

**Today (live):**
- Enter your electricity tariff → compare to **public Octopus benchmark** (single-supplier reference, not whole-of-market).
- Configurable benchmarks flag high standing charges and unit rates for gas/electricity.
- Contract end dates surfaced so you act *before* rollover.

**Tomorrow (roadmap — badge “Planned”):**
- **Anonymised community comparisons** — “homes like yours in your postcode band” for utilities and recurring bills.
- Privacy-first: opt-in aggregates only, no identifiable neighbours.
- Positions subscription as **getting smarter over time** (endowment + future social proof).

**Mandatory disclaimer (small but visible):**  
*“Benchmarks are indicative, not financial advice. Savings depend on your usage, region, and switching choices.”*

### 5. Upgrade “How you save”

Add a fifth card:

- **Title:** Check your energy against public benchmarks  
- **Body:** See when your unit rate or standing charge sits above a reference tariff. Pair with renewal reminders so you review before the price rolls over.

Reframe section title from “Visibility is the first step” to **“Clarity pays for itself”**.

### 6. Upgrade “What you can track” — utilities card

Replace generic utilities copy with:

> **Utilities & energy** — Log suppliers, tariffs, and contract ends. Get **savings signals** when your rates sit above benchmarks, plus a live **public electricity tariff benchmark**. Gas, water, and council insights expanding.

### 7. Upgrade pricing (`#pricing`)

Align to product catalog:

| Tier | Price | Hook |
|------|-------|------|
| Free | £0 | One home, bills, basic utility comparison, vehicles & reminders |
| Starter | £4.99/mo · £49/yr | Up to 3 homes, advanced utility comparison, secure notes |
| Pro | £9.99/mo · £99/yr · **Most popular** | Up to 10 homes, finance charts, optimisation insights |
| Premium | £19.99/mo · £199/yr | Unlimited properties |

**No-brainer line under grid:**  
*“Less than two coffees a month to see every renewal, every subscription, and whether your electricity still looks fair.”*

Principles block: keep “no per-vehicle fees”, add **“annual billing saves ~17%”** where true.

### 8. Upgrade FAQ (add 3 questions)

- **How do utility comparisons work?** — Public benchmark today; community aggregates planned; not whole-of-market; user enters tariff data.
- **Is £9.99/month worth it?** — Point to ROI section; one switch or cancellation example.
- **Do you connect to my bank?** — No; you control inputs; privacy advantage.

### 9. Final CTA (Waitlist + Start free)

Dual path:
- **Start free — no card** → register URL  
- **Join waitlist** — product updates, community benchmarks launch  

Trust line: UK-built, GDPR-minded, JWT auth, data you enter.

---

## Copy constraints

- **Reading level:** Year 9–10; short sentences; active voice.
- **Avoid:** “Revolutionary”, “AI-powered magic”, guaranteed savings, “best tariff on the market”.
- **Prefer:** “see”, “spot”, “before it renews”, “one dashboard”, “UK households”, “public benchmark”, “indicative”.
- **Persona order:** Parents & homeowners first, then landlords (Pro/Premium), then renters / multi-car.
- **Emotional arc:** Anxiety (leaks) → Control (dashboard) → Relief (one number) → Rational close (ROI) → Low-friction action (free start).

---

## SEO / metadata (layout.tsx)

- **Title:** H.A.B.I.B.I — Household costs, renewals & energy benchmarks  
- **Description:** One UK dashboard for monthly household spend, MOT and bill reminders, and electricity tariff checks against public benchmarks. Free to start.  
- **OG:** Align with hero wedge; add OG image when available.

---

## Deliverables when executing this prompt

1. Updated section copy (all sections above) as implementable TSX strings or full `page.tsx` rewrite.
2. New section components: `RoiSection`, `EnergyBenchmarkSection` (or merged).
3. Fixed nav anchors; dual CTAs to app + waitlist.
4. Pricing table aligned to Stripe plans in MyJarvis `billing-plans.ts`.
5. Footnotes for stats and benchmark disclaimers.
6. Optional: 2–3 hero headline A/B variants in comments for later testing.

---

## Success criteria

A first-time visitor should answer within 10 seconds:

1. **What is it?** — UK household dashboard for money + deadlines + energy checks.  
2. **Why me?** — I’m probably overpaying and I forget renewals.  
3. **Why pay?** — Illustrative savings >> £5–10/mo; free tier proves value.  
4. **Why trust?** — Public benchmarks + UK focus + no bank scraping.  
5. **Why now?** — Start free; community comparisons coming; early access grandfathering.

If any sentence would embarrass you in front of a regulator or a switched-on UK consumer, soften or qualify it.

---

## Reference files (for implementer)

| Repo | Path |
|------|------|
| ihabibi-site | `src/app/page.tsx` — current landing |
| ihabibi-site | `src/app/layout.tsx`, `src/components/Header.tsx` |
| myjarvis | `backend/src/modules/billing/billing-plans.ts` — canonical pricing |
| myjarvis | `frontend/src/components/utility-insights/UtilityInsightsRail.tsx` — benchmark disclaimer copy |
| myjarvis | `backend/src/modules/property-intelligence/property-utilities.service.ts` — savings signals |
| myjarvis | `frontend/src/app/pricing/page.tsx` — in-app pricing tone |

---

*End of prompt. Paste into Cursor/Claude with: “Follow prompts/landing-page-psychology-upgrade.md and implement the landing page changes in src/app/page.tsx.”*
