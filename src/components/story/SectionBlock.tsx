import type { ReactNode } from "react";
import { Reveal } from "../ui/Reveal";

export function SectionBlock({
  number,
  title,
  story,
  children,
}: {
  number: string;
  title: string;
  story: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-t border-white/10 px-6 py-16 sm:py-20">
      <Reveal className="mx-auto max-w-4xl">
        <div className="flex items-baseline gap-4">
          <span className="text-display text-4xl text-accent sm:text-5xl">
            {number}
          </span>
          <h2 className="text-display text-2xl leading-tight sm:text-4xl">
            {title}
          </h2>
        </div>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-ink/90 sm:text-base">
          {story}
        </p>
        {children && <div className="mt-8">{children}</div>}
      </Reveal>
    </section>
  );
}
