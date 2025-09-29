import React from "react";
import { Button } from "../ui/button";
import { Github, Linkedin, FileText } from "lucide-react";

const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div 
            className="text-xl font-semibold text-[#001219] cursor-pointer hover:text-[#0A9396] transition-colors duration-300"
            onClick={() => scrollToSection('hero')}
          >
            Snigdha Ghosh Dastidar
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-[#001219] hover:text-[#0A9396] transition-colors duration-300 font-medium"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="text-[#001219] hover:text-[#0A9396] transition-colors duration-300 font-medium"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-[#001219] hover:text-[#0A9396] transition-colors duration-300 font-medium"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-[#001219] hover:text-[#0A9396] transition-colors duration-300 font-medium"
            >
              About
            </button>
          </nav>

          <div className="flex items-center space-x-3">
            <Button 
              variant="ghost" 
              size="sm"
              className="text-[#001219] hover:bg-[#94D2BD]/20 hover:text-[#005F73]"
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              <FileText className="w-4 h-4 mr-2" />
              Resume
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              className="text-[#001219] hover:bg-[#94D2BD]/20 hover:text-[#005F73]"
              onClick={() => window.open('https://github.com/snigdhaghosh', '_blank')}
            >
              <Github className="w-4 h-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              className="text-[#001219] hover:bg-[#94D2BD]/20 hover:text-[#005F73]"
              onClick={() => window.open('https://linkedin.com/in/snigdhaghoshdastidar', '_blank')}
            >
              <Linkedin className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;