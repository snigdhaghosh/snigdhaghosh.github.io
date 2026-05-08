import React, { useEffect, useState } from 'react';

/**
 * Persistent low-key animated background that morphs across the page as the user scrolls.
 * Two large soft blobs that translate/rotate/scale based on scroll position, sitting under the content.
 */
const ScrollBackground = () => {
  const [scrollY, setScrollY] = useState(0);
  const [docHeight, setDocHeight] = useState(1);

  useEffect(() => {
    const update = () => {
      setScrollY(window.scrollY);
      setDocHeight(
        Math.max(
          document.documentElement.scrollHeight - window.innerHeight,
          1
        )
      );
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  const progress = Math.min(scrollY / docHeight, 1); // 0..1

  // Blob 1 – moves diagonally and scales up
  const b1x = -10 + progress * 60; // %
  const b1y = 10 + progress * 70;
  const b1scale = 1 + progress * 0.6;
  const b1rot = progress * 90;

  // Blob 2 – moves opposite diagonally
  const b2x = 70 - progress * 60;
  const b2y = 80 - progress * 70;
  const b2scale = 0.9 + (1 - progress) * 0.5;
  const b2rot = -progress * 80;

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      <div
        className="absolute rounded-full"
        style={{
          width: '60vw',
          height: '60vw',
          left: `${b1x}%`,
          top: `${b1y}%`,
          transform: `translate(-50%, -50%) scale(${b1scale}) rotate(${b1rot}deg)`,
          background:
            'radial-gradient(circle, rgba(118,128,100,0.35) 0%, rgba(118,128,100,0) 70%)',
          filter: 'blur(60px)',
          transition: 'transform 0.8s cubic-bezier(0.22, 1, 0.36, 1), left 0.8s cubic-bezier(0.22, 1, 0.36, 1), top 0.8s cubic-bezier(0.22, 1, 0.36, 1)',
          willChange: 'transform',
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: '50vw',
          height: '50vw',
          left: `${b2x}%`,
          top: `${b2y}%`,
          transform: `translate(-50%, -50%) scale(${b2scale}) rotate(${b2rot}deg)`,
          background:
            'radial-gradient(circle, rgba(76,88,62,0.3) 0%, rgba(76,88,62,0) 70%)',
          filter: 'blur(70px)',
          transition: 'transform 0.8s cubic-bezier(0.22, 1, 0.36, 1), left 0.8s cubic-bezier(0.22, 1, 0.36, 1), top 0.8s cubic-bezier(0.22, 1, 0.36, 1)',
          willChange: 'transform',
        }}
      />
    </div>
  );
};

export default ScrollBackground;
