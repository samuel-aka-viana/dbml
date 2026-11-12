import { useState } from "react";
import { Key, Link2, Maximize2, Minus, Plus, RotateCcw } from "lucide-react";

interface MutationScenario {
  id: string;
  tag: string;
  table: "orders" | "users" | "reviews" | "products" | "order_items";
  byteSpan: string;
  parseMs: string;
  frameMs: string;
  dbmlAddedLine: string;
  columnName: string;
  columnType: string;
  summary: string;
}

const MUTATION_SCENARIOS: MutationScenario[] = [
  {
    id: "fk-cascade",
    tag: "dbml-edit · patch #1",
    table: "orders",
    byteSpan: "412..460",
    parseMs: "0.84 ms",
    frameMs: "8.21 ms",
    dbmlAddedLine: "  discount_bps int [default: 0, note: 'promo']",
    columnName: "discount_bps",
    columnType: "int [0]",
    summary: "orders +discount_bps",
  },
  {
    id: "users-verified",
    tag: "dbml-edit · patch #2",
    table: "users",
    byteSpan: "168..214",
    parseMs: "0.79 ms",
    frameMs: "8.14 ms",
    dbmlAddedLine: "  verified_at timestamp [null]",
    columnName: "verified_at",
    columnType: "timestamp",
    summary: "users +verified_at",
  },
  {
    id: "reviews-order-ref",
    tag: "dbml-edit · patch #3",
    table: "reviews",
    byteSpan: "702..758",
    parseMs: "0.91 ms",
    frameMs: "8.28 ms",
    dbmlAddedLine: "  order_id int [ref: > orders.id]",
    columnName: "order_id",
    columnType: "int FK",
    summary: "reviews -> orders.id",
  },
];

