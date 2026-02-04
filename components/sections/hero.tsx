"use client"

import { motion, useScroll, useTransform } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Card3D } from '@/components/3d-card'
import { ArrowUpRight, Brain, Code2, Github, Layers, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'
import { useRef } from 'react'

const focusAreas = [
  {
    title: 'Full-stack product delivery',
    description: 'Design-to-code execution with clean architecture and scalable systems.',
    icon: Code2,
  },
  {
    title: 'Creative UI engineering',
    description: 'Motion, interaction design, and accessible components that feel premium.',
    icon: Layers,
  },
  {
    title: 'Intelligent experiences',
    description: 'Thoughtful AI and automation features that improve real workflows.',
    icon: Brain,
  },
]

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={containerRef} className="min-h-screen pt-28 pb-16 flex items-center relative overflow-hidden">
      <motion.div 
        style={{ y, opacity }}
        className="container px-4 mx-auto relative z-10"
      >
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="uppercase tracking-[0.2em] px-4 py-2 bg-background/70 border border-border/60 text-xs">
              Senior Full-Stack Developer
            </Badge>

            <h1 className="mt-6 text-4xl md:text-6xl font-display font-bold leading-tight">
              Manish Meena
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Creative Portfolio Engineer
              </span>
            </h1>

            <p className="mt-5 text-lg md:text-xl text-muted-foreground max-w-xl">
              I build elegant, high-performance digital products with a balance of
              design sensibility, system thinking, and measurable business impact.
            </p>

            <div className="mt-6 text-base md:text-lg text-muted-foreground h-[36px]">
              <TypeAnimation
                sequence={[
                  'Product-focused full-stack engineering',
                  2200,
                  'Motion-rich and accessible UI systems',
                  2200,
                  'Scalable web & mobile experiences',
                  2200,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" className="group relative overflow-hidden" asChild>
                <Link href="#projects">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/60 to-secondary/60"
                    initial={{ x: "100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                  View Work
                  <ArrowUpRight className="ml-2 h-4 w-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="group relative overflow-hidden" asChild>
                <Link href="#contact">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                  <Mail className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                  Start a Project
                </Link>
              </Button>
            </div>

            <motion.div 
              className="mt-10 flex items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button asChild variant="ghost" size="icon" className="rounded-full hover:scale-110 transition-transform">
                <a href="https://github.com/manisense" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon" className="rounded-full hover:scale-110 transition-transform">
                <a href="https://www.linkedin.com/in/muneshmeena/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <Card3D>
              <Card className="p-6 gradient-border bg-background/70 backdrop-blur">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Focus</p>
                    <h3 className="text-xl font-display font-semibold">Crafted digital products</h3>
                  </div>
                  <Badge variant="secondary">Portfolio</Badge>
                </div>

                <div className="space-y-4">
                  {focusAreas.map((area) => (
                    <div key={area.title} className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <area.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{area.title}</p>
                        <p className="text-sm text-muted-foreground">{area.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </Card3D>

            <Card className="p-6 bg-background/60 border border-border/60">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Now</p>
                  <p className="text-lg font-semibold">Building thoughtful products</p>
                  <p className="text-sm text-muted-foreground">
                    Web, mobile, and intelligent experiences with measurable impact.
                  </p>
                </div>
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30" />
              </div>
            </Card>
          </motion.div>
        </div>
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
