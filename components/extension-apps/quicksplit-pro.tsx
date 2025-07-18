"use client"

import { useState } from "react"
import { X, DollarSign, Coffee, ShoppingBag, Car, Home } from "lucide-react"

interface QuickSplitProAppProps {
  onClose: () => void
}

export function QuickSplitProApp({ onClose }: QuickSplitProAppProps) {
  const [expenses, setExpenses] = useState([
    { id: 1, item: "Coffee", amount: 20, category: "coffee", roast: "" },
    { id: 2, item: "Uber ride", amount: 15, category: "transport", roast: "" },
    { id: 3, item: "Lunch", amount: 35, category: "food", roast: "" },
    { id: 4, item: "Netflix subscription", amount: 15, category: "entertainment", roast: "" },
  ])

  const roasts = {
    coffee: [
      "Bro really spent $20 on coffee again? That's like 4 days of instant coffee! ☕😤",
      "Another coffee expense? Your caffeine addiction is showing! Maybe try water? 💧",
      "Coffee budget looking sus... Are you trying to single-handedly fund Starbucks? 📈☕",
    ],
    transport: [
      "Uber again? Your legs called, they miss being used for walking! 🚶‍♀️💸",
      "That Uber money could've bought you a bike by now! 🚲💨",
      "Public transport exists, just saying... 🚌💰",
    ],
    food: [
      "Eating out again? Your kitchen is getting lonely! 🍳😢",
      "That's some expensive food! Hope it was worth the Instagram story! 📸🍽️",
      "Cooking at home is a thing, you know... Your wallet would thank you! 👨‍🍳💝",
    ],
    entertainment: [
      "Another subscription? How many streaming services does one person need? 📺💸",
      "Entertainment budget going brrrr... Maybe read a book? 📚✨",
      "Your entertainment expenses are more entertaining than the content! 🎭💰",
    ],
  }

  const generateRoast = (expense: any) => {
    const categoryRoasts = roasts[expense.category as keyof typeof roasts] || [
      "Interesting spending choice... Your future self is judging you! 👀💸",
    ]
    const randomRoast = categoryRoasts[Math.floor(Math.random() * categoryRoasts.length)]

    setExpenses(expenses.map((exp) => (exp.id === expense.id ? { ...exp, roast: randomRoast } : exp)))
  }

  const getIcon = (category: string) => {
    switch (category) {
      case "coffee":
        return <Coffee className="text-amber-400" size={20} />
      case "transport":
        return <Car className="text-blue-400" size={20} />
      case "food":
        return <ShoppingBag className="text-green-400" size={20} />
      case "entertainment":
        return <Home className="text-purple-400" size={20} />
      default:
        return <DollarSign className="text-gray-400" size={20} />
    }
  }

  const totalSpent = expenses.reduce((sum, exp) => sum + exp.amount, 0)

  return (
    <div className="flex-1 bg-gradient-to-br from-red-900 via-orange-900 to-yellow-900 flex flex-col relative overflow-hidden">
      {/* Floating money emojis */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {["💸", "💰", "🔥", "😤", "👀", "💳"].map((emoji, i) => (
          <div
            key={i}
            className="absolute text-2xl opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          >
            {emoji}
          </div>
        ))}
      </div>

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center justify-between p-4 border-b border-white/20">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🔥</span>
            <h1 className="text-xl font-bold text-white">QuickSplit Pro</h1>
            <span className="text-xs bg-red-500 text-white px-2 py-1 rounded animate-pulse">ROAST MODE</span>
          </div>
          <button onClick={onClose} className="text-white hover:bg-white/20 p-2 rounded">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 p-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">AI-Powered Budget Roaster</h2>
            <p className="text-white/80">Your spending habits, brutally analyzed</p>

            <div className="bg-red-500/20 border border-red-500 rounded-lg p-4 mt-4 max-w-md mx-auto">
              <div className="text-2xl font-bold text-red-400">Total Damage: ${totalSpent}</div>
              <p className="text-white/80 text-sm">Your wallet is crying... 😭</p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid gap-4">
              {expenses.map((expense) => (
                <div
                  key={expense.id}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-200"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      {getIcon(expense.category)}
                      <div>
                        <h3 className="font-bold text-white">{expense.item}</h3>
                        <p className="text-white/60 text-sm capitalize">{expense.category}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-red-400">${expense.amount}</div>
                      <button
                        onClick={() => generateRoast(expense)}
                        className="bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white px-3 py-1 rounded text-sm font-bold transition-all duration-200 mt-1"
                      >
                        Roast Me! 🔥
                      </button>
                    </div>
                  </div>

                  {expense.roast && (
                    <div className="bg-red-500/20 border border-red-500 rounded-lg p-3 mt-3 animate-pulse">
                      <div className="flex items-start space-x-2">
                        <span className="text-red-400 text-lg">🤖</span>
                        <div>
                          <p className="text-red-400 font-bold text-sm mb-1">AI Roast:</p>
                          <p className="text-white text-sm">{expense.roast}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500 rounded-lg p-6 max-w-2xl mx-auto">
                <h3 className="text-xl font-bold text-yellow-400 mb-3">💡 AI Budget Wisdom</h3>
                <div className="space-y-2 text-white/80 text-sm">
                  <p>• Your coffee budget could fund a small startup ☕💰</p>
                  <p>• Consider walking occasionally - your Uber driver has a mortgage to pay 🚶‍♀️</p>
                  <p>• Your kitchen appliances are filing for abandonment 🍳😢</p>
                  <p>• Netflix, Hulu, Disney+, HBO... Are you running a streaming service review blog? 📺</p>
                </div>

                <div className="mt-4 p-3 bg-green-500/20 border border-green-500 rounded">
                  <p className="text-green-400 font-bold">Potential Monthly Savings: $127</p>
                  <p className="text-white/80 text-xs">If you actually follow this advice (which you won't) 😏</p>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <button
                onClick={() => {
                  setExpenses(expenses.map((exp) => ({ ...exp, roast: "" })))
                  alert("Roasts cleared! Your ego is safe... for now 😈")
                }}
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-6 py-3 rounded-lg font-bold transition-all duration-200"
              >
                Clear Roasts (Restore Dignity)
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
