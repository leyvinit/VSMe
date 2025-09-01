"use client"

import { Monitor, Smartphone } from "lucide-react"

interface MobileWarningProps {
  onClose?: () => void
}

export function MobileWarning({ onClose }: MobileWarningProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
      <div className="bg-[#011627] border border-[#7fdbca] rounded-lg p-6 text-center max-w-md w-full">
        <div className="flex justify-center items-center gap-4 mb-6">
          <Smartphone className="text-[#ff6363] w-8 h-8" />
          <div className="text-2xl">→</div>
          <Monitor className="text-[#7fdbca] w-8 h-8" />
        </div>

        <h2 className="text-xl text-[#7fdbca] mb-4 font-semibold">Desktop Experience Required</h2>

        <p className="text-[#d6deeb] mb-4 leading-relaxed">
          This VS Code-style portfolio is designed for desktop viewing to provide the best interactive experience.
        </p>

        <div className="bg-[#1e2d3d] p-4 rounded text-left text-sm mb-4">
          <div className="text-[#c792ea]">// Recommended specs:</div>
          <div className="text-[#d6deeb]">
            <span className="text-[#ecc48d]">screen_width</span>: <span className="text-[#ff6363]">&gt;= 768px</span>
          </div>
          <div className="text-[#d6deeb]">
            <span className="text-[#ecc48d]">device</span>: <span className="text-[#ecc48d]">"desktop" | "laptop"</span>
          </div>
        </div>

        <p className="text-[#d6deeb] text-sm mb-6">
          Please visit from a desktop or laptop computer to explore my portfolio with all its interactive features!
        </p>

        {onClose && (
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#7fdbca] text-[#011627] rounded hover:bg-[#64b5a6] transition-colors text-sm font-medium"
          >
            I'll try anyway
          </button>
        )}
      </div>
    </div>
  )
}
