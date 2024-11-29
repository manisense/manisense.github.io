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
    title: "Software Engineering Intern",
    company: "Tech Innovators Inc.",
    period: "Jun 2023 - Present",
    type: "Internship",
    description: "Developing scalable web applications using Next.js and TypeScript. Implemented real-time features and optimized performance.",
    skills: ["React", "Node.js", "AWS"],
    icon: Briefcase
  },
  {
    title: "MTech in Computer Science",
    company: "Premier Institute of Technology",
    period: "2023 - Present",
    type: "Education",
    description: "Specializing in Web Technologies and Distributed Systems. Research focus on scalable architecture patterns.",
    skills: ["Algorithms", "System Design", "Research"],
    icon: GraduationCap
  },
  {
    title: "Freelance Developer",
    company: "Self-Employed",
    period: "2021 - 2023",
    type: "Freelance",
    description: "Delivered custom web solutions for various clients. Managed project timelines and client communications.",
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
          <h2 className="text-3xl font-bold mb-4">Experience</h2>
          <p className="text-muted-foreground">
            My professional journey and educational background
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

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.period}</span>
                </div>

                <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                <p className="text-muted-foreground mb-4">{exp.company}</p>
                
                <p className="mb-4">{exp.description}</p>

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