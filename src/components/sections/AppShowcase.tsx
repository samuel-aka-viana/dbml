import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Keycap } from "@/components/ui/Keycap";
import { Separator } from "@/components/ui/separator";
import { Activity, Code, Columns, Eye, Key, Link2, Maximize2, Minus, Plus } from "lucide-react";

export function AppShowcase() {
  const [selectedTable, setSelectedTable] = useState<string>("orders");
  const [zoomLevel, setZoomLevel] = useState<number>(55);

  return (
    <section id="showcase" className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
      
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
          Two synchronized views of the exact same document.
        </h2>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          Move a table on the visual canvas, and it generates a minimal CST patch in your DBML text. 
          Type in the editor, and the diagram updates instantly at 120 FPS.
        </p>
      </div>

      {/* Window Mockup Frame */}
      <div className="rounded-lg border border-border bg-card shadow-2xl overflow-hidden text-left transition-colors">
        
        {/* Native App Titlebar com Botões Coloridos */}
        <div className="h-9 bg-muted/40 border-b border-border flex items-center justify-between px-3.5 select-none">
          <div className="flex items-center gap-3">
            {/* Color Window Controls (Red, Yellow, Green) */}
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]/80 shadow-sm" title="Close" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]/80 shadow-sm" title="Minimize" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]/80 shadow-sm" title="Maximize" />
            </div>
            <Separator orientation="vertical" className="h-3.5" />
            <div className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
              <span className="text-foreground font-medium">exemplo.dbml</span>
              <span>&bull;</span>
              <span className="text-[11px]">saved</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:flex items-center gap-1 text-[11px] font-mono text-muted-foreground">
              <Keycap>Ctrl+K</Keycap>
              <span>Command Palette</span>
            </span>
            <Badge variant="mint" className="text-[10px] font-mono gap-1 py-0 px-2 h-5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              120 FPS GPUI
            </Badge>
          </div>
        </div>

        {/* View Tabs Controller */}
        <Tabs defaultValue="split" className="w-full">
          <div className="px-3.5 py-1.5 border-b border-border/80 bg-muted/20 flex flex-wrap items-center justify-between gap-2">
            <TabsList className="h-7 bg-muted/60 p-0.5 rounded border border-border/60">
              <TabsTrigger value="split" className="text-xs h-6 px-2.5 gap-1.5 font-medium data-[state=active]:bg-card">
                <Columns className="w-3 h-3" />
                <span>Split View</span>
              </TabsTrigger>
              <TabsTrigger value="canvas" className="text-xs h-6 px-2.5 gap-1.5 font-medium data-[state=active]:bg-card">
                <Eye className="w-3 h-3" />
                <span>Visual Canvas</span>
              </TabsTrigger>
              <TabsTrigger value="dbml" className="text-xs h-6 px-2.5 gap-1.5 font-medium data-[state=active]:bg-card">
                <Code className="w-3 h-3" />
                <span>DBML Source</span>
              </TabsTrigger>
              <TabsTrigger value="telemetry" className="text-xs h-6 px-2.5 gap-1.5 font-medium data-[state=active]:bg-card">
                <Activity className="w-3 h-3" />
                <span>GPU Telemetry</span>
              </TabsTrigger>
            </TabsList>

            <div className="text-[11px] font-mono text-muted-foreground hidden md:block">
              Sidecar: <code className="text-foreground font-semibold">exemplo.dbml.layout.json</code>
            </div>
          </div>

          {/* TAB 1: Split View (Compacto e sem vácuo desnecessário) */}
          <TabsContent value="split" className="m-0 focus-visible:outline-none">
            <div className="grid grid-cols-1 lg:grid-cols-12 h-[410px]">
              
              {/* Left Column: DBML Editor com Numeração de Linhas Real */}
              <div className="lg:col-span-5 p-2.5 font-mono text-xs border-b lg:border-b-0 lg:border-r border-border bg-muted/10 overflow-y-auto leading-relaxed select-text flex">
                
                {/* Line numbers column */}
                <div className="w-6 flex-shrink-0 select-none text-[11px] text-muted-foreground/40 text-right pr-2 space-y-0.5 border-r border-border/30">
                  {Array.from({ length: 47 }, (_, i) => (
                    <div key={i + 1}>{i + 1}</div>
                  ))}
                </div>

                {/* DBML Code content */}
                <div className="pl-2.5 space-y-0.5 text-[11px] flex-1">
                  <div className="text-muted-foreground/60">// Exemplo: e-commerce simples</div>
                  <div>
                    <span className="text-blue-500 font-semibold">Table</span>{" "}
                    <span className="text-purple-400 font-semibold">users</span>{" "}
                    <span className="text-muted-foreground/80">[headercolor: #8b5cf6]</span> {"{"}
                  </div>
                  <div className="pl-3.5">
                    <span className="text-foreground">id</span>{" "}
                    <span className="text-purple-400">int</span>{" "}
                    <span className="text-sky-400">[pk]</span>
                  </div>
                  <div className="pl-3.5">
                    <span className="text-foreground">email</span>{" "}
                    <span className="text-purple-400">varchar(255)</span>{" "}
                    <span className="text-sky-400">[unique, not null]</span>
                  </div>
                  <div className="pl-3.5">
                    <span className="text-foreground">name</span>{" "}
                    <span className="text-purple-400">text</span>
                  </div>
                  <div className="pl-3.5">
                    <span className="text-foreground">created_at</span>{" "}
                    <span className="text-purple-400">timestamp</span>
                  </div>
                  <div>{"}"}</div>

                  <div className="h-1" />
                  <div>
                    <span className="text-blue-500 font-semibold">Table</span>{" "}
                    <span className="text-purple-400 font-semibold">products</span> {"{"}
                  </div>
                  <div className="pl-3.5">
                    <span className="text-foreground">id</span>{" "}
                    <span className="text-purple-400">int</span>{" "}
                    <span className="text-sky-400">[pk]</span>
                  </div>
                  <div className="pl-3.5">
                    <span className="text-foreground">title</span>{" "}
                    <span className="text-purple-400">varchar(200)</span>{" "}
                    <span className="text-sky-400">[not null]</span>
                  </div>
                  <div className="pl-3.5">
                    <span className="text-foreground">price</span>{" "}
                    <span className="text-purple-400">decimal(10,2)</span>
                  </div>
                  <div className="pl-3.5">
                    <span className="text-foreground">stock</span>{" "}
                    <span className="text-purple-400">int</span>
                  </div>
                  <div>{"}"}</div>

                  <div className="h-1" />
                  <div>
                    <span className="text-blue-500 font-semibold">Table</span>{" "}
                    <span className="text-purple-400 font-semibold">orders</span> {"{"}
                  </div>
                  <div className="pl-3.5">
                    <span className="text-foreground">id</span>{" "}
                    <span className="text-purple-400">int</span>{" "}
                    <span className="text-sky-400">[pk]</span>
                  </div>
                  <div className="pl-3.5">
                    <span className="text-foreground">user_id</span>{" "}
                    <span className="text-purple-400">int</span>{" "}
                    <span className="text-sky-400">[ref: &gt; users.id, not null]</span>
                  </div>
                  <div className="pl-3.5">
                    <span className="text-foreground">status</span>{" "}
                    <span className="text-purple-400">varchar(20)</span>
                  </div>
                  <div className="pl-3.5">
                    <span className="text-foreground">placed_at</span>{" "}
                    <span className="text-purple-400">timestamp</span>
                  </div>
                  <div>{"}"}</div>

                  <div className="h-1" />
                  <div>
                    <span className="text-blue-500 font-semibold">Table</span>{" "}
                    <span className="text-purple-400 font-semibold">order_items</span> {"{"}
                  </div>
                  <div className="pl-3.5">
                    <span className="text-foreground">id</span>{" "}
                    <span className="text-purple-400">int</span>{" "}
                    <span className="text-sky-400">[pk]</span>
                  </div>
                  <div className="pl-3.5">
                    <span className="text-foreground">order_id</span>{" "}
                    <span className="text-purple-400">int</span>{" "}
                    <span className="text-sky-400">[ref: &gt; orders.id]</span>
                  </div>
                  <div className="pl-3.5">
                    <span className="text-foreground">product_id</span>{" "}
                    <span className="text-purple-400">int</span>{" "}
                    <span className="text-sky-400">[ref: &gt; products.id]</span>
                  </div>
                  <div className="pl-3.5">
                    <span className="text-foreground">quantity</span>{" "}
                    <span className="text-purple-400">int</span>
                  </div>
                  <div>{"}"}</div>

                  <div className="h-1" />
                  <div>
                    <span className="text-blue-500 font-semibold">Table</span>{" "}
                    <span className="text-purple-400 font-semibold">reviews</span> {"{"}
                  </div>
                  <div className="pl-3.5">
                    <span className="text-foreground">id</span>{" "}
                    <span className="text-purple-400">int</span>{" "}
                    <span className="text-sky-400">[pk]</span>
                  </div>
                  <div className="pl-3.5">
                    <span className="text-foreground">product_id</span>{" "}
                    <span className="text-purple-400">int</span>
                  </div>
                  <div className="pl-3.5">
                    <span className="text-foreground">user_id</span>{" "}
                    <span className="text-purple-400">int</span>
                  </div>
                  <div className="pl-3.5">
                    <span className="text-foreground">rating</span>{" "}
                    <span className="text-purple-400">int</span>
                  </div>
                  <div>{"}"}</div>

                  <div className="h-1" />
                  <div>
                    <span className="text-blue-500 font-semibold">Ref:</span>{" "}
                    <span className="text-foreground">reviews.product_id &gt; products.id</span>
                  </div>
                  <div>
                    <span className="text-blue-500 font-semibold">Ref:</span>{" "}
                    <span className="text-foreground">reviews.user_id &gt; users.id</span>
                  </div>

                  <div className="h-1" />
                  <div>
                    <span className="text-blue-500 font-semibold">TableGroup</span>{" "}
                    <span className="text-foreground">vendas</span>{" "}
                    <span className="text-muted-foreground/80">[color: #3b82f6]</span> {"{"}
                  </div>
                  <div className="pl-3.5 text-foreground">orders</div>
                  <div className="pl-3.5 text-foreground">order_items</div>
                  <div>{"}"}</div>

                  <div className="h-1" />
                  <div>
                    <span className="text-blue-500 font-semibold">TableGroup</span>{" "}
                    <span className="text-foreground">catalogo</span>{" "}
                    <span className="text-muted-foreground/80">[color: #22c55e]</span> {"{"}
                  </div>
                  <div className="pl-3.5 text-foreground">products</div>
                  <div className="pl-3.5 text-foreground">reviews</div>
                  <div>{"}"}</div>
                </div>
              </div>

              {/* Right Column: Visual Interactive Canvas bem proporcional */}
              <div className="lg:col-span-7 p-3 sm:p-4 flex flex-col justify-between relative bg-muted/10 overflow-hidden select-none">
                
                {/* Canvas Diagram Container */}
                <div className="relative my-auto w-full">
                  
                  {/* Conexões ortogonais SVG precisas */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible">
                    {/* orders.user_id -> users.id */}
                    <path
                      d="M 85 110 L 85 140 L 70 140"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.25"
                      className="text-foreground/40"
                    />
                    {/* order_items.product_id -> products.id */}
                    <path
                      d="M 180 75 L 215 75"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.25"
                      className="text-foreground/40"
                    />
                    {/* reviews.user_id -> users.id */}
                    <path
                      d="M 345 110 L 345 170 L 175 170"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.25"
                      className="text-foreground/30"
                      strokeDasharray="3 2"
                    />
                  </svg>

                  {/* Top Row: Grupos "vendas" e "catalogo" */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 relative z-20">
                    
                    {/* TableGroup 1: vendas (Azul) */}
                    <div className="p-2 rounded-lg border border-blue-500/30 bg-blue-500/[0.03] space-y-1.5">
                      <div className="flex items-center gap-1.5 text-[10px] font-mono text-blue-500 font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        <span>vendas</span>
                        <span className="text-muted-foreground/70">2</span>
                      </div>

                      <div className="grid grid-cols-2 gap-1.5">
                        {/* Table: orders */}
                        <div 
                          onClick={() => setSelectedTable("orders")}
                          className={`rounded border bg-card p-1.5 text-[10px] font-mono transition-all cursor-pointer shadow-sm ${
                            selectedTable === "orders" ? "border-blue-500 ring-1 ring-blue-500/80" : "border-border hover:border-foreground/30"
                          }`}
                        >
                          <div className="flex items-center justify-between pb-1 mb-1 border-b border-border/50 font-semibold text-foreground">
                            <span className="flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-sm bg-blue-500" /> orders
                            </span>
                            <span className="text-[9px] text-muted-foreground">4</span>
                          </div>
                          <div className="space-y-0.5">
                            <div className="flex justify-between text-amber-500 font-medium">
                              <span className="flex items-center gap-0.5"><Key className="w-2 h-2" /> id</span>
                              <span className="text-muted-foreground text-[9px]">int</span>
                            </div>
                            <div className="flex justify-between text-sky-500 font-medium">
                              <span className="flex items-center gap-0.5"><Link2 className="w-2 h-2" /> user_id</span>
                              <span className="text-muted-foreground text-[9px]">int NN</span>
                            </div>
                            <div className="flex justify-between text-foreground">
                              <span>status</span>
                              <span className="text-muted-foreground text-[9px]">varchar</span>
                            </div>
                            <div className="flex justify-between text-muted-foreground">
                              <span>placed_at</span>
                              <span className="text-[9px]">time</span>
                            </div>
                          </div>
                        </div>

                        {/* Table: order_items */}
                        <div 
                          onClick={() => setSelectedTable("order_items")}
                          className={`rounded border bg-card p-1.5 text-[10px] font-mono transition-all cursor-pointer shadow-sm ${
                            selectedTable === "order_items" ? "border-blue-500 ring-1 ring-blue-500/80" : "border-border hover:border-foreground/30"
                          }`}
                        >
                          <div className="flex items-center justify-between pb-1 mb-1 border-b border-border/50 font-semibold text-foreground">
                            <span className="flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-sm bg-blue-500" /> order_items
                            </span>
                            <span className="text-[9px] text-muted-foreground">4</span>
                          </div>
                          <div className="space-y-0.5">
                            <div className="flex justify-between text-amber-500 font-medium">
                              <span className="flex items-center gap-0.5"><Key className="w-2 h-2" /> id</span>
                              <span className="text-muted-foreground text-[9px]">int</span>
                            </div>
                            <div className="flex justify-between text-sky-500 font-medium">
                              <span className="flex items-center gap-0.5"><Link2 className="w-2 h-2" /> order_id</span>
                              <span className="text-muted-foreground text-[9px]">int</span>
                            </div>
                            <div className="flex justify-between text-sky-500 font-medium">
                              <span className="flex items-center gap-0.5"><Link2 className="w-2 h-2" /> product_id</span>
                              <span className="text-muted-foreground text-[9px]">int</span>
                            </div>
                            <div className="flex justify-between text-foreground">
                              <span>quantity</span>
                              <span className="text-muted-foreground text-[9px]">int</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* TableGroup 2: catalogo (Verde) */}
                    <div className="p-2 rounded-lg border border-emerald-500/30 bg-emerald-500/[0.03] space-y-1.5">
                      <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-500 font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        <span>catalogo</span>
                        <span className="text-muted-foreground/70">2</span>
                      </div>

                      <div className="grid grid-cols-2 gap-1.5">
                        {/* Table: products */}
                        <div 
                          onClick={() => setSelectedTable("products")}
                          className={`rounded border bg-card p-1.5 text-[10px] font-mono transition-all cursor-pointer shadow-sm ${
                            selectedTable === "products" ? "border-emerald-500 ring-1 ring-emerald-500/80" : "border-border hover:border-foreground/30"
                          }`}
                        >
                          <div className="flex items-center justify-between pb-1 mb-1 border-b border-border/50 font-semibold text-foreground">
                            <span className="flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-sm bg-emerald-500" /> products
                            </span>
                            <span className="text-[9px] text-muted-foreground">4</span>
                          </div>
                          <div className="space-y-0.5">
                            <div className="flex justify-between text-amber-500 font-medium">
                              <span className="flex items-center gap-0.5"><Key className="w-2 h-2" /> id</span>
                              <span className="text-muted-foreground text-[9px]">int</span>
                            </div>
                            <div className="flex justify-between text-foreground">
                              <span>title</span>
                              <span className="text-muted-foreground text-[9px]">varchar</span>
                            </div>
                            <div className="flex justify-between text-foreground">
                              <span>price</span>
                              <span className="text-muted-foreground text-[9px]">decimal</span>
                            </div>
                            <div className="flex justify-between text-muted-foreground">
                              <span>stock</span>
                              <span className="text-[9px]">int</span>
                            </div>
                          </div>
                        </div>

                        {/* Table: reviews */}
                        <div 
                          onClick={() => setSelectedTable("reviews")}
                          className={`rounded border bg-card p-1.5 text-[10px] font-mono transition-all cursor-pointer shadow-sm ${
                            selectedTable === "reviews" ? "border-emerald-500 ring-1 ring-emerald-500/80" : "border-border hover:border-foreground/30"
                          }`}
                        >
                          <div className="flex items-center justify-between pb-1 mb-1 border-b border-border/50 font-semibold text-foreground">
                            <span className="flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-sm bg-emerald-500" /> reviews
                            </span>
                            <span className="text-[9px] text-muted-foreground">4</span>
                          </div>
                          <div className="space-y-0.5">
                            <div className="flex justify-between text-amber-500 font-medium">
                              <span className="flex items-center gap-0.5"><Key className="w-2 h-2" /> id</span>
                              <span className="text-muted-foreground text-[9px]">int</span>
                            </div>
                            <div className="flex justify-between text-sky-500 font-medium">
                              <span className="flex items-center gap-0.5"><Link2 className="w-2 h-2" /> product_id</span>
                              <span className="text-muted-foreground text-[9px]">int</span>
                            </div>
                            <div className="flex justify-between text-sky-500 font-medium">
                              <span className="flex items-center gap-0.5"><Link2 className="w-2 h-2" /> user_id</span>
                              <span className="text-muted-foreground text-[9px]">int</span>
                            </div>
                            <div className="flex justify-between text-foreground">
                              <span>rating</span>
                              <span className="text-muted-foreground text-[9px]">int</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Bottom Row: Tabela users */}
                  <div className="mt-3 flex justify-start relative z-20">
                    <div 
                      onClick={() => setSelectedTable("users")}
                      className={`w-full sm:w-[210px] rounded border bg-card p-1.5 text-[10px] font-mono transition-all cursor-pointer shadow-sm ${
                        selectedTable === "users" ? "border-purple-500 ring-1 ring-purple-500/80" : "border-border hover:border-foreground/30"
                      }`}
                    >
                      <div className="flex items-center justify-between pb-1 mb-1 border-b border-purple-500/30 bg-purple-500/10 -mx-1.5 -mt-1.5 p-1 rounded-t font-semibold text-purple-400">
                        <span className="flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-sm bg-purple-500" /> users
                        </span>
                        <span className="text-[9px] text-purple-300">4</span>
                      </div>
                      <div className="space-y-0.5 pt-0.5">
                        <div className="flex justify-between text-amber-500 font-medium">
                          <span className="flex items-center gap-0.5"><Key className="w-2 h-2" /> id</span>
                          <span className="text-muted-foreground text-[9px]">int</span>
                        </div>
                        <div className="flex justify-between text-foreground">
                          <span>email</span>
                          <span className="text-muted-foreground text-[9px]">varchar(255) NN</span>
                        </div>
                        <div className="flex justify-between text-foreground">
                          <span>name</span>
                          <span className="text-muted-foreground text-[9px]">text</span>
                        </div>
                        <div className="flex justify-between text-muted-foreground">
                          <span>created_at</span>
                          <span className="text-[9px]">timestamp</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Canvas Floating Toolbar com Controles Reais do DB Modeling */}
                <div className="flex items-center justify-between pt-1.5 border-t border-border/50 text-[11px] font-mono text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">&bull; 5 tables</span>
                    <span>&bull;</span>
                    <span>2 groups</span>
                    <span>&bull;</span>
                    <span>4 relations</span>
                  </div>

                  <div className="flex items-center gap-1 bg-card border border-border px-1.5 py-0.5 rounded shadow-sm">
                    <button 
                      onClick={() => setZoomLevel((z) => Math.max(30, z - 10))}
                      className="p-0.5 hover:text-foreground transition-colors"
                      title="Zoom Out"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="px-1 text-[10px] min-w-[30px] text-center font-bold text-foreground">
                      {zoomLevel}%
                    </span>
                    <button 
                      onClick={() => setZoomLevel((z) => Math.min(150, z + 10))}
                      className="p-0.5 hover:text-foreground transition-colors"
                      title="Zoom In"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                    <Separator orientation="vertical" className="h-3 mx-0.5" />
                    <button 
                      onClick={() => setZoomLevel(55)}
                      className="p-0.5 hover:text-foreground transition-colors"
                      title="Fit to Screen"
                    >
                      <Maximize2 className="w-3 h-3" />
                    </button>
                  </div>
                </div>

              </div>

            </div>
          </TabsContent>

          {/* TAB 2: Visual Canvas Full */}
          <TabsContent value="canvas" className="m-0 p-8 h-[410px] flex flex-col items-center justify-center bg-muted/10 focus-visible:outline-none">
            <div className="text-center max-w-md space-y-3">
              <Badge variant="tech">GPU Accelerated Canvas</Badge>
              <h3 className="text-base font-bold text-foreground">Hardware Accelerated Pan & Zoom</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                DirectX 12 (Windows) and Vulkan (Linux) drive the canvas pipeline. Infinite zoom and smooth pan operations scale linearly even across models with 500+ relational tables.
              </p>
            </div>
          </TabsContent>

          {/* TAB 3: DBML Source Full */}
          <TabsContent value="dbml" className="m-0 p-5 h-[410px] font-mono text-xs bg-muted/10 overflow-y-auto focus-visible:outline-none">
            <div className="max-w-2xl mx-auto space-y-2 text-left">
              <div className="text-muted-foreground">// Complete Lossless DBML Document (exemplo.dbml)</div>
              <div className="p-3.5 rounded border border-border bg-card leading-relaxed">
                <pre className="font-mono text-[11px] whitespace-pre-wrap">
{`// Exemplo: e-commerce simples
Table users [headercolor: #8b5cf6] {
  id int [pk]
  email varchar(255) [unique, not null]
  name text
  created_at timestamp
}

Table products {
  id int [pk]
  title varchar(200) [not null]
  price decimal(10,2)
  stock int
}

Table orders {
  id int [pk]
  user_id int [ref: > users.id, not null]
  status varchar(20)
  placed_at timestamp
}

Table order_items {
  id int [pk]
  order_id int [ref: > orders.id]
  product_id int [ref: > products.id]
  quantity int
}

Table reviews {
  id int [pk]
  product_id int
  user_id int
  rating int
}

Ref: reviews.product_id > products.id
Ref: reviews.user_id > users.id

TableGroup vendas [color: #3b82f6] {
  orders
  order_items
}

TableGroup catalogo [color: #22c55e] {
  products
  reviews
}`}
                </pre>
              </div>
            </div>
          </TabsContent>

          {/* TAB 4: GPU Telemetry */}
          <TabsContent value="telemetry" className="m-0 p-6 h-[410px] flex flex-col justify-center items-center bg-muted/10 focus-visible:outline-none">
            <div className="max-w-md w-full p-5 rounded-lg border border-border bg-card shadow-sm font-mono text-xs space-y-4 text-left">
              <div className="flex items-center justify-between border-b border-border pb-3">
                <span className="text-foreground font-semibold">Engine Pipeline</span>
                <Badge variant="mint">Active (120 FPS)</Badge>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Frame Rendering Time:</span>
                  <span className="text-emerald-500 font-bold">~8.2 ms (120 Hz)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Working Set RAM:</span>
                  <span className="text-foreground font-bold">48.2 MB</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Garbage Collection Pauses:</span>
                  <span className="text-emerald-500 font-bold">0 ms (Rust Ownership)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">CST Parser Overhead:</span>
                  <span className="text-foreground font-bold">&lt; 1.4 ms (Rowan)</span>
                </div>
              </div>
            </div>
          </TabsContent>

        </Tabs>

      </div>
    </section>
  );
}
