import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { AppShowcase } from "@/components/sections/AppShowcase";
import { GpuiArchitecture } from "@/components/sections/GpuiArchitecture";
import { OpenSourceHub } from "@/components/sections/OpenSourceHub";
import { Footer } from "@/components/layout/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-200">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <AppShowcase />
        <GpuiArchitecture />
        <OpenSourceHub />
      </main>
      <Footer />
    </div>
  );
}
