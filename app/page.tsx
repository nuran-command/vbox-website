"use client";

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Mission from "@/components/sections/Mission";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream">
      <Navbar />
      <Hero />
      <Mission />
      {/* Other sections will go here */}
      <div className="h-screen bg-creamLight flex items-center justify-center">
        <p className="text-brownMid font-body">More sections coming soon...</p>
      </div>
    </main>
  );
}
