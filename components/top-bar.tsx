"use client"

import { Minus, Square, X, Play, Terminal, FileText, HelpCircle, Settings, Folder } from "lucide-react"
import { useState, useEffect } from "react"

interface TopBarProps {
  onTerminalToggle?: () => void
}

export function TopBar({ onTerminalToggle }: TopBarProps) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [showRunAnimation, setShowRunAnimation] = useState(false)
  const [runProgress, setRunProgress] = useState(0)
  const [showMiniTerminal, setShowMiniTerminal] = useState(false)
  const [terminalLines, setTerminalLines] = useState<string[]>([])
  const [showPopup, setShowPopup] = useState<{ type: string; content: any } | null>(null)

  const menuItems = [
    {
      name: "File",
      icon: <FileText size={12} />,
      items: [
        { name: "New Project", subtitle: "Hint: You're about to hire a legend", action: "newProject", icon: "✨" },
        { name: "Open Resume.docx", subtitle: "Oops, that's me!", action: "openResume", icon: "📄" },
        { name: "Save World", subtitle: "In progress...", action: "saveWorld", icon: "🌍" },
        { name: "Export Skills", subtitle: "Premium package included", action: "exportSkills", icon: "📦" },
        { name: "Close Bugs", subtitle: "All of them. Forever.", action: "closeBugs", icon: "🐛" },
      ],
    },
    {
      name: "Edit",
      icon: <Settings size={12} />,
      items: [
        { name: "Undo Last Mistake", subtitle: "If only life had Ctrl+Z", action: "undo", icon: "↩️" },
        { name: "Copy Awesomeness", subtitle: "Ctrl+C my skills", action: "copyAwesome", icon: "📋" },
        { name: "Paste Success", subtitle: "Into your company", action: "pasteSuccess", icon: "🎯" },
        { name: "Find & Replace", subtitle: "Bugs → Features", action: "findReplace", icon: "🔍" },
        { name: "Select All Problems", subtitle: "And solve them", icon: "🎪" },
      ],
    },
    {
      name: "View",
      icon: <Folder size={12} />,
      items: [
        { name: "Toggle Awesome Mode", subtitle: "Already enabled", action: "toggleAwesome", icon: "💅" },
        { name: "Show Hidden Talents", subtitle: "Prepare to be amazed", action: "showTalents", icon: "🎭" },
        { name: "Zoom In on Skills", subtitle: "They're pretty impressive", action: "zoomSkills", icon: "🔍" },
        { name: "Split Screen", subtitle: "Me vs Competition", action: "splitScreen", icon: "⚡" },
        { name: "Full Screen Mode", subtitle: "Hanan takes over", action: "fullScreen", icon: "🖥️" },
      ],
    },
    {
      name: "Go",
      icon: <Play size={12} />,
      items: [
        { name: "Go to Definition", subtitle: "Of success", action: "goDefinition", icon: "📚" },
        { name: "Go to Line", subtitle: "The hiring line", action: "goLine", icon: "📍" },
        { name: "Go Back", subtitle: "To other candidates? No way!", action: "goBack", icon: "🚫" },
        { name: "Go Forward", subtitle: "With hiring me", action: "goForward", icon: "🚀" },
        { name: "Go to Sleep", subtitle: "After you hire me", action: "goSleep", icon: "😴" },
      ],
    },
    {
      name: "Run",
      icon: <Play size={12} />,
      items: [
        { name: "Run Career", subtitle: "Loading success...", action: "runCareer", icon: "🏃‍♀️" },
        { name: "Debug Life", subtitle: "No bugs found!", action: "debugLife", icon: "🐛" },
        { name: "Start Without Debugging", subtitle: "Living dangerously", action: "startNormal", icon: "⚡" },
        { name: "Run Tests", subtitle: "All passing ✅", action: "runTests", icon: "🧪" },
        { name: "Build Solution", subtitle: "For your company", action: "buildSolution", icon: "🏗️" },
      ],
    },
    {
      name: "Terminal",
      icon: <Terminal size={12} />,
      items: [
        { name: "New Terminal", subtitle: "Fresh start, fresh code", action: "newTerminal", icon: "💻" },
        { name: "Split Terminal", subtitle: "Multitasking master", action: "splitTerminal", icon: "🔀" },
        { name: "Kill Terminal", subtitle: "But not my dreams", action: "killTerminal", icon: "💀" },
        { name: "Run Command", subtitle: "npm install hanan", action: "runCommand", icon: "⚡" },
        { name: "Clear Terminal", subtitle: "Clean slate", action: "clearTerminal", icon: "🧹" },
      ],
    },
    {
      name: "Help",
      icon: <HelpCircle size={12} />,
      items: [
        { name: "Ask Hanan", subtitle: "Spoiler: She's awesome", action: "askHanan", icon: "🤔" },
        { name: "About This CV", subtitle: "Crafted with love & code", action: "aboutCV", icon: "💝" },
        { name: "Getting Started", subtitle: "Step 1: Hire me", action: "gettingStarted", icon: "🚀" },
        { name: "Keyboard Shortcuts", subtitle: "Ctrl+H = Hire", action: "shortcuts", icon: "⌨️" },
        { name: "Report Bug", subtitle: "There are none 😎", action: "reportBug", icon: "🐛" },
      ],
    },
  ]

  const handleMenuClick = (menuName: string) => {
    setActiveMenu(activeMenu === menuName ? null : menuName)
  }

  const handleMenuItemClick = (action: string, item: any) => {
    setActiveMenu(null)

    switch (action) {
      case "runCareer":
        startRunAnimation()
        break
      case "newTerminal":
      case "runCommand":
        openMiniTerminal()
        break
      case "openResume":
        showInfoPopup("resume", {
          title: "Resume.docx",
          content:
            "📄 Hanan Abdullahi - Software Engineer\n🎓 Haliç University Student\n🚀 Full-stack Developer\n💼 Ready for your team!",
        })
        break
      case "askHanan":
        showInfoPopup("contact", {
          title: "Ask Hanan Anything!",
          content:
            "📧 nakohoka25@gmail.com\n💼 LinkedIn: /in/hananabdulahi\n🐙 GitHub: /leyvinit\n💬 Always happy to chat!",
        })
        break
      case "aboutCV":
        showInfoPopup("about", {
          title: "About This Portfolio",
          content:
            "✨ Built with React + TypeScript\n🎨 Styled with Tailwind CSS\n💝 Crafted with love and lots of coffee\n🚀 Interactive VS Code experience\n🎯 Designed to impress YOU!",
        })
        break
      case "showTalents":
        showInfoPopup("talents", {
          title: "Hidden Talents Revealed!",
          content:
            "🎯 Problem-solving ninja\n🎨 UI/UX intuition\n🤝 Team collaboration expert\n📚 Fast learner\n☕ Coffee-to-code converter\n🎭 Bug whisperer",
        })
        break
      case "newProject":
        // Simulate creating a new project
        if (onTerminalToggle) {
          onTerminalToggle()
          setTimeout(() => {
            // This would trigger terminal output
          }, 500)
        }
        break
      case "saveWorld":
        // Add a subtle notification
        showQuirkyNotification("🌍 World saving in progress... 47% complete")
        break
      case "exportSkills":
        // Simulate file download
        showQuirkyNotification("📦 Skills exported to awesome_developer.json")
        break
      case "closeBugs":
        // Show a code-like response
        showQuirkyNotification("🐛 → ✅ All bugs successfully eliminated!")
        break
      case "copyAwesome":
        // Simulate copying to clipboard
        showQuirkyNotification("📋 Awesomeness copied to clipboard!")
        break
      case "pasteSuccess":
        showQuirkyNotification("🎯 Success pasted into your company's future!")
        break
      case "toggleAwesome":
        showQuirkyNotification("💅 Awesome mode was already at maximum level!")
        break
      case "zoomSkills":
        showQuirkyNotification("🔍 Skills magnified! They're even more impressive now!")
        break
      case "goDefinition":
        showQuirkyNotification("📚 Definition found: Success = Hiring Hanan")
        break
      case "goForward":
        showQuirkyNotification("🚀 Moving forward with the best decision ever!")
        break
      case "runTests":
        showQuirkyNotification("🧪 All tests passing ✅ Quality guaranteed!")
        break
      case "buildSolution":
        showQuirkyNotification("🏗️ Building the perfect solution for your team...")
        break
      case "shortcuts":
        showQuirkyNotification("⌨️ Pro tip: Ctrl+H = Hire Hanan instantly!")
        break
      case "reportBug":
        showQuirkyNotification("🐛 Error 404: Bugs not found in this portfolio!")
        break
      default:
        // For any other actions, show a subtle notification
        showQuirkyNotification(`${item.icon} ${item.name} activated!`)
    }
  }

  const showQuirkyNotification = (message: string) => {
    // Create a temporary notification element
    const notification = document.createElement("div")
    notification.className =
      "fixed top-16 right-4 bg-[#1e2d3d] border border-[#7fdbca] text-[#d6deeb] px-4 py-2 rounded-lg shadow-lg z-50 text-sm font-mono animate-in slide-in-from-right-2 duration-300"
    notification.textContent = message

    document.body.appendChild(notification)

    // Remove after 3 seconds with fade out
    setTimeout(() => {
      notification.style.opacity = "0"
      notification.style.transform = "translateX(100%)"
      notification.style.transition = "all 0.3s ease-out"
      setTimeout(() => {
        if (document.body.contains(notification)) {
          document.body.removeChild(notification)
        }
      }, 300)
    }, 3000)
  }

  const startRunAnimation = () => {
    setShowRunAnimation(true)
    setRunProgress(0)

    const interval = setInterval(() => {
      setRunProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setShowRunAnimation(false)
            showInfoPopup("success", {
              title: "Career Successfully Launched! 🚀",
              content:
                "✅ Skills loaded\n✅ Experience compiled\n✅ Motivation at 100%\n✅ Ready for deployment\n\n🎯 Next step: Schedule interview!",
            })
          }, 1000)
          return 100
        }
        return prev + 2
      })
    }, 50)
  }

  const openMiniTerminal = () => {
    setShowMiniTerminal(true)
    setTerminalLines([])

    const commands = [
      "$ npm install awesomeness --save",
      "✅ awesomeness@latest installed successfully",
      "$ echo 'Hire me pls!' ",
      "Hire me pls!",
      "$ git status",
      "On branch main",
      "Your portfolio is up to date with 'origin/amazing'",
      "$ whoami",
      "hanan_abdullahi - Software Engineering Student",
      "$ ls skills/",
      "react.js  typescript.js  python.py  problem-solving.exe",
      "$ cat motivation.txt",
      "Ready to build amazing things! 🚀",
    ]

    let index = 0
    const typeInterval = setInterval(() => {
      if (index < commands.length) {
        setTerminalLines((prev) => [...prev, commands[index]])
        index++
      } else {
        clearInterval(typeInterval)
      }
    }, 800)
  }

  const showInfoPopup = (type: string, content: any) => {
    setShowPopup({ type, content })
  }

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setActiveMenu(null)
    if (activeMenu) {
      document.addEventListener("click", handleClickOutside)
      return () => document.removeEventListener("click", handleClickOutside)
    }
  }, [activeMenu])

  return (
    <>
      <div className="bg-[#010e1a] border-b border-[#1e2d3d] h-8 flex items-center justify-between px-2 text-xs relative">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#28ca42]"></div>
          </div>
          <div className="flex items-center space-x-4 text-[#8892b0]">
            {menuItems.map((menu) => (
              <div key={menu.name} className="relative">
                <button
                  className="hover:text-[#d6deeb] cursor-pointer px-2 py-1 rounded hover:bg-[#1e2d3d] transition-all duration-200 flex items-center space-x-1 group"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleMenuClick(menu.name)
                  }}
                >
                  <span className="group-hover:scale-110 transition-transform duration-200">{menu.icon}</span>
                  <span>{menu.name}</span>
                  {menu.name === "Run" && (
                    <span className="text-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      🔥
                    </span>
                  )}
                  {menu.name === "Help" && (
                    <span className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      📚
                    </span>
                  )}
                </button>

                {/* Dropdown Menu */}
                {activeMenu === menu.name && (
                  <div className="absolute top-full left-0 mt-1 bg-[#1e2d3d] border border-[#8892b0] rounded-md shadow-lg z-50 min-w-[280px] animate-in slide-in-from-top-2 duration-200">
                    {menu.items.map((item, index) => (
                      <button
                        key={index}
                        className="w-full text-left px-3 py-2 hover:bg-[#011627] text-[#d6deeb] hover:text-white transition-colors duration-150 flex items-center justify-between group border-b border-[#8892b0]/20 last:border-b-0"
                        onClick={() => handleMenuItemClick(item.action, item)}
                      >
                        <div className="flex items-center space-x-2">
                          <span className="text-lg group-hover:scale-110 transition-transform duration-200">
                            {item.icon}
                          </span>
                          <div>
                            <div className="font-medium">{item.name}</div>
                            <div className="text-xs text-[#8892b0] group-hover:text-[#d6deeb]">{item.subtitle}</div>
                          </div>
                        </div>
                        <div className="text-[#8892b0] text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          Click me!
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="text-[#8892b0] text-center flex-1">Visual Studio Code - Hanan's Portfolio</div>
        <div className="flex items-center space-x-1">
          <button className="p-1 hover:bg-[#1e2d3d] rounded">
            <Minus size={12} />
          </button>
          <button className="p-1 hover:bg-[#1e2d3d] rounded">
            <Square size={10} />
          </button>
          <button className="p-1 hover:bg-red-600 rounded">
            <X size={12} />
          </button>
        </div>
      </div>

      {/* Run Animation Overlay */}
      {showRunAnimation && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-[#1e2d3d] border border-[#8892b0] rounded-lg p-8 text-center max-w-md">
            <div className="text-6xl mb-4 animate-spin">🚀</div>
            <h2 className="text-2xl font-bold text-white mb-4">Running Your Career...</h2>
            <div className="w-full bg-[#8892b0]/20 rounded-full h-4 mb-4">
              <div
                className="bg-gradient-to-r from-green-400 to-blue-500 h-4 rounded-full transition-all duration-100"
                style={{ width: `${runProgress}%` }}
              />
            </div>
            <p className="text-[#8892b0]">{runProgress}% Complete</p>
            <div className="mt-4 text-sm text-[#d6deeb]">
              {runProgress < 30 && "Loading skills..."}
              {runProgress >= 30 && runProgress < 60 && "Compiling experience..."}
              {runProgress >= 60 && runProgress < 90 && "Optimizing awesomeness..."}
              {runProgress >= 90 && "Almost ready for deployment!"}
            </div>
          </div>
        </div>
      )}

      {/* Mini Terminal */}
      {showMiniTerminal && (
        <div className="fixed bottom-4 right-4 bg-black border border-[#8892b0] rounded-lg w-96 h-64 z-50 font-mono text-sm">
          <div className="flex items-center justify-between bg-[#1e2d3d] px-3 py-1 border-b border-[#8892b0]">
            <span className="text-[#d6deeb]">Terminal</span>
            <button onClick={() => setShowMiniTerminal(false)} className="text-[#8892b0] hover:text-white">
              <X size={16} />
            </button>
          </div>
          <div className="p-3 h-full overflow-auto">
            {terminalLines.map((line, index) => (
              <div key={index} className="text-green-400 mb-1">
                {line}
              </div>
            ))}
            <div className="text-green-400 animate-pulse">█</div>
          </div>
        </div>
      )}

      {/* Info Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-[#1e2d3d] border border-[#8892b0] rounded-lg p-6 max-w-md">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-white">{showPopup.content.title}</h2>
              <button onClick={() => setShowPopup(null)} className="text-[#8892b0] hover:text-white">
                <X size={20} />
              </button>
            </div>
            <div className="text-[#d6deeb] whitespace-pre-line font-mono text-sm">{showPopup.content.content}</div>
            <div className="mt-4 text-center">
              <button
                onClick={() => setShowPopup(null)}
                className="bg-[#7fdbca] text-[#011627] px-4 py-2 rounded font-bold hover:bg-[#64b5a6] transition-colors"
              >
                Awesome! 🚀
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
