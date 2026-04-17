type VideoEmbedProps = {
  youtubeVideoId: string;
  title: string;
};

export function VideoEmbed({ youtubeVideoId, title }: VideoEmbedProps) {
  const src = `https://www.youtube-nocookie.com/embed/${youtubeVideoId}?modestbranding=1&rel=0&controls=1`;

  return (
    <div className="overflow-hidden rounded-2xl border border-white/25 shadow-soft">
      <div className="relative w-full overflow-hidden pb-[56.25%]">
        <iframe
          className="absolute left-0 top-0 h-full w-full"
          src={src}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </div>
  );
}
