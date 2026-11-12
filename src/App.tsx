import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { ProblemSplit } from "@/components/sections/ProblemSplit";
import { AppShowcase } from "@/components/sections/AppShowcase";
import { GpuiArchitecture } from "@/components/sections/GpuiArchitecture";
import { OpenSourceHub } from "@/components/sections/OpenSourceHub";
import { Footer } from "@/components/layout/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-150">
      <Navbar />
      <main className="flex-1 w-full max-w-6xl mx-auto border-x border-border bg-background">
        <Hero />
        <ProblemSplit />
        <AppShowcase />
        <GpuiArchitecture />
        <OpenSourceHub />
      </main>
      <Footer />
    </div>
  );
}
