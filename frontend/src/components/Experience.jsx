import React, { useEffect, useRef, useState } from 'react';
import { experience } from '../data/portfolioData';

const TimelineItem = ({ item, index }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const isLeft = index % 2 === 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Toggle visibility based on intersection (animates both on scroll down AND up)
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} data-index={index}>
      <div
        className={`relative flex flex-col md:flex-row items-start mb-12 ${
          isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
        }`}
      >
        <div
          className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full transform -translate-x-1/2 z-10 border-4 transition-all duration-700"
          style={{
            backgroundColor: '#80917D',
            borderColor: '#134B42',
            transform: `translateX(-50%) scale(${visible ? 1 : 0})`,
            top: '0.75rem',
          }}
        >
          <div
            className="absolute inset-0 rounded-full animate-ping opacity-30"
            style={{ backgroundColor: '#80917D' }}
          />
        </div>
        <div
          className={`ml-14 md:ml-0 md:w-[45%] p-6 rounded-2xl transition-all duration-700 ease-out ${
            isLeft ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
          }`}
          style={{
            backgroundColor: 'rgba(19, 75, 66, 0.3)',
            opacity: visible ? 1 : 0,
            transform: visible
              ? 'translateX(0) translateY(0)'
              : `translateX(${isLeft ? '-30px' : '30px'}) translateY(20px)`,
          }}
        >
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span
              className="inline-block px-3 py-1 text-xs font-medium rounded-full"
              style={{
                backgroundColor: 'rgba(128, 145, 125, 0.3)',
                color: '#F0EBE0',
              }}
            >
              {item.period}
            </span>
            <span
              className="inline-block px-2 py-0.5 text-xs rounded-full"
              style={{
                backgroundColor: 'rgba(240, 235, 224, 0.15)',
                color: 'rgba(240, 235, 224, 0.7)',
              }}
            >
              {item.duration}
            </span>
          </div>
          <h3
            className="text-lg font-bold mb-1"
            style={{ color: '#F0EBE0' }}
          >
            {item.role}
          </h3>
          <p
            className="text-sm font-medium mb-3"
            style={{ color: '#80917D' }}
          >
            {item.company}
          </p>
          <p
            className="text-sm mb-4 leading-relaxed"
            style={{ color: 'rgba(240, 235, 224, 0.7)' }}
          >
            {item.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag, i) => (
              <span
                key={i}
                className="px-2.5 py-1 text-xs font-medium rounded-md transition-all duration-300 hover:scale-110"
                style={{
                  backgroundColor: 'rgba(128, 145, 125, 0.4)',
                  color: '#F0EBE0',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-6"
      style={{ backgroundColor: '#134B42' }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-3" style={{ color: '#F0EBE0' }}>
            Experience
          </h2>
          <div
            className="w-16 h-1 mx-auto rounded-full"
            style={{ backgroundColor: '#EEA83B' }}
          />
        </div>
        <div className="relative">
          <div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 transform md:-translate-x-1/2"
            style={{
              background:
                'linear-gradient(transparent, rgba(128, 145, 125, 0.6) 10%, rgba(128, 145, 125, 0.6) 90%, transparent)',
            }}
          />
          {experience.map((item, idx) => (
            <TimelineItem key={idx} item={item} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
