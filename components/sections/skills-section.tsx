import { FadeIn } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { skillGroups } from "@/lib/site";

export function SkillsSection() {
  return (
    <SectionShell id="skills">
      <SectionHeading
        badge="Skills"
        title="Capabilities spanning intelligence, infrastructure, and product engineering."
        description="A practical stack for designing AI workflows, building reliable services, and shipping polished user experiences."
      />

      <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {skillGroups.map((group, index) => (
          <FadeIn key={group.title} delay={index * 0.07}>
            <div className="h-full rounded-[2rem] border border-border bg-card/75 p-6 backdrop-blur">
              <h3 className="font-display text-xl font-semibold tracking-tight">
                {group.title}
              </h3>
              <div className="mt-6 flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border bg-background/70 px-3 py-1.5 text-sm text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </SectionShell>
  );
}
