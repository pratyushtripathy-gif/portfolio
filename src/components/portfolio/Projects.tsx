import { Section } from "./Section";
import { motion } from "framer-motion";
import { Sprout, Coffee, Globe, User, FlaskConical, Rocket, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

const featured = {
  icon: Sprout,
  title: "Smart Farm",
  year: "2023 – 2025",
  desc: "A solar-powered smart farming solution built to solve real challenges faced by rural farmers — automated, connected, and AI-aware.",
  features: [
    "Smartphone-controlled system",
    "Arduino-based automation",
    "AI-powered trespasser detection",
    "Automated irrigation control",
    "Water level monitoring",
  ],
  wins: ["3x School-Level Wins", "1x Inter-School Win"],
  stack: ["Arduino", "Solar", "AI Vision", "IoT"],
};

const others = [
  { icon: Coffee, title: "Cafe Menu Design", year: "2024", desc: "Professional menu design for a local café, focused on branding and customer experience." },
  { icon: Globe, title: "SmartBrief Website", year: "2025", desc: "Designed and built a website for a local law professional." },
  { icon: User, title: "Portfolio Website", year: "2025", desc: "A personal portfolio showcasing projects, achievements and skills." },
  { icon: FlaskConical, title: "Independent Research", year: "Ongoing", desc: "Self-initiated research across analysis, innovation and knowledge development." },
  
  { icon: Rocket, title: "Startup Initiative", year: "2026", desc: "Co-developing a startup with a fellow student and exploring government funding.", tag: "In Development" },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Featured Projects"
      title="Built, shipped and showcased."
    >
      {/* Featured */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="relative glass-strong rounded-3xl p-8 md:p-12 overflow-hidden mb-8"
      >
        <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-accent/15 blur-3xl" />
        <div className="relative grid md:grid-cols-[1fr_auto] gap-8 items-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-primary to-accent grid place-items-center">
                <featured.icon className="h-6 w-6 text-background" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">{featured.year}</div>
                <h3 className="text-2xl md:text-3xl font-semibold">{featured.title}</h3>
              </div>
            </div>
            <p className="text-muted-foreground text-lg max-w-2xl">{featured.desc}</p>

            <div className="mt-6 grid sm:grid-cols-2 gap-2">
              {featured.features.map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_var(--glow)]" />
                  {f}
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {featured.stack.map((t) => (
                <span key={t} className="rounded-full glass px-3 py-1 text-xs">{t}</span>
              ))}
            </div>

            <Link
              to="/guides/ai-in-smart-farming"
              className="group/link mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:opacity-90 transition"
            >
              Read the AI in Smart Farming guide
              <ArrowRight className="h-4 w-4 group-hover/link:translate-x-0.5 transition" />
            </Link>
          </div>

          <div className="flex md:flex-col gap-3">
            {featured.wins.map((w) => (
              <div key={w} className="glass rounded-2xl px-4 py-3 text-sm font-medium whitespace-nowrap">
                🏆 {w}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {others.map(({ icon: Icon, title, year, desc, tag }) => (
          <div key={title} className="group glass rounded-3xl p-6 hover-lift flex flex-col">
            <div className="flex items-center justify-between">
              <div className="h-10 w-10 rounded-xl bg-accent/15 grid place-items-center">
                <Icon className="h-5 w-5 text-accent" />
              </div>
              <span className="text-xs text-muted-foreground">{year}</span>
            </div>
            <h3 className="mt-5 text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground flex-1">{desc}</p>
            {tag && (
              <span className="mt-4 inline-flex w-fit rounded-full bg-primary/15 text-primary px-2.5 py-1 text-[11px] font-medium">
                {tag}
              </span>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
