"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Brain, Code, Palette, Sparkles } from 'lucide-react'
import { Card3D } from '@/components/3d-card'

const skills = [
  { name: 'Frontend', icon: Palette, items: ['React', 'Next.js', 'React Native', 'TypeScript', 'Tailwind CSS'] },
  { name: 'Backend', icon: Code, items: ['Node.js', 'Flask', 'PostgreSQL', 'MongoDB', 'Supabase'] },
  { name: 'Tools', icon: Brain, items: ['Git', 'Docker', 'AWS', 'Vercel'] },
  { name: 'Collaboration', icon: Sparkles, items: ['Product Thinking', 'Mentoring', 'Communication', 'Problem Solving'] }
]

const principles = [
  {
    title: 'Product Thinking',
    description: 'Translate goals into roadmaps that balance user value, feasibility, and craft.',
    icon: Sparkles,
  },
  {
    title: 'Design + Engineering',
    description: 'Build UI systems that are elegant, reusable, and easy to scale.',
    icon: Palette,
  },
  {
    title: 'Systems & Scale',
    description: 'Choose architectures that keep products fast, reliable, and future-ready.',
    icon: Brain,
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export function AboutSection() {
  return (
    <section id="about" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start mb-12"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">About</h2>
            <p className="text-muted-foreground text-lg">
              I’m a senior full-stack developer focused on building delightful product
              experiences—from early discovery and UX flows to production-grade systems.
              I enjoy collaborating with teams that value clarity, craft, and long-term quality.
            </p>
            <div className="mt-6 space-y-3 text-sm text-muted-foreground">
              <p>• Product strategy, design systems, and UX engineering.</p>
              <p>• Full-stack execution with modern web and mobile stacks.</p>
              <p>• Performance, accessibility, and scalable architectures.</p>
            </div>
          </div>

          <div className="grid gap-4">
            {principles.map((item) => (
              <Card3D key={item.title}>
                <Card className="p-5 gradient-border bg-background/70 backdrop-blur">
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </Card>
              </Card3D>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill) => (
            <motion.div key={skill.name} variants={item}>
              <Card3D>
                <Card className="p-6 h-full gradient-border bg-background">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <skill.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold">{skill.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <Badge key={item} variant="secondary">{item}</Badge>
                    ))}
                  </div>
                </Card>
              </Card3D>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Fun Facts</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { number: '500+', label: 'Problems Solved' },
              { number: '15+', label: 'Projects Completed' },
              { number: '3+', label: 'Years Experience' }
            ].map((fact, index) => (
              <Card3D key={fact.label}>
                <Card className="p-6 text-center gradient-border bg-background">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: index * 0.1
                    }}
                  >
                    <div className="text-4xl font-bold text-primary mb-2">{fact.number}</div>
                    <div className="text-sm text-muted-foreground">{fact.label}</div>
                  </motion.div>
                </Card>
              </Card3D>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Animated background pattern */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at center, rgba(var(--primary-rgb), 0.1) 0%, transparent 70%)",
            backgroundSize: "50px 50px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "50px 50px"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
    </section>
  )
}
