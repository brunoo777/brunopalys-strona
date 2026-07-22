type Video = {
  embedUrl: string;
  label: string;
};

export function YoutubeGrid({ videos }: { videos: Video[] }) {
  const cols =
    videos.length >= 3
      ? "sm:grid-cols-3"
      : videos.length === 2
        ? "sm:grid-cols-2"
        : "sm:grid-cols-1";

  return (
    <div className={`grid grid-cols-1 gap-6 ${cols}`}>
      {videos.map((video) => (
        <div
          key={video.embedUrl}
          className="overflow-hidden rounded-2xl border border-white/10 bg-bg-soft shadow-lg"
        >
          <div className="aspect-video">
            <iframe
              src={video.embedUrl}
              title={video.label}
              className="h-full w-full"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          </div>
        </div>
      ))}
    </div>
  );
}
