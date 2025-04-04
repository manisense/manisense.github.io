import { HeroSection } from '@/components/sections/hero'
import { AboutSection } from '@/components/sections/about'
import { ProjectsSection } from '@/components/sections/projects'
import { ExperienceSection } from '@/components/sections/experience'
import { ContactSection } from '@/components/sections/contact'
import { Header } from '@/components/header'
import { ScrollProgress } from '@/components/scroll-progress'

export default function Home() {
  return (
    <main className="relative">
      <ScrollProgress />
      <Header />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  )
}