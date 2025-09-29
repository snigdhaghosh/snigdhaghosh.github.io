import React from 'react';

const ParticleBackground = ({ color = "#0A9396", count = 20 }) => {
  const particles = Array.from({ length: count }, (_, i) => i);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle}
          className="absolute w-2 h-2 rounded-full animate-particle"
          style={{
            backgroundColor: color,
            opacity: Math.random() * 0.3 + 0.1,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${8 + Math.random() * 4}s`
          }}
        />
      ))}
    </div>
  );
};

export default ParticleBackground;