'use client';

import React from 'react';
import Image from 'next/image';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { 
  GraduationCap, 
  Award, 
  MapPin, 
  Mail, 
  Phone, 
  Calendar,
  CheckCircle,
  ExternalLink,
  Download,
  Sparkles
} from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative bg-[#090c15] border-t border-b border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            About My Journey
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering Fast, Elegant & <span className="text-gradient-cyan">Scalable Web Apps</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400">
            A blend of academic rigor, intensive industry certification, and proven real-world frontend delivery.
          </p>
        </div>

        {/* About Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Visual Bio Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl p-1 bg-gradient-to-b from-cyan-500/30 via-indigo-500/20 to-transparent shadow-2xl">
              <div className="glass-panel rounded-[22px] p-6 sm:p-8 relative overflow-hidden">
                
                <div className="flex items-center gap-5 mb-6">
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-cyan-500/40 shadow-lg shrink-0">
                    <Image
                      src={PERSONAL_INFO.avatar}
                      alt={PERSONAL_INFO.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{PERSONAL_INFO.name}</h3>
                    <p className="text-sm text-cyan-400 font-medium">{PERSONAL_INFO.title}</p>
                    <p className="text-xs text-gray-400 flex items-center gap-1.5 mt-1">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                      {PERSONAL_INFO.location}
                    </p>
                  </div>
                </div>

                <div className="space-y-3.5 text-sm text-gray-300 border-t border-white/5 pt-5 mb-6">
                  <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                    <span className="text-gray-400 flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-cyan-400" />
                      Degree
                    </span>
                    <span className="font-semibold text-white">B.Sc. Info Tech (2023)</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                    <span className="text-gray-400 flex items-center gap-2">
                      <Award className="w-4 h-4 text-emerald-400" />
                      Faculty
                    </span>
                    <span className="font-medium text-gray-200">Mansoura University FCI</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                    <span className="text-gray-400 flex items-center gap-2">
                      <Award className="w-4 h-4 text-indigo-400" />
                      Intensive Track
                    </span>
                    <span className="font-medium text-cyan-300">ITI Front-End (4 Months)</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                    <span className="text-gray-400 flex items-center gap-2">
                      <Mail className="w-4 h-4 text-rose-400" />
                      Email
                    </span>
                    <span className="font-mono text-xs text-gray-200">{PERSONAL_INFO.email}</span>
                  </div>
                </div>

                <a
                  href="#contact"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 transition-all duration-300"
                >
                  <Mail className="w-4 h-4" />
                  <span>Get In Touch With Me</span>
                </a>

              </div>
            </div>
          </div>

          {/* Right Column: Narrative Story & Highlights */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p className="text-base sm:text-lg">
                I am a dedicated <strong className="text-white font-bold">Front-End Developer</strong> specializing in 
                <strong className="text-cyan-400"> React.js</strong>, <strong className="text-cyan-400">Next.js</strong>, and 
                <strong className="text-cyan-400"> TypeScript</strong>. My passion lies in engineering responsive, highly performant, and user-centric web applications that solve real-world problems.
              </p>

              <p className="text-sm sm:text-base text-gray-400">
                In 2023, I graduated with a Bachelor&apos;s degree in Information Technology from <strong>Mansoura University (Faculty of Computers and Information)</strong>. To elevate my industry skills to top standards, I completed an intensive 4-month Front-End Track at the prestigious <strong>Information Technology Institute (ITI)</strong>.
              </p>

              <p className="text-sm sm:text-base text-gray-400">
                Over the past years, I have architected and deployed diverse production platforms including the commercial <span className="text-white font-medium">FUJI Elevators KSA</span> corporate platform, <span className="text-white font-medium">FreshCart V2</span> Next.js e-commerce app, <span className="text-white font-medium">TABLYA Food Marketplace</span>, and enterprise <span className="text-white font-medium">HR Attendance Systems</span>.
              </p>
            </div>

            {/* Core Values / Work Ethic */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="glass-panel p-4 rounded-xl flex items-start gap-3">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-0.5">Modern Tech Stack</h4>
                  <p className="text-xs text-gray-400">Next.js App Router, React 18/19, TypeScript & TailwindCSS.</p>
                </div>
              </div>

              <div className="glass-panel p-4 rounded-xl flex items-start gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-0.5">State & Architecture</h4>
                  <p className="text-xs text-gray-400">Redux Toolkit, RTK Query caching & strict typing.</p>
                </div>
              </div>

              <div className="glass-panel p-4 rounded-xl flex items-start gap-3">
                <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 shrink-0">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-0.5">Pixel-Perfect UI</h4>
                  <p className="text-xs text-gray-400">Fluid animations, micro-interactions & accessibility.</p>
                </div>
              </div>

              <div className="glass-panel p-4 rounded-xl flex items-start gap-3">
                <div className="p-2 rounded-lg bg-rose-500/10 text-rose-400 shrink-0">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-0.5">Performance & SEO</h4>
                  <p className="text-xs text-gray-400">Fast Lighthouse scores, SSR/SSG & Vercel deployment.</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
