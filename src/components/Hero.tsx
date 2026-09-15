'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { PERSONAL_INFO, STATS, PARTNERS_LOGOS } from '@/data/portfolioData';
import { 
  ArrowRight, 
  Github, 
  Linkedin, 
  Download, 
  Sparkles, 
  CheckCircle2, 
  Code, 
  Layers, 
  Terminal,
  ExternalLink,
  ChevronDown,
  ShoppingBag,
  Award
} from 'lucide-react';

const TYPED_TITLES = [
  'Mohamed Essam Elfeshawy',
  'Front-End React.js Developer',
  'Azzrk E-Commerce (Salla & Zid)',
  'Next.js & TypeScript Architect',
  'ITI 6-Month Track Graduate',
  'Certified CS Instructor (iSchool)',
];

export default function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const fullText = TYPED_TITLES[currentTextIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
        if (displayedText.length + 1 === fullText.length) {
          setIsDeleting(true);
          setTypingSpeed(2200); // Pause at end of text
        } else {
          setTypingSpeed(75);
        }
      } else {
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % TYPED_TITLES.length);
          setTypingSpeed(300);
        } else {
          setTypingSpeed(40);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTextIndex, typingSpeed]);

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-cyber-grid">
      {/* Background Glowing Ambient Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-cyan-600/20 via-primary-600/15 to-violet-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-indigo-600/15 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-emerald-600/10 rounded-full blur-[110px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-md mb-6 shadow-sm shadow-cyan-500/10">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-cyan-300">
                Available for Roles & Commercial Projects
              </span>
            </div>

            {/* Main Headline & Typewriter */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-4">
              Hi, I&apos;m{' '}
              <span className="block mt-2 text-gradient-cyan min-h-[1.25em]">
                {displayedText}
                <span className="inline-block w-1 h-[0.9em] bg-cyan-400 ml-1 animate-pulse align-middle" />
              </span>
            </h1>

            {/* Sub-headline & Description */}
            <p className="text-lg sm:text-xl text-gray-300 font-medium mb-3">
              Front-End Developer at <span className="text-cyan-400 font-semibold">Azzrk</span> specializing in <span className="text-cyan-400 font-semibold">React.js</span>, <span className="text-cyan-400 font-semibold">Salla & Zid</span>, and <span className="text-cyan-400 font-semibold">Next.js</span>.
            </p>

            <p className="text-sm sm:text-base text-gray-400 max-w-2xl leading-relaxed mb-8">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-semibold shadow-sm shadow-cyan-500/10 mr-1.5">
                1+ Year Professional Experience
              </span>
              at <strong className="text-white font-semibold">Azzrk</strong> delivering scalable e-commerce platforms. Mansoura University IT graduate (<span className="text-emerald-400 font-medium">Grade: Very Good</span>, 2023), <strong className="text-white font-medium">ITI 6-Month Front-End Web Development Track</strong> certified, and accredited Computer Science Instructor by <strong className="text-white font-medium">iSchool &amp; STEM.org</strong>.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 via-primary-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105 active:scale-95 group"
              >
                <span>View Featured Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#experience"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-gray-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/40 hover:text-white transition-all duration-300 hover:scale-105"
              >
                <span>Certifications & Career</span>
                <Award className="w-4 h-4 text-emerald-400" />
              </a>

              <a
                href={PERSONAL_INFO.linkedinProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl font-medium text-gray-300 bg-white/5 hover:bg-white/10 border border-white/10 hover:text-cyan-400 transition-all duration-200"
              >
                <Linkedin className="w-4 h-4 text-cyan-400" />
                <span className="text-sm">LinkedIn</span>
              </a>
            </div>

            {/* Quick Feature Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs text-gray-400 font-mono">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5 border border-white/5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Salla & Zid Customization
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5 border border-white/5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                React.js & Next.js
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5 border border-white/5">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                Agile & Jira Workflows
              </span>
            </div>
          </div>

          {/* Right Hero Graphic / Profile Avatar */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="relative w-72 h-72 sm:w-88 sm:h-88 lg:w-96 lg:h-96">
              
              {/* Outer Glowing Rotating Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500 via-indigo-500 to-emerald-500 p-[3px] animate-spin-slow opacity-80 blur-[2px]" />
              
              {/* Profile Card Container */}
              <div className="absolute inset-1 rounded-full bg-[#0d111b] p-3 shadow-2xl flex items-center justify-center overflow-hidden">
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/10">
                  <Image
                    src={PERSONAL_INFO.avatar}
                    alt={PERSONAL_INFO.name}
                    fill
                    sizes="(max-width: 768px) 300px, 400px"
                    className="object-contain  object-center scale-105 hover:scale-110 transition-transform duration-700"
                    priority
                  />
                </div>
              </div>

              {/* Floating Badge 1: React & E-Commerce */}
              <div className="absolute -top-3 -left-4 sm:-left-6 px-4 py-2.5 rounded-2xl bg-[#0e1320]/90 border border-cyan-500/30 backdrop-blur-md shadow-xl flex items-center gap-2.5 animate-float">
                <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400">
                  <ShoppingBag className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-400 uppercase font-mono">Specialty</div>
                  <div className="text-xs font-bold text-white">React & E-Commerce</div>
                </div>
              </div>

              {/* Floating Badge 2: ITI & iSchool STEM */}
              <div className="absolute -bottom-4 -right-4 sm:-right-6 px-4 py-2.5 rounded-2xl bg-[#0e1320]/90 border border-emerald-500/30 backdrop-blur-md shadow-xl flex items-center gap-2.5 animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-400 uppercase font-mono">Certified</div>
                  <div className="text-xs font-bold text-white">ITI & iSchool STEM</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Quick Stats Grid */}
        <div className="mt-16 sm:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover p-5 sm:p-6 rounded-2xl flex flex-col items-center justify-center text-center"
            >
              <div className="text-2xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 mb-1">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-xs sm:text-sm text-gray-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Worked With / Tech Brands Banner */}
        <div className="mt-16 sm:mt-20 text-center">
          <p className="text-xs uppercase tracking-widest text-gray-500 font-mono mb-6">
            E-Commerce & Technology Ecosystem
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
            {PARTNERS_LOGOS.map((partner, idx) => (
              <div
                key={idx}
                className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="relative w-20 h-7 flex items-center justify-center">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    width={80}
                    height={28}
                    className="max-h-6 w-auto object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Down Scroll Arrow Indicator */}
      <div className="flex justify-center mt-12">
        <a 
          href="#about" 
          aria-label="Scroll to About section" 
          className="p-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-cyan-400 transition-colors animate-bounce"
        >
          <ChevronDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
