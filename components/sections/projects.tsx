"use client"

import { motion, AnimatePresence } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CheckCircle2, ExternalLink, Github } from 'lucide-react'
import { useState } from 'react'
import { Card3D } from '@/components/3d-card'

const projects = [
  {
    title: "Medikle",
    type: "Mobile App",
    description: "A mobile app for medicine identification, medication reminders, and health records.",
    image: "/images/medikle-app.png",
    tags: ["React Native", "TypeScript", "Expo", "Supabase", "Generative AI"],
    github: "https://github.com/manisense/medikle-app",
    demo: "https://play.google.com/store/apps/details?id=com.medikle.app",
    demoLabel: "Play Store",
    highlights: [
      "AI-assisted medicine identification and insights.",
      "Reminder workflows designed for daily consistency.",
      "Unified records for personal health tracking.",
    ],
    meta: [
      { label: "Platform", value: "Android" },
      { label: "Focus", value: "HealthTech" },
      { label: "Availability", value: "Public" },
    ],
  },
  {
    title: "Mavkhouse",
    type: "E-commerce",
    description: "International e-commerce storefront focused on premium shopping experiences.",
    image: "/images/mavkhouse.svg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Ecommerce", "Internationalization"],
    demo: "https://mavkhouse.com",
    highlights: [
      "Localized storefront experience for global audiences.",
      "Conversion-focused UX for product discovery.",
      "Optimized performance across devices.",
    ],
    meta: [
      { label: "Platform", value: "Web" },
      { label: "Focus", value: "International Commerce" },
      { label: "Availability", value: "Public" },
    ],
  },
  {
    title: "OnlineDaku",
    type: "E-commerce",
    description: "An e-commerce platform for cheap deals",
    image: "/images/onlinedaku.png",
    tags: [ "Next.js", "React", "TypeScript", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/manisense/onlinedaku",
    demo: "https://onlinedaku.com",
    highlights: [
      "Curated deal discovery experience with fast search.",
      "Modern UI with reusable product components.",
      "Scalable catalog architecture for growth.",
    ],
    meta: [
      { label: "Platform", value: "Web" },
      { label: "Focus", value: "Commerce & Deals" },
      { label: "Availability", value: "Public" },
    ],
  },
  {
    title: "SSC Decode",
    type: "Education",
    description: "An Educational Platform for SSC Students",
    image: "/images/sscdecode.png",
    tags: [ "Next.js", "React", "TypeScript", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/manisense/sscdecode",
    demo: "https://sscdecode.com",
    highlights: [
      "Structured learning paths with clear content hierarchy.",
      "Responsive dashboards for students and educators.",
      "Designed for clarity and ease of navigation.",
    ],
    meta: [
      { label: "Platform", value: "Web" },
      { label: "Focus", value: "Education" },
      { label: "Availability", value: "Public" },
    ],
  },
]

export function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const activeProject = projects[activeIndex]

  return (
    <section id="projects" className="min-h-screen py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Selected Work</h2>
          <p className="text-muted-foreground text-lg">
            A curated set of projects that highlight product thinking, UX craft, and engineering depth.
          </p>
        </motion.div>

        <div className="relative">
          <div className="flex flex-col lg:flex-row gap-10">
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
                    className={`cursor-pointer rounded-2xl p-5 transition-all ${
                      activeIndex === index ? 'gradient-border bg-background/70 backdrop-blur' : 'bg-background/40 border border-border/60'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-lg">{project.title}</h3>
                      <Badge variant="secondary" className="text-[10px] uppercase tracking-widest">
                        {project.type}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag) => (
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
            <div className="lg:w-2/3 space-y-6">
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
                      src={activeProject.image}
                      alt={activeProject.title}
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
                      <Badge variant="secondary" className="mb-3 text-xs uppercase tracking-widest">
                        {activeProject.type}
                      </Badge>
                      <h3 className="text-2xl font-bold mb-2">
                        {activeProject.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {activeProject.description}
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {activeProject.github && (
                          <Button asChild className="relative overflow-hidden group">
                            <a href={activeProject.github} target="_blank" rel="noopener noreferrer">
                              <motion.div
                                className="absolute inset-0 bg-primary opacity-20"
                                animate={{
                                  scale: isHovered ? 1.5 : 1,
                                }}
                              />
                              <Github className="mr-2 h-4 w-4" />
                              View Code
                            </a>
                          </Button>
                        )}
                        <Button asChild variant="secondary" className="relative overflow-hidden group">
                          <a href={activeProject.demo} target="_blank" rel="noopener noreferrer">
                            <motion.div
                              className="absolute inset-0 bg-secondary opacity-20"
                              animate={{
                                scale: isHovered ? 1.5 : 1,
                              }}
                            />
                            <ExternalLink className="mr-2 h-4 w-4" />
                            {activeProject.demoLabel ?? "Live Demo"}
                          </a>
                        </Button>
                      </div>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </Card3D>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 gradient-border bg-background/70 backdrop-blur">
                  <h4 className="text-lg font-semibold mb-4">Highlights</h4>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    {activeProject.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
                <Card className="p-6 bg-background/60 border border-border/60">
                  <h4 className="text-lg font-semibold mb-4">Stack & Focus</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-4 grid gap-3">
                    {activeProject.meta.map((item) => (
                      <div key={item.label} className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">{item.label}</span>
                        <span className="font-medium">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
