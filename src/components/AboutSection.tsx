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
  Sparkles,
  Briefcase,
  BookOpen
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
            About My Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering Fast, Elegant & <span className="text-gradient-cyan">Scalable Web Apps</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400">
            A blend of solid computer science foundations, intensive ITI training, professional e-commerce delivery at Azzrk, and STEM teaching certification.
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
                      <Briefcase className="w-4 h-4 text-cyan-400" />
                      Current Role
                    </span>
                    <span className="font-semibold text-white">Front-End Developer @ Azzrk</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                    <span className="text-gray-400 flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-emerald-400" />
                      Degree & Grade
                    </span>
                    <span className="font-semibold text-white">B.Sc. IT (Very Good)</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                    <span className="text-gray-400 flex items-center gap-2">
                      <Award className="w-4 h-4 text-indigo-400" />
                      University
                    </span>
                    <span className="font-medium text-gray-200">Mansoura University (FCI)</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                    <span className="text-gray-400 flex items-center gap-2">
                      <Award className="w-4 h-4 text-amber-400" />
                      Intensive Track
                    </span>
                    <span className="font-medium text-cyan-300">ITI Front-End (6 Months)</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                    <span className="text-gray-400 flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-emerald-400" />
                      Instructor Cert
                    </span>
                    <span className="font-medium text-emerald-300">iSchool (STEM.org)</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                    <span className="text-gray-400 flex items-center gap-2">
                      <Mail className="w-4 h-4 text-rose-400" />
                      Email
                    </span>
                    <span className="font-mono text-xs text-gray-200">{PERSONAL_INFO.email}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={PERSONAL_INFO.resumeUrl}
                    download="Mohamed_Essam_Elfeshawy_CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 hover:text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all duration-300 hover:scale-102 group"
                  >
                    <Download className="w-4 h-4 text-cyan-400 group-hover:-translate-y-0.5 transition-transform" />
                    <span>Download CV</span>
                  </a>

                  <a
                    href="#contact"
                    className="py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:scale-102"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Get In Touch</span>
                  </a>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Narrative Story & Highlights */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p className="text-base sm:text-lg">
                I am a results-oriented <strong className="text-white font-bold">Front-End React.js Developer</strong> with 6+ months of professional experience at <strong className="text-cyan-400">Azzrk</strong>, specializing in React.js, Next.js, and modern UI architectures.
              </p>

              <p className="text-sm sm:text-base text-gray-400">
                Experienced in building scalable, high-performance web applications and customizing e-commerce platforms such as <strong className="text-white">Salla</strong> and <strong className="text-white">Zid</strong>. Skilled in REST API integration, state management (Redux Toolkit), performance optimization, and writing clean, maintainable, and reusable code.
              </p>

              <p className="text-sm sm:text-base text-gray-400">
                I graduated with a grade of <strong className="text-white">"Very Good"</strong> from the <strong className="text-white">Faculty of Computer & Information Sciences, Mansoura University</strong> (2019–2023), followed by an intensive <strong className="text-white">6-month Front-End Web Development Track at the Information Technology Institute (ITI - Mansoura Branch)</strong>. Additionally, I hold the <strong className="text-emerald-400">Computer Science Instructor Certification from iSchool</strong> (STEM.org accredited).
              </p>
            </div>

            {/* Core Values / Work Ethic */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="glass-panel p-4 rounded-xl flex items-start gap-3">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-0.5">E-Commerce & Platforms</h4>
                  <p className="text-xs text-gray-400">Salla & Zid customization, RTL layouts, WhatsApp ordering funnels.</p>
                </div>
              </div>

              <div className="glass-panel p-4 rounded-xl flex items-start gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-0.5">Modern Architecture</h4>
                  <p className="text-xs text-gray-400">React.js, Next.js App Router, TypeScript, Redux Toolkit & RTK Query.</p>
                </div>
              </div>

              <div className="glass-panel p-4 rounded-xl flex items-start gap-3">
                <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 shrink-0">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-0.5">Agile & Leadership</h4>
                  <p className="text-xs text-gray-400">Scrum sprints, Jira task tracking, Git workflows & team leadership.</p>
                </div>
              </div>

              <div className="glass-panel p-4 rounded-xl flex items-start gap-3">
                <div className="p-2 rounded-lg bg-rose-500/10 text-rose-400 shrink-0">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-0.5">STEM & CS Instruction</h4>
                  <p className="text-xs text-gray-400">Certified by iSchool & STEM.org in teaching CS fundamentals & coding.</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
