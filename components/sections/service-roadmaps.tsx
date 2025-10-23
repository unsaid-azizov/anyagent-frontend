"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Phone, MessageCircle, Database, Building2, CheckCircle2 } from "lucide-react"
import { FadeIn } from "@/components/magicui/fade-in"

const ROADMAPS = {
  calls: {
    title: "AI Call Agents",
    icon: Phone,
    steps: [
      { title: "Schedule Discovery Call", description: "15-min consultation to understand your needs" },
      { title: "Voice & Script Design", description: "Custom AI voice training and conversation flows" },
      { title: "Integration Setup", description: "Connect with your existing CRM and phone system" },
      { title: "Testing & Training", description: "Test calls with real scenarios and refine responses" },
      { title: "Launch & Monitor", description: "Go live with 24/7 monitoring and support" },
      { title: "A/B Testing & Optimization", description: "Continuous improvement based on performance data" },
    ],
  },
  chatbots: {
    title: "RAG Chatbots",
    icon: MessageCircle,
    steps: [
      { title: "Schedule Discovery Call", description: "Identify key use cases and knowledge sources" },
      { title: "Knowledge Base Setup", description: "Import docs, PDFs, and data for retrieval" },
      { title: "Custom Training", description: "Fine-tune AI responses to your brand voice" },
      { title: "Website Integration", description: "Embed chatbot on your site or platform" },
      { title: "Launch & Support", description: "Deploy with full monitoring dashboard" },
      { title: "Performance Optimization", description: "Refine responses and add new knowledge" },
    ],
  },
  crm: {
    title: "AI-Driven CRMs",
    icon: Database,
    steps: [
      { title: "Schedule Discovery Call", description: "Map your current sales process and pain points" },
      { title: "Workflow Design", description: "Build automated pipelines and lead scoring" },
      { title: "CRM Configuration", description: "Set up custom fields, tags, and automations" },
      { title: "Team Training", description: "Onboard your team with best practices" },
      { title: "Launch & Monitor", description: "Go live with real-time analytics" },
      { title: "Continuous Optimization", description: "Weekly reviews and automation improvements" },
    ],
  },
  consulting: {
    title: "Enterprise Consulting",
    icon: Building2,
    steps: [
      { title: "Schedule Strategy Call", description: "Deep-dive into your business operations" },
      { title: "Full Process Audit", description: "Identify bottlenecks and automation opportunities" },
      { title: "AI Implementation Plan", description: "Custom roadmap with ROI projections" },
      { title: "Solution Development", description: "Build and deploy AI systems across your org" },
      { title: "Team Enablement", description: "Train your staff on new AI tools" },
      { title: "Ongoing Support & Scaling", description: "Monthly optimization and expansion" },
    ],
  },
}

export function ServiceRoadmaps() {
  const [activeService, setActiveService] = useState<keyof typeof ROADMAPS>("calls")

  const ActiveIcon = ROADMAPS[activeService].icon

  return (
    <section id="roadmap" className="py-24 relative overflow-hidden bg-white dark:bg-neutral-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-black dark:text-white mb-4">
              How We Solve Your Problems
            </h2>
            <p className="text-xl text-neutral-900 dark:text-gray-400 max-w-2xl mx-auto">
              Step-by-step roadmap from discovery call to optimization
            </p>
          </div>
        </FadeIn>

        {/* Service Selector */}
        <FadeIn delay={0.2}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {(Object.keys(ROADMAPS) as Array<keyof typeof ROADMAPS>).map((key) => {
              const Icon = ROADMAPS[key].icon
              return (
                <motion.button
                  key={key}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveService(key)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
                    activeService === key
                      ? "bg-black dark:bg-white text-white dark:text-black shadow-lg"
                      : "bg-gray-100 dark:bg-neutral-800 text-neutral-900 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-neutral-700"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {ROADMAPS[key].title}
                </motion.button>
              )
            })}
          </div>
        </FadeIn>

        {/* Roadmap Steps */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gray-50 dark:bg-neutral-900 rounded-3xl p-8 md:p-12 border border-gray-200 dark:border-neutral-800 shadow-lg">
              {/* Header */}
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-200 dark:border-neutral-800">
                <div className="w-16 h-16 rounded-2xl bg-black dark:bg-white flex items-center justify-center">
                  <ActiveIcon className="w-8 h-8 text-white dark:text-black" />
                </div>
                <h3 className="text-3xl font-bold text-black dark:text-white">
                  {ROADMAPS[activeService].title} Roadmap
                </h3>
              </div>

              {/* Steps */}
              <div className="space-y-6">
                {ROADMAPS[activeService].steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4 group"
                  >
                    {/* Step Number */}
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-black dark:bg-white flex items-center justify-center text-white dark:text-black font-bold">
                        {index + 1}
                      </div>
                    </div>

                    {/* Step Content */}
                    <div className="flex-1 pb-6 border-b border-gray-200 dark:border-neutral-800 last:border-0">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="text-xl font-semibold text-black dark:text-white mb-2 group-hover:text-neutral-900 dark:group-hover:text-gray-300 transition-colors">
                            {step.title}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-400">
                            {step.description}
                          </p>
                        </div>
                        <CheckCircle2 className="w-6 h-6 text-gray-300 dark:text-neutral-700 group-hover:text-black dark:group-hover:text-white transition-colors" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-10 pt-8 border-t border-gray-200 dark:border-neutral-800 text-center">
                <button
                  onClick={() => {
                    if (typeof window !== "undefined") {
                      const calendlyWindow = window as unknown as Window & {
                        Calendly?: {
                          initPopupWidget: (config: { url: string }) => void
                        }
                      }
                      if (calendlyWindow.Calendly) {
                        calendlyWindow.Calendly.initPopupWidget({
                          url: "https://calendly.com/stazizovs/30min"
                        })
                      }
                    }
                  }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-all shadow-lg"
                >
                  Start This Process
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
