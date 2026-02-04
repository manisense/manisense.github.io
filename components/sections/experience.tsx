"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Briefcase, 
  Calendar,
  GraduationCap,
  Building2
} from 'lucide-react'

const experiences = [
  {
    title: "MTech in Computer Science",
    company: "IIT Guwahati",
    period: "2024 - Present",
    type: "Education",
    description: "Specializing in web technologies and distributed systems with a focus on scalable architecture patterns.",
    highlights: [
      "Research-driven approach to system design.",
      "Deepening expertise in distributed computing.",
    ],
    skills: ["Algorithms", "System Design", "Research"],
    icon: GraduationCap
  },
  {
    title: "Full Stack Developer",
    company: "Sterlite Power.",
    period: "July 2023 - Jan 2024",
    type: "Full Time",
    description: "Built scalable web applications using React, TypeScript, and Flask with performance-first engineering.",
    highlights: [
      "Implemented real-time functionality and data-driven interfaces.",
      "Improved application performance and reliability.",
    ],
    skills: ["React", "Node.js", "AWS", "Flask", "PostgreSQL"],
    icon: Briefcase
  },

  {
    title: "Embedded Software Developer",
    company: "Zilogic Systems",
    period: "May 2022 - July 2022",
    type: "Internship",
    description: "Contributed to a React Native and BLE prototype for connected devices.",
    highlights: [
      "Built mobile interfaces for hardware workflows.",
      "Collaborated on BLE integrations and testing.",
    ],
    skills: ["React Native", "BLE", "Medical Device"],
    icon: Briefcase
  },
  {
    title: "Freelance Developer",
    company: "Self-Employed",
    period: "2021 - Current",
    type: "Freelance",
    description: "Delivered custom web solutions for clients across education and commerce.",
    highlights: [
      "Led discovery, design handoff, and development cycles.",
      "Built maintainable, reusable UI systems.",
    ],
    skills: ["Web Development", "UI/UX", "Project Management"],
    icon: Building2
  }
]

export function ExperienceSection() {
  return (
    <section id="experience" className="min-h-screen py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Experience</h2>
          <p className="text-muted-foreground">
            A journey through education, product delivery, and hands-on engineering.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 h-full w-[2px] bg-border" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative mb-12 md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-12 md:ml-0' : 'md:pl-12 md:ml-auto'
              }`}
            >
              {/* Timeline dot */}
              <div className={`absolute ${
                index % 2 === 0 ? 'right-0 md:-right-6' : 'left-0 md:-left-6'
              } top-0 w-12 h-12 rounded-full bg-background border-2 border-primary flex items-center justify-center`}>
                <exp.icon className="w-6 h-6 text-primary" />
              </div>

              <Card className="p-6 gradient-border bg-background/70 backdrop-blur hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.period}</span>
                  <Badge variant="secondary" className="ml-2">{exp.type}</Badge>
                </div>

                <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                <p className="text-muted-foreground mb-4">{exp.company}</p>
                
                <p className="mb-4">{exp.description}</p>

                <ul className="mb-4 space-y-2 text-sm text-muted-foreground">
                  {exp.highlights.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
