import React, { useEffect, useRef, useState, useCallback } from 'react';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  const containerRef = useRef(null);
  const timersRef = useRef([]);

  // Spotlight state: position (% of container), size (px), intensity (0–1)
  const [spot, setSpot] = useState({ x: 50, y: 50, size: 220, intensity: 0 });
  // Phase: 'wander' | 'lock' | 'breathe'
  const [phase, setPhase] = useState('wander');
  // Whether the hero text should be revealed (becomes true when spotlight locks on)
  const [revealed, setRevealed] = useState(false);

  const clearAllTimers = useCallback(() => {
    timersRef.current.forEach((t) => clearTimeout(t));
    timersRef.current = [];
  }, []);

  // The full sequence: wander -> lock -> breathe
  const runSequence = useCallback(() => {
    clearAllTimers();

    // Reset to initial state
    setPhase('wander');
    setRevealed(false);
    setSpot({ x: 50, y: 50, size: 220, intensity: 0 });

    // Initial nudge so the first frame isn't centered
    timersRef.current.push(
      setTimeout(() => {
        setSpot({ x: 82, y: 28, size: 230, intensity: 0.4 });
      }, 150)
    );

    const wander = () => {
      setSpot({
        x: 10 + Math.random() * 80,
        y: 18 + Math.random() * 64,
        size: 200 + Math.random() * 120,
        intensity: 0.35 + Math.random() * 0.2,
      });
    };

    let wanderCount = 0;
    const wanderTick = () => {
      wanderCount += 1;
      wander();
      if (wanderCount < 4) {
        timersRef.current.push(
          setTimeout(wanderTick, 700 + Math.random() * 200)
        );
      } else {
        // Phase 2: lock onto the name (center) and grow
        setPhase('lock');
        setRevealed(true);
        setSpot({ x: 50, y: 50, size: 900, intensity: 1 });

        // Phase 3: gentle breathing after lock
        timersRef.current.push(
          setTimeout(() => {
            setPhase('breathe');
          }, 1300)
        );
      }
    };
    timersRef.current.push(setTimeout(wanderTick, 700));
  }, [clearAllTimers]);

  // Run the sequence on mount and re-run every time the hero re-enters the viewport
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Initial run on load
    runSequence();

    // Re-run whenever the hero scrolls back into view
    let wasOutOfView = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio < 0.15) {
          wasOutOfView = true;
        } else if (wasOutOfView && entry.intersectionRatio > 0.5) {
          wasOutOfView = false;
          runSequence();
        }
      },
      { threshold: [0, 0.15, 0.5, 0.75] }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      clearAllTimers();
    };
  }, [runSequence, clearAllTimers]);

  // Subtle breathing once locked
  const breatheClass = phase === 'breathe' ? 'spotlight-breathe' : '';

  return (
    <section
      id="hero"
      ref={containerRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ backgroundColor: '#061812' }}
    >
      {/* Very faint ambient haze so the section isn't pitch-black before the spotlight finds the name */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(19, 75, 66, 0.35) 0%, rgba(6, 24, 18, 0) 70%)',
          opacity: phase === 'wander' ? 0.4 : 1,
          transition: 'opacity 1.2s ease-out',
        }}
        aria-hidden="true"
      />

      {/* The wandering / locking spotlight */}
      <div
        className={`absolute pointer-events-none ${breatheClass}`}
        style={{
          left: `${spot.x}%`,
          top: `${spot.y}%`,
          width: `${spot.size}px`,
          height: `${spot.size}px`,
          marginLeft: `-${spot.size / 2}px`,
          marginTop: `-${spot.size / 2}px`,
          background: `radial-gradient(circle,
            rgba(238, 168, 59, ${0.30 * spot.intensity}) 0%,
            rgba(202, 118, 59, ${0.18 * spot.intensity}) 22%,
            rgba(128, 145, 125, ${0.10 * spot.intensity}) 45%,
            rgba(128, 145, 125, 0) 65%)`,
          mixBlendMode: 'screen',
          filter: 'blur(8px)',
          transition:
            phase === 'wander'
              ? 'left 0.85s cubic-bezier(0.5, 0, 0.3, 1), top 0.85s cubic-bezier(0.5, 0, 0.3, 1), width 0.85s ease-out, height 0.85s ease-out, margin 0.85s ease-out'
              : 'left 1.0s cubic-bezier(0.22, 1, 0.36, 1), top 1.0s cubic-bezier(0.22, 1, 0.36, 1), width 1.0s cubic-bezier(0.22, 1, 0.36, 1), height 1.0s cubic-bezier(0.22, 1, 0.36, 1), margin 1.0s cubic-bezier(0.22, 1, 0.36, 1)',
          willChange: 'left, top, width, height',
        }}
        aria-hidden="true"
      />

      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div
        className="relative z-10 text-center px-6 max-w-4xl"
        style={{
          opacity: revealed ? 1 : 0,
          transform: revealed ? 'translateY(0)' : 'translateY(12px)',
          transition: 'opacity 1.1s cubic-bezier(0.22, 1, 0.36, 1) 0.1s, transform 1.1s cubic-bezier(0.22, 1, 0.36, 1) 0.1s',
        }}
      >
        <div
          className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase mb-6"
          style={{
            backgroundColor: 'rgba(240, 235, 224, 0.12)',
            color: '#F0EBE0',
            border: '1px solid rgba(240, 235, 224, 0.18)',
          }}
        >
          {personalInfo.location}
        </div>
        <h1
          className="text-5xl md:text-7xl font-bold leading-tight mb-4"
          style={{ color: '#F0EBE0' }}
        >
          {personalInfo.name}
        </h1>
        <p
          className="text-xl md:text-2xl font-light mb-6"
          style={{ color: '#EEA83B' }}
        >
          {personalInfo.title}
        </p>
        <p
          className="text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: 'rgba(240, 235, 224, 0.65)' }}
        >
          {personalInfo.bio}
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
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
    </section>
  );
};

export default Hero;
