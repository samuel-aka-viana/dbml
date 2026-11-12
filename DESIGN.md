---
name: DB Modeling
description: Visual relational database modeling powered by strict DBML across Native Desktop (GPUI), Interactive Web CLI, and VS Code Extension.
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
  table-blue: "#3b82f6"
  table-green: "#22c55e"
  table-violet: "#8b5cf6"
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

DB Modeling (`brenoLucasN/db_modeling`) is a multi-target visual relational database modeling tool powered by strict DBML — running identically as a **Native Desktop App (`crates/app` via GPUI)**, an **Interactive Web CLI (`crates/cli` via Axum + WebSockets)**, and a **VS Code Extension (`vscode-extension` via WebAssembly)**. Its web showcase and design system follow the editorial engineering ledger aesthetic of `pg-regression-radar`: the entire interface is constructed inside a continuous, exposed `1px` architectural blueprint grid on warm technical paper (`#fafafa` in light mode, `#0c0c0e` in dark mode). Every engineering guarantee — 100% pure `dbdiagram.io`-compatible `.dbml` files, deterministic `<file>.dbml.layout.json` sidecars, minimal Rowan CST `TextPatch` splices (`crates/dbml-edit`), and Sugiyama/orthogonal routing (`crates/layout`) — is proven inside structured grid compartments.

Typography and color act as surgical instruments rather than decoration. Section headlines contrast feather-light slate clauses (`300` weight in `#52525b`) with bold carbon focal anchors (`700` weight in `#111113`) inside the same sentence, guiding the reader's eye to the core mechanism immediately. Signal Crimson (`#b91c1c` / `#df2020`) is reserved for `TextPatch` byte-range diffs, AST rewrite comparisons, active selection rings, and structural section markers, while the interactive workbench preserves the 8 canonical table colors (`TABLE_COLORS`) from `crates/dbml-wasm`.

**Key Characteristics:**
- **Exposed 1px Architectural Ledger:** Full-height vertical container boundaries (`max-w-6xl border-x`) intersected by horizontal `1px` rules and asymmetric two-column splits.
- **Mixed-Weight Editorial Headlines:** Single-sentence headlines pairing `font-light` muted slate setup phrases with `font-bold` deep carbon punchlines (`Which **diagram edit** polluted my schema?`, `Watch a schema **patch in place**`, `The same workbench, **for real**`).
- **1:1 Workbench Replica:** Embeds an interactive replica of the shared `db_modeling` workbench (Topbar with `sample.dbml` tab + `Ctrl+K`, Left Schema Explorer with `TABLES` & `RELATIONS`, Collapsible `sample.dbml` Editor `Ctrl+E`, Center Dot-Grid Canvas with the Floating 6-Tool Pill, and Right Inspector `Ctrl+I` with the 8-color `SetTableColor` picker).
- **ASCII & Millimeter-Grid Materiality:** Monospace character-matrix fields (`DBMLROWANCSTDBMLEDIT...`) in the hero and `24px` millimeter-grid backdrops behind the `TextPatch` radar and ER canvas.
- **Surgical Signal Crimson:** High-contrast crimson (`#b91c1c` ink, `#df2020` trace, `#fef2f2` blush fill) used exclusively to mark minimal byte patches, dirty AST rewrite comparisons, and primary resolutions.

## Colors

The palette pairs warm, glare-free technical paper neutrals with a surgical Signal Crimson accent, compiler syntax tokens, and the official 8-color schema group palette from `crates/dbml-wasm`.

### Primary
- **Signal Crimson Ink** (`#b91c1c` light / `#f66d6d` dark): Used for inline `TextPatch` diff labels, resolution callout bars (`→ db-modeling patches only the CST token...`), workspace crate badges, and interactive links (6.4:1 contrast ratio on paper ground).
- **Radar Trace Crimson** (`#df2020` light / `#ef4444` dark): Used for SVG byte-rewrite traces, dashed vertical command markers (`Command::AddColumn`), square ledger indicators (`■ The problem`), and active table selection rings.
- **Signal Blush Wash** (`#fef2f2` light / `#2a0e0e` dark): Used as the full-bleed background fill for resolution bars and added line highlights inside `sample.dbml`, paired with **Signal Hairline** (`#f5bcbc` light / `#5c1e1e` dark).

