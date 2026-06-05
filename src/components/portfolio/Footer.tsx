import { Linkedin, Instagram, Mail } from "lucide-react";

const nav = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border mt-10">
      <div className="mx-auto max-w-6xl px-4 py-12 grid md:grid-cols-3 gap-8 items-start">
        <div>
          <div className="flex items-center gap-2 font-display font-semibold">
            <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_var(--glow)]" />
            Pratyush Tripathy
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            Learning, Creating, Innovating.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
          {nav.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition">{l.label}</a>
          ))}
        </nav>
        <div className="flex md:justify-end gap-3">
          <a aria-label="LinkedIn" href="https://www.linkedin.com/in/pratyush-tripathy-251111408" target="_blank" rel="noreferrer" className="glass rounded-full h-10 w-10 grid place-items-center hover:bg-white/10">
            <Linkedin className="h-4 w-4" />
          </a>
          <a aria-label="Instagram" href="https://instagram.com/_pratyushtripathy_" target="_blank" rel="noreferrer" className="glass rounded-full h-10 w-10 grid place-items-center hover:bg-white/10">
            <Instagram className="h-4 w-4" />
          </a>
          <a aria-label="Email" href="mailto:pratyushtripathy56@gmail.com" className="glass rounded-full h-10 w-10 grid place-items-center hover:bg-white/10">
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Pratyush Tripathy. All rights reserved.
      </div>
    </footer>
  );
}
