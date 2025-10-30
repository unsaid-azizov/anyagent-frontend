"use client"

import { motion } from "framer-motion"
import { Phone, MessageCircle, Database } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/magicui/fade-in"
import { ShimmerButton } from "@/components/magicui/shimmer-button"
import { PRODUCTS } from "@/lib/constants"
import Image from "next/image"

export function Hero() {
  const iconMap = {
    phone: Phone,
    "message-circle": MessageCircle,
    database: Database,
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/1.png"
          alt="Background"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black" />
      </div>

      {/* Floating orbs animation */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn delay={0.2}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-blue-200">
              Transform Your Business
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                with AI-Powered Automation
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              From intelligent call agents to RAG chatbots and value-driven CRMs—
              <span className="text-purple-400 font-semibold"> VocalBeam</span> delivers
              cutting-edge AI automation that scales your business.
            </p>
          </FadeIn>

          {/* Products highlights */}
          <FadeIn delay={0.6}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              {PRODUCTS.map((product, index) => {
                const Icon = iconMap[product.icon as keyof typeof iconMap]
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-left"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {product.title}
                    </h3>
                    <p className="text-sm text-gray-400">{product.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </FadeIn>

          {/* CTAs */}
          <FadeIn delay={0.8}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <ShimmerButton
                className="text-lg px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600"
                shimmerColor="rgba(255, 255, 255, 0.3)"
              >
                View Our Products
              </ShimmerButton>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4 border-white/20 hover:bg-white/10 text-white"
              >
                Book Consultation
              </Button>
            </div>
          </FadeIn>

          {/* Premium consulting mention */}
          <FadeIn delay={1}>
            <p className="mt-8 text-sm text-gray-400">
              Need enterprise solutions?{" "}
              <span className="text-purple-400 font-semibold">
                High-end consulting
              </span>{" "}
              available for process audits & optimization
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  )
}