### Secondary
- **Table Group Blue** (`#3b82f6`), **Table Group Green** (`#22c55e`), & **Table Header Violet** (`#8b5cf6`): Canonical schema colors from `crates/dbml-wasm::TABLE_COLORS` used to tint `TableGroup sales`, `TableGroup catalog`, and `Table users` inside the 1:1 workbench canvas and inspector color picker.
- **Syntax Purple** (`#6d28d9` light / `#c084fc` dark) & **Syntax Emerald** (`#047857` light / `#34d399` dark): Highlight DBML keywords (`Table`, `TableGroup`, `Ref`) and constraints (`[pk]`, `[unique, not null]`).

### Tertiary
- **Syntax Sky** (`#0369a1` light / `#38bdf8` dark): Marks SQL/DBML column types (`int`, `varchar(255)`, `decimal(10,2)`), foreign-key icons, and byte offsets (`342..342`).

### Neutral
- **Editorial Technical Paper** (`#fafafa`): Primary page background in light mode.
- **Crisp Elevated Pane** (`#ffffff`): Surface color for the `TextPatch` inspector window, ER table cards, and floating 6-tool canvas pill.
- **Subtle Ledger Wash** (`#efeff1`) & **Muted Grid Cell Fill** (`#f2f2f4`): Used for pill search inputs, workbench headers, and inactive tabs.
- **Deep Carbon Ink** (`#111113`): Primary text color, solid pill CTA fill, and `dbml-edit` minimal patch trace (17.8:1 contrast against `#fafafa`).
- **Slate Graphite** (`#52525b`): Secondary prose, light-weight display headline clauses, and axis labels (7.2:1 contrast against `#fafafa`).
- **Exposed Structural Hairline** (`#e3e3e7` light / `#242429` dark): Universal `1px` border that constructs the page ledger, workbench panes, and chart grids.
- **Obsidian Ledger Ground** (`#0c0c0e`) & **Elevated Instrument Surface** (`#121215`): Dark mode page and card surfaces.

### Named Rules
**The Signal Rarity Rule.** Signal Crimson (`#b91c1c` / `#df2020`) may occupy at most 10% of any viewport and is reserved strictly for `TextPatch` byte splices, AST rewrite comparisons, active table rings, and resolution callouts.

**The Warm Paper Ground Rule.** Light mode is the canonical default surface (`#fafafa`), evoking printed engineering specifications; never replace the paper ground with cold blue-gray slate or neon gradients.

## Typography

**Display Font:** Geist (with `-apple-system, BlinkMacSystemFont, sans-serif` fallback)
**Body Font:** Geist (with `-apple-system, BlinkMacSystemFont, sans-serif` fallback)
**Label/Mono Font:** Geist Mono (with `JetBrains Mono, monospace` fallback)

**Character:** Geometric neo-grotesk display lettering that pairs feather-light (`300`) setup words against dense, authoritative (`700`–`800`) focal words, supported by tabular monospace for DBML syntax, `TextPatch` byte spans, and CLI commands.

### Hierarchy
- **Display** (`800` weight, `3rem` / `48px`, `1.08` line-height, `-0.03em` tracking): Used once in the first viewport for the lowercase technical brand title (`db-modeling`).
- **Headline** (`300` light paired with `700` bold, `2.25rem` to `3rem` / `36px–48px`, `1.1` line-height, `-0.03em` tracking): Used for section thesis statements (`Which **diagram edit** polluted my schema?`, `Watch a schema **patch in place**`, `The same workbench, **for real**`).
- **Title** (`700` weight, `1rem` / `16px`, `1.35` line-height, `-0.015em` tracking): Used for execution target headings (`Native Desktop App`, `Interactive Web CLI`, `VS Code Extension`).
- **Body** (`400` weight, `0.8125rem` to `1rem` / `13px–16px`, `1.65` line-height, max measure `65ch`): Used for architectural explanations and workflow steps.
- **Label** (`500` weight, `0.6875rem` to `0.75rem` / `11px–12px`, `0.18em`–`0.22em` letter-spacing, uppercase in nav and ledger headers): Used for the top brand bar (`DB-MODELING`), workflow headers (`ROUND-TRIPPING SCHEMAS BY HAND, TODAY`), and workbench section headers (`TABLES`, `RELATIONS`).

### Named Rules
**The Mixed-Weight Contrast Rule.** Every major section headline must split its semantic weight within a single sentence: set the setup clause in `font-light` (`300`) Slate Graphite (`#52525b`) and the decisive noun or verb clause in `font-bold` (`700`) Deep Carbon Ink (`#111113`).

**The Tabular Telemetry Rule.** Every numeric measurement, line number, byte span (`342..342`), patch size (`28 B`), and zoom percentage (`60%`) must be set in `Geist Mono` with `font-variant-numeric: tabular-nums`.

## Layout

