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
                <dt className="font-bold">Nome e cognome</dt>
                <dd className="text-[color:var(--text-muted)]">
                  {profile.legalName}
                </dd>
              </div>
              <div>
                <dt className="font-bold">Domicilio</dt>
                <dd className="text-[color:var(--text-muted)]">
                  {profile.city}
                </dd>
              </div>
              <div>
                <dt className="font-bold">Data di nascita</dt>
                <dd className="text-[color:var(--text-muted)]">
                  {profile.birthDate}
                </dd>
              </div>
              <div>
                <dt className="font-bold">Luogo di nascita</dt>
                <dd className="text-[color:var(--text-muted)]">
                  {profile.birthPlace}
                </dd>
              </div>
              <div>
                <dt className="font-bold">Lingue</dt>
                <dd className="text-[color:var(--text-muted)]">
                  <ul className="list-disc space-y-1 pl-4">
                    {profile.languages.map((language) => (
                      <li key={language}>{language}</li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>

            <h3 className="mt-8 text-lg font-bold">Misure</h3>
            <dl className="mt-3 grid gap-4 text-sm sm:grid-cols-2">
              <div>
                <dt className="font-bold">Altezza</dt>
                <dd className="text-[color:var(--text-muted)]">
                  {profile.heightCm} cm
                </dd>
              </div>
              <div>
                <dt className="font-bold">Peso</dt>
                <dd className="text-[color:var(--text-muted)]">
                  {profile.weightKg} kg
                </dd>
              </div>
              <div>
                <dt className="font-bold">Taglia pantaloni</dt>
                <dd className="text-[color:var(--text-muted)]">
                  {profile.pantsSize}
                </dd>
              </div>
              <div>
                <dt className="font-bold">Taglia giacca</dt>
                <dd className="text-[color:var(--text-muted)]">
                  {profile.jacketSize}
                </dd>
              </div>
              <div>
                <dt className="font-bold">Numero scarpe</dt>
                <dd className="text-[color:var(--text-muted)]">
                  {profile.shoesSize}
                </dd>
              </div>
            </dl>

            <h3 className="mt-8 text-lg font-bold">Competenze</h3>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {profile.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-xl border border-white/30 bg-white/20 px-3 py-2 text-sm dark:border-white/10 dark:bg-petrol-800/80 dark:text-white"
                >
                  {skill}
                </li>
              ))}
            </ul>

            <h3 className="mt-8 text-lg font-bold">Interessi artistici</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {profile.interests.map((interest) => (
                <span
                  key={interest}
                  className="rounded-full border border-white/35 bg-gradient-to-r from-peach-100/70 to-white/40 px-3 py-1 text-xs font-semibold text-[color:var(--text-muted)] dark:border-white/10 dark:bg-petrol-800/80 dark:text-white"
                >
                  {interest}
                </span>
              ))}
            </div>
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
