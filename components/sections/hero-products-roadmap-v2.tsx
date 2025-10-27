"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Phone, MessageCircle, Workflow } from "lucide-react"
import { SITE_CONFIG } from "@/lib/constants"
import { useTheme } from "next-themes"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { TypingAnimation } from "@/components/ui/typing-animation"
import type { CarouselApi } from "@/components/ui/carousel"

const PRODUCTS = [
  {
    id: "inbound",
    title: "Inbound Call Handling",
    image: "/images/3.png",
    icon: Phone,
    features: [
      "24/7 Availability",
      "Instant Response",
      "Lead Qualification",
      "Appointment Booking",
    ],
    steps: [
      { title: "Discovery", detail: "15-min call to understand your business, call volume, and what callers typically need" },
      { title: "Training", detail: "AI learns your services, pricing, availability, and how to handle common questions" },
      { title: "Integration", detail: "Connect with your phone system, calendar, and CRM for seamless operations" },
      { title: "Testing", detail: "Test with real scenarios - service requests, quotes, bookings, and FAQs" },
      { title: "Go Live", detail: "Launch with 24/7 call handling, instant lead capture, and guaranteed response time" },
    ],
  },
  {
    id: "outbound",
    title: "Outbound Calling",
    image: "/images/4.png",
    icon: MessageCircle,
    features: [
      "Follow-up Automation",
      "Lead Nurturing",
      "Appointment Setting",
      "Natural Conversations",
    ],
    steps: [
      { title: "Strategy", detail: "Define your outbound goals - follow-ups, appointment setting, or lead nurturing" },
      { title: "Scripting", detail: "AI learns your messaging, value proposition, and objection handling techniques" },
      { title: "List Setup", detail: "Import your contact lists and define calling schedules and priority rules" },
      { title: "Testing", detail: "Run test campaigns to refine messaging, timing, and conversion optimization" },
      { title: "Deploy", detail: "Launch automated outbound campaigns with real-time analytics and performance tracking" },
    ],
  },
  {
    id: "support",
    title: "Customer Support",
    image: "/images/1.png",
    icon: Workflow,
    features: [
      "Instant Answers",
      "Issue Resolution",
      "Smart Routing",
      "Reduces Wait Times",
    ],
    steps: [
      { title: "Audit", detail: "Review your common support requests, FAQs, and escalation procedures" },
      { title: "Knowledge Base", detail: "AI learns your products, policies, troubleshooting steps, and support protocols" },
      { title: "Integration", detail: "Connect with helpdesk software, ticketing systems, and knowledge bases" },
      { title: "Testing", detail: "Test support scenarios, escalation paths, and customer satisfaction outcomes" },
      { title: "Launch", detail: "Deploy 24/7 support with instant answers, smart routing, and satisfaction tracking" },
    ],
  },
]

