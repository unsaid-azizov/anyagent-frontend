"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, Phone, MessageCircle, Database, Building2 } from "lucide-react"
import { FadeIn } from "@/components/magicui/fade-in"

const PRODUCTS_GRID = [
  {
    id: "01",
    title: "AI Call Agents",
    subtitle: "Inbound & Outbound",
    description: "24/7 intelligent voice automation",
    features: ["Natural conversations", "Multi-language support", "CRM integration", "Real-time analytics"],
    image: "/images/2.png",
    icon: Phone,
  },
  {
    id: "02",
    title: "RAG Chatbots",
    subtitle: "Knowledge-Powered",
    description: "Smart assistants with retrieval",
    features: ["Document retrieval", "Context awareness", "Custom training", "API integrations"],
    image: "/images/3.png",
    icon: MessageCircle,
  },
  {
    id: "03",
    title: "AI-Driven CRMs",
    subtitle: "Value-Focused",
    description: "Automate customer relationships",
    features: ["Lead scoring", "Smart workflows", "Predictive analytics", "Seamless sync"],
    image: "/images/4.png",
    icon: Database,
  },
  {
    id: "04",
    title: "Enterprise Consulting",
    subtitle: "High-End Strategy",
    description: "Process audit & optimization",
    features: ["Full process audit", "AI implementation", "ROI optimization", "Ongoing support"],
    image: "/images/1.png",
    icon: Building2,
  },
]

export function ProductsGrid() {
  return (
    <section id="products" className="py-24 bg-white dark:bg-neutral-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-black dark:text-white mb-4">
              Our Solutions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Cutting-edge AI automation tailored to your business needs
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {PRODUCTS_GRID.map((product, index) => {
            const Icon = product.icon
            return (
              <FadeIn key={product.id} delay={0.1 * (index + 1)}>
                <motion.div
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer"
                >
                  {/* Background gradient image */}
                  <div className="absolute inset-0">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
                  </div>

                  {/* Content */}
                  <div className="relative h-full p-8 flex flex-col justify-between text-white">
                    {/* Badge number */}
                    <div className="flex items-start justify-between">
                      <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium">
                        {product.id}
                      </span>
                      <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    {/* Bottom content */}
                    <div>
                      <h3 className="text-3xl font-bold mb-2">{product.title}</h3>
                      <p className="text-white/80 text-sm mb-4">{product.subtitle}</p>

                      {/* Features list */}
                      <div className="space-y-2 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {product.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <ArrowRight className="w-4 h-4 text-white/60" />
                            <span className="text-sm text-white/80">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <motion.button
                        whileHover={{ x: 5 }}
                        className="inline-flex items-center gap-2 text-white font-semibold group-hover:gap-4 transition-all"
                      >
                        Learn More
                        <ArrowRight className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </div>

                  {/* Hover border effect */}
                  <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/20 rounded-3xl transition-all pointer-events-none" />
                </motion.div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
