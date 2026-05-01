import { ArrowRight, Play } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { profile } from "../../data/content";
import { SectionIntro } from "../components/SectionIntro";
import { VideoEmbed } from "../components/VideoEmbed";

export default function HomePage() {
  const [showreelOpen, setShowreelOpen] = useState(false);
  const [heroVideoAvailable, setHeroVideoAvailable] = useState(
    Boolean(profile.heroVideoSrc),
  );

  const heroPoster = useMemo(
    () => profile.heroPosterSrc ?? profile.portraitImages[0]?.src,
    [],
  );

  useEffect(() => {
    if (showreelOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
    document.body.style.overflow = "";
  }, [showreelOpen]);

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowreelOpen(false);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      <Helmet>
        <title>{`${profile.stageName} | Portfolio`}</title>
      </Helmet>

      <section className="mx-auto w-full max-w-6xl px-4 pb-6 pt-6 sm:px-6 sm:pt-10">
        <div className="relative overflow-hidden rounded-[32px] border border-white/30 shadow-soft">
          <div className="relative min-h-[420px] overflow-hidden">
            {profile.heroVideoSrc && heroVideoAvailable ? (
              <video
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster={heroPoster}
                onError={() => setHeroVideoAvailable(false)}
              >
                <source src={profile.heroVideoSrc} type="video/mp4" />
              </video>
            ) : heroPoster ? (
              <img
                src={heroPoster}
                alt={`Ritratto di ${profile.stageName}`}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
            ) : null}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-peach-200">
                Attrice - Portfolio 2026
              </p>
              <h1 className="title-display mt-2 text-4xl font-semibold text-white sm:text-5xl">
                {profile.stageName}
              </h1>
              <p className="mt-3 max-w-xl text-sm text-white/80 sm:text-base">
                {profile.intro}
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setShowreelOpen(true)}
                  className="inline-flex items-center gap-2 rounded-full bg-peach-400 px-5 py-2 text-sm font-bold text-black transition hover:scale-[1.02]"
                >
                  <Play size={16} />
                  Guarda showreel
                </button>
                <Link
                  to="/contatti"
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-2 text-sm font-semibold text-white/90 transition hover:bg-white/10"
                >
                  Contattami
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-16">
          <SectionIntro
            eyebrow="Portfolio"
            title="Identita artistica"
            description="Un profilo elegante e contemporaneo, progettato per casting director e agenzie che cercano personalita autentiche."
          />
        </div>

        <div className="grid gap-5">
          <motion.article
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            className="section-shell shadow-soft"
          >
            <h2 className="title-display text-3xl font-semibold">
              Introduzione
            </h2>
            <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-[color:var(--text-muted)]">
              {profile.bio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {profile.quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="group rounded-2xl border border-white/35 bg-white/20 p-4 transition hover:-translate-y-0.5 hover:bg-white/35 dark:border-white/15 dark:bg-white/10 dark:hover:bg-white/20"
                >
                  <p className="text-sm font-bold">{link.label}</p>
                  <p className="mt-1 text-xs text-[color:var(--text-muted)]">
                    {link.description}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-petrol-700 dark:text-peach-100">
                    Apri
                    <ArrowRight size={13} />
                  </span>
                </Link>
              ))}
            </div>
          </motion.article>
        </div>

        <div className="mt-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-petrol-600 dark:text-petrol-300">
            Highlights
          </p>
          <div className="mt-4 grid gap-4 lg:grid-cols-4">
            {profile.highlights.map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35 }}
                className="rounded-2xl border border-white/35 bg-white/20 p-4 shadow-soft dark:border-white/15 dark:bg-petrol-900/60 dark:text-white"
              >
                <h3 className="text-sm font-bold">{item.title}</h3>
                <p className="mt-2 text-xs text-[color:var(--text-muted)] dark:text-white/70">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {profile.portraitImages.map((image, index) => (
            <motion.figure
              key={image.src}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="overflow-hidden rounded-2xl border border-white/35 bg-gradient-to-br from-base-100 to-peach-100/70 shadow-soft dark:border-white/15 dark:from-petrol-900/70 dark:to-petrol-800/40"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-72 w-full object-cover"
                style={{
                  objectPosition:
                    index === 0
                      ? "50% 18%"
                      : index === 1
                        ? "50% 40%"
                        : "50% 65%",
                }}
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
              <figcaption className="border-t border-white/20 bg-white/60 px-4 py-3 text-sm text-[color:var(--text-muted)] dark:border-white/10 dark:bg-petrol-900/70 dark:text-white/80">
                {image.alt}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {showreelOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur"
            onClick={() => setShowreelOpen(false)}
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
                    Showreel
                  </p>
                  <h2 className="title-display text-3xl font-semibold">
                    {profile.stageName}
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={() => setShowreelOpen(false)}
                  className="rounded-full border border-white/40 px-4 py-2 text-sm font-semibold"
                >
                  Chiudi
                </button>
              </div>
              <div className="mt-4">
                <VideoEmbed
                  youtubeVideoId={profile.showreelVideoId}
                  title="Showreel principale"
                />
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
