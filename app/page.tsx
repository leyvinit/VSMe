"use client"

import { useState, useEffect } from "react"
import { TopBar } from "@/components/top-bar"
import { Sidebar } from "@/components/sidebar"
import { MainPane } from "@/components/main-pane"
import { CommandPalette } from "@/components/command-palette"
import { Terminal } from "@/components/terminal"
import { ExtensionsPanel } from "@/components/extensions-panel"
import { ProjectsPanel } from "@/components/projects-panel"
import { MobileWarning } from "@/components/mobile-warning"
import { useIsMobile } from "@/hooks/use-mobile"

export default function VSCodePortfolio() {
  const [activeFile, setActiveFile] = useState<string>("about-me.js")
  const [openTabs, setOpenTabs] = useState<string[]>(["about-me.js"])
  const [showCommandPalette, setShowCommandPalette] = useState(false)
  const [showTerminal, setShowTerminal] = useState(false)
  const [showExtensions, setShowExtensions] = useState(false)
  const [showProjects, setShowProjects] = useState(false)
  const [currentTheme, setCurrentTheme] = useState("night-owl")
  const [konamiSequence, setKonamiSequence] = useState<string[]>([])
  const [showEasterEgg, setShowEasterEgg] = useState(false)
  const [terminalOutput, setTerminalOutput] = useState<string[]>([])
  const [showMobileWarning, setShowMobileWarning] = useState(false)

  const isMobile = useIsMobile()

  const konamiCode = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "KeyB",
    "KeyA",
  ]

  useEffect(() => {
    if (isMobile) {
      setShowMobileWarning(true)
    }
  }, [isMobile])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Command Palette
      if (e.ctrlKey && e.shiftKey && e.key === "P") {
        e.preventDefault()
        setShowCommandPalette(true)
      }

      // Terminal toggle
      if (e.ctrlKey && e.key === "`") {
        e.preventDefault()
        setShowTerminal(!showTerminal)
      }

      // Konami Code
      const newSequence = [...konamiSequence, e.code].slice(-10)
      setKonamiSequence(newSequence)

      if (newSequence.join(",") === konamiCode.join(",")) {
        setShowEasterEgg(true)
        setKonamiSequence([])
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [showTerminal, konamiSequence])

  const handleFileClick = (fileName: string) => {
    setActiveFile(fileName)
    if (!openTabs.includes(fileName)) {
      setOpenTabs([...openTabs, fileName])
    }
    // Close other panels when opening files
    setShowExtensions(false)
    setShowProjects(false)
  }

  const handleTabClose = (fileName: string) => {
    const newTabs = openTabs.filter((tab) => tab !== fileName)
    setOpenTabs(newTabs)

    if (activeFile === fileName && newTabs.length > 0) {
      setActiveFile(newTabs[newTabs.length - 1])
    } else if (newTabs.length === 0) {
      setActiveFile("")
    }
  }

  const handleTabClick = (fileName: string) => {
    setActiveFile(fileName)
  }

  const handleExtensionsClick = () => {
    setShowExtensions(!showExtensions)
    setShowProjects(false)
  }

  const handleProjectsClick = () => {
    setShowProjects(!showProjects)
    setShowExtensions(false)
  }

  const handleRunCode = (output: string[]) => {
    setTerminalOutput(output)
    setShowTerminal(true)
  }

  const renderMainContent = () => {
    if (showExtensions) {
      return <ExtensionsPanel />
    } else if (showProjects) {
      return <ProjectsPanel />
    } else {
      return (
        <MainPane
          activeFile={activeFile}
          openTabs={openTabs}
          onTabClose={handleTabClose}
          onTabClick={handleTabClick}
          currentTheme={currentTheme}
          onRunCode={handleRunCode}
        />
      )
    }
  }

  return (
    <div className={`h-screen ${getThemeClasses(currentTheme)} text-[#d6deeb] font-mono flex flex-col overflow-hidden`}>
      <TopBar onTerminalToggle={() => setShowTerminal(!showTerminal)} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          activeFile={activeFile}
          onFileClick={handleFileClick}
          onExtensionsClick={handleExtensionsClick}
          onProjectsClick={handleProjectsClick}
          showExtensions={showExtensions}
          showProjects={showProjects}
        />
        {renderMainContent()}
      </div>

      {showTerminal && <Terminal onClose={() => setShowTerminal(false)} codeOutput={terminalOutput} />}

      {showCommandPalette && (
        <CommandPalette
          onClose={() => setShowCommandPalette(false)}
          onThemeChange={setCurrentTheme}
          onTerminalToggle={() => setShowTerminal(!showTerminal)}
        />
      )}

      {showMobileWarning && <MobileWarning onClose={() => setShowMobileWarning(false)} />}

      {showEasterEgg && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="bg-[#011627] border border-[#7fdbca] rounded-lg p-8 text-center max-w-md">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-2xl text-[#7fdbca] mb-4">Easter Egg Found!</h2>
            <p className="text-[#d6deeb] mb-4">You discovered the Konami Code! Here's a secret:</p>
            <div className="bg-[#1e2d3d] p-4 rounded text-left text-sm">
              <span className="text-[#c792ea]">const</span> <span className="text-[#d6deeb]">secret</span> = {"{"}
              <br />
              &nbsp;&nbsp;<span className="text-[#ecc48d]">"message"</span>:{" "}
              <span className="text-[#ecc48d]">"I put way too much effort into this portfolio 😅"</span>,
              <br />
              &nbsp;&nbsp;<span className="text-[#ecc48d]">"hidden_skill"</span>:{" "}
              <span className="text-[#ecc48d]">"Easter egg implementation"</span>,
              <br />
              &nbsp;&nbsp;<span className="text-[#ecc48d]">"hire_me"</span>:{" "}
              <span className="text-[#ff6363]">true</span>
              <br />
              {"}"};
            </div>
            <button
              onClick={() => setShowEasterEgg(false)}
              className="mt-4 px-4 py-2 bg-[#7fdbca] text-[#011627] rounded hover:bg-[#64b5a6] transition-colors"
            >
              Amazing! Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

function getThemeClasses(theme: string) {
  switch (theme) {
    case "dracula":
      return "bg-[#282a36]"
    case "one-dark":
      return "bg-[#1e2127]"
    case "solarized-light":
      return "bg-[#fdf6e3] text-[#586e75]"
    case "hanan-mode":
      return "bg-gradient-to-br from-pink-900 via-purple-900 to-indigo-900"
    default:
      return "bg-[#011627]"
  }
}
