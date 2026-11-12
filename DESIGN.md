---
name: DB Modeling
description: Native 120 FPS visual database modeler in Rust & GPUI with lossless Rowan CST synchronization.
colors:
  signal-crimson: "#b91c1c"
  signal-trace: "#df2020"
  signal-blush: "#fef2f2"
  signal-border: "#f5bcbc"
  paper-ground: "#fafafa"
  elevated-pane: "#ffffff"
  ledger-wash: "#efeff1"
  muted-cell: "#f2f2f4"
  carbon-ink: "#111113"
  slate-graphite: "#52525b"
  structural-hairline: "#e3e3e7"
  obsidian-ground: "#0c0c0e"
  obsidian-pane: "#121215"
  obsidian-hairline: "#242429"
  syntax-purple: "#6d28d9"
  syntax-emerald: "#047857"
  syntax-sky: "#0369a1"
typography:
  display:
    fontFamily: "Geist, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "3rem"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Geist, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "2.75rem"
    fontWeight: 300
    lineHeight: 1.12
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Geist, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "1rem"
    fontWeight: 700
    lineHeight: 1.35
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Geist, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "0em"
  label:
    fontFamily: "Geist Mono, JetBrains Mono, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.18em"
rounded:
  none: "0px"
  sm: "4px"
  md: "6px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "40px"
  2xl: "64px"
components:
  button-primary:
    backgroundColor: "{colors.carbon-ink}"
    textColor: "{colors.paper-ground}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "8px 20px"
    height: "36px"
  button-primary-hover:
    backgroundColor: "#27272a"
    textColor: "{colors.paper-ground}"
  button-outline:
    backgroundColor: "{colors.elevated-pane}"
    textColor: "{colors.carbon-ink}"
    rounded: "{rounded.full}"
    padding: "8px 20px"
    height: "36px"
  button-signal:
    backgroundColor: "{colors.signal-blush}"
    textColor: "{colors.signal-crimson}"
    rounded: "{rounded.md}"
    padding: "6px 12px"
    height: "32px"
  chip-role:
    backgroundColor: "{colors.signal-blush}"
    textColor: "{colors.signal-crimson}"
    rounded: "{rounded.sm}"
    padding: "2px 6px"
  card-inspector:
    backgroundColor: "{colors.elevated-pane}"
    textColor: "{colors.carbon-ink}"
    rounded: "{rounded.md}"
    padding: "16px 20px"
  input-search:
    backgroundColor: "{colors.ledger-wash}"
    textColor: "{colors.carbon-ink}"
    rounded: "{rounded.full}"
    padding: "4px 12px"
    height: "32px"
---

# Design System: DB Modeling

## Overview

**Creative North Star: "The Architectural Telemetry Ledger"**

DB Modeling's visual system is modeled after an editorial engineering ledger and real-time regression radar (`pg-regression-radar`). Rather than floating marketing cards over dark neon gradients, the entire interface is constructed inside a continuous, exposed 1px architectural blueprint grid on warm technical paper (`#fafafa` in light mode, `#0c0c0e` in dark mode). Every claim of native Rust speed, 120 FPS GPUI rendering, and lossless Rowan Concrete Syntax Tree (CST) synchronization is demonstrated inside structured ledger compartments where code, millimeter-grid telemetry charts, and interactive entity-relationship nodes sit side by side.

Typography and color work as surgical instruments rather than decoration. Section headlines contrast light-weight slate phrases (`300` weight in `#52525b`) with bold carbon focal anchors (`700` weight in `#111113`) inside the same sentence, directing the reader's eye to the exact engineering mechanism before they read a paragraph of prose. Signal Crimson (`#b91c1c` / `#df2020`) is reserved strictly for CST byte-span diffs, latency anomaly traces, active selection rings, and structural section markers.

**Key Characteristics:**
- **Exposed 1px Architectural Ledger:** Full-height vertical container boundaries (`max-w-6xl border-x`) intersected by horizontal `1px` rules and asymmetric two-column splits.
- **Mixed-Weight Editorial Headlines:** Single-sentence headlines that pair `font-light` muted slate setup phrases with `font-bold` deep carbon punchlines.
- **Light-First Technical Paper with Obsidian Parity:** Warm paper ground (`#fafafa`) and crisp white panes (`#ffffff`) by default, paired with a high-contrast Obsidian dark mode (`#0c0c0e`).
- **ASCII & Millimeter-Grid Materiality:** Monospace character-matrix fields (`DBMLROWANCST...`) in the hero and `24px` millimeter-grid backdrops behind interactive telemetry and ER canvas views.
- **Surgical Signal Crimson:** High-contrast crimson (`#b91c1c` ink, `#df2020` trace, `#fef2f2` blush fill) used exclusively to mark diffs, latency spikes, and primary resolutions.

