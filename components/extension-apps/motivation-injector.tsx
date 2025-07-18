"use client"

import { useState, useEffect } from "react"
import { X, Zap, Heart, Star, TrendingUp } from "lucide-react"

interface MotivationInjectorAppProps {
  onClose: () => void
}

export function MotivationInjectorApp({ onClose }: MotivationInjectorAppProps) {
  const [currentQuote, setCurrentQuote] = useState("")
  const [motivationLevel, setMotivationLevel] = useState(50)
  const [isInjecting, setIsInjecting] = useState(false)
  const [autoMode, setAutoMode] = useState(false)
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; emoji: string }>>([])

  const motivationalQuotes = [
    "🚀 Your code today is someone's solution tomorrow!",
    "💪 Every bug you fix makes you stronger!",
    "✨ You're not just writing code, you're crafting the future!",
    "🔥 That algorithm you're struggling with? You've got this!",
    "⚡ Your debugging skills are legendary in the making!",
    "🌟 Every line of code is a step towards your dreams!",
    "🎯 You're building more than software - you're building your legacy!",
    "💎 Your persistence is your superpower!",
    "🚀 The next breakthrough is just one commit away!",
    "🏆 You're not behind, you're exactly where you need to be!",
    "💡 Your creativity + code = unlimited possibilities!",
    "🔥 Stack Overflow fears your problem-solving skills!",
  ]

  const injectMotivation = () => {
    setIsInjecting(true)

    setTimeout(() => {
      const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]
      setCurrentQuote(randomQuote)
      setMotivationLevel(Math.min(100, motivationLevel + 15))
      setIsInjecting(false)

      // Create particle effect
      const newParticles = Array.from({ length: 8 }, (_, i) => ({
        id: Date.now() + i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        emoji: ["⚡", "✨", "🚀", "💪", "🔥"][Math.floor(Math.random() * 5)],
      }))
      setParticles(newParticles)

      setTimeout(() => setParticles([]), 3000)
    }, 1500)
  }

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (autoMode) {
      interval = setInterval(() => {
        injectMotivation()
      }, 10000) // Inject every 10 seconds in auto mode
    }
    return () => clearInterval(interval)
  }, [autoMode, motivationLevel])

  const getMoodColor = () => {
    if (motivationLevel < 30) return "from-red-500 to-orange-600"
    if (motivationLevel < 70) return "from-yellow-500 to-orange-600"
    return "from-green-500 to-teal-600"
  }

  const getMoodEmoji = () => {
    if (motivationLevel < 30) return "😴"
    if (motivationLevel < 50) return "😐"
    if (motivationLevel < 70) return "😊"
    if (motivationLevel < 90) return "😄"
    return "🤩"
  }

  return (
    <div className="flex-1 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex flex-col relative overflow-hidden">
      {/* Floating particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute text-2xl animate-bounce pointer-events-none z-20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDuration: "2s",
          }}
        >
          {particle.emoji}
        </div>
      ))}

      {/* Background animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute text-4xl opacity-10 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            {["💪", "🚀", "⚡", "✨", "🔥", "💎"][Math.floor(Math.random() * 6)]}
          </div>
        ))}
      </div>

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center justify-between p-4 border-b border-white/20">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">⚡</span>
            <h1 className="text-xl font-bold text-white">Motivation Injector</h1>
            <span className="text-xs bg-purple-500 text-white px-2 py-1 rounded animate-pulse">ACTIVE</span>
          </div>
          <button onClick={onClose} className="text-white hover:bg-white/20 p-2 rounded">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 p-6 overflow-y-auto">
          {/* Motivation Level Display */}
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">{getMoodEmoji()}</div>
            <h2 className="text-2xl font-bold text-white mb-4">Motivation Level</h2>

            <div className="max-w-md mx-auto mb-4">
              <div className="w-full bg-white/20 rounded-full h-8 relative overflow-hidden">
                <div
                  className={`bg-gradient-to-r ${getMoodColor()} h-8 rounded-full transition-all duration-1000 flex items-center justify-center relative`}
                  style={{ width: `${motivationLevel}%` }}
                >
                  <span className="text-white font-bold text-sm absolute">{motivationLevel}%</span>
                  {motivationLevel > 80 && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
                  )}
                </div>
              </div>
              <div className="flex justify-between text-white/60 text-sm mt-2">
                <span>Burnout</span>
                <span>Motivated</span>
                <span>Unstoppable</span>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-4">
              <button
                onClick={() => setAutoMode(!autoMode)}
                className={`px-4 py-2 rounded font-bold transition-all duration-200 ${
                  autoMode ? "bg-green-500 hover:bg-green-600 text-white" : "bg-white/20 hover:bg-white/30 text-white"
                }`}
              >
                {autoMode ? "Auto Mode ON" : "Auto Mode OFF"}
              </button>
            </div>
          </div>

          {/* Quote Display */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 min-h-[200px] flex items-center justify-center">
              {isInjecting ? (
                <div className="text-center">
                  <div className="text-6xl animate-spin mb-4">⚡</div>
                  <p className="text-white/80 text-lg">Injecting motivation...</p>
                  <div className="flex justify-center space-x-1 mt-4">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="w-2 h-2 bg-white rounded-full animate-bounce"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      />
                    ))}
                  </div>
                </div>
              ) : currentQuote ? (
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-4 leading-relaxed">{currentQuote}</div>
                  <div className="flex justify-center space-x-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className={`${
                          i < Math.floor(motivationLevel / 20) ? "text-yellow-400 fill-current" : "text-white/30"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <div className="text-4xl mb-4">💭</div>
                  <p className="text-white/60 text-lg">Ready for your motivation boost?</p>
                </div>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="text-center space-y-4">
            <button
              onClick={injectMotivation}
              disabled={isInjecting}
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-bold text-lg transform hover:scale-105 transition-all duration-200 shadow-lg disabled:opacity-50 disabled:transform-none"
            >
              <Zap className="inline mr-2" size={24} />
              {isInjecting ? "Injecting..." : "Inject Motivation"}
            </button>

            {motivationLevel > 80 && (
              <div className="bg-gradient-to-r from-yellow-400/20 to-orange-500/20 border border-yellow-400 rounded-lg p-4 max-w-md mx-auto animate-pulse">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <TrendingUp className="text-yellow-400" size={20} />
                  <h3 className="font-bold text-yellow-400">Peak Performance Mode!</h3>
                </div>
                <p className="text-white/80 text-sm">
                  You're in the zone! This is the perfect time to tackle that challenging feature! 🚀
                </p>
              </div>
            )}

            {motivationLevel === 100 && (
              <div className="bg-gradient-to-r from-green-400/20 to-teal-500/20 border border-green-400 rounded-lg p-4 max-w-md mx-auto">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Heart className="text-red-400" size={20} />
                  <h3 className="font-bold text-green-400">MAXIMUM MOTIVATION ACHIEVED!</h3>
                </div>
                <p className="text-white/80 text-sm">
                  You're unstoppable! Go build something amazing! The world needs your code! 🌟
                </p>
              </div>
            )}
          </div>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-3 gap-4 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">12</div>
              <div className="text-white/60 text-sm">Quotes Injected</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">85%</div>
              <div className="text-white/60 text-sm">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">∞</div>
              <div className="text-white/60 text-sm">Potential</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
