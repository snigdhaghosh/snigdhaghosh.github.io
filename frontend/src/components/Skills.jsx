import React from 'react';
import { Code2, Braces, Cloud, Database } from 'lucide-react';
import { skills } from '../data/portfolioData';

const iconMap = {
  code: Code2,
  braces: Braces,
  cloud: Cloud,
  database: Database,
};

const Skills = () => {
  return (
    <section id="skills" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-3" style={{ color: '#134B42' }}>
            Technical Skills
          </h2>
          <div
            className="w-16 h-1 mx-auto rounded-full"
            style={{ backgroundColor: '#EEA83B' }}
          />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, idx) => {
            const Icon = iconMap[skill.icon] || Code2;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl transition-all hover:scale-[1.02] hover:shadow-xl"
                style={{
                  backgroundColor: '#ffffff',
                  boxShadow: 'rgba(19, 75, 66, 0.08) 0px 4px 20px',
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    backgroundColor: 'rgba(128, 145, 125, 0.15)',
                    color: '#134B42',
                  }}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3
                  className="text-sm font-semibold uppercase tracking-wider mb-4"
                  style={{ color: '#134B42' }}
                >
                  {skill.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium rounded-full transition-colors"
                      style={{
                        backgroundColor: 'rgba(128, 145, 125, 0.12)',
                        color: '#134B42',
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