## Colors

The palette pairs warm, glare-free technical paper neutrals with a single high-urgency Signal Crimson accent and compiler-grade syntax tokens.

### Primary
- **Signal Crimson Ink** (`#b91c1c` light / `#f66d6d` dark): Used for inline CST diff labels, resolution callout bars (`→ db-modeling patches only the token you touched`), active crate roles, and interactive links (6.4:1 contrast ratio on paper ground).
- **Radar Trace Crimson** (`#df2020` light / `#ef4444` dark): Used for SVG telemetry traces, dashed vertical mutation markers, square ledger indicators (`■ The problem`), and active table selection rings.
- **Signal Blush Wash** (`#fef2f2` light / `#2a0e0e` dark): Used as the full-bleed background fill for resolution bars and added line highlights inside DBML source views, paired with **Signal Hairline** (`#f5bcbc` light / `#5c1e1e` dark).

### Secondary
- **Syntax Purple** (`#6d28d9` light / `#c084fc` dark): Highlights DBML keywords (`Table`, `Ref`, `TableGroup`) and JSON property keys in the Rowan CST inspector.
- **Syntax Emerald** (`#047857` light / `#34d399` dark): Highlights column constraints (`[pk]`, `[unique, not null]`) and string literals.

### Tertiary
- **Syntax Sky** (`#0369a1` light / `#38bdf8` dark): Marks SQL/DBML scalar types (`int`, `varchar(255)`, `timestamp`), foreign-key icons, and numeric telemetry values.

### Neutral
- **Editorial Technical Paper** (`#fafafa`): Primary page background in light mode.
- **Crisp Elevated Pane** (`#ffffff`): Surface color for the floating CST inspector window, table nodes on the canvas, and interactive header bars.
- **Subtle Ledger Wash** (`#efeff1`) & **Muted Grid Cell Fill** (`#f2f2f4`): Used for pill search inputs, inactive code gutters, and table header strips.
- **Deep Carbon Ink** (`#111113`): Primary text color, solid pill CTA fill, and GPUI steady-state telemetry trace (17.8:1 contrast against `#fafafa`).
- **Slate Graphite** (`#52525b`): Secondary prose, light-weight display headline clauses, and axis labels (7.2:1 contrast against `#fafafa`).
- **Exposed Structural Hairline** (`#e3e3e7` light / `#242429` dark): The universal `1px` border that constructs the page ledger, table cells, and chart grids.
- **Obsidian Ledger Ground** (`#0c0c0e`) & **Elevated Instrument Surface** (`#121215`): Dark mode page and card surfaces.

### Named Rules
**The Signal Rarity Rule.** Signal Crimson (`#b91c1c` / `#df2020`) may occupy at most 10% of any viewport and is reserved strictly for mutations, latency comparisons, active table rings, and resolution callouts. Never use crimson for decorative backgrounds or non-semantic badges.

**The Warm Paper Ground Rule.** Light mode is the canonical default surface (`#fafafa`), evoking printed engineering specifications and benchmarks; never replace the paper ground with cold blue-gray slate or neon gradients.

## Typography

**Display Font:** Geist (with `-apple-system, BlinkMacSystemFont, sans-serif` fallback)
**Body Font:** Geist (with `-apple-system, BlinkMacSystemFont, sans-serif` fallback)
**Label/Mono Font:** Geist Mono (with `JetBrains Mono, monospace` fallback)

**Character:** Geometric, high-x-height neo-grotesk display lettering that pairs feather-light (`300`) setup words against dense, authoritative (`700`–`800`) focal words, supported by razor-sharp tabular monospace for DBML code, byte spans, and millisecond telemetry.

### Hierarchy
- **Display** (`800` weight, `3rem` / `48px`, `1.08` line-height, `-0.03em` tracking): Used once in the first viewport for the lowercase technical brand title (`db-modeling`).
- **Headline** (`300` light paired with `700` bold, `2.25rem` to `3rem` / `36px–48px`, `1.1` line-height, `-0.03em` tracking): Used for section thesis statements (`Which **canvas edit** trashed my diff?`, `Watch a schema **sync at 120 FPS**`, `The same engine, **for real**`).
- **Title** (`700` weight, `1rem` / `16px`, `1.35` line-height, `-0.015em` tracking): Used for architectural invariant headings inside ledger rows.
- **Body** (`400` weight, `0.8125rem` to `1rem` / `13px–16px`, `1.65` line-height, max measure `65ch`): Used for technical explanations and workflow steps.
- **Label** (`500` weight, `0.6875rem` to `0.75rem` / `11px–12px`, `0.18em`–`0.22em` letter-spacing, uppercase in nav and ledger headers): Used for the top brand bar (`DB-MODELING`), workflow headers (`ROUND-TRIPPING BY HAND, TODAY`), and telemetry axes.

