"use client"

import { useState } from "react"
import { Search, X } from "lucide-react"

interface CommandPaletteProps {
  onClose: () => void
  onThemeChange: (theme: string) => void
  onTerminalToggle: () => void
}

export function CommandPalette({ onClose, onThemeChange, onTerminalToggle }: CommandPaletteProps) {
  const [query, setQuery] = useState("")

  const commands = [
    {
      name: "Open QuickSplit Repo",
      description: "View the QuickSplit project on GitHub",
      action: () => window.open("https://github.com/leyvinit", "_blank"),
    },
    {
      name: "Change Theme to Dracula",
      description: "Switch to the Dracula theme",
      action: () => {
        onThemeChange("dracula")
        alert("Switched to Dracula theme! 🧛‍♂️")
        onClose()
      },
    },
    {
      name: "Change Theme to Light Mode",
      description: "Switch to light mode (no, don't)",
      action: () => {
        onThemeChange("solarized-light")
        alert("Switching to light mode... against better judgment. 😵‍💫")
        onClose()
      },
    },
    {
      name: "Activate Hanan Mode",
      description: "Custom pink & purple with sparkle confetti",
      action: () => {
        onThemeChange("hanan-mode")
        alert("✨ Hanan Mode activated! Sparkles and magic everywhere! ✨")
        onClose()
      },
    },
    {
      name: "Summon Motivation Quote",
      description: "Get inspired to keep coding",
      action: () => {
        const quotes = [
          "Tip: You don't need 100 projects — you just need one killer one (and this might be it 😉)",
          "Keep scrolling, future PM at IBM 👩‍💻",
          "Your code is poetry, and you're the poet 📝",
          "Debugging is like being a detective in a crime movie where you're also the murderer 🕵️‍♀️",
        ]
        alert(quotes[Math.floor(Math.random() * quotes.length)])
        onClose()
      },
    },
    {
      name: "Deploy to Mars 🚀",
      description: "Because why not?",
      action: () => {
        alert("🚀 Deploying to Mars... Connection established with Martian servers! 👽")
        onClose()
      },
    },
    {
      name: "Toggle Terminal",
      description: "Show/hide the integrated terminal",
      action: () => {
        onTerminalToggle()
        onClose()
      },
    },
    {
      name: "Open Workspace",
      description: "Add a folder to workspace",
      action: () => {
        alert("Access denied: You're already in the most powerful workspace — HananOS 💻")
        onClose()
      },
    },
  ]

  const filteredCommands = commands.filter(
    (cmd) =>
      cmd.name.toLowerCase().includes(query.toLowerCase()) ||
      cmd.description.toLowerCase().includes(query.toLowerCase()),
  )

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center pt-20 z-50">
      <div className="bg-[#1e2d3d] border border-[#8892b0] rounded-lg w-full max-w-2xl mx-4">
        <div className="flex items-center p-3 border-b border-[#8892b0]">
          <Search size={16} className="text-[#8892b0] mr-2" />
          <input
            type="text"
            placeholder="Type a command..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-[#d6deeb] outline-none placeholder-[#8892b0]"
            autoFocus
          />
          <button onClick={onClose} className="text-[#8892b0] hover:text-[#d6deeb]">
            <X size={16} />
          </button>
        </div>

        <div className="max-h-96 overflow-auto">
          {filteredCommands.map((cmd, index) => (
            <div
              key={index}
              onClick={cmd.action}
              className="flex items-center p-3 hover:bg-[#011627] cursor-pointer border-b border-[#8892b0] last:border-b-0"
            >
              <div className="flex-1">
                <div className="text-[#d6deeb] font-medium">{cmd.name}</div>
                <div className="text-[#8892b0] text-sm">{cmd.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
