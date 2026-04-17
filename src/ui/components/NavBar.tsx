import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { profile } from "../../data/content";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/galleria", label: "Foto" },
  { to: "/video", label: "Video" },
  { to: "/profilo", label: "Profilo" },
  { to: "/contatti", label: "Contatti" },
];

export function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 px-3 py-3 sm:px-6">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-2xl border border-white/30 bg-[color:var(--surface)] px-4 py-3 shadow-glass backdrop-blur">
        <Link to="/" className="group">
          <p className="title-display text-2xl font-semibold leading-none sm:text-3xl">
            {profile.stageName}
          </p>
          <p className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--text-muted)]">
            {profile.roleTagline}
          </p>
        </Link>

        <nav
          className="hidden items-center gap-5 md:flex"
          aria-label="Navigazione principale"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                [
                  "text-sm font-semibold tracking-wide transition",
                  isActive
                    ? "text-petrol-600 dark:text-petrol-300"
                    : "text-[color:var(--text-main)]",
                ].join(" ")
              }
            >
              {item.label}
            </NavLink>
          ))}
          <ThemeToggle />
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/40 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Chiudi menu" : "Apri menu"}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open ? (
        <div className="mx-auto mt-2 w-full max-w-6xl rounded-2xl border border-white/30 bg-[color:var(--surface)] p-4 shadow-soft md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  [
                    "rounded-xl px-3 py-2 text-sm font-semibold",
                    isActive
                      ? "bg-petrol-500/15 text-petrol-700 dark:text-petrol-200"
                      : "text-[color:var(--text-main)]",
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            ))}
            <ThemeToggle />
          </div>
        </div>
      ) : null}
    </header>
  );
}
