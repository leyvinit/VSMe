"use client"

import { useState, useEffect } from "react"
import { X, Zap, MapPin, DollarSign } from "lucide-react"

interface InternGrabberAppProps {
  onClose: () => void
}

export function InternGrabberApp({ onClose }: InternGrabberAppProps) {
  const [isScanning, setIsScanning] = useState(false)
  const [foundInternships, setFoundInternships] = useState<any[]>([])
  const [scanProgress, setScanProgress] = useState(0)
  const [excitementLevel, setExcitementLevel] = useState(0)

  const internships = [
    {
      company: "Google",
      position: "Software Engineering Intern",
      location: "Mountain View, CA",
      salary: "$8,000/month",
      match: 98,
      excitement: "🚀🚀🚀",
    },
    {
      company: "Meta",
      position: "Frontend Developer Intern",
      location: "Menlo Park, CA",
      salary: "$7,500/month",
      match: 95,
      excitement: "🔥🔥🔥",
    },
    {
      company: "Microsoft",
      position: "Full Stack Intern",
      location: "Seattle, WA",
      salary: "$7,200/month",
      match: 92,
      excitement: "⚡⚡⚡",
    },
    {
      company: "Apple",
      position: "iOS Development Intern",
      location: "Cupertino, CA",
      salary: "$8,200/month",
      match: 89,
      excitement: "✨✨✨",
    },
  ]

  const startScan = () => {
    setIsScanning(true)
    setScanProgress(0)
    setFoundInternships([])
    setExcitementLevel(0)

    const interval = setInterval(() => {
      setScanProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsScanning(false)
          setFoundInternships(internships)
          setExcitementLevel(100)
          return 100
        }
        return prev + 2
      })
    }, 100)
  }

  useEffect(() => {
    if (excitementLevel > 80) {
      const shakeInterval = setInterval(() => {
        document.body.style.animation = "shake 0.5s"
        setTimeout(() => {
          document.body.style.animation = ""
        }, 500)
      }, 2000)

      return () => clearInterval(shakeInterval)
    }
  }, [excitementLevel])

  return (
    <div className="flex-1 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex flex-col relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center justify-between p-4 border-b border-white/20">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🧠</span>
            <h1 className="text-xl font-bold text-white">Intern Grabber Pro</h1>
            <span className="text-xs bg-red-500 text-white px-2 py-1 rounded animate-pulse">BETA</span>
          </div>
          <button onClick={onClose} className="text-white hover:bg-white/20 p-2 rounded">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 p-6 flex flex-col items-center justify-center">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">AI-Powered Internship Hunter</h2>
            <p className="text-white/80">Scanning the entire internet for perfect matches...</p>
          </div>

          {!isScanning && foundInternships.length === 0 && (
            <button
              onClick={startScan}
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-bold text-lg transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              <Zap className="inline mr-2" size={20} />
              Start Internship Hunt
            </button>
          )}

          {isScanning && (
            <div className="w-full max-w-md">
              <div className="text-center mb-4">
                <div className="text-4xl animate-spin">🧠</div>
                <p className="text-white mt-2">Scanning {scanProgress}% complete...</p>
              </div>
              <div className="w-full bg-white/20 rounded-full h-4 mb-4">
                <div
                  className="bg-gradient-to-r from-green-400 to-blue-500 h-4 rounded-full transition-all duration-200"
                  style={{ width: `${scanProgress}%` }}
                />
              </div>
              <div className="text-center text-white/80 text-sm">
                {scanProgress < 30 && "Analyzing your GitHub profile..."}
                {scanProgress >= 30 && scanProgress < 60 && "Cross-referencing with company databases..."}
                {scanProgress >= 60 && scanProgress < 90 && "Calculating compatibility scores..."}
                {scanProgress >= 90 && "Preparing results..."}
              </div>
            </div>
          )}

          {foundInternships.length > 0 && (
            <div className="w-full max-w-4xl">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  🎉 Found {foundInternships.length} Perfect Matches! 🎉
                </h3>
                <p className="text-white/80">Warning: Excitement levels dangerously high!</p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {foundInternships.map((internship, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-200 transform hover:scale-105"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-bold text-white text-lg">{internship.company}</h4>
                        <p className="text-white/80">{internship.position}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-green-400 font-bold">{internship.match}% Match</div>
                        <div className="text-xl">{internship.excitement}</div>
                      </div>
                    </div>

                    <div className="space-y-2 text-sm text-white/80">
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2" />
                        {internship.location}
                      </div>
                      <div className="flex items-center">
                        <DollarSign size={16} className="mr-2" />
                        {internship.salary}
                      </div>
                    </div>

                    <button className="w-full mt-4 bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white py-2 rounded font-bold transition-all duration-200">
                      Apply Now (Auto-filled!)
                    </button>
                  </div>
                ))}
              </div>

              <div className="text-center mt-6">
                <p className="text-white/60 text-sm">
                  * Results are 99.9% accurate. Side effects may include uncontrollable excitement and LinkedIn
                  addiction.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
      `}</style>
    </div>
  )
}
