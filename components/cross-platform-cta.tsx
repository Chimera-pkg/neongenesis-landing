"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"

export function CrossPlatformCta() {
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (ctaRef.current) {
      observer.observe(ctaRef.current)
    }

    return () => {
      if (ctaRef.current) {
        observer.unobserve(ctaRef.current)
      }
    }
  }, [])

  return (
    <section ref={ctaRef} className="py-24 relative opacity-0">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#120F20]/0 via-[#120F20]/70 to-[#120F20]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/10 shadow-[0_0_30px_rgba(255,0,255,0.15)]">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold font-heading">Play on Mobile and PC!</h2>
            <p className="text-gray-300 text-lg max-w-xl mx-auto font-body">
              Play Neon Genesis anywhere, anytime. Your progress, purchases, and customizations sync seamlessly across
              all platforms.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link href="#" className="transform transition-transform hover:scale-105">
                <Image
                  src="/assets/google.png?height=60&width=180"
                  alt="Google Play"
                  width={180}
                  height={60}
                  className="h-14 w-auto"
                />
              </Link>
              <Link href="#" className="transform transition-transform hover:scale-105">
                <Image
                  src="/assets/apple.png?height=60&width=180"
                  alt="App Store"
                  width={180}
                  height={60}
                  className="h-14 w-auto"
                />
              </Link>
              <Link href="#" className="transform transition-transform hover:scale-105">
                <Image
                  src="/assets/steam.png?height=60&width=180"
                  alt="Steam"
                  width={180}
                  height={60}
                  className="h-14 w-auto"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
