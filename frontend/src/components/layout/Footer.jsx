import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#001219] text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-[#94D2BD] mb-2">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-gray-300">
              Available for backend engineering and ML opportunities
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a 
              href="https://github.com/snigdhaghosh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#94D2BD] hover:text-[#0A9396] transition-colors duration-300 transform hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com/in/snigdhaghoshdastidar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#94D2BD] hover:text-[#0A9396] transition-colors duration-300 transform hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:snigdha.gdastidar@gmail.com"
              className="text-[#94D2BD] hover:text-[#0A9396] transition-colors duration-300 transform hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-[#005F73] mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Snigdha Ghosh Dastidar. Built with React & FastAPI.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;