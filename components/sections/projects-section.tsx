import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { projectItems } from "@/lib/site";

export function ProjectsSection() {
  return (
    <SectionShell id="projects">
      <SectionHeading
        badge="Projects"
        title="Selected work across AI platforms, forecasting, and automation."
        description="A focused portfolio of systems designed to improve operations, extract insight from data, and create leverage through intelligent software."
      />

      <div className="mt-16 grid gap-6 lg:grid-cols-2">
        {projectItems.map((project, index) => (
          <FadeIn key={project.title} delay={index * 0.08}>
            <article className="group h-full rounded-[2rem] border border-border bg-card/75 p-7 shadow-[0_24px_100px_-48px_rgba(15,23,42,0.28)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_120px_-48px_rgba(15,23,42,0.34)]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-primary">
                    {project.eyebrow}
                  </p>
                  <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight">
                    {project.title}
                  </h3>
                </div>
                <ArrowUpRight className="mt-1 h-5 w-5 text-muted-foreground transition group-hover:text-foreground" />
              </div>

              <p className="mt-5 text-base leading-8 text-muted-foreground">
                {project.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="rounded-full border border-border bg-background/70 px-3 py-1.5 text-sm text-muted-foreground"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </SectionShell>
  );
}
