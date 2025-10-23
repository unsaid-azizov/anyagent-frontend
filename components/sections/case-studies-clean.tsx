"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { FadeIn } from "@/components/magicui/fade-in"
import { Card } from "@/components/ui/card"
import { CASE_STUDIES } from "@/lib/constants"

export function CaseStudiesClean() {
  return (
    <section id="cases" className="py-24 relative overflow-hidden bg-white dark:bg-neutral-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-black dark:text-white mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Real results from businesses we&apos;ve transformed with AI automation
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {CASE_STUDIES.map((study, index) => (
            <FadeIn key={study.id} delay={0.2 + index * 0.1}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <Card className="group relative overflow-hidden bg-white dark:bg-neutral-900 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all h-full flex flex-col shadow-lg hover:shadow-xl">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                    {/* Stats overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-white/95 dark:bg-neutral-950/95 backdrop-blur-md rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                        <div className="text-3xl font-bold text-black dark:text-white mb-1">
                          {study.stats.metric}
                        </div>
                        <div className="text-sm text-neutral-900 dark:text-gray-300">
                          {study.stats.label}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-700 text-neutral-900 dark:text-gray-300 border border-gray-200 dark:border-gray-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title and description */}
                    <h3 className="text-xl font-bold text-black dark:text-white mb-3 group-hover:text-neutral-900 dark:group-hover:text-gray-200 transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 flex-1">
                      {study.description}
                    </p>

                    {/* CTA */}
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2 text-black dark:text-white font-semibold hover:text-neutral-900 dark:hover:text-gray-300 transition-colors"
                    >
                      View Case Study
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </Card>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* CTA */}
        <FadeIn delay={0.6}>
          <div className="text-center mt-16">
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
              Ready to see similar results for your business?
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-black dark:bg-white text-white dark:text-gray-900 font-semibold rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-all shadow-lg"
            >
              Get Started Today
            </motion.button>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
