"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { InlineWidget } from "react-calendly"
import { Mail, Calendar, Send } from "lucide-react"
import { FadeIn } from "@/components/magicui/fade-in"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SITE_CONFIG } from "@/lib/constants"

export function Contact() {
  const [activeTab, setActiveTab] = useState<"form" | "calendar">("form")

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-black dark:text-white mb-4">
              Let&apos;s{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Talk
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Ready to transform your business with AI? Get in touch with our team
            </p>
          </div>
        </FadeIn>

        <div className="max-w-6xl mx-auto">
          {/* Tab selector */}
          <FadeIn delay={0.2}>
            <div className="flex justify-center gap-4 mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab("form")}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
                  activeTab === "form"
                    ? "bg-black dark:bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                    : "bg-gray-200 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-white/10"
                }`}
              >
                <Mail className="w-5 h-5" />
                Contact Form
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab("calendar")}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
                  activeTab === "calendar"
                    ? "bg-black dark:bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                    : "bg-gray-200 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-white/10"
                }`}
              >
                <Calendar className="w-5 h-5" />
                Book a Call
              </motion.button>
            </div>
          </FadeIn>

          {/* Content */}
          <FadeIn delay={0.3}>
            <div className="bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-3xl p-8 md:p-12 shadow-lg">
              {activeTab === "form" ? (
                <div className="max-w-2xl mx-auto">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-300 mb-2"
                        >
                          Full Name
                        </label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="John Doe"
                          className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-purple-500"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-300 mb-2"
                        >
                          Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-purple-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-neutral-900 dark:text-gray-300 mb-2"
                      >
                        Company
                      </label>
                      <Input
                        id="company"
                        type="text"
                        placeholder="Your Company"
                        className="bg-gray-50 dark:bg-white/5 border-gray-300 dark:border-white/10 text-black dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:border-purple-500"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="interest"
                        className="block text-sm font-medium text-neutral-900 dark:text-gray-300 mb-2"
                      >
                        What are you interested in?
                      </label>
                      <select
                        id="interest"
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/10 text-black dark:text-white focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                      >
                        <option value="">Select an option</option>
                        <option value="ai-calls">AI Call Agents</option>
                        <option value="chatbots">RAG Chatbots</option>
                        <option value="crm">AI-Driven CRMs</option>
                        <option value="consulting">Enterprise Consulting</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-neutral-900 dark:text-gray-300 mb-2"
                      >
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project..."
                        rows={5}
                        className="bg-gray-50 dark:bg-white/5 border-gray-300 dark:border-white/10 text-black dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:border-purple-500"
                      />
                    </div>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        type="submit"
                        className="w-full bg-black dark:bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-6 text-lg hover:bg-gray-800"
                      >
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </Button>
                    </motion.div>
                  </form>
                </div>
              ) : (
                <div className="calendly-container">
                  <InlineWidget
                    url={SITE_CONFIG.calendlyUrl}
                    styles={{
                      height: "700px",
                      minWidth: "100%",
                    }}
                    pageSettings={{
                      backgroundColor: "transparent",
                      hideEventTypeDetails: false,
                      hideLandingPageDetails: false,
                      primaryColor: "a855f7",
                      textColor: "ffffff",
                    }}
                  />
                  <p className="text-center text-gray-600 dark:text-gray-400 text-sm mt-4">
                    Update your Calendly URL in{" "}
                    <code className="px-2 py-1 bg-gray-200 dark:bg-white/5 rounded text-purple-600 dark:text-purple-400">
                      lib/constants.ts
                    </code>
                  </p>
                </div>
              )}
            </div>
          </FadeIn>
        </div>

        {/* Additional info */}
        <FadeIn delay={0.5}>
          <div className="mt-16 text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-4">or reach us directly at</p>
            <a
              href="mailto:admin@vocalbeam.com"
              className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-semibold text-lg transition-colors"
            >
              admin@vocalbeam.com
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
