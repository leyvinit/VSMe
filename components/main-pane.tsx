"use client"

import { X } from "lucide-react"
import { CodeEditor } from "./code-editor"

interface MainPaneProps {
  activeFile: string
  openTabs: string[]
  onTabClose: (fileName: string) => void
  onTabClick: (fileName: string) => void
  currentTheme?: string
  onRunCode?: (output: string[]) => void
}

export function MainPane({ activeFile, openTabs, onTabClose, onTabClick, currentTheme, onRunCode }: MainPaneProps) {
  if (openTabs.length === 0) {
    return (
      <div className="flex-1 bg-[#011627] flex items-center justify-center">
        <div className="text-center text-[#8892b0]">
          <div className="text-6xl mb-4">👨‍💻</div>
          <div className="text-xl mb-2">Welcome to Hanan's Portfolio</div>
          <div>Click on a file in the explorer to get started</div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex-1 bg-[#011627] flex flex-col">
      {/* Tabs */}
      <div className="flex bg-[#010e1a] border-b border-[#1e2d3d] overflow-x-auto">
        {openTabs.map((tab) => (
          <div
            key={tab}
            className={`flex items-center px-3 py-2 border-r border-[#1e2d3d] cursor-pointer min-w-0 ${
              activeFile === tab ? "bg-[#011627] text-[#d6deeb]" : "bg-[#010e1a] text-[#8892b0] hover:text-[#d6deeb]"
            }`}
            onClick={() => onTabClick(tab)}
          >
            <span className="truncate text-sm">{tab}</span>
            <button
              className="ml-2 p-1 hover:bg-[#1e2d3d] rounded"
              onClick={(e) => {
                e.stopPropagation()
                onTabClose(tab)
              }}
            >
              <X size={12} />
            </button>
          </div>
        ))}
      </div>

      {/* Code Editor */}
      <div className="flex-1 overflow-hidden">
        <CodeEditor fileName={activeFile} currentTheme={currentTheme} onRunCode={onRunCode} />
      </div>
    </div>
  )
}
