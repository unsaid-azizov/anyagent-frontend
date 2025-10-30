"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, Phone, MessageCircle, Database } from "lucide-react"
import { FadeIn } from "@/components/magicui/fade-in"
import { SITE_CONFIG } from "@/lib/constants"

const PRODUCTS_GRID = [
  {
    id: "calls",
    title: "AI Call Agents",
    subtitle: "Inbound & Outbound",
    description: "24/7 intelligent voice automation",
    features: ["Natural conversations", "Multi-language support", "CRM integration", "Real-time analytics"],
    image: "/images/3.png",
    icon: Phone,
    roadmap: [
      { title: "Schedule Discovery Call", description: "15-min consultation to understand your needs" },
      { title: "Voice & Script Design", description: "Custom AI voice training and conversation flows" },
      { title: "Integration Setup", description: "Connect with your existing CRM and phone system" },
      { title: "Testing & Training", description: "Test calls with real scenarios and refine responses" },
      { title: "Launch & Monitor", description: "Go live with 24/7 monitoring and support" },
      { title: "A/B Testing & Optimization", description: "Continuous improvement based on performance data" },
    ],
  },
  {
    id: "chatbots",
    title: "RAG Chatbots",
    subtitle: "Knowledge-Powered",
    description: "Smart assistants with retrieval",
    features: ["Document retrieval", "Context awareness", "Custom training", "API integrations"],
    image: "/images/4.png",
    icon: MessageCircle,
    roadmap: [
      { title: "Schedule Discovery Call", description: "Identify key use cases and knowledge sources" },
      { title: "Knowledge Base Setup", description: "Import docs, PDFs, and data for retrieval" },
      { title: "Custom Training", description: "Fine-tune AI responses to your brand voice" },
      { title: "Website Integration", description: "Embed chatbot on your site or platform" },
      { title: "Launch & Support", description: "Deploy with full monitoring dashboard" },
      { title: "Performance Optimization", description: "Refine responses and add new knowledge" },
    ],
  },
  {
    id: "workflows",
    title: "AI Workflows",
    subtitle: "End-to-End Automation",
    description: "Custom process automation",
    features: ["Process mapping", "Multi-system integration", "Smart triggers", "Analytics dashboard"],
    image: "/images/1.png",
    icon: Database,
    roadmap: [
      { title: "Schedule Discovery Call", description: "Map your current processes and pain points" },
      { title: "Workflow Design", description: "Build automated pipelines and integrations" },
      { title: "System Configuration", description: "Set up connections and automations" },
      { title: "Team Training", description: "Onboard your team with best practices" },
      { title: "Launch & Monitor", description: "Go live with real-time analytics" },
      { title: "Continuous Optimization", description: "Weekly reviews and improvements" },
    ],
  },
]

export function HeroWithProducts() {
  return (
    <section className="relative min-h-screen pt-20 pb-24 bg-gray-50 dark:bg-black overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <svg className="absolute right-0 top-0 h-full" width="600" height="600" viewBox="0 0 600 600">
          <circle cx="500" cy="100" r="300" fill="none" stroke="currentColor" strokeWidth="1" className="text-gray-300 dark:text-gray-700" />
          <circle cx="400" cy="200" r="200" fill="none" stroke="currentColor" strokeWidth="1" className="text-gray-300 dark:text-gray-700" />
        </svg>
        <svg className="absolute left-0 bottom-0 h-full" width="600" height="600" viewBox="0 0 600 600">
          <path d="M0,300 Q150,200 300,300 T600,300" fill="none" stroke="currentColor" strokeWidth="1" className="text-gray-300 dark:text-gray-700" />
          <path d="M0,400 Q150,300 300,400 T600,400" fill="none" stroke="currentColor" strokeWidth="1" className="text-gray-300 dark:text-gray-700" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Content */}
        <div className="max-w-5xl mx-auto text-center mb-20">
          {/* Main Headline */}
          <FadeIn delay={0.2}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 text-black dark:text-white leading-tight">
              Get More Customers
              <br />
              <span className="inline-block mt-2">Without Hiring More Staff</span>
            </h1>
          </FadeIn>

          {/* CTA Section */}
          <FadeIn delay={0.3}>
            <div className="flex flex-col items-center gap-4 mb-12">
              <button
                onClick={() => {
                  window.location.href = SITE_CONFIG.calendlyUrl
                }}
                className="rounded-full bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100 px-10 py-4 text-lg font-semibold transition-all shadow-lg"
              >
                Book a Call
              </button>
              <p className="text-base text-neutral-900 dark:text-gray-400">
                Free 15-Minute Consultation
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {PRODUCTS_GRID.map((product, index) => {
            const Icon = product.icon
            return (
              <FadeIn key={product.id} delay={0.5 + 0.1 * index}>
                <motion.div
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer"
                >
                  {/* Background gradient image */}
                  <div className="absolute inset-0">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
                  </div>

                  {/* Content */}
                  <div className="relative h-full p-8 flex flex-col justify-between text-white">
                    {/* Badge number */}
                    <div className="flex items-start justify-between">
                      <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium">
                        {product.id}
                      </span>
                      <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    {/* Bottom content */}
                    <div>
                      <h3 className="text-3xl font-bold mb-2">{product.title}</h3>
                      <p className="text-white/80 text-sm mb-4">{product.subtitle}</p>

                      {/* Features list */}
                      <div className="space-y-2 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {product.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <ArrowRight className="w-4 h-4 text-white/60" />
                            <span className="text-sm text-white/80">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <motion.button
                        whileHover={{ x: 5 }}
                        className="inline-flex items-center gap-2 text-white font-semibold group-hover:gap-4 transition-all"
                      >
                        Learn More
                        <ArrowRight className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </div>

                  {/* Hover border effect */}
                  <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/20 rounded-3xl transition-all pointer-events-none" />
                </motion.div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
