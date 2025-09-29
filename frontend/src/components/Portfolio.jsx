import React from "react";
import { portfolioData } from "../data/mock";
import HeroSection from "./sections/HeroSection";
import ProjectsSection from "./sections/ProjectsSection"; 
import ExperienceSection from "./sections/ExperienceSection";
import SkillsSection from "./sections/SkillsSection";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection data={portfolioData.hero} />
        <ProjectsSection data={portfolioData.projects} metrics={portfolioData.metrics} />
        <ExperienceSection data={portfolioData.experience} />
        <SkillsSection data={portfolioData.skills} />
        <AboutSection data={portfolioData.about} />
        <ContactSection data={portfolioData.contact} />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;