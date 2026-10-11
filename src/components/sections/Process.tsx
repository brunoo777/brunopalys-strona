import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

const STEPS = [
  {
    title: "Rozmowa",
    description:
      "Mówisz mi, co sprzedajesz i do kogo chcesz dotrzeć. Ustalamy cel rolek i ile ich potrzebujesz.",
  },
  {
    title: "Scenariusz",
    description:
      "Piszę scenariusze z mocnym początkiem, dopasowane do Twojej firmy. Dostajesz je do akceptacji, zanim cokolwiek nagram.",
  },
  {
    title: "Nagrywanie",
    description: "Nagrywam materiał na miejscu, własnym sprzętem.",
  },
  {
    title: "Montaż",
    description:
      "Montuję rolki pod reklamę i social media — tempo, napisy, dźwięk, bez efekciarstwa.",
  },
  {
    title: "Poprawki i gotowe pliki",
    description:
      "Wysyłam rolki do akceptacji, wprowadzam poprawki i oddaję gotowe pliki do publikacji.",
  },
];

export function Process() {
  return (
    <section id="proces" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title="Jak to wygląda" />

        <Reveal className="mt-12">
          <ol className="border-t border-white/10">
            {STEPS.map((step) => (
              <li
                key={step.title}
                className="grid gap-2 border-b border-white/10 py-6 md:grid-cols-[16rem_1fr] md:gap-8"
              >
                <h3 className="text-lg font-bold">{step.title}</h3>
                <p className="text-muted">{step.description}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
