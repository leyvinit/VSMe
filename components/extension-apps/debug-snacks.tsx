"use client"

import { useState, useEffect } from "react"
import { X, Clock, MapPin, Truck } from "lucide-react"

interface DebugSnacksAppProps {
  onClose: () => void
}

export function DebugSnacksApp({ onClose }: DebugSnacksAppProps) {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [isLateNight, setIsLateNight] = useState(false)
  const [orderStatus, setOrderStatus] = useState<"idle" | "ordering" | "delivering" | "delivered">("idle")
  const [deliveryProgress, setDeliveryProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      setCurrentTime(now)
      setIsLateNight(now.getHours() >= 22 || now.getHours() <= 6)
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const snacks = [
    { name: "Midnight Ramen", emoji: "🍜", time: "15 min", price: "$12" },
    { name: "Debug Dumplings", emoji: "🥟", time: "20 min", price: "$15" },
    { name: "Code Coffee", emoji: "☕", time: "10 min", price: "$8" },
    { name: "Stack Overflow Pizza", emoji: "🍕", time: "25 min", price: "$18" },
    { name: "Binary Boba", emoji: "🧋", time: "12 min", price: "$6" },
    { name: "Exception Energy Drink", emoji: "⚡", time: "8 min", price: "$5" },
  ]

  const orderSnack = (snack: any) => {
    setOrderStatus("ordering")
    setTimeout(() => {
      setOrderStatus("delivering")
      setDeliveryProgress(0)

      const deliveryInterval = setInterval(() => {
        setDeliveryProgress((prev) => {
          if (prev >= 100) {
            clearInterval(deliveryInterval)
            setOrderStatus("delivered")
            return 100
          }
          return prev + 5
        })
      }, 200)
    }, 2000)
  }

  const resetOrder = () => {
    setOrderStatus("idle")
    setDeliveryProgress(0)
  }

  return (
    <div className="flex-1 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex flex-col relative overflow-hidden">
      {/* Floating food emojis */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {["🍜", "🥟", "☕", "🍕", "🧋", "⚡"].map((emoji, i) => (
          <div
            key={i}
            className="absolute text-2xl opacity-20 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            {emoji}
          </div>
        ))}
      </div>

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center justify-between p-4 border-b border-white/20">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🍜</span>
            <h1 className="text-xl font-bold text-white">Late Night Debug Snacks</h1>
            {isLateNight && (
              <span className="text-xs bg-green-500 text-white px-2 py-1 rounded animate-pulse">ACTIVE</span>
            )}
          </div>
          <button onClick={onClose} className="text-white hover:bg-white/20 p-2 rounded">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 p-6 overflow-y-auto">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <Clock size={24} className="text-white" />
              <span className="text-2xl font-bold text-white">{currentTime.toLocaleTimeString()}</span>
            </div>

            {isLateNight ? (
              <div className="bg-green-500/20 border border-green-500 rounded-lg p-4 mb-4">
                <h2 className="text-xl font-bold text-green-400 mb-2">🌙 Late Night Mode Active!</h2>
                <p className="text-white/80">Perfect time for debugging! Snack delivery is available.</p>
              </div>
            ) : (
              <div className="bg-yellow-500/20 border border-yellow-500 rounded-lg p-4 mb-4">
                <h2 className="text-xl font-bold text-yellow-400 mb-2">☀️ Daytime Mode</h2>
                <p className="text-white/80">Come back after 10 PM for late-night debugging fuel!</p>
              </div>
            )}
          </div>

          {orderStatus === "idle" && (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              {snacks.map((snack, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-200 transform hover:scale-105"
                >
                  <div className="text-center">
                    <div className="text-4xl mb-2">{snack.emoji}</div>
                    <h3 className="font-bold text-white mb-1">{snack.name}</h3>
                    <div className="flex justify-between items-center text-sm text-white/80 mb-3">
                      <span>{snack.time}</span>
                      <span className="font-bold text-green-400">{snack.price}</span>
                    </div>
                    <button
                      onClick={() => orderSnack(snack)}
                      disabled={!isLateNight}
                      className={`w-full py-2 rounded font-bold transition-all duration-200 ${
                        isLateNight
                          ? "bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white"
                          : "bg-gray-500 text-gray-300 cursor-not-allowed"
                      }`}
                    >
                      {isLateNight ? "Order Now" : "Wait for Night"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {orderStatus === "ordering" && (
            <div className="text-center">
              <div className="text-6xl animate-spin mb-4">🍜</div>
              <h2 className="text-2xl font-bold text-white mb-2">Processing Your Order...</h2>
              <p className="text-white/80">Connecting to the nearest 24/7 debug kitchen...</p>
            </div>
          )}

          {orderStatus === "delivering" && (
            <div className="text-center max-w-md mx-auto">
              <div className="text-6xl mb-4">
                <Truck className="inline animate-bounce text-white" size={60} />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Your Snacks Are On The Way!</h2>

              <div className="w-full bg-white/20 rounded-full h-4 mb-4">
                <div
                  className="bg-gradient-to-r from-green-400 to-blue-500 h-4 rounded-full transition-all duration-200"
                  style={{ width: `${deliveryProgress}%` }}
                />
              </div>

              <div className="flex items-center justify-center space-x-2 text-white/80">
                <MapPin size={16} />
                <span>Delivering to: Your Coding Cave</span>
              </div>

              <p className="text-white/60 text-sm mt-2">ETA: {Math.ceil((100 - deliveryProgress) / 5)} minutes</p>
            </div>
          )}

          {orderStatus === "delivered" && (
            <div className="text-center">
              <div className="text-6xl mb-4">🎉</div>
              <h2 className="text-2xl font-bold text-white mb-4">Delivered Successfully!</h2>
              <p className="text-white/80 mb-6">Your debugging fuel has arrived! Time to squash those bugs! 🐛</p>

              <div className="bg-green-500/20 border border-green-500 rounded-lg p-4 mb-6 max-w-md mx-auto">
                <p className="text-green-400 font-bold">Bug Fix Probability: +85%</p>
                <p className="text-white/80 text-sm">Snack-powered debugging is scientifically proven!</p>
              </div>

              <button
                onClick={resetOrder}
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-6 py-3 rounded-lg font-bold transition-all duration-200"
              >
                Order More Snacks
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
