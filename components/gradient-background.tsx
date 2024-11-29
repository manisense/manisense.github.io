"use client"

import { motion } from 'framer-motion'

export function GradientBackground() {
  return (
    <div className="fixed inset-0 -z-50">
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            "radial-gradient(circle at 0% 0%, hsl(var(--primary)) 0%, transparent 50%)",
            "radial-gradient(circle at 100% 100%, hsl(var(--secondary)) 0%, transparent 50%)",
            "radial-gradient(circle at 100% 0%, hsl(var(--primary)) 0%, transparent 50%)",
            "radial-gradient(circle at 0% 100%, hsl(var(--secondary)) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(var(--dot-color) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />
    </div>
  )
}