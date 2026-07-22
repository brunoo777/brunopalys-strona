import type { Metadata } from "next";
import Link from "next/link";
import { LeadForm } from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Zacznijmy współpracę — Bruno Pałys",
  description:
    "Zostaw swoje dane, a odezwę się w ciągu 24h z propozycją współpracy przy montażu kreacji do Meta Ads.",
};

export default function ZacznijmyPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-24">
      <div className="glow-blob pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-violet/40" />
      <div className="glow-blob pointer-events-none absolute top-20 -right-32 h-96 w-96 rounded-full bg-blue/30" />

      <Link
        href="/"
        className="absolute left-6 top-6 text-sm font-semibold text-muted transition-colors hover:text-ink sm:left-10 sm:top-10"
      >
        ← Wróć na stronę główną
      </Link>

      <div className="relative w-full max-w-lg">
        <div className="text-center">
          <span className="inline-flex items-center rounded-full bg-accent px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent-ink">
            Zacznijmy współpracę
          </span>
          <h1 className="text-display mt-6 text-4xl leading-[0.95] sm:text-5xl">
            Zostaw kontakt,
            <br />
            odezwę się w 24h
          </h1>
          <p className="mx-auto mt-4 max-w-sm text-muted">
            Podaj kilka informacji, żebym mógł się z Tobą skontaktować i
            ustalić szczegóły współpracy.
          </p>
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-bg-soft/60 p-6 backdrop-blur sm:p-8">
          <LeadForm />
        </div>
      </div>
    </main>
  );
}
