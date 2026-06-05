import { useEffect, useState } from "react";
import { Moon, Sun, Zap, Minus, Palette } from "lucide-react";

const THEMES = [
  { id: "dark", label: "Dark", icon: Moon },
  { id: "light", label: "Light", icon: Sun },
  { id: "neon", label: "Neon", icon: Zap },
  { id: "minimal", label: "Minimal", icon: Minus },
] as const;

type ThemeId = (typeof THEMES)[number]["id"];

const STORAGE_KEY = "portfolio-theme";

function applyTheme(theme: ThemeId) {
  const root = document.documentElement;
  root.setAttribute("data-theme", theme);
}

export function ThemeSwitcher() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<ThemeId>("dark");

  useEffect(() => {
    const saved = (localStorage.getItem(STORAGE_KEY) as ThemeId | null) ?? "dark";
    setTheme(saved);
    applyTheme(saved);
  }, []);

  const choose = (id: ThemeId) => {
    setTheme(id);
    applyTheme(id);
    localStorage.setItem(STORAGE_KEY, id);
    setOpen(false);
  };

  return (
    <div className="fixed bottom-5 left-5 z-50 flex flex-col items-start gap-2">
      {open && (
        <div className="glass-strong rounded-2xl p-2 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] flex flex-col gap-1 animate-in fade-in slide-in-from-bottom-2 duration-200">
          {THEMES.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => choose(id)}
              className={`group inline-flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm font-medium transition hover:bg-white/10 ${
                theme === id ? "bg-white/10 text-foreground" : "text-muted-foreground"
              }`}
            >
              <Icon className="h-4 w-4" />
              {label}
            </button>
          ))}
        </div>
      )}
      <button
        aria-label="Change theme"
        onClick={() => setOpen((v) => !v)}
        className="glass-strong rounded-full h-12 w-12 grid place-items-center hover:bg-white/10 transition shadow-[0_8px_30px_-8px_var(--glow)] hover:scale-105"
      >
        <Palette className="h-5 w-5 text-primary" />
      </button>
    </div>
  );
}
