import { Badge } from "@/components/ui/badge";

type SectionHeadingProps = {
  badge: string;
  title: string;
  description: string;
};

export function SectionHeading({
  badge,
  title,
  description
}: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <Badge>{badge}</Badge>
      <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-muted-foreground sm:text-lg">
        {description}
      </p>
    </div>
  );
}
