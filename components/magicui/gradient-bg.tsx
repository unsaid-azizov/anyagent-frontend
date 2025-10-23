"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface GradientBgProps {
  className?: string
  children?: React.ReactNode
}

export function GradientBg({ className, children }: GradientBgProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <motion.div
        className="absolute inset-0 opacity-60"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3), transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 99, 132, 0.3), transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(120, 119, 198, 0.3), transparent 50%), radial-gradient(circle at 20% 20%, rgba(255, 99, 132, 0.3), transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3), transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 99, 132, 0.3), transparent 50%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      {children}
    </div>
  )
}
