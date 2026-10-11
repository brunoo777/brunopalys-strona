"use client";

import Image from "next/image";
import { MessageCircle, Play, Quote } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

type Testimonial =
  | { type: "chat"; src: string; width: number; height: number }
  | { type: "video"; name: string; role: string }
  | { type: "quote"; name: string; role: string; quote: string };

const TESTIMONIALS: Testimonial[] = [
  {
    type: "chat",
    src: "/images/testimonials/opinia-3.png",
    width: 914,
    height: 266,
  },
  {
    type: "chat",
    src: "/images/testimonials/opinia-2.png",
    width: 980,
    height: 228,
  },
  {
    type: "chat",
    src: "/images/testimonials/opinia-1.png",
    width: 952,
    height: 300,
  },
];

export function Testimonials() {
  return (
    <section id="opinie" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title="Co o mnie mówią" />

        <div className="mt-14 columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={i} delay={(i % 3) * 0.08} className="break-inside-avoid">
              {t.type === "chat" && (
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-bg-soft shadow-lg">
                  <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                    <MessageCircle className="h-4 w-4 text-accent" />
                    <span className="text-xs font-semibold uppercase tracking-wide text-muted">
                      Wiadomość od klienta
                    </span>
                  </div>
                  <Image
                    src={t.src}
                    alt="Wiadomość z opinią klienta"
                    width={t.width}
                    height={t.height}
                    className="h-auto w-full"
                  />
                </div>
              )}

              {t.type === "video" && (
                <div className="flex aspect-[9/16] flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-white/15 bg-bg-soft text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-ink">
                    <Play size={20} fill="currentColor" />
                  </div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted">{t.role}</p>
                </div>
              )}

              {t.type === "quote" && (
                <div className="rounded-2xl border border-white/10 bg-bg-soft p-6">
                  <Quote className="h-6 w-6 text-accent" />
                  <p className="mt-4 text-sm leading-relaxed text-ink/90">
                    {t.quote}
                  </p>
                  <div className="mt-5">
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted">{t.role}</p>
                  </div>
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
