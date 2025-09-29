import React from "react";
import { Button } from "../ui/button";
import { Github, Linkedin, FileText, ArrowRight, Code2, Brain } from "lucide-react";
import { useScrollAnimation, useParallax } from "../../hooks/useScrollAnimation";
import ParticleBackground from "../effects/ParticleBackground";

const HeroSection = ({ data }) => {
  const fadeRef = useScrollAnimation();
  const parallaxRef = useParallax();

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#001219] via-[#005F73] to-[#0A9396] pt-20 overflow-hidden">
      <ParticleBackground color="#94D2BD" count={25} />
      <div className="parallax-bg absolute inset-0 bg-gradient-to-br from-[#001219]/80 to-[#005F73]/60" ref={parallaxRef}></div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-6">
              <h1 className="text-5xl lg:text-7xl font-light text-white mb-4 tracking-tight animate-gradient bg-gradient-to-r from-white via-[#94D2BD] to-[#E9D8A6] bg-clip-text text-transparent">
                {data.name}
              </h1>
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                <Code2 className="w-8 h-8 text-[#94D2BD] animate-float" />
                <h2 className="text-2xl lg:text-3xl font-normal text-[#E9D8A6]">
                  {data.tagline}
                </h2>
                <Brain className="w-8 h-8 text-[#EE9B00] animate-float-delayed" />
              </div>
            </div>
            
            <p className="text-lg text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {data.description}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
              <Button 
                size="lg" 
                className="bg-[#EE9B00] hover:bg-[#CA6702] text-white px-8 py-3 text-lg font-medium transition-all duration-500 transform hover:scale-110 hover:rotate-1 shadow-lg hover:shadow-2xl group animate-glow"
                onClick={() => window.open(data.socialLinks.resume, '_blank')}
              >
                <FileText className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Download Resume
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
              
              <div className="flex items-center gap-3">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-[#94D2BD] text-[#94D2BD] hover:bg-[#94D2BD] hover:text-[#001219] px-6 py-3 transition-all duration-500 transform hover:scale-110 hover:-rotate-1 shadow-lg hover:shadow-xl"
                  onClick={() => window.open(data.socialLinks.github, '_blank')}
                >
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-[#E9D8A6] text-[#E9D8A6] hover:bg-[#E9D8A6] hover:text-[#001219] px-6 py-3 transition-all duration-500 transform hover:scale-110 hover:rotate-1 shadow-lg hover:shadow-xl"
                  onClick={() => window.open(data.socialLinks.linkedin, '_blank')}
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </Button>
              </div>
            </div>
          </div>
          
          {/* Right Visual Element */}
          <div className="flex-1 flex items-center justify-center">
            <div className="relative card-tilt">
              {/* Animated Background Shapes */}
              <div className="absolute inset-0 -z-10">
                <div className="w-80 h-80 bg-gradient-to-r from-[#94D2BD]/30 to-[#E9D8A6]/30 rounded-full animate-pulse"></div>
                <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-r from-[#EE9B00]/40 to-[#CA6702]/40 rounded-full animate-particle"></div>
                <div className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-r from-[#0A9396]/30 to-[#94D2BD]/30 rounded-full animate-pulse delay-1000"></div>
              </div>
              
              {/* Central Icon/Logo */}
              <div className="relative z-10 w-80 h-80 bg-gradient-to-br from-[#E9D8A6] via-[#94D2BD] to-[#0A9396] rounded-full flex items-center justify-center shadow-2xl animate-glow hover:shadow-[#0A9396]/50 transition-all duration-500">
                <div className="w-64 h-64 bg-gradient-to-br from-white to-[#E9D8A6]/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <div className="text-6xl font-bold text-[#001219] hover:scale-110 transition-transform duration-300 cursor-pointer">
                    {"{ SG }"}
                  </div>
                </div>
              </div>
              
              {/* Floating Tech Icons */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-[#EE9B00] to-[#CA6702] rounded-xl flex items-center justify-center shadow-lg animate-float hover:scale-125 transition-transform cursor-pointer">
                <Code2 className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-[#BB3E03] to-[#AE2012] rounded-xl flex items-center justify-center shadow-lg animate-float-delayed hover:scale-125 transition-transform cursor-pointer">
                <Brain className="w-8 h-8 text-white" />
              </div>
              
              {/* Additional floating elements */}
              <div className="absolute top-1/4 -right-8 w-8 h-8 bg-[#94D2BD] rounded-full animate-pulse opacity-70"></div>
              <div className="absolute bottom-1/4 -left-8 w-6 h-6 bg-[#EE9B00] rounded-full animate-bounce opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;