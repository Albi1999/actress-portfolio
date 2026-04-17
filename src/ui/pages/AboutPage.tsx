import { Helmet } from "react-helmet-async";
import { cvEntries, profile } from "../../data/content";
import { SectionIntro } from "../components/SectionIntro";

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>{`Profilo | ${profile.stageName}`}</title>
      </Helmet>

      <section className="mx-auto w-full max-w-6xl px-4 pb-6 pt-6 sm:px-6 sm:pt-10">
        <SectionIntro
          eyebrow="Profilo"
          title="Bio e curriculum"
          description="Competenze, formazione e percorso artistico organizzati in un formato chiaro e aggiornabile."
        />

        <div className="grid gap-5 lg:grid-cols-[1.1fr,0.9fr]">
          <article className="section-shell shadow-soft">
            <h2 className="title-display text-3xl font-semibold">
              Informazioni personali
            </h2>
            <dl className="mt-5 grid gap-4 text-sm sm:grid-cols-2">
              <div>
                <dt className="font-bold">Nome artistico</dt>
                <dd className="text-[color:var(--text-muted)]">
                  {profile.stageName}
                </dd>
              </div>
              <div>
                <dt className="font-bold">Nome completo</dt>
                <dd className="text-[color:var(--text-muted)]">
                  {profile.legalName}
                </dd>
              </div>
              <div>
                <dt className="font-bold">Base</dt>
                <dd className="text-[color:var(--text-muted)]">
                  {profile.city}
                </dd>
              </div>
              <div>
                <dt className="font-bold">Lingue</dt>
                <dd className="text-[color:var(--text-muted)]">
                  {profile.languages.join(" • ")}
                </dd>
              </div>
            </dl>

            <h3 className="mt-8 text-lg font-bold">Competenze</h3>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {profile.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-xl border border-white/30 bg-white/20 px-3 py-2 text-sm"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </article>

          <article className="section-shell shadow-soft">
            <h2 className="title-display text-3xl font-semibold">
              Timeline professionale
            </h2>
            <ol className="mt-5 space-y-4">
              {cvEntries.map((entry) => (
                <li
                  key={`${entry.year}-${entry.title}`}
                  className="rounded-2xl border border-white/35 bg-white/20 p-4"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-petrol-600 dark:text-petrol-300">
                    {entry.year}
                  </p>
                  <p className="mt-1 text-lg font-bold">{entry.title}</p>
                  <p className="text-sm font-semibold text-[color:var(--text-muted)]">
                    {entry.subtitle}
                  </p>
                  <p className="mt-2 text-sm text-[color:var(--text-muted)]">
                    {entry.details}
                  </p>
                </li>
              ))}
            </ol>
          </article>
        </div>
      </section>
    </>
  );
}
