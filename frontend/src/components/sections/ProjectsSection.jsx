import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Github, ExternalLink, TrendingUp, Clock, Users } from "lucide-react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import ParticleBackground from "../effects/ParticleBackground";

const ProjectsSection = ({ data, metrics }) => {
  const headerRef = useScrollAnimation();
  const metricsRef = useScrollAnimation();

  const getMetricIcon = (key) => {
    switch (key) {
      case 'accuracy': return <TrendingUp className="w-4 h-4" />;
      case 'improvement': return <Clock className="w-4 h-4" />;
      case 'users': return <Users className="w-4 h-4" />;
      case 'security': return <TrendingUp className="w-4 h-4" />;
      case 'latency': return <Clock className="w-4 h-4" />;
      case 'satisfaction': return <TrendingUp className="w-4 h-4" />;
      case 'conversion': return <TrendingUp className="w-4 h-4" />;
      default: return <TrendingUp className="w-4 h-4" />;
    }
  };

  const getTechStackColor = (tech) => {
    const colorMap = {
      'Python': 'bg-[#005F73] text-white',
      'PyTorch': 'bg-[#CA6702] text-white', 
      'TensorFlow': 'bg-[#BB3E03] text-white',
      'CUDA': 'bg-[#0A9396] text-white',
      'Docker': 'bg-[#94D2BD] text-[#001219]',
      'React.js': 'bg-[#EE9B00] text-white',
      'Node.js': 'bg-[#AE2012] text-white',
      'MongoDB': 'bg-[#9B2226] text-white',
      'JavaScript': 'bg-[#E9D8A6] text-[#001219]',
      'Flask': 'bg-[#005F73] text-white',
      'Apache Spark': 'bg-[#001219] text-white',
    };
    return colorMap[tech] || 'bg-[#94D2BD] text-[#001219]';
  };

  return (
    <section id="projects" className="relative py-20 bg-white overflow-hidden">
      <ParticleBackground color="#0A9396" count={15} />
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16" ref={headerRef}>
          <h2 className="text-4xl lg:text-5xl font-light text-[#001219] mb-6 scroll-fade-in">
            Featured Projects
          </h2>
          <p className="text-lg text-[#001219]/70 max-w-3xl mx-auto scroll-slide-left">
            Showcasing impactful solutions at the intersection of AI, backend engineering, and user experience
          </p>
          
          {/* Overall Metrics Strip */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-8 p-6 bg-gradient-to-r from-[#001219] to-[#005F73] rounded-2xl shadow-xl border border-[#94D2BD]/20 card-tilt scroll-slide-right" ref={metricsRef}>
            <div className="flex items-center gap-2 text-[#94D2BD]">
              <TrendingUp className="w-5 h-5 animate-pulse" />
              <span className="font-semibold text-lg">{metrics.accuracy}</span>
            </div>
            <div className="w-px h-8 bg-[#94D2BD]/30"></div>
            <div className="flex items-center gap-2 text-[#EE9B00]">
              <Clock className="w-5 h-5 animate-pulse" />
              <span className="font-semibold text-lg">{metrics.efficiency}</span>
            </div>
            <div className="w-px h-8 bg-[#94D2BD]/30"></div>
            <div className="flex items-center gap-2 text-[#CA6702]">
              <Users className="w-5 h-5 animate-pulse" />
              <span className="font-semibold text-lg">{metrics.engagement}</span>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {data.map((project, index) => {
            const projectRef = useScrollAnimation();
            return (
              <Card 
                key={project.id} 
                ref={projectRef}
                className={`group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 bg-white border-2 hover:border-[#0A9396]/30 card-tilt scroll-fade-in ${
                  index === 0 ? 'lg:col-span-2' : ''
                }`}
              >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg h-64">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-2"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001219]/80 via-[#005F73]/20 to-transparent group-hover:from-[#001219]/90 transition-all duration-500"></div>
                  <div className="absolute bottom-4 left-4 right-4 transform group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-bold text-xl mb-2 group-hover:text-[#94D2BD] transition-colors duration-300">{project.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <Badge 
                          key={tech} 
                          className={`${getTechStackColor(tech)} text-xs font-medium hover:scale-110 transition-transform cursor-pointer`}
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.techStack.length > 3 && (
                        <Badge className="bg-white/20 text-white text-xs hover:bg-white/40 transition-colors">
                          +{project.techStack.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <p className="text-[#001219]/70 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Problem → Solution → Results */}
                <div className="space-y-4 mb-6">
                  <div>
                    <span className="font-semibold text-[#BB3E03] text-sm">Problem:</span>
                    <p className="text-sm text-[#001219]/70 mt-1">{project.problem}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-[#0A9396] text-sm">Solution:</span>
                    <p className="text-sm text-[#001219]/70 mt-1">{project.solution}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-[#CA6702] text-sm">Results:</span>
                    <p className="text-sm text-[#001219]/70 mt-1">{project.results}</p>
                  </div>
                </div>

                {/* Integrated Metrics */}
                <div className="flex flex-wrap gap-4 mb-6 p-4 bg-[#E9D8A6]/20 rounded-xl">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="flex items-center gap-2 text-[#005F73]">
                      {getMetricIcon(key)}
                      <span className="font-semibold text-sm">{value}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="font-semibold text-[#001219] text-sm mb-3">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="outline"
                        className={`${getTechStackColor(tech)} border-0 text-xs font-medium`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                  <Button 
                    className="bg-[#0A9396] hover:bg-[#005F73] text-white flex-1 transition-all duration-300 transform hover:scale-105"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View on GitHub
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-[#CA6702] text-[#CA6702] hover:bg-[#CA6702] hover:text-white transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
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

export default ProjectsSection;