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
    category: "Oz Lotto",
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
    category: "Oz Lotto",
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
    category: "Oz Lotto",
  },
  {
    question: "What is The Lott?",
    answer: (
      <p>
        The Lott is Australia's official lotteries brand operated by Tattersall's Sweeps Pty Ltd. It's the unified brand
        that brings together all of Australia's official lottery games, including Oz Lotto, Powerball, Saturday Lotto,
        Monday & Wednesday Lotto, Set for Life, Lucky Lotteries, and Instant Scratch-Its. The Lott operates in all
        Australian states and territories except Western Australia (where Lotterywest operates). It's the only
        government-licensed lottery operator in these jurisdictions, ensuring all games are conducted fairly and
        securely.
      </p>
    ),
    category: "The Lott",
  },
  {
    question: "How are lottery proceeds distributed in Australia?",
    answer: (
      <div>
        <p>
          Lottery proceeds in Australia are distributed according to state regulations, but generally follow this
          pattern:
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>
            <strong>Prize money:</strong> Approximately 60% of ticket sales goes back to players as prize money
          </li>
          <li>
            <strong>State government:</strong> Around 25-35% goes to state governments for community initiatives,
            including:
            <ul className="list-circle pl-5 mt-1 space-y-1">
              <li>Health services and hospitals</li>
              <li>Sports and recreation programs</li>
              <li>Arts and cultural activities</li>
              <li>Community welfare programs</li>
            </ul>
          </li>
          <li>
            <strong>Retailers:</strong> About 9% goes to the retailers who sell lottery products
          </li>
          <li>
            <strong>Operating costs:</strong> The remaining funds cover the costs of running the lottery
          </li>
        </ul>
        <p className="mt-2">
          This means that even if you don't win, your lottery purchase contributes to important community services and
          infrastructure.
        </p>
      </div>
    ),
    category: "General",
  },
  {
    question: "What is Powerball and how is it different from Oz Lotto?",
    answer: (
      <div>
        <p>Powerball is another popular Australian lottery game with some key differences from Oz Lotto:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>
            <strong>Draw structure:</strong> In Powerball, you select 7 main numbers from 1-35 and 1 Powerball number
            from 1-20. In Oz Lotto, you select 7 numbers from 1-45 with no separate Powerball.
          </li>
          <li>
            <strong>Draw day:</strong> Powerball draws occur every Thursday, while Oz Lotto draws are on Tuesdays.
          </li>
          <li>
            <strong>Jackpot sizes:</strong> Powerball typically offers larger jackpots, often reaching $100 million or
            more.
          </li>
          <li>
            <strong>Winning odds:</strong> The odds of winning Division 1 in Powerball are 1 in 134,490,400, which is
            more challenging than Oz Lotto's 1 in 45,379,620.
          </li>
        </ul>
        <p className="mt-2">
          Both games offer multi-million dollar jackpots and multiple prize divisions, but Powerball's separate
          Powerball number creates a different gameplay experience and typically larger jackpots.
        </p>
      </div>
    ),
    category: "Other Lotteries",
  },
  {
    question: "How do I claim a lottery prize?",
    answer: (
      <div>
        <p>The process for claiming lottery prizes depends on the prize amount:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>
            <strong>Online purchases:</strong>
            <ul className="list-circle pl-5 mt-1 space-y-1">
              <li>Prizes up to $1,000 are automatically paid into your online account</li>
              <li>
                Prizes between $1,000 and $10,000 can be transferred to your nominated bank account through your online
                account
              </li>
              <li>Prizes over $10,000 require you to contact The Lott customer service for claiming instructions</li>
            </ul>
          </li>
          <li>
            <strong>In-store purchases:</strong>
            <ul className="list-circle pl-5 mt-1 space-y-1">
              <li>Prizes up to $1,500 can be claimed at any lottery outlet</li>
              <li>
                Prizes between $1,500 and $10,000 can be claimed at selected lottery outlets or mailed to The Lott
              </li>
              <li>Major prizes over $10,000 must be claimed directly from The Lott's head office in your state</li>
            </ul>
          </li>
        </ul>
        <p className="mt-2">
          For all major prizes, you'll need to provide the winning ticket and identification. Prize claim periods vary
          by state but are typically 6-12 months from the draw date.
        </p>
      </div>
    ),
    category: "General",
  },
  {
    question: "What is Saturday Lotto?",
    answer: (
      <div>
        <p>
          Saturday Lotto (also known as TattsLotto, Gold Lotto, or X Lotto depending on your state) is Australia's
          original lottery game, running since 1972. Here's how it works:
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Players select 6 numbers from 1 to 45</li>
          <li>In each draw, 6 winning numbers and 2 supplementary numbers are drawn</li>
          <li>Draws take place every Saturday night</li>
          <li>
            The Division 1 prize pool is typically $4 million, with special Superdraws offering jackpots of $20 million
            or more several times a year
          </li>
          <li>There are 6 prize divisions, with Division 1 requiring all 6 winning numbers</li>
        </ul>
        <p className="mt-2">
          Saturday Lotto offers better odds of winning Division 1 (1 in 8,145,060) compared to Oz Lotto or Powerball,
          making it a popular choice for regular players.
        </p>
      </div>
    ),
    category: "Other Lotteries",
  },
  {
    question: "Is online lottery play legal in Australia?",
    answer: (
      <div>
        <p>
          Yes, online lottery play is completely legal in Australia when done through authorized operators. The Lott
          (Tattersall's) is the official government-licensed lottery operator in all Australian states and territories
          except Western Australia, where Lotterywest is the official operator.
        </p>
        <p className="mt-2">Playing through these official channels ensures that:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Your personal and financial information is secure</li>
          <li>Games are conducted fairly and with regulatory oversight</li>
          <li>You'll receive any prizes you win</li>
          <li>A portion of proceeds goes to community initiatives</li>
        </ul>
        <p className="mt-2">
          Be cautious of unauthorized overseas lottery websites that target Australians, as these may not be legal or
          secure. Always play through official Australian lottery channels.
        </p>
      </div>
    ),
    category: "General",
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
    category: "Oz Lotto",
  },
  {
    question: "How are lottery winners taxed in Australia?",
    answer: (
      <div>
        <p>
          <strong>Good news for Australian lottery winners:</strong> Lottery winnings are not taxed in Australia! This
          applies to all prizes from officially sanctioned lotteries including Oz Lotto, Powerball, and Saturday Lotto.
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
          It's always recommended to consult with a financial advisor after winning a significant lottery prize to
          ensure you manage your windfall effectively.
        </p>
      </div>
    ),
    category: "General",
  },
  {
    question: "Can I play Australian lotteries from overseas?",
    answer: (
      <div>
        <p>The rules regarding playing Australian lotteries from overseas depend on several factors:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>
            <strong>Online accounts:</strong> To create an online account with The Lott, you generally need to be an
            Australian resident with an Australian address and bank account
          </li>
          <li>
            <strong>Physical tickets:</strong> Non-residents who are physically in Australia can purchase lottery
            tickets from authorized retailers while visiting
          </li>
          <li>
            <strong>Claiming prizes:</strong> You must be in Australia to purchase tickets and claim prizes in person
          </li>
        </ul>
        <p className="mt-2">
          Some third-party lottery services claim to offer Australian lottery tickets to overseas players, but these are
          not officially endorsed by The Lott and may have legal and security implications. If you're overseas and want
          to play Australian lotteries, it's best to have a trusted Australian resident purchase tickets on your behalf.
        </p>
      </div>
    ),
    category: "General",
  },
  {
    question: "What is a Syndicate and how does it work?",
    answer: (
      <div>
        <p>
          A lottery syndicate is a group of players who pool their money to buy more tickets than they could
          individually, increasing their chances of winning while sharing the cost.
        </p>
        <p className="mt-2">Here's how syndicates work:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>
            <strong>Store syndicates:</strong> Many lottery retailers offer pre-packaged syndicate shares you can buy
            into
          </li>
          <li>
            <strong>Private syndicates:</strong> Groups of friends, family, or colleagues can form their own syndicates
          </li>
          <li>
            <strong>Online syndicates:</strong> The Lott's website offers digital syndicate options
          </li>
        </ul>
        <p className="mt-2">
          If a syndicate entry wins, the prize is divided equally among all shares. For example, if a 10-share syndicate
          wins $1 million, each share receives $100,000.
        </p>
        <p className="mt-2">
          Syndicates are a popular way to increase your chances of winning without spending more money, though any
          prizes won will be shared among all participants.
        </p>
      </div>
    ),
    category: "General",
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
            <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-2 text-center">
              Frequently Asked Questions
            </h1>
            <p className="text-gray-600 text-center mb-8">
              Find answers to common questions about Australian lotteries and how they work
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
{/* 
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
              </div> */}
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
