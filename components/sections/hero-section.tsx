import { ArrowRight, Sparkles } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { SectionShell } from "@/components/ui/section-shell";

const metrics = [
  { label: "AI Products", value: "End-to-End" },
  { label: "Core Focus", value: "LLMs + ML + Platforms" },
  { label: "Founder Lens", value: "Business-First Execution" }
];

export function HeroSection() {
  return (
    <SectionShell id="home" className="pt-16 sm:pt-24">
      <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <FadeIn className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-2 text-sm text-muted-foreground backdrop-blur">
            <Sparkles className="h-4 w-4 text-primary" />
            Building modern AI systems with engineering depth and founder urgency
          </div>

          <h1 className="mt-8 font-display text-5xl font-semibold tracking-[-0.04em] text-balance text-foreground sm:text-6xl lg:text-7xl">
            Building AI Systems That Solve Real Problems
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
            AI Engineer, Machine Learning Specialist, and Founder of Venux AI. I
            build intelligent software, predictive models, and scalable
            platforms that help businesses operate more efficiently.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="#projects">
              View Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button href="#contact" variant="secondary">
              Contact Me
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card/70 p-6 shadow-[0_30px_120px_-40px_rgba(15,23,42,0.35)] backdrop-blur-xl">
            <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-[1.5rem] border border-border bg-background/70 p-5"
                >
                  <p className="text-sm text-muted-foreground">{metric.label}</p>
                  <p className="mt-3 font-display text-2xl font-semibold tracking-tight">
                    {metric.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[1.5rem] border border-border bg-[linear-gradient(180deg,rgba(15,118,110,0.08),rgba(59,130,246,0.06))] p-6 dark:bg-[linear-gradient(180deg,rgba(45,212,191,0.12),rgba(96,165,250,0.08))]">
              <p className="font-accent text-2xl italic text-foreground/90">
                “From predictive models to scalable platforms, I build systems
                that connect technical ambition with real business outcomes.”
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </SectionShell>
  );
}
