"use client"

import { useState } from "react"
import { X, MessageCircle } from "lucide-react"

interface BugWhispererAppProps {
  onClose: () => void
}

export function BugWhispererApp({ onClose }: BugWhispererAppProps) {
  const [selectedBug, setSelectedBug] = useState<any>(null)
  const [isWhispering, setIsWhispering] = useState(false)
  const [whisperResult, setWhisperResult] = useState<any>(null)
  const [successRate, setSuccessRate] = useState(73)
  const [totalBugsWhispered, setTotalBugsWhispered] = useState(247)

  const bugs = [
    {
      id: 1,
      name: "NullPointerException",
      personality: "Stubborn and defensive",
      mood: "Angry 😠",
      description: "Keeps appearing when you least expect it",
      difficulty: "Medium",
      lastSeen: "2 minutes ago",
      whisperHistory: ["Tried reasoning", "Offered cookies"],
    },
    {
      id: 2,
      name: "Infinite Loop Larry",
      personality: "Obsessive and repetitive",
      mood: "Dizzy 😵‍💫",
      description: "Just can't stop going in circles",
      difficulty: "Hard",
      lastSeen: "Currently running",
      whisperHistory: ["Meditation session", "Asked nicely to stop"],
    },
    {
      id: 3,
      name: "CSS Alignment Issue",
      personality: "Perfectionist with trust issues",
      mood: "Anxious 😰",
      description: "Everything must be perfectly aligned or chaos ensues",
      difficulty: "Easy",
      lastSeen: "5 minutes ago",
      whisperHistory: ["Flexbox therapy", "Grid counseling"],
    },
    {
      id: 4,
      name: "Memory Leak Mike",
      personality: "Hoarder, never lets go",
      mood: "Clingy 🤗",
      description: "Collects memory like it's going out of style",
      difficulty: "Hard",
      lastSeen: "Always present",
      whisperHistory: ["Minimalism workshop", "Marie Kondo session"],
    },
    {
      id: 5,
      name: "Race Condition Rita",
      personality: "Competitive and unpredictable",
      mood: "Excited 🏃‍♀️",
      description: "Always trying to finish first, causes chaos",
      difficulty: "Very Hard",
      lastSeen: "Randomly",
      whisperHistory: ["Patience training", "Synchronized swimming"],
    },
  ]

  const whisperTechniques = [
    "Gentle reasoning and logic",
    "Offering virtual cookies and treats",
    "Playing soothing debugging music",
    "Meditation and mindfulness",
    "Therapy session about root causes",
    "Motivational speeches about cooperation",
    "Bribery with better error messages",
    "Group therapy with other bugs",
  ]

  const whisperToBug = (bug: any) => {
    setIsWhispering(true)
    setWhisperResult(null)

    const technique = whisperTechniques[Math.floor(Math.random() * whisperTechniques.length)]
    const success = Math.random() < 0.73 // 73% success rate

    setTimeout(() => {
      const result = {
        success,
        technique,
        bugResponse: getBugResponse(bug, success),
        timeSpent: Math.floor(Math.random() * 30) + 5, // 5-35 minutes
      }

      setWhisperResult(result)
      setIsWhispering(false)

      if (success) {
        setTotalBugsWhispered((prev) => prev + 1)
        // Slightly increase success rate with experience
        setSuccessRate((prev) => Math.min(85, prev + 0.1))
      }
    }, 4000)
  }

  const getBugResponse = (bug: any, success: boolean) => {
    const responses = {
      success: [
        "You know what? You're right. I'll fix myself now. Thanks for listening! 🐛➡️✅",
        "I never thought about it that way... *disappears peacefully*",
        "Fine, fine. I'll stop causing trouble. You're pretty persuasive!",
        "Wow, I feel so much better now! Consider me fixed! ✨",
        "That actually makes sense. I'll go fix myself right now!",
      ],
      failure: [
        "Nah, I'm good here. Thanks though! 😈",
        "Nice try, but I'm staying put. This is my home now!",
        "I appreciate the chat, but I've got chaos to cause! 🔥",
        "You're sweet, but I'm not ready to change yet.",
        "Maybe next time! I'm having too much fun breaking things!",
      ],
    }

    const responseList = success ? responses.success : responses.failure
    return responseList[Math.floor(Math.random() * responseList.length)]
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "text-green-400"
      case "Medium":
        return "text-yellow-400"
      case "Hard":
        return "text-orange-400"
      case "Very Hard":
        return "text-red-400"
      default:
        return "text-gray-400"
    }
  }

  return (
    <div className="flex-1 bg-gradient-to-br from-green-900 via-teal-900 to-blue-900 flex flex-col relative overflow-hidden">
      {/* Floating bugs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {["🐛", "🐞", "🦗", "🕷️", "🐜"].map((bug, i) => (
          <div
            key={i}
            className="absolute text-2xl opacity-20 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          >
            {bug}
          </div>
        ))}
      </div>

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center justify-between p-4 border-b border-white/20">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🐛</span>
            <h1 className="text-xl font-bold text-white">Bug Whisperer</h1>
            <span className="text-xs bg-green-500 text-white px-2 py-1 rounded animate-pulse">
              {successRate}% SUCCESS RATE
            </span>
          </div>
          <button onClick={onClose} className="text-white hover:bg-white/20 p-2 rounded">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 p-6 overflow-y-auto">
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">{totalBugsWhispered}</div>
              <div className="text-white/60 text-sm">Bugs Whispered</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">{successRate}%</div>
              <div className="text-white/60 text-sm">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">∞</div>
              <div className="text-white/60 text-sm">Patience Level</div>
            </div>
          </div>

          {!selectedBug && !isWhispering && !whisperResult && (
            <div>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">Choose a Bug to Whisper To</h2>
                <p className="text-white/80 max-w-2xl mx-auto">
                  Select a bug from your codebase and I'll have a heart-to-heart conversation with it. Sometimes they
                  just need someone to listen! 🐛💚
                </p>
              </div>

              <div className="grid gap-4 max-w-4xl mx-auto">
                {bugs.map((bug) => (
                  <div
                    key={bug.id}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-200 cursor-pointer"
                    onClick={() => setSelectedBug(bug)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3">
                        <div className="text-3xl">🐛</div>
                        <div>
                          <h3 className="font-bold text-white text-lg">{bug.name}</h3>
                          <div className="space-y-1 text-sm">
                            <p className="text-white/80">{bug.description}</p>
                            <div className="flex items-center space-x-4 text-white/60">
                              <span>Mood: {bug.mood}</span>
                              <span>Last seen: {bug.lastSeen}</span>
                            </div>
                            <p className="text-white/60">Personality: {bug.personality}</p>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`font-bold ${getDifficultyColor(bug.difficulty)}`}>{bug.difficulty}</div>
                        <div className="text-white/60 text-xs">Difficulty</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedBug && !isWhispering && !whisperResult && (
            <div className="max-w-2xl mx-auto">
              <button
                onClick={() => setSelectedBug(null)}
                className="text-white/80 hover:text-white mb-4 flex items-center space-x-2"
              >
                ← Back to bug list
              </button>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 mb-6">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">🐛</div>
                  <h2 className="text-2xl font-bold text-white mb-2">{selectedBug.name}</h2>
                  <p className="text-white/80 mb-4">{selectedBug.description}</p>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-white/60">Mood: </span>
                      <span className="text-white">{selectedBug.mood}</span>
                    </div>
                    <div>
                      <span className="text-white/60">Difficulty: </span>
                      <span className={getDifficultyColor(selectedBug.difficulty)}>{selectedBug.difficulty}</span>
                    </div>
                    <div>
                      <span className="text-white/60">Personality: </span>
                      <span className="text-white">{selectedBug.personality}</span>
                    </div>
                    <div>
                      <span className="text-white/60">Last seen: </span>
                      <span className="text-white">{selectedBug.lastSeen}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-white font-bold mb-2">Previous Whisper Attempts:</h3>
                  <div className="space-y-1">
                    {selectedBug.whisperHistory.map((attempt: string, index: number) => (
                      <div key={index} className="text-white/60 text-sm">
                        • {attempt}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <button
                    onClick={() => whisperToBug(selectedBug)}
                    className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white px-8 py-4 rounded-lg font-bold text-lg transform hover:scale-105 transition-all duration-200 shadow-lg"
                  >
                    <MessageCircle className="inline mr-2" size={20} />
                    Start Whispering Session
                  </button>
                </div>
              </div>
            </div>
          )}

          {isWhispering && (
            <div className="text-center max-w-md mx-auto">
              <div className="text-6xl animate-pulse mb-4">🗣️</div>
              <h2 className="text-2xl font-bold text-white mb-4">Whispering to {selectedBug?.name}...</h2>
              <div className="space-y-2 text-white/80 text-sm">
                <p>🤫 Speaking softly and gently...</p>
                <p>👂 Listening to the bug's concerns...</p>
                <p>💚 Building trust and rapport...</p>
                <p>🎯 Finding the root cause together...</p>
              </div>
            </div>
          )}

          {whisperResult && (
            <div className="max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 mb-6">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">{whisperResult.success ? "🎉" : "😔"}</div>
                  <h2 className="text-2xl font-bold text-white mb-2">
                    {whisperResult.success ? "Success!" : "Not This Time"}
                  </h2>
                  <p className="text-white/80 mb-4">Technique used: {whisperResult.technique}</p>
                  <p className="text-white/60 text-sm mb-4">Session duration: {whisperResult.timeSpent} minutes</p>
                </div>

                <div
                  className={`border rounded-lg p-4 mb-6 ${
                    whisperResult.success ? "bg-green-500/20 border-green-500" : "bg-red-500/20 border-red-500"
                  }`}
                >
                  <h3 className={`font-bold mb-2 ${whisperResult.success ? "text-green-400" : "text-red-400"}`}>
                    Bug's Response:
                  </h3>
                  <p className="text-white">{whisperResult.bugResponse}</p>
                </div>

                <div className="text-center space-x-4">
                  <button
                    onClick={() => {
                      setSelectedBug(null)
                      setWhisperResult(null)
                    }}
                    className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-6 py-3 rounded-lg font-bold transition-all duration-200"
                  >
                    Whisper to Another Bug
                  </button>
                  {!whisperResult.success && (
                    <button
                      onClick={() => {
                        setWhisperResult(null)
                        whisperToBug(selectedBug)
                      }}
                      className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-6 py-3 rounded-lg font-bold transition-all duration-200"
                    >
                      Try Different Approach
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
