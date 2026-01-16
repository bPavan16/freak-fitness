"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProofSection } from "@/components/ProofSection";
import { ProgramsSection } from "@/components/ProgramsSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ApplicationForm } from "@/components/ApplicationForm";
import { StickyCta } from "@/components/StickyCta";
import { Footer } from "@/components/Footer";
import { GallerySection } from "@/components/GallerySection";
import { LocationSection } from "@/components/LocationSection";

export default function FreakFitnessPage() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar onNavigate={scrollToSection} />
      <Hero onNavigate={scrollToSection} />
      <LocationSection />
      <GallerySection />
      <ProgramsSection onNavigate={scrollToSection} />
      <ProcessSection />
      <ProofSection />
      <ApplicationForm />
      <Footer />
      <StickyCta onNavigate={scrollToSection} />
    </div>
  );
}