### Named Rules
**The Mixed-Weight Contrast Rule.** Every major section headline must split its semantic weight within a single sentence: set the setup clause in `font-light` (`300`) Slate Graphite (`#52525b`) and the decisive noun or verb clause in `font-bold` (`700`) Deep Carbon Ink (`#111113`).

**The Tabular Telemetry Rule.** Every numeric measurement, line number, byte span (`412..460`), frame rate (`120 FPS`), and latency figure (`8.21 ms`) must be set in `Geist Mono` with `font-variant-numeric: tabular-nums` so columns and live updates never jitter horizontally.

## Layout

The entire application is governed by a continuous `1px` architectural grid container (`max-w-6xl` / `1152px`, centered with `mx-auto`, bounded by `border-x border-border`). Sections stack vertically with zero outer margin gaps; instead, full-width `1px` horizontal hairlines (`border-b border-border`) divide the page into distinct structural bands:

1. **Sticky Specification Header (`48px` height):** Full-width bottom-bordered bar housing the section index menu, tracked uppercase monospace brand (`DB-MODELING`), theme toggle, pill search input (`⌘K`), and GitHub release counter.
2. **Hero Band (`12-column` grid):** A 5-column left proposition stack (`pt-12 pb-16 px-10`) over a subtle `bg-background/90` mask, paired with a 7-column right inspector card (`RowanCstMutation`), all resting over a perimeter ASCII character-matrix field.
3. **Problem Split Band (`12-column` grid, `6/6` split):** Preceded by a full-width `■ The problem` structural bar, splitting the viewport into a left editorial question cell (`border-r`) and a right 4-step chronological workflow list (`divide-y`) anchored by a full-bleed Signal Blush resolution bar.
4. **Live Synchronization Band:** A centered mixed-weight header cell followed by a full-width control strip, a `210px`-tall SVG millimeter-grid latency radar chart, and a `5/7` two-pane synchronized workspace (DBML source editor on the left, GPUI hardware canvas mockup on the right).
5. **Architecture & Crates Ledger Bands:** Asymmetric two-column ledgers (`6/6` for GPUI hardware telemetry and `5/7` for the 2×3 headless Rust crates matrix) where items meet edge-to-edge along `1px` rules (`divide-y`, `sm:border-r`) rather than floating with outer grid gaps.

## Elevation & Depth

This design system is explicitly **flat and structural by default**. Depth is communicated through exposed `1px` hairline geometry, surface luminance steps (`#fafafa` page ground vs. `#ffffff` elevated panes vs. `#f2f2f4` muted cells), and background textures (ASCII character matrices and `24px` millimeter grids) rather than drop shadows or glassmorphism.

### Named Rules
**The Exposed Hairline Rule.** Divide sections, columns, and collection items with continuous `1px solid` structural borders (`#e3e3e7` light / `#242429` dark) that run edge-to-edge to meet their parent container's border.

**The Zero-Ghost-Card Rule.** Never combine a `1px` border with a wide soft `box-shadow` on cards or containers. Elevation is declared once via `1px` structural borders and tonal fill contrast.

## Shapes

The form language contrasts three deliberate radii, each assigned to a specific functional role:
- **Zero-Radius Structural Cells (`0px`):** All page sections, problem/solution columns, telemetry rows, and the 2×3 Rust crates matrix have `0px` corner radius so their `1px` borders interlock as a single architectural blueprint.
- **Precision Instrument Frames (`6px` / `0.375rem` and `4px`):** Used for floating code inspector windows (`RowanCstMutation`), ER table nodes on the canvas, chart callout boxes, and the `+ Inject canvas edit` action trigger.
- **Tactile Pill Controls (`9999px`):** Used exclusively for top-level hero CTAs (`Try it in your browser`, `Install (Linux)`, `How it works`), the navbar `Search` input, and chart deployment/mutation marker tags (`vendas · drag table`).

## Components

