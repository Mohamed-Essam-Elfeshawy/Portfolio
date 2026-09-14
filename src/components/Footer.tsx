'use client';

import React from 'react';
import Link from 'next/link';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { 
  ArrowUp, 
  Github, 
  Linkedin, 
  Mail, 
  Heart, 
  Code2, 
  Sparkles 
} from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070a] border-t border-white/5 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-[1.5px]">
              <div className="w-full h-full bg-[#0a0d16] rounded-[10px] flex items-center justify-center">
                <Code2 className="w-4 h-4 text-cyan-400" />
              </div>
            </div>
            <div>
              <span className="font-bold text-base text-white">{PERSONAL_INFO.name}</span>
              <p className="text-xs text-gray-400 font-mono">Frontend Engineer &amp; Next.js Specialist</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-medium text-gray-400">
            <Link href="#home" className="hover:text-cyan-400 transition-colors">Home</Link>
            <Link href="#about" className="hover:text-cyan-400 transition-colors">About</Link>
            <Link href="#skills" className="hover:text-cyan-400 transition-colors">Skills</Link>
            <Link href="#projects" className="hover:text-cyan-400 transition-colors">Projects</Link>
            <Link href="#experience" className="hover:text-cyan-400 transition-colors">Experience</Link>
            <Link href="#contact" className="hover:text-cyan-400 transition-colors">Contact</Link>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.githubProfile}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedinProfile}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-cyan-400 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              aria-label="Email"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-emerald-400 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p className="flex items-center gap-1">
            Built with Next.js 14, React &amp; Tailwind CSS
          </p>

          <p className="text-center sm:text-right">
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-cyan-400 border border-white/5 transition-all hover:scale-105"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
