import { Helmet } from "react-helmet-async";
import { profile } from "../../data/content";
import { SectionIntro } from "../components/SectionIntro";

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>{`Contatti | ${profile.stageName}`}</title>
      </Helmet>

      <section className="mx-auto w-full max-w-6xl px-4 pb-6 pt-6 sm:px-6 sm:pt-10">
        <SectionIntro
          eyebrow="Contatti"
          title="Contattami direttamente"
          description="Per casting, collaborazioni e richieste professionali. Il form e pronto per Netlify Forms."
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
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              className="grid gap-4"
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />

              <label className="grid gap-1">
                <span className="text-sm font-semibold">Nome</span>
                <input
                  required
                  type="text"
                  name="name"
                  autoComplete="name"
                  className="rounded-xl border border-white/40 bg-white/60 px-3 py-2 text-sm text-black placeholder:text-slate-500"
                />
              </label>

              <label className="grid gap-1">
                <span className="text-sm font-semibold">Email</span>
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  className="rounded-xl border border-white/40 bg-white/60 px-3 py-2 text-sm text-black placeholder:text-slate-500"
                />
              </label>

              <label className="grid gap-1">
                <span className="text-sm font-semibold">Messaggio</span>
                <textarea
                  required
                  name="message"
                  rows={5}
                  className="rounded-xl border border-white/40 bg-white/60 px-3 py-2 text-sm text-black placeholder:text-slate-500"
                />
              </label>

              <button
                type="submit"
                className="rounded-xl bg-petrol-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-petrol-700"
              >
                Invia richiesta
              </button>
            </form>
          </article>
        </div>
      </section>
    </>
  );
}
