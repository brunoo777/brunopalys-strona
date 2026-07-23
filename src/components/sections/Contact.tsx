"use client";

import { Mail } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { DoodleArrow } from "../ui/Doodles";
import { InstagramIcon, FacebookIcon } from "../ui/BrandIcons";

export function Contact() {
  return (
    <section id="kontakt" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <SectionHeading
          eyebrow="Kontakt"
          title="Jeśli masz jakieś pytania"
          align="center"
        />

        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-lg text-muted">
            Skontaktuj się ze mną, najlepiej mailowo, a ja wszystko Ci wyjaśnię - odezwę się w ciągu 24h
          </p>
        </Reveal>

        <Reveal delay={0.15} className="relative mt-10">
          <DoodleArrow className="absolute -top-10 left-1/2 hidden h-16 w-16 -translate-x-32 -rotate-45 text-accent sm:block" />
          <a
            href="mailto:ogarniamrolki@brunopalys.pl"
            className="inline-flex max-w-full items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-bold break-all text-accent-ink transition-transform hover:scale-105 sm:gap-3 sm:px-8 sm:py-4 sm:text-lg"
          >
            <Mail size={18} className="shrink-0" />
            ogarniamrolki@brunopalys.pl
          </a>
        </Reveal>

        <Reveal delay={0.25} className="mt-10 flex items-center justify-center gap-4">
          <a
            href="https://www.instagram.com/ogarniamrolki/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-ink transition-colors hover:bg-white/5"
          >
            <InstagramIcon size={20} />
          </a>
          <a
            href="#"
            aria-label="Facebook"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-ink transition-colors hover:bg-white/5"
          >
            <FacebookIcon size={20} />
          </a>
        </Reveal>
      </div>

      <footer className="mx-auto mt-24 max-w-6xl border-t border-white/10 px-6 pt-8">
        <div className="flex flex-col items-center justify-between gap-4 text-xs text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} Bruno Pałys.</p>
          <p>brunopalys.pl</p>
        </div>
      </footer>
    </section>
  );
}
