import { Section } from "./Section";
import { motion } from "framer-motion";

const groups = [
  {
    level: "Advanced",
    pct: 92,
    skills: [
      "Content Writing", "Interpersonal Skills", "Client Interaction",
      "Effective Communication", "Client Relationship Management",
      "Leadership", "Management", "Generative AI Tools", "Claude AI", "Teaching",
    ],
  },
  {
    level: "Intermediate",
    pct: 72,
    skills: [
      "Canva", "Python", "Adobe Photoshop", "Microsoft 365",
      "Social Media Management", "Marketing", "Presentation Design", "UI/UX Design",
    ],
  },
  {
    level: "Beginner",
    pct: 42,
    skills: ["Content Editing"],
  },
];

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="A toolkit that keeps evolving.">
      <div className="space-y-8">
        {groups.map((g) => (
          <div key={g.level} className="glass rounded-3xl p-7">
            <div className="flex items-baseline justify-between mb-4">
              <h3 className="text-xl font-semibold">{g.level}</h3>
              <span className="text-sm text-muted-foreground">{g.pct}%</span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${g.pct}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="h-full rounded-full bg-gradient-to-r from-primary to-accent shadow-[0_0_20px_var(--glow)]"
              />
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {g.skills.map((s) => (
                <span
                  key={s}
                  className="rounded-full glass px-3 py-1.5 text-xs hover:bg-white/10 transition"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
