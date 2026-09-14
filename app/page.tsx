"use client";

import { ArrowRight } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import LogoStrip from "@/components/LogoStrip";
import NarrativeSection from "@/components/NarrativeSection";

export default function Home() {
  return (
    <div className="w-full bg-[#F3EFE9] min-h-screen">
      <HeroSection />
      <LogoStrip />
      <NarrativeSection />
    </div>
  );
}
