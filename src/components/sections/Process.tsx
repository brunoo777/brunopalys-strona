"use client";

import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

const STEPS = [
  {
    title: "Przesyłasz brief i materiały",
    description:
      "Wysyłasz cel kampanii oraz surowe nagrania — bez zbędnych formalności.",
  },
  {
    title: "Analizuję projekt",
    description:
      "Jeśli widzę możliwość poprawy, proponuję lepszy hook, tempo albo montaż ratujący słabszy materiał.",
  },
  {
    title: "Montuję kreacje",
    description:
      "Zgodnie z celem kampanii i charakterem marki — pod reklamę, nie pod efekciarstwo.",
  },
  {
    title: "Wysyłam do akceptacji",
    description: "Otrzymujesz gotowe kreacje do przejrzenia i komentarzy.",
  },
  {
    title: "Wprowadzam poprawki",
    description:
      "Nielimitowana liczba poprawek, gwarantuję pożądany efekt końcowy.",
  },
  {
    title: "Otrzymujesz gotowe pliki",
    description: "Gotowe do wysłania klientowi lub uruchomienia w kampanii.",
  },
];

export function Process() {
  return (
    <section id="proces" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Jak wygląda współpraca" title="jasny proces" />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={(i % 3) * 0.08}>
              <div className="h-full rounded-2xl border border-white/10 bg-bg-soft p-6">
                <span className="text-display text-3xl text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
