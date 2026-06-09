import { FadeIn } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { blogItems } from "@/lib/site";

export function BlogSection() {
  return (
    <SectionShell id="blog">
      <SectionHeading
        badge="Blog"
        title="Writing on AI engineering, systems design, and founder-led execution."
        description="Placeholder posts ready for future publishing, content strategy, and SEO expansion."
      />

      <div className="mt-16 grid gap-6 lg:grid-cols-3">
        {blogItems.map((post, index) => (
          <FadeIn key={post.title} delay={index * 0.08}>
            <article className="h-full rounded-[2rem] border border-border bg-card/75 p-7 backdrop-blur">
              <p className="text-sm uppercase tracking-[0.18em] text-primary">
                {post.tag}
              </p>
              <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight">
                {post.title}
              </h3>
              <p className="mt-5 text-base leading-8 text-muted-foreground">
                {post.description}
              </p>
              <div className="mt-8 text-sm font-medium text-foreground">
                Coming soon
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </SectionShell>
  );
}
