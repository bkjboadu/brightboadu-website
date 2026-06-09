import { FadeIn } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { experienceItems } from "@/lib/site";

export function ExperienceSection() {
  return (
    <SectionShell id="experience">
      <SectionHeading
        badge="Experience"
        title="Built across startups, intelligent platforms, and backend-heavy systems."
        description="A timeline that reflects both technical depth and the ability to lead products from idea to execution."
      />

      <div className="relative mx-auto mt-16 max-w-5xl">
        <div className="absolute left-4 top-0 hidden h-full w-px bg-border md:block" />
        <div className="grid gap-6">
          {experienceItems.map((item, index) => (
            <FadeIn key={item.role} delay={index * 0.08}>
              <article className="relative rounded-[2rem] border border-border bg-card/75 p-7 backdrop-blur md:ml-12">
                <div className="absolute -left-10 top-8 hidden h-4 w-4 rounded-full border-4 border-background bg-primary md:block" />
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="font-display text-2xl font-semibold tracking-tight">
                      {item.role}
                    </h3>
                    <p className="mt-2 text-sm uppercase tracking-[0.18em] text-primary">
                      {item.company}
                    </p>
                  </div>
                  <div className="rounded-full border border-border bg-background/70 px-4 py-2 text-sm text-muted-foreground">
                    {item.period}
                  </div>
                </div>
                <p className="mt-5 max-w-3xl text-base leading-8 text-muted-foreground">
                  {item.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
