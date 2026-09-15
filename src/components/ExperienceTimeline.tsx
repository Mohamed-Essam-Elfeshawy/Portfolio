'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EXPERIENCES } from '@/data/portfolioData';
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  Sparkles,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';

const FILTER_TABS = [
  { label: 'All Journey', type: 'All' },
  { label: 'Work Experience', type: 'Experience' },
  { label: 'Licenses & Certifications', type: 'Certification' },
  { label: 'Education', type: 'Education' },
];

export default function ExperienceTimeline() {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filteredItems = activeFilter === 'All'
    ? EXPERIENCES
    : EXPERIENCES.filter((item) => item.type === activeFilter);

  return (
    <section id="experience" className="py-24 relative bg-[#090c15] border-t border-white/5 overflow-hidden">
      {/* Glow Ambient Effects */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.18, 0.08] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 right-0 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" 
      />
      <motion.div 
        animate={{ scale: [1, 1.25, 1], opacity: [0.08, 0.18, 0.08] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            <Award className="w-3.5 h-3.5 animate-pulse" />
            Experience &amp; Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Career Timeline &amp; <span className="text-gradient-cyan">Certifications</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400">
            Professional software experience at Azzrk, certified computer science teaching (iSchool), ITI intensive training, and academic degrees.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-14">
          {FILTER_TABS.map((tab) => {
            const isActive = activeFilter === tab.type;
            return (
              <button
                key={tab.type}
                onClick={() => setActiveFilter(tab.type)}
                className="relative px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors focus:outline-none"
              >
                {isActive && (
                  <motion.div
                    layoutId="activeExperienceTab"
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-xl shadow-lg shadow-cyan-500/25"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className={`relative z-10 transition-colors ${
                  isActive ? 'text-white font-bold' : 'text-gray-400 hover:text-white'
                }`}>
                  {tab.label}
                </span>
                {!isActive && (
                  <div className="absolute inset-0 bg-[#121624] border border-white/5 rounded-xl hover:border-cyan-500/30 transition-colors -z-10" />
                )}
              </button>
            );
          })}
        </div>

        {/* Timeline List */}
        <motion.div 
          layout
          className="relative pl-6 sm:pl-8 border-l-2 border-cyan-500/20 space-y-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                layout
                key={item.title + item.period}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
                className="relative group"
              >
                
                {/* Timeline Dot Icon */}
                <motion.div 
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-10 h-10 rounded-full bg-[#090c15] border-2 border-cyan-400/80 flex items-center justify-center text-cyan-400 shadow-md shadow-cyan-500/20 group-hover:border-cyan-300 transition-colors duration-300 cursor-pointer"
                >
                  {item.type === 'Education' ? (
                    <GraduationCap className="w-5 h-5 text-amber-400" />
                  ) : item.type === 'Certification' ? (
                    <Award className="w-5 h-5 text-emerald-400" />
                  ) : (
                    <Briefcase className="w-5 h-5 text-cyan-400" />
                  )}
                </motion.div>

                {/* Timeline Content Card */}
                <motion.div 
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8 ml-2 relative"
                >
                  
                  {/* Header row */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className={`inline-block px-3 py-1 rounded-full text-[11px] font-mono font-semibold border ${
                          item.type === 'Experience'
                            ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30'
                            : item.type === 'Certification'
                            ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
                            : 'bg-amber-500/10 text-amber-300 border-amber-500/30'
                        }`}>
                          {item.type}
                        </span>

                        {item.badge && (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-white/5 text-gray-300 border border-white/10 flex items-center gap-1">
                            <ShieldCheck className="w-3 h-3 text-cyan-400" />
                            {item.badge}
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {item.title}
                      </h3>
                      <div className="text-sm font-semibold text-cyan-300 mt-1">
                        {item.organization}
                      </div>
                    </div>

                    <div className="flex flex-col sm:items-end text-xs text-gray-400 font-mono gap-1 shrink-0">
                      <span className="flex items-center gap-1.5 text-cyan-400 font-medium">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-gray-500" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-300 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Key Achievements */}
                  {item.achievements && item.achievements.length > 0 && (
                    <div className="space-y-2 mb-5">
                      {item.achievements.map((achievement, aIdx) => (
                        <div key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Footer with Skills tags and Credential Link */}
                  <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill) => (
                        <motion.span
                          key={skill}
                          whileHover={{ scale: 1.06 }}
                          className="px-2.5 py-1 rounded-md bg-white/5 text-[11px] font-mono text-gray-400 border border-white/5 hover:text-cyan-300 hover:border-cyan-500/20 transition-colors cursor-pointer"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>

                    {item.credentialUrl && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={item.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-cyan-300 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 transition-all shrink-0 self-start sm:self-auto"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                        <span>Verify Credential</span>
                        <ExternalLink className="w-3 h-3 text-cyan-400" />
                      </motion.a>
                    )}
                  </div>

                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
