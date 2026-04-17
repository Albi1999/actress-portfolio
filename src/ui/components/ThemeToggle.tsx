import { MoonStar, SunMedium } from "lucide-react";
import { useTheme } from "../../theme/ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-10 items-center gap-2 rounded-full border border-white/40 px-4 text-sm font-semibold text-[color:var(--text-main)] transition hover:scale-[1.02] hover:bg-white/20"
      aria-label={theme === "dark" ? "Attiva tema chiaro" : "Attiva tema scuro"}
      title={theme === "dark" ? "Tema chiaro" : "Tema scuro"}
    >
      {theme === "dark" ? <SunMedium size={16} /> : <MoonStar size={16} />}
      <span>{theme === "dark" ? "Chiaro" : "Scuro"}</span>
    </button>
  );
}
