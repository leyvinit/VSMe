"use client"

import { useState, useEffect } from "react"
import { X, Sparkles, Copy, Share2, TrendingUp } from "lucide-react"

interface ConfidenceBoosterAppProps {
  onClose: () => void
}

export function ConfidenceBoosterApp({ onClose }: ConfidenceBoosterAppProps) {
  const [currentFlex, setCurrentFlex] = useState("")
  const [linkedInPost, setLinkedInPost] = useState("")
  const [confidenceLevel, setConfidenceLevel] = useState(50)
  const [isGenerating, setIsGenerating] = useState(false)
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number }>>([])

  const flexes = [
    "// Just casually built a full-stack app over the weekend 💅",
    "// When your code works on the first try (again) ✨",
    "// Another day, another algorithm optimized 🚀",
    "// Debugging? More like de-bugging my way to success 🐛➡️✅",
    "// My GitHub contributions graph is basically modern art 🎨",
    "// Wrote clean code so beautiful, it made my IDE cry tears of joy 😭✨",
    "// Fixed a bug that 5 senior devs couldn't solve. NBD 💁‍♀️",
    "// My functions are so pure, they could be used in a chemistry lab 🧪",
  ]

  const linkedInPosts = [
    "🚀 Excited to share that I just deployed my latest project! The intersection of creativity and code never fails to amaze me. Building solutions that matter, one commit at a time. #SoftwareEngineering #Innovation #TechLife",

    "💡 Had an incredible breakthrough today while debugging a complex algorithm. Sometimes the best solutions come when you step back and think differently. Grateful for the journey of continuous learning! #ProblemSolving #GrowthMindset #Coding",

    "✨ Just finished implementing a feature that I'm genuinely proud of. Clean code, optimal performance, and great user experience. This is why I love being a developer! #CleanCode #UserExperience #SoftwareDevelopment",

    "🎯 Another successful project milestone reached! Working with cutting-edge technologies and solving real-world problems - this is what drives my passion for tech. #ProjectManagement #TechInnovation #Achievement",

    "🌟 Reflecting on my coding journey and how much I've grown. From debugging simple scripts to architecting full applications. The learning never stops! #CodingJourney #PersonalGrowth #TechCareer",
  ]

  const generateFlex = () => {
    setIsGenerating(true)
    setTimeout(() => {
      const randomFlex = flexes[Math.floor(Math.random() * flexes.length)]
      setCurrentFlex(randomFlex)
      setConfidenceLevel(Math.min(100, confidenceLevel + 10))
      setIsGenerating(false)

      // Add sparkle effect
      const newSparkles = Array.from({ length: 10 }, (_, i) => ({
        id: Date.now() + i,
        x: Math.random() * 100,
        y: Math.random() * 100,
      }))
      setSparkles(newSparkles)

      setTimeout(() => setSparkles([]), 2000)
    }, 1500)
  }

  const generateLinkedInPost = () => {
    const randomPost = linkedInPosts[Math.floor(Math.random() * linkedInPosts.length)]
    setLinkedInPost(randomPost)
    setConfidenceLevel(Math.min(100, confidenceLevel + 15))
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    alert("Copied to clipboard! Time to flex! 💅")
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (confidenceLevel > 80) {
        document.body.style.filter = "hue-rotate(10deg) saturate(1.2)"
        setTimeout(() => {
          document.body.style.filter = ""
        }, 500)
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [confidenceLevel])

  return (
    <div className="flex-1 bg-gradient-to-br from-pink-900 via-purple-900 to-indigo-900 flex flex-col relative overflow-hidden">
      {/* Animated sparkles */}
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute text-yellow-400 text-xl animate-ping pointer-events-none"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            animationDuration: "1s",
          }}
        >
          ✨
        </div>
      ))}

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center justify-between p-4 border-b border-white/20">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">💅</span>
            <h1 className="text-xl font-bold text-white">Confidence Booster++</h1>
            <span className="text-xs bg-pink-500 text-white px-2 py-1 rounded animate-pulse">PRO</span>
          </div>
          <button onClick={onClose} className="text-white hover:bg-white/20 p-2 rounded">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 p-6 overflow-y-auto">
          {/* Confidence Meter */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Confidence Level</h2>
            <div className="max-w-md mx-auto">
              <div className="w-full bg-white/20 rounded-full h-6 mb-2">
                <div
                  className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 h-6 rounded-full transition-all duration-500 flex items-center justify-center"
                  style={{ width: `${confidenceLevel}%` }}
                >
                  <span className="text-white font-bold text-sm">{confidenceLevel}%</span>
                </div>
              </div>
              <div className="flex justify-between text-white/60 text-sm">
                <span>Humble</span>
                <span>Confident</span>
                <span>Legendary</span>
              </div>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 max-w-6xl mx-auto">
            {/* Code Flex Generator */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex items-center space-x-2 mb-4">
                <Sparkles className="text-yellow-400" size={24} />
                <h3 className="text-xl font-bold text-white">Code Flex Generator</h3>
              </div>

              <div className="mb-4">
                <div className="bg-black/30 rounded-lg p-4 font-mono text-sm min-h-[100px] flex items-center justify-center">
                  {isGenerating ? (
                    <div className="text-center">
                      <div className="animate-spin text-2xl mb-2">💅</div>
                      <p className="text-white/80">Generating epic flex...</p>
                    </div>
                  ) : currentFlex ? (
                    <div className="text-green-400">{currentFlex}</div>
                  ) : (
                    <p className="text-white/60">Click below to generate your first flex!</p>
                  )}
                </div>
              </div>

              <div className="flex space-x-2">
                <button
                  onClick={generateFlex}
                  disabled={isGenerating}
                  className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white py-2 rounded font-bold transition-all duration-200 disabled:opacity-50"
                >
                  {isGenerating ? "Generating..." : "Generate Flex"}
                </button>
                {currentFlex && (
                  <button
                    onClick={() => copyToClipboard(currentFlex)}
                    className="bg-white/20 hover:bg-white/30 text-white p-2 rounded transition-all duration-200"
                  >
                    <Copy size={20} />
                  </button>
                )}
              </div>
            </div>

            {/* LinkedIn Post Generator */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex items-center space-x-2 mb-4">
                <TrendingUp className="text-blue-400" size={24} />
                <h3 className="text-xl font-bold text-white">LinkedIn Post Generator</h3>
              </div>

              <div className="mb-4">
                <div className="bg-white rounded-lg p-4 text-gray-800 min-h-[150px] text-sm">
                  {linkedInPost ? (
                    <div>{linkedInPost}</div>
                  ) : (
                    <p className="text-gray-500 italic">Your professional flex will appear here...</p>
                  )}
                </div>
              </div>

              <div className="flex space-x-2">
                <button
                  onClick={generateLinkedInPost}
                  className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white py-2 rounded font-bold transition-all duration-200"
                >
                  Generate Post
                </button>
                {linkedInPost && (
                  <>
                    <button
                      onClick={() => copyToClipboard(linkedInPost)}
                      className="bg-white/20 hover:bg-white/30 text-white p-2 rounded transition-all duration-200"
                    >
                      <Copy size={20} />
                    </button>
                    <button
                      onClick={() => window.open("https://linkedin.com", "_blank")}
                      className="bg-white/20 hover:bg-white/30 text-white p-2 rounded transition-all duration-200"
                    >
                      <Share2 size={20} />
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Confidence Boost Messages */}
          {confidenceLevel > 70 && (
            <div className="text-center mt-8">
              <div className="bg-gradient-to-r from-yellow-400/20 to-orange-500/20 border border-yellow-400 rounded-lg p-4 max-w-md mx-auto">
                <h4 className="font-bold text-yellow-400 mb-2">🔥 You're on fire! 🔥</h4>
                <p className="text-white/80 text-sm">
                  Your confidence is through the roof! Time to apply for that dream job! 🚀
                </p>
              </div>
            </div>
          )}

          {confidenceLevel === 100 && (
            <div className="text-center mt-4">
              <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400 rounded-lg p-4 max-w-md mx-auto animate-pulse">
                <h4 className="font-bold text-purple-400 mb-2">👑 LEGENDARY STATUS ACHIEVED! 👑</h4>
                <p className="text-white/80 text-sm">
                  You've reached maximum confidence! The tech world isn't ready for you! 💅✨
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
