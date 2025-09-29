import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Building, CheckCircle, Calendar } from "lucide-react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import ParticleBackground from "../effects/ParticleBackground";

const ExperienceSection = ({ data }) => {
  const headerRef = useScrollAnimation();

  return (
    <section id="experience" className="relative py-20 bg-gradient-to-br from-[#001219] via-[#005F73] to-[#001219] overflow-hidden">
      <ParticleBackground color="#94D2BD" count={20} />
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16" ref={headerRef}>
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-6 scroll-fade-in">
            Experience Highlights
          </h2>
          <p className="text-lg text-[#94D2BD] max-w-3xl mx-auto scroll-slide-left">
            Building impactful solutions across research, industry, and education
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.map((experience, index) => {
            const expRef = useScrollAnimation();
            return (
              <Card 
                key={index}
                ref={expRef}
                className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 bg-white/10 backdrop-blur-sm border-2 border-[#94D2BD]/20 hover:border-[#94D2BD]/60 card-tilt scroll-fade-in"
              >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#94D2BD] to-[#0A9396] rounded-xl flex items-center justify-center animate-glow group-hover:scale-110 transition-transform duration-300">
                      <Building className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-semibold text-white group-hover:text-[#94D2BD] transition-colors">
                        {experience.title}
                      </CardTitle>
                      <p className="text-[#EE9B00] font-medium">
                        {experience.company}
                      </p>
                    </div>
                  </div>
                  <Badge 
                    variant="outline" 
                    className="border-[#94D2BD] text-[#94D2BD] bg-[#94D2BD]/10 hover:bg-[#94D2BD] hover:text-[#001219] transition-colors"
                  >
                    <Calendar className="w-3 h-3 mr-1" />
                    Recent
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-[#E9D8A6] mb-4 leading-relaxed">
                  {experience.description}
                </p>
                
                {/* Key Achievements */}
                <div>
                  <h4 className="font-semibold text-white text-sm mb-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#94D2BD] animate-pulse" />
                    Key Achievements:
                  </h4>
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, achIndex) => (
                      <li 
                        key={achIndex}
                        className="flex items-start gap-3 text-sm text-[#E9D8A6] hover:text-white transition-colors cursor-default"
                      >
                        <div className="w-2 h-2 bg-[#EE9B00] rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;