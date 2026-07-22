"use client";

import { Play } from "lucide-react";

export function VerticalMediaCard({
  title,
  category,
  embedUrl,
}: {
  title: string;
  category: string;
  embedUrl?: string;
}) {
  return (
    <div className="group relative aspect-[9/16] overflow-hidden rounded-2xl border border-white/10 bg-bg-soft">
      {embedUrl ? (
        <iframe
          src={embedUrl}
          className="h-full w-full"
          allow="autoplay; fullscreen"
          allowFullScreen
          title={title}
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-3 border border-dashed border-white/15 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-ink transition-transform group-hover:scale-110">
            <Play size={20} fill="currentColor" />
          </div>
          <p className="text-sm font-semibold">{title}</p>
          <p className="text-xs text-muted">{category}</p>
        </div>
      )}
    </div>
  );
}
