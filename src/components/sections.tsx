import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Bot,
  Cloud,
  Database,
  Mail,
  MapPin,
  MessagesSquare,
  PenLine,
  ShieldCheck,
  Trophy,
  type LucideIcon,
} from "lucide-react";
import {
  about,
  awards,
  caseStudies,
  certifications,
  contact,
  expertise,
  hero,
  journey,
  person,
  skills,
  writing,
} from "@/content/profile";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GitHubIcon, LinkedInIcon } from "@/components/brand-icons";
import { Journey } from "@/components/journey";
import { cn } from "@/lib/utils";

const expertiseIcons: Record<string, LucideIcon> = {
  "llm-apps": MessagesSquare,
  rag: Database,
  agents: Bot,
  "cloud-mlops": Cloud,
  governance: ShieldCheck,
};

const external = { target: "_blank", rel: "noopener noreferrer" } as const;

function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className,
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={cn("py-20 sm:py-28", className)}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
          <h2 id={`${id}-title`} className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            {title}
          </h2>
          {intro && <p className="mt-4 text-lg text-muted-foreground text-pretty">{intro}</p>}
        </div>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]"
      />
      <div className="relative mx-auto max-w-6xl px-5 pt-20 pb-20 sm:px-8 sm:pt-28 sm:pb-28">
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="outline" className="gap-1.5 py-3 px-3 bg-background/60 backdrop-blur">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            {person.availability}
          </Badge>
          <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="size-4" /> {person.location}
          </span>
        </div>

        <p className="mt-8 text-sm font-medium uppercase tracking-[0.18em] text-primary">{hero.eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl sm:leading-[1.05]">
          {hero.headline} <span className="text-gradient">{hero.headlineAccent}</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground text-pretty sm:text-xl">{hero.subheadline}</p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a href={hero.primaryCta.href} className={cn(buttonVariants({ size: "lg" }), "h-11 px-6")}>
            {hero.primaryCta.label} <ArrowRight />
          </a>
          <a
            href={person.links.linkedin}
            {...external}
            className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-11 px-6 bg-background/60")}
          >
            <LinkedInIcon className="size-4" /> Connect on LinkedIn
          </a>
        </div>

        <dl className="mt-16 grid max-w-4xl grid-cols-2 gap-6 border-t border-border/60 pt-8 sm:grid-cols-4">
          {hero.stats.map((stat) => (
            <div key={stat.label}>
              <dt className="text-sm text-muted-foreground">{stat.label}</dt>
              <dd className="mt-1 text-3xl font-semibold tracking-tight">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function About() {
  return (
    <Section id="about" eyebrow="About" title={about.title}>
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
        <div className="space-y-4">
          {about.principles.map((principle, i) => (
            <div key={principle.title} className="rounded-xl border bg-card p-5">
              <p className="font-mono text-xs text-primary">0{i + 1}</p>
              <h3 className="mt-2 font-semibold">{principle.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{principle.body}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function Expertise() {
  return (
    <Section
      id="expertise"
      eyebrow="Core expertise"
      title="End-to-end GenAI architecture, from retrieval to governance."
      intro="Five areas I design across, so the model, the data and the controls around it work as one system."
      className="bg-muted/30"
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {expertise.map((area) => {
          const Icon = expertiseIcons[area.id];
          return (
            <Card key={area.id} className="transition-colors hover:ring-primary/40">
              <CardHeader>
                <span className="mb-2 grid size-10 place-items-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </span>
                <CardTitle className="text-lg">{area.title}</CardTitle>
                <CardDescription className="text-pretty">{area.summary}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  {area.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                      {point}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}

export function Solutions() {
  return (
    <Section
      id="solutions"
      eyebrow="Featured solutions"
      title="Architectures built for production, not the demo."
      intro="Selected systems and reference architectures, each framed by the problem, the design decisions and what changed."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {caseStudies.map((study) => (
          <Card key={study.title} className="gap-5">
            <CardHeader>
              <p className="text-xs font-medium uppercase tracking-wider text-primary">{study.context}</p>
              <CardTitle className="text-xl">{study.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col gap-5 text-sm">
              <div>
                <h4 className="font-medium">Challenge</h4>
                <p className="mt-1 text-muted-foreground">{study.problem}</p>
              </div>
              <div>
                <h4 className="font-medium">Approach</h4>
                <ul className="mt-1.5 space-y-1.5 text-muted-foreground">
                  {study.approach.map((step) => (
                    <li key={step} className="flex gap-2">
                      <ArrowRight className="mt-0.5 size-3.5 shrink-0 text-primary" />
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg border border-primary/20 bg-primary/5 p-3">
                <h4 className="font-medium">Outcome</h4>
                <p className="mt-1 text-muted-foreground">{study.outcome}</p>
              </div>
              <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-1">
                <div className="flex flex-wrap gap-1.5">
                  {study.stack.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                {study.link && (
                  <a
                    href={study.link.href}
                    {...external}
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                  >
                    {study.link.label} <ArrowUpRight className="size-4" />
                  </a>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="The journey"
      title="Five chapters, one thread: data trustworthy enough to act on."
      intro="Not a job list. Each chapter is the problem I was solving, what it taught me, and the proof. Pick a chapter."
      className="bg-muted/30"
    >
      <Journey chapters={journey} />

      <div className="mt-16">
        <h3 className="flex items-center gap-2 font-semibold">
          <PenLine className="size-4 text-primary" /> Recent writing
        </h3>
        <ul className="mt-4 grid gap-3 md:grid-cols-3">
          {writing.map((post) => (
            <li key={post.title}>
              <a
                href={post.href}
                {...external}
                className="group block h-full rounded-xl border bg-card p-4 transition-colors hover:border-primary/50"
              >
                <p className="text-xs text-muted-foreground">{post.date} · Medium</p>
                <p className="mt-1 font-medium leading-snug group-hover:text-primary">{post.title}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills & certification" title="The toolkit behind the architecture.">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="grid gap-6 sm:grid-cols-2">
          {skills.map((group) => (
            <div key={group.group}>
              <h3 className="text-sm font-semibold">{group.group}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <Badge key={skill} variant="outline" className="h-7 px-2.5">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-8">
          <div>
            <h3 className="text-sm font-semibold">Certification & recognition</h3>
            <ul className="mt-3 grid gap-3 sm:grid-cols-2">
              {[...certifications, ...awards].map((item, i) => {
                const Icon = i < certifications.length ? BadgeCheck : Trophy;
                return (
                  <li key={item.name} className="flex gap-3 rounded-xl border bg-card p-4">
                    <Icon className="mt-0.5 size-5 shrink-0 text-primary" />
                    <div>
                      <p className="text-sm font-medium leading-snug">{item.name}</p>
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        {item.issuer} · {item.date}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl border bg-card px-6 py-14 text-center sm:px-12">
          <div aria-hidden className="absolute -bottom-32 left-1/2 h-64 w-[700px] -translate-x-1/2 rounded-full bg-primary/20 blur-[100px]" />
          <div className="relative">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">Contact</p>
            <h2 id="contact-title" className="mx-auto mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              {contact.title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground text-pretty">{contact.body}</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a href={person.links.linkedin} {...external} className={cn(buttonVariants({ size: "lg" }), "h-11 px-6")}>
                <LinkedInIcon className="size-4" /> Message on LinkedIn
              </a>
              <a href={`mailto:${person.email}`} className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-11 px-6")}>
                <Mail /> {person.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:px-8">
        <p>
          {person.name} · {person.role}
        </p>
        <div className="flex items-center gap-4">
          <a href={person.links.linkedin} {...external} aria-label="LinkedIn" className="hover:text-foreground">
            <LinkedInIcon className="size-4" />
          </a>
          <a href={person.links.github} {...external} aria-label="GitHub" className="hover:text-foreground">
            <GitHubIcon className="size-4" />
          </a>
          <a href={person.links.medium} {...external} className="hover:text-foreground">
            Medium
          </a>
        </div>
      </div>
    </footer>
  );
}
