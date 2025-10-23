"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Phone, MessageCircle, Workflow } from "lucide-react"
import { SITE_CONFIG } from "@/lib/constants"
import { useTheme } from "next-themes"

const PRODUCTS = [
  {
    id: "calls",
    title: "AI Call Agents",
    image: "/images/3.png",
    icon: Phone,
    steps: ["Discovery", "Training", "Integration", "Testing", "Launch"],
    benefits: [
      "Answer 100% of calls, 24/7",
      "No hiring, training, or sick days",
      "70% cost reduction vs. human team",
      "Scale instantly during peak hours",
    ],
    guarantee: "100% Money-Back Guarantee",
  },
  {
    id: "chatbots",
    title: "RAG Chatbots",
    image: "/images/4.png",
    icon: MessageCircle,
    steps: ["Audit", "Data Prep", "Build", "Design", "Launch"],
    benefits: [
      "Instant answers from your docs",
      "Handles unlimited conversations",
      "60% reduction in support tickets",
      "Never forgets, always accurate",
    ],
    guarantee: "100% Money-Back Guarantee",
  },
  {
    id: "workflows",
    title: "AI Workflows",
    image: "/images/1.png",
    icon: Workflow,
    steps: ["Mapping", "Design", "Build", "Integration", "Deploy"],
    benefits: [
      "Automate repetitive tasks completely",
      "10+ hours saved per employee/week",
      "Zero human errors",
      "Works while you sleep",
    ],
    guarantee: "100% Money-Back Guarantee",
  },
]

export function HeroProductsRoadmap() {
  const [selectedProduct, setSelectedProduct] = useState("calls")
  const { theme } = useTheme()
  const roadmapRef = useRef<HTMLDivElement>(null)

  const activeProduct = PRODUCTS.find((p) => p.id === selectedProduct) || PRODUCTS[0]

  const handleProductClick = (productId: string) => {
    setSelectedProduct(productId)

    // Scroll to roadmap smoothly after a short delay
    setTimeout(() => {
      roadmapRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      })
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
    <section className="relative min-h-screen bg-white dark:bg-black overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="absolute right-0 top-20 w-[800px] h-[800px]" viewBox="0 0 800 800">
          <circle cx="400" cy="200" r="300" fill="none" stroke="currentColor" strokeWidth="1" className="text-black dark:text-white" />
          <circle cx="600" cy="400" r="200" fill="none" stroke="currentColor" strokeWidth="1" className="text-black dark:text-white" />
        </svg>
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-5xl mx-auto text-center mb-24"
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-black dark:text-white mb-8 leading-[1.1]">
            Get More Customers
            <br />
            Without Hiring More Staff
          </h1>
          <button
            onClick={openCalendly}
            className="mt-6 px-10 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full text-lg font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all shadow-lg"
          >
            Book a Call
          </button>
          <p className="mt-4 text-gray-600 dark:text-neutral-400">Free 15-Minute Consultation</p>
        </motion.div>

        {/* Products - Seamless Cards (No Gaps) */}
        <div className="max-w-7xl mx-auto mb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 rounded-3xl overflow-hidden">
            {PRODUCTS.map((product, index) => {
              return (
                <motion.button
                  key={product.id}
                  onClick={() => handleProductClick(product.id)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group relative h-[500px] overflow-hidden cursor-pointer"
                >
                  {/* Number badge */}
                  <div className="absolute top-8 left-8 z-20 w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white font-semibold text-lg">
                    0{index + 1}
                  </div>

                  {/* Gradient Image - No scale transform */}
                  <div className="absolute inset-0">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/20 group-hover:from-black/98 group-hover:via-black/90 transition-all duration-500" />
                  </div>

                  {/* Default Content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                    <div className="group-hover:opacity-0 transition-opacity duration-300">
                      <h3 className="text-3xl font-bold">{product.title}</h3>
                    </div>
                  </div>

                  {/* Hover Content - Clean White Text */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <h3 className="text-3xl font-bold text-white mb-5">{product.title}</h3>

                    {/* Benefits */}
                    <div className="space-y-3 mb-6">
                      {product.benefits.map((benefit, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{ transitionDelay: `${100 + i * 80}ms` }}
                        >
                          <span className="text-white/80 flex-shrink-0 text-base">•</span>
                          <span className="text-base font-medium text-white/90 leading-snug">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    {/* Guarantee */}
                    <div className="text-sm font-semibold text-white/70 mb-5">
                      {product.guarantee}
                    </div>

                    {/* CTA */}
                    <div className="text-base font-bold text-white">
                      Click to see timeline →
                    </div>
                  </div>
                </motion.button>
              )
            })}
          </div>
        </div>

        {/* Simple Roadmap with Roll-out Animation */}
        <div ref={roadmapRef} className="scroll-mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedProduct}
              initial={{ opacity: 0, y: -30, scaleY: 0.8 }}
              animate={{ opacity: 1, y: 0, scaleY: 1 }}
              exit={{ opacity: 0, y: -20, scaleY: 0.9 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-5xl mx-auto origin-top"
            >
            {/* Header */}
            <div className="flex items-center justify-center gap-3 mb-12">
              <div className="w-12 h-12 rounded-xl bg-black dark:bg-white flex items-center justify-center">
                <activeProduct.icon className="w-6 h-6 text-white dark:text-black" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">
                5-Week Process
              </h2>
            </div>

            {/* Vertical on Mobile, Horizontal on Desktop */}
            <div className="relative mb-12">
              {/* Mobile: Vertical Line */}
              <div className="md:hidden absolute left-10 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-neutral-800" />
              <motion.div
                className="md:hidden absolute left-10 top-0 w-0.5 bg-black dark:bg-white"
                initial={{ height: "0%" }}
                animate={{ height: "100%" }}
                transition={{ duration: 1, ease: "easeOut" }}
              />

              {/* Desktop: Horizontal Line */}
              <div className="hidden md:block absolute top-10 left-0 right-0 h-0.5 bg-gray-200 dark:bg-neutral-800" />
              <motion.div
                className="hidden md:block absolute top-10 left-0 h-0.5 bg-black dark:bg-white"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, ease: "easeOut" }}
              />

              {/* Steps */}
              <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-4">
                {activeProduct.steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                    className="flex md:flex-col items-start md:items-center gap-4 md:gap-0 relative z-10 md:flex-1"
                  >
                    {/* Circle */}
                    <div className="w-20 h-20 rounded-full bg-white dark:bg-black border-[3px] border-black dark:border-white flex items-center justify-center flex-shrink-0 md:mb-4">
                      <span className="text-2xl font-bold text-black dark:text-white">
                        {index + 1}
                      </span>
                    </div>

                    {/* Text */}
                    <div className="md:text-center">
                      <h3 className="text-base md:text-lg font-bold text-black dark:text-white">
                        {step}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-neutral-500 mt-1">
                        Week {index + 1}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <motion.div
              className="text-center mt-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <button
                onClick={openCalendly}
                className="px-10 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full text-base font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all"
              >
                Start Your Journey
              </button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
