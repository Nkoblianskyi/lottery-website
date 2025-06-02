import Link from "next/link"
import { Trophy } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8 sm:py-12">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-orange-500 to-blue-600 rounded-full flex items-center justify-center">
                <Trophy className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-bold">AussieBigWins</h4>
                <p className="text-[10px] sm:text-xs text-orange-300">Premium Lottery Experience</p>
              </div>
            </div>
            <p className="text-blue-200 text-xs sm:text-sm">
              Australia's premier lottery experience since 1994. Play responsibly and dream big with us!
            </p>
          </div>

          <div>
            <h5 className="font-bold mb-3 sm:mb-4 text-orange-300 text-sm sm:text-base">Quick Links</h5>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/privacy" className="hover:text-orange-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-orange-300">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-3 sm:mb-4 text-orange-300 text-sm sm:text-base">Responsible Gaming</h5>
            <p className="text-blue-200 text-xs sm:text-sm mb-3 sm:mb-4">
              🎰 Please play responsibly. If you need help, contact Gambling Help Online or call 1800 858 858.
            </p>
            <p className="text-blue-200 text-xs sm:text-sm">
              For those seeking self-exclusion from all online gambling platforms, BetStop provides a free service as
              the National Self-Exclusion Register.
            </p>
          </div>
        </div>

        {/* Support Organizations - Horizontal Layout */}
        <div className="border-t border-blue-700 pt-4 sm:pt-6 mb-4 sm:mb-6 overflow-x-auto">
          <h5 className="font-bold mb-3 sm:mb-4 text-orange-300 text-center text-sm sm:text-base">
            Support Organizations
          </h5>
          <div className="border-t border-slate-700 mt-12 pt-8"> <div className="flex flex-wrap justify-center items-center gap-8"> {/* 18+ Badge */} <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-xl font-bold text-lg shadow-lg"> 18+ </div>
          {/* Gambler's Help */}
          <Link
            href="https://gamblershelp.com.au/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Gambler's Help"
            className="hover:opacity-80 transition-opacity group"
          >
            <Image src="/gamblershelp.svg" alt="Gambler's Help" width={100} height={100} />
          </Link>

          {/* Victoria Government */}
          <Link
            href="https://www.vic.gov.au/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Victoria Government"
            className="hover:opacity-80 transition-opacity group bg-white p-2 rounded-sm"
          >
            <Image src="/victoria.svg" alt="Victoria Government" width={100} height={100} />
          </Link>

          {/* Reset App */}
          <Link
            href="https://resetapp.com.au/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Reset App"
            className="hover:opacity-80 transition-opacity group"
          >
            <Image src="/reset.svg" alt="Victoria Government" width={100} height={100} />
          </Link>

          {/* BeGambleAware */}
          <Link
            href="https://www.gambleaware.org/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Be Gamble Aware"
            className="hover:opacity-80 transition-opacity group"
          >
            <Image src="/bgambleaware.svg" alt="Victoria Government" width={100} height={100} />
          </Link>
        </div>
        </div>
        </div>

        <div className="border-t border-blue-700 pt-4 sm:pt-8 text-center text-xs sm:text-sm text-blue-200">
          <p>&copy; 2024 AussieBigWins. All rights reserved. Licensed lottery operator in Australia.</p>
        </div>
      </div>
    </footer>
  )
}
