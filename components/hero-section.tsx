"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return

      const { clientX, clientY } = e
      const { width, height, left, top } = heroRef.current.getBoundingClientRect()

      const x = (clientX - left) / width - 0.5
      const y = (clientY - top) / height - 0.5

      const character = heroRef.current.querySelector(".character-container") as HTMLElement
      if (character) {
        character.style.transform = `perspective(1000px) rotateY(${x * 5}deg) rotateX(${y * -5}deg) scale(1.05)`
      }
    }

    const handleMouseLeave = () => {
      if (!heroRef.current) return

      const character = heroRef.current.querySelector(".character-container") as HTMLElement
      if (character) {
        character.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)"
      }
    }

    const element = heroRef.current
    if (element) {
      element.addEventListener("mousemove", handleMouseMove)
      element.addEventListener("mouseleave", handleMouseLeave)
    }

    return () => {
      if (element) {
        element.removeEventListener("mousemove", handleMouseMove)
        element.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  return (
    <section ref={heroRef} className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#120F20] via-[#1D1535] to-[#120F20] animate-gradient"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-lg md:text-xl font-medium text-[#00FFFF] mb-3 font-body">WELCOME TO THE FUTURE</h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight font-heading mb-6">
                Dive into the{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF00FF] to-[#00FFFF]">
                  Neonverse
                </span>
              </h1>
              <p className="text-gray-300 text-lg max-w-lg font-body">
                Experience the ultimate anime-cyberpunk adventure where technology meets mysticism. Hack, fight, and
                survive in a world on the edge of revolution.
              </p>
            </div>

            <div>
              <Button className="bg-[#00FFFF] text-[#120F20] hover:bg-[#00FFFF]/90 font-bold text-lg px-8 py-6 rounded-md transition-transform hover:scale-105">
                Play Now
              </Button>
            </div>

            <div className="pt-8 border-t border-white/10">
              <p className="text-sm text-gray-400 mb-4 font-body">POWERED BY</p>
              <div className="flex flex-wrap gap-8 items-center">
                {/* <div className="opacity-70 hover:opacity-100 transition-opacity">
                  <Image src="/assets/engine.png?height=30&width=120" alt="Game Engine" width={120} height={30} />
                </div> */}
                <div className="opacity-70 hover:opacity-100 transition-opacity">
                  <Image src="/assets/rtx-on.png?placeholder.svg?height=30&width=120" alt="Animation Studio" width={120} height={30} />
                </div>
                {/* <div className="opacity-70 hover:opacity-100 transition-opacity">
                  <Image src="/placeholder.svg?height=30&width=120" alt="Music Provider" width={120} height={30} />
                </div> */}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#FF00FF]/20 to-[#00FFFF]/20 rounded-full blur-3xl opacity-30"></div>
            <div className="character-container relative bg-[#120F20]/40 backdrop-blur-sm rounded-2xl p-4 border border-white/10 transition-transform duration-500 ease-out">
              <Image
                src="/assets/character-hero.png"
                alt="Neon Genesis character"
                width={500}
                height={600}
                className="w-full h-auto rounded-xl"
                priority
              />
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-[#FF00FF] to-[#00FFFF] rounded-lg p-3 text-black font-bold font-heading">
                <span className="text-sm">FEATURED CHARACTER</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
