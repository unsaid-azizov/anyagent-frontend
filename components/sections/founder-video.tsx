"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Play } from "lucide-react"
import { FadeIn } from "@/components/magicui/fade-in"
import { SITE_CONFIG } from "@/lib/constants"

export function FounderVideo() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-black dark:text-white mb-4">
              Meet the{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Founder
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Learn about our vision for transforming businesses through AI automation
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="max-w-4xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl group"
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-50 blur-xl group-hover:opacity-75 transition-opacity dark:opacity-75 dark:group-hover:opacity-100" />

              {/* Video container */}
              <div className="relative bg-gray-100 dark:bg-neutral-950 rounded-3xl overflow-hidden h-full">
                {!isPlaying ? (
                  // Placeholder/Thumbnail
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-200 via-purple-100/50 to-blue-100/50 dark:from-gray-900 dark:via-purple-900/50 dark:to-blue-900/50">
                    <div className="text-center z-10">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsPlaying(true)}
                        className="w-20 h-20 rounded-full bg-gray-900/80 dark:bg-white/10 backdrop-blur-sm border-2 border-gray-800 dark:border-white/20 flex items-center justify-center group-hover:bg-black dark:group-hover:bg-white/20 transition-all"
                      >
                        <Play className="w-8 h-8 text-white dark:text-white ml-1" fill="white" />
                      </motion.button>
                      <p className="mt-4 text-black dark:text-white text-lg font-semibold">
                        Watch Our Story
                      </p>
                    </div>

                    {/* Animated background pattern */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-gray-400 dark:border-white/30 rounded-full" />
                      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-gray-400 dark:border-white/20 rounded-full" />
                    </div>
                  </div>
                ) : (
                  // Video player
                  <video
                    controls
                    autoPlay
                    className="w-full h-full object-cover"
                    poster="/images/2.png"
                  >
                    <source src={SITE_CONFIG.founderVideoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            </motion.div>

            {/* Video info */}
            <div className="mt-8 text-center">
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Update your video URL in{" "}
                <code className="px-2 py-1 bg-gray-200 dark:bg-white/5 rounded text-purple-600 dark:text-purple-400">
                  lib/constants.ts
                </code>
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
