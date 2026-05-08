import React from 'react';
import { Github, ArrowUpRight } from 'lucide-react';
import { projects } from '../data/portfolioData';

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-3" style={{ color: '#134B42' }}>
            Projects
          </h2>
          <div
            className="w-16 h-1 mx-auto rounded-full"
            style={{ backgroundColor: '#EEA83B' }}
          />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <a
              key={idx}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl border block"
              style={{
                backgroundColor: '#ffffff',
                borderColor: 'rgba(128, 145, 125, 0.15)',
                boxShadow: 'rgba(19, 75, 66, 0.06) 0px 2px 12px',
              }}
            >
              <div className="flex items-start justify-between mb-4 gap-2">
                <span
                  className="inline-block px-3 py-1 text-xs font-medium rounded-full"
                  style={{
                    backgroundColor: 'rgba(238, 168, 59, 0.18)',
                    color: '#CA763B',
                  }}
                >
                  {project.date}
                </span>
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all opacity-70 group-hover:opacity-100 group-hover:rotate-12 shrink-0"
                  style={{
                    backgroundColor: 'rgba(19, 75, 66, 0.06)',
                  }}
                >
                  <Github className="w-4 h-4" style={{ color: '#134B42' }} />
                </div>
              </div>
              <h3
                className="text-lg font-bold mb-2 leading-snug pr-2 transition-colors group-hover:underline"
                style={{ color: '#134B42' }}
              >
                {project.title}
              </h3>
              <p
                className="text-sm mb-5 leading-relaxed"
                style={{ color: '#80917D' }}
              >
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors"
                    style={{
                      backgroundColor: 'rgba(19, 75, 66, 0.12)',
                      color: '#134B42',
                      border: '1px solid rgba(19, 75, 66, 0.2)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div
                className="mt-5 flex items-center gap-1.5 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ color: '#134B42' }}
              >
                View on GitHub
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
