export const personalInfo = {
  name: 'Snigdha Ghosh Dastidar',
  title: 'Software Engineer & ML Researcher',
  location: 'Chicago, IL',
  bio: 'MS Computer Science graduate from UIC with expertise in machine learning, full-stack development, and cloud technologies. Passionate about building scalable, impactful software solutions.',
  // about: "I'm a software engineer and machine learning researcher with a passion for building things that matter. From crafting scalable microservices at Fortune 500 companies to pushing the boundaries of medical AI research, I thrive at the intersection of engineering and innovation. I've collaborated with multi-disciplinary teams across healthcare, manufacturing, and education, bringing both technical depth and a human-centered approach to every problem I tackle.",
  about: "I am a software engineer and researcher who enjoys building things at the intersection of AI, computer vision, and full stack development. I have worked on everything from medical imaging and 3D reconstruction to scalable APIs and ML systems, with experience at AbbVie, Caterpillar, and research labs at the University of Illinois Chicago, where I completed both my B.S. and M.S. in Computer Science.\n\nOutside of tech, I am usually behind a camera, trying a new baking recipe, or searching for the next great cup of coffee. I like building things that are thoughtful, creative, and actually useful, whether it is software or banana bread.",
  email: 'snigdha.gdastidar@gmail.com',
  linkedin: 'https://linkedin.com/in/snigdhaghoshdastidar',
  stats: [
    { value: '3+', label: 'Years of Experience' },
    { value: '5+', label: 'Cross-Functional Teams' },
    { value: '24/7', label: 'Curiosity for Building' },
  ],
};

export const skills = [
  {
    icon: 'code',
    title: 'Languages',
    items: ['Python', 'Java', 'C', 'C++', 'JavaScript', 'SQL', 'Bash', 'Powershell', 'Dart (Flutter)'],
  },
  {
    icon: 'braces',
    title: 'Frameworks & APIs',
    items: ['Node.js', 'FastAPI', 'REST APIs', 'WebSockets', 'Maven', 'Event-Driven Architecture', 'JSON', 'XML'],
  },
  {
    icon: 'cloud',
    title: 'Cloud & DevOps',
    items: ['GCP', 'Docker', 'CI/CD', 'GitHub', 'Git', 'Android Studio', 'Linux', 'Agile', 'SDLC'],
  },
  {
    icon: 'database',
    title: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'NoSQL', 'RDBMS'],
  },
];

export const experience = [
  {
    period: 'May 2024 - Present',
    duration: '2 yrs 1 mo',
    role: 'Machine Learning Researcher',
    company: 'DREAMLab, University of Illinois Chicago',
    description: 'Computer vision and GenAI for medical image segmentation and automated diagnostics.',
    description: 'Building AI-driven medical imaging pipelines using computer vision and GenAI models for automated segmentation and diagnostics. Optimized GPU-accelerated training workflows and reduced manual review time through innovative model architectures and data augmentation techniques.',
    tags: ['PyTorch', 'TensorFlow', 'Docker', 'CUDA', 'GANs', 'Diffusion Models', 'MedSAM', 'MONAI'],
  },
  {
    period: 'Aug 2023 - May 2025',
    duration: '1 yr 10 mos',
    role: 'Graduate Teaching Assistant',
    company: 'University of Illinois Chicago',
    description: 'Led lab sessions and mentored 200+ students in software development, systems programming, and data structures. Designed testing and debugging exercises focused on real-world engineering practices and software design principles.',
    tags: ['Python', 'Java', 'pytest', 'JUnit', 'Software Design Patterns'],
  },
  {
    period: 'Jan 2023 - May 2023',
    duration: '5 mos',
    role: 'Software Engineer Intern',
    company: 'AbbVie, UIC Innovation Center',
    description: 'Developed a cross-platform React application with secure Spring Boot APIs and integrated a BERT-based NLP engine for personalized skill matching. Improved performance, maintainability, and user engagement through optimized backend and frontend workflows.',
    tags: ['React', 'Java', 'Spring Boot', 'BERT', 'NLP', 'JUnit', 'Jest'],
  },
  {
    period: 'Jun 2022 - May 2023',
    duration: '1 yr',
    role: 'Software Research Engineer',
    company: 'Caterpillar Inc., UIC Innovation Center',
    description: 'Architected scalable ML-driven systems and designed event-driven microservices using Apache Kafka and REST APIs. Collaborated with stakeholders to define product requirements and improve troubleshooting efficiency across data pipelines.',
    tags: ['Apache Kafka', 'NoSQL', 'REST APIs', 'Figma', 'Agile', 'Microservices'],
  },
  {
    period: 'Aug 2021 - May 2023',
    duration: '1 yr 10 mos',
    role: 'Undergraduate Teaching Assistant',
    company: 'University of Illinois Chicago',
    description: 'Supported students in algorithms, object-oriented programming, and software design through mentoring, debugging guidance, and lab instruction. Helped simplify complex concepts into practical, hands-on problem solving.',
    tags: ['Data Structures', 'Algorithms', 'OOP', 'Debugging'],
  },
  {
    period: 'Aug 2021 - May 2022',
    duration: '10 mos',
    role: 'Engineering Success Program Mentor',
    company: 'University of Illinois Chicago',
    description: 'Mentored incoming engineering students on academic growth, career development, and navigating university life. Organized guidance sessions focused on leadership, communication, and long-term success strategies.',    
    tags: ['Mentoring', 'Leadership', 'Communication'],
  },
  {
    period: 'May 2022',
    duration: '1 mo',
    role: 'Computer Science Intern',
    company: 'OSF HealthCare',
    description: 'Contributed to healthcare technology research projects focused on data analysis and software-driven solutions. Assisted in exploring innovative applications of computing within clinical and healthcare environments.',
    tags: ['Python', 'Data Analysis', 'Healthcare Tech'],
  },
];

