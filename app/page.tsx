import Script from "next/script";
import { AboutSection } from "@/components/sections/about-section";
import { BlogSection } from "@/components/sections/blog-section";
import { ContactSection } from "@/components/sections/contact-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { Footer } from "@/components/sections/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { SiteHeader } from "@/components/site-header";
import { structuredData } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Script
        id="bright-boadu-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(15,118,110,0.16),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.14),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.95),rgba(248,250,252,0.98))] dark:bg-[radial-gradient(circle_at_top,rgba(45,212,191,0.14),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(96,165,250,0.12),transparent_22%),linear-gradient(180deg,rgba(2,6,23,0.98),rgba(15,23,42,1))]" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(148,163,184,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.09)_1px,transparent_1px)] bg-[size:84px_84px] [mask-image:linear-gradient(180deg,rgba(255,255,255,0.9),transparent)] dark:[mask-image:linear-gradient(180deg,rgba(15,23,42,0.95),transparent)]" />

        <SiteHeader />

        <main>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <ExperienceSection />
          <SkillsSection />
          <BlogSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </>
  );
}
