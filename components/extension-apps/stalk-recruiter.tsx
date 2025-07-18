"use client"

import { useState } from "react"
import { X, Search, Eye, MapPin, Building, Calendar } from "lucide-react"

interface StalkRecruiterAppProps {
  onClose: () => void
}

export function StalkRecruiterApp({ onClose }: StalkRecruiterAppProps) {
  const [isScanning, setIsScanning] = useState(false)
  const [scanProgress, setScanProgress] = useState(0)
  const [recruiters, setRecruiters] = useState<any[]>([])
  const [selectedRecruiter, setSelectedRecruiter] = useState<any>(null)

  const mockRecruiters = [
    {
      id: 1,
      name: "Sarah Chen",
      company: "Google",
      position: "Senior Technical Recruiter",
      location: "Mountain View, CA",
      lastActive: "2 hours ago",
      hiringFor: ["Software Engineer", "Frontend Developer", "Full Stack"],
      personality: "Coffee enthusiast, loves clean code",
      contactPreference: "LinkedIn DMs",
      responseRate: "87%",
      avatar: "👩‍💼",
      status: "Actively hiring",
      funFact: "Posts coding memes on LinkedIn",
    },
    {
      id: 2,
      name: "Marcus Johnson",
      company: "Microsoft",
      position: "Talent Acquisition Specialist",
      location: "Seattle, WA",
      lastActive: "1 day ago",
      hiringFor: ["Backend Developer", "DevOps Engineer"],
      personality: "Straight to the point, values experience",
      contactPreference: "Email",
      responseRate: "92%",
      avatar: "👨‍💼",
      status: "Reviewing applications",
      funFact: "Always responds within 24 hours",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      company: "Meta",
      position: "University Recruiter",
      location: "Menlo Park, CA",
      lastActive: "30 minutes ago",
      hiringFor: ["Intern - Software Engineering", "New Grad - Frontend"],
      personality: "Friendly, loves helping new grads",
      contactPreference: "LinkedIn + Coffee chat",
      responseRate: "95%",
      avatar: "👩‍🎓",
      status: "Scheduling interviews",
      funFact: "Hosts virtual coffee chats for students",
    },
  ]

  const startScan = () => {
    setIsScanning(true)
    setScanProgress(0)
    setRecruiters([])

    const interval = setInterval(() => {
      setScanProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsScanning(false)
          setRecruiters(mockRecruiters)
          return 100
        }
        return prev + 3
      })
    }, 150)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Actively hiring":
        return "text-green-400"
      case "Reviewing applications":
        return "text-yellow-400"
      case "Scheduling interviews":
        return "text-blue-400"
      default:
        return "text-gray-400"
    }
  }

  return (
    <div className="flex-1 bg-gradient-to-br from-gray-900 via-slate-900 to-black flex flex-col relative overflow-hidden">
      {/* Matrix-style background effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-green-400 text-xs opacity-20 animate-pulse font-mono"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          >
            {Math.random() > 0.5 ? "01010101" : "LinkedIn"}
          </div>
        ))}
      </div>

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center justify-between p-4 border-b border-white/20">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🕵️‍♀️</span>
            <h1 className="text-xl font-bold text-white">Stalk-a-Recruiter</h1>
            <span className="text-xs bg-green-500 text-white px-2 py-1 rounded animate-pulse">ETHICAL*</span>
          </div>
          <button onClick={onClose} className="text-white hover:bg-white/20 p-2 rounded">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 p-6">
          {!isScanning && recruiters.length === 0 && (
            <div className="text-center">
              <div className="text-6xl mb-6">🕵️‍♀️</div>
              <h2 className="text-3xl font-bold text-white mb-4">LinkedIn Recruiter Tracker</h2>
              <p className="text-white/80 mb-6 max-w-md mx-auto">
                Totally ethical* LinkedIn reconnaissance. Find recruiters who are actively hiring and learn their
                preferences.
              </p>
              <p className="text-white/60 text-sm mb-8">*Probably ethical. Maybe. We're not lawyers.</p>

              <button
                onClick={startScan}
                className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white px-8 py-4 rounded-lg font-bold text-lg transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                <Search className="inline mr-2" size={20} />
                Start LinkedIn Scan
              </button>
            </div>
          )}

          {isScanning && (
            <div className="text-center max-w-md mx-auto">
              <div className="text-6xl animate-pulse mb-4">👀</div>
              <h2 className="text-2xl font-bold text-white mb-4">Scanning LinkedIn...</h2>

              <div className="w-full bg-white/20 rounded-full h-4 mb-4">
                <div
                  className="bg-gradient-to-r from-green-400 to-teal-500 h-4 rounded-full transition-all duration-200"
                  style={{ width: `${scanProgress}%` }}
                />
              </div>

              <div className="text-white/80 text-sm">
                {scanProgress < 25 && "Accessing LinkedIn database..."}
                {scanProgress >= 25 && scanProgress < 50 && "Analyzing recruiter activity..."}
                {scanProgress >= 50 && scanProgress < 75 && "Cross-referencing hiring patterns..."}
                {scanProgress >= 75 && "Compiling intelligence report..."}
              </div>
            </div>
          )}

          {recruiters.length > 0 && !selectedRecruiter && (
            <div>
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">🎯 Target Acquired!</h2>
                <p className="text-white/80">Found {recruiters.length} active recruiters in your area</p>
              </div>

              <div className="grid gap-4 max-w-4xl mx-auto">
                {recruiters.map((recruiter) => (
                  <div
                    key={recruiter.id}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-200 cursor-pointer"
                    onClick={() => setSelectedRecruiter(recruiter)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3">
                        <div className="text-3xl">{recruiter.avatar}</div>
                        <div>
                          <h3 className="font-bold text-white text-lg">{recruiter.name}</h3>
                          <div className="flex items-center space-x-2 text-white/80 text-sm mb-1">
                            <Building size={14} />
                            <span>
                              {recruiter.position} at {recruiter.company}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2 text-white/80 text-sm mb-2">
                            <MapPin size={14} />
                            <span>{recruiter.location}</span>
                          </div>
                          <div className={`text-sm font-bold ${getStatusColor(recruiter.status)}`}>
                            ● {recruiter.status}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-green-400 font-bold">{recruiter.responseRate}</div>
                        <div className="text-white/60 text-xs">Response Rate</div>
                      </div>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {recruiter.hiringFor.slice(0, 2).map((role: string, index: number) => (
                        <span key={index} className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs">
                          {role}
                        </span>
                      ))}
                      {recruiter.hiringFor.length > 2 && (
                        <span className="text-white/60 text-xs">+{recruiter.hiringFor.length - 2} more</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedRecruiter && (
            <div className="max-w-2xl mx-auto">
              <button
                onClick={() => setSelectedRecruiter(null)}
                className="text-white/80 hover:text-white mb-4 flex items-center space-x-2"
              >
                ← Back to list
              </button>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-2">{selectedRecruiter.avatar}</div>
                  <h2 className="text-2xl font-bold text-white">{selectedRecruiter.name}</h2>
                  <p className="text-white/80">
                    {selectedRecruiter.position} at {selectedRecruiter.company}
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-white/80">
                      <MapPin size={16} />
                      <span>{selectedRecruiter.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-white/80">
                      <Calendar size={16} />
                      <span>Last active: {selectedRecruiter.lastActive}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-white/80">
                      <Eye size={16} />
                      <span>Response rate: {selectedRecruiter.responseRate}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <h4 className="text-white font-bold mb-1">Personality:</h4>
                      <p className="text-white/80 text-sm">{selectedRecruiter.personality}</p>
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">Contact Preference:</h4>
                      <p className="text-white/80 text-sm">{selectedRecruiter.contactPreference}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <h4 className="text-white font-bold mb-2">Currently Hiring For:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedRecruiter.hiringFor.map((role: string, index: number) => (
                      <span key={index} className="bg-green-500/20 text-green-400 px-3 py-1 rounded">
                        {role}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 bg-yellow-500/20 border border-yellow-500 rounded-lg p-3">
                  <h4 className="text-yellow-400 font-bold mb-1">🎯 Pro Tip:</h4>
                  <p className="text-white/80 text-sm">{selectedRecruiter.funFact}</p>
                </div>

                <div className="mt-6 text-center">
                  <button
                    onClick={() => window.open("https://linkedin.com", "_blank")}
                    className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-6 py-3 rounded-lg font-bold transition-all duration-200"
                  >
                    Stalk on LinkedIn
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
