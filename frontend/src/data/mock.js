export const portfolioData = {
  hero: {
    name: "Snigdha Ghosh Dastidar",
    tagline: "Software Engineer (Backend + ML)",
    description: "I build scalable systems and AI-powered tools that turn research into real-world impact. From healthcare AI to distributed systems, I focus on results, reliability, and user experience.",
    socialLinks: {
      resume: "/resume.pdf",
      github: "https://github.com/snigdhaghosh",
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
      description: "AI-powered diagnostic system using deep learning for medical image analysis with real-time processing capabilities and automated reporting features",
      problem: "Manual medical image analysis was time-intensive, prone to human error, and created bottlenecks in diagnostic workflows. Radiologists needed to spend 15-20 minutes per scan, leading to delayed treatment decisions and increased healthcare costs.",
      solution: "Developed a CNN-based diagnostic model using PyTorch with CUDA optimization for GPU acceleration. Implemented automated preprocessing pipeline, transfer learning from pre-trained medical imaging models, and integrated real-time inference API. Built a comprehensive MLOps pipeline with automated retraining and model versioning.",
      results: "Achieved 97.6% accuracy surpassing radiologist baseline, reduced diagnosis time by 40% (from 15 to 9 minutes per scan), deployed to 3 hospitals serving 500+ patients monthly, and reduced false negatives by 35%",
      skills: ["PyTorch", "CUDA", "Computer Vision", "MLOps", "Transfer Learning", "Medical Imaging"],
      techStack: ["Python", "PyTorch", "TensorFlow", "CUDA", "Docker", "Kubernetes", "FastAPI", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1747224317356-6dd1a4a078fd",
      github: "https://github.com/snigdhaghosh/Medical-Image-Analysis-and-Deep-Learning",
      metrics: {
        accuracy: "97.6%",
        improvement: "40% faster",
        patients: "500+/month",
        reduction: "-35% false negatives"
      }
    },
    {
      id: 2,
      title: "Signal Protocol Chat App",
      description: "End-to-end encrypted messaging application implementing Signal Protocol with perfect forward secrecy, group chat capabilities, and media sharing",
      problem: "Need for secure communication platform with forward secrecy that protects user privacy even if encryption keys are compromised. Existing solutions were either not open-source or lacked proper implementation of modern cryptographic protocols.",
      solution: "Built full-stack application implementing Signal Protocol's Double Ratchet Algorithm for end-to-end encryption. Developed custom key management system with X3DH key agreement protocol. Created WebSocket-based real-time messaging infrastructure with React frontend and Node.js backend. Implemented secure media encryption and group chat with sender keys.",
      results: "Deployed secure chat platform with perfect forward secrecy, zero data breaches in production, 500+ active users with 10K+ daily messages, and 99.9% uptime over 6 months",
      skills: ["Cryptography", "Signal Protocol", "Full-Stack Development", "WebSocket", "Security Engineering"],
      techStack: ["React.js", "Node.js", "Signal Protocol", "WebSocket", "MongoDB", "Redis", "Docker", "Nginx"],
      image: "https://images.unsplash.com/photo-1662974770404-468fd9660389",
      github: "https://github.com/snigdhaghosh/signalprotocol",
      metrics: {
        security: "Zero breaches",
        users: "500+ active",
        messages: "10K+ daily",
        uptime: "99.9%"
      }
    },
    {
      id: 3,
      title: "Real-Time Audio Transcription Extension",
      description: "Chrome extension for live audio transcription using cloud AI services with multi-language support, speaker identification, and custom vocabulary",
      problem: "Need for real-time transcription during online meetings, lectures, and video conferences. Students and professionals struggled to take notes while actively participating. Existing solutions were expensive, inaccurate, or required complex setup.",
      solution: "Developed Chrome extension using WebRTC audio capture API to stream audio in real-time. Integrated Google Speech-to-Text API with custom optimization for low-latency streaming. Implemented speaker diarization, punctuation prediction, and custom vocabulary support. Built background worker for efficient audio processing without affecting browser performance.",
      results: "95% transcription accuracy across 10+ languages, 200ms average latency for real-time display, 10K+ active users with 4.7/5 star rating, and saved users an average of 2 hours per week in note-taking",
      skills: ["Chrome Extensions", "WebRTC", "Cloud AI", "Real-time Processing", "Audio Engineering"],
      techStack: ["JavaScript", "WebRTC", "Google Speech API", "Chrome Extension API", "Firebase", "WebSocket"],
      image: "https://images.unsplash.com/photo-1631006732121-a6da2f4864d3",
      github: "https://github.com/snigdhaghosh/Real-Time-Audio-Transcript-Extension",
      metrics: {
        accuracy: "95%",
        latency: "200ms",
        users: "10K+",
        rating: "4.7/5"
      }
    },
    {
      id: 4,
      title: "Smart Credit Card Recommender",
      description: "ML-based recommendation system for personalized credit card suggestions using collaborative filtering and deep learning",
      problem: "Users struggle to find credit cards matching their spending patterns and financial goals. Traditional comparison tools only showed basic features without personalization. Banks lost potential customers due to poor matching and recommendation systems.",
      solution: "Built Spark-based recommendation engine analyzing spending behavior patterns using collaborative filtering and matrix factorization. Implemented deep learning model for credit score prediction and card eligibility. Created real-time recommendation API with sub-100ms response time. Developed data pipeline processing 100K+ user transactions daily for continuous model improvement.",
      results: "85% user satisfaction rate, 60% improvement in application conversion rate, processed 1M+ recommendations, and reduced customer acquisition cost by 40%",
      skills: ["Apache Spark", "Recommendation Systems", "Big Data", "ML", "Collaborative Filtering"],
      techStack: ["Python", "Apache Spark", "Flask", "Pandas", "Scikit-learn", "TensorFlow", "Redis", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1642132652859-3ef5a1048fd1",
      github: "https://github.com/snigdhaghosh/smart-credit-card-recommender",
      metrics: {
        satisfaction: "85%",
        conversion: "+60%",
        recommendations: "1M+",
      }
    }
  ],

  experience: [
    {
      title: "Machine Learning Researcher",
      company: "DREAM Lab, University of Illinois Chicago",
      period: "January 2024 - Present",
      location: "Chicago, IL",
      description: "Leading AI/ML research initiatives focused on optimization of deep learning pipelines, CUDA kernel development, and MLOps infrastructure for production deployment",
      achievements: [
        "Optimized ML training pipeline by 45% through custom CUDA kernel implementation and mixed-precision training, reducing training time from 8 hours to 4.4 hours",
        "Deployed 3 production ML models serving 50K+ predictions daily with 99.5% uptime and <100ms latency",
        "Led team of 4 researchers in developing automated hyperparameter optimization framework, improving model accuracy by average 8%",
        "Published 2 research papers on efficient deep learning optimization techniques at top-tier ML conferences",
        "Built comprehensive MLOps pipeline with automated testing, monitoring, and continuous deployment using Docker, Kubernetes, and CI/CD"
      ],
      technologies: ["PyTorch", "CUDA", "Docker", "Kubernetes", "Python", "TensorFlow", "MLflow", "Grafana"]
    },
    {
      title: "Researcher", 
      company: "Caterpillar Inc.",
      period: "June 2022 - May 2023",
      location: "Chicago, IL",
      description: "Developed automated diagnostic system for heavy machinery using machine learning and sensor data analysis, focusing on predictive maintenance and anomaly detection",
      achievements: [
        "Reduced troubleshooting time by 25% through ML-based automated diagnostic system analyzing 500+ sensor data points in real-time",
        "Designed and implemented patent-pending diagnostic algorithm using ensemble methods and time-series analysis",
        "Saved company $2M annually by predicting equipment failures 48 hours in advance, enabling proactive maintenance",
        "Built data pipeline processing 10TB+ of sensor data monthly from 1000+ machines across manufacturing facilities",
        "Reduced false positive alerts by 60% through advanced anomaly detection algorithms and feature engineering"
      ],
      technologies: ["Python", "Scikit-learn", "Apache Kafka", "TimescaleDB", "Docker", "Flask", "Pandas"]
    },
    {
      title: "Software Engineer Intern (Tech in Residence)",
      company: "AbbVie",
      period: "January 2023 - May 2023",
      location: "Chicago, IL",  
      description: "Led development of cross-platform ML-based healthcare application for patient engagement and clinical decision support system integration",
      achievements: [
        "Increased user engagement by 30% through implementation of personalized recommendation engine and intuitive UI/UX design",
        "Led cross-functional team of 6 engineers and designers in agile environment, delivering project 2 weeks ahead of schedule",
        "Delivered project under budget by 15% through efficient resource allocation and strategic vendor negotiations",
        "Built real-time patient monitoring dashboard processing 100K+ health metrics daily with alerting system",
        "Integrated with 3 major EHR systems (Epic, Cerner) using HL7 FHIR standards for seamless data exchange"
      ],
      technologies: ["React.js", "Node.js", "MongoDB", "Python", "TensorFlow", "AWS", "Docker"]
    },
    {
      title: "Teaching Assistant",
      company: "University of Illinois Chicago",
      period: "Aug 2021 - May 2025",
      location: "Chicago, IL",
      description: "Teaching assistant for undergraduate courses in algorithms, data structures, object-oriented design and mobile app development", 
      achievements: [
        "Mentored 200+ students across 4 semesters in algorithms and OOP concepts through weekly office hours and lab sessions",
        "Improved course pass rate by 15% through development of supplementary learning materials and interactive coding tutorials",
        "Developed automated grading system processing 5000+ code submissions, reducing grading time by 70%",
        "Conducted weekly review sessions averaging 50 students, covering complex topics like dynamic programming and graph algorithms",
        "Created 30+ original problem sets and coding challenges, adopted by department for future course offerings"
      ],
      technologies: ["Python", "Java", "C++", "Git", "Android Studio", "Flutter", "Automated Testing"]
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
    github: "https://github.com/snigdhaghosh",
    linkedin: "https://linkedin.com/in/snigdhaghoshdastidar", 
    email: "snigdha.gdastidar@gmail.com"
  }
};