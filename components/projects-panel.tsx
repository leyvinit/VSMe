"use client"

import { useState } from "react"
import { ExternalLink, Github, Calendar, Code, Lightbulb } from "lucide-react"

export function ProjectsPanel() {
  const [selectedProject, setSelectedProject] = useState<any>(null)

  const projects = [
    {
      id: 1,
      name: "FoodShare",
      category: "Social Impact",
      description: "Food waste reduction platform connecting donors with local communities",
      longDescription:
        "A comprehensive platform designed to tackle food waste by connecting food donors with local communities in need. Features real-time location mapping, pickup scheduling, and user rating systems.",
      skills: ["Next.js", "Tailwind CSS", "Solution Oriented", "Social Impact"],
      techStack: ["Next.js", "Tailwind CSS"],
      demoUrl: "https://foodsharehan.vercel.app/",
      githubUrl: null, // No GitHub link yet
      status: "Early Learning Project",
      learningFocus: "First experience with Next.js and building socially impactful applications",
      features: [
        "Food listing and donation system",
        "Interactive map integration",
        "User authentication and profiles",
        "Real-time pickup scheduling",
      ],
      challenges:
        "Learning Next.js framework while implementing complex features like geolocation and real-time updates",
      icon: "🍽️",
    },
    {
      id: 2,
      name: "Anime Quiz App",
      category: "Interactive Entertainment",
      description: "Interactive anime knowledge quiz application with dynamic questions",
      longDescription:
        "A fun and engaging quiz application testing anime knowledge with multiple choice questions, score tracking, and interactive feedback. Built with vanilla JavaScript to strengthen fundamental programming concepts.",
      skills: ["HTML", "CSS", "JavaScript", "Solution Oriented", "Front-End Development"],
      techStack: ["HTML", "CSS", "JavaScript"],
      demoUrl: "https://quiz-app-puce-eta-87.vercel.app/",
      githubUrl: "https://github.com/leyvinit/quiz-app",
      status: "Early Learning Project",
      learningFocus: "Mastering vanilla JavaScript fundamentals and DOM manipulation",
      features: [
        "Dynamic question generation",
        "Score tracking system",
        "Interactive UI feedback",
        "Responsive design",
      ],
      challenges: "Building complex interactivity with pure JavaScript without frameworks",
      icon: "🎌",
    },
    {
      id: 3,
      name: "Weather View App",
      category: "API Integration",
      description: "Real-time weather application with location-based forecasts",
      longDescription:
        "A clean and intuitive weather application providing real-time weather data and forecasts. Features location search, current conditions, and extended forecasts with a focus on user experience design.",
      skills: ["Tailwind CSS", "Solution Oriented", "Front-End Development", "React.js"],
      techStack: ["React.js", "Tailwind CSS"],
      demoUrl: "https://weather-view-chi.vercel.app/",
      githubUrl: "https://github.com/leyvinit/weather-view",
      status: "Early Learning Project",
      learningFocus: "Learning React.js and API integration patterns",
      features: [
        "Real-time weather data",
        "Location-based search",
        "5-day forecast display",
        "Responsive mobile design",
      ],
      challenges: "First experience with React hooks and external API integration",
      icon: "🌤️",
    },
    {
      id: 4,
      name: "Calculator App",
      category: "Fundamentals",
      description: "Feature-rich calculator built with vanilla JavaScript",
      longDescription:
        "A fully functional calculator application demonstrating mastery of JavaScript fundamentals. Includes basic arithmetic operations, memory functions, and a clean, intuitive interface design.",
      skills: ["HTML", "CSS", "JavaScript", "Solution Oriented", "Front-End Development"],
      techStack: ["HTML", "CSS", "JavaScript"],
      demoUrl: "https://calculator-app-dun-delta.vercel.app/",
      githubUrl: "https://github.com/leyvinit/calculator-app",
      status: "Early Learning Project",
      learningFocus: "Strengthening JavaScript fundamentals and mathematical logic implementation",
      features: [
        "Basic arithmetic operations",
        "Memory functions",
        "Keyboard input support",
        "Clean, intuitive interface",
      ],
      challenges: "Implementing complex mathematical operations and handling edge cases",
      icon: "🧮",
    },
    {
      id: 5,
      name: "Transportation Vehicle Management System",
      category: "System Design",
      description: "Comprehensive vehicle management system mockup with full analysis",
      longDescription:
        "A detailed mockup for a vehicle management system developed as part of software requirements coursework. Includes comprehensive system analysis, database design, and user interface mockups demonstrating software engineering principles.",
      skills: ["Tailwind CSS", "Solution Oriented", "Front-End Development", "React.js"],
      techStack: ["React.js", "Tailwind CSS"],
      demoUrl: null, // No demo link - GitHub only
      githubUrl: "https://github.com/leyvinit/transportation_system_mockup",
      status: "Early Learning Project",
      learningFocus: "Understanding software requirements analysis and system design principles",
      features: [
        "Use case diagrams",
        "Entity-relationship diagrams",
        "Gantt chart planning",
        "Interactive mockup screens",
      ],
      challenges: "Learning software analysis methodologies and translating requirements into design",
      icon: "🚗",
    },
  ]

  const categories = [
    "All",
    "Social Impact",
    "Interactive Entertainment",
    "API Integration",
    "Fundamentals",
    "System Design",
  ]
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  const handleProjectClick = (project: any) => {
    setSelectedProject(project)
  }

  const handleBackToList = () => {
    setSelectedProject(null)
  }

  if (selectedProject) {
    return (
      <div className="flex-1 bg-[#011627] flex flex-col">
        {/* Project Detail Header */}
        <div className="border-b border-[#1e2d3d] p-4">
          <button
            onClick={handleBackToList}
            className="text-[#8892b0] hover:text-[#d6deeb] mb-4 flex items-center space-x-2"
          >
            ← Back to Projects
          </button>
          <div className="flex items-center space-x-3 mb-2">
            <span className="text-3xl">{selectedProject.icon}</span>
            <div>
              <h1 className="text-xl font-semibold text-[#d6deeb]">{selectedProject.name}</h1>
              <div className="flex items-center space-x-4 text-sm">
                <span className="text-[#7fdbca] bg-[#7fdbca]/10 px-2 py-1 rounded">{selectedProject.status}</span>
                <span className="text-[#8892b0]">{selectedProject.category}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Project Content */}
        <div className="flex-1 overflow-auto">
          {/* Live Demo */}
          <div className="p-4 border-b border-[#1e2d3d]">
            <div className="bg-[#1e2d3d] rounded-lg overflow-hidden">
              <div className="flex items-center justify-between p-3 bg-[#010e1a] border-b border-[#8892b0]">
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#28ca42]"></div>
                  </div>
                  <span className="text-[#8892b0] text-sm">{selectedProject.name} - Live Demo</span>
                </div>
                <div className="flex items-center space-x-2">
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8892b0] hover:text-[#d6deeb] p-1"
                    title="Open in new tab"
                  >
                    <ExternalLink size={16} />
                  </a>
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8892b0] hover:text-[#d6deeb] p-1"
                    title="View source code"
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>

              {/* Demo Preview */}
              <div className="h-96 bg-gradient-to-br from-[#1e2d3d] to-[#011627] flex items-center justify-center relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23d6deeb' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                  />
                </div>

                <div className="text-center z-10">
                  <div className="text-6xl mb-4">{selectedProject.icon}</div>
                  <h3 className="text-2xl font-bold text-[#d6deeb] mb-2">{selectedProject.name}</h3>
                  <p className="text-[#8892b0] mb-6 max-w-md">{selectedProject.description}</p>

                  <div className="flex items-center justify-center space-x-4">
                    {selectedProject.demoUrl ? (
                      <a
                        href={selectedProject.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          e.stopPropagation()
                          window.open(selectedProject.demoUrl, "_blank", "noopener,noreferrer")
                        }}
                        className="flex items-center space-x-2 bg-[#7fdbca] text-[#011627] px-6 py-3 rounded-lg hover:bg-[#64b5a6] transition-all duration-200 font-bold shadow-lg hover:shadow-xl transform hover:scale-105"
                      >
                        <ExternalLink size={18} />
                        <span>Open Live Demo</span>
                      </a>
                    ) : (
                      <div className="flex items-center space-x-2 bg-[#8892b0]/20 text-[#8892b0] px-6 py-3 rounded-lg cursor-not-allowed">
                        <ExternalLink size={18} />
                        <span>Demo Not Available</span>
                      </div>
                    )}

                    {selectedProject.githubUrl ? (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          e.stopPropagation()
                          window.open(selectedProject.githubUrl, "_blank", "noopener,noreferrer")
                        }}
                        className="flex items-center space-x-2 bg-[#1e2d3d] text-[#d6deeb] px-6 py-3 rounded-lg hover:bg-[#2d3748] transition-all duration-200 border border-[#8892b0]/30 font-bold shadow-lg hover:shadow-xl transform hover:scale-105"
                      >
                        <Github size={18} />
                        <span>View Code</span>
                      </a>
                    ) : (
                      <div className="flex items-center space-x-2 bg-[#8892b0]/20 text-[#8892b0] px-6 py-3 rounded-lg cursor-not-allowed border border-[#8892b0]/30">
                        <Github size={18} />
                        <span>Code Not Available</span>
                      </div>
                    )}
                  </div>

                  {/* Tech Stack Preview */}
                  <div className="mt-6">
                    <div className="flex flex-wrap justify-center gap-2">
                      {selectedProject.techStack.map((tech: string, index: number) => (
                        <span
                          key={index}
                          className="bg-[#011627]/80 text-[#7fdbca] px-3 py-1 rounded-full text-sm border border-[#7fdbca]/30 backdrop-blur-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Demo Note */}
                  <div className="mt-4 text-xs text-[#8892b0] bg-[#011627]/50 px-4 py-2 rounded-lg backdrop-blur-sm">
                    💡 Click "Open Live Demo" to view the project in a new tab
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="p-4 space-y-6">
            {/* Learning Focus */}
            <div className="bg-[#1e2d3d]/50 rounded-lg p-4 border border-[#7fdbca]/20">
              <div className="flex items-center space-x-2 mb-3">
                <Lightbulb className="text-[#7fdbca]" size={20} />
                <h3 className="text-[#7fdbca] font-semibold">Early Learning Journey</h3>
              </div>
              <p className="text-[#d6deeb] mb-2">{selectedProject.learningFocus}</p>
              <p className="text-[#8892b0] text-sm italic">
                "This project represents an important step in my development journey, showcasing my growth and learning
                process."
              </p>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-[#d6deeb] font-semibold mb-2">About This Project</h3>
              <p className="text-[#8892b0] leading-relaxed">{selectedProject.longDescription}</p>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-[#d6deeb] font-semibold mb-2">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.techStack.map((tech: string, index: number) => (
                  <span
                    key={index}
                    className="bg-[#1e2d3d] text-[#d6deeb] px-3 py-1 rounded-full text-sm border border-[#8892b0]/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-[#d6deeb] font-semibold mb-2">Key Features</h3>
              <ul className="space-y-2">
                {selectedProject.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start space-x-2 text-[#8892b0]">
                    <span className="text-[#7fdbca] mt-1">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Challenges & Learning */}
            <div>
              <h3 className="text-[#d6deeb] font-semibold mb-2">Challenges & Growth</h3>
              <p className="text-[#8892b0] leading-relaxed">{selectedProject.challenges}</p>
            </div>

            {/* Skills Developed */}
            <div>
              <h3 className="text-[#d6deeb] font-semibold mb-2">Skills Developed</h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.skills.map((skill: string, index: number) => (
                  <span
                    key={index}
                    className="bg-[#7fdbca]/10 text-[#7fdbca] px-3 py-1 rounded-full text-sm border border-[#7fdbca]/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex space-x-4 pt-4">
              {selectedProject.demoUrl ? (
                <a
                  href={selectedProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.stopPropagation()
                    window.open(selectedProject.demoUrl, "_blank", "noopener,noreferrer")
                  }}
                  className="flex items-center space-x-2 bg-[#7fdbca] text-[#011627] px-4 py-2 rounded hover:bg-[#64b5a6] transition-colors font-medium"
                >
                  <ExternalLink size={16} />
                  <span>Live Demo</span>
                </a>
              ) : (
                <div className="flex items-center space-x-2 bg-[#8892b0]/20 text-[#8892b0] px-4 py-2 rounded cursor-not-allowed">
                  <ExternalLink size={16} />
                  <span>Demo Not Available</span>
                </div>
              )}

              {selectedProject.githubUrl ? (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.stopPropagation()
                    window.open(selectedProject.githubUrl, "_blank", "noopener,noreferrer")
                  }}
                  className="flex items-center space-x-2 bg-[#1e2d3d] text-[#d6deeb] px-4 py-2 rounded hover:bg-[#2d3748] transition-colors border border-[#8892b0]/30"
                >
                  <Github size={16} />
                  <span>Source Code</span>
                </a>
              ) : (
                <div className="flex items-center space-x-2 bg-[#8892b0]/20 text-[#8892b0] px-4 py-2 rounded cursor-not-allowed border border-[#8892b0]/30">
                  <Github size={16} />
                  <span>Code Not Available</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex-1 bg-[#011627] flex flex-col">
      {/* Header */}
      <div className="border-b border-[#1e2d3d] p-4">
        <div className="flex items-center space-x-3 mb-4">
          <span className="text-2xl">🚀</span>
          <div>
            <h1 className="text-xl font-semibold text-[#d6deeb]">Projects Showcase</h1>
            <p className="text-[#8892b0] text-sm">Early learning projects that shaped my development journey</p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex items-center space-x-2 overflow-x-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 py-1 rounded text-sm whitespace-nowrap transition-colors ${
                activeCategory === category
                  ? "bg-[#7fdbca] text-[#011627] font-medium"
                  : "bg-[#1e2d3d] text-[#8892b0] hover:text-[#d6deeb] hover:bg-[#2d3748]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Learning Journey Banner */}
      <div className="bg-gradient-to-r from-[#7fdbca]/10 to-[#c792ea]/10 border-b border-[#1e2d3d] p-4">
        <div className="flex items-center space-x-3">
          <Calendar className="text-[#7fdbca]" size={20} />
          <div>
            <h3 className="text-[#d6deeb] font-medium">My Development Journey</h3>
            <p className="text-[#8892b0] text-sm">
              These projects represent my early learning phase, showcasing growth from fundamentals to complex
              applications. Each project taught me valuable lessons and built the foundation for my current skills.
            </p>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="flex-1 overflow-auto p-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleProjectClick(project)}
              className="bg-[#1e2d3d] rounded-lg p-4 hover:bg-[#2d3748] transition-all duration-200 cursor-pointer border border-[#8892b0]/20 hover:border-[#7fdbca]/40 group"
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-200">
                    {project.icon}
                  </span>
                  <div>
                    <h3 className="font-semibold text-[#d6deeb] group-hover:text-[#7fdbca] transition-colors">
                      {project.name}
                    </h3>
                    <span className="text-xs text-[#8892b0]">{project.category}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink size={14} className="text-[#8892b0]" />
                  <Code size={14} className="text-[#8892b0]" />
                </div>
              </div>

              {/* Learning Badge */}
              <div className="mb-3">
                <span className="inline-flex items-center space-x-1 bg-[#7fdbca]/10 text-[#7fdbca] px-2 py-1 rounded text-xs border border-[#7fdbca]/20">
                  <Lightbulb size={12} />
                  <span>Early Learning Project</span>
                </span>
              </div>

              {/* Description */}
              <p className="text-[#8892b0] text-sm mb-3 line-clamp-2">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1 mb-3">
                {project.techStack.slice(0, 3).map((tech: string, index: number) => (
                  <span
                    key={index}
                    className="bg-[#011627] text-[#8892b0] px-2 py-1 rounded text-xs border border-[#8892b0]/30"
                  >
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 3 && (
                  <span className="text-[#8892b0] text-xs px-2 py-1">+{project.techStack.length - 3} more</span>
                )}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between text-xs text-[#8892b0]">
                <span>Click to explore →</span>
                <div className="flex items-center space-x-2">
                  <span>Live Demo</span>
                  <span>•</span>
                  <span>Source Code</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-[#d6deeb] text-lg mb-2">No projects found</h3>
            <p className="text-[#8892b0]">Try selecting a different category</p>
          </div>
        )}

        {/* Footer Note */}
        <div className="mt-8 text-center p-4 bg-[#1e2d3d]/30 rounded-lg border border-[#8892b0]/20">
          <p className="text-[#8892b0] text-sm">
            💡 <strong className="text-[#d6deeb]">Learning Journey:</strong> These projects represent my foundational
            learning phase. Each one taught me valuable lessons and contributed to my growth as a developer. I'm excited
            to build upon this foundation in professional environments!
          </p>
        </div>
      </div>
    </div>
  )
}
