"use client"

import { Download, Star } from "lucide-react"
import { useState } from "react"
import { InternGrabberApp } from "./extension-apps/intern-grabber"
import { DebugSnacksApp } from "./extension-apps/debug-snacks"
import { ConfidenceBoosterApp } from "./extension-apps/confidence-booster"
import { QuickSplitProApp } from "./extension-apps/quicksplit-pro"
import { StalkRecruiterApp } from "./extension-apps/stalk-recruiter"
import { MotivationInjectorApp } from "./extension-apps/motivation-injector"
import { SassyCodeReviewerApp } from "./extension-apps/sassy-code-reviewer"
import { BugWhispererApp } from "./extension-apps/bug-whisperer"

export function ExtensionsPanel() {
  const [activeApp, setActiveApp] = useState<string | null>(null)
  const [activeFilter, setActiveFilter] = useState("popular")

  const allExtensions = [
    {
      id: "intern-grabber",
      name: "Intern Grabber",
      icon: "🧠",
      description: "Finds you internships before you even apply. Still in beta. May cause excitement overload.",
      downloads: "2.1M",
      downloadCount: 2100000,
      rating: 4.8,
      installed: false,
      releaseDate: new Date("2024-01-15"),
      trending: true,
      category: "career",
    },
    {
      id: "debug-snacks",
      name: "Late Night Debug Snacks",
      icon: "🍜",
      description: "Delivers ramen to your door every time you fix a bug after 2 AM.",
      downloads: "856K",
      downloadCount: 856000,
      rating: 4.9,
      installed: true,
      releaseDate: new Date("2023-11-20"),
      trending: false,
      category: "productivity",
    },
    {
      id: "confidence-booster",
      name: "Confidence Booster++",
      icon: "💅",
      description: "Injects subtle flexes into your code and auto-generates LinkedIn posts.",
      downloads: "1.3M",
      downloadCount: 1300000,
      rating: 4.7,
      installed: false,
      releaseDate: new Date("2023-12-08"),
      trending: true,
      category: "social",
    },
    {
      id: "quicksplit-pro",
      name: "QuickSplit Pro",
      icon: "🔥",
      description: 'Adds AI-powered budget roasts: "Bro really spent $20 on coffee again?"',
      downloads: "445K",
      downloadCount: 445000,
      rating: 4.6,
      installed: false,
      releaseDate: new Date("2024-01-02"),
      trending: false,
      category: "finance",
    },
    {
      id: "stalk-recruiter",
      name: "Stalk-a-Recruiter",
      icon: "🕵️‍♀️",
      description: "Opens a terminal-based LinkedIn tracker. *Totally ethical.* (probably)",
      downloads: "789K",
      downloadCount: 789000,
      rating: 4.2,
      installed: false,
      releaseDate: new Date("2024-01-20"),
      trending: true,
      category: "career",
    },
    {
      id: "motivation-injector",
      name: "Motivation Injector",
      icon: "⚡",
      description: "Randomly displays motivational quotes when you're about to give up debugging.",
      downloads: "1.1M",
      downloadCount: 1100000,
      rating: 4.9,
      installed: true,
      releaseDate: new Date("2023-10-15"),
      trending: false,
      category: "productivity",
    },
    {
      id: "code-reviewer-ai",
      name: "Sassy Code Reviewer",
      icon: "🤖",
      description: "AI that reviews your code with the sass of a senior developer who's had too much coffee.",
      downloads: "3.2M",
      downloadCount: 3200000,
      rating: 4.8,
      installed: false,
      releaseDate: new Date("2024-01-25"),
      trending: true,
      category: "productivity",
    },
    {
      id: "bug-whisperer",
      name: "Bug Whisperer",
      icon: "🐛",
      description: "Talks to your bugs and convinces them to fix themselves. 73% success rate.",
      downloads: "567K",
      downloadCount: 567000,
      rating: 4.5,
      installed: false,
      releaseDate: new Date("2024-01-28"),
      trending: false,
      category: "debugging",
    },
  ]

  const getFilteredExtensions = () => {
    let filtered = [...allExtensions]

    switch (activeFilter) {
      case "trending":
        filtered = filtered.filter((ext) => ext.trending)
        break
      case "most-downloaded":
        filtered = filtered.sort((a, b) => b.downloadCount - a.downloadCount)
        break
      case "recently-added":
        filtered = filtered.sort((a, b) => b.releaseDate.getTime() - a.releaseDate.getTime())
        break
      case "popular":
      default:
        // Sort by rating * download count for popularity
        filtered = filtered.sort((a, b) => b.rating * b.downloadCount - a.rating * a.downloadCount)
        break
    }

    return filtered
  }

  const extensions = getFilteredExtensions()

  const handleInstall = (extensionId: string) => {
    setActiveApp(extensionId)
  }

  const renderActiveApp = () => {
    switch (activeApp) {
      case "intern-grabber":
        return <InternGrabberApp onClose={() => setActiveApp(null)} />
      case "debug-snacks":
        return <DebugSnacksApp onClose={() => setActiveApp(null)} />
      case "confidence-booster":
        return <ConfidenceBoosterApp onClose={() => setActiveApp(null)} />
      case "quicksplit-pro":
        return <QuickSplitProApp onClose={() => setActiveApp(null)} />
      case "stalk-recruiter":
        return <StalkRecruiterApp onClose={() => setActiveApp(null)} />
      case "motivation-injector":
        return <MotivationInjectorApp onClose={() => setActiveApp(null)} />
      case "code-reviewer-ai":
        return <SassyCodeReviewerApp onClose={() => setActiveApp(null)} />
      case "bug-whisperer":
        return <BugWhispererApp onClose={() => setActiveApp(null)} />
      default:
        return null
    }
  }

  if (activeApp) {
    return renderActiveApp()
  }

  return (
    <div className="flex-1 bg-[#011627] flex flex-col">
      <div className="border-b border-[#1e2d3d] p-4">
        <h1 className="text-xl font-semibold text-[#d6deeb] mb-2">Extensions</h1>
        <div className="flex items-center space-x-4 text-sm text-[#8892b0]">
          <button
            onClick={() => setActiveFilter("popular")}
            className={`px-2 py-1 rounded transition-colors ${
              activeFilter === "popular" ? "bg-[#1e2d3d] text-[#d6deeb]" : "hover:text-[#d6deeb] hover:bg-[#1e2d3d]/50"
            }`}
          >
            Popular
          </button>
          <button
            onClick={() => setActiveFilter("trending")}
            className={`px-2 py-1 rounded transition-colors flex items-center space-x-1 ${
              activeFilter === "trending" ? "bg-[#1e2d3d] text-[#d6deeb]" : "hover:text-[#d6deeb] hover:bg-[#1e2d3d]/50"
            }`}
          >
            <span>Trending</span>
            {activeFilter === "trending" && <span className="text-red-400">🔥</span>}
          </button>
          <button
            onClick={() => setActiveFilter("most-downloaded")}
            className={`px-2 py-1 rounded transition-colors ${
              activeFilter === "most-downloaded"
                ? "bg-[#1e2d3d] text-[#d6deeb]"
                : "hover:text-[#d6deeb] hover:bg-[#1e2d3d]/50"
            }`}
          >
            Most Downloaded
          </button>
          <button
            onClick={() => setActiveFilter("recently-added")}
            className={`px-2 py-1 rounded transition-colors flex items-center space-x-1 ${
              activeFilter === "recently-added"
                ? "bg-[#1e2d3d] text-[#d6deeb]"
                : "hover:text-[#d6deeb] hover:bg-[#1e2d3d]/50"
            }`}
          >
            <span>Recently Added</span>
            {activeFilter === "recently-added" && <span className="text-green-400">✨</span>}
          </button>
        </div>
      </div>

      {activeFilter !== "popular" && (
        <div className="px-4 py-2 bg-[#1e2d3d]/50 border-b border-[#1e2d3d]">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-sm">
              <span className="text-[#8892b0]">Showing:</span>
              <span className="text-[#d6deeb] font-medium capitalize">
                {activeFilter === "most-downloaded"
                  ? "Most Downloaded"
                  : activeFilter === "recently-added"
                    ? "Recently Added"
                    : "Trending"}{" "}
                Extensions
              </span>
              {activeFilter === "trending" && <span className="text-red-400">🔥</span>}
              {activeFilter === "recently-added" && <span className="text-green-400">✨</span>}
            </div>
            <span className="text-[#8892b0] text-xs">{extensions.length} results</span>
          </div>
        </div>
      )}

      <div className="flex-1 overflow-auto p-4">
        <div className="grid gap-4">
          {extensions.map((ext, index) => (
            <div key={index} className="bg-[#1e2d3d] rounded-lg p-4 hover:bg-[#2d3748] transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3 flex-1">
                  <div className="text-2xl">{ext.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="font-semibold text-[#d6deeb]">{ext.name}</h3>
                      {ext.installed && (
                        <span className="text-xs bg-[#7fdbca] text-[#011627] px-2 py-1 rounded">Installed</span>
                      )}
                    </div>
                    <p className="text-sm text-[#8892b0] mb-2">{ext.description}</p>
                    <div className="flex items-center space-x-4 text-xs text-[#8892b0]">
                      <div className="flex items-center space-x-1">
                        <Star size={12} className="text-yellow-400" />
                        <span>{ext.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Download size={12} />
                        <span>{ext.downloads}</span>
                      </div>
                      {activeFilter === "recently-added" && (
                        <div className="flex items-center space-x-1">
                          <span className="text-green-400">📅</span>
                          <span>{ext.releaseDate.toLocaleDateString()}</span>
                        </div>
                      )}
                      {ext.trending && activeFilter === "trending" && (
                        <span className="bg-red-500/20 text-red-400 px-2 py-1 rounded text-xs font-bold">
                          🔥 TRENDING
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleInstall(ext.id)}
                  className="px-3 py-1 text-xs rounded transition-colors bg-[#7fdbca] text-[#011627] hover:bg-[#64b5a6]"
                >
                  {ext.installed ? "Open" : "Install & Open"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
