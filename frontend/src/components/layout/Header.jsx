// import React from "react";
// import { Button } from "../ui/button";
// import { Github, Linkedin, FileText } from "lucide-react";

// const Header = () => {
//   const scrollToSection = (sectionId) => {
//     document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-portfolio-light/95 backdrop-blur-sm border-b border-portfolio-secondary/20">
//       <div className="max-w-5xl mx-auto px-6 py-4">
//         <div className="flex items-center justify-between gap-4">
//           <button
//             type="button"
//             className="text-lg font-semibold text-portfolio hover:text-portfolio-accent transition-colors text-left truncate"
//             onClick={() => scrollToSection("hero")}
//           >
//             Snigdha Ghosh Dastidar
//           </button>

//           <nav className="hidden md:flex items-center gap-6">
//             <button
//               type="button"
//               onClick={() => scrollToSection("about")}
//               className="text-sm font-medium text-portfolio-muted hover:text-portfolio transition-colors"
//             >
//               About
//             </button>
//             <button
//               type="button"
//               onClick={() => scrollToSection("skills")}
//               className="text-sm font-medium text-portfolio-muted hover:text-portfolio transition-colors"
//             >
//               Skills
//             </button>
//             <button
//               type="button"
//               onClick={() => scrollToSection("experience")}
//               className="text-sm font-medium text-portfolio-muted hover:text-portfolio transition-colors"
//             >
//               Experience
//             </button>
//             <button
//               type="button"
//               onClick={() => scrollToSection("projects")}
//               className="text-sm font-medium text-portfolio-muted hover:text-portfolio transition-colors"
//             >
//               Projects
//             </button>
//             <button
//               type="button"
//               onClick={() => scrollToSection("contact")}
//               className="text-sm font-medium text-portfolio-muted hover:text-portfolio transition-colors"
//             >
//               Contact
//             </button>
//           </nav>

//           <div className="flex items-center gap-1 shrink-0">
//             <Button
//               variant="ghost"
//               size="sm"
//               className="text-portfolio hover:bg-portfolio-secondary/15"
//               onClick={() => window.open("/resume.pdf", "_blank")}
//             >
//               <FileText className="w-4 h-4 mr-1 hidden sm:inline" />
//               <span className="hidden sm:inline">Resume</span>
//               <FileText className="w-4 h-4 sm:hidden" />
//             </Button>
//             <Button
//               variant="ghost"
//               size="icon"
//               className="text-portfolio hover:bg-portfolio-secondary/15"
//               onClick={() =>
//                 window.open("https://github.com/snigdhaghosh", "_blank")
//               }
//             >
//               <Github className="w-4 h-4" />
//             </Button>
//             <Button
//               variant="ghost"
//               size="icon"
//               className="text-portfolio hover:bg-portfolio-secondary/15"
//               onClick={() =>
//                 window.open(
//                   "https://linkedin.com/in/snigdhaghoshdastidar",
//                   "_blank",
//                 )
//               }
//             >
//               <Linkedin className="w-4 h-4" />
//             </Button>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
