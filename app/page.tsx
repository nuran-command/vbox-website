"use client";

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Mission from "@/components/sections/Mission";
import WhyItMatters from "@/components/sections/WhyItMatters";
import Achievements from "@/components/sections/Achievements";
import Micromarket from "@/components/sections/Micromarket";
import Clients from "@/components/sections/Clients";
import Team from "@/components/sections/Team";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream">
      <Navbar />
      <Hero />
      <Mission />
      <WhyItMatters />
      <Achievements />
      <Micromarket />
      <Clients />
      <Team />
    </main>
  );
}
