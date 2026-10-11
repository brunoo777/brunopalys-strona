import { Reveal } from "./Reveal";

export function SectionHeading({
  title,
  align = "left",
}: {
  title: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={align === "center" ? "text-center" : "text-left"}>
      <h2 className="text-display text-4xl leading-[0.95] sm:text-5xl md:text-6xl">
        {title}
      </h2>
    </Reveal>
  );
}
