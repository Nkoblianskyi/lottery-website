"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Trophy, Star, Users, Gift, Shield, Smartphone, CreditCard, Bell } from "lucide-react"
import AnimatedSection from "./components/AnimatedSection"

export default function HomePage() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [currentDraw, setCurrentDraw] = useState(1234)
  const [nextDrawDate, setNextDrawDate] = useState("")

  useEffect(() => {
    const getNextTuesday = () => {
      const now = new Date()
      const nextTuesday = new Date()
      const daysUntilTuesday = (2 - now.getDay() + 7) % 7 || 7
      nextTuesday.setDate(now.getDate() + daysUntilTuesday)
      nextTuesday.setHours(19, 30, 0, 0) // 7:30 PM draw time
      return nextTuesday
    }

    const updateCountdown = () => {
      const next = getNextTuesday()
      const now = new Date()
      const difference = next.getTime() - now.getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
        setNextDrawDate(
          next.toLocaleDateString("en-AU", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
        )
      }
    }

    updateCountdown()
    const timer = setInterval(updateCountdown, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-orange-50">
      {/* Hero Section */}
      <section
        id="hero"
        className="py-10 sm:py-16 bg-gradient-to-r from-blue-900 via-blue-800 to-orange-600 text-white overflow-hidden"
      >
        <div className="container mx-auto px-3 sm:px-4 text-center">
          <AnimatedSection  animation="fadeInUp">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6">
              Australia's Premier Lottery Experience
            </h2>
          </AnimatedSection>

          <AnimatedSection animation="fadeInUp" delay={200}>
            <p className="text-base sm:text-xl md:text-2xl mb-4 max-w-4xl mx-auto leading-relaxed">
              Since 1994, we've been Australia's trusted lottery operator, bringing dreams to life across the continent.
              As the official operator of Oz Lotto, we've created millions of winners and continue to offer the most
              exciting lottery experiences in Australia. Join thousands of Aussies who trust us with their biggest
              dreams, where every ticket holds the potential to change your life forever.
            </p>
          </AnimatedSection>

          {/* Countdown Timer */}
          <AnimatedSection animation="scaleIn" delay={400}>
            <Card className="max-w-2xl mx-auto mt-8 sm:mt-12 bg-white/10 backdrop-blur-sm border-white/20 hover-lift">
              <CardHeader className="text-center pb-2">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-orange-500/20 rounded-full mb-3 sm:mb-4 mx-auto animate-pulse-slow">
                  <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-orange-300" />
                </div>
                <CardTitle className="text-2xl sm:text-3xl font-bold text-white mb-2">Next Oz Lotto Draw</CardTitle>
                <div className="bg-gradient-to-r from-orange-500 to-yellow-400 text-black px-4 sm:px-6 py-1 sm:py-2 rounded-full inline-block font-bold text-base sm:text-lg animate-shimmer">
                  Draw #{currentDraw}
                </div>
                <CardDescription className="text-white/90 text-base sm:text-lg mt-2 sm:mt-3 font-medium">
                  {nextDrawDate} • 7:30 PM AEST
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-4 gap-2 sm:gap-4 mb-6 sm:mb-8">
                  {[
                    { value: timeLeft.days, label: "Days" },
                    { value: timeLeft.hours, label: "Hours" },
                    { value: timeLeft.minutes, label: "Minutes" },
                    { value: timeLeft.seconds, label: "Seconds" },
                  ].map((item, index) => (
                    <div key={item.label} className={`text-center animate-fadeInUp stagger-${index + 1}`}>
                      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-300 transition-all duration-300 hover:scale-110">
                        {item.value}
                      </div>
                      <div className="text-xs sm:text-sm text-white/80">{item.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 text-base sm:text-lg hover-lift hover-glow transition-all duration-300"
                  >
                    Buy Ticket Now
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-black hover:bg-white hover:text-blue-900 font-bold py-3 sm:py-4 px-6 sm:px-8 text-base sm:text-lg hover-lift transition-all duration-300"
                  >
                    Contact Us
                  </Button>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation="fadeInUp">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-blue-900">
                Why Choose AussieBigWins?
              </h3>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[
                {
                  icon: Shield,
                  title: "Secure & Licensed",
                  description:
                    "Fully licensed and regulated by Australian authorities. Your personal information and transactions are protected with bank-level security.",
                  color: "blue",
                },
                {
                  icon: Smartphone,
                  title: "Play Anywhere",
                  description:
                    "Buy tickets online or through our mobile app. Check results, manage your account, and never miss a draw from anywhere in Australia.",
                  color: "orange",
                },
                {
                  icon: CreditCard,
                  title: "Instant Payouts",
                  description:
                    "Winnings up to $1,000 are automatically credited to your account. Larger prizes are processed quickly and securely.",
                  color: "green",
                },
                {
                  icon: Bell,
                  title: "Never Miss Out",
                  description:
                    "Get notified about upcoming draws, results, and special promotions. Set up auto-play to never miss your lucky numbers.",
                  color: "purple",
                },
              ].map((feature, index) => (
                <AnimatedSection key={feature.title} animation="fadeInUp" delay={index * 100}>
                  <div className="text-center hover-lift">
                    <div
                      className={`w-12 h-12 sm:w-16 sm:h-16 bg-${feature.color}-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 hover-scale`}
                    >
                      <feature.icon className={`h-6 w-6 sm:h-8 sm:w-8 text-${feature.color}-600`} />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-blue-900">{feature.title}</h4>
                    <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection animation="scaleIn" delay={600}>
              <div className="mt-10 sm:mt-16 bg-gradient-to-r from-blue-50 to-orange-50 rounded-xl sm:rounded-2xl p-4 sm:p-8 hover-lift">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
                  <div>
                    <h4 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-blue-900">
                      Join Over 5 Million Players
                    </h4>
                    <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
                      Since 1994, we've paid out over $2 billion in prizes to Australian lottery players. From small
                      wins to life-changing jackpots, we're here to make your dreams come true.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center hover-scale">
                        <div className="text-xl sm:text-2xl font-bold text-orange-600">$2B+</div>
                        <div className="text-xs sm:text-sm text-gray-600">Total Prizes Paid</div>
                      </div>
                      <div className="text-center hover-scale">
                        <div className="text-xl sm:text-2xl font-bold text-orange-600">5M+</div>
                        <div className="text-xs sm:text-sm text-gray-600">Happy Players</div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg hover-lift">
                      <h5 className="text-base sm:text-lg font-bold mb-2 text-blue-900">This Week's Jackpots</h5>
                      <div className="space-y-2 sm:space-y-3">
                        {[
                          { name: "Oz Lotto", amount: "$8,000,000" },
                          { name: "Powerball", amount: "$12,000,000" },
                          { name: "Saturday Lotto", amount: "$4,000,000" },
                        ].map((jackpot, index) => (
                          <div
                            key={jackpot.name}
                            className={`flex justify-between items-center animate-fadeInLeft stagger-${index + 1}`}
                          >
                            <span className="text-sm sm:text-base text-gray-600">{jackpot.name}</span>
                            <span className="font-bold text-sm sm:text-base text-orange-600 hover-scale">
                              {jackpot.amount}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Lottery Types Section */}
      <AnimatedSection animation="fadeInUp">
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h3 className="text-4xl font-bold text-center mb-12 text-blue-900">Our Lottery Games</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Star,
                  title: "Powerball",
                  description:
                    "Australia's biggest jackpots with draws every Thursday. Pick 7 numbers from 1-35 plus a Powerball from 1-20.",
                  color: "blue",
                },
                {
                  icon: Trophy,
                  title: "Saturday Lotto",
                  description:
                    "The classic Australian lottery since 1972. Pick 6 numbers from 1-45 with draws every Saturday night.",
                  color: "orange",
                },
                {
                  icon: Users,
                  title: "Monday Lotto",
                  description: "Start your week with a chance to win! Pick 6 numbers from 1-45 every Monday.",
                  color: "green",
                },
              ].map((lottery, index) => (
                <AnimatedSection key={lottery.title} animation="fadeInUp" delay={index * 150}>
                  <Card
                    className={`border-${lottery.color}-200 hover:shadow-lg transition-all duration-300 hover-lift hover-glow`}
                  >
                    <CardHeader>
                      <div
                        className={`w-12 h-12 bg-${lottery.color}-100 rounded-full flex items-center justify-center mb-4 hover-scale`}
                      >
                        <lottery.icon className={`h-6 w-6 text-${lottery.color}-600`} />
                      </div>
                      <CardTitle className="text-blue-900">{lottery.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{lottery.description}</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Oz Lotto Section */}
      <AnimatedSection animation="fadeInUp">
        <section className="py-16 bg-gradient-to-r from-blue-50 to-orange-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-4xl font-bold mb-8 text-blue-900">About Oz Lotto</h3>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <AnimatedSection animation="fadeInLeft" delay={200}>
                  <div className="text-left">
                    <h4 className="text-2xl font-bold mb-4 text-orange-600">Australia's Tuesday Night Tradition</h4>
                    <p className="text-gray-700 mb-4">
                      Oz Lotto has been creating millionaires every Tuesday night since 1994. As Australia's first
                      national lottery game, it offers some of the biggest jackpots in the country with a minimum
                      Division 1 prize of $2 million.
                    </p>
                    <p className="text-gray-700 mb-4">
                      To play Oz Lotto, simply pick 7 numbers from 1 to 45. Match all 7 numbers to win Division 1, or
                      match fewer numbers to win smaller prizes across 7 different divisions.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Draws every Tuesday at 7:30 PM AEST</li>
                      <li>7 prize divisions with great odds</li>
                      <li>Minimum jackpot of $2 million</li>
                      <li>Available across all Australian states</li>
                    </ul>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="fadeInRight" delay={400}>
                  <Card className="bg-white border-orange-200 hover-lift">
                    <CardHeader>
                      <CardTitle className="text-orange-600">How to Play</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          "Pick 7 numbers from 1-45",
                          "Choose your entry type",
                          "Wait for Tuesday's draw",
                          "Check your numbers!",
                        ].map((step, index) => (
                          <div key={step} className={`flex items-center gap-3 animate-fadeInUp stagger-${index + 1}`}>
                            <div
                              className={`w-8 h-8 ${index === 3 ? "bg-orange-600" : "bg-blue-600"} text-white rounded-full flex items-center justify-center font-bold hover-scale`}
                            >
                              {index + 1}
                            </div>
                            <span>{step}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Winners Section */}
      <AnimatedSection animation="fadeInUp">
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h3 className="text-4xl font-bold text-center mb-12 text-blue-900">Recent Winners</h3>
            <div className="max-w-4xl mx-auto">
              <Card className="bg-gradient-to-r from-orange-100 to-blue-100 border-orange-200 hover-lift">
                <CardHeader>
                  <CardTitle className="text-2xl text-center text-blue-900 flex items-center justify-center gap-2">
                    <Gift className="h-8 w-8 text-orange-600 animate-bounce-slow" />
                    Congratulations to Our Latest Winner!
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-lg mb-4 text-gray-700">
                    <strong>Melbourne Winner Takes Home $15 Million!</strong>
                  </p>
                  <p className="text-gray-600 mb-6">
                    A lucky Melbourne resident became our latest multi-millionaire after matching all 7 numbers in last
                    Tuesday's Oz Lotto draw. The winner, who wishes to remain anonymous, purchased their winning ticket
                    online and discovered their life-changing win the following morning.
                  </p>
                  <div className="bg-white/80 rounded-lg p-6 inline-block hover-scale">
                    <div className="text-3xl font-bold text-orange-600 mb-2">$15,000,000</div>
                    <div className="text-sm text-gray-600">Won on Oz Lotto Draw #1233</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* The Lott Section */}
      <AnimatedSection animation="fadeInUp">
        <section className="py-16 bg-gradient-to-r from-blue-50 to-orange-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-4xl font-bold mb-8 text-blue-900">About The Lott</h3>
              <p className="text-lg text-gray-700 mb-8">
                The Lott is the home of Australia's official lotteries, bringing together Saturday Lotto, Oz Lotto,
                Powerball and other lottery games under one trusted brand. As Australia's largest lottery operator,
                we're committed to creating winners while supporting communities across the nation.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { value: "25+", label: "Years of Experience" },
                  { value: "$2B+", label: "Prizes Awarded" },
                  { value: "5M+", label: "Happy Customers" },
                ].map((stat, index) => (
                  <AnimatedSection key={stat.label} animation="scaleIn" delay={index * 100}>
                    <div className="text-center hover-scale">
                      <div className="text-3xl font-bold text-orange-600 mb-2">{stat.value}</div>
                      <div className="text-gray-600">{stat.label}</div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  )
}
