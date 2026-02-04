"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import {
  Clock,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  Send
} from 'lucide-react'
import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'

export function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: '',
  })

  const handleChange = (field: keyof typeof formData) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [field]: event.target.value }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const subject = `Portfolio inquiry from ${formData.firstName || 'Someone'} ${formData.lastName}`.trim()
    const body = [
      `Name: ${formData.firstName} ${formData.lastName}`.trim(),
      `Email: ${formData.email}`,
      `Company / Project: ${formData.company}`,
      '',
      formData.message,
    ].filter(Boolean).join('\n')
    window.location.href = `mailto:imanishmeenaa@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }
  return (
    <section id="contact" className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Let’s build something exceptional</h2>
          <p className="text-muted-foreground text-lg">
            Share your product vision, and I’ll help shape it into a polished, scalable experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="p-6 gradient-border bg-background/70 backdrop-blur">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">imanishmeenaa@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Social</p>
                    <div className="flex gap-2 mt-1">
                      <a href='https://github.com/manisense' target="_blank" rel="noopener noreferrer">
                        <Button variant="ghost" size="icon" className="rounded-full">
                          <Github className="w-5 h-5" />
                        </Button>
                      </a>
                      <a href='https://www.linkedin.com/in/muneshmeena/' target="_blank" rel="noopener noreferrer">
                        <Button variant="ghost" size="icon" className="rounded-full">
                          <Linkedin className="w-5 h-5" />
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">India · IST (UTC+5:30)</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-background/60 border border-border/60">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Response time</p>
                  <p className="font-medium">Typically within 24–48 hours</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Prefer email? Use the form and it’ll draft a message directly in your email client.
              </p>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 gradient-border bg-background/70 backdrop-blur">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Input
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange('firstName')}
                      aria-label="First name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange('lastName')}
                      aria-label="Last name"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Input
                    placeholder="Email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange('email')}
                    aria-label="Email address"
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    placeholder="Company or Project"
                    value={formData.company}
                    onChange={handleChange('company')}
                    aria-label="Company or project"
                  />
                </div>
                <div className="space-y-2">
                  <Textarea
                    placeholder="Tell me about your goals, timeline, and scope."
                    className="min-h-[150px]"
                    value={formData.message}
                    onChange={handleChange('message')}
                    aria-label="Project details"
                  />
                </div>
                <Button className="w-full" type="submit">
                  <Send className="w-4 h-4 mr-2" />
                  Send via Email
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
