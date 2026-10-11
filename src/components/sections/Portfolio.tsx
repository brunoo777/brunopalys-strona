"use client";

import Link from "next/link";
import { Reveal } from "../ui/Reveal";
import { VerticalMediaCard } from "../ui/VerticalMediaCard";
import { DoodleArrow } from "../ui/Doodles";
import { PROJECTS } from "@/lib/projects";

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="relative flex flex-col items-start gap-3 text-left">
          <div className="relative">
            {/* Zmieniono -top-16 na -top-24 (możesz też użyć -top-28 jeśli chcesz jeszcze wyżej) */}
            <div className="pointer-events-none absolute -top-24 right-0 hidden -rotate-6 items-end gap-2 sm:flex">
              
              
              <span className="max-w-[9rem] text-right text-base font-semibold leading-tight text-accent">
                zobacz moje wszystkie prace
              </span>
              <DoodleArrow
                className="h-16 w-16 shrink-0 text-accent"
                style={{ transform: "scaleX(-1) rotate(100deg)" }}
              />
            </div>

            <h2 className="text-display text-4xl leading-[0.95] sm:text-5xl md:text-6xl">
              Kreacje reklamowe i{" "}
              <Link
                href="/portfolio"
                className="text-accent underline decoration-double decoration-4 underline-offset-8 transition-opacity hover:opacity-80"
              >
                NIE TYLKO
              </Link>
            </h2>
          </div>
        </Reveal>

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