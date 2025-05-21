import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ScreenshotGallery } from "@/components/screenshot-gallery"
import { FeatureBlock } from "@/components/feature-block"
import { CommunityStats } from "@/components/community-stats"
import { CrossPlatformCta } from "@/components/cross-platform-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#120F20] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('/assets/grid-pattern.png')] bg-repeat opacity-5 pointer-events-none"></div>
      <Navbar />
      <HeroSection />
      <ScreenshotGallery />

      <div className="container mx-auto px-4 py-16 space-y-32">
        <FeatureBlock
          title="Character Abilities"
          description="Master unique abilities for each character in Neon Genesis. From hacking skills to combat prowess, each character brings their own strengths to the battlefield. Customize and upgrade abilities as you progress through the game."
          imageUrl="/assets/character-abilities.png"
          imageAlt="Character with special abilities"
          imagePosition="left"
          ctaText="Learn More"
          ctaUrl="#"
        />

        <FeatureBlock
          title="Cybernetic Enhancements"
          description="Upgrade your character with cutting-edge cybernetic enhancements. Boost your speed, strength, and hacking abilities with implants and modifications. Mix and match to create the perfect build for your playstyle."
          imageUrl="/assets/cybernetic.png?height=500&width=600"
          imageAlt="Cybernetic enhancements showcase"
          imagePosition="right"
          ctaText="Explore Upgrades"
          ctaUrl="#"
        />

        <CommunityStats />
      </div>

      <CrossPlatformCta />
      <Footer />
    </main>
  )
}
