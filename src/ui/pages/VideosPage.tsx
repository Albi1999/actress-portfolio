import { Helmet } from "react-helmet-async";
import { profile, videos } from "../../data/content";
import { SectionIntro } from "../components/SectionIntro";
import { VideoEmbed } from "../components/VideoEmbed";

export default function VideosPage() {
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
            <article key={video.id} className="section-shell shadow-soft">
              <h2 className="title-display text-3xl font-semibold">
                {video.title}
              </h2>
              <p className="mt-2 text-sm text-[color:var(--text-muted)]">
                {video.description}
              </p>
              <div className="mt-4">
                <VideoEmbed
                  youtubeVideoId={video.youtubeVideoId}
                  title={video.title}
                />
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
