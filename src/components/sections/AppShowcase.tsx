import { useState } from "react";
import {
  Braces,
  Hand,
  Key,
  LayoutGrid,
  Link2,
  Maximize2,
  Minus,
  MousePointer,
  Plus,
  Sparkles,
  Table2,
  X,
} from "lucide-react";

/** Official 8-color table palette from `crates/dbml-wasm/src/lib.rs` (`TABLE_COLORS`) */
const TABLE_COLORS = [
  { hex: "#3b82f6", name: "Blue" },
  { hex: "#06b6d4", name: "Cyan" },
  { hex: "#22c55e", name: "Green" },
  { hex: "#84cc16", name: "Lime" },
  { hex: "#f59e0b", name: "Amber" },
  { hex: "#f97316", name: "Orange" },
  { hex: "#ec4899", name: "Pink" },
  { hex: "#8b5cf6", name: "Violet" },
];

interface PatchScenario {
  id: string;
  table: "orders" | "users" | "reviews" | "products" | "order_items";
  addedLine: string;
  colName: string;
  colType: string;
}

const PATCH_SCENARIOS: PatchScenario[] = [
  {
    id: "add-col-orders",
    table: "orders",
    addedLine: "  discount_pct decimal(5,2)",
    colName: "discount_pct",
    colType: "decimal(5,2)",
  },
  {
    id: "add-col-users",
    table: "users",
    addedLine: "  avatar_url varchar(255)",
    colName: "avatar_url",
    colType: "varchar(255)",
  },
  {
    id: "add-ref-reviews",
    table: "reviews",
    addedLine: "  order_id int [ref: > orders.id]",
    colName: "order_id",
    colType: "int [FK]",
  },
];

