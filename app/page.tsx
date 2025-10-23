import { Navigation } from "@/components/navigation"
import { HeroProductsRoadmapV2 } from "@/components/sections/hero-products-roadmap-v2"
import { FounderVideoClean } from "@/components/sections/founder-video-clean"
import { ContactCalendly } from "@/components/sections/contact-calendly"
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern"

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="relative bg-white dark:bg-black overflow-hidden">
        {/* Global Animated Grid Background */}
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className="fixed inset-0 opacity-50 dark:opacity-30 pointer-events-none"
        />

        {/* Additional Gradient Blobs Throughout Page */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {/* Hero area gradients - positioned to avoid overlap on mobile */}
          <div className="absolute top-0 -right-20 md:right-0 w-[400px] md:w-[700px] h-[400px] md:h-[700px] bg-gradient-to-bl from-gray-300/8 via-gray-200/5 to-transparent dark:from-purple-500/6 dark:via-blue-500/4 blur-3xl" />
          <div className="absolute top-40 md:top-0 -left-20 md:left-0 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-gradient-to-br from-gray-200/6 via-gray-300/8 to-transparent dark:from-orange-500/6 dark:via-pink-500/4 blur-3xl" />

          {/* Middle section gradients - hidden on mobile to reduce overlap */}
          <div className="hidden md:block absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-gradient-to-bl from-gray-300/6 via-gray-200/4 to-transparent dark:from-cyan-500/5 dark:via-indigo-500/3 blur-3xl" />
          <div className="hidden md:block absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-gradient-to-tr from-gray-200/5 via-gray-300/7 to-transparent dark:from-teal-500/5 dark:via-purple-500/4 blur-3xl" />

          {/* Bottom section gradients - positioned to avoid overlap on mobile */}
          <div className="absolute bottom-0 -left-20 md:left-0 w-[400px] md:w-[700px] h-[400px] md:h-[700px] bg-gradient-to-tr from-gray-300/8 via-gray-200/6 to-transparent dark:from-orange-500/6 dark:via-pink-500/4 blur-3xl" />
          <div className="absolute bottom-0 -right-20 md:right-0 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-gradient-to-tl from-gray-200/5 via-gray-300/8 to-transparent dark:from-purple-500/6 dark:via-blue-500/4 blur-3xl" />
        </div>

        <div className="relative z-10">
          <HeroProductsRoadmapV2 />
          <FounderVideoClean />
          <ContactCalendly />
        </div>
      </main>
    </>
  )
}
