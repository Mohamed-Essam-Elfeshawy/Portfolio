'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SKILL_CATEGORIES } from '@/data/portfolioData';
import { 
  Code2, 
  Database, 
  Palette, 
  Wrench, 
  Cpu,
  ShoppingBag,
  Users,
  Languages,
  CheckCircle2
} from 'lucide-react';

const ICON_MAP: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-5 h-5" />,
  Database: <Database className="w-5 h-5" />,
  Palette: <Palette className="w-5 h-5" />,
  Wrench: <Wrench className="w-5 h-5" />,
  ShoppingBag: <ShoppingBag className="w-5 h-5" />,
};

const SOFT_SKILLS = [
  'Team Leadership & Mentoring',
  'Agile Mindset & Scrum (Jira, Sprint)',
  'Problem Solving & Analytical Thinking',
  'Cross-functional Team Collaboration',
  'Effective Communication',
  'Time Management & Deadline Ownership',
  'Continuous Learning & Tech Adaptation',
  'Creativity & Clean UI Craftsmanship',
];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', ...SKILL_CATEGORIES.map(c => c.category)];

  const filteredCategories = activeCategory === 'All' 
    ? SKILL_CATEGORIES 
    : SKILL_CATEGORIES.filter(c => c.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative bg-cyber-grid overflow-hidden">
      {/* Glow Orbs */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 right-0 w-80 h-80 bg-indigo-600/15 rounded-full blur-[130px] pointer-events-none" 
      />
      <motion.div 
        animate={{ scale: [1, 1.25, 1], opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-600/15 rounded-full blur-[130px] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            <Cpu className="w-3.5 h-3.5 animate-pulse" />
            Skills &amp; Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical Stack &amp; <span className="text-gradient-cyan">Expertise</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400">
            A comprehensive overview of my frontend engineering toolkit, e-commerce customization (Salla &amp; Zid), state architectures, and agile methodologies.
          </p>
        </motion.div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="relative px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors focus:outline-none"
              >
                {isActive && (
                  <motion.div
                    layoutId="activeSkillCategory"
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-xl shadow-lg shadow-cyan-500/25"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className={`relative z-10 transition-colors ${
                  isActive ? 'text-white font-bold' : 'text-gray-400 hover:text-white'
                }`}>
                  {cat}
                </span>
                {!isActive && (
                  <div className="absolute inset-0 bg-[#111522] border border-white/5 rounded-xl hover:border-cyan-500/30 transition-colors -z-10" />
                )}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((group) => (
              <motion.div
                layout
                key={group.category}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
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
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                          className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-primary-500 to-indigo-500 group-hover/item:brightness-125"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Soft Skills & Languages Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          
          {/* Soft Skills Card (2 cols) */}
          <div className="lg:col-span-2 glass-panel rounded-2xl p-6 sm:p-8 border border-white/5">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Soft Skills &amp; Professional Leadership</h3>
                <span className="text-xs text-gray-400 font-mono">Agile methodology, team management &amp; execution</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {SOFT_SKILLS.map((skill, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ x: 4, scale: 1.01 }}
                  className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-xs sm:text-sm text-gray-300 hover:border-cyan-500/30 transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{skill}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Languages Card (1 col) */}
          <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  <Languages className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Languages</h3>
                  <span className="text-xs text-gray-400 font-mono">Communication proficiency</span>
                </div>
              </div>

              <div className="space-y-4">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between"
                >
                  <div>
                    <div className="text-sm font-bold text-white">Arabic</div>
                    <div className="text-xs text-gray-400">Native Tongue</div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Native
                  </span>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between"
                >
                  <div>
                    <div className="text-sm font-bold text-white">English</div>
                    <div className="text-xs text-gray-400">Professional Working Proficiency</div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    Intermediate
                  </span>
                </motion.div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 text-xs text-gray-400 text-center font-mono">
              Ready for international &amp; distributed teams
            </div>
          </div>

        </motion.div>

        {/* Additional Tech Chips / Quick Cloud */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 glass-panel rounded-2xl p-6 sm:p-8 text-center border border-white/5"
        >
          <p className="text-xs uppercase tracking-widest text-gray-400 font-mono mb-4">
            Full Toolset &amp; Daily Stack
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {[
              'Salla E-Commerce', 'Zid Platform', 'React.js', 'Next.js 14/15', 'TypeScript', 
              'Redux Toolkit', 'RTK Query', 'TailwindCSS', 'Bootstrap 5', 'Material UI', 
              'ES6+ JavaScript', 'HTML5 Semantic', 'CSS3 Animations', 'SASS', 'REST APIs', 
              'Axios', 'Git / GitHub', 'Jira & Agile', 'Vercel Deployment', 'Netlify', 
              'Postman', 'Figma to Code', 'Responsive Web Design', 'SEO Optimization', 'OpenAI API'
            ].map((tool) => (
              <motion.span
                key={tool}
                whileHover={{ scale: 1.08, y: -2 }}
                className="px-3.5 py-1.5 rounded-lg bg-[#141926] border border-white/10 text-xs font-medium text-gray-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors cursor-pointer"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