export function AppShowcase() {
  const [selectedTable, setSelectedTable] = useState<string | null>("orders");
  const [patchIndex, setPatchIndex] = useState<number>(0);
  const [showEditor, setShowEditor] = useState<boolean>(true);
  const [activeTool, setActiveTool] = useState<"select" | "hand">("select");
  const [zoomLevel, setZoomLevel] = useState<number>(60);
  const [tableColors, setTableColors] = useState<Record<string, string>>({
    orders: "#3b82f6",
    order_items: "#3b82f6",
    products: "#22c55e",
    reviews: "#22c55e",
    users: "#8b5cf6",
  });

  const activePatch = PATCH_SCENARIOS[patchIndex];

  const handleInjectCommand = () => {
    const nextIdx = (patchIndex + 1) % PATCH_SCENARIOS.length;
    setPatchIndex(nextIdx);
    setSelectedTable(PATCH_SCENARIOS[nextIdx].table);
  };

  const handleSetColor = (table: string, color: string) => {
    setTableColors((prev) => ({ ...prev, [table]: color }));
  };

  return (
    <section id="showcase" className="border-b border-border bg-background">
      {/* Centered Mixed-Weight Editorial Header */}
      <div className="px-6 py-12 sm:py-16 border-b border-border text-center">
        <h2 className="text-3xl sm:text-5xl tracking-[-0.03em] leading-[1.12] font-light text-muted-foreground max-w-2xl mx-auto">
          One visual workbench,{" "}
          <strong className="font-bold text-foreground">
            synchronized in real time
          </strong>
        </h2>
        <p className="mt-3 text-xs sm:text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Edit in the integrated DBML editor or directly on the canvas &mdash;{" "}
          <code className="font-mono text-foreground">dbml-edit</code> preserves
          every comment and{" "}
          <code className="font-mono text-foreground">layout::route</code>{" "}
          keeps orthogonal relations clean.
        </p>
      </div>

      {/* Authentic 1:1 DB Modeling Workbench (Sidebar + DBML Editor + Canvas + Inspector) */}
      <div>
        {/* Workbench Topbar (Matches docs/img/editor-dbml.png) */}
        <div className="h-9 px-3 border-b border-border bg-muted/50 flex items-center justify-between gap-2 font-mono text-xs select-none">
          <div className="flex items-center gap-2">
            {/* Active File Tab */}
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-sm bg-card border border-border text-foreground font-medium text-[11px]">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>sample.dbml</span>
            </div>
            <span className="text-[11px] text-muted-foreground hidden md:inline">
              + sample.dbml.layout.json
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-card border border-border text-[11px] text-muted-foreground">
              <span>Search commands...</span>
              <kbd className="text-[10px] text-foreground">Ctrl+K</kbd>
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-signal-soft text-signal border border-signal-border font-medium">
              1:1 Desktop &middot; CLI &middot; VS Code
            </span>
          </div>
        </div>

        {/* Workbench 4-Pane Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
          {/* Pane 1: Schema Explorer Sidebar (TABLES & RELATIONS from canvas-claro.png) */}
          <div className="lg:col-span-2 border-b lg:border-b-0 lg:border-r border-border bg-card/60 p-3 font-mono text-[11px] flex flex-col justify-between select-none">
            <div className="space-y-4">
              {/* TABLES */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-muted-foreground">
                  <span>TABLES</span>
                  <span className="tabular-nums">5</span>
                </div>

                {/* Group: sales */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-foreground font-semibold">
                    <span className="flex items-center gap-1.5">
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: "#3b82f6" }}
                      />
                      <span>sales</span>
                    </span>
                    <span className="text-muted-foreground text-[10px]">2</span>
                  </div>
                  <div className="pl-3 space-y-0.5">
                    {(["orders", "order_items"] as const).map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setSelectedTable(t)}
                        className={`w-full flex items-center justify-between px-1.5 py-1 rounded-sm text-left transition-colors ${
                          selectedTable === t
                            ? "bg-secondary text-foreground font-semibold"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        <span className="flex items-center gap-1.5">
                          <Table2 className="w-3 h-3" />
                          <span>{t}</span>
                        </span>
                        <span className="text-[10px]">4</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Group: catalog */}
                <div className="space-y-1 pt-1">
                  <div className="flex items-center justify-between text-foreground font-semibold">
                    <span className="flex items-center gap-1.5">
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: "#22c55e" }}
                      />
                      <span>catalog</span>
                    </span>
                    <span className="text-muted-foreground text-[10px]">2</span>
                  </div>
                  <div className="pl-3 space-y-0.5">
                    {(["products", "reviews"] as const).map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setSelectedTable(t)}
                        className={`w-full flex items-center justify-between px-1.5 py-1 rounded-sm text-left transition-colors ${
                          selectedTable === t
                            ? "bg-secondary text-foreground font-semibold"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        <span className="flex items-center gap-1.5">
                          <Table2 className="w-3 h-3" />
                          <span>{t}</span>
                        </span>
                        <span className="text-[10px]">4</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Ungrouped: users */}
                <div className="space-y-1 pt-1">
                  <div className="text-[10px] text-muted-foreground">
                    Ungrouped
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedTable("users")}
                    className={`w-full flex items-center justify-between px-1.5 py-1 rounded-sm text-left transition-colors ${
                      selectedTable === "users"
                        ? "bg-secondary text-foreground font-semibold"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <span className="flex items-center gap-1.5">
                      <Table2
                        className="w-3 h-3"
                        style={{ color: tableColors.users }}
                      />
                      <span>users</span>
                    </span>
                    <span className="text-[10px]">4</span>
                  </button>
                </div>
              </div>

              {/* RELATIONS */}
              <div className="space-y-1 pt-2 border-t border-border">
                <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-muted-foreground">
                  <span>RELATIONS</span>
                  <span className="tabular-nums">5</span>
                </div>
                <div className="space-y-1 text-[10px] text-muted-foreground">
                  <div>orders &rarr; users</div>
                  <div>order_items &rarr; orders</div>
                  <div>order_items &rarr; products</div>
                  <div>reviews &rarr; products</div>
                  <div>reviews &rarr; users</div>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-border text-[10px] text-muted-foreground flex items-center justify-between">
              <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                0 errors &middot; 0 warnings
              </span>
              <span>lint()</span>
            </div>
          </div>

          {/* Pane 2: Collapsible Integrated DBML Editor (`Ctrl+E`) */}
          {showEditor && (
            <div className="lg:col-span-3 border-b lg:border-b-0 lg:border-r border-border bg-card flex flex-col justify-between">
              <div>
                <div className="h-8 px-3 border-b border-border bg-muted/30 flex items-center justify-between font-mono text-[11px]">
                  <span className="flex items-center gap-1.5 text-foreground font-medium">
                    <Braces className="w-3 h-3 text-muted-foreground" />
                    <span>sample.dbml</span>
                  </span>
                  <div className="flex items-center gap-1">
                    <span
                      className="text-[10px] text-muted-foreground px-1"
                      title="Format Document (Alt+Shift+F)"
                    >
                      <Sparkles className="w-3 h-3 inline" />
                    </span>
                    <button
                      type="button"
                      onClick={() => setShowEditor(false)}
                      className="p-0.5 text-muted-foreground hover:text-foreground"
                      title="Close DBML Editor (Ctrl+E)"
                      aria-label="Close DBML Editor"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                <div className="p-2.5 font-mono text-[11px] leading-[1.55] overflow-x-auto flex select-text">
                  <div
                    aria-hidden="true"
                    className="w-5 shrink-0 select-none text-[10px] text-muted-foreground/50 text-right pr-2 border-r border-border tabular-nums"
                  >
                    {Array.from({ length: 26 }, (_, i) => (
                      <div key={i + 1}>{i + 1}</div>
                    ))}
                  </div>

                  <div className="pl-2.5 flex-1 space-y-0.5">
                    <div className="text-muted-foreground">
                      {"// Example: simple e-commerce"}
                    </div>
                    <div
                      onClick={() => setSelectedTable("users")}
                      className={`cursor-pointer px-1 -mx-1 rounded-sm ${
                        selectedTable === "users" ? "bg-secondary" : ""
                      }`}
                    >
                      <div>
                        <span className="text-purple-700 dark:text-purple-400 font-semibold">
                          Table
                        </span>{" "}
                        users{" "}
                        <span className="text-muted-foreground">
                          [headercolor: {tableColors.users}]
                        </span>{" "}
                        {"{"}
                      </div>
                      <div className="pl-2.5">
                        id <span className="text-sky-700 dark:text-sky-400">int</span>{" "}
                        <span className="text-emerald-700 dark:text-emerald-400">
                          [pk]
                        </span>
                      </div>
                      <div className="pl-2.5">
                        email{" "}
                        <span className="text-sky-700 dark:text-sky-400">
                          varchar(255)
                        </span>{" "}
                        <span className="text-emerald-700 dark:text-emerald-400">
                          [unique, not null]
                        </span>
                      </div>
                      {activePatch.table === "users" && (
                        <div className="bg-signal-soft text-signal font-medium px-1 -mx-1">
                          +{activePatch.addedLine}
                        </div>
                      )}
                      <div>{"}"}</div>
                    </div>

                    <div
                      onClick={() => setSelectedTable("orders")}
                      className={`cursor-pointer px-1 -mx-1 rounded-sm ${
                        selectedTable === "orders" ? "bg-secondary" : ""
                      }`}
                    >
                      <div>
                        <span className="text-purple-700 dark:text-purple-400 font-semibold">
                          Table
                        </span>{" "}
                        orders {"{"}
                      </div>
                      <div className="pl-2.5">
                        id <span className="text-sky-700 dark:text-sky-400">int</span>{" "}
                        <span className="text-emerald-700 dark:text-emerald-400">
                          [pk]
                        </span>
                      </div>
                      <div className="pl-2.5">
                        user_id{" "}
                        <span className="text-sky-700 dark:text-sky-400">int</span>{" "}
                        <span className="text-emerald-700 dark:text-emerald-400">
                          [ref: &gt; users.id]
                        </span>
                      </div>
                      {activePatch.table === "orders" && (
                        <div className="bg-signal-soft text-signal font-medium px-1 -mx-1">
                          +{activePatch.addedLine}
                        </div>
                      )}
                      <div>{"}"}</div>
                    </div>

                    <div
                      onClick={() => setSelectedTable("reviews")}
                      className={`cursor-pointer px-1 -mx-1 rounded-sm ${
                        selectedTable === "reviews" ? "bg-secondary" : ""
                      }`}
                    >
                      <div>
                        <span className="text-purple-700 dark:text-purple-400 font-semibold">
                          Table
                        </span>{" "}
                        reviews {"{"}
                      </div>
                      <div className="pl-2.5">
                        id <span className="text-sky-700 dark:text-sky-400">int</span>{" "}
                        <span className="text-emerald-700 dark:text-emerald-400">
                          [pk]
                        </span>
                      </div>
                      {activePatch.table === "reviews" && (
                        <div className="bg-signal-soft text-signal font-medium px-1 -mx-1">
                          +{activePatch.addedLine}
                        </div>
                      )}
                      <div>{"}"}</div>
                    </div>

                    <div className="pt-1 text-muted-foreground">
                      <span className="text-purple-700 dark:text-purple-400 font-semibold">
                        TableGroup
                      </span>{" "}
                      sales [color: #3b82f6]
                    </div>
                    <div className="text-muted-foreground">
                      <span className="text-purple-700 dark:text-purple-400 font-semibold">
                        TableGroup
                      </span>{" "}
                      catalog [color: #22c55e]
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-3 py-1.5 border-t border-border bg-muted/20 font-mono text-[10px] text-muted-foreground flex items-center justify-between">
                <span>Rowan CST</span>
                <span>Alt+Up/Down swap_lines</span>
              </div>
            </div>
          )}

          {/* Pane 3: Interactive Visual Canvas with Floating 6-Tool Pill & Orthogonal SVG Routing */}
          <div
            className={`${
              showEditor ? "lg:col-span-5" : "lg:col-span-8"
            } border-b lg:border-b-0 lg:border-r border-border bg-background radar-grid-bg flex flex-col justify-between p-3.5 relative select-none`}
          >
            {/* Floating 6-Tool Pill Toolbar (Exact match to docs/img/canvas-claro.png) */}
            <div className="mx-auto inline-flex items-center gap-1 px-2 py-1 rounded-lg border border-border bg-card">
              <button
                type="button"
                onClick={() => setActiveTool("select")}
                className={`p-1.5 rounded transition-colors ${
                  activeTool === "select"
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                title="Select Tool (V)"
                aria-label="Select Tool (V)"
              >
                <MousePointer className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setActiveTool("hand")}
                className={`p-1.5 rounded transition-colors ${
                  activeTool === "hand"
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                title="Hand Tool / Pan View (H)"
                aria-label="Hand Tool (H)"
              >
                <Hand className="w-3.5 h-3.5" />
              </button>
              <span className="h-3.5 w-px bg-border mx-0.5" />
              <button
                type="button"
                onClick={handleInjectCommand}
                className="p-1.5 rounded text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                title="Add Column / Mutation (T)"
                aria-label="Add Column or Table"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setZoomLevel(60)}
                className="p-1.5 rounded text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                title="Auto-Layout Sugiyama (Ctrl+L)"
                aria-label="Auto-Layout (Ctrl+L)"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setZoomLevel(60)}
                className="p-1.5 rounded text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                title="Fit to Screen (Shift+1)"
                aria-label="Fit to Screen (Shift+1)"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
              <span className="h-3.5 w-px bg-border mx-0.5" />
              <button
                type="button"
                onClick={() => setShowEditor((v) => !v)}
                className={`p-1.5 rounded transition-colors ${
                  showEditor
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                title="Toggle DBML Editor (Ctrl+E)"
                aria-label="Toggle DBML Editor (Ctrl+E)"
              >
                <Braces className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Canvas Scene Geometry: GroupBoxes + Tables + Orthogonal Rounded Edges */}
            <div className="my-4 relative">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 relative z-10">
                {/* GroupBox 1: sales (#3b82f6) */}
                <div
                  className="p-2.5 rounded-lg border space-y-2"
                  style={{
                    borderColor: "rgba(59, 130, 246, 0.45)",
                    backgroundColor: "rgba(59, 130, 246, 0.04)",
                  }}
                >
                  <div className="inline-flex items-center gap-1.5 px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold text-blue-600 dark:text-blue-400 bg-blue-500/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span>sales</span>
                    <span className="opacity-70">2</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {/* orders card */}
                    <button
                      type="button"
                      onClick={() => setSelectedTable("orders")}
                      className={`text-left rounded border bg-card overflow-hidden font-mono text-[10px] transition-all ${
                        selectedTable === "orders"
                          ? "border-signal-strong ring-1 ring-signal-strong"
                          : "border-border hover:border-foreground/40"
                      }`}
                    >
                      <div
                        className="h-1 w-full"
                        style={{ backgroundColor: tableColors.orders }}
                      />
                      <div className="p-1.5">
                        <div className="flex items-center justify-between pb-1 mb-1 border-b border-border font-semibold text-foreground">
                          <span>orders</span>
                          <span className="text-[9px] text-muted-foreground">4</span>
                        </div>
                        <div className="space-y-0.5">
                          <div className="flex justify-between">
                            <span className="flex items-center gap-1 text-foreground">
                              <Key className="w-2.5 h-2.5 text-amber-500" /> id
                            </span>
                            <span className="text-muted-foreground">int</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="flex items-center gap-1 text-foreground">
                              <Link2 className="w-2.5 h-2.5 text-sky-500" /> user_id
                            </span>
                            <span className="text-muted-foreground">int NN</span>
                          </div>
                          <div className="flex justify-between text-muted-foreground">
                            <span>status</span>
                            <span>varchar</span>
                          </div>
                          {activePatch.table === "orders" && (
                            <div className="flex justify-between bg-signal-soft text-signal px-1 -mx-1 font-semibold">
                              <span>+{activePatch.colName}</span>
                              <span>dec</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </button>

                    {/* order_items card */}
                    <button
                      type="button"
                      onClick={() => setSelectedTable("order_items")}
                      className={`text-left rounded border bg-card overflow-hidden font-mono text-[10px] transition-all ${
                        selectedTable === "order_items"
                          ? "border-signal-strong ring-1 ring-signal-strong"
                          : "border-border hover:border-foreground/40"
                      }`}
                    >
                      <div
                        className="h-1 w-full"
                        style={{ backgroundColor: tableColors.order_items }}
                      />
                      <div className="p-1.5">
                        <div className="flex items-center justify-between pb-1 mb-1 border-b border-border font-semibold text-foreground">
                          <span>order_items</span>
                          <span className="text-[9px] text-muted-foreground">4</span>
                        </div>
                        <div className="space-y-0.5">
                          <div className="flex justify-between">
                            <span className="flex items-center gap-1 text-foreground">
                              <Key className="w-2.5 h-2.5 text-amber-500" /> id
                            </span>
                            <span className="text-muted-foreground">int</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="flex items-center gap-1 text-foreground">
                              <Link2 className="w-2.5 h-2.5 text-sky-500" /> order_id
                            </span>
                            <span className="text-muted-foreground">int N:1</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="flex items-center gap-1 text-foreground">
                              <Link2 className="w-2.5 h-2.5 text-sky-500" /> product_id
                            </span>
                            <span className="text-muted-foreground">int N:1</span>
                          </div>
                          <div className="flex justify-between text-muted-foreground">
                            <span>quantity</span>
                            <span>int</span>
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>

                {/* GroupBox 2: catalog (#22c55e) */}
                <div
                  className="p-2.5 rounded-lg border space-y-2"
                  style={{
                    borderColor: "rgba(34, 197, 94, 0.45)",
                    backgroundColor: "rgba(34, 197, 94, 0.04)",
                  }}
                >
                  <div className="inline-flex items-center gap-1.5 px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>catalog</span>
                    <span className="opacity-70">2</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {/* products card */}
                    <button
                      type="button"
                      onClick={() => setSelectedTable("products")}
                      className={`text-left rounded border bg-card overflow-hidden font-mono text-[10px] transition-all ${
                        selectedTable === "products"
                          ? "border-signal-strong ring-1 ring-signal-strong"
                          : "border-border hover:border-foreground/40"
                      }`}
                    >
                      <div
                        className="h-1 w-full"
                        style={{ backgroundColor: tableColors.products }}
                      />
                      <div className="p-1.5">
                        <div className="flex items-center justify-between pb-1 mb-1 border-b border-border font-semibold text-foreground">
                          <span>products</span>
                          <span className="text-[9px] text-muted-foreground">4</span>
                        </div>
                        <div className="space-y-0.5">
                          <div className="flex justify-between">
                            <span className="flex items-center gap-1 text-foreground">
                              <Key className="w-2.5 h-2.5 text-amber-500" /> id
                            </span>
                            <span className="text-muted-foreground">int</span>
                          </div>
                          <div className="flex justify-between text-foreground">
                            <span>title</span>
                            <span className="text-muted-foreground">varchar NN</span>
                          </div>
                          <div className="flex justify-between text-muted-foreground">
                            <span>price</span>
                            <span>decimal</span>
                          </div>
                          <div className="flex justify-between text-muted-foreground">
                            <span>stock</span>
                            <span>int</span>
                          </div>
                        </div>
                      </div>
                    </button>

                    {/* reviews card */}
                    <button
                      type="button"
                      onClick={() => setSelectedTable("reviews")}
                      className={`text-left rounded border bg-card overflow-hidden font-mono text-[10px] transition-all ${
                        selectedTable === "reviews"
                          ? "border-signal-strong ring-1 ring-signal-strong"
                          : "border-border hover:border-foreground/40"
                      }`}
                    >
                      <div
                        className="h-1 w-full"
                        style={{ backgroundColor: tableColors.reviews }}
                      />
                      <div className="p-1.5">
                        <div className="flex items-center justify-between pb-1 mb-1 border-b border-border font-semibold text-foreground">
                          <span>reviews</span>
                          <span className="text-[9px] text-muted-foreground">4</span>
                        </div>
                        <div className="space-y-0.5">
                          <div className="flex justify-between">
                            <span className="flex items-center gap-1 text-foreground">
                              <Key className="w-2.5 h-2.5 text-amber-500" /> id
                            </span>
                            <span className="text-muted-foreground">int</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="flex items-center gap-1 text-foreground">
                              <Link2 className="w-2.5 h-2.5 text-sky-500" /> product_id
                            </span>
                            <span className="text-muted-foreground">int N:1</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="flex items-center gap-1 text-foreground">
                              <Link2 className="w-2.5 h-2.5 text-sky-500" /> user_id
                            </span>
                            <span className="text-muted-foreground">int N:1</span>
                          </div>
                          {activePatch.table === "reviews" && (
                            <div className="flex justify-between bg-signal-soft text-signal px-1 -mx-1 font-semibold">
                              <span>+{activePatch.colName}</span>
                              <span>FK</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Bottom Row: Ungrouped `users` table (#8b5cf6) + Orthogonal Route Preview */}
              <div className="mt-3 flex flex-wrap items-center justify-between gap-3 relative z-10">
                <button
                  type="button"
                  onClick={() => setSelectedTable("users")}
                  className={`w-full sm:w-52 text-left rounded border bg-card overflow-hidden font-mono text-[10px] transition-all ${
                    selectedTable === "users"
                      ? "border-signal-strong ring-1 ring-signal-strong"
                      : "border-border hover:border-foreground/40"
                  }`}
                >
                  <div
                    className="h-1.5 w-full"
                    style={{ backgroundColor: tableColors.users }}
                  />
                  <div className="p-2">
                    <div className="flex items-center justify-between pb-1 mb-1 border-b border-border font-semibold text-foreground">
                      <span>users</span>
                      <span className="text-[9px] text-muted-foreground">1:N</span>
                    </div>
                    <div className="space-y-0.5">
                      <div className="flex justify-between">
                        <span className="flex items-center gap-1 text-foreground">
                          <Key className="w-2.5 h-2.5 text-amber-500" /> id
                        </span>
                        <span className="text-muted-foreground">int [pk]</span>
                      </div>
                      <div className="flex justify-between text-foreground">
                        <span>email</span>
                        <span className="text-muted-foreground">varchar NN</span>
                      </div>
                      {activePatch.table === "users" && (
                        <div className="flex justify-between bg-signal-soft text-signal px-1 -mx-1 font-semibold">
                          <span>+{activePatch.colName}</span>
                          <span>varchar</span>
                        </div>
                      )}
                    </div>
                  </div>
                </button>

                <div className="font-mono text-[10px] text-muted-foreground bg-card/90 border border-border px-2.5 py-1.5 rounded">
                  <div>Sugiyama + layout::route (r = 8.0px)</div>
                  <div className="text-foreground">
                    1:1 across Desktop, Web CLI &amp; VS Code
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Canvas Bar (Zoom Pill + Hint from canvas-claro.png) */}
            <div className="flex items-center justify-between pt-2 border-t border-border/60 font-mono text-[10px] text-muted-foreground tabular-nums">
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded border border-border bg-card text-foreground">
                <button
                  type="button"
                  onClick={() => setZoomLevel((z) => Math.max(40, z - 10))}
                  aria-label="Zoom out"
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="px-1 font-semibold">{zoomLevel}%</span>
                <button
                  type="button"
                  onClick={() => setZoomLevel((z) => Math.min(120, z + 10))}
                  aria-label="Zoom in"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>
              <span className="hidden sm:inline">
                5 tables &middot; 5 relations &middot; Zoom {zoomLevel}%
              </span>
            </div>
          </div>

          {/* Pane 4: Right Inspector Panel (`Ctrl+I` — Table Color Palette & Shortcuts) */}
          <div className="lg:col-span-2 bg-card/60 p-3 font-mono text-[11px] flex flex-col justify-between">
            {selectedTable ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-border pb-2">
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                      Inspector (Ctrl+I)
                    </div>
                    <div className="text-xs font-bold text-foreground font-sans mt-0.5">
                      Table: {selectedTable}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedTable(null)}
                    className="p-1 rounded hover:bg-secondary text-muted-foreground hover:text-foreground"
                    title="Deselect (Escape)"
                    aria-label="Clear table selection"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Official 8-Color Palette from crates/dbml-wasm */}
                <div className="space-y-1.5">
                  <div className="text-[10px] text-muted-foreground">
                    Header Color (SetTableColor)
                  </div>
                  <div className="grid grid-cols-4 gap-1.5">
                    {TABLE_COLORS.map((c) => (
                      <button
                        key={c.hex}
                        type="button"
                        onClick={() => handleSetColor(selectedTable, c.hex)}
                        className={`h-5 rounded-sm border transition-transform ${
                          tableColors[selectedTable] === c.hex
                            ? "border-foreground scale-105"
                            : "border-transparent opacity-80 hover:opacity-100"
                        }`}
                        style={{ backgroundColor: c.hex }}
                        title={`Set ${selectedTable} color to ${c.name} (${c.hex})`}
                        aria-label={`Set color ${c.name}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Quick Semantic Actions */}
                <div className="space-y-1.5 pt-2 border-t border-border">
                  <div className="text-[10px] text-muted-foreground">
                    Semantic Actions (dbml-edit)
                  </div>
                  <button
                    type="button"
                    onClick={handleInjectCommand}
                    className="w-full py-1.5 px-2 rounded border border-border bg-card hover:bg-secondary text-left text-[10px] text-foreground flex items-center justify-between transition-colors"
                  >
                    <span>+ Add Column</span>
                    <span className="text-signal">Patch</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedTable(null)}
                    className="w-full py-1.5 px-2 rounded border border-border bg-card hover:bg-secondary text-left text-[10px] text-muted-foreground hover:text-foreground flex items-center justify-between transition-colors"
                  >
                    <span>View Shortcuts</span>
                    <kbd>Esc</kbd>
                  </button>
                </div>
              </div>
            ) : (
              /* Nothing Selected state — exact match to docs/img/canvas-claro.png right panel */
              <div className="space-y-3">
                <div>
                  <div className="font-sans text-xs font-bold text-foreground">
                    Nothing selected
                  </div>
                  <p className="font-sans text-[11px] text-muted-foreground mt-1 leading-relaxed">
                    Click a table to inspect columns, color, group, and
                    relations. Shift+click selects multiple.
                  </p>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-border text-[10px]">
                  {[
                    { label: "Select Tool", key: "V" },
                    { label: "Pan View", key: "H" },
                    { label: "Fit to Screen", key: "Shift+1" },
                    { label: "Auto-Layout", key: "Ctrl+L" },
                    { label: "Group Selection", key: "Ctrl+G" },
                    { label: "DBML Editor", key: "Ctrl+E" },
                    { label: "All Commands", key: "Ctrl+K" },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="flex items-center justify-between text-muted-foreground"
                    >
                      <span>{s.label}</span>
                      <kbd className="px-1.5 py-0.5 rounded bg-secondary text-foreground border border-border">
                        {s.key}
                      </kbd>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="pt-3 border-t border-border text-[10px] text-muted-foreground">
              Export: <strong className="text-foreground">PNG (2x)</strong> &amp;{" "}
              <strong className="text-foreground">SVG</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Caption Bar */}
      <div className="px-6 py-2.5 border-t border-border bg-muted/30 text-xs text-muted-foreground">
        Interactive replica of the{" "}
        <code className="font-mono text-foreground">brenoLucasN/db_modeling</code>{" "}
        workbench. Click any table to change its header color in the right
        inspector, toggle the DBML editor (<code className="font-mono">{"{}"}</code>),
        or click <strong className="text-foreground font-medium">+ Add Column</strong> in the inspector.
      </div>
    </section>
  );
}
