"use client"

import { useEffect, useState } from "react"
import { Play } from "lucide-react"

interface CodeEditorProps {
  fileName: string
  currentTheme?: string
  onRunCode?: (output: string[]) => void
}

export function CodeEditor({ fileName, currentTheme = "night-owl", onRunCode }: CodeEditorProps) {
  const [showCursor, setShowCursor] = useState(true)
  const [showTip, setShowTip] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)
    return () => clearInterval(interval)
  }, [])

  // Show random dev tips occasionally
  useEffect(() => {
    const tipTimer = setTimeout(() => {
      if (Math.random() > 0.7) {
        setShowTip(true)
        setTimeout(() => setShowTip(false), 5000)
      }
    }, 10000)

    return () => clearTimeout(tipTimer)
  }, [fileName])

  const devTips = [
    "💡 Tip: You don't need 100 projects — you just need one killer one (and this might be it 😉)",
    "👩‍💻 Keep scrolling, future PM at IBM",
    "🚀 Your debugging skills are getting stronger with every error",
    "✨ This portfolio shows serious attention to detail",
  ]

  const getFileContent = (fileName: string) => {
    switch (fileName) {
      case "about-me.js":
        return `// Personal Information & Background
const aboutMe = {
name: "Hanan Abdullahi",
title: "Software Engineering Student",
location: "Istanbul, Turkey",
university: "Haliç University",
graduation: "2026 — final semester in progress",

languages: ["English", "Arabic", "Turkish", "Somali", "Korean", "Japanese", "Amharic"],

personality: {
  traits: ["Problem solver", "Team player", "Quick learner"],
  workStyle: "Collaborative and detail-oriented",
  motto: "Building solutions that matter"
},

interests: [
  "Full-stack development",
  "User experience design", 
  "Clean code practices",
  "Tech innovation"
],

currentFocus: [
  "Advanced React patterns",
  "System design principles",
  "Cloud architecture"
],

funFacts: [
  "Speaks 3 languages fluently",
  "Loves debugging complex problems",
  "Coffee-powered coding sessions",
  "Always eager to learn new technologies"
]
};

function displayAboutMe() {
console.log("=== ABOUT HANAN ABDULLAHI ===");
console.log("");

console.log(\`👋 Hi! I'm \${aboutMe.name}\`);
console.log(\`🎓 \${aboutMe.title} at \${aboutMe.university}\`);
console.log(\`📍 Based in \${aboutMe.location}\`);
console.log(\`🎯 Graduating \${aboutMe.graduation}\`);
console.log("");

console.log("🗣️ Languages I speak:");
aboutMe.languages.forEach(lang => console.log(\`   • \${lang}\`));

console.log("");
console.log("✨ Personality & Work Style:");
aboutMe.personality.traits.forEach(trait => console.log(\`   • \${trait}\`));
console.log(\`   • Work Style: \${aboutMe.personality.workStyle}\`);
console.log(\`   • Motto: "\${aboutMe.personality.motto}"\`);
console.log("");

console.log("🚀 Current Focus Areas:");
aboutMe.currentFocus.forEach(focus => console.log(\`   • \${focus}\`));

console.log("");
console.log("🎉 Fun Facts:");
aboutMe.funFacts.forEach(fact => console.log(\`   • \${fact}\`));

return "Profile loaded successfully! Ready to make an impact! 🌟";
}

displayAboutMe();`

      case "projects.js":
        return `// Project Portfolio & Achievements
const projects = [
{
  id: 1,
  name: "FoodShare",
  status: "In Progress",
  technologies: ["Next.js", "Tailwind CSS"],
  description: "Food waste reduction platform connecting donors with communities",
  features: [
    "Food listing and donation system",
    "Interactive map integration",
    "User authentication and profiles",
    "Real-time pickup scheduling"
  ],
  impact: "Reducing food waste while helping local communities",
  demoUrl: "https://foodsharehan.vercel.app/",
  learnings: "First experience with Next.js and social impact development"
},

{
  id: 2,
  name: "Anime Quiz App",
  status: "Completed",
  technologies: ["HTML", "CSS", "JavaScript"],
  description: "Interactive anime knowledge quiz with dynamic questions",
  features: [
    "Dynamic question generation",
    "Score tracking system",
    "Interactive UI feedback",
    "Responsive design"
  ],
  demoUrl: "https://quiz-app-puce-eta-87.vercel.app/",
  githubUrl: "https://github.com/leyvinit/quiz-app",
  learnings: "Mastering vanilla JavaScript and DOM manipulation"
},

{
  id: 3,
  name: "Weather View App",
  status: "Completed",
  technologies: ["React.js", "Tailwind CSS", "OpenWeather API"],
  description: "Real-time weather application with location-based forecasts",
  features: [
    "Real-time weather data",
    "Location-based search",
    "5-day forecast display",
    "Responsive mobile design"
  ],
  demoUrl: "https://weather-view-chi.vercel.app/",
  githubUrl: "https://github.com/leyvinit/weather-view",
  learnings: "Learning React.js and API integration patterns"
},

{
  id: 4,
  name: "Calculator App",
  status: "Completed",
  technologies: ["HTML", "CSS", "JavaScript"],
  description: "Feature-rich calculator built with vanilla JavaScript",
  features: [
    "Basic arithmetic operations",
    "Memory functions",
    "Keyboard input support",
    "Clean, intuitive interface"
  ],
  demoUrl: "https://calculator-app-dun-delta.vercel.app/",
  githubUrl: "https://github.com/leyvinit/calculator-app",
  learnings: "Strengthening JavaScript fundamentals and mathematical logic"
},

{
  id: 5,
  name: "Transportation Vehicle Management System",
  status: "Completed",
  technologies: ["React.js", "Tailwind CSS"],
  description: "Comprehensive vehicle management system mockup with analysis",
  features: [
    "Use case diagrams",
    "Entity-relationship diagrams",
    "Gantt chart planning",
    "Interactive mockup screens"
  ],
  githubUrl: "https://github.com/leyvinit/transportation_system_mockup",
  learnings: "Understanding software requirements analysis and system design"
}
];

function analyzeProjects() {
const stats = {
  total: projects.length,
  completed: projects.filter(p => p.status === "Completed").length,
  inProgress: projects.filter(p => p.status === "In Progress").length,
  technologies: [...new Set(projects.flatMap(p => p.technologies))]
};

console.log("=== PROJECT PORTFOLIO ===");
console.log("");

console.log("📊 Portfolio Statistics:");
console.log(\`   • Total Projects: \${stats.total}\`);
console.log(\`   • Completed: \${stats.completed}\`);
console.log(\`   • In Progress: \${stats.inProgress}\`);
console.log("");

console.log("🛠️ Technologies Used:");
stats.technologies.forEach(tech => console.log(\`   • \${tech}\`));
console.log("");

console.log("🚀 Featured Projects:");
console.log("");

projects.forEach((project, index) => {
  console.log(\`\${index + 1}. \${project.name} [\${project.status}]\`);
  console.log(\`   📝 \${project.description}\`);
  console.log(\`   🔧 Tech Stack: \${project.technologies.join(", ")}\`);
  
  if (project.demoUrl) {
    console.log(\`   🌐 Demo: \${project.demoUrl}\`);
  }
  
  if (project.githubUrl) {
    console.log(\`   📂 Code: \${project.githubUrl}\`);
  }
  
  console.log(\`   📚 Learning: \${project.learnings}\`);
  console.log("");
});

return "All projects loaded! Ready to discuss any of them! 💼";
}

analyzeProjects();`

      case "skills.js":
        return `// Technical Skills & Expertise
const skillsMatrix = {
languages: {
  proficient: [
    { name: "JavaScript", level: 85, experience: "2+ years" },
    { name: "Python", level: 80, experience: "2+ years" },
    { name: "PHP", level: 75, experience: "1.5+ years" }
  ],
  familiar: [
    { name: "Java", level: 65, experience: "1 year" },
    { name: "C", level: 60, experience: "1 year" }
  ],
  learning: [
    { name: "TypeScript", level: 70, experience: "6 months" },
    { name: "Go", level: 40, experience: "Learning" }
  ]
},

frontend: {
  frameworks: [
    { name: "React", level: 85, projects: 4 },
    { name: "HTML5", level: 90, projects: 8 },
    { name: "CSS3", level: 85, projects: 8 }
  ],
  styling: [
    { name: "Tailwind CSS", level: 80, projects: 3 },
    { name: "Bootstrap", level: 75, projects: 2 }
  ],
  tools: ["Webpack", "Vite", "npm", "Figma"]
},

backend: {
  languages: ["PHP", "Python", "Node.js"],
  concepts: [
    "REST API Development",
    "MVC Architecture", 
    "Database Design",
    "Server-side Logic"
  ]
},

databases: {
  relational: [
    { name: "MySQL", level: 80, projects: 3 },
    { name: "PostgreSQL", level: 70, projects: 1 }
  ],
  noSQL: [
    { name: "MongoDB", level: 65, projects: 1 },
    { name: "Firebase Firestore", level: 75, projects: 2 }
  ]
},

tools: {
  development: ["VS Code", "IntelliJ IDEA", "Git", "GitHub"],
  testing: ["Postman", "Browser DevTools"],
  design: ["Figma", "Adobe XD", "Canva"]
}
};

function displaySkillsAssessment() {
console.log("=== TECHNICAL SKILLS ASSESSMENT ===");
console.log("");

console.log("💻 Programming Languages:");
console.log("");
console.log("   🚀 Proficient:");
skillsMatrix.languages.proficient.forEach(lang => {
  console.log(\`      • \${lang.name}: \${lang.level}% (\${lang.experience})\`);
});

console.log("");
console.log("   📚 Familiar:");
skillsMatrix.languages.familiar.forEach(lang => {
  console.log(\`      • \${lang.name}: \${lang.level}% (\${lang.experience})\`);
});

console.log("");
console.log("   🌱 Currently Learning:");
skillsMatrix.languages.learning.forEach(lang => {
  console.log(\`      • \${lang.name}: \${lang.level}% (\${lang.experience})\`);
});

console.log("");
console.log("🎨 Frontend Development:");
skillsMatrix.frontend.frameworks.forEach(framework => {
  console.log(\`   • \${framework.name}: \${framework.level}% (\${framework.projects} projects)\`);
});

console.log("");
console.log("⚙️ Backend Development:");
skillsMatrix.backend.concepts.forEach(concept => {
  console.log(\`   • \${concept}\`);
});

console.log("");
console.log("🗄️ Database Technologies:");
console.log("   SQL Databases:");
skillsMatrix.databases.relational.forEach(db => {
  console.log(\`      • \${db.name}: \${db.level}%\`);
});
console.log("   NoSQL Databases:");
skillsMatrix.databases.noSQL.forEach(db => {
  console.log(\`      • \${db.name}: \${db.level}%\`);
});

console.log("");
console.log("🛠️ Development Tools:");
console.log(\`   • Development: \${skillsMatrix.tools.development.join(", ")}\`);
console.log(\`   • Testing: \${skillsMatrix.tools.testing.join(", ")}\`);
console.log(\`   • Design: \${skillsMatrix.tools.design.join(", ")}\`);

const allSkills = skillsMatrix.languages.proficient.concat(skillsMatrix.languages.familiar);
const averageLevel = allSkills.reduce((sum, skill) => sum + skill.level, 0) / allSkills.length;

console.log("");
console.log(\`📊 Overall Skill Level: \${Math.round(averageLevel)}%\`);
console.log("🎯 Status: Ready for professional development opportunities!");

return "Skills assessment complete! Ready to put them to work! 💪";
}

displaySkillsAssessment();`

      case "contact.js":
        return `// Contact Information & Professional Links
const contactInfo = {
personal: {
  name: "Hanan Abdullahi",
  email: "hannansalahbts0099@gmail.com",
  phone: "+90 536 390 2437",
  location: {
    city: "Istanbul",
    province: "Istanbul",
    country: "Türkiye",
    timezone: "Turkey Time (TRT, UTC+3)"
  }
},

professional: {
  linkedIn: {
    url: "https://linkedin.com/in/han-has",
    description: "Professional network and career updates"
  },
  github: {
    url: "https://github.com/leyvinit", 
    description: "Code repositories and project showcases"
  },
  portfolio: {
    description: "Interactive VS Code portfolio experience"
  }
},

availability: {
  status: "Actively seeking opportunities",
  responseTime: "Within 24 hours",
  preferredContact: "Email for formal inquiries, LinkedIn for networking"
},

opportunities: {
  primary: [
    "Software Engineering Internships",
    "Junior Developer Positions", 
    "Frontend Development Roles",
    "Full-stack Development Opportunities"
  ],
  interests: [
    "Technology startups",
    "E-commerce platforms",
    "Educational technology", 
    "Social impact applications"
  ]
},

communication: {
  languages: ["English", "Arabic", "Somali"],
  strengths: [
    "Clear technical communication",
    "Active listening",
    "Cross-cultural collaboration",
    "Problem-solving discussions"
  ]
}
};

function displayContactInfo() {
console.log("=== CONTACT INFORMATION ===");
console.log("");

console.log("👤 Personal Details:");
console.log(\`   • Name: \${contactInfo.personal.name}\`);
console.log(\`   • Email: \${contactInfo.personal.email}\`);
console.log(\`   • Phone: \${contactInfo.personal.phone}\`);
console.log(\`   • Location: \${contactInfo.personal.location.city}, \${contactInfo.personal.location.country}\`);
console.log(\`   • Timezone: \${contactInfo.personal.location.timezone}\`);
console.log("");

console.log("🔗 Professional Links:");
console.log(\`   • LinkedIn: \${contactInfo.professional.linkedIn.url}\`);
console.log(\`     → \${contactInfo.professional.linkedIn.description}\`);
console.log(\`   • GitHub: \${contactInfo.professional.github.url}\`);
console.log(\`     → \${contactInfo.professional.github.description}\`);
console.log(\`   • Portfolio: \${contactInfo.professional.portfolio.description}\`);
console.log("");

console.log("📅 Availability:");
console.log(\`   • Status: \${contactInfo.availability.status}\`);
console.log(\`   • Response Time: \${contactInfo.availability.responseTime}\`);
console.log(\`   • Best Contact: \${contactInfo.availability.preferredContact}\`);
console.log("");

console.log("💼 Seeking Opportunities:");
contactInfo.opportunities.primary.forEach(opp => {
  console.log(\`   • \${opp}\`);
});

console.log("");
console.log("🏢 Industry Interests:");
contactInfo.opportunities.interests.forEach(interest => {
  console.log(\`   • \${interest}\`);
});

console.log("");
console.log("🗣️ Communication:");
console.log(\`   • Languages: \${contactInfo.communication.languages.join(", ")}\`);
console.log("   • Strengths:");
contactInfo.communication.strengths.forEach(strength => {
  console.log(\`      • \${strength}\`);
});

console.log("");
console.log("📋 Quick Contact Summary:");
console.log(\`   📧 \${contactInfo.personal.email}\`);
console.log(\`   📞 \${contactInfo.personal.phone}\`);
console.log(\`   📍 \${contactInfo.personal.location.city}, \${contactInfo.personal.location.country}\`);
console.log(\`   ✅ \${contactInfo.availability.status}\`);
console.log(\`   ⏱️ Response time: \${contactInfo.availability.responseTime}\`);
console.log("");
console.log("🎯 Ready to discuss opportunities and collaborate!");
console.log("Let's build something amazing together! 🚀");

return "Contact information loaded! Ready to connect! 📞";
}

displayContactInfo();`

      case "experience.js":
        return `// Professional Experience
const experience = [
  {
    role: "UX/UI Designer Intern",
    company: "BlueSense AI",
    dates: "August 2025 – October 2025",
    highlights: [
      "Enhanced UI designs for visual clarity and user experience",
      "Refined layouts, color schemes, and typography for usability",
      "Followed brand guidelines and existing design systems",
      "Designed and refined interface components in Figma"
    ]
  },
  {
    role: "AI & Cybersecurity Intern",
    company: "EARTech IT",
    dates: "August 2025 – September 2025",
    highlights: [
      "Built Laravel applications with dynamic filtering and access control",
      "Designed Figma login and sign-up interfaces and implemented responsive Bootstrap UI",
      "Used Microsoft Azure to host the project and manage application data",
      "Modified databases and wrote SQL queries, including data seeding"
    ]
  },
  {
    role: "ML Intern",
    company: "FlyRank",
    dates: "Date to confirm",
    highlights: ["Gained hands-on experience with machine-learning concepts and workflows", "Contributed to ML-related team tasks and projects"]
  },
  {
    role: "Frontend Developer",
    company: "Dalson",
    dates: "June 2024 – July 2024",
    highlights: ["Developed and maintained internal web pages", "Improved usability, visual quality, and user experience with the team"]
  },
  {
    role: "Conversion Agent",
    company: "Axia Investment",
    dates: "Date to confirm",
    highlights: ["Explained services clearly to prospective clients", "Handled questions and objections through active listening and persuasion", "Worked toward conversion and business targets in a fast-paced environment"]
  }
];

experience.forEach(({ role, company, dates, highlights }) => {
  console.log("\\n" + role + " — " + company + " (" + dates + ")");
  highlights.forEach(highlight => console.log("   • " + highlight));
});

"Experience loaded — five roles across design, AI, frontend, and client-facing work.";`

      default:
        return `// Welcome to Hanan's Interactive Portfolio
//
// This VS Code-inspired portfolio showcases my projects, skills, and experience
// Navigate through the files using the explorer on the left
//
// Quick Tips:
// • Press Ctrl+Shift+P to open the command palette
// • Press Ctrl+\` to toggle the terminal
// • Click the Extensions icon for some fun surprises!
// • Try the Konami code: ↑ ↑ ↓ ↓ ← → ← → B A

const portfolio = {
creator: "Hanan Abdullahi",
purpose: "Interactive resume and project showcase",
technology: "React + TypeScript + Tailwind CSS", 
inspiration: "Visual Studio Code interface",

features: [
  "Syntax-highlighted code display",
  "Interactive file explorer",
  "Command palette functionality",
  "Integrated terminal simulation", 
  "Theme switching capabilities",
  "Hidden easter eggs and surprises"
],

message: "Thanks for exploring my portfolio!"
};

function displayWelcome() {
console.log("=== WELCOME TO HANAN'S PORTFOLIO ===");
console.log("");
console.log(\`👋 Created by: \${portfolio.creator}\`);
console.log(\`🎯 Purpose: \${portfolio.purpose}\`);
console.log(\`⚙️ Built with: \${portfolio.technology}\`);
console.log("");

console.log("✨ Features:");
portfolio.features.forEach(feature => {
  console.log(\`   • \${feature}\`);
});

console.log("");
console.log(\`💝 \${portfolio.message}\`);
console.log("");
console.log("🚀 Explore the files to learn more about my journey!");

return "Portfolio loaded successfully!";
}

displayWelcome();`
    }
  }

  const getExecutionOutput = (fileName: string): string[] => {
    switch (fileName) {
      case "about-me.js":
        return [
          "=== ABOUT HANAN ABDULLAHI ===",
          "",
          "👋 Hi! I'm Hanan Abdullahi",
          "🎓 Software Engineering Student at Haliç University",
          "📍 Based in Istanbul, Turkey",
          "🎯 Graduating May 2026",
          "",
          "🗣️ Languages I speak:",
          "   • English",
          "   • Arabic",
          "   • Turkish",
          "   • Somali",
          "   • Korean",
          "   • Japanese",
          "   • Amharic",
          "",
          "✨ Personality & Work Style:",
          "   • Problem solver",
          "   • Team player",
          "   • Quick learner",
          "   • Work Style: Collaborative and detail-oriented",
          '   • Motto: "Building solutions that matter"',
          "",
          "🚀 Current Focus Areas:",
          "   • Advanced React patterns",
          "   • System design principles",
          "   • Cloud architecture",
          "",
          "🎉 Fun Facts:",
          "   • Speaks 3 languages fluently",
          "   • Loves debugging complex problems",
          "   • Coffee-powered coding sessions",
          "   • Always eager to learn new technologies",
          "",
          "✅ Profile loaded successfully! Ready to make an impact! 🌟",
        ]

      case "projects.js":
        return [
          "=== PROJECT PORTFOLIO ===",
          "",
          "📊 Portfolio Statistics:",
          "   • Total Projects: 5",
          "   • Completed: 3",
          "   • In Progress: 1",
          "",
          "🛠️ Technologies Used:",
          "   • Next.js",
          "   • Tailwind CSS",
          "   • HTML",
          "   • CSS",
          "   • JavaScript",
          "   • React.js",
          "   • OpenWeather API",
          "",
          "🚀 Featured Projects:",
          "",
          "1. FoodShare [In Progress]",
          "   📝 Food waste reduction platform connecting donors with communities",
          "   🔧 Tech Stack: Next.js, Tailwind CSS",
          "   🌐 Demo: https://foodsharehan.vercel.app/",
          "   📚 Learning: First experience with Next.js and social impact development",
          "",
          "2. Anime Quiz App [Completed]",
          "   📝 Interactive anime knowledge quiz with dynamic questions",
          "   🔧 Tech Stack: HTML, CSS, JavaScript",
          "   🌐 Demo: https://quiz-app-puce-eta-87.vercel.app/",
          "   📂 Code: https://github.com/leyvinit/quiz-app",
          "   📚 Learning: Mastering vanilla JavaScript and DOM manipulation",
          "",
          "3. Weather View App [Completed]",
          "   📝 Real-time weather application with location-based forecasts",
          "   🔧 Tech Stack: React.js, Tailwind CSS, OpenWeather API",
          "   🌐 Demo: https://weather-view-chi.vercel.app/",
          "   📂 Code: https://github.com/leyvinit/weather-view",
          "   📚 Learning: Learning React.js and API integration patterns",
          "",
          "4. Calculator App [Completed]",
          "   📝 Feature-rich calculator built with vanilla JavaScript",
          "   🔧 Tech Stack: HTML, CSS, JavaScript",
          "   🌐 Demo: https://calculator-app-dun-delta.vercel.app/",
          "   📂 Code: https://github.com/leyvinit/calculator-app",
          "   📚 Learning: Strengthening JavaScript fundamentals and mathematical logic",
          "",
          "5. Transportation Vehicle Management System [Completed]",
          "   📝 Comprehensive vehicle management system mockup with analysis",
          "   🔧 Tech Stack: React.js, Tailwind CSS",
          "   📂 Code: https://github.com/leyvinit/transportation_system_mockup",
          "   📚 Learning: Understanding software requirements analysis and system design",
          "",
          "✅ All projects loaded! Ready to discuss any of them! 💼",
        ]

      case "skills.js":
        return [
          "=== TECHNICAL SKILLS ASSESSMENT ===",
          "",
          "💻 Programming Languages:",
          "",
          "   🚀 Proficient:",
          "      • JavaScript: 85% (2+ years)",
          "      • Python: 80% (2+ years)",
          "      • PHP: 75% (1.5+ years)",
          "",
          "   📚 Familiar:",
          "      • Java: 65% (1 year)",
          "      • C: 60% (1 year)",
          "",
          "   🌱 Currently Learning:",
          "      • TypeScript: 70% (6 months)",
          "      • Go: 40% (Learning)",
          "",
          "🎨 Frontend Development:",
          "   • React: 85% (4 projects)",
          "   • HTML5: 90% (8 projects)",
          "   • CSS3: 85% (8 projects)",
          "",
          "⚙️ Backend Development:",
          "   • REST API Development",
          "   • MVC Architecture",
          "   • Database Design",
          "   • Server-side Logic",
          "",
          "🗄️ Database Technologies:",
          "   SQL Databases:",
          "      • MySQL: 80%",
          "      • PostgreSQL: 70%",
          "   NoSQL Databases:",
          "      • MongoDB: 65%",
          "      • Firebase Firestore: 75%",
          "",
          "🛠️ Development Tools:",
          "   • Development: VS Code, IntelliJ IDEA, Git, GitHub",
          "   • Testing: Postman, Browser DevTools",
          "   • Design: Figma, Adobe XD, Canva",
          "",
          "📊 Overall Skill Level: 73%",
          "🎯 Status: Ready for professional development opportunities!",
          "",
          "✅ Skills assessment complete! Ready to put them to work! 💪",
        ]

      case "contact.js":
        return [
          "=== CONTACT INFORMATION ===",
          "",
          "👤 Personal Details:",
          "   • Name: Hanan Abdullahi",
          "   • Email: nakohoka25@gmail.com",
          "   • Phone: +90 538 522 0604",
          "   • Location: Başakşehir, Turkey",
          "   • Timezone: Turkey Time (TRT, UTC+3)",
          "",
          "🔗 Professional Links:",
          "   • LinkedIn: https://linkedin.com/in/hananabdulahi",
          "     → Professional network and career updates",
          "   • GitHub: https://github.com/leyvinit",
          "     → Code repositories and project showcases",
          "   • Portfolio: Interactive VS Code portfolio experience",
          "",
          "📅 Availability:",
          "   • Status: Actively seeking opportunities",
          "   • Response Time: Within 24 hours",
          "   • Best Contact: Email for formal inquiries, LinkedIn for networking",
          "",
          "💼 Seeking Opportunities:",
          "   • Software Engineering Internships",
          "   • Junior Developer Positions",
          "   • Frontend Development Roles",
          "   • Full-stack Development Opportunities",
          "",
          "🏢 Industry Interests:",
          "   • Technology startups",
          "   • E-commerce platforms",
          "   • Educational technology",
          "   • Social impact applications",
          "",
          "🗣️ Communication:",
          "   • Languages: English, Arabic, Somali",
          "   • Strengths:",
          "      • Clear technical communication",
          "      • Active listening",
          "   • Cross-cultural collaboration",
          "   • Problem-solving discussions",
          "",
          "📋 Quick Contact Summary:",
          "   📧 nakohoka25@gmail.com",
          "   📞 +90 538 522 0604",
          "   📍 Başakşehir, Turkey",
          "   ✅ Actively seeking opportunities",
          "   ⏱️ Response time: Within 24 hours",
          "",
          "🎯 Ready to discuss opportunities and collaborate!",
          "Let's build something amazing together! 🚀",
          "",
          "✅ Contact information loaded! Ready to connect! 📞",
        ]

      default:
        return [
          "=== WELCOME TO HANAN'S PORTFOLIO ===",
          "",
          "👋 Created by: Hanan Abdullahi",
          "🎯 Purpose: Interactive resume and project showcase",
          "⚙️ Built with: React + TypeScript + Tailwind CSS",
          "",
          "✨ Features:",
          "   • Syntax-highlighted code display",
          "   • Interactive file explorer",
          "   • Command palette functionality",
          "   • Integrated terminal simulation",
          "   • Theme switching capabilities",
          "   • Hidden easter eggs and surprises",
          "",
          "💝 Thanks for exploring my portfolio!",
          "",
          "🚀 Explore the files to learn more about my journey!",
          "",
          "✅ Portfolio loaded successfully!",
        ]
    }
  }

  const handleRunCode = () => {
    const output = getExecutionOutput(fileName)
    if (onRunCode) {
      onRunCode(output)
    }
  }

  // Render syntax-highlighted code using React components
  const renderHighlightedCode = (code: string) => {
    const lines = code.split("\n")

    return lines.map((line, lineIndex) => {
      const tokens = []
      const currentIndex = 0

      // Simple tokenizer for JavaScript
      const patterns = [
        { type: "comment", regex: /\/\/.*$/g, color: "#637777" },
        {
          type: "keyword",
          regex:
            /\b(const|let|var|function|return|export|default|if|else|forEach|switch|case|new|class|extends|import|from)\b/g,
          color: "#c792ea",
        },
        { type: "boolean", regex: /\b(true|false|null|undefined)\b/g, color: "#ff6363" },
        { type: "string", regex: /"([^"\\]|\\.)*"|'([^'\\]|\\.)*'|`([^`\\]|\\.)*`/g, color: "#ecc48d" },
        { type: "number", regex: /\b\d+(\.\d+)?\b/g, color: "#f78c6c" },
        {
          type: "method",
          regex:
            /\.(log|forEach|filter|map|join|push|pop|slice|splice|indexOf|includes|replace|split|trim|toLowerCase|toUpperCase)\b/g,
          color: "#82aaff",
        },
        { type: "console", regex: /\bconsole\b/g, color: "#82aaff" },
      ]

      // Find all matches for this line
      const matches = []
      patterns.forEach((pattern) => {
        let match
        const regex = new RegExp(pattern.regex.source, pattern.regex.flags)
        while ((match = regex.exec(line)) !== null) {
          matches.push({
            start: match.index,
            end: match.index + match[0].length,
            color: pattern.color,
            text: match[0],
          })
        }
      })

      // Sort matches by start position
      matches.sort((a, b) => a.start - b.start)

      // Build tokens
      let pos = 0
      matches.forEach((match) => {
        // Add text before match
        if (pos < match.start) {
          tokens.push({
            text: line.slice(pos, match.start),
            color: "#d6deeb",
          })
        }
        // Add highlighted match
        tokens.push({
          text: match.text,
          color: match.color,
        })
        pos = match.end
      })

      // Add remaining text
      if (pos < line.length) {
        tokens.push({
          text: line.slice(pos),
          color: "#d6deeb",
        })
      }

      // If no tokens, add the whole line
      if (tokens.length === 0) {
        tokens.push({
          text: line,
          color: "#d6deeb",
        })
      }

      return (
        <div key={lineIndex} className="flex">
          <span className="text-[#8892b0] text-right w-8 mr-4 select-none">{lineIndex + 1}</span>
          <span className="flex-1">
            {tokens.map((token, tokenIndex) => (
              <span key={tokenIndex} style={{ color: token.color }}>
                {token.text}
              </span>
            ))}
          </span>
        </div>
      )
    })
  }

  return (
    <div className="h-full bg-[#011627] flex flex-col relative">
      {showTip && (
        <div className="fixed top-20 right-4 bg-[#7fdbca] text-[#011627] p-3 rounded-lg shadow-lg z-10 max-w-sm">
          <div className="text-sm font-medium">{devTips[Math.floor(Math.random() * devTips.length)]}</div>
          <button
            onClick={() => setShowTip(false)}
            className="absolute top-1 right-2 text-[#011627] hover:bg-[#64b5a6] rounded px-1"
          >
            ×
          </button>
        </div>
      )}

      {/* Fixed Header */}
      <div className="bg-[#011627] border-b border-[#1e2d3d] p-4 flex items-center justify-between text-xs text-[#8892b0] sticky top-0 z-10">
        <div className="flex items-center">
          <span className="mr-4">📄</span>
          <span>{fileName}</span>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={handleRunCode}
            className="flex items-center space-x-2 bg-[#7fdbca] text-[#011627] px-3 py-1 rounded hover:bg-[#64b5a6] transition-colors font-bold"
          >
            <Play size={12} />
            <span>Run</span>
          </button>
          <span>Press Ctrl+` for terminal | Ctrl+Shift+P for commands</span>
        </div>
      </div>

      {/* Scrollable Code Content */}
      <div className="flex-1 overflow-auto p-4 font-mono text-sm leading-relaxed">
        <div className="relative">
          <pre className="whitespace-pre-wrap">
            <code>{renderHighlightedCode(getFileContent(fileName))}</code>
          </pre>
          {showCursor && <span className="bg-[#d6deeb] text-[#011627] animate-pulse inline-block w-2 h-5 ml-1">|</span>}
        </div>
      </div>

      {/* Fixed Footer */}
      <div className="bg-[#011627] border-t border-[#1e2d3d] p-6 text-xs text-[#8892b0] sticky bottom-0 z-10">
        <div className="flex justify-between items-center mb-2">
          <span>UTF-8</span>
          <span>JavaScript</span>
          <span>Ln {getFileContent(fileName).split("\n").length}, Col 1</span>
        </div>
        <div className="text-center text-[#637777] text-xs border-t border-[#1e2d3d] pt-2">
          <div>This is a proprietary product of Hanan Abdullahi. Do not reproduce without permission.</div>
          <div className="mt-1">© 2024 Hanan Abdullahi. All rights reserved.</div>
        </div>
      </div>
    </div>
  )
}
