"use client"

import { ChevronDown, ChevronRight, Folder, FileText, Package, FolderOpen } from "lucide-react"
import { useState } from "react"

interface SidebarProps {
  activeFile: string
  onFileClick: (fileName: string) => void
  onExtensionsClick: () => void
  onProjectsClick: () => void
  showExtensions: boolean
  showProjects: boolean
}

export function Sidebar({
  activeFile,
  onFileClick,
  onExtensionsClick,
  onProjectsClick,
  showExtensions,
  showProjects,
}: SidebarProps) {
  const [isExpanded, setIsExpanded] = useState(true)

  const files = ["about-me.js", "experience.js", "projects.js", "skills.js", "contact.js"]

  return (
    <div className="w-64 bg-[#011627] border-r border-[#1e2d3d] flex flex-col text-sm">
      {/* Activity Bar */}
      <div className="flex">
        <div className="w-12 bg-[#010e1a] border-r border-[#1e2d3d] flex flex-col items-center py-2">
          <button
            onClick={() => {
              if (showExtensions) onExtensionsClick()
              if (showProjects) onProjectsClick()
            }}
            className={`p-2 mb-2 rounded hover:bg-[#1e2d3d] ${!showExtensions && !showProjects ? "bg-[#1e2d3d]" : ""}`}
            title="Explorer"
          >
            <Folder size={20} className="text-[#d6deeb]" />
          </button>
          <button
            onClick={onProjectsClick}
            className={`p-2 mb-2 rounded hover:bg-[#1e2d3d] ${showProjects ? "bg-[#1e2d3d]" : ""}`}
            title="Projects"
          >
            <FolderOpen size={20} className="text-[#d6deeb]" />
          </button>
          <button
            onClick={onExtensionsClick}
            className={`p-2 mb-2 rounded hover:bg-[#1e2d3d] ${showExtensions ? "bg-[#1e2d3d]" : ""}`}
            title="Extensions"
          >
            <Package size={20} className="text-[#d6deeb]" />
          </button>
        </div>

        {/* File Explorer */}
        <div className="flex-1 flex flex-col">
          <div className="p-2 border-b border-[#1e2d3d]">
            <div className="text-xs text-[#8892b0] uppercase tracking-wide mb-2">Explorer</div>
            <div
              className="flex items-center cursor-pointer hover:bg-[#1e2d3d] p-1 rounded"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              <Folder size={16} className="mx-1 text-[#7fdbca]" />
              <span className="text-[#d6deeb]">hanan-abdullahi</span>
            </div>
          </div>

          {isExpanded && (
            <div className="flex-1 p-2">
              {files.map((file) => (
                <div
                  key={file}
                  className={`flex items-center cursor-pointer p-1 pl-6 rounded hover:bg-[#1e2d3d] ${
                    activeFile === file ? "bg-[#1e2d3d] text-[#d6deeb]" : "text-[#8892b0]"
                  }`}
                  onClick={() => onFileClick(file)}
                >
                  <FileText size={16} className="mr-2 text-[#c792ea]" />
                  <span>{file}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="p-4 border-t border-[#1e2d3d] text-center">
        <a
          href="https://github.com/leyvinit"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-3 py-1 bg-[#7fdbca] text-[#011627] rounded text-xs font-medium hover:bg-[#64b5a6] transition-colors"
        >
          View on GitHub
        </a>
      </div>
    </div>
  )
}
