import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { profile, videos, type PortfolioVideo } from "../../data/content";
import { SectionIntro } from "../components/SectionIntro";
import { VideoEmbed } from "../components/VideoEmbed";

export default function VideosPage() {
  const [activeVideo, setActiveVideo] = useState<PortfolioVideo | null>(null);

  useEffect(() => {
    if (activeVideo) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
    document.body.style.overflow = "";
  }, [activeVideo]);

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveVideo(null);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      <Helmet>
        <title>{`Video | ${profile.stageName}`}</title>
      </Helmet>

      <section className="mx-auto w-full max-w-6xl px-4 pb-6 pt-6 sm:px-6 sm:pt-10">
        <SectionIntro
          eyebrow="Video"
          title="Showreel e clip"
          description="I video vengono riprodotti all'interno del portfolio per mantenere un'esperienza elegante e continua."
        />
        <div className="grid gap-5 lg:grid-cols-2">
          {videos.map((video) => (
            <button
              key={video.id}
              type="button"
              onClick={() => setActiveVideo(video)}
              className="group section-shell text-left shadow-soft transition hover:-translate-y-1"
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/30">
                <img
                  src={`https://img.youtube.com/vi/${video.youtubeVideoId}/hqdefault.jpg`}
                  alt={`Anteprima video ${video.title}`}
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-petrol-800">
                  Riproduci
                </div>
              </div>
              <h2 className="title-display mt-4 text-3xl font-semibold">
                {video.title}
              </h2>
              <p className="mt-2 text-sm text-[color:var(--text-muted)]">
                {video.description}
              </p>
            </button>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {activeVideo ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur"
            onClick={() => setActiveVideo(null)}
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ scale: 0.96, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.98, y: 10 }}
              transition={{ duration: 0.25 }}
              className="w-full max-w-5xl rounded-[28px] border border-white/20 bg-[color:var(--surface-strong)] p-4 shadow-soft"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-petrol-600 dark:text-petrol-300">
                    Video selezionato
                  </p>
                  <h2 className="title-display text-3xl font-semibold">
                    {activeVideo.title}
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveVideo(null)}
                  className="rounded-full border border-white/40 px-4 py-2 text-sm font-semibold"
                >
                  Chiudi
                </button>
              </div>
              <p className="mt-2 text-sm text-[color:var(--text-muted)]">
                {activeVideo.description}
              </p>
              <div className="mt-4">
                <VideoEmbed
                  youtubeVideoId={activeVideo.youtubeVideoId}
                  title={activeVideo.title}
                />
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
