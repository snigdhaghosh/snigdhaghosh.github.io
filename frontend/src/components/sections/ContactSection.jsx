import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Github, Linkedin, Mail, ArrowRight, MessageSquare } from "lucide-react";

const ContactSection = ({ data }) => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#001219] to-[#005F73]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">
            {data.title}
          </h2>
          <p className="text-lg text-[#94D2BD] max-w-2xl mx-auto">
            Ready to build something amazing together? Let's discuss your next project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info Card */}
          <Card className="bg-white/10 backdrop-blur-sm border-2 border-[#94D2BD]/30">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <MessageSquare className="w-16 h-16 text-[#94D2BD] mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-2">
                  Available for Opportunities
                </h3>
                <p className="text-[#94D2BD]">
                  Backend Engineering • ML/AI • Full-Stack Development
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-[#94D2BD]/20">
                  <Mail className="w-5 h-5 text-[#94D2BD]" />
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-[#94D2BD] text-sm">{data.email}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-[#94D2BD]/20">
                  <Github className="w-5 h-5 text-[#94D2BD]" />
                  <div>
                    <p className="text-white font-medium">GitHub</p>
                    <p className="text-[#94D2BD] text-sm">View my code and contributions</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-[#94D2BD]/20">
                  <Linkedin className="w-5 h-5 text-[#94D2BD]" />
                  <div>
                    <p className="text-white font-medium">LinkedIn</p>
                    <p className="text-[#94D2BD] text-sm">Professional network & experience</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA Buttons */}
          <div className="text-center lg:text-left space-y-6">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-white mb-2">
                Ready to collaborate?
              </h3>
              <p className="text-[#94D2BD] text-lg">
                Whether it's a challenging backend system, an AI-powered solution, or a full-stack application, I'm excited to discuss how we can bring your ideas to life.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg"
                className="bg-[#CA6702] hover:bg-[#BB3E03] text-white px-8 py-4 text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
                onClick={() => window.open(`mailto:${data.email}`, '_blank')}
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-[#94D2BD] text-[#94D2BD] hover:bg-[#94D2BD] hover:text-[#001219] px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105"
                onClick={() => window.open(data.github, '_blank')}
              >
                <Github className="w-5 h-5 mr-2" />
                View GitHub
              </Button>
            </div>

            {/* Quick Links */}
            <div className="flex items-center justify-center lg:justify-start gap-6 pt-8">
              <a 
                href={data.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#94D2BD] hover:text-[#0A9396] transition-colors duration-300 transform hover:scale-110"
              >
                <Github className="w-8 h-8" />
              </a>
              <a 
                href={data.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#94D2BD] hover:text-[#0A9396] transition-colors duration-300 transform hover:scale-110"
              >
                <Linkedin className="w-8 h-8" />
              </a>
              <a 
                href={`mailto:${data.email}`}
                className="text-[#94D2BD] hover:text-[#0A9396] transition-colors duration-300 transform hover:scale-110"
              >
                <Mail className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;