The entire application is governed by a continuous `1px` architectural grid container (`max-w-6xl` / `1152px`, centered with `mx-auto`, bounded by `border-x border-border`). Sections stack vertically with zero outer margin gaps; full-width `1px` horizontal hairlines (`border-b border-border`) divide the page into five structural bands:

1. **Sticky Specification Header (`48px` height):** Full-width bottom-bordered bar housing the section index menu, official `mark.svg` two-table icon, tracked uppercase monospace brand (`DB-MODELING`), theme toggle, pill search input (`Ctrl+K`), and GitHub release counter (`v0.1.2`).
2. **Hero Band (`12-column` grid):** A 5-column left proposition stack (`pt-12 pb-16 px-10`) over a subtle `bg-background/90` mask, paired with a 7-column right `TextPatch · crates/dbml-wasm` / `sample.dbml` inspector card, resting over a perimeter ASCII character-matrix field.
3. **Problem Split Band (`12-column` grid, `6/6` split):** Preceded by a full-width `■ The problem` structural bar, splitting the viewport into a left editorial question cell (`border-r`) and a right 4-step manual workflow list (`divide-y`) anchored by a full-bleed Signal Blush resolution bar.
4. **Live Workbench & Patch Radar Band:** A centered mixed-weight header cell followed by a full-width control strip (`+ Inject Command`), a `185px`-tall SVG millimeter-grid byte-patch comparison chart, and a `12-column` 4-pane replica of the `db_modeling` workbench (2-col Schema Explorer Sidebar, 3-col collapsible `sample.dbml` Editor, 5-col interactive Dot-Grid Canvas with Floating 6-Tool Pill, and 2-col Right Inspector).
5. **Multi-Target & Workspace Ledger Bands:** Asymmetric two-column ledgers (`6/6` for the 3 execution targets + ASCII architecture diagram, and `5/7` for the 2×4 Rust & WebAssembly workspace matrix) where cells meet edge-to-edge along `1px` rules (`divide-y`, `sm:border-r`).

## Elevation & Depth

This design system is explicitly **flat and structural by default**. Depth is communicated through exposed `1px` hairline geometry, surface luminance steps (`#fafafa` page ground vs. `#ffffff` elevated panes vs. `#f2f2f4` muted cells), and background textures (ASCII character matrices and `24px` millimeter grids) rather than drop shadows or glassmorphism.

### Named Rules
**The Exposed Hairline Rule.** Divide sections, workbench panes, and collection items with continuous `1px solid` structural borders (`#e3e3e7` light / `#242429` dark) that run edge-to-edge to meet their parent container's border.

**The Zero-Ghost-Card Rule.** Never combine a `1px` border with a wide soft `box-shadow` on cards or containers. Elevation is declared once via `1px` structural borders and tonal fill contrast.

## Shapes

The form language contrasts three deliberate radii, each assigned to a specific functional role:
- **Zero-Radius Structural Cells (`0px`):** All page sections, workbench panes, problem/solution columns, and the 2×4 workspace crates matrix have `0px` corner radius so their `1px` borders interlock as a single architectural blueprint.
- **Precision Instrument Frames (`6px` / `0.375rem` and `4px`):** Used for the `TextPatch` inspector window, the floating 6-tool canvas pill (`V`, `H`, `+`, `Ctrl+L`, `Shift+1`, `{}`), ER table cards, and `+ Inject Command` buttons.
- **Tactile Pill Controls (`9999px`):** Used exclusively for top-level hero CTAs (`Try it in your browser`, `Install (Ubuntu / Debian)`, `How it works`), the navbar `Search` input, and chart command marker tags (`Command::AddColumn · orders`).

## Components

### Buttons
- **Shape:** Primary hero and GitHub action buttons use a full pill silhouette (`border-radius: 9999px`, `height: 36px`, `padding: 8px 20px`). In-frame workbench triggers (`+ Inject Command`) use a crisp instrument rectangle (`border-radius: 6px`, `padding: 6px 12px`).
- **Primary:** Solid Deep Carbon Ink background (`#111113`) with Technical Paper text (`#fafafa`), `12px` Geist Sans (`600` weight).
- **Hover / Focus:** Primary buttons transition to `#27272a`; focus states render a `2px` Signal Crimson ring (`#b91c1c`) with a `1px` offset.
- **Secondary / Multi-Target Install Pill:** Crisp Elevated Pane background (`#ffffff`) with a `1px` structural border (`#e3e3e7`), dividing the OS install action and the multi-target dropdown (`Desktop .deb/.rpm/.dmg/.exe`, `Interactive Web CLI`, `VS Code .vsix`) with an internal `1px` vertical rule.

