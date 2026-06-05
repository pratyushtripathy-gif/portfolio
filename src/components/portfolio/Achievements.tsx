import { Section } from "./Section";
import { Beaker, Crown, Users, Lightbulb } from "lucide-react";

const items = [
  {
    icon: Beaker,
    title: "Science Research Excellence",
    points: [
      "3x winner of school science research & model-making competitions",
      "Represented school at state-level inter-school competition",
      "Won state-level science competition",
    ],
  },
  {
    icon: Crown,
    title: "Chess Achievements",
    points: [
      "4x inter-school chess champion",
      "2x state-level inter-school chess winner",
    ],
  },
  {
    icon: Users,
    title: "Leadership",
    points: [
      "Main organizer of school farewell event",
      "Designed & implemented a QR-based ticketing system",
    ],
  },
  {
    icon: Lightbulb,
    title: "Research & Innovation",
    points: [
      "Independent research contributor",
      "Student entrepreneur building a startup",
    ],
  },
];

export function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="Achievements"
      title="A track record built on curiosity."
    >
      <div className="grid md:grid-cols-2 gap-5">
        {items.map(({ icon: Icon, title, points }) => (
          <div
            key={title}
            className="group relative glass rounded-3xl p-7 hover-lift overflow-hidden"
          >
            <div className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-primary/30 via-transparent to-accent/20 -z-10" />
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-xl bg-primary/15 grid place-items-center">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">{title}</h3>
            </div>
            <ul className="space-y-2 text-muted-foreground text-sm">
              {points.map((p) => (
                <li key={p} className="flex gap-2">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-primary shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
