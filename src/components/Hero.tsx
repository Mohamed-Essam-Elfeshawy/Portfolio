'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
import { PERSONAL_INFO, STATS, PARTNERS_LOGOS } from '@/data/portfolioData';
import { 
  ArrowRight, 
  Github, 
  Linkedin, 
  Download, 
  Sparkles, 
  CheckCircle2, 
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

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
  },
};

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
      
      {/* Background Animated Ambient Glowing Orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 30, 0],
          y: [0, -20, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-cyan-600/25 via-primary-600/20 to-violet-600/15 rounded-full blur-[140px] pointer-events-none -z-10" 
      />
      
      <motion.div 
        animate={{ 
          scale: [1, 1.25, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -25, 0],
          y: [0, 25, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-1/3 right-10 w-[380px] h-[380px] bg-indigo-600/20 rounded-full blur-[110px] pointer-events-none -z-10" 
      />
      
      <motion.div 
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.3, 0.15]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-emerald-600/15 rounded-full blur-[110px] pointer-events-none -z-10" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            
            {/* Status Badge */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-md mb-6 shadow-sm shadow-cyan-500/10 cursor-default"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-cyan-300">
                Available for Roles &amp; Commercial Projects
              </span>
            </motion.div>

            {/* Main Headline & Typewriter */}
            <motion.h1 
              variants={itemVariants}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-4"
            >
              Hi, I&apos;m{' '}
              <span className="block mt-2 text-gradient-cyan min-h-[1.25em]">
                {displayedText}
                <span className="inline-block w-1 h-[0.9em] bg-cyan-400 ml-1 animate-pulse align-middle" />
              </span>
            </motion.h1>

            {/* Sub-headline & Description */}
            <motion.p 
              variants={itemVariants}
              className="text-lg sm:text-xl text-gray-300 font-medium mb-3"
            >
              Front-End Developer at <span className="text-cyan-400 font-semibold">Azzrk</span> specializing in <span className="text-cyan-400 font-semibold">React.js</span>, <span className="text-cyan-400 font-semibold">Salla &amp; Zid</span>, and <span className="text-cyan-400 font-semibold">Next.js</span>.
            </motion.p>

            <motion.p 
              variants={itemVariants}
              className="text-sm sm:text-base text-gray-400 max-w-2xl leading-relaxed mb-8"
            >
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-semibold shadow-sm shadow-cyan-500/10 mr-1.5">
                1+ Year Professional Experience
              </span>
              at <strong className="text-white font-semibold">Azzrk</strong> delivering scalable e-commerce platforms. Mansoura University IT graduate (<span className="text-emerald-400 font-medium">Grade: Very Good</span>, 2023), <strong className="text-white font-medium">ITI 6-Month Front-End Web Development Track</strong> certified, and accredited Computer Science Instructor by <strong className="text-white font-medium">iSchool &amp; STEM.org</strong>.
            </motion.p>

            {/* CTA Action Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 mb-10 w-full sm:w-auto"
            >
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 via-primary-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 group"
              >
                <span>View Featured Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={PERSONAL_INFO.resumeUrl}
                download="Mohamed_Essam_Elfeshawy_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-cyan-300 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 hover:border-cyan-400 shadow-sm shadow-cyan-500/10 transition-all duration-300 group"
              >
                <Download className="w-4 h-4 text-cyan-400 group-hover:-translate-y-1 transition-transform" />
                <span>Download CV</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="#experience"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl font-semibold text-gray-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/40 hover:text-white transition-all duration-300"
              >
                <Award className="w-4 h-4 text-emerald-400" />
                <span>Certifications</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={PERSONAL_INFO.linkedinProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl font-medium text-gray-300 bg-white/5 hover:bg-white/10 border border-white/10 hover:text-cyan-400 transition-all duration-200"
              >
                <Linkedin className="w-4 h-4 text-cyan-400" />
                <span className="text-sm">LinkedIn</span>
              </motion.a>
            </motion.div>

            {/* Quick Feature Pills */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs text-gray-400 font-mono"
            >
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5 border border-white/5 hover:border-cyan-500/20 transition-colors">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Salla &amp; Zid Customization
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5 border border-white/5 hover:border-cyan-500/20 transition-colors">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                React.js &amp; Next.js
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5 border border-white/5 hover:border-cyan-500/20 transition-colors">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                Agile &amp; Jira Workflows
              </span>
            </motion.div>
          </motion.div>

          {/* Right Hero Graphic / Profile Avatar */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
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
                    className="object-contain object-[center_30%] scale-110 hover:scale-115 transition-transform duration-700"
                    priority
                  />
                </div>
              </div>

              {/* Floating Badge 1: React & E-Commerce */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                whileHover={{ scale: 1.1 }}
                className="absolute -top-3 -left-4 sm:-left-6 px-4 py-2.5 rounded-2xl bg-[#0e1320]/90 border border-cyan-500/30 backdrop-blur-md shadow-xl flex items-center gap-2.5 cursor-pointer"
              >
                <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400">
                  <ShoppingBag className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-400 uppercase font-mono">Specialty</div>
                  <div className="text-xs font-bold text-white">React &amp; E-Commerce</div>
                </div>
              </motion.div>

              {/* Floating Badge 2: ITI & iSchool STEM */}
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                whileHover={{ scale: 1.1 }}
                className="absolute -bottom-4 -right-4 sm:-right-6 px-4 py-2.5 rounded-2xl bg-[#0e1320]/90 border border-emerald-500/30 backdrop-blur-md shadow-xl flex items-center gap-2.5 cursor-pointer"
              >
                <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-400 uppercase font-mono">Certified</div>
                  <div className="text-xs font-bold text-white">ITI &amp; iSchool STEM</div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>

        {/* Quick Stats Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 sm:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="glass-panel glass-panel-hover p-5 sm:p-6 rounded-2xl flex flex-col items-center justify-center text-center cursor-default"
            >
              <div className="text-2xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 mb-1">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-xs sm:text-sm text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Worked With / Tech Brands Banner */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 sm:mt-20 text-center"
        >
          <p className="text-xs uppercase tracking-widest text-gray-500 font-mono mb-6">
            E-Commerce &amp; Technology Ecosystem
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
            {PARTNERS_LOGOS.map((partner, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.08, y: -2 }}
                className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center hover:border-cyan-500/30 transition-all duration-300 cursor-pointer"
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
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>

      {/* Down Scroll Arrow Indicator */}
      <div className="flex justify-center mt-12">
        <motion.a 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          href="#about" 
          aria-label="Scroll to About section" 
          className="p-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-cyan-400 transition-colors"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.a>
      </div>
    </section>
  );
}
