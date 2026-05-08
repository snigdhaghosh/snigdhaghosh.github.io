import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navItems } from '../data/portfolioData';

const Navbar = () => {
  const [activeId, setActiveId] = useState('hero');
  const [mobileOpen, setMobileOpen] = useState(false);

  // Sections that have a dark background — navbar should use light colors over them
  const darkSections = new Set(['hero', 'experience', 'contact']);
  const onDark = darkSections.has(activeId);
  // Active dot uses warm orange accent for visual punch on both light and dark sections
  const activeColor = '#CA763B';
  const idleColor = onDark ? 'rgba(240, 235, 224, 0.55)' : '#80917D';
  const labelActive = onDark ? '#F0EBE0' : '#134B42';
  const labelIdle = onDark ? 'rgba(240, 235, 224, 0.55)' : '#80917D';
  const ringColor = 'rgba(202, 118, 59, 0.22)';

  useEffect(() => {
    const onScroll = () => {
      // Determine active section
      const sections = ['hero', ...navItems.map((n) => n.href.replace('#', ''))];
      let current = 'hero';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.4) {
            current = id;
          }
        }
      }
      setActiveId(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Desktop: vertical side navigation - always visible */}
      <nav
        className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4 transition-colors duration-500"
      >
        {[{ label: 'Home', href: '#hero' }, ...navItems].map((item) => {
          const id = item.href.replace('#', '');
          const isActive = activeId === id;
          return (
            <a
              key={item.label}
              href={item.href}
              className="group flex items-center justify-end gap-3"
              aria-label={item.label}
            >
              <span
                className="text-xs font-medium tracking-wider uppercase opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                style={{
                  color: isActive ? labelActive : labelIdle,
                  fontWeight: isActive ? 600 : 500,
                }}
              >
                {item.label}
              </span>
              <span
                className="block rounded-full transition-all duration-500"
                style={{
                  width: isActive ? '14px' : '10px',
                  height: isActive ? '14px' : '10px',
                  backgroundColor: isActive ? activeColor : 'transparent',
                  border: `2px solid ${isActive ? activeColor : idleColor}`,
                  boxShadow: isActive ? `0 0 0 4px ${ringColor}` : 'none',
                }}
              />
            </a>
          );
        })}
      </nav>

      {/* Mobile: top-right floating menu button */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="w-11 h-11 rounded-full flex items-center justify-center backdrop-blur-md shadow-md transition-all hover:scale-105"
          style={{
            backgroundColor: onDark ? 'rgba(10, 46, 40, 0.75)' : 'rgba(240, 235, 224, 0.9)',
            border: `1px solid ${onDark ? 'rgba(240, 235, 224, 0.25)' : 'rgba(128, 145, 125, 0.25)'}`,
          }}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="w-5 h-5" style={{ color: labelActive }} />
          ) : (
            <Menu className="w-5 h-5" style={{ color: labelActive }} />
          )}
        </button>
      </div>

      {/* Mobile dropdown overlay */}
      {mobileOpen && (
        <div
          className="fixed top-0 left-0 right-0 z-40 md:hidden pt-20 pb-6 px-6 backdrop-blur-md shadow-lg"
          style={{
            backgroundColor: 'rgba(240, 235, 224, 0.95)',
            borderBottom: '1px solid rgba(128, 145, 125, 0.2)',
          }}
        >
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium py-3 px-2 rounded-lg transition-colors hover:bg-black/5"
                style={{ color: '#134B42' }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
