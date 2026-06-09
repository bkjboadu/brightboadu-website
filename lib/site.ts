export const siteConfig = {
  name: "Bright Boadu | AI Engineer and Founder",
  title: "Bright Boadu",
  description:
    "Bright Boadu is an AI Engineer, Machine Learning Specialist, and Founder of Venux AI building intelligent software, predictive models, and scalable platforms for modern businesses.",
  url: "https://brightboadu.com",
  ogImage: "https://brightboadu.com/og-image",
  email: "brbojr@gmail.com",
  github: "https://github.com/bkjboadu",
  linkedin: "https://www.linkedin.com/in/bkjboadu/"
} as const;

export const navigationItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" }
] as const;

export const projectItems = [
  {
    title: "Compliance",
    eyebrow: "Venux AI Platform",
    description:
      "AI-powered homecare operations and compliance platform that streamlines workflows, surfaces risk signals, and helps teams stay audit-ready.",
    highlights: ["Workflow intelligence", "Compliance automation", "Operational analytics"]
  },
  {
    title: "PennyLoupe AI",
    eyebrow: "Quantitative Intelligence",
    description:
      "Machine learning platform for stock prediction, trading intelligence, and quantitative analysis designed to turn noisy market data into actionable signals.",
    highlights: ["Forecasting models", "Signal analysis", "Decision support"]
  },
  {
    title: "Email Propensity Platform",
    eyebrow: "Predictive Marketing",
    description:
      "Predictive engagement system that identifies users most likely to interact with campaigns, improving targeting precision and marketing efficiency.",
    highlights: ["Classification pipelines", "Campaign scoring", "Lift optimization"]
  },
  {
    title: "AI Automation Projects",
    eyebrow: "Consulting Solutions",
    description:
      "Custom AI systems, workflow automation, and business intelligence tools built to remove repetitive work and unlock better operational decisions.",
    highlights: ["AI agents", "Process automation", "Data dashboards"]
  }
] as const;

export const experienceItems = [
  {
    role: "Founder",
    company: "Venux AI",
    period: "Present",
    description:
      "Leading product strategy, AI architecture, and delivery for platforms that automate operations and create measurable business leverage."
  },
  {
    role: "AI Engineer",
    company: "Applied AI Projects",
    period: "Recent",
    description:
      "Designing production AI systems, LLM workflows, predictive models, and data products that translate research into business outcomes."
  },
  {
    role: "Machine Learning Engineer",
    company: "ML & Analytics Teams",
    period: "Earlier",
    description:
      "Built end-to-end training pipelines, experimentation loops, and model-serving systems focused on reliability, interpretability, and performance."
  },
  {
    role: "Backend Engineer",
    company: "Scalable Product Infrastructure",
    period: "Foundation",
    description:
      "Developed APIs, data layers, and resilient backend services with strong attention to scalability, maintainability, and product velocity."
  }
] as const;

export const skillGroups = [
  {
    title: "Artificial Intelligence",
    skills: ["Machine Learning", "Deep Learning", "NLP", "LLMs", "RAG", "AI Agents"]
  },
  {
    title: "Backend",
    skills: ["Python", "FastAPI", "Django", "PostgreSQL", "SQLAlchemy"]
  },
  {
    title: "Cloud",
    skills: ["AWS", "GCP", "Vertex AI", "Docker", "Kubernetes"]
  }
] as const;

export const blogItems = [
  {
    title: "Designing AI Systems That Survive Contact with Reality",
    description:
      "Notes on production readiness, constraints, and the engineering decisions that matter once AI leaves the prototype stage.",
    tag: "AI Systems"
  },
  {
    title: "What Great ML Products Get Right About Feedback Loops",
    description:
      "A closer look at how data collection, evaluation, and iteration shape products that actually improve over time.",
    tag: "Machine Learning"
  },
  {
    title: "From Prototype to Platform: Lessons in Founder-Led Engineering",
    description:
      "Reflections on building with urgency while preserving architecture, quality, and room to scale.",
    tag: "Startups"
  }
] as const;

export const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Bright Boadu",
  url: siteConfig.url,
  image: siteConfig.ogImage,
  jobTitle: "AI Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Venux AI"
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Master's degree in Artificial Intelligence"
    }
  ],
  description: siteConfig.description,
  sameAs: [siteConfig.github, siteConfig.linkedin],
  knowsAbout: [
    "Artificial Intelligence",
    "Machine Learning",
    "Backend Engineering",
    "Automation",
    "Entrepreneurship"
  ]
};
