# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Backend engineers, database architects, systems programmers, and full-stack teams who design, evolve, and review relational schemas in DBML alongside Git-tracked application repositories.

## Product Purpose

DB Modeling is a native, GPU-accelerated visual database modeler built in Rust 2024 on top of GPUI (Zed's GPU UI framework). It synchronizes a visual entity-relationship canvas and a textual `.dbml` document in real time at 120 FPS, keeping all data 100% offline on the developer's machine.

## Positioning

Unlike browser-based or Electron-wrapped schema diagrammers that reserialize files and strip formatting, DB Modeling treats the visual canvas and DBML source as two synchronized projections of a single lossless Rowan Concrete Syntax Tree (`crates/dbml-syntax` and `crates/dbml-edit`), emitting surgical text patches while storing canvas coordinates in a non-invasive `<schema>.dbml.layout.json` sidecar.

## Operating Context

Used locally on Linux (Wayland/X11 via Vulkan), Windows 11 (DirectX 12), and macOS alongside code editors and Git workflows. Developers open `.dbml` files directly from their repo, navigate via keyboard (`Ctrl+K` Command Palette) or hardware-accelerated pan/zoom canvas, and commit clean diffs without cloud lock-in.

## Capabilities and Constraints

- **Bi-directional Lossless Sync**: Moving tables or editing relationships on the canvas applies minimal CST patches via `crates/dbml-edit`, preserving 100% of comments and whitespace.
- **Direct GPU Rendering**: Built on GPUI with ~8.2 ms frame times (120 Hz), ~48.2 MB RAM working set on a 50-table schema, <140 ms cold startup, and 0 ms GC pauses.
- **Transparent Sidecar Layout**: Visual coordinates and group colors persist in `<schema>.dbml.layout.json` so `.dbml` files remain strictly standard.
- **Headless Modular Workspace**: Six isolated Rust crates (`crates/schema`, `crates/dbml-syntax`, `crates/dbml-analysis`, `crates/dbml-edit`, `crates/layout`, `crates/export`).
- **Open Source**: MIT-licensed repository (`github.com/brenoLucasN/db_modeling`) created by Breno Lucas & Samuel Viana, with OS-aware binary releases (`.AppImage`, `.deb`, `.msi`, `.dmg`).

## Brand Commitments

- **Visual Reference**: Rebranded after the editorial technical-ledger aesthetic of `pg-regression-radar` — light-first warm paper ground (`#fafafa`) with full dark-mode parity (`#0c0c0e`), exposed `1px` architectural grid hairlines, mixed-weight display typography (light muted slate paired with bold deep ink in the same headline), ASCII/DBML character-matrix hero texture, and Signal Crimson (`#dc2626`) surgical highlights.
- **No Cloud / No Bloat**: Never imply SaaS accounts, cloud telemetry, or Electron/WebView wrappers.

## Evidence on Hand

- Real benchmark telemetry on a 50-table relational model (48.2 MB RAM vs ~650 MB in Electron; <140 ms startup vs ~2.4 s WebView init; 120 FPS / ~8.2 ms frame time; 0 ms GC pauses; <1.4 ms Rowan CST parser overhead).
- Complete 5-table e-commerce schema (`users`, `products`, `orders`, `order_items`, `reviews` across `vendas` and `catalogo` TableGroups) demonstrating bidirectional DBML + visual ER canvas + CST patch inspection.
- Six documented workspace crates and live GitHub release detection (`brenoLucasN/db_modeling`).

## Product Principles

1. **Proof in the First Viewport**: Show the real DBML CST and synchronized schema immediately rather than abstract marketing illustrations.
2. **Surgical Precision Over Decoration**: Use structural 1px grid hairlines, tabular monospace telemetry, and Signal Crimson focal points only where an engineer's eye should lock.
3. **Zero-Destruction Guarantees**: Every visual interaction must prove that source comments, formatting, and Git diffs stay intact.
4. **Native Speed as Felt Structure**: The web showcase should reflect the crispness, keyboard-first ergonomics, and low-latency clarity of the native GPUI app.
