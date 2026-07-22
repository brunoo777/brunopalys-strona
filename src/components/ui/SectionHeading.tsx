import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal
      className={`flex flex-col gap-3 ${
        align === "center" ? "items-center text-center" : "items-start text-left"
      }`}
    >
      <span className="inline-flex items-center rounded-full bg-accent px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent-ink">
        {eyebrow}
      </span>
      <h2 className="text-display text-4xl leading-[0.95] sm:text-5xl md:text-6xl">
        {title}
      </h2>
    </Reveal>
  );
}
