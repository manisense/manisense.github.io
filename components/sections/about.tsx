"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Brain, Code, Palette, Sparkles } from 'lucide-react'
import { Card3D } from '@/components/3d-card'

const skills = [
  { name: 'Frontend', icon: Palette, items: ['React', 'React Native','Next.js', 'TypeScript', 'Tailwind CSS'] },
  { name: 'Backend', icon: Code, items: ['Node.js',  'Express', 'Flask', 'MongoDB', 'PostgreSQL'] },
  { name: 'Tools', icon: Brain, items: ['Git', 'Docker', 'AWS', 'Figma'] },
  { name: 'Soft Skills', icon: Sparkles, items: ['Team Leadership', 'Communication', 'Problem Solving', ] }
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
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground">
            MTech student passionate about creating beautiful and functional web experiences.
            Always learning and exploring new technologies to build better solutions.
          </p>
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