export const projects = [
  {
    date: 'August 2025',
    title: 'Real-time Audio Transcription Extension',
    description: 'AI-powered Chrome extension that transcribes browser audio in real time using LangChain and Gemini APIs. Designed scalable audio streaming pipelines, retry-aware processing, and export features for long-duration sessions.',
    tags: ['JavaScript', 'HTML', 'CSS', 'LangChain', 'Google Gemini 2.5', 'Manifest V3'],
    github: 'https://github.com/snigdhaghosh/Real-Time-Audio-Transcript-Extension',
  },
  {
    date: 'June 2025',
    title: 'Smart Credit Card Recommender',
    description: 'Full-stack credit card recommendation platform with rule-based scoring and personalized rewards analysis. Integrated Flask APIs, SQLAlchemy, and distributed processing workflows for scalable recommendation generation.',
    tags: ['Python', 'Flask', 'JavaScript', 'HTML5', 'CSS3', 'SQLAlchemy', 'Apache Spark', 'MapReduce', 'Jenkins'],
    github: 'https://github.com/snigdhaghosh/smart-credit-card-recommender',
  },
  {
    date: 'May 2025',
    title: 'LLM Evaluation for Class-Level Code Generation',
    description: 'End-to-end benchmarking framework to evaluate LLMs on class-level code generation tasks across multiple software domains. Automated large-scale testing, pass@k evaluation, and cost-performance analysis for 14 models.',
    tags: ['Python', 'JSON', 'HuggingFace', 'OpenAI API', 'Google API', 'Groq API'],
    github: 'https://github.com/snigdhaghosh/Class-Level-Code-Generation-Using-LLMs',
  },
  {
    date: 'May 2024',
    title: 'Signal Protocol Chat Application',
    description: 'Full-stack encrypted real-time chat application using the Signal Protocol with secure key exchange and forward secrecy. Built scalable backend services, optimized API communication, and streamlined cloud deployment workflows.',
    tags: ['React.js', 'Node.js', 'Python', 'Angular', 'Signal Protocol', 'GitHub Actions', 'Google Cloud Run'],
    github: 'https://github.com/snigdhaghosh/signalprotocol',
  },
  {
    date: 'December 2022',
    title: 'Global Democracy and Freedom Analysis',
    description: 'Analyzed global democracy and freedom datasets using machine learning and distributed data processing techniques. Trained predictive models, evaluated performance metrics, and designed interactive visualizations for data exploration.',
    tags: ['Python', 'SQL', 'Scikit-learn', 'SVM', 'KNN', 'Spark', 'Databricks'],
    github: 'https://github.com/uic-cs418/cs418-spring22-eda-llc/blob/main/Final%20Project%20by%20EDA%20LLC..ipynb',
  },
];

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];
