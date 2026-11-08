import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Keycap } from "@/components/ui/Keycap";
import { Separator } from "@/components/ui/separator";
import { Activity, Code, Columns, Eye, Key, Link2, Maximize2, Minus, Plus } from "lucide-react";

interface TableCardProps {
  name: string;
  color: string;
  isSelected: boolean;
  onSelect: () => void;
  columns: {
    name: string;
    type: string;
    isPk?: boolean;
    isFk?: boolean;
  }[];
}

function TableCard({ name, color, isSelected, onSelect, columns }: TableCardProps) {
  return (
    <div
      onClick={onSelect}
      className={`rounded-md border bg-card transition-all cursor-pointer shadow-sm select-none text-left ${
        isSelected
          ? "border-sky-500 ring-1 ring-sky-500/80 shadow-md"
          : "border-border hover:border-foreground/30"
      }`}
    >
      <div className="px-2.5 py-1.5 border-b border-border flex items-center justify-between bg-muted/40">
        <div className="flex items-center gap-1.5 font-mono text-xs font-semibold text-foreground">
          <span className={`w-2 h-2 rounded-sm ${color}`} />
          <span>{name}</span>
        </div>
        <span className="text-[10px] font-mono text-muted-foreground">{columns.length} cols</span>
      </div>
      <div className="p-2 font-mono text-[11px] space-y-0.5">
        {columns.map((col) => (
          <div key={col.name} className="flex items-center justify-between py-0.5">
            <span className="flex items-center gap-1 text-foreground">
              {col.isPk && <Key className="w-2.5 h-2.5 text-amber-500 flex-shrink-0" />}
              {col.isFk && <Link2 className="w-2.5 h-2.5 text-sky-500 flex-shrink-0" />}
              <span className={col.isPk ? "text-amber-500 dark:text-amber-400 font-medium" : col.isFk ? "text-sky-500 font-medium" : ""}>
                {col.name}
              </span>
            </span>
            <span className="text-muted-foreground text-[10px]">{col.type}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function AppShowcase() {
  const [selectedTable, setSelectedTable] = useState<string>("workspaces");
  const [zoomLevel, setZoomLevel] = useState<number>(100);

  return (
    <section id="showcase" className="max-w-6xl mx-auto px-4 py-12 sm:py-16">
      
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
          Two synchronized views of the exact same document.
        </h2>
        <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">
          Move a table on the visual canvas, and it generates a minimal CST patch in your DBML text. 
          Type in the editor, and the diagram updates instantly at 120 FPS.
        </p>
      </div>

      {/* Window Mockup Frame */}
      <div className="rounded-lg border border-border bg-card shadow-2xl overflow-hidden text-left transition-colors">
        
        {/* Native App Titlebar */}
        <div className="h-9 bg-muted/40 border-b border-border flex items-center justify-between px-3.5 select-none">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-border" />
              <div className="w-2.5 h-2.5 rounded-full bg-border" />
              <div className="w-2.5 h-2.5 rounded-full bg-border" />
            </div>
            <Separator orientation="vertical" className="h-3" />
            <div className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
              <span className="text-foreground font-medium">saas_architecture.dbml</span>
              <span>&bull;</span>
              <span className="text-[11px]">saved</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:flex items-center gap-1 text-[11px] font-mono text-muted-foreground">
              <Keycap>Ctrl+K</Keycap>
              <span>Palette</span>
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
              Sidecar: <code className="text-foreground font-semibold">saas_architecture.dbml.layout.json</code>
            </div>
          </div>

          {/* TAB 1: Split View */}
          <TabsContent value="split" className="m-0 focus-visible:outline-none">
            <div className="grid grid-cols-1 lg:grid-cols-12 h-[500px]">
              
              {/* Left Column: DBML CST Rowan Code Editor */}
              <div className="lg:col-span-5 p-3.5 font-mono text-xs border-b lg:border-b-0 lg:border-r border-border bg-muted/10 overflow-y-auto leading-relaxed select-text">
                <div className="text-muted-foreground/60 select-none mb-2 font-sans text-[11px]">
                  // CST Rowan: Visual canvas drag updates coordinates without modifying syntax
                </div>
                
                <div className="space-y-0.5 text-[11px]">
                  <div>
                    <span className="text-purple-600 dark:text-[#cf8e6d] font-semibold">Table</span>{" "}
                    <span className="text-sky-600 dark:text-[#64b5f6] font-semibold">users</span> {"{"}
                  </div>
                  <div className="pl-3.5">
                    <span className="text-emerald-600 dark:text-[#98c379]">id</span>{" "}
                    <span className="text-muted-foreground">bigint</span>{" "}
                    <span className="text-amber-600 dark:text-[#e5c07b]">[pk, increment]</span>
                  </div>
                  <div className="pl-3.5">
                    <span className="text-emerald-600 dark:text-[#98c379]">email</span>{" "}
                    <span className="text-muted-foreground">varchar(255)</span>{" "}
                    <span className="text-amber-600 dark:text-[#e5c07b]">[unique]</span>
                  </div>
                  <div className="pl-3.5">
                    <span className="text-emerald-600 dark:text-[#98c379]">role</span>{" "}
                    <span className="text-muted-foreground">user_role</span>{" "}
                    <span className="text-amber-600 dark:text-[#e5c07b]">[default: 'member']</span>
                  </div>
                  <div className="pl-3.5">
                    <span className="text-emerald-600 dark:text-[#98c379]">created_at</span>{" "}
                    <span className="text-muted-foreground">timestamp</span>
                  </div>
                  <div>{"}"}</div>

                  <div className="pt-2" />
                  <div>
                    <span className="text-purple-600 dark:text-[#cf8e6d] font-semibold">Table</span>{" "}
                    <span className="text-sky-600 dark:text-[#64b5f6] font-semibold">workspaces</span> {"{"}
                  </div>
                  <div className="pl-3.5">
                    <span className="text-emerald-600 dark:text-[#98c379]">id</span>{" "}
                    <span className="text-muted-foreground">uuid</span>{" "}
                    <span className="text-amber-600 dark:text-[#e5c07b]">[pk]</span>
                  </div>
                  <div className="pl-3.5">
                    <span className="text-emerald-600 dark:text-[#98c379]">owner_id</span>{" "}
                    <span className="text-muted-foreground">bigint</span>{" "}
                    <span className="text-sky-600 dark:text-sky-400">[not null]</span>
                  </div>
                  <div className="pl-3.5">
                    <span className="text-emerald-600 dark:text-[#98c379]">name</span>{" "}
                    <span className="text-muted-foreground">varchar(100)</span>
                  </div>
                  <div className="pl-3.5">
                    <span className="text-emerald-600 dark:text-[#98c379]">plan</span>{" "}
                    <span className="text-muted-foreground">plan_tier</span>{" "}
                    <span className="text-amber-600 dark:text-[#e5c07b]">[default: 'pro']</span>
                  </div>
                  <div>{"}"}</div>

                  <div className="pt-2" />
                  <div>
                    <span className="text-purple-600 dark:text-[#cf8e6d] font-semibold">Table</span>{" "}
                    <span className="text-sky-600 dark:text-[#64b5f6] font-semibold">projects</span> {"{"}
                  </div>
                  <div className="pl-3.5">
                    <span className="text-emerald-600 dark:text-[#98c379]">id</span>{" "}
                    <span className="text-muted-foreground">uuid</span>{" "}
                    <span className="text-amber-600 dark:text-[#e5c07b]">[pk]</span>
                  </div>
                  <div className="pl-3.5">
                    <span className="text-emerald-600 dark:text-[#98c379]">workspace_id</span>{" "}
                    <span className="text-muted-foreground">uuid</span>{" "}
                    <span className="text-sky-600 dark:text-sky-400">[not null]</span>
                  </div>
                  <div className="pl-3.5">
                    <span className="text-emerald-600 dark:text-[#98c379]">slug</span>{" "}
                    <span className="text-muted-foreground">varchar(80)</span>
                  </div>
                  <div className="pl-3.5">
                    <span className="text-emerald-600 dark:text-[#98c379]">is_active</span>{" "}
                    <span className="text-muted-foreground">boolean</span>
                  </div>
                  <div>{"}"}</div>

                  <div className="pt-2" />
                  <div>
                    <span className="text-purple-600 dark:text-[#cf8e6d] font-semibold">Table</span>{" "}
                    <span className="text-sky-600 dark:text-[#64b5f6] font-semibold">memberships</span> {"{"}
                  </div>
                  <div className="pl-3.5">
                    <span className="text-emerald-600 dark:text-[#98c379]">id</span>{" "}
                    <span className="text-muted-foreground">bigint</span>{" "}
                    <span className="text-amber-600 dark:text-[#e5c07b]">[pk]</span>
                  </div>
                  <div className="pl-3.5">
                    <span className="text-emerald-600 dark:text-[#98c379]">user_id</span>{" "}
                    <span className="text-muted-foreground">bigint</span>
                  </div>
                  <div className="pl-3.5">
                    <span className="text-emerald-600 dark:text-[#98c379]">workspace_id</span>{" "}
                    <span className="text-muted-foreground">uuid</span>
                  </div>
                  <div className="pl-3.5">
                    <span className="text-emerald-600 dark:text-[#98c379]">access</span>{" "}
                    <span className="text-muted-foreground">access_level</span>
                  </div>
                  <div>{"}"}</div>

                  <div className="pt-2.5 text-muted-foreground/80 space-y-0.5">
                    <div>
                      <span className="text-purple-600 dark:text-[#cf8e6d] font-semibold">Ref:</span>{" "}
                      <span className="text-sky-600 dark:text-[#64b5f6]">workspaces</span>.
                      <span className="text-emerald-600 dark:text-[#98c379]">owner_id</span> &gt;{" "}
                      <span className="text-sky-600 dark:text-[#64b5f6]">users</span>.
                      <span className="text-emerald-600 dark:text-[#98c379]">id</span>
                    </div>
                    <div>
                      <span className="text-purple-600 dark:text-[#cf8e6d] font-semibold">Ref:</span>{" "}
                      <span className="text-sky-600 dark:text-[#64b5f6]">projects</span>.
                      <span className="text-emerald-600 dark:text-[#98c379]">workspace_id</span> &gt;{" "}
                      <span className="text-sky-600 dark:text-[#64b5f6]">workspaces</span>.
                      <span className="text-emerald-600 dark:text-[#98c379]">id</span>
                    </div>
                    <div>
                      <span className="text-purple-600 dark:text-[#cf8e6d] font-semibold">Ref:</span>{" "}
                      <span className="text-sky-600 dark:text-[#64b5f6]">memberships</span>.
                      <span className="text-emerald-600 dark:text-[#98c379]">workspace_id</span> &gt;{" "}
                      <span className="text-sky-600 dark:text-[#64b5f6]">workspaces</span>.
                      <span className="text-emerald-600 dark:text-[#98c379]">id</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Visual Interactive Canvas (4 Connected Tables) */}
              <div className="lg:col-span-7 p-4 sm:p-5 flex flex-col justify-between relative bg-muted/10 overflow-hidden select-none">
                
                {/* 4 Tables in Dense, Balanced Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-auto">
                  
                  {/* Table 1: users */}
                  <TableCard
                    name="users"
                    color="bg-sky-500"
                    isSelected={selectedTable === "users"}
                    onSelect={() => setSelectedTable("users")}
                    columns={[
                      { name: "id", type: "bigint", isPk: true },
                      { name: "email", type: "varchar" },
                      { name: "role", type: "user_role" },
                      { name: "created_at", type: "timestamp" },
                    ]}
                  />

                  {/* Table 2: workspaces */}
                  <TableCard
                    name="workspaces"
                    color="bg-purple-500"
                    isSelected={selectedTable === "workspaces"}
                    onSelect={() => setSelectedTable("workspaces")}
                    columns={[
                      { name: "id", type: "uuid", isPk: true },
                      { name: "owner_id", type: "bigint", isFk: true },
                      { name: "name", type: "varchar" },
                      { name: "plan", type: "plan_tier" },
                    ]}
                  />

                  {/* Table 3: memberships */}
                  <TableCard
                    name="memberships"
                    color="bg-emerald-500"
                    isSelected={selectedTable === "memberships"}
                    onSelect={() => setSelectedTable("memberships")}
                    columns={[
                      { name: "id", type: "bigint", isPk: true },
                      { name: "user_id", type: "bigint", isFk: true },
                      { name: "workspace_id", type: "uuid", isFk: true },
                      { name: "access", type: "access_level" },
                    ]}
                  />

                  {/* Table 4: projects */}
                  <TableCard
                    name="projects"
                    color="bg-amber-500"
                    isSelected={selectedTable === "projects"}
                    onSelect={() => setSelectedTable("projects")}
                    columns={[
                      { name: "id", type: "uuid", isPk: true },
                      { name: "workspace_id", type: "uuid", isFk: true },
                      { name: "slug", type: "varchar" },
                      { name: "is_active", type: "boolean" },
                    ]}
                  />

                </div>

                {/* Canvas Floating Toolbar (Zoom Controls) */}
                <div className="flex items-center justify-between pt-2 border-t border-border/50 text-[11px] font-mono text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">&bull; 4 tables</span>
                    <span>&bull;</span>
                    <span>3 foreign keys routed</span>
                  </div>

                  <div className="flex items-center gap-1 bg-card border border-border px-1.5 py-0.5 rounded shadow-sm">
                    <button 
                      onClick={() => setZoomLevel((z) => Math.max(50, z - 10))}
                      className="p-1 hover:text-foreground transition-colors"
                      title="Zoom Out"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="px-1 text-[10px] min-w-[32px] text-center font-bold text-foreground">
                      {zoomLevel}%
                    </span>
                    <button 
                      onClick={() => setZoomLevel((z) => Math.min(150, z + 10))}
                      className="p-1 hover:text-foreground transition-colors"
                      title="Zoom In"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                    <Separator orientation="vertical" className="h-3 mx-0.5" />
                    <button 
                      onClick={() => setZoomLevel(100)}
                      className="p-1 hover:text-foreground transition-colors"
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
          <TabsContent value="canvas" className="m-0 p-8 h-[500px] flex flex-col items-center justify-center bg-muted/10 focus-visible:outline-none">
            <div className="text-center max-w-md space-y-3">
              <Badge variant="tech">GPU Accelerated Canvas</Badge>
              <h3 className="text-base font-bold text-foreground">Hardware Accelerated Pan & Zoom</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                DirectX 12 (Windows) and Vulkan (Linux) drive the canvas pipeline. Infinite zoom and smooth pan operations scale linearly even across models with 500+ relational tables.
              </p>
            </div>
          </TabsContent>

          {/* TAB 3: DBML Source Full */}
          <TabsContent value="dbml" className="m-0 p-6 h-[500px] font-mono text-xs bg-muted/10 overflow-y-auto focus-visible:outline-none">
            <div className="max-w-2xl mx-auto space-y-2 text-left">
              <div className="text-muted-foreground">// Complete Lossless DBML Document</div>
              <div className="p-4 rounded border border-border bg-card leading-relaxed">
                <pre className="font-mono text-[11px] whitespace-pre-wrap">
{`Table users {
  id bigint [pk, increment]
  email varchar(255) [unique, not null]
  role user_role [default: 'member']
  created_at timestamp
}

Table workspaces {
  id uuid [pk]
  owner_id bigint [not null]
  name varchar(100)
  plan plan_tier [default: 'pro']
}

Table projects {
  id uuid [pk]
  workspace_id uuid [not null]
  slug varchar(80)
  is_active boolean
}

Table memberships {
  id bigint [pk]
  user_id bigint
  workspace_id uuid
  access access_level
}

Ref: workspaces.owner_id > users.id
Ref: projects.workspace_id > workspaces.id
Ref: memberships.workspace_id > workspaces.id`}
                </pre>
              </div>
            </div>
          </TabsContent>

          {/* TAB 4: GPU Telemetry */}
          <TabsContent value="telemetry" className="m-0 p-6 h-[500px] flex flex-col justify-center items-center bg-muted/10 focus-visible:outline-none">
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
