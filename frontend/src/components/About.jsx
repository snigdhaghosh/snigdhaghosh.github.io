import React from 'react';
import { User } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import picture from '../data/image.jpeg';

const About = () => {
  return (
    <section id="about" className="py-24 px-6" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-3" style={{ color: '#134B42' }}>
            About Me
          </h2>
          <div
            className="w-16 h-1 mx-auto rounded-full"
            style={{ backgroundColor: '#EEA83B' }}
          />
        </div>
        <div className="grid md:grid-cols-3 gap-12 items-center">
          <div className="flex justify-center">
            <div
              className="w-56 h-56 rounded-2xl overflow-hidden flex items-center justify-center relative"
              style={{
                backgroundColor: 'rgba(128, 145, 125, 0.1)',
                border: '3px solid rgba(128, 145, 125, 0.2)',
              }}
            >
              {/* <div className="text-center">
                <div
                  className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-2"
                  style={{ backgroundColor: 'rgba(128, 145, 125, 0.15)' }}
                >
                  <User className="w-10 h-10" style={{ color: '#134B42' }} />
                </div> */}
                {/* <p className="text-xs font-medium" style={{ color: '#80917D' }}> */}
                <img
                  src={picture}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
                {/* </p>
              </div> */}
            </div>
          </div>
          <div className="md:col-span-2">
            <p
              className="text-lg leading-relaxed mb-8"
              style={{ color: '#134B42' }}
            >
              {personalInfo.about}
            </p>
            <div className="grid grid-cols-3 gap-6">
              {personalInfo.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="text-center p-4 rounded-xl transition-all hover:scale-105"
                  style={{ backgroundColor: 'rgba(128, 145, 125, 0.08)' }}
                >
                  <p
                    className="text-3xl font-bold mb-1"
                    style={{ color: '#134B42' }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-xs font-medium" style={{ color: '#80917D' }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