### Buttons
- **Shape:** Primary hero and navigation action buttons use a full pill silhouette (`border-radius: 9999px`, `height: 36px`, `padding: 8px 20px`). In-frame workspace triggers (`+ Inject canvas edit`) use a crisp instrument rectangle (`border-radius: 6px`, `padding: 6px 12px`).
- **Primary:** Solid Deep Carbon Ink background (`#111113`) with Technical Paper text (`#fafafa`), `12px` Geist Sans (`600` weight).
- **Hover / Focus:** Primary buttons transition to `#27272a` (`90%` opacity); focus states render a `2px` Signal Crimson ring (`#b91c1c`) with a `1px` offset.
- **Secondary / Outline Pill:** Crisp Elevated Pane background (`#ffffff`) with a `1px` structural border (`#e3e3e7`), transitioning to Subtle Ledger Wash (`#efeff1`) on hover. Split OS download pills divide the primary install link and platform chevron with an internal `1px` vertical rule.

### Chips
- **Style:** Compact rectangular badges (`border-radius: 2px` to `4px`, `padding: 2px 6px`, `10px` Geist Mono) with Signal Blush background (`#fef2f2`), Signal Crimson text (`#b91c1c`), and a `1px` Signal Hairline border (`#f5bcbc`).
- **State:** Used to classify Rust crate roles (`Core Model`, `Lossless Parser`, `Mutation Engine`) and chart mutation markers.

### Cards / Containers
- **Corner Style:** Structural grid compartments use `0px` corners; standalone inspector frames (`RowanCstMutation`) and ER diagram table boxes use `6px` (`0.375rem`) corners.
- **Background:** Crisp Elevated Pane (`#ffffff` light / `#121215` dark) over the `#fafafa` / `#0c0c0e` ground.
- **Shadow Strategy:** Flat (`box-shadow: none`), relying on `1px` structural borders and millimeter/ASCII background contrast.
- **Border:** `1px solid #e3e3e7` (`#242429` in dark mode); selected ER table nodes switch to a `1px` Radar Trace Crimson border and ring (`#df2020`).
- **Internal Padding:** `16px 20px` for code inspectors, `24px 32px` for architectural ledger cells, and `8px` for compact ER canvas table nodes.

### Inputs / Fields
- **Style:** Pill-shaped search field (`border-radius: 9999px`, `height: 32px`, `padding: 0 12px`) with Subtle Ledger Wash background (`#efeff1`), `1px` structural border (`#e3e3e7`), leading magnifying glass icon (`14px`), and trailing `⌘K` keycap hint.
- **Focus:** Background shifts to Crisp Elevated Pane (`#ffffff`) and border darkens to `rgba(17, 17, 19, 0.4)` while opening an anchored `6px`-radius quick-jump specification popover.

### Navigation
- **Style:** Sticky `48px` top bar (`backdrop-filter: blur(4px)`, `background: rgba(250, 250, 250, 0.95)`, `border-bottom: 1px solid #e3e3e7`). Left side pairs a compact index dropdown trigger (`Menu` icon) with the uppercase tracked monospace brand link (`DB-MODELING`, `letter-spacing: 0.22em`). Right side houses the theme toggle, pill search bar, and GitHub release link (`☆ v0.1.0`).

### Millimeter-Grid Telemetry & CST Inspector
- **Style:** Signature composite component pairing a `24px` millimeter-grid SVG latency chart (contrasting a shaded Signal Crimson WebView AST spike against a flat `8.2 ms` GPUI trace and `< 1 ms` Rowan CST trace) with a synchronized two-pane DBML editor and interactive ER canvas. Clicking `+ Inject canvas edit` or any table node splices a live CST token highlighted in Signal Blush (`#fef2f2`) across both the code pane and the ER node.

## Do's and Don'ts

### Do:
- **Do** frame all page sections inside the continuous `max-w-6xl border-x border-border` architectural ledger and separate bands with full-width `1px` horizontal rules.
- **Do** use the Mixed-Weight Contrast pattern (`font-light text-muted-foreground` paired with `font-bold text-foreground`) on primary section headlines.
- **Do** pair interactive engineering claims with live, inspectable artifacts (Rowan CST JSON/DBML toggle, `+ Inject canvas edit` mutation cycler, and clickable ER table nodes).
- **Do** set all benchmarks, byte spans, line numbers, and frame times in `Geist Mono` with `tabular-nums`.

### Don't:
- **Don't** place floating small-caps kickers or eyebrows above `<h1>` or `<h2>` headings; let the mixed-weight headline carry its own hierarchy, or use a structural full-width ledger bar (`■ The problem`) to frame a split section.
- **Don't** use 3-column rows of rounded icon-plus-heading-plus-text SaaS cards; use exposed `1px` edge-to-edge ledger cells (`divide-y`, `border-r`) instead.
- **Don't** combine `1px` borders with large blurred drop shadows (`shadow-xl`, `shadow-2xl`) or decorative neon glows.
- **Don't** use gradient text on headlines or badges.
