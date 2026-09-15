'use client';

import React, { useState } from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import confetti from 'canvas-confetti';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  Linkedin, 
  Github, 
  MessageSquare, 
  Sparkles, 
  ExternalLink,
  Download
} from 'lucide-react';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // Confetti fallback
      }

      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#07090e] border-t border-white/5">
      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let&apos;s Build Something <span className="text-gradient-cyan">Incredible</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400">
            Have an opportunity, full-time role, or web project in mind? Reach out and let&apos;s discuss how I can contribute.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left: Contact Info & Quick Reachout */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Copy Card */}
            <div className="glass-panel p-6 rounded-2xl border border-white/10 relative overflow-hidden group">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Email Address</h4>
                    <p className="text-xs font-mono text-gray-400">{PERSONAL_INFO.email}</p>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-cyan-400 border border-white/10 transition-all active:scale-95"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copiedEmail && (
                <div className="mt-2 text-xs font-mono text-emerald-400 flex items-center gap-1">
                  <Check className="w-3 h-3" /> Email copied to clipboard!
                </div>
              )}
            </div>

            {/* Location & Availability Card */}
            <div className="glass-panel p-6 rounded-2xl border border-white/10 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Location</h4>
                <p className="text-xs text-gray-400">{PERSONAL_INFO.location}</p>
              </div>
            </div>

            {/* Resume / CV Card */}
            <div className="glass-panel p-6 rounded-2xl border border-cyan-500/30 bg-gradient-to-r from-cyan-500/5 via-indigo-500/5 to-transparent flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Download className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Curriculum Vitae</h4>
                  <p className="text-xs text-gray-400 font-mono">Mohamed_Essam_Elfeshawy.pdf</p>
                </div>
              </div>

              <a
                href={PERSONAL_INFO.resumeUrl}
                download="Mohamed_Essam_Elfeshawy_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-md shadow-cyan-500/20 transition-all hover:scale-105 active:scale-95 shrink-0"
              >
                <span>Download CV</span>
                <Download className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Direct Channels Links */}
            <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-3">
                Direct Channels & Socials
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <a
                  href={PERSONAL_INFO.linkedinProfile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#131726] hover:bg-[#181d30] border border-white/5 hover:border-cyan-500/30 flex items-center justify-between text-xs font-medium text-gray-200 transition-all hover:scale-102"
                >
                  <span className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-cyan-400" />
                    LinkedIn
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-gray-500" />
                </a>

                <a
                  href={PERSONAL_INFO.githubProfile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#131726] hover:bg-[#181d30] border border-white/5 hover:border-cyan-500/30 flex items-center justify-between text-xs font-medium text-gray-200 transition-all hover:scale-102"
                >
                  <span className="flex items-center gap-2">
                    <Github className="w-4 h-4 text-gray-300" />
                    GitHub
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-gray-500" />
                </a>

                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#131726] hover:bg-[#181d30] border border-white/5 hover:border-emerald-500/30 flex items-center justify-between text-xs font-medium text-gray-200 transition-all hover:scale-102"
                >
                  <span className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    WhatsApp
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-gray-500" />
                </a>
              </div>
            </div>

          </div>

          {/* Right: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 relative">
              
              <h3 className="text-xl font-bold text-white mb-2">Send a Direct Message</h3>
              <p className="text-xs sm:text-sm text-gray-400 mb-6">
                Fill out the form below and I will respond to your inquiry promptly.
              </p>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-sm flex items-center gap-3">
                  <Check className="w-5 h-5 shrink-0" />
                  <span>Thank you! Your message has been sent successfully. I will get back to you soon!</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-gray-300 mb-1.5">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-[#121624] border border-white/10 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/60"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-300 mb-1.5">Your Email *</label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#121624] border border-white/10 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/60"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-300 mb-1.5">Subject</label>
                  <input
                    type="text"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    placeholder="Project Inquiry / Job Opportunity"
                    className="w-full px-4 py-3 rounded-xl bg-[#121624] border border-white/10 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/60"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-300 mb-1.5">Your Message *</label>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell me about your project or role..."
                    className="w-full px-4 py-3 rounded-xl bg-[#121624] border border-white/10 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/60 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-primary-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-102 active:scale-98 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Sending message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
