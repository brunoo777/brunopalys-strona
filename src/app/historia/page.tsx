import type { Metadata } from "next";
import Link from "next/link";
import { SectionBlock } from "@/components/story/SectionBlock";
import { YoutubeGrid } from "@/components/story/YoutubeGrid";
import { TiktokCard } from "@/components/story/TiktokCard";
import { VerticalMediaCard } from "@/components/ui/VerticalMediaCard";
import { CtaButton } from "@/components/ui/CtaButton";
import { PROJECTS } from "@/lib/projects";

export const metadata: Metadata = {
  title: "O mnie i portfolio — Bruno Pałys",
  description:
    "Od filmów gameplayowych, przez lifestylowe, po własny content i kreacje reklamowe pod Meta Ads — zobacz pełne portfolio Bruno Pałysa.",
};

export default function HistoriaPage() {
  return (
    <main className="flex-1">
      <header className="relative z-10 flex items-center justify-between px-6 py-6 sm:px-10">
        <Link href="/" className="text-display text-xl tracking-wide">
          BRUNO<span className="text-accent">.</span>
        </Link>
        <Link
          href="/"
          className="text-sm font-semibold text-muted transition-colors hover:text-ink"
        >
          ← Wróć na stronę główną
        </Link>
      </header>

      <section className="relative overflow-hidden px-6 pb-16 pt-8 sm:pb-24">
        <div className="glow-blob pointer-events-none absolute -top-20 -left-40 h-96 w-96 rounded-full bg-violet/40" />
        <div className="glow-blob pointer-events-none absolute top-10 -right-32 h-96 w-96 rounded-full bg-blue/30" />

        <div className="relative mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-accent px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent-ink">
            Trochę o mnie
          </span>
          <h1 className="text-display mt-6 text-4xl leading-[0.95] sm:text-6xl">
            Cześć, jestem <span className="text-accent">Bruno</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base text-muted sm:text-lg">
            Od paru dobrych lat zajmuję się social mediami oraz montażem. Do
            tej pory przerobiłem setki dłuższych form — gameplayowych,
            lifestylowych, kreacji reklamowych, a także krótkich formatów.
            Przewiń w dół i zobacz moje prace.
          </p>
        </div>
      </section>

      <SectionBlock
        number="01"
        title="Filmy gameplayowe"
        story="Zaczynałem od grania. W pewnym momencie odkryłem jednak, że zamiast grać, wolę tworzyć — i to zaczęło przynosić pierwsze pieniądze. Współpracowałem z wieloma twórcami filmów z League of Legends, ale najlepiej wspominam współpracę z kanałem Dr Hodo."
      >
        <YoutubeGrid
          videos={[
            {
              embedUrl: "https://www.youtube.com/embed/Wes341udX-s",
              label: "Film gameplayowy 1",
            },
            {
              embedUrl: "https://www.youtube.com/embed/bGPo58YVPVM",
              label: "Film gameplayowy 2",
            },
          ]}
        />
      </SectionBlock>

      <SectionBlock
        number="02"
        title="Filmy lifestylowe"
        story="W dalszej współpracy z kanałem Hodo przerzuciłem się na filmy do szerszej publiki — niedotyczące już gier. Uczyłem się wtedy trzymać napięcie widza i budować mocnego hooka."
      >
        <YoutubeGrid
          videos={[
            {
              embedUrl: "https://www.youtube.com/embed/LnGTmQtWXeM",
              label: "Film lifestylowy 1",
            },
            {
              embedUrl: "https://www.youtube.com/embed/kF9-8d-PR_U",
              label: "Film lifestylowy 2",
            },
            {
              embedUrl: "https://www.youtube.com/embed/EH3W7544E1M",
              label: "Film lifestylowy 3",
            },
          ]}
        />
      </SectionBlock>

      <SectionBlock
        number="03"
        title="Własny content"
        story="W międzyczasie tworzyłem też własne rzeczy — głównie krótkie formy. Robiłem tutoriale z montażu filmów i gier. Udało mi się zebrać większą społeczność i wypuścić parę „virali”."
      >
        <TiktokCard handle="@bruno_editor123" url="https://www.tiktok.com/@bruno_editor123?lang=pl-PL" />
      </SectionBlock>

      <SectionBlock
        number="04"
        title="Profesjonalna short forma"
        story="Dalej skupiłem się na krótkiej formie. Pracowałem z agencją marketingową Simpless oraz z kanałem Technostrefa."
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <VerticalMediaCard key={project.title} {...project} />
          ))}
        </div>
      </SectionBlock>

      <section className="relative overflow-hidden border-t border-white/10 px-6 py-24 text-center sm:py-32">
        <h2 className="text-display text-3xl sm:text-5xl">
          Gotowy, żebym ogarnął <span className="text-accent">Twoje kreacje?</span>
        </h2>
        <p className="mx-auto mt-4 max-w-md text-muted">
          Wyślij brief i surowe materiały — w 24-48h dostajesz gotowe kreacje
          dopracowane do akceptacji.
        </p>

        <div className="mt-12 flex justify-center">
          <CtaButton />
        </div>
      </section>
    </main>
  );
}
