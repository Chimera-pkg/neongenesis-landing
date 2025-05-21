"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

const stats = [
  { value: "5M+", label: "Active Players" },
  { value: "20K", label: "Global Servers" },
  { value: "5K", label: "Tournaments" },
  { value: "1K", label: "Content Creators" },
]

export function CommunityStats() {
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")

            const counters = entry.target.querySelectorAll(".counter-value")
            counters.forEach((counter) => {
              const target = Number.parseInt(counter.getAttribute("data-target") || "0")
              let count = 0
              const updateCounter = () => {
                const increment = target / 50
                if (count < target) {
                  count += increment
                  counter.textContent = Math.ceil(count).toString()
                  setTimeout(updateCounter, 20)
                } else {
                  counter.textContent = target.toString()
                }
              }
              updateCounter()
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current)
      }
    }
  }, [])

  return (
    <div ref={statsRef} className="relative opacity-0">
      <div className="absolute inset-0 bg-gradient-to-r from-[#FF00FF]/10 to-[#00FFFF]/10 rounded-3xl blur-3xl opacity-30"></div>
      <div className="relative bg-[#120F20]/40 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Join Our Growing Community</h2>
            <p className="text-gray-300 text-lg mb-8 font-body">
              Neon Genesis is more than just a game - it's a thriving community of players, creators, and competitors
              from around the world.
            </p>

            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div
                    className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF00FF] to-[#00FFFF] counter-value"
                    data-target={stat.value.replace(/\D/g, "")}
                  >
                    0
                  </div>
                  <div className="text-gray-300 font-body">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <Image
              src="/assets/character-community.png?height=500&width=600"
              alt="Neon Genesis community"
              width={600}
              height={500}
              className="w-full h-auto rounded-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-[#120F20] rounded-lg p-4 border border-[#FF00FF]/30">
              <div className="text-xl font-bold mb-1 font-heading">Next Tournament</div>
              <div className="text-[#00FFFF] font-medium">June 15, 2025</div>
              <div className="text-sm text-gray-300 font-body">$100,000 Prize Pool</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
