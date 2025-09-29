export const portfolioData = {
  hero: {
    name: "Snigdha Ghosh Dastidar",
    tagline: "Software Engineer (Backend + ML)",
    description: "I build scalable systems and AI-powered tools that turn research into real-world impact. From healthcare AI to distributed systems, I focus on results, reliability, and user experience.",
    socialLinks: {
      resume: "/resume.pdf",
      github: "https://github.com/snigdhaghoshdastidar",
      linkedin: "https://linkedin.com/in/snigdhaghoshdastidar"
    }
  },
  
  metrics: {
    accuracy: "97.6% ML Accuracy",
    efficiency: "-25% Troubleshooting Time", 
    engagement: "+30% Engagement"
  },

  projects: [
    {
      id: 1,
      title: "Medical Image Diagnostic Analysis",
      description: "AI-powered diagnostic system using deep learning for medical image analysis",
      problem: "Manual medical image analysis was time-intensive and prone to human error",
      solution: "Developed CNN-based diagnostic model with PyTorch and CUDA optimization",
      results: "Achieved 97.6% accuracy, reduced diagnosis time by 40%",
      skills: ["PyTorch", "CUDA", "Computer Vision", "MLOps"],
      techStack: ["Python", "PyTorch", "TensorFlow", "CUDA", "Docker"],
      image: "https://images.unsplash.com/photo-1747224317356-6dd1a4a078fd",
      github: "https://github.com/snigdha/medical-ai-diagnostic",
      metrics: {
        accuracy: "97.6%",
        improvement: "40% faster diagnosis"
      }
    },
    {
      id: 2,
      title: "Signal Protocol Chat App",
      description: "End-to-end encrypted messaging application implementing Signal Protocol",
      problem: "Need for secure communication platform with forward secrecy",
      solution: "Built full-stack app with Signal Protocol encryption and React frontend",
      results: "Deployed secure chat with perfect forward secrecy, zero data breaches",
      skills: ["Cryptography", "Signal Protocol", "Full-Stack Development"],
      techStack: ["React.js", "Node.js", "Signal Protocol", "WebSocket", "MongoDB"],
      image: "https://images.unsplash.com/photo-1662974770404-468fd9660389",
      github: "https://github.com/snigdha/signal-chat",
      metrics: {
        security: "Zero breaches",
        users: "500+ active users"
      }
    },
    {
      id: 3,
      title: "Real-Time Audio Transcription Extension",
      description: "Chrome extension for live audio transcription using cloud AI services",
      problem: "Need for real-time transcription during online meetings and lectures",
      solution: "Developed Chrome extension with WebRTC audio capture and AI transcription",
      results: "95% transcription accuracy, 200ms latency, 10K+ users",
      skills: ["Chrome Extensions", "WebRTC", "Cloud AI", "Real-time Processing"],
      techStack: ["JavaScript", "WebRTC", "Google Speech API", "Chrome Extension API"],
      image: "https://images.unsplash.com/photo-1631006732121-a6da2f4864d3",
      github: "https://github.com/snigdha/audio-transcription",
      metrics: {
        accuracy: "95%",
        latency: "200ms",
        users: "10K+"
      }
    },
    {
      id: 4,
      title: "Smart Credit Card Recommender",
      description: "ML-based recommendation system for personalized credit card suggestions",
      problem: "Users struggle to find credit cards matching their spending patterns",
      solution: "Built Spark-based recommendation engine analyzing spending behavior",
      results: "85% user satisfaction, 60% conversion rate improvement",
      skills: ["Apache Spark", "Recommendation Systems", "Big Data", "ML"],
      techStack: ["Python", "Apache Spark", "Flask", "Pandas", "Scikit-learn"],
      image: "https://images.unsplash.com/photo-1642132652859-3ef5a1048fd1",
      github: "https://github.com/snigdha/credit-recommender",
      metrics: {
        satisfaction: "85%",
        conversion: "+60%"
      }
    }
  ],

  experience: [
    {
      title: "Research Assistant",
      company: "DREAM Lab",
      description: "AI/ML pipelines, CUDA optimization, MLOps infrastructure",
      achievements: ["Optimized ML training by 45%", "Deployed 3 production models", "Led team of 4 researchers"]
    },
    {
      title: "Researcher", 
      company: "Caterpillar Inc.",
      description: "Automated diagnostic system development",
      achievements: ["Reduced troubleshooting time by 25%", "Patent-pending diagnostic algorithm", "Saved $2M annually"]
    },
    {
      title: "Tech in Residence",
      company: "AbbVie",  
      description: "Cross-platform ML-based application development",
      achievements: ["Increased user engagement by 30%", "Led cross-functional team", "Delivered under budget"]
    },
    {
      title: "Teaching Assistant",
      company: "UIC",
      description: "Algorithms and object-oriented design instruction", 
      achievements: ["Mentored 200+ students", "Improved course pass rate by 15%", "Developed automated grading system"]
    }
  ],

  skills: {
    languages: [
      { name: "Python", level: "Expert" },
      { name: "Java", level: "Advanced" },
      { name: "C++", level: "Advanced" },
      { name: "SQL", level: "Advanced" },
      { name: "JavaScript", level: "Proficient" }
    ],
    frameworks: [
      { name: "Flask", level: "Expert" },
      { name: "FastAPI", level: "Expert" },
      { name: "React.js", level: "Advanced" },
      { name: "PyTorch", level: "Expert" },
      { name: "TensorFlow", level: "Advanced" },
      { name: "Apache Spark", level: "Advanced" }
    ],
    systems: [
      { name: "Docker", level: "Expert" },
      { name: "CI/CD", level: "Advanced" },
      { name: "Kafka", level: "Advanced" },
      { name: "Distributed Systems", level: "Expert" }
    ],
    other: [
      { name: "Cryptography (Signal Protocol)", level: "Advanced" },
      { name: "MLOps", level: "Expert" },
      { name: "Agile", level: "Advanced" },
      { name: "CUDA", level: "Advanced" }
    ]
  },

  about: {
    text: "I'm a recent CS grad passionate about building systems that scale. I thrive at the intersection of AI and backend engineering, turning academic research into production-ready solutions. Outside of coding, I love mentoring students, experimenting with new tech stacks, and tackling real-world problems in collaborative, multidisciplinary teams."
  },

  contact: {
    title: "Let's connect!",
    github: "https://github.com/snigdha",
    linkedin: "https://linkedin.com/in/snigdha-dastidar", 
    email: "snigdha@example.com"
  }
};