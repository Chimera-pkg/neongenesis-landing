import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Twitter, Youtube, Twitch, Mail, Phone, MapPin, Globe } from "lucide-react"
import { DiscordIcon } from "@/components/icons/discord-icon"

export function Footer() {
  return (
    <footer className="bg-[#0A0814] border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link href="/" className="text-2xl font-bold font-heading tracking-wider mb-4 inline-block">
              NEON GENESIS
            </Link>
            <p className="text-gray-400 mb-6 font-body">
              Experience the future of combat in a neon-lit cyberpunk world where technology and mysticism collide.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-[#FF00FF] transition-colors">
                <DiscordIcon className="h-5 w-5" />
                <span className="sr-only">Discord</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#FF00FF] transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#FF00FF] transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#FF00FF] transition-colors">
                <Twitch className="h-5 w-5" />
                <span className="sr-only">Twitch</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-heading">Quick Links</h3>
            <ul className="space-y-3 font-body">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Characters
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  World
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Gameplay
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-heading">Contact</h3>
            <ul className="space-y-3 font-body">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-[#FF00FF] mr-3 mt-0.5" />
                <span className="text-gray-400">support@neongenesis.game</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-[#FF00FF] mr-3 mt-0.5" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[#FF00FF] mr-3 mt-0.5" />
                <span className="text-gray-400">
                  123 Neon Street, Suite 456
                  <br />
                  Neo Tokyo, NT 78901
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-heading">Newsletter</h3>
            <p className="text-gray-400 mb-4 font-body">Subscribe to get the latest news and updates.</p>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-white/5 border-white/10 focus:border-[#FF00FF]"
              />
              <Button className="w-full bg-gradient-to-r from-[#FF00FF] to-[#00FFFF] hover:opacity-90 text-black font-medium">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm font-body">
            &copy; {new Date().getFullYear()} Neon Genesis. All rights reserved.
          </p>

          <div className="flex items-center mt-4 md:mt-0">
            <Globe className="h-4 w-4 text-gray-400 mr-2" />
            <div className="flex space-x-4 text-sm font-body">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                English
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                日本語
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                한국어
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                中文
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
