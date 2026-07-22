"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { DoodleArrow } from "../ui/Doodles";

const BENEFITS = [
  "Święty spokój. Oddajesz projekt w ręce specjalisty i masz pewność, że kreacje dowiozą jakością, a konkurencja zostanie daleko w tyle.",
  "Wizerunek marki. Profesjonalnie wyglądające kreacje budują wizerunek marki premium w oczach twoich klientów",
  "Odzyskany czas zespołu, bo nie musi inwestować czasu w montaż, zostawiając to specjaliście.",
  "Ekspresowy start kampanii. Gotowe, dopracowane materiały video lądują u Ciebie w ciągu 24–48 godzin."
];

export function Offer() {
  return (
    <section id="oferta" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Oferta" title="Co dostajesz?" />

        <p className="mt-6 max-w-xl text-muted">to nie tylko montaż, ale również:</p>
        <ul className="mt-4 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
          {BENEFITS.map((benefit) => (
            <li key={benefit} className="flex items-start gap-2.5 text-sm">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span className="text-ink/90">{benefit}</span>
            </li>
          ))}
        </ul>

        <Reveal delay={0.2} className="mt-16 flex justify-center">
          <div className="relative inline-flex">
            <DoodleArrow
              className="absolute -bottom-16 left-4 hidden h-14 w-14 text-accent sm:block"
              style={{ transform: "scaleX(-1) rotate(-55deg)" }}
            />
            <DoodleArrow
              className="absolute -bottom-16 right-4 hidden h-14 w-14 text-accent sm:block"
              style={{ transform: "rotate(-55deg)" }}
            />

            <motion.a
              href="/zacznijmy"
              animate={{ scale: [1, 1.06, 1] }}
              transition={{
                duration: 0.7,
                repeat: Infinity,
                repeatDelay: 2.2,
                ease: "easeInOut",
              }}
              className="rounded-full bg-accent px-10 py-5 text-base font-extrabold text-accent-ink shadow-[0_0_60px_-12px] shadow-accent/60 transition-transform hover:scale-105 sm:text-lg"
            >
              ZACZNIJMY WSPÓŁPRACĘ
            </motion.a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}