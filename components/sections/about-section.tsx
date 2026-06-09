import { FadeIn } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";

export function AboutSection() {
  return (
    <SectionShell id="about">
      <SectionHeading
        badge="About"
        title="Engineer by training, founder by instinct, builder by default."
        description="A profile shaped by technical rigor, applied AI experience, and a strong bias toward shipping meaningful systems."
      />

      <FadeIn className="mx-auto mt-16 max-w-4xl rounded-[2rem] border border-border bg-card/75 p-8 shadow-[0_24px_100px_-40px_rgba(15,23,42,0.28)] backdrop-blur xl:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-5 text-base leading-8 text-muted-foreground sm:text-lg">
            <p>
              Bright Boadu combines a BSc in Mathematics with advanced study in
              Artificial Intelligence to build software that is both
              technically sophisticated and commercially useful.
            </p>
            <p>
              As an AI Engineer, he has worked across machine learning,
              intelligent automation, backend systems, and product development,
              turning complex ideas into practical tools teams can trust in real
              environments.
            </p>
            <p>
              He is also the Founder of Venux AI Inc., where he focuses on
              creating AI-powered platforms that improve operations, strengthen
              decision-making, and unlock new efficiencies for modern
              businesses.
            </p>
            <p>
              His work sits at the intersection of machine learning, software
              engineering, automation, and entrepreneurship, with a consistent
              focus on building systems that deliver measurable value.
            </p>
          </div>

          <div className="grid gap-4">
            {[
              "BSc in Mathematics",
              "Master's degree in Artificial Intelligence",
              "AI Engineer and ML practitioner",
              "Founder of Venux AI Inc."
            ].map((item) => (
              <div
                key={item}
                className="rounded-[1.5rem] border border-border bg-background/70 p-5 text-sm font-medium text-foreground"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </SectionShell>
  );
}
