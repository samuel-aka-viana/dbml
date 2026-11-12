# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Backend engineers, database architects, and full-stack developers who model, review, and version relational database schemas using DBML (Database Markup Language) across desktop, terminal/browser, and VS Code workflows.

## Product Purpose

DB Modeling (`github.com/brenoLucasN/db_modeling`, `v0.1.2`) is a visual relational database modeling workbench powered by DBML and a shared Rust 2024 core. It delivers a 1:1 identical experience across a **Native Desktop App (`crates/app` via GPUI)**, an **Interactive Web CLI (`crates/cli` via Axum + WebSockets)**, and a **VS Code Extension (`vscode-extension` Custom Editor VSIX)**, compiled to both native machine code and WebAssembly (`crates/dbml-wasm`).

## Positioning

1. **Strict DBML as the Single Source of Truth**: `.dbml` files remain 100% pure and compatible with `dbdiagram.io`, without polluting schemas with proprietary comment metadata. Visual positions and table colors are persisted in a deterministic, sorted-key sidecar (`<file>.dbml.layout.json`) built for clean Git diffs.
2. **Lossless Bidirectional Editing**: Every visual canvas operation (`AddTable`, `AddColumn`, `AddRef`, `GroupTables`, `SetTableColor`, `RenameColumn`, `SetColumnFlag`) is processed by `crates/dbml-edit` over a lossless Rowan Concrete Syntax Tree (`crates/dbml-syntax`), emitting minimal `TextPatch` byte-range replacements that preserve 100% of comments and formatting.
3. **1:1 Multi-Target Architecture**: One Rust core (`schema`, `dbml-syntax`, `dbml-analysis`, `dbml-edit`, `layout`) drives both the native `gpui-kit` desktop app and the `dbml-wasm` + `@dbmodeling/canvas-web` engine shared by the CLI server and VS Code extension.

## Operating Context

Developers run the native desktop app (`cargo run -p app --release -- schema.dbml` or native `.deb`, `.rpm`, `.dmg`, `.exe`/`.msi` installers), launch the local live-reload WebSocket server from the terminal (`dbml schema.dbml --port 3000 --theme dark`), or open `*.dbml` files directly inside VS Code via the `dbmodeling.editor` Custom Editor.

## Capabilities and Constraints

- **Workbench UI Parity**: Shared Topbar (tabs + `Ctrl+K` Command Palette), Left Sidebar (`Ctrl+B` with Project Files `Ctrl+Shift+E`, Schema Explorer `Ctrl+Shift+D`, Problems `Ctrl+Shift+M`, and DBML Editor `Ctrl+E`), Center Interactive Canvas with Floating 6-Tool Pill (`V` Select, `H` Hand, `T` New Table, `Ctrl+L` Auto-Layout, `Shift+1` Fit View, `Ctrl+E` Editor), and Right Inspector (`Ctrl+I` with 8-color table palette and `Ctrl+/` Keyboard Shortcuts).
- **Deterministic Sugiyama Layout & Orthogonal Routing (`crates/layout`)**: Hierarchical layered layout (`layout::layered` with 4-pass barycenter crossing reduction), `TableGroup` cluster packing (`layout::clustered`), and obstacle-avoiding orthogonal relation routing (`layout::route`) with `8px` rounded SVG corners (`M ... L ... Q ...`) and cardinality badges (`1` and `N`).
- **High-Resolution Export**: Export schemas to **PNG (2x)** and **SVG** with optional title, color legend (`Ctrl+Shift+L`), and light/dark theme support (`Ctrl+T`).
- **Synchronized Workspace Build**: Managed via `./scripts/sync-build.sh --release` across all Rust crates, `wasm-pack`, `@dbmodeling/canvas-web`, and `vscode-extension`.

## Brand Commitments

- **Visual Reference**: Rebranded in the **Architectural Telemetry Ledger** aesthetic inspired by `pg-regression-radar` — warm technical paper ground (`#fafafa`) with dark mode parity (`#0c0c0e`), exposed `1px` structural grid hairlines (`#e3e3e7` / `#242429`), mixed-weight display headlines (`font-light` muted slate paired with `font-bold` carbon ink), ASCII character-matrix hero texture, and Signal Crimson (`#b91c1c` / `#df2020`) surgical highlights.
- **Official Table Color Palette**: Preserves the 8 canonical table/group colors from `crates/dbml-wasm` (`#3b82f6` Blue, `#06b6d4` Cyan, `#22c55e` Green, `#84cc16` Lime, `#f59e0b` Amber, `#f97316` Orange, `#ec4899` Pink, `#8b5cf6` Violet) inside the interactive canvas showcase.

## Evidence on Hand

- Real workspace crates in `brenoLucasN/db_modeling`: `crates/schema`, `crates/dbml-syntax` (`logos` 0.16.1 + `rowan` 0.18.0-alpha.2), `crates/dbml-analysis`, `crates/dbml-edit`, `crates/layout`, `crates/app` (`gpui-kit` 0.8.0), `crates/dbml-wasm`, `crates/cli` (`axum` 0.8 + `notify` 8), `packages/canvas-web`, and `vscode-extension`.
- Official e-commerce schema (`crates/app/assets/sample.dbml`) with `users` (`[headercolor: #8b5cf6]`), `products`, `orders`, `order_items`, `reviews`, `TableGroup sales [color: #3b82f6]`, and `TableGroup catalog [color: #22c55e]`.
- Real `TextPatch` and `SceneGeometry` serialization structures from `crates/dbml-wasm/src/types.rs`.

## Product Principles

1. **Pure DBML, Clean Git Diffs**: Never pollute `.dbml` files with layout comments; keep layout state in deterministic `<file>.dbml.layout.json` sidecars and emit minimal byte-range patches.
2. **One Rust Core, Every Environment**: Whether in the native GPUI window, local CLI browser tab, or VS Code tab, the exact same Rust parser, analyzer, layout engine, and patcher run underneath.
3. **Proof in the First Viewport**: Expose the real `TextPatch` payload, `sample.dbml` source, and interactive 1:1 workbench immediately.
