'use client';

import React from 'react';
import Image from 'next/image';
import { TESTIMONIALS } from '@/data/portfolioData';
import { MessageSquareQuote, Star, Sparkles } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 relative bg-cyber-grid">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            Client Endorsements
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            What Collaborators <span className="text-gradient-cyan">Say</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400">
            Feedback from team leaders, project managers, and clients on code quality, responsiveness, and project delivery.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Quote Icon watermark */}
              <MessageSquareQuote className="absolute -bottom-2 -right-2 w-24 h-24 text-white/[0.02] pointer-events-none" />

              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-sm sm:text-base text-gray-300 italic leading-relaxed mb-6">
                  &ldquo;{t.content}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-cyan-500/30">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{t.name}</h4>
                  <p className="text-xs text-cyan-400 font-medium">
                    {t.role} {t.company && <span className="text-gray-400">@ {t.company}</span>}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
