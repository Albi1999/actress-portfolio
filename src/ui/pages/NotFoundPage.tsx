import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className="mx-auto flex min-h-[55vh] w-full max-w-6xl items-center px-4 sm:px-6">
      <div className="section-shell mx-auto max-w-xl text-center shadow-soft">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-petrol-600 dark:text-petrol-300">
          Errore 404
        </p>
        <h1 className="title-display mt-2 text-4xl font-semibold">
          Pagina non trovata
        </h1>
        <p className="mt-3 text-sm text-[color:var(--text-muted)]">
          Il contenuto cercato non e disponibile. Torna alla home per continuare
          la navigazione.
        </p>
        <Link
          to="/"
          className="mt-5 inline-flex rounded-full bg-petrol-600 px-5 py-2 text-sm font-bold text-white"
        >
          Torna alla Home
        </Link>
      </div>
    </section>
  );
}
