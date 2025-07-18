"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { X, Minus, Square, Play } from "lucide-react"

interface TerminalProps {
  onClose: () => void
  codeOutput?: string[]
}

interface TerminalTab {
  id: string
  name: string
  content: string[]
  timestamp: string
}

export function Terminal({ onClose, codeOutput }: TerminalProps) {
  const [input, setInput] = useState("")
  const [history, setHistory] = useState<string[]>([
    "Welcome to HananOS Terminal v2.0.1",
    "Type 'help' for available commands",
    "",
  ])
  const [currentPath] = useState("~/hanan-portfolio")
  const [tabs, setTabs] = useState<TerminalTab[]>([])
  const [activeTab, setActiveTab] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  // Handle new code output - create new tab
  useEffect(() => {
    if (codeOutput && codeOutput.length > 0) {
      const timestamp = new Date().toLocaleTimeString()
      const fileName = getFileNameFromOutput(codeOutput)
      const tabId = `tab-${Date.now()}`

      const newTab: TerminalTab = {
        id: tabId,
        name: fileName || `Output ${Date.now()}`,
        content: [
          `${currentPath} $ node ${fileName} - ${timestamp}`,
          "Running JavaScript code...",
          "",
          ...codeOutput,
          "",
        ],
        timestamp,
      }

      setTabs((prev) => [...prev, newTab])
      setActiveTab(tabId)
    }
  }, [codeOutput, currentPath]) // Removed tabs.length from dependency array

  const getFileNameFromOutput = (output: string[]): string => {
    const firstLine = output[0] || ""
    if (firstLine.includes("ABOUT HANAN")) return "about-me.js"
    if (firstLine.includes("PROJECT PORTFOLIO")) return "projects.js"
    if (firstLine.includes("TECHNICAL SKILLS")) return "skills.js"
    if (firstLine.includes("CONTACT INFORMATION")) return "contact.js"
    return "output.js"
  }

  const commands = {
    help: () => [
      "Available commands:",
      "  whoami     - Display current user info",
      "  skills     - Show technical skills",
      "  projects   - List current projects",
      "  recruiter  - Check CV status",
      "  motivation - Get motivated",
      "  newtab     - Create new terminal tab",
      "  closetab   - Close current tab",
      "  clear      - Clear current terminal",
      "  exit       - Close terminal window",
      "",
      "💡 Tip: Commands are executable! Try typing any of them.",
    ],
    whoami: () => [
      "hanan_abdullahi@dev",
      "Software Engineering Student",
      "Location: Istanbul, Turkey",
      "Status: Ready to conquer the tech world 🚀",
      "GitHub: https://github.com/leyvinit",
      "Email: nakohoka25@gmail.com",
    ],
    skills: () => [
      "🚀 Programming Languages:",
      "   • JavaScript (85%) - 2+ years",
      "   • Python (80%) - 2+ years",
      "   • PHP (75%) - 1.5+ years",
      "   • TypeScript (70%) - 6 months",
      "",
      "🌐 Frontend Technologies:",
      "   • React (85%) - 4 projects",
      "   • HTML5/CSS3 (90%) - 8 projects",
      "   • Tailwind CSS (80%) - 3 projects",
      "",
      "🗄️ Database Technologies:",
      "   • MySQL (80%) - 3 projects",
      "   • Firebase (75%) - 2 projects",
      "   • MongoDB (65%) - 1 project",
      "",
      "🛠️ Development Tools:",
      "   • Git/GitHub, VS Code, Postman, Figma",
    ],
    projects: () => [
      "📱 Current Projects:",
      "",
      "1. QuickSplit [In Progress]",
      "   • Group expense splitting application",
      "   • Tech: React, Tailwind CSS, Firebase",
      "   • Features: Real-time sync, payment integration",
      "",
      "2. FoodShare [In Progress]",
      "   • Food donation platform for communities",
      "   • Tech: JavaScript, Firebase, Google Maps API",
      "   • Impact: Reducing food waste locally",
      "",
      "3. Bookstore Web App [Completed]",
      "   • Full-stack e-commerce application",
      "   • Tech: PHP, MySQL, HTML5, CSS3, JavaScript",
      "   • Features: Shopping cart, user auth, admin panel",
      "",
      "4. Weather Forecast App [Completed]",
      "   • Location-based weather application",
      "   • Tech: React, Tailwind CSS, OpenWeather API",
      "   • Features: 5-day forecast, responsive design",
    ],
    recruiter: () => [
      "🔥 Recruitment Status Check:",
      "",
      "✅ Portfolio: Interactive and impressive",
      "✅ GitHub: Active with real projects",
      "✅ Skills: Modern tech stack",
      "✅ Experience: Diverse project portfolio",
      "✅ Communication: 3 languages (EN/AR/SO)",
      "✅ Availability: Ready for opportunities",
      "",
      "📧 Contact: nakohoka25@gmail.com",
      "💼 LinkedIn: /in/hananabdulahi",
      "🎯 Status: Actively seeking internships/junior roles",
      "",
      "🚀 Recommendation: HIRE IMMEDIATELY!",
    ],
    motivation: () => [
      "💪 Daily Motivation Boost:",
      "",
      '🌟 "Your code today is someone\'s solution tomorrow"',
      '🚀 "Every bug you fix makes you stronger"',
      "✨ \"You're not just writing code, you're crafting the future\"",
      '🔥 "Your debugging skills are legendary in the making"',
      '💎 "Persistence is your superpower"',
      "",
      "🎯 Remember: You're exactly where you need to be!",
      "💡 The next breakthrough is just one commit away!",
    ],
    newtab: () => {
      const tabId = `manual-${Date.now()}`
      const newTab: TerminalTab = {
        id: tabId,
        name: `Terminal ${Date.now()}`, // Use timestamp instead of tabs.length
        content: ["New terminal session started", "Type 'help' for available commands", ""],
        timestamp: new Date().toLocaleTimeString(),
      }
      setTabs((prev) => [...prev, newTab])
      setActiveTab(tabId)
      return ["New terminal tab created! 🎉"]
    },
    closetab: () => {
      if (activeTab && tabs.length > 0) {
        const tabToClose = tabs.find((tab) => tab.id === activeTab)
        setTabs((prev) => prev.filter((tab) => tab.id !== activeTab))

        // Switch to another tab or main terminal
        const remainingTabs = tabs.filter((tab) => tab.id !== activeTab)
        if (remainingTabs.length > 0) {
          setActiveTab(remainingTabs[remainingTabs.length - 1].id)
        } else {
          setActiveTab(null)
        }

        return [`Tab "${tabToClose?.name}" closed! 🗑️`]
      }
      return ["No tabs to close!"]
    },
    clear: () => {
      if (activeTab) {
        // Clear active tab content
        setTabs((prev) =>
          prev.map((tab) => (tab.id === activeTab ? { ...tab, content: ["Terminal cleared", ""] } : tab)),
        )
      } else {
        // Clear main terminal
        setHistory([])
      }
      return []
    },
    exit: () => {
      onClose()
      return []
    },
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const command = input.trim().toLowerCase()

    if (activeTab) {
      // Handle commands in tab context
      const currentTab = tabs.find((tab) => tab.id === activeTab)
      if (currentTab) {
        const commandOutput =
          command in commands
            ? commands[command as keyof typeof commands]()
            : command === ""
              ? [""]
              : [`Command not found: ${command}`, "Type 'help' for available commands", ""]

        if (command !== "clear") {
          setTabs((prev) =>
            prev.map((tab) =>
              tab.id === activeTab
                ? {
                    ...tab,
                    content: [...tab.content, `${currentPath} $ ${input}`, ...commandOutput, ""],
                  }
                : tab,
            ),
          )
        }
      }
    } else {
      // Handle commands in main terminal
      const newHistory = [...history, `${currentPath} $ ${input}`]

      if (command in commands) {
        const output = commands[command as keyof typeof commands]()
        if (command !== "clear") {
          setHistory([...newHistory, ...output, ""])
        }
      } else if (command === "") {
        setHistory([...newHistory, ""])
      } else {
        setHistory([...newHistory, `Command not found: ${command}`, "Type 'help' for available commands", ""])
      }
    }

    setInput("")
  }

  const closeTab = (tabId: string, e: React.MouseEvent) => {
    e.stopPropagation()
    setTabs((prev) => prev.filter((tab) => tab.id !== tabId))

    if (activeTab === tabId) {
      const remainingTabs = tabs.filter((tab) => tab.id !== tabId)
      if (remainingTabs.length > 0) {
        setActiveTab(remainingTabs[remainingTabs.length - 1].id)
      } else {
        setActiveTab(null)
      }
    }
  }

  const getCurrentContent = () => {
    if (activeTab) {
      const currentTab = tabs.find((tab) => tab.id === activeTab)
      return currentTab?.content || []
    }
    return history
  }

  return (
    <div className="h-64 bg-[#011627] border-t border-[#1e2d3d] flex flex-col">
      {/* Terminal Header with Tabs */}
      <div className="flex items-center justify-between bg-[#1e2d3d] border-b border-[#8892b0] text-xs">
        <div className="flex items-center flex-1 overflow-x-auto">
          {/* Main Terminal Tab */}
          <button
            onClick={() => setActiveTab(null)}
            className={`px-3 py-1 border-r border-[#8892b0] hover:bg-[#011627] transition-colors flex items-center space-x-2 ${
              !activeTab ? "bg-[#011627] text-[#d6deeb]" : "text-[#8892b0]"
            }`}
          >
            <span>Terminal</span>
          </button>

          {/* Code Output Tabs */}
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-1 border-r border-[#8892b0] hover:bg-[#011627] transition-colors flex items-center space-x-2 min-w-0 ${
                activeTab === tab.id ? "bg-[#011627] text-[#d6deeb]" : "text-[#8892b0]"
              }`}
            >
              <Play size={10} className="text-green-400" />
              <span className="truncate">{tab.name}</span>
              <button
                onClick={(e) => closeTab(tab.id, e)}
                className="hover:bg-[#8892b0] hover:text-white rounded p-0.5"
              >
                <X size={10} />
              </button>
            </button>
          ))}
        </div>

        {/* Window Controls */}
        <div className="flex items-center space-x-1 px-2">
          <button className="p-1 hover:bg-[#011627] rounded">
            <Minus size={12} />
          </button>
          <button className="p-1 hover:bg-[#011627] rounded">
            <Square size={10} />
          </button>
          <button onClick={onClose} className="p-1 hover:bg-red-600 rounded">
            <X size={12} />
          </button>
        </div>
      </div>

      {/* Terminal Content */}
      <div className="flex-1 p-3 overflow-auto font-mono text-sm">
        {getCurrentContent().map((line, index) => (
          <div key={index} className="text-[#d6deeb] whitespace-pre-wrap">
            {line}
          </div>
        ))}

        <form onSubmit={handleSubmit} className="flex items-center">
          <span className="text-[#7fdbca] mr-2">{currentPath} $</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent text-[#d6deeb] outline-none"
            autoComplete="off"
            placeholder="Type a command..."
          />
        </form>
      </div>
    </div>
  )
}
