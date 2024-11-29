"use client"

import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from './ui/button'
import { ThemeToggle } from './theme-toggle'
import Link from 'next/link'
import { useTheme } from 'next-themes'

export function Header() {
  const { theme } = useTheme()
  const { scrollY } = useScroll()
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    [
      "rgba(var(--background-rgb), 0)",
      "rgba(var(--background-rgb), 0.9)"
    ]
  )
  
  const textColor = useTransform(
    scrollY,
    [0, 100],
    [
      "rgb(var(--foreground-rgb))",
      theme === 'dark' ? "rgb(255, 255, 255)" : "rgb(0, 0, 0)"
    ]
  )
  
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(8px)"]
  )

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor,
        backdropFilter: backdropBlur,
      }}
    >
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold"
          style={{ color: textColor }}
        >
          Portfolio
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="hidden md:flex items-center space-x-8"
          style={{ color: textColor }}
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative group"
            >
              <span className="relative z-10">{item.name}</span>
              <motion.span
                className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            </Link>
          ))}
        </motion.div>

        <div className="flex items-center space-x-4">
          <Button variant="outline" className="hidden md:inline-flex">
            Resume
          </Button>
          <ThemeToggle />
        </div>
      </nav>
    </motion.header>
  )
}