### Chips
- **Style:** Compact rectangular badges (`border-radius: 2px` to `4px`, `padding: 2px 6px`, `10px` Geist Mono) with Signal Blush background (`#fef2f2`), Signal Crimson text (`#b91c1c`), and a `1px` Signal Hairline border (`#f5bcbc`).
- **State:** Used to classify workspace module roles (`Core Model`, `Rowan CST`, `Minimal Patches`, `Sugiyama & Route`, `Wasm Bridge`).

### Cards / Containers
- **Corner Style:** Structural grid compartments and workbench panes use `0px` corners; standalone inspector frames (`TextPatch · crates/dbml-wasm`), `TableGroup` bounding boxes (`sales`, `catalog`), and ER diagram table cards use `6px`–`8px` corners.
- **Background:** Crisp Elevated Pane (`#ffffff` light / `#121215` dark) over the `#fafafa` / `#0c0c0e` ground.
- **Shadow Strategy:** Flat (`box-shadow: none`), relying on `1px` structural borders and millimeter/ASCII background contrast.
- **Border:** `1px solid #e3e3e7` (`#242429` in dark mode); selected ER table cards switch to a `1px` Radar Trace Crimson border and ring (`#df2020`) with a colored top header bar (`tableColors`).
- **Internal Padding:** `16px 20px` for code inspectors, `24px 32px` for architectural ledger cells, and `6px`–`8px` for compact ER canvas table cards.

### Inputs / Fields
- **Style:** Pill-shaped search field (`border-radius: 9999px`, `height: 32px`, `padding: 0 12px`) with Subtle Ledger Wash background (`#efeff1`), `1px` structural border (`#e3e3e7`), leading magnifying glass icon (`14px`), and trailing `Ctrl+K` keycap hint.
- **Focus:** Background shifts to Crisp Elevated Pane (`#ffffff`) and border darkens to `rgba(17, 17, 19, 0.4)` while opening an anchored `6px`-radius quick-jump specification popover.

### Navigation
- **Style:** Sticky `48px` top bar (`backdrop-filter: blur(4px)`, `background: rgba(250, 250, 250, 0.95)`, `border-bottom: 1px solid #e3e3e7`). Left side pairs a compact index dropdown trigger (`Menu` icon) with the official two-table `mark.svg` icon and uppercase tracked monospace brand link (`DB-MODELING`, `letter-spacing: 0.22em`). Right side houses the theme toggle, pill search bar, and GitHub release link (`☆ v0.1.2`).

### 1:1 Multi-Target Workbench & TextPatch Radar
- **Style:** Signature composite component pairing a `24px` millimeter-grid SVG chart (contrasting a `648 B` full-file AST rewrite spike against `dbml-edit`'s `24–33 B` surgical `TextPatch`) with an interactive 4-pane replica of the `brenoLucasN/db_modeling` workbench: Left Schema Explorer (`TABLES: 5`, `RELATIONS: 5`), Collapsible `sample.dbml` Editor (`Ctrl+E`), Center Canvas with Floating 6-Tool Pill (`V`, `H`, `+`, `Ctrl+L`, `Shift+1`, `{}`), and Right Inspector (`Ctrl+I`) with the interactive 8-color `SetTableColor` palette.

## Do's and Don'ts

### Do:
- **Do** frame all page sections inside the continuous `max-w-6xl border-x border-border` architectural ledger and separate bands with full-width `1px` horizontal rules.
- **Do** use the Mixed-Weight Contrast pattern (`font-light text-muted-foreground` paired with `font-bold text-foreground`) on primary section headlines.
- **Do** represent all three real execution targets (`crates/app` Desktop GPUI, `crates/cli` Axum + WS Server, and `vscode-extension` VSIX) and all eight workspace modules accurately.
- **Do** set all byte ranges, patch sizes, line numbers, and CLI commands in `Geist Mono` with `tabular-nums`.

### Don't:
- **Don't** place floating small-caps kickers or eyebrows above `<h1>` or `<h2>` headings; let the mixed-weight headline carry its own hierarchy, or use a structural full-width ledger bar (`■ The problem`) to frame a split section.
- **Don't** use 3-column rows of rounded icon-plus-heading-plus-text SaaS cards; use exposed `1px` edge-to-edge ledger cells (`divide-y`, `border-r`) instead.
- **Don't** combine `1px` borders with large blurred drop shadows (`shadow-xl`, `shadow-2xl`) or decorative neon glows.
- **Don't** use gradient text on headlines or badges.
