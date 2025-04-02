"use client"

import { motion, AnimatePresence } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github } from 'lucide-react'
import { useState } from 'react'
import { Card3D } from '@/components/3d-card'

const projects = [
  {
    title: "Medikle App",
    description: "A mobile app for medicine identification, medicine reminder and medical records",
    image: "/images/medikle-app.png",
    tags: ["React Native", "TypeScript", "Expo", "Firebase"],
    github: "https://github.com/manisense/medikle-app",
    demo: "https://medikle.com"
  },
  {
    title: "OnlineDaku",
    description: "An e-commerce platform for cheap deals",
    image: "/images/onlinedaku.png",
    tags: [ "Next.js", "React", "TypeScript", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/manisense/onlinedaku",
    demo: "https://onlinedaku.live"
  },
  {
    title: "SSC Decode",
    description: "An Educational Platform for SSC Students",
    image: "/images/sscdecode.png",
    tags: [ "Next.js", "React", "TypeScript", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/manisense/sscdecode",
    demo: "https://sscdecode.com"
  }
]

export function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section id="projects" className="min-h-screen py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground">
            A collection of projects that showcase my skills and experience
          </p>
        </motion.div>

        <div className="relative">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Project Navigation */}
            <div className="lg:w-1/3">
              <div className="sticky top-24 space-y-4">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={false}
                    animate={{
                      opacity: activeIndex === index ? 1 : 0.5,
                      scale: activeIndex === index ? 1 : 0.95,
                    }}
                    whileHover={{ scale: 0.98 }}
                    onClick={() => setActiveIndex(index)}
                    className={`cursor-pointer rounded-xl p-4 ${
                      activeIndex === index ? 'gradient-border bg-background' : ''
                    }`}
                  >
                    <h3 className="font-semibold mb-2">{project.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Project Details */}
            <div className="lg:w-2/3">
              <Card3D>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="relative aspect-video rounded-xl overflow-hidden gradient-border"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <motion.img
                      src={projects[activeIndex].image}
                      alt={projects[activeIndex].title}
                      className="w-full h-full object-cover"
                      animate={{
                        scale: isHovered ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.4 }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent"
                      animate={{
                        opacity: isHovered ? 0.9 : 0.7,
                      }}
                    />
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 p-6"
                      animate={{
                        y: isHovered ? 0 : 10,
                        opacity: isHovered ? 1 : 0.8,
                      }}
                    >
                      <h3 className="text-2xl font-bold mb-2">
                        {projects[activeIndex].title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {projects[activeIndex].description}
                      </p>
                      <div className="flex gap-3">
                        <Button className="relative overflow-hidden group" onClick={() => window.open(projects[activeIndex].github, "_blank")}>
                          <motion.div
                            className="absolute inset-0 bg-primary opacity-20"
                            animate={{
                              scale: isHovered ? 1.5 : 1,
                            }}
                          />
                          <Github className="mr-2 h-4 w-4" />
                          View Code
                        </Button>
                        <Button variant="secondary" className="relative overflow-hidden group" onClick={() => window.open(projects[activeIndex].demo, "_blank")}>
                          <motion.div
                            className="absolute inset-0 bg-secondary opacity-20"
                            animate={{
                              scale: isHovered ? 1.5 : 1,
                            }}
                          />
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </Button>
                      </div>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </Card3D>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}