import { ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { profile } from "../../data/content";
import { SectionIntro } from "../components/SectionIntro";
import { VideoEmbed } from "../components/VideoEmbed";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>{`${profile.stageName} | Portfolio Attrice`}</title>
      </Helmet>

      <section className="mx-auto w-full max-w-6xl px-4 pb-6 pt-6 sm:px-6 sm:pt-10">
        <SectionIntro
          eyebrow="Portfolio"
          title={profile.stageName}
          description={profile.intro}
        />

        <div className="grid gap-5 lg:grid-cols-[1.2fr,1fr]">
          <article className="section-shell shadow-soft">
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
                  className="group rounded-2xl border border-white/35 bg-white/20 p-4 transition hover:-translate-y-0.5 hover:bg-white/35"
                >
                  <p className="text-sm font-bold">{link.label}</p>
                  <p className="mt-1 text-xs text-[color:var(--text-muted)]">
                    {link.description}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-petrol-700 dark:text-petrol-300">
                    Apri
                    <ArrowRight size={13} />
                  </span>
                </Link>
              ))}
            </div>
          </article>

          <aside className="section-shell shadow-soft">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-petrol-600 dark:text-petrol-300">
              Showreel
            </p>
            <h3 className="title-display mt-2 text-3xl font-semibold">
              Video principale
            </h3>
            <p className="mt-3 text-sm text-[color:var(--text-muted)]">
              Visione immediata direttamente sul sito, senza uscire verso
              piattaforme esterne.
            </p>
            <div className="mt-4">
              <VideoEmbed
                youtubeVideoId={profile.showreelVideoId}
                title="Showreel principale"
              />
            </div>
          </aside>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {profile.portraitImages.map((image) => (
            <figure
              key={image.src}
              className="overflow-hidden rounded-2xl border border-white/35 bg-gradient-to-br from-base-100 to-peach-100/70 shadow-soft"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-72 w-full object-cover"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
              <figcaption className="px-4 py-3 text-sm text-[color:var(--text-muted)]">
                {image.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
