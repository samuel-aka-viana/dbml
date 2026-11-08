import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Keycap } from "@/components/ui/Keycap";
import { Separator } from "@/components/ui/separator";
import { Activity, Code, Columns, Eye, Key, Link2 } from "lucide-react";

export function AppShowcase() {
  const [selectedTable, setSelectedTable] = useState<string>("users");

  return (
    <section id="showcase" className="max-w-6xl mx-auto px-4 py-16 sm:py-24">
      
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
          Two synchronized views of the exact same document.
        </h2>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
          Move a table on the visual canvas, and it generates a minimal CST patch in your DBML text. 
          Type in the editor, and the diagram updates instantly at 120 FPS.
        </p>
      </div>

      {/* Window Mockup Frame */}
      <div className="rounded-lg border border-border bg-card shadow-2xl overflow-hidden text-left transition-colors">
        
        {/* Native App Titlebar */}
        <div className="h-10 bg-muted/40 border-b border-border flex items-center justify-between px-3.5 select-none">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-border" />
              <div className="w-2.5 h-2.5 rounded-full bg-border" />
              <div className="w-2.5 h-2.5 rounded-full bg-border" />
            </div>
            <Separator orientation="vertical" className="h-3.5" />
            <div className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
              <span className="text-foreground font-medium">saas_architecture.dbml</span>
              <span>&bull;</span>
              <span>saved</span>
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
          <div className="px-3.5 py-2 border-b border-border/80 bg-muted/20 flex flex-wrap items-center justify-between gap-3">
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
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
              
              {/* Left Column: DBML CST Rowan Code Editor */}
              <div className="lg:col-span-5 p-4 font-mono text-xs border-b lg:border-b-0 lg:border-r border-border bg-muted/10 overflow-x-auto leading-relaxed select-text">
                <div className="text-muted-foreground/60 select-none mb-3 font-sans text-[11px]">
                  // CST Rowan: Visual drag emits minimal AST patches here without reformatting the file
                </div>
                <div className="space-y-0.5">
                  <div>
                    <span className="text-purple-600 dark:text-[#cf8e6d] font-semibold">Table</span>{" "}
                    <span className="text-sky-600 dark:text-[#64b5f6] font-semibold">users</span> {"{"}
                  </div>
                  <div className="pl-4">
                    <span className="text-emerald-600 dark:text-[#98c379]">id</span>{" "}
                    <span className="text-muted-foreground">bigint</span>{" "}
                    <span className="text-amber-600 dark:text-[#e5c07b]">[pk, increment]</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-emerald-600 dark:text-[#98c379]">email</span>{" "}
                    <span className="text-muted-foreground">varchar(255)</span>{" "}
                    <span className="text-amber-600 dark:text-[#e5c07b]">[unique, not null]</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-emerald-600 dark:text-[#98c379]">role</span>{" "}
                    <span className="text-muted-foreground">user_role</span>{" "}
                    <span className="text-amber-600 dark:text-[#e5c07b]">[default: 'member']</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-emerald-600 dark:text-[#98c379]">created_at</span>{" "}
                    <span className="text-muted-foreground">timestamp</span>
                  </div>
                  <div>{"}"}</div>

                  <div className="pt-3" />
                  <div>
                    <span className="text-purple-600 dark:text-[#cf8e6d] font-semibold">Table</span>{" "}
                    <span className="text-sky-600 dark:text-[#64b5f6] font-semibold">workspaces</span> {"{"}
                  </div>
                  <div className="pl-4">
                    <span className="text-emerald-600 dark:text-[#98c379]">id</span>{" "}
                    <span className="text-muted-foreground">uuid</span>{" "}
                    <span className="text-amber-600 dark:text-[#e5c07b]">[pk]</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-emerald-600 dark:text-[#98c379]">owner_id</span>{" "}
                    <span className="text-muted-foreground">bigint</span>{" "}
                    <span className="text-sky-600 dark:text-sky-400">[not null]</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-emerald-600 dark:text-[#98c379]">name</span>{" "}
                    <span className="text-muted-foreground">varchar(100)</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-emerald-600 dark:text-[#98c379]">plan</span>{" "}
                    <span className="text-muted-foreground">varchar(20)</span>
                  </div>
                  <div>{"}"}</div>

                  <div className="pt-3" />
                  <div className="text-muted-foreground/80">
                    <span className="text-purple-600 dark:text-[#cf8e6d] font-semibold">Ref:</span>{" "}
                    <span className="text-sky-600 dark:text-[#64b5f6]">workspaces</span>.
                    <span className="text-emerald-600 dark:text-[#98c379]">owner_id</span> &gt;{" "}
                    <span className="text-sky-600 dark:text-[#64b5f6]">users</span>.
                    <span className="text-emerald-600 dark:text-[#98c379]">id</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Visual Interactive Canvas */}
              <div className="lg:col-span-7 p-6 flex flex-col justify-center items-center relative bg-muted/10 overflow-hidden">
                <div className="w-full max-w-sm space-y-4">
                  
                  {/* Table Card 1: users */}
                  <div 
                    onClick={() => setSelectedTable("users")}
                    className={`rounded-md border bg-card transition-all cursor-pointer shadow-md ${
                      selectedTable === "users" ? "border-sky-500 ring-1 ring-sky-500" : "border-border hover:border-foreground/30"
                    }`}
                  >
                    <div className="px-3 py-1.5 border-b border-border flex items-center justify-between bg-muted/30">
                      <div className="flex items-center gap-2 font-mono text-xs font-semibold text-foreground">
                        <span className="w-2 h-2 rounded-sm bg-sky-500" />
                        users
                      </div>
                      <Badge variant="tech" className="text-[10px] py-0 px-1.5 h-4">4 cols</Badge>
                    </div>
                    <div className="p-2.5 font-mono text-xs space-y-1">
                      <div className="flex items-center justify-between text-amber-500 dark:text-amber-400">
                        <span className="flex items-center gap-1.5 font-semibold">
                          <Key className="w-3 h-3" /> id
                        </span>
                        <span className="text-muted-foreground font-normal">bigint</span>
                      </div>
                      <div className="flex items-center justify-between text-foreground">
                        <span>email</span>
                        <span className="text-muted-foreground">varchar(255)</span>
                      </div>
                      <div className="flex items-center justify-between text-muted-foreground">
                        <span>role</span>
                        <span>user_role</span>
                      </div>
                    </div>
                  </div>

                  {/* Relationship Link Visual Connector */}
                  <div className="flex items-center justify-between px-3 text-[11px] font-mono text-muted-foreground">
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">1</span>
                    <div className="flex-1 mx-3 border-t border-dashed border-border relative flex items-center justify-center">
                      <span className="bg-card border border-border px-2 py-0.5 rounded text-[10px] flex items-center gap-1 shadow-sm">
                        <Link2 className="w-2.5 h-2.5 text-sky-500" />
                        owner_id &gt; id
                      </span>
                    </div>
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">N</span>
                  </div>

                  {/* Table Card 2: workspaces */}
                  <div 
                    onClick={() => setSelectedTable("workspaces")}
                    className={`rounded-md border bg-card transition-all cursor-pointer shadow-md ${
                      selectedTable === "workspaces" ? "border-purple-500 ring-1 ring-purple-500" : "border-border hover:border-foreground/30"
                    }`}
                  >
                    <div className="px-3 py-1.5 border-b border-border flex items-center justify-between bg-muted/30">
                      <div className="flex items-center gap-2 font-mono text-xs font-semibold text-foreground">
                        <span className="w-2 h-2 rounded-sm bg-purple-500" />
                        workspaces
                      </div>
                      <Badge variant="tech" className="text-[10px] py-0 px-1.5 h-4">4 cols</Badge>
                    </div>
                    <div className="p-2.5 font-mono text-xs space-y-1">
                      <div className="flex items-center justify-between text-amber-500 dark:text-amber-400">
                        <span className="flex items-center gap-1.5 font-semibold">
                          <Key className="w-3 h-3" /> id
                        </span>
                        <span className="text-muted-foreground font-normal">uuid</span>
                      </div>
                      <div className="flex items-center justify-between text-sky-600 dark:text-sky-400">
                        <span className="flex items-center gap-1">🔗 owner_id</span>
                        <span className="text-muted-foreground font-normal">bigint</span>
                      </div>
                      <div className="flex items-center justify-between text-foreground">
                        <span>name</span>
                        <span className="text-muted-foreground">varchar(100)</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </TabsContent>

          {/* TAB 2: Visual Canvas Full */}
          <TabsContent value="canvas" className="m-0 p-8 min-h-[460px] flex flex-col items-center justify-center bg-muted/10 focus-visible:outline-none">
            <div className="text-center max-w-md space-y-3">
              <Badge variant="tech">GPU Accelerated Canvas</Badge>
              <h3 className="text-base font-bold text-foreground">Hardware Accelerated Pan & Zoom</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                DirectX 12 (Windows) and Vulkan (Linux) drive the canvas pipeline. Infinite zoom and smooth pan operations scale linearly even across models with 500+ relational tables.
              </p>
            </div>
          </TabsContent>

          {/* TAB 3: DBML Source Full */}
          <TabsContent value="dbml" className="m-0 p-6 min-h-[460px] font-mono text-xs bg-muted/10 overflow-x-auto focus-visible:outline-none">
            <div className="max-w-2xl mx-auto space-y-2">
              <div className="text-muted-foreground">// Complete Lossless DBML Document</div>
              <div className="p-4 rounded border border-border bg-card">
                <code>
                  Table users &#123; id bigint [pk, increment] email varchar(255) [unique] created_at timestamp &#125;<br />
                  Table workspaces &#123; id uuid [pk] owner_id bigint name varchar(100) &#125;<br />
                  Ref: workspaces.owner_id &gt; users.id
                </code>
              </div>
            </div>
          </TabsContent>

          {/* TAB 4: GPU Telemetry */}
          <TabsContent value="telemetry" className="m-0 p-6 min-h-[460px] flex flex-col justify-center items-center bg-muted/10 focus-visible:outline-none">
            <div className="max-w-md w-full p-5 rounded-lg border border-border bg-card shadow-sm font-mono text-xs space-y-4">
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
