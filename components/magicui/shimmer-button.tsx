"use client"

import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

interface ShimmerButtonProps extends Omit<HTMLMotionProps<"button">, "style"> {
  shimmerColor?: string
  shimmerSize?: string
  borderRadius?: string
  shimmerDuration?: string
  background?: string
  className?: string
  children: React.ReactNode
}

export function ShimmerButton({
  shimmerColor = "#ffffff",
  borderRadius = "100px",
  shimmerDuration = "3s",
  background = "rgba(0, 0, 0, 1)",
  className,
  children,
  ...props
}: ShimmerButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{
        borderRadius,
        background,
      }}
      className={cn(
        "relative overflow-hidden px-6 py-3 font-medium text-white shadow-2xl transition-all",
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <motion.div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(90deg, transparent, ${shimmerColor}, transparent)`,
        }}
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{
          duration: parseFloat(shimmerDuration),
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </motion.button>
  )
}
