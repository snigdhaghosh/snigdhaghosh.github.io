import React from "react";
import { Card, CardContent } from "../ui/card";
import { Heart, Users, Lightbulb, Target } from "lucide-react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import ParticleBackground from "../effects/ParticleBackground";

const AboutSection = ({ data }) => {
  const headerRef = useScrollAnimation();
  const contentRef = useScrollAnimation();

  const highlights = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Passionate Builder",
      description: "Love turning complex problems into elegant solutions"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaborative Leader",
      description: "Mentoring students and leading multidisciplinary teams"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation Focused",
      description: "Experimenting with new tech stacks and emerging technologies"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Impact Driven",
      description: "Focusing on real-world problems with measurable results"
    }
  ];

  return (
    <section id="about" className="relative py-20 bg-gradient-to-br from-[#005F73] via-[#001219] to-[#005F73] overflow-hidden">
      <ParticleBackground color="#E9D8A6" count={22} />
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16" ref={headerRef}>
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-6 scroll-fade-in">
            About Me
          </h2>
          <p className="text-lg text-[#94D2BD] max-w-2xl mx-auto scroll-slide-left">
            The intersection of passion, technology, and human impact
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center" ref={contentRef}>
          {/* Main About Text */}
          <div className="lg:col-span-2 scroll-slide-right">
            <Card className="bg-white/10 backdrop-blur-sm border-2 border-[#94D2BD]/30 shadow-2xl hover:shadow-[#94D2BD]/20 transition-all duration-500 card-tilt">
              <CardContent className="p-8">
                <div className="prose prose-lg max-w-none">
                  <p className="text-[#E9D8A6] leading-relaxed text-lg mb-6">
                    {data.text}
                  </p>
                  
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-[#94D2BD] mb-4">
                      What drives me:
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 text-[#E9D8A6] hover:text-white transition-colors cursor-default">
                        <div className="w-2 h-2 bg-[#EE9B00] rounded-full mt-3 flex-shrink-0 animate-pulse"></div>
                        <span>Building systems that scale and make a real difference</span>
                      </li>
                      <li className="flex items-start gap-3 text-[#E9D8A6] hover:text-white transition-colors cursor-default">
                        <div className="w-2 h-2 bg-[#0A9396] rounded-full mt-3 flex-shrink-0 animate-pulse"></div>
                        <span>Bridging the gap between cutting-edge research and practical applications</span>
                      </li>
                      <li className="flex items-start gap-3 text-[#E9D8A6] hover:text-white transition-colors cursor-default">
                        <div className="w-2 h-2 bg-[#CA6702] rounded-full mt-3 flex-shrink-0 animate-pulse"></div>
                        <span>Collaborating with diverse teams to solve complex challenges</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Highlights Grid */}
          <div className="space-y-6 scroll-slide-left">
            {highlights.map((highlight, index) => {
              const cardRef = useScrollAnimation();
              return (
                <Card 
                  key={index}
                  ref={cardRef}
                  className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1 bg-white/10 backdrop-blur-sm border-2 border-[#94D2BD]/20 hover:border-[#94D2BD]/60 card-tilt scroll-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#94D2BD] to-[#0A9396] rounded-xl flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-glow">
                        <div className="text-white group-hover:animate-pulse">
                          {highlight.icon}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-2 group-hover:text-[#94D2BD] transition-colors">
                          {highlight.title}
                        </h4>
                        <p className="text-sm text-[#E9D8A6] leading-relaxed group-hover:text-white transition-colors">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;