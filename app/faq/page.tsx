"use client"

import type React from "react"
import Link from "next/link"
import { ArrowLeft, ChevronDown, ChevronUp, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import AnimatedSection from "../components/AnimatedSection"

interface FAQItemProps {
  question: string
  answer: React.ReactNode
  category: string
}

const faqs: FAQItemProps[] = [
  {
    question: "What is Oz Lotto and how does it work?",
    answer: (
      <div className="space-y-2">
        <p>
          Oz Lotto is Australia's national lottery game established in 1994. It's a simple draw-style lottery where
          players select 7 numbers from 1 to 45.
        </p>
        <p>
          To win Division 1 (the jackpot), you need to match all 7 winning numbers drawn. There are also 6 other prize
          divisions for matching fewer numbers, giving you multiple chances to win.
        </p>
        <p>
          Draws take place every Tuesday at 7:30 PM AEST/AEDT. The minimum Division 1 prize pool is $2 million, but
          jackpots can grow to much larger amounts when not won.
        </p>
      </div>
    ),
    category: "Basics",
  },
  {
    question: "How much does it cost to play Oz Lotto?",
    answer: (
      <div>
        <p>
          A standard game of Oz Lotto costs $1.60. However, there are several ways to play that may affect the cost:
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Standard entry: $1.60 per game</li>
          <li>System entry: Allows you to choose more than 7 numbers, increasing your chances but also the cost</li>
          <li>
            QuickPick: The system randomly selects numbers for you, with options ranging from 1 to 50 games per entry
          </li>
          <li>Multi-week entries: Play the same numbers for up to 10 weeks</li>
        </ul>
        <p className="mt-2">
          For example, a 12-game QuickPick would cost $19.20 (12 × $1.60), while a System 9 entry (which generates 36
          standard games) would cost $57.60.
        </p>
      </div>
    ),
    category: "Basics",
  },
  {
    question: "What are the odds of winning Oz Lotto?",
    answer: (
      <div>
        <p>The odds of winning in Oz Lotto vary by division:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Division 1 (7 numbers): 1 in 45,379,620</li>
          <li>Division 2 (6 numbers + 1 supplementary): 1 in 3,241,401</li>
          <li>Division 3 (6 numbers): 1 in 180,078</li>
          <li>Division 4 (5 numbers + 1 supplementary): 1 in 29,602</li>
          <li>Division 5 (5 numbers): 1 in 3,430</li>
          <li>Division 6 (4 numbers): 1 in 154</li>
          <li>Division 7 (3 numbers + 1 supplementary): 1 in 87</li>
        </ul>
        <p className="mt-2">
          While Division 1 odds are challenging, the multiple prize divisions give you a better overall chance of
          winning a prize, with the overall odds being approximately 1 in 55 for any prize.
        </p>
      </div>
    ),
    category: "Odds & Prizes",
  },
  {
    question: "When are Oz Lotto draws held?",
    answer: (
      <div>
        <p>
          Oz Lotto draws are held every Tuesday at 7:30 PM AEST/AEDT. The draw is conducted at The Lott's secure draw
          facility and is supervised by independent auditors to ensure fairness.
        </p>
        <p className="mt-2">
          Results are typically available within 30 minutes of the draw on our website, mobile app, and through various
          media outlets across Australia.
        </p>
        <p className="mt-2">
          If you play online, you'll receive an email notification if you win a prize, and smaller prizes are
          automatically credited to your account.
        </p>
      </div>
    ),
    category: "Draws",
  },
  {
    question: "What happens if no one wins the Oz Lotto jackpot?",
    answer: (
      <p>
        If no one wins the Division 1 prize (jackpot) in an Oz Lotto draw, the prize money jackpots to the next draw,
        creating a larger prize pool. This process continues until someone wins Division 1 or until it reaches a
        government-regulated maximum. This jackpotting sequence is why Oz Lotto prizes can sometimes reach $50 million,
        $80 million, or even $100+ million. The jackpot will continue to climb each week until it's won, at which point
        it resets to the minimum Division 1 prize pool of $2 million and begins building again.
      </p>
    ),
    category: "Jackpots",
  },
  {
    question: "How do I choose my Oz Lotto numbers?",
    answer: (
      <div>
        <p>There are several ways to choose your Oz Lotto numbers:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>
            <strong>Pick your own:</strong> Choose 7 numbers from 1 to 45 that are meaningful to you
          </li>
          <li>
            <strong>QuickPick:</strong> Let the computer randomly select your numbers
          </li>
          <li>
            <strong>System entries:</strong> Choose more than 7 numbers to cover more combinations
          </li>
          <li>
            <strong>Favourite numbers:</strong> Save your lucky numbers to play regularly
          </li>
        </ul>
        <p className="mt-2">
          Remember, every number combination has an equal chance of winning. Some players choose birthdays,
          anniversaries, or other significant dates, while others prefer random selections.
        </p>
      </div>
    ),
    category: "How to Play",
  },
  {
    question: "What are System entries in Oz Lotto?",
    answer: (
      <div>
        <p>
          System entries allow you to choose more than the standard 7 numbers, giving you more chances to win. Here's
          how they work:
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>
            <strong>System 8:</strong> Choose 8 numbers, creates 8 standard games
          </li>
          <li>
            <strong>System 9:</strong> Choose 9 numbers, creates 36 standard games
          </li>
          <li>
            <strong>System 10:</strong> Choose 10 numbers, creates 120 standard games
          </li>
          <li>
            <strong>System 20:</strong> Choose 20 numbers, creates 77,520 standard games
          </li>
        </ul>
        <p className="mt-2">
          The more numbers you choose, the more combinations you cover, but the cost increases accordingly. System
          entries guarantee that if your chosen numbers include the winning numbers, you'll win multiple prizes across
          different divisions.
        </p>
      </div>
    ),
    category: "How to Play",
  },
  {
    question: "How do I claim my Oz Lotto prize?",
    answer: (
      <div>
        <p>The process for claiming Oz Lotto prizes depends on the prize amount and how you played:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>
            <strong>Online purchases:</strong>
            <ul className="list-circle pl-5 mt-1 space-y-1">
              <li>Prizes up to $1,000 are automatically paid into your online account</li>
              <li>
                Prizes between $1,000 and $10,000 can be transferred to your nominated bank account through your online
                account
              </li>
              <li>
                Prizes over $10,000 require you to contact AussieBigWins customer service for claiming instructions
              </li>
            </ul>
          </li>
          <li>
            <strong>In-store purchases:</strong>
            <ul className="list-circle pl-5 mt-1 space-y-1">
              <li>Prizes up to $1,500 can be claimed at any lottery outlet</li>
              <li>Prizes between $1,500 and $10,000 can be claimed at selected lottery outlets or mailed to us</li>
              <li>Major prizes over $10,000 must be claimed directly from our head office</li>
            </ul>
          </li>
        </ul>
        <p className="mt-2">
          For all major prizes, you'll need to provide the winning ticket and identification. Prize claim periods are
          typically 6-12 months from the draw date.
        </p>
      </div>
    ),
    category: "Prizes",
  },
  {
    question: "Can I play Oz Lotto online?",
    answer: (
      <div>
        <p>
          Yes! You can play Oz Lotto online through our secure website or mobile app. Online play offers several
          advantages:
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Never lose your ticket - it's stored digitally in your account</li>
          <li>Automatic prize notifications via email</li>
          <li>Prizes up to $1,000 are automatically credited to your account</li>
          <li>Set up recurring entries so you never miss a draw</li>
          <li>Access to exclusive online promotions</li>
          <li>Check results and manage your entries anytime, anywhere</li>
        </ul>
        <p className="mt-2">
          To play online, you need to be 18 or over and have an Australian address and bank account. Registration is
          quick and secure.
        </p>
      </div>
    ),
    category: "Online Play",
  },
  {
    question: "What is the biggest Oz Lotto jackpot ever won?",
    answer: (
      <div>
        <p>
          The largest Oz Lotto jackpot ever won was $111 million in November 2012, which was shared between two winning
          tickets. Other notable jackpots include:
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>$90 million - Won by a single ticket holder in 2009</li>
          <li>$80 million - Multiple occasions with various winners</li>
          <li>$70 million - Several times throughout Oz Lotto's history</li>
        </ul>
        <p className="mt-2">
          These massive jackpots occur when the Division 1 prize isn't won for several weeks, allowing it to jackpot and
          grow. The excitement builds across Australia as the jackpot climbs higher each week!
        </p>
      </div>
    ),
    category: "Jackpots",
  },
  {
    question: "Are Oz Lotto winnings taxed in Australia?",
    answer: (
      <div>
        <p>
          <strong>Good news for Oz Lotto winners:</strong> Lottery winnings are not taxed in Australia! This applies to
          all prizes from Oz Lotto and other officially sanctioned lotteries.
        </p>
        <p className="mt-2">However, there are some financial considerations to be aware of:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>
            <strong>Interest earned:</strong> While the winnings themselves aren't taxed, any interest earned from
            investing your winnings is considered income and will be taxed accordingly
          </li>
          <li>
            <strong>Gifting:</strong> If you give large amounts of your winnings to family or friends, they may be
            subject to gift taxes depending on the circumstances
          </li>
          <li>
            <strong>Business activities:</strong> If you use your winnings to start a business, any income from that
            business will be taxed normally
          </li>
        </ul>
        <p className="mt-2">
          It's always recommended to consult with a financial advisor after winning a significant Oz Lotto prize to
          ensure you manage your windfall effectively.
        </p>
      </div>
    ),
    category: "Prizes",
  },
  {
    question: "Can I play Oz Lotto if I'm under 18?",
    answer: (
      <p>
        No, you must be 18 years or older to play Oz Lotto or any other lottery game in Australia. This is a legal
        requirement across all Australian states and territories. Age verification is required when creating an online
        account or purchasing tickets in-store. If you're under 18, you'll need to wait until your 18th birthday to
        participate in lottery games.
      </p>
    ),
    category: "Eligibility",
  },
  {
    question: "What are supplementary numbers in Oz Lotto?",
    answer: (
      <div>
        <p>
          In each Oz Lotto draw, 7 winning numbers are drawn first, followed by 2 supplementary numbers. The
          supplementary numbers are used to determine winners in Divisions 2, 4, and 7:
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>
            <strong>Division 2:</strong> Match 6 winning numbers + 1 supplementary number
          </li>
          <li>
            <strong>Division 4:</strong> Match 5 winning numbers + 1 supplementary number
          </li>
          <li>
            <strong>Division 7:</strong> Match 3 winning numbers + 1 supplementary number
          </li>
        </ul>
        <p className="mt-2">
          The supplementary numbers give you additional chances to win prizes even if you don't match all the main
          winning numbers. They're drawn from the same pool of numbers (1-45) but cannot be the same as the 7 main
          winning numbers.
        </p>
      </div>
    ),
    category: "How to Play",
  },
]

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({})
  const [activeCategory, setActiveCategory] = useState<string>("All")

  const categories = ["All", ...Array.from(new Set(faqs.map((faq) => faq.category))).sort()]

  const toggleItem = (index: number) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  const filteredFaqs = faqs.filter((faq) => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = activeCategory === "All" || faq.category === activeCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-orange-50 py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fadeInLeft">
          <div className="flex items-center gap-2 mb-6">
            <Link
              href="/"
              className="text-blue-600 hover:text-blue-800 flex items-center gap-1 hover-lift transition-all duration-300"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>
          </div>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fadeIn">
            <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-2 text-center">Oz Lotto FAQ</h1>
            <p className="text-gray-600 text-center mb-8">
              Everything you need to know about Australia's Tuesday night lottery
            </p>
          </AnimatedSection>

          {/* Search and Filter */}
          <AnimatedSection animation="fadeInUp" delay={200}>
            <div className="mb-8 space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search questions..."
                  className="pl-10 pr-4 py-2 hover-glow transition-all duration-300"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <AnimatedSection key={category} animation="scaleIn" delay={index * 50}>
                    <Button
                      variant={activeCategory === category ? "default" : "outline"}
                      size="sm"
                      onClick={() => setActiveCategory(category)}
                      className={
                        activeCategory === category
                          ? "bg-blue-600 hover:bg-blue-700 hover-lift"
                          : "text-blue-600 border-blue-200 hover:bg-blue-50 hover-lift"
                      }
                    >
                      {category}
                    </Button>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* FAQ Items */}
          <div className="space-y-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => (
                <AnimatedSection key={index} animation="fadeInUp" delay={index * 50}>
                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover-lift transition-all duration-300">
                    <button
                      className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                      onClick={() => toggleItem(index)}
                    >
                      <h3 className="font-medium text-blue-900">{faq.question}</h3>
                      <div className="transition-transform duration-300">
                        {openItems[index] ? (
                          <ChevronUp className="h-5 w-5 text-blue-600 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-blue-600 flex-shrink-0" />
                        )}
                      </div>
                    </button>
                    <div
                      className={`transition-all duration-300 ease-in-out ${openItems[index] ? "max-h-screen opacity-100" : "max-h-0 opacity-0"} overflow-hidden`}
                    >
                      <div className="px-6 py-4 border-t border-gray-100 text-gray-700">
                        {faq.answer}
                        <div className="mt-3 text-xs text-gray-500 flex items-center">
                          <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full hover-scale transition-transform duration-200">
                            {faq.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))
            ) : (
              <AnimatedSection animation="fadeIn">
                <div className="text-center py-10">
                  <p className="text-gray-500">No results found. Try a different search term or category.</p>
                </div>
              </AnimatedSection>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
