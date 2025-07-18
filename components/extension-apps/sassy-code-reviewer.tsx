"use client"

import { useState, useEffect } from "react"
import { X, Code, AlertTriangle, CheckCircle, XCircle } from "lucide-react"

interface SassyCodeReviewerAppProps {
  onClose: () => void
}

export function SassyCodeReviewerApp({ onClose }: SassyCodeReviewerAppProps) {
  const [codeInput, setCodeInput] = useState("")
  const [isReviewing, setIsReviewing] = useState(false)
  const [review, setReview] = useState<any>(null)
  const [sassLevel, setSassLevel] = useState(3)
  const [coffeeLevel, setCoffeeLevel] = useState(2)

  const sampleCode = `function calculateTotal(items) {
var total = 0;
for (var i = 0; i < items.length; i++) {
  total = total + items[i].price;
}
return total;
}`

  const sassyComments = {
    1: {
      positive: ["Not terrible, I guess.", "Could be worse.", "Acceptable."],
      negative: ["This needs work.", "Please fix this.", "Consider improving this."],
      suggestions: ["Maybe try", "You could", "Consider"],
    },
    2: {
      positive: ["Decent work.", "This is fine.", "Good enough."],
      negative: ["This is problematic.", "Fix this please.", "This needs attention."],
      suggestions: ["You should", "Try to", "Consider"],
    },
    3: {
      positive: ["Nice work!", "This looks good.", "Well done."],
      negative: ["Yikes, this is rough.", "This hurts my eyes.", "What were you thinking?"],
      suggestions: ["Seriously, try", "Please just", "For the love of code,"],
    },
    4: {
      positive: ["Actually impressive!", "This is solid!", "I'm pleasantly surprised."],
      negative: ["Oh honey, no.", "This is a crime against code.", "My IDE is crying."],
      suggestions: ["Listen, you need to", "Do yourself a favor and", "Trust me,"],
    },
    5: {
      positive: ["*Chef's kiss* Beautiful!", "This is art!", "I'm genuinely impressed!"],
      negative: ["I can't even... just no.", "This code killed my houseplant.", "I need therapy after reading this."],
      suggestions: ["For the sake of humanity,", "I'm begging you to", "Please, PLEASE"],
    },
  }

  const generateReview = () => {
    setIsReviewing(true)

    setTimeout(() => {
      const issues = [
        {
          type: "error",
          line: 2,
          message: getRandomComment("negative"),
          suggestion: `${getRandomComment("suggestions")} use 'let' instead of 'var'. It's 2024, not 2004.`,
        },
        {
          type: "warning",
          line: 3,
          message: "This for loop is so 2010.",
          suggestion: `${getRandomComment("suggestions")} use array methods like reduce(). Your code will thank you.`,
        },
        {
          type: "info",
          line: 1,
          message: getRandomComment("positive"),
          suggestion: "Function name is clear. One point for you!",
        },
      ]

      const overallScore = Math.floor(Math.random() * 40) + 60 // 60-100
      const overallComment = getOverallComment(overallScore)

      setReview({
        issues,
        score: overallScore,
        comment: overallComment,
        coffeeRecommendation: getCoffeeRecommendation(),
      })
      setIsReviewing(false)
    }, 3000)
  }

  const getRandomComment = (type: string) => {
    const comments = sassyComments[sassLevel as keyof typeof sassyComments][type as keyof (typeof sassyComments)[3]]
    return comments[Math.floor(Math.random() * comments.length)]
  }

  const getOverallComment = (score: number) => {
    if (score >= 90) {
      return sassLevel >= 4
        ? "Holy moly! This code is actually good! I'm shocked! 🤯"
        : "Great job! This is solid code."
    } else if (score >= 80) {
      return sassLevel >= 3 ? "Not bad! I've seen worse... much worse. 😏" : "Good work overall."
    } else if (score >= 70) {
      return sassLevel >= 3 ? "It's... functional. Like a rusty bicycle. 🚲" : "Needs some improvements."
    } else {
      return sassLevel >= 4 ? "This code needs a hug... and a complete rewrite. 🫂" : "Significant improvements needed."
    }
  }

  const getCoffeeRecommendation = () => {
    const recommendations = [
      "I need a double espresso after reviewing this.",
      "This code pairs well with strong coffee and regret.",
      "Grab a latte and let's fix this together.",
      "I'm switching to decaf... this code is stressful enough.",
      "Time for a coffee break. We both need it.",
    ]
    return recommendations[Math.floor(Math.random() * recommendations.length)]
  }

  useEffect(() => {
    setCodeInput(sampleCode)
  }, [])

  return (
    <div className="flex-1 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 flex flex-col relative overflow-hidden">
      {/* Floating code symbols */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {["{ }", "< />", "( )", "[ ]", "=>", "&&"].map((symbol, i) => (
          <div
            key={i}
            className="absolute text-2xl opacity-10 animate-pulse font-mono text-blue-400"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          >
            {symbol}
          </div>
        ))}
      </div>

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center justify-between p-4 border-b border-white/20">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🤖</span>
            <h1 className="text-xl font-bold text-white">Sassy Code Reviewer</h1>
            <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded animate-pulse">AI POWERED</span>
          </div>
          <button onClick={onClose} className="text-white hover:bg-white/20 p-2 rounded">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 p-6 overflow-y-auto">
          {/* Controls */}
          <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <div>
              <label className="block text-white font-bold mb-2">Sass Level ☕</label>
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map((level) => (
                  <button
                    key={level}
                    onClick={() => setSassLevel(level)}
                    className={`w-8 h-8 rounded-full font-bold transition-all ${
                      sassLevel === level ? "bg-red-500 text-white" : "bg-white/20 text-white/60 hover:bg-white/30"
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
              <p className="text-white/60 text-xs mt-1">
                {sassLevel <= 2 ? "Polite" : sassLevel <= 3 ? "Sarcastic" : sassLevel <= 4 ? "Brutal" : "Savage"}
              </p>
            </div>

            <div>
              <label className="block text-white font-bold mb-2">Coffee Level ☕</label>
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((level) => (
                  <button
                    key={level}
                    onClick={() => setCoffeeLevel(level)}
                    className={`text-2xl transition-all ${level <= coffeeLevel ? "opacity-100" : "opacity-30"}`}
                  >
                    ☕
                  </button>
                ))}
              </div>
              <p className="text-white/60 text-xs mt-1">
                {coffeeLevel <= 2 ? "Sleepy" : coffeeLevel <= 3 ? "Alert" : coffeeLevel <= 4 ? "Wired" : "Jittery"}
              </p>
            </div>
          </div>

          {/* Code Input */}
          <div className="max-w-4xl mx-auto mb-6">
            <label className="block text-white font-bold mb-2">Your Code (Prepare for judgment)</label>
            <textarea
              value={codeInput}
              onChange={(e) => setCodeInput(e.target.value)}
              className="w-full h-40 bg-black/50 border border-white/20 rounded-lg p-4 text-green-400 font-mono text-sm resize-none focus:outline-none focus:border-blue-400"
              placeholder="Paste your code here... I dare you."
            />
          </div>

          {/* Review Button */}
          <div className="text-center mb-6">
            <button
              onClick={generateReview}
              disabled={isReviewing || !codeInput.trim()}
              className="bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-bold text-lg transform hover:scale-105 transition-all duration-200 shadow-lg disabled:opacity-50 disabled:transform-none"
            >
              <Code className="inline mr-2" size={20} />
              {isReviewing ? "Reviewing... (Brewing Coffee)" : "Roast My Code"}
            </button>
          </div>

          {/* Loading State */}
          {isReviewing && (
            <div className="text-center max-w-md mx-auto">
              <div className="text-6xl animate-bounce mb-4">🤖</div>
              <h2 className="text-2xl font-bold text-white mb-4">Analyzing Your Code...</h2>
              <div className="space-y-2 text-white/80 text-sm">
                <p>☕ Brewing coffee...</p>
                <p>🔍 Reading your code...</p>
                <p>😤 Preparing sassy comments...</p>
                <p>📝 Writing review...</p>
              </div>
            </div>
          )}

          {/* Review Results */}
          {review && !isReviewing && (
            <div className="max-w-4xl mx-auto">
              {/* Overall Score */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 mb-6">
                <div className="text-center">
                  <div className="text-6xl mb-4">
                    {review.score >= 90 ? "🏆" : review.score >= 80 ? "👍" : review.score >= 70 ? "😐" : "😬"}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">Score: {review.score}/100</div>
                  <p className="text-white/80 text-lg mb-4">{review.comment}</p>
                  <div className="bg-amber-500/20 border border-amber-500 rounded-lg p-3">
                    <p className="text-amber-400 text-sm">☕ {review.coffeeRecommendation}</p>
                  </div>
                </div>
              </div>

              {/* Issues */}
              <div className="space-y-4">
                {review.issues.map((issue: any, index: number) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <div className="flex items-start space-x-3">
                      <div className="mt-1">
                        {issue.type === "error" && <XCircle className="text-red-400" size={20} />}
                        {issue.type === "warning" && <AlertTriangle className="text-yellow-400" size={20} />}
                        {issue.type === "info" && <CheckCircle className="text-green-400" size={20} />}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="text-white font-bold capitalize">{issue.type}</span>
                          <span className="text-white/60 text-sm">Line {issue.line}</span>
                        </div>
                        <p className="text-white/80 mb-2">{issue.message}</p>
                        <p className="text-white/60 text-sm">{issue.suggestion}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="text-center mt-8 space-x-4">
                <button
                  onClick={() => setReview(null)}
                  className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-6 py-3 rounded-lg font-bold transition-all duration-200"
                >
                  Review More Code
                </button>
                <button
                  onClick={() => alert("Feature coming soon! For now, just cry into your coffee ☕😭")}
                  className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white px-6 py-3 rounded-lg font-bold transition-all duration-200"
                >
                  Auto-Fix Issues
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
