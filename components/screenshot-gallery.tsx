"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const screenshots = [
  {
    id: 1,
    src: "/assets/screenshot.png?height=400&width=700",
    alt: "Neon Genesis gameplay screenshot 1",
  },
  {
    id: 2,
    src: "/assets/screenshot.png?height=400&width=700",
    alt: "Neon Genesis gameplay screenshot 2",
  },
  {
    id: 3,
    src: "/assets/screenshot.png?height=400&width=700",
    alt: "Neon Genesis gameplay screenshot 3",
  },
  {
    id: 4,
    src: "/assets/screenshot.png?height=400&width=700",
    alt: "Neon Genesis gameplay screenshot 4",
  },
  {
    id: 5,
    src: "/assets/screenshot.png?height=400&width=700",
    alt: "Neon Genesis gameplay screenshot 5",
  },
]

export function ScreenshotGallery() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      const newIndex = Math.max(0, Math.min(index, screenshots.length - 1))
      setActiveIndex(newIndex)

      const scrollAmount = newIndex * (scrollRef.current.scrollWidth / screenshots.length)
      scrollRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      })
    }
  }

  const scrollPrev = () => scrollToIndex(activeIndex - 1)
  const scrollNext = () => scrollToIndex(activeIndex + 1)

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return
    setIsDragging(true)
    setStartX(e.pageX - scrollRef.current.offsetLeft)
    setScrollLeft(scrollRef.current.scrollLeft)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return
    e.preventDefault()
    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = (x - startX) * 2
    scrollRef.current.scrollLeft = scrollLeft - walk
  }

  useEffect(() => {
    const handleMouseUpGlobal = () => {
      setIsDragging(false)
    }

    document.addEventListener("mouseup", handleMouseUpGlobal)
    return () => {
      document.removeEventListener("mouseup", handleMouseUpGlobal)
    }
  }, [])

  return (
    <section className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-2">Game Screenshots</h2>
        <p className="text-gray-300 max-w-2xl font-body">
          Explore the neon-lit world of Neon Genesis through these in-game screenshots
        </p>
      </div>

      <div className="relative">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-4 px-4 pb-8 cursor-grab"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseUp}
        >
          {screenshots.map((screenshot, index) => (
            <div
              key={screenshot.id}
              className="min-w-[85%] md:min-w-[60%] lg:min-w-[40%] snap-center flex-shrink-0 transform transition-transform duration-300 hover:scale-[1.02]"
            >
              <div className="bg-[#120F20]/40 backdrop-blur-sm rounded-xl p-2 border border-white/10">
                <Image
                  src={screenshot.src || "/placeholder.svg"}
                  alt={screenshot.alt}
                  width={700}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-black/50 backdrop-blur-sm border-[#FF00FF]/20 text-white hover:bg-black/70"
            onClick={scrollPrev}
            disabled={activeIndex === 0}
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Previous</span>
          </Button>
        </div>

        <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-black/50 backdrop-blur-sm border-[#FF00FF]/20 text-white hover:bg-black/70"
            onClick={scrollNext}
            disabled={activeIndex === screenshots.length - 1}
          >
            <ChevronRight className="h-6 w-6" />
            <span className="sr-only">Next</span>
          </Button>
        </div>
      </div>

      <div className="flex justify-center mt-6 gap-2">
        {screenshots.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === activeIndex ? "bg-[#FF00FF]" : "bg-white/30"
            }`}
            onClick={() => scrollToIndex(index)}
            aria-label={`Go to screenshot ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
