"use client"

import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/magicui/fade-in"

export function HeroV2() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 bg-gray-50 dark:bg-gray-950 overflow-hidden">
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
        <div className="max-w-5xl mx-auto text-center">
          {/* Tag line */}
          <FadeIn delay={0.1}>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 tracking-wider uppercase">
              Revolutionize Your Business
            </p>
          </FadeIn>

          {/* Main Headline */}
          <FadeIn delay={0.2}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 text-black dark:text-white leading-tight">
              Transform with
              <br />
              <span className="inline-block mt-2">AI-Powered Automation</span>
            </h1>
          </FadeIn>

          {/* Subheadline */}
          <FadeIn delay={0.3}>
            <div className="flex items-center justify-center gap-4 mb-12">
              <Button
                size="lg"
                className="rounded-full bg-black dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 px-8"
              >
                START GENERATING
              </Button>
              <p className="text-gray-600 dark:text-gray-400">
                The Next generation
                <br />
                <span className="font-semibold text-black dark:text-white">Production</span>{" "}
                for Businesses
              </p>
            </div>
          </FadeIn>

          {/* Sub description */}
          <FadeIn delay={0.4}>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-16">
              From intelligent call agents and RAG chatbots to value-driven CRMs
              and high-end enterprise consulting—we automate what matters.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
