"use client"

import { motion, useScroll, useTransform } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Button } from '@/components/ui/button'
import { Download, Github, Linkedin, Mail } from 'lucide-react'
import { useRef } from 'react'

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={containerRef} className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <motion.div 
        style={{ y, opacity }}
        className="container px-4 mx-auto relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="relative inline-block mb-6">
            <motion.div
              className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary/50 to-secondary/50 blur-xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <h1 className="relative text-4xl md:text-6xl font-bold">
              Turning Ideas into Code,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Creativity into Reality
              </span>
            </h1>
          </div>
          
          <div className="text-xl md:text-2xl text-muted-foreground mb-8 h-[60px] relative">
            <motion.div
              className="absolute inset-0 -z-10"
              animate={{
                background: [
                  "radial-gradient(circle at center, rgba(var(--primary-rgb), 0.1) 0%, transparent 70%)",
                  "radial-gradient(circle at center, rgba(var(--secondary-rgb), 0.1) 0%, transparent 70%)",
                ],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <TypeAnimation
              sequence={[
                'Web Developer',
                2000,
                'Programmer',
                2000,
                'Designer',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button 
              size="lg"
              className="group relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/50 to-secondary/50"
                initial={{ x: "100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative">
                <Mail className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                Hire Me
              </span>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="group relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative">
                <Download className="mr-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                Download Resume
              </span>
            </Button>
          </div>

          <motion.div 
            className="flex justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full hover:scale-110 transition-transform"
            >
              <Github className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full hover:scale-110 transition-transform"
            >
              <Linkedin className="h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 0% 0%, rgba(var(--primary-rgb), 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 100% 100%, rgba(var(--secondary-rgb), 0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </section>
  )
}