export function HeroProductsRoadmapV2() {
  const [selectedProduct, setSelectedProduct] = useState("inbound")
  const [selectedStep, setSelectedStep] = useState<number>(0)
  const { theme } = useTheme()
  const roadmapRef = useRef<HTMLDivElement>(null)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null)

  const typingPhrases = [
    "Missed Calls",
    "After-Hours Silence",
    "Weekend Downtime",
    "Lost Leads",
    "Busy Phone Lines",
    "Holiday Closures",
    "Voicemail Hell",
    "Peak Hour Chaos",
  ]
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)

  const activeProduct = PRODUCTS.find((p) => p.id === selectedProduct) || PRODUCTS[0]

  // Cycle through typing phrases
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prev) => (prev + 1) % typingPhrases.length)
    }, 4000) // Change phrase every 4 seconds

    return () => clearInterval(interval)
  }, [typingPhrases.length])

  // Auto-scroll carousel every 3 seconds
  useEffect(() => {
    if (!carouselApi) return

    const interval = setInterval(() => {
      carouselApi.scrollNext()
    }, 3000)

    return () => clearInterval(interval)
  }, [carouselApi])

  // Scroll-based step activation
  useEffect(() => {
    const handleScroll = () => {
      if (!roadmapRef.current) return

      const scrollPosition = window.scrollY + window.innerHeight / 2

      stepRefs.current.forEach((stepEl, index) => {
        if (!stepEl) return
        const { top, bottom } = stepEl.getBoundingClientRect()
        const absoluteTop = top + window.scrollY
        const absoluteBottom = bottom + window.scrollY

        if (scrollPosition >= absoluteTop && scrollPosition <= absoluteBottom) {
          setSelectedStep(index)
        }
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleProductClick = (productId: string) => {
    setSelectedProduct(productId)
    setSelectedStep(0) // Reset to first step when changing products
    setTimeout(() => {
      if (roadmapRef.current) {
        const yOffset = -120 // Offset for navbar
        const y = roadmapRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset
        window.scrollTo({ top: y, behavior: "smooth" })
      }
    }, 100)
  }

  const openCalendly = () => {
    if (typeof window !== "undefined") {
      const calendlyWindow = window as unknown as Window & {
        Calendly?: {
          initPopupWidget: (config: {
            url: string
            pageSettings: {
              backgroundColor: string
              primaryColor: string
              textColor: string
            }
          }) => void
        }
      }

      if (calendlyWindow.Calendly) {
        const isDark = theme === "dark"
        calendlyWindow.Calendly.initPopupWidget({
          url: SITE_CONFIG.calendlyUrl,
          pageSettings: {
            backgroundColor: isDark ? "0a0a0a" : "ffffff",
            primaryColor: isDark ? "ffffff" : "111827",
            textColor: isDark ? "ffffff" : "000000",
          },
        })
      }
    }
  }

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <section className="relative min-h-screen bg-transparent overflow-hidden">
      {/* Hero Content */}
      <div className="relative">
        {/* Headline - Container */}
        <div className="container mx-auto px-6 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-5xl mb-12 md:mb-16"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black dark:text-white mb-6 md:mb-8 leading-[1.15] md:leading-[1.1]">
              Stop Losing Money on{" "}
              <span className="inline-block min-w-[300px] md:min-w-[500px] min-h-[1.2em]">
                <TypingAnimation
                  key={currentPhraseIndex}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 dark:from-purple-400 dark:via-pink-400 dark:to-orange-400 bg-clip-text text-transparent"
                  words={[typingPhrases[currentPhraseIndex]]}
                  duration={100}
                  startOnView={false}
                  delay={0}
                />
              </span>
              <span className="block text-2xl md:text-3xl lg:text-4xl font-light text-gray-600 dark:text-neutral-400 tracking-wide mt-4">
                24/7 AI Phone Agent
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-neutral-400 mb-8 max-w-3xl">
              Capture every lead with an AI phone agent that answers calls, qualifies prospects, and books appointments—even when you&apos;re busy, closed, or on the job.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                onClick={openCalendly}
                className="px-8 md:px-10 py-4 md:py-4.5 bg-black dark:bg-white text-white dark:text-black rounded-full font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all text-base md:text-lg shadow-lg hover:shadow-xl"
              >
                Start 2-Week Risk-Free Trial
              </button>
              <div className="text-gray-600 dark:text-neutral-400">
                <p className="text-sm md:text-base">Live in 7 days</p>
                <p className="text-sm md:text-base font-semibold text-black dark:text-white">
                  Zero effort required
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Product Cards - Mobile: Carousel, Desktop: Grid */}
        <div id="products" className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-32 scroll-mt-20">
          {/* Mobile: Carousel with Title */}
          <div className="md:hidden px-6 mb-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-2">
                Our Solutions
              </h2>
              <p className="text-sm text-gray-600 dark:text-neutral-400 flex items-center gap-2">
                <span>Swipe to explore</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </p>
            </div>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              setApi={setCarouselApi}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {PRODUCTS.map((product, index) => {
                  return (
                    <CarouselItem key={product.id} className="pl-4 basis-[85%]">
                      <motion.button
                        onClick={() => handleProductClick(product.id)}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative w-full h-[450px] overflow-hidden cursor-pointer border-0 rounded-2xl"
                      >
                        {/* Background Image */}
                        <div className="absolute inset-0">
                          <Image
                            src={product.image}
                            alt={product.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent dark:from-black/80 dark:via-black/40 dark:to-transparent group-hover:from-black/80 group-hover:via-black/45 transition-all duration-500" />
                        </div>

                        {/* Content */}
                        <div className="absolute inset-0 p-6 flex flex-col justify-end">
                          <h3 className="text-2xl font-bold mb-3 text-white">{product.title}</h3>
                          <div className="space-y-2 mb-4">
                            {product.features.map((feature, i) => (
                              <div key={i} className="flex items-center gap-2">
                                <div className="w-1 h-1 rounded-full bg-white/60" />
                                <span className="text-sm text-white/90">{feature}</span>
                              </div>
                            ))}
                          </div>
                          <div className="inline-flex items-center gap-2 text-white text-sm font-medium">
                            <span>View Timeline</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </motion.button>
                    </CarouselItem>
                  )
                })}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>

          {/* Desktop: Grid */}
          <div className="hidden md:grid md:grid-cols-12 gap-4 max-w-7xl mx-auto px-4">
            {PRODUCTS.map((product, index) => {
              // Define different layouts for each card
              const cardStyles = [
                { span: "md:col-span-5", height: "h-[500px]" },
                { span: "md:col-span-4", height: "h-[400px]" },
                { span: "md:col-span-3", height: "h-[500px]" },
              ]

              return (
                <motion.button
                  key={product.id}
                  onClick={() => handleProductClick(product.id)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`group relative ${cardStyles[index].span} ${cardStyles[index].height} overflow-hidden cursor-pointer border-0 rounded-3xl`}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
                    {/* Unified gradient - works for both modes */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent dark:from-black/80 dark:via-black/40 dark:to-transparent group-hover:from-black/80 group-hover:via-black/45 transition-all duration-500" />
                  </div>

                  {/* Content - Always Visible */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">{product.title}</h3>
                    <div className="space-y-2 mb-4">
                      {product.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2"
                        >
                          <span className="text-white/70">↘</span>
                          <span className="text-sm font-medium text-white/90">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="text-sm font-semibold text-white/80">
                      Click to see timeline
                    </div>
                  </div>
                </motion.button>
              )
            })}
          </div>
        </div>

        {/* Roadmap */}
        <div ref={roadmapRef} className="scroll-mt-8 container mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedProduct}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl mx-auto"
            >
              {/* Header */}
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-bold text-black dark:text-white mb-4">
                  Here&apos;s What We&apos;re Gonna Do
                </h2>
                <p className="text-lg text-gray-600 dark:text-neutral-400">
                  Your path from consultation to launch
                </p>
              </div>

              {/* Roadmap - Vertical Timeline */}
              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gray-300/50 dark:bg-neutral-700/50" />
                <motion.div
                  className="absolute left-6 md:left-8 top-0 w-px bg-black dark:bg-white"
                  initial={{ height: "0%" }}
                  animate={{ height: "100%" }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />

                {/* Steps */}
                <div className="space-y-6 md:space-y-8">
                  {activeProduct.steps.map((step, index) => {
                    const isActive = selectedStep === index
                    return (
                      <motion.div
                        key={index}
                        ref={(el) => { stepRefs.current[index] = el; return undefined }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
                        className="relative pl-16 md:pl-20"
                      >
                        {/* Circle Indicator */}
                        <motion.button
                          onClick={() => setSelectedStep(index)}
                          animate={{
                            scale: isActive ? 1.1 : 1,
                          }}
                          transition={{ duration: 0.3 }}
                          className={`
                            absolute left-0 top-0 w-12 h-12 md:w-16 md:h-16 rounded-full
                            flex items-center justify-center
                            transition-all duration-300 cursor-pointer
                            ${isActive
                              ? 'bg-black dark:bg-white shadow-xl'
                              : 'bg-white/60 dark:bg-white/10 backdrop-blur-sm border-2 border-gray-300 dark:border-white/30 hover:bg-white/80 dark:hover:bg-white/15'
                            }
                          `}
                        >
                          <span className={`text-xl md:text-2xl font-bold transition-colors ${
                            isActive ? "text-white dark:text-black" : "text-black dark:text-white"
                          }`}>
                            {index + 1}
                          </span>
                        </motion.button>

                        {/* Content Card */}
                        <motion.button
                          onClick={() => setSelectedStep(index)}
                          className={`
                            w-full text-left rounded-2xl p-5 md:p-6
                            transition-all duration-300 cursor-pointer
                            ${isActive
                              ? 'bg-white/60 dark:bg-white/10 backdrop-blur-md border-2 border-black dark:border-white shadow-lg'
                              : 'bg-white/30 dark:bg-white/5 backdrop-blur-sm border border-gray-300/40 dark:border-white/20 hover:bg-white/50 dark:hover:bg-white/8'
                            }
                          `}
                        >
                          <h3 className={`text-lg md:text-xl font-bold mb-2 transition-colors ${
                            isActive ? "text-black dark:text-white" : "text-gray-700 dark:text-neutral-400"
                          }`}>
                            {step.title}
                          </h3>

                          {/* Full description text */}
                          <p className={`text-xs md:text-sm transition-colors ${
                            isActive ? "text-gray-700 dark:text-neutral-300" : "text-gray-600 dark:text-neutral-500"
                          }`}>
                            {step.detail}
                          </p>
                        </motion.button>
                      </motion.div>
                    )
                  })}
                </div>
              </div>

              {/* CTA */}
              <motion.div
                className="text-center mt-16 md:mt-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                {/* <button
                  onClick={openCalendly}
                  className="px-12 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full text-base font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all shadow-lg"
                >
                  Start Your Journey
                </button> */}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