export function AppShowcase() {
  const [selectedTable, setSelectedTable] = useState<string>("orders");
  const [mutationIndex, setMutationIndex] = useState<number>(0);
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [hoveredPoint, setHoveredPoint] = useState<"p1" | "p2" | null>(null);

  const activeMutation = MUTATION_SCENARIOS[mutationIndex];

  const handleInjectEdit = () => {
    const nextIdx = (mutationIndex + 1) % MUTATION_SCENARIOS.length;
    setMutationIndex(nextIdx);
    setSelectedTable(MUTATION_SCENARIOS[nextIdx].table);
  };

  return (
    <section id="showcase" className="border-b border-border bg-background">
      {/* Centered Mixed-Weight Editorial Header */}
      <div className="px-6 py-12 sm:py-16 border-b border-border text-center">
        <h2 className="text-3xl sm:text-5xl tracking-[-0.03em] leading-[1.12] font-light text-muted-foreground max-w-2xl mx-auto">
          Watch a schema{" "}
          <strong className="font-bold text-foreground">sync at 120 FPS</strong>
        </h2>
        <p className="mt-3 text-xs sm:text-sm text-muted-foreground max-w-lg mx-auto leading-relaxed">
          A canvas edit lands, Rowan splices only the changed syntax token, and
          GPUI draws the frame in 8.2 ms.
        </p>
      </div>

      {/* Top Action & Status Bar (pg-regression-radar style) */}
      <div className="px-4 sm:px-6 py-2.5 border-b border-border bg-card flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 font-mono text-xs">
          <span className="text-signal font-medium">
            Lossless CST patch applied
          </span>
          <span className="text-muted-foreground">&middot;</span>
          <span className="text-muted-foreground tabular-nums">
            span <strong className="text-foreground">{activeMutation.byteSpan}</strong> ({activeMutation.parseMs})
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleInjectEdit}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-border bg-card hover:bg-secondary text-foreground font-mono text-xs font-medium transition-colors"
          >
            <Plus className="w-3.5 h-3.5 text-signal" />
            <span>Inject canvas edit</span>
          </button>
        </div>
      </div>

      {/* Part 1: Millimeter-Grid Live Frame & CST Telemetry Radar Chart */}
      <div className="relative radar-grid-bg border-b border-border px-4 sm:px-6 py-6 overflow-x-auto">
        <div className="min-w-[680px]">
          <svg
            viewBox="0 0 860 220"
            className="w-full h-[210px] overflow-visible select-none"
            role="img"
            aria-label="Frame latency comparison chart showing Electron DOM spikes versus steady 8.2ms GPUI frames and 0.84ms Rowan CST patches"
          >
            <defs>
              <linearGradient id="crimsonArea" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(var(--signal-strong))" stopOpacity="0.22" />
                <stop offset="100%" stopColor="hsl(var(--signal-strong))" stopOpacity="0.02" />
              </linearGradient>
            </defs>

            {/* Horizontal Logarithmic Latency Reference Lines */}
            {[
              { y: 28, label: "100 ms" },
              { y: 66, label: "50 ms" },
              { y: 108, label: "20 ms" },
              { y: 148, label: "8.2 ms" },
              { y: 186, label: "1 ms" },
            ].map((row) => (
              <g key={row.label}>
                <line
                  x1="48"
                  y1={row.y}
                  x2="760"
                  y2={row.y}
                  stroke="hsl(var(--border))"
                  strokeDasharray="2 2"
                  strokeWidth="1"
                />
                <text
                  x="4"
                  y={row.y + 3}
                  className="fill-muted-foreground font-mono text-[10px] tabular-nums"
                >
                  {row.label}
                </text>
              </g>
            ))}

            {/* Vertical Dashed Mutation Marker 1 */}
            <line
              x1="150"
              y1="18"
              x2="150"
              y2="196"
              stroke="hsl(var(--signal-strong))"
              strokeDasharray="3 3"
              strokeWidth="1"
            />
            {/* Pill Tag 1 */}
            <g transform="translate(138, 4)">
              <rect
                x="0"
                y="0"
                width="134"
                height="20"
                rx="10"
                fill="hsl(var(--card))"
                stroke="hsl(var(--border))"
              />
              <circle cx="11" cy="10" r="3" fill="hsl(var(--signal-strong))" />
              <text
                x="20"
                y="13.5"
                className="fill-foreground font-mono text-[10px] font-medium"
              >
                vendas · drag table
              </text>
            </g>

            {/* Vertical Dashed Mutation Marker 2 (Active Injected Patch) */}
            <line
              x1="620"
              y1="18"
              x2="620"
              y2="196"
              stroke="hsl(var(--signal-strong))"
              strokeDasharray="3 3"
              strokeWidth="1"
            />
            {/* Pill Tag 2 */}
            <g transform="translate(598, 4)">
              <rect
                x="0"
                y="0"
                width="148"
                height="20"
                rx="10"
                fill="hsl(var(--card))"
                stroke="hsl(var(--border))"
              />
              <circle cx="11" cy="10" r="3" fill="hsl(var(--signal-strong))" />
              <text
                x="20"
                y="13.5"
                className="fill-foreground font-mono text-[10px] font-medium"
              >
                {activeMutation.tag}
              </text>
            </g>

            {/* Shaded Crimson Area for Legacy WebView Full AST Re-serialization Spike */}
            <path
              d="M 150 145 L 156 76 L 210 72 L 290 75 L 380 71 L 470 74 L 520 73 L 528 142 L 528 196 L 150 196 Z"
              fill="url(#crimsonArea)"
            />
            <path
              d="M 620 145 L 626 42 L 690 45 L 758 44 L 758 196 L 620 196 Z"
              fill="url(#crimsonArea)"
            />

            {/* Trace 1 (Crimson): Traditional WebView AST Rewrite Latency Spike */}
            <path
              d="M 52 146 L 95 144 L 122 147 L 150 145 L 156 76 L 195 72 L 245 77 L 310 71 L 370 75 L 435 72 L 490 74 L 520 73 L 528 142 L 575 144 L 620 145 L 626 42 L 680 46 L 758 44"
              fill="none"
              stroke="hsl(var(--signal-strong))"
              strokeWidth="2"
            />

            {/* Trace 2 (Foreground Solid): GPUI Native 120 FPS Frame Pipeline (Steady 8.2 ms) */}
            <path
              d="M 52 148 L 110 147 L 150 148 L 210 149 L 280 147 L 350 148 L 420 148 L 490 147 L 560 148 L 620 147 L 690 148 L 758 148"
              fill="none"
              stroke="hsl(var(--foreground))"
              strokeWidth="1.6"
            />

            {/* Trace 3 (Muted Monospace): Rowan Incremental CST Patch (< 1 ms) */}
            <path
              d="M 52 184 L 120 185 L 150 181 L 165 184 L 260 185 L 370 184 L 480 185 L 590 184 L 620 179 L 635 184 L 758 184"
              fill="none"
              stroke="hsl(var(--muted-foreground))"
              strokeWidth="1.25"
            />

            {/* Interactive Callout Box 1 */}
            <g
              transform="translate(168, 36)"
              onMouseEnter={() => setHoveredPoint("p1")}
              onMouseLeave={() => setHoveredPoint(null)}
              className="cursor-pointer"
            >
              <rect
                x="0"
                y="0"
                width="142"
                height="34"
                rx="5"
                fill="hsl(var(--card))"
                stroke={
                  hoveredPoint === "p1"
                    ? "hsl(var(--signal-strong))"
                    : "hsl(var(--border))"
                }
              />
              <text
                x="10"
                y="14"
                className="fill-signal font-mono text-[10px] font-semibold"
              >
                Web AST rewrite ×5.8
              </text>
              <text
                x="10"
                y="26"
                className="fill-muted-foreground font-mono text-[10px]"
              >
                comments wiped · 48ms
              </text>
            </g>

            {/* Target Pulse Circle + Callout Box 2 (Active Mutation) */}
            <g
              onMouseEnter={() => setHoveredPoint("p2")}
              onMouseLeave={() => setHoveredPoint(null)}
              className="cursor-pointer"
            >
              <circle
                cx="626"
                cy="42"
                r="9"
                fill="none"
                stroke="hsl(var(--signal-strong))"
                strokeWidth="1.2"
              />
              <circle
                cx="626"
                cy="42"
                r="3.5"
                fill="hsl(var(--signal-strong))"
              />
              <g transform="translate(642, 26)">
                <rect
                  x="0"
                  y="0"
                  width="148"
                  height="34"
                  rx="5"
                  fill="hsl(var(--card))"
                  stroke="hsl(var(--signal-border))"
                />
                <text
                  x="10"
                  y="14"
                  className="fill-signal font-mono text-[10px] font-semibold"
                >
                  {activeMutation.summary}
                </text>
                <text
                  x="10"
                  y="26"
                  className="fill-muted-foreground font-mono text-[10px]"
                >
                  Rowan CST: {activeMutation.parseMs}
                </text>
              </g>
            </g>

            {/* Right-hand End Labels */}
            <circle cx="758" cy="44" r="2.5" fill="hsl(var(--signal-strong))" />
            <text
              x="768"
              y="47"
              className="fill-signal font-mono text-[10px] font-semibold tabular-nums"
            >
              electron 48 ms
            </text>

            <circle cx="758" cy="148" r="2.5" fill="hsl(var(--foreground))" />
            <text
              x="768"
              y="151"
              className="fill-foreground font-mono text-[10px] font-medium tabular-nums"
            >
              gpui {activeMutation.frameMs}
            </text>

            <circle cx="758" cy="184" r="2.5" fill="hsl(var(--muted-foreground))" />
            <text
              x="768"
              y="187"
              className="fill-muted-foreground font-mono text-[10px] tabular-nums"
            >
              rowan {activeMutation.parseMs}
            </text>

            {/* Bottom X-axis markers */}
            <text
              x="52"
              y="212"
              className="fill-muted-foreground font-mono text-[10px]"
            >
              -15 s
            </text>
            <text
              x="532"
              y="212"
              className="fill-muted-foreground font-mono text-[10px]"
            >
              sidecar sync
            </text>
            <text
              x="738"
              y="212"
              className="fill-muted-foreground font-mono text-[10px]"
            >
              now
            </text>
          </svg>
        </div>
      </div>

      {/* Part 2: Synchronized Two-Pane Workspace (Lossless DBML Source + Interactive ER Canvas) */}
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left Pane: Lossless DBML Source with Line Numbers & Surgical Patch Highlight */}
        <div className="lg:col-span-5 lg:border-r border-b lg:border-b-0 border-border bg-card flex flex-col justify-between">
          <div>
            <div className="px-4 py-2 border-b border-border bg-muted/40 flex items-center justify-between font-mono text-[11px]">
              <span className="text-foreground font-medium">
                exemplo.dbml
              </span>
              <span className="text-muted-foreground tabular-nums">
                Rowan CST &middot; 100% lossless
              </span>
            </div>

            <div className="p-3.5 font-mono text-[11.5px] leading-[1.6] overflow-x-auto flex select-text">
              {/* Line Numbers */}
              <div
                aria-hidden="true"
                className="w-6 shrink-0 select-none text-[10px] text-muted-foreground/60 text-right pr-2.5 border-r border-border tabular-nums"
              >
                {Array.from({ length: 28 }, (_, i) => (
                  <div key={i + 1}>{i + 1}</div>
                ))}
              </div>

              {/* DBML Document */}
              <div className="pl-3 flex-1 space-y-0.5">
                <div className="text-muted-foreground">
                  {"// E-commerce schema — comments stay intact"}
                </div>

                {/* Table: users */}
                <div
                  onClick={() => setSelectedTable("users")}
                  className={`cursor-pointer px-1 -mx-1 rounded-sm transition-colors ${
                    selectedTable === "users" ? "bg-secondary" : ""
                  }`}
                >
                  <div>
                    <span className="text-purple-700 dark:text-purple-400 font-semibold">
                      Table
                    </span>{" "}
                    <span className="text-foreground font-semibold">users</span>{" "}
                    {"{"}
                  </div>
                  <div className="pl-3">
                    id <span className="text-sky-700 dark:text-sky-400">int</span>{" "}
                    <span className="text-emerald-700 dark:text-emerald-400">
                      [pk]
                    </span>
                  </div>
                  <div className="pl-3">
                    email{" "}
                    <span className="text-sky-700 dark:text-sky-400">
                      varchar(255)
                    </span>{" "}
                    <span className="text-emerald-700 dark:text-emerald-400">
                      [unique, not null]
                    </span>
                  </div>
                  {activeMutation.table === "users" && (
                    <div className="bg-signal-soft text-signal font-medium px-1 -mx-1">
                      +{activeMutation.dbmlAddedLine}
                    </div>
                  )}
                  <div>{"}"}</div>
                </div>

                {/* Table: products */}
                <div
                  onClick={() => setSelectedTable("products")}
                  className={`cursor-pointer px-1 -mx-1 rounded-sm transition-colors ${
                    selectedTable === "products" ? "bg-secondary" : ""
                  }`}
                >
                  <div>
                    <span className="text-purple-700 dark:text-purple-400 font-semibold">
                      Table
                    </span>{" "}
                    <span className="text-foreground font-semibold">
                      products
                    </span>{" "}
                    {"{"}
                  </div>
                  <div className="pl-3">
                    id <span className="text-sky-700 dark:text-sky-400">int</span>{" "}
                    <span className="text-emerald-700 dark:text-emerald-400">
                      [pk]
                    </span>
                  </div>
                  <div className="pl-3">
                    title{" "}
                    <span className="text-sky-700 dark:text-sky-400">
                      varchar(200)
                    </span>
                  </div>
                  <div className="pl-3">
                    price{" "}
                    <span className="text-sky-700 dark:text-sky-400">
                      decimal(10,2)
                    </span>
                  </div>
                  <div>{"}"}</div>
                </div>

                {/* Table: orders */}
                <div
                  onClick={() => setSelectedTable("orders")}
                  className={`cursor-pointer px-1 -mx-1 rounded-sm transition-colors ${
                    selectedTable === "orders" ? "bg-secondary" : ""
                  }`}
                >
                  <div>
                    <span className="text-purple-700 dark:text-purple-400 font-semibold">
                      Table
                    </span>{" "}
                    <span className="text-foreground font-semibold">orders</span>{" "}
                    {"{"}
                  </div>
                  <div className="pl-3">
                    id <span className="text-sky-700 dark:text-sky-400">int</span>{" "}
                    <span className="text-emerald-700 dark:text-emerald-400">
                      [pk]
                    </span>
                  </div>
                  <div className="pl-3">
                    user_id{" "}
                    <span className="text-sky-700 dark:text-sky-400">int</span>{" "}
                    <span className="text-emerald-700 dark:text-emerald-400">
                      [ref: &gt; users.id, not null]
                    </span>
                  </div>
                  <div className="pl-3">
                    status{" "}
                    <span className="text-sky-700 dark:text-sky-400">
                      varchar(20)
                    </span>
                  </div>
                  {activeMutation.table === "orders" && (
                    <div className="bg-signal-soft text-signal font-medium px-1 -mx-1">
                      +{activeMutation.dbmlAddedLine}
                    </div>
                  )}
                  <div>{"}"}</div>
                </div>

                {/* Table: reviews */}
                <div
                  onClick={() => setSelectedTable("reviews")}
                  className={`cursor-pointer px-1 -mx-1 rounded-sm transition-colors ${
                    selectedTable === "reviews" ? "bg-secondary" : ""
                  }`}
                >
                  <div>
                    <span className="text-purple-700 dark:text-purple-400 font-semibold">
                      Table
                    </span>{" "}
                    <span className="text-foreground font-semibold">
                      reviews
                    </span>{" "}
                    {"{"}
                  </div>
                  <div className="pl-3">
                    id <span className="text-sky-700 dark:text-sky-400">int</span>{" "}
                    <span className="text-emerald-700 dark:text-emerald-400">
                      [pk]
                    </span>
                  </div>
                  <div className="pl-3">
                    product_id{" "}
                    <span className="text-sky-700 dark:text-sky-400">int</span>{" "}
                    <span className="text-emerald-700 dark:text-emerald-400">
                      [ref: &gt; products.id]
                    </span>
                  </div>
                  {activeMutation.table === "reviews" && (
                    <div className="bg-signal-soft text-signal font-medium px-1 -mx-1">
                      +{activeMutation.dbmlAddedLine}
                    </div>
                  )}
                  <div>{"}"}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 py-2 border-t border-border bg-muted/20 font-mono text-[11px] text-muted-foreground flex items-center justify-between">
            <span>Sidecar: exemplo.dbml.layout.json</span>
            <span className="text-foreground font-medium">
              active: {selectedTable}
            </span>
          </div>
        </div>

        {/* Right Pane: Interactive GPU Visual Canvas */}
        <div className="lg:col-span-7 flex flex-col justify-between bg-background radar-grid-bg">
          <div className="px-4 py-2 border-b border-border bg-muted/40 flex items-center justify-between font-mono text-[11px]">
            <span className="text-foreground font-medium">
              GPUI Hardware Canvas (DirectX 12 / Vulkan)
            </span>
            <span className="text-signal font-medium tabular-nums">
              120 FPS &middot; {activeMutation.frameMs}
            </span>
          </div>

          {/* Interactive Entity-Relationship Diagram */}
          <div className="p-5 sm:p-6 my-auto">
            <div
              style={{ transform: `scale(${zoomLevel / 100})` }}
              className="origin-center transition-transform duration-150 space-y-4"
            >
              {/* Top Row: Two TableGroups */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Group 1: vendas */}
                <div className="p-3 rounded border border-border bg-card/90 space-y-2.5">
                  <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                    <span className="flex items-center gap-1.5 text-foreground font-semibold">
                      <span className="w-1.5 h-1.5 bg-signal-strong inline-block" />
                      TableGroup: vendas
                    </span>
                    <span>2 tables</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    {/* orders node */}
                    <button
                      type="button"
                      onClick={() => setSelectedTable("orders")}
                      className={`text-left rounded border p-2 font-mono text-[10px] transition-colors bg-card ${
                        selectedTable === "orders"
                          ? "border-signal-strong ring-1 ring-signal-strong"
                          : "border-border hover:border-foreground/40"
                      }`}
                    >
                      <div className="flex items-center justify-between pb-1 mb-1.5 border-b border-border font-semibold text-foreground">
                        <span>orders</span>
                        <span className="text-[9px] text-muted-foreground">
                          PK/FK
                        </span>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between">
                          <span className="flex items-center gap-1 text-foreground">
                            <Key className="w-2.5 h-2.5 text-amber-600 dark:text-amber-400" />
                            id
                          </span>
                          <span className="text-muted-foreground">int</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="flex items-center gap-1 text-foreground">
                            <Link2 className="w-2.5 h-2.5 text-sky-600 dark:text-sky-400" />
                            user_id
                          </span>
                          <span className="text-muted-foreground">int NN</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">status</span>
                          <span className="text-muted-foreground">varchar</span>
                        </div>
                        {activeMutation.table === "orders" && (
                          <div className="flex justify-between bg-signal-soft text-signal px-1 -mx-1 font-semibold">
                            <span>+{activeMutation.columnName}</span>
                            <span>{activeMutation.columnType}</span>
                          </div>
                        )}
                      </div>
                    </button>

                    {/* order_items node */}
                    <button
                      type="button"
                      onClick={() => setSelectedTable("order_items")}
                      className={`text-left rounded border p-2 font-mono text-[10px] transition-colors bg-card ${
                        selectedTable === "order_items"
                          ? "border-signal-strong ring-1 ring-signal-strong"
                          : "border-border hover:border-foreground/40"
                      }`}
                    >
                      <div className="flex items-center justify-between pb-1 mb-1.5 border-b border-border font-semibold text-foreground">
                        <span>order_items</span>
                        <span className="text-[9px] text-muted-foreground">
                          4 cols
                        </span>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between">
                          <span className="flex items-center gap-1 text-foreground">
                            <Key className="w-2.5 h-2.5 text-amber-600 dark:text-amber-400" />
                            id
                          </span>
                          <span className="text-muted-foreground">int</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="flex items-center gap-1 text-foreground">
                            <Link2 className="w-2.5 h-2.5 text-sky-600 dark:text-sky-400" />
                            order_id
                          </span>
                          <span className="text-muted-foreground">int</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="flex items-center gap-1 text-foreground">
                            <Link2 className="w-2.5 h-2.5 text-sky-600 dark:text-sky-400" />
                            product_id
                          </span>
                          <span className="text-muted-foreground">int</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">quantity</span>
                          <span className="text-muted-foreground">int</span>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Group 2: catalogo */}
                <div className="p-3 rounded border border-border bg-card/90 space-y-2.5">
                  <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                    <span className="flex items-center gap-1.5 text-foreground font-semibold">
                      <span className="w-1.5 h-1.5 bg-foreground inline-block" />
                      TableGroup: catalogo
                    </span>
                    <span>2 tables</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    {/* products node */}
                    <button
                      type="button"
                      onClick={() => setSelectedTable("products")}
                      className={`text-left rounded border p-2 font-mono text-[10px] transition-colors bg-card ${
                        selectedTable === "products"
                          ? "border-signal-strong ring-1 ring-signal-strong"
                          : "border-border hover:border-foreground/40"
                      }`}
                    >
                      <div className="flex items-center justify-between pb-1 mb-1.5 border-b border-border font-semibold text-foreground">
                        <span>products</span>
                        <span className="text-[9px] text-muted-foreground">
                          4 cols
                        </span>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between">
                          <span className="flex items-center gap-1 text-foreground">
                            <Key className="w-2.5 h-2.5 text-amber-600 dark:text-amber-400" />
                            id
                          </span>
                          <span className="text-muted-foreground">int</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-foreground">title</span>
                          <span className="text-muted-foreground">varchar</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-foreground">price</span>
                          <span className="text-muted-foreground">decimal</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">stock</span>
                          <span className="text-muted-foreground">int</span>
                        </div>
                      </div>
                    </button>

                    {/* reviews node */}
                    <button
                      type="button"
                      onClick={() => setSelectedTable("reviews")}
                      className={`text-left rounded border p-2 font-mono text-[10px] transition-colors bg-card ${
                        selectedTable === "reviews"
                          ? "border-signal-strong ring-1 ring-signal-strong"
                          : "border-border hover:border-foreground/40"
                      }`}
                    >
                      <div className="flex items-center justify-between pb-1 mb-1.5 border-b border-border font-semibold text-foreground">
                        <span>reviews</span>
                        <span className="text-[9px] text-muted-foreground">
                          FK
                        </span>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between">
                          <span className="flex items-center gap-1 text-foreground">
                            <Key className="w-2.5 h-2.5 text-amber-600 dark:text-amber-400" />
                            id
                          </span>
                          <span className="text-muted-foreground">int</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="flex items-center gap-1 text-foreground">
                            <Link2 className="w-2.5 h-2.5 text-sky-600 dark:text-sky-400" />
                            product_id
                          </span>
                          <span className="text-muted-foreground">int</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">rating</span>
                          <span className="text-muted-foreground">int</span>
                        </div>
                        {activeMutation.table === "reviews" && (
                          <div className="flex justify-between bg-signal-soft text-signal px-1 -mx-1 font-semibold">
                            <span>+{activeMutation.columnName}</span>
                            <span>{activeMutation.columnType}</span>
                          </div>
                        )}
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Bottom Row: users Table + Live Relation Summary */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedTable("users")}
                  className={`w-full sm:w-60 text-left rounded border p-2.5 font-mono text-[10px] transition-colors bg-card ${
                    selectedTable === "users"
                      ? "border-signal-strong ring-1 ring-signal-strong"
                      : "border-border hover:border-foreground/40"
                  }`}
                >
                  <div className="flex items-center justify-between pb-1 mb-1.5 border-b border-border font-semibold text-foreground">
                    <span>users</span>
                    <span className="text-[9px] text-muted-foreground">
                      referenced by orders, reviews
                    </span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <span className="flex items-center gap-1 text-foreground">
                        <Key className="w-2.5 h-2.5 text-amber-600 dark:text-amber-400" />
                        id
                      </span>
                      <span className="text-muted-foreground">int [pk]</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground">email</span>
                      <span className="text-muted-foreground">
                        varchar(255) unique
                      </span>
                    </div>
                    {activeMutation.table === "users" && (
                      <div className="flex justify-between bg-signal-soft text-signal px-1 -mx-1 font-semibold">
                        <span>+{activeMutation.columnName}</span>
                        <span>{activeMutation.columnType}</span>
                      </div>
                    )}
                  </div>
                </button>

                {/* Canvas Zoom Controls */}
                <div className="inline-flex items-center gap-1 border border-border bg-card px-2 py-1 rounded font-mono text-[11px] tabular-nums">
                  <button
                    type="button"
                    onClick={() => setZoomLevel((z) => Math.max(85, z - 5))}
                    className="p-0.5 text-muted-foreground hover:text-foreground"
                    title="Zoom out"
                    aria-label="Zoom out canvas"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="px-1.5 text-foreground font-medium">
                    {zoomLevel}%
                  </span>
                  <button
                    type="button"
                    onClick={() => setZoomLevel((z) => Math.min(110, z + 5))}
                    className="p-0.5 text-muted-foreground hover:text-foreground"
                    title="Zoom in"
                    aria-label="Zoom in canvas"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setZoomLevel(100)}
                    className="p-0.5 text-muted-foreground hover:text-foreground ml-1"
                    title="Reset zoom"
                    aria-label="Reset zoom"
                  >
                    {zoomLevel === 100 ? (
                      <Maximize2 className="w-3 h-3" />
                    ) : (
                      <RotateCcw className="w-3 h-3" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 py-2 border-t border-border bg-muted/20 font-mono text-[11px] text-muted-foreground flex items-center justify-between tabular-nums">
            <span>5 tables &middot; 2 groups &middot; 4 foreign keys</span>
            <span>Sugiyama layout engine</span>
          </div>
        </div>
      </div>

      {/* Bottom Caption Bar (pg-regression-radar style) */}
      <div className="px-6 py-2.5 border-t border-border bg-muted/30 text-xs text-muted-foreground">
        Simulated CST + GPUI telemetry. Click any table to inspect its syntax
        node, or click <strong className="text-foreground font-medium">+ Inject canvas edit</strong> to splice a live token.
      </div>
    </section>
  );
}
