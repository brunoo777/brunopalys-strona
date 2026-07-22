"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

const QUESTIONS = [
  {
    q: "Co jeśli moja praca Ci się nie spodoba?",
    a: "Biorę te ryzyko na siebie. NIE BIORĘ żadnych przedpłat ani zaliczek, bo jestem pewien swoich umiejętności, a jeśli moja praca Ci się nie spodoba nie poniesiesz żadnych konsekwencji.",
  },
  {
    q: "Jak wyglądają formalności?",
    a: "Jestem elastyczny i dostosowuję się do Twoich potrzeb. Najchętniej rozliczam się na podstawie faktury (B2B), ale możemy też podpisać umowę o dzieło lub umowę zlecenie – zależnie od tego, co jest dla Ciebie wygodniejsze.",
  },
  {
    q: "Co jeśli mam wadliwy materiał?",
    a: "Bez obaw, w montażu da się uratować naprawdę wiele! Nie takie rzeczy już składałem i wiem, jak zamaskować drobne potknięcia. Jeśli jednak materiał będzie na tyle słaby, że ucierpiałaby na tym jakość całego filmu, od razu dam Ci znać.",
  },
  {
    q: "Co jak oprócz montażysty potrzebuję osoby, która nagra materiał?",
    a: "Żaden problem! Dysponuję własnym, podstawowym sprzętem i chętnie pomogę Ci z nagraniami na miejscu. Jednak pobiorę za to dodatkową opłatę."
  }
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading eyebrow="FAQ" title="ty pytasz, ja odpowiadam" align="center" />

        <div className="mt-14 flex flex-col gap-3">
          {QUESTIONS.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={i * 0.05}>
                <div className="rounded-2xl border border-white/10 bg-bg-soft">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-semibold">{item.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-accent transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-5 text-sm leading-relaxed text-muted">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
