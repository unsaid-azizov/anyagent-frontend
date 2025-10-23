"use client"

import { motion } from "framer-motion"

export function FounderVideoClean() {


  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-4">
            I Want to Tell You Something...
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-neutral-400 max-w-2xl mx-auto">
            A message from the founder
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-2xl md:rounded-3xl shadow-xl border border-gray-300/40 dark:border-white/10"
              src="https://www.youtube.com/embed/HN5UfmQ4zyQ?start=8"
              title="YouTube video player"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
