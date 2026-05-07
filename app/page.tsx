"use client";

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Mission from "@/components/sections/Mission";
import WhyItMatters from "@/components/sections/WhyItMatters";
import Achievements from "@/components/sections/Achievements";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream">
      <Navbar />
      <Hero />
      <Mission />
      <WhyItMatters />
      <Achievements />
    </main>
  );
}
