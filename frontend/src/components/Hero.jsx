import React, { useEffect, useRef, useState } from 'react';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  const containerRef = useRef(null);
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const onMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMouse({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    };
    const el = containerRef.current;
    if (el) el.addEventListener('mousemove', onMouseMove);
    return () => {
      if (el) el.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  // Mouse tracked offsets (subtle parallax)
  const dx = (mouse.x - 0.5) * 40;
  const dy = (mouse.y - 0.5) * 40;

  return (
    <section
      id="hero"
      ref={containerRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ backgroundColor: '#0a2e28' }}
    >
      {/* Ambient floating orbs (very subtle, on dark bg) */}
      <div
        className="absolute rounded-full opacity-30 hero-orb-1"
        style={{
          width: '420px',
          height: '420px',
          top: '10%',
          left: '8%',
          background:
            'radial-gradient(circle, rgba(118,128,100,0.55) 0%, rgba(118,128,100,0) 70%)',
          filter: 'blur(20px)',
          transform: `translate(${dx * 0.6}px, ${dy * 0.6}px)`,
          transition: 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      />
      <div
        className="absolute rounded-full opacity-25 hero-orb-2"
        style={{
          width: '520px',
          height: '520px',
          bottom: '6%',
          right: '6%',
          background:
            'radial-gradient(circle, rgba(76,88,62,0.7) 0%, rgba(76,88,62,0) 70%)',
          filter: 'blur(30px)',
          transform: `translate(${-dx * 0.8}px, ${-dy * 0.8}px)`,
          transition: 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      />

      {/* Animated spotlight beam sweeping across the hero */}
      <div
        className="absolute inset-0 pointer-events-none hero-flashlight-bg"
        aria-hidden="true"
      />

      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <div
          className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase mb-6 hero-fade"
          style={{
            backgroundColor: 'rgba(240, 235, 224, 0.12)',
            color: '#F0EBE0',
            border: '1px solid rgba(240, 235, 224, 0.18)',
            animationDelay: '0s',
          }}
        >
          {personalInfo.location}
        </div>
        <h1
          className="text-5xl md:text-7xl font-bold leading-tight mb-4 hero-fade"
          style={{ color: '#F0EBE0', animationDelay: '0.1s' }}
        >
          {personalInfo.name}
        </h1>
        <p
          className="text-xl md:text-2xl font-light mb-6 hero-fade"
          style={{ color: '#EEA83B', animationDelay: '0.25s' }}
        >
          {personalInfo.title}
        </p>
        <p
          className="text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed hero-fade"
          style={{ color: 'rgba(240, 235, 224, 0.65)', animationDelay: '0.4s' }}
        >
          {personalInfo.bio}
        </p>
        <div
          className="flex flex-wrap gap-4 justify-center hero-fade"
          style={{ animationDelay: '0.55s' }}
        >
          <a
            href="#contact"
            className="px-8 py-3 rounded-full text-sm font-medium transition-all hover:scale-105 hover:shadow-lg"
            style={{ backgroundColor: '#CA763B', color: '#F0EBE0' }}
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            className="px-8 py-3 rounded-full text-sm font-medium transition-all hover:scale-105 border-2"
            style={{ borderColor: 'rgba(240, 235, 224, 0.6)', color: '#F0EBE0' }}
          >
            View Work
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div
          className="w-6 h-10 rounded-full border-2 flex justify-center pt-2"
          style={{ borderColor: 'rgba(240, 235, 224, 0.45)' }}
        >
          <span
            className="block w-1 h-2 rounded-full hero-scroll-dot"
            style={{ backgroundColor: 'rgba(240, 235, 224, 0.75)' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;