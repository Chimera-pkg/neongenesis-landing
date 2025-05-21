"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#120F20]/80 backdrop-blur-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-heading tracking-wider">
          NEON GENESIS
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
            Characters
          </Link>
          <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
            World
          </Link>
          <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
            Gameplay
          </Link>
          <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
            Shop
          </Link>

          <Button variant="outline" className="border-[#00FFFF] text-white hover:bg-[#00FFFF]/10">
            Sign Up
          </Button>

          <Button className="bg-gradient-to-r from-[#FF00FF] to-[#00FFFF] hover:opacity-90 transition-opacity text-black font-medium">
            Play Now
          </Button>
        </nav>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#120F20] border-t border-[#FF00FF]/20">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link
              href="#"
              className="py-2 text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Characters
            </Link>
            <Link
              href="#"
              className="py-2 text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              World
            </Link>
            <Link
              href="#"
              className="py-2 text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Gameplay
            </Link>
            <Link
              href="#"
              className="py-2 text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </Link>

            <div className="flex flex-col gap-3 pt-3 border-t border-[#FF00FF]/20">
              <Button variant="outline" className="border-[#00FFFF] text-white hover:bg-[#00FFFF]/10 w-full">
                Sign Up
              </Button>

              <Button className="bg-gradient-to-r from-[#FF00FF] to-[#00FFFF] hover:opacity-90 transition-opacity w-full text-black font-medium">
                Play Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
