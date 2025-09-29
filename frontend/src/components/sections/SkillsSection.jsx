import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Code, Layers, Server, Wrench } from "lucide-react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import ParticleBackground from "../effects/ParticleBackground";

const SkillsSection = ({ data }) => {
  const headerRef = useScrollAnimation();
  const summaryRef = useScrollAnimation();

  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="w-6 h-6" />,
      skills: data.languages,
      color: "from-[#0A9396] to-[#005F73]"
    },
    {
      title: "Frameworks",
      icon: <Layers className="w-6 h-6" />,
      skills: data.frameworks,
      color: "from-[#CA6702] to-[#BB3E03]"
    },
    {
      title: "Systems",
      icon: <Server className="w-6 h-6" />,
      skills: data.systems,
      color: "from-[#EE9B00] to-[#CA6702]"
    },
    {
      title: "Other",
      icon: <Wrench className="w-6 h-6" />,
      skills: data.other,
      color: "from-[#94D2BD] to-[#0A9396]"
    }
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case 'Expert': return 'bg-[#BB3E03] text-white';
      case 'Advanced': return 'bg-[#CA6702] text-white';
      case 'Proficient': return 'bg-[#0A9396] text-white';
      default: return 'bg-[#94D2BD] text-[#001219]';
    }
  };

  return (
    <section id="skills" className="relative py-20 bg-white overflow-hidden">
      <ParticleBackground color="#005F73" count={18} />
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16" ref={headerRef}>
          <h2 className="text-4xl lg:text-5xl font-light text-[#001219] mb-6 scroll-fade-in">
            Skills Snapshot
          </h2>
          <p className="text-lg text-[#001219]/70 max-w-3xl mx-auto scroll-slide-right">
            Comprehensive expertise across the full technology stack
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const cardRef = useScrollAnimation();
            return (
              <Card 
                key={index}
                ref={cardRef}
                className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-2 bg-white border-2 hover:border-[#0A9396]/50 card-tilt scroll-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-glow`}>
                  <div className="text-white group-hover:animate-pulse">
                    {category.icon}
                  </div>
                </div>
                <CardTitle className="text-xl font-semibold text-[#001219] group-hover:text-[#0A9396] transition-colors duration-300">
                  {category.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="flex items-center justify-between p-3 rounded-lg bg-[#E9D8A6]/10 hover:bg-[#0A9396]/10 hover:scale-105 transition-all duration-300 cursor-pointer group/skill"
                    >
                      <span className="font-medium text-[#001219] text-sm group-hover/skill:text-[#005F73] transition-colors">
                        {skill.name}
                      </span>
                      <Badge 
                        className={`${getLevelColor(skill.level)} text-xs font-medium px-2 py-1 group-hover/skill:scale-110 transition-transform`}
                      >
                        {skill.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            );
          })}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 text-center" ref={summaryRef}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto scroll-fade-in">
            <div className="text-center p-6 bg-gradient-to-br from-[#BB3E03]/10 to-[#AE2012]/10 rounded-xl hover:scale-110 transition-transform cursor-pointer group">
              <div className="text-3xl font-bold text-[#BB3E03] mb-2 group-hover:animate-pulse">5+</div>
              <div className="text-sm text-[#001219]/70 group-hover:text-[#BB3E03] transition-colors">Programming Languages</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-[#CA6702]/10 to-[#BB3E03]/10 rounded-xl hover:scale-110 transition-transform cursor-pointer group">
              <div className="text-3xl font-bold text-[#CA6702] mb-2 group-hover:animate-pulse">6+</div>
              <div className="text-sm text-[#001219]/70 group-hover:text-[#CA6702] transition-colors">Frameworks & Libraries</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-[#0A9396]/10 to-[#005F73]/10 rounded-xl hover:scale-110 transition-transform cursor-pointer group">
              <div className="text-3xl font-bold text-[#0A9396] mb-2 group-hover:animate-pulse">4+</div>
              <div className="text-sm text-[#001219]/70 group-hover:text-[#0A9396] transition-colors">Systems & Tools</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-[#005F73]/10 to-[#001219]/10 rounded-xl hover:scale-110 transition-transform cursor-pointer group">
              <div className="text-3xl font-bold text-[#005F73] mb-2 group-hover:animate-pulse">3+</div>
              <div className="text-sm text-[#001219]/70 group-hover:text-[#005F73] transition-colors">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;