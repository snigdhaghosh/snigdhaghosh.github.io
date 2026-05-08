import React from 'react';
import { Mail, Linkedin, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative pt-32 pb-20 px-6 overflow-hidden"
      style={{ backgroundColor: '#134B42' }}
    >
      {/* Curved divider at the top to separate Projects from Contact */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{ transform: 'translateY(-1px)' }}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-full h-[80px] md:h-[120px]"
        >
          <path
            d="M0,0 C320,90 720,110 1080,70 C1240,50 1360,30 1440,15 L1440,0 L0,0 Z"
            fill="#F0EBE0"
          />
        </svg>
      </div>

      {/* Soft glow orbs */}
      <div
        className="absolute -top-20 -left-20 w-96 h-96 rounded-full opacity-20 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(118,128,100,0.6) 0%, rgba(118,128,100,0) 70%)',
          filter: 'blur(40px)',
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-15 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(218,222,216,0.4) 0%, rgba(218,222,216,0) 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-3" style={{ color: '#F0EBE0' }}>
          Let's Connect
        </h2>
        <div
          className="w-16 h-1 mx-auto rounded-full mb-8"
          style={{ backgroundColor: '#EEA83B' }}
        />
        <p
          className="text-lg mb-12 max-w-xl mx-auto"
          style={{ color: 'rgba(240, 235, 224, 0.7)' }}
        >
          I'm always open to discussing new opportunities, collaborations, or interesting projects.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 max-w-md mx-auto mb-16">
          <a
            href={`mailto:${personalInfo.email}`}
            className="group relative p-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl border"
            style={{
              backgroundColor: 'rgba(240, 235, 224, 0.06)',
              borderColor: 'rgba(128, 145, 125, 0.35)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <div
              className="w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-3 transition-colors"
              style={{ backgroundColor: 'rgba(128, 145, 125, 0.25)' }}
            >
              <Mail className="w-5 h-5" style={{ color: '#F0EBE0' }} />
            </div>
            <p className="text-sm font-medium" style={{ color: '#F0EBE0' }}>
              Email
            </p>
            <p className="text-xs mt-1" style={{ color: 'rgba(240, 235, 224, 0.6)' }}>
              {personalInfo.email}
            </p>
            <ArrowUpRight
              className="w-4 h-4 absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ color: '#F0EBE0' }}
            />
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl border"
            style={{
              backgroundColor: 'rgba(240, 235, 224, 0.06)',
              borderColor: 'rgba(128, 145, 125, 0.35)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <div
              className="w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-3 transition-colors"
              style={{ backgroundColor: 'rgba(128, 145, 125, 0.25)' }}
            >
              <Linkedin className="w-5 h-5" style={{ color: '#F0EBE0' }} />
            </div>
            <p className="text-sm font-medium" style={{ color: '#F0EBE0' }}>
              LinkedIn
            </p>
            <p className="text-xs mt-1" style={{ color: 'rgba(240, 235, 224, 0.6)' }}>
              View Profile
            </p>
            <ArrowUpRight
              className="w-4 h-4 absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ color: '#F0EBE0' }}
            />
          </a>
        </div>

        <div
          className="border-t pt-8"
          style={{ borderColor: 'rgba(128, 145, 125, 0.25)' }}
        >
          <p className="text-xs mb-2" style={{ color: 'rgba(240, 235, 224, 0.55)' }}>
            © 2026 {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: '#80917D' }}>
            Built with React, Python &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
