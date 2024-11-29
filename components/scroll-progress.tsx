"use client"

import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const [scrollPercentage, setScrollPercentage] = useState(0)
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', latest => {
      setScrollPercentage(Math.round(latest * 100))
    })
    return () => unsubscribe()
  }, [scrollYProgress])

  const progressColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["hsl(var(--primary))", "hsl(var(--secondary))", "hsl(var(--primary))"]
  )

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 origin-left z-50"
        style={{ 
          scaleX,
          background: progressColor
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-4 right-4 z-50 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium border"
      >
        {scrollPercentage}%
      </motion.div>
    </>
  )
}