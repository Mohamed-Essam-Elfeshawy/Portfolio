'use client';

import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '@/data/portfolioData';
import { 
  Code2, 
  Database, 
  Palette, 
  Wrench, 
  Sparkles, 
  Check, 
  Cpu
} from 'lucide-react';

const ICON_MAP: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-5 h-5" />,
  Database: <Database className="w-5 h-5" />,
  Palette: <Palette className="w-5 h-5" />,
  Wrench: <Wrench className="w-5 h-5" />,
};

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', ...SKILL_CATEGORIES.map(c => c.category)];

  const filteredCategories = activeCategory === 'All' 
    ? SKILL_CATEGORIES 
    : SKILL_CATEGORIES.filter(c => c.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative bg-cyber-grid">
      {/* Glow Orbs */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            <Cpu className="w-3.5 h-3.5" />
            Skills & Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical Stack & <span className="text-gradient-cyan">Expertise</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400">
            A comprehensive suite of modern web technologies, state architecture, and UI engineering tools I use daily.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/25 scale-105'
                    : 'bg-[#111522] text-gray-400 hover:text-white border border-white/5 hover:border-cyan-500/30'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((group) => (
            <div
              key={group.category}
              className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8 relative overflow-hidden"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-white/10">
                <div className="p-2.5 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-indigo-500/20 text-cyan-400 border border-cyan-500/30">
                  {ICON_MAP[group.icon] || <Code2 className="w-5 h-5" />}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{group.category}</h3>
                  <span className="text-xs text-gray-400 font-mono">{group.skills.length} core technologies</span>
                </div>
              </div>

              {/* Skills Progress List */}
              <div className="space-y-4">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="group/item">
                    <div className="flex justify-between items-center text-sm mb-1.5">
                      <span className="font-medium text-gray-200 group-hover/item:text-cyan-300 transition-colors">
                        {skill.name}
                      </span>
                      <div className="flex items-center gap-2">
                        {skill.badge && (
                          <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-semibold bg-white/5 text-cyan-400 border border-cyan-500/20">
                            {skill.badge}
                          </span>
                        )}
                        <span className="font-mono text-xs text-gray-400">{skill.level}%</span>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-2 rounded-full bg-[#161c2a] overflow-hidden p-[1px]">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-primary-500 to-indigo-500 transition-all duration-1000 group-hover/item:brightness-125"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Tech Chips / Quick Cloud */}
        <div className="mt-14 glass-panel rounded-2xl p-6 sm:p-8 text-center border border-white/5">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-mono mb-4">
            Additional Tools & Daily Workflow
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {[
              'Next.js 14/15', 'React 18/19', 'TypeScript', 'Redux Toolkit', 'RTK Query', 
              'TailwindCSS', 'Bootstrap 5', 'Material UI', 'ES6+ JavaScript', 'HTML5 Semantic', 
              'CSS3 Animations', 'PWA', 'REST APIs', 'Axios', 'Git / GitHub', 'Vercel Deployment', 
              'Netlify', 'Postman', 'Figma to Code', 'Responsive Web Design', 'SEO Optimization'
            ].map((tool) => (
              <span
                key={tool}
                className="px-3.5 py-1.5 rounded-lg bg-[#141926] border border-white/10 text-xs font-medium text-gray-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all hover:scale-105"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
