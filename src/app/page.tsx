import { HeroSection } from "./components/HeroSection"
import { AboutSection } from "./components/AboutSection"
import { ProjectsSection } from "./components/ProjectsSection"
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Junior Guevara',
  description: 'Portafolio from Junior Guevara',
  icons: {
    icon: "./laptop-solid.svg"
  }
}

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </main>
  )
}
