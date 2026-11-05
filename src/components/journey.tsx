"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import type { JourneyChapter } from "@/content/profile";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Journey({ chapters }: { chapters: JourneyChapter[] }) {
  const [active, setActive] = useState(chapters.length - 1);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const list = useRef<HTMLDivElement>(null);
  const chapter = chapters[active];

  // Only scroll the chip strip sideways (mobile); scrollIntoView would also move the page.
  function revealTab(index: number, behavior: ScrollBehavior) {
    const strip = list.current;
    const tab = tabs.current[index];
    if (!strip || !tab || strip.scrollWidth <= strip.clientWidth) return;
    strip.scrollTo({ left: tab.offsetLeft - (strip.clientWidth - tab.offsetWidth) / 2, behavior });
  }

  useEffect(() => {
    revealTab(active, "instant");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function select(index: number, focus = false) {
    const next = (index + chapters.length) % chapters.length;
    setActive(next);
    if (focus) tabs.current[next]?.focus({ preventScroll: true });
    revealTab(next, "smooth");
  }

  function onKeyDown(event: KeyboardEvent) {
    const keys: Record<string, number> = {
      ArrowRight: active + 1,
      ArrowDown: active + 1,
      ArrowLeft: active - 1,
      ArrowUp: active - 1,
      Home: 0,
      End: chapters.length - 1,
    };
    if (event.key in keys) {
      event.preventDefault();
      select(keys[event.key], true);
    }
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-12">
      <div
        ref={list}
        role="tablist"
        aria-label="Career chapters"
        aria-orientation="vertical"
        onKeyDown={onKeyDown}
        className="relative -mx-5 flex snap-x gap-2 overflow-x-auto px-5 pb-2 [scrollbar-width:none] lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0"
      >
        {chapters.map((c, i) => {
          const selected = i === active;
          return (
            <button
              key={c.id}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              role="tab"
              id={`tab-${c.id}`}
              aria-selected={selected}
              aria-controls="journey-panel"
              tabIndex={selected ? 0 : -1}
              onClick={() => select(i)}
              className={cn(
                "group relative flex min-w-[220px] snap-start items-start gap-3 rounded-xl border p-4 text-left transition-all outline-none focus-visible:ring-2 focus-visible:ring-ring lg:min-w-0",
                selected
                  ? "border-primary/50 bg-card shadow-lg shadow-primary/5"
                  : "border-transparent hover:border-border hover:bg-card/60",
              )}
            >
              <span
                className={cn(
                  "font-mono text-xs tabular-nums transition-colors",
                  selected ? "text-primary" : "text-muted-foreground",
                )}
              >
                0{i + 1}
              </span>
              <span className="flex-1">
                <span className="block font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                  {c.period}
                </span>
                <span className={cn("mt-0.5 block font-medium leading-snug", !selected && "text-muted-foreground group-hover:text-foreground")}>
                  {c.theme}
                </span>
              </span>
              {selected && (
                <span aria-hidden className="absolute inset-y-3 -left-px hidden w-0.5 rounded-full bg-primary lg:block" />
              )}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id="journey-panel"
        aria-labelledby={`tab-${chapter.id}`}
        className="relative overflow-hidden rounded-2xl border bg-card p-6 sm:p-8"
      >
        <div aria-hidden className="absolute -right-24 -top-24 size-64 rounded-full bg-primary/10 blur-3xl" />
        <div key={chapter.id} className="relative animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="font-mono text-xs uppercase tracking-wider text-primary">
              Chapter 0{active + 1} · {chapter.period}
            </p>
            <div className="flex gap-1">
              <Button variant="outline" size="icon-sm" onClick={() => select(active - 1)} aria-label="Previous chapter">
                <ArrowLeft />
              </Button>
              <Button variant="outline" size="icon-sm" onClick={() => select(active + 1)} aria-label="Next chapter">
                <ArrowRight />
              </Button>
            </div>
          </div>

          <h3 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">{chapter.theme}</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {chapter.role} · <span className="text-foreground">{chapter.org}</span>
          </p>

          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">{chapter.story}</p>

          <figure className="mt-6 flex gap-3 rounded-xl border border-primary/20 bg-primary/5 p-4">
            <Quote className="mt-0.5 size-4 shrink-0 text-primary" />
            <blockquote>
              <p className="text-xs font-medium uppercase tracking-wider text-primary">What it taught me</p>
              <p className="mt-1 font-medium leading-snug text-pretty">{chapter.lesson}</p>
            </blockquote>
          </figure>

          <dl className="mt-6 grid grid-cols-2 gap-4">
            {chapter.proof.map((p) => (
              <div key={p.label} className="rounded-xl border bg-background/50 p-4">
                <dt className="sr-only">{p.label}</dt>
                <dd className="text-2xl font-semibold tracking-tight sm:text-3xl">{p.value}</dd>
                <dd className="mt-1 text-xs text-muted-foreground">{p.label}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-6 flex flex-wrap gap-1.5">
            {chapter.tools.map((t) => (
              <Badge key={t} variant="secondary">
                {t}
              </Badge>
            ))}
          </div>
        </div>

        <div aria-hidden className="relative mt-8 flex gap-1.5">
          {chapters.map((c, i) => (
            <span
              key={c.id}
              className={cn("h-1 flex-1 rounded-full transition-colors duration-300", i <= active ? "bg-primary" : "bg-border")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
