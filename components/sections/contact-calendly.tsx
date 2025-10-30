"use client"

import { Calendar, Mail } from "lucide-react"
import { FadeIn } from "@/components/magicui/fade-in"
import { SITE_CONFIG } from "@/lib/constants"
import { motion } from "framer-motion"

export function ContactCalendly() {
  const openCalendly = () => {
    window.open(SITE_CONFIG.calendlyUrl, "_blank")
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-transparent scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-black dark:text-white mb-4">
              Let&apos;s Talk
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Ready to transform your business with AI? Book a consultation with our team
            </p>
          </div>
        </FadeIn>

        {/* Calendly Popup Button */}
        <FadeIn delay={0.2}>
          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={openCalendly}
              className="inline-flex items-center gap-3 px-8 py-4 bg-black dark:bg-white text-white dark:text-gray-900 font-semibold rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-all shadow-lg text-lg"
            >
              <Calendar className="w-6 h-6" />
              Schedule a Meeting
            </motion.button>
          </div>
        </FadeIn>

        {/* Additional info */}
        <FadeIn delay={0.4}>
          <div className="mt-16 text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-6">or reach us directly</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
              <a
                href="mailto:admin@vocalbeam.com"
                className="flex items-center gap-2 text-black dark:text-white hover:text-neutral-600 dark:hover:text-gray-300 font-semibold text-lg transition-colors group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                admin@vocalbeam.com
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
