'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { Project } from '@/data/portfolioData';
import { 
  X, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  Calendar, 
  Layers, 
  Tag, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity animate-in fade-in"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-[#0e121d] border border-white/10 rounded-3xl shadow-2xl overflow-hidden z-10 my-8 animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 text-gray-300 hover:text-white hover:bg-black/80 border border-white/10 backdrop-blur-md transition-all hover:scale-110"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Image Header */}
        <div className="relative h-64 sm:h-80 w-full bg-[#151a28] overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e121d] via-[#0e121d]/30 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/70 via-black/30 to-transparent pointer-events-none" />
          
          {/* Top badges */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#070a12]/95 text-cyan-300 border border-cyan-400/50 backdrop-blur-md shadow-lg shadow-black/80 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              {project.category}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#070a12]/95 text-gray-200 border border-white/20 backdrop-blur-md shadow-lg shadow-black/80 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-cyan-400" />
              {project.year}
            </span>
          </div>

          {/* Title on image bottom */}
          <div className="absolute bottom-4 left-6 right-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {project.title}
            </h3>
            <p className="text-sm sm:text-base text-cyan-300 font-medium mt-1">
              {project.subtitle}
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          
          {/* Detailed Description */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-2">
              Project Architecture & Overview
            </h4>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              {project.fullDescription || project.description}
            </p>
          </div>

          {/* Key Technical Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-3 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                Key Deliverables & Features
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.highlights.map((highlight, idx) => (
                  <div 
                    key={idx} 
                    className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-start gap-2.5 text-xs sm:text-sm text-gray-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies Used */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-3 flex items-center gap-1.5">
              <Tag className="w-4 h-4" />
              Technologies & Libraries
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono font-medium text-cyan-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="p-6 bg-[#0a0d16] border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-gray-400 font-mono">
            Source repository on GitHub
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-gray-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:text-white transition-all"
            >
              <Github className="w-4 h-4" />
              <span>GitHub Code</span>
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-lg shadow-cyan-500/25 transition-all hover:scale-105"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
