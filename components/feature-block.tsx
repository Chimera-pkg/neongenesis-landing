"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface FeatureBlockProps {
  title: string
  description: string
  imageUrl: string
  imageAlt: string
  imagePosition: "left" | "right"
  ctaText: string
  ctaUrl: string
}

export function FeatureBlock({
  title,
  description,
  imageUrl,
  imageAlt,
  imagePosition,
  ctaText,
  ctaUrl,
}: FeatureBlockProps) {
  const blockRef = useRef<HTMLDivElement>(null)

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

    if (blockRef.current) {
      observer.observe(blockRef.current)
    }

    return () => {
      if (blockRef.current) {
        observer.unobserve(blockRef.current)
      }
    }
  }, [])

  return (
    <div ref={blockRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center opacity-0">
      {imagePosition === "left" && (
        <div className="relative order-2 lg:order-1">
          <div className="absolute -inset-4 bg-gradient-to-r from-[#FF00FF]/20 to-[#00FFFF]/20 rounded-full blur-3xl opacity-30"></div>
          <div className="relative bg-[#120F20]/40 backdrop-blur-sm rounded-2xl p-4 border border-white/10 transform transition-transform hover:scale-[1.02] duration-500">
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={imageAlt}
              width={600}
              height={500}
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>
      )}

      <div className={`space-y-6 order-1 ${imagePosition === "left" ? "lg:order-2" : ""}`}>
        <h2 className="text-3xl md:text-4xl font-bold font-heading">{title}</h2>
        <p className="text-gray-300 text-lg font-body">{description}</p>
        <Link
          href={ctaUrl}
          className="inline-flex items-center text-[#00FFFF] hover:text-[#00FFFF]/80 font-medium group"
        >
          {ctaText}
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      {imagePosition === "right" && (
        <div className="relative order-2">
          <div className="absolute -inset-4 bg-gradient-to-r from-[#FF00FF]/20 to-[#00FFFF]/20 rounded-full blur-3xl opacity-30"></div>
          <div className="relative bg-[#120F20]/40 backdrop-blur-sm rounded-2xl p-4 border border-white/10 transform transition-transform hover:scale-[1.02] duration-500">
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={imageAlt}
              width={600}
              height={500}
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>
      )}
    </div>
  )
}
