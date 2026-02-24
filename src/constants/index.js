import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,

  industech,
  edunet,

  studyspired,
  websum,
  hiThere,
  littleLemon,
  crownClothing,
  quizme,
  cneh,
  mipp,
  iots,
  marketEasy,

  vnrvjiet,
  gioe
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "AI Engineer",
    icon: web,
  },
  {
    title: "Full-Stack Developer",
    icon: mobile,
  },
  {
    title: "Machine Learning",
    icon: backend,
  },
  {
    title: "Data Science",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  }
];

const experiences = [
  {
    title: "Machine Learning Intern",
    company_name: "Edunet Foundation",
    icon: edunet,
    iconBg: "#ffffff",
    date: "Dec 2024 - Jan 2025",
    points: [
      "Built a computer vision model for animal detection using ML techniques, improving detection accuracy by 20%."
    ],
  },
  {
    title: "Python & Image Processing Trainee",
    company_name: "Industech Solutions Pvt. Ltd.",
    icon: industech,
    iconBg: "#ffffff",
    date: "Dec 2023 - Jun 2024",
    points: [
      "Developed a computer vision system to detect empty parking slots from CCTV footage, reducing manual monitoring effort by 30%."
    ],
  },
];

const testimonials = [];

const projects = [
  {
    name: "MarketEasy",
    description:
      "AI-powered marketing assistant for founders — generates pitch decks, LinkedIn campaigns, and Instagram content via real-time voice/text chat. Built with a FastAPI backend (OpenAI, speech recognition) and a Next.js/React frontend featuring glass-morphism UI and Framer Motion micro-animations.",
    tags: [
      { name: "next.js", color: "blue-text-gradient" },
      { name: "fastapi", color: "green-text-gradient" },
      { name: "openai", color: "pink-text-gradient" }
    ],
    image: marketEasy,
    source_code_link: "https://github.com/venupagilla/Perpetual-Enigma",
    live_demo_link: "https://market-easy-frontend.vercel.app/",
    deployed: true
  },
  {
    name: "StudySpire",
    description:
      "AI Study & Productivity Web App featuring secure JWT authentication, Supabase Row-Level Security, and Gemini API integration for AI-generated quizzes and flashcards.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "fastapi", color: "green-text-gradient" },
      { name: "supabase", color: "pink-text-gradient" }
    ],
    image: studyspired,
    source_code_link: "https://study-spire.vercel.app/",
    live_demo_link: "https://study-spire.vercel.app/",
    deployed: true
  },
  {
    name: "WebSum",
    description: "An automated tool to summarize website content directly from URLs using GenAI and NLP techniques.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "nlp", color: "pink-text-gradient" },
      { name: "genai", color: "green-text-gradient" }
    ],
    image: websum,
    source_code_link: "https://github.com/venupagilla/WebSum",
    live_demo_link: "https://github.com/venupagilla/WebSum"
  },
  {
    name: "Quiz Me",
    description: "A web-based quiz application that allows users to test their knowledge in an interactive UI. Designed for a fast, responsive, and engaging quiz-taking experience directly in the browser.",
    tags: [
      { name: "javascript", color: "blue-text-gradient" },
      { name: "vercel", color: "green-text-gradient" },
      { name: "react", color: "pink-text-gradient" }
    ],
    image: quizme,
    source_code_link: "https://github.com/venupagilla/quiz-me",
    live_demo_link: "https://quiz-me-phi.vercel.app",
    deployed: true
  },
  {
    name: "Advanced File Encryption & Hashing Tool",
    description: "A full-stack web app for file encryption, decryption, and hashing. Enables format preview and secure processing using multiple algorithms and Key Derivation Functions (KDFs), including SHA-256 metadata generation.",
    tags: [
      { name: "fastapi", color: "blue-text-gradient" },
      { name: "react", color: "green-text-gradient" },
      { name: "python", color: "pink-text-gradient" }
    ],
    image: cneh,
    source_code_link: "https://github.com/venupagilla/CNEH-CBP",
    live_demo_link: "https://github.com/venupagilla/CNEH-CBP"
  },
  {
    name: "Medical Insurance Premium Predictor",
    description: "A machine learning project built in a Jupyter Notebook to predict a person's medical insurance premium based on input factors like age and BMI, demonstrating an end-to-end ML workflow.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "jupyter", color: "green-text-gradient" },
      { name: "machine-learning", color: "pink-text-gradient" }
    ],
    image: mipp,
    source_code_link: "https://github.com/venupagilla/Medical-Insurance-Premium-Predictor",
    live_demo_link: "https://github.com/venupagilla/Medical-Insurance-Premium-Predictor"
  },
  {
    name: "Real-time IoT Scheduler",
    description: "A project focused on scheduling and coordinating time-sensitive IoT tasks in real time. Designed to predictably organize and manage device workload execution based on strict timing constraints.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "iot", color: "green-text-gradient" },
      { name: "systems", color: "pink-text-gradient" }
    ],
    image: iots,
    source_code_link: "https://github.com/venupagilla/Real-time-iot-scheduler",
    live_demo_link: "https://github.com/venupagilla/Real-time-iot-scheduler"
  }
];

const educations = [
  {
    title: "B.Tech - CSE (Data Science)",
    school_name: "VNR Vignana Jyothi Institute of Engineering and Technology",
    date: "2024 - 2027",
    points: [
      "CGPA: 8.75",
      "Hyderabad, Telangana"
    ],
    image: vnrvjiet
  },
  {
    title: "Diploma - AI & ML",
    school_name: "Government Institute of Electronics",
    date: "2021 - 2024",
    points: [
      "CGPA: 9.2",
      "Hyderabad, Telangana"
    ],
    image: gioe
  }
];

const skills = [
  {
    category: "Languages",
    items: ["Python", "Java", "SQL", "JavaScript", "C"]
  },
  {
    category: "Web",
    items: ["React", "FastAPI", "Node.js"]
  },
  {
    category: "AI/ML",
    items: ["Torch", "Scikit-learn", "NLP", "GenAI APIs"]
  },
  {
    category: "Databases",
    items: ["Supabase", "PostgreSQL"]
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "AWS", "Postman"]
  }
];

const events = [
  {
    title: "Placeholder Event Name",
    description: "Description of the event you participated in or hosted. Replace this with your actual event details.",
    date: "Month Year"
  }
];

const achievements = [
  {
    title: "Oracle Cloud Infrastructure AI Foundations Associate",
    issuer: "Oracle"
  },
  {
    title: "AI Fundamentals",
    issuer: "DataCamp"
  },
  {
    title: "Postman API Fundamentals Student Expert",
    issuer: "Postman"
  }
];

const patents = [
  {
    title: "System And Method for Predictive Cooked Food Freshness Assessment Using Dynamic Volatile Organic Compound (VOC) Ratio Analysis",
    application_number: "202541107392",
    status: "Published",
    date: "Nov 28, 2025",
    description: "An intelligent multi-modal food degradation profiling system that predicts spoilage in cooked foods using a multi-sensor array to calculate dynamic VOC ratios. By analyzing these ratios against food-specific spoilage models, the system computes a Predictive Freshness Index (PFI), providing an early, quantitative, and non-invasive prediction of food spoilage."
  }
];

export { services, technologies, experiences, testimonials, projects, educations, skills, events, achievements, patents };