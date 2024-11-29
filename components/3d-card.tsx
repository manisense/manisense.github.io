"use client"

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'

export function Card3D({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const x = useMotionValue(0.5)
  const y = useMotionValue(0.5)

  const rotateX = useSpring(useTransform(y, [0, 1], [10, -10]), {
    stiffness: 1000,
    damping: 50,
  })
  const rotateY = useSpring(useTransform(x, [0, 1], [-10, 10]), {
    stiffness: 1000,
    damping: 50,
  })

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const mouseX = event.clientX - rect.left
    const mouseY = event.clientY - rect.top
    const newX = mouseX / rect.width
    const newY = mouseY / rect.height

    x.set(newX)
    y.set(newY)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        x.set(0.5)
        y.set(0.5)
      }}
      style={{
        perspective: 1000,
        transformStyle: "preserve-3d",
      }}
    >
      <motion.div
        style={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
        }}
        className="w-full"
      >
        {children}
      </motion.div>
    </motion.div>
  )
}