import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AussieBigWins - Australia's Premier Lottery Experience",
  description:
    "Play Oz Lotto, Powerball, and Saturday Lotto with Australia's trusted lottery operator since 1994. Buy tickets online and win big!",
  keywords: "lottery, oz lotto, powerball, saturday lotto, australia, online lottery, tickets",
  viewport: "width=device-width, initial-scale=1, minimum-scale=1",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 animate-fadeIn">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
