"use client";

import { Github, Linkedin, Mail, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { FadeIn } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { siteConfig } from "@/lib/site";

type FormState = {
  status: "idle" | "loading" | "success" | "error";
  message: string;
};

export function ContactSection() {
  const [state, setState] = useState<FormState>({
    status: "idle",
    message: ""
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState({ status: "loading", message: "" });

    try {
      const formData = new FormData(event.currentTarget);
      const payload = Object.fromEntries(formData.entries());

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const result = (await response.json()) as {
        message?: string;
        error?: string;
      };

      if (!response.ok) {
        setState({
          status: "error",
          message: result.error ?? "Unable to send your message right now."
        });
        return;
      }

      event.currentTarget.reset();
      setState({
        status: "success",
        message: result.message ?? "Message sent successfully."
      });
    } catch {
      setState({
        status: "error",
        message:
          "The message could not be sent because the network request failed. Please try again."
      });
    }
  }

  return (
    <SectionShell id="contact">
      <SectionHeading
        badge="Contact"
        title="Let’s build something ambitious and useful."
        description="Open to consulting engagements, product collaborations, investor conversations, and high-leverage technical roles."
      />

      <div className="mt-16 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <FadeIn>
          <div className="h-full rounded-[2rem] border border-border bg-card/75 p-7 backdrop-blur">
            <h3 className="font-display text-2xl font-semibold tracking-tight">
              Reach out directly
            </h3>
            <p className="mt-4 max-w-md text-base leading-8 text-muted-foreground">
              If you are building in AI, scaling an intelligent product, or
              exploring a collaboration, I’d love to hear what you’re working
              on.
            </p>

            <div className="mt-8 grid gap-4">
              {[
                {
                  label: "LinkedIn",
                  value: siteConfig.linkedin,
                  icon: Linkedin
                },
                {
                  label: "GitHub",
                  value: siteConfig.github,
                  icon: Github
                },
                {
                  label: "Email",
                  value: `mailto:${siteConfig.email}`,
                  icon: Mail
                }
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.value}
                  target={item.label === "Email" ? undefined : "_blank"}
                  rel={item.label === "Email" ? undefined : "noreferrer"}
                  className="flex items-center gap-4 rounded-[1.5rem] border border-border bg-background/70 px-5 py-4 transition hover:-translate-y-0.5"
                >
                  <item.icon className="h-5 w-5 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">{item.label}</div>
                    <div className="text-sm font-medium text-foreground">
                      {item.label === "Email" ? siteConfig.email : item.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="rounded-[2rem] border border-border bg-card/75 p-7 backdrop-blur"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm text-muted-foreground">
                Name
                <input
                  required
                  name="name"
                  autoComplete="name"
                  className="rounded-2xl border border-border bg-background/70 px-4 py-3 text-foreground"
                  placeholder="Your name"
                />
              </label>
              <label className="grid gap-2 text-sm text-muted-foreground">
                Email
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  className="rounded-2xl border border-border bg-background/70 px-4 py-3 text-foreground"
                  placeholder="you@example.com"
                />
              </label>
            </div>

            <label className="mt-5 grid gap-2 text-sm text-muted-foreground">
              Company
              <input
                name="company"
                autoComplete="organization"
                className="rounded-2xl border border-border bg-background/70 px-4 py-3 text-foreground"
                placeholder="Company or project"
              />
            </label>

            <label className="mt-5 grid gap-2 text-sm text-muted-foreground">
              Message
              <textarea
                required
                name="message"
                rows={6}
                className="rounded-2xl border border-border bg-background/70 px-4 py-3 text-foreground"
                placeholder="Tell me a bit about your goals, timeline, and what you want to build."
              />
            </label>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={state.status === "loading"}
                className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {state.status === "loading" ? "Sending..." : "Send Message"}
                <Send className="ml-2 h-4 w-4" />
              </button>

              <p
                className={`text-sm ${
                  state.status === "error" ? "text-rose-500" : "text-muted-foreground"
                }`}
                aria-live="polite"
              >
                {state.message}
              </p>
            </div>
          </form>
        </FadeIn>
      </div>
    </SectionShell>
  );
}
