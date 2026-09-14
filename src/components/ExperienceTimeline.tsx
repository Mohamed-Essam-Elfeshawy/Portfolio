'use client';

import React from 'react';
import { EXPERIENCES } from '@/data/portfolioData';
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 relative bg-[#090c15] border-t border-white/5">
      {/* Glow */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            Education & Journey
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Career Timeline & <span className="text-gradient-cyan">Credentials</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400">
            My academic degrees, professional certifications, and frontend engineering milestones.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-cyan-500/20 space-y-12">
          {EXPERIENCES.map((item, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline Dot Icon */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-10 h-10 rounded-full bg-[#090c15] border-2 border-cyan-400/80 flex items-center justify-center text-cyan-400 shadow-md shadow-cyan-500/20 group-hover:scale-110 group-hover:border-cyan-300 transition-all duration-300">
                {item.type === 'Education' ? (
                  <GraduationCap className="w-5 h-5" />
                ) : item.type === 'Certification' ? (
                  <Award className="w-5 h-5 text-emerald-400" />
                ) : (
                  <Briefcase className="w-5 h-5 text-indigo-400" />
                )}
              </div>

              {/* Timeline Content Card */}
              <div className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8 ml-2">
                
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 mb-2">
                      {item.type}
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {item.title}
                    </h3>
                    <div className="text-sm font-medium text-gray-300 mt-0.5">
                      {item.organization}
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs text-gray-400 font-mono gap-1">
                    <span className="flex items-center gap-1.5 text-cyan-400">
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

                {/* Skills tags */}
                <div className="flex flex-wrap gap-2 pt-3 border-t border-white/5">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md bg-white/5 text-[11px] font-mono text-gray-400 border border-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
