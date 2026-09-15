import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-[#07090e] text-white flex flex-col">
      {/* Sticky Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About & Education Bio */}
      <AboutSection />

      {/* Technical Skills & Frameworks */}
      <SkillsSection />

      {/* Featured Projects & Case Studies */}
      <ProjectsSection />

      {/* Experience & Timeline */}
      <ExperienceTimeline />

      {/* Interactive Contact & Reachout */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
