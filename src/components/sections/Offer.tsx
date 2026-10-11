import Link from "next/link";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

export function Offer() {
  return (
    <section id="oferta" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title="Rolki dla Twojej firmy" />

        <Reveal className="mt-8 max-w-2xl space-y-5 text-lg text-ink/90">
          <p>
            Piszę scenariusz, nagrywam i montuję — od pomysłu do gotowej rolki.
            Nie musisz szukać osobno scenarzysty, operatora i montażysty ani
            niczego koordynować. Dostajesz jeden efekt do akceptacji.
          </p>
          <p>
            Robię rolki pod to, co chcesz osiągnąć: reklamy, social media firmy,
            krótkie formy na Instagram, TikTok i YouTube Shorts. Zaczynamy od
            krótkiej rozmowy o Twojej firmie, potem wysyłam scenariusze.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <Link
            href="/zacznijmy"
            className="inline-block rounded-full bg-accent px-8 py-4 text-base font-bold text-accent-ink transition-opacity hover:opacity-90"
          >
            ZACZNIJMY WSPÓŁPRACĘ
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
