'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS, Project } from '@/data/portfolioData';
import ProjectModal from './ProjectModal';
import { 
  ExternalLink, 
  Github, 
  Search, 
  Sparkles, 
  ArrowUpRight,
  Info,
  FolderGit2
} from 'lucide-react';

const CATEGORIES = [
  'All',
  'Next.js & React',
  'Commercial & Enterprise',
  'Full-Stack & APIs',
  'UI & Interactive',
] as const;

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      const matchesCategory = 
        selectedCategory === 'All' || project.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.technologies.some(tech => tech.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="projects" className="py-24 relative bg-[#07090e] overflow-hidden">
      {/* Background glow effects */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.18, 0.08] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" 
      />
      <motion.div 
        animate={{ scale: [1, 1.25, 1], opacity: [0.08, 0.18, 0.08] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-1/4 right-10 w-96 h-96 bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            <FolderGit2 className="w-3.5 h-3.5 animate-pulse" />
            Curated Portfolio
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="text-gradient-cyan">Work &amp; Projects</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400">
            Real-world web apps, commercial production platforms, and full-stack solutions built with modern architecture.
          </p>
        </motion.div>

        {/* Filter Controls: Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 w-full md:w-auto">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className="relative px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors focus:outline-none"
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeProjectCategory"
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-xl shadow-md shadow-cyan-500/25"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className={`relative z-10 transition-colors ${
                    isActive ? 'text-white font-bold' : 'text-gray-400 hover:text-white'
                  }`}>
                    {cat}
                  </span>
                  {!isActive && (
                    <div className="absolute inset-0 bg-[#121624] border border-white/5 rounded-xl hover:border-cyan-500/30 transition-colors -z-10" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Real-time Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tech or project..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#121624] border border-white/10 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/60 transition-all"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 glass-panel rounded-3xl border border-white/5"
          >
            <p className="text-lg text-gray-400 mb-2">No projects found matching your search.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="mt-2 text-sm text-cyan-400 underline font-medium hover:text-cyan-300"
            >
              Reset filters
            </button>
          </motion.div>
        ) : (
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35 }}
                  whileHover={{ y: -6 }}
                  className="group glass-panel glass-panel-hover rounded-3xl overflow-hidden border border-white/10 flex flex-col justify-between"
                >
                  {/* Project Image & Overlay */}
                  <div className="relative h-52 sm:h-56 w-full bg-[#111625] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-top group-hover:scale-108 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f131c] via-[#0f131c]/20 to-transparent pointer-events-none" />
                    <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/70 via-black/30 to-transparent pointer-events-none" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-2 z-10">
                      <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-[#070a12]/95 text-cyan-300 border border-cyan-400/50 backdrop-blur-md shadow-lg shadow-black/80 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-[#070a12]/95 text-amber-300 border border-amber-400/60 backdrop-blur-md shadow-lg shadow-black/80 flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                          Featured
                        </span>
                      )}
                    </div>

                    {/* Quick Click-to-open button on image hover */}
                    <button
                      onClick={() => setActiveProject(project)}
                      aria-label={`View details for ${project.title}`}
                      className="absolute bottom-3 right-3 p-2 rounded-xl bg-black/60 text-white border border-white/20 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110 flex items-center gap-1.5 text-xs font-semibold"
                    >
                      <Info className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Deep Dive</span>
                    </button>
                  </div>

                  {/* Content Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-400 line-clamp-3 leading-relaxed mb-4">
                        {project.description}
                      </p>
                    </div>

                    <div>
                      {/* Tech Badges */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-[11px] font-mono text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-2 py-1 rounded-md bg-white/5 text-[11px] font-mono text-cyan-400">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>

                      {/* Card Actions Footer */}
                      <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                        <button
                          onClick={() => setActiveProject(project)}
                          className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 py-1 transition-colors"
                        >
                          <span>Case Details</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>

                        <div className="flex items-center gap-2">
                          <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub Repository"
                            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition-colors"
                          >
                            <Github className="w-4 h-4" />
                          </motion.a>

                          {project.liveUrl && (
                            <motion.a
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-sm shadow-cyan-500/20 transition-all"
                            >
                              <span>Live</span>
                              <ExternalLink className="w-3 h-3" />
                            </motion.a>
                          )}
                        </div>
                      </div>
                    </div>

                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* GitHub Repositories Banner Link */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl glass-panel border border-cyan-500/20">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
                <Github className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="text-sm font-bold text-white">Want to explore all 25+ open-source repositories?</div>
                <div className="text-xs text-gray-400">Visit my active GitHub profile for all source codes and commits.</div>
              </div>
            </div>
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href="https://github.com/Mohamed-Essam-Elfeshawy?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-md shadow-cyan-500/20 flex items-center gap-2"
            >
              <span>Explore All on GitHub</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </motion.a>
          </div>
        </motion.div>

      </div>

      {/* Deep Dive Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
