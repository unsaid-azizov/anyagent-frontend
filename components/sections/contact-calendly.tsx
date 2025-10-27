"use client"

import { useEffect } from "react"
import { useTheme } from "next-themes"
import { Calendar, Mail } from "lucide-react"
import { FadeIn } from "@/components/magicui/fade-in"
import { SITE_CONFIG } from "@/lib/constants"
import { motion } from "framer-motion"

export function ContactCalendly() {
  const { theme } = useTheme()

  const isDark = theme === "dark"

  const openCalendly = () => {
    if (typeof window !== "undefined") {
      const calendlyWindow = window as unknown as Window & {
        Calendly?: {
          initPopupWidget: (config: {
            url: string
            pageSettings: {
              backgroundColor: string
              hideEventTypeDetails: boolean
              hideLandingPageDetails: boolean
              primaryColor: string
              textColor: string
            }
          }) => void
        }
      }

      if (calendlyWindow.Calendly) {
        calendlyWindow.Calendly.initPopupWidget({
          url: SITE_CONFIG.calendlyUrl,
          pageSettings: {
            backgroundColor: isDark ? "0a0a0a" : "ffffff",
            hideEventTypeDetails: false,
            hideLandingPageDetails: false,
            primaryColor: isDark ? "ffffff" : "111827",
            textColor: isDark ? "ffffff" : "000000",
          },
        })
      }
    }
  }

  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    document.body.appendChild(script)

    // Load Calendly CSS
    const link = document.createElement("link")
    link.href = "https://assets.calendly.com/assets/external/widget.css"
    link.rel = "stylesheet"
    document.head.appendChild(link)

    return () => {
      document.body.removeChild(script)
      document.head.removeChild(link)
    }
  }, [])

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
            <p className="text-gray-500 dark:text-gray-500 text-sm mt-4">
              Click to open scheduling calendar
            </p>
          </div>
        </FadeIn>

        {/* Additional info */}
        <FadeIn delay={0.4}>
          <div className="mt-16 text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-6">or reach us directly</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
              <a
                href="mailto:stazizovs@gmail.com"
                className="flex items-center gap-2 text-black dark:text-white hover:text-neutral-600 dark:hover:text-gray-300 font-semibold text-lg transition-colors group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                stazizovs@gmail.com
              </a>
              <span className="hidden sm:block text-gray-400">•</span>
              <a
                href="https://x.com/unsaid_azizov"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-black dark:text-white hover:text-neutral-600 dark:hover:text-gray-300 font-semibold text-lg transition-colors group"
              >
                <svg
                  className="w-5 h-5 group-hover:scale-110 transition-transform"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                @unsaid_azizov
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
