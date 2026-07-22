"use client";

import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { VerticalMediaCard } from "../ui/VerticalMediaCard";
import { PROJECTS } from "@/lib/projects";

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Moje prace" title="Kreacje reklamowe i NIE TYLKO" />

        <p className="mt-6 max-w-xl text-muted">
          Kilka przykładów kreacji meta i reklam —
          zmontowanych zgodnie z briefem, charakterem marki i celem reklamy.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.title} delay={(i % 3) * 0.08}>
              <VerticalMediaCard {...project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
