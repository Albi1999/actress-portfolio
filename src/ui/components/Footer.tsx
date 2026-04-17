import { profile } from "../../data/content";

export function Footer() {
  return (
    <footer className="mx-auto mt-10 w-full max-w-6xl px-4 pb-10 sm:px-6">
      <div className="rounded-3xl border border-white/30 bg-[color:var(--surface)] px-5 py-6 shadow-soft sm:px-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="title-display text-2xl font-semibold">
              {profile.stageName}
            </p>
            <p className="text-sm text-[color:var(--text-muted)]">
              {profile.roleTagline}
            </p>
          </div>
          <div className="text-sm text-[color:var(--text-muted)]">
            <p>{profile.city}</p>
            <a
              className="underline decoration-dotted"
              href={`mailto:${profile.email}`}
            >
              {profile.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
