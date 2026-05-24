import { Helmet } from "react-helmet-async";
import { profile } from "../../data/content";
import { SectionIntro } from "../components/SectionIntro";

export default function ContactPage() {
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    profile.email,
  )}`;

  return (
    <>
      <Helmet>
        <title>{`Contatti | ${profile.stageName}`}</title>
      </Helmet>

      <section className="mx-auto w-full max-w-6xl px-4 pb-6 pt-6 sm:px-6 sm:pt-10">
        <SectionIntro
          eyebrow="Contatti"
          title="Contattami direttamente"
          description="Per casting, collaborazioni e richieste professionali."
        />

        <div className="grid gap-5 lg:grid-cols-[1fr,1.1fr]">
          <aside className="section-shell shadow-soft">
            <h2 className="title-display text-3xl font-semibold">
              Riferimenti
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <span className="font-bold">Email: </span>
                <a
                  className="underline decoration-dotted"
                  href={`mailto:${profile.email}`}
                >
                  {profile.email}
                </a>
              </li>
              <li>
                <span className="font-bold">Telefono: </span>
                <a
                  className="underline decoration-dotted"
                  href={`tel:${profile.phone.replace(/\s+/g, "")}`}
                >
                  {profile.phone}
                </a>
              </li>
              <li>
                <span className="font-bold">Citta: </span>
                {profile.city}
              </li>
            </ul>
          </aside>

          <article className="section-shell shadow-soft">
            <div className="grid gap-4">
              <div>
                <h3 className="text-lg font-bold">Invia una richiesta</h3>
                <p className="mt-2 text-sm text-[color:var(--text-muted)]">
                  Premi il pulsante per aprire Gmail con l'indirizzo gia
                  compilato, oppure usa il tuo client email preferito.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={gmailLink}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-petrol-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-petrol-700 dark:bg-peach-400 dark:text-black dark:hover:bg-peach-300"
                >
                  Apri Gmail
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="rounded-xl border border-white/40 bg-white/30 px-4 py-2 text-sm font-bold text-[color:var(--text-main)] transition hover:bg-white/50 dark:border-white/20 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
                >
                  Apri Email
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
