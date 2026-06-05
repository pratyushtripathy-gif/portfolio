import { Section } from "./Section";
import { CalendarCheck, FlaskConical, Microscope, Code2 } from "lucide-react";

const items = [
  {
    icon: CalendarCheck,
    title: "Event Organizer",
    sub: "School Farewell • 2025",
    points: ["Event planning", "Team coordination", "Ticketing system development", "Logistics management"],
  },
  {
    icon: FlaskConical,
    title: "Science Research & Quiz Club",
    sub: "Active Member",
    points: ["Research participation", "Academic competitions", "Knowledge-sharing initiatives"],
  },
  {
    icon: Microscope,
    title: "Student Researcher",
    sub: "Independent",
    points: ["Independent research", "Project development", "Data collection & analysis"],
  },
  {
    icon: Code2,
    title: "Website Volunteer",
    sub: "Volunteer Web Developer",
    points: ["Built a website for a local law firm"],
  },
];

export function Leadership() {
  return (
    <Section id="leadership" eyebrow="Leadership & Experience" title="Leading, building, contributing.">
      <div className="grid md:grid-cols-2 gap-5">
        {items.map(({ icon: Icon, title, sub, points }) => (
          <div key={title} className="glass rounded-3xl p-6 hover-lift">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-10 w-10 rounded-xl bg-primary/15 grid place-items-center">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <div className="text-xs text-muted-foreground">{sub}</div>
              </div>
            </div>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              {points.map((p) => (
                <li key={p} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 rounded-full bg-accent shrink-0" />
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
