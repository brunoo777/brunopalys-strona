import { TiktokIcon } from "../ui/BrandIcons";
import { Counter } from "../ui/Counter";

export function TiktokCard({ handle, url }: { handle: string; url: string }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-bg-soft p-6 transition-colors hover:border-accent/50"
      >
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-accent text-accent-ink">
          <TiktokIcon size={26} />
        </div>
        <div>
          <p className="font-bold">{handle}</p>
          <p className="text-sm text-muted">
            Tutoriale, kulisy montażu i viralowe eksperymenty
          </p>
        </div>
        <span className="ml-auto shrink-0 text-sm font-semibold text-accent opacity-0 transition-opacity group-hover:opacity-100">
          Zobacz →
        </span>
      </a>

      <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-bg-soft p-6">
        <div className="text-display text-3xl text-accent">
          <Counter to={600} suffix="+" />
        </div>
        <p className="text-sm text-muted">osób w społeczności na Discordzie</p>
      </div>
    </div>
  